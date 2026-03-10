"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  TrendingUp,
  CheckCircle2,
  Clock,
  AlertTriangle,
  Pause,
  XCircle,
  Calendar,
  Video,
  Target,
  Timer,
} from "lucide-react";
import { ProductionStats } from "@/types/production-calendar";

interface StatsCardsProps {
  stats: ProductionStats | null;
  isLoading?: boolean;
}

const StatsCards: React.FC<StatsCardsProps> = ({
  stats,
  isLoading = false,
}) => {
  if (isLoading) {
    return (
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow-lg p-4 animate-pulse"
          >
            <div className="h-4 bg-gray-200 rounded w-1/2 mb-2"></div>
            <div className="h-8 bg-gray-200 rounded w-3/4"></div>
          </div>
        ))}
      </div>
    );
  }

  if (!stats) return null;

  const cards = [
    {
      title: "งานทั้งหมด",
      value: stats.totalTasks,
      icon: Target,
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-100",
      textColor: "text-blue-600",
    },
    {
      title: "กำลังดำเนินการ",
      value: stats.inProgressTasks,
      icon: Clock,
      color: "from-yellow-500 to-yellow-600",
      bgColor: "bg-yellow-100",
      textColor: "text-yellow-600",
    },
    {
      title: "เสร็จสิ้น",
      value: stats.completedTasks,
      icon: CheckCircle2,
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-100",
      textColor: "text-green-600",
    },
    {
      title: "รอดำเนินการ",
      value: stats.pendingTasks,
      icon: Pause,
      color: "from-gray-500 to-gray-600",
      bgColor: "bg-gray-100",
      textColor: "text-gray-600",
    },
    {
      title: "เลยกำหนด",
      value: stats.overdueTasks,
      icon: AlertTriangle,
      color: "from-red-500 to-red-600",
      bgColor: "bg-red-100",
      textColor: "text-red-600",
    },
    {
      title: "อัตราสำเร็จ",
      value: `${stats.completionRate}%`,
      icon: TrendingUp,
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-100",
      textColor: "text-purple-600",
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      {cards.map((card, index) => {
        const Icon = card.icon;
        return (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -5, scale: 1.02 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden"
          >
            <div className="p-4">
              <div className="flex items-center justify-between mb-3">
                <div className={`p-2 rounded-lg ${card.bgColor}`}>
                  <Icon className={`w-5 h-5 ${card.textColor}`} />
                </div>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">{card.title}</p>
                <p className="text-2xl font-bold text-gray-900">{card.value}</p>
              </div>
            </div>
            <div className={`h-1 bg-gradient-to-r ${card.color}`}></div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default StatsCards;
