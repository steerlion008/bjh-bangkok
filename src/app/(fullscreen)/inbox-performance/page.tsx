"use client";

import React, { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import {
  FaEnvelope,
  FaUser,
  FaUsers,
  FaClock,
  FaChartLine,
  FaCheckCircle,
  FaExclamationTriangle,
  FaHome,
  FaSync,
  FaDownload,
  FaFilter,
  FaCalendarAlt,
  FaReply,
  FaComments,
  FaUserClock,
  FaTrophy,
  FaArrowUp,
  FaArrowDown,
  FaMedal,
  FaFire,
  FaChartBar,
  FaSearch,
  FaFacebook,
  FaLine,
  FaPhone,
  FaEye,
  FaStar,
  FaAward,
} from "react-icons/fa";
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ComposedChart,
} from "recharts";

// ============ INTERFACES ============
interface StaffMember {
  id: string;
  name: string;
  avatar?: string;
  role: string;
  department: string;
  totalMessages: number;
  repliedMessages: number;
  avgResponseTime: number; // in minutes
  firstResponseRate: number; // percentage
  satisfactionScore: number; // 1-5
  activeChats: number;
  closedChats: number;
  missedMessages: number;
  peakHour: string;
  status: "online" | "away" | "offline";
}

interface InboxMetric {
  title: string;
  value: string | number;
  change: number;
  icon: React.ReactNode;
  color: string;
  description: string;
}

interface DailyInboxData {
  date: string;
  received: number;
  replied: number;
  avgResponseTime: number;
  satisfactionScore: number;
}

interface MessageSource {
  name: string;
  icon: React.ReactNode;
  count: number;
  color: string;
  percentage: number;
}

interface HourlyData {
  hour: string;
  messages: number;
  responses: number;
}

interface CustomerInquiry {
  id: string;
  customerName: string;
  source: string;
  message: string;
  assignedTo: string;
  status: "pending" | "in-progress" | "resolved" | "escalated";
  createdAt: string;
  responseTime?: number;
  priority: "low" | "medium" | "high";
}

// ============ MOCK DATA ============
const staffMembers: StaffMember[] = [
  {
    id: "1",
    name: "สมหญิง ใจดี",
    role: "Customer Service Lead",
    department: "Marketing",
    totalMessages: 156,
    repliedMessages: 148,
    avgResponseTime: 8,
    firstResponseRate: 95,
    satisfactionScore: 4.8,
    activeChats: 12,
    closedChats: 144,
    missedMessages: 8,
    peakHour: "10:00-11:00",
    status: "online",
  },
  {
    id: "2",
    name: "สมชาย เก่งมาก",
    role: "Customer Service",
    department: "Marketing",
    totalMessages: 134,
    repliedMessages: 125,
    avgResponseTime: 12,
    firstResponseRate: 88,
    satisfactionScore: 4.5,
    activeChats: 8,
    closedChats: 117,
    missedMessages: 9,
    peakHour: "14:00-15:00",
    status: "online",
  },
  {
    id: "3",
    name: "วิภา สุขใจ",
    role: "Customer Service",
    department: "Marketing",
    totalMessages: 98,
    repliedMessages: 92,
    avgResponseTime: 15,
    firstResponseRate: 82,
    satisfactionScore: 4.3,
    activeChats: 5,
    closedChats: 87,
    missedMessages: 6,
    peakHour: "11:00-12:00",
    status: "away",
  },
  {
    id: "4",
    name: "ณัฐพล ดีเลิศ",
    role: "Sales Consultant",
    department: "Sales",
    totalMessages: 87,
    repliedMessages: 78,
    avgResponseTime: 18,
    firstResponseRate: 75,
    satisfactionScore: 4.2,
    activeChats: 3,
    closedChats: 75,
    missedMessages: 9,
    peakHour: "13:00-14:00",
    status: "online",
  },
  {
    id: "5",
    name: "ปิยะ สดใส",
    role: "Customer Service",
    department: "Marketing",
    totalMessages: 76,
    repliedMessages: 68,
    avgResponseTime: 22,
    firstResponseRate: 70,
    satisfactionScore: 4.0,
    activeChats: 4,
    closedChats: 64,
    missedMessages: 8,
    peakHour: "15:00-16:00",
    status: "offline",
  },
];

