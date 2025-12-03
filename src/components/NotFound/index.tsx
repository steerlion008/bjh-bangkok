"use client";
import ScaledCanvas from "../ScaledCanvas";
import Link from "next/link";
import { useCallback, useEffect, useMemo, useState } from "react";

const helpfulLinks = [
  { label: "กลับสู่หน้าหลัก", href: "/" },
  { label: "ติดต่อเรา", href: "/contact-inquiry" },
  { label: "ข่าวสาร", href: "/news-events" },
  { label: "บริการ", href: "/our-services" },
];

export default function NotFound() {
  const [minH, setMinH] = useState<number>();
  const measure = useCallback(() => {
    const vv = (window as any).visualViewport;
    const vh = Math.round(vv?.height ?? window.innerHeight);
    const header = document.querySelector("header") as HTMLElement | null;
    const footer = document.querySelector("footer") as HTMLElement | null;
    const headerH = header?.getBoundingClientRect().height ?? 0;
    const footerH = footer?.getBoundingClientRect().height ?? 0;
    const h = Math.max(0, vh - headerH - footerH);
    setMinH(h);
  }, []);

  useEffect(() => {
    measure();
    window.addEventListener("resize", measure);
    window.addEventListener("orientationchange", measure);
    return () => {
      window.removeEventListener("resize", measure);
      window.removeEventListener("orientationchange", measure);
    };
  }, [measure]);

  const gradientStyle = useMemo(
    () => ({
      background:
        "radial-gradient(circle at top right,rgba(59,130,246,0.25),transparent 35%),radial-gradient(circle at 20% 30%,rgba(16,185,129,0.2),transparent 40%)",
    }),
    []
  );

  return (
    <ScaledCanvas>
      <section
        className="grid place-items-center px-4 py-16 text-gray-900 dark:text-white"
        style={{ minHeight: minH }}>
        <div className="w-full max-w-5xl relative overflow-hidden rounded-[30px] border border-white/30 bg-white/80 p-8 shadow-2xl backdrop-blur dark:border-white/10 dark:bg-slate-900/80">
          <div className="absolute inset-0 opacity-60" style={gradientStyle} aria-hidden />
          <div className="relative grid gap-10 md:grid-cols-[1.1fr,0.9fr]">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 rounded-full border border-blue-500/60 bg-blue-500/10 px-4 py-1 text-sm font-semibold text-blue-600 dark:text-blue-200">
                <span className="text-xs font-bold uppercase tracking-[0.2em]">404</span>
                <span>สถานะไม่พบหน้า</span>
              </div>
              <h1 className="text-4xl font-bold leading-tight md:text-5xl">ขออภัย ไม่มีหน้าที่คุณค้นหา</h1>
              <p className="text-base leading-relaxed text-slate-600 dark:text-slate-300">
                อาจทำการเปลี่ยนเส้นทางไปยังหน้าหลักหรือมีการจัดการเนื้อหาใหม่แล้ว หากคุณต้องการความช่วยเหลือเพิ่มเติม ทีมงานพร้อมช่วยเหลือเสมอ
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/"
                  className="inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-lg transition hover:bg-blue-700">
                  กลับสู่หน้าหลัก
                </Link>
                <Link
                  href="/contact-inquiry"
                  className="inline-flex items-center justify-center rounded-full border border-white/70 px-6 py-3 text-base font-semibold text-slate-900 dark:text-white/90">
                  ติดต่อทีมช่วยเหลือ
                </Link>
              </div>
            </div>
          
          </div>
        </div>
      </section>
    </ScaledCanvas>
  );
}
