(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/our-services/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProcessPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ScaledCanvas$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ScaledCanvas.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
/* =========================================================
   🎛️ TUNING KNOBS – จูนค่าตามใจคุณ
   ========================================================= */ const CAROUSEL = {
    autoplayMs: 4200,
    dragThreshold: 0.18,
    ease: "cubic-bezier(.2,.8,.2,1)",
    parallax: 0.15,
    scaleActive: 1.0,
    scaleInactive: 0.96,
    aspect: "aspect-[16/10]"
};
/* =========================================================
   Smooth anchor scrolling with header offset (เดิม)
   ========================================================= */ function getHeaderOffset() {
    const el = document.querySelector("[data-site-header]") || document.querySelector("header") || null;
    return (el?.offsetHeight ?? 96) + 16;
}
function useHeaderOffset() {
    _s();
    const [offset, setOffset] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(112);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "useHeaderOffset.useEffect": ()=>{
            const update = {
                "useHeaderOffset.useEffect.update": ()=>setOffset(getHeaderOffset())
            }["useHeaderOffset.useEffect.update"];
            update();
            window.addEventListener("resize", update);
            return ({
                "useHeaderOffset.useEffect": ()=>window.removeEventListener("resize", update)
            })["useHeaderOffset.useEffect"];
        }
    }["useHeaderOffset.useEffect"], []);
    return offset;
}
_s(useHeaderOffset, "1S6QTcTP7xQn5i9D3V0HX3LDVe4=");
function scrollToCentered(target) {
    const section = target.closest("section") || target;
    try {
        section.scrollIntoView({
            behavior: "smooth",
            block: "center",
            inline: "nearest"
        });
    } catch  {
        const r = section.getBoundingClientRect();
        const y = r.top + window.pageYOffset - window.innerHeight / 2 + r.height / 2;
        window.scrollTo({
            top: y,
            behavior: "smooth"
        });
    }
}
/* =========================================================
   Utilities
   ========================================================= */ function usePrefersReducedMotion() {
    _s1();
    const [reduced, setReduced] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(false);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "usePrefersReducedMotion.useEffect": ()=>{
            const m = window.matchMedia("(prefers-reduced-motion: reduce)");
            const onChange = {
                "usePrefersReducedMotion.useEffect.onChange": ()=>setReduced(m.matches)
            }["usePrefersReducedMotion.useEffect.onChange"];
            onChange();
            m.addEventListener("change", onChange);
            return ({
                "usePrefersReducedMotion.useEffect": ()=>m.removeEventListener("change", onChange)
            })["usePrefersReducedMotion.useEffect"];
        }
    }["usePrefersReducedMotion.useEffect"], []);
    return reduced;
}
_s1(usePrefersReducedMotion, "PAG4zvF6+IsK2eHB7xTPE8NJ12w=");
/* =========================================================
   🔥 Advanced Carousel (Vanilla, no libs) – ลื่น เท่ ปรับแต่งได้
   ========================================================= */ function Carousel({ images, alt }) {
    _s2();
    const len = images?.length ?? 0;
    const [index, setIndex] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(0);
    const [hover, setHover] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(false);
    const [drag, setDrag] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState({
        active: false,
        startX: 0,
        dx: 0
    });
    const reduced = usePrefersReducedMotion();
    const containerRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(null);
    const [inView, setInView] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(true);
    // หยุดเล่นเมื่อเลื่อนพ้นหน้าจอ
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "Carousel.useEffect": ()=>{
            const el = containerRef.current;
            if (!el) return;
            const obs = new IntersectionObserver({
                "Carousel.useEffect": ([en])=>setInView(en.isIntersecting)
            }["Carousel.useEffect"], {
                threshold: 0.15
            });
            obs.observe(el);
            return ({
                "Carousel.useEffect": ()=>obs.disconnect()
            })["Carousel.useEffect"];
        }
    }["Carousel.useEffect"], []);
    // Autoplay (ไม่มี progress bar แล้ว จึงใช้ setInterval แบบเบาๆ)
    const playing = inView && len > 1 && !drag.active && !hover && !reduced;
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "Carousel.useEffect": ()=>{
            if (!playing) return;
            const t = setInterval({
                "Carousel.useEffect.t": ()=>setIndex({
                        "Carousel.useEffect.t": (i)=>(i + 1) % len
                    }["Carousel.useEffect.t"])
            }["Carousel.useEffect.t"], CAROUSEL.autoplayMs);
            return ({
                "Carousel.useEffect": ()=>clearInterval(t)
            })["Carousel.useEffect"];
        }
    }["Carousel.useEffect"], [
        playing,
        len
    ]);
    // Drag/Swipe
    const onPointerDown = (e)=>{
        e.currentTarget.setPointerCapture?.(e.pointerId);
        setDrag({
            active: true,
            startX: e.clientX,
            dx: 0
        });
    };
    const onPointerMove = (e)=>{
        if (!drag.active) return;
        setDrag((d)=>({
                ...d,
                dx: e.clientX - d.startX
            }));
    };
    const finishDrag = ()=>{
        if (!drag.active) return;
        const width = containerRef.current?.clientWidth || 1;
        const delta = drag.dx / width;
        let next = index;
        if (Math.abs(delta) > CAROUSEL.dragThreshold) next = delta > 0 ? index - 1 : index + 1;
        setIndex((next % len + len) % len);
        setDrag({
            active: false,
            startX: 0,
            dx: 0
        });
    };
    // Keyboard nav
    const onKeyDown = (e)=>{
        if (e.key === "ArrowLeft") setIndex((i)=>(i - 1 + len) % len);
        if (e.key === "ArrowRight") setIndex((i)=>(i + 1) % len);
    };
    // ตำแหน่งแทร็ค + เอฟเฟกต์ parallax/scale
    const width = containerRef.current?.clientWidth || 1;
    const offsetPct = drag.active ? drag.dx / width * 100 : 0;
    const trackStyle = {
        transform: `translate3d(${-index * 100 + offsetPct}%,0,0)`,
        transition: drag.active ? "none" : `transform 700ms ${CAROUSEL.ease}`,
        willChange: "transform"
    };
    // ปุ่มลูกศรแบบ chevron gradient
    const ArrowBtn = ({ dir, onClick })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            "aria-label": dir === "left" ? "previous" : "next",
            onClick: onClick,
            className: `absolute ${dir === "left" ? "left-2" : "right-2"} top-1/2 -translate-y-1/2 w-12 h-16 grid place-items-center rounded-xl bg-black/25 md:bg-transparent shadow-[0_10px_24px_rgba(0,0,0,.25)] backdrop-blur-sm hover:scale-105 transition`,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                width: "20",
                height: "36",
                viewBox: "0 0 20 36",
                fill: "none",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                            id: `g-${dir}`,
                            x1: "0",
                            y1: "0",
                            x2: "1",
                            y2: "1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: "0",
                                    stopColor: "#EEF2F3"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/our-services/page.tsx",
                                    lineNumber: 148,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: "1",
                                    stopColor: "#86A5A2"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/our-services/page.tsx",
                                    lineNumber: 149,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/our-services/page.tsx",
                            lineNumber: 147,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/our-services/page.tsx",
                        lineNumber: 146,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: dir === "right" ? "M3 3 L17 18 L3 33" : "M17 3 L3 18 L17 33",
                        stroke: `url(#g-${dir})`,
                        strokeWidth: "6",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        filter: "drop-shadow(0px 2px 2px rgba(0,0,0,.35))"
                    }, void 0, false, {
                        fileName: "[project]/src/app/our-services/page.tsx",
                        lineNumber: 152,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/our-services/page.tsx",
                lineNumber: 145,
                columnNumber: 7
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/our-services/page.tsx",
            lineNumber: 139,
            columnNumber: 5
        }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        role: "region",
        "aria-roledescription": "carousel",
        "aria-label": alt,
        tabIndex: 0,
        onKeyDown: onKeyDown,
        className: "relative overflow-hidden rounded-2xl ring-1 ring-black/5 shadow-sm select-none",
        onMouseEnter: ()=>setHover(true),
        onMouseLeave: ()=>setHover(false),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `relative ${CAROUSEL.aspect}`,
                onPointerDown: onPointerDown,
                onPointerMove: onPointerMove,
                onPointerUp: finishDrag,
                onPointerCancel: finishDrag,
                onPointerLeave: ()=>drag.active && finishDrag(),
                style: {
                    touchAction: "pan-y",
                    cursor: drag.active ? "grabbing" : "grab"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 flex",
                    style: trackStyle,
                    children: images.map((src, idx)=>{
                        const isActive = idx === index;
                        const imgStyle = {
                            transform: `translate3d(${drag.active ? -offsetPct * CAROUSEL.parallax : 0}%,0,0) scale(${isActive ? CAROUSEL.scaleActive : CAROUSEL.scaleInactive})`,
                            transition: drag.active ? "none" : `transform 700ms ${CAROUSEL.ease}`,
                            willChange: "transform"
                        };
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative w-full shrink-0",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: src,
                                alt: alt,
                                fill: true,
                                className: "object-cover",
                                style: imgStyle,
                                priority: idx === 0,
                                draggable: false
                            }, void 0, false, {
                                fileName: "[project]/src/app/our-services/page.tsx",
                                lineNumber: 202,
                                columnNumber: 17
                            }, this)
                        }, src, false, {
                            fileName: "[project]/src/app/our-services/page.tsx",
                            lineNumber: 201,
                            columnNumber: 15
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/src/app/our-services/page.tsx",
                    lineNumber: 186,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/our-services/page.tsx",
                lineNumber: 175,
                columnNumber: 7
            }, this),
            len > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ArrowBtn, {
                        dir: "left",
                        onClick: ()=>setIndex((i)=>(i - 1 + len) % len)
                    }, void 0, false, {
                        fileName: "[project]/src/app/our-services/page.tsx",
                        lineNumber: 219,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ArrowBtn, {
                        dir: "right",
                        onClick: ()=>setIndex((i)=>(i + 1) % len)
                    }, void 0, false, {
                        fileName: "[project]/src/app/our-services/page.tsx",
                        lineNumber: 223,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true),
            len > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-x-0 bottom-3 flex justify-center gap-2",
                children: images.map((_, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        "aria-label": `ไปสไลด์ที่ ${idx + 1}`,
                        onClick: ()=>setIndex(idx),
                        className: `h-2.5 w-2.5 rounded-full transition
                ${idx === index ? "bg-white shadow-[0_0_0_2px_rgba(0,0,0,.25)] scale-110" // active (ขาว + ขอบจาง)
                         : "bg-white/60 hover:bg-white/80"}                                  // inactive
              `
                    }, idx, false, {
                        fileName: "[project]/src/app/our-services/page.tsx",
                        lineNumber: 233,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/our-services/page.tsx",
                lineNumber: 231,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/our-services/page.tsx",
        lineNumber: 164,
        columnNumber: 5
    }, this);
}
_s2(Carousel, "TmVp77KLpZs2jk17rlFfNg86SB0=", false, function() {
    return [
        usePrefersReducedMotion
    ];
});
_c = Carousel;
/* =============================
   CONFIG – Replace image paths
   ============================= */ const FEATURES = [
    {
        title: "การพัฒนาและออกแบบ",
        img: "/images/process/feature-design.jpg",
        href: "#design"
    },
    {
        title: "เตรียมพิมพ์",
        img: "/images/process/feature-prepress.jpg",
        href: "#prepress"
    },
    {
        title: "การพิมพ์",
        img: "/images/process/feature-press.jpg",
        href: "#press"
    },
    {
        title: "หลังพิมพ์",
        img: "/images/process/feature-postpress.jpg",
        href: "#postpress"
    }
];
// === Multiple images per section (carousel-ready) ===
const SECTIONS = [
    {
        id: "design",
        title: "การพัฒนาและออกแบบ",
        images: [
            "/images/process/design.jpg",
            "/images/process/design-2.jpg",
            "/images/process/design-3.jpg"
        ],
        body: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: "ความต้องการของลูกค้า คือ หัวใจของการออกแบบ ทีมงานด้านการออกแบบและพัฒนาของเรา พร้อมใช้ซอฟต์แวร์มาตรฐานอุตสาหกรรมเพื่อให้ได้ต้นแบบที่แม่นยำ ก่อนส่งต่อสู่การผลิตจริง เน้นฟังก์ชันการใช้งาน ความแข็งแรงของโครงสร้าง และภาพลักษณ์สินค้าให้โดดเด่นตามความต้องการของแบรนด์"
        }, void 0, false)
    },
    {
        id: "prepress",
        title: "เตรียมพิมพ์",
        images: [
            "/images/process/prepress.jpg",
            "/images/process/prepress-2.jpg",
            "/images/process/prepress-3.jpg"
        ],
        body: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: "ขั้นตอนการเตรียมพิมพ์ เราพัฒนาโดยการนำเครื่องพิมพ์เพลทสมัยใหม่ (CTP) มาใช้เพื่อลดขั้นตอน เพิ่มความแม่นยำ และความสม่ำเสมอของงานพิมพ์ทุกชิ้น ตรวจสอบไฟล์สี มาตรฐานภาพ และการวางตัวอักษร ก่อนเข้าสู่เครื่องพิมพ์จริงเพื่อคุณภาพสูงสุด"
        }, void 0, false)
    },
    {
        id: "press",
        title: "การพิมพ์",
        images: [
            "/images/process/press.jpg",
            "/images/process/press-2.jpg",
            "/images/process/press-3.jpg"
        ],
        body: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: "เพื่อให้ตอบโจทย์งานที่หลากหลาย เรามีเครื่องพิมพ์ที่สามารถพิมพ์ได้ตั้งแต่ 1–8 สี พร้อมระบบเคลือบเงา เคลือบด้าน และเคลือบน้ำยาแบบต่าง ๆ รองรับทั้งหมึกน้ำและหมึกยูวี เพื่อสีสันที่สวยงาม คมชัด และเสถียรตลอดทั้งงาน"
        }, void 0, false)
    },
    {
        id: "postpress",
        title: "หลังพิมพ์",
        images: [
            "/images/process/postpress.jpg",
            "/images/process/postpress-2.jpg",
            "/images/process/postpress-3.jpg"
        ],
        body: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: "เราให้บริการงานหลังพิมพ์ครบวงจร เช่น เคลือบยูวี เคลือบด้าน งานปั๊มนูน งานปั๊มฟอยล์ งานไดคัท พับ ปะกาว และเข้าเล่ม เพื่อยกระดับความสวยงามและความทนทานของบรรจุภัณฑ์ให้โดดเด่น และสอดคล้องกับภาพลักษณ์ของแบรนด์"
        }, void 0, false)
    }
];
/* ===============
   UI Subcomponents
   =============== */ function SectionHeading({ label, id }) {
    _s3();
    const offset = useHeaderOffset();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
        id: id,
        style: {
            scrollMarginTop: offset
        },
        className: "text-2xl md:text-4xl font-extrabold tracking-tight text-neutral-900",
        children: label
    }, void 0, false, {
        fileName: "[project]/src/app/our-services/page.tsx",
        lineNumber: 359,
        columnNumber: 5
    }, this);
}
_s3(SectionHeading, "++bLyOOwsArDhElp+NwYF0qV7K4=", false, function() {
    return [
        useHeaderOffset
    ];
});
_c1 = SectionHeading;
function FeatureTile({ title, img, href }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
        href: href,
        onClick: (e)=>{
            const anchor = href.startsWith("#") ? href : `#${href}`;
            const el = document.querySelector(anchor);
            if (!el) return; // let default happen if not found
            e.preventDefault();
            scrollToCentered(el);
            history.replaceState(null, "", anchor);
        },
        className: "group relative block aspect-[4/3] overflow-hidden rounded-2xl shadow-sm ring-1 ring-black/5 transition hover:shadow-lg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: img,
                alt: title,
                fill: true,
                className: "object-cover transition-transform duration-500 group-hover:scale-105",
                sizes: "(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw",
                priority: true
            }, void 0, false, {
                fileName: "[project]/src/app/our-services/page.tsx",
                lineNumber: 388,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/60"
            }, void 0, false, {
                fileName: "[project]/src/app/our-services/page.tsx",
                lineNumber: 397,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-x-0 bottom-0 p-5 md:p-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-[11px] uppercase tracking-wider text-white backdrop-blur-sm ring-1 ring-white/20",
                        children: "Process"
                    }, void 0, false, {
                        fileName: "[project]/src/app/our-services/page.tsx",
                        lineNumber: 399,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-2 text-white drop-shadow-sm",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-xl md:text-2xl font-extrabold",
                            children: title
                        }, void 0, false, {
                            fileName: "[project]/src/app/our-services/page.tsx",
                            lineNumber: 403,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/our-services/page.tsx",
                        lineNumber: 402,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/our-services/page.tsx",
                lineNumber: 398,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/our-services/page.tsx",
        lineNumber: 377,
        columnNumber: 5
    }, this);
}
_c2 = FeatureTile;
function ProcessSection({ id, title, images, body }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative py-10 md:py-16",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-7xl px-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 items-center gap-8 md:grid-cols-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative md:col-span-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Carousel, {
                            images: images,
                            alt: title
                        }, void 0, false, {
                            fileName: "[project]/src/app/our-services/page.tsx",
                            lineNumber: 426,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/our-services/page.tsx",
                        lineNumber: 425,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "md:col-span-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionHeading, {
                                label: title,
                                id: id
                            }, void 0, false, {
                                fileName: "[project]/src/app/our-services/page.tsx",
                                lineNumber: 430,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-4 text-neutral-600 leading-7 md:text-[17px]",
                                children: body
                            }, void 0, false, {
                                fileName: "[project]/src/app/our-services/page.tsx",
                                lineNumber: 431,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/our-services/page.tsx",
                        lineNumber: 429,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/our-services/page.tsx",
                lineNumber: 423,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/our-services/page.tsx",
            lineNumber: 422,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/our-services/page.tsx",
        lineNumber: 421,
        columnNumber: 5
    }, this);
}
_c3 = ProcessSection;
function ProcessPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ScaledCanvas$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        children: [
            "(",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "bg-white scroll-smooth",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "relative",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mx-auto max-w-7xl px-4 py-8 md:py-12",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4",
                                    children: FEATURES.map((f)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FeatureTile, {
                                            ...f
                                        }, f.title, false, {
                                            fileName: "[project]/src/app/our-services/page.tsx",
                                            lineNumber: 453,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/our-services/page.tsx",
                                    lineNumber: 451,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-8 md:mt-10",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-neutral-700 leading-7 md:text-[17px]",
                                        children: "บริษัทไทยการพิมพ์และบรรจุภัณฑ์ มุ่งเน้นคุณภาพและความละเอียดในทุกขั้นตอนตั้งแต่การพัฒนา ออกแบบ เตรียมพิมพ์ การพิมพ์ จนถึงหลังพิมพ์ เพื่อให้ลูกค้าได้รับผลงานที่ตรงตามความต้องการ และมาตรฐานอุตสาหกรรม พร้อมทีมบริการที่ดูแลคุณตลอดกระบวนการอย่างใกล้ชิด"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/our-services/page.tsx",
                                        lineNumber: 458,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/our-services/page.tsx",
                                    lineNumber: 457,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/our-services/page.tsx",
                            lineNumber: 450,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/our-services/page.tsx",
                        lineNumber: 449,
                        columnNumber: 9
                    }, this),
                    SECTIONS.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ProcessSection, {
                            ...s
                        }, s.id, false, {
                            fileName: "[project]/src/app/our-services/page.tsx",
                            lineNumber: 471,
                            columnNumber: 11
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "bg-neutral-50",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mx-auto max-w-7xl px-4 py-12 md:py-16",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-2xl bg-white p-6 md:p-10 shadow-sm ring-1 ring-black/5",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 items-center gap-6 md:grid-cols-12",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "md:col-span-8",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-xl md:text-2xl font-extrabold tracking-tight text-neutral-900",
                                                    children: "สนใจงานพิมพ์หรือบรรจุภัณฑ์สำหรับสินค้าแบรนด์ของคุณ?"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/our-services/page.tsx",
                                                    lineNumber: 479,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mt-2 text-neutral-600",
                                                    children: "พูดคุยกับผู้เชี่ยวชาญของเราเพื่อวางแผนงาน ตั้งแต่งบประมาณ วัสดุ ไปจนถึงการรีดประสิทธิภาพ ในการผลิตให้คุ้มค่าและสวยงามที่สุด"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/our-services/page.tsx",
                                                    lineNumber: 482,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/our-services/page.tsx",
                                            lineNumber: 478,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "md:col-span-4",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex md:justify-end",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "#contact",
                                                    className: "inline-flex items-center justify-center rounded-xl bg-[#D6001C] px-5 py-3 text-white font-semibold shadow-sm hover:brightness-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D6001C]/40",
                                                    children: "ติดต่อเรา"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/our-services/page.tsx",
                                                    lineNumber: 490,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/our-services/page.tsx",
                                                lineNumber: 489,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/our-services/page.tsx",
                                            lineNumber: 488,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/our-services/page.tsx",
                                    lineNumber: 477,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/our-services/page.tsx",
                                lineNumber: 476,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/our-services/page.tsx",
                            lineNumber: 475,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/our-services/page.tsx",
                        lineNumber: 474,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/our-services/page.tsx",
                lineNumber: 447,
                columnNumber: 7
            }, this),
            ")"
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/our-services/page.tsx",
        lineNumber: 445,
        columnNumber: 5
    }, this);
}
_c4 = ProcessPage;
var _c, _c1, _c2, _c3, _c4;
__turbopack_context__.k.register(_c, "Carousel");
__turbopack_context__.k.register(_c1, "SectionHeading");
__turbopack_context__.k.register(_c2, "FeatureTile");
__turbopack_context__.k.register(_c3, "ProcessSection");
__turbopack_context__.k.register(_c4, "ProcessPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_app_our-services_page_tsx_0179a5af._.js.map