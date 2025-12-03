import { NextRequest, NextResponse } from "next/server";
import { query } from "@/db";

// POST - Check-in or Check-out for a task
export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();
    const { action, userId = "system", notes } = body;

    if (!action || !["check-in", "check-out"].includes(action)) {
      return NextResponse.json(
        {
          success: false,
          error: 'Invalid action. Must be "check-in" or "check-out"',
        },
        { status: 400 }
      );
    }

    // Check if task exists
    const existingResult = await query(
      "SELECT * FROM production_tasks WHERE id = $1",
      [id]
    );

    if (existingResult.rows.length === 0) {
      return NextResponse.json(
        { success: false, error: "Task not found" },
        { status: 404 }
      );
    }

    const now = new Date().toISOString();
    let updateQuery: string;
    let updateParams: any[];

    if (action === "check-in") {
      // Check-in: Set check_in_time and update status to in-progress
      updateQuery = `
        UPDATE production_tasks 
        SET check_in_time = $1, 
            status = 'in-progress',
            updated_at = $1
        WHERE id = $2 
        RETURNING *
      `;
      updateParams = [now, id];
    } else {
      // Check-out: Set check_out_time
      updateQuery = `
        UPDATE production_tasks 
        SET check_out_time = $1,
            updated_at = $1
        WHERE id = $2 
        RETURNING *
      `;
      updateParams = [now, id];
    }

    const result = await query(updateQuery, updateParams);
    const row = result.rows[0];

    // Log the check-in/check-out record
    await query(
      `INSERT INTO production_check_logs (task_id, user_id, action, timestamp, notes)
       VALUES ($1, $2, $3, $4, $5)`,
      [id, userId, action, now, notes || null]
    );

    return NextResponse.json({
      success: true,
      data: {
        id: row.id,
        title: row.title,
        status: row.status,
        checkInTime: row.check_in_time,
        checkOutTime: row.check_out_time,
        updatedAt: row.updated_at,
      },
      message: `${
        action === "check-in" ? "Checked in" : "Checked out"
      } successfully`,
    });
  } catch (error) {
    console.error("Error processing check-in/out:", error);
    return NextResponse.json(
      { success: false, error: "Failed to process check-in/out" },
      { status: 500 }
    );
  }
}
