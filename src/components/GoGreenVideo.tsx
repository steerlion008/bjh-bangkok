"use client";
import Link from "next/link";

export default function GoGreenVideo() {
  return (
    <section className="rounded-3xl border border-white/30 bg-gradient-to-br from-emerald-50 via-transparent to-cyan-50 p-8 shadow-2xl backdrop-blur">
      <div className="grid gap-6 lg:grid-cols-[1.2fr,0.8fr]">
        <div className="space-y-3">
          <p className="text-sm font-semibold tracking-[0.4em] text-emerald-600 uppercase">
            Go Green Initiative
          </p>
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            การดูแลสิ่งแวดล้อมคือภารกิจของเรา
          </h2>
          <p className="text-sm text-slate-600">
            ดูเบื้องหลังโครงการรักษ์โลก ทั้งพลังงานสะอาด การจัดการขยะ และการจัดการทรัพยากรน้ำอย่างยั่งยืนของโรงพยาบาล BJH Bangkok.
          </p>
          <Link
            href="/go-green"
            className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-slate-800"
          >
            ดูโครงการทั้งหมด
            <span aria-hidden>→</span>
          </Link>
        </div>
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-400 to-cyan-500 p-3">
          <div className="aspect-video w-full rounded-xl bg-slate-950/20 shadow-inner" />
          <p className="mt-3 text-xs uppercase tracking-[0.35em] text-white/70">วิดีโอพิเศษ</p>
          <p className="text-lg font-semibold text-white">BJH Campus Green Story</p>
        </div>
      </div>
    </section>
  );
}
