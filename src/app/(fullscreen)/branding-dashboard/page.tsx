"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import {
  FaChartLine,
  FaBullhorn,
  FaUsers,
  FaHeart,
  FaEye,
  FaComments,
  FaShare,
  FaStar,
  FaArrowUp,
  FaArrowDown,
  FaCalendarAlt,
  FaInstagram,
  FaFacebook,
  FaTiktok,
  FaYoutube,
  FaGoogle,
  FaGlobe,
  FaFilter,
  FaDownload,
  FaSync,
  FaHome,
  FaLightbulb,
  FaAward,
  FaHandshake,
  FaChartPie,
  FaChartBar,
  FaTrophy,
  FaRegClock,
  FaCheckCircle,
  FaExclamationTriangle,
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
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
} from "recharts";

// ============ INTERFACES ============
interface BrandMetric {
  title: string;
  value: string | number;
  change: number;
  icon: React.ReactNode;
  color: string;
  description: string;
}

interface SocialPlatform {
  name: string;
  icon: React.ReactNode;
  followers: number;
  engagement: number;
  reach: number;
  color: string;
  growth: number;
}

interface CampaignData {
  id: string;
  name: string;
  status: "active" | "completed" | "scheduled" | "paused";
  platform: string;
  budget: number;
  spent: number;
  impressions: number;
  clicks: number;
  conversions: number;
  roi: number;
  startDate: string;
  endDate: string;
}

interface BrandPerception {
  category: string;
  score: number;
  benchmark: number;
}

interface CompetitorData {
  name: string;
  marketShare: number;
  brandAwareness: number;
  socialPresence: number;
  color: string;
}

interface ContentPerformance {
  type: string;
  posts: number;
  avgEngagement: number;
  topPerforming: string;
  color: string;
}

// ============ MOCK DATA ============
const brandMetrics: BrandMetric[] = [
  {
    title: "Brand Awareness",
    value: "78%",
    change: 12.5,
    icon: <FaEye className="text-2xl" />,
    color: "from-blue-500 to-cyan-500",
    description: "การรับรู้แบรนด์ในกลุ่มเป้าหมาย",
  },
  {
    title: "Customer Satisfaction",
    value: "4.8/5",
    change: 8.3,
    icon: <FaStar className="text-2xl" />,
    color: "from-yellow-500 to-orange-500",
    description: "คะแนนความพึงพอใจลูกค้า",
  },
  {
    title: "Social Engagement",
    value: "156K",
    change: 23.7,
    icon: <FaHeart className="text-2xl" />,
    color: "from-pink-500 to-rose-500",
    description: "การมีส่วนร่วมบนโซเชียลมีเดีย",
  },
  {
    title: "Lead Generation",
    value: "2,847",
    change: -5.2,
    icon: <FaUsers className="text-2xl" />,
    color: "from-purple-500 to-indigo-500",
    description: "จำนวน Lead ใหม่ประจำเดือน",
  },
  {
    title: "Marketing ROI",
    value: "324%",
    change: 18.9,
    icon: <FaChartLine className="text-2xl" />,
    color: "from-emerald-500 to-teal-500",
    description: "ผลตอบแทนการลงทุนการตลาด",
  },
  {
    title: "Brand Sentiment",
    value: "92%",
    change: 4.1,
    icon: <FaComments className="text-2xl" />,
    color: "from-indigo-500 to-violet-500",
    description: "ความรู้สึกเชิงบวกต่อแบรนด์",
  },
];

