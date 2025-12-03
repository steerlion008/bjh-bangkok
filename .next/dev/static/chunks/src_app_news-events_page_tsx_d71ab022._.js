(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/news-events/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>NewsEventsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
// News items data
const newsItemsData = [
    {
        id: 1,
        image: "/images/New/dev_289.png",
        title: "XXXXX",
        description: "XXXXX",
        date: "XX XX XXXX"
    },
    {
        id: 2,
        image: "/images/New/dev_289.png",
        title: "XXXXX",
        description: "XXXXX",
        date: "XX XX XXXX"
    },
    {
        id: 3,
        image: "/images/New/dev_289.png",
        title: "XXXXX",
        description: "XXXXX",
        date: "XX XX XXXX"
    },
    {
        id: 4,
        image: "/images/New/dev_289.png",
        title: "XXXXX",
        description: "XXXXX",
        date: "XX XX XXXX"
    },
    {
        id: 5,
        image: "/images/articles/dev_289.png",
        title: "XXXXX",
        description: "XXXXX",
        date: "XX XX XXXX"
    },
    {
        id: 6,
        image: "/images/articles/dev_289.png",
        title: "XXXXX",
        description: "XXXXX",
        date: "XX XX XXXX"
    },
    {
        id: 7,
        image: "/images/articles/dev_289.png",
        title: "XXXXX",
        description: "XXXXX",
        date: "XX XX XXXX"
    },
    {
        id: 8,
        image: "/images/articles/dev_289.png",
        title: "XXXXX",
        description: "XXXXX",
        date: "XX XX XXXX"
    }
];
// Hero Banner Component
const HeroBanner = ({ isArticlesPage })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1
        },
        transition: {
            duration: 0.8
        },
        className: "relative w-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-full overflow-hidden h-[55svh]",
                style: {
                    backgroundImage: "url(/images/New/banner_new.png)",
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }
            }, void 0, false, {
                fileName: "[project]/src/app/news-events/page.tsx",
                lineNumber: 74,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 flex items-start justify-start py-5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto w-full max-w-8xl px-3 sm:px-6 lg:px-8 py-5",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            x: 50
                        },
                        animate: {
                            opacity: 1,
                            x: 0
                        },
                        transition: {
                            duration: 0.8,
                            delay: 0.3
                        },
                        className: "text-right text-Blackbg-opacity-70 p-4 rounded-md max-w-md",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "my-heading sm:text-[24px] md:text-[28px] lg:text-5xl font-extrabold leading-[1.2] tracking-tight text-black relative inline-block",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "relative z-10",
                                        children: isArticlesPage ? "ข่าวประชาสัมพันธ์" : "บทความ"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/news-events/page.tsx",
                                        lineNumber: 91,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                        className: "absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-orange-400 to-red-600 rounded-full",
                                        initial: {
                                            width: "0%"
                                        },
                                        animate: {
                                            width: isArticlesPage ? "100%" : "0%"
                                        },
                                        transition: {
                                            duration: 1,
                                            ease: "easeOut",
                                            delay: 0.5
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/news-events/page.tsx",
                                        lineNumber: 95,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/news-events/page.tsx",
                                lineNumber: 90,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-3 sm:mt-4 max-w-[760px] text-sm sm:text-base md:text-lg leading-relaxed text-black",
                                style: {
                                    opacity: 1,
                                    transform: "translateY(0)",
                                    transition: "all 0.8s ease-out 0.8s"
                                },
                                children: isArticlesPage ? "ติดตามข่าวสารกิจกรรมต่างๆ ของบริษัทฯ ที่นี่" : "ติดตามบทความและกิจกรรมต่างๆ ของบริษัทฯ ที่นี่"
                            }, void 0, false, {
                                fileName: "[project]/src/app/news-events/page.tsx",
                                lineNumber: 102,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm md:text-base mt-2",
                                style: {
                                    opacity: 1
                                },
                                children: "ไม่พลาดข่าวสารอันสำคัญทุกช่วงเวลา"
                            }, void 0, false, {
                                fileName: "[project]/src/app/news-events/page.tsx",
                                lineNumber: 114,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/news-events/page.tsx",
                        lineNumber: 84,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/app/news-events/page.tsx",
                    lineNumber: 83,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/app/news-events/page.tsx",
                lineNumber: 82,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/news-events/page.tsx",
        lineNumber: 68,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c = HeroBanner;
// News Card Component
const NewsCard = ({ item, index })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0,
            y: 30
        },
        whileInView: {
            opacity: 1,
            y: 0
        },
        viewport: {
            once: true
        },
        transition: {
            duration: 0.5,
            delay: index * 0.1
        },
        whileHover: {
            scale: 1.05,
            y: -8
        },
        className: "bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col h-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-full h-56 bg-gradient-to-br from-gray-200 to-gray-300 overflow-hidden group",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 flex items-center justify-center text-gray-400",
                        children: item.image && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: item.image,
                            alt: `รูปภาพข่าวสาร ${item.id}`,
                            layout: "fill",
                            objectFit: "cover",
                            className: "group-hover:scale-110 transition-transform duration-300"
                        }, void 0, false, {
                            fileName: "[project]/src/app/news-events/page.tsx",
                            lineNumber: 141,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/app/news-events/page.tsx",
                        lineNumber: 139,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                    }, void 0, false, {
                        fileName: "[project]/src/app/news-events/page.tsx",
                        lineNumber: 150,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/news-events/page.tsx",
                lineNumber: 138,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-5 flex flex-col flex-grow",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "font-bold text-lg mb-3 text-red-600 line-clamp-2 leading-tight",
                        children: item.title
                    }, void 0, false, {
                        fileName: "[project]/src/app/news-events/page.tsx",
                        lineNumber: 153,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-orange-500 font-semibold mb-3 tracking-wide",
                        children: item.date
                    }, void 0, false, {
                        fileName: "[project]/src/app/news-events/page.tsx",
                        lineNumber: 156,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-gray-700 mb-4 line-clamp-3 flex-grow leading-relaxed",
                        children: item.description
                    }, void 0, false, {
                        fileName: "[project]/src/app/news-events/page.tsx",
                        lineNumber: 159,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "w-full bg-gradient-to-r from-orange-400 to-red-500 text-white px-4 py-2.5 text-sm font-semibold rounded-lg hover:from-orange-500 hover:to-red-600 transition-all duration-300 shadow-sm hover:shadow-md",
                        children: "อ่านทั้งหมด"
                    }, void 0, false, {
                        fileName: "[project]/src/app/news-events/page.tsx",
                        lineNumber: 162,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/news-events/page.tsx",
                lineNumber: 152,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/news-events/page.tsx",
        lineNumber: 130,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c1 = NewsCard;
// News Section Component
const NewsSection = ({ items })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full bg-white",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: {
                opacity: 0,
                y: 30
            },
            whileInView: {
                opacity: 1,
                y: 0
            },
            viewport: {
                once: true
            },
            transition: {
                duration: 0.6
            },
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        x: -30
                    },
                    whileInView: {
                        opacity: 1,
                        x: 0
                    },
                    viewport: {
                        once: true
                    },
                    transition: {
                        duration: 0.6,
                        delay: 0.2
                    },
                    className: "flex items-center justify-between mb-8",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "py-5"
                    }, void 0, false, {
                        fileName: "[project]/src/app/news-events/page.tsx",
                        lineNumber: 185,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/app/news-events/page.tsx",
                    lineNumber: 178,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6",
                    children: items.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NewsCard, {
                            item: item,
                            index: index
                        }, item.id, false, {
                            fileName: "[project]/src/app/news-events/page.tsx",
                            lineNumber: 189,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/src/app/news-events/page.tsx",
                    lineNumber: 187,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/news-events/page.tsx",
            lineNumber: 171,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/app/news-events/page.tsx",
        lineNumber: 170,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c2 = NewsSection;
function NewsEventsPage() {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const isArticlesPage = pathname === "/news-events";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-white",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(HeroBanner, {
                isArticlesPage: isArticlesPage
            }, void 0, false, {
                fileName: "[project]/src/app/news-events/page.tsx",
                lineNumber: 201,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NewsSection, {
                items: newsItemsData
            }, void 0, false, {
                fileName: "[project]/src/app/news-events/page.tsx",
                lineNumber: 202,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/news-events/page.tsx",
        lineNumber: 200,
        columnNumber: 5
    }, this);
}
_s(NewsEventsPage, "xbyQPtUVMO7MNj7WjJlpdWqRcTo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c3 = NewsEventsPage;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "HeroBanner");
__turbopack_context__.k.register(_c1, "NewsCard");
__turbopack_context__.k.register(_c2, "NewsSection");
__turbopack_context__.k.register(_c3, "NewsEventsPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_app_news-events_page_tsx_d71ab022._.js.map