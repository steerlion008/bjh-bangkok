(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/NotificationPopup.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NotificationPopup",
    ()=>NotificationPopup
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-client] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-x.js [app-client] (ecmascript) <export default as XCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const NotificationPopup = ({ isOpen, onClose, type, title, message })=>{
    _s();
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isAnimating, setIsAnimating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NotificationPopup.useEffect": ()=>{
            if (isOpen) {
                setIsVisible(true);
                setTimeout({
                    "NotificationPopup.useEffect": ()=>setIsAnimating(true)
                }["NotificationPopup.useEffect"], 10);
                // Auto close after 3 seconds
                const timer = setTimeout({
                    "NotificationPopup.useEffect.timer": ()=>{
                        handleClose();
                    }
                }["NotificationPopup.useEffect.timer"], 3000);
                return ({
                    "NotificationPopup.useEffect": ()=>clearTimeout(timer)
                })["NotificationPopup.useEffect"];
            } else {
                setIsAnimating(false);
                setTimeout({
                    "NotificationPopup.useEffect": ()=>setIsVisible(false)
                }["NotificationPopup.useEffect"], 300);
            }
        }
    }["NotificationPopup.useEffect"], [
        isOpen
    ]);
    const handleClose = ()=>{
        setIsAnimating(false);
        setTimeout(()=>{
            setIsVisible(false);
            onClose();
        }, 300);
    };
    if (!isVisible) return null;
    const isSuccess = type === "success";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "jsx-39caaad5107536c0" + " " + "fixed inset-0 flex items-center justify-center z-[9999] pointer-events-none",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    backgroundColor: "rgba(0, 0, 0, 0.3)"
                },
                onClick: handleClose,
                className: "jsx-39caaad5107536c0" + " " + `absolute inset-0 backdrop-blur-sm transition-opacity duration-300 pointer-events-auto ${isAnimating ? "opacity-100" : "opacity-0"}`
            }, void 0, false, {
                fileName: "[project]/src/components/NotificationPopup.tsx",
                lineNumber: 55,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-39caaad5107536c0" + " " + `relative pointer-events-auto transform transition-all duration-300 ${isAnimating ? "scale-100 opacity-100 translate-y-0" : "scale-95 opacity-0 -translate-y-4"}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "jsx-39caaad5107536c0" + " " + `relative bg-white rounded-2xl shadow-2xl overflow-hidden w-96 ${isSuccess ? "border-4 border-green-400" : "border-4 border-red-400"}`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-39caaad5107536c0" + " " + `absolute inset-0 opacity-10 ${isSuccess ? "bg-gradient-to-br from-green-400 via-emerald-400 to-teal-400" : "bg-gradient-to-br from-red-400 via-rose-400 to-pink-400"} animate-gradient`
                        }, void 0, false, {
                            fileName: "[project]/src/components/NotificationPopup.tsx",
                            lineNumber: 77,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleClose,
                            className: "jsx-39caaad5107536c0" + " " + "absolute top-4 right-4 p-1 rounded-full hover:bg-gray-100 transition-colors z-10",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                className: "w-5 h-5 text-gray-500"
                            }, void 0, false, {
                                fileName: "[project]/src/components/NotificationPopup.tsx",
                                lineNumber: 90,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/NotificationPopup.tsx",
                            lineNumber: 86,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-39caaad5107536c0" + " " + "relative p-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-39caaad5107536c0" + " " + "flex justify-center mb-6",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-39caaad5107536c0" + " " + `relative ${isSuccess ? "animate-success-icon" : "animate-error-icon"}`,
                                        children: isSuccess ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-39caaad5107536c0" + " " + "relative",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-39caaad5107536c0" + " " + "absolute inset-0 animate-ping-slow",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-39caaad5107536c0" + " " + "w-24 h-24 rounded-full bg-green-400 opacity-30"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/NotificationPopup.tsx",
                                                        lineNumber: 106,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/NotificationPopup.tsx",
                                                    lineNumber: 105,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-39caaad5107536c0" + " " + "absolute inset-0 animate-pulse-slow",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-39caaad5107536c0" + " " + "w-24 h-24 rounded-full bg-green-300 opacity-20"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/NotificationPopup.tsx",
                                                        lineNumber: 109,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/NotificationPopup.tsx",
                                                    lineNumber: 108,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                                    className: "w-24 h-24 text-green-500 relative z-10 drop-shadow-lg"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/NotificationPopup.tsx",
                                                    lineNumber: 112,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-39caaad5107536c0" + " " + "absolute top-0 left-0 w-full h-full",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-39caaad5107536c0" + " " + "absolute top-2 right-2 w-3 h-3 bg-yellow-400 rounded-full animate-sparkle-1"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/NotificationPopup.tsx",
                                                            lineNumber: 115,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-39caaad5107536c0" + " " + "absolute top-6 right-0 w-2 h-2 bg-yellow-300 rounded-full animate-sparkle-2"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/NotificationPopup.tsx",
                                                            lineNumber: 116,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-39caaad5107536c0" + " " + "absolute top-0 right-6 w-2 h-2 bg-yellow-500 rounded-full animate-sparkle-3"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/NotificationPopup.tsx",
                                                            lineNumber: 117,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-39caaad5107536c0" + " " + "absolute bottom-2 left-2 w-3 h-3 bg-green-300 rounded-full animate-sparkle-1"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/NotificationPopup.tsx",
                                                            lineNumber: 118,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-39caaad5107536c0" + " " + "absolute bottom-6 left-0 w-2 h-2 bg-green-400 rounded-full animate-sparkle-2"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/NotificationPopup.tsx",
                                                            lineNumber: 119,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/NotificationPopup.tsx",
                                                    lineNumber: 114,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/NotificationPopup.tsx",
                                            lineNumber: 103,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-39caaad5107536c0" + " " + "relative",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-39caaad5107536c0" + " " + "absolute inset-0 animate-ping-slow",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-39caaad5107536c0" + " " + "w-24 h-24 rounded-full bg-red-400 opacity-30"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/NotificationPopup.tsx",
                                                        lineNumber: 126,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/NotificationPopup.tsx",
                                                    lineNumber: 125,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-39caaad5107536c0" + " " + "absolute inset-0 animate-pulse-slow",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-39caaad5107536c0" + " " + "w-24 h-24 rounded-full bg-red-300 opacity-20"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/NotificationPopup.tsx",
                                                        lineNumber: 129,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/NotificationPopup.tsx",
                                                    lineNumber: 128,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__["XCircle"], {
                                                    className: "w-24 h-24 text-red-500 relative z-10 drop-shadow-lg animate-shake"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/NotificationPopup.tsx",
                                                    lineNumber: 132,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/NotificationPopup.tsx",
                                            lineNumber: 123,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/NotificationPopup.tsx",
                                        lineNumber: 97,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/NotificationPopup.tsx",
                                    lineNumber: 96,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "jsx-39caaad5107536c0" + " " + `text-2xl font-bold text-center mb-3 ${isSuccess ? "text-green-600" : "text-red-600"}`,
                                    children: title
                                }, void 0, false, {
                                    fileName: "[project]/src/components/NotificationPopup.tsx",
                                    lineNumber: 139,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "jsx-39caaad5107536c0" + " " + "text-gray-600 text-center text-base leading-relaxed",
                                    children: message
                                }, void 0, false, {
                                    fileName: "[project]/src/components/NotificationPopup.tsx",
                                    lineNumber: 148,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-39caaad5107536c0" + " " + "mt-6",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-39caaad5107536c0" + " " + "w-full h-1 bg-gray-200 rounded-full overflow-hidden",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-39caaad5107536c0" + " " + `h-full ${isSuccess ? "bg-green-500" : "bg-red-500"} animate-progress`
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/NotificationPopup.tsx",
                                            lineNumber: 155,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/NotificationPopup.tsx",
                                        lineNumber: 154,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/NotificationPopup.tsx",
                                    lineNumber: 153,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/NotificationPopup.tsx",
                            lineNumber: 94,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-39caaad5107536c0" + " " + `h-2 ${isSuccess ? "bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400" : "bg-gradient-to-r from-red-400 via-rose-400 to-pink-400"}`
                        }, void 0, false, {
                            fileName: "[project]/src/components/NotificationPopup.tsx",
                            lineNumber: 165,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/NotificationPopup.tsx",
                    lineNumber: 71,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/NotificationPopup.tsx",
                lineNumber: 64,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "39caaad5107536c0",
                children: "@keyframes gradient{0%,to{transform:scale(1)rotate(0)}50%{transform:scale(1.1)rotate(5deg)}}@keyframes ping-slow{0%{opacity:.3;transform:scale(1)}50%{opacity:.15;transform:scale(1.2)}to{opacity:0;transform:scale(1.4)}}@keyframes pulse-slow{0%,to{opacity:.2;transform:scale(1)}50%{opacity:.3;transform:scale(1.15)}}@keyframes success-icon{0%{transform:scale(0)rotate(-180deg)}50%{transform:scale(1.2)rotate(10deg)}to{transform:scale(1)rotate(0)}}@keyframes error-icon{0%{transform:scale(0)rotate(0)}50%{transform:scale(1.2)}to{transform:scale(1)}}@keyframes shake{0%,to{transform:translate(0)}10%,30%,50%,70%,90%{transform:translate(-3px)}20%,40%,60%,80%{transform:translate(3px)}}@keyframes sparkle-1{0%,to{opacity:0;transform:scale(0)rotate(0)}50%{opacity:1;transform:scale(1)rotate(180deg)}}@keyframes sparkle-2{0%,to{opacity:0;transform:scale(0)rotate(0)}60%{opacity:1;transform:scale(1)rotate(180deg)}}@keyframes sparkle-3{0%,to{opacity:0;transform:scale(0)rotate(0)}40%{opacity:1;transform:scale(1)rotate(180deg)}}@keyframes progress{0%{width:0%}to{width:100%}}.animate-gradient.jsx-39caaad5107536c0{animation:3s ease-in-out infinite gradient}.animate-ping-slow.jsx-39caaad5107536c0{animation:2s cubic-bezier(0,0,.2,1) infinite ping-slow}.animate-pulse-slow.jsx-39caaad5107536c0{animation:2s cubic-bezier(.4,0,.6,1) infinite pulse-slow}.animate-success-icon.jsx-39caaad5107536c0{animation:.6s cubic-bezier(.68,-.55,.265,1.55) success-icon}.animate-error-icon.jsx-39caaad5107536c0{animation:.6s cubic-bezier(.68,-.55,.265,1.55) error-icon}.animate-shake.jsx-39caaad5107536c0{animation:.5s cubic-bezier(.36,.07,.19,.97) .6s shake}.animate-sparkle-1.jsx-39caaad5107536c0{animation:1s ease-in-out .3s sparkle-1}.animate-sparkle-2.jsx-39caaad5107536c0{animation:1s ease-in-out .4s sparkle-2}.animate-sparkle-3.jsx-39caaad5107536c0{animation:1s ease-in-out .5s sparkle-3}.animate-progress.jsx-39caaad5107536c0{animation:3s linear progress}"
            }, void 0, false, void 0, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/NotificationPopup.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(NotificationPopup, "YXgL9/vJxNtPcuauy2FTo+j4iPM=");
_c = NotificationPopup;
var _c;
__turbopack_context__.k.register(_c, "NotificationPopup");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/EditCustomerModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EditCustomerModal",
    ()=>EditCustomerModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/save.js [app-client] (ecmascript) <export default as Save>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.js [app-client] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clipboard$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ClipboardCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clipboard-check.js [app-client] (ecmascript) <export default as ClipboardCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/briefcase.js [app-client] (ecmascript) <export default as Briefcase>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user.js [app-client] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$NotificationPopup$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/NotificationPopup.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
const THAI_DATA_BASE_URL = "https://raw.githubusercontent.com/kongvut/thai-province-data/refs/heads/master/api/latest";
let thaiAdministrativeCache = null;
let thaiAdministrativePromise = null;
const fetchThaiAdministrativeData = async ()=>{
    if (thaiAdministrativeCache) {
        return thaiAdministrativeCache;
    }
    if (!thaiAdministrativePromise) {
        thaiAdministrativePromise = Promise.all([
            fetch(`${THAI_DATA_BASE_URL}/province.json`).then((response)=>{
                if (!response.ok) {
                    throw new Error("ไม่สามารถโหลดข้อมูลจังหวัดได้");
                }
                return response.json();
            }),
            fetch(`${THAI_DATA_BASE_URL}/district.json`).then((response)=>{
                if (!response.ok) {
                    throw new Error("ไม่สามารถโหลดข้อมูลอำเภอได้");
                }
                return response.json();
            }),
            fetch(`${THAI_DATA_BASE_URL}/sub_district.json`).then((response)=>{
                if (!response.ok) {
                    throw new Error("ไม่สามารถโหลดข้อมูลตำบลได้");
                }
                return response.json();
            })
        ]).then(([provinces, districts, subdistricts])=>{
            const payload = {
                provinces,
                districts,
                subdistricts
            };
            thaiAdministrativeCache = payload;
            return payload;
        });
    }
    return thaiAdministrativePromise;
};
const normalizeAdministrativeName = (value)=>value ? value.trim().toLowerCase() : "";
const matchesAdministrativeName = (candidate, target)=>{
    const normalizedTarget = normalizeAdministrativeName(target);
    if (!normalizedTarget) {
        return false;
    }
    return normalizeAdministrativeName(candidate.name_th) === normalizedTarget || normalizeAdministrativeName(candidate.name_en) === normalizedTarget;
};
const consentPartMeta = [
    {
        key: "patient",
        label: "ผู้รับบริการ"
    },
    {
        key: "provider",
        label: "ผู้ให้ข้อมูล"
    }
];
const buildEmptyConsentSections = ()=>consentPartMeta.reduce((acc, part)=>{
        acc[part.key] = {
            weight: "",
            height: "",
            hasChronic: false,
            chronicDiseaseDetail: "",
            hasDrugAllergy: false,
            drugAllergyDetail: "",
            signatureUrl: "",
            medicalConsent: "",
            acceptPdpa: "",
            acceptMedia: ""
        };
        return acc;
    }, {});
const medicalConsentOptions = [
    "ยินยอม",
    "ไม่ยินยอม"
];
const medicalConsentAcknowledgementText = [
    "ข้าพเจ้าขอแสดงความยินยอมและรับทราบเงื่อนไขการตรวจรักษาดังต่อไปนี้",
    "ข้าพเจ้ายินยอมเข้ารับบริการหัตถการ, การศัลยกรรม หรือการรักษาทางการแพทย์อื่น ๆ ตามที่แพทย์เห็นสมควร",
    "ข้าพเจ้าตกลงยินยอมให้ทีมแพทย์และบุคลากรทางการแพทย์ ดำเนินการตรวจวินิจฉัย รักษา ให้คำปรึกษา หรือทำหัตถการต่าง ๆ ที่จำเป็น อันรวมถึงแต่ไม่จำกัดเพียง การฉีดยา, การเจาะเลือด, การทำหัตถการเล็ก, การทำเลเซอร์, การผ่าตัดเฉพาะจุด และการรักษาโดยเทคโนโลยีต่าง ๆ ตามดุลยพินิจของแพทย์",
    "ข้าพเจ้ารับทราบถึงผลลัพธ์ที่อาจเกิดขึ้น รวมถึงภาวะแทรกซ้อนหรือความเสี่ยงต่าง ๆ ที่อาจเกิดขึ้นได้จากการตรวจรักษาหรือหัตถการดังกล่าว และขอยืนยันว่าได้รับคำอธิบายจากบุคลากรทางการแพทย์อย่างเพียงพอแล้ว",
    "ในกรณีเกิดเหตุการณ์ฉุกเฉิน ข้าพเจ้ายินยอมให้บุคลากรทางการแพทย์ดำเนินการรักษาอย่างเร่งด่วนตามความเหมาะสมโดยไม่จำเป็นต้องขอความยินยอมเพิ่มเติม",
    "ข้าพเจ้ารับทราบถึงสิทธิ์ของข้าพเจ้าในการขอเข้าถึง แก้ไข หรือเพิกถอนความยินยอมในการใช้ข้อมูลส่วนบุคคล ตามที่กฎหมาย PDPA กำหนด",
    "ข้าพเจ้าเข้าใจและยินยอมว่า เมื่อได้มีการชำระเงินมัดจำเพื่อยืนยันการจองบริการแล้ว จะไม่สามารถขอคืนเงินมัดจำดังกล่าวได้ไม่ว่ากรณีใด ๆ",
    "ข้าพเจ้าได้อ่านและเข้าใจข้อความข้างต้นโดยชัดเจนแล้ว และยินยอมโดยสมัครใจ โดยไม่มีการบังคับหรือหลอกลวงใด ๆ ทั้งสิ้น",
    "ผู้รับบริการขอรับรองว่าได้แสดงเจตนาไว้ก่อนเข้ารับบริการรักษาและ/หรือรับบริการใด ๆ ก็ตาม ผู้รับบริการหรือผู้แทนขอสละสิทธิ์ทุกประเภทที่จะเรียกร้องค่าเสียหายหรือค่าใช้จ่ายใด ๆ จากบริษัทหรือแพทย์ผู้เชี่ยวชาญหรือผู้ให้บริการ",
    "ผู้รับบริการทราบดีว่าการรับบริการนี้เป็นความยินยอมและสมัครใจโดยไม่ได้ถูกบังคับ หลอกลวง หรือเข้าใจผิดในสาระสำคัญของข้อเท็จจริง",
    "ไม่ว่ากรณีใด ๆ ผู้รับบริการจะไม่บอกเลิกการใช้บริการหรือขอคืนเงินที่ชำระไว้แล้ว",
    "กรณีชำระเงินมัดจำไว้บางส่วนและขาดการติดต่อหรือไม่เข้ารับบริการเกิน 6 เดือน ผู้รับบริการจะหมดอายุการเป็นสมาชิก ยกเว้นกรณีชำระเงินครบถ้วนตามโปรแกรม ผู้รับบริการจะต้องเข้ารับบริการให้ครบภายในระยะเวลา 2 ปี หากเกินกำหนด บริษัทมีสิทธิ์ยกเลิกการให้บริการโดยไม่ต้องแจ้งล่วงหน้า",
    "ผู้รับบริการต้องชำระค่าบริการให้ครบถ้วนตามที่ตกลงไว้ มิฉะนั้นโปรแกรมจะสิ้นสุดลงโดยอัตโนมัติ",
    "หากผู้รับบริการชำระเงินไม่ครบถ้วน หากมีการรับบริการ บริษัทจะคำนวณหักค่าใช้บริการจากราคาเต็ม จนกว่าจะชำระครบแล้วจึงคิดราคาตามส่วนลดหรือโปรโมชั่น",
    "โปรแกรมนี้เป็นโปรแกรมเฉพาะบุคคล ไม่สามารถโอนสิทธิ์ให้ผู้อื่นได้",
    "กรณีมีปัญหาสุขภาพที่ไม่สามารถใช้โปรแกรมต่อได้ ต้องได้รับการตรวจและยืนยันจากแพทย์เท่านั้น บริษัทจะคืนเงินไม่เกิน 70% ของราคาเต็ม",
    "ผู้รับบริการทราบและตกลงว่าจะไม่ถือเอาค่าโฆษณา คำชวน คำแนะนำ หรือคำบรรยายสรรพคุณใด ๆ จากพนักงานเป็นส่วนหนึ่งของข้อตกลง ทั้งนี้ผลลัพธ์ขึ้นกับสุขภาพร่างกาย สภาพผิว การใช้ยา สิ่งแวดล้อม และพฤติกรรมของผู้รับบริการ",
    "หากบริษัทพิจารณาว่าสภาพผิวหรือร่างกายผู้รับบริการไม่พร้อม บริษัทขอสงวนสิทธิ์หยุดหรือยกเลิกบริการบางส่วนหรือทั้งหมดได้ทันที",
    "ผู้รับบริการยินยอมให้ตรวจสุขภาพและทำแบบทดสอบต่าง ๆ ตามที่บริษัทกำหนด",
    "ผู้รับบริการตกลงรับผิดชอบต่อความเสียหายที่เกิดขึ้นกับทรัพย์สินของตนเอง",
    "ผู้รับบริการตกลงรับผิดชอบต่อการกระทำใด ๆ ที่ก่อให้เกิดความเสียหายต่อทรัพย์สินหรือชื่อเสียงของบริษัท",
    "บริษัทมีสิทธิ์หยุด ระงับ หรือยกเลิกการให้บริการหากผู้รับบริการมีพฤติกรรมไม่เหมาะสม",
    "สัญญานี้ไม่สามารถดัดแปลง แก้ไข หรือขูดลบใด ๆ เว้นแต่มีข้อตกลงเป็นลายลักษณ์อักษร",
    "กรณีชำระยอดคงเหลือ ผู้รับบริการต้องชำระภายใน 14 วันนับจากวันที่ตกลงใช้บริการ",
    "จดคืนเงินทุกกรณี: No Refund"
];
const pdpaTextBlock = [
    "PDPA - ข้าพเจ้ายินยอมให้โรงพยาบาล/คลินิก เก็บ รวบรวม ใช้ และเปิดเผยข้อมูลส่วนบุคคลเพื่อวัตถุประสงค์ในการให้บริการทางการแพทย์ และ/หรือการใช้เพื่อประโยชน์ทางการแพทย์อื่น ๆ",
    "ข้าพเจ้ายินยอมให้มีการบันทึกภาพถ่าย วิดีโอ หรือเอกสารทางการแพทย์ที่เกี่ยวข้อง เพื่อประกอบการรักษา ติดตามผล หรือใช้เพื่อการศึกษา วิจัย หรือประชาสัมพันธ์ (โดยไม่เปิดเผยตัวตน เว้นแต่จะได้รับความยินยอมเป็นลายลักษณ์อักษรเพิ่มเติม)"
];
const mediaTextBlock = [
    "ข้าพเจ้ายินยอมให้คลินิกใช้ภาพถ่าย หรือวิดีโอที่เกิดขึ้นระหว่างการรักษาเพื่อประกอบการศึกษาภายในหรือประชาสัมพันธ์ โดยไม่ระบุชื่อบุคคล และขอสงวนสิทธิ์ในการขอความยินยอมเพิ่มเติมหากมีการเปิดเผยตัวตน",
    "ข้าพเจ้ายินยอมรับข้อมูลประชาสัมพันธ์เกี่ยวกับการรักษา ผ่านช่องทางที่คลินิกกำหนด เพื่อเป็นส่วนหนึ่งของการติดตามผลการรักษาหรือการให้ข่าวสารสำคัญ"
];
const acceptOptions = [
    "ยอมรับ",
    "ไม่ยอมรับ"
];
// Currency formatting helpers
const currencyFormatter = new Intl.NumberFormat("th-TH", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
});
const formatCurrencyDisplay = (value)=>Number.isFinite(value) ? currencyFormatter.format(value) : "0.00";
const formatDecimalInputValue = (value)=>Number.isFinite(value) ? value.toFixed(2) : "";
const parseMonetaryInputValue = (value)=>{
    const trimmed = value.trim();
    if (!trimmed) return 0;
    const numeric = Number(trimmed);
    return Number.isFinite(numeric) ? numeric : 0;
};
const toNumericValue = (value)=>{
    if (value === null || value === undefined) return 0;
    if (typeof value === "number" && Number.isFinite(value)) {
        return value;
    }
    const numeric = Number(value);
    return Number.isFinite(numeric) ? numeric : 0;
};
const normalizeSalepriceValue = (value)=>{
    if (value === null || value === undefined) return 0;
    const numeric = typeof value === "number" ? value : Number(value);
    return Number.isFinite(numeric) ? numeric : 0;
};
const calculateServiceEntryTotal = (entry)=>{
    const baseAmount = Number.isFinite(entry.salesprice) ? entry.salesprice : 0;
    const chargeAmount = parseMonetaryInputValue(entry.chargePrice);
    const discountAmount = parseMonetaryInputValue(entry.discountPrice);
    return baseAmount + chargeAmount - discountAmount;
};
const generateReceiptNumber = ()=>{
    const twoDigits = Math.floor(Math.random() * 90 + 10);
    const fourDigits = Math.floor(Math.random() * 9000 + 1000);
    return `Ex${twoDigits}-${fourDigits}`;
};
const bjhMasterColumnDefinitions = [
    {
        key: "id_all",
        label: "id_all",
        readOnly: true
    },
    {
        key: "cn",
        label: "cn"
    },
    {
        key: "code",
        label: "code"
    },
    {
        key: "status",
        label: "status"
    },
    {
        key: "source",
        label: "source"
    },
    {
        key: "interested_product",
        label: "interested_product"
    },
    {
        key: "doctor",
        label: "doctor"
    },
    {
        key: "contact_staff",
        label: "contact_staff"
    },
    {
        key: "prefix",
        label: "prefix"
    },
    {
        key: "name",
        label: "name"
    },
    {
        key: "surname",
        label: "surname"
    },
    {
        key: "nickname",
        label: "nickname"
    },
    {
        key: "gender",
        label: "gender"
    },
    {
        key: "birthdate",
        label: "birthdate"
    },
    {
        key: "occupation",
        label: "occupation"
    },
    {
        key: "member",
        label: "member"
    },
    {
        key: "cusgroup",
        label: "cusgroup"
    },
    {
        key: "customer_name",
        label: "customer_name"
    },
    {
        key: "phone",
        label: "phone"
    },
    {
        key: "mobilephone",
        label: "mobilephone"
    },
    {
        key: "email",
        label: "email"
    },
    {
        key: "lineid",
        label: "lineid"
    },
    {
        key: "facebook",
        label: "facebook"
    },
    {
        key: "country",
        label: "country"
    },
    {
        key: "from_province",
        label: "from_province"
    },
    {
        key: "medianame",
        label: "medianame"
    },
    {
        key: "disease",
        label: "disease"
    },
    {
        key: "allergic",
        label: "allergic"
    },
    {
        key: "note",
        label: "note",
        multiline: true
    },
    {
        key: "got_contact_date",
        label: "got_contact_date"
    },
    {
        key: "last_followup",
        label: "last_followup"
    },
    {
        key: "next_followup",
        label: "next_followup"
    },
    {
        key: "consult_date",
        label: "consult_date"
    },
    {
        key: "surgery_date",
        label: "surgery_date"
    },
    {
        key: "appointment_time",
        label: "appointment_time"
    },
    {
        key: "booked_consult_date",
        label: "booked_consult_date"
    },
    {
        key: "booked_surgery_date",
        label: "booked_surgery_date"
    },
    {
        key: "proposed_amount",
        label: "proposed_amount"
    },
    {
        key: "star_flag",
        label: "star_flag"
    },
    {
        key: "address",
        label: "address",
        multiline: true
    },
    {
        key: "province",
        label: "province"
    },
    {
        key: "zipcode",
        label: "zipcode"
    },
    {
        key: "registerdate",
        label: "registerdate"
    },
    {
        key: "ownername",
        label: "ownername"
    },
    {
        key: "binddate",
        label: "binddate"
    },
    {
        key: "is_opd",
        label: "is_opd"
    },
    {
        key: "locno",
        label: "locno"
    },
    {
        key: "road",
        label: "road"
    },
    {
        key: "moo",
        label: "moo"
    },
    {
        key: "tumbon",
        label: "tumbon"
    },
    {
        key: "amphur",
        label: "amphur"
    },
    {
        key: "id_card",
        label: "id_card"
    }
];
const getBjFieldType = (key)=>{
    const normalized = key.toLowerCase();
    if (normalized.includes("date")) return "date";
    if (normalized.includes("time")) return "time";
    if (normalized === "proposed_amount") return "number";
    return "text";
};
const appointmentFieldMeta = [
    {
        key: "record_no",
        label: "Record No",
        readOnly: true
    },
    {
        key: "code",
        label: "Code",
        readOnly: true
    },
    {
        key: "appoint_code",
        label: "Appoint Code",
        readOnly: true
    },
    {
        key: "register_date",
        label: "วันที่ลงทะเบียน",
        type: "date"
    },
    {
        key: "start_date",
        label: "วันนัด",
        type: "datetime-local"
    },
    {
        key: "end_date",
        label: "ครบกำหนด",
        type: "datetime-local"
    },
    {
        key: "prefix",
        label: "คำนำหน้า"
    },
    {
        key: "name",
        label: "ชื่อ"
    },
    {
        key: "surname",
        label: "นามสกุล"
    },
    {
        key: "nickname",
        label: "ชื่อเล่น"
    },
    {
        key: "display_name",
        label: "ชื่อที่แสดง",
        placeholder: "เช่น ชื่อที่ลูกค้าต้องการให้แสดง"
    },
    {
        key: "mobilephone",
        label: "เบอร์มือถือ",
        type: "tel"
    },
    {
        key: "email",
        label: "อีเมล"
    },
    {
        key: "activity",
        label: "กิจกรรม"
    },
    {
        key: "note",
        label: "หมายเหตุ",
        type: "textarea",
        fullWidth: true
    },
    {
        key: "doctor_code",
        label: "รหัสหมอ"
    },
    {
        key: "doctor_name",
        label: "ชื่อหมอ"
    },
    {
        key: "dest_code",
        label: "รหัสจุดหมาย"
    },
    {
        key: "dest_name",
        label: "ชื่อจุดหมาย"
    },
    {
        key: "organize",
        label: "หน่วยงาน"
    },
    {
        key: "bind_code",
        label: "รหัส Bind"
    },
    {
        key: "bind_date",
        label: "วันที่ Bind",
        type: "date"
    },
    {
        key: "id_all",
        label: "ID ลูกค้า",
        readOnly: true
    }
];
const appointmentFieldMetaMap = appointmentFieldMeta.reduce((acc, field)=>{
    acc[field.key] = field;
    return acc;
}, {});
const formatAppointmentDateTimeLabel = (value)=>{
    if (value === undefined || value === null || value === "") return "-";
    const normalized = typeof value === "number" ? value : String(value);
    const parsed = new Date(normalized);
    if (Number.isNaN(parsed.getTime())) {
        const fallback = typeof normalized === "string" ? normalized : String(normalized);
        return fallback.replace("T", " ").split(".")[0];
    }
    return new Intl.DateTimeFormat("th-TH", {
        dateStyle: "medium",
        timeStyle: "short"
    }).format(parsed);
};
const resolveAppointmentHistoryKey = (entry, index)=>{
    if (entry.appoint_code) {
        return `code-${entry.appoint_code}`;
    }
    if (entry.record_no !== undefined && entry.record_no !== null) {
        return `record-${entry.record_no}`;
    }
    return `history-${index}`;
};
const appointmentSections = [
    {
        title: "ข้อมูลการนัดหมาย",
        fields: [
            "register_date",
            "start_date",
            "end_date",
            "bind_date"
        ],
        columns: "grid-cols-1 md:grid-cols-3"
    },
    {
        title: "ข้อมูลผู้รับบริการ",
        fields: [
            "prefix",
            "name",
            "surname",
            "nickname",
            "display_name",
            "mobilephone",
            "email",
            "id_all"
        ],
        columns: "grid-cols-1 md:grid-cols-2"
    },
    {
        title: "รายละเอียดเพิ่มเติม",
        fields: [
            "activity",
            "note",
            "doctor_code",
            "doctor_name",
            "dest_code",
            "dest_name",
            "organize",
            "bind_code"
        ],
        columns: "grid-cols-1 md:grid-cols-2"
    }
];
const buildEmptyAppointmentForm = ()=>appointmentFieldMeta.reduce((acc, field)=>{
        acc[field.key] = "";
        return acc;
    }, {});
