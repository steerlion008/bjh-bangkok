"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Plus,
  Clock,
  CheckCircle2,
  AlertCircle,
  Video,
  Image,
  Music,
  FileText,
  Folder,
} from "lucide-react";
import {
  ProductionTask,
  STATUS_CONFIG,
  PRIORITY_CONFIG,
  MEDIA_TYPE_CONFIG,
  MediaType,
} from "@/types/production-calendar";
import { format, startOfDay, addHours, isSameHour, parseISO } from "date-fns";
import { th } from "date-fns/locale";

interface DayViewProps {
  selectedDate: Date;
  tasks: ProductionTask[];
  onDateChange: (date: Date) => void;
  onTaskClick: (task: ProductionTask) => void;
  onAddTask: (date: Date, hour?: number) => void;
  isLoading?: boolean;
}

const HOURS = Array.from({ length: 24 }, (_, i) => i);
const WORK_HOURS = Array.from({ length: 12 }, (_, i) => i + 8); // 8 AM to 8 PM

const getMediaIcon = (mediaType: MediaType) => {
  switch (mediaType) {
    case "video":
      return <Video className="w-4 h-4" />;
    case "image":
      return <Image className="w-4 h-4" />;
    case "audio":
      return <Music className="w-4 h-4" />;
    case "document":
      return <FileText className="w-4 h-4" />;
    default:
      return <Folder className="w-4 h-4" />;
  }
};

