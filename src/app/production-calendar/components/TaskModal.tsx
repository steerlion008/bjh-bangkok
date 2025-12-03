"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Save,
  Clock,
  Calendar,
  User,
  Video,
  Image,
  Music,
  FileText,
  Folder,
  AlertCircle,
  Tag,
  FileIcon,
  Timer,
  Monitor,
  HardDrive,
} from "lucide-react";
import {
  ProductionTask,
  TaskFormData,
  TaskStatus,
  TaskPriority,
  MediaType,
  STATUS_CONFIG,
  PRIORITY_CONFIG,
  MEDIA_TYPE_CONFIG,
} from "@/types/production-calendar";
import { format } from "date-fns";

interface TaskModalProps {
  isOpen: boolean;
  task?: ProductionTask | null;
  initialDate?: Date;
  initialHour?: number;
  onClose: () => void;
  onSave: (data: TaskFormData) => Promise<void>;
  onDelete?: (taskId: string) => Promise<void>;
  mode: "create" | "edit" | "view";
}

const getMediaIcon = (mediaType: MediaType) => {
  switch (mediaType) {
    case "video":
      return <Video className="w-5 h-5" />;
    case "image":
      return <Image className="w-5 h-5" />;
    case "audio":
      return <Music className="w-5 h-5" />;
    case "document":
      return <FileText className="w-5 h-5" />;
    default:
      return <Folder className="w-5 h-5" />;
  }
};