const socialPlatforms: SocialPlatform[] = [
  {
    name: "Instagram",
    icon: <FaInstagram className="text-2xl" />,
    followers: 125000,
    engagement: 4.8,
    reach: 450000,
    color: "#E1306C",
    growth: 15.2,
  },
  {
    name: "Facebook",
    icon: <FaFacebook className="text-2xl" />,
    followers: 89000,
    engagement: 3.2,
    reach: 320000,
    color: "#1877F2",
    growth: 8.7,
  },
  {
    name: "TikTok",
    icon: <FaTiktok className="text-2xl" />,
    followers: 67000,
    engagement: 8.5,
    reach: 1200000,
    color: "#000000",
    growth: 45.3,
  },
  {
    name: "YouTube",
    icon: <FaYoutube className="text-2xl" />,
    followers: 23000,
    engagement: 5.1,
    reach: 180000,
    color: "#FF0000",
    growth: 12.8,
  },
  {
    name: "Google Business",
    icon: <FaGoogle className="text-2xl" />,
    followers: 0,
    engagement: 4.9,
    reach: 95000,
    color: "#4285F4",
    growth: 22.1,
  },
];

const monthlyTrendData = [
  { month: "ม.ค.", awareness: 65, engagement: 120, leads: 180, revenue: 450 },
  { month: "ก.พ.", awareness: 68, engagement: 135, leads: 210, revenue: 520 },
  { month: "มี.ค.", awareness: 70, engagement: 145, leads: 195, revenue: 480 },
  { month: "เม.ย.", awareness: 72, engagement: 155, leads: 245, revenue: 610 },
  { month: "พ.ค.", awareness: 74, engagement: 168, leads: 280, revenue: 720 },
  { month: "มิ.ย.", awareness: 75, engagement: 175, leads: 265, revenue: 680 },
  { month: "ก.ค.", awareness: 77, engagement: 185, leads: 310, revenue: 780 },
  { month: "ส.ค.", awareness: 78, engagement: 192, leads: 295, revenue: 750 },
  { month: "ก.ย.", awareness: 79, engagement: 198, leads: 325, revenue: 820 },
  { month: "ต.ค.", awareness: 80, engagement: 205, leads: 340, revenue: 890 },
  { month: "พ.ย.", awareness: 78, engagement: 210, leads: 320, revenue: 850 },
  { month: "ธ.ค.", awareness: 78, engagement: 215, leads: 345, revenue: 920 },
];

const campaignData: CampaignData[] = [
  {
    id: "1",
    name: "Rhinoplasty Awareness Q4",
    status: "active",
    platform: "Facebook + Instagram",
    budget: 150000,
    spent: 98500,
    impressions: 2450000,
    clicks: 45000,
    conversions: 324,
    roi: 285,
    startDate: "2025-10-01",
    endDate: "2025-12-31",
  },
  {
    id: "2",
    name: "Facelift Premium Campaign",
    status: "active",
    platform: "Google Ads",
    budget: 200000,
    spent: 145000,
    impressions: 1800000,
    clicks: 32000,
    conversions: 156,
    roi: 412,
    startDate: "2025-09-15",
    endDate: "2025-12-15",
  },
  {
    id: "3",
    name: "Year-End Beauty Promotion",
    status: "scheduled",
    platform: "TikTok + Instagram",
    budget: 80000,
    spent: 0,
    impressions: 0,
    clicks: 0,
    conversions: 0,
    roi: 0,
    startDate: "2025-12-15",
    endDate: "2025-12-31",
  },
  {
    id: "4",
    name: "Pterygium Surgery Edu",
    status: "completed",
    platform: "YouTube + Facebook",
    budget: 50000,
    spent: 48500,
    impressions: 890000,
    clicks: 18500,
    conversions: 89,
    roi: 195,
    startDate: "2025-08-01",
    endDate: "2025-10-31",
  },
  {
    id: "5",
    name: "Star Case Showcase",
    status: "active",
    platform: "Instagram Reels",
    budget: 45000,
    spent: 28000,
    impressions: 3200000,
    clicks: 125000,
    conversions: 456,
    roi: 520,
    startDate: "2025-11-01",
    endDate: "2025-12-31",
  },
];

const brandPerceptionData: BrandPerception[] = [
  { category: "Quality", score: 92, benchmark: 78 },
  { category: "Trust", score: 88, benchmark: 72 },
  { category: "Innovation", score: 85, benchmark: 65 },
  { category: "Value", score: 78, benchmark: 70 },
  { category: "Service", score: 95, benchmark: 75 },
  { category: "Expertise", score: 91, benchmark: 68 },
];

