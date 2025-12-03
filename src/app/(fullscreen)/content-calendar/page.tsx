"use client";

import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import {
  FaHome,
  FaChevronLeft,
  FaChevronRight,
  FaPlus,
  FaTimes,
  FaEdit,
  FaTrash,
  FaCalendarAlt,
  FaInstagram,
  FaFacebook,
  FaTiktok,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
  FaGlobe,
  FaFilter,
  FaSearch,
  FaClock,
  FaCheck,
  FaExclamationTriangle,
  FaPaperPlane,
  FaImage,
  FaVideo,
  FaFileAlt,
  FaEye,
  FaExpand,
  FaCompress,
  FaTags,
  FaUserEdit,
  FaSave,
} from "react-icons/fa";

// ============ INTERFACES ============
interface ContentItem {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  platform: Platform[];
  status: ContentStatus;
  type: ContentType;
  author: string;
  tags: string[];
  priority: Priority;
  color: string;
}

type Platform =
  | "instagram"
  | "facebook"
  | "tiktok"
  | "youtube"
  | "twitter"
  | "linkedin"
  | "website";
type ContentStatus =
  | "draft"
  | "scheduled"
  | "published"
  | "review"
  | "cancelled";
type ContentType =
  | "image"
  | "video"
  | "carousel"
  | "story"
  | "reel"
  | "article"
  | "live";
type Priority = "low" | "medium" | "high" | "urgent";

interface CalendarDay {
  date: Date;
  isCurrentMonth: boolean;
  isToday: boolean;
  contents: ContentItem[];
}

// ============ CONSTANTS ============
const PLATFORMS: {
  key: Platform;
  label: string;
  icon: React.ReactNode;
  color: string;
}[] = [
  {
    key: "instagram",
    label: "Instagram",
    icon: <FaInstagram />,
    color: "#E1306C",
  },
  {
    key: "facebook",
    label: "Facebook",
    icon: <FaFacebook />,
    color: "#1877F2",
  },
  { key: "tiktok", label: "TikTok", icon: <FaTiktok />, color: "#000000" },
  { key: "youtube", label: "YouTube", icon: <FaYoutube />, color: "#FF0000" },
  { key: "twitter", label: "Twitter/X", icon: <FaTwitter />, color: "#1DA1F2" },
  {
    key: "linkedin",
    label: "LinkedIn",
    icon: <FaLinkedin />,
    color: "#0A66C2",
  },
  { key: "website", label: "Website", icon: <FaGlobe />, color: "#8B5CF6" },
];

const CONTENT_TYPES: {
  key: ContentType;
  label: string;
  icon: React.ReactNode;
}[] = [
  { key: "image", label: "Image Post", icon: <FaImage /> },
  { key: "video", label: "Video", icon: <FaVideo /> },
  { key: "carousel", label: "Carousel", icon: <FaImage /> },
  { key: "story", label: "Story", icon: <FaClock /> },
  { key: "reel", label: "Reel/Short", icon: <FaVideo /> },
  { key: "article", label: "Article/Blog", icon: <FaFileAlt /> },
  { key: "live", label: "Live Stream", icon: <FaVideo /> },
];

const STATUS_CONFIG: Record<
  ContentStatus,
  { label: string; color: string; bgColor: string }
> = {
  draft: { label: "Draft", color: "text-gray-400", bgColor: "bg-gray-500/20" },
  scheduled: {
    label: "Scheduled",
    color: "text-blue-400",
    bgColor: "bg-blue-500/20",
  },
  published: {
    label: "Published",
    color: "text-green-400",
    bgColor: "bg-green-500/20",
  },
  review: {
    label: "In Review",
    color: "text-yellow-400",
    bgColor: "bg-yellow-500/20",
  },
  cancelled: {
    label: "Cancelled",
    color: "text-red-400",
    bgColor: "bg-red-500/20",
  },
};

const PRIORITY_CONFIG: Record<Priority, { label: string; color: string }> = {
  low: { label: "Low", color: "bg-gray-500" },
  medium: { label: "Medium", color: "bg-blue-500" },
  high: { label: "High", color: "bg-orange-500" },
  urgent: { label: "Urgent", color: "bg-red-500" },
};

const COLORS = [
  "#8B5CF6",
  "#EC4899",
  "#06B6D4",
  "#10B981",
  "#F59E0B",
  "#EF4444",
  "#6366F1",
  "#14B8A6",
  "#F97316",
  "#84CC16",
];