const TaskModal: React.FC<TaskModalProps> = ({
  isOpen,
  task,
  initialDate,
  initialHour,
  onClose,
  onSave,
  onDelete,
  mode,
}) => {
  const [formData, setFormData] = useState<TaskFormData>({
    title: "",
    description: "",
    status: "not-started",
    priority: "medium",
    mediaType: "video",
    startDate: format(new Date(), "yyyy-MM-dd'T'HH:mm"),
    dueDate: format(new Date(), "yyyy-MM-dd'T'HH:mm"),
    assignedTo: [],
    clipName: "",
    duration: "",
    resolution: "",
    outputFormat: "",
    tags: [],
    notes: "",
  });
  const [isSaving, setIsSaving] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [tagInput, setTagInput] = useState("");

  // Initialize form data when task or modal opens
  useEffect(() => {
    if (task && mode !== "create") {
      setFormData({
        title: task.title,
        description: task.description || "",
        status: task.status,
        priority: task.priority,
        mediaType: task.mediaType,
        startDate: task.startDate,
        dueDate: task.dueDate,
        assignedTo: task.assignedTo || [],
        clipName: task.clipName || "",
        duration: task.duration || "",
        resolution: task.resolution || "",
        outputFormat: task.outputFormat || "",
        tags: task.tags || [],
        notes: task.notes || "",
      });
    } else if (mode === "create") {
      // Set initial date for new task
      let startDateStr = format(new Date(), "yyyy-MM-dd'T'HH:mm");
      if (initialDate) {
        const dateStr = format(initialDate, "yyyy-MM-dd");
        const hourStr =
          initialHour !== undefined
            ? `${String(initialHour).padStart(2, "0")}:00`
            : format(new Date(), "HH:mm");
        startDateStr = `${dateStr}T${hourStr}`;
      }

      // Set due date to end of day
      const dueDate = initialDate || new Date();
      const dueDateStr = `${format(dueDate, "yyyy-MM-dd")}T23:59`;

      setFormData({
        title: "",
        description: "",
        status: "not-started",
        priority: "medium",
        mediaType: "video",
        startDate: startDateStr,
        dueDate: dueDateStr,
        assignedTo: [],
        clipName: "",
        duration: "",
        resolution: "",
        outputFormat: "",
        tags: [],
        notes: "",
      });
    }
  }, [task, mode, initialDate, initialHour, isOpen]);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleAddTag = () => {
    if (tagInput.trim() && !formData.tags?.includes(tagInput.trim())) {
      setFormData((prev) => ({
        ...prev,
        tags: [...(prev.tags || []), tagInput.trim()],
      }));
      setTagInput("");
    }
  };

  const handleRemoveTag = (tag: string) => {
    setFormData((prev) => ({
      ...prev,
      tags: prev.tags?.filter((t) => t !== tag) || [],
    }));
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.title.trim()) {
      newErrors.title = "กรุณาระบุชื่องาน";
    }
    if (!formData.startDate) {
      newErrors.startDate = "กรุณาระบุวันเริ่มต้น";
    }
    if (!formData.dueDate) {
      newErrors.dueDate = "กรุณาระบุวันกำหนดส่ง";
    }
    if (
      formData.startDate &&
      formData.dueDate &&
      formData.startDate > formData.dueDate
    ) {
      newErrors.dueDate = "วันกำหนดส่งต้องไม่ก่อนวันเริ่มต้น";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSaving(true);
    try {
      await onSave(formData);
      onClose();
    } catch (error) {
      console.error("Error saving task:", error);
    } finally {
      setIsSaving(false);
    }
  };

  const handleDelete = async () => {
    if (!task || !onDelete) return;

    if (!confirm("คุณแน่ใจหรือไม่ที่จะลบงานนี้?")) return;

    setIsDeleting(true);
    try {
      await onDelete(task.id);
      onClose();
    } catch (error) {
      console.error("Error deleting task:", error);
    } finally {
      setIsDeleting(false);
    }
  };

  const isReadOnly = mode === "view";

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-4 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-full md:max-w-2xl md:max-h-[90vh] bg-white rounded-2xl shadow-2xl z-50 overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                {formData.mediaType && (
                  <div className="p-2 bg-white/20 rounded-lg text-white">
                    {getMediaIcon(formData.mediaType)}
                  </div>
                )}
                <div>
                  <h2 className="text-xl font-bold text-white">
                    {mode === "create"
                      ? "สร้างงานใหม่"
                      : mode === "edit"
                      ? "แก้ไขงาน"
                      : "รายละเอียดงาน"}
                  </h2>
                  <p className="text-white/80 text-sm">
                    {mode === "create"
                      ? "กรอกข้อมูลงานที่ต้องการสร้าง"
                      : task?.title}
                  </p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-white/20 rounded-lg transition-colors text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Form Content */}
            <form
              onSubmit={handleSubmit}
              className="flex-1 overflow-y-auto p-6 space-y-6"
            >
              {/* Title */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  ชื่องาน <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  disabled={isReadOnly}
                  placeholder="ระบุชื่องาน..."
                  className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-200 transition-all ${
                    errors.title
                      ? "border-red-400"
                      : "border-gray-200 focus:border-indigo-500"
                  } ${isReadOnly ? "bg-gray-100" : ""}`}
                />
                {errors.title && (
                  <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    {errors.title}
                  </p>
                )}
              </div>

              {/* Status, Priority, Media Type Row */}
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    สถานะ
                  </label>
                  <select
                    name="status"
                    value={formData.status}
                    onChange={handleInputChange}
                    disabled={isReadOnly}
                    className={`w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 ${
                      isReadOnly ? "bg-gray-100" : ""
                    }`}
                  >
                    {Object.entries(STATUS_CONFIG).map(([key, config]) => (
                      <option key={key} value={key}>
                        {config.labelTh}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    ความสำคัญ
                  </label>
                  <select
                    name="priority"
                    value={formData.priority}
                    onChange={handleInputChange}
                    disabled={isReadOnly}
                    className={`w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 ${
                      isReadOnly ? "bg-gray-100" : ""
                    }`}
                  >
                    {Object.entries(PRIORITY_CONFIG).map(([key, config]) => (
                      <option key={key} value={key}>
                        {config.labelTh}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    ประเภทสื่อ
                  </label>
                  <select
                    name="mediaType"
                    value={formData.mediaType}
                    onChange={handleInputChange}
                    disabled={isReadOnly}
                    className={`w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 ${
                      isReadOnly ? "bg-gray-100" : ""
                    }`}
                  >
                    {Object.entries(MEDIA_TYPE_CONFIG).map(([key, config]) => (
                      <option key={key} value={key}>
                        {config.labelTh}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Date Row */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <Calendar className="w-4 h-4 inline-block mr-1" />
                    วันเริ่มต้น <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="datetime-local"
                    name="startDate"
                    value={formData.startDate}
                    onChange={handleInputChange}
                    disabled={isReadOnly}
                    className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-200 transition-all ${
                      errors.startDate
                        ? "border-red-400"
                        : "border-gray-200 focus:border-indigo-500"
                    } ${isReadOnly ? "bg-gray-100" : ""}`}
                  />
                  {errors.startDate && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.startDate}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <Clock className="w-4 h-4 inline-block mr-1" />
                    กำหนดส่ง <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="datetime-local"
                    name="dueDate"
                    value={formData.dueDate}
                    onChange={handleInputChange}
                    disabled={isReadOnly}
                    className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-200 transition-all ${
                      errors.dueDate
                        ? "border-red-400"
                        : "border-gray-200 focus:border-indigo-500"
                    } ${isReadOnly ? "bg-gray-100" : ""}`}
                  />
                  {errors.dueDate && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.dueDate}
                    </p>
                  )}
                </div>
              </div>

              {/* Media Specific Fields */}
              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-sm font-semibold text-gray-700 mb-4 flex items-center gap-2">
                  <FileIcon className="w-4 h-4" />
                  รายละเอียดสื่อ
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-gray-600 mb-2">
                      ชื่อคลิป/ไฟล์
                    </label>
                    <input
                      type="text"
                      name="clipName"
                      value={formData.clipName || ""}
                      onChange={handleInputChange}
                      disabled={isReadOnly}
                      placeholder="เช่น promo_video_v1.mp4"
                      className={`w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-sm ${
                        isReadOnly ? "bg-gray-100" : ""
                      }`}
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 mb-2">
                      <Timer className="w-4 h-4 inline-block mr-1" />
                      ความยาว
                    </label>
                    <input
                      type="text"
                      name="duration"
                      value={formData.duration || ""}
                      onChange={handleInputChange}
                      disabled={isReadOnly}
                      placeholder="เช่น 00:02:30"
                      className={`w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-sm ${
                        isReadOnly ? "bg-gray-100" : ""
                      }`}
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 mb-2">
                      <Monitor className="w-4 h-4 inline-block mr-1" />
                      ความละเอียด
                    </label>
                    <input
                      type="text"
                      name="resolution"
                      value={formData.resolution || ""}
                      onChange={handleInputChange}
                      disabled={isReadOnly}
                      placeholder="เช่น 1920x1080"
                      className={`w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-sm ${
                        isReadOnly ? "bg-gray-100" : ""
                      }`}
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 mb-2">
                      <HardDrive className="w-4 h-4 inline-block mr-1" />
                      รูปแบบไฟล์
                    </label>
                    <input
                      type="text"
                      name="outputFormat"
                      value={formData.outputFormat || ""}
                      onChange={handleInputChange}
                      disabled={isReadOnly}
                      placeholder="เช่น MP4, MOV, AVI"
                      className={`w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-sm ${
                        isReadOnly ? "bg-gray-100" : ""
                      }`}
                    />
                  </div>
                </div>
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  รายละเอียด
                </label>
                <textarea
                  name="description"
                  value={formData.description || ""}
                  onChange={handleInputChange}
                  disabled={isReadOnly}
                  rows={3}
                  placeholder="รายละเอียดเพิ่มเติม..."
                  className={`w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 resize-none ${
                    isReadOnly ? "bg-gray-100" : ""
                  }`}
                />
              </div>

              {/* Tags */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <Tag className="w-4 h-4 inline-block mr-1" />
                  แท็ก
                </label>
                <div className="flex flex-wrap gap-2 mb-2">
                  {formData.tags?.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1 px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm"
                    >
                      {tag}
                      {!isReadOnly && (
                        <button
                          type="button"
                          onClick={() => handleRemoveTag(tag)}
                          className="hover:text-red-500"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      )}
                    </span>
                  ))}
                </div>
                {!isReadOnly && (
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={tagInput}
                      onChange={(e) => setTagInput(e.target.value)}
                      onKeyPress={(e) =>
                        e.key === "Enter" &&
                        (e.preventDefault(), handleAddTag())
                      }
                      placeholder="เพิ่มแท็ก..."
                      className="flex-1 px-4 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-sm"
                    />
                    <button
                      type="button"
                      onClick={handleAddTag}
                      className="px-4 py-2 bg-indigo-100 text-indigo-600 rounded-lg hover:bg-indigo-200 transition-colors text-sm font-medium"
                    >
                      เพิ่ม
                    </button>
                  </div>
                )}
              </div>

              {/* Notes */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  หมายเหตุ
                </label>
                <textarea
                  name="notes"
                  value={formData.notes || ""}
                  onChange={handleInputChange}
                  disabled={isReadOnly}
                  rows={2}
                  placeholder="หมายเหตุเพิ่มเติม..."
                  className={`w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 resize-none ${
                    isReadOnly ? "bg-gray-100" : ""
                  }`}
                />
              </div>

              {/* Task Info (View Mode) */}
              {task && mode === "view" && (
                <div className="border-t border-gray-200 pt-4">
                  <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                    <div>
                      <span className="font-medium">สร้างเมื่อ:</span>{" "}
                      {format(new Date(task.createdAt), "dd/MM/yyyy HH:mm")}
                    </div>
                    <div>
                      <span className="font-medium">อัปเดตล่าสุด:</span>{" "}
                      {format(new Date(task.updatedAt), "dd/MM/yyyy HH:mm")}
                    </div>
                    {task.checkInTime && (
                      <div>
                        <span className="font-medium">เช็คอิน:</span>{" "}
                        {format(new Date(task.checkInTime), "dd/MM/yyyy HH:mm")}
                      </div>
                    )}
                    {task.checkOutTime && (
                      <div>
                        <span className="font-medium">เช็คเอาท์:</span>{" "}
                        {format(
                          new Date(task.checkOutTime),
                          "dd/MM/yyyy HH:mm"
                        )}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </form>

            {/* Footer Actions */}
            <div className="border-t border-gray-200 px-6 py-4 bg-gray-50 flex items-center justify-between">
              {mode === "edit" && onDelete && (
                <button
                  type="button"
                  onClick={handleDelete}
                  disabled={isDeleting}
                  className="px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors text-sm font-medium disabled:opacity-50"
                >
                  {isDeleting ? "กำลังลบ..." : "ลบงาน"}
                </button>
              )}
              <div
                className={`flex items-center gap-3 ${
                  mode !== "edit" ? "ml-auto" : ""
                }`}
              >
                <button
                  type="button"
                  onClick={onClose}
                  className="px-6 py-2 border-2 border-gray-300 text-gray-700 rounded-xl hover:bg-gray-100 transition-colors font-medium"
                >
                  {isReadOnly ? "ปิด" : "ยกเลิก"}
                </button>
                {!isReadOnly && (
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    onClick={handleSubmit}
                    disabled={isSaving}
                    className="flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all font-semibold disabled:opacity-50"
                  >
                    <Save className="w-4 h-4" />
                    {isSaving ? "กำลังบันทึก..." : "บันทึก"}
                  </motion.button>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default TaskModal;
