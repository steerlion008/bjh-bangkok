import { NextRequest, NextResponse } from "next/server";
import { query } from "@/db";
import {
  ProductionTask,
  TaskStatus,
  TaskPriority,
  MediaType,
} from "@/types/production-calendar";
import { v4 as uuidv4 } from "uuid";

// GET - Fetch all tasks or filter by date range
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const startDate = searchParams.get("startDate");
    const endDate = searchParams.get("endDate");
    const status = searchParams.get("status");
    const priority = searchParams.get("priority");
    const mediaType = searchParams.get("mediaType");
    const assignedTo = searchParams.get("assignedTo");
    const search = searchParams.get("search");

    let sqlQuery = `
      SELECT * FROM production_tasks 
      WHERE 1=1
    `;
    const params: any[] = [];
    let paramIndex = 1;

    if (startDate) {
      sqlQuery += ` AND start_date >= $${paramIndex}`;
      params.push(startDate);
      paramIndex++;
    }

    if (endDate) {
      sqlQuery += ` AND due_date <= $${paramIndex}`;
      params.push(endDate);
      paramIndex++;
    }

    if (status) {
      sqlQuery += ` AND status = $${paramIndex}`;
      params.push(status);
      paramIndex++;
    }

    if (priority) {
      sqlQuery += ` AND priority = $${paramIndex}`;
      params.push(priority);
      paramIndex++;
    }

    if (mediaType) {
      sqlQuery += ` AND media_type = $${paramIndex}`;
      params.push(mediaType);
      paramIndex++;
    }

    if (assignedTo) {
      sqlQuery += ` AND $${paramIndex} = ANY(assigned_to)`;
      params.push(assignedTo);
      paramIndex++;
    }

    if (search) {
      sqlQuery += ` AND (title ILIKE $${paramIndex} OR description ILIKE $${paramIndex} OR clip_name ILIKE $${paramIndex})`;
      params.push(`%${search}%`);
      paramIndex++;
    }

    sqlQuery += ` ORDER BY due_date ASC, priority DESC`;

    const result = await query(sqlQuery, params);

    // Transform snake_case to camelCase
    const tasks: ProductionTask[] = result.rows.map((row: any) => ({
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
    }));

    return NextResponse.json({
      success: true,
      data: tasks,
      count: tasks.length,
    });
  } catch (error) {
    console.error("Error fetching production tasks:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch production tasks" },
      { status: 500 }
    );
  }
}

// POST - Create a new task
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      title,
      description,
      status = "not-started",
      priority = "medium",
      mediaType = "video",
      startDate,
      dueDate,
      assignedTo = [],
      createdBy = "system",
      clipName,
      duration,
      resolution,
      outputFormat,
      tags = [],
      notes,
    } = body;

    if (!title || !startDate || !dueDate) {
      return NextResponse.json(
        {
          success: false,
          error: "Title, start date, and due date are required",
        },
        { status: 400 }
      );
    }

    const id = uuidv4();
    const now = new Date().toISOString();

    const result = await query(
      `INSERT INTO production_tasks (
        id, title, description, status, priority, media_type,
        start_date, due_date, assigned_to, created_by, progress,
        clip_name, duration, resolution, output_format, tags, notes,
        created_at, updated_at
      ) VALUES (
        $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19
      ) RETURNING *`,
      [
        id,
        title,
        description,
        status,
        priority,
        mediaType,
        startDate,
        dueDate,
        assignedTo,
        createdBy,
        0,
        clipName,
        duration,
        resolution,
        outputFormat,
        tags,
        notes,
        now,
        now,
      ]
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
      assignedTo: row.assigned_to || [],
      createdBy: row.created_by,
      progress: row.progress || 0,
      clipName: row.clip_name,
      duration: row.duration,
      resolution: row.resolution,
      outputFormat: row.output_format,
      tags: row.tags || [],
      notes: row.notes,
      createdAt: row.created_at,
      updatedAt: row.updated_at,
    };

    return NextResponse.json({
      success: true,
      data: task,
      message: "Task created successfully",
    });
  } catch (error) {
    console.error("Error creating production task:", error);
    return NextResponse.json(
      { success: false, error: "Failed to create production task" },
      { status: 500 }
    );
  }
}