const competitorData: CompetitorData[] = [
  {
    name: "BJH Bangkok",
    marketShare: 28,
    brandAwareness: 78,
    socialPresence: 85,
    color: "#8B5CF6",
  },
  {
    name: "Competitor A",
    marketShare: 22,
    brandAwareness: 72,
    socialPresence: 78,
    color: "#EC4899",
  },
  {
    name: "Competitor B",
    marketShare: 18,
    brandAwareness: 65,
    socialPresence: 70,
    color: "#06B6D4",
  },
  {
    name: "Competitor C",
    marketShare: 15,
    brandAwareness: 58,
    socialPresence: 62,
    color: "#F59E0B",
  },
  {
    name: "Others",
    marketShare: 17,
    brandAwareness: 45,
    socialPresence: 50,
    color: "#6B7280",
  },
];

const contentPerformanceData: ContentPerformance[] = [
  {
    type: "Before/After",
    posts: 45,
    avgEngagement: 8.5,
    topPerforming: "Rhinoplasty Results",
    color: "#8B5CF6",
  },
  {
    type: "Educational",
    posts: 32,
    avgEngagement: 5.2,
    topPerforming: "Facelift Process",
    color: "#06B6D4",
  },
  {
    type: "Star Case",
    posts: 28,
    avgEngagement: 12.3,
    topPerforming: "Celebrity Transformation",
    color: "#EC4899",
  },
  {
    type: "Behind the Scenes",
    posts: 18,
    avgEngagement: 6.8,
    topPerforming: "Surgery Day",
    color: "#F59E0B",
  },
  {
    type: "Testimonials",
    posts: 24,
    avgEngagement: 7.4,
    topPerforming: "Patient Journey",
    color: "#10B981",
  },
];

const servicePopularityData = [
  { name: "Rhinoplasty", value: 35, color: "#8B5CF6" },
  { name: "Facelift", value: 25, color: "#EC4899" },
  { name: "Eye Surgery", value: 20, color: "#06B6D4" },
  { name: "Pterygium", value: 12, color: "#F59E0B" },
  { name: "Others", value: 8, color: "#6B7280" },
];