// ============ MOCK DATA ============
const generateMockContent = (): ContentItem[] => {
  const mockData: ContentItem[] = [
    {
      id: "1",
      title: "Rhinoplasty Before/After",
      description: "Star case transformation showcase with Dr. A results",
      date: "2025-12-03",
      time: "10:00",
      platform: ["instagram", "facebook"],
      status: "scheduled",
      type: "carousel",
      author: "Marketing Team",
      tags: ["rhinoplasty", "before-after", "star-case"],
      priority: "high",
      color: "#EC4899",
    },
    {
      id: "2",
      title: "Year-End Promotion Video",
      description: "Special discount announcement for December campaign",
      date: "2025-12-05",
      time: "14:00",
      platform: ["instagram", "facebook", "tiktok"],
      status: "review",
      type: "reel",
      author: "Video Team",
      tags: ["promotion", "year-end", "discount"],
      priority: "urgent",
      color: "#F59E0B",
    },
    {
      id: "3",
      title: "Facelift Education Series",
      description: "Part 3: Recovery process and aftercare tips",
      date: "2025-12-07",
      time: "09:00",
      platform: ["youtube", "facebook"],
      status: "draft",
      type: "video",
      author: "Content Team",
      tags: ["education", "facelift", "recovery"],
      priority: "medium",
      color: "#06B6D4",
    },
    {
      id: "4",
      title: "Doctor Live Q&A Session",
      description: "Dr. B answering patient questions about eye surgery",
      date: "2025-12-10",
      time: "19:00",
      platform: ["instagram", "facebook"],
      status: "scheduled",
      type: "live",
      author: "Social Team",
      tags: ["live", "q&a", "eye-surgery"],
      priority: "high",
      color: "#8B5CF6",
    },
    {
      id: "5",
      title: "Patient Testimonial",
      description: "Mrs. K sharing her rhinoplasty journey",
      date: "2025-12-03",
      time: "15:00",
      platform: ["instagram", "tiktok"],
      status: "published",
      type: "video",
      author: "Marketing Team",
      tags: ["testimonial", "rhinoplasty", "patient-story"],
      priority: "medium",
      color: "#10B981",
    },
    {
      id: "6",
      title: "Holiday Greeting Post",
      description: "Season's greetings from BJH Bangkok team",
      date: "2025-12-25",
      time: "08:00",
      platform: ["instagram", "facebook", "twitter", "linkedin"],
      status: "scheduled",
      type: "image",
      author: "Design Team",
      tags: ["holiday", "greeting", "team"],
      priority: "low",
      color: "#EF4444",
    },
    {
      id: "7",
      title: "Behind the Scenes",
      description: "A day in the operating room preparation",
      date: "2025-12-12",
      time: "12:00",
      platform: ["instagram", "tiktok"],
      status: "draft",
      type: "story",
      author: "Content Team",
      tags: ["bts", "clinic", "surgery"],
      priority: "low",
      color: "#6366F1",
    },
    {
      id: "8",
      title: "New Year Campaign Launch",
      description: "2026 Beauty Resolution campaign kickoff",
      date: "2025-12-28",
      time: "10:00",
      platform: ["instagram", "facebook", "tiktok", "youtube"],
      status: "review",
      type: "video",
      author: "Marketing Team",
      tags: ["campaign", "new-year", "2026"],
      priority: "urgent",
      color: "#F97316",
    },
    {
      id: "9",
      title: "Weekly Tips: Skincare",
      description: "Post-surgery skincare routine recommendations",
      date: "2025-12-15",
      time: "11:00",
      platform: ["instagram", "facebook"],
      status: "scheduled",
      type: "carousel",
      author: "Content Team",
      tags: ["tips", "skincare", "post-surgery"],
      priority: "medium",
      color: "#14B8A6",
    },
    {
      id: "10",
      title: "Clinic Tour Video",
      description: "Virtual tour of our newly renovated facilities",
      date: "2025-12-20",
      time: "14:00",
      platform: ["youtube", "facebook", "website"],
      status: "draft",
      type: "video",
      author: "Video Team",
      tags: ["clinic", "tour", "facilities"],
      priority: "medium",
      color: "#84CC16",
    },
  ];
  return mockData;
};

