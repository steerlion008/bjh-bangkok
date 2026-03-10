"use client";

import React, { useState, useEffect, useCallback, useMemo } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  Calendar,
  CalendarDays,
  RefreshCw,
  Filter,
  Search,
  Video,
  Clock,
  CheckCircle2,
  Plus,
  Settings,
  Download,
  List,
  Grid3X3,
  LogIn,
  LogOut,
} from "lucide-react";
import {
  ProductionTask,
  ProductionStats,
  TaskFormData,
  ViewMode,
  TaskStatus,
  MediaType,
  STATUS_CONFIG,
  MEDIA_TYPE_CONFIG,
} from "@/types/production-calendar";
import DayView from "./components/DayView";
import MonthView from "./components/MonthView";
import TaskModal from "./components/TaskModal";
import StatsCards from "./components/StatsCards";
import {
  format,
  startOfMonth,
  endOfMonth,
  startOfDay,
  endOfDay,
} from "date-fns";
import { th } from "date-fns/locale";
import "./production-calendar.css";

const ProductionCalendarPage: React.FC = () => {
  const router = useRouter();

  // State
  const [viewMode, setViewMode] = useState<ViewMode>("month");
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [tasks, setTasks] = useState<ProductionTask[]>([]);
  const [stats, setStats] = useState<ProductionStats | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);

  // Modal state
  const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState<ProductionTask | null>(null);
  const [modalMode, setModalMode] = useState<"create" | "edit" | "view">(
    "create"
  );
  const [modalInitialDate, setModalInitialDate] = useState<Date | undefined>();
  const [modalInitialHour, setModalInitialHour] = useState<
    number | undefined
  >();

  // Filter state
  const [showFilters, setShowFilters] = useState(false);
  const [filterStatus, setFilterStatus] = useState<TaskStatus[]>([]);
  const [filterMediaType, setFilterMediaType] = useState<MediaType[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  // Fetch tasks for current view
  const fetchTasks = useCallback(async () => {
    try {
      setIsLoading(true);

      let startDate: string;
      let endDate: string;

      if (viewMode === "month") {
        startDate = format(startOfMonth(selectedDate), "yyyy-MM-dd");
        endDate = format(endOfMonth(selectedDate), "yyyy-MM-dd");
      } else {
        startDate = format(startOfDay(selectedDate), "yyyy-MM-dd");
        endDate = format(endOfDay(selectedDate), "yyyy-MM-dd");
      }

      const params = new URLSearchParams({
        startDate,
        endDate,
      });

      if (filterStatus.length > 0) {
        params.append("status", filterStatus.join(","));
      }
      if (filterMediaType.length > 0) {
        params.append("mediaType", filterMediaType.join(","));
      }
      if (searchQuery) {
        params.append("search", searchQuery);
      }

      const response = await fetch(
        `/api/production-tasks?${params.toString()}`
      );
      const result = await response.json();

      if (result.success) {
        setTasks(result.data);
      } else {
        console.error("Failed to fetch tasks:", result.error);
        // Use mock data if API fails
        setTasks(getMockTasks());
      }
    } catch (error) {
      console.error("Error fetching tasks:", error);
      // Use mock data on error
      setTasks(getMockTasks());
    } finally {
      setIsLoading(false);
    }
  }, [viewMode, selectedDate, filterStatus, filterMediaType, searchQuery]);

  // Fetch stats
  const fetchStats = useCallback(async () => {
    try {
      const startDate = format(startOfMonth(selectedDate), "yyyy-MM-dd");
      const endDate = format(endOfMonth(selectedDate), "yyyy-MM-dd");

      const response = await fetch(
        `/api/production-tasks/stats?startDate=${startDate}&endDate=${endDate}`
      );
      const result = await response.json();

      if (result.success) {
        setStats(result.data);
      } else {
        // Use mock stats
        setStats(getMockStats());
      }
    } catch (error) {
      console.error("Error fetching stats:", error);
      setStats(getMockStats());
    }
  }, [selectedDate]);

  // Initial load
  useEffect(() => {
    fetchTasks();
    fetchStats();
  }, [fetchTasks, fetchStats]);

  // Refresh handler
  const handleRefresh = async () => {
    setIsRefreshing(true);
    await Promise.all([fetchTasks(), fetchStats()]);
    setIsRefreshing(false);
  };

  // Task handlers
  const handleTaskClick = (task: ProductionTask) => {
    setSelectedTask(task);
    setModalMode("view");
    setIsTaskModalOpen(true);
  };

  const handleAddTask = (date: Date, hour?: number) => {
    setSelectedTask(null);
    setModalMode("create");
    setModalInitialDate(date);
    setModalInitialHour(hour);
    setIsTaskModalOpen(true);
  };

  const handleEditTask = (task: ProductionTask) => {
    setSelectedTask(task);
    setModalMode("edit");
    setIsTaskModalOpen(true);
  };

  const handleSaveTask = async (data: TaskFormData) => {
    try {
      const url = selectedTask
        ? `/api/production-tasks/${selectedTask.id}`
        : "/api/production-tasks";
      const method = selectedTask ? "PUT" : "POST";

      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        await fetchTasks();
        await fetchStats();
      } else {
        throw new Error(result.error);
      }
    } catch (error) {
      console.error("Error saving task:", error);
      throw error;
    }
  };

  const handleDeleteTask = async (taskId: string) => {
    try {
      const response = await fetch(`/api/production-tasks/${taskId}`, {
        method: "DELETE",
      });

      const result = await response.json();

      if (result.success) {
        await fetchTasks();
        await fetchStats();
      } else {
        throw new Error(result.error);
      }
    } catch (error) {
      console.error("Error deleting task:", error);
      throw error;
    }
  };

  const handleCheckInOut = async (
    taskId: string,
    action: "check-in" | "check-out"
  ) => {
    try {
      const response = await fetch(`/api/production-tasks/${taskId}/check`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action }),
      });

      const result = await response.json();

      if (result.success) {
        await fetchTasks();
      }
    } catch (error) {
      console.error("Error check-in/out:", error);
    }
  };

  // Day click handler (for month view)
  const handleDayClick = (date: Date) => {
    setSelectedDate(date);
    setViewMode("day");
  };

  // Filter toggle for status
  const toggleStatusFilter = (status: TaskStatus) => {
    setFilterStatus((prev) =>
      prev.includes(status)
        ? prev.filter((s) => s !== status)
        : [...prev, status]
    );
  };

  // Filter toggle for media type
  const toggleMediaTypeFilter = (mediaType: MediaType) => {
    setFilterMediaType((prev) =>
      prev.includes(mediaType)
        ? prev.filter((m) => m !== mediaType)
        : [...prev, mediaType]
    );
  };

  // Clear all filters
  const clearFilters = () => {
    setFilterStatus([]);
    setFilterMediaType([]);
    setSearchQuery("");
  };

  // Filtered tasks
  const filteredTasks = useMemo(() => {
    let filtered = [...tasks];

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (task) =>
          task.title.toLowerCase().includes(query) ||
          task.description?.toLowerCase().includes(query) ||
          task.clipName?.toLowerCase().includes(query)
      );
    }

    return filtered;
  }, [tasks, searchQuery]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-pink-50">
      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-4"
        >
          <button
            onClick={() => router.push("/home")}
            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-lg transition-all shadow-md hover:shadow-lg font-medium text-sm"
          >
            <ChevronLeft className="w-5 h-5" />
            <span>กลับไปหน้าหลัก</span>
          </button>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6"
        >
          <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-500 rounded-2xl shadow-xl p-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 flex items-center gap-3">
                  <Video className="w-10 h-10" />
                  Production Calendar
                </h1>
                <p className="text-white/80">
                  ระบบจัดการตารางผลิตสื่อและวิดีโอคลิป | Media Production
                  Management
                </p>
              </div>
              <div className="flex items-center gap-3">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleRefresh}
                  disabled={isRefreshing}
                  className="p-3 bg-white/20 hover:bg-white/30 rounded-xl text-white transition-all"
                >
                  <RefreshCw
                    className={`w-5 h-5 ${isRefreshing ? "animate-spin" : ""}`}
                  />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleAddTask(selectedDate)}
                  className="flex items-center gap-2 px-5 py-3 bg-white text-purple-600 rounded-xl font-semibold hover:bg-purple-50 transition-all shadow-lg"
                >
                  <Plus className="w-5 h-5" />
                  สร้างงานใหม่
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-6"
        >
          <StatsCards stats={stats} isLoading={isLoading} />
        </motion.div>

        {/* Controls Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-xl shadow-lg p-4 mb-6"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            {/* View Mode Toggle */}
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-gray-600 mr-2">
                มุมมอง:
              </span>
              <div className="flex bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => setViewMode("day")}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    viewMode === "day"
                      ? "bg-white text-purple-600 shadow"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  <CalendarDays className="w-4 h-4" />
                  รายวัน
                </button>
                <button
                  onClick={() => setViewMode("month")}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    viewMode === "month"
                      ? "bg-white text-purple-600 shadow"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  <Calendar className="w-4 h-4" />
                  รายเดือน
                </button>
              </div>
            </div>

            {/* Search & Filter */}
            <div className="flex items-center gap-3">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="ค้นหางาน..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-200 focus:border-purple-500 w-64"
                />
              </div>

              {/* Filter Toggle */}
              <button
                onClick={() => setShowFilters(!showFilters)}
                className={`flex items-center gap-2 px-4 py-2 border-2 rounded-lg transition-all ${
                  showFilters ||
                  filterStatus.length > 0 ||
                  filterMediaType.length > 0
                    ? "border-purple-500 bg-purple-50 text-purple-600"
                    : "border-gray-200 text-gray-600 hover:border-gray-300"
                }`}
              >
                <Filter className="w-4 h-4" />
                ตัวกรอง
                {(filterStatus.length > 0 || filterMediaType.length > 0) && (
                  <span className="bg-purple-500 text-white text-xs px-2 py-0.5 rounded-full">
                    {filterStatus.length + filterMediaType.length}
                  </span>
                )}
              </button>
            </div>
          </div>

          {/* Filter Panel */}
          <AnimatePresence>
            {showFilters && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-4 pt-4 border-t border-gray-200"
              >
                <div className="flex flex-wrap gap-6">
                  {/* Status Filters */}
                  <div>
                    <p className="text-sm font-semibold text-gray-700 mb-2">
                      สถานะ
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {Object.entries(STATUS_CONFIG).map(([key, config]) => (
                        <button
                          key={key}
                          onClick={() => toggleStatusFilter(key as TaskStatus)}
                          className={`px-3 py-1 rounded-full text-sm transition-all ${
                            filterStatus.includes(key as TaskStatus)
                              ? `${config.bgColor} ${config.textColor} ring-2 ring-offset-1`
                              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                          }`}
                          style={
                            filterStatus.includes(key as TaskStatus)
                              ? { outlineColor: config.color }
                              : {}
                          }
                        >
                          {config.labelTh}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Media Type Filters */}
                  <div>
                    <p className="text-sm font-semibold text-gray-700 mb-2">
                      ประเภทสื่อ
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {Object.entries(MEDIA_TYPE_CONFIG).map(
                        ([key, config]) => (
                          <button
                            key={key}
                            onClick={() =>
                              toggleMediaTypeFilter(key as MediaType)
                            }
                            className={`px-3 py-1 rounded-full text-sm transition-all ${
                              filterMediaType.includes(key as MediaType)
                                ? `${config.bgColor} ring-2 ring-offset-1`
                                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                            }`}
                            style={{
                              color: filterMediaType.includes(key as MediaType)
                                ? config.color
                                : undefined,
                              outlineColor: filterMediaType.includes(
                                key as MediaType
                              )
                                ? config.color
                                : undefined,
                            }}
                          >
                            {config.labelTh}
                          </button>
                        )
                      )}
                    </div>
                  </div>

                  {/* Clear Filters */}
                  {(filterStatus.length > 0 || filterMediaType.length > 0) && (
                    <div className="flex items-end">
                      <button
                        onClick={clearFilters}
                        className="text-sm text-red-500 hover:text-red-600 underline"
                      >
                        ล้างตัวกรอง
                      </button>
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Calendar View */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          {viewMode === "day" ? (
            <DayView
              selectedDate={selectedDate}
              tasks={filteredTasks}
              onDateChange={setSelectedDate}
              onTaskClick={handleTaskClick}
              onAddTask={handleAddTask}
              isLoading={isLoading}
            />
          ) : (
            <MonthView
              selectedDate={selectedDate}
              tasks={filteredTasks}
              onDateChange={setSelectedDate}
              onDayClick={handleDayClick}
              onTaskClick={handleTaskClick}
              onAddTask={handleAddTask}
              isLoading={isLoading}
            />
          )}
        </motion.div>

        {/* Quick Actions Panel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-6 bg-white rounded-xl shadow-lg p-6"
        >
          <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Clock className="w-5 h-5 text-purple-600" />
            งานที่กำลังดำเนินการ
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredTasks
              .filter((task) => task.status === "in-progress")
              .slice(0, 6)
              .map((task) => {
                const statusConfig = STATUS_CONFIG[task.status];
                const mediaConfig = MEDIA_TYPE_CONFIG[task.mediaType];

                return (
                  <motion.div
                    key={task.id}
                    whileHover={{ scale: 1.02 }}
                    onClick={() => handleTaskClick(task)}
                    className="p-4 border-2 border-gray-200 rounded-xl hover:border-purple-300 hover:shadow-md transition-all cursor-pointer"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-semibold text-gray-900 line-clamp-1">
                        {task.title}
                      </h4>
                      <span
                        className={`text-xs px-2 py-0.5 rounded-full ${statusConfig.bgColor} ${statusConfig.textColor}`}
                      >
                        {statusConfig.labelTh}
                      </span>
                    </div>
                    {task.clipName && (
                      <p className="text-sm text-gray-600 mb-2 line-clamp-1">
                        {task.clipName}
                      </p>
                    )}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className={`p-1 rounded ${mediaConfig.bgColor}`}>
                          <Video
                            className="w-3 h-3"
                            style={{ color: mediaConfig.color }}
                          />
                        </span>
                        <span className="text-xs text-gray-500">
                          {mediaConfig.labelTh}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        {!task.checkInTime ? (
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleCheckInOut(task.id, "check-in");
                            }}
                            className="flex items-center gap-1 px-2 py-1 bg-green-100 text-green-600 rounded text-xs font-medium hover:bg-green-200 transition-colors"
                          >
                            <LogIn className="w-3 h-3" />
                            เช็คอิน
                          </button>
                        ) : !task.checkOutTime ? (
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleCheckInOut(task.id, "check-out");
                            }}
                            className="flex items-center gap-1 px-2 py-1 bg-red-100 text-red-600 rounded text-xs font-medium hover:bg-red-200 transition-colors"
                          >
                            <LogOut className="w-3 h-3" />
                            เช็คเอาท์
                          </button>
                        ) : (
                          <span className="flex items-center gap-1 text-xs text-gray-500">
                            <CheckCircle2 className="w-3 h-3 text-green-500" />
                            เสร็จสิ้น
                          </span>
                        )}
                      </div>
                    </div>
                    {/* Progress Bar */}
                    {task.progress > 0 && (
                      <div className="mt-3">
                        <div className="flex items-center justify-between text-xs text-gray-500 mb-1">
                          <span>ความคืบหน้า</span>
                          <span>{task.progress}%</span>
                        </div>
                        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div
                            className="h-full rounded-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all"
                            style={{ width: `${task.progress}%` }}
                          ></div>
                        </div>
                      </div>
                    )}
                  </motion.div>
                );
              })}
            {filteredTasks.filter((task) => task.status === "in-progress")
              .length === 0 && (
              <div className="col-span-full text-center py-8 text-gray-400">
                <Clock className="w-12 h-12 mx-auto mb-2 opacity-50" />
                <p>ไม่มีงานที่กำลังดำเนินการ</p>
              </div>
            )}
          </div>
        </motion.div>

        {/* Task Modal */}
        <TaskModal
          isOpen={isTaskModalOpen}
          task={selectedTask}
          initialDate={modalInitialDate}
          initialHour={modalInitialHour}
          onClose={() => {
            setIsTaskModalOpen(false);
            setSelectedTask(null);
            setModalInitialDate(undefined);
            setModalInitialHour(undefined);
          }}
          onSave={handleSaveTask}
          onDelete={handleDeleteTask}
          mode={modalMode}
        />
      </div>
    </div>
  );
};

