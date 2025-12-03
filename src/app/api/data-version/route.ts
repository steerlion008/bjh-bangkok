import { NextRequest, NextResponse } from "next/server";
import pool from "@/lib/db";

// In-memory cache for version check
let lastVersionCheck: {
  surgerySchedule: { count: number; maxId: number; timestamp: number };
  nClinic: { count: number; maxId: number; timestamp: number };
  revenueFuture: { count: number; maxId: number; timestamp: number };
  surgeryActual: { count: number; maxId: number; timestamp: number };
} | null = null;

/**
 * GET /api/data-version
 * Check if data has been updated by comparing row counts and max IDs
 * This is a lightweight check to avoid fetching full data every time
 */
export async function GET(request: NextRequest) {
  try {
    const client = await pool.connect();

    try {
      // Check bjh_all_leads (surgery schedule)
      const surgeryScheduleResult = await client.query(`
        SELECT COUNT(*)::int as count, COALESCE(MAX(id), 0)::int as max_id
        FROM postgres."BJH-Server".bjh_all_leads
        WHERE booked_surgery_date IS NOT NULL
      `);

      // Check n_income (N_Clinic data)
      const nClinicResult = await client.query(`
        SELECT COUNT(*)::int as count, COALESCE(MAX(id), 0)::int as max_id
        FROM postgres."BJH-Server".n_income
        WHERE income_date IS NOT NULL
      `);

      // Check bjh_all_leads for future revenue (surgery_date >= today)
      const revenueFutureResult = await client.query(`
        SELECT COUNT(*)::int as count, COALESCE(MAX(id), 0)::int as max_id
        FROM postgres."BJH-Server".bjh_all_leads
        WHERE surgery_date IS NOT NULL
      `);

      // Check surgery actual (assuming same table with different filter)
      const surgeryActualResult = await client.query(`
        SELECT COUNT(*)::int as count, COALESCE(MAX(id), 0)::int as max_id
        FROM postgres."BJH-Server".bjh_all_leads
        WHERE surgery_date IS NOT NULL
      `);

      const currentVersion = {
        surgerySchedule: {
          count: surgeryScheduleResult.rows[0]?.count || 0,
          maxId: surgeryScheduleResult.rows[0]?.max_id || 0,
          timestamp: Date.now(),
        },
        nClinic: {
          count: nClinicResult.rows[0]?.count || 0,
          maxId: nClinicResult.rows[0]?.max_id || 0,
          timestamp: Date.now(),
        },
        revenueFuture: {
          count: revenueFutureResult.rows[0]?.count || 0,
          maxId: revenueFutureResult.rows[0]?.max_id || 0,
          timestamp: Date.now(),
        },
        surgeryActual: {
          count: surgeryActualResult.rows[0]?.count || 0,
          maxId: surgeryActualResult.rows[0]?.max_id || 0,
          timestamp: Date.now(),
        },
      };

      // Check if data has changed
      let hasChanges = false;
      const changes: string[] = [];

      if (lastVersionCheck) {
        if (
          currentVersion.surgerySchedule.count !== lastVersionCheck.surgerySchedule.count ||
          currentVersion.surgerySchedule.maxId !== lastVersionCheck.surgerySchedule.maxId
        ) {
          hasChanges = true;
          changes.push("surgerySchedule");
        }
        if (
          currentVersion.nClinic.count !== lastVersionCheck.nClinic.count ||
          currentVersion.nClinic.maxId !== lastVersionCheck.nClinic.maxId
        ) {
          hasChanges = true;
          changes.push("nClinic");
        }
        if (
          currentVersion.revenueFuture.count !== lastVersionCheck.revenueFuture.count ||
          currentVersion.revenueFuture.maxId !== lastVersionCheck.revenueFuture.maxId
        ) {
          hasChanges = true;
          changes.push("revenueFuture");
        }
        if (
          currentVersion.surgeryActual.count !== lastVersionCheck.surgeryActual.count ||
          currentVersion.surgeryActual.maxId !== lastVersionCheck.surgeryActual.maxId
        ) {
          hasChanges = true;
          changes.push("surgeryActual");
        }
      } else {
        // First check - consider as changed to trigger initial load
        hasChanges = true;
        changes.push("initial");
      }

      // Update last version check
      lastVersionCheck = currentVersion;

      return NextResponse.json(
        {
          success: true,
          hasChanges,
          changes,
          version: currentVersion,
          checkedAt: new Date().toISOString(),
        },
        {
          status: 200,
          headers: {
            "Cache-Control": "no-cache, no-store, must-revalidate",
          },
        }
      );
    } finally {
      client.release();
    }
  } catch (error: any) {
    console.error("Error checking data version:", error);
    return NextResponse.json(
      {
        success: false,
        error: error.message,
        hasChanges: true, // On error, assume changes to be safe
        changes: ["error"],
      },
      { status: 500 }
    );
  }
}
