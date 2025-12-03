import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Production Calendar | ตารางผลิตสื่อ",
  description:
    "ระบบจัดการตารางผลิตสื่อและวิดีโอคลิป - Production Calendar for media and video clip production management",
  keywords: [
    "production calendar",
    "media production",
    "video production",
    "content schedule",
    "ตารางผลิตสื่อ",
    "จัดการคลิปวิดีโอ",
  ],
};

export default function ProductionCalendarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