const DayView: React.FC<DayViewProps> = ({
  selectedDate,
  tasks,
  onDateChange,
  onTaskClick,
  onAddTask,
  isLoading = false,
}) => {
  const handlePrevDay = () => {
    const newDate = new Date(selectedDate);
    newDate.setDate(newDate.getDate() - 1);
    onDateChange(newDate);
  };

  const handleNextDay = () => {
    const newDate = new Date(selectedDate);
    newDate.setDate(newDate.getDate() + 1);
    onDateChange(newDate);
  };

  const handleToday = () => {
    onDateChange(new Date());
  };

  // Get tasks for a specific hour
  const getTasksForHour = (hour: number) => {
    const hourStart = addHours(startOfDay(selectedDate), hour);
    return tasks.filter((task) => {
      const taskDate = parseISO(task.startDate);
      return isSameHour(taskDate, hourStart);
    });
  };

  // Get all-day tasks or tasks without specific time
  const getAllDayTasks = () => {
    return tasks.filter((task) => {
      const taskDate = parseISO(task.startDate);
      // Check if it's a full-day task (no specific time or spans entire day)
      const taskDateStr = format(taskDate, "yyyy-MM-dd");
      const selectedDateStr = format(selectedDate, "yyyy-MM-dd");
      return taskDateStr === selectedDateStr;
    });
  };

  const formatHour = (hour: number) => {
    return format(new Date().setHours(hour, 0, 0, 0), "HH:mm");
  };

  return (
    <div className="day-view bg-white rounded-2xl shadow-xl overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handlePrevDay}
              className="p-2 rounded-lg bg-white/20 hover:bg-white/30 text-white transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>

            <div className="text-center">
              <h2 className="text-2xl font-bold text-white">
                {format(selectedDate, "EEEE", { locale: th })}
              </h2>
              <p className="text-white/80 text-sm">
                {format(selectedDate, "d MMMM yyyy", { locale: th })}
              </p>
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleNextDay}
              className="p-2 rounded-lg bg-white/20 hover:bg-white/30 text-white transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>

          <div className="flex items-center gap-3">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleToday}
              className="px-4 py-2 rounded-lg bg-white/20 hover:bg-white/30 text-white text-sm font-medium transition-colors"
            >
              วันนี้
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onAddTask(selectedDate)}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white text-indigo-600 text-sm font-semibold hover:bg-indigo-50 transition-colors"
            >
              <Plus className="w-4 h-4" />
              เพิ่มงาน
            </motion.button>
          </div>
        </div>
      </div>

      {/* Summary Stats */}
      <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
        <div className="grid grid-cols-4 gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-blue-100">
              <Clock className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">งานทั้งหมด</p>
              <p className="text-xl font-bold text-gray-900">{tasks.length}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-yellow-100">
              <AlertCircle className="w-5 h-5 text-yellow-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">กำลังดำเนินการ</p>
              <p className="text-xl font-bold text-gray-900">
                {tasks.filter((t) => t.status === "in-progress").length}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-green-100">
              <CheckCircle2 className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">เสร็จสิ้น</p>
              <p className="text-xl font-bold text-gray-900">
                {tasks.filter((t) => t.status === "completed").length}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-purple-100">
              <Video className="w-5 h-5 text-purple-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">วิดีโอ/คลิป</p>
              <p className="text-xl font-bold text-gray-900">
                {tasks.filter((t) => t.mediaType === "video").length}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Time Grid */}
      <div className="overflow-y-auto max-h-[600px]">
        {isLoading ? (
          <div className="flex items-center justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-4 border-indigo-200 border-t-indigo-600"></div>
          </div>
        ) : (
          <div className="divide-y divide-gray-100">
            {WORK_HOURS.map((hour) => {
              const hourTasks = getTasksForHour(hour);

              return (
                <div
                  key={hour}
                  className="flex min-h-[80px] hover:bg-gray-50 transition-colors group"
                >
                  {/* Time Label */}
                  <div className="w-20 flex-shrink-0 px-4 py-3 text-right border-r border-gray-200">
                    <span className="text-sm font-medium text-gray-500">
                      {formatHour(hour)}
                    </span>
                  </div>

                  {/* Tasks Area */}
                  <div className="flex-1 px-4 py-2 relative">
                    <div className="flex flex-wrap gap-2">
                      {hourTasks.map((task) => {
                        const statusConfig = STATUS_CONFIG[task.status];
                        const priorityConfig = PRIORITY_CONFIG[task.priority];
                        const mediaConfig = MEDIA_TYPE_CONFIG[task.mediaType];

                        return (
                          <motion.div
                            key={task.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            whileHover={{ scale: 1.02 }}
                            onClick={() => onTaskClick(task)}
                            className={`
                              flex-1 min-w-[200px] max-w-[400px] p-3 rounded-lg cursor-pointer
                              border-l-4 ${statusConfig.borderColor} ${statusConfig.bgColor}
                              hover:shadow-md transition-all
                            `}
                          >
                            <div className="flex items-start justify-between gap-2">
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2 mb-1">
                                  <span
                                    className={`${mediaConfig.bgColor} p-1 rounded`}
                                  >
                                    {getMediaIcon(task.mediaType)}
                                  </span>
                                  <h4 className="font-semibold text-gray-900 truncate">
                                    {task.title}
                                  </h4>
                                </div>
                                {task.clipName && (
                                  <p className="text-sm text-gray-600 truncate">
                                    {task.clipName}
                                  </p>
                                )}
                                <div className="flex items-center gap-2 mt-2">
                                  <span
                                    className={`text-xs px-2 py-0.5 rounded-full ${statusConfig.bgColor} ${statusConfig.textColor}`}
                                  >
                                    {statusConfig.labelTh}
                                  </span>
                                  <span
                                    className={`text-xs px-2 py-0.5 rounded-full ${priorityConfig.bgColor} ${priorityConfig.textColor}`}
                                  >
                                    {priorityConfig.labelTh}
                                  </span>
                                </div>
                              </div>
                              {task.progress > 0 && (
                                <div className="flex-shrink-0">
                                  <div className="w-10 h-10 relative">
                                    <svg className="w-10 h-10 transform -rotate-90">
                                      <circle
                                        cx="20"
                                        cy="20"
                                        r="16"
                                        stroke="#e5e7eb"
                                        strokeWidth="4"
                                        fill="none"
                                      />
                                      <circle
                                        cx="20"
                                        cy="20"
                                        r="16"
                                        stroke={statusConfig.color}
                                        strokeWidth="4"
                                        fill="none"
                                        strokeDasharray={`${
                                          (task.progress / 100) * 100.53
                                        } 100.53`}
                                      />
                                    </svg>
                                    <span className="absolute inset-0 flex items-center justify-center text-xs font-bold">
                                      {task.progress}%
                                    </span>
                                  </div>
                                </div>
                              )}
                            </div>
                          </motion.div>
                        );
                      })}

                      {/* Add Task Button (shown on hover) */}
                      <motion.button
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1, scale: 1.05 }}
                        onClick={() => onAddTask(selectedDate, hour)}
                        className="opacity-0 group-hover:opacity-100 flex items-center gap-2 px-3 py-2 rounded-lg border-2 border-dashed border-gray-300 text-gray-400 hover:border-indigo-400 hover:text-indigo-600 transition-all"
                      >
                        <Plus className="w-4 h-4" />
                        <span className="text-sm">เพิ่มงาน</span>
                      </motion.button>
                    </div>

                    {hourTasks.length === 0 && (
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <span className="text-sm text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity">
                          ว่าง
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default DayView;
