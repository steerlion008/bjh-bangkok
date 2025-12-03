import { NextRequest, NextResponse } from "next/server";
import { query } from "@/db";
import { ProductionTask } from "@/types/production-calendar";

// GET - Fetch a single task by ID
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    const result = await query("SELECT * FROM production_tasks WHERE id = $1", [
      id,
    ]);

    if (result.rows.length === 0) {
      return NextResponse.json(
        { success: false, error: "Task not found" },
        { status: 404 }
      );
    }

    const row = result.rows[0];
    const task: ProductionTask = {
      id: row.id,
      title: row.title,
      description: row.description,
      status: row.status,
      priority: row.priority,
      mediaType: row.media_type,
      startDate: row.start_date,
      dueDate: row.due_date,
      completedDate: row.completed_date,
      assignedTo: row.assigned_to || [],
      createdBy: row.created_by,
      progress: row.progress || 0,
      checkInTime: row.check_in_time,
      checkOutTime: row.check_out_time,
      clipName: row.clip_name,
      duration: row.duration,
      resolution: row.resolution,
      fileSize: row.file_size,
      outputFormat: row.output_format,
      tags: row.tags || [],
      notes: row.notes,
      attachments: row.attachments || [],
      createdAt: row.created_at,
      updatedAt: row.updated_at,
    };

    return NextResponse.json({
      success: true,
      data: task,
    });
  } catch (error) {
    console.error("Error fetching production task:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch production task" },
      { status: 500 }
    );
  }
}

// PUT - Update a task
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();

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

    const {
      title,
      description,
      status,
      priority,
      mediaType,
      startDate,
      dueDate,
      completedDate,
      assignedTo,
      progress,
      checkInTime,
      checkOutTime,
      clipName,
      duration,
      resolution,
      fileSize,
      outputFormat,
      tags,
      notes,
      attachments,
    } = body;

    const now = new Date().toISOString();

    // Build dynamic update query
    const updates: string[] = [];
    const values: any[] = [];
    let paramIndex = 1;

    if (title !== undefined) {
      updates.push(`title = $${paramIndex}`);
      values.push(title);
      paramIndex++;
    }
    if (description !== undefined) {
      updates.push(`description = $${paramIndex}`);
      values.push(description);
      paramIndex++;
    }
    if (status !== undefined) {
      updates.push(`status = $${paramIndex}`);
      values.push(status);
      paramIndex++;

      // Auto-set completed_date when status changes to completed
      if (status === "completed") {
        updates.push(`completed_date = $${paramIndex}`);
        values.push(now);
        paramIndex++;
      }
    }
    if (priority !== undefined) {
      updates.push(`priority = $${paramIndex}`);
      values.push(priority);
      paramIndex++;
    }
    if (mediaType !== undefined) {
      updates.push(`media_type = $${paramIndex}`);
      values.push(mediaType);
      paramIndex++;
    }
    if (startDate !== undefined) {
      updates.push(`start_date = $${paramIndex}`);
      values.push(startDate);
      paramIndex++;
    }
    if (dueDate !== undefined) {
      updates.push(`due_date = $${paramIndex}`);
      values.push(dueDate);
      paramIndex++;
    }
    if (completedDate !== undefined) {
      updates.push(`completed_date = $${paramIndex}`);
      values.push(completedDate);
      paramIndex++;
    }
    if (assignedTo !== undefined) {
      updates.push(`assigned_to = $${paramIndex}`);
      values.push(assignedTo);
      paramIndex++;
    }
    if (progress !== undefined) {
      updates.push(`progress = $${paramIndex}`);
      values.push(progress);
      paramIndex++;
    }
    if (checkInTime !== undefined) {
      updates.push(`check_in_time = $${paramIndex}`);
      values.push(checkInTime);
      paramIndex++;
    }
    if (checkOutTime !== undefined) {
      updates.push(`check_out_time = $${paramIndex}`);
      values.push(checkOutTime);
      paramIndex++;
    }
    if (clipName !== undefined) {
      updates.push(`clip_name = $${paramIndex}`);
      values.push(clipName);
      paramIndex++;
    }
    if (duration !== undefined) {
      updates.push(`duration = $${paramIndex}`);
      values.push(duration);
      paramIndex++;
    }
    if (resolution !== undefined) {
      updates.push(`resolution = $${paramIndex}`);
      values.push(resolution);
      paramIndex++;
    }
    if (fileSize !== undefined) {
      updates.push(`file_size = $${paramIndex}`);
      values.push(fileSize);
      paramIndex++;
    }
    if (outputFormat !== undefined) {
      updates.push(`output_format = $${paramIndex}`);
      values.push(outputFormat);
      paramIndex++;
    }
    if (tags !== undefined) {
      updates.push(`tags = $${paramIndex}`);
      values.push(tags);
      paramIndex++;
    }
    if (notes !== undefined) {
      updates.push(`notes = $${paramIndex}`);
      values.push(notes);
      paramIndex++;
    }
    if (attachments !== undefined) {
      updates.push(`attachments = $${paramIndex}`);
      values.push(attachments);
      paramIndex++;
    }

    // Always update updated_at
    updates.push(`updated_at = $${paramIndex}`);
    values.push(now);
    paramIndex++;

    // Add id to values
    values.push(id);

    const result = await query(
      `UPDATE production_tasks SET ${updates.join(
        ", "
      )} WHERE id = $${paramIndex} RETURNING *`,
      values
    );

    const row = result.rows[0];
    const task: ProductionTask = {
      id: row.id,
      title: row.title,
      description: row.description,
      status: row.status,
      priority: row.priority,
      mediaType: row.media_type,
      startDate: row.start_date,
      dueDate: row.due_date,
      completedDate: row.completed_date,
      assignedTo: row.assigned_to || [],
      createdBy: row.created_by,
      progress: row.progress || 0,
      checkInTime: row.check_in_time,
      checkOutTime: row.check_out_time,
      clipName: row.clip_name,
      duration: row.duration,
      resolution: row.resolution,
      fileSize: row.file_size,
      outputFormat: row.output_format,
      tags: row.tags || [],
      notes: row.notes,
      attachments: row.attachments || [],
      createdAt: row.created_at,
      updatedAt: row.updated_at,
    };

    return NextResponse.json({
      success: true,
      data: task,
      message: "Task updated successfully",
    });
  } catch (error) {
    console.error("Error updating production task:", error);
    return NextResponse.json(
      { success: false, error: "Failed to update production task" },
      { status: 500 }
    );
  }
}

// DELETE - Delete a task
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    const result = await query(
      "DELETE FROM production_tasks WHERE id = $1 RETURNING id",
      [id]
    );

    if (result.rows.length === 0) {
      return NextResponse.json(
        { success: false, error: "Task not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Task deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting production task:", error);
    return NextResponse.json(
      { success: false, error: "Failed to delete production task" },
      { status: 500 }
    );
  }
}
