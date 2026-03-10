"use client";

import React, { useMemo } from "react";
import { motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Plus,
  Video,
  Image,
  Music,
  FileText,
  Folder,
} from "lucide-react";
import {
  ProductionTask,
  STATUS_CONFIG,
  MEDIA_TYPE_CONFIG,
  MediaType,
} from "@/types/production-calendar";
import {
  format,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  eachDayOfInterval,
  isSameMonth,
  isSameDay,
  isToday,
  parseISO,
} from "date-fns";
import { th } from "date-fns/locale";

interface MonthViewProps {
  selectedDate: Date;
  tasks: ProductionTask[];
  onDateChange: (date: Date) => void;
  onDayClick: (date: Date) => void;
  onTaskClick: (task: ProductionTask) => void;
  onAddTask: (date: Date) => void;
  isLoading?: boolean;
}

const WEEKDAYS = ["อา", "จ", "อ", "พ", "พฤ", "ศ", "ส"];

const getMediaIcon = (mediaType: MediaType, size = "w-3 h-3") => {
  const className = size;
  switch (mediaType) {
    case "video":
      return <Video className={className} />;
    case "image":
      return <Image className={className} />;
    case "audio":
      return <Music className={className} />;
    case "document":
      return <FileText className={className} />;
    default:
      return <Folder className={className} />;
  }
};