// Mock data functions (for development/fallback)
function getMockTasks(): ProductionTask[] {
  const today = new Date();
  return [
    {
      id: "1",
      title: "วิดีโอโปรโมทบริการศัลยกรรม",
      description: "สร้างวิดีโอโปรโมทสำหรับบริการศัลยกรรมตา",
      status: "in-progress",
      priority: "high",
      mediaType: "video",
      startDate: format(today, "yyyy-MM-dd'T'09:00"),
      dueDate: format(today, "yyyy-MM-dd'T'17:00"),
      createdBy: "admin",
      progress: 60,
      clipName: "eye_surgery_promo_v1.mp4",
      duration: "00:02:30",
      resolution: "1920x1080",
      outputFormat: "MP4",
      tags: ["promo", "surgery", "eye"],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      id: "2",
      title: "รูปภาพสำหรับ Facebook Ads",
      description: "ออกแบบรูปภาพโฆษณาสำหรับ Facebook",
      status: "not-started",
      priority: "medium",
      mediaType: "image",
      startDate: format(
        new Date(today.getTime() + 86400000),
        "yyyy-MM-dd'T'10:00"
      ),
      dueDate: format(
        new Date(today.getTime() + 86400000),
        "yyyy-MM-dd'T'16:00"
      ),
      createdBy: "admin",
      progress: 0,
      tags: ["facebook", "ads"],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      id: "3",
      title: "Podcast สุขภาพดี",
      description: "บันทึกเสียง podcast ตอนใหม่",
      status: "completed",
      priority: "low",
      mediaType: "audio",
      startDate: format(
        new Date(today.getTime() - 86400000),
        "yyyy-MM-dd'T'14:00"
      ),
      dueDate: format(
        new Date(today.getTime() - 86400000),
        "yyyy-MM-dd'T'16:00"
      ),
      completedDate: format(
        new Date(today.getTime() - 86400000),
        "yyyy-MM-dd'T'15:30"
      ),
      createdBy: "admin",
      progress: 100,
      clipName: "health_podcast_ep5.mp3",
      duration: "00:45:00",
      tags: ["podcast", "health"],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
  ];
}

function getMockStats(): ProductionStats {
  return {
    totalTasks: 15,
    completedTasks: 5,
    inProgressTasks: 4,
    pendingTasks: 4,
    onHoldTasks: 1,
    cancelledTasks: 1,
    completionRate: 33,
    averageCompletionTime: 4.5,
    overdueTasks: 2,
    dueTodayTasks: 3,
    dueThisWeekTasks: 8,
  };
}

export default ProductionCalendarPage;