// ============ HELPER FUNCTIONS ============
const getDaysInMonth = (year: number, month: number): CalendarDay[] => {
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const startDate = new Date(firstDay);
  startDate.setDate(startDate.getDate() - startDate.getDay());

  const days: CalendarDay[] = [];
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  for (let i = 0; i < 42; i++) {
    const currentDate = new Date(startDate);
    currentDate.setDate(startDate.getDate() + i);

    days.push({
      date: currentDate,
      isCurrentMonth: currentDate.getMonth() === month,
      isToday: currentDate.getTime() === today.getTime(),
      contents: [],
    });
  }

  return days;
};

const formatDateKey = (date: Date): string => {
  return date.toISOString().split("T")[0];
};

// ============ COMPONENT ============
export default function ContentCalendarPage() {
  const router = useRouter();
  const [currentDate, setCurrentDate] = useState(new Date());
  const [contents, setContents] = useState<ContentItem[]>([]);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingContent, setEditingContent] = useState<ContentItem | null>(
    null
  );
  const [viewMode, setViewMode] = useState<"month" | "week">("month");
  const [filterPlatform, setFilterPlatform] = useState<Platform | "all">("all");
  const [filterStatus, setFilterStatus] = useState<ContentStatus | "all">(
    "all"
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedContent, setSelectedContent] = useState<ContentItem | null>(
    null
  );

  // Load mock data
  useEffect(() => {
    setContents(generateMockContent());
  }, []);

  // Calendar days with content
  const calendarDays = useMemo(() => {
    const days = getDaysInMonth(
      currentDate.getFullYear(),
      currentDate.getMonth()
    );

    const filteredContents = contents.filter((content) => {
      const matchPlatform =
        filterPlatform === "all" || content.platform.includes(filterPlatform);
      const matchStatus =
        filterStatus === "all" || content.status === filterStatus;
      const matchSearch =
        searchQuery === "" ||
        content.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        content.tags.some((tag) =>
          tag.toLowerCase().includes(searchQuery.toLowerCase())
        );
      return matchPlatform && matchStatus && matchSearch;
    });

    return days.map((day) => ({
      ...day,
      contents: filteredContents.filter(
        (content) => content.date === formatDateKey(day.date)
      ),
    }));
  }, [currentDate, contents, filterPlatform, filterStatus, searchQuery]);

  // Navigation
  const navigateMonth = (direction: number) => {
    setCurrentDate((prev) => {
      const newDate = new Date(prev);
      newDate.setMonth(prev.getMonth() + direction);
      return newDate;
    });
  };

  const goToToday = () => {
    setCurrentDate(new Date());
  };

  // Content management
  const handleAddContent = (date?: Date) => {
    setSelectedDate(date || new Date());
    setEditingContent(null);
    setIsModalOpen(true);
  };

  const handleEditContent = (content: ContentItem) => {
    setEditingContent(content);
    setSelectedDate(new Date(content.date));
    setIsModalOpen(true);
  };

  const handleDeleteContent = (id: string) => {
    if (confirm("Are you sure you want to delete this content?")) {
      setContents((prev) => prev.filter((c) => c.id !== id));
      setSelectedContent(null);
    }
  };

  const handleSaveContent = (content: ContentItem) => {
    if (editingContent) {
      setContents((prev) =>
        prev.map((c) => (c.id === content.id ? content : c))
      );
    } else {
      setContents((prev) => [
        ...prev,
        { ...content, id: Date.now().toString() },
      ]);
    }
    setIsModalOpen(false);
    setEditingContent(null);
  };

  // Stats
  const stats = useMemo(() => {
    const thisMonth = contents.filter((c) => {
      const contentDate = new Date(c.date);
      return (
        contentDate.getMonth() === currentDate.getMonth() &&
        contentDate.getFullYear() === currentDate.getFullYear()
      );
    });

    return {
      total: thisMonth.length,
      scheduled: thisMonth.filter((c) => c.status === "scheduled").length,
      published: thisMonth.filter((c) => c.status === "published").length,
      draft: thisMonth.filter((c) => c.status === "draft").length,
      review: thisMonth.filter((c) => c.status === "review").length,
    };
  }, [contents, currentDate]);

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-x-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -inset-[10px] opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white/5 backdrop-blur-xl border-b border-white/10 sticky top-0 z-50"
        >
          <div className="w-full px-4 md:px-6 py-4">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => router.push("/home")}
                  className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                >
                  <FaHome className="text-white text-lg" />
                </button>
                <div>
                  <h1 className="text-xl md:text-2xl font-bold text-white flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-gradient-to-br from-pink-500 to-purple-600">
                      <FaCalendarAlt className="text-lg" />
                    </div>
                    Content Calendar
                  </h1>
                  <p className="text-pink-200 text-sm mt-1">
                    Plan, schedule, and manage your content
                  </p>
                </div>
              </div>

              {/* Stats Summary */}
              <div className="flex items-center gap-2 md:gap-4 flex-wrap">
                <div className="flex items-center gap-4 bg-white/5 rounded-lg px-4 py-2">
                  <div className="text-center">
                    <p className="text-white font-bold text-lg">
                      {stats.total}
                    </p>
                    <p className="text-pink-200/60 text-xs">Total</p>
                  </div>
                  <div className="h-8 w-px bg-white/20"></div>
                  <div className="text-center">
                    <p className="text-blue-400 font-bold text-lg">
                      {stats.scheduled}
                    </p>
                    <p className="text-pink-200/60 text-xs">Scheduled</p>
                  </div>
                  <div className="h-8 w-px bg-white/20"></div>
                  <div className="text-center">
                    <p className="text-green-400 font-bold text-lg">
                      {stats.published}
                    </p>
                    <p className="text-pink-200/60 text-xs">Published</p>
                  </div>
                  <div className="h-8 w-px bg-white/20"></div>
                  <div className="text-center">
                    <p className="text-yellow-400 font-bold text-lg">
                      {stats.review}
                    </p>
                    <p className="text-pink-200/60 text-xs">Review</p>
                  </div>
                </div>
                <button
                  onClick={() => handleAddContent()}
                  className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-lg hover:from-pink-600 hover:to-purple-700 transition-all font-medium"
                >
                  <FaPlus />
                  <span className="hidden md:inline">Add Content</span>
                </button>
              </div>
            </div>

            {/* Filters Row */}
            <div className="flex flex-wrap items-center gap-3 mt-4">
              {/* Search */}
              <div className="relative flex-1 min-w-[200px] max-w-md">
                <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-pink-200/50" />
                <input
                  type="text"
                  placeholder="Search content or tags..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-white/10 border border-white/20 text-white rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-pink-500 placeholder-pink-200/50"
                />
              </div>

              {/* Platform Filter */}
              <select
                value={filterPlatform}
                onChange={(e) =>
                  setFilterPlatform(e.target.value as Platform | "all")
                }
                className="bg-white/10 border border-white/20 text-white rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
              >
                <option value="all" className="bg-slate-800">
                  All Platforms
                </option>
                {PLATFORMS.map((p) => (
                  <option key={p.key} value={p.key} className="bg-slate-800">
                    {p.label}
                  </option>
                ))}
              </select>

              {/* Status Filter */}
              <select
                value={filterStatus}
                onChange={(e) =>
                  setFilterStatus(e.target.value as ContentStatus | "all")
                }
                className="bg-white/10 border border-white/20 text-white rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
              >
                <option value="all" className="bg-slate-800">
                  All Status
                </option>
                {Object.entries(STATUS_CONFIG).map(([key, config]) => (
                  <option key={key} value={key} className="bg-slate-800">
                    {config.label}
                  </option>
                ))}
              </select>

              {/* View Toggle */}
              <div className="flex items-center bg-white/10 rounded-lg p-1">
                <button
                  onClick={() => setViewMode("month")}
                  className={`px-3 py-1 rounded-md text-sm transition-colors ${
                    viewMode === "month"
                      ? "bg-pink-500 text-white"
                      : "text-pink-200 hover:text-white"
                  }`}
                >
                  Month
                </button>
                <button
                  onClick={() => setViewMode("week")}
                  className={`px-3 py-1 rounded-md text-sm transition-colors ${
                    viewMode === "week"
                      ? "bg-pink-500 text-white"
                      : "text-pink-200 hover:text-white"
                  }`}
                >
                  Week
                </button>
              </div>

              {/* Expand Toggle */}
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="p-2 bg-white/10 border border-white/20 text-white rounded-lg hover:bg-white/20 transition-colors"
              >
                {isExpanded ? <FaCompress /> : <FaExpand />}
              </button>
            </div>
          </div>
        </motion.header>

        {/* Main Content */}
        <main className="w-full px-4 md:px-6 py-6">
          {/* Calendar Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center justify-between mb-6"
          >
            <div className="flex items-center gap-4">
              <button
                onClick={() => navigateMonth(-1)}
                className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors text-white"
              >
                <FaChevronLeft />
              </button>
              <h2 className="text-2xl md:text-3xl font-bold text-white min-w-[200px] text-center">
                {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
              </h2>
              <button
                onClick={() => navigateMonth(1)}
                className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors text-white"
              >
                <FaChevronRight />
              </button>
              <button
                onClick={goToToday}
                className="px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors text-white text-sm font-medium"
              >
                Today
              </button>
            </div>

            {/* Platform Legend */}
            <div className="hidden lg:flex items-center gap-3">
              {PLATFORMS.slice(0, 5).map((platform) => (
                <div
                  key={platform.key}
                  className="flex items-center gap-1.5 text-sm text-pink-200/70"
                >
                  <span style={{ color: platform.color }}>{platform.icon}</span>
                  <span className="hidden xl:inline">{platform.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Calendar Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden"
          >
            {/* Day Headers */}
            <div className="grid grid-cols-7 bg-white/5 border-b border-white/10">
              {dayNames.map((day) => (
                <div
                  key={day}
                  className="py-3 text-center text-sm font-medium text-pink-200"
                >
                  {day}
                </div>
              ))}
            </div>

            {/* Calendar Days */}
            <div className="grid grid-cols-7">
              {calendarDays.map((day, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2, delay: index * 0.01 }}
                  className={`
                    min-h-[120px] ${
                      isExpanded ? "min-h-[180px]" : ""
                    } p-2 border-b border-r border-white/5 
                    ${
                      !day.isCurrentMonth
                        ? "bg-white/[0.02]"
                        : "hover:bg-white/5"
                    }
                    ${
                      day.isToday
                        ? "bg-pink-500/10 ring-1 ring-pink-500/30 ring-inset"
                        : ""
                    }
                    transition-colors cursor-pointer group
                  `}
                  onClick={() => handleAddContent(day.date)}
                >
                  {/* Date Number */}
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className={`
                        w-7 h-7 flex items-center justify-center rounded-full text-sm font-medium
                        ${day.isToday ? "bg-pink-500 text-white" : ""}
                        ${
                          !day.isCurrentMonth
                            ? "text-pink-200/30"
                            : "text-white"
                        }
                      `}
                    >
                      {day.date.getDate()}
                    </span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleAddContent(day.date);
                      }}
                      className="opacity-0 group-hover:opacity-100 p-1 rounded bg-pink-500/20 text-pink-300 hover:bg-pink-500/40 transition-all"
                    >
                      <FaPlus className="text-xs" />
                    </button>
                  </div>

                  {/* Content Items */}
                  <div className="space-y-1 overflow-y-auto max-h-[80px] scrollbar-thin">
                    {day.contents
                      .slice(0, isExpanded ? 6 : 3)
                      .map((content) => (
                        <motion.div
                          key={content.id}
                          whileHover={{ scale: 1.02 }}
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedContent(content);
                          }}
                          className="group/item relative"
                        >
                          <div
                            className="px-2 py-1 rounded text-xs text-white truncate cursor-pointer hover:ring-1 hover:ring-white/30 transition-all"
                            style={{ backgroundColor: `${content.color}90` }}
                          >
                            <div className="flex items-center gap-1">
                              <span
                                className={`w-1.5 h-1.5 rounded-full ${
                                  PRIORITY_CONFIG[content.priority].color
                                }`}
                              ></span>
                              <span className="truncate font-medium">
                                {content.title}
                              </span>
                            </div>
                            <div className="flex items-center gap-1 mt-0.5 text-[10px] opacity-80">
                              <FaClock className="text-[8px]" />
                              <span>{content.time}</span>
                              <span className="mx-1">•</span>
                              <div className="flex items-center gap-0.5">
                                {content.platform.slice(0, 2).map((p) => {
                                  const platform = PLATFORMS.find(
                                    (pl) => pl.key === p
                                  );
                                  return platform ? (
                                    <span key={p} className="text-[10px]">
                                      {platform.icon}
                                    </span>
                                  ) : null;
                                })}
                                {content.platform.length > 2 && (
                                  <span>+{content.platform.length - 2}</span>
                                )}
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    {day.contents.length > (isExpanded ? 6 : 3) && (
                      <div className="text-xs text-pink-200/60 text-center py-1">
                        +{day.contents.length - (isExpanded ? 6 : 3)} more
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Status Legend */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-4 mt-6"
          >
            {Object.entries(STATUS_CONFIG).map(([key, config]) => (
              <div key={key} className="flex items-center gap-2 text-sm">
                <span
                  className={`w-3 h-3 rounded-full ${config.bgColor}`}
                ></span>
                <span className={config.color}>{config.label}</span>
              </div>
            ))}
          </motion.div>
        </main>
      </div>

      {/* Content Detail Modal */}
      <AnimatePresence>
        {selectedContent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedContent(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-slate-800/95 backdrop-blur-xl rounded-2xl border border-white/20 w-full max-w-lg overflow-hidden"
            >
              {/* Header */}
              <div
                className="p-4 border-b border-white/10"
                style={{ backgroundColor: `${selectedContent.color}20` }}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      {selectedContent.title}
                    </h3>
                    <p className="text-pink-200/70 text-sm mt-1">
                      {selectedContent.description}
                    </p>
                  </div>
                  <button
                    onClick={() => setSelectedContent(null)}
                    className="p-2 rounded-lg hover:bg-white/10 text-white transition-colors"
                  >
                    <FaTimes />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 space-y-4">
                {/* Date & Time */}
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2 text-pink-200">
                    <FaCalendarAlt className="text-pink-400" />
                    <span>
                      {new Date(selectedContent.date).toLocaleDateString(
                        "en-US",
                        {
                          weekday: "long",
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        }
                      )}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-pink-200">
                    <FaClock className="text-pink-400" />
                    <span>{selectedContent.time}</span>
                  </div>
                </div>

                {/* Status & Priority */}
                <div className="flex items-center gap-3">
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      STATUS_CONFIG[selectedContent.status].bgColor
                    } ${STATUS_CONFIG[selectedContent.status].color}`}
                  >
                    {STATUS_CONFIG[selectedContent.status].label}
                  </span>
                  <span
                    className={`px-3 py-1 rounded-full text-sm text-white ${
                      PRIORITY_CONFIG[selectedContent.priority].color
                    }`}
                  >
                    {PRIORITY_CONFIG[selectedContent.priority].label} Priority
                  </span>
                </div>

                {/* Platforms */}
                <div>
                  <p className="text-pink-200/70 text-sm mb-2">Platforms</p>
                  <div className="flex flex-wrap gap-2">
                    {selectedContent.platform.map((p) => {
                      const platform = PLATFORMS.find((pl) => pl.key === p);
                      return platform ? (
                        <span
                          key={p}
                          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm text-white"
                          style={{ backgroundColor: `${platform.color}40` }}
                        >
                          {platform.icon}
                          {platform.label}
                        </span>
                      ) : null;
                    })}
                  </div>
                </div>

                {/* Type */}
                <div>
                  <p className="text-pink-200/70 text-sm mb-2">Content Type</p>
                  <div className="flex items-center gap-2">
                    {
                      CONTENT_TYPES.find((t) => t.key === selectedContent.type)
                        ?.icon
                    }
                    <span className="text-white">
                      {
                        CONTENT_TYPES.find(
                          (t) => t.key === selectedContent.type
                        )?.label
                      }
                    </span>
                  </div>
                </div>

                {/* Tags */}
                <div>
                  <p className="text-pink-200/70 text-sm mb-2">Tags</p>
                  <div className="flex flex-wrap gap-2">
                    {selectedContent.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 rounded bg-white/10 text-pink-200 text-sm"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Author */}
                <div className="flex items-center gap-2 text-pink-200">
                  <FaUserEdit className="text-pink-400" />
                  <span>Created by: {selectedContent.author}</span>
                </div>
              </div>

              {/* Actions */}
              <div className="p-4 border-t border-white/10 flex items-center justify-end gap-3">
                <button
                  onClick={() => handleDeleteContent(selectedContent.id)}
                  className="flex items-center gap-2 px-4 py-2 bg-red-500/20 text-red-400 rounded-lg hover:bg-red-500/30 transition-colors"
                >
                  <FaTrash />
                  Delete
                </button>
                <button
                  onClick={() => {
                    handleEditContent(selectedContent);
                    setSelectedContent(null);
                  }}
                  className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-lg hover:from-pink-600 hover:to-purple-700 transition-all"
                >
                  <FaEdit />
                  Edit
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Add/Edit Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <ContentModal
            isOpen={isModalOpen}
            onClose={() => {
              setIsModalOpen(false);
              setEditingContent(null);
            }}
            onSave={handleSaveContent}
            initialContent={editingContent}
            selectedDate={selectedDate}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

// ============ MODAL COMPONENT ============
interface ContentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (content: ContentItem) => void;
  initialContent: ContentItem | null;
  selectedDate: Date | null;
}

function ContentModal({
  isOpen,
  onClose,
  onSave,
  initialContent,
  selectedDate,
}: ContentModalProps) {
  const [formData, setFormData] = useState<Partial<ContentItem>>({
    title: "",
    description: "",
    date: selectedDate
      ? formatDateKey(selectedDate)
      : formatDateKey(new Date()),
    time: "10:00",
    platform: [],
    status: "draft",
    type: "image",
    author: "Marketing Team",
    tags: [],
    priority: "medium",
    color: COLORS[Math.floor(Math.random() * COLORS.length)],
  });
  const [tagInput, setTagInput] = useState("");

  useEffect(() => {
    if (initialContent) {
      setFormData(initialContent);
    } else if (selectedDate) {
      setFormData((prev) => ({
        ...prev,
        date: formatDateKey(selectedDate),
      }));
    }
  }, [initialContent, selectedDate]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title || !formData.date || formData.platform?.length === 0) {
      alert("Please fill in all required fields");
      return;
    }
    onSave(formData as ContentItem);
  };

  const togglePlatform = (platform: Platform) => {
    setFormData((prev) => ({
      ...prev,
      platform: prev.platform?.includes(platform)
        ? prev.platform.filter((p) => p !== platform)
        : [...(prev.platform || []), platform],
    }));
  };

  const addTag = () => {
    if (tagInput.trim() && !formData.tags?.includes(tagInput.trim())) {
      setFormData((prev) => ({
        ...prev,
        tags: [...(prev.tags || []), tagInput.trim()],
      }));
      setTagInput("");
    }
  };

  const removeTag = (tag: string) => {
    setFormData((prev) => ({
      ...prev,
      tags: prev.tags?.filter((t) => t !== tag),
    }));
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-slate-800/95 backdrop-blur-xl rounded-2xl border border-white/20 w-full max-w-2xl my-8"
      >
        <form onSubmit={handleSubmit}>
          {/* Header */}
          <div className="p-4 border-b border-white/10 flex items-center justify-between">
            <h3 className="text-xl font-bold text-white">
              {initialContent ? "Edit Content" : "Add New Content"}
            </h3>
            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-lg hover:bg-white/10 text-white transition-colors"
            >
              <FaTimes />
            </button>
          </div>

          {/* Body */}
          <div className="p-4 space-y-4 max-h-[60vh] overflow-y-auto">
            {/* Title */}
            <div>
              <label className="block text-pink-200 text-sm mb-2">
                Title *
              </label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
                placeholder="Enter content title..."
                className="w-full px-4 py-2 bg-white/10 border border-white/20 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                required
              />
            </div>

            {/* Description */}
            <div>
              <label className="block text-pink-200 text-sm mb-2">
                Description
              </label>
              <textarea
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
                placeholder="Enter content description..."
                rows={3}
                className="w-full px-4 py-2 bg-white/10 border border-white/20 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 resize-none"
              />
            </div>

            {/* Date & Time */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-pink-200 text-sm mb-2">
                  Date *
                </label>
                <input
                  type="date"
                  value={formData.date}
                  onChange={(e) =>
                    setFormData({ ...formData, date: e.target.value })
                  }
                  className="w-full px-4 py-2 bg-white/10 border border-white/20 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                  required
                />
              </div>
              <div>
                <label className="block text-pink-200 text-sm mb-2">Time</label>
                <input
                  type="time"
                  value={formData.time}
                  onChange={(e) =>
                    setFormData({ ...formData, time: e.target.value })
                  }
                  className="w-full px-4 py-2 bg-white/10 border border-white/20 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
              </div>
            </div>

            {/* Platforms */}
            <div>
              <label className="block text-pink-200 text-sm mb-2">
                Platforms *
              </label>
              <div className="flex flex-wrap gap-2">
                {PLATFORMS.map((platform) => (
                  <button
                    key={platform.key}
                    type="button"
                    onClick={() => togglePlatform(platform.key)}
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-all ${
                      formData.platform?.includes(platform.key)
                        ? "text-white ring-2 ring-white/50"
                        : "text-pink-200/70 hover:text-white"
                    }`}
                    style={{
                      backgroundColor: formData.platform?.includes(platform.key)
                        ? `${platform.color}60`
                        : "rgba(255,255,255,0.1)",
                    }}
                  >
                    {platform.icon}
                    {platform.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Type & Status */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-pink-200 text-sm mb-2">
                  Content Type
                </label>
                <select
                  value={formData.type}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      type: e.target.value as ContentType,
                    })
                  }
                  className="w-full px-4 py-2 bg-white/10 border border-white/20 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                >
                  {CONTENT_TYPES.map((type) => (
                    <option
                      key={type.key}
                      value={type.key}
                      className="bg-slate-800"
                    >
                      {type.label}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-pink-200 text-sm mb-2">
                  Status
                </label>
                <select
                  value={formData.status}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      status: e.target.value as ContentStatus,
                    })
                  }
                  className="w-full px-4 py-2 bg-white/10 border border-white/20 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                >
                  {Object.entries(STATUS_CONFIG).map(([key, config]) => (
                    <option key={key} value={key} className="bg-slate-800">
                      {config.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Priority & Author */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-pink-200 text-sm mb-2">
                  Priority
                </label>
                <select
                  value={formData.priority}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      priority: e.target.value as Priority,
                    })
                  }
                  className="w-full px-4 py-2 bg-white/10 border border-white/20 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                >
                  {Object.entries(PRIORITY_CONFIG).map(([key, config]) => (
                    <option key={key} value={key} className="bg-slate-800">
                      {config.label}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-pink-200 text-sm mb-2">
                  Author
                </label>
                <input
                  type="text"
                  value={formData.author}
                  onChange={(e) =>
                    setFormData({ ...formData, author: e.target.value })
                  }
                  placeholder="Enter author name..."
                  className="w-full px-4 py-2 bg-white/10 border border-white/20 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
              </div>
            </div>

            {/* Tags */}
            <div>
              <label className="block text-pink-200 text-sm mb-2">Tags</label>
              <div className="flex gap-2 mb-2">
                <input
                  type="text"
                  value={tagInput}
                  onChange={(e) => setTagInput(e.target.value)}
                  onKeyPress={(e) =>
                    e.key === "Enter" && (e.preventDefault(), addTag())
                  }
                  placeholder="Add tag..."
                  className="flex-1 px-4 py-2 bg-white/10 border border-white/20 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
                <button
                  type="button"
                  onClick={addTag}
                  className="px-4 py-2 bg-pink-500/20 text-pink-300 rounded-lg hover:bg-pink-500/30 transition-colors"
                >
                  <FaPlus />
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {formData.tags?.map((tag) => (
                  <span
                    key={tag}
                    className="flex items-center gap-1 px-2 py-1 bg-white/10 text-pink-200 rounded text-sm"
                  >
                    #{tag}
                    <button
                      type="button"
                      onClick={() => removeTag(tag)}
                      className="text-pink-400 hover:text-pink-300"
                    >
                      <FaTimes className="text-xs" />
                    </button>
                  </span>
                ))}
              </div>
            </div>

            {/* Color */}
            <div>
              <label className="block text-pink-200 text-sm mb-2">Color</label>
              <div className="flex gap-2">
                {COLORS.map((color) => (
                  <button
                    key={color}
                    type="button"
                    onClick={() => setFormData({ ...formData, color })}
                    className={`w-8 h-8 rounded-full transition-all ${
                      formData.color === color
                        ? "ring-2 ring-white ring-offset-2 ring-offset-slate-800"
                        : ""
                    }`}
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="p-4 border-t border-white/10 flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-lg hover:from-pink-600 hover:to-purple-700 transition-all"
            >
              <FaSave />
              {initialContent ? "Update" : "Create"}
            </button>
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
}