const inboxMetrics: InboxMetric[] = [
  {
    title: "Total Inbox Today",
    value: "324",
    change: 12.5,
    icon: <FaEnvelope className="text-2xl" />,
    color: "from-blue-500 to-cyan-500",
    description: "ข้อความทั้งหมดวันนี้",
  },
  {
    title: "Response Rate",
    value: "94%",
    change: 3.2,
    icon: <FaReply className="text-2xl" />,
    color: "from-green-500 to-emerald-500",
    description: "อัตราการตอบกลับ",
  },
  {
    title: "Avg Response Time",
    value: "12 min",
    change: -8.5,
    icon: <FaClock className="text-2xl" />,
    color: "from-purple-500 to-indigo-500",
    description: "เวลาตอบกลับเฉลี่ย",
  },
  {
    title: "Satisfaction Score",
    value: "4.6/5",
    change: 5.1,
    icon: <FaStar className="text-2xl" />,
    color: "from-yellow-500 to-orange-500",
    description: "คะแนนความพึงพอใจ",
  },
  {
    title: "Active Conversations",
    value: "32",
    change: 18.3,
    icon: <FaComments className="text-2xl" />,
    color: "from-pink-500 to-rose-500",
    description: "การสนทนาที่กำลังดำเนินการ",
  },
  {
    title: "Resolved Today",
    value: "289",
    change: 15.7,
    icon: <FaCheckCircle className="text-2xl" />,
    color: "from-teal-500 to-cyan-500",
    description: "แก้ไขเสร็จสิ้นวันนี้",
  },
];

const dailyInboxData: DailyInboxData[] = [
  {
    date: "จ.",
    received: 280,
    replied: 265,
    avgResponseTime: 14,
    satisfactionScore: 4.5,
  },
  {
    date: "อ.",
    received: 320,
    replied: 305,
    avgResponseTime: 12,
    satisfactionScore: 4.6,
  },
  {
    date: "พ.",
    received: 295,
    replied: 278,
    avgResponseTime: 15,
    satisfactionScore: 4.4,
  },
  {
    date: "พฤ.",
    received: 340,
    replied: 325,
    avgResponseTime: 11,
    satisfactionScore: 4.7,
  },
  {
    date: "ศ.",
    received: 380,
    replied: 358,
    avgResponseTime: 10,
    satisfactionScore: 4.8,
  },
  {
    date: "ส.",
    received: 220,
    replied: 208,
    avgResponseTime: 18,
    satisfactionScore: 4.3,
  },
  {
    date: "อา.",
    received: 180,
    replied: 170,
    avgResponseTime: 20,
    satisfactionScore: 4.2,
  },
];

const messageSources: MessageSource[] = [
  {
    name: "Facebook Messenger",
    icon: <FaFacebook />,
    count: 145,
    color: "#1877F2",
    percentage: 45,
  },
  {
    name: "LINE Official",
    icon: <FaLine />,
    count: 98,
    color: "#00B900",
    percentage: 30,
  },
  {
    name: "Phone Calls",
    icon: <FaPhone />,
    count: 52,
    color: "#F59E0B",
    percentage: 16,
  },
  {
    name: "Website Chat",
    icon: <FaComments />,
    count: 29,
    color: "#8B5CF6",
    percentage: 9,
  },
];

const hourlyData: HourlyData[] = [
  { hour: "08:00", messages: 15, responses: 14 },
  { hour: "09:00", messages: 28, responses: 26 },
  { hour: "10:00", messages: 45, responses: 43 },
  { hour: "11:00", messages: 52, responses: 49 },
  { hour: "12:00", messages: 38, responses: 35 },
  { hour: "13:00", messages: 42, responses: 40 },
  { hour: "14:00", messages: 48, responses: 45 },
  { hour: "15:00", messages: 35, responses: 33 },
  { hour: "16:00", messages: 28, responses: 27 },
  { hour: "17:00", messages: 22, responses: 21 },
  { hour: "18:00", messages: 18, responses: 17 },
  { hour: "19:00", messages: 12, responses: 11 },
];

