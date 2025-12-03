// Production Calendar Types

export type TaskStatus =
  | "not-started"
  | "in-progress"
  | "completed"
  | "on-hold"
  | "cancelled";
export type TaskPriority = "low" | "medium" | "high" | "urgent";
export type MediaType = "video" | "image" | "audio" | "document" | "other";
export type ViewMode = "day" | "month";

export interface ProductionTask {
  id: string;
  title: string;
  description?: string;
  status: TaskStatus;
  priority: TaskPriority;
  mediaType: MediaType;

  // Dates
  startDate: string;
  dueDate: string;
  completedDate?: string;

  // Assignment
  assignedTo?: string[];
  createdBy: string;

  // Progress
  progress: number; // 0-100
  checkInTime?: string;
  checkOutTime?: string;

  // Media specific
  clipName?: string;
  duration?: string; // e.g., "00:02:30"
  resolution?: string; // e.g., "1920x1080"
  fileSize?: string;
  outputFormat?: string;

  // Metadata
  tags?: string[];
  notes?: string;
  attachments?: string[];

  // Timestamps
  createdAt: string;
  updatedAt: string;
}

export interface DaySchedule {
  date: string;
  tasks: ProductionTask[];
  totalTasks: number;
  completedTasks: number;
  inProgressTasks: number;
}

export interface MonthSchedule {
  year: number;
  month: number;
  days: DaySchedule[];
  summary: {
    totalTasks: number;
    completedTasks: number;
    inProgressTasks: number;
    pendingTasks: number;
    onHoldTasks: number;
  };
}

export interface TaskFormData {
  title: string;
  description?: string;
  status: TaskStatus;
  priority: TaskPriority;
  mediaType: MediaType;
  startDate: string;
  dueDate: string;
  assignedTo?: string[];
  clipName?: string;
  duration?: string;
  resolution?: string;
  outputFormat?: string;
  tags?: string[];
  notes?: string;
}

export interface TaskFilter {
  status?: TaskStatus[];
  priority?: TaskPriority[];
  mediaType?: MediaType[];
  assignedTo?: string[];
  dateRange?: {
    start: string;
    end: string;
  };
  searchQuery?: string;
}

export interface CheckInOutRecord {
  taskId: string;
  userId: string;
  action: "check-in" | "check-out";
  timestamp: string;
  notes?: string;
}

export interface ProductionStats {
  totalTasks: number;
  completedTasks: number;
  inProgressTasks: number;
  pendingTasks: number;
  onHoldTasks: number;
  cancelledTasks: number;
  completionRate: number;
  averageCompletionTime?: number; // in hours
  overdueTasks: number;
  dueTodayTasks: number;
  dueThisWeekTasks: number;
}

// Team member for assignment
export interface TeamMember {
  id: string;
  name: string;
  role: string;
  avatar?: string;
  email?: string;
}

// API Response types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

// Calendar event for display
export interface CalendarEvent {
  id: string;
  title: string;
  start: Date;
  end: Date;
  status: TaskStatus;
  priority: TaskPriority;
  mediaType: MediaType;
  progress: number;
  assignedTo?: string[];
}

// Status configuration for UI
export const STATUS_CONFIG: Record<
  TaskStatus,
  {
    label: string;
    labelTh: string;
    color: string;
    bgColor: string;
    textColor: string;
    borderColor: string;
  }
> = {
  "not-started": {
    label: "Not Started",
    labelTh: "ยังไม่เริ่ม",
    color: "#6b7280",
    bgColor: "bg-gray-100",
    textColor: "text-gray-600",
    borderColor: "border-gray-400",
  },
  "in-progress": {
    label: "In Progress",
    labelTh: "กำลังดำเนินการ",
    color: "#3b82f6",
    bgColor: "bg-blue-100",
    textColor: "text-blue-600",
    borderColor: "border-blue-400",
  },
  completed: {
    label: "Completed",
    labelTh: "เสร็จสิ้น",
    color: "#22c55e",
    bgColor: "bg-green-100",
    textColor: "text-green-600",
    borderColor: "border-green-400",
  },
  "on-hold": {
    label: "On Hold",
    labelTh: "ระงับชั่วคราว",
    color: "#f59e0b",
    bgColor: "bg-yellow-100",
    textColor: "text-yellow-600",
    borderColor: "border-yellow-400",
  },
  cancelled: {
    label: "Cancelled",
    labelTh: "ยกเลิก",
    color: "#ef4444",
    bgColor: "bg-red-100",
    textColor: "text-red-600",
    borderColor: "border-red-400",
  },
};

export const PRIORITY_CONFIG: Record<
  TaskPriority,
  {
    label: string;
    labelTh: string;
    color: string;
    bgColor: string;
    textColor: string;
  }
> = {
  low: {
    label: "Low",
    labelTh: "ต่ำ",
    color: "#6b7280",
    bgColor: "bg-gray-100",
    textColor: "text-gray-600",
  },
  medium: {
    label: "Medium",
    labelTh: "ปานกลาง",
    color: "#3b82f6",
    bgColor: "bg-blue-100",
    textColor: "text-blue-600",
  },
  high: {
    label: "High",
    labelTh: "สูง",
    color: "#f59e0b",
    bgColor: "bg-orange-100",
    textColor: "text-orange-600",
  },
  urgent: {
    label: "Urgent",
    labelTh: "เร่งด่วน",
    color: "#ef4444",
    bgColor: "bg-red-100",
    textColor: "text-red-600",
  },
};

export const MEDIA_TYPE_CONFIG: Record<
  MediaType,
  {
    label: string;
    labelTh: string;
    icon: string;
    color: string;
    bgColor: string;
  }
> = {
  video: {
    label: "Video",
    labelTh: "วิดีโอ",
    icon: "video",
    color: "#8b5cf6",
    bgColor: "bg-purple-100",
  },
  image: {
    label: "Image",
    labelTh: "รูปภาพ",
    icon: "image",
    color: "#ec4899",
    bgColor: "bg-pink-100",
  },
  audio: {
    label: "Audio",
    labelTh: "เสียง",
    icon: "music",
    color: "#06b6d4",
    bgColor: "bg-cyan-100",
  },
  document: {
    label: "Document",
    labelTh: "เอกสาร",
    icon: "file-text",
    color: "#64748b",
    bgColor: "bg-slate-100",
  },
  other: {
    label: "Other",
    labelTh: "อื่นๆ",
    icon: "folder",
    color: "#78716c",
    bgColor: "bg-stone-100",
  },
};
