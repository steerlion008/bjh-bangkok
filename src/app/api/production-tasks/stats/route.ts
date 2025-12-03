import { NextRequest, NextResponse } from "next/server";
import { query } from "@/db";
import { ProductionStats } from "@/types/production-calendar";

// GET - Fetch production statistics
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const startDate = searchParams.get("startDate");
    const endDate = searchParams.get("endDate");

    let dateFilter = "";
    const params: any[] = [];

    if (startDate && endDate) {
      dateFilter = "WHERE start_date >= $1 AND due_date <= $2";
      params.push(startDate, endDate);
    } else if (startDate) {
      dateFilter = "WHERE start_date >= $1";
      params.push(startDate);
    } else if (endDate) {
      dateFilter = "WHERE due_date <= $1";
      params.push(endDate);
    }

    // Get counts by status
    const statusCountsQuery = `
      SELECT 
        status,
        COUNT(*) as count
      FROM production_tasks
      ${dateFilter}
      GROUP BY status
    `;
    const statusResult = await query(statusCountsQuery, params);

    // Initialize counts
    let totalTasks = 0;
    let completedTasks = 0;
    let inProgressTasks = 0;
    let pendingTasks = 0;
    let onHoldTasks = 0;
    let cancelledTasks = 0;

    statusResult.rows.forEach((row: any) => {
      const count = parseInt(row.count);
      totalTasks += count;
      switch (row.status) {
        case "completed":
          completedTasks = count;
          break;
        case "in-progress":
          inProgressTasks = count;
          break;
        case "not-started":
          pendingTasks = count;
          break;
        case "on-hold":
          onHoldTasks = count;
          break;
        case "cancelled":
          cancelledTasks = count;
          break;
      }
    });

    // Get overdue tasks count
    const today = new Date().toISOString().split("T")[0];
    const overdueQuery = `
      SELECT COUNT(*) as count 
      FROM production_tasks 
      WHERE due_date < $1 AND status NOT IN ('completed', 'cancelled')
      ${dateFilter ? "AND " + dateFilter.replace("WHERE ", "") : ""}
    `;
    const overdueResult = await query(overdueQuery, [today, ...params]);
    const overdueTasks = parseInt(overdueResult.rows[0]?.count || 0);

    // Get due today tasks count
    const dueTodayQuery = `
      SELECT COUNT(*) as count 
      FROM production_tasks 
      WHERE due_date = $1 AND status NOT IN ('completed', 'cancelled')
    `;
    const dueTodayResult = await query(dueTodayQuery, [today]);
    const dueTodayTasks = parseInt(dueTodayResult.rows[0]?.count || 0);

    // Get due this week tasks count
    const nextWeek = new Date();
    nextWeek.setDate(nextWeek.getDate() + 7);
    const dueThisWeekQuery = `
      SELECT COUNT(*) as count 
      FROM production_tasks 
      WHERE due_date BETWEEN $1 AND $2 AND status NOT IN ('completed', 'cancelled')
    `;
    const dueThisWeekResult = await query(dueThisWeekQuery, [
      today,
      nextWeek.toISOString().split("T")[0],
    ]);
    const dueThisWeekTasks = parseInt(dueThisWeekResult.rows[0]?.count || 0);

    // Calculate completion rate
    const completionRate =
      totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;

    // Calculate average completion time (for completed tasks with check-in/out times)
    const avgTimeQuery = `
      SELECT AVG(EXTRACT(EPOCH FROM (check_out_time::timestamp - check_in_time::timestamp)) / 3600) as avg_hours
      FROM production_tasks
      WHERE status = 'completed' 
        AND check_in_time IS NOT NULL 
        AND check_out_time IS NOT NULL
      ${dateFilter ? "AND " + dateFilter.replace("WHERE ", "") : ""}
    `;
    const avgTimeResult = await query(avgTimeQuery, params);
    const averageCompletionTime = avgTimeResult.rows[0]?.avg_hours
      ? Math.round(parseFloat(avgTimeResult.rows[0].avg_hours) * 10) / 10
      : undefined;

    const stats: ProductionStats = {
      totalTasks,
      completedTasks,
      inProgressTasks,
      pendingTasks,
      onHoldTasks,
      cancelledTasks,
      completionRate,
      averageCompletionTime,
      overdueTasks,
      dueTodayTasks,
      dueThisWeekTasks,
    };

    return NextResponse.json({
      success: true,
      data: stats,
    });
  } catch (error) {
    console.error("Error fetching production stats:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch production statistics" },
      { status: 500 }
    );
  }
}