const resolveConsentPartKey = (value)=>{
    if (!value) return null;
    const normalized = value.toString().trim().toLowerCase();
    if (!normalized) return null;
    if (normalized === "patient" || normalized.includes("ผู้รับ")) return "patient";
    if (normalized === "provider" || normalized.includes("ผู้ให้")) return "provider";
    const directMatch = consentPartMeta.find((part)=>part.key === normalized);
    return directMatch ? directMatch.key : null;
};
const SignaturePad = ({ value, onChange })=>{
    _s();
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const ctxRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const drawingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const [isReady, setIsReady] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const updateSignature = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "SignaturePad.useCallback[updateSignature]": ()=>{
            const canvas = canvasRef.current;
            if (!canvas) return;
            onChange(canvas.toDataURL("image/png"));
        }
    }["SignaturePad.useCallback[updateSignature]"], [
        onChange
    ]);
    const clearCanvas = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "SignaturePad.useCallback[clearCanvas]": ()=>{
            const canvas = canvasRef.current;
            const ctx = ctxRef.current;
            if (!canvas || !ctx) return;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            onChange("");
        }
    }["SignaturePad.useCallback[clearCanvas]"], [
        onChange
    ]);
    const drawFromValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "SignaturePad.useCallback[drawFromValue]": ()=>{
            const ctx = ctxRef.current;
            const canvas = canvasRef.current;
            if (!ctx || !canvas) return;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            if (!value) return;
            const image = new Image();
            image.crossOrigin = "anonymous";
            image.onload = ({
                "SignaturePad.useCallback[drawFromValue]": ()=>{
                    ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
                }
            })["SignaturePad.useCallback[drawFromValue]"];
            image.src = value;
        }
    }["SignaturePad.useCallback[drawFromValue]"], [
        value
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SignaturePad.useEffect": ()=>{
            const canvas = canvasRef.current;
            if (!canvas) return;
            const ctx = canvas.getContext("2d");
            if (!ctx) return;
            const ratio = Math.max(1, window.devicePixelRatio || 1);
            const clientWidth = canvas.clientWidth || 400;
            const fixedHeight = 150;
            canvas.width = clientWidth * ratio;
            canvas.height = fixedHeight * ratio;
            canvas.style.width = "100%";
            canvas.style.height = `${fixedHeight}px`;
            ctx.scale(ratio, ratio);
            ctx.lineCap = "round";
            ctx.lineJoin = "round";
            ctx.lineWidth = 1.8;
            ctx.strokeStyle = "#4c1d95";
            ctxRef.current = ctx;
            setIsReady(true);
        }
    }["SignaturePad.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SignaturePad.useEffect": ()=>{
            if (!isReady) return;
            drawFromValue();
        }
    }["SignaturePad.useEffect"], [
        drawFromValue,
        isReady
    ]);
    const getPointerCoords = (event)=>{
        const canvas = canvasRef.current;
        if (!canvas) return {
            x: 0,
            y: 0
        };
        const rect = canvas.getBoundingClientRect();
        return {
            x: event.clientX - rect.left,
            y: event.clientY - rect.top
        };
    };
    const handlePointerDown = (event)=>{
        event.preventDefault();
        const ctx = ctxRef.current;
        if (!ctx) return;
        const { x, y } = getPointerCoords(event);
        drawingRef.current = true;
        ctx.beginPath();
        ctx.moveTo(x, y);
    };
    const handlePointerMove = (event)=>{
        if (!drawingRef.current) return;
        const ctx = ctxRef.current;
        if (!ctx) return;
        const { x, y } = getPointerCoords(event);
        ctx.lineTo(x, y);
        ctx.stroke();
    };
    const stopDrawing = ()=>{
        if (!drawingRef.current) return;
        drawingRef.current = false;
        updateSignature();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-2xl border border-slate-200 bg-slate-50 p-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                ref: canvasRef,
                className: "w-full touch-none",
                onPointerDown: handlePointerDown,
                onPointerMove: handlePointerMove,
                onPointerUp: stopDrawing,
                onPointerLeave: stopDrawing
            }, void 0, false, {
                fileName: "[project]/src/components/EditCustomerModal.tsx",
                lineNumber: 561,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-2 flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: clearCanvas,
                        className: "rounded-lg border border-slate-300 px-3 py-1 text-xs font-semibold text-slate-600 transition hover:border-slate-400",
                        children: "ล้างลายเซ็น"
                    }, void 0, false, {
                        fileName: "[project]/src/components/EditCustomerModal.tsx",
                        lineNumber: 570,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[11px] text-slate-500",
                        children: "ลงชื่อด้วยเมาส์หรือสัมผัส"
                    }, void 0, false, {
                        fileName: "[project]/src/components/EditCustomerModal.tsx",
                        lineNumber: 577,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/EditCustomerModal.tsx",
                lineNumber: 569,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/EditCustomerModal.tsx",
        lineNumber: 560,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(SignaturePad, "M8Ws/n0y5JmofV3i/4oxnH91QGM=");
_c = SignaturePad;
const EditCustomerModal = ({ isOpen, onClose, customerData: initialData, onSave })=>{
    _s1();
    const [customerData, setCustomerData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("contact");
    const [statusOptions, setStatusOptions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [sourceOptions, setSourceOptions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [productOptions, setProductOptions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [countryOptions, setCountryOptions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [contactPersonOptions, setContactPersonOptions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showOPDPopup, setShowOPDPopup] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showConsentPopup, setShowConsentPopup] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showServicePopup, setShowServicePopup] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showAppointmentPopup, setShowAppointmentPopup] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [appointmentForm, setAppointmentForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(buildEmptyAppointmentForm);
    const [appointmentLoading, setAppointmentLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [appointmentError, setAppointmentError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [appointmentHistory, setAppointmentHistory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [appointmentHistoryLoading, setAppointmentHistoryLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [appointmentHistoryError, setAppointmentHistoryError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selectedAppointmentHistoryKey, setSelectedAppointmentHistoryKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [editingAppointmentCode, setEditingAppointmentCode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const appointmentPrefillRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({});
    const [thaiProvinces, setThaiProvinces] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [thaiDistricts, setThaiDistricts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [thaiSubdistricts, setThaiSubdistricts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedProvinceId, setSelectedProvinceId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selectedDistrictId, setSelectedDistrictId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selectedSubdistrictId, setSelectedSubdistrictId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [thaiAddressLoading, setThaiAddressLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [thaiAddressError, setThaiAddressError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const normalizeCustomerValue = (value)=>{
        if (value === undefined || value === null) return "";
        const text = typeof value === "string" ? value : String(value);
        return text.trim();
    };
    const customerIdentifier = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "EditCustomerModal.useMemo[customerIdentifier]": ()=>{
            const priorityKeys = [
                "id_all",
                "id",
                "รหัสลูกค้า",
                "customer_code"
            ];
            for (const key of priorityKeys){
                if (key in customerData) {
                    const normalized = normalizeCustomerValue(customerData[key]);
                    if (normalized) return normalized;
                }
            }
            return "";
        }
    }["EditCustomerModal.useMemo[customerIdentifier]"], [
        customerData
    ]);
    const customerIdAll = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "EditCustomerModal.useMemo[customerIdAll]": ()=>{
            const possible = [
                "id_all",
                "idAll",
                "id"
            ];
            for (const key of possible){
                if (key in customerData) {
                    const normalized = normalizeCustomerValue(customerData[key]);
                    if (normalized) return normalized;
                }
            }
            return "";
        }
    }["EditCustomerModal.useMemo[customerIdAll]"], [
        customerData
    ]);
    const customerDisplayName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "EditCustomerModal.useMemo[customerDisplayName]": ()=>{
            const labelKeys = [
                "ชื่อ",
                "customer_name",
                "displayName"
            ];
            for (const key of labelKeys){
                if (key in customerData) {
                    const normalized = normalizeCustomerValue(customerData[key]);
                    if (normalized) return normalized;
                }
            }
            return "";
        }
    }["EditCustomerModal.useMemo[customerDisplayName]"], [
        customerData
    ]);
    const customerSaleCode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "EditCustomerModal.useMemo[customerSaleCode]": ()=>{
            const labelKeys = [
                "รหัสลูกค้า",
                "customer_code"
            ];
            for (const key of labelKeys){
                if (key in customerData) {
                    const normalized = normalizeCustomerValue(customerData[key]);
                    if (normalized) return normalized;
                }
            }
            return "";
        }
    }["EditCustomerModal.useMemo[customerSaleCode]"], [
        customerData
    ]);
    // OPD Service states
    const [opdGroups, setOpdGroups] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [groupsLoading, setGroupsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedOpdGroupCode, setSelectedOpdGroupCode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [groupServiceItems, setGroupServiceItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [servicesLoading, setServicesLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [serviceError, setServiceError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [serviceSearchTerm, setServiceSearchTerm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [selectedServices, setSelectedServices] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const latestServiceFetchGroupRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [saleItemsHistory, setSaleItemsHistory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [saleItemsHistoryLoading, setSaleItemsHistoryLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [saleItemsHistoryError, setSaleItemsHistoryError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [savingServices, setSavingServices] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showHistoryModal, setShowHistoryModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [lastReceiptNo, setLastReceiptNo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [consentSections, setConsentSections] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(buildEmptyConsentSections());
    const [selectedConsentPart, setSelectedConsentPart] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(consentPartMeta[0].key);
    const [consentLoading, setConsentLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [consentLoadError, setConsentLoadError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [consentSaving, setConsentSaving] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [loggedInUser, setLoggedInUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [notification, setNotification] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        isOpen: false,
        type: "success",
        title: "",
        message: ""
    });
    const fetchStatusOptions = async ()=>{
        try {
            const response = await fetch("/api/status-options");
            const result = await response.json();
            if (result.success && result.data) {
                setStatusOptions(result.data);
            } else {
                // Use fallback data when database is not accessible
                setStatusOptions([
                    {
                        value: "ติดตามต่อเนื่อง",
                        label: "ติดตามต่อเนื่อง",
                        color: "#FFD700"
                    },
                    {
                        value: "ปิดการขาย",
                        label: "ปิดการขาย",
                        color: "#90EE90"
                    },
                    {
                        value: "ยกเลิก",
                        label: "ยกเลิก",
                        color: "#FFB6C1"
                    },
                    {
                        value: "รอตอบกลับ",
                        label: "รอตอบกลับ",
                        color: "#87CEEB"
                    },
                    {
                        value: "ได้นัด Consult",
                        label: "ได้นัด Consult",
                        color: "#FFA500"
                    },
                    {
                        value: "ได้นัดผ่าตัด",
                        label: "ได้นัดผ่าตัด",
                        color: "#FF6347"
                    },
                    {
                        value: "ผ่าตัดแล้ว",
                        label: "ผ่าตัดแล้ว",
                        color: "#32CD32"
                    }
                ]);
            }
        } catch (error) {
            console.error("Error fetching status options:", error);
            // Use fallback data on network error
            setStatusOptions([
                {
                    value: "ติดตามต่อเนื่อง",
                    label: "ติดตามต่อเนื่อง",
                    color: "#FFD700"
                },
                {
                    value: "ปิดการขาย",
                    label: "ปิดการขาย",
                    color: "#90EE90"
                },
                {
                    value: "ยกเลิก",
                    label: "ยกเลิก",
                    color: "#FFB6C1"
                },
                {
                    value: "รอตอบกลับ",
                    label: "รอตอบกลับ",
                    color: "#87CEEB"
                },
                {
                    value: "ได้นัด Consult",
                    label: "ได้นัด Consult",
                    color: "#FFA500"
                },
                {
                    value: "ได้นัดผ่าตัด",
                    label: "ได้นัดผ่าตัด",
                    color: "#FF6347"
                },
                {
                    value: "ผ่าตัดแล้ว",
                    label: "ผ่าตัดแล้ว",
                    color: "#32CD32"
                }
            ]);
        }
    };
    const fetchSourceOptions = async ()=>{
        try {
            const response = await fetch("/api/source-options");
            const result = await response.json();
            if (result.success && result.data) {
                setSourceOptions(result.data);
            } else {
                // Use fallback data
                setSourceOptions([
                    {
                        value: "Facebook",
                        label: "Facebook"
                    },
                    {
                        value: "Instagram",
                        label: "Instagram"
                    },
                    {
                        value: "Google Ads",
                        label: "Google Ads"
                    },
                    {
                        value: "Line",
                        label: "Line"
                    },
                    {
                        value: "Walk-in",
                        label: "Walk-in"
                    },
                    {
                        value: "Referral",
                        label: "Referral"
                    }
                ]);
            }
        } catch (error) {
            console.error("Error fetching source options:", error);
            // Use fallback data
            setSourceOptions([
                {
                    value: "Facebook",
                    label: "Facebook"
                },
                {
                    value: "Instagram",
                    label: "Instagram"
                },
                {
                    value: "Google Ads",
                    label: "Google Ads"
                },
                {
                    value: "Line",
                    label: "Line"
                },
                {
                    value: "Walk-in",
                    label: "Walk-in"
                },
                {
                    value: "Referral",
                    label: "Referral"
                }
            ]);
        }
    };
    const fetchProductOptions = async ()=>{
        try {
            const response = await fetch("/api/product-options");
            const result = await response.json();
            if (result.success && result.data) {
                setProductOptions(result.data);
            } else {
                // Use fallback data
                setProductOptions([
                    {
                        value: "ตีตัวไล่ตัว",
                        label: "ตีตัวไล่ตัว"
                    },
                    {
                        value: "Sub brow lift",
                        label: "Sub brow lift"
                    },
                    {
                        value: "แก้ตาหมื่อตอนและแก้ว",
                        label: "แก้ตาหมื่อตอนและแก้ว"
                    },
                    {
                        value: "ตาสองชั้น",
                        label: "ตาสองชั้น"
                    },
                    {
                        value: "เสริมจมูก",
                        label: "เสริมจมูก"
                    },
                    {
                        value: "แก้จมูก",
                        label: "แก้จมูก"
                    },
                    {
                        value: "เสริมตาขาว",
                        label: "เสริมตาขาว"
                    },
                    {
                        value: "ลิฟหน้า",
                        label: "ลิฟหน้า"
                    },
                    {
                        value: "Skin",
                        label: "Skin"
                    }
                ]);
            }
        } catch (error) {
            console.error("Error fetching product options:", error);
            // Use fallback data
            setProductOptions([
                {
                    value: "ตีตัวไล่ตัว",
                    label: "ตีตัวไล่ตัว"
                },
                {
                    value: "Sub brow lift",
                    label: "Sub brow lift"
                },
                {
                    value: "แก้ตาหมื่อตอนและแก้ว",
                    label: "แก้ตาหมื่อตอนและแก้ว"
                },
                {
                    value: "ตาสองชั้น",
                    label: "ตาสองชั้น"
                },
                {
                    value: "เสริมจมูก",
                    label: "เสริมจมูก"
                },
                {
                    value: "แก้จมูก",
                    label: "แก้จมูก"
                },
                {
                    value: "เสริมตาขาว",
                    label: "เสริมตาขาว"
                },
                {
                    value: "ลิฟหน้า",
                    label: "ลิฟหน้า"
                },
                {
                    value: "Skin",
                    label: "Skin"
                }
            ]);
        }
    };
    const fetchCountryOptions = async ()=>{
        try {
            const response = await fetch("/api/country-options");
            const result = await response.json();
            if (result.success && result.data) {
                setCountryOptions(result.data);
            } else {
                // Use fallback data
                setCountryOptions([
                    {
                        value: "ไทย",
                        label: "ไทย"
                    },
                    {
                        value: "จีน",
                        label: "จีน"
                    },
                    {
                        value: "ญี่ปุ่น",
                        label: "ญี่ปุ่น"
                    },
                    {
                        value: "เกาหลี",
                        label: "เกาหลี"
                    },
                    {
                        value: "สิงคโปร์",
                        label: "สิงคโปร์"
                    },
                    {
                        value: "มาเลเซีย",
                        label: "มาเลเซีย"
                    },
                    {
                        value: "อื่นๆ",
                        label: "อื่นๆ"
                    }
                ]);
            }
        } catch (error) {
            console.error("Error fetching country options:", error);
            // Use fallback data
            setCountryOptions([
                {
                    value: "ไทย",
                    label: "ไทย"
                },
                {
                    value: "จีน",
                    label: "จีน"
                },
                {
                    value: "ญี่ปุ่น",
                    label: "ญี่ปุ่น"
                },
                {
                    value: "เกาหลี",
                    label: "เกาหลี"
                },
                {
                    value: "สิงคโปร์",
                    label: "สิงคโปร์"
                },
                {
                    value: "มาเลเซีย",
                    label: "มาเลเซีย"
                },
                {
                    value: "อื่นๆ",
                    label: "อื่นๆ"
                }
            ]);
        }
    };
    const fetchContactPersonOptions = async ()=>{
        try {
            const response = await fetch("/api/contact-person-options");
            const result = await response.json();
            if (result.success && result.data) {
                setContactPersonOptions(result.data);
            } else {
                // Use fallback data
                setContactPersonOptions([
                    {
                        value: "ว่าน",
                        label: "ว่าน"
                    },
                    {
                        value: "จีน",
                        label: "จีน"
                    },
                    {
                        value: "สา",
                        label: "สา"
                    },
                    {
                        value: "เจ",
                        label: "เจ"
                    },
                    {
                        value: "พิดยา",
                        label: "พิดยา"
                    },
                    {
                        value: "มุก",
                        label: "มุก"
                    }
                ]);
            }
        } catch (error) {
            console.error("Error fetching contact person options:", error);
            // Use fallback data
            setContactPersonOptions([
                {
                    value: "ว่าน",
                    label: "ว่าน"
                },
                {
                    value: "จีน",
                    label: "จีน"
                },
                {
                    value: "สา",
                    label: "สา"
                },
                {
                    value: "เจ",
                    label: "เจ"
                },
                {
                    value: "พิดยา",
                    label: "พิดยา"
                },
                {
                    value: "มุก",
                    label: "มุก"
                }
            ]);
        }
    };
    // Fetch OPD Groups
    const fetchOpdGroups = async ()=>{
        setGroupsLoading(true);
        try {
            const response = await fetch("/api/b-item-groups");
            const result = await response.json();
            if (!response.ok || result.success === false) {
                throw new Error(result.error || "ไม่พบกลุ่มขาย OPD");
            }
            setOpdGroups(Array.isArray(result.data) ? result.data : []);
        } catch (error) {
            console.error("Error fetching OPD groups:", error);
        } finally{
            setGroupsLoading(false);
        }
    };
    // Load services for selected group
    const loadServicesForGroup = async (groupCode)=>{
        if (!groupCode) {
            setGroupServiceItems([]);
            return;
        }
        latestServiceFetchGroupRef.current = groupCode;
        setServicesLoading(true);
        setServiceError(null);
        setGroupServiceItems([]);
        try {
            const response = await fetch(`/api/b-item-services?groupCode=${encodeURIComponent(groupCode)}`);
            const result = await response.json();
            if (!response.ok || result.success === false) {
                throw new Error(result.error || "ไม่พบรายการบริการ");
            }
            if (latestServiceFetchGroupRef.current !== groupCode) return;
            const normalizedItems = Array.isArray(result.data) ? result.data.map((item)=>({
                    ...item,
                    saleprice: normalizeSalepriceValue(item.saleprice)
                })) : [];
            setGroupServiceItems(normalizedItems);
        } catch (error) {
            if (latestServiceFetchGroupRef.current !== groupCode) return;
            setServiceError(error?.message || "ไม่สามารถโหลดรายการบริการได้");
        } finally{
            if (latestServiceFetchGroupRef.current === groupCode) {
                setServicesLoading(false);
            }
        }
    };
    const fetchSaleItemsHistory = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "EditCustomerModal.useCallback[fetchSaleItemsHistory]": async (code)=>{
            setSaleItemsHistoryLoading(true);
            setSaleItemsHistoryError(null);
            try {
                const response = await fetch(`/api/b-saleitem?code=${encodeURIComponent(code)}`);
                const result = await response.json();
                if (!response.ok || result.success === false) {
                    throw new Error(result.error || "ไม่สามารถโหลดประวัติบริการได้");
                }
                setSaleItemsHistory(Array.isArray(result.data) ? result.data : []);
            } catch (error) {
                setSaleItemsHistory([]);
                setSaleItemsHistoryError(error?.message || "ไม่สามารถโหลดประวัติบริการได้");
            } finally{
                setSaleItemsHistoryLoading(false);
            }
        }
    }["EditCustomerModal.useCallback[fetchSaleItemsHistory]"], []);
    const handleGroupSelect = (groupCode)=>{
        setSelectedOpdGroupCode(groupCode);
        setServiceSearchTerm("");
        setServiceError(null);
        if (!groupCode) {
            setGroupServiceItems([]);
            return;
        }
        loadServicesForGroup(groupCode);
    };
    const handleOpenServicePopup = ()=>{
        setShowServicePopup(true);
        setServiceError(null);
        if (opdGroups.length === 0) {
            fetchOpdGroups();
        }
        if (selectedOpdGroupCode) {
            loadServicesForGroup(selectedOpdGroupCode);
        }
    };
    const handleCloseServicePopup = ()=>{
        setShowServicePopup(false);
        setServiceSearchTerm("");
        setServiceError(null);
    };
    const handleShowHistory = ()=>{
        if (!customerIdentifier) return;
        fetchSaleItemsHistory(customerIdentifier);
        setShowHistoryModal(true);
    };
    const handleCloseHistory = ()=>{
        setShowHistoryModal(false);
    };
    const fetchConsentForms = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "EditCustomerModal.useCallback[fetchConsentForms]": async ()=>{
            if (!customerIdAll) return;
            setConsentLoading(true);
            setConsentLoadError(null);
            setConsentSections(buildEmptyConsentSections());
            try {
                const response = await fetch(`/api/consent-forms?id_all=${encodeURIComponent(customerIdAll)}`);
                const result = await response.json();
                if (!response.ok || result.success === false) {
                    throw new Error(result.error || "ไม่สามารถโหลด Consent form ได้");
                }
                const nextSections = buildEmptyConsentSections();
                if (Array.isArray(result.data)) {
                    result.data.forEach({
                        "EditCustomerModal.useCallback[fetchConsentForms]": (item)=>{
                            const partKey = resolveConsentPartKey(item.part);
                            if (!partKey) return;
                            const formatString = {
                                "EditCustomerModal.useCallback[fetchConsentForms].formatString": (value)=>value === undefined || value === null ? "" : String(value)
                            }["EditCustomerModal.useCallback[fetchConsentForms].formatString"];
                            nextSections[partKey] = {
                                weight: formatString(item.weight_kg ?? item.weight),
                                height: formatString(item.height_cm ?? item.height),
                                hasChronic: Boolean(item.has_chronic_disease ?? item.has_chronic ?? item.hasChronic),
                                chronicDiseaseDetail: item.chronic_disease_detail || item.chronicDiseaseDetail || "",
                                hasDrugAllergy: Boolean(item.has_drug_allergy ?? item.hasDrugAllergy),
                                drugAllergyDetail: item.drug_allergy_detail || item.drugAllergyDetail || "",
                                signatureUrl: item.signature_url || item.signatureUrl || "",
                                medicalConsent: item.medical_consent || item.medicalConsent || "",
                                acceptPdpa: item.accept_pdpa || item.acceptPdpa || "",
                                acceptMedia: item.accept_media || item.acceptMedia || ""
                            };
                        }
                    }["EditCustomerModal.useCallback[fetchConsentForms]"]);
                }
                setConsentSections(nextSections);
            } catch (error) {
                console.error("Error fetching consent data:", error);
                setConsentLoadError(error?.message || "ไม่สามารถโหลด Consent form ได้");
            } finally{
                setConsentLoading(false);
            }
        }
    }["EditCustomerModal.useCallback[fetchConsentForms]"], [
        customerIdentifier
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EditCustomerModal.useEffect": ()=>{
            if (showServicePopup && customerIdentifier) {
                fetchSaleItemsHistory(customerIdentifier);
            }
        }
    }["EditCustomerModal.useEffect"], [
        showServicePopup,
        customerIdentifier,
        fetchSaleItemsHistory
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EditCustomerModal.useEffect": ()=>{
            if (!showConsentPopup) return;
            setSelectedConsentPart(consentPartMeta[0].key);
            fetchConsentForms();
        }
    }["EditCustomerModal.useEffect"], [
        showConsentPopup,
        fetchConsentForms
    ]);
    const handleConsentSectionChange = (part, changes)=>{
        setConsentSections((current)=>({
                ...current,
                [part]: {
                    ...current[part],
                    ...changes
                }
            }));
    };
    const handleConsentToggle = (part, field, value)=>{
        const updates = {
            [field]: value
        };
        if (field === "hasChronic" && !value) {
            updates.chronicDiseaseDetail = "";
        }
        if (field === "hasDrugAllergy" && !value) {
            updates.drugAllergyDetail = "";
        }
        handleConsentSectionChange(part, updates);
    };
    const handleConsentSignatureChange = (part, signatureUrl)=>{
        handleConsentSectionChange(part, {
            signatureUrl
        });
    };
    const handleSaveConsentForms = async ()=>{
        if (!customerIdAll) {
            setNotification({
                isOpen: true,
                type: "error",
                title: "ข้อมูลไม่ครบ",
                message: "ไม่สามารถบันทึก Consent ได้ เพราะยังไม่รู้จักลูกค้า"
            });
            return;
        }
        setConsentSaving(true);
        try {
            const payload = {
                code: customerIdAll,
                idAll: customerIdAll,
                createdBy: loggedInUser || null,
                sections: consentPartMeta.map((part)=>{
                    const entry = consentSections[part.key];
                    return {
                        part: part.key,
                        weight: entry.weight,
                        height: entry.height,
                        hasChronic: entry.hasChronic,
                        chronicDiseaseDetail: entry.chronicDiseaseDetail,
                        hasDrugAllergy: entry.hasDrugAllergy,
                        drugAllergyDetail: entry.drugAllergyDetail,
                        signatureUrl: entry.signatureUrl,
                        medicalConsent: entry.medicalConsent || null,
                        acceptPdpa: entry.acceptPdpa || null,
                        acceptMedia: entry.acceptMedia || null
                    };
                })
            };
            const response = await fetch("/api/consent-forms", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(payload)
            });
            let result;
            try {
                result = await response.json();
            } catch (parseError) {
                const fallbackText = await response.text();
                throw new Error(fallbackText || parseError.message || "ไม่สามารถอ่านผลลัพธ์จากเซิร์ฟเวอร์");
            }
            if (!response.ok || result.success === false) {
                throw new Error(result.error || "ไม่สามารถบันทึก Consent ได้");
            }
            setNotification({
                isOpen: true,
                type: "success",
                title: "บันทึก Consent แล้ว",
                message: result.message || "Consent form ถูกบันทึกเรียบร้อยแล้ว"
            });
            await fetchConsentForms();
        } catch (error) {
            setNotification({
                isOpen: true,
                type: "error",
                title: "บันทึกไม่สำเร็จ",
                message: error?.message || "เกิดข้อผิดพลาดในการบันทึก Consent"
            });
        } finally{
            setConsentSaving(false);
        }
    };
    const handleSaveSelectedServices = async ()=>{
        if (!customerIdentifier) {
            setNotification({
                isOpen: true,
                type: "error",
                title: "รหัสลูกค้าไม่ครบ",
                message: "ไม่สามารถบันทึกบริการได้ เพราะยังไม่มีรหัสดึงข้อมูลลูกค้า"
            });
            return false;
        }
        if (selectedServices.length === 0) {
            setNotification({
                isOpen: true,
                type: "error",
                title: "ยังไม่มีบริการ",
                message: "กรุณาเลือกบริการก่อนบันทึกลง b_saleitem"
            });
            return false;
        }
        setSavingServices(true);
        try {
            const currentReceipt = lastReceiptNo ?? generateReceiptNumber();
            const payload = {
                code: customerIdentifier,
                saleCode: customerSaleCode || null,
                displayName: customerDisplayName || null,
                receiptNo: currentReceipt,
                services: selectedServices.map((entry)=>({
                        itemCode: entry.itemcode,
                        itemName: entry.itemname,
                        unitSale: entry.salesprice,
                        netAmount: calculateServiceEntryTotal(entry),
                        saleType: entry.saleType || "20"
                    }))
            };
            const response = await fetch("/api/b-saleitem", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(payload)
            });
            const result = await response.json();
            if (!response.ok || result.success === false) {
                throw new Error(result.error || "เกิดข้อผิดพลาดในการบันทึกบริการ");
            }
            setNotification({
                isOpen: true,
                type: "success",
                title: "บันทึกบริการ OPD แล้ว",
                message: result.message || `บันทึก ${result.insertedCount ?? selectedServices.length} รายการลง b_saleitem แล้ว`
            });
            setLastReceiptNo(currentReceipt);
            if (customerIdentifier) {
                fetchSaleItemsHistory(customerIdentifier);
            }
            return true;
        } catch (error) {
            setNotification({
                isOpen: true,
                type: "error",
                title: "ไม่สามารถบันทึกบริการได้",
                message: error?.message || "เกิดข้อผิดพลาดในการเชื่อมต่อกับเซิร์ฟเวอร์ กรุณาลองใหม่"
            });
            return false;
        } finally{
            setSavingServices(false);
        }
    };
    const handleCompleteServiceSelection = async ()=>{
        const saved = await handleSaveSelectedServices();
        if (saved) {
            handleCloseServicePopup();
        }
    };
    // Service entry update handlers
    const updateSelectedServiceEntry = (id, updater)=>{
        setSelectedServices((current)=>current.map((entry)=>entry.id === id ? updater(entry) : entry));
    };
    const handleChargePriceChange = (id, value)=>{
        updateSelectedServiceEntry(id, (entry)=>{
            const trimmed = value.trim();
            const numeric = Number(trimmed);
            const hasValue = trimmed.length > 0 && Number.isFinite(numeric);
            const nextPercent = hasValue && entry.salesprice > 0 ? formatDecimalInputValue(numeric / entry.salesprice * 100) : "";
            return {
                ...entry,
                chargePrice: value,
                chargePercent: nextPercent
            };
        });
    };
    const handleChargePercentChange = (id, value)=>{
        updateSelectedServiceEntry(id, (entry)=>{
            const trimmed = value.trim();
            const numeric = Number(trimmed);
            const hasValue = trimmed.length > 0 && Number.isFinite(numeric);
            const nextPrice = hasValue && entry.salesprice > 0 ? formatDecimalInputValue(entry.salesprice * numeric / 100) : "";
            return {
                ...entry,
                chargePrice: nextPrice,
                chargePercent: value
            };
        });
    };
    const handleDiscountPriceChange = (id, value)=>{
        updateSelectedServiceEntry(id, (entry)=>{
            const trimmed = value.trim();
            const numeric = Number(trimmed);
            const hasValue = trimmed.length > 0 && Number.isFinite(numeric);
            const nextPercent = hasValue && entry.salesprice > 0 ? formatDecimalInputValue(numeric / entry.salesprice * 100) : "";
            return {
                ...entry,
                discountPrice: value,
                discountPercent: nextPercent
            };
        });
    };
    const handleDiscountPercentChange = (id, value)=>{
        updateSelectedServiceEntry(id, (entry)=>{
            const trimmed = value.trim();
            const numeric = Number(trimmed);
            const hasValue = trimmed.length > 0 && Number.isFinite(numeric);
            const nextPrice = hasValue && entry.salesprice > 0 ? formatDecimalInputValue(entry.salesprice * numeric / 100) : "";
            return {
                ...entry,
                discountPrice: nextPrice,
                discountPercent: value
            };
        });
    };
    const handleAddService = (item)=>{
        setSelectedServices((current)=>{
            if (current.some((entry)=>entry.itemcode === item.itemcode)) {
                return current;
            }
            return [
                ...current,
                {
                    id: `${item.itemcode}-${Date.now()}`,
                    itemcode: item.itemcode,
                    itemname: item.itemname,
                    salesprice: normalizeSalepriceValue(item.saleprice),
                    chargePrice: "",
                    chargePercent: "",
                    discountPrice: "",
                    discountPercent: "",
                    saleType: "20"
                }
            ];
        });
    };
    const handleRemoveServiceEntry = (id)=>{
        setSelectedServices((current)=>current.filter((entry)=>entry.id !== id));
    };
    // Memoized values for OPD Service
    const selectedOpdGroup = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "EditCustomerModal.useMemo[selectedOpdGroup]": ()=>opdGroups.find({
                "EditCustomerModal.useMemo[selectedOpdGroup]": (group)=>group.groupcode === selectedOpdGroupCode
            }["EditCustomerModal.useMemo[selectedOpdGroup]"]) ?? null
    }["EditCustomerModal.useMemo[selectedOpdGroup]"], [
        opdGroups,
        selectedOpdGroupCode
    ]);
    const selectedServicesTotals = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "EditCustomerModal.useMemo[selectedServicesTotals]": ()=>selectedServices.reduce({
                "EditCustomerModal.useMemo[selectedServicesTotals]": (acc, entry)=>{
                    const baseAmount = Number.isFinite(entry.salesprice) ? entry.salesprice : 0;
                    const chargeAmount = parseMonetaryInputValue(entry.chargePrice);
                    const discountAmount = parseMonetaryInputValue(entry.discountPrice);
                    const netAmount = baseAmount + chargeAmount - discountAmount;
                    acc.baseTotal += baseAmount;
                    acc.chargeTotal += chargeAmount;
                    acc.discountTotal += discountAmount;
                    acc.netTotal += netAmount;
                    return acc;
                }
            }["EditCustomerModal.useMemo[selectedServicesTotals]"], {
                baseTotal: 0,
                chargeTotal: 0,
                discountTotal: 0,
                netTotal: 0
            })
    }["EditCustomerModal.useMemo[selectedServicesTotals]"], [
        selectedServices
    ]);
    const saleHistorySummary = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "EditCustomerModal.useMemo[saleHistorySummary]": ()=>saleItemsHistory.reduce({
                "EditCustomerModal.useMemo[saleHistorySummary]": (acc, entry)=>{
                    const amount = toNumericValue(entry?.amount);
                    acc.total += Number.isFinite(amount) ? amount : 0;
                    acc.count += 1;
                    return acc;
                }
            }["EditCustomerModal.useMemo[saleHistorySummary]"], {
                count: 0,
                total: 0
            })
    }["EditCustomerModal.useMemo[saleHistorySummary]"], [
        saleItemsHistory
    ]);
    const currentConsentSection = consentSections[selectedConsentPart];
    const filteredServiceItems = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "EditCustomerModal.useMemo[filteredServiceItems]": ()=>{
            if (!serviceSearchTerm.trim()) return groupServiceItems;
            const lowerTerm = serviceSearchTerm.trim().toLowerCase();
            return groupServiceItems.filter({
                "EditCustomerModal.useMemo[filteredServiceItems]": (item)=>item.itemname.toLowerCase().includes(lowerTerm) || item.itemcode.toLowerCase().includes(lowerTerm)
            }["EditCustomerModal.useMemo[filteredServiceItems]"]);
        }
    }["EditCustomerModal.useMemo[filteredServiceItems]"], [
        groupServiceItems,
        serviceSearchTerm
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EditCustomerModal.useEffect": ()=>{
            console.log("📋 EditCustomerModal - isOpen:", isOpen, "initialData:", initialData);
            if (initialData) {
                setCustomerData({
                    ...initialData
                });
            }
            if (isOpen) {
                fetchStatusOptions();
                fetchSourceOptions();
                fetchProductOptions();
                fetchCountryOptions();
                fetchContactPersonOptions();
            }
        }
    }["EditCustomerModal.useEffect"], [
        initialData,
        isOpen
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EditCustomerModal.useEffect": ()=>{
            try {
                const storedUser = localStorage.getItem("user");
                if (storedUser) {
                    const parsed = JSON.parse(storedUser);
                    const name = parsed?.name || parsed?.username || parsed?.email || "";
                    setLoggedInUser(name);
                }
            } catch (error) {
                console.error("Failed to load logged in user info", error);
            }
        }
    }["EditCustomerModal.useEffect"], []);
    const handleFieldChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "EditCustomerModal.useCallback[handleFieldChange]": (fieldName, value)=>{
            setCustomerData({
                "EditCustomerModal.useCallback[handleFieldChange]": (current)=>({
                        ...current,
                        [fieldName]: value
                    })
            }["EditCustomerModal.useCallback[handleFieldChange]"]);
        }
    }["EditCustomerModal.useCallback[handleFieldChange]"], []);
    const handleAppointmentFieldChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "EditCustomerModal.useCallback[handleAppointmentFieldChange]": (fieldName, value)=>{
            setAppointmentForm({
                "EditCustomerModal.useCallback[handleAppointmentFieldChange]": (current)=>({
                        ...current,
                        [fieldName]: value
                    })
            }["EditCustomerModal.useCallback[handleAppointmentFieldChange]"]);
        }
    }["EditCustomerModal.useCallback[handleAppointmentFieldChange]"], []);
    const resetAppointmentForm = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "EditCustomerModal.useCallback[resetAppointmentForm]": ()=>{
            const today = new Date().toISOString().split("T")[0];
            setAppointmentForm({
                ...buildEmptyAppointmentForm(),
                ...appointmentPrefillRef.current,
                register_date: appointmentPrefillRef.current.register_date || today,
                bind_date: appointmentPrefillRef.current.bind_date || today
            });
            setEditingAppointmentCode(null);
            setSelectedAppointmentHistoryKey(null);
            setAppointmentError(null);
        }
    }["EditCustomerModal.useCallback[resetAppointmentForm]"], []);
    const handleOpenNewAppointment = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "EditCustomerModal.useCallback[handleOpenNewAppointment]": ()=>{
            resetAppointmentForm();
        }
    }["EditCustomerModal.useCallback[handleOpenNewAppointment]"], [
        resetAppointmentForm
    ]);
    const fetchAppointmentHistory = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "EditCustomerModal.useCallback[fetchAppointmentHistory]": async ()=>{
            if (!customerIdAll) {
                setAppointmentHistory([]);
                setAppointmentHistoryError("ไม่พบ ID ลูกค้าสำหรับประวัติ");
                return;
            }
            setAppointmentHistoryLoading(true);
            setAppointmentHistoryError(null);
            try {
                const response = await fetch(`/api/appointments?id_all=${encodeURIComponent(customerIdAll)}`);
                const result = await response.json();
                if (!response.ok || result.success === false) {
                    throw new Error(result.error || "ไม่สามารถโหลดประวัตินัดหมายได้");
                }
                setAppointmentHistory(Array.isArray(result.data) ? result.data : []);
            } catch (error) {
                setAppointmentHistory([]);
                setAppointmentHistoryError(error?.message || "ไม่สามารถโหลดประวัตินัดหมายได้");
            } finally{
                setAppointmentHistoryLoading(false);
            }
        }
    }["EditCustomerModal.useCallback[fetchAppointmentHistory]"], [
        customerIdAll
    ]);
    const handleSelectAppointmentHistory = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "EditCustomerModal.useCallback[handleSelectAppointmentHistory]": (entry, key)=>{
            const normalized = {};
            appointmentFieldMeta.forEach({
                "EditCustomerModal.useCallback[handleSelectAppointmentHistory]": (meta)=>{
                    const rawValue = entry[meta.key];
                    normalized[meta.key] = rawValue === undefined || rawValue === null ? "" : String(rawValue);
                }
            }["EditCustomerModal.useCallback[handleSelectAppointmentHistory]"]);
            if (!normalized.id_all) {
                normalized.id_all = customerIdAll;
            }
            setAppointmentForm({
                ...buildEmptyAppointmentForm(),
                ...normalized
            });
            setEditingAppointmentCode(entry.appoint_code ? String(entry.appoint_code) : null);
            setSelectedAppointmentHistoryKey(key);
            setAppointmentError(null);
        }
    }["EditCustomerModal.useCallback[handleSelectAppointmentHistory]"], [
        customerIdAll
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EditCustomerModal.useEffect": ()=>{
            if (!showOPDPopup) return;
            setThaiAddressError(null);
            if (thaiProvinces.length && thaiDistricts.length && thaiSubdistricts.length) {
                return;
            }
            let cancelled = false;
            setThaiAddressLoading(true);
            fetchThaiAdministrativeData().then({
                "EditCustomerModal.useEffect": (data)=>{
                    if (cancelled) return;
                    setThaiProvinces(data.provinces);
                    setThaiDistricts(data.districts);
                    setThaiSubdistricts(data.subdistricts);
                }
            }["EditCustomerModal.useEffect"]).catch({
                "EditCustomerModal.useEffect": (error)=>{
                    if (cancelled) return;
                    setThaiAddressError(error?.message || "ไม่สามารถโหลดข้อมูลที่อยู่ได้");
                }
            }["EditCustomerModal.useEffect"]).finally({
                "EditCustomerModal.useEffect": ()=>{
                    if (cancelled) return;
                    setThaiAddressLoading(false);
                }
            }["EditCustomerModal.useEffect"]);
            return ({
                "EditCustomerModal.useEffect": ()=>{
                    cancelled = true;
                }
            })["EditCustomerModal.useEffect"];
        }
    }["EditCustomerModal.useEffect"], [
        showOPDPopup,
        thaiProvinces.length,
        thaiDistricts.length,
        thaiSubdistricts.length
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EditCustomerModal.useEffect": ()=>{
            const today = new Date().toISOString().split("T")[0];
            appointmentPrefillRef.current = {
                id_all: customerIdAll,
                display_name: customerDisplayName,
                prefix: customerData["prefix"] || "",
                name: customerData["name"] || customerData["ชื่อ"] || "",
                surname: customerData["surname"] || "",
                nickname: customerData["nickname"] || "",
                mobilephone: customerData["mobilephone"] || customerData["phone"] || "",
                email: customerData["email"] || "",
                activity: customerData["activity"] || "",
                note: customerData["note"] || "",
                register_date: appointmentPrefillRef.current.register_date || today,
                bind_date: appointmentPrefillRef.current.bind_date || today
            };
        }
    }["EditCustomerModal.useEffect"], [
        customerIdAll,
        customerDisplayName,
        customerData
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EditCustomerModal.useEffect": ()=>{
            if (!showAppointmentPopup) return;
            fetchAppointmentHistory();
            resetAppointmentForm();
        }
    }["EditCustomerModal.useEffect"], [
        showAppointmentPopup,
        fetchAppointmentHistory,
        resetAppointmentForm
    ]);
    const provinceValue = customerData["province"] || "";
    const amphurValue = customerData["amphur"] || "";
    const tumbonValue = customerData["tumbon"] || "";
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EditCustomerModal.useEffect": ()=>{
            if (!thaiProvinces.length) {
                setSelectedProvinceId(null);
                return;
            }
            if (!provinceValue) {
                setSelectedProvinceId(null);
                return;
            }
            const match = thaiProvinces.find({
                "EditCustomerModal.useEffect.match": (item)=>matchesAdministrativeName(item, provinceValue)
            }["EditCustomerModal.useEffect.match"]);
            setSelectedProvinceId(match ? match.id : null);
        }
    }["EditCustomerModal.useEffect"], [
        thaiProvinces,
        provinceValue
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EditCustomerModal.useEffect": ()=>{
            if (!thaiDistricts.length) {
                setSelectedDistrictId(null);
                return;
            }
            if (!selectedProvinceId) {
                setSelectedDistrictId(null);
                return;
            }
            if (!amphurValue) {
                setSelectedDistrictId(null);
                return;
            }
            const match = thaiDistricts.find({
                "EditCustomerModal.useEffect.match": (item)=>item.province_id === selectedProvinceId && matchesAdministrativeName(item, amphurValue)
            }["EditCustomerModal.useEffect.match"]);
            setSelectedDistrictId(match ? match.id : null);
        }
    }["EditCustomerModal.useEffect"], [
        thaiDistricts,
        selectedProvinceId,
        amphurValue
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EditCustomerModal.useEffect": ()=>{
            if (!thaiSubdistricts.length) {
                setSelectedSubdistrictId(null);
                return;
            }
            if (!selectedDistrictId) {
                setSelectedSubdistrictId(null);
                return;
            }
            if (!tumbonValue) {
                setSelectedSubdistrictId(null);
                return;
            }
            const match = thaiSubdistricts.find({
                "EditCustomerModal.useEffect.match": (item)=>item.district_id === selectedDistrictId && matchesAdministrativeName(item, tumbonValue)
            }["EditCustomerModal.useEffect.match"]);
            setSelectedSubdistrictId(match ? match.id : null);
        }
    }["EditCustomerModal.useEffect"], [
        thaiSubdistricts,
        selectedDistrictId,
        tumbonValue
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EditCustomerModal.useEffect": ()=>{
            if (showOPDPopup && !customerData["country"]) {
                handleFieldChange("country", "Thailand");
            }
        }
    }["EditCustomerModal.useEffect"], [
        showOPDPopup,
        customerData["country"],
        handleFieldChange
    ]);
    const provinceOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "EditCustomerModal.useMemo[provinceOptions]": ()=>thaiProvinces.map({
                "EditCustomerModal.useMemo[provinceOptions]": (province)=>({
                        id: province.id,
                        label: `${province.name_th} (${province.name_en})`
                    })
            }["EditCustomerModal.useMemo[provinceOptions]"])
    }["EditCustomerModal.useMemo[provinceOptions]"], [
        thaiProvinces
    ]);
    const districtOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "EditCustomerModal.useMemo[districtOptions]": ()=>{
            if (!selectedProvinceId) return [];
            return thaiDistricts.filter({
                "EditCustomerModal.useMemo[districtOptions]": (district)=>district.province_id === selectedProvinceId
            }["EditCustomerModal.useMemo[districtOptions]"]).map({
                "EditCustomerModal.useMemo[districtOptions]": (district)=>({
                        id: district.id,
                        label: `${district.name_th} (${district.name_en})`
                    })
            }["EditCustomerModal.useMemo[districtOptions]"]);
        }
    }["EditCustomerModal.useMemo[districtOptions]"], [
        thaiDistricts,
        selectedProvinceId
    ]);
    const subdistrictOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "EditCustomerModal.useMemo[subdistrictOptions]": ()=>{
            if (!selectedDistrictId) return [];
            return thaiSubdistricts.filter({
                "EditCustomerModal.useMemo[subdistrictOptions]": (subdistrict)=>subdistrict.district_id === selectedDistrictId
            }["EditCustomerModal.useMemo[subdistrictOptions]"]).map({
                "EditCustomerModal.useMemo[subdistrictOptions]": (subdistrict)=>({
                        id: subdistrict.id,
                        label: `${subdistrict.name_th} (${subdistrict.name_en})`
                    })
            }["EditCustomerModal.useMemo[subdistrictOptions]"]);
        }
    }["EditCustomerModal.useMemo[subdistrictOptions]"], [
        thaiSubdistricts,
        selectedDistrictId
    ]);
    const handleProvinceSelect = (provinceIdValue)=>{
        if (!provinceIdValue) {
            setSelectedProvinceId(null);
            setSelectedDistrictId(null);
            setSelectedSubdistrictId(null);
            handleFieldChange("province", "");
            handleFieldChange("amphur", "");
            handleFieldChange("tumbon", "");
            handleFieldChange("zipcode", "");
            return;
        }
        const numericId = Number(provinceIdValue);
        if (!Number.isFinite(numericId)) return;
        const province = thaiProvinces.find((item)=>item.id === numericId);
        setSelectedProvinceId(numericId);
        setSelectedDistrictId(null);
        setSelectedSubdistrictId(null);
        handleFieldChange("province", province?.name_th || province?.name_en || "");
        handleFieldChange("amphur", "");
        handleFieldChange("tumbon", "");
        handleFieldChange("zipcode", "");
    };
    const handleDistrictSelect = (districtIdValue)=>{
        if (!districtIdValue) {
            setSelectedDistrictId(null);
            setSelectedSubdistrictId(null);
            handleFieldChange("amphur", "");
            handleFieldChange("tumbon", "");
            handleFieldChange("zipcode", "");
            return;
        }
        const numericId = Number(districtIdValue);
        if (!Number.isFinite(numericId)) return;
        const district = thaiDistricts.find((item)=>item.id === numericId);
        setSelectedDistrictId(numericId);
        setSelectedSubdistrictId(null);
        handleFieldChange("amphur", district?.name_th || district?.name_en || "");
        handleFieldChange("tumbon", "");
        handleFieldChange("zipcode", "");
    };
    const handleSubdistrictSelect = (subdistrictIdValue)=>{
        if (!subdistrictIdValue) {
            setSelectedSubdistrictId(null);
            handleFieldChange("tumbon", "");
            handleFieldChange("zipcode", "");
            return;
        }
        const numericId = Number(subdistrictIdValue);
        if (!Number.isFinite(numericId)) return;
        const subdistrict = thaiSubdistricts.find((item)=>item.id === numericId);
        setSelectedSubdistrictId(numericId);
        handleFieldChange("tumbon", subdistrict?.name_th || subdistrict?.name_en || "");
        handleFieldChange("zipcode", subdistrict?.zip_code !== null && subdistrict?.zip_code !== undefined ? String(subdistrict.zip_code) : "");
    };
    const handleSave = async (options)=>{
        // Prevent duplicate submissions
        if (isLoading) return;
        setIsLoading(true);
        try {
            const response = await fetch("/api/customer-data", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    action: "update",
                    data: customerData
                })
            });
            const result = await response.json();
            const shouldClose = options?.autoClose !== false;
            if (result.success) {
                options?.onSuccess?.();
                setNotification({
                    isOpen: true,
                    type: "success",
                    title: "✨ บันทึกสำเร็จ!",
                    message: "ข้อมูลลูกค้าได้รับการอัปเดตเรียบร้อยแล้ว"
                });
                // Wait for notification to display then close
                setTimeout(()=>{
                    setNotification((prev)=>({
                            ...prev,
                            isOpen: false
                        }));
                    if (shouldClose) {
                        setTimeout(()=>{
                            onSave(customerData);
                            onClose();
                        }, 300); // Wait for fade out animation
                    }
                }, 2000); // Show notification for 2 seconds
            } else {
                setNotification({
                    isOpen: true,
                    type: "error",
                    title: "❌ บันทึกไม่สำเร็จ!",
                    message: result.error || "เกิดข้อผิดพลาดในการบันทึกข้อมูล กรุณาลองใหม่อีกครั้ง"
                });
                setTimeout(()=>{
                    setNotification((prev)=>({
                            ...prev,
                            isOpen: false
                        }));
                }, 3000);
            }
        } catch (error) {
            setNotification({
                isOpen: true,
                type: "error",
                title: "❌ บันทึกไม่สำเร็จ!",
                message: "ไม่สามารถเชื่อมต่อกับเซิร์ฟเวอร์ได้ กรุณาตรวจสอบการเชื่อมต่ออินเทอร์เน็ต"
            });
            setTimeout(()=>{
                setNotification((prev)=>({
                        ...prev,
                        isOpen: false
                    }));
            }, 3000);
        } finally{
            setIsLoading(false);
        }
    };
    const handleSaveFromOPD = ()=>{
        handleFieldChange("is_opd", 1);
        handleSave({
            autoClose: false,
            onSuccess: ()=>{
                setShowOPDPopup(false);
            }
        });
    };
    const handleSaveAppointment = async ()=>{
        if (appointmentLoading) return;
        const sanitizedForm = Object.entries(appointmentForm).reduce((acc, [key, value])=>{
            const normalized = typeof value === "string" ? value.trim() : value;
            if (normalized !== "" && normalized !== null && normalized !== undefined) {
                acc[key] = normalized;
            }
            return acc;
        }, {});
        delete sanitizedForm.record_no;
        const normalizedIdAll = sanitizedForm.id_all || customerIdAll || appointmentPrefillRef.current.id_all;
        if (normalizedIdAll) {
            sanitizedForm.id_all = normalizedIdAll;
        }
        if (!sanitizedForm.id_all) {
            setAppointmentError("ต้องเลือกผู้รับบริการก่อนบันทึกนัดหมาย");
            return;
        }
        setAppointmentLoading(true);
        setAppointmentError(null);
        try {
            const isEditing = Boolean(editingAppointmentCode);
            const endpoint = isEditing ? `/api/appointments/${encodeURIComponent(editingAppointmentCode)}` : "/api/appointments";
            const response = await fetch(endpoint, {
                method: isEditing ? "PUT" : "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    data: sanitizedForm
                })
            });
            const result = await response.json();
            if (!response.ok || result.success === false) {
                throw new Error(result.error || "ไม่สามารถบันทึกนัดหมายได้");
            }
            setNotification({
                isOpen: true,
                type: "success",
                title: isEditing ? "แก้ไขเรียบร้อย" : "บันทึกนัดหมายแล้ว",
                message: isEditing ? "ข้อมูลการนัดหมายได้รับการอัปเดตใน bjh_appointment" : "ข้อมูลนัดหมายถูกส่งไปยัง bjh_appointment เรียบร้อย"
            });
            resetAppointmentForm();
            fetchAppointmentHistory();
        } catch (error) {
            setAppointmentError(error?.message || "ไม่สามารถบันทึกนัดหมายได้");
        } finally{
            setAppointmentLoading(false);
        }
    };
    console.log("🎨 EditCustomerModal render - isOpen:", isOpen);
    if (!isOpen) return null;
    // Format date value for input (YYYY-MM-DD)
    const formatDateForInput = (dateValue)=>{
        if (!dateValue) return "";
        const date = new Date(dateValue);
        if (isNaN(date.getTime())) return "";
        return date.toISOString().split("T")[0];
    };
    // Format time value for input (HH:MM)
    const formatTimeForInput = (timeValue)=>{
        if (!timeValue) return "";
        if (typeof timeValue === "string" && timeValue.match(/^\d{2}:\d{2}/)) {
            return timeValue.substring(0, 5);
        }
        return timeValue;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fadeIn",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white rounded-2xl shadow-2xl max-h-[90vh] overflow-hidden w-full max-w-4xl animate-slideUp transform transition-all",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "sticky top-0 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 z-10 shadow-lg",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-3 right-3",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: onClose,
                                    className: "p-2 hover:bg-white hover:bg-opacity-20 rounded-xl transition-all duration-200 group",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        className: "w-5 h-5 text-white group-hover:rotate-90 transition-transform duration-200"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/EditCustomerModal.tsx",
                                        lineNumber: 1902,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/EditCustomerModal.tsx",
                                    lineNumber: 1898,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/EditCustomerModal.tsx",
                                lineNumber: 1897,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-center items-center gap-1 sm:gap-2 px-4 py-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setActiveTab("contact"),
                                        className: `flex flex-col sm:flex-row items-center justify-center gap-1 px-3 sm:px-4 py-2 sm:py-2.5 ${activeTab === "contact" ? "bg-white/30 shadow-inner" : "bg-white/10 hover:bg-white/20"} text-white rounded-xl transition-all duration-200 min-w-[60px] sm:min-w-[80px]`,
                                        title: "Contact Information",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                                className: "w-5 h-5"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                lineNumber: 1914,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs sm:text-sm font-medium hidden sm:block",
                                                children: "Contact"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                lineNumber: 1915,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/EditCustomerModal.tsx",
                                        lineNumber: 1908,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setActiveTab("opd"),
                                        className: `flex flex-col sm:flex-row items-center justify-center gap-1 px-3 sm:px-4 py-2 sm:py-2.5 ${activeTab === "opd" ? "bg-white/30 shadow-inner" : "bg-white/10 hover:bg-white/20"} text-white rounded-xl transition-all duration-200 min-w-[60px] sm:min-w-[80px]`,
                                        title: "OPD",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                                className: "w-5 h-5"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                lineNumber: 1923,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs sm:text-sm font-medium hidden sm:block",
                                                children: "OPD"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                lineNumber: 1924,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/EditCustomerModal.tsx",
                                        lineNumber: 1917,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setActiveTab("consent"),
                                        className: `flex flex-col sm:flex-row items-center justify-center gap-1 px-3 sm:px-4 py-2 sm:py-2.5 ${activeTab === "consent" ? "bg-white/30 shadow-inner" : "bg-white/10 hover:bg-white/20"} text-white rounded-xl transition-all duration-200 min-w-[60px] sm:min-w-[80px]`,
                                        title: "Consent",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clipboard$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ClipboardCheck$3e$__["ClipboardCheck"], {
                                                className: "w-5 h-5"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                lineNumber: 1932,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs sm:text-sm font-medium hidden sm:block",
                                                children: "Consent"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                lineNumber: 1933,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/EditCustomerModal.tsx",
                                        lineNumber: 1926,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>{
                                            setActiveTab("service");
                                            handleOpenServicePopup();
                                        },
                                        className: `flex flex-col sm:flex-row items-center justify-center gap-1 px-3 sm:px-4 py-2 sm:py-2.5 ${activeTab === "service" ? "bg-white/30 shadow-inner" : "bg-white/10 hover:bg-white/20"} text-white rounded-xl transition-all duration-200 min-w-[60px] sm:min-w-[80px] relative`,
                                        title: "บริการ",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__["Briefcase"], {
                                                className: "w-5 h-5"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                lineNumber: 1944,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs sm:text-sm font-medium hidden sm:block",
                                                children: "บริการ"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                lineNumber: 1945,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            selectedServices.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "absolute -top-1 -right-1 bg-emerald-400 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full",
                                                children: selectedServices.length
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                lineNumber: 1947,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/EditCustomerModal.tsx",
                                        lineNumber: 1935,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setActiveTab("appointment"),
                                        className: `flex flex-col sm:flex-row items-center justify-center gap-1 px-3 sm:px-4 py-2 sm:py-2.5 ${activeTab === "appointment" ? "bg-white/30 shadow-inner" : "bg-white/10 hover:bg-white/20"} text-white rounded-xl transition-all duration-200 min-w-[60px] sm:min-w-[80px]`,
                                        title: "นัดหมาย",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                className: "w-5 h-5"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                lineNumber: 1958,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs sm:text-sm font-medium hidden sm:block",
                                                children: "นัดหมาย"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                lineNumber: 1959,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/EditCustomerModal.tsx",
                                        lineNumber: 1952,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/EditCustomerModal.tsx",
                                lineNumber: 1907,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/EditCustomerModal.tsx",
                        lineNumber: 1895,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "overflow-y-auto",
                        style: {
                            maxHeight: "calc(90vh - 180px)"
                        },
                        children: [
                            activeTab === "contact" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-6 space-y-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-6 border border-cyan-100 shadow-sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2 mb-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-1 h-6 bg-gradient-to-b from-cyan-500 to-blue-500 rounded-full"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                        lineNumber: 1975,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        className: "text-lg font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent",
                                                        children: "ข้อมูลส่วนตัว"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                        lineNumber: 1976,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                lineNumber: 1974,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-1 md:grid-cols-4 gap-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "group",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "block text-sm font-semibold text-gray-700 mb-2",
                                                                children: "สถานะ"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                                lineNumber: 1983,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                value: customerData["status"] || customerData["สถานะ"] || "",
                                                                onChange: (e)=>handleFieldChange("status", e.target.value),
                                                                className: "w-full px-4 py-3 border-2 border-cyan-200 bg-white rounded-xl focus:ring-2 focus:ring-cyan-400 focus:border-transparent outline-none cursor-pointer",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: "",
                                                                        children: "เลือกสถานะ"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                                        lineNumber: 1989,
                                                                        columnNumber: 23
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    statusOptions.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: option.value,
                                                                            children: option.label
                                                                        }, option.value, false, {
                                                                            fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                                            lineNumber: 1991,
                                                                            columnNumber: 25
                                                                        }, ("TURBOPACK compile-time value", void 0)))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                                lineNumber: 1984,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                        lineNumber: 1982,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "group",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "block text-sm font-semibold text-gray-700 mb-2",
                                                                children: "คำนำหน้า"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                                lineNumber: 1997,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                value: customerData["prefix"] || "",
                                                                onChange: (e)=>handleFieldChange("prefix", e.target.value),
                                                                className: "w-full px-4 py-3 border-2 border-cyan-200 bg-white rounded-xl focus:ring-2 focus:ring-cyan-400 focus:border-transparent outline-none cursor-pointer",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: "",
                                                                        children: "เลือกคำนำหน้า"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                                        lineNumber: 2003,
                                                                        columnNumber: 23
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: "นาย",
                                                                        children: "นาย"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                                        lineNumber: 2004,
                                                                        columnNumber: 23
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: "นาง",
                                                                        children: "นาง"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                                        lineNumber: 2005,
                                                                        columnNumber: 23
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: "นางสาว",
                                                                        children: "นางสาว"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                                        lineNumber: 2006,
                                                                        columnNumber: 23
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: "Mr.",
                                                                        children: "Mr."
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                                        lineNumber: 2007,
                                                                        columnNumber: 23
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: "Mrs.",
                                                                        children: "Mrs."
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                                        lineNumber: 2008,
                                                                        columnNumber: 23
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: "Ms.",
                                                                        children: "Ms."
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                                        lineNumber: 2009,
                                                                        columnNumber: 23
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                                lineNumber: 1998,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                        lineNumber: 1996,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "group",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "block text-sm font-semibold text-gray-700 mb-2",
                                                                children: "ชื่อ *"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                                lineNumber: 2014,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "text",
                                                                value: customerData["name"] || customerData["ชื่อ"] || "",
                                                                onChange: (e)=>handleFieldChange("name", e.target.value),
                                                                className: "w-full px-4 py-3 border-2 border-cyan-200 bg-white rounded-xl focus:ring-2 focus:ring-cyan-400 focus:border-transparent outline-none",
                                                                placeholder: "กรอกชื่อ"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                                lineNumber: 2015,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                        lineNumber: 2013,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "group",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "block text-sm font-semibold text-gray-700 mb-2",
                                                                children: "นามสกุล"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                                lineNumber: 2025,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "text",
                                                                value: customerData["surname"] || "",
                                                                onChange: (e)=>handleFieldChange("surname", e.target.value),
                                                                className: "w-full px-4 py-3 border-2 border-cyan-200 bg-white rounded-xl focus:ring-2 focus:ring-cyan-400 focus:border-transparent outline-none",
                                                                placeholder: "กรอกนามสกุล"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                                lineNumber: 2026,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                        lineNumber: 2024,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "group",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "block text-sm font-semibold text-gray-700 mb-2",
                                                                children: "ชื่อเล่น"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                                lineNumber: 2036,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "text",
                                                                value: customerData["nickname"] || "",
                                                                onChange: (e)=>handleFieldChange("nickname", e.target.value),
                                                                className: "w-full px-4 py-3 border-2 border-cyan-200 bg-white rounded-xl focus:ring-2 focus:ring-cyan-400 focus:border-transparent outline-none",
                                                                placeholder: "กรอกชื่อเล่น"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                                lineNumber: 2037,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                        lineNumber: 2035,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "group",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "block text-sm font-semibold text-gray-700 mb-2",
                                                                children: "เพศ"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                                lineNumber: 2047,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                value: customerData["gender"] || "",
                                                                onChange: (e)=>handleFieldChange("gender", e.target.value),
                                                                className: "w-full px-4 py-3 border-2 border-cyan-200 bg-white rounded-xl focus:ring-2 focus:ring-cyan-400 focus:border-transparent outline-none cursor-pointer",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: "",
                                                                        children: "เลือกเพศ"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                                        lineNumber: 2053,
                                                                        columnNumber: 23
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: "ชาย",
                                                                        children: "ชาย"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                                        lineNumber: 2054,
                                                                        columnNumber: 23
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: "หญิง",
                                                                        children: "หญิง"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                                        lineNumber: 2055,
                                                                        columnNumber: 23
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: "อื่นๆ",
                                                                        children: "อื่นๆ"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                                        lineNumber: 2056,
                                                                        columnNumber: 23
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                                lineNumber: 2048,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                        lineNumber: 2046,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "group",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "block text-sm font-semibold text-gray-700 mb-2",
                                                                children: "ติดดาว"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                                lineNumber: 2061,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                onClick: ()=>handleFieldChange("star_flag", customerData["star_flag"] === "ติดดาว" ? "" : "ติดดาว"),
                                                                className: "w-full px-4 py-3 border-2 border-cyan-200 bg-white rounded-xl hover:border-cyan-300 transition-all duration-200 flex items-center justify-center gap-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                                                        className: `w-6 h-6 ${customerData["star_flag"] === "ติดดาว" ? "fill-yellow-400 text-yellow-400" : "text-gray-400"}`
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                                        lineNumber: 2067,
                                                                        columnNumber: 23
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-sm font-medium text-gray-700",
                                                                        children: customerData["star_flag"] === "ติดดาว" ? "ติดดาวแล้ว" : "คลิกเพื่อติดดาว"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                                        lineNumber: 2068,
                                                                        columnNumber: 23
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                                lineNumber: 2062,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                        lineNumber: 2060,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                lineNumber: 1980,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/EditCustomerModal.tsx",
                                        lineNumber: 1973,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-6 border border-indigo-100 shadow-sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2 mb-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-1 h-6 bg-gradient-to-b from-indigo-500 to-purple-500 rounded-full"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                        lineNumber: 2079,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        className: "text-lg font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent",
                                                        children: "ข้อมูลติดต่อ"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                        lineNumber: 2080,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                lineNumber: 2078,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-1 md:grid-cols-3 gap-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "group",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "block text-sm font-semibold text-gray-700 mb-2",
                                                                children: "เบอร์โทร"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                                lineNumber: 2087,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "tel",
                                                                value: customerData["phone"] || customerData["เบอร์โทร"] || "",
                                                                onChange: (e)=>handleFieldChange("phone", e.target.value),
                                                                className: "w-full px-4 py-3 border-2 border-indigo-200 bg-white rounded-xl focus:ring-2 focus:ring-indigo-400 focus:border-transparent outline-none",
                                                                placeholder: "กรอกเบอร์โทร"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                                lineNumber: 2088,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                        lineNumber: 2086,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "group",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "block text-sm font-semibold text-gray-700 mb-2",
                                                                children: "อีเมล"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                                lineNumber: 2098,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "email",
                                                                value: customerData["email"] || "",
                                                                onChange: (e)=>handleFieldChange("email", e.target.value),
                                                                className: "w-full px-4 py-3 border-2 border-indigo-200 bg-white rounded-xl focus:ring-2 focus:ring-indigo-400 focus:border-transparent outline-none",
                                                                placeholder: "กรอกอีเมล"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                                lineNumber: 2099,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                        lineNumber: 2097,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "group",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "block text-sm font-semibold text-gray-700 mb-2",
                                                                children: "ไลน์ไอดี"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                                lineNumber: 2109,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "text",
                                                                value: customerData["lineid"] || "",
                                                                onChange: (e)=>handleFieldChange("lineid", e.target.value),
                                                                className: "w-full px-4 py-3 border-2 border-indigo-200 bg-white rounded-xl focus:ring-2 focus:ring-indigo-400 focus:border-transparent outline-none",
                                                                placeholder: "กรอกไลน์ไอดี"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                                lineNumber: 2110,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                        lineNumber: 2108,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "group",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "block text-sm font-semibold text-gray-700 mb-2",
                                                                children: "เฟสบุ๊ค"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                                lineNumber: 2120,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "text",
                                                                value: customerData["facebook"] || "",
                                                                onChange: (e)=>handleFieldChange("facebook", e.target.value),
                                                                className: "w-full px-4 py-3 border-2 border-indigo-200 bg-white rounded-xl focus:ring-2 focus:ring-indigo-400 focus:border-transparent outline-none",
                                                                placeholder: "กรอกเฟสบุ๊ค"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                                lineNumber: 2121,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                        lineNumber: 2119,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "group",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "block text-sm font-semibold text-gray-700 mb-2",
                                                                children: "ประเทศ"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                                lineNumber: 2131,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                value: customerData["country"] || customerData["ประเทศ"] || "",
                                                                onChange: (e)=>handleFieldChange("country", e.target.value),
                                                                className: "w-full px-4 py-3 border-2 border-indigo-200 bg-white rounded-xl focus:ring-2 focus:ring-indigo-400 focus:border-transparent outline-none cursor-pointer",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: "",
                                                                        children: "เลือกประเทศ"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                                        lineNumber: 2137,
                                                                        columnNumber: 23
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    countryOptions.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: option.value,
                                                                            children: option.label
                                                                        }, option.value, false, {
                                                                            fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                                            lineNumber: 2139,
                                                                            columnNumber: 25
                                                                        }, ("TURBOPACK compile-time value", void 0)))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                                lineNumber: 2132,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                        lineNumber: 2130,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                lineNumber: 2084,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/EditCustomerModal.tsx",
                                        lineNumber: 2077,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-6 border border-emerald-100 shadow-sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2 mb-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-1 h-6 bg-gradient-to-b from-emerald-500 to-teal-500 rounded-full"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                        lineNumber: 2149,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        className: "text-lg font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent",
                                                        children: "ข้อมูลธุรกิจ"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                        lineNumber: 2150,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                lineNumber: 2148,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-1 md:grid-cols-4 gap-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "group",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "block text-sm font-semibold text-gray-700 mb-2",
                                                                children: "แหล่งที่มา"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                                lineNumber: 2157,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                value: customerData["source"] || customerData["  แหล่งที่มา"] || "",
                                                                onChange: (e)=>handleFieldChange("source", e.target.value),
                                                                className: "w-full px-4 py-3 border-2 border-emerald-200 bg-white rounded-xl focus:ring-2 focus:ring-emerald-400 focus:border-transparent outline-none cursor-pointer",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: "",
                                                                        children: "เลือกแหล่งที่มา"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                                        lineNumber: 2163,
                                                                        columnNumber: 23
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    sourceOptions.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: option.value,
                                                                            children: option.label
                                                                        }, option.value, false, {
                                                                            fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                                            lineNumber: 2165,
                                                                            columnNumber: 25
                                                                        }, ("TURBOPACK compile-time value", void 0)))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                                lineNumber: 2158,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                        lineNumber: 2156,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "group",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "block text-sm font-semibold text-gray-700 mb-2",
                                                                children: "ผลิตภัณฑ์ที่สนใจ"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                                lineNumber: 2171,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                value: customerData["interested_product"] || customerData[" ผลิตภัณฑ์ที่สนใจ"] || "",
                                                                onChange: (e)=>handleFieldChange("interested_product", e.target.value),
                                                                className: "w-full px-4 py-3 border-2 border-emerald-200 bg-white rounded-xl focus:ring-2 focus:ring-emerald-400 focus:border-transparent outline-none cursor-pointer",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: "",
                                                                        children: "เลือกผลิตภัณฑ์"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                                        lineNumber: 2177,
                                                                        columnNumber: 23
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    productOptions.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: option.value,
                                                                            children: option.label
                                                                        }, option.value, false, {
                                                                            fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                                            lineNumber: 2179,
                                                                            columnNumber: 25
                                                                        }, ("TURBOPACK compile-time value", void 0)))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                                lineNumber: 2172,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                        lineNumber: 2170,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "group",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "block text-sm font-semibold text-gray-700 mb-2",
                                                                children: "ผู้ติดต่อ"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                                lineNumber: 2185,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                value: customerData["contact_staff"] || customerData["ผู้ติดต่อ"] || "",
                                                                onChange: (e)=>handleFieldChange("contact_staff", e.target.value),
                                                                className: "w-full px-4 py-3 border-2 border-emerald-200 bg-white rounded-xl focus:ring-2 focus:ring-emerald-400 focus:border-transparent outline-none cursor-pointer",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: "",
                                                                        children: "เลือกผู้ติดต่อ"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                                        lineNumber: 2191,
                                                                        columnNumber: 23
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    contactPersonOptions.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: option.value,
                                                                            children: option.label
                                                                        }, option.value, false, {
                                                                            fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                                            lineNumber: 2193,
                                                                            columnNumber: 25
                                                                        }, ("TURBOPACK compile-time value", void 0)))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                                lineNumber: 2186,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                        lineNumber: 2184,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "group",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "block text-sm font-semibold text-gray-700 mb-2",
                                                                children: "ยอดนำเสนอ"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                                lineNumber: 2199,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "number",
                                                                value: customerData["proposed_amount"] || customerData["ยอดนำเสนอ"] || "",
                                                                onChange: (e)=>handleFieldChange("proposed_amount", e.target.value),
                                                                className: "w-full px-4 py-3 border-2 border-emerald-200 bg-white rounded-xl focus:ring-2 focus:ring-emerald-400 focus:border-transparent outline-none",
                                                                placeholder: "กรอกยอดนำเสนอ"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                                lineNumber: 2200,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                        lineNumber: 2198,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                lineNumber: 2154,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/EditCustomerModal.tsx",
                                        lineNumber: 2147,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-6 border border-cyan-100 shadow-sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2 mb-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-1 h-6 bg-gradient-to-b from-cyan-500 to-blue-500 rounded-full"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                        lineNumber: 2214,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        className: "text-lg font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent",
                                                        children: "วันที่ติดตาม"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                        lineNumber: 2215,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                lineNumber: 2213,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-1 md:grid-cols-3 gap-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "group",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: "📅"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                                        lineNumber: 2223,
                                                                        columnNumber: 23
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    " วันที่ได้ชื่อ เบอร์"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                                lineNumber: 2222,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "date",
                                                                value: formatDateForInput(customerData["got_contact_date"] || customerData["วันที่ได้ชื่อ เบอร์ "]),
                                                                onChange: (e)=>handleFieldChange("got_contact_date", e.target.value),
                                                                className: "w-full px-4 py-3 border-2 border-cyan-200 bg-white rounded-xl focus:ring-2 focus:ring-cyan-400 focus:border-transparent outline-none cursor-pointer"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                                lineNumber: 2225,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                        lineNumber: 2221,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "group",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: "📅"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                                        lineNumber: 2235,
                                                                        columnNumber: 23
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    " วันที่ติดตามครั้งล่าสุด"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                                lineNumber: 2234,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "date",
                                                                value: formatDateForInput(customerData["last_followup"] || customerData["วันที่ติดตามครั้งล่าสุด"]),
                                                                onChange: (e)=>handleFieldChange("last_followup", e.target.value),
                                                                className: "w-full px-4 py-3 border-2 border-cyan-200 bg-white rounded-xl focus:ring-2 focus:ring-cyan-400 focus:border-transparent outline-none cursor-pointer"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                                lineNumber: 2237,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                        lineNumber: 2233,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "group",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: "📅"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                                        lineNumber: 2247,
                                                                        columnNumber: 23
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    " วันที่ติดตามครั้งถัดไป"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                                lineNumber: 2246,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "date",
                                                                value: formatDateForInput(customerData["next_followup"] || customerData["วันที่ติดตามครั้งถัดไป"]),
                                                                onChange: (e)=>handleFieldChange("next_followup", e.target.value),
                                                                className: "w-full px-4 py-3 border-2 border-cyan-200 bg-white rounded-xl focus:ring-2 focus:ring-cyan-400 focus:border-transparent outline-none cursor-pointer"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                                lineNumber: 2249,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                        lineNumber: 2245,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                lineNumber: 2219,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/EditCustomerModal.tsx",
                                        lineNumber: 2212,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl p-6 border border-purple-100 shadow-sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2 mb-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-1 h-6 bg-gradient-to-b from-purple-500 to-violet-500 rounded-full"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                        lineNumber: 2262,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        className: "text-lg font-bold bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent",
                                                        children: "วันที่ Consult"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                        lineNumber: 2263,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                lineNumber: 2261,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "group",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: "📅"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                                        lineNumber: 2271,
                                                                        columnNumber: 23
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    " วันที่ได้นัด consult"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                                lineNumber: 2270,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "date",
                                                                value: formatDateForInput(customerData["booked_consult_date"] || customerData["วันที่ได้นัด consult"]),
                                                                onChange: (e)=>handleFieldChange("booked_consult_date", e.target.value),
                                                                className: "w-full px-4 py-3 border-2 border-purple-200 bg-white rounded-xl focus:ring-2 focus:ring-purple-400 focus:border-transparent outline-none cursor-pointer"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                                lineNumber: 2273,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                        lineNumber: 2269,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "group",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: "📅"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                                        lineNumber: 2283,
                                                                        columnNumber: 23
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    " วันที่ Consult"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                                lineNumber: 2282,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "date",
                                                                value: formatDateForInput(customerData["consult_date"] || customerData["  วันที่ Consult"]),
                                                                onChange: (e)=>handleFieldChange("consult_date", e.target.value),
                                                                className: "w-full px-4 py-3 border-2 border-purple-200 bg-white rounded-xl focus:ring-2 focus:ring-purple-400 focus:border-transparent outline-none cursor-pointer"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                                lineNumber: 2285,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                        lineNumber: 2281,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                lineNumber: 2267,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/EditCustomerModal.tsx",
                                        lineNumber: 2260,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-gradient-to-br from-rose-50 to-pink-50 rounded-xl p-6 border border-rose-100 shadow-sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2 mb-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-1 h-6 bg-gradient-to-b from-rose-500 to-pink-500 rounded-full"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                        lineNumber: 2298,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        className: "text-lg font-bold bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent",
                                                        children: "วันที่ผ่าตัด"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                        lineNumber: 2299,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                lineNumber: 2297,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "group",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: "📅"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                                        lineNumber: 2307,
                                                                        columnNumber: 23
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    " วันที่ได้นัดผ่าตัด"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                                lineNumber: 2306,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "date",
                                                                value: formatDateForInput(customerData["booked_surgery_date"] || customerData["วันที่ได้นัดผ่าตัด"]),
                                                                onChange: (e)=>handleFieldChange("booked_surgery_date", e.target.value),
                                                                className: "w-full px-4 py-3 border-2 border-rose-200 bg-white rounded-xl focus:ring-2 focus:ring-rose-400 focus:border-transparent outline-none cursor-pointer"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                                lineNumber: 2309,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                        lineNumber: 2305,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "group",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: "📅"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                                        lineNumber: 2319,
                                                                        columnNumber: 23
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    " วันที่ผ่าตัด"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                                lineNumber: 2318,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "date",
                                                                value: formatDateForInput(customerData["surgery_date"] || customerData["วันที่ผ่าตัด"]),
                                                                onChange: (e)=>handleFieldChange("surgery_date", e.target.value),
                                                                className: "w-full px-4 py-3 border-2 border-rose-200 bg-white rounded-xl focus:ring-2 focus:ring-rose-400 focus:border-transparent outline-none cursor-pointer"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                                lineNumber: 2321,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                        lineNumber: 2317,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "group",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: "⏰"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                                        lineNumber: 2331,
                                                                        columnNumber: 23
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    " เวลาที่นัด"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                                lineNumber: 2330,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "time",
                                                                value: formatTimeForInput(customerData["appointment_time"] || customerData["เวลาที่นัด"]),
                                                                onChange: (e)=>handleFieldChange("appointment_time", e.target.value),
                                                                className: "w-full px-4 py-3 border-2 border-rose-200 bg-white rounded-xl focus:ring-2 focus:ring-rose-400 focus:border-transparent outline-none cursor-pointer"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                                lineNumber: 2333,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                        lineNumber: 2329,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                lineNumber: 2303,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/EditCustomerModal.tsx",
                                        lineNumber: 2296,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-gradient-to-br from-amber-50 to-yellow-50 rounded-xl p-6 border border-amber-100 shadow-sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2 mb-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-1 h-6 bg-gradient-to-b from-amber-500 to-yellow-500 rounded-full"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                        lineNumber: 2346,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        className: "text-lg font-bold bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent",
                                                        children: "หมายเหตุ"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                        lineNumber: 2347,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                lineNumber: 2345,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                value: customerData["note"] || customerData["หมายเหตุ"] || "",
                                                onChange: (e)=>handleFieldChange("note", e.target.value),
                                                className: "w-full px-4 py-3 border-2 border-amber-200 bg-white rounded-xl focus:ring-2 focus:ring-amber-400 focus:border-transparent outline-none min-h-[120px] resize-none",
                                                placeholder: "📝 พิมพ์หมายเหตุ..."
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                lineNumber: 2351,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/EditCustomerModal.tsx",
                                        lineNumber: 2344,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/EditCustomerModal.tsx",
                                lineNumber: 1971,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            activeTab === "opd" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-6 space-y-6",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100 shadow-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 mb-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-1 h-6 bg-gradient-to-b from-blue-500 to-indigo-500 rounded-full"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                    lineNumber: 2366,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "text-lg font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent",
                                                    children: "ข้อมูล OPD - ที่อยู่"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                    lineNumber: 2367,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/EditCustomerModal.tsx",
                                            lineNumber: 2365,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        thaiAddressLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-emerald-600 mb-4",
                                            children: "กำลังโหลดข้อมูลจังหวัด/อำเภอ/ตำบล..."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/EditCustomerModal.tsx",
                                            lineNumber: 2372,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        thaiAddressError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-red-600 mb-4",
                                            children: thaiAddressError
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/EditCustomerModal.tsx",
                                            lineNumber: 2375,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "group",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block text-sm font-semibold text-gray-700 mb-2",
                                                            children: "บ้านเลขที่"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                            lineNumber: 2379,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "text",
                                                            value: customerData["locno"] || "",
                                                            onChange: (e)=>handleFieldChange("locno", e.target.value),
                                                            className: "w-full px-4 py-3 border-2 border-blue-200 bg-white rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-transparent outline-none",
                                                            placeholder: "ระบุบ้านเลขที่"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                            lineNumber: 2380,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                    lineNumber: 2378,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "group",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "block text-sm font-semibold text-gray-700 mb-2",
                                                                    children: "จังหวัด"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                                    lineNumber: 2390,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                    value: selectedProvinceId ? String(selectedProvinceId) : "",
                                                                    onChange: (e)=>handleProvinceSelect(e.target.value),
                                                                    className: "w-full px-4 py-3 border-2 border-blue-200 bg-white rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-transparent outline-none cursor-pointer",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: "",
                                                                            children: "เลือกจังหวัด"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                                            lineNumber: 2396,
                                                                            columnNumber: 25
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        provinceOptions.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: option.id,
                                                                                children: option.label
                                                                            }, option.id, false, {
                                                                                fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                                                lineNumber: 2398,
                                                                                columnNumber: 27
                                                                            }, ("TURBOPACK compile-time value", void 0)))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                                    lineNumber: 2391,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                            lineNumber: 2389,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "group",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "block text-sm font-semibold text-gray-700 mb-2",
                                                                    children: "อำเภอ / เขต"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                                    lineNumber: 2403,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                    value: selectedDistrictId ? String(selectedDistrictId) : "",
                                                                    onChange: (e)=>handleDistrictSelect(e.target.value),
                                                                    disabled: !districtOptions.length,
                                                                    className: "w-full px-4 py-3 border-2 border-blue-200 bg-white rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-transparent outline-none cursor-pointer disabled:bg-gray-100",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: "",
                                                                            children: "เลือกอำเภอ / เขต"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                                            lineNumber: 2410,
                                                                            columnNumber: 25
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        districtOptions.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: option.id,
                                                                                children: option.label
                                                                            }, option.id, false, {
                                                                                fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                                                lineNumber: 2412,
                                                                                columnNumber: 27
                                                                            }, ("TURBOPACK compile-time value", void 0)))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                                    lineNumber: 2404,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                            lineNumber: 2402,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "group",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "block text-sm font-semibold text-gray-700 mb-2",
                                                                    children: "ตำบล / แขวง"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                                    lineNumber: 2417,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                    value: selectedSubdistrictId ? String(selectedSubdistrictId) : "",
                                                                    onChange: (e)=>handleSubdistrictSelect(e.target.value),
                                                                    disabled: !subdistrictOptions.length,
                                                                    className: "w-full px-4 py-3 border-2 border-blue-200 bg-white rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-transparent outline-none cursor-pointer disabled:bg-gray-100",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: "",
                                                                            children: "เลือกตำบล / แขวง"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                                            lineNumber: 2424,
                                                                            columnNumber: 25
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        subdistrictOptions.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: option.id,
                                                                                children: option.label
                                                                            }, option.id, false, {
                                                                                fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                                                lineNumber: 2426,
                                                                                columnNumber: 27
                                                                            }, ("TURBOPACK compile-time value", void 0)))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                                    lineNumber: 2418,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                            lineNumber: 2416,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "group",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "block text-sm font-semibold text-gray-700 mb-2",
                                                                    children: "รหัสไปรษณีย์"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                                    lineNumber: 2431,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "text",
                                                                    value: customerData["zipcode"] || "",
                                                                    readOnly: true,
                                                                    className: "w-full px-4 py-3 border-2 border-blue-200 bg-gray-100 rounded-xl outline-none text-gray-700",
                                                                    placeholder: "รหัสไปรษณีย์ (อัตโนมัติ)"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                                    lineNumber: 2432,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                            lineNumber: 2430,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                    lineNumber: 2388,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/EditCustomerModal.tsx",
                                            lineNumber: 2377,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/EditCustomerModal.tsx",
                                    lineNumber: 2364,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/EditCustomerModal.tsx",
                                lineNumber: 2363,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            activeTab === "consent" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-6 space-y-6",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-6 border border-emerald-100 shadow-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 mb-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-1 h-6 bg-gradient-to-b from-emerald-500 to-teal-500 rounded-full"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                    lineNumber: 2451,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "text-lg font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent",
                                                    children: "Consent Form"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                    lineNumber: 2452,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/EditCustomerModal.tsx",
                                            lineNumber: 2450,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-2 mb-6",
                                            children: consentPartMeta.map((part)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setSelectedConsentPart(part.key),
                                                    className: `px-4 py-2 rounded-lg font-medium transition-all ${selectedConsentPart === part.key ? "bg-emerald-500 text-white shadow-md" : "bg-white border border-emerald-200 text-emerald-700 hover:bg-emerald-50"}`,
                                                    children: part.label
                                                }, part.key, false, {
                                                    fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                    lineNumber: 2459,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/EditCustomerModal.tsx",
                                            lineNumber: 2457,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        consentLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-center py-8",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                className: "w-8 h-8 animate-spin text-emerald-500"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                lineNumber: 2473,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/EditCustomerModal.tsx",
                                            lineNumber: 2472,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "group",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "block text-sm font-semibold text-gray-700 mb-2",
                                                                    children: "น้ำหนัก (kg)"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                                    lineNumber: 2479,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "text",
                                                                    value: consentSections[selectedConsentPart]?.weight || "",
                                                                    onChange: (e)=>setConsentSections((prev)=>({
                                                                                ...prev,
                                                                                [selectedConsentPart]: {
                                                                                    ...prev[selectedConsentPart],
                                                                                    weight: e.target.value
                                                                                }
                                                                            })),
                                                                    className: "w-full px-4 py-3 border-2 border-emerald-200 bg-white rounded-xl focus:ring-2 focus:ring-emerald-400 focus:border-transparent outline-none",
                                                                    placeholder: "ระบุน้ำหนัก"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                                    lineNumber: 2480,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                            lineNumber: 2478,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "group",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "block text-sm font-semibold text-gray-700 mb-2",
                                                                    children: "ส่วนสูง (cm)"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                                    lineNumber: 2492,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "text",
                                                                    value: consentSections[selectedConsentPart]?.height || "",
                                                                    onChange: (e)=>setConsentSections((prev)=>({
                                                                                ...prev,
                                                                                [selectedConsentPart]: {
                                                                                    ...prev[selectedConsentPart],
                                                                                    height: e.target.value
                                                                                }
                                                                            })),
                                                                    className: "w-full px-4 py-3 border-2 border-emerald-200 bg-white rounded-xl focus:ring-2 focus:ring-emerald-400 focus:border-transparent outline-none",
                                                                    placeholder: "ระบุส่วนสูง"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                                    lineNumber: 2493,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                            lineNumber: 2491,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                    lineNumber: 2477,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "group",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "checkbox",
                                                                    checked: consentSections[selectedConsentPart]?.hasChronic || false,
                                                                    onChange: (e)=>setConsentSections((prev)=>({
                                                                                ...prev,
                                                                                [selectedConsentPart]: {
                                                                                    ...prev[selectedConsentPart],
                                                                                    hasChronic: e.target.checked
                                                                                }
                                                                            })),
                                                                    className: "w-4 h-4 rounded border-gray-300 text-emerald-500 focus:ring-emerald-400"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                                    lineNumber: 2507,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                "มีโรคประจำตัว"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                            lineNumber: 2506,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        consentSections[selectedConsentPart]?.hasChronic && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "text",
                                                            value: consentSections[selectedConsentPart]?.chronicDiseaseDetail || "",
                                                            onChange: (e)=>setConsentSections((prev)=>({
                                                                        ...prev,
                                                                        [selectedConsentPart]: {
                                                                            ...prev[selectedConsentPart],
                                                                            chronicDiseaseDetail: e.target.value
                                                                        }
                                                                    })),
                                                            className: "w-full px-4 py-3 border-2 border-emerald-200 bg-white rounded-xl focus:ring-2 focus:ring-emerald-400 focus:border-transparent outline-none mt-2",
                                                            placeholder: "ระบุโรคประจำตัว"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                            lineNumber: 2519,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                    lineNumber: 2505,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "group",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "checkbox",
                                                                    checked: consentSections[selectedConsentPart]?.hasDrugAllergy || false,
                                                                    onChange: (e)=>setConsentSections((prev)=>({
                                                                                ...prev,
                                                                                [selectedConsentPart]: {
                                                                                    ...prev[selectedConsentPart],
                                                                                    hasDrugAllergy: e.target.checked
                                                                                }
                                                                            })),
                                                                    className: "w-4 h-4 rounded border-gray-300 text-emerald-500 focus:ring-emerald-400"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                                    lineNumber: 2533,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                "มีประวัติแพ้ยา"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                            lineNumber: 2532,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        consentSections[selectedConsentPart]?.hasDrugAllergy && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "text",
                                                            value: consentSections[selectedConsentPart]?.drugAllergyDetail || "",
                                                            onChange: (e)=>setConsentSections((prev)=>({
                                                                        ...prev,
                                                                        [selectedConsentPart]: {
                                                                            ...prev[selectedConsentPart],
                                                                            drugAllergyDetail: e.target.value
                                                                        }
                                                                    })),
                                                            className: "w-full px-4 py-3 border-2 border-emerald-200 bg-white rounded-xl focus:ring-2 focus:ring-emerald-400 focus:border-transparent outline-none mt-2",
                                                            placeholder: "ระบุยาที่แพ้"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                            lineNumber: 2545,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                    lineNumber: 2531,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "group",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block text-sm font-semibold text-gray-700 mb-2",
                                                            children: "ยินยอมรับการรักษา"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                            lineNumber: 2558,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                            value: consentSections[selectedConsentPart]?.medicalConsent || "",
                                                            onChange: (e)=>setConsentSections((prev)=>({
                                                                        ...prev,
                                                                        [selectedConsentPart]: {
                                                                            ...prev[selectedConsentPart],
                                                                            medicalConsent: e.target.value
                                                                        }
                                                                    })),
                                                            className: "w-full px-4 py-3 border-2 border-emerald-200 bg-white rounded-xl focus:ring-2 focus:ring-emerald-400 focus:border-transparent outline-none cursor-pointer",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "",
                                                                    children: "เลือก"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                                    lineNumber: 2567,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                medicalConsentOptions.map((opt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: opt,
                                                                        children: opt
                                                                    }, opt, false, {
                                                                        fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                                        lineNumber: 2569,
                                                                        columnNumber: 27
                                                                    }, ("TURBOPACK compile-time value", void 0)))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                            lineNumber: 2559,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                    lineNumber: 2557,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "group",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block text-sm font-semibold text-gray-700 mb-2",
                                                            children: "ยอมรับ PDPA"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                            lineNumber: 2574,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                            value: consentSections[selectedConsentPart]?.acceptPdpa || "",
                                                            onChange: (e)=>setConsentSections((prev)=>({
                                                                        ...prev,
                                                                        [selectedConsentPart]: {
                                                                            ...prev[selectedConsentPart],
                                                                            acceptPdpa: e.target.value
                                                                        }
                                                                    })),
                                                            className: "w-full px-4 py-3 border-2 border-emerald-200 bg-white rounded-xl focus:ring-2 focus:ring-emerald-400 focus:border-transparent outline-none cursor-pointer",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "",
                                                                    children: "เลือก"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                                    lineNumber: 2583,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                acceptOptions.map((opt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: opt,
                                                                        children: opt
                                                                    }, opt, false, {
                                                                        fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                                        lineNumber: 2585,
                                                                        columnNumber: 27
                                                                    }, ("TURBOPACK compile-time value", void 0)))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                            lineNumber: 2575,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                    lineNumber: 2573,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "group",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block text-sm font-semibold text-gray-700 mb-2",
                                                            children: "ยินยอมเผยแพร่สื่อ"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                            lineNumber: 2590,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                            value: consentSections[selectedConsentPart]?.acceptMedia || "",
                                                            onChange: (e)=>setConsentSections((prev)=>({
                                                                        ...prev,
                                                                        [selectedConsentPart]: {
                                                                            ...prev[selectedConsentPart],
                                                                            acceptMedia: e.target.value
                                                                        }
                                                                    })),
                                                            className: "w-full px-4 py-3 border-2 border-emerald-200 bg-white rounded-xl focus:ring-2 focus:ring-emerald-400 focus:border-transparent outline-none cursor-pointer",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "",
                                                                    children: "เลือก"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                                    lineNumber: 2599,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                acceptOptions.map((opt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: opt,
                                                                        children: opt
                                                                    }, opt, false, {
                                                                        fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                                        lineNumber: 2601,
                                                                        columnNumber: 27
                                                                    }, ("TURBOPACK compile-time value", void 0)))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                            lineNumber: 2591,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                    lineNumber: 2589,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "group",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block text-sm font-semibold text-gray-700 mb-2",
                                                            children: "ลายเซ็น"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                            lineNumber: 2607,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SignaturePad, {
                                                            value: consentSections[selectedConsentPart]?.signatureUrl || "",
                                                            onChange: (url)=>setConsentSections((prev)=>({
                                                                        ...prev,
                                                                        [selectedConsentPart]: {
                                                                            ...prev[selectedConsentPart],
                                                                            signatureUrl: url
                                                                        }
                                                                    }))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                            lineNumber: 2608,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                    lineNumber: 2606,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/EditCustomerModal.tsx",
                                            lineNumber: 2476,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/EditCustomerModal.tsx",
                                    lineNumber: 2449,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/EditCustomerModal.tsx",
                                lineNumber: 2448,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            activeTab === "service" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-6 space-y-6",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-100 shadow-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 mb-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-1 h-6 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                    lineNumber: 2627,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "text-lg font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent",
                                                    children: "บริการ"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                    lineNumber: 2628,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/EditCustomerModal.tsx",
                                            lineNumber: 2626,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "group",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block text-sm font-semibold text-gray-700 mb-2",
                                                            children: "กลุ่มบริการ"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                            lineNumber: 2635,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                            value: selectedOpdGroupCode,
                                                            onChange: (e)=>setSelectedOpdGroupCode(e.target.value),
                                                            disabled: groupsLoading,
                                                            className: "w-full px-4 py-3 border-2 border-purple-200 bg-white rounded-xl focus:ring-2 focus:ring-purple-400 focus:border-transparent outline-none cursor-pointer",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "",
                                                                    children: "เลือกกลุ่มบริการ"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                                    lineNumber: 2642,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                opdGroups.map((group)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: group.groupcode,
                                                                        children: group.groupname
                                                                    }, group.groupcode, false, {
                                                                        fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                                        lineNumber: 2644,
                                                                        columnNumber: 25
                                                                    }, ("TURBOPACK compile-time value", void 0)))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                            lineNumber: 2636,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                    lineNumber: 2634,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                selectedOpdGroupCode && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "group",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block text-sm font-semibold text-gray-700 mb-2",
                                                            children: "ค้นหาบริการ"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                            lineNumber: 2651,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "text",
                                                            value: serviceSearchTerm,
                                                            onChange: (e)=>setServiceSearchTerm(e.target.value),
                                                            className: "w-full px-4 py-3 border-2 border-purple-200 bg-white rounded-xl focus:ring-2 focus:ring-purple-400 focus:border-transparent outline-none",
                                                            placeholder: "พิมพ์ชื่อบริการ..."
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                            lineNumber: 2652,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                    lineNumber: 2650,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                selectedServices.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "bg-purple-100 rounded-xl p-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "font-semibold text-purple-800 mb-2",
                                                            children: [
                                                                "บริการที่เลือก (",
                                                                selectedServices.length,
                                                                ")"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                            lineNumber: 2664,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "space-y-2",
                                                            children: selectedServices.map((svc)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex justify-between items-center bg-white rounded-lg p-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-sm text-gray-700",
                                                                            children: svc.itemname
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                                            lineNumber: 2668,
                                                                            columnNumber: 29
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-sm font-semibold text-purple-600",
                                                                            children: [
                                                                                formatCurrencyDisplay(calculateServiceEntryTotal(svc)),
                                                                                " ฿"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                                            lineNumber: 2669,
                                                                            columnNumber: 29
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, svc.id, true, {
                                                                    fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                                    lineNumber: 2667,
                                                                    columnNumber: 27
                                                                }, ("TURBOPACK compile-time value", void 0)))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                            lineNumber: 2665,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                    lineNumber: 2663,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/EditCustomerModal.tsx",
                                            lineNumber: 2633,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/EditCustomerModal.tsx",
                                    lineNumber: 2625,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/EditCustomerModal.tsx",
                                lineNumber: 2624,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            activeTab === "appointment" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-6 space-y-6",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-6 border border-orange-100 shadow-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 mb-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-1 h-6 bg-gradient-to-b from-orange-500 to-amber-500 rounded-full"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                    lineNumber: 2687,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "text-lg font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent",
                                                    children: "นัดหมาย"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                    lineNumber: 2688,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/EditCustomerModal.tsx",
                                            lineNumber: 2686,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        appointmentLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-center py-8",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                className: "w-8 h-8 animate-spin text-orange-500"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                lineNumber: 2694,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/EditCustomerModal.tsx",
                                            lineNumber: 2693,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-4",
                                            children: [
                                                appointmentSections.map((section, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "space-y-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                className: "font-semibold text-gray-800",
                                                                children: section.title
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                                lineNumber: 2700,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: `grid ${section.columns || "grid-cols-1 md:grid-cols-2"} gap-4`,
                                                                children: section.fields.map((fieldKey)=>{
                                                                    const fieldMeta = appointmentFieldMetaMap[fieldKey];
                                                                    if (!fieldMeta) return null;
                                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: fieldMeta.fullWidth ? "col-span-full" : "",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                className: "block text-sm font-semibold text-gray-700 mb-2",
                                                                                children: fieldMeta.label
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                                                lineNumber: 2707,
                                                                                columnNumber: 33
                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                            fieldMeta.type === "textarea" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                                                value: appointmentForm[fieldKey] || "",
                                                                                onChange: (e)=>setAppointmentForm((prev)=>({
                                                                                            ...prev,
                                                                                            [fieldKey]: e.target.value
                                                                                        })),
                                                                                readOnly: fieldMeta.readOnly,
                                                                                className: "w-full px-4 py-3 border-2 border-orange-200 bg-white rounded-xl focus:ring-2 focus:ring-orange-400 focus:border-transparent outline-none min-h-[100px] resize-none",
                                                                                placeholder: fieldMeta.placeholder
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                                                lineNumber: 2709,
                                                                                columnNumber: 35
                                                                            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                type: fieldMeta.type || "text",
                                                                                value: appointmentForm[fieldKey] || "",
                                                                                onChange: (e)=>setAppointmentForm((prev)=>({
                                                                                            ...prev,
                                                                                            [fieldKey]: e.target.value
                                                                                        })),
                                                                                readOnly: fieldMeta.readOnly,
                                                                                className: `w-full px-4 py-3 border-2 border-orange-200 ${fieldMeta.readOnly ? "bg-gray-100" : "bg-white"} rounded-xl focus:ring-2 focus:ring-orange-400 focus:border-transparent outline-none`,
                                                                                placeholder: fieldMeta.placeholder
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                                                lineNumber: 2717,
                                                                                columnNumber: 35
                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                        ]
                                                                    }, fieldKey, true, {
                                                                        fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                                        lineNumber: 2706,
                                                                        columnNumber: 31
                                                                    }, ("TURBOPACK compile-time value", void 0));
                                                                })
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                                lineNumber: 2701,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, idx, true, {
                                                        fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                        lineNumber: 2699,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))),
                                                appointmentHistory.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-6",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "font-semibold text-gray-800 mb-4",
                                                            children: "ประวัตินัดหมาย"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                            lineNumber: 2735,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "space-y-2",
                                                            children: appointmentHistory.map((item, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "bg-white border border-orange-200 rounded-lg p-3 hover:shadow-md transition-shadow cursor-pointer",
                                                                    onClick: ()=>{
                                                                        const key = resolveAppointmentHistoryKey(item, idx);
                                                                        setSelectedAppointmentHistoryKey(selectedAppointmentHistoryKey === key ? null : key);
                                                                    },
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex justify-between items-center",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-sm font-medium text-gray-700",
                                                                                children: item.activity || "ไม่ระบุกิจกรรม"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                                                lineNumber: 2747,
                                                                                columnNumber: 33
                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-xs text-gray-500",
                                                                                children: formatAppointmentDateTimeLabel(item.start_date)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                                                lineNumber: 2748,
                                                                                columnNumber: 33
                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                                        lineNumber: 2746,
                                                                        columnNumber: 31
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                }, resolveAppointmentHistoryKey(item, idx), false, {
                                                                    fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                                    lineNumber: 2738,
                                                                    columnNumber: 29
                                                                }, ("TURBOPACK compile-time value", void 0)))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                            lineNumber: 2736,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                    lineNumber: 2734,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/EditCustomerModal.tsx",
                                            lineNumber: 2697,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/EditCustomerModal.tsx",
                                    lineNumber: 2685,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/EditCustomerModal.tsx",
                                lineNumber: 2684,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/EditCustomerModal.tsx",
                        lineNumber: 1965,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "sticky bottom-0 bg-gradient-to-t from-gray-50 to-white border-t border-gray-200 p-4 sm:p-5 flex justify-center gap-4 shadow-lg",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onClose,
                                disabled: isLoading,
                                className: "px-6 sm:px-8 py-2.5 sm:py-3 border-2 border-gray-300 rounded-xl text-gray-700 text-sm sm:text-base font-semibold hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed",
                                children: "ยกเลิก"
                            }, void 0, false, {
                                fileName: "[project]/src/components/EditCustomerModal.tsx",
                                lineNumber: 2764,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>handleSave(),
                                disabled: isLoading,
                                className: "flex items-center gap-2 px-6 sm:px-8 py-2.5 sm:py-3 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white text-sm sm:text-base font-semibold rounded-xl transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed shadow-lg hover:shadow-xl",
                                children: isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                            className: "w-4 h-4 animate-spin"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/EditCustomerModal.tsx",
                                            lineNumber: 2778,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        "กำลังบันทึก..."
                                    ]
                                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__["Save"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/EditCustomerModal.tsx",
                                            lineNumber: 2783,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        "บันทึก"
                                    ]
                                }, void 0, true)
                            }, void 0, false, {
                                fileName: "[project]/src/components/EditCustomerModal.tsx",
                                lineNumber: 2771,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/EditCustomerModal.tsx",
                        lineNumber: 2763,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/EditCustomerModal.tsx",
                lineNumber: 1893,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$NotificationPopup$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NotificationPopup"], {
                isOpen: notification.isOpen,
                onClose: ()=>setNotification({
                        ...notification,
                        isOpen: false
                    }),
                type: notification.type,
                title: notification.title,
                message: notification.message
            }, void 0, false, {
                fileName: "[project]/src/components/EditCustomerModal.tsx",
                lineNumber: 2792,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            showOPDPopup && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-[60] flex items-center justify-center p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-black/50",
                        onClick: ()=>setShowOPDPopup(false)
                    }, void 0, false, {
                        fileName: "[project]/src/components/EditCustomerModal.tsx",
                        lineNumber: 2803,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[80vh] overflow-hidden animate-slideUp",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-gradient-to-r from-blue-500 to-blue-600 px-6 py-4 flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                                className: "w-6 h-6 text-white"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                lineNumber: 2810,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-lg font-semibold text-white",
                                                children: "เปิด OPD"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                lineNumber: 2811,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/EditCustomerModal.tsx",
                                        lineNumber: 2809,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setShowOPDPopup(false),
                                        className: "p-2 hover:bg-white/20 rounded-full transition-colors",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                            className: "w-5 h-5 text-white"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/EditCustomerModal.tsx",
                                            lineNumber: 2817,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/EditCustomerModal.tsx",
                                        lineNumber: 2813,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/EditCustomerModal.tsx",
                                lineNumber: 2808,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-6 overflow-y-auto max-h-[calc(80vh-80px)] space-y-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2 text-sm text-slate-600",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-base font-semibold text-slate-800",
                                                children: "ข้อมูล OPD"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                lineNumber: 2822,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-slate-500",
                                                children: "เลือกตำแหน่งที่ตั้งเพื่อบันทึกลง bjh_master_customers พร้อม LocNo และ Zipcode อัตโนมัติ"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                lineNumber: 2823,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            thaiAddressLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-emerald-600",
                                                children: "กำลังโหลดข้อมูลจังหวัด/อำเภอ/ตำบล..."
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                lineNumber: 2825,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            thaiAddressError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-red-600",
                                                children: thaiAddressError
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                lineNumber: 2828,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/EditCustomerModal.tsx",
                                        lineNumber: 2821,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "group",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-sm font-semibold text-gray-700 mb-2",
                                                        children: "บ้านเลขที่"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                        lineNumber: 2834,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        value: customerData["locno"] || "",
                                                        onChange: (event)=>handleFieldChange("locno", event.target.value),
                                                        className: "w-full px-4 py-3 border-2 border-slate-200 rounded-xl bg-white text-gray-900 placeholder:text-slate-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400 outline-none transition",
                                                        placeholder: "ระบุบ้านเลขที่"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                        lineNumber: 2835,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                lineNumber: 2833,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "group",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "block text-sm font-semibold text-gray-700 mb-2",
                                                                children: "จังหวัด"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                                lineNumber: 2846,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                value: selectedProvinceId ? String(selectedProvinceId) : "",
                                                                onChange: (event)=>handleProvinceSelect(event.target.value),
                                                                className: "w-full px-4 py-3 border-2 border-slate-200 rounded-xl bg-white text-gray-900 transition focus:ring-2 focus:ring-cyan-400 focus:border-transparent",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: "",
                                                                        children: "เลือกจังหวัด"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                                        lineNumber: 2852,
                                                                        columnNumber: 23
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    provinceOptions.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: option.id,
                                                                            children: option.label
                                                                        }, option.id, false, {
                                                                            fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                                            lineNumber: 2854,
                                                                            columnNumber: 25
                                                                        }, ("TURBOPACK compile-time value", void 0)))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                                lineNumber: 2847,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                        lineNumber: 2845,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "group",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "block text-sm font-semibold text-gray-700 mb-2",
                                                                children: "อำเภอ / เขต"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                                lineNumber: 2861,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                value: selectedDistrictId ? String(selectedDistrictId) : "",
                                                                onChange: (event)=>handleDistrictSelect(event.target.value),
                                                                disabled: !districtOptions.length,
                                                                className: "w-full px-4 py-3 border-2 border-slate-200 rounded-xl bg-white text-gray-900 transition focus:ring-2 focus:ring-cyan-400 focus:border-transparent disabled:cursor-not-allowed disabled:bg-slate-50",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: "",
                                                                        children: "เลือกอำเภอ / เขต"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                                        lineNumber: 2868,
                                                                        columnNumber: 23
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    districtOptions.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: option.id,
                                                                            children: option.label
                                                                        }, option.id, false, {
                                                                            fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                                            lineNumber: 2870,
                                                                            columnNumber: 25
                                                                        }, ("TURBOPACK compile-time value", void 0)))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                                lineNumber: 2862,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                        lineNumber: 2860,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                lineNumber: 2844,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "group",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-sm font-semibold text-gray-700 mb-2",
                                                        children: "ตำบล / แขวง"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                        lineNumber: 2879,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        value: selectedSubdistrictId ? String(selectedSubdistrictId) : "",
                                                        onChange: (event)=>handleSubdistrictSelect(event.target.value),
                                                        disabled: !subdistrictOptions.length,
                                                        className: "w-full px-4 py-3 border-2 border-slate-200 rounded-xl bg-white text-gray-900 transition focus:ring-2 focus:ring-cyan-400 focus:border-transparent disabled:cursor-not-allowed disabled:bg-slate-50",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "",
                                                                children: "เลือกตำบล / แขวง"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                                lineNumber: 2886,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            subdistrictOptions.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: option.id,
                                                                    children: option.label
                                                                }, option.id, false, {
                                                                    fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                                    lineNumber: 2888,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0)))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                        lineNumber: 2880,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                lineNumber: 2878,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "group",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "block text-sm font-semibold text-gray-700 mb-2",
                                                                children: "Zipcode"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                                lineNumber: 2897,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "text",
                                                                value: customerData["zipcode"] || "",
                                                                readOnly: true,
                                                                className: "w-full px-4 py-3 border-2 border-slate-200 rounded-xl bg-slate-100 text-gray-700",
                                                                placeholder: "จะถูกกรอกอัตโนมัติ"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                                lineNumber: 2898,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                        lineNumber: 2896,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "group",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "block text-sm font-semibold text-gray-700 mb-2",
                                                                children: "Country"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                                lineNumber: 2907,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "text",
                                                                value: customerData["country"] || "Thailand",
                                                                readOnly: true,
                                                                className: "w-full px-4 py-3 border-2 border-slate-200 rounded-xl bg-slate-100 text-gray-700"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                                lineNumber: 2908,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                        lineNumber: 2906,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                lineNumber: 2895,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/EditCustomerModal.tsx",
                                        lineNumber: 2832,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-end gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>setShowOPDPopup(false),
                                                className: "px-4 py-2 border border-slate-300 rounded-xl text-slate-700 font-semibold hover:border-slate-400 transition",
                                                children: "ปิด"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                lineNumber: 2919,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: handleSaveFromOPD,
                                                disabled: isLoading,
                                                className: "px-4 py-2 bg-gradient-to-r from-emerald-500 to-cyan-600 text-white font-semibold rounded-xl shadow-lg hover:from-emerald-600 hover:to-cyan-700 disabled:opacity-60",
                                                children: isLoading ? "กำลังบันทึก..." : "บันทึก OPD"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                lineNumber: 2926,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/EditCustomerModal.tsx",
                                        lineNumber: 2918,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/EditCustomerModal.tsx",
                                lineNumber: 2820,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/EditCustomerModal.tsx",
                        lineNumber: 2807,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/EditCustomerModal.tsx",
                lineNumber: 2802,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            showConsentPopup && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-[60] flex items-center justify-center p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-black/50",
                        onClick: ()=>setShowConsentPopup(false)
                    }, void 0, false, {
                        fileName: "[project]/src/components/EditCustomerModal.tsx",
                        lineNumber: 2943,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[80vh] overflow-hidden animate-slideUp",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-gradient-to-r from-purple-500 to-purple-600 px-6 py-4 flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clipboard$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ClipboardCheck$3e$__["ClipboardCheck"], {
                                                className: "w-6 h-6 text-white"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                lineNumber: 2950,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-lg font-semibold text-white",
                                                children: "Consent"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                lineNumber: 2951,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/EditCustomerModal.tsx",
                                        lineNumber: 2949,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setShowConsentPopup(false),
                                        className: "p-2 hover:bg-white/20 rounded-full transition-colors",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                            className: "w-5 h-5 text-white"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/EditCustomerModal.tsx",
                                            lineNumber: 2957,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/EditCustomerModal.tsx",
                                        lineNumber: 2953,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/EditCustomerModal.tsx",
                                lineNumber: 2948,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-6 overflow-y-auto max-h-[calc(80vh-80px)] space-y-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap items-center justify-between gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-1 text-center md:text-left",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-lg font-semibold text-slate-800",
                                                        children: "ข้อมูล Consent"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                        lineNumber: 2963,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-slate-500",
                                                        children: "บันทึกน้ำหนัก, ส่วนสูง และประวัติสุขภาพเพื่อนำไปใช้ใน Consent Form"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                        lineNumber: 2964,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                lineNumber: 2962,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: handleSaveConsentForms,
                                                disabled: consentSaving || consentLoading,
                                                className: "rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 px-5 py-2 text-sm font-semibold text-white shadow-lg transition hover:from-purple-700 hover:to-indigo-700 disabled:opacity-60",
                                                children: consentSaving ? "กำลังบันทึก" : "บันทึก Consent"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                lineNumber: 2968,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/EditCustomerModal.tsx",
                                        lineNumber: 2961,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-1",
                                        children: [
                                            consentLoadError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-red-600",
                                                children: consentLoadError
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                lineNumber: 2979,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            consentLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-slate-500",
                                                children: "กำลังโหลดข้อมูล Consent..."
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                lineNumber: 2982,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/EditCustomerModal.tsx",
                                        lineNumber: 2977,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap gap-2",
                                        children: consentPartMeta.map((part)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>setSelectedConsentPart(part.key),
                                                className: `rounded-2xl px-4 py-2 text-xs font-semibold transition border shadow-sm ${selectedConsentPart === part.key ? "bg-purple-600 text-white border-transparent" : "bg-white text-slate-600 border-slate-200 hover:border-slate-300"}`,
                                                children: part.label
                                            }, part.key, false, {
                                                fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                lineNumber: 2987,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/EditCustomerModal.tsx",
                                        lineNumber: 2985,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid gap-4 md:grid-cols-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "flex flex-col text-xs font-semibold uppercase tracking-wider text-slate-500",
                                                children: [
                                                    "น้ำหนัก (กก.)",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "number",
                                                        value: currentConsentSection.weight,
                                                        onChange: (e)=>handleConsentSectionChange(selectedConsentPart, {
                                                                weight: e.target.value
                                                            }),
                                                        className: "mt-1 rounded-2xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-100",
                                                        placeholder: "เช่น 60"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                        lineNumber: 3003,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                lineNumber: 3001,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "flex flex-col text-xs font-semibold uppercase tracking-wider text-slate-500",
                                                children: [
                                                    "ส่วนสูง (ซม.)",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "number",
                                                        value: currentConsentSection.height,
                                                        onChange: (e)=>handleConsentSectionChange(selectedConsentPart, {
                                                                height: e.target.value
                                                            }),
                                                        className: "mt-1 rounded-2xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-100",
                                                        placeholder: "เช่น 170"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                        lineNumber: 3015,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                lineNumber: 3013,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/EditCustomerModal.tsx",
                                        lineNumber: 3000,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[11px] font-semibold uppercase tracking-wider text-slate-500",
                                                children: "มีโรคประจำตัวหรือไม่"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                lineNumber: 3027,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-wrap gap-2",
                                                children: [
                                                    {
                                                        label: "ไม่มี",
                                                        value: false
                                                    },
                                                    {
                                                        label: "มี",
                                                        value: true
                                                    }
                                                ].map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>handleConsentToggle(selectedConsentPart, "hasChronic", option.value),
                                                        className: `rounded-2xl px-3 py-1.5 text-xs font-semibold transition border ${currentConsentSection.hasChronic === option.value ? "bg-indigo-600 text-white border-transparent" : "bg-white text-slate-600 border-slate-200 hover:border-slate-300"}`,
                                                        children: option.label
                                                    }, `chronic-${option.value}`, false, {
                                                        fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                        lineNumber: 3032,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                lineNumber: 3030,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            currentConsentSection.hasChronic && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                value: currentConsentSection.chronicDiseaseDetail,
                                                onChange: (e)=>handleConsentSectionChange(selectedConsentPart, {
                                                        chronicDiseaseDetail: e.target.value
                                                    }),
                                                className: "w-full rounded-2xl border border-slate-200 px-3 py-2 text-sm text-slate-700 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-100",
                                                placeholder: "โปรดระบุชื่อโรค / การรักษาที่กำลังรับอยู่",
                                                rows: 3
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                lineNumber: 3048,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/EditCustomerModal.tsx",
                                        lineNumber: 3026,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[11px] font-semibold uppercase tracking-wider text-slate-500",
                                                children: "มีประวัติแพ้ยาหรือไม่"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                lineNumber: 3062,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-wrap gap-2",
                                                children: [
                                                    {
                                                        label: "ไม่มี",
                                                        value: false
                                                    },
                                                    {
                                                        label: "มี",
                                                        value: true
                                                    }
                                                ].map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>handleConsentToggle(selectedConsentPart, "hasDrugAllergy", option.value),
                                                        className: `rounded-2xl px-3 py-1.5 text-xs font-semibold transition border ${currentConsentSection.hasDrugAllergy === option.value ? "bg-indigo-600 text-white border-transparent" : "bg-white text-slate-600 border-slate-200 hover:border-slate-300"}`,
                                                        children: option.label
                                                    }, `drug-${option.value}`, false, {
                                                        fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                        lineNumber: 3067,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                lineNumber: 3065,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            currentConsentSection.hasDrugAllergy && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                value: currentConsentSection.drugAllergyDetail,
                                                onChange: (e)=>handleConsentSectionChange(selectedConsentPart, {
                                                        drugAllergyDetail: e.target.value
                                                    }),
                                                className: "w-full rounded-2xl border border-slate-200 px-3 py-2 text-sm text-slate-700 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-100",
                                                placeholder: "ระบุชื่อยา / อาการแพ้",
                                                rows: 3
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                lineNumber: 3083,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/EditCustomerModal.tsx",
                                        lineNumber: 3061,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[11px] font-semibold uppercase tracking-wider text-slate-500",
                                                    children: [
                                                        "ลายเซ็น (",
                                                        consentPartMeta.find((part)=>part.key === selectedConsentPart)?.label,
                                                        ")"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                    lineNumber: 3099,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                lineNumber: 3098,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-3 rounded-2xl border border-slate-200 bg-white/90 p-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-xs font-semibold uppercase tracking-wider text-slate-500",
                                                                        children: "medical_consent"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                                        lineNumber: 3108,
                                                                        columnNumber: 23
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-sm font-medium text-slate-800",
                                                                        children: 'เพียงเลือก "ยินยอม" หรือ "ไม่ยินยอม" ก่อนบันทึกลายเซ็น'
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                                        lineNumber: 3111,
                                                                        columnNumber: 23
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                                lineNumber: 3107,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[11px] text-slate-400",
                                                                children: [
                                                                    "สถานะ: ",
                                                                    currentConsentSection.medicalConsent || "ยังไม่เลือก"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                                lineNumber: 3115,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                        lineNumber: 3106,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex flex-wrap gap-2",
                                                        children: medicalConsentOptions.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                onClick: ()=>handleConsentSectionChange(selectedConsentPart, {
                                                                        medicalConsent: option
                                                                    }),
                                                                className: `px-4 py-1.5 rounded-2xl text-xs font-semibold transition-colors border shadow-sm ${currentConsentSection.medicalConsent === option ? "bg-purple-600 text-white border-transparent" : "bg-white text-purple-700 border-purple-200 hover:border-purple-400"}`,
                                                                children: option
                                                            }, option, false, {
                                                                fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                                lineNumber: 3121,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                        lineNumber: 3119,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "max-h-36 overflow-y-auto text-xs leading-relaxed text-slate-600 space-y-1",
                                                        children: [
                                                            medicalConsentAcknowledgementText.map((line, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: index === 0 ? "font-semibold text-slate-900" : "",
                                                                    children: line
                                                                }, `${line}-${index}`, false, {
                                                                    fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                                    lineNumber: 3136,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0))),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-[10px] text-slate-400",
                                                                children: "เลื่อนอ่านก่อนตัดสินใจ แล้วลงลายเซ็นด้านล่าง"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                                lineNumber: 3140,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                        lineNumber: 3134,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                lineNumber: 3105,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-3 rounded-2xl border border-slate-200 bg-white/90 p-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-xs font-semibold uppercase tracking-wider text-slate-500",
                                                                        children: "accept_pdpa"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                                        lineNumber: 3148,
                                                                        columnNumber: 23
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-sm font-medium text-slate-800",
                                                                        children: "PDPA – ยินยอมให้ข้อมูลส่วนบุคคลถูกใช้ตามนโยบาย"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                                        lineNumber: 3151,
                                                                        columnNumber: 23
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                                lineNumber: 3147,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[11px] text-slate-400",
                                                                children: [
                                                                    "สถานะ: ",
                                                                    currentConsentSection.acceptPdpa || "ยังไม่เลือก"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                                lineNumber: 3155,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                        lineNumber: 3146,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex flex-wrap gap-2",
                                                        children: acceptOptions.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                onClick: ()=>handleConsentSectionChange(selectedConsentPart, {
                                                                        acceptPdpa: option
                                                                    }),
                                                                className: `px-4 py-1.5 rounded-2xl text-xs font-semibold transition-colors border shadow-sm ${currentConsentSection.acceptPdpa === option ? "bg-purple-600 text-white border-transparent" : "bg-white text-purple-700 border-purple-200 hover:border-purple-400"}`,
                                                                children: option
                                                            }, `pdpa-${option}`, false, {
                                                                fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                                lineNumber: 3161,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                        lineNumber: 3159,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "max-h-36 overflow-y-auto text-xs leading-relaxed text-slate-600 space-y-1",
                                                        children: [
                                                            pdpaTextBlock.map((line, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: index === 0 ? "font-semibold text-slate-900" : "",
                                                                    children: line
                                                                }, `${line}-${index}`, false, {
                                                                    fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                                    lineNumber: 3176,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0))),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-[10px] text-slate-400",
                                                                children: "เลื่อนอ่านก่อนตัดสินใจ"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                                lineNumber: 3180,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                        lineNumber: 3174,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                lineNumber: 3145,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-3 rounded-2xl border border-slate-200 bg-white/90 p-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-xs font-semibold uppercase tracking-wider text-slate-500",
                                                                        children: "accept_media"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                                        lineNumber: 3186,
                                                                        columnNumber: 23
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-sm font-medium text-slate-800",
                                                                        children: "ยินยอมรับข่าวสารหรือการใช้ภาพสำหรับงานประชาสัมพันธ์"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                                        lineNumber: 3189,
                                                                        columnNumber: 23
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                                lineNumber: 3185,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[11px] text-slate-400",
                                                                children: [
                                                                    "สถานะ: ",
                                                                    currentConsentSection.acceptMedia || "ยังไม่เลือก"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                                lineNumber: 3193,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                        lineNumber: 3184,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex flex-wrap gap-2",
                                                        children: acceptOptions.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                onClick: ()=>handleConsentSectionChange(selectedConsentPart, {
                                                                        acceptMedia: option
                                                                    }),
                                                                className: `px-4 py-1.5 rounded-2xl text-xs font-semibold transition-colors border shadow-sm ${currentConsentSection.acceptMedia === option ? "bg-purple-600 text-white border-transparent" : "bg-white text-purple-700 border-purple-200 hover:border-purple-400"}`,
                                                                children: option
                                                            }, `media-${option}`, false, {
                                                                fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                                lineNumber: 3199,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                        lineNumber: 3197,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "max-h-36 overflow-y-auto text-xs leading-relaxed text-slate-600 space-y-1",
                                                        children: [
                                                            mediaTextBlock.map((line, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: index === 0 ? "font-semibold text-slate-900" : "",
                                                                    children: line
                                                                }, `${line}-${index}`, false, {
                                                                    fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                                    lineNumber: 3214,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0))),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-[10px] text-slate-400",
                                                                children: "เลื่อนอ่านก่อนตัดสินใจ"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                                lineNumber: 3218,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                        lineNumber: 3212,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                lineNumber: 3183,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-slate-500",
                                                children: "ข้อมูลน้ำหนัก ส่วนสูง และประวัติสุขภาพที่ระบุด้านบนจะถูกแนบใน Consent Form พร้อมสัญญาและลายเซ็น"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                lineNumber: 3221,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SignaturePad, {
                                                value: currentConsentSection.signatureUrl,
                                                onChange: (value)=>handleConsentSignatureChange(selectedConsentPart, value)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                lineNumber: 3224,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            currentConsentSection.signatureUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-1 rounded-2xl border border-slate-200 p-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[10px] uppercase tracking-wider text-slate-400",
                                                        children: "ตัวอย่างลายเซ็นที่บันทึกไว้"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                        lineNumber: 3230,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: currentConsentSection.signatureUrl,
                                                        alt: "Signature preview",
                                                        className: "h-16 w-full rounded-lg border border-slate-100 object-contain"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                        lineNumber: 3233,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                lineNumber: 3229,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/EditCustomerModal.tsx",
                                        lineNumber: 3097,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/EditCustomerModal.tsx",
                                lineNumber: 2960,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between border-t px-6 py-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-slate-500",
                                            children: "บันทึก Consent จะถูกเก็บแยกตามส่วน (part) ที่เลือก"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/EditCustomerModal.tsx",
                                            lineNumber: 3244,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/EditCustomerModal.tsx",
                                        lineNumber: 3243,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: handleSaveConsentForms,
                                        disabled: consentSaving || consentLoading,
                                        className: "rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 px-6 py-2 text-sm font-semibold text-white shadow-lg transition hover:from-purple-700 hover:to-indigo-700 disabled:opacity-60",
                                        children: consentSaving ? "กำลังบันทึก Consent..." : "บันทึก Consent"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/EditCustomerModal.tsx",
                                        lineNumber: 3248,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/EditCustomerModal.tsx",
                                lineNumber: 3242,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/EditCustomerModal.tsx",
                        lineNumber: 2947,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/EditCustomerModal.tsx",
                lineNumber: 2942,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            showServicePopup && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative w-full max-w-6xl overflow-hidden rounded-3xl bg-white shadow-2xl",
                    onClick: (e)=>e.stopPropagation(),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 px-8 py-5 text-white",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-2xl font-bold",
                                            children: "บริการ OPD"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/EditCustomerModal.tsx",
                                            lineNumber: 3271,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-1 text-sm text-white/80",
                                            children: "เลือกบริการและกำหนด Charge / Discount"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/EditCustomerModal.tsx",
                                            lineNumber: 3272,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/EditCustomerModal.tsx",
                                    lineNumber: 3270,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: handleCloseServicePopup,
                                    className: "rounded-full bg-white/20 p-2 transition hover:bg-white/30",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        className: "w-6 h-6"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/EditCustomerModal.tsx",
                                        lineNumber: 3281,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/EditCustomerModal.tsx",
                                    lineNumber: 3276,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/EditCustomerModal.tsx",
                            lineNumber: 3269,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "border-b bg-gray-50 px-8 py-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap items-center gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "text-sm font-semibold text-gray-700",
                                        children: "กลุ่มบริการ:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/EditCustomerModal.tsx",
                                        lineNumber: 3288,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        className: "rounded-xl border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-800 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200",
                                        value: selectedOpdGroupCode,
                                        onChange: (e)=>handleGroupSelect(e.target.value),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "",
                                                children: "เลือกกลุ่มบริการ"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                lineNumber: 3294,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            opdGroups.map((group)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: group.groupcode,
                                                    children: group.groupname
                                                }, group.groupcode, false, {
                                                    fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                    lineNumber: 3296,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/EditCustomerModal.tsx",
                                        lineNumber: 3289,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    groupsLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm text-gray-500",
                                        children: "กำลังโหลดกลุ่มบริการ..."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/EditCustomerModal.tsx",
                                        lineNumber: 3302,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    selectedServices.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "rounded-full bg-emerald-100 px-3 py-1 text-sm font-semibold text-emerald-700",
                                        children: [
                                            "เลือกแล้ว ",
                                            selectedServices.length,
                                            " รายการ"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/EditCustomerModal.tsx",
                                        lineNumber: 3305,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/EditCustomerModal.tsx",
                                lineNumber: 3287,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/EditCustomerModal.tsx",
                            lineNumber: 3286,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "border-b bg-white/80 px-8 py-3 text-sm text-gray-600",
                            children: saleItemsHistoryLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "กำลังโหลดประวัติ b_saleitem..."
                            }, void 0, false, {
                                fileName: "[project]/src/components/EditCustomerModal.tsx",
                                lineNumber: 3313,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)) : saleItemsHistoryError ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-red-600",
                                children: saleItemsHistoryError
                            }, void 0, false, {
                                fileName: "[project]/src/components/EditCustomerModal.tsx",
                                lineNumber: 3315,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)) : saleHistorySummary.count === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "ยังไม่มีรายการบันทึกใน b_saleitem"
                            }, void 0, false, {
                                fileName: "[project]/src/components/EditCustomerModal.tsx",
                                lineNumber: 3317,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            "บันทึกแล้ว ",
                                            saleHistorySummary.count,
                                            " รายการ · ยอดรวม ",
                                            formatCurrencyDisplay(saleHistorySummary.total)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/EditCustomerModal.tsx",
                                        lineNumber: 3320,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: handleShowHistory,
                                        className: "rounded-full border border-slate-200 bg-white px-3 py-1 text-[11px] font-semibold text-slate-600 transition hover:border-slate-300",
                                        children: "ดูประวัติทั้งหมด"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/EditCustomerModal.tsx",
                                        lineNumber: 3325,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/EditCustomerModal.tsx",
                                lineNumber: 3319,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/EditCustomerModal.tsx",
                            lineNumber: 3311,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid max-h-[65vh] grid-cols-1 gap-0 md:grid-cols-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col border-r border-gray-200 bg-gradient-to-br from-blue-50 to-indigo-50 max-h-[65vh]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "border-b bg-white/80 px-6 py-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-lg font-bold text-gray-800",
                                                    children: "📝 บริการที่เลือก"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                    lineNumber: 3341,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-gray-500",
                                                    children: [
                                                        selectedServices.length,
                                                        " รายการ",
                                                        selectedOpdGroup && ` · ${selectedOpdGroup.groupname}`
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                    lineNumber: 3342,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/EditCustomerModal.tsx",
                                            lineNumber: 3340,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-1 overflow-y-auto p-4",
                                            children: selectedServices.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex h-full flex-col items-center justify-center text-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mb-3 text-5xl",
                                                        children: "📂"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                        lineNumber: 3350,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-gray-500",
                                                        children: "ยังไม่มีบริการที่เลือก"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                        lineNumber: 3351,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-gray-400",
                                                        children: "เลือกจากรายการทางขวามือ"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                        lineNumber: 3352,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                lineNumber: 3349,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "space-y-3",
                                                        children: selectedServices.map((entry)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "rounded-2xl border border-white bg-white p-4 shadow-md transition hover:shadow-lg",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-start justify-between",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "flex-1",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                        className: "font-semibold text-gray-800",
                                                                                        children: entry.itemname
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                                                        lineNumber: 3364,
                                                                                        columnNumber: 33
                                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                        className: "text-xs text-gray-500",
                                                                                        children: [
                                                                                            "รหัส ",
                                                                                            entry.itemcode,
                                                                                            " · ราคา ",
                                                                                            formatCurrencyDisplay(entry.salesprice)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                                                        lineNumber: 3365,
                                                                                        columnNumber: 33
                                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                                                lineNumber: 3363,
                                                                                columnNumber: 31
                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                type: "button",
                                                                                onClick: ()=>handleRemoveServiceEntry(entry.id),
                                                                                className: "ml-2 rounded-full bg-red-100 p-1.5 text-red-600 transition hover:bg-red-200",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                                                    className: "w-4 h-4"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                                                    lineNumber: 3374,
                                                                                    columnNumber: 33
                                                                                }, ("TURBOPACK compile-time value", void 0))
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                                                lineNumber: 3369,
                                                                                columnNumber: 31
                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                                        lineNumber: 3362,
                                                                        columnNumber: 29
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "mt-3 grid grid-cols-2 gap-3",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "rounded-xl bg-emerald-50 p-3",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                        className: "mb-1 text-xs font-semibold uppercase tracking-wide text-emerald-700",
                                                                                        children: "Charge"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                                                        lineNumber: 3380,
                                                                                        columnNumber: 33
                                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "flex gap-2",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                                type: "text",
                                                                                                placeholder: "บาท",
                                                                                                value: entry.chargePrice,
                                                                                                onChange: (e)=>handleChargePriceChange(entry.id, e.target.value),
                                                                                                className: "w-full rounded-lg border border-emerald-200 bg-white px-2 py-1.5 text-sm focus:border-emerald-400 focus:outline-none"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                                                                lineNumber: 3384,
                                                                                                columnNumber: 35
                                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                                type: "text",
                                                                                                placeholder: "%",
                                                                                                value: entry.chargePercent,
                                                                                                onChange: (e)=>handleChargePercentChange(entry.id, e.target.value),
                                                                                                className: "w-16 rounded-lg border border-emerald-200 bg-white px-2 py-1.5 text-center text-sm focus:border-emerald-400 focus:outline-none"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                                                                lineNumber: 3391,
                                                                                                columnNumber: 35
                                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                                                        lineNumber: 3383,
                                                                                        columnNumber: 33
                                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                                                lineNumber: 3379,
                                                                                columnNumber: 31
                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "rounded-xl bg-rose-50 p-3",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                        className: "mb-1 text-xs font-semibold uppercase tracking-wide text-rose-700",
                                                                                        children: "Discount"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                                                        lineNumber: 3401,
                                                                                        columnNumber: 33
                                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "flex gap-2",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                                type: "text",
                                                                                                placeholder: "บาท",
                                                                                                value: entry.discountPrice,
                                                                                                onChange: (e)=>handleDiscountPriceChange(entry.id, e.target.value),
                                                                                                className: "w-full rounded-lg border border-rose-200 bg-white px-2 py-1.5 text-sm focus:border-rose-400 focus:outline-none"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                                                                lineNumber: 3405,
                                                                                                columnNumber: 35
                                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                                type: "text",
                                                                                                placeholder: "%",
                                                                                                value: entry.discountPercent,
                                                                                                onChange: (e)=>handleDiscountPercentChange(entry.id, e.target.value),
                                                                                                className: "w-16 rounded-lg border border-rose-200 bg-white px-2 py-1.5 text-center text-sm focus:border-rose-400 focus:outline-none"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                                                                lineNumber: 3412,
                                                                                                columnNumber: 35
                                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                                                        lineNumber: 3404,
                                                                                        columnNumber: 33
                                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                                                lineNumber: 3400,
                                                                                columnNumber: 31
                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                                        lineNumber: 3378,
                                                                        columnNumber: 29
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "mt-3 flex items-center justify-between rounded-2xl border border-indigo-100 bg-indigo-50/40 px-3 py-2 text-sm font-semibold text-indigo-600",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                children: "ยอดสุทธิ"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                                                lineNumber: 3423,
                                                                                columnNumber: 31
                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                children: formatCurrencyDisplay(calculateServiceEntryTotal(entry))
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                                                lineNumber: 3424,
                                                                                columnNumber: 31
                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                                        lineNumber: 3422,
                                                                        columnNumber: 29
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, entry.id, true, {
                                                                fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                                lineNumber: 3358,
                                                                columnNumber: 27
                                                            }, ("TURBOPACK compile-time value", void 0)))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                        lineNumber: 3356,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mt-4 rounded-2xl border border-dashed border-indigo-200 bg-white/80 px-4 py-3 text-sm text-gray-600 shadow-inner",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center justify-between text-xs font-semibold uppercase tracking-wide text-gray-500",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: "สรุปยอด"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                                        lineNumber: 3431,
                                                                        columnNumber: 27
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: [
                                                                            selectedServices.length,
                                                                            " รายการ"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                                        lineNumber: 3432,
                                                                        columnNumber: 27
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                                lineNumber: 3430,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mt-2 space-y-1",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex justify-between",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                children: "รวมราคาพื้นฐาน"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                                                lineNumber: 3436,
                                                                                columnNumber: 29
                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "font-semibold text-gray-700",
                                                                                children: formatCurrencyDisplay(selectedServicesTotals.baseTotal)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                                                lineNumber: 3437,
                                                                                columnNumber: 29
                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                                        lineNumber: 3435,
                                                                        columnNumber: 27
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex justify-between",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                children: "รวมค่า Charge"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                                                lineNumber: 3442,
                                                                                columnNumber: 29
                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "font-semibold text-gray-700",
                                                                                children: formatCurrencyDisplay(selectedServicesTotals.chargeTotal)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                                                lineNumber: 3443,
                                                                                columnNumber: 29
                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                                        lineNumber: 3441,
                                                                        columnNumber: 27
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex justify-between",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                children: "รวมส่วนลด"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                                                lineNumber: 3448,
                                                                                columnNumber: 29
                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "font-semibold text-gray-700",
                                                                                children: formatCurrencyDisplay(selectedServicesTotals.discountTotal)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                                                lineNumber: 3449,
                                                                                columnNumber: 29
                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                                        lineNumber: 3447,
                                                                        columnNumber: 27
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex justify-between text-base font-semibold text-indigo-600",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                children: "ยอดสุทธิทั้งหมด"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                                                lineNumber: 3454,
                                                                                columnNumber: 29
                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                children: formatCurrencyDisplay(selectedServicesTotals.netTotal)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                                                lineNumber: 3455,
                                                                                columnNumber: 29
                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                                        lineNumber: 3453,
                                                                        columnNumber: 27
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                                lineNumber: 3434,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                        lineNumber: 3429,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/EditCustomerModal.tsx",
                                            lineNumber: 3347,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/EditCustomerModal.tsx",
                                    lineNumber: 3339,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col bg-white max-h-[65vh]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "border-b px-6 py-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-lg font-bold text-gray-800",
                                                    children: "📜 รายการบริการ"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                    lineNumber: 3467,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                selectedOpdGroup && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-gray-500",
                                                    children: selectedOpdGroup.groupname
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                    lineNumber: 3469,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/EditCustomerModal.tsx",
                                            lineNumber: 3466,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "px-6 py-3",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    placeholder: "🔍 ค้นหาบริการ...",
                                                    value: serviceSearchTerm,
                                                    onChange: (e)=>setServiceSearchTerm(e.target.value),
                                                    className: "w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-2.5 text-sm focus:border-indigo-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-100"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                    lineNumber: 3474,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                lineNumber: 3473,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/EditCustomerModal.tsx",
                                            lineNumber: 3472,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-1 overflow-y-auto px-6 pb-4",
                                            children: [
                                                servicesLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-center py-8",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "h-8 w-8 animate-spin rounded-full border-4 border-indigo-200 border-t-indigo-600"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                        lineNumber: 3486,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                    lineNumber: 3485,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                serviceError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "py-4 text-center text-sm text-red-600",
                                                    children: serviceError
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                    lineNumber: 3490,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                !servicesLoading && !serviceError && filteredServiceItems.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-col items-center justify-center py-8 text-center",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mb-2 text-4xl",
                                                            children: "💭"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                            lineNumber: 3494,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm text-gray-500",
                                                            children: selectedOpdGroupCode ? "ไม่พบรายการบริการ" : "เลือกกลุ่มบริการก่อน"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                            lineNumber: 3495,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                    lineNumber: 3493,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-2",
                                                    children: filteredServiceItems.map((item)=>{
                                                        const alreadyAdded = selectedServices.some((entry)=>entry.itemcode === item.itemcode);
                                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: `flex items-center justify-between rounded-xl border px-4 py-3 transition ${alreadyAdded ? "border-emerald-200 bg-emerald-50" : "border-gray-100 bg-gray-50 hover:border-indigo-200 hover:bg-indigo-50"}`,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "font-medium text-gray-800",
                                                                            children: item.itemname
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                                            lineNumber: 3514,
                                                                            columnNumber: 29
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-xs text-gray-500",
                                                                            children: [
                                                                                "ราคา ",
                                                                                formatCurrencyDisplay(item.saleprice)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                                            lineNumber: 3515,
                                                                            columnNumber: 29
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                                    lineNumber: 3513,
                                                                    columnNumber: 27
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    type: "button",
                                                                    onClick: ()=>handleAddService(item),
                                                                    disabled: alreadyAdded,
                                                                    className: `rounded-full px-4 py-1.5 text-xs font-semibold transition ${alreadyAdded ? "bg-emerald-200 text-emerald-700" : "bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow hover:shadow-md"}`,
                                                                    children: alreadyAdded ? "✓ เลือกแล้ว" : "เพิ่ม"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                                    lineNumber: 3519,
                                                                    columnNumber: 27
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, item.itemcode, true, {
                                                            fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                            lineNumber: 3506,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0));
                                                    })
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                    lineNumber: 3500,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/EditCustomerModal.tsx",
                                            lineNumber: 3483,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/EditCustomerModal.tsx",
                                    lineNumber: 3465,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/EditCustomerModal.tsx",
                            lineNumber: 3337,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between border-t bg-gray-50 px-8 py-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-gray-600",
                                    children: [
                                        "เลือกแล้ว ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-bold text-indigo-600",
                                            children: selectedServices.length
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/EditCustomerModal.tsx",
                                            lineNumber: 3543,
                                            columnNumber: 27
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        " รายการ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "mx-2 hidden text-xs text-gray-400 md:inline",
                                            children: "·"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/EditCustomerModal.tsx",
                                            lineNumber: 3544,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "mr-1",
                                            children: "ยอดสุทธิ"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/EditCustomerModal.tsx",
                                            lineNumber: 3545,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-bold text-indigo-600",
                                            children: formatCurrencyDisplay(selectedServicesTotals.netTotal)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/EditCustomerModal.tsx",
                                            lineNumber: 3546,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/EditCustomerModal.tsx",
                                    lineNumber: 3542,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: handleCompleteServiceSelection,
                                    disabled: savingServices || selectedServices.length === 0,
                                    className: "rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-2.5 font-semibold text-white shadow-lg transition hover:from-indigo-700 hover:to-purple-700 disabled:opacity-60 disabled:cursor-not-allowed",
                                    children: savingServices ? "กำลังบันทึกบริการ..." : "เสร็จสิ้น"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/EditCustomerModal.tsx",
                                    lineNumber: 3550,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/EditCustomerModal.tsx",
                            lineNumber: 3541,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/EditCustomerModal.tsx",
                    lineNumber: 3264,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/EditCustomerModal.tsx",
                lineNumber: 3263,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            showHistoryModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-[65] flex items-center justify-center p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-slate-900/60",
                        onClick: handleCloseHistory
                    }, void 0, false, {
                        fileName: "[project]/src/components/EditCustomerModal.tsx",
                        lineNumber: 3566,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative z-10 w-full max-w-2xl rounded-2xl bg-white p-6 shadow-2xl",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between border-b pb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-lg font-semibold text-slate-800",
                                                children: "ประวัติ b_saleitem"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                lineNumber: 3573,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-slate-500",
                                                children: "แสดงรายการรวมที่เก็บไว้สำหรับลูกค้านี้"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                lineNumber: 3574,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/EditCustomerModal.tsx",
                                        lineNumber: 3572,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: handleCloseHistory,
                                        className: "rounded-full p-2 text-slate-600 transition hover:bg-slate-100",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                            className: "h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/EditCustomerModal.tsx",
                                            lineNumber: 3581,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/EditCustomerModal.tsx",
                                        lineNumber: 3576,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/EditCustomerModal.tsx",
                                lineNumber: 3571,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-4 space-y-3 max-h-[55vh] overflow-y-auto",
                                children: saleItemsHistory.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-slate-500",
                                    children: "ยังไม่มีประวัติการบันทึกในหน้าต่างนี้"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/EditCustomerModal.tsx",
                                    lineNumber: 3586,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-[120px_120px_1fr_96px] items-center gap-2 text-[11px] font-semibold uppercase text-slate-500",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "วันที่"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                    lineNumber: 3590,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "เลขที่ใบเสร็จ"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                    lineNumber: 3591,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "รายการ"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                    lineNumber: 3592,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-right",
                                                    children: "ยอดสุทธิ"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                    lineNumber: 3593,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/EditCustomerModal.tsx",
                                            lineNumber: 3589,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-1",
                                            children: saleItemsHistory.map((historyItem, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-cols-[120px_120px_1fr_96px] items-center gap-2 rounded-xl border border-slate-100 bg-slate-50 px-3 py-2 text-sm text-slate-700",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[13px] font-medium text-slate-600",
                                                            children: historyItem.sale_date || "-"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                            lineNumber: 3601,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[13px] font-medium text-slate-600",
                                                            children: historyItem.receipt_no || "-"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                            lineNumber: 3604,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "truncate",
                                                            title: historyItem.item_name,
                                                            children: historyItem.item_name || "-"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                            lineNumber: 3607,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-right font-semibold text-slate-800",
                                                            children: formatCurrencyDisplay(toNumericValue(historyItem.amount))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                            lineNumber: 3610,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, `${historyItem.sale_date}-${historyItem.receipt_no}-${index}`, true, {
                                                    fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                    lineNumber: 3597,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0)))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/EditCustomerModal.tsx",
                                            lineNumber: 3595,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/EditCustomerModal.tsx",
                                    lineNumber: 3588,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/EditCustomerModal.tsx",
                                lineNumber: 3584,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-5 flex justify-end",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: handleCloseHistory,
                                    className: "rounded-xl border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-600 transition hover:bg-slate-50",
                                    children: "ปิด"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/EditCustomerModal.tsx",
                                    lineNumber: 3620,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/EditCustomerModal.tsx",
                                lineNumber: 3619,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/EditCustomerModal.tsx",
                        lineNumber: 3570,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/EditCustomerModal.tsx",
                lineNumber: 3565,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            showAppointmentPopup && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-[60] flex items-center justify-center p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-black/50",
                        onClick: ()=>setShowAppointmentPopup(false)
                    }, void 0, false, {
                        fileName: "[project]/src/components/EditCustomerModal.tsx",
                        lineNumber: 3635,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[80vh] overflow-hidden animate-slideUp",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-gradient-to-r from-teal-500 to-teal-600 px-6 py-4 flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                className: "w-6 h-6 text-white"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                lineNumber: 3642,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-lg font-semibold text-white",
                                                children: "นัดหมาย"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                lineNumber: 3643,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/EditCustomerModal.tsx",
                                        lineNumber: 3641,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setShowAppointmentPopup(false),
                                        className: "p-2 hover:bg-white/20 rounded-full transition-colors",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                            className: "w-5 h-5 text-white"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/EditCustomerModal.tsx",
                                            lineNumber: 3649,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/EditCustomerModal.tsx",
                                        lineNumber: 3645,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/EditCustomerModal.tsx",
                                lineNumber: 3640,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-6 overflow-y-auto max-h-[calc(80vh-80px)] space-y-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2 text-sm text-slate-600",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-base font-semibold text-slate-800",
                                                children: "ตารางนัดหมาย"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                lineNumber: 3654,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-slate-500",
                                                children: "กรอกข้อมูลเพื่อสร้างเรกคอร์ดในตาราง `bjh_appointment` พร้อมผูกกับลูกค้ารายนี้"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                lineNumber: 3655,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/EditCustomerModal.tsx",
                                        lineNumber: 3653,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-3 rounded-2xl border border-slate-200 bg-slate-50 p-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-start justify-between gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-sm font-semibold text-slate-800",
                                                                children: [
                                                                    "ประวัตินัดหมาย (",
                                                                    appointmentHistory.length,
                                                                    ")"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                                lineNumber: 3663,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-[11px] text-slate-500",
                                                                children: "แสดงรายการล่าสุดจาก `id_all` เดียวกัน"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                                lineNumber: 3666,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                        lineNumber: 3662,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: handleOpenNewAppointment,
                                                        className: "rounded-full border border-slate-300 px-3 py-1 text-xs font-semibold text-slate-600 hover:border-slate-400",
                                                        children: "เพิ่มนัดหมายใหม่"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                        lineNumber: 3670,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                lineNumber: 3661,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            appointmentHistoryLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-slate-500",
                                                children: "กำลังโหลดประวัตินัดหมาย..."
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                lineNumber: 3679,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)) : appointmentHistoryError ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-rose-600",
                                                children: appointmentHistoryError
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                lineNumber: 3681,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)) : appointmentHistory.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-slate-500",
                                                children: "ยังไม่มีบันทึกนัดหมายในระบบ"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                lineNumber: 3683,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-2",
                                                children: appointmentHistory.map((entry, index)=>{
                                                    const cardKey = resolveAppointmentHistoryKey(entry, index);
                                                    const start = formatAppointmentDateTimeLabel(entry.start_date);
                                                    const end = formatAppointmentDateTimeLabel(entry.end_date);
                                                    const recordLabel = entry.record_no ? `Record No. ${entry.record_no}` : entry.appoint_code || "ไม่ระบุรหัส";
                                                    const activity = entry.activity ? String(entry.activity) : null;
                                                    const note = entry.note ? String(entry.note) : null;
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `rounded-2xl border bg-white px-3 py-3 shadow-sm transition ${selectedAppointmentHistoryKey === cardKey ? "border-teal-300 ring-1 ring-teal-200" : "border-slate-200"}`,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-start justify-between gap-3",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "space-y-1",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-sm font-semibold text-slate-800",
                                                                            children: recordLabel
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                                            lineNumber: 3705,
                                                                            columnNumber: 31
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-[11px] text-slate-500",
                                                                            children: [
                                                                                "วันนัด ",
                                                                                start,
                                                                                " · ครบกำหนด ",
                                                                                end
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                                            lineNumber: 3706,
                                                                            columnNumber: 31
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        activity && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-[11px] text-slate-500",
                                                                            children: [
                                                                                "กิจกรรม: ",
                                                                                activity
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                                            lineNumber: 3710,
                                                                            columnNumber: 33
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        note && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-[11px] text-slate-500",
                                                                            children: [
                                                                                "หมายเหตุ: ",
                                                                                note
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                                            lineNumber: 3715,
                                                                            columnNumber: 33
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                                    lineNumber: 3704,
                                                                    columnNumber: 29
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex flex-col gap-2",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        type: "button",
                                                                        disabled: !entry.appoint_code,
                                                                        title: !entry.appoint_code ? "รหัสนัดหมายไม่พร้อม" : "แก้ไขนัดหมายนี้",
                                                                        onClick: ()=>handleSelectAppointmentHistory(entry, cardKey),
                                                                        className: `rounded-full px-3 py-1 text-xs font-semibold transition ${entry.appoint_code ? "border border-slate-300 text-slate-600 hover:border-slate-400" : "border border-slate-200 text-slate-400 cursor-not-allowed"}`,
                                                                        children: "แก้ไขนัดหมาย"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                                        lineNumber: 3721,
                                                                        columnNumber: 31
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                                    lineNumber: 3720,
                                                                    columnNumber: 29
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                            lineNumber: 3703,
                                                            columnNumber: 27
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, cardKey, false, {
                                                        fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                        lineNumber: 3696,
                                                        columnNumber: 25
                                                    }, ("TURBOPACK compile-time value", void 0));
                                                })
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                lineNumber: 3685,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/EditCustomerModal.tsx",
                                        lineNumber: 3660,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    appointmentSections.map((section)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm font-semibold text-slate-700",
                                                    children: section.title
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                    lineNumber: 3744,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `grid ${section.columns || "grid-cols-1 md:grid-cols-2"} gap-4`,
                                                    children: section.fields.map((fieldKey)=>{
                                                        const meta = appointmentFieldMetaMap[fieldKey];
                                                        if (!meta) return null;
                                                        const value = appointmentForm[fieldKey] || "";
                                                        const isTextarea = meta.type === "textarea";
                                                        const inputType = meta.type === "date" ? "date" : meta.type === "datetime-local" ? "datetime-local" : meta.type === "tel" ? "tel" : "text";
                                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: `group ${meta.fullWidth ? "md:col-span-2" : ""}`,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1",
                                                                    children: meta.label
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                                    lineNumber: 3766,
                                                                    columnNumber: 27
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                isTextarea ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                                    rows: 4,
                                                                    value: value,
                                                                    onChange: (event)=>handleAppointmentFieldChange(fieldKey, event.target.value),
                                                                    placeholder: meta.placeholder,
                                                                    className: "w-full rounded-2xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-100"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                                    lineNumber: 3770,
                                                                    columnNumber: 29
                                                                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: inputType,
                                                                    value: value,
                                                                    onChange: (event)=>handleAppointmentFieldChange(fieldKey, event.target.value),
                                                                    placeholder: meta.placeholder,
                                                                    readOnly: meta.readOnly,
                                                                    disabled: meta.readOnly,
                                                                    className: `w-full px-4 py-3 border-2 rounded-2xl transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-100 outline-none text-gray-900 ${meta.readOnly ? "bg-slate-100 border-slate-200" : "border-slate-200 bg-white"} disabled:cursor-not-allowed`
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                                    lineNumber: 3780,
                                                                    columnNumber: 29
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, fieldKey, true, {
                                                            fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                            lineNumber: 3762,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0));
                                                    })
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                    lineNumber: 3745,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, section.title, true, {
                                            fileName: "[project]/src/components/EditCustomerModal.tsx",
                                            lineNumber: 3743,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))),
                                    appointmentError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-red-600",
                                        children: appointmentError
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/EditCustomerModal.tsx",
                                        lineNumber: 3803,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-end gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>setShowAppointmentPopup(false),
                                                className: "px-5 py-2 border border-slate-300 rounded-xl text-slate-700 font-semibold hover:border-slate-400 transition",
                                                children: "ปิด"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                lineNumber: 3807,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: handleSaveAppointment,
                                                disabled: appointmentLoading,
                                                className: "px-5 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold shadow-lg transition hover:from-blue-700 hover:to-indigo-700 disabled:opacity-70 disabled:cursor-not-allowed",
                                                children: appointmentLoading ? "กำลังบันทึก..." : "บันทึกนัดหมาย"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/EditCustomerModal.tsx",
                                                lineNumber: 3814,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/EditCustomerModal.tsx",
                                        lineNumber: 3806,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/EditCustomerModal.tsx",
                                lineNumber: 3652,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/EditCustomerModal.tsx",
                        lineNumber: 3639,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/EditCustomerModal.tsx",
                lineNumber: 3634,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/EditCustomerModal.tsx",
        lineNumber: 1892,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s1(EditCustomerModal, "+QySBFgrh1jAx+1ni0UJZE6bU8w=");
_c1 = EditCustomerModal;
var _c, _c1;
__turbopack_context__.k.register(_c, "SignaturePad");
__turbopack_context__.k.register(_c1, "EditCustomerModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/AddCustomerModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AddCustomerModal",
    ()=>AddCustomerModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/save.js [app-client] (ecmascript) <export default as Save>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user.js [app-client] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clipboard$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ClipboardCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clipboard-check.js [app-client] (ecmascript) <export default as ClipboardCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/briefcase.js [app-client] (ecmascript) <export default as Briefcase>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.js [app-client] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$NotificationPopup$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/NotificationPopup.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const THAI_DATA_BASE_URL = "https://raw.githubusercontent.com/kongvut/thai-province-data/refs/heads/master/api/latest";
const AddCustomerModal = ({ isOpen, onClose, onSuccess })=>{
    _s();
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("contact");
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [notification, setNotification] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        isOpen: false,
        type: "success",
        title: "",
        message: ""
    });
    // Form state - Contact Information (matching EditCustomerModal fields)
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        // Personal Info
        status: "",
        prefix: "",
        name: "",
        surname: "",
        nickname: "",
        gender: "",
        star_flag: "",
        // Contact Info
        phone: "",
        email: "",
        lineid: "",
        facebook: "",
        country: "",
        // Business Info
        source: "",
        interested_product: "",
        contact_staff: "",
        proposed_amount: "",
        // Follow-up Dates
        got_contact_date: "",
        last_followup: "",
        next_followup: "",
        // Consult/Surgery Dates
        consult_date: "",
        booked_consult_date: "",
        surgery_date: "",
        booked_surgery_date: "",
        appointment_time: "",
        // Notes
        note: ""
    });
    // OPD form state
    const [opdData, setOpdData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        locno: "",
        province: "",
        amphur: "",
        tumbon: "",
        zipcode: ""
    });
    // Consent form state
    const [consentData, setConsentData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        weight: "",
        height: "",
        hasChronic: false,
        chronicDiseaseDetail: "",
        hasDrugAllergy: false,
        drugAllergyDetail: "",
        medicalConsent: "",
        acceptPdpa: "",
        acceptMedia: ""
    });
    // Options from API
    const [statusOptions, setStatusOptions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [sourceOptions, setSourceOptions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [productOptions, setProductOptions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [countryOptions, setCountryOptions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [contactPersonOptions, setContactPersonOptions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    // Thai address data
    const [thaiProvinces, setThaiProvinces] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [thaiDistricts, setThaiDistricts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [thaiSubdistricts, setThaiSubdistricts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedProvinceId, setSelectedProvinceId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selectedDistrictId, setSelectedDistrictId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selectedSubdistrictId, setSelectedSubdistrictId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [thaiAddressLoading, setThaiAddressLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Fallback data for when API is unavailable
    const fallbackStatusOptions = [
        {
            value: "ติดตามต่อเนื่อง",
            label: "ติดตามต่อเนื่อง",
            color: "#FFD700"
        },
        {
            value: "ปิดการขาย",
            label: "ปิดการขาย",
            color: "#90EE90"
        },
        {
            value: "ยกเลิก",
            label: "ยกเลิก",
            color: "#FFB6C1"
        },
        {
            value: "รอตอบกลับ",
            label: "รอตอบกลับ",
            color: "#87CEEB"
        },
        {
            value: "ได้นัด Consult",
            label: "ได้นัด Consult",
            color: "#FFA500"
        },
        {
            value: "ได้นัดผ่าตัด",
            label: "ได้นัดผ่าตัด",
            color: "#FF6347"
        },
        {
            value: "ผ่าตัดแล้ว",
            label: "ผ่าตัดแล้ว",
            color: "#32CD32"
        }
    ];
    const fallbackSourceOptions = [
        {
            value: "Facebook",
            label: "Facebook"
        },
        {
            value: "Instagram",
            label: "Instagram"
        },
        {
            value: "Google Ads",
            label: "Google Ads"
        },
        {
            value: "Line",
            label: "Line"
        },
        {
            value: "Walk-in",
            label: "Walk-in"
        },
        {
            value: "Referral",
            label: "Referral"
        }
    ];
    const fallbackProductOptions = [
        {
            value: "ตีตัวไล่ตัว",
            label: "ตีตัวไล่ตัว"
        },
        {
            value: "Sub brow lift",
            label: "Sub brow lift"
        },
        {
            value: "แก้ตาหมื่อตอนและแก้ว",
            label: "แก้ตาหมื่อตอนและแก้ว"
        },
        {
            value: "ตาสองชั้น",
            label: "ตาสองชั้น"
        },
        {
            value: "เสริมจมูก",
            label: "เสริมจมูก"
        },
        {
            value: "แก้จมูก",
            label: "แก้จมูก"
        },
        {
            value: "เสริมตาขาว",
            label: "เสริมตาขาว"
        },
        {
            value: "ลิฟหน้า",
            label: "ลิฟหน้า"
        },
        {
            value: "Skin",
            label: "Skin"
        }
    ];
    const fallbackCountryOptions = [
        {
            value: "ไทย",
            label: "ไทย"
        },
        {
            value: "จีน",
            label: "จีน"
        },
        {
            value: "ญี่ปุ่น",
            label: "ญี่ปุ่น"
        },
        {
            value: "เกาหลี",
            label: "เกาหลี"
        },
        {
            value: "สิงคโปร์",
            label: "สิงคโปร์"
        },
        {
            value: "มาเลเซีย",
            label: "มาเลเซีย"
        },
        {
            value: "อินโดนีเซีย",
            label: "อินโดนีเซีย"
        },
        {
            value: "เวียดนาม",
            label: "เวียดนาม"
        },
        {
            value: "ฟิลิปปินส์",
            label: "ฟิลิปปินส์"
        },
        {
            value: "พม่า",
            label: "พม่า"
        },
        {
            value: "อื่นๆ",
            label: "อื่นๆ"
        }
    ];
    const fallbackContactPersonOptions = [
        {
            value: "ไม่ระบุ",
            label: "ไม่ระบุ"
        }
    ];
    // Fetch options on mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AddCustomerModal.useEffect": ()=>{
            if (!isOpen) return;
            const fetchStatusOptions = {
                "AddCustomerModal.useEffect.fetchStatusOptions": async ()=>{
                    try {
                        const response = await fetch("/api/status-options");
                        const result = await response.json();
                        if (result.success && result.data) {
                            setStatusOptions(result.data);
                        } else {
                            setStatusOptions(fallbackStatusOptions);
                        }
                    } catch (error) {
                        console.error("Failed to fetch status options:", error);
                        setStatusOptions(fallbackStatusOptions);
                    }
                }
            }["AddCustomerModal.useEffect.fetchStatusOptions"];
            const fetchSourceOptions = {
                "AddCustomerModal.useEffect.fetchSourceOptions": async ()=>{
                    try {
                        const response = await fetch("/api/source-options");
                        const result = await response.json();
                        if (result.success && result.data) {
                            setSourceOptions(result.data);
                        } else {
                            setSourceOptions(fallbackSourceOptions);
                        }
                    } catch (error) {
                        console.error("Failed to fetch source options:", error);
                        setSourceOptions(fallbackSourceOptions);
                    }
                }
            }["AddCustomerModal.useEffect.fetchSourceOptions"];
            const fetchProductOptions = {
                "AddCustomerModal.useEffect.fetchProductOptions": async ()=>{
                    try {
                        const response = await fetch("/api/product-options");
                        const result = await response.json();
                        if (result.success && result.data) {
                            setProductOptions(result.data);
                        } else {
                            setProductOptions(fallbackProductOptions);
                        }
                    } catch (error) {
                        console.error("Failed to fetch product options:", error);
                        setProductOptions(fallbackProductOptions);
                    }
                }
            }["AddCustomerModal.useEffect.fetchProductOptions"];
            const fetchCountryOptions = {
                "AddCustomerModal.useEffect.fetchCountryOptions": async ()=>{
                    try {
                        const response = await fetch("/api/country-options");
                        const result = await response.json();
                        if (result.success && result.data) {
                            setCountryOptions(result.data);
                        } else {
                            setCountryOptions(fallbackCountryOptions);
                        }
                    } catch (error) {
                        console.error("Failed to fetch country options:", error);
                        setCountryOptions(fallbackCountryOptions);
                    }
                }
            }["AddCustomerModal.useEffect.fetchCountryOptions"];
            const fetchContactPersonOptions = {
                "AddCustomerModal.useEffect.fetchContactPersonOptions": async ()=>{
                    try {
                        const response = await fetch("/api/n-staff");
                        const result = await response.json();
                        if (result.success && result.data) {
                            // Transform n_staff data to option format
                            setContactPersonOptions(result.data.map({
                                "AddCustomerModal.useEffect.fetchContactPersonOptions": (staff)=>({
                                        value: staff.nickname,
                                        label: staff.nickname
                                    })
                            }["AddCustomerModal.useEffect.fetchContactPersonOptions"]));
                        } else {
                            setContactPersonOptions(fallbackContactPersonOptions);
                        }
                    } catch (error) {
                        console.error("Failed to fetch contact person options:", error);
                        setContactPersonOptions(fallbackContactPersonOptions);
                    }
                }
            }["AddCustomerModal.useEffect.fetchContactPersonOptions"];
            // Fetch all options
            fetchStatusOptions();
            fetchSourceOptions();
            fetchProductOptions();
            fetchCountryOptions();
            fetchContactPersonOptions();
        }
    }["AddCustomerModal.useEffect"], [
        isOpen
    ]);
    // Fetch Thai address data
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AddCustomerModal.useEffect": ()=>{
            if (!isOpen) return;
            const fetchThaiData = {
                "AddCustomerModal.useEffect.fetchThaiData": async ()=>{
                    setThaiAddressLoading(true);
                    try {
                        const [provincesRes, districtsRes, subdistrictsRes] = await Promise.all([
                            fetch(`${THAI_DATA_BASE_URL}/province.json`),
                            fetch(`${THAI_DATA_BASE_URL}/district.json`),
                            fetch(`${THAI_DATA_BASE_URL}/sub_district.json`)
                        ]);
                        if (provincesRes.ok) {
                            const provinces = await provincesRes.json();
                            setThaiProvinces(provinces);
                        }
                        if (districtsRes.ok) {
                            const districts = await districtsRes.json();
                            setThaiDistricts(districts);
                        }
                        if (subdistrictsRes.ok) {
                            const subdistricts = await subdistrictsRes.json();
                            setThaiSubdistricts(subdistricts);
                        }
                    } catch (error) {
                        console.error("Failed to fetch Thai address data:", error);
                    } finally{
                        setThaiAddressLoading(false);
                    }
                }
            }["AddCustomerModal.useEffect.fetchThaiData"];
            fetchThaiData();
        }
    }["AddCustomerModal.useEffect"], [
        isOpen
    ]);
    // Filter districts by province
    const filteredDistricts = selectedProvinceId ? thaiDistricts.filter((d)=>d.province_id === selectedProvinceId) : [];
    // Filter subdistricts by district
    const filteredSubdistricts = selectedDistrictId ? thaiSubdistricts.filter((s)=>s.district_id === selectedDistrictId) : [];
    const handleProvinceSelect = (provinceId)=>{
        const id = provinceId ? parseInt(provinceId) : null;
        setSelectedProvinceId(id);
        setSelectedDistrictId(null);
        setSelectedSubdistrictId(null);
        const province = thaiProvinces.find((p)=>p.id === id);
        setOpdData((prev)=>({
                ...prev,
                province: province?.name_th || "",
                amphur: "",
                tumbon: "",
                zipcode: ""
            }));
    };
    const handleDistrictSelect = (districtId)=>{
        const id = districtId ? parseInt(districtId) : null;
        setSelectedDistrictId(id);
        setSelectedSubdistrictId(null);
        const district = thaiDistricts.find((d)=>d.id === id);
        setOpdData((prev)=>({
                ...prev,
                amphur: district?.name_th || "",
                tumbon: "",
                zipcode: ""
            }));
    };
    const handleSubdistrictSelect = (subdistrictId)=>{
        const id = subdistrictId ? parseInt(subdistrictId) : null;
        setSelectedSubdistrictId(id);
        const subdistrict = thaiSubdistricts.find((s)=>s.id === id);
        setOpdData((prev)=>({
                ...prev,
                tumbon: subdistrict?.name_th || "",
                zipcode: subdistrict?.zip_code?.toString() || ""
            }));
    };
    const handleSave = async ()=>{
        // Validate mandatory fields: ชื่อ, สถานะ, เบอร์โทร, เพศ, แหล่งที่มา, ผลิตภัณฑ์ที่สนใจ
        const missingFields = [];
        if (!formData.name.trim()) missingFields.push("ชื่อ");
        if (!formData.status) missingFields.push("สถานะ");
        if (!formData.phone.trim()) missingFields.push("เบอร์โทร");
        if (!formData.gender) missingFields.push("เพศ");
        if (!formData.source) missingFields.push("แหล่งที่มา");
        if (!formData.interested_product) missingFields.push("ผลิตภัณฑ์ที่สนใจ");
        if (missingFields.length > 0) {
            setNotification({
                isOpen: true,
                type: "error",
                title: "ข้อมูลไม่ครบ",
                message: `กรุณากรอกข้อมูลที่จำเป็น: ${missingFields.join(", ")}`
            });
            return;
        }
        setIsLoading(true);
        try {
            const customerPayload = {
                // Personal Info
                prefix: formData.prefix,
                name: formData.name,
                surname: formData.surname,
                nickname: formData.nickname,
                gender: formData.gender,
                star_flag: formData.star_flag === "ติดดาว" ? 1 : 0,
                status: formData.status,
                // Contact Info
                phone: formData.phone,
                email: formData.email,
                lineid: formData.lineid,
                facebook: formData.facebook,
                country: formData.country,
                // Business Info
                source: formData.source,
                interested_product: formData.interested_product,
                contact_staff: formData.contact_staff,
                proposed_amount: formData.proposed_amount || null,
                // Follow-up Dates
                got_contact_date: formData.got_contact_date || null,
                last_followup: formData.last_followup || null,
                next_followup: formData.next_followup || null,
                // Consult/Surgery Dates
                consult_date: formData.consult_date || null,
                booked_consult_date: formData.booked_consult_date || null,
                surgery_date: formData.surgery_date || null,
                booked_surgery_date: formData.booked_surgery_date || null,
                appointment_time: formData.appointment_time || null,
                // Notes
                note: formData.note,
                // OPD data
                locno: opdData.locno,
                province: opdData.province,
                amphur: opdData.amphur,
                tumbon: opdData.tumbon,
                zipcode: opdData.zipcode
            };
            const response = await fetch("/api/customer-add", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(customerPayload)
            });
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || "Failed to save customer");
            }
            setNotification({
                isOpen: true,
                type: "success",
                title: "สำเร็จ",
                message: "บันทึกข้อมูลลูกค้าเรียบร้อยแล้ว"
            });
            // Reset form
            setFormData({
                status: "",
                prefix: "",
                name: "",
                surname: "",
                nickname: "",
                gender: "",
                star_flag: "",
                phone: "",
                email: "",
                lineid: "",
                facebook: "",
                country: "",
                source: "",
                interested_product: "",
                contact_staff: "",
                proposed_amount: "",
                got_contact_date: "",
                last_followup: "",
                next_followup: "",
                consult_date: "",
                booked_consult_date: "",
                surgery_date: "",
                booked_surgery_date: "",
                appointment_time: "",
                note: ""
            });
            setOpdData({
                locno: "",
                province: "",
                amphur: "",
                tumbon: "",
                zipcode: ""
            });
            setActiveTab("contact");
            setTimeout(()=>{
                onSuccess();
            }, 1500);
        } catch (error) {
            setNotification({
                isOpen: true,
                type: "error",
                title: "เกิดข้อผิดพลาด",
                message: error.message || "ไม่สามารถบันทึกข้อมูลได้"
            });
        } finally{
            setIsLoading(false);
        }
    };
    if (!isOpen) return null;
    const tabs = [
        {
            id: "contact",
            label: "Contact Information",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"]
        },
        {
            id: "opd",
            label: "OPD",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"]
        },
        {
            id: "consent",
            label: "Consent",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clipboard$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ClipboardCheck$3e$__["ClipboardCheck"]
        },
        {
            id: "service",
            label: "บริการ",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__["Briefcase"]
        },
        {
            id: "appointment",
            label: "นัดหมาย",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"]
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fadeIn",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white rounded-2xl shadow-2xl max-h-[90vh] overflow-hidden w-full max-w-4xl animate-slideUp transform transition-all",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "sticky top-0 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 z-10 shadow-lg",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-3 right-3",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: onClose,
                                    className: "p-2 hover:bg-white hover:bg-opacity-20 rounded-xl transition-all duration-200 group",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        className: "w-5 h-5 text-white group-hover:rotate-90 transition-transform duration-200"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/AddCustomerModal.tsx",
                                        lineNumber: 506,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/AddCustomerModal.tsx",
                                    lineNumber: 502,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/AddCustomerModal.tsx",
                                lineNumber: 501,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-center items-center gap-1 sm:gap-2 px-4 py-4",
                                children: tabs.map((tab)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setActiveTab(tab.id),
                                        className: `flex flex-col sm:flex-row items-center justify-center gap-1 px-3 sm:px-4 py-2 sm:py-2.5 ${activeTab === tab.id ? "bg-white/30 shadow-inner" : "bg-white/10 hover:bg-white/20"} text-white rounded-xl transition-all duration-200 min-w-[60px] sm:min-w-[80px]`,
                                        title: tab.label,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(tab.icon, {
                                                className: "w-5 h-5"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/AddCustomerModal.tsx",
                                                lineNumber: 522,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs sm:text-sm font-medium hidden sm:block",
                                                children: tab.label
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/AddCustomerModal.tsx",
                                                lineNumber: 523,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, tab.id, true, {
                                        fileName: "[project]/src/components/AddCustomerModal.tsx",
                                        lineNumber: 513,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)))
                            }, void 0, false, {
                                fileName: "[project]/src/components/AddCustomerModal.tsx",
                                lineNumber: 511,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/AddCustomerModal.tsx",
                        lineNumber: 499,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "overflow-y-auto",
                        style: {
                            maxHeight: "calc(90vh - 180px)"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-6 space-y-6",
                            children: [
                                activeTab === "contact" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-6 border border-cyan-100 shadow-sm",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2 mb-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-1 h-6 bg-gradient-to-b from-cyan-500 to-blue-500 rounded-full"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/AddCustomerModal.tsx",
                                                            lineNumber: 538,
                                                            columnNumber: 41
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                            className: "text-lg font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent",
                                                            children: "ข้อมูลส่วนตัว"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/AddCustomerModal.tsx",
                                                            lineNumber: 539,
                                                            columnNumber: 41
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/AddCustomerModal.tsx",
                                                    lineNumber: 537,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-cols-1 md:grid-cols-4 gap-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "group",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "block text-sm font-semibold text-gray-700 mb-2",
                                                                    children: [
                                                                        "สถานะ ",
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-red-500",
                                                                            children: "*"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/AddCustomerModal.tsx",
                                                                            lineNumber: 546,
                                                                            columnNumber: 117
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/AddCustomerModal.tsx",
                                                                    lineNumber: 546,
                                                                    columnNumber: 45
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                    value: formData.status,
                                                                    onChange: (e)=>setFormData((prev)=>({
                                                                                ...prev,
                                                                                status: e.target.value
                                                                            })),
                                                                    className: `w-full pl-4 pr-8 py-3 border-2 ${!formData.status ? 'border-red-300' : 'border-cyan-200'} bg-white rounded-xl focus:ring-2 focus:ring-cyan-400 focus:border-transparent outline-none cursor-pointer`,
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: "",
                                                                            children: "เลือกสถานะ"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/AddCustomerModal.tsx",
                                                                            lineNumber: 552,
                                                                            columnNumber: 49
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        statusOptions.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: option.value,
                                                                                children: option.label
                                                                            }, option.value, false, {
                                                                                fileName: "[project]/src/components/AddCustomerModal.tsx",
                                                                                lineNumber: 554,
                                                                                columnNumber: 53
                                                                            }, ("TURBOPACK compile-time value", void 0)))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/AddCustomerModal.tsx",
                                                                    lineNumber: 547,
                                                                    columnNumber: 45
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/AddCustomerModal.tsx",
                                                            lineNumber: 545,
                                                            columnNumber: 41
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "group",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "block text-sm font-semibold text-gray-700 mb-2",
                                                                    children: "คำนำหน้า"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/AddCustomerModal.tsx",
                                                                    lineNumber: 560,
                                                                    columnNumber: 45
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                    value: formData.prefix,
                                                                    onChange: (e)=>setFormData((prev)=>({
                                                                                ...prev,
                                                                                prefix: e.target.value
                                                                            })),
                                                                    className: "w-full pl-4 pr-8 py-3 border-2 border-cyan-200 bg-white rounded-xl focus:ring-2 focus:ring-cyan-400 focus:border-transparent outline-none cursor-pointer",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: "",
                                                                            children: "เลือกคำนำหน้า"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/AddCustomerModal.tsx",
                                                                            lineNumber: 566,
                                                                            columnNumber: 49
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: "นาย",
                                                                            children: "นาย"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/AddCustomerModal.tsx",
                                                                            lineNumber: 567,
                                                                            columnNumber: 49
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: "นาง",
                                                                            children: "นาง"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/AddCustomerModal.tsx",
                                                                            lineNumber: 568,
                                                                            columnNumber: 49
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: "นางสาว",
                                                                            children: "นางสาว"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/AddCustomerModal.tsx",
                                                                            lineNumber: 569,
                                                                            columnNumber: 49
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: "Mr.",
                                                                            children: "Mr."
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/AddCustomerModal.tsx",
                                                                            lineNumber: 570,
                                                                            columnNumber: 49
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: "Mrs.",
                                                                            children: "Mrs."
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/AddCustomerModal.tsx",
                                                                            lineNumber: 571,
                                                                            columnNumber: 49
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: "Ms.",
                                                                            children: "Ms."
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/AddCustomerModal.tsx",
                                                                            lineNumber: 572,
                                                                            columnNumber: 49
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/AddCustomerModal.tsx",
                                                                    lineNumber: 561,
                                                                    columnNumber: 45
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/AddCustomerModal.tsx",
                                                            lineNumber: 559,
                                                            columnNumber: 41
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "group",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "block text-sm font-semibold text-gray-700 mb-2",
                                                                    children: [
                                                                        "ชื่อ ",
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-red-500",
                                                                            children: "*"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/AddCustomerModal.tsx",
                                                                            lineNumber: 577,
                                                                            columnNumber: 116
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/AddCustomerModal.tsx",
                                                                    lineNumber: 577,
                                                                    columnNumber: 45
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "text",
                                                                    value: formData.name,
                                                                    onChange: (e)=>setFormData((prev)=>({
                                                                                ...prev,
                                                                                name: e.target.value
                                                                            })),
                                                                    className: `w-full px-4 py-3 border-2 ${!formData.name.trim() ? 'border-red-300' : 'border-cyan-200'} bg-white rounded-xl focus:ring-2 focus:ring-cyan-400 focus:border-transparent outline-none`,
                                                                    placeholder: "กรอกชื่อ"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/AddCustomerModal.tsx",
                                                                    lineNumber: 578,
                                                                    columnNumber: 45
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/AddCustomerModal.tsx",
                                                            lineNumber: 576,
                                                            columnNumber: 41
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "group",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "block text-sm font-semibold text-gray-700 mb-2",
                                                                    children: "นามสกุล"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/AddCustomerModal.tsx",
                                                                    lineNumber: 588,
                                                                    columnNumber: 45
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "text",
                                                                    value: formData.surname,
                                                                    onChange: (e)=>setFormData((prev)=>({
                                                                                ...prev,
                                                                                surname: e.target.value
                                                                            })),
                                                                    className: "w-full px-4 py-3 border-2 border-cyan-200 bg-white rounded-xl focus:ring-2 focus:ring-cyan-400 focus:border-transparent outline-none",
                                                                    placeholder: "กรอกนามสกุล"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/AddCustomerModal.tsx",
                                                                    lineNumber: 589,
                                                                    columnNumber: 45
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/AddCustomerModal.tsx",
                                                            lineNumber: 587,
                                                            columnNumber: 41
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "group",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "block text-sm font-semibold text-gray-700 mb-2",
                                                                    children: "ชื่อเล่น"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/AddCustomerModal.tsx",
                                                                    lineNumber: 599,
                                                                    columnNumber: 45
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "text",
                                                                    value: formData.nickname,
                                                                    onChange: (e)=>setFormData((prev)=>({
                                                                                ...prev,
                                                                                nickname: e.target.value
                                                                            })),
                                                                    className: "w-full px-4 py-3 border-2 border-cyan-200 bg-white rounded-xl focus:ring-2 focus:ring-cyan-400 focus:border-transparent outline-none",
                                                                    placeholder: "กรอกชื่อเล่น"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/AddCustomerModal.tsx",
                                                                    lineNumber: 600,
                                                                    columnNumber: 45
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/AddCustomerModal.tsx",
                                                            lineNumber: 598,
                                                            columnNumber: 41
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "group",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "block text-sm font-semibold text-gray-700 mb-2",
                                                                    children: [
                                                                        "เพศ ",
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-red-500",
                                                                            children: "*"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/AddCustomerModal.tsx",
                                                                            lineNumber: 610,
                                                                            columnNumber: 115
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/AddCustomerModal.tsx",
                                                                    lineNumber: 610,
                                                                    columnNumber: 45
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                    value: formData.gender,
                                                                    onChange: (e)=>setFormData((prev)=>({
                                                                                ...prev,
                                                                                gender: e.target.value
                                                                            })),
                                                                    className: `w-full pl-4 pr-8 py-3 border-2 ${!formData.gender ? 'border-red-300' : 'border-cyan-200'} bg-white rounded-xl focus:ring-2 focus:ring-cyan-400 focus:border-transparent outline-none cursor-pointer`,
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: "",
                                                                            children: "เลือกเพศ"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/AddCustomerModal.tsx",
                                                                            lineNumber: 616,
                                                                            columnNumber: 49
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: "ชาย",
                                                                            children: "ชาย"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/AddCustomerModal.tsx",
                                                                            lineNumber: 617,
                                                                            columnNumber: 49
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: "หญิง",
                                                                            children: "หญิง"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/AddCustomerModal.tsx",
                                                                            lineNumber: 618,
                                                                            columnNumber: 49
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: "อื่นๆ",
                                                                            children: "อื่นๆ"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/AddCustomerModal.tsx",
                                                                            lineNumber: 619,
                                                                            columnNumber: 49
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/AddCustomerModal.tsx",
                                                                    lineNumber: 611,
                                                                    columnNumber: 45
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/AddCustomerModal.tsx",
                                                            lineNumber: 609,
                                                            columnNumber: 41
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "group",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "block text-sm font-semibold text-gray-700 mb-2",
                                                                    children: "ติดดาว"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/AddCustomerModal.tsx",
                                                                    lineNumber: 624,
                                                                    columnNumber: 45
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    type: "button",
                                                                    onClick: ()=>setFormData((prev)=>({
                                                                                ...prev,
                                                                                star_flag: prev.star_flag === "ติดดาว" ? "" : "ติดดาว"
                                                                            })),
                                                                    className: "w-full px-4 py-3 border-2 border-cyan-200 bg-white rounded-xl hover:border-cyan-300 transition-all duration-200 flex items-center justify-center gap-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                                                            className: `w-6 h-6 ${formData.star_flag === "ติดดาว" ? "fill-yellow-400 text-yellow-400" : "text-gray-400"}`
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/AddCustomerModal.tsx",
                                                                            lineNumber: 630,
                                                                            columnNumber: 49
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-sm font-medium text-gray-700",
                                                                            children: formData.star_flag === "ติดดาว" ? "ติดดาวแล้ว" : "คลิกเพื่อติดดาว"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/AddCustomerModal.tsx",
                                                                            lineNumber: 631,
                                                                            columnNumber: 49
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/AddCustomerModal.tsx",
                                                                    lineNumber: 625,
                                                                    columnNumber: 45
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/AddCustomerModal.tsx",
                                                            lineNumber: 623,
                                                            columnNumber: 41
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/AddCustomerModal.tsx",
                                                    lineNumber: 543,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/AddCustomerModal.tsx",
                                            lineNumber: 536,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-6 border border-indigo-100 shadow-sm",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2 mb-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-1 h-6 bg-gradient-to-b from-indigo-500 to-purple-500 rounded-full"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/AddCustomerModal.tsx",
                                                            lineNumber: 642,
                                                            columnNumber: 41
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                            className: "text-lg font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent",
                                                            children: "ข้อมูลติดต่อ"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/AddCustomerModal.tsx",
                                                            lineNumber: 643,
                                                            columnNumber: 41
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/AddCustomerModal.tsx",
                                                    lineNumber: 641,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-cols-1 md:grid-cols-3 gap-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "group",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "block text-sm font-semibold text-gray-700 mb-2",
                                                                    children: [
                                                                        "เบอร์โทร ",
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-red-500",
                                                                            children: "*"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/AddCustomerModal.tsx",
                                                                            lineNumber: 650,
                                                                            columnNumber: 120
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/AddCustomerModal.tsx",
                                                                    lineNumber: 650,
                                                                    columnNumber: 45
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "tel",
                                                                    value: formData.phone,
                                                                    onChange: (e)=>setFormData((prev)=>({
                                                                                ...prev,
                                                                                phone: e.target.value
                                                                            })),
                                                                    className: `w-full px-4 py-3 border-2 ${!formData.phone.trim() ? 'border-red-300' : 'border-indigo-200'} bg-white rounded-xl focus:ring-2 focus:ring-indigo-400 focus:border-transparent outline-none`,
                                                                    placeholder: "กรอกเบอร์โทร"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/AddCustomerModal.tsx",
                                                                    lineNumber: 651,
                                                                    columnNumber: 45
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/AddCustomerModal.tsx",
                                                            lineNumber: 649,
                                                            columnNumber: 41
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "group",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "block text-sm font-semibold text-gray-700 mb-2",
                                                                    children: "อีเมล"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/AddCustomerModal.tsx",
                                                                    lineNumber: 661,
                                                                    columnNumber: 45
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "email",
                                                                    value: formData.email,
                                                                    onChange: (e)=>setFormData((prev)=>({
                                                                                ...prev,
                                                                                email: e.target.value
                                                                            })),
                                                                    className: "w-full px-4 py-3 border-2 border-indigo-200 bg-white rounded-xl focus:ring-2 focus:ring-indigo-400 focus:border-transparent outline-none",
                                                                    placeholder: "กรอกอีเมล"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/AddCustomerModal.tsx",
                                                                    lineNumber: 662,
                                                                    columnNumber: 45
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/AddCustomerModal.tsx",
                                                            lineNumber: 660,
                                                            columnNumber: 41
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "group",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "block text-sm font-semibold text-gray-700 mb-2",
                                                                    children: "ไลน์ไอดี"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/AddCustomerModal.tsx",
                                                                    lineNumber: 672,
                                                                    columnNumber: 45
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "text",
                                                                    value: formData.lineid,
                                                                    onChange: (e)=>setFormData((prev)=>({
                                                                                ...prev,
                                                                                lineid: e.target.value
                                                                            })),
                                                                    className: "w-full px-4 py-3 border-2 border-indigo-200 bg-white rounded-xl focus:ring-2 focus:ring-indigo-400 focus:border-transparent outline-none",
                                                                    placeholder: "กรอกไลน์ไอดี"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/AddCustomerModal.tsx",
                                                                    lineNumber: 673,
                                                                    columnNumber: 45
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/AddCustomerModal.tsx",
                                                            lineNumber: 671,
                                                            columnNumber: 41
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "group",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "block text-sm font-semibold text-gray-700 mb-2",
                                                                    children: "เฟสบุ๊ค"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/AddCustomerModal.tsx",
                                                                    lineNumber: 683,
                                                                    columnNumber: 45
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "text",
                                                                    value: formData.facebook,
                                                                    onChange: (e)=>setFormData((prev)=>({
                                                                                ...prev,
                                                                                facebook: e.target.value
                                                                            })),
                                                                    className: "w-full px-4 py-3 border-2 border-indigo-200 bg-white rounded-xl focus:ring-2 focus:ring-indigo-400 focus:border-transparent outline-none",
                                                                    placeholder: "กรอกเฟสบุ๊ค"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/AddCustomerModal.tsx",
                                                                    lineNumber: 684,
                                                                    columnNumber: 45
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/AddCustomerModal.tsx",
                                                            lineNumber: 682,
                                                            columnNumber: 41
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "group",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "block text-sm font-semibold text-gray-700 mb-2",
                                                                    children: "ประเทศ"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/AddCustomerModal.tsx",
                                                                    lineNumber: 694,
                                                                    columnNumber: 45
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                    value: formData.country,
                                                                    onChange: (e)=>setFormData((prev)=>({
                                                                                ...prev,
                                                                                country: e.target.value
                                                                            })),
                                                                    className: "w-full pl-4 pr-8 py-3 border-2 border-indigo-200 bg-white rounded-xl focus:ring-2 focus:ring-indigo-400 focus:border-transparent outline-none cursor-pointer",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: "",
                                                                            children: "เลือกประเทศ"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/AddCustomerModal.tsx",
                                                                            lineNumber: 700,
                                                                            columnNumber: 49
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        countryOptions.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: option.value,
                                                                                children: option.label
                                                                            }, option.value, false, {
                                                                                fileName: "[project]/src/components/AddCustomerModal.tsx",
                                                                                lineNumber: 702,
                                                                                columnNumber: 53
                                                                            }, ("TURBOPACK compile-time value", void 0)))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/AddCustomerModal.tsx",
                                                                    lineNumber: 695,
                                                                    columnNumber: 45
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/AddCustomerModal.tsx",
                                                            lineNumber: 693,
                                                            columnNumber: 41
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/AddCustomerModal.tsx",
                                                    lineNumber: 647,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/AddCustomerModal.tsx",
                                            lineNumber: 640,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-6 border border-emerald-100 shadow-sm",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2 mb-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-1 h-6 bg-gradient-to-b from-emerald-500 to-teal-500 rounded-full"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/AddCustomerModal.tsx",
                                                            lineNumber: 712,
                                                            columnNumber: 41
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                            className: "text-lg font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent",
                                                            children: "ข้อมูลธุรกิจ"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/AddCustomerModal.tsx",
                                                            lineNumber: 713,
                                                            columnNumber: 41
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/AddCustomerModal.tsx",
                                                    lineNumber: 711,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-cols-1 md:grid-cols-4 gap-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "group",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "block text-sm font-semibold text-gray-700 mb-2",
                                                                    children: [
                                                                        "แหล่งที่มา ",
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-red-500",
                                                                            children: "*"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/AddCustomerModal.tsx",
                                                                            lineNumber: 720,
                                                                            columnNumber: 122
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/AddCustomerModal.tsx",
                                                                    lineNumber: 720,
                                                                    columnNumber: 45
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                    value: formData.source,
                                                                    onChange: (e)=>setFormData((prev)=>({
                                                                                ...prev,
                                                                                source: e.target.value
                                                                            })),
                                                                    className: `w-full pl-4 pr-8 py-3 border-2 ${!formData.source ? 'border-red-300' : 'border-emerald-200'} bg-white rounded-xl focus:ring-2 focus:ring-emerald-400 focus:border-transparent outline-none cursor-pointer`,
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: "",
                                                                            children: "เลือกแหล่งที่มา"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/AddCustomerModal.tsx",
                                                                            lineNumber: 726,
                                                                            columnNumber: 49
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        sourceOptions.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: option.value,
                                                                                children: option.label
                                                                            }, option.value, false, {
                                                                                fileName: "[project]/src/components/AddCustomerModal.tsx",
                                                                                lineNumber: 728,
                                                                                columnNumber: 53
                                                                            }, ("TURBOPACK compile-time value", void 0)))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/AddCustomerModal.tsx",
                                                                    lineNumber: 721,
                                                                    columnNumber: 45
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/AddCustomerModal.tsx",
                                                            lineNumber: 719,
                                                            columnNumber: 41
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "group",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "block text-sm font-semibold text-gray-700 mb-2",
                                                                    children: [
                                                                        "ผลิตภัณฑ์ที่สนใจ ",
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-red-500",
                                                                            children: "*"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/AddCustomerModal.tsx",
                                                                            lineNumber: 734,
                                                                            columnNumber: 128
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/AddCustomerModal.tsx",
                                                                    lineNumber: 734,
                                                                    columnNumber: 45
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                    value: formData.interested_product,
                                                                    onChange: (e)=>setFormData((prev)=>({
                                                                                ...prev,
                                                                                interested_product: e.target.value
                                                                            })),
                                                                    className: `w-full pl-4 pr-8 py-3 border-2 ${!formData.interested_product ? 'border-red-300' : 'border-emerald-200'} bg-white rounded-xl focus:ring-2 focus:ring-emerald-400 focus:border-transparent outline-none cursor-pointer`,
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: "",
                                                                            children: "เลือกผลิตภัณฑ์"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/AddCustomerModal.tsx",
                                                                            lineNumber: 740,
                                                                            columnNumber: 49
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        productOptions.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: option.value,
                                                                                children: option.label
                                                                            }, option.value, false, {
                                                                                fileName: "[project]/src/components/AddCustomerModal.tsx",
                                                                                lineNumber: 742,
                                                                                columnNumber: 53
                                                                            }, ("TURBOPACK compile-time value", void 0)))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/AddCustomerModal.tsx",
                                                                    lineNumber: 735,
                                                                    columnNumber: 45
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/AddCustomerModal.tsx",
                                                            lineNumber: 733,
                                                            columnNumber: 41
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "group",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "block text-sm font-semibold text-gray-700 mb-2",
                                                                    children: "ผู้ติดต่อ"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/AddCustomerModal.tsx",
                                                                    lineNumber: 748,
                                                                    columnNumber: 45
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                    value: formData.contact_staff,
                                                                    onChange: (e)=>setFormData((prev)=>({
                                                                                ...prev,
                                                                                contact_staff: e.target.value
                                                                            })),
                                                                    className: "w-full pl-4 pr-8 py-3 border-2 border-emerald-200 bg-white rounded-xl focus:ring-2 focus:ring-emerald-400 focus:border-transparent outline-none cursor-pointer",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: "",
                                                                            children: "เลือกผู้ติดต่อ"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/AddCustomerModal.tsx",
                                                                            lineNumber: 754,
                                                                            columnNumber: 49
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        contactPersonOptions.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: option.value,
                                                                                children: option.label
                                                                            }, option.value, false, {
                                                                                fileName: "[project]/src/components/AddCustomerModal.tsx",
                                                                                lineNumber: 756,
                                                                                columnNumber: 53
                                                                            }, ("TURBOPACK compile-time value", void 0)))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/AddCustomerModal.tsx",
                                                                    lineNumber: 749,
                                                                    columnNumber: 45
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/AddCustomerModal.tsx",
                                                            lineNumber: 747,
                                                            columnNumber: 41
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "group",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "block text-sm font-semibold text-gray-700 mb-2",
                                                                    children: "ยอดนำเสนอ"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/AddCustomerModal.tsx",
                                                                    lineNumber: 762,
                                                                    columnNumber: 45
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "number",
                                                                    value: formData.proposed_amount,
                                                                    onChange: (e)=>setFormData((prev)=>({
                                                                                ...prev,
                                                                                proposed_amount: e.target.value
                                                                            })),
                                                                    className: "w-full px-4 py-3 border-2 border-emerald-200 bg-white rounded-xl focus:ring-2 focus:ring-emerald-400 focus:border-transparent outline-none",
                                                                    placeholder: "กรอกยอดนำเสนอ"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/AddCustomerModal.tsx",
                                                                    lineNumber: 763,
                                                                    columnNumber: 45
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/AddCustomerModal.tsx",
                                                            lineNumber: 761,
                                                            columnNumber: 41
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/AddCustomerModal.tsx",
                                                    lineNumber: 717,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/AddCustomerModal.tsx",
                                            lineNumber: 710,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-6 border border-cyan-100 shadow-sm",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2 mb-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-1 h-6 bg-gradient-to-b from-cyan-500 to-blue-500 rounded-full"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/AddCustomerModal.tsx",
                                                            lineNumber: 777,
                                                            columnNumber: 41
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                            className: "text-lg font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent",
                                                            children: "วันที่ติดตาม"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/AddCustomerModal.tsx",
                                                            lineNumber: 778,
                                                            columnNumber: 41
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/AddCustomerModal.tsx",
                                                    lineNumber: 776,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-cols-1 md:grid-cols-3 gap-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "group",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            children: "📅"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/AddCustomerModal.tsx",
                                                                            lineNumber: 786,
                                                                            columnNumber: 49
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        " วันที่ได้ชื่อ เบอร์"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/AddCustomerModal.tsx",
                                                                    lineNumber: 785,
                                                                    columnNumber: 45
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "date",
                                                                    value: formData.got_contact_date,
                                                                    onChange: (e)=>setFormData((prev)=>({
                                                                                ...prev,
                                                                                got_contact_date: e.target.value
                                                                            })),
                                                                    className: "w-full px-4 py-3 border-2 border-cyan-200 bg-white rounded-xl focus:ring-2 focus:ring-cyan-400 focus:border-transparent outline-none cursor-pointer"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/AddCustomerModal.tsx",
                                                                    lineNumber: 788,
                                                                    columnNumber: 45
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/AddCustomerModal.tsx",
                                                            lineNumber: 784,
                                                            columnNumber: 41
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "group",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            children: "📅"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/AddCustomerModal.tsx",
                                                                            lineNumber: 798,
                                                                            columnNumber: 49
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        " วันที่ติดตามครั้งล่าสุด"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/AddCustomerModal.tsx",
                                                                    lineNumber: 797,
                                                                    columnNumber: 45
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "date",
                                                                    value: formData.last_followup,
                                                                    onChange: (e)=>setFormData((prev)=>({
                                                                                ...prev,
                                                                                last_followup: e.target.value
                                                                            })),
                                                                    className: "w-full px-4 py-3 border-2 border-cyan-200 bg-white rounded-xl focus:ring-2 focus:ring-cyan-400 focus:border-transparent outline-none cursor-pointer"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/AddCustomerModal.tsx",
                                                                    lineNumber: 800,
                                                                    columnNumber: 45
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/AddCustomerModal.tsx",
                                                            lineNumber: 796,
                                                            columnNumber: 41
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "group",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            children: "📅"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/AddCustomerModal.tsx",
                                                                            lineNumber: 810,
                                                                            columnNumber: 49
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        " วันที่ติดตามครั้งถัดไป"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/AddCustomerModal.tsx",
                                                                    lineNumber: 809,
                                                                    columnNumber: 45
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "date",
                                                                    value: formData.next_followup,
                                                                    onChange: (e)=>setFormData((prev)=>({
                                                                                ...prev,
                                                                                next_followup: e.target.value
                                                                            })),
                                                                    className: "w-full px-4 py-3 border-2 border-cyan-200 bg-white rounded-xl focus:ring-2 focus:ring-cyan-400 focus:border-transparent outline-none cursor-pointer"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/AddCustomerModal.tsx",
                                                                    lineNumber: 812,
                                                                    columnNumber: 45
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/AddCustomerModal.tsx",
                                                            lineNumber: 808,
                                                            columnNumber: 41
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/AddCustomerModal.tsx",
                                                    lineNumber: 782,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/AddCustomerModal.tsx",
                                            lineNumber: 775,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl p-6 border border-purple-100 shadow-sm",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2 mb-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-1 h-6 bg-gradient-to-b from-purple-500 to-violet-500 rounded-full"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/AddCustomerModal.tsx",
                                                            lineNumber: 825,
                                                            columnNumber: 41
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                            className: "text-lg font-bold bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent",
                                                            children: "วันที่ Consult"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/AddCustomerModal.tsx",
                                                            lineNumber: 826,
                                                            columnNumber: 41
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/AddCustomerModal.tsx",
                                                    lineNumber: 824,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "group",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            children: "📅"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/AddCustomerModal.tsx",
                                                                            lineNumber: 834,
                                                                            columnNumber: 49
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        " วันที่ได้นัด consult"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/AddCustomerModal.tsx",
                                                                    lineNumber: 833,
                                                                    columnNumber: 45
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "date",
                                                                    value: formData.booked_consult_date,
                                                                    onChange: (e)=>setFormData((prev)=>({
                                                                                ...prev,
                                                                                booked_consult_date: e.target.value
                                                                            })),
                                                                    className: "w-full px-4 py-3 border-2 border-purple-200 bg-white rounded-xl focus:ring-2 focus:ring-purple-400 focus:border-transparent outline-none cursor-pointer"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/AddCustomerModal.tsx",
                                                                    lineNumber: 836,
                                                                    columnNumber: 45
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/AddCustomerModal.tsx",
                                                            lineNumber: 832,
                                                            columnNumber: 41
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "group",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            children: "📅"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/AddCustomerModal.tsx",
                                                                            lineNumber: 846,
                                                                            columnNumber: 49
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        " วันที่ Consult"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/AddCustomerModal.tsx",
                                                                    lineNumber: 845,
                                                                    columnNumber: 45
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "date",
                                                                    value: formData.consult_date,
                                                                    onChange: (e)=>setFormData((prev)=>({
                                                                                ...prev,
                                                                                consult_date: e.target.value
                                                                            })),
                                                                    className: "w-full px-4 py-3 border-2 border-purple-200 bg-white rounded-xl focus:ring-2 focus:ring-purple-400 focus:border-transparent outline-none cursor-pointer"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/AddCustomerModal.tsx",
                                                                    lineNumber: 848,
                                                                    columnNumber: 45
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/AddCustomerModal.tsx",
                                                            lineNumber: 844,
                                                            columnNumber: 41
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/AddCustomerModal.tsx",
                                                    lineNumber: 830,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/AddCustomerModal.tsx",
                                            lineNumber: 823,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-gradient-to-br from-rose-50 to-pink-50 rounded-xl p-6 border border-rose-100 shadow-sm",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2 mb-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-1 h-6 bg-gradient-to-b from-rose-500 to-pink-500 rounded-full"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/AddCustomerModal.tsx",
                                                            lineNumber: 861,
                                                            columnNumber: 41
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                            className: "text-lg font-bold bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent",
                                                            children: "วันที่ผ่าตัด"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/AddCustomerModal.tsx",
                                                            lineNumber: 862,
                                                            columnNumber: 41
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/AddCustomerModal.tsx",
                                                    lineNumber: 860,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "group",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            children: "📅"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/AddCustomerModal.tsx",
                                                                            lineNumber: 870,
                                                                            columnNumber: 49
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        " วันที่ได้นัดผ่าตัด"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/AddCustomerModal.tsx",
                                                                    lineNumber: 869,
                                                                    columnNumber: 45
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "date",
                                                                    value: formData.booked_surgery_date,
                                                                    onChange: (e)=>setFormData((prev)=>({
                                                                                ...prev,
                                                                                booked_surgery_date: e.target.value
                                                                            })),
                                                                    className: "w-full px-4 py-3 border-2 border-rose-200 bg-white rounded-xl focus:ring-2 focus:ring-rose-400 focus:border-transparent outline-none cursor-pointer"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/AddCustomerModal.tsx",
                                                                    lineNumber: 872,
                                                                    columnNumber: 45
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/AddCustomerModal.tsx",
                                                            lineNumber: 868,
                                                            columnNumber: 41
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "group",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            children: "📅"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/AddCustomerModal.tsx",
                                                                            lineNumber: 882,
                                                                            columnNumber: 49
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        " วันที่ผ่าตัด"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/AddCustomerModal.tsx",
                                                                    lineNumber: 881,
                                                                    columnNumber: 45
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "date",
                                                                    value: formData.surgery_date,
                                                                    onChange: (e)=>setFormData((prev)=>({
                                                                                ...prev,
                                                                                surgery_date: e.target.value
                                                                            })),
                                                                    className: "w-full px-4 py-3 border-2 border-rose-200 bg-white rounded-xl focus:ring-2 focus:ring-rose-400 focus:border-transparent outline-none cursor-pointer"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/AddCustomerModal.tsx",
                                                                    lineNumber: 884,
                                                                    columnNumber: 45
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/AddCustomerModal.tsx",
                                                            lineNumber: 880,
                                                            columnNumber: 41
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "group",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            children: "⏰"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/AddCustomerModal.tsx",
                                                                            lineNumber: 894,
                                                                            columnNumber: 49
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        " เวลาที่นัด"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/AddCustomerModal.tsx",
                                                                    lineNumber: 893,
                                                                    columnNumber: 45
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "time",
                                                                    value: formData.appointment_time,
                                                                    onChange: (e)=>setFormData((prev)=>({
                                                                                ...prev,
                                                                                appointment_time: e.target.value
                                                                            })),
                                                                    className: "w-full px-4 py-3 border-2 border-rose-200 bg-white rounded-xl focus:ring-2 focus:ring-rose-400 focus:border-transparent outline-none cursor-pointer"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/AddCustomerModal.tsx",
                                                                    lineNumber: 896,
                                                                    columnNumber: 45
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/AddCustomerModal.tsx",
                                                            lineNumber: 892,
                                                            columnNumber: 41
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/AddCustomerModal.tsx",
                                                    lineNumber: 866,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/AddCustomerModal.tsx",
                                            lineNumber: 859,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-gradient-to-br from-amber-50 to-yellow-50 rounded-xl p-6 border border-amber-100 shadow-sm",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2 mb-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-1 h-6 bg-gradient-to-b from-amber-500 to-yellow-500 rounded-full"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/AddCustomerModal.tsx",
                                                            lineNumber: 909,
                                                            columnNumber: 41
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                            className: "text-lg font-bold bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent",
                                                            children: "หมายเหตุ"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/AddCustomerModal.tsx",
                                                            lineNumber: 910,
                                                            columnNumber: 41
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/AddCustomerModal.tsx",
                                                    lineNumber: 908,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                    value: formData.note,
                                                    onChange: (e)=>setFormData((prev)=>({
                                                                ...prev,
                                                                note: e.target.value
                                                            })),
                                                    className: "w-full px-4 py-3 border-2 border-amber-200 bg-white rounded-xl focus:ring-2 focus:ring-amber-400 focus:border-transparent outline-none min-h-[120px] resize-none",
                                                    placeholder: "📝 พิมพ์หมายเหตุ..."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AddCustomerModal.tsx",
                                                    lineNumber: 914,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/AddCustomerModal.tsx",
                                            lineNumber: 907,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true),
                                activeTab === "opd" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100 shadow-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 mb-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-1 h-6 bg-gradient-to-b from-blue-500 to-indigo-500 rounded-full"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AddCustomerModal.tsx",
                                                    lineNumber: 928,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "text-lg font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent",
                                                    children: "ข้อมูล OPD - ที่อยู่"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AddCustomerModal.tsx",
                                                    lineNumber: 929,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/AddCustomerModal.tsx",
                                            lineNumber: 927,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        thaiAddressLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-emerald-600 mb-4",
                                            children: "กำลังโหลดข้อมูลจังหวัด/อำเภอ/ตำบล..."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/AddCustomerModal.tsx",
                                            lineNumber: 934,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "group",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block text-sm font-semibold text-gray-700 mb-2",
                                                            children: "บ้านเลขที่"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/AddCustomerModal.tsx",
                                                            lineNumber: 938,
                                                            columnNumber: 41
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "text",
                                                            value: opdData.locno,
                                                            onChange: (e)=>setOpdData((prev)=>({
                                                                        ...prev,
                                                                        locno: e.target.value
                                                                    })),
                                                            className: "w-full px-4 py-3 border-2 border-blue-200 bg-white rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-transparent outline-none",
                                                            placeholder: "ระบุบ้านเลขที่"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/AddCustomerModal.tsx",
                                                            lineNumber: 939,
                                                            columnNumber: 41
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/AddCustomerModal.tsx",
                                                    lineNumber: 937,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "group",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "block text-sm font-semibold text-gray-700 mb-2",
                                                                    children: "จังหวัด"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/AddCustomerModal.tsx",
                                                                    lineNumber: 949,
                                                                    columnNumber: 45
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                    value: selectedProvinceId ? String(selectedProvinceId) : "",
                                                                    onChange: (e)=>handleProvinceSelect(e.target.value),
                                                                    className: "w-full pl-4 pr-8 py-3 border-2 border-blue-200 bg-white rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-transparent outline-none cursor-pointer",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: "",
                                                                            children: "เลือกจังหวัด"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/AddCustomerModal.tsx",
                                                                            lineNumber: 955,
                                                                            columnNumber: 49
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        thaiProvinces.map((province)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: province.id,
                                                                                children: province.name_th
                                                                            }, province.id, false, {
                                                                                fileName: "[project]/src/components/AddCustomerModal.tsx",
                                                                                lineNumber: 957,
                                                                                columnNumber: 53
                                                                            }, ("TURBOPACK compile-time value", void 0)))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/AddCustomerModal.tsx",
                                                                    lineNumber: 950,
                                                                    columnNumber: 45
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/AddCustomerModal.tsx",
                                                            lineNumber: 948,
                                                            columnNumber: 41
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "group",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "block text-sm font-semibold text-gray-700 mb-2",
                                                                    children: "อำเภอ / เขต"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/AddCustomerModal.tsx",
                                                                    lineNumber: 962,
                                                                    columnNumber: 45
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                    value: selectedDistrictId ? String(selectedDistrictId) : "",
                                                                    onChange: (e)=>handleDistrictSelect(e.target.value),
                                                                    disabled: !filteredDistricts.length,
                                                                    className: "w-full pl-4 pr-8 py-3 border-2 border-blue-200 bg-white rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-transparent outline-none cursor-pointer disabled:bg-gray-100",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: "",
                                                                            children: "เลือกอำเภอ / เขต"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/AddCustomerModal.tsx",
                                                                            lineNumber: 969,
                                                                            columnNumber: 49
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        filteredDistricts.map((district)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: district.id,
                                                                                children: district.name_th
                                                                            }, district.id, false, {
                                                                                fileName: "[project]/src/components/AddCustomerModal.tsx",
                                                                                lineNumber: 971,
                                                                                columnNumber: 53
                                                                            }, ("TURBOPACK compile-time value", void 0)))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/AddCustomerModal.tsx",
                                                                    lineNumber: 963,
                                                                    columnNumber: 45
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/AddCustomerModal.tsx",
                                                            lineNumber: 961,
                                                            columnNumber: 41
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "group",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "block text-sm font-semibold text-gray-700 mb-2",
                                                                    children: "ตำบล / แขวง"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/AddCustomerModal.tsx",
                                                                    lineNumber: 976,
                                                                    columnNumber: 45
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                    value: selectedSubdistrictId ? String(selectedSubdistrictId) : "",
                                                                    onChange: (e)=>handleSubdistrictSelect(e.target.value),
                                                                    disabled: !filteredSubdistricts.length,
                                                                    className: "w-full pl-4 pr-8 py-3 border-2 border-blue-200 bg-white rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-transparent outline-none cursor-pointer disabled:bg-gray-100",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: "",
                                                                            children: "เลือกตำบล / แขวง"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/AddCustomerModal.tsx",
                                                                            lineNumber: 983,
                                                                            columnNumber: 49
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        filteredSubdistricts.map((subdistrict)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: subdistrict.id,
                                                                                children: subdistrict.name_th
                                                                            }, subdistrict.id, false, {
                                                                                fileName: "[project]/src/components/AddCustomerModal.tsx",
                                                                                lineNumber: 985,
                                                                                columnNumber: 53
                                                                            }, ("TURBOPACK compile-time value", void 0)))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/AddCustomerModal.tsx",
                                                                    lineNumber: 977,
                                                                    columnNumber: 45
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/AddCustomerModal.tsx",
                                                            lineNumber: 975,
                                                            columnNumber: 41
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "group",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "block text-sm font-semibold text-gray-700 mb-2",
                                                                    children: "รหัสไปรษณีย์"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/AddCustomerModal.tsx",
                                                                    lineNumber: 990,
                                                                    columnNumber: 45
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "text",
                                                                    value: opdData.zipcode,
                                                                    readOnly: true,
                                                                    className: "w-full px-4 py-3 border-2 border-blue-200 bg-gray-100 rounded-xl outline-none text-gray-700",
                                                                    placeholder: "รหัสไปรษณีย์ (อัตโนมัติ)"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/AddCustomerModal.tsx",
                                                                    lineNumber: 991,
                                                                    columnNumber: 45
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/AddCustomerModal.tsx",
                                                            lineNumber: 989,
                                                            columnNumber: 41
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/AddCustomerModal.tsx",
                                                    lineNumber: 947,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/AddCustomerModal.tsx",
                                            lineNumber: 936,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/AddCustomerModal.tsx",
                                    lineNumber: 926,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                activeTab === "consent" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-6 border border-emerald-100 shadow-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 mb-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-1 h-6 bg-gradient-to-b from-emerald-500 to-teal-500 rounded-full"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AddCustomerModal.tsx",
                                                    lineNumber: 1008,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "text-lg font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent",
                                                    children: "Consent Form"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AddCustomerModal.tsx",
                                                    lineNumber: 1009,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/AddCustomerModal.tsx",
                                            lineNumber: 1007,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "group",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "block text-sm font-semibold text-gray-700 mb-2",
                                                                    children: "น้ำหนัก (kg)"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/AddCustomerModal.tsx",
                                                                    lineNumber: 1016,
                                                                    columnNumber: 45
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "text",
                                                                    value: consentData.weight,
                                                                    onChange: (e)=>setConsentData((prev)=>({
                                                                                ...prev,
                                                                                weight: e.target.value
                                                                            })),
                                                                    className: "w-full px-4 py-3 border-2 border-emerald-200 bg-white rounded-xl focus:ring-2 focus:ring-emerald-400 focus:border-transparent outline-none",
                                                                    placeholder: "ระบุน้ำหนัก"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/AddCustomerModal.tsx",
                                                                    lineNumber: 1017,
                                                                    columnNumber: 45
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/AddCustomerModal.tsx",
                                                            lineNumber: 1015,
                                                            columnNumber: 41
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "group",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "block text-sm font-semibold text-gray-700 mb-2",
                                                                    children: "ส่วนสูง (cm)"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/AddCustomerModal.tsx",
                                                                    lineNumber: 1026,
                                                                    columnNumber: 45
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "text",
                                                                    value: consentData.height,
                                                                    onChange: (e)=>setConsentData((prev)=>({
                                                                                ...prev,
                                                                                height: e.target.value
                                                                            })),
                                                                    className: "w-full px-4 py-3 border-2 border-emerald-200 bg-white rounded-xl focus:ring-2 focus:ring-emerald-400 focus:border-transparent outline-none",
                                                                    placeholder: "ระบุส่วนสูง"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/AddCustomerModal.tsx",
                                                                    lineNumber: 1027,
                                                                    columnNumber: 45
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/AddCustomerModal.tsx",
                                                            lineNumber: 1025,
                                                            columnNumber: 41
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/AddCustomerModal.tsx",
                                                    lineNumber: 1014,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "group",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "checkbox",
                                                                    checked: consentData.hasChronic,
                                                                    onChange: (e)=>setConsentData((prev)=>({
                                                                                ...prev,
                                                                                hasChronic: e.target.checked
                                                                            })),
                                                                    className: "w-4 h-4 rounded border-gray-300 text-emerald-500 focus:ring-emerald-400"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/AddCustomerModal.tsx",
                                                                    lineNumber: 1038,
                                                                    columnNumber: 45
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                "มีโรคประจำตัว"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/AddCustomerModal.tsx",
                                                            lineNumber: 1037,
                                                            columnNumber: 41
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        consentData.hasChronic && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "text",
                                                            value: consentData.chronicDiseaseDetail,
                                                            onChange: (e)=>setConsentData((prev)=>({
                                                                        ...prev,
                                                                        chronicDiseaseDetail: e.target.value
                                                                    })),
                                                            className: "w-full px-4 py-3 border-2 border-emerald-200 bg-white rounded-xl focus:ring-2 focus:ring-emerald-400 focus:border-transparent outline-none mt-2",
                                                            placeholder: "ระบุโรคประจำตัว"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/AddCustomerModal.tsx",
                                                            lineNumber: 1047,
                                                            columnNumber: 45
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/AddCustomerModal.tsx",
                                                    lineNumber: 1036,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "group",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "checkbox",
                                                                    checked: consentData.hasDrugAllergy,
                                                                    onChange: (e)=>setConsentData((prev)=>({
                                                                                ...prev,
                                                                                hasDrugAllergy: e.target.checked
                                                                            })),
                                                                    className: "w-4 h-4 rounded border-gray-300 text-emerald-500 focus:ring-emerald-400"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/AddCustomerModal.tsx",
                                                                    lineNumber: 1058,
                                                                    columnNumber: 45
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                "มีประวัติแพ้ยา"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/AddCustomerModal.tsx",
                                                            lineNumber: 1057,
                                                            columnNumber: 41
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        consentData.hasDrugAllergy && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "text",
                                                            value: consentData.drugAllergyDetail,
                                                            onChange: (e)=>setConsentData((prev)=>({
                                                                        ...prev,
                                                                        drugAllergyDetail: e.target.value
                                                                    })),
                                                            className: "w-full px-4 py-3 border-2 border-emerald-200 bg-white rounded-xl focus:ring-2 focus:ring-emerald-400 focus:border-transparent outline-none mt-2",
                                                            placeholder: "ระบุยาที่แพ้"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/AddCustomerModal.tsx",
                                                            lineNumber: 1067,
                                                            columnNumber: 45
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/AddCustomerModal.tsx",
                                                    lineNumber: 1056,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "group",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block text-sm font-semibold text-gray-700 mb-2",
                                                            children: "ยินยอมรับการรักษา"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/AddCustomerModal.tsx",
                                                            lineNumber: 1077,
                                                            columnNumber: 41
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                            value: consentData.medicalConsent,
                                                            onChange: (e)=>setConsentData((prev)=>({
                                                                        ...prev,
                                                                        medicalConsent: e.target.value
                                                                    })),
                                                            className: "w-full px-4 py-3 border-2 border-emerald-200 bg-white rounded-xl focus:ring-2 focus:ring-emerald-400 focus:border-transparent outline-none cursor-pointer",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "",
                                                                    children: "เลือก"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/AddCustomerModal.tsx",
                                                                    lineNumber: 1083,
                                                                    columnNumber: 45
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "ยินยอม",
                                                                    children: "ยินยอม"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/AddCustomerModal.tsx",
                                                                    lineNumber: 1084,
                                                                    columnNumber: 45
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "ไม่ยินยอม",
                                                                    children: "ไม่ยินยอม"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/AddCustomerModal.tsx",
                                                                    lineNumber: 1085,
                                                                    columnNumber: 45
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/AddCustomerModal.tsx",
                                                            lineNumber: 1078,
                                                            columnNumber: 41
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/AddCustomerModal.tsx",
                                                    lineNumber: 1076,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "group",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block text-sm font-semibold text-gray-700 mb-2",
                                                            children: "ยอมรับ PDPA"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/AddCustomerModal.tsx",
                                                            lineNumber: 1089,
                                                            columnNumber: 41
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                            value: consentData.acceptPdpa,
                                                            onChange: (e)=>setConsentData((prev)=>({
                                                                        ...prev,
                                                                        acceptPdpa: e.target.value
                                                                    })),
                                                            className: "w-full px-4 py-3 border-2 border-emerald-200 bg-white rounded-xl focus:ring-2 focus:ring-emerald-400 focus:border-transparent outline-none cursor-pointer",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "",
                                                                    children: "เลือก"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/AddCustomerModal.tsx",
                                                                    lineNumber: 1095,
                                                                    columnNumber: 45
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "ยอมรับ",
                                                                    children: "ยอมรับ"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/AddCustomerModal.tsx",
                                                                    lineNumber: 1096,
                                                                    columnNumber: 45
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "ไม่ยอมรับ",
                                                                    children: "ไม่ยอมรับ"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/AddCustomerModal.tsx",
                                                                    lineNumber: 1097,
                                                                    columnNumber: 45
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/AddCustomerModal.tsx",
                                                            lineNumber: 1090,
                                                            columnNumber: 41
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/AddCustomerModal.tsx",
                                                    lineNumber: 1088,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "group",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block text-sm font-semibold text-gray-700 mb-2",
                                                            children: "ยินยอมเผยแพร่สื่อ"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/AddCustomerModal.tsx",
                                                            lineNumber: 1101,
                                                            columnNumber: 41
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                            value: consentData.acceptMedia,
                                                            onChange: (e)=>setConsentData((prev)=>({
                                                                        ...prev,
                                                                        acceptMedia: e.target.value
                                                                    })),
                                                            className: "w-full px-4 py-3 border-2 border-emerald-200 bg-white rounded-xl focus:ring-2 focus:ring-emerald-400 focus:border-transparent outline-none cursor-pointer",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "",
                                                                    children: "เลือก"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/AddCustomerModal.tsx",
                                                                    lineNumber: 1107,
                                                                    columnNumber: 45
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "ยอมรับ",
                                                                    children: "ยอมรับ"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/AddCustomerModal.tsx",
                                                                    lineNumber: 1108,
                                                                    columnNumber: 45
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "ไม่ยอมรับ",
                                                                    children: "ไม่ยอมรับ"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/AddCustomerModal.tsx",
                                                                    lineNumber: 1109,
                                                                    columnNumber: 45
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/AddCustomerModal.tsx",
                                                            lineNumber: 1102,
                                                            columnNumber: 41
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/AddCustomerModal.tsx",
                                                    lineNumber: 1100,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/AddCustomerModal.tsx",
                                            lineNumber: 1013,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/AddCustomerModal.tsx",
                                    lineNumber: 1006,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                activeTab === "service" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-100 shadow-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 mb-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-1 h-6 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AddCustomerModal.tsx",
                                                    lineNumber: 1120,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "text-lg font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent",
                                                    children: "บริการ"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AddCustomerModal.tsx",
                                                    lineNumber: 1121,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/AddCustomerModal.tsx",
                                            lineNumber: 1119,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-center py-12 text-gray-500",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__["Briefcase"], {
                                                    className: "w-16 h-16 mx-auto mb-4 text-gray-300"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AddCustomerModal.tsx",
                                                    lineNumber: 1126,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-lg font-medium",
                                                    children: "กรุณาบันทึกข้อมูลลูกค้าก่อน"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AddCustomerModal.tsx",
                                                    lineNumber: 1127,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm mt-2",
                                                    children: "หลังจากบันทึกแล้ว สามารถเพิ่มบริการได้ในหน้าแก้ไขข้อมูล"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AddCustomerModal.tsx",
                                                    lineNumber: 1128,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/AddCustomerModal.tsx",
                                            lineNumber: 1125,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/AddCustomerModal.tsx",
                                    lineNumber: 1118,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                activeTab === "appointment" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-6 border border-orange-100 shadow-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 mb-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-1 h-6 bg-gradient-to-b from-orange-500 to-amber-500 rounded-full"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AddCustomerModal.tsx",
                                                    lineNumber: 1137,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "text-lg font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent",
                                                    children: "นัดหมาย"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AddCustomerModal.tsx",
                                                    lineNumber: 1138,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/AddCustomerModal.tsx",
                                            lineNumber: 1136,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-center py-12 text-gray-500",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                    className: "w-16 h-16 mx-auto mb-4 text-gray-300"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AddCustomerModal.tsx",
                                                    lineNumber: 1143,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-lg font-medium",
                                                    children: "กรุณาบันทึกข้อมูลลูกค้าก่อน"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AddCustomerModal.tsx",
                                                    lineNumber: 1144,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm mt-2",
                                                    children: "หลังจากบันทึกแล้ว สามารถเพิ่มนัดหมายได้ในหน้าแก้ไขข้อมูล"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AddCustomerModal.tsx",
                                                    lineNumber: 1145,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/AddCustomerModal.tsx",
                                            lineNumber: 1142,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/AddCustomerModal.tsx",
                                    lineNumber: 1135,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/AddCustomerModal.tsx",
                            lineNumber: 531,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/AddCustomerModal.tsx",
                        lineNumber: 530,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "sticky bottom-0 bg-gradient-to-t from-gray-50 to-white border-t border-gray-200 p-4 sm:p-5 flex justify-center gap-4 shadow-lg",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onClose,
                                disabled: isLoading,
                                className: "px-6 sm:px-8 py-2.5 sm:py-3 border-2 border-gray-300 rounded-xl text-gray-700 text-sm sm:text-base font-semibold hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 disabled:opacity-50",
                                children: "ยกเลิก"
                            }, void 0, false, {
                                fileName: "[project]/src/components/AddCustomerModal.tsx",
                                lineNumber: 1154,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleSave,
                                disabled: isLoading,
                                className: "flex items-center gap-2 px-6 sm:px-8 py-2.5 sm:py-3 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white text-sm sm:text-base font-semibold rounded-xl transition-all duration-200 disabled:opacity-70 shadow-lg hover:shadow-xl",
                                children: isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                            className: "w-4 h-4 animate-spin"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/AddCustomerModal.tsx",
                                            lineNumber: 1168,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        "กำลังบันทึก..."
                                    ]
                                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__["Save"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/AddCustomerModal.tsx",
                                            lineNumber: 1173,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        "บันทึก"
                                    ]
                                }, void 0, true)
                            }, void 0, false, {
                                fileName: "[project]/src/components/AddCustomerModal.tsx",
                                lineNumber: 1161,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/AddCustomerModal.tsx",
                        lineNumber: 1153,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/AddCustomerModal.tsx",
                lineNumber: 497,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$NotificationPopup$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NotificationPopup"], {
                isOpen: notification.isOpen,
                onClose: ()=>setNotification((prev)=>({
                            ...prev,
                            isOpen: false
                        })),
                type: notification.type,
                title: notification.title,
                message: notification.message
            }, void 0, false, {
                fileName: "[project]/src/components/AddCustomerModal.tsx",
                lineNumber: 1182,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/AddCustomerModal.tsx",
        lineNumber: 496,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(AddCustomerModal, "YvsxsoX8+fU/Q1b7x1QYLpnKztQ=");
_c = AddCustomerModal;
var _c;
__turbopack_context__.k.register(_c, "AddCustomerModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_components_712cbe4e._.js.map