// ============ COMPONENT ============
export default function BrandingDashboard() {
  const router = useRouter();
  const [selectedPeriod, setSelectedPeriod] = useState<string>("monthly");
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [lastUpdated, setLastUpdated] = useState<Date>(new Date());

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

  const formatCurrency = (num: number): string => {
    return new Intl.NumberFormat("th-TH", {
      style: "currency",
      currency: "THB",
      minimumFractionDigits: 0,
    }).format(num);
  };

  const getStatusColor = (status: string): string => {
    switch (status) {
      case "active":
        return "bg-green-500";
      case "completed":
        return "bg-blue-500";
      case "scheduled":
        return "bg-yellow-500";
      case "paused":
        return "bg-gray-500";
      default:
        return "bg-gray-500";
    }
  };

  const getStatusText = (status: string): string => {
    switch (status) {
      case "active":
        return "กำลังดำเนินการ";
      case "completed":
        return "เสร็จสิ้น";
      case "scheduled":
        return "รอดำเนินการ";
      case "paused":
        return "หยุดชั่วคราว";
      default:
        return status;
    }
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-x-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -inset-[10px] opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-4000"></div>
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
          <div className="w-full px-6 py-4">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => router.push("/home")}
                  className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                >
                  <FaHome className="text-white text-lg" />
                </button>
                <div>
                  <h1 className="text-2xl md:text-3xl font-bold text-white flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-gradient-to-br from-pink-500 to-purple-600">
                      <FaChartPie className="text-xl" />
                    </div>
                    Enterprise Relationship Management
                  </h1>
                  <p className="text-pink-200 text-sm mt-1">
                    Marketing & Brand Overview Dashboard - Aesthetic Clinic
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                {/* Period Filter */}
                <select
                  value={selectedPeriod}
                  onChange={(e) => setSelectedPeriod(e.target.value)}
                  className="bg-white/10 border border-white/20 text-white rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
                >
                  <option value="daily" className="bg-slate-800">
                    รายวัน
                  </option>
                  <option value="weekly" className="bg-slate-800">
                    รายสัปดาห์
                  </option>
                  <option value="monthly" className="bg-slate-800">
                    รายเดือน
                  </option>
                  <option value="yearly" className="bg-slate-800">
                    รายปี
                  </option>
                </select>
                {/* Refresh Button */}
                <button
                  onClick={handleRefresh}
                  disabled={isRefreshing}
                  className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-lg hover:from-pink-600 hover:to-purple-700 transition-all disabled:opacity-50"
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
        <main className="w-full px-6 py-6 space-y-6">
          {/* Quick Stats Grid */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <FaChartBar className="text-pink-400" /> Key Performance
              Indicators
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {brandMetrics.map((metric, index) => (
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
                  <p className="text-white text-2xl font-bold">
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
            {/* Brand Trend Chart */}
            <motion.section
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
            >
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <FaChartLine className="text-cyan-400" /> Brand Performance
                Trend
              </h3>
              <ResponsiveContainer width="100%" height={280}>
                <AreaChart data={monthlyTrendData}>
                  <defs>
                    <linearGradient
                      id="colorAwareness"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient
                      id="colorEngagement"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop offset="5%" stopColor="#EC4899" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#EC4899" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#ffffff20" />
                  <XAxis dataKey="month" stroke="#ffffff60" fontSize={12} />
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
                    dataKey="awareness"
                    stroke="#8B5CF6"
                    fillOpacity={1}
                    fill="url(#colorAwareness)"
                    name="Brand Awareness %"
                  />
                  <Area
                    type="monotone"
                    dataKey="engagement"
                    stroke="#EC4899"
                    fillOpacity={1}
                    fill="url(#colorEngagement)"
                    name="Engagement (K)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </motion.section>

            {/* Service Popularity Pie */}
            <motion.section
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
            >
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <FaChartPie className="text-pink-400" /> Service Interest
                Distribution
              </h3>
              <ResponsiveContainer width="100%" height={280}>
                <PieChart>
                  <Pie
                    data={servicePopularityData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={5}
                    dataKey="value"
                    label={({
                      name,
                      percent,
                    }: {
                      name?: string;
                      percent?: number;
                    }) => `${name || ""} ${((percent || 0) * 100).toFixed(0)}%`}
                    labelLine={{ stroke: "#ffffff60" }}
                  >
                    {servicePopularityData.map((entry, index) => (
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
            </motion.section>
          </div>

          {/* Social Media Performance */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <FaGlobe className="text-blue-400" /> Social Media Performance
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {socialPlatforms.map((platform, index) => (
                <motion.div
                  key={platform.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                  whileHover={{ scale: 1.03 }}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className="p-2 rounded-lg text-white"
                      style={{ backgroundColor: platform.color }}
                    >
                      {platform.icon}
                    </div>
                    <div>
                      <p className="text-white font-medium">{platform.name}</p>
                      <p className="text-green-400 text-xs flex items-center gap-1">
                        <FaArrowUp className="text-[10px]" />
                        {platform.growth}%
                      </p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-pink-200/60">Followers</span>
                      <span className="text-white font-medium">
                        {formatNumber(platform.followers)}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-pink-200/60">Engagement</span>
                      <span className="text-white font-medium">
                        {platform.engagement}%
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-pink-200/60">Reach</span>
                      <span className="text-white font-medium">
                        {formatNumber(platform.reach)}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Campaign Performance Table */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
          >
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <FaBullhorn className="text-orange-400" /> Active Marketing
              Campaigns
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[800px]">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left text-pink-200/80 text-sm py-3 px-4">
                      Campaign
                    </th>
                    <th className="text-left text-pink-200/80 text-sm py-3 px-4">
                      Status
                    </th>
                    <th className="text-left text-pink-200/80 text-sm py-3 px-4">
                      Platform
                    </th>
                    <th className="text-right text-pink-200/80 text-sm py-3 px-4">
                      Budget
                    </th>
                    <th className="text-right text-pink-200/80 text-sm py-3 px-4">
                      Spent
                    </th>
                    <th className="text-right text-pink-200/80 text-sm py-3 px-4">
                      Impressions
                    </th>
                    <th className="text-right text-pink-200/80 text-sm py-3 px-4">
                      Conversions
                    </th>
                    <th className="text-right text-pink-200/80 text-sm py-3 px-4">
                      ROI
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {campaignData.map((campaign, index) => (
                    <motion.tr
                      key={campaign.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.4 + index * 0.05 }}
                      className="border-b border-white/5 hover:bg-white/5 transition-colors"
                    >
                      <td className="py-3 px-4">
                        <p className="text-white font-medium">
                          {campaign.name}
                        </p>
                        <p className="text-pink-200/50 text-xs">
                          {campaign.startDate} - {campaign.endDate}
                        </p>
                      </td>
                      <td className="py-3 px-4">
                        <span
                          className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs text-white ${getStatusColor(
                            campaign.status
                          )}`}
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
                          {getStatusText(campaign.status)}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-pink-200/80 text-sm">
                        {campaign.platform}
                      </td>
                      <td className="py-3 px-4 text-left text-white text-sm">
                        {formatCurrency(campaign.budget)}
                      </td>
                      <td className="py-3 px-4 text-left">
                        <span className="text-white text-sm">
                          {formatCurrency(campaign.spent)}
                        </span>
                        <div className="w-full bg-white/10 rounded-full h-1.5 mt-1">
                          <div
                            className="bg-gradient-to-r from-pink-500 to-purple-500 h-1.5 rounded-full"
                            style={{
                              width: `${
                                (campaign.spent / campaign.budget) * 100
                              }%`,
                            }}
                          ></div>
                        </div>
                      </td>
                      <td className="py-3 px-4 text-right text-white text-sm">
                        {formatNumber(campaign.impressions)}
                      </td>
                      <td className="py-3 px-4 text-right text-white text-sm">
                        {formatNumber(campaign.conversions)}
                      </td>
                      <td className="py-3 px-4 text-right">
                        <span
                          className={`font-bold ${
                            campaign.roi > 200
                              ? "text-green-400"
                              : campaign.roi > 100
                              ? "text-yellow-400"
                              : "text-red-400"
                          }`}
                        >
                          {campaign.roi}%
                        </span>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.section>

          {/* Brand Perception & Competitor Analysis */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Brand Perception Radar */}
            <motion.section
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
            >
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <FaAward className="text-yellow-400" /> Brand Perception
                Analysis
              </h3>
              <ResponsiveContainer width="100%" height={280}>
                <RadarChart
                  cx="50%"
                  cy="50%"
                  outerRadius="70%"
                  data={brandPerceptionData}
                >
                  <PolarGrid stroke="#ffffff20" />
                  <PolarAngleAxis
                    dataKey="category"
                    stroke="#ffffff80"
                    fontSize={12}
                  />
                  <PolarRadiusAxis stroke="#ffffff40" fontSize={10} />
                  <Radar
                    name="BJH Bangkok"
                    dataKey="score"
                    stroke="#8B5CF6"
                    fill="#8B5CF6"
                    fillOpacity={0.5}
                  />
                  <Radar
                    name="Industry Benchmark"
                    dataKey="benchmark"
                    stroke="#EC4899"
                    fill="#EC4899"
                    fillOpacity={0.3}
                  />
                  <Legend />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#1e1b4b",
                      border: "1px solid #ffffff20",
                      borderRadius: "8px",
                      color: "#fff",
                    }}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </motion.section>

            {/* Market Share Comparison */}
            <motion.section
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
            >
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <FaTrophy className="text-amber-400" /> Competitive Landscape
              </h3>
              <ResponsiveContainer width="100%" height={280}>
                <BarChart data={competitorData} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" stroke="#ffffff20" />
                  <XAxis type="number" stroke="#ffffff60" fontSize={12} />
                  <YAxis
                    dataKey="name"
                    type="category"
                    stroke="#ffffff60"
                    fontSize={11}
                    width={90}
                  />
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
                    dataKey="marketShare"
                    name="Market Share %"
                    fill="#8B5CF6"
                    radius={[0, 4, 4, 0]}
                  />
                  <Bar
                    dataKey="brandAwareness"
                    name="Brand Awareness %"
                    fill="#EC4899"
                    radius={[0, 4, 4, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </motion.section>
          </div>

          {/* Content Performance */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
          >
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <FaLightbulb className="text-yellow-400" /> Content Performance by
              Type
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              {contentPerformanceData.map((content, index) => (
                <motion.div
                  key={content.type}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.6 + index * 0.05 }}
                  className="bg-white/5 rounded-lg p-4 border border-white/5"
                >
                  <div
                    className="w-full h-1 rounded-full mb-3"
                    style={{ backgroundColor: content.color }}
                  ></div>
                  <p className="text-white font-medium mb-1">{content.type}</p>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>
                      <p className="text-pink-200/60 text-xs">Posts</p>
                      <p className="text-white font-bold">{content.posts}</p>
                    </div>
                    <div>
                      <p className="text-pink-200/60 text-xs">Avg. Eng.</p>
                      <p className="text-white font-bold">
                        {content.avgEngagement}%
                      </p>
                    </div>
                  </div>
                  <p className="text-pink-200/50 text-xs mt-2 truncate">
                    Top: {content.topPerforming}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Quick Insights */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4"
          >
            {/* Insight 1 */}
            <div className="bg-gradient-to-br from-green-500/20 to-emerald-600/20 backdrop-blur-sm rounded-xl p-5 border border-green-500/30">
              <div className="flex items-center gap-3 mb-3">
                <FaCheckCircle className="text-green-400 text-xl" />
                <h4 className="text-white font-bold">Top Performing</h4>
              </div>
              <p className="text-green-200 text-sm">
                Star Case content achieves{" "}
                <span className="text-white font-bold">12.3%</span> engagement
                rate, outperforming industry average by{" "}
                <span className="text-white font-bold">3.5x</span>.
              </p>
            </div>

            {/* Insight 2 */}
            <div className="bg-gradient-to-br from-yellow-500/20 to-orange-600/20 backdrop-blur-sm rounded-xl p-5 border border-yellow-500/30">
              <div className="flex items-center gap-3 mb-3">
                <FaExclamationTriangle className="text-yellow-400 text-xl" />
                <h4 className="text-white font-bold">Attention Needed</h4>
              </div>
              <p className="text-yellow-200 text-sm">
                Lead generation decreased by{" "}
                <span className="text-white font-bold">5.2%</span>. Consider
                increasing budget allocation for conversion campaigns.
              </p>
            </div>

            {/* Insight 3 */}
            <div className="bg-gradient-to-br from-blue-500/20 to-cyan-600/20 backdrop-blur-sm rounded-xl p-5 border border-blue-500/30">
              <div className="flex items-center gap-3 mb-3">
                <FaHandshake className="text-blue-400 text-xl" />
                <h4 className="text-white font-bold">Opportunity</h4>
              </div>
              <p className="text-blue-200 text-sm">
                TikTok shows <span className="text-white font-bold">45.3%</span>{" "}
                growth rate. Potential for increased investment in short-form
                video content.
              </p>
            </div>
          </motion.section>

          {/* Footer */}
          <motion.footer
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="text-center py-6 text-pink-200/50 text-sm"
          >
            <p>
              © 2025 BJH Bangkok - Enterprise Relationship Management System
            </p>
            <p className="text-xs mt-1">
              Marketing & Brand Overview Dashboard - Aesthetic Clinic Industry
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