const recentInquiries: CustomerInquiry[] = [
  {
    id: "INQ001",
    customerName: "คุณมะลิ",
    source: "Facebook",
    message: "สอบถามราคาศัลยกรรมจมูกค่ะ",
    assignedTo: "สมหญิง ใจดี",
    status: "in-progress",
    createdAt: "10 นาทีที่แล้ว",
    responseTime: 3,
    priority: "high",
  },
  {
    id: "INQ002",
    customerName: "คุณสมศักดิ์",
    source: "LINE",
    message: "ต้องการนัดปรึกษาเรื่องตาสองชั้น",
    assignedTo: "สมชาย เก่งมาก",
    status: "pending",
    createdAt: "25 นาทีที่แล้ว",
    priority: "medium",
  },
  {
    id: "INQ003",
    customerName: "คุณนภา",
    source: "Phone",
    message: "สอบถามโปรโมชั่นประจำเดือน",
    assignedTo: "วิภา สุขใจ",
    status: "resolved",
    createdAt: "45 นาทีที่แล้ว",
    responseTime: 8,
    priority: "low",
  },
  {
    id: "INQ004",
    customerName: "คุณวิชัย",
    source: "Website",
    message: "ต้องการข้อมูลเพิ่มเติมเรื่อง Facelift",
    assignedTo: "ณัฐพล ดีเลิศ",
    status: "escalated",
    createdAt: "1 ชั่วโมงที่แล้ว",
    priority: "high",
  },
  {
    id: "INQ005",
    customerName: "คุณแก้วตา",
    source: "Facebook",
    message: "สอบถามการดูแลหลังผ่าตัด",
    assignedTo: "สมหญิง ใจดี",
    status: "resolved",
    createdAt: "2 ชั่วโมงที่แล้ว",
    responseTime: 5,
    priority: "medium",
  },
];