const MonthView: React.FC<MonthViewProps> = ({
  selectedDate,
  tasks,
  onDateChange,
  onDayClick,
  onTaskClick,
  onAddTask,
  isLoading = false,
}) => {
  // Generate calendar days
  const calendarDays = useMemo(() => {
    const monthStart = startOfMonth(selectedDate);
    const monthEnd = endOfMonth(selectedDate);
    const calendarStart = startOfWeek(monthStart, { weekStartsOn: 0 });
    const calendarEnd = endOfWeek(monthEnd, { weekStartsOn: 0 });

    return eachDayOfInterval({ start: calendarStart, end: calendarEnd });
  }, [selectedDate]);

  // Group tasks by date
  const tasksByDate = useMemo(() => {
    const grouped: Record<string, ProductionTask[]> = {};
    tasks.forEach((task) => {
      const dateKey = format(parseISO(task.startDate), "yyyy-MM-dd");
      if (!grouped[dateKey]) {
        grouped[dateKey] = [];
      }
      grouped[dateKey].push(task);
    });
    return grouped;
  }, [tasks]);

  const handlePrevMonth = () => {
    const newDate = new Date(selectedDate);
    newDate.setMonth(newDate.getMonth() - 1);
    onDateChange(newDate);
  };

  const handleNextMonth = () => {
    const newDate = new Date(selectedDate);
    newDate.setMonth(newDate.getMonth() + 1);
    onDateChange(newDate);
  };

  const handleToday = () => {
    onDateChange(new Date());
  };

  // Get summary for the month
  const monthSummary = useMemo(() => {
    return {
      total: tasks.length,
      completed: tasks.filter((t) => t.status === "completed").length,
      inProgress: tasks.filter((t) => t.status === "in-progress").length,
      pending: tasks.filter((t) => t.status === "not-started").length,
      video: tasks.filter((t) => t.mediaType === "video").length,
    };
  }, [tasks]);

  return (
    <div className="month-view bg-white rounded-2xl shadow-xl overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handlePrevMonth}
              className="p-2 rounded-lg bg-white/20 hover:bg-white/30 text-white transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>

            <div className="text-center min-w-[200px]">
              <h2 className="text-2xl font-bold text-white">
                {format(selectedDate, "MMMM yyyy", { locale: th })}
              </h2>
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleNextMonth}
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
              เดือนนี้
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onAddTask(selectedDate)}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white text-purple-600 text-sm font-semibold hover:bg-purple-50 transition-colors"
            >
              <Plus className="w-4 h-4" />
              เพิ่มงาน
            </motion.button>
          </div>
        </div>
      </div>

      {/* Monthly Summary */}
      <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-blue-500"></div>
              <span className="text-sm text-gray-600">
                ทั้งหมด: <strong>{monthSummary.total}</strong>
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="text-sm text-gray-600">
                เสร็จสิ้น: <strong>{monthSummary.completed}</strong>
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <span className="text-sm text-gray-600">
                กำลังดำเนินการ: <strong>{monthSummary.inProgress}</strong>
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-gray-400"></div>
              <span className="text-sm text-gray-600">
                รอดำเนินการ: <strong>{monthSummary.pending}</strong>
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Video className="w-4 h-4 text-purple-500" />
              <span className="text-sm text-gray-600">
                วิดีโอ: <strong>{monthSummary.video}</strong>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Calendar Grid */}
      <div className="p-4">
        {isLoading ? (
          <div className="flex items-center justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-4 border-purple-200 border-t-purple-600"></div>
          </div>
        ) : (
          <>
            {/* Weekday Headers */}
            <div className="grid grid-cols-7 mb-2">
              {WEEKDAYS.map((day, index) => (
                <div
                  key={day}
                  className={`
                    py-2 text-center text-sm font-semibold
                    ${
                      index === 0
                        ? "text-red-500"
                        : index === 6
                        ? "text-blue-500"
                        : "text-gray-600"
                    }
                  `}
                >
                  {day}
                </div>
              ))}
            </div>

            {/* Calendar Days */}
            <div className="grid grid-cols-7 gap-1">
              {calendarDays.map((day) => {
                const dateKey = format(day, "yyyy-MM-dd");
                const dayTasks = tasksByDate[dateKey] || [];
                const isCurrentMonth = isSameMonth(day, selectedDate);
                const isSelected = isSameDay(day, selectedDate);
                const isTodayDate = isToday(day);
                const dayOfWeek = day.getDay();

                return (
                  <motion.div
                    key={dateKey}
                    whileHover={{ scale: 1.02 }}
                    onClick={() => onDayClick(day)}
                    className={`
                      min-h-[100px] p-2 rounded-lg cursor-pointer transition-all
                      ${isCurrentMonth ? "bg-white" : "bg-gray-50"}
                      ${isSelected ? "ring-2 ring-purple-500 bg-purple-50" : ""}
                      ${isTodayDate ? "bg-indigo-50" : ""}
                      hover:bg-gray-100
                      border border-gray-200
                    `}
                  >
                    {/* Date Number */}
                    <div className="flex items-center justify-between mb-1">
                      <span
                        className={`
                          text-sm font-semibold w-7 h-7 flex items-center justify-center rounded-full
                          ${!isCurrentMonth ? "text-gray-300" : ""}
                          ${isTodayDate ? "bg-indigo-600 text-white" : ""}
                          ${
                            dayOfWeek === 0 && isCurrentMonth && !isTodayDate
                              ? "text-red-500"
                              : ""
                          }
                          ${
                            dayOfWeek === 6 && isCurrentMonth && !isTodayDate
                              ? "text-blue-500"
                              : ""
                          }
                        `}
                      >
                        {format(day, "d")}
                      </span>
                      {dayTasks.length > 0 && (
                        <span className="text-xs px-1.5 py-0.5 rounded-full bg-purple-100 text-purple-600 font-medium">
                          {dayTasks.length}
                        </span>
                      )}
                    </div>

                    {/* Tasks Preview */}
                    <div className="space-y-1 overflow-hidden">
                      {dayTasks.slice(0, 3).map((task) => {
                        const statusConfig = STATUS_CONFIG[task.status];
                        const mediaConfig = MEDIA_TYPE_CONFIG[task.mediaType];

                        return (
                          <motion.div
                            key={task.id}
                            initial={{ opacity: 0, y: 5 }}
                            animate={{ opacity: 1, y: 0 }}
                            onClick={(e) => {
                              e.stopPropagation();
                              onTaskClick(task);
                            }}
                            className={`
                              flex items-center gap-1 px-2 py-1 rounded text-xs
                              ${statusConfig.bgColor} ${statusConfig.textColor}
                              hover:opacity-80 transition-opacity cursor-pointer
                              truncate
                            `}
                          >
                            <span style={{ color: mediaConfig.color }}>
                              {getMediaIcon(task.mediaType)}
                            </span>
                            <span className="truncate font-medium">
                              {task.title}
                            </span>
                          </motion.div>
                        );
                      })}
                      {dayTasks.length > 3 && (
                        <div className="text-xs text-gray-400 pl-2">
                          +{dayTasks.length - 3} งาน
                        </div>
                      )}
                    </div>

                    {/* Add task button (on hover) */}
                    {isCurrentMonth && dayTasks.length === 0 && (
                      <motion.button
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        onClick={(e) => {
                          e.stopPropagation();
                          onAddTask(day);
                        }}
                        className="mt-2 w-full flex items-center justify-center gap-1 text-xs text-gray-400 hover:text-purple-600 opacity-0 hover:opacity-100 transition-opacity"
                      >
                        <Plus className="w-3 h-3" />
                        เพิ่ม
                      </motion.button>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </>
        )}
      </div>

      {/* Legend */}
      <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
        <div className="flex flex-wrap items-center gap-4 text-xs">
          <span className="font-semibold text-gray-600">สถานะ:</span>
          {Object.entries(STATUS_CONFIG).map(([key, config]) => (
            <div key={key} className="flex items-center gap-1">
              <div
                className="w-2.5 h-2.5 rounded-full"
                style={{ backgroundColor: config.color }}
              ></div>
              <span className="text-gray-600">{config.labelTh}</span>
            </div>
          ))}
          <span className="mx-2 text-gray-300">|</span>
          <span className="font-semibold text-gray-600">ประเภท:</span>
          {Object.entries(MEDIA_TYPE_CONFIG).map(([key, config]) => (
            <div key={key} className="flex items-center gap-1">
              <span style={{ color: config.color }}>
                {getMediaIcon(key as MediaType)}
              </span>
              <span className="text-gray-600">{config.labelTh}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MonthView;