// ============ COMPONENT ============
export default function InboxPerformanceDashboard() {
  const router = useRouter();
  const [selectedPeriod, setSelectedPeriod] = useState<string>("today");
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [lastUpdated, setLastUpdated] = useState<Date>(new Date());
  const [selectedStaff, setSelectedStaff] = useState<string | null>(null);
  const [filterStatus, setFilterStatus] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
      setLastUpdated(new Date());
    }, 1500);
  };

  const formatNumber = (num: number): string => {
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
    if (num >= 1000) return `${(num / 1000).toFixed(1)}K`;
    return num.toString();
  };

  const getStatusColor = (status: string): string => {
    switch (status) {
      case "online":
        return "bg-green-500";
      case "away":
        return "bg-yellow-500";
      case "offline":
        return "bg-gray-500";
      case "pending":
        return "bg-yellow-500";
      case "in-progress":
        return "bg-blue-500";
      case "resolved":
        return "bg-green-500";
      case "escalated":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };

  const getStatusText = (status: string): string => {
    switch (status) {
      case "online":
        return "ออนไลน์";
      case "away":
        return "ไม่อยู่";
      case "offline":
        return "ออฟไลน์";
      case "pending":
        return "รอดำเนินการ";
      case "in-progress":
        return "กำลังดำเนินการ";
      case "resolved":
        return "แก้ไขแล้ว";
      case "escalated":
        return "ส่งต่อ";
      default:
        return status;
    }
  };

  const getPriorityColor = (priority: string): string => {
    switch (priority) {
      case "high":
        return "text-red-400 bg-red-500/20";
      case "medium":
        return "text-yellow-400 bg-yellow-500/20";
      case "low":
        return "text-green-400 bg-green-500/20";
      default:
        return "text-gray-400 bg-gray-500/20";
    }
  };

  const getSourceIcon = (source: string): React.ReactNode => {
    switch (source) {
      case "Facebook":
        return <FaFacebook className="text-blue-500" />;
      case "LINE":
        return <FaLine className="text-green-500" />;
      case "Phone":
        return <FaPhone className="text-yellow-500" />;
      case "Website":
        return <FaComments className="text-purple-500" />;
      default:
        return <FaEnvelope className="text-gray-500" />;
    }
  };

  // Sort staff by performance score
  const sortedStaff = useMemo(() => {
    return [...staffMembers].sort((a, b) => {
      const scoreA =
        (a.repliedMessages / a.totalMessages) * 100 +
        (100 - a.avgResponseTime) +
        a.satisfactionScore * 20;
      const scoreB =
        (b.repliedMessages / b.totalMessages) * 100 +
        (100 - b.avgResponseTime) +
        b.satisfactionScore * 20;
      return scoreB - scoreA;
    });
  }, []);

  const filteredInquiries = useMemo(() => {
    return recentInquiries.filter((inquiry) => {
      const matchesStatus =
        filterStatus === "all" || inquiry.status === filterStatus;
      const matchesSearch =
        searchQuery === "" ||
        inquiry.customerName
          .toLowerCase()
          .includes(searchQuery.toLowerCase()) ||
        inquiry.message.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesStatus && matchesSearch;
    });
  }, [filterStatus, searchQuery]);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-x-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -inset-[10px] opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-4000"></div>
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
                  <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-white flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600">
                      <FaEnvelope className="text-xl" />
                    </div>
                    Inbox Performance Dashboard
                  </h1>
                  <p className="text-pink-200 text-sm mt-1">
                    Customer Communication Tracking & Response Analytics
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                {/* Period Filter */}
                <select
                  value={selectedPeriod}
                  onChange={(e) => setSelectedPeriod(e.target.value)}
                  className="bg-white/10 border border-white/20 text-white rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="today" className="bg-slate-800">
                    วันนี้
                  </option>
                  <option value="yesterday" className="bg-slate-800">
                    เมื่อวาน
                  </option>
                  <option value="7days" className="bg-slate-800">
                    7 วันที่แล้ว
                  </option>
                  <option value="30days" className="bg-slate-800">
                    30 วันที่แล้ว
                  </option>
                  <option value="thisMonth" className="bg-slate-800">
                    เดือนนี้
                  </option>
                </select>
                {/* Refresh Button */}
                <button
                  onClick={handleRefresh}
                  disabled={isRefreshing}
                  className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all disabled:opacity-50"
                >
                  <FaSync className={`${isRefreshing ? "animate-spin" : ""}`} />
                  <span className="hidden md:inline">รีเฟรช</span>
                </button>
                {/* Export Button */}
                <button className="flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 text-white rounded-lg hover:bg-white/20 transition-all">
                  <FaDownload />
                  <span className="hidden md:inline">ส่งออก</span>
                </button>
              </div>
            </div>
            <div className="mt-2 text-xs text-pink-200/60">
              อัปเดตล่าสุด:{" "}
              {lastUpdated.toLocaleString("th-TH", {
                dateStyle: "medium",
                timeStyle: "short",
              })}
            </div>
          </div>
        </motion.header>

        {/* Main Content */}
        <main className="w-full px-4 md:px-6 py-6 space-y-6">
          {/* Quick Stats Grid */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <FaChartBar className="text-blue-400" /> Key Performance
              Indicators
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
              {inboxMetrics.map((metric, index) => (
                <motion.div
                  key={metric.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileHover={{ scale: 1.03, y: -5 }}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-all"
                >
                  <div
                    className={`inline-flex p-2 rounded-lg bg-gradient-to-r ${metric.color} text-white mb-3`}
                  >
                    {metric.icon}
                  </div>
                  <p className="text-pink-200/80 text-xs mb-1">
                    {metric.title}
                  </p>
                  <p className="text-white text-xl md:text-2xl font-bold">
                    {metric.value}
                  </p>
                  <div
                    className={`flex items-center gap-1 text-xs mt-1 ${
                      metric.change >= 0 ? "text-green-400" : "text-red-400"
                    }`}
                  >
                    {metric.change >= 0 ? <FaArrowUp /> : <FaArrowDown />}
                    <span>{Math.abs(metric.change)}%</span>
                  </div>
                  <p className="text-pink-200/50 text-[10px] mt-2">
                    {metric.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Charts Row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Daily Inbox Trend */}
            <motion.section
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-white/10"
            >
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <FaChartLine className="text-cyan-400" /> Weekly Inbox Trend
              </h3>
              <ResponsiveContainer width="100%" height={280}>
                <ComposedChart data={dailyInboxData}>
                  <defs>
                    <linearGradient
                      id="colorReceived"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#3B82F6" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient
                      id="colorReplied"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop offset="5%" stopColor="#10B981" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#10B981" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#ffffff20" />
                  <XAxis dataKey="date" stroke="#ffffff60" fontSize={12} />
                  <YAxis stroke="#ffffff60" fontSize={12} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#1e1b4b",
                      border: "1px solid #ffffff20",
                      borderRadius: "8px",
                      color: "#fff",
                    }}
                  />
                  <Legend />
                  <Area
                    type="monotone"
                    dataKey="received"
                    stroke="#3B82F6"
                    fillOpacity={1}
                    fill="url(#colorReceived)"
                    name="ข้อความรับเข้า"
                  />
                  <Area
                    type="monotone"
                    dataKey="replied"
                    stroke="#10B981"
                    fillOpacity={1}
                    fill="url(#colorReplied)"
                    name="ตอบกลับแล้ว"
                  />
                </ComposedChart>
              </ResponsiveContainer>
            </motion.section>

            {/* Message Source Distribution */}
            <motion.section
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-white/10"
            >
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <FaComments className="text-pink-400" /> Message Sources
              </h3>
              <div className="flex flex-col md:flex-row items-center gap-6">
                <ResponsiveContainer width="100%" height={200}>
                  <PieChart>
                    <Pie
                      data={messageSources.map(
                        ({ name, count, color, percentage }) => ({
                          name,
                          count,
                          color,
                          percentage,
                        })
                      )}
                      cx="50%"
                      cy="50%"
                      innerRadius={50}
                      outerRadius={80}
                      paddingAngle={5}
                      dataKey="count"
                    >
                      {messageSources.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#1e1b4b",
                        border: "1px solid #ffffff20",
                        borderRadius: "8px",
                        color: "#fff",
                      }}
                    />
                  </PieChart>
                </ResponsiveContainer>
                <div className="flex-1 space-y-3 w-full">
                  {messageSources.map((source, index) => (
                    <motion.div
                      key={source.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                      className="flex items-center gap-3"
                    >
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center text-white"
                        style={{ backgroundColor: source.color }}
                      >
                        {source.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-white text-sm">
                            {source.name}
                          </span>
                          <span className="text-pink-200 text-sm font-medium">
                            {source.count} ({source.percentage}%)
                          </span>
                        </div>
                        <div className="w-full bg-white/10 rounded-full h-2">
                          <div
                            className="h-2 rounded-full"
                            style={{
                              width: `${source.percentage}%`,
                              backgroundColor: source.color,
                            }}
                          ></div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.section>
          </div>

          {/* Hourly Activity Chart */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white/5 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-white/10"
          >
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <FaClock className="text-yellow-400" /> Hourly Activity
              Distribution
            </h3>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={hourlyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#ffffff20" />
                <XAxis dataKey="hour" stroke="#ffffff60" fontSize={11} />
                <YAxis stroke="#ffffff60" fontSize={12} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#1e1b4b",
                    border: "1px solid #ffffff20",
                    borderRadius: "8px",
                    color: "#fff",
                  }}
                />
                <Legend />
                <Bar
                  dataKey="messages"
                  fill="#3B82F6"
                  name="ข้อความเข้า"
                  radius={[4, 4, 0, 0]}
                />
                <Bar
                  dataKey="responses"
                  fill="#10B981"
                  name="ตอบกลับ"
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </motion.section>

          {/* Staff Performance Table */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white/5 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-white/10"
          >
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <FaTrophy className="text-amber-400" /> Staff Performance Ranking
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[800px]">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left text-pink-200/80 text-sm py-3 px-4">
                      อันดับ
                    </th>
                    <th className="text-left text-pink-200/80 text-sm py-3 px-4">
                      พนักงาน
                    </th>
                    <th className="text-center text-pink-200/80 text-sm py-3 px-4">
                      สถานะ
                    </th>
                    <th className="text-right text-pink-200/80 text-sm py-3 px-4">
                      ข้อความทั้งหมด
                    </th>
                    <th className="text-right text-pink-200/80 text-sm py-3 px-4">
                      ตอบกลับแล้ว
                    </th>
                    <th className="text-right text-pink-200/80 text-sm py-3 px-4">
                      อัตราตอบกลับ
                    </th>
                    <th className="text-right text-pink-200/80 text-sm py-3 px-4">
                      เวลาตอบกลับเฉลี่ย
                    </th>
                    <th className="text-right text-pink-200/80 text-sm py-3 px-4">
                      คะแนนความพึงพอใจ
                    </th>
                    <th className="text-center text-pink-200/80 text-sm py-3 px-4">
                      ช่วงเวลาพีค
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {sortedStaff.map((staff, index) => (
                    <motion.tr
                      key={staff.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.4 + index * 0.05 }}
                      className={`border-b border-white/5 hover:bg-white/5 transition-colors cursor-pointer ${
                        selectedStaff === staff.id ? "bg-white/10" : ""
                      }`}
                      onClick={() =>
                        setSelectedStaff(
                          selectedStaff === staff.id ? null : staff.id
                        )
                      }
                    >
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-2">
                          {index === 0 && (
                            <FaMedal className="text-yellow-400 text-lg" />
                          )}
                          {index === 1 && (
                            <FaMedal className="text-gray-300 text-lg" />
                          )}
                          {index === 2 && (
                            <FaMedal className="text-amber-600 text-lg" />
                          )}
                          {index > 2 && (
                            <span className="text-white/60 font-medium w-5 text-center">
                              {index + 1}
                            </span>
                          )}
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold">
                            {staff.name.charAt(0)}
                          </div>
                          <div>
                            <p className="text-white font-medium">
                              {staff.name}
                            </p>
                            <p className="text-pink-200/50 text-xs">
                              {staff.role} • {staff.department}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="py-3 px-4 text-center">
                        <span
                          className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs text-white ${getStatusColor(
                            staff.status
                          )}`}
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
                          {getStatusText(staff.status)}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-right text-white">
                        {staff.totalMessages}
                      </td>
                      <td className="py-3 px-4 text-right text-white">
                        {staff.repliedMessages}
                      </td>
                      <td className="py-3 px-4 text-right">
                        <span
                          className={`font-medium ${
                            (staff.repliedMessages / staff.totalMessages) *
                              100 >=
                            90
                              ? "text-green-400"
                              : (staff.repliedMessages / staff.totalMessages) *
                                  100 >=
                                80
                              ? "text-yellow-400"
                              : "text-red-400"
                          }`}
                        >
                          {(
                            (staff.repliedMessages / staff.totalMessages) *
                            100
                          ).toFixed(1)}
                          %
                        </span>
                      </td>
                      <td className="py-3 px-4 text-right">
                        <span
                          className={`font-medium ${
                            staff.avgResponseTime <= 10
                              ? "text-green-400"
                              : staff.avgResponseTime <= 20
                              ? "text-yellow-400"
                              : "text-red-400"
                          }`}
                        >
                          {staff.avgResponseTime} นาที
                        </span>
                      </td>
                      <td className="py-3 px-4 text-right">
                        <div className="flex items-center justify-end gap-1">
                          <FaStar className="text-yellow-400" />
                          <span className="text-white font-medium">
                            {staff.satisfactionScore.toFixed(1)}
                          </span>
                        </div>
                      </td>
                      <td className="py-3 px-4 text-center text-pink-200/80 text-sm">
                        {staff.peakHour}
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.section>

          {/* Recent Inquiries */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-white/5 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-white/10"
          >
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <FaEnvelope className="text-blue-400" /> Recent Customer
                Inquiries
              </h3>
              <div className="flex flex-wrap items-center gap-3">
                {/* Search */}
                <div className="relative">
                  <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40" />
                  <input
                    type="text"
                    placeholder="ค้นหา..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="bg-white/10 border border-white/20 text-white rounded-lg pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-48"
                  />
                </div>
                {/* Status Filter */}
                <select
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                  className="bg-white/10 border border-white/20 text-white rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="all" className="bg-slate-800">
                    ทุกสถานะ
                  </option>
                  <option value="pending" className="bg-slate-800">
                    รอดำเนินการ
                  </option>
                  <option value="in-progress" className="bg-slate-800">
                    กำลังดำเนินการ
                  </option>
                  <option value="resolved" className="bg-slate-800">
                    แก้ไขแล้ว
                  </option>
                  <option value="escalated" className="bg-slate-800">
                    ส่งต่อ
                  </option>
                </select>
              </div>
            </div>
            <div className="space-y-3">
              {filteredInquiries.map((inquiry, index) => (
                <motion.div
                  key={inquiry.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
                  className="bg-white/5 rounded-lg p-4 border border-white/5 hover:bg-white/10 transition-all"
                >
                  <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
                    <div className="flex items-start gap-3 flex-1">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center text-white shrink-0">
                        {inquiry.customerName.charAt(0)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="text-white font-medium">
                            {inquiry.customerName}
                          </span>
                          <span className="text-pink-200/60 text-sm flex items-center gap-1">
                            {getSourceIcon(inquiry.source)} {inquiry.source}
                          </span>
                          <span
                            className={`px-2 py-0.5 rounded-full text-xs ${getPriorityColor(
                              inquiry.priority
                            )}`}
                          >
                            {inquiry.priority === "high"
                              ? "สำคัญ"
                              : inquiry.priority === "medium"
                              ? "ปานกลาง"
                              : "ทั่วไป"}
                          </span>
                        </div>
                        <p className="text-pink-200/80 text-sm mt-1 truncate">
                          {inquiry.message}
                        </p>
                        <div className="flex items-center gap-4 mt-2 text-xs text-pink-200/60">
                          <span className="flex items-center gap-1">
                            <FaUser /> {inquiry.assignedTo}
                          </span>
                          <span className="flex items-center gap-1">
                            <FaClock /> {inquiry.createdAt}
                          </span>
                          {inquiry.responseTime && (
                            <span className="flex items-center gap-1 text-green-400">
                              <FaReply /> ตอบใน {inquiry.responseTime} นาที
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span
                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs text-white ${getStatusColor(
                          inquiry.status
                        )}`}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
                        {getStatusText(inquiry.status)}
                      </span>
                      <button className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors text-white">
                        <FaEye />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Quick Insights */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4"
          >
            {/* Insight 1 */}
            <div className="bg-gradient-to-br from-green-500/20 to-emerald-600/20 backdrop-blur-sm rounded-xl p-5 border border-green-500/30">
              <div className="flex items-center gap-3 mb-3">
                <FaCheckCircle className="text-green-400 text-xl" />
                <h4 className="text-white font-bold">Top Performer</h4>
              </div>
              <p className="text-green-200 text-sm">
                <span className="text-white font-bold">สมหญิง ใจดี</span>{" "}
                มีอัตราการตอบกลับสูงสุด{" "}
                <span className="text-white font-bold">95%</span>{" "}
                และเวลาตอบกลับเฉลี่ยเพียง{" "}
                <span className="text-white font-bold">8 นาที</span>
              </p>
            </div>

            {/* Insight 2 */}
            <div className="bg-gradient-to-br from-yellow-500/20 to-orange-600/20 backdrop-blur-sm rounded-xl p-5 border border-yellow-500/30">
              <div className="flex items-center gap-3 mb-3">
                <FaFire className="text-orange-400 text-xl" />
                <h4 className="text-white font-bold">Peak Hours</h4>
              </div>
              <p className="text-yellow-200 text-sm">
                ช่วงเวลา{" "}
                <span className="text-white font-bold">10:00-12:00</span>{" "}
                มีข้อความเข้ามากที่สุด
                ควรเพิ่มพนักงานช่วงนี้เพื่อรองรับปริมาณงาน
              </p>
            </div>

            {/* Insight 3 */}
            <div className="bg-gradient-to-br from-blue-500/20 to-cyan-600/20 backdrop-blur-sm rounded-xl p-5 border border-blue-500/30">
              <div className="flex items-center gap-3 mb-3">
                <FaAward className="text-blue-400 text-xl" />
                <h4 className="text-white font-bold">Achievement</h4>
              </div>
              <p className="text-blue-200 text-sm">
                อัตราความพึงพอใจลูกค้าเฉลี่ย{" "}
                <span className="text-white font-bold">4.6/5</span>{" "}
                สูงกว่าเป้าหมาย{" "}
                <span className="text-white font-bold">15%</span>!
                ทีมทำงานได้ยอดเยี่ยม 🎉
              </p>
            </div>
          </motion.section>

          {/* Footer */}
          <motion.footer
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="text-center py-6 text-pink-200/50 text-sm"
          >
            <p>© 2025 BJH Bangkok - Inbox Performance Dashboard</p>
            <p className="text-xs mt-1">
              Customer Communication Tracking & Response Analytics
            </p>
          </motion.footer>
        </main>
      </div>

      <style jsx>{`
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}
