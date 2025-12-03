(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/UserMenu.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>UserMenu
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/log-out.js [app-client] (ecmascript) <export default as LogOut>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield.js [app-client] (ecmascript) <export default as Shield>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function UserMenu() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showMenu, setShowMenu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "UserMenu.useEffect": ()=>{
            const userStr = localStorage.getItem("user");
            if (userStr) {
                setUser(JSON.parse(userStr));
            }
        }
    }["UserMenu.useEffect"], []);
    const handleLogout = ()=>{
        // Clear localStorage
        localStorage.removeItem("user");
        localStorage.removeItem("authToken");
        // Clear cookie
        document.cookie = "authToken=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
        // Redirect to login
        router.push("/login");
    };
    if (!user) return null;
    const getRoleBadgeColor = (roleTag)=>{
        switch(roleTag){
            case "dev":
            case "superadmin":
                return "bg-purple-100 text-purple-800 border-purple-300";
            case "admin":
                return "bg-blue-100 text-blue-800 border-blue-300";
            case "sale":
                return "bg-green-100 text-green-800 border-green-300";
            default:
                return "bg-gray-100 text-gray-800 border-gray-300";
        }
    };
    const getRoleLabel = (roleTag)=>{
        const labels = {
            dev: "Developer",
            superadmin: "Super Admin",
            admin: "Admin",
            sale: "Sale",
            user: "User"
        };
        return labels[roleTag] || roleTag;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setShowMenu(!showMenu),
                className: "flex items-center gap-3 px-4 py-2 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition-all shadow-sm hover:shadow-md",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-10 h-10 rounded-full bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center text-white font-semibold",
                        children: user.name.charAt(0).toUpperCase()
                    }, void 0, false, {
                        fileName: "[project]/src/components/UserMenu.tsx",
                        lineNumber: 65,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-left hidden md:block",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-sm font-semibold text-gray-900",
                                children: user.name
                            }, void 0, false, {
                                fileName: "[project]/src/components/UserMenu.tsx",
                                lineNumber: 69,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs text-gray-500",
                                children: user.email
                            }, void 0, false, {
                                fileName: "[project]/src/components/UserMenu.tsx",
                                lineNumber: 70,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/UserMenu.tsx",
                        lineNumber: 68,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        className: `w-4 h-4 text-gray-400 transition-transform ${showMenu ? "rotate-180" : ""}`,
                        fill: "none",
                        stroke: "currentColor",
                        viewBox: "0 0 24 24",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                            d: "M19 9l-7 7-7-7"
                        }, void 0, false, {
                            fileName: "[project]/src/components/UserMenu.tsx",
                            lineNumber: 80,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/UserMenu.tsx",
                        lineNumber: 72,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/UserMenu.tsx",
                lineNumber: 61,
                columnNumber: 7
            }, this),
            showMenu && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "fixed inset-0 z-40",
                        onClick: ()=>setShowMenu(false)
                    }, void 0, false, {
                        fileName: "[project]/src/components/UserMenu.tsx",
                        lineNumber: 90,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute right-0 mt-2 w-72 bg-white border border-gray-200 rounded-xl shadow-xl z-50 overflow-hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-4 bg-gradient-to-br from-red-50 to-red-100 border-b border-red-200",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3 mb-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-12 h-12 rounded-full bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center text-white font-bold text-lg",
                                                children: user.name.charAt(0).toUpperCase()
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/UserMenu.tsx",
                                                lineNumber: 98,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "font-semibold text-gray-900",
                                                        children: user.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/UserMenu.tsx",
                                                        lineNumber: 102,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-sm text-gray-600",
                                                        children: user.email
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/UserMenu.tsx",
                                                        lineNumber: 103,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/UserMenu.tsx",
                                                lineNumber: 101,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/UserMenu.tsx",
                                        lineNumber: 97,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"], {
                                                className: "w-4 h-4 text-red-600"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/UserMenu.tsx",
                                                lineNumber: 108,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `px-3 py-1 rounded-full text-xs font-semibold border ${getRoleBadgeColor(user.role_tag)}`,
                                                children: getRoleLabel(user.role_tag)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/UserMenu.tsx",
                                                lineNumber: 109,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/UserMenu.tsx",
                                        lineNumber: 107,
                                        columnNumber: 15
                                    }, this),
                                    (user.department_name || user.position_name) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-3 pt-3 border-t border-red-200 text-sm",
                                        children: [
                                            user.department_name && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-gray-600",
                                                children: [
                                                    "📍 ",
                                                    user.department_name
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/UserMenu.tsx",
                                                lineNumber: 121,
                                                columnNumber: 21
                                            }, this),
                                            user.position_name && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-gray-600",
                                                children: [
                                                    "💼 ",
                                                    user.position_name
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/UserMenu.tsx",
                                                lineNumber: 126,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/UserMenu.tsx",
                                        lineNumber: 119,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/UserMenu.tsx",
                                lineNumber: 96,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleLogout,
                                    className: "w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-red-50 rounded-lg transition-colors text-red-600 font-medium",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__["LogOut"], {
                                            className: "w-5 h-5"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/UserMenu.tsx",
                                            lineNumber: 137,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "ออกจากระบบ"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/UserMenu.tsx",
                                            lineNumber: 138,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/UserMenu.tsx",
                                    lineNumber: 133,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/UserMenu.tsx",
                                lineNumber: 132,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/UserMenu.tsx",
                        lineNumber: 94,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/UserMenu.tsx",
        lineNumber: 60,
        columnNumber: 5
    }, this);
}
_s(UserMenu, "sgMHi5+3xaO/Gx3e/hyZ/66A2aA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = UserMenu;
var _c;
__turbopack_context__.k.register(_c, "UserMenu");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/FileProgress/FileProgressAnimation.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FileProgressAnimation",
    ()=>FileProgressAnimation,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__File$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file.js [app-client] (ecmascript) <export default as File>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/image.js [app-client] (ecmascript) <export default as Image>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$film$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Film$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/film.js [app-client] (ecmascript) <export default as Film>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$music$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Music$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/music.js [app-client] (ecmascript) <export default as Music>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$archive$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Archive$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/archive.js [app-client] (ecmascript) <export default as Archive>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/rotate-ccw.js [app-client] (ecmascript) <export default as RotateCcw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
"use client";
;
;
;
// Helper to format file size
const formatFileSize = (bytes)=>{
    if (bytes === 0) return "0 B";
    const k = 1024;
    const sizes = [
        "B",
        "KB",
        "MB",
        "GB"
    ];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + " " + sizes[i];
};
// Format time remaining
const formatTime = (seconds)=>{
    if (seconds < 60) return `${Math.round(seconds)}s`;
    if (seconds < 3600) return `${Math.round(seconds / 60)}m`;
    return `${Math.round(seconds / 3600)}h`;
};
// Get file icon based on type
const getFileIcon = (fileType)=>{
    if (fileType.startsWith("image/")) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__["Image"];
    if (fileType.startsWith("video/")) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$film$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Film$3e$__["Film"];
    if (fileType.startsWith("audio/")) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$music$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Music$3e$__["Music"];
    if (fileType.startsWith("text/")) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"];
    if (fileType.includes("zip") || fileType.includes("rar") || fileType.includes("tar")) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$archive$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Archive$3e$__["Archive"];
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__File$3e$__["File"];
};
// Circular Progress Component with enhanced animations
const CircularProgress = ({ progress, size = 56, strokeWidth = 4, status, type })=>{
    const radius = (size - strokeWidth) / 2;
    const circumference = radius * 2 * Math.PI;
    const offset = circumference - progress / 100 * circumference;
    const getGradientId = ()=>`progress-gradient-${type}-${status}`;
    const getColors = ()=>{
        switch(status){
            case "success":
                return {
                    start: "#22c55e",
                    end: "#10b981"
                };
            case "error":
                return {
                    start: "#ef4444",
                    end: "#dc2626"
                };
            case "uploading":
                return {
                    start: "#8b5cf6",
                    end: "#ec4899"
                };
            case "downloading":
                return {
                    start: "#3b82f6",
                    end: "#06b6d4"
                };
            default:
                return {
                    start: "#6b7280",
                    end: "#4b5563"
                };
        }
    };
    const colors = getColors();
    const isActive = status === "uploading" || status === "downloading";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        className: "transform -rotate-90",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                        id: getGradientId(),
                        x1: "0%",
                        y1: "0%",
                        x2: "100%",
                        y2: "100%",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "0%",
                                stopColor: colors.start
                            }, void 0, false, {
                                fileName: "[project]/src/components/FileProgress/FileProgressAnimation.tsx",
                                lineNumber: 115,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "100%",
                                stopColor: colors.end
                            }, void 0, false, {
                                fileName: "[project]/src/components/FileProgress/FileProgressAnimation.tsx",
                                lineNumber: 116,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/FileProgress/FileProgressAnimation.tsx",
                        lineNumber: 114,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    isActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("filter", {
                        id: "glow",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feGaussianBlur", {
                                stdDeviation: "2",
                                result: "coloredBlur"
                            }, void 0, false, {
                                fileName: "[project]/src/components/FileProgress/FileProgressAnimation.tsx",
                                lineNumber: 120,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feMerge", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feMergeNode", {
                                        in: "coloredBlur"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/FileProgress/FileProgressAnimation.tsx",
                                        lineNumber: 122,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feMergeNode", {
                                        in: "SourceGraphic"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/FileProgress/FileProgressAnimation.tsx",
                                        lineNumber: 123,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/FileProgress/FileProgressAnimation.tsx",
                                lineNumber: 121,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/FileProgress/FileProgressAnimation.tsx",
                        lineNumber: 119,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/FileProgress/FileProgressAnimation.tsx",
                lineNumber: 113,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: size / 2,
                cy: size / 2,
                r: radius,
                fill: "none",
                stroke: "rgba(255,255,255,0.1)",
                strokeWidth: strokeWidth
            }, void 0, false, {
                fileName: "[project]/src/components/FileProgress/FileProgressAnimation.tsx",
                lineNumber: 129,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            isActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].circle, {
                cx: size / 2,
                cy: size / 2,
                r: radius,
                fill: "none",
                stroke: `url(#${getGradientId()})`,
                strokeWidth: strokeWidth + 4,
                strokeLinecap: "round",
                strokeDasharray: circumference,
                strokeDashoffset: offset,
                opacity: 0.3,
                filter: "url(#glow)",
                animate: {
                    opacity: [
                        0.2,
                        0.4,
                        0.2
                    ]
                },
                transition: {
                    duration: 1.5,
                    repeat: Infinity
                }
            }, void 0, false, {
                fileName: "[project]/src/components/FileProgress/FileProgressAnimation.tsx",
                lineNumber: 139,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].circle, {
                cx: size / 2,
                cy: size / 2,
                r: radius,
                fill: "none",
                stroke: `url(#${getGradientId()})`,
                strokeWidth: strokeWidth,
                strokeLinecap: "round",
                strokeDasharray: circumference,
                initial: {
                    strokeDashoffset: circumference
                },
                animate: {
                    strokeDashoffset: offset
                },
                transition: {
                    duration: 0.3,
                    ease: "easeOut"
                }
            }, void 0, false, {
                fileName: "[project]/src/components/FileProgress/FileProgressAnimation.tsx",
                lineNumber: 156,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/FileProgress/FileProgressAnimation.tsx",
        lineNumber: 112,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_c = CircularProgress;
// Animated File Icon that fills based on progress
const FillingFileIcon = ({ progress, type, status, fileType })=>{
    const FileIcon = getFileIcon(fileType);
    const isActive = status === "uploading" || status === "downloading";
    const isComplete = status === "success";
    const isError = status === "error";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative w-6 h-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FileIcon, {
                className: "w-6 h-6 text-white/20 absolute inset-0"
            }, void 0, false, {
                fileName: "[project]/src/components/FileProgress/FileProgressAnimation.tsx",
                lineNumber: 188,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 overflow-hidden",
                style: {
                    clipPath: `inset(${100 - progress}% 0 0 0)`
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FileIcon, {
                    className: `w-6 h-6 ${isComplete ? "text-green-400" : isError ? "text-red-400" : type === "upload" ? "text-purple-400" : "text-blue-400"}`
                }, void 0, false, {
                    fileName: "[project]/src/components/FileProgress/FileProgressAnimation.tsx",
                    lineNumber: 196,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/FileProgress/FileProgressAnimation.tsx",
                lineNumber: 190,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            isActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "absolute inset-0 flex items-center justify-center",
                animate: {
                    y: type === "upload" ? [
                        -8,
                        0
                    ] : [
                        0,
                        8
                    ]
                },
                transition: {
                    duration: 0.6,
                    repeat: Infinity,
                    repeatType: "reverse"
                },
                children: type === "upload" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-2 h-2 border-t-2 border-l-2 border-purple-400 transform -rotate-45 translate-y-1"
                }, void 0, false, {
                    fileName: "[project]/src/components/FileProgress/FileProgressAnimation.tsx",
                    lineNumber: 215,
                    columnNumber: 25
                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-2 h-2 border-b-2 border-r-2 border-blue-400 transform -rotate-45 -translate-y-1"
                }, void 0, false, {
                    fileName: "[project]/src/components/FileProgress/FileProgressAnimation.tsx",
                    lineNumber: 217,
                    columnNumber: 25
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/FileProgress/FileProgressAnimation.tsx",
                lineNumber: 209,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/FileProgress/FileProgressAnimation.tsx",
        lineNumber: 186,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_c1 = FillingFileIcon;
// Success Checkmark Animation
const SuccessCheckmark = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            scale: 0
        },
        animate: {
            scale: 1
        },
        transition: {
            type: "spring",
            stiffness: 500,
            damping: 25
        },
        className: "relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "absolute inset-0 bg-green-500/30 rounded-full",
                initial: {
                    scale: 1
                },
                animate: {
                    scale: [
                        1,
                        1.5,
                        1
                    ]
                },
                transition: {
                    duration: 0.5
                }
            }, void 0, false, {
                fileName: "[project]/src/components/FileProgress/FileProgressAnimation.tsx",
                lineNumber: 233,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    pathLength: 0
                },
                animate: {
                    pathLength: 1
                },
                transition: {
                    duration: 0.3,
                    delay: 0.1
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                    className: "w-6 h-6 text-green-400"
                }, void 0, false, {
                    fileName: "[project]/src/components/FileProgress/FileProgressAnimation.tsx",
                    lineNumber: 244,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/FileProgress/FileProgressAnimation.tsx",
                lineNumber: 239,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/FileProgress/FileProgressAnimation.tsx",
        lineNumber: 227,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
_c2 = SuccessCheckmark;
// Error X Animation
const ErrorX = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            scale: 0,
            rotate: -180
        },
        animate: {
            scale: 1,
            rotate: 0
        },
        transition: {
            type: "spring",
            stiffness: 500,
            damping: 25
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            animate: {
                x: [
                    -2,
                    2,
                    -2,
                    2,
                    0
                ]
            },
            transition: {
                duration: 0.4,
                delay: 0.2
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                className: "w-6 h-6 text-red-400"
            }, void 0, false, {
                fileName: "[project]/src/components/FileProgress/FileProgressAnimation.tsx",
                lineNumber: 260,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/FileProgress/FileProgressAnimation.tsx",
            lineNumber: 256,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/FileProgress/FileProgressAnimation.tsx",
        lineNumber: 251,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
_c3 = ErrorX;
// Spinning Loader
const SpinningLoader = ({ className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        animate: {
            rotate: 360
        },
        transition: {
            duration: 1,
            repeat: Infinity,
            ease: "linear"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
            className: className || "w-5 h-5 text-white/60"
        }, void 0, false, {
            fileName: "[project]/src/components/FileProgress/FileProgressAnimation.tsx",
            lineNumber: 271,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/FileProgress/FileProgressAnimation.tsx",
        lineNumber: 267,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
_c4 = SpinningLoader;
const FileProgressAnimation = ({ item, onCancel, onRetry, onDismiss })=>{
    const isActive = item.status === "uploading" || item.status === "downloading";
    const isComplete = item.status === "success";
    const isError = item.status === "error";
    const isPending = item.status === "pending";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        layout: true,
        initial: {
            opacity: 0,
            y: 20,
            scale: 0.95
        },
        animate: {
            opacity: 1,
            y: 0,
            scale: 1
        },
        exit: {
            opacity: 0,
            x: 100,
            scale: 0.9
        },
        transition: {
            duration: 0.3,
            ease: "easeOut"
        },
        className: `relative bg-gradient-to-r from-slate-900/95 to-slate-800/95 backdrop-blur-xl 
                 rounded-2xl border p-4 shadow-2xl overflow-hidden transition-all duration-300
                 ${isComplete ? "border-green-500/30" : isError ? "border-red-500/30" : "border-white/10"}
                 hover:border-white/20`,
        children: [
            isActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "absolute inset-0 opacity-20",
                style: {
                    background: item.type === "upload" ? "linear-gradient(90deg, #8b5cf6, #ec4899, #8b5cf6)" : "linear-gradient(90deg, #3b82f6, #06b6d4, #3b82f6)",
                    backgroundSize: "200% 100%"
                },
                animate: {
                    backgroundPosition: [
                        "0% 0%",
                        "100% 0%",
                        "0% 0%"
                    ]
                },
                transition: {
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear"
                }
            }, void 0, false, {
                fileName: "[project]/src/components/FileProgress/FileProgressAnimation.tsx",
                lineNumber: 301,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0)),
            isComplete && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "absolute inset-0 bg-green-500/10",
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: [
                        0,
                        0.3,
                        0
                    ]
                },
                transition: {
                    duration: 0.5
                }
            }, void 0, false, {
                fileName: "[project]/src/components/FileProgress/FileProgressAnimation.tsx",
                lineNumber: 317,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative flex items-center gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative flex-shrink-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CircularProgress, {
                                progress: item.progress,
                                size: 56,
                                strokeWidth: 3,
                                status: item.status,
                                type: item.type
                            }, void 0, false, {
                                fileName: "[project]/src/components/FileProgress/FileProgressAnimation.tsx",
                                lineNumber: 328,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 flex items-center justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                    mode: "wait",
                                    children: isComplete ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SuccessCheckmark, {}, void 0, false, {
                                            fileName: "[project]/src/components/FileProgress/FileProgressAnimation.tsx",
                                            lineNumber: 339,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, "success", false, {
                                        fileName: "[project]/src/components/FileProgress/FileProgressAnimation.tsx",
                                        lineNumber: 338,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0)) : isError ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ErrorX, {}, void 0, false, {
                                            fileName: "[project]/src/components/FileProgress/FileProgressAnimation.tsx",
                                            lineNumber: 343,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, "error", false, {
                                        fileName: "[project]/src/components/FileProgress/FileProgressAnimation.tsx",
                                        lineNumber: 342,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0)) : isPending ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SpinningLoader, {}, void 0, false, {
                                            fileName: "[project]/src/components/FileProgress/FileProgressAnimation.tsx",
                                            lineNumber: 347,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, "pending", false, {
                                        fileName: "[project]/src/components/FileProgress/FileProgressAnimation.tsx",
                                        lineNumber: 346,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0)) : isActive ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        animate: {
                                            scale: [
                                                1,
                                                1.1,
                                                1
                                            ]
                                        },
                                        transition: {
                                            duration: 1,
                                            repeat: Infinity
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FillingFileIcon, {
                                            progress: item.progress,
                                            type: item.type,
                                            status: item.status,
                                            fileType: item.fileType
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/FileProgress/FileProgressAnimation.tsx",
                                            lineNumber: 355,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, "active", false, {
                                        fileName: "[project]/src/components/FileProgress/FileProgressAnimation.tsx",
                                        lineNumber: 350,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FillingFileIcon, {
                                            progress: 0,
                                            type: item.type,
                                            status: item.status,
                                            fileType: item.fileType
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/FileProgress/FileProgressAnimation.tsx",
                                            lineNumber: 364,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, "idle", false, {
                                        fileName: "[project]/src/components/FileProgress/FileProgressAnimation.tsx",
                                        lineNumber: 363,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/FileProgress/FileProgressAnimation.tsx",
                                    lineNumber: 336,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/FileProgress/FileProgressAnimation.tsx",
                                lineNumber: 335,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/FileProgress/FileProgressAnimation.tsx",
                        lineNumber: 327,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 min-w-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-white font-medium truncate text-sm",
                                        children: item.fileName
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/FileProgress/FileProgressAnimation.tsx",
                                        lineNumber: 379,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    isActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                        initial: {
                                            opacity: 0,
                                            scale: 0.8
                                        },
                                        animate: {
                                            opacity: 1,
                                            scale: 1
                                        },
                                        className: "text-xs font-bold px-2 py-0.5 rounded-full bg-white/10",
                                        style: {
                                            color: item.type === "upload" ? "#a78bfa" : "#60a5fa"
                                        },
                                        children: [
                                            item.progress,
                                            "%"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/FileProgress/FileProgressAnimation.tsx",
                                        lineNumber: 383,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/FileProgress/FileProgressAnimation.tsx",
                                lineNumber: 378,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 mt-0.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-white/50 text-xs",
                                        children: formatFileSize(item.fileSize)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/FileProgress/FileProgressAnimation.tsx",
                                        lineNumber: 396,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    isActive && item.speed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-white/40 text-xs",
                                        children: [
                                            "• ",
                                            formatFileSize(item.speed),
                                            "/s"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/FileProgress/FileProgressAnimation.tsx",
                                        lineNumber: 400,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    isActive && item.remainingTime && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-white/40 text-xs",
                                        children: [
                                            "• ",
                                            formatTime(item.remainingTime),
                                            " left"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/FileProgress/FileProgressAnimation.tsx",
                                        lineNumber: 405,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/FileProgress/FileProgressAnimation.tsx",
                                lineNumber: 395,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-2 h-1.5 bg-white/10 rounded-full overflow-hidden",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    className: `h-full rounded-full relative ${isComplete ? "bg-gradient-to-r from-green-400 to-emerald-500" : isError ? "bg-gradient-to-r from-red-400 to-rose-500" : item.type === "upload" ? "bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500" : "bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500"}`,
                                    style: {
                                        backgroundSize: isActive ? "200% 100%" : "100% 100%"
                                    },
                                    initial: {
                                        width: 0
                                    },
                                    animate: {
                                        width: `${item.progress}%`,
                                        backgroundPosition: isActive ? [
                                            "0% 0%",
                                            "100% 0%",
                                            "0% 0%"
                                        ] : "0% 0%"
                                    },
                                    transition: {
                                        width: {
                                            duration: 0.3,
                                            ease: "easeOut"
                                        },
                                        backgroundPosition: {
                                            duration: 1.5,
                                            repeat: Infinity,
                                            ease: "linear"
                                        }
                                    },
                                    children: isActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        className: "absolute inset-0",
                                        style: {
                                            background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)"
                                        },
                                        animate: {
                                            x: [
                                                "-100%",
                                                "200%"
                                            ]
                                        },
                                        transition: {
                                            duration: 1,
                                            repeat: Infinity,
                                            ease: "linear"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/FileProgress/FileProgressAnimation.tsx",
                                        lineNumber: 443,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/FileProgress/FileProgressAnimation.tsx",
                                    lineNumber: 413,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/FileProgress/FileProgressAnimation.tsx",
                                lineNumber: 412,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                mode: "wait",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                                    initial: {
                                        opacity: 0,
                                        y: 5
                                    },
                                    animate: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    exit: {
                                        opacity: 0,
                                        y: -5
                                    },
                                    className: `text-xs mt-1.5 ${isComplete ? "text-green-400" : isError ? "text-red-400" : "text-white/40"}`,
                                    children: isComplete ? item.type === "upload" ? "✓ อัปโหลดสำเร็จ!" : "✓ ดาวน์โหลดสำเร็จ!" : isError ? item.error || "เกิดข้อผิดพลาด" : isPending ? "กำลังรอ..." : isActive ? item.type === "upload" ? "กำลังอัปโหลด..." : "กำลังดาวน์โหลด..." : "พร้อม"
                                }, item.status, false, {
                                    fileName: "[project]/src/components/FileProgress/FileProgressAnimation.tsx",
                                    lineNumber: 458,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/FileProgress/FileProgressAnimation.tsx",
                                lineNumber: 457,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/FileProgress/FileProgressAnimation.tsx",
                        lineNumber: 377,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-1",
                        children: [
                            isActive && onCancel && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                                initial: {
                                    scale: 0
                                },
                                animate: {
                                    scale: 1
                                },
                                whileHover: {
                                    scale: 1.1
                                },
                                whileTap: {
                                    scale: 0.9
                                },
                                onClick: ()=>onCancel(item.id),
                                className: "p-2 rounded-xl bg-white/5 hover:bg-red-500/20    text-white/60 hover:text-red-400 transition-all duration-200",
                                title: "ยกเลิก",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/FileProgress/FileProgressAnimation.tsx",
                                    lineNumber: 500,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/FileProgress/FileProgressAnimation.tsx",
                                lineNumber: 490,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            isError && onRetry && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                                initial: {
                                    scale: 0
                                },
                                animate: {
                                    scale: 1
                                },
                                whileHover: {
                                    scale: 1.1,
                                    rotate: -180
                                },
                                whileTap: {
                                    scale: 0.9
                                },
                                onClick: ()=>onRetry(item.id),
                                className: "p-2 rounded-xl bg-white/5 hover:bg-purple-500/20    text-white/60 hover:text-purple-400 transition-all duration-200",
                                title: "ลองใหม่",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/FileProgress/FileProgressAnimation.tsx",
                                    lineNumber: 514,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/FileProgress/FileProgressAnimation.tsx",
                                lineNumber: 504,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            (isComplete || isError) && onDismiss && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                                initial: {
                                    scale: 0
                                },
                                animate: {
                                    scale: 1
                                },
                                whileHover: {
                                    scale: 1.1
                                },
                                whileTap: {
                                    scale: 0.9
                                },
                                onClick: ()=>onDismiss(item.id),
                                className: "p-2 rounded-xl bg-white/5 hover:bg-white/10    text-white/60 hover:text-white transition-all duration-200",
                                title: "ปิด",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/FileProgress/FileProgressAnimation.tsx",
                                    lineNumber: 528,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/FileProgress/FileProgressAnimation.tsx",
                                lineNumber: 518,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/FileProgress/FileProgressAnimation.tsx",
                        lineNumber: 488,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/FileProgress/FileProgressAnimation.tsx",
                lineNumber: 325,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            isActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "absolute inset-0 pointer-events-none",
                style: {
                    background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.03), transparent)"
                },
                animate: {
                    x: [
                        "-100%",
                        "200%"
                    ]
                },
                transition: {
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear"
                }
            }, void 0, false, {
                fileName: "[project]/src/components/FileProgress/FileProgressAnimation.tsx",
                lineNumber: 536,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0)),
            isComplete && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 pointer-events-none overflow-hidden",
                children: [
                    ...Array(6)
                ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "absolute w-1 h-1 bg-green-400 rounded-full",
                        style: {
                            left: `${20 + i * 12}%`,
                            bottom: "50%"
                        },
                        initial: {
                            y: 0,
                            opacity: 1,
                            scale: 1
                        },
                        animate: {
                            y: -30 - Math.random() * 20,
                            x: (Math.random() - 0.5) * 40,
                            opacity: 0,
                            scale: 0
                        },
                        transition: {
                            duration: 0.6,
                            delay: i * 0.05,
                            ease: "easeOut"
                        }
                    }, i, false, {
                        fileName: "[project]/src/components/FileProgress/FileProgressAnimation.tsx",
                        lineNumber: 551,
                        columnNumber: 25
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/src/components/FileProgress/FileProgressAnimation.tsx",
                lineNumber: 549,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/FileProgress/FileProgressAnimation.tsx",
        lineNumber: 288,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_c5 = FileProgressAnimation;
const __TURBOPACK__default__export__ = FileProgressAnimation;
var _c, _c1, _c2, _c3, _c4, _c5;
__turbopack_context__.k.register(_c, "CircularProgress");
__turbopack_context__.k.register(_c1, "FillingFileIcon");
__turbopack_context__.k.register(_c2, "SuccessCheckmark");
__turbopack_context__.k.register(_c3, "ErrorX");
__turbopack_context__.k.register(_c4, "SpinningLoader");
__turbopack_context__.k.register(_c5, "FileProgressAnimation");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/FileProgress/FileProgressContainer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FileProgressContainer",
    ()=>FileProgressContainer,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FileProgress$2f$FileProgressAnimation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/FileProgress/FileProgressAnimation.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/upload.js [app-client] (ecmascript) <export default as Upload>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/download.js [app-client] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minimize$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Minimize2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/minimize-2.js [app-client] (ecmascript) <export default as Minimize2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$maximize$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Maximize2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/maximize-2.js [app-client] (ecmascript) <export default as Maximize2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-client] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const FileProgressContainer = ({ items, onCancel, onRetry, onDismiss, onClearAll, position = "bottom-right", autoDismissDelay = 2000 })=>{
    _s();
    const [isMinimized, setIsMinimized] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(false);
    const autoDismissTimerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const uploadItems = items.filter((i)=>i.type === "upload");
    const downloadItems = items.filter((i)=>i.type === "download");
    const activeCount = items.filter((i)=>i.status === "uploading" || i.status === "downloading").length;
    const completedCount = items.filter((i)=>i.status === "success").length;
    const errorCount = items.filter((i)=>i.status === "error").length;
    // Auto dismiss when all items are complete (success only, not errors)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FileProgressContainer.useEffect": ()=>{
            // Clear any existing timer
            if (autoDismissTimerRef.current) {
                clearTimeout(autoDismissTimerRef.current);
                autoDismissTimerRef.current = null;
            }
            // Check if all items are complete with no errors and no active transfers
            const allSuccess = items.length > 0 && activeCount === 0 && errorCount === 0 && completedCount === items.length;
            if (allSuccess && onClearAll && autoDismissDelay > 0) {
                autoDismissTimerRef.current = setTimeout({
                    "FileProgressContainer.useEffect": ()=>{
                        onClearAll();
                    }
                }["FileProgressContainer.useEffect"], autoDismissDelay);
            }
            return ({
                "FileProgressContainer.useEffect": ()=>{
                    if (autoDismissTimerRef.current) {
                        clearTimeout(autoDismissTimerRef.current);
                    }
                }
            })["FileProgressContainer.useEffect"];
        }
    }["FileProgressContainer.useEffect"], [
        items.length,
        activeCount,
        errorCount,
        completedCount,
        onClearAll,
        autoDismissDelay
    ]);
    // Calculate overall progress
    const overallProgress = items.length > 0 ? Math.round(items.reduce((acc, i)=>acc + i.progress, 0) / items.length) : 0;
    const positionClasses = {
        "bottom-right": "bottom-4 right-4",
        "bottom-left": "bottom-4 left-4",
        "top-right": "top-4 right-4",
        "top-left": "top-4 left-4"
    };
    if (items.length === 0) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: {
                opacity: 0,
                y: 50,
                scale: 0.9
            },
            animate: {
                opacity: 1,
                y: 0,
                scale: 1
            },
            exit: {
                opacity: 0,
                y: 50,
                scale: 0.9
            },
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 25
            },
            className: `fixed ${positionClasses[position]} z-50 w-96 max-w-[calc(100vw-2rem)]`,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    layout: true,
                    className: "bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 rounded-t-2xl    border border-white/10 border-b-0 px-4 py-3 flex items-center justify-between   shadow-lg shadow-black/20",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative",
                                    children: activeCount > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        animate: {
                                            rotate: 360
                                        },
                                        transition: {
                                            duration: 2,
                                            repeat: Infinity,
                                            ease: "linear"
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                            className: "w-5 h-5 text-purple-400"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/FileProgress/FileProgressContainer.tsx",
                                            lineNumber: 105,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/FileProgress/FileProgressContainer.tsx",
                                        lineNumber: 101,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0)) : completedCount > 0 && errorCount === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        initial: {
                                            scale: 0
                                        },
                                        animate: {
                                            scale: 1
                                        },
                                        transition: {
                                            type: "spring",
                                            stiffness: 500
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                            className: "w-5 h-5 text-green-400"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/FileProgress/FileProgressContainer.tsx",
                                            lineNumber: 113,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/FileProgress/FileProgressContainer.tsx",
                                        lineNumber: 108,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0)) : errorCount > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        animate: {
                                            x: [
                                                -1,
                                                1,
                                                -1
                                            ]
                                        },
                                        transition: {
                                            duration: 0.2,
                                            repeat: 3
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                            className: "w-5 h-5 text-red-400"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/FileProgress/FileProgressContainer.tsx",
                                            lineNumber: 120,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/FileProgress/FileProgressContainer.tsx",
                                        lineNumber: 116,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0)) : null
                                }, void 0, false, {
                                    fileName: "[project]/src/components/FileProgress/FileProgressContainer.tsx",
                                    lineNumber: 99,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        uploadItems.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            initial: {
                                                scale: 0
                                            },
                                            animate: {
                                                scale: 1
                                            },
                                            className: "flex items-center gap-1.5 px-2 py-1 rounded-lg bg-purple-500/20",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"], {
                                                    className: "w-3.5 h-3.5 text-purple-400"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/FileProgress/FileProgressContainer.tsx",
                                                    lineNumber: 133,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs font-medium text-purple-300",
                                                    children: uploadItems.length
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/FileProgress/FileProgressContainer.tsx",
                                                    lineNumber: 134,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/FileProgress/FileProgressContainer.tsx",
                                            lineNumber: 128,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        downloadItems.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            initial: {
                                                scale: 0
                                            },
                                            animate: {
                                                scale: 1
                                            },
                                            className: "flex items-center gap-1.5 px-2 py-1 rounded-lg bg-blue-500/20",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                                    className: "w-3.5 h-3.5 text-blue-400"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/FileProgress/FileProgressContainer.tsx",
                                                    lineNumber: 143,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs font-medium text-blue-300",
                                                    children: downloadItems.length
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/FileProgress/FileProgressContainer.tsx",
                                                    lineNumber: 144,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/FileProgress/FileProgressContainer.tsx",
                                            lineNumber: 138,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/FileProgress/FileProgressContainer.tsx",
                                    lineNumber: 126,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                activeCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        opacity: 0
                                    },
                                    animate: {
                                        opacity: 1
                                    },
                                    className: "text-xs text-white/50",
                                    children: [
                                        overallProgress,
                                        "%"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/FileProgress/FileProgressContainer.tsx",
                                    lineNumber: 151,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/FileProgress/FileProgressContainer.tsx",
                            lineNumber: 97,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                                    whileHover: {
                                        scale: 1.1
                                    },
                                    whileTap: {
                                        scale: 0.9
                                    },
                                    onClick: ()=>setIsMinimized(!isMinimized),
                                    className: "p-1.5 rounded-lg hover:bg-white/10 text-white/50 hover:text-white transition-colors",
                                    children: isMinimized ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$maximize$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Maximize2$3e$__["Maximize2"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/FileProgress/FileProgressContainer.tsx",
                                        lineNumber: 170,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minimize$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Minimize2$3e$__["Minimize2"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/FileProgress/FileProgressContainer.tsx",
                                        lineNumber: 172,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/FileProgress/FileProgressContainer.tsx",
                                    lineNumber: 163,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                onClearAll && items.every((i)=>i.status === "success" || i.status === "error") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                                    initial: {
                                        scale: 0
                                    },
                                    animate: {
                                        scale: 1
                                    },
                                    whileHover: {
                                        scale: 1.1
                                    },
                                    whileTap: {
                                        scale: 0.9
                                    },
                                    onClick: onClearAll,
                                    className: "p-1.5 rounded-lg hover:bg-red-500/20 text-white/50 hover:text-red-400 transition-colors",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/FileProgress/FileProgressContainer.tsx",
                                        lineNumber: 184,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/FileProgress/FileProgressContainer.tsx",
                                    lineNumber: 176,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/FileProgress/FileProgressContainer.tsx",
                            lineNumber: 162,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/FileProgress/FileProgressContainer.tsx",
                    lineNumber: 91,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                    children: !isMinimized && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            height: 0,
                            opacity: 0
                        },
                        animate: {
                            height: "auto",
                            opacity: 1
                        },
                        exit: {
                            height: 0,
                            opacity: 0
                        },
                        transition: {
                            duration: 0.3,
                            ease: "easeInOut"
                        },
                        className: "bg-slate-900/95 backdrop-blur-xl rounded-b-2xl border border-white/10    border-t-0 overflow-hidden shadow-2xl shadow-black/30",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "max-h-80 overflow-y-auto p-3 space-y-2 custom-scrollbar",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                    mode: "popLayout",
                                    children: items.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            initial: {
                                                opacity: 0,
                                                x: -20
                                            },
                                            animate: {
                                                opacity: 1,
                                                x: 0
                                            },
                                            exit: {
                                                opacity: 0,
                                                x: 50
                                            },
                                            transition: {
                                                delay: index * 0.05
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FileProgress$2f$FileProgressAnimation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FileProgressAnimation"], {
                                                item: item,
                                                onCancel: onCancel,
                                                onRetry: onRetry,
                                                onDismiss: onDismiss
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/FileProgress/FileProgressContainer.tsx",
                                                lineNumber: 211,
                                                columnNumber: 45
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, item.id, false, {
                                            fileName: "[project]/src/components/FileProgress/FileProgressContainer.tsx",
                                            lineNumber: 204,
                                            columnNumber: 41
                                        }, ("TURBOPACK compile-time value", void 0)))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/FileProgress/FileProgressContainer.tsx",
                                    lineNumber: 202,
                                    columnNumber: 33
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/FileProgress/FileProgressContainer.tsx",
                                lineNumber: 201,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0)),
                            items.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0
                                },
                                animate: {
                                    opacity: 1
                                },
                                className: "px-4 py-2 border-t border-white/5 bg-slate-900/50",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between text-xs text-white/40",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: [
                                                "รวม ",
                                                items.length,
                                                " รายการ"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/FileProgress/FileProgressContainer.tsx",
                                            lineNumber: 230,
                                            columnNumber: 41
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3",
                                            children: [
                                                completedCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-green-400",
                                                    children: [
                                                        "✓ ",
                                                        completedCount,
                                                        " สำเร็จ"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/FileProgress/FileProgressContainer.tsx",
                                                    lineNumber: 233,
                                                    columnNumber: 49
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                errorCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-red-400",
                                                    children: [
                                                        "✕ ",
                                                        errorCount,
                                                        " ล้มเหลว"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/FileProgress/FileProgressContainer.tsx",
                                                    lineNumber: 236,
                                                    columnNumber: 49
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                activeCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-purple-400",
                                                    children: [
                                                        "◎ ",
                                                        activeCount,
                                                        " กำลังดำเนินการ"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/FileProgress/FileProgressContainer.tsx",
                                                    lineNumber: 239,
                                                    columnNumber: 49
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/FileProgress/FileProgressContainer.tsx",
                                            lineNumber: 231,
                                            columnNumber: 41
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/FileProgress/FileProgressContainer.tsx",
                                    lineNumber: 229,
                                    columnNumber: 37
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/FileProgress/FileProgressContainer.tsx",
                                lineNumber: 224,
                                columnNumber: 33
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/FileProgress/FileProgressContainer.tsx",
                        lineNumber: 193,
                        columnNumber: 25
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/FileProgress/FileProgressContainer.tsx",
                    lineNumber: 191,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                isMinimized && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    className: "bg-slate-900/95 backdrop-blur-xl rounded-b-2xl border border-white/10 border-t-0 p-3",
                    children: activeCount > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-2 bg-white/10 rounded-full overflow-hidden",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    className: "h-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 relative",
                                    style: {
                                        backgroundSize: "200% 100%"
                                    },
                                    animate: {
                                        width: `${overallProgress}%`,
                                        backgroundPosition: [
                                            "0% 0%",
                                            "100% 0%",
                                            "0% 0%"
                                        ]
                                    },
                                    transition: {
                                        width: {
                                            duration: 0.3
                                        },
                                        backgroundPosition: {
                                            duration: 2,
                                            repeat: Infinity,
                                            ease: "linear"
                                        }
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        className: "absolute inset-0",
                                        style: {
                                            background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)"
                                        },
                                        animate: {
                                            x: [
                                                "-100%",
                                                "200%"
                                            ]
                                        },
                                        transition: {
                                            duration: 1,
                                            repeat: Infinity
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/FileProgress/FileProgressContainer.tsx",
                                        lineNumber: 272,
                                        columnNumber: 41
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/FileProgress/FileProgressContainer.tsx",
                                    lineNumber: 259,
                                    columnNumber: 37
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/FileProgress/FileProgressContainer.tsx",
                                lineNumber: 258,
                                columnNumber: 33
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-white/40 mt-1.5 text-center",
                                children: [
                                    activeCount,
                                    " รายการ • ",
                                    overallProgress,
                                    "%"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/FileProgress/FileProgressContainer.tsx",
                                lineNumber: 282,
                                columnNumber: 33
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-center gap-2 text-xs",
                        children: [
                            completedCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-green-400",
                                children: [
                                    "✓ ",
                                    completedCount,
                                    " สำเร็จ"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/FileProgress/FileProgressContainer.tsx",
                                lineNumber: 289,
                                columnNumber: 37
                            }, ("TURBOPACK compile-time value", void 0)),
                            errorCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-red-400",
                                children: [
                                    "✕ ",
                                    errorCount,
                                    " ล้มเหลว"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/FileProgress/FileProgressContainer.tsx",
                                lineNumber: 292,
                                columnNumber: 37
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/FileProgress/FileProgressContainer.tsx",
                        lineNumber: 287,
                        columnNumber: 29
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/FileProgress/FileProgressContainer.tsx",
                    lineNumber: 251,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/FileProgress/FileProgressContainer.tsx",
            lineNumber: 83,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/FileProgress/FileProgressContainer.tsx",
        lineNumber: 82,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(FileProgressContainer, "heYUy+znloI26iR8KAdiHsGyBs8=");
_c = FileProgressContainer;
const __TURBOPACK__default__export__ = FileProgressContainer;
var _c;
__turbopack_context__.k.register(_c, "FileProgressContainer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/FileProgress/useFileProgress.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "setLoadingContextSuppressor",
    ()=>setLoadingContextSuppressor,
    "useFileProgress",
    ()=>useFileProgress
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
// Import loading context to suppress loading overlay during file transfers
let setSuppressLoading = null;
const setLoadingContextSuppressor = (fn)=>{
    setSuppressLoading = fn;
};
const useFileProgress = (options = {})=>{
    _s();
    const [items, setItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const abortControllers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new Map());
    // Suppress loading overlay when there are active transfers
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useFileProgress.useEffect": ()=>{
            const hasActiveTransfers = items.some({
                "useFileProgress.useEffect.hasActiveTransfers": (item)=>item.status === "uploading" || item.status === "downloading"
            }["useFileProgress.useEffect.hasActiveTransfers"]);
            if (setSuppressLoading) {
                setSuppressLoading(hasActiveTransfers);
            }
        }
    }["useFileProgress.useEffect"], [
        items
    ]);
    // Generate unique ID
    const generateId = ()=>`${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    // Update item status
    const updateItem = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useFileProgress.useCallback[updateItem]": (id, updates)=>{
            setItems({
                "useFileProgress.useCallback[updateItem]": (prev)=>prev.map({
                        "useFileProgress.useCallback[updateItem]": (item)=>item.id === id ? {
                                ...item,
                                ...updates
                            } : item
                    }["useFileProgress.useCallback[updateItem]"])
            }["useFileProgress.useCallback[updateItem]"]);
        }
    }["useFileProgress.useCallback[updateItem]"], []);
    // Add new item to queue
    const addItem = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useFileProgress.useCallback[addItem]": (file, type, initialStatus = "pending")=>{
            const id = generateId();
            const newItem = {
                id,
                fileName: file.name,
                fileSize: file.size,
                fileType: file.type || "application/octet-stream",
                progress: 0,
                status: initialStatus,
                type
            };
            setItems({
                "useFileProgress.useCallback[addItem]": (prev)=>[
                        ...prev,
                        newItem
                    ]
            }["useFileProgress.useCallback[addItem]"]);
            return id;
        }
    }["useFileProgress.useCallback[addItem]"], []);
    // Upload file with progress tracking
    const uploadFile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useFileProgress.useCallback[uploadFile]": async (file, uploadOptions)=>{
            const id = addItem(file, "upload", "uploading");
            const controller = new AbortController();
            abortControllers.current.set(id, controller);
            try {
                const formData = new FormData();
                formData.append(uploadOptions.fieldName || "file", file);
                // Add additional data if provided
                if (uploadOptions.additionalData) {
                    Object.entries(uploadOptions.additionalData).forEach({
                        "useFileProgress.useCallback[uploadFile]": ([key, value])=>{
                            formData.append(key, value);
                        }
                    }["useFileProgress.useCallback[uploadFile]"]);
                }
                // Use XMLHttpRequest for progress tracking
                const response = await new Promise({
                    "useFileProgress.useCallback[uploadFile]": (resolve, reject)=>{
                        const xhr = new XMLHttpRequest();
                        xhr.upload.addEventListener("progress", {
                            "useFileProgress.useCallback[uploadFile]": (event)=>{
                                if (event.lengthComputable) {
                                    const progress = Math.round(event.loaded / event.total * 100);
                                    updateItem(id, {
                                        progress
                                    });
                                }
                            }
                        }["useFileProgress.useCallback[uploadFile]"]);
                        xhr.addEventListener("load", {
                            "useFileProgress.useCallback[uploadFile]": ()=>{
                                if (xhr.status >= 200 && xhr.status < 300) {
                                    try {
                                        resolve(JSON.parse(xhr.responseText));
                                    } catch  {
                                        resolve(xhr.responseText);
                                    }
                                } else {
                                    reject(new Error(`Upload failed with status ${xhr.status}`));
                                }
                            }
                        }["useFileProgress.useCallback[uploadFile]"]);
                        xhr.addEventListener("error", {
                            "useFileProgress.useCallback[uploadFile]": ()=>{
                                reject(new Error("Upload failed"));
                            }
                        }["useFileProgress.useCallback[uploadFile]"]);
                        xhr.addEventListener("abort", {
                            "useFileProgress.useCallback[uploadFile]": ()=>{
                                reject(new Error("Upload cancelled"));
                            }
                        }["useFileProgress.useCallback[uploadFile]"]);
                        xhr.open(uploadOptions.method || "POST", uploadOptions.url);
                        // Set headers
                        if (uploadOptions.headers) {
                            Object.entries(uploadOptions.headers).forEach({
                                "useFileProgress.useCallback[uploadFile]": ([key, value])=>{
                                    xhr.setRequestHeader(key, value);
                                }
                            }["useFileProgress.useCallback[uploadFile]"]);
                        }
                        // Handle abort signal
                        controller.signal.addEventListener("abort", {
                            "useFileProgress.useCallback[uploadFile]": ()=>xhr.abort()
                        }["useFileProgress.useCallback[uploadFile]"]);
                        xhr.send(formData);
                    }
                }["useFileProgress.useCallback[uploadFile]"]);
                updateItem(id, {
                    status: "success",
                    progress: 100
                });
                options.onUploadComplete?.(id, response);
                return id;
            } catch (error) {
                const errorMessage = error instanceof Error ? error.message : "Upload failed";
                updateItem(id, {
                    status: "error",
                    error: errorMessage
                });
                options.onError?.(id, error instanceof Error ? error : new Error(errorMessage));
                return id;
            } finally{
                abortControllers.current.delete(id);
            }
        }
    }["useFileProgress.useCallback[uploadFile]"], [
        addItem,
        updateItem,
        options
    ]);
    // Download file with progress tracking
    const downloadFile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useFileProgress.useCallback[downloadFile]": async (url, fileName, fileSize = 0, downloadOptions = {})=>{
            const id = generateId();
            const controller = new AbortController();
            abortControllers.current.set(id, controller);
            // Create item manually since we don't have a File object
            const newItem = {
                id,
                fileName,
                fileSize,
                fileType: "application/octet-stream",
                progress: 0,
                status: "downloading",
                type: "download"
            };
            setItems({
                "useFileProgress.useCallback[downloadFile]": (prev)=>[
                        ...prev,
                        newItem
                    ]
            }["useFileProgress.useCallback[downloadFile]"]);
            try {
                const response = await fetch(url, {
                    signal: controller.signal
                });
                if (!response.ok) {
                    throw new Error(`Download failed with status ${response.status}`);
                }
                const contentLength = response.headers.get("Content-Length");
                const total = contentLength ? parseInt(contentLength, 10) : fileSize;
                if (total > 0) {
                    updateItem(id, {
                        fileSize: total
                    });
                }
                const reader = response.body?.getReader();
                if (!reader) {
                    throw new Error("Failed to get response reader");
                }
                const chunks = [];
                let received = 0;
                while(true){
                    const { done, value } = await reader.read();
                    if (done) break;
                    chunks.push(value.buffer);
                    received += value.length;
                    if (total > 0) {
                        const progress = Math.round(received / total * 100);
                        updateItem(id, {
                            progress: Math.min(progress, 99)
                        });
                    }
                }
                const blob = new Blob(chunks);
                updateItem(id, {
                    status: "success",
                    progress: 100,
                    fileSize: blob.size
                });
                // Auto-download if saveAs is true
                if (downloadOptions.saveAs !== false) {
                    const downloadUrl = URL.createObjectURL(blob);
                    const a = document.createElement("a");
                    a.href = downloadUrl;
                    a.download = fileName;
                    document.body.appendChild(a);
                    a.click();
                    document.body.removeChild(a);
                    URL.revokeObjectURL(downloadUrl);
                }
                options.onDownloadComplete?.(id, blob);
                return id;
            } catch (error) {
                const errorMessage = error instanceof Error ? error.message : "Download failed";
                updateItem(id, {
                    status: "error",
                    error: errorMessage
                });
                options.onError?.(id, error instanceof Error ? error : new Error(errorMessage));
                return id;
            } finally{
                abortControllers.current.delete(id);
            }
        }
    }["useFileProgress.useCallback[downloadFile]"], [
        updateItem,
        options
    ]);
    // Cancel a transfer
    const cancelTransfer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useFileProgress.useCallback[cancelTransfer]": (id)=>{
            const controller = abortControllers.current.get(id);
            if (controller) {
                controller.abort();
                abortControllers.current.delete(id);
            }
            updateItem(id, {
                status: "error",
                error: "Cancelled by user"
            });
        }
    }["useFileProgress.useCallback[cancelTransfer]"], [
        updateItem
    ]);
    // Retry a failed transfer
    const retryTransfer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useFileProgress.useCallback[retryTransfer]": async (id, uploadOptions)=>{
            const item = items.find({
                "useFileProgress.useCallback[retryTransfer].item": (i)=>i.id === id
            }["useFileProgress.useCallback[retryTransfer].item"]);
            if (!item || item.status !== "error") return;
            // For uploads, we need the original file which we don't have stored
            // This would need to be handled by the component using this hook
            updateItem(id, {
                status: "pending",
                progress: 0,
                error: undefined
            });
        }
    }["useFileProgress.useCallback[retryTransfer]"], [
        items,
        updateItem
    ]);
    // Dismiss an item
    const dismissItem = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useFileProgress.useCallback[dismissItem]": (id)=>{
            setItems({
                "useFileProgress.useCallback[dismissItem]": (prev)=>prev.filter({
                        "useFileProgress.useCallback[dismissItem]": (item)=>item.id !== id
                    }["useFileProgress.useCallback[dismissItem]"])
            }["useFileProgress.useCallback[dismissItem]"]);
        }
    }["useFileProgress.useCallback[dismissItem]"], []);
    // Clear all completed/errored items
    const clearCompleted = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useFileProgress.useCallback[clearCompleted]": ()=>{
            setItems({
                "useFileProgress.useCallback[clearCompleted]": (prev)=>prev.filter({
                        "useFileProgress.useCallback[clearCompleted]": (item)=>item.status === "uploading" || item.status === "downloading"
                    }["useFileProgress.useCallback[clearCompleted]"])
            }["useFileProgress.useCallback[clearCompleted]"]);
        }
    }["useFileProgress.useCallback[clearCompleted]"], []);
    // Clear all items
    const clearAll = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useFileProgress.useCallback[clearAll]": ()=>{
            // Abort all active transfers
            abortControllers.current.forEach({
                "useFileProgress.useCallback[clearAll]": (controller)=>controller.abort()
            }["useFileProgress.useCallback[clearAll]"]);
            abortControllers.current.clear();
            setItems([]);
        }
    }["useFileProgress.useCallback[clearAll]"], []);
    return {
        items,
        uploadFile,
        downloadFile,
        cancelTransfer,
        retryTransfer,
        dismissItem,
        clearCompleted,
        clearAll,
        updateItem
    };
};
_s(useFileProgress, "LnC0rItTz4iuuK8h0r4b8ZFUFJg=");
const __TURBOPACK__default__export__ = useFileProgress;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/FileProgress/ToastProvider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ToastProvider",
    ()=>ToastProvider,
    "default",
    ()=>__TURBOPACK__default__export__,
    "useToast",
    ()=>useToast
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/info.js [app-client] (ecmascript) <export default as Info>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/download.js [app-client] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/upload.js [app-client] (ecmascript) <export default as Upload>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-x.js [app-client] (ecmascript) <export default as XCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-client] (ecmascript) <export default as AlertTriangle>");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
"use client";
;
;
;
const ToastContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const useToast = ()=>{
    _s();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(ToastContext);
    if (!context) {
        throw new Error("useToast must be used within a ToastProvider");
    }
    return context;
};
_s(useToast, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
// Enhanced Toast Item Component
const ToastItem = ({ toast, onClose })=>{
    _s1();
    const [isHovered, setIsHovered] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(false);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "ToastItem.useEffect": ()=>{
            if (toast.duration && toast.duration > 0 && !isHovered) {
                const timer = setTimeout(onClose, toast.duration);
                return ({
                    "ToastItem.useEffect": ()=>clearTimeout(timer)
                })["ToastItem.useEffect"];
            }
        }
    }["ToastItem.useEffect"], [
        toast.duration,
        onClose,
        isHovered
    ]);
    const icons = {
        success: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
            className: "w-5 h-5"
        }, void 0, false, {
            fileName: "[project]/src/components/FileProgress/ToastProvider.tsx",
            lineNumber: 50,
            columnNumber: 18
        }, ("TURBOPACK compile-time value", void 0)),
        error: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__["XCircle"], {
            className: "w-5 h-5"
        }, void 0, false, {
            fileName: "[project]/src/components/FileProgress/ToastProvider.tsx",
            lineNumber: 51,
            columnNumber: 16
        }, ("TURBOPACK compile-time value", void 0)),
        warning: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
            className: "w-5 h-5"
        }, void 0, false, {
            fileName: "[project]/src/components/FileProgress/ToastProvider.tsx",
            lineNumber: 52,
            columnNumber: 18
        }, ("TURBOPACK compile-time value", void 0)),
        info: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__["Info"], {
            className: "w-5 h-5"
        }, void 0, false, {
            fileName: "[project]/src/components/FileProgress/ToastProvider.tsx",
            lineNumber: 53,
            columnNumber: 15
        }, ("TURBOPACK compile-time value", void 0)),
        upload: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"], {
            className: "w-5 h-5"
        }, void 0, false, {
            fileName: "[project]/src/components/FileProgress/ToastProvider.tsx",
            lineNumber: 54,
            columnNumber: 17
        }, ("TURBOPACK compile-time value", void 0)),
        download: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
            className: "w-5 h-5"
        }, void 0, false, {
            fileName: "[project]/src/components/FileProgress/ToastProvider.tsx",
            lineNumber: 55,
            columnNumber: 19
        }, ("TURBOPACK compile-time value", void 0))
    };
    const colors = {
        success: "from-green-500/20 to-emerald-500/20 border-green-500/30",
        error: "from-red-500/20 to-rose-500/20 border-red-500/30",
        warning: "from-amber-500/20 to-orange-500/20 border-amber-500/30",
        info: "from-blue-500/20 to-cyan-500/20 border-blue-500/30",
        upload: "from-purple-500/20 to-pink-500/20 border-purple-500/30",
        download: "from-blue-500/20 to-indigo-500/20 border-blue-500/30"
    };
    const iconColors = {
        success: "text-green-400 bg-green-500/20",
        error: "text-red-400 bg-red-500/20",
        warning: "text-amber-400 bg-amber-500/20",
        info: "text-blue-400 bg-blue-500/20",
        upload: "text-purple-400 bg-purple-500/20",
        download: "text-blue-400 bg-blue-500/20"
    };
    const glowColors = {
        success: "shadow-green-500/20",
        error: "shadow-red-500/20",
        warning: "shadow-amber-500/20",
        info: "shadow-blue-500/20",
        upload: "shadow-purple-500/20",
        download: "shadow-blue-500/20"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        layout: true,
        initial: {
            opacity: 0,
            x: 100,
            scale: 0.9
        },
        animate: {
            opacity: 1,
            x: 0,
            scale: 1
        },
        exit: {
            opacity: 0,
            x: 100,
            scale: 0.9
        },
        whileHover: {
            scale: 1.02
        },
        transition: {
            type: "spring",
            stiffness: 400,
            damping: 25
        },
        onMouseEnter: ()=>setIsHovered(true),
        onMouseLeave: ()=>setIsHovered(false),
        className: `relative bg-gradient-to-r ${colors[toast.type]} 
                  backdrop-blur-xl rounded-2xl border p-4 shadow-2xl ${glowColors[toast.type]}
                  min-w-72 max-w-96 overflow-hidden cursor-pointer`,
        onClick: onClose,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "absolute inset-0 opacity-30",
                style: {
                    background: `radial-gradient(circle at 0% 50%, ${toast.type === "success" ? "#22c55e" : toast.type === "error" ? "#ef4444" : toast.type === "warning" ? "#f59e0b" : toast.type === "upload" ? "#8b5cf6" : toast.type === "download" ? "#3b82f6" : "#3b82f6"}40, transparent 50%)`
                },
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: 0.3
                }
            }, void 0, false, {
                fileName: "[project]/src/components/FileProgress/ToastProvider.tsx",
                lineNumber: 101,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative flex items-start gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            scale: 0,
                            rotate: -180
                        },
                        animate: {
                            scale: 1,
                            rotate: 0
                        },
                        transition: {
                            type: "spring",
                            stiffness: 500,
                            damping: 25,
                            delay: 0.1
                        },
                        className: `p-2 rounded-xl ${iconColors[toast.type]} flex-shrink-0`,
                        children: toast.type === "upload" ? toast.progress !== undefined && toast.progress < 100 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            animate: {
                                y: [
                                    -2,
                                    2,
                                    -2
                                ]
                            },
                            transition: {
                                duration: 0.6,
                                repeat: Infinity
                            },
                            children: icons[toast.type]
                        }, void 0, false, {
                            fileName: "[project]/src/components/FileProgress/ToastProvider.tsx",
                            lineNumber: 126,
                            columnNumber: 29
                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                scale: 0
                            },
                            animate: {
                                scale: 1
                            },
                            transition: {
                                type: "spring",
                                stiffness: 500
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                className: "w-5 h-5 text-green-400"
                            }, void 0, false, {
                                fileName: "[project]/src/components/FileProgress/ToastProvider.tsx",
                                lineNumber: 138,
                                columnNumber: 33
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/FileProgress/ToastProvider.tsx",
                            lineNumber: 133,
                            columnNumber: 29
                        }, ("TURBOPACK compile-time value", void 0)) : toast.type === "download" ? toast.progress !== undefined && toast.progress < 100 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            animate: {
                                y: [
                                    2,
                                    -2,
                                    2
                                ]
                            },
                            transition: {
                                duration: 0.6,
                                repeat: Infinity
                            },
                            children: icons[toast.type]
                        }, void 0, false, {
                            fileName: "[project]/src/components/FileProgress/ToastProvider.tsx",
                            lineNumber: 143,
                            columnNumber: 29
                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                scale: 0
                            },
                            animate: {
                                scale: 1
                            },
                            transition: {
                                type: "spring",
                                stiffness: 500
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                className: "w-5 h-5 text-green-400"
                            }, void 0, false, {
                                fileName: "[project]/src/components/FileProgress/ToastProvider.tsx",
                                lineNumber: 155,
                                columnNumber: 33
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/FileProgress/ToastProvider.tsx",
                            lineNumber: 150,
                            columnNumber: 29
                        }, ("TURBOPACK compile-time value", void 0)) : toast.type === "success" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                pathLength: 0
                            },
                            animate: {
                                pathLength: 1
                            },
                            children: icons[toast.type]
                        }, void 0, false, {
                            fileName: "[project]/src/components/FileProgress/ToastProvider.tsx",
                            lineNumber: 159,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)) : toast.type === "error" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            animate: {
                                x: [
                                    -1,
                                    1,
                                    -1,
                                    1,
                                    0
                                ]
                            },
                            transition: {
                                duration: 0.3,
                                delay: 0.2
                            },
                            children: icons[toast.type]
                        }, void 0, false, {
                            fileName: "[project]/src/components/FileProgress/ToastProvider.tsx",
                            lineNumber: 166,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)) : icons[toast.type]
                    }, void 0, false, {
                        fileName: "[project]/src/components/FileProgress/ToastProvider.tsx",
                        lineNumber: 118,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 min-w-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                                initial: {
                                    opacity: 0,
                                    y: 5
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    delay: 0.15
                                },
                                className: "text-white font-medium text-sm",
                                children: toast.title
                            }, void 0, false, {
                                fileName: "[project]/src/components/FileProgress/ToastProvider.tsx",
                                lineNumber: 179,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            toast.message && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                                initial: {
                                    opacity: 0,
                                    y: 5
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    delay: 0.2
                                },
                                className: "text-white/60 text-xs mt-0.5 line-clamp-2",
                                children: toast.message
                            }, void 0, false, {
                                fileName: "[project]/src/components/FileProgress/ToastProvider.tsx",
                                lineNumber: 188,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            (toast.type === "upload" || toast.type === "download") && toast.progress !== undefined && toast.showProgress && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    scaleX: 0
                                },
                                animate: {
                                    opacity: 1,
                                    scaleX: 1
                                },
                                className: "mt-2 h-1.5 bg-white/10 rounded-full overflow-hidden origin-left",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    className: `h-full rounded-full ${toast.type === "upload" ? "bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500" : "bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500"}`,
                                    style: {
                                        backgroundSize: "200% 100%"
                                    },
                                    initial: {
                                        width: 0
                                    },
                                    animate: {
                                        width: `${toast.progress}%`,
                                        backgroundPosition: toast.progress < 100 ? [
                                            "0% 0%",
                                            "100% 0%",
                                            "0% 0%"
                                        ] : "0% 0%"
                                    },
                                    transition: {
                                        width: {
                                            duration: 0.3,
                                            ease: "easeOut"
                                        },
                                        backgroundPosition: {
                                            duration: 1.5,
                                            repeat: Infinity,
                                            ease: "linear"
                                        }
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/FileProgress/ToastProvider.tsx",
                                    lineNumber: 206,
                                    columnNumber: 33
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/FileProgress/ToastProvider.tsx",
                                lineNumber: 201,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/FileProgress/ToastProvider.tsx",
                        lineNumber: 178,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: 1
                        },
                        whileHover: {
                            scale: 1.2,
                            rotate: 90
                        },
                        whileTap: {
                            scale: 0.9
                        },
                        onClick: (e)=>{
                            e.stopPropagation();
                            onClose();
                        },
                        className: "p-1 rounded-lg hover:bg-white/10 text-white/40 hover:text-white transition-colors flex-shrink-0",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                            className: "w-4 h-4"
                        }, void 0, false, {
                            fileName: "[project]/src/components/FileProgress/ToastProvider.tsx",
                            lineNumber: 240,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/FileProgress/ToastProvider.tsx",
                        lineNumber: 229,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/FileProgress/ToastProvider.tsx",
                lineNumber: 116,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            toast.duration && toast.duration > 0 && !isHovered && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "absolute bottom-0 left-0 h-0.5 bg-white/30 origin-left",
                initial: {
                    scaleX: 1
                },
                animate: {
                    scaleX: 0
                },
                transition: {
                    duration: toast.duration / 1000,
                    ease: "linear"
                }
            }, void 0, false, {
                fileName: "[project]/src/components/FileProgress/ToastProvider.tsx",
                lineNumber: 246,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0)),
            toast.type === "success" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 pointer-events-none overflow-hidden",
                children: [
                    ...Array(8)
                ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "absolute w-1 h-1 bg-green-400 rounded-full",
                        style: {
                            left: `${10 + i * 10}%`,
                            bottom: "30%"
                        },
                        initial: {
                            y: 0,
                            opacity: 1,
                            scale: 1
                        },
                        animate: {
                            y: -20 - Math.random() * 15,
                            x: (Math.random() - 0.5) * 30,
                            opacity: 0,
                            scale: 0
                        },
                        transition: {
                            duration: 0.8,
                            delay: 0.1 + i * 0.03,
                            ease: "easeOut"
                        }
                    }, i, false, {
                        fileName: "[project]/src/components/FileProgress/ToastProvider.tsx",
                        lineNumber: 258,
                        columnNumber: 25
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/src/components/FileProgress/ToastProvider.tsx",
                lineNumber: 256,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/FileProgress/ToastProvider.tsx",
        lineNumber: 86,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s1(ToastItem, "kc8+hhKG3+iGUxqsVUryptgPYnY=");
_c = ToastItem;
const ToastProvider = ({ children })=>{
    _s2();
    const [toasts, setToasts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const addToast = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ToastProvider.useCallback[addToast]": (toast)=>{
            const id = `toast-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
            const newToast = {
                ...toast,
                id,
                duration: toast.duration ?? 4000
            };
            setToasts({
                "ToastProvider.useCallback[addToast]": (prev)=>[
                        ...prev,
                        newToast
                    ]
            }["ToastProvider.useCallback[addToast]"]);
            return id;
        }
    }["ToastProvider.useCallback[addToast]"], []);
    const removeToast = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ToastProvider.useCallback[removeToast]": (id)=>{
            setToasts({
                "ToastProvider.useCallback[removeToast]": (prev)=>prev.filter({
                        "ToastProvider.useCallback[removeToast]": (t)=>t.id !== id
                    }["ToastProvider.useCallback[removeToast]"])
            }["ToastProvider.useCallback[removeToast]"]);
        }
    }["ToastProvider.useCallback[removeToast]"], []);
    const updateToast = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ToastProvider.useCallback[updateToast]": (id, updates)=>{
            setToasts({
                "ToastProvider.useCallback[updateToast]": (prev)=>prev.map({
                        "ToastProvider.useCallback[updateToast]": (t)=>t.id === id ? {
                                ...t,
                                ...updates
                            } : t
                    }["ToastProvider.useCallback[updateToast]"])
            }["ToastProvider.useCallback[updateToast]"]);
        }
    }["ToastProvider.useCallback[updateToast]"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ToastContext.Provider, {
        value: {
            toasts,
            addToast,
            removeToast,
            updateToast
        },
        children: [
            children,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed top-4 right-4 z-[100] flex flex-col gap-2",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                    mode: "popLayout",
                    children: toasts.map((toast)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ToastItem, {
                            toast: toast,
                            onClose: ()=>removeToast(toast.id)
                        }, toast.id, false, {
                            fileName: "[project]/src/components/FileProgress/ToastProvider.tsx",
                            lineNumber: 319,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/src/components/FileProgress/ToastProvider.tsx",
                    lineNumber: 317,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/FileProgress/ToastProvider.tsx",
                lineNumber: 316,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/FileProgress/ToastProvider.tsx",
        lineNumber: 313,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s2(ToastProvider, "/FfLm1hfib+bYjV2hf1e9eqoxoI=");
_c1 = ToastProvider;
const __TURBOPACK__default__export__ = ToastProvider;
var _c, _c1;
__turbopack_context__.k.register(_c, "ToastItem");
__turbopack_context__.k.register(_c1, "ToastProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/FileProgress/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

// File Progress Components
__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FileProgress$2f$FileProgressAnimation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/FileProgress/FileProgressAnimation.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FileProgress$2f$FileProgressContainer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/FileProgress/FileProgressContainer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FileProgress$2f$useFileProgress$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/FileProgress/useFileProgress.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FileProgress$2f$ToastProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/FileProgress/ToastProvider.tsx [app-client] (ecmascript)");
;
;
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/(fullscreen)/all-files-gallery/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/refresh-cw.js [app-client] (ecmascript) <export default as RefreshCw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/download.js [app-client] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/image.js [app-client] (ecmascript) <export default as Image>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$film$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Film$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/film.js [app-client] (ecmascript) <export default as Film>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileVideo$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-play.js [app-client] (ecmascript) <export default as FileVideo>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__List$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/list.js [app-client] (ecmascript) <export default as List>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$grid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutGrid$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layout-grid.js [app-client] (ecmascript) <export default as LayoutGrid>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/play.js [app-client] (ecmascript) <export default as Play>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/upload.js [app-client] (ecmascript) <export default as Upload>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FolderOpen$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/folder-open.js [app-client] (ecmascript) <export default as FolderOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye.js [app-client] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/copy.js [app-client] (ecmascript) <export default as Copy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Share2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/share-2.js [app-client] (ecmascript) <export default as Share2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2d$vertical$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreVertical$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/ellipsis-vertical.js [app-client] (ecmascript) <export default as MoreVertical>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hard$2d$drive$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HardDrive$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/hard-drive.js [app-client] (ecmascript) <export default as HardDrive>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pencil$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pencil.js [app-client] (ecmascript) <export default as Pencil>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$megaphone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Megaphone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/megaphone.js [app-client] (ecmascript) <export default as Megaphone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2d$quote$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquareQuote$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-square-quote.js [app-client] (ecmascript) <export default as MessageSquareQuote>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$presentation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Presentation$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/presentation.js [app-client] (ecmascript) <export default as Presentation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$archive$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Archive$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/archive.js [app-client] (ecmascript) <export default as Archive>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/send.js [app-client] (ecmascript) <export default as Send>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-client] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/info.js [app-client] (ecmascript) <export default as Info>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2d$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FolderPlus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/folder-plus.js [app-client] (ecmascript) <export default as FolderPlus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UserMenu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/UserMenu.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FileProgress$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/components/FileProgress/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FileProgress$2f$FileProgressContainer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/FileProgress/FileProgressContainer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FileProgress$2f$useFileProgress$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/FileProgress/useFileProgress.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LoadingContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/LoadingContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
// Custom scrollbar styles
const customScrollbarStyle = `
  .custom-scrollbar::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }
  .custom-scrollbar::-webkit-scrollbar-track {
    background: linear-gradient(180deg, #1e1b4b 0%, #312e81 100%);
    border-radius: 12px;
  }
  .custom-scrollbar::-webkit-scrollbar-thumb {
    background: linear-gradient(180deg, #8b5cf6 0%, #ec4899 50%, #f97316 100%);
    border-radius: 12px;
    border: 2px solid transparent;
    background-clip: padding-box;
  }
  .custom-scrollbar::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(180deg, #a78bfa 0%, #f472b6 50%, #fb923c 100%);
    border-radius: 12px;
  }

  @keyframes float {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-20px) rotate(5deg); }
  }

  @keyframes pulse-glow {
    0%, 100% { box-shadow: 0 0 20px rgba(139, 92, 246, 0.5), 0 0 40px rgba(236, 72, 153, 0.3); }
    50% { box-shadow: 0 0 40px rgba(139, 92, 246, 0.8), 0 0 80px rgba(236, 72, 153, 0.5); }
  }

  @keyframes gradient-shift {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }

  @keyframes shimmer {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
  }

  @keyframes bounce-in {
    0% { transform: scale(0); opacity: 0; }
    50% { transform: scale(1.1); }
    100% { transform: scale(1); opacity: 1; }
  }

  @keyframes slide-up {
    from { transform: translateY(100%); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
  }

  @keyframes slide-down {
    from { transform: translateY(0); opacity: 1; }
    to { transform: translateY(100%); opacity: 0; }
  }

  @keyframes rotate-3d {
    from { transform: perspective(1000px) rotateY(0deg); }
    to { transform: perspective(1000px) rotateY(360deg); }
  }

  .animate-float { animation: float 6s ease-in-out infinite; }
  .animate-pulse-glow { animation: pulse-glow 3s ease-in-out infinite; }
  .animate-gradient-shift { 
    background-size: 200% 200%;
    animation: gradient-shift 5s ease infinite;
  }
  .animate-shimmer { animation: shimmer 2s infinite; }
  .animate-bounce-in { animation: bounce-in 0.5s ease-out forwards; }
  .animate-slide-up { animation: slide-up 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
  .animate-slide-down { animation: slide-down 0.3s ease-in forwards; }

  .glass-effect {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.2);
  }

  .glass-card {
    background: linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border: 1px solid rgba(255,255,255,0.18);
  }

  .neon-border {
    box-shadow: 0 0 5px theme('colors.purple.400'),
                0 0 20px theme('colors.purple.600'),
                inset 0 0 5px theme('colors.purple.400');
  }

  .image-card {
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  .image-card:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 25px 50px -12px rgba(139, 92, 246, 0.4);
  }

  .file-item:hover .file-actions {
    opacity: 1;
    transform: translateY(0);
  }

  .file-actions {
    opacity: 0;
    transform: translateY(10px);
    transition: all 0.3s ease;
  }

  /* Mobile responsive styles */
  @media (max-width: 768px) {
    .image-card:hover {
      transform: none;
    }
    
    .file-actions {
      opacity: 1;
      transform: translateY(0);
    }

    .mobile-touch-target {
      min-height: 44px;
      min-width: 44px;
    }
  }

  /* Touch-friendly interactions */
  @media (hover: none) {
    .image-card:active {
      transform: scale(0.98);
    }
    
    .file-actions {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* AI Drop Zone Animation */
  @keyframes ai-pulse {
    0%, 100% { 
      box-shadow: 0 0 20px rgba(168, 85, 247, 0.4), 0 0 40px rgba(236, 72, 153, 0.2);
      border-color: rgba(168, 85, 247, 0.5);
    }
    50% { 
      box-shadow: 0 0 30px rgba(168, 85, 247, 0.6), 0 0 60px rgba(236, 72, 153, 0.4);
      border-color: rgba(236, 72, 153, 0.7);
    }
  }

  .ai-drop-zone {
    animation: ai-pulse 2s ease-in-out infinite;
  }

  .ai-drop-zone-active {
    animation: none;
    box-shadow: 0 0 40px rgba(34, 197, 94, 0.6), 0 0 80px rgba(34, 197, 94, 0.3);
    border-color: rgba(34, 197, 94, 0.8);
    background: rgba(34, 197, 94, 0.1);
  }

  /* LINE Share Button */
  .line-share-btn {
    background: linear-gradient(135deg, #00B900 0%, #00C300 100%);
  }

  .line-share-btn:hover {
    background: linear-gradient(135deg, #00C300 0%, #00D400 100%);
  }

  /* Responsive Text Sizing */
  .text-responsive-xs {
    font-size: clamp(0.625rem, 2vw, 0.75rem);
  }

  .text-responsive-sm {
    font-size: clamp(0.75rem, 2.5vw, 0.875rem);
  }

  .text-responsive-base {
    font-size: clamp(0.875rem, 3vw, 1rem);
  }

  .text-responsive-lg {
    font-size: clamp(1rem, 3.5vw, 1.125rem);
  }

  .text-responsive-xl {
    font-size: clamp(1.125rem, 4vw, 1.25rem);
  }

  .text-responsive-2xl {
    font-size: clamp(1.25rem, 4.5vw, 1.5rem);
  }

  .text-responsive-3xl {
    font-size: clamp(1.5rem, 5vw, 1.875rem);
  }

  .text-responsive-4xl {
    font-size: clamp(1.75rem, 5.5vw, 2.25rem);
  }

  .text-responsive-5xl {
    font-size: clamp(2rem, 6vw, 3rem);
  }

  /* Folder card responsive text */
  .folder-title {
    font-size: clamp(0.875rem, 2.5vw + 0.25rem, 1.125rem);
    line-height: 1.3;
  }

  .folder-description {
    font-size: clamp(0.625rem, 2vw + 0.1rem, 0.875rem);
    line-height: 1.4;
  }

  .folder-meta {
    font-size: clamp(0.625rem, 1.5vw + 0.1rem, 0.75rem);
  }

  /* File card responsive text */
  .file-title {
    font-size: clamp(0.75rem, 2vw + 0.2rem, 1rem);
    line-height: 1.3;
  }

  .file-meta {
    font-size: clamp(0.625rem, 1.5vw + 0.1rem, 0.75rem);
  }

  .file-tag {
    font-size: clamp(0.5rem, 1.5vw, 0.75rem);
    padding: clamp(0.125rem, 0.5vw, 0.25rem) clamp(0.375rem, 1vw, 0.5rem);
  }

  /* Header responsive text */
  .page-title {
    font-size: clamp(1.5rem, 5vw + 0.5rem, 3rem);
    line-height: 1.2;
  }

  .page-subtitle {
    font-size: clamp(0.75rem, 2.5vw + 0.1rem, 1.125rem);
  }

  /* Button responsive text */
  .btn-text {
    font-size: clamp(0.75rem, 2vw + 0.1rem, 0.875rem);
  }

  /* Breadcrumb responsive text */
  .breadcrumb-text {
    font-size: clamp(0.625rem, 2vw, 0.875rem);
  }
`;
// Initial empty files - users will upload files to /public/images/video/
const initialFiles = [];
const folderTemplates = [
    {
        id: "ad-content",
        name: "Ad Content",
        description: "✨ ภาพผลลัพธ์ก่อน-หลังศัลยกรรม",
        gradient: "from-rose-500 to-pink-600",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"]
    },
    {
        id: "before-and-after",
        name: "Before and After",
        description: "💬 รีวิวและประสบการณ์คนไข้จริง",
        gradient: "from-amber-500 to-orange-500",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2d$quote$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquareQuote$3e$__["MessageSquareQuote"]
    },
    {
        id: "branding",
        name: "Branding",
        description: "🎬 คลิปวีดีโอขั้นตอนหัตถการ",
        gradient: "from-emerald-500 to-teal-500",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$film$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Film$3e$__["Film"]
    },
    {
        id: "presentations",
        name: "Presentations",
        description: "👨‍⚕️ โปรไฟล์ทีมแพทย์ผู้เชี่ยวชาญ",
        gradient: "from-sky-500 to-blue-600",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$presentation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Presentation$3e$__["Presentation"]
    },
    {
        id: "all-footages",
        name: "All Footages",
        description: "🏥 พาชมคลินิกและห้องผ่าตัด",
        gradient: "from-violet-500 to-purple-600",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$megaphone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Megaphone$3e$__["Megaphone"]
    },
    {
        id: "other-files",
        name: "Other Files",
        description: "🎁 โปรโมชั่นและส่วนลดพิเศษ",
        gradient: "from-fuchsia-500 to-pink-500",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$archive$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Archive$3e$__["Archive"]
    }
];
const categoryFolderMap = {
    "Promo Clips": "ad-content",
    "Social Media": "ad-content",
    Marketing: "ad-content",
    "Before/After": "before-and-after",
    Products: "branding",
    Testimonials: "before-and-after",
    Consultations: "before-and-after",
    Events: "presentations",
    "Surgery Videos": "all-footages",
    Training: "all-footages"
};
const slugify = (value)=>value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "");
const getPathSegments = (value)=>value.split("/").map((segment)=>segment.trim()).filter(Boolean);
const getIdFromPath = (value)=>getPathSegments(value).map((segment)=>slugify(segment)).join("-");
// Helper functions for nested folder operations
const findFolderById = (folders, id)=>{
    for (const folder of folders){
        if (folder.id === id) return folder;
        const found = findFolderById(folder.children, id);
        if (found) return found;
    }
    return null;
};
const isLeafFolder = (folder)=>{
    return folder.children.length === 0;
};
const countAllSubFolders = (folders)=>{
    return folders.reduce((acc, folder)=>{
        return acc + 1 + countAllSubFolders(folder.children);
    }, 0);
};
const getAllFileIds = (folder)=>{
    const ids = [
        ...folder.fileIds
    ];
    folder.children.forEach((child)=>{
        ids.push(...getAllFileIds(child));
    });
    return ids;
};
const createInitialFolders = (mediaFiles)=>{
    const templateMap = new Map();
    folderTemplates.forEach((template)=>{
        templateMap.set(template.id, {
            ...template,
            subFolders: [],
            rootFileIds: [],
            relativePath: template.name
        });
    });
    const fallbackId = "other-files";
    mediaFiles.forEach((file)=>{
        const folderId = categoryFolderMap[file.category] || fallbackId;
        const folder = templateMap.get(folderId);
        if (!folder) return;
        const subFolderName = file.category;
        let subFolder = folder.subFolders.find((sub)=>sub.name === subFolderName);
        if (!subFolder) {
            subFolder = {
                id: `${folder.id}-${slugify(subFolderName)}`,
                name: subFolderName,
                fileIds: [],
                children: [],
                parentId: null,
                relativePath: `${folder.name}/${subFolderName}`
            };
            folder.subFolders.push(subFolder);
        }
        if (subFolder && !subFolder.fileIds.includes(file.id)) {
            subFolder.fileIds.push(file.id);
        }
    });
    return folderTemplates.map((template)=>templateMap.get(template.id));
};
const mapApiNodeToNested = (node, parentId)=>({
        id: node.id,
        name: node.name,
        fileIds: node.fileIds,
        parentId,
        relativePath: node.path,
        children: node.children.map((child)=>mapApiNodeToNested(child, node.id))
    });
const buildFoldersFromApi = (nodes)=>{
    const nodeMap = new Map(nodes.map((node)=>[
            node.id,
            node
        ]));
    return folderTemplates.map((template)=>{
        const serverNode = nodeMap.get(template.id);
        const relativePath = serverNode?.path ?? template.relativePath ?? template.name;
        return {
            ...template,
            relativePath,
            rootFileIds: serverNode?.fileIds ?? [],
            subFolders: serverNode ? serverNode.children.map((child)=>mapApiNodeToNested(child, null)) : []
        };
    });
};
const AllFilesGalleryPage = ()=>{
    _s();
    var _s1 = __turbopack_context__.k.signature();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { setSuppressLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LoadingContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLoading"])();
    const [files, setFiles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialFiles);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [currentUser, setCurrentUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [searchTerm, setSearchTerm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    // Connect LoadingContext suppressor to FileProgress hook
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AllFilesGalleryPage.useEffect": ()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FileProgress$2f$useFileProgress$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setLoadingContextSuppressor"])(setSuppressLoading);
            return ({
                "AllFilesGalleryPage.useEffect": ()=>{
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FileProgress$2f$useFileProgress$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setLoadingContextSuppressor"])({
                        "AllFilesGalleryPage.useEffect": ()=>{}
                    }["AllFilesGalleryPage.useEffect"]);
                }
            })["AllFilesGalleryPage.useEffect"];
        }
    }["AllFilesGalleryPage.useEffect"], [
        setSuppressLoading
    ]);
    const [viewMode, setViewMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("grid");
    const [filterType, setFilterType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("all");
    const [showFilterMenu, setShowFilterMenu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [sortBy, setSortBy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("date");
    const [sortDirection, setSortDirection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("desc");
    const [selectedFiles, setSelectedFiles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [showLightbox, setShowLightbox] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [lightboxIndex, setLightboxIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [showFavoritesOnly, setShowFavoritesOnly] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedCategory, setSelectedCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("all");
    const [folders, setFolders] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "AllFilesGalleryPage.useState": ()=>createInitialFolders(initialFiles)
    }["AllFilesGalleryPage.useState"]);
    const [activeFolderId, setActiveFolderId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Breadcrumb path: array of folder IDs representing the navigation path
    const [folderPath, setFolderPath] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isCreatingSubFolder, setIsCreatingSubFolder] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [subFolderDraftName, setSubFolderDraftName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [editingSubFolderId, setEditingSubFolderId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [editingSubFolderValue, setEditingSubFolderValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [editingFolderId, setEditingFolderId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [editingFolderValue, setEditingFolderValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    // Drag and drop state
    const [draggingFileId, setDraggingFileId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [dragOverFolderId, setDragOverFolderId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Mobile and feature state
    const [isMobile, setIsMobile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showMobileMenu, setShowMobileMenu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showUploadModal, setShowUploadModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showAIDropZone, setShowAIDropZone] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [aiDragOver, setAIDragOver] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [aiProcessingFiles, setAIProcessingFiles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [showShareModal, setShowShareModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [shareFileId, setShareFileId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showLineSendModal, setShowLineSendModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [lineSendUserId, setLineSendUserId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [lineSendStatus, setLineSendStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("idle");
    const [lineSendError, setLineSendError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    // LINE Groups management
    const [lineGroups, setLineGroups] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [showLineGroupModal, setShowLineGroupModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [newGroupId, setNewGroupId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [newGroupName, setNewGroupName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [selectedLineGroup, setSelectedLineGroup] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isGlobalDropActive, setIsGlobalDropActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showHeaderMenu, setShowHeaderMenu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showHeaderSearch, setShowHeaderSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [folderActionSheet, setFolderActionSheet] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        isOpen: false,
        folderId: null,
        folderName: ''
    });
    const [fileActionSheet, setFileActionSheet] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        isOpen: false,
        fileId: null,
        fileName: '',
        fileIndex: -1
    });
    const [isFileSelectionMode, setIsFileSelectionMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const longPressTimerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const fileLongPressRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Confirmation modal state
    const [confirmModal, setConfirmModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        isOpen: false,
        type: 'delete',
        title: '',
        message: '',
        onConfirm: {
            "AllFilesGalleryPage.useState": ()=>{}
        }["AllFilesGalleryPage.useState"]
    });
    const fileInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const cameraInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isMountedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(true);
    const thumbnailGenerationRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new Set());
    // Load LINE groups from localStorage on mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AllFilesGalleryPage.useEffect": ()=>{
            const savedGroups = localStorage.getItem('lineGroups');
            if (savedGroups) {
                try {
                    const parsed = JSON.parse(savedGroups);
                    setLineGroups(parsed);
                    // Set first group as default if exists
                    if (parsed.length > 0) {
                        setSelectedLineGroup(parsed[0].id);
                    }
                } catch (e) {
                    console.error('Error parsing LINE groups:', e);
                }
            } else {
                // Add default group (กล่องแชท AI)
                const defaultGroups = [
                    {
                        id: "C31a793e94485a393a7eb55cb36e6ecfd",
                        name: "กล่องแชท AI"
                    }
                ];
                setLineGroups(defaultGroups);
                setSelectedLineGroup(defaultGroups[0].id);
                localStorage.setItem('lineGroups', JSON.stringify(defaultGroups));
            }
        }
    }["AllFilesGalleryPage.useEffect"], []);
    // Save LINE groups to localStorage when changed
    const saveLineGroups = (groups)=>{
        setLineGroups(groups);
        localStorage.setItem('lineGroups', JSON.stringify(groups));
    };
    // Add new LINE group
    const addLineGroup = ()=>{
        if (!newGroupId.trim() || !newGroupName.trim()) return;
        const newGroups = [
            ...lineGroups,
            {
                id: newGroupId.trim(),
                name: newGroupName.trim()
            }
        ];
        saveLineGroups(newGroups);
        setNewGroupId("");
        setNewGroupName("");
        setSelectedLineGroup(newGroupId.trim());
    };
    // Remove LINE group
    const removeLineGroup = (groupId)=>{
        const newGroups = lineGroups.filter((g)=>g.id !== groupId);
        saveLineGroups(newGroups);
        if (selectedLineGroup === groupId && newGroups.length > 0) {
            setSelectedLineGroup(newGroups[0].id);
        }
    };
    // File progress tracking for upload/download animations
    const { items: progressItems, uploadFile: trackUpload, downloadFile: trackDownload, cancelTransfer, dismissItem, clearCompleted, updateItem } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FileProgress$2f$useFileProgress$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFileProgress"])({
        onUploadComplete: {
            "AllFilesGalleryPage.useFileProgress": (id)=>{
                console.log("Upload complete:", id);
                loadMarketingFolders();
            }
        }["AllFilesGalleryPage.useFileProgress"],
        onDownloadComplete: {
            "AllFilesGalleryPage.useFileProgress": (id)=>{
                console.log("Download complete:", id);
            }
        }["AllFilesGalleryPage.useFileProgress"],
        onError: {
            "AllFilesGalleryPage.useFileProgress": (id, error)=>{
                console.error("Transfer error:", id, error);
            }
        }["AllFilesGalleryPage.useFileProgress"]
    });
    // Generate video thumbnail using canvas
    const generateVideoThumbnail = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AllFilesGalleryPage.useCallback[generateVideoThumbnail]": async (file)=>{
            return new Promise({
                "AllFilesGalleryPage.useCallback[generateVideoThumbnail]": (resolve)=>{
                    const video = document.createElement('video');
                    video.crossOrigin = 'anonymous';
                    video.muted = true;
                    video.preload = 'metadata';
                    const cleanup = {
                        "AllFilesGalleryPage.useCallback[generateVideoThumbnail].cleanup": ()=>{
                            video.removeEventListener('loadeddata', handleLoadedData);
                            video.removeEventListener('error', handleError);
                            video.removeEventListener('loadedmetadata', handleMetadata);
                            video.src = '';
                            video.load();
                        }
                    }["AllFilesGalleryPage.useCallback[generateVideoThumbnail].cleanup"];
                    const handleError = {
                        "AllFilesGalleryPage.useCallback[generateVideoThumbnail].handleError": ()=>{
                            console.warn(`Failed to load video for thumbnail: ${file.name}`);
                            cleanup();
                            resolve(null);
                        }
                    }["AllFilesGalleryPage.useCallback[generateVideoThumbnail].handleError"];
                    const handleMetadata = {
                        "AllFilesGalleryPage.useCallback[generateVideoThumbnail].handleMetadata": ()=>{
                            // Seek to 1 second or 10% of video duration for a better frame
                            const seekTime = Math.min(1, video.duration * 0.1);
                            video.currentTime = seekTime;
                        }
                    }["AllFilesGalleryPage.useCallback[generateVideoThumbnail].handleMetadata"];
                    const handleLoadedData = {
                        "AllFilesGalleryPage.useCallback[generateVideoThumbnail].handleLoadedData": ()=>{
                            try {
                                const canvas = document.createElement('canvas');
                                // Use reasonable dimensions for thumbnail
                                canvas.width = 640;
                                canvas.height = 360;
                                const ctx = canvas.getContext('2d');
                                if (!ctx) {
                                    cleanup();
                                    resolve(null);
                                    return;
                                }
                                // Calculate aspect ratio to maintain proportions
                                const videoAspect = video.videoWidth / video.videoHeight;
                                const canvasAspect = canvas.width / canvas.height;
                                let drawWidth = canvas.width;
                                let drawHeight = canvas.height;
                                let offsetX = 0;
                                let offsetY = 0;
                                if (videoAspect > canvasAspect) {
                                    drawHeight = canvas.width / videoAspect;
                                    offsetY = (canvas.height - drawHeight) / 2;
                                } else {
                                    drawWidth = canvas.height * videoAspect;
                                    offsetX = (canvas.width - drawWidth) / 2;
                                }
                                // Fill background with dark color
                                ctx.fillStyle = '#1e1b4b';
                                ctx.fillRect(0, 0, canvas.width, canvas.height);
                                // Draw video frame
                                ctx.drawImage(video, offsetX, offsetY, drawWidth, drawHeight);
                                // Convert to blob and upload
                                canvas.toBlob({
                                    "AllFilesGalleryPage.useCallback[generateVideoThumbnail].handleLoadedData": async (blob)=>{
                                        if (!blob) {
                                            cleanup();
                                            resolve(null);
                                            return;
                                        }
                                        try {
                                            const formData = new FormData();
                                            formData.append('videoPath', file.url);
                                            formData.append('thumbnail', blob, 'thumbnail.jpg');
                                            const response = await fetch('/api/video-thumbnail', {
                                                method: 'POST',
                                                body: formData
                                            });
                                            if (response.ok) {
                                                const data = await response.json();
                                                cleanup();
                                                resolve(data.thumbnailUrl);
                                            } else {
                                                cleanup();
                                                resolve(null);
                                            }
                                        } catch (error) {
                                            console.error('Failed to upload thumbnail:', error);
                                            cleanup();
                                            resolve(null);
                                        }
                                    }
                                }["AllFilesGalleryPage.useCallback[generateVideoThumbnail].handleLoadedData"], 'image/jpeg', 0.85);
                            } catch (error) {
                                console.error('Failed to generate thumbnail:', error);
                                cleanup();
                                resolve(null);
                            }
                        }
                    }["AllFilesGalleryPage.useCallback[generateVideoThumbnail].handleLoadedData"];
                    video.addEventListener('loadedmetadata', handleMetadata);
                    video.addEventListener('loadeddata', handleLoadedData);
                    video.addEventListener('error', handleError);
                    // Set timeout to prevent hanging
                    setTimeout({
                        "AllFilesGalleryPage.useCallback[generateVideoThumbnail]": ()=>{
                            if (!video.videoWidth) {
                                cleanup();
                                resolve(null);
                            }
                        }
                    }["AllFilesGalleryPage.useCallback[generateVideoThumbnail]"], 10000);
                    video.src = file.url;
                    video.load();
                }
            }["AllFilesGalleryPage.useCallback[generateVideoThumbnail]"]);
        }
    }["AllFilesGalleryPage.useCallback[generateVideoThumbnail]"], []);
    // Generate thumbnails for videos that need them
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AllFilesGalleryPage.useEffect": ()=>{
            const videosNeedingThumbnails = files.filter({
                "AllFilesGalleryPage.useEffect.videosNeedingThumbnails": (file)=>(file.type === 'video' || file.type === 'clip') && file.needsThumbnailGeneration && !thumbnailGenerationRef.current.has(file.id)
            }["AllFilesGalleryPage.useEffect.videosNeedingThumbnails"]);
            if (videosNeedingThumbnails.length === 0) return;
            const generateThumbnails = {
                "AllFilesGalleryPage.useEffect.generateThumbnails": async ()=>{
                    for (const file of videosNeedingThumbnails){
                        if (!isMountedRef.current) break;
                        // Mark as being processed
                        thumbnailGenerationRef.current.add(file.id);
                        const thumbnailUrl = await generateVideoThumbnail(file);
                        if (thumbnailUrl && isMountedRef.current) {
                            setFiles({
                                "AllFilesGalleryPage.useEffect.generateThumbnails": (prev)=>prev.map({
                                        "AllFilesGalleryPage.useEffect.generateThumbnails": (f)=>f.id === file.id ? {
                                                ...f,
                                                thumbnail: thumbnailUrl,
                                                needsThumbnailGeneration: false
                                            } : f
                                    }["AllFilesGalleryPage.useEffect.generateThumbnails"])
                            }["AllFilesGalleryPage.useEffect.generateThumbnails"]);
                        }
                    }
                }
            }["AllFilesGalleryPage.useEffect.generateThumbnails"];
            // Start thumbnail generation with a small delay to not block initial render
            const timeoutId = setTimeout(generateThumbnails, 500);
            return ({
                "AllFilesGalleryPage.useEffect": ()=>clearTimeout(timeoutId)
            })["AllFilesGalleryPage.useEffect"];
        }
    }["AllFilesGalleryPage.useEffect"], [
        files,
        generateVideoThumbnail
    ]);
    const loadMarketingFolders = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AllFilesGalleryPage.useCallback[loadMarketingFolders]": async (signal)=>{
            if (isMountedRef.current) {
                setIsLoading(true);
            }
            try {
                const response = await fetch("/api/marketing-folders", {
                    signal
                });
                if (!response.ok) {
                    throw new Error(`Failed to load marketing folders: ${response.status}`);
                }
                const data = await response.json();
                if (!isMountedRef.current) return;
                const folderData = Array.isArray(data.folders) ? data.folders : [];
                const fileData = Array.isArray(data.files) ? data.files : initialFiles;
                setFiles(fileData);
                setFolders(buildFoldersFromApi(folderData));
            } catch (error) {
                console.error("Unable to load marketing folders", error);
            } finally{
                if (isMountedRef.current) {
                    setIsLoading(false);
                }
            }
        }
    }["AllFilesGalleryPage.useCallback[loadMarketingFolders]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AllFilesGalleryPage.useEffect": ()=>{
            isMountedRef.current = true;
            const controller = new AbortController();
            loadMarketingFolders(controller.signal);
            return ({
                "AllFilesGalleryPage.useEffect": ()=>{
                    controller.abort();
                    isMountedRef.current = false;
                }
            })["AllFilesGalleryPage.useEffect"];
        }
    }["AllFilesGalleryPage.useEffect"], [
        loadMarketingFolders
    ]);
    // Detect mobile device
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AllFilesGalleryPage.useEffect": ()=>{
            const checkMobile = {
                "AllFilesGalleryPage.useEffect.checkMobile": ()=>{
                    setIsMobile(window.innerWidth < 768 || 'ontouchstart' in window);
                }
            }["AllFilesGalleryPage.useEffect.checkMobile"];
            checkMobile();
            window.addEventListener('resize', checkMobile);
            return ({
                "AllFilesGalleryPage.useEffect": ()=>window.removeEventListener('resize', checkMobile)
            })["AllFilesGalleryPage.useEffect"];
        }
    }["AllFilesGalleryPage.useEffect"], []);
    // Handle hardware back button (popstate) for mobile
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AllFilesGalleryPage.useEffect": ()=>{
            // Push initial state when entering a folder
            if (activeFolderId) {
                window.history.pushState({
                    folderId: activeFolderId,
                    path: folderPath
                }, '');
            }
            const handlePopState = {
                "AllFilesGalleryPage.useEffect.handlePopState": (event)=>{
                    // Close any open modals first
                    if (showLightbox) {
                        setShowLightbox(false);
                        window.history.pushState({
                            folderId: activeFolderId,
                            path: folderPath
                        }, '');
                        return;
                    }
                    if (showShareModal) {
                        setShowShareModal(false);
                        setShareFileId(null);
                        window.history.pushState({
                            folderId: activeFolderId,
                            path: folderPath
                        }, '');
                        return;
                    }
                    if (isFileSelectionMode) {
                        setIsFileSelectionMode(false);
                        setSelectedFiles([]);
                        window.history.pushState({
                            folderId: activeFolderId,
                            path: folderPath
                        }, '');
                        return;
                    }
                    // Navigate back through folders
                    if (activeFolderId) {
                        if (folderPath.length > 0) {
                            // Go back one level in nested folders
                            setFolderPath({
                                "AllFilesGalleryPage.useEffect.handlePopState": (prev)=>prev.slice(0, -1)
                            }["AllFilesGalleryPage.useEffect.handlePopState"]);
                            window.history.pushState({
                                folderId: activeFolderId,
                                path: folderPath.slice(0, -1)
                            }, '');
                        } else {
                            // Go back to main folder list
                            setActiveFolderId(null);
                            setFolderPath([]);
                        }
                    } else {
                        // At root level, go back to home
                        router.push('/home');
                    }
                }
            }["AllFilesGalleryPage.useEffect.handlePopState"];
            window.addEventListener('popstate', handlePopState);
            return ({
                "AllFilesGalleryPage.useEffect": ()=>window.removeEventListener('popstate', handlePopState)
            })["AllFilesGalleryPage.useEffect"];
        }
    }["AllFilesGalleryPage.useEffect"], [
        activeFolderId,
        folderPath,
        showLightbox,
        showShareModal,
        isFileSelectionMode,
        router
    ]);
    // Categories สำหรับ filter
    const categories = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AllFilesGalleryPage.useMemo[categories]": ()=>{
            const cats = new Set(files.map({
                "AllFilesGalleryPage.useMemo[categories]": (f)=>f.category
            }["AllFilesGalleryPage.useMemo[categories]"]));
            return [
                "all",
                ...Array.from(cats)
            ];
        }
    }["AllFilesGalleryPage.useMemo[categories]"], [
        files
    ]);
    const activeFolder = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AllFilesGalleryPage.useMemo[activeFolder]": ()=>{
            if (!activeFolderId) return null;
            return folders.find({
                "AllFilesGalleryPage.useMemo[activeFolder]": (folder)=>folder.id === activeFolderId
            }["AllFilesGalleryPage.useMemo[activeFolder]"]) || null;
        }
    }["AllFilesGalleryPage.useMemo[activeFolder]"], [
        activeFolderId,
        folders
    ]);
    // Get the current nested folder based on breadcrumb path
    const currentNestedFolder = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AllFilesGalleryPage.useMemo[currentNestedFolder]": ()=>{
            if (!activeFolder || folderPath.length === 0) return null;
            let current = null;
            let searchIn = activeFolder.subFolders;
            for (const folderId of folderPath){
                current = searchIn.find({
                    "AllFilesGalleryPage.useMemo[currentNestedFolder]": (f)=>f.id === folderId
                }["AllFilesGalleryPage.useMemo[currentNestedFolder]"]) || null;
                if (!current) return null;
                searchIn = current.children;
            }
            return current;
        }
    }["AllFilesGalleryPage.useMemo[currentNestedFolder]"], [
        activeFolder,
        folderPath
    ]);
    // Get folders to display (either root sub folders or children of current nested folder)
    const displayFolders = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AllFilesGalleryPage.useMemo[displayFolders]": ()=>{
            if (!activeFolder) return [];
            if (folderPath.length === 0) return activeFolder.subFolders;
            if (currentNestedFolder) return currentNestedFolder.children;
            return [];
        }
    }["AllFilesGalleryPage.useMemo[displayFolders]"], [
        activeFolder,
        folderPath,
        currentNestedFolder
    ]);
    // Check if we can upload files (at leaf folders OR at main folder root with no subfolders)
    const canUploadFiles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AllFilesGalleryPage.useMemo[canUploadFiles]": ()=>{
            // Case 1: We're inside a nested folder - check if it's a leaf
            if (currentNestedFolder) {
                return isLeafFolder(currentNestedFolder);
            }
            // Case 2: We're at the root of a main folder (no nested folder selected)
            // Allow upload if the main folder has no subfolders (it's essentially a leaf)
            if (activeFolder && folderPath.length === 0) {
                return activeFolder.subFolders.length === 0;
            }
            return false;
        }
    }["AllFilesGalleryPage.useMemo[canUploadFiles]"], [
        currentNestedFolder,
        activeFolder,
        folderPath
    ]);
    // Build breadcrumb items for display
    const breadcrumbItems = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AllFilesGalleryPage.useMemo[breadcrumbItems]": ()=>{
            if (!activeFolder) return [];
            const items = [
                {
                    id: activeFolder.id,
                    name: activeFolder.name,
                    isRoot: true
                }
            ];
            let searchIn = activeFolder.subFolders;
            for (const folderId of folderPath){
                const folder = searchIn.find({
                    "AllFilesGalleryPage.useMemo[breadcrumbItems].folder": (f)=>f.id === folderId
                }["AllFilesGalleryPage.useMemo[breadcrumbItems].folder"]);
                if (folder) {
                    items.push({
                        id: folder.id,
                        name: folder.name
                    });
                    searchIn = folder.children;
                }
            }
            return items;
        }
    }["AllFilesGalleryPage.useMemo[breadcrumbItems]"], [
        activeFolder,
        folderPath
    ]);
    const visibleFileIdSet = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AllFilesGalleryPage.useMemo[visibleFileIdSet]": ()=>{
            // No folder selected - show NO files (only show folder grid)
            if (!activeFolder) {
                return new Set();
            }
            // If we're at a nested folder that is a leaf, show only its files
            if (currentNestedFolder && isLeafFolder(currentNestedFolder)) {
                return new Set(currentNestedFolder.fileIds);
            }
            // If we're inside a folder but it has subfolders, show no files (navigate deeper first)
            if (currentNestedFolder && !isLeafFolder(currentNestedFolder)) {
                return new Set();
            }
            // At root of main folder - check if it has subfolders
            if (activeFolder.subFolders.length > 0) {
                // Has subfolders, don't show files - user needs to navigate deeper
                return new Set();
            }
            // At root of main folder with no subfolders - show root files only
            return new Set(activeFolder.rootFileIds);
        }
    }["AllFilesGalleryPage.useMemo[visibleFileIdSet]"], [
        activeFolder,
        currentNestedFolder
    ]);
    // Filtered และ Sorted files
    const filteredFiles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AllFilesGalleryPage.useMemo[filteredFiles]": ()=>{
            let result = files.filter({
                "AllFilesGalleryPage.useMemo[filteredFiles].result": (file)=>visibleFileIdSet.has(file.id)
            }["AllFilesGalleryPage.useMemo[filteredFiles].result"]);
            // Filter by type
            if (filterType !== "all") {
                result = result.filter({
                    "AllFilesGalleryPage.useMemo[filteredFiles]": (f)=>f.type === filterType
                }["AllFilesGalleryPage.useMemo[filteredFiles]"]);
            }
            // Filter by category
            if (selectedCategory !== "all") {
                result = result.filter({
                    "AllFilesGalleryPage.useMemo[filteredFiles]": (f)=>f.category === selectedCategory
                }["AllFilesGalleryPage.useMemo[filteredFiles]"]);
            }
            // Filter favorites
            if (showFavoritesOnly) {
                result = result.filter({
                    "AllFilesGalleryPage.useMemo[filteredFiles]": (f)=>f.favorite
                }["AllFilesGalleryPage.useMemo[filteredFiles]"]);
            }
            // Search
            if (searchTerm) {
                const search = searchTerm.toLowerCase();
                result = result.filter({
                    "AllFilesGalleryPage.useMemo[filteredFiles]": (f)=>f.name.toLowerCase().includes(search) || f.tags.some({
                            "AllFilesGalleryPage.useMemo[filteredFiles]": (t)=>t.toLowerCase().includes(search)
                        }["AllFilesGalleryPage.useMemo[filteredFiles]"]) || f.category.toLowerCase().includes(search)
                }["AllFilesGalleryPage.useMemo[filteredFiles]"]);
            }
            // Sort
            result.sort({
                "AllFilesGalleryPage.useMemo[filteredFiles]": (a, b)=>{
                    let comparison = 0;
                    switch(sortBy){
                        case "date":
                            comparison = new Date(b.date).getTime() - new Date(a.date).getTime();
                            break;
                        case "name":
                            comparison = a.name.localeCompare(b.name);
                            break;
                        case "size":
                            comparison = parseFloat(a.size) - parseFloat(b.size);
                            break;
                        case "views":
                            comparison = a.views - b.views;
                            break;
                    }
                    return sortDirection === "asc" ? comparison : -comparison;
                }
            }["AllFilesGalleryPage.useMemo[filteredFiles]"]);
            return result;
        }
    }["AllFilesGalleryPage.useMemo[filteredFiles]"], [
        files,
        filterType,
        selectedCategory,
        showFavoritesOnly,
        searchTerm,
        sortBy,
        sortDirection,
        visibleFileIdSet
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AllFilesGalleryPage.useEffect": ()=>{
            const checkAuth = {
                "AllFilesGalleryPage.useEffect.checkAuth": ()=>{
                    const userStr = localStorage.getItem("user");
                    if (!userStr) {
                        window.location.href = "/login";
                        return;
                    }
                    const user = JSON.parse(userStr);
                    setCurrentUser(user);
                }
            }["AllFilesGalleryPage.useEffect.checkAuth"];
            checkAuth();
        }
    }["AllFilesGalleryPage.useEffect"], []);
    const handleFolderSelect = (folderId)=>{
        setSelectedFiles([]);
        setShowLightbox(false);
        if (folderId === activeFolderId) {
            setActiveFolderId(null);
            setFolderPath([]);
        } else {
            setActiveFolderId(folderId);
            setFolderPath([]);
        }
        setIsCreatingSubFolder(false);
        setSubFolderDraftName("");
        setEditingSubFolderId(null);
        setEditingSubFolderValue("");
        setSelectedCategory("all");
    };
    // Navigate into a nested folder
    const handleNestedFolderSelect = (folderId)=>{
        setFolderPath((prev)=>[
                ...prev,
                folderId
            ]);
        setIsCreatingSubFolder(false);
        setSubFolderDraftName("");
        setEditingSubFolderId(null);
    };
    // Navigate to a specific breadcrumb level
    const handleBreadcrumbClick = (index)=>{
        if (index === 0) {
            // Clicking on root folder name
            setFolderPath([]);
        } else {
            // Clicking on a nested folder in breadcrumb
            setFolderPath((prev)=>prev.slice(0, index));
        }
        setIsCreatingSubFolder(false);
    };
    // Helper to recursively add a folder to nested structure
    const addFolderToNested = (folders, parentPath, newFolder)=>{
        if (parentPath.length === 0) {
            return [
                ...folders,
                newFolder
            ];
        }
        const [currentId, ...restPath] = parentPath;
        return folders.map((folder)=>{
            if (folder.id === currentId) {
                return {
                    ...folder,
                    children: addFolderToNested(folder.children, restPath, newFolder)
                };
            }
            return folder;
        });
    };
    // Helper to recursively delete a folder from nested structure
    const deleteFolderFromNested = (folders, targetId)=>{
        return folders.filter((folder)=>folder.id !== targetId).map((folder)=>({
                ...folder,
                children: deleteFolderFromNested(folder.children, targetId)
            }));
    };
    // Helper to recursively update a folder name in nested structure
    const updateFolderNameInNested = (folders, targetId, newName)=>{
        return folders.map((folder)=>{
            if (folder.id === targetId) {
                return {
                    ...folder,
                    name: newName
                };
            }
            return {
                ...folder,
                children: updateFolderNameInNested(folder.children, targetId, newName)
            };
        });
    };
    const getCurrentParentPath = ()=>{
        if (!activeFolder) return null;
        const segments = [
            activeFolder.name
        ];
        let searchIn = activeFolder.subFolders;
        for (const folderId of folderPath){
            const match = searchIn.find((item)=>item.id === folderId);
            if (!match) break;
            segments.push(match.name);
            searchIn = match.children;
        }
        return segments.join("/");
    };
    const handleCreateSubFolder = async ()=>{
        if (!activeFolderId) return;
        const trimmedName = subFolderDraftName.trim();
        if (!trimmedName) return;
        const folder = folders.find((item)=>item.id === activeFolderId);
        if (!folder) return;
        const currentLevelFolders = folderPath.length === 0 ? folder.subFolders : currentNestedFolder?.children || [];
        const hasDuplicate = currentLevelFolders.some((sub)=>sub.name.toLowerCase() === trimmedName.toLowerCase());
        if (hasDuplicate) {
            alert("This folder name is already in use at this level.");
            return;
        }
        const parentPath = getCurrentParentPath();
        if (!parentPath) return;
        try {
            const response = await fetch("/api/marketing-folders", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    parentPath,
                    folderName: trimmedName
                })
            });
            if (!response.ok) {
                const errorBody = await response.json().catch(()=>null);
                throw new Error(errorBody?.error || `ไม่สามารถสร้างโฟลเดอร์ได้ (รหัส ${response.status})`);
            }
            await loadMarketingFolders();
            setSubFolderDraftName("");
            setIsCreatingSubFolder(false);
        } catch (error) {
            console.error("Failed to create subfolder", error);
            if (error instanceof Error) {
                alert(error.message);
            } else {
                alert("เกิดข้อผิดพลาดขณะสร้างโฟลเดอร์");
            }
        }
    };
    const handleDeleteSubFolder = async (subFolderId)=>{
        if (!activeFolderId) return;
        const folderToDelete = displayFolders.find((f)=>f.id === subFolderId);
        if (!folderToDelete) return;
        if (folderToDelete.fileIds.length > 0 || folderToDelete.children.length > 0) {
            showConfirmation({
                type: 'warning',
                title: 'ไม่สามารถลบได้',
                message: 'กรุณาลบไฟล์และโฟลเดอร์ย่อยทั้งหมดก่อนลบโฟลเดอร์นี้',
                confirmText: 'ตกลง',
                onConfirm: closeConfirmModal
            });
            return;
        }
        showConfirmation({
            type: 'delete',
            title: 'ยืนยันการลบโฟลเดอร์',
            message: 'คุณต้องการลบโฟลเดอร์นี้หรือไม่?',
            itemName: folderToDelete.name,
            confirmText: 'ลบโฟลเดอร์',
            cancelText: 'ยกเลิก',
            onConfirm: async ()=>{
                closeConfirmModal();
                const targetPath = folderToDelete.relativePath;
                if (!targetPath) {
                    showConfirmation({
                        type: 'warning',
                        title: 'เกิดข้อผิดพลาด',
                        message: 'ไม่สามารถลบโฟลเดอร์นี้ได้ในขณะนี้',
                        confirmText: 'ตกลง',
                        onConfirm: closeConfirmModal
                    });
                    return;
                }
                try {
                    const response = await fetch("/api/marketing-folders", {
                        method: "DELETE",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            path: targetPath
                        })
                    });
                    if (!response.ok) {
                        const errorBody = await response.json().catch(()=>null);
                        throw new Error(errorBody?.error || `ไม่สามารถลบโฟลเดอร์ได้ (รหัส ${response.status})`);
                    }
                    await loadMarketingFolders();
                    setFolderPath((prev)=>prev.filter((id)=>id !== subFolderId));
                } catch (error) {
                    console.error("Failed to delete subfolder", error);
                    showConfirmation({
                        type: 'warning',
                        title: 'เกิดข้อผิดพลาด',
                        message: error instanceof Error ? error.message : 'เกิดข้อผิดพลาดขณะลบโฟลเดอร์',
                        confirmText: 'ตกลง',
                        onConfirm: closeConfirmModal
                    });
                }
            }
        });
    };
    const handleStartEditSubFolder = (subFolder)=>{
        setEditingSubFolderId(subFolder.id);
        setEditingSubFolderValue(subFolder.name);
    };
    const handleCancelEditSubFolder = ()=>{
        setEditingSubFolderId(null);
        setEditingSubFolderValue("");
    };
    const handleSaveSubFolderName = async (subFolderId)=>{
        if (!activeFolderId) return;
        const trimmedValue = editingSubFolderValue.trim();
        if (!trimmedValue) return;
        const folderToRename = displayFolders.find((sub)=>sub.id === subFolderId);
        if (!folderToRename || !folderToRename.relativePath) {
            alert("ไม่สามารถเปลี่ยนชื่อโฟลเดอร์นี้ได้ในขณะนี้");
            return;
        }
        // Check for duplicates at the current level
        const hasDuplicate = displayFolders.some((sub)=>sub.id !== subFolderId && sub.name.toLowerCase() === trimmedValue.toLowerCase());
        if (hasDuplicate) {
            alert("This folder name is already in use at this level.");
            return;
        }
        try {
            const response = await fetch("/api/marketing-folders", {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    currentPath: folderToRename.relativePath,
                    newName: trimmedValue
                })
            });
            if (!response.ok) {
                const errorBody = await response.json().catch(()=>null);
                throw new Error(errorBody?.error || `ไม่สามารถเปลี่ยนชื่อโฟลเดอร์ได้ (รหัส ${response.status})`);
            }
            const data = await response.json().catch(()=>null);
            const parentSegments = getPathSegments(folderToRename.relativePath).slice(0, -1);
            const fallbackPath = parentSegments.length ? `${parentSegments.join("/")}/${trimmedValue}` : trimmedValue;
            const newPath = data?.path || fallbackPath;
            const newId = getIdFromPath(newPath);
            await loadMarketingFolders();
            setFolderPath((prev)=>prev.map((id)=>id === subFolderId ? newId : id));
            setEditingSubFolderId(null);
            setEditingSubFolderValue("");
        } catch (error) {
            console.error("Failed to rename folder", error);
            if (error instanceof Error) {
                alert(error.message);
            } else {
                alert("เกิดข้อผิดพลาดขณะเปลี่ยนชื่อโฟลเดอร์");
            }
        }
    };
    // Folder edit/delete handlers
    const handleStartEditFolder = (folder)=>{
        setEditingFolderId(folder.id);
        setEditingFolderValue(folder.name);
    };
    const handleCancelEditFolder = ()=>{
        setEditingFolderId(null);
        setEditingFolderValue("");
    };
    const handleSaveFolderName = (folderId)=>{
        const trimmedValue = editingFolderValue.trim();
        if (!trimmedValue) return;
        const hasDuplicate = folders.some((f)=>f.id !== folderId && f.name.toLowerCase() === trimmedValue.toLowerCase());
        if (hasDuplicate) {
            alert("This folder name is already in use.");
            return;
        }
        setFolders((prev)=>prev.map((folder)=>folder.id === folderId ? {
                    ...folder,
                    name: trimmedValue
                } : folder));
        setEditingFolderId(null);
        setEditingFolderValue("");
    };
    const handleDeleteFolder = (folderId)=>{
        const folder = folders.find((f)=>f.id === folderId);
        if (!folder) return;
        const totalFiles = folder.rootFileIds.length + folder.subFolders.reduce((acc, sub)=>acc + getAllFileIds(sub).length, 0);
        if (totalFiles > 0) {
            showConfirmation({
                type: 'warning',
                title: 'ไม่สามารถลบได้',
                message: 'กรุณาย้ายหรือลบไฟล์ทั้งหมดก่อนลบโฟลเดอร์นี้',
                confirmText: 'ตกลง',
                onConfirm: closeConfirmModal
            });
            return;
        }
        showConfirmation({
            type: 'delete',
            title: 'ยืนยันการลบโฟลเดอร์',
            message: 'คุณต้องการลบโฟลเดอร์นี้หรือไม่?',
            itemName: folder.name,
            confirmText: 'ลบโฟลเดอร์',
            cancelText: 'ยกเลิก',
            onConfirm: ()=>{
                closeConfirmModal();
                setFolders((prev)=>prev.filter((f)=>f.id !== folderId));
                if (activeFolderId === folderId) {
                    setActiveFolderId(null);
                    setFolderPath([]);
                }
            }
        });
    };
    // Drag and drop handlers
    const handleDragStart = (e, fileId)=>{
        setDraggingFileId(fileId);
        e.dataTransfer.setData("text/plain", fileId.toString());
        e.dataTransfer.effectAllowed = "move";
    };
    const handleDragEnd = ()=>{
        setDraggingFileId(null);
        setDragOverFolderId(null);
    };
    const handleDragOver = (e, folderId)=>{
        e.preventDefault();
        e.dataTransfer.dropEffect = "move";
        setDragOverFolderId(folderId);
    };
    const handleDragLeave = ()=>{
        setDragOverFolderId(null);
    };
    const handleDropOnFolder = async (e, folderId)=>{
        e.preventDefault();
        e.stopPropagation();
        if (e.dataTransfer.files?.length) {
            const targetFolder = folders.find((folder)=>folder.id === folderId);
            const targetPath = targetFolder?.relativePath ?? targetFolder?.name ?? null;
            setIsGlobalDropActive(false);
            setDraggingFileId(null);
            setDragOverFolderId(null);
            if (!targetPath) {
                alert("เลือกโฟลเดอร์ปลายทางก่อนอัปโหลดไฟล์");
                return;
            }
            try {
                await processUploadedFiles(e.dataTransfer.files, targetPath);
            } catch (error) {
                console.error("Failed to upload files via folder drop", error);
                if (error instanceof Error) {
                    alert(error.message);
                } else {
                    alert("เกิดข้อผิดพลาดขณะอัปโหลดไฟล์");
                }
            }
            return;
        }
        const fileId = parseInt(e.dataTransfer.getData("text/plain"));
        if (isNaN(fileId)) return;
        setFolders((prev)=>prev.map((folder)=>{
                const cleanedFolder = removeFileFromFolder(folder, fileId);
                if (folder.id !== folderId) {
                    return cleanedFolder;
                }
                let updatedSubFolders = cleanedFolder.subFolders;
                if (updatedSubFolders.length === 0) {
                    const newSubFolder = {
                        id: `${folder.id}-default`,
                        name: "Unsorted",
                        fileIds: [
                            fileId
                        ],
                        children: [],
                        parentId: null,
                        relativePath: null
                    };
                    updatedSubFolders = [
                        newSubFolder
                    ];
                } else {
                    updatedSubFolders = addFileToFirstLeaf(updatedSubFolders, fileId);
                }
                return {
                    ...cleanedFolder,
                    subFolders: updatedSubFolders
                };
            }));
        setDraggingFileId(null);
        setDragOverFolderId(null);
    };
    // Helper function to remove file from nested folders
    const removeFileFromNestedFolders = (folders, fileId)=>{
        return folders.map((folder)=>({
                ...folder,
                fileIds: folder.fileIds.filter((id)=>id !== fileId),
                children: removeFileFromNestedFolders(folder.children, fileId)
            }));
    };
    const removeFileFromFolder = (folder, fileId)=>({
            ...folder,
            rootFileIds: folder.rootFileIds.filter((id)=>id !== fileId),
            subFolders: removeFileFromNestedFolders(folder.subFolders, fileId)
        });
    // Helper function to add file to first leaf folder
    const addFileToFirstLeaf = (folders, fileId)=>{
        let added = false;
        const result = folders.map((folder)=>{
            if (added) return folder;
            if (isLeafFolder(folder)) {
                if (!folder.fileIds.includes(fileId)) {
                    added = true;
                    return {
                        ...folder,
                        fileIds: [
                            ...folder.fileIds,
                            fileId
                        ]
                    };
                }
                return folder;
            } else {
                const updatedChildren = addFileToFirstLeaf(folder.children, fileId);
                if (updatedChildren !== folder.children) {
                    added = true;
                    return {
                        ...folder,
                        children: updatedChildren
                    };
                }
                return folder;
            }
        });
        return result;
    };
    // Distribute all files randomly into folders
    const distributeFilesRandomly = ()=>{
        const allFileIds = files.map((f)=>f.id);
        setFolders((prev)=>{
            // First, clear all files from folders
            const clearedFolders = prev.map((folder)=>({
                    ...folder,
                    rootFileIds: [],
                    subFolders: clearFilesFromNestedFolders(folder.subFolders)
                }));
            // Then distribute files randomly
            const shuffledFiles = [
                ...allFileIds
            ].sort(()=>Math.random() - 0.5);
            return clearedFolders.map((folder, folderIndex)=>{
                // Calculate how many files go to this folder
                const filesPerFolder = Math.ceil(shuffledFiles.length / clearedFolders.length);
                const startIdx = folderIndex * filesPerFolder;
                const endIdx = Math.min(startIdx + filesPerFolder, shuffledFiles.length);
                const folderFileIds = shuffledFiles.slice(startIdx, endIdx);
                if (folderFileIds.length === 0) return folder;
                // If no subfolders, create one
                if (folder.subFolders.length === 0) {
                    const newSubFolder = {
                        id: `${folder.id}-default`,
                        name: "Unsorted",
                        fileIds: folderFileIds,
                        children: [],
                        parentId: null,
                        relativePath: null
                    };
                    return {
                        ...folder,
                        subFolders: [
                            newSubFolder
                        ]
                    };
                }
                // Distribute to existing subfolders
                const updatedSubFolders = distributeToSubFolders(folder.subFolders, folderFileIds);
                return {
                    ...folder,
                    subFolders: updatedSubFolders
                };
            });
        });
    };
    // Helper to clear files from nested folders
    const clearFilesFromNestedFolders = (folders)=>{
        return folders.map((folder)=>({
                ...folder,
                fileIds: [],
                children: clearFilesFromNestedFolders(folder.children)
            }));
    };
    // Helper to distribute files to subfolders
    const distributeToSubFolders = (folders, fileIds)=>{
        if (folders.length === 0 || fileIds.length === 0) return folders;
        // Find all leaf folders
        const leafFolders = [];
        const findLeaves = (folderList)=>{
            folderList.forEach((f)=>{
                if (isLeafFolder(f)) leafFolders.push(f);
                else findLeaves(f.children);
            });
        };
        findLeaves(folders);
        if (leafFolders.length === 0) {
            // No leaf folders, add to first folder
            return folders.map((f, i)=>i === 0 ? {
                    ...f,
                    fileIds: [
                        ...f.fileIds,
                        ...fileIds
                    ]
                } : f);
        }
        // Distribute files among leaf folders
        const filesPerLeaf = Math.ceil(fileIds.length / leafFolders.length);
        const fileAssignments = new Map();
        leafFolders.forEach((leaf, idx)=>{
            const startIdx = idx * filesPerLeaf;
            const endIdx = Math.min(startIdx + filesPerLeaf, fileIds.length);
            fileAssignments.set(leaf.id, fileIds.slice(startIdx, endIdx));
        });
        // Apply assignments
        const applyAssignments = (folderList)=>{
            return folderList.map((f)=>{
                const assigned = fileAssignments.get(f.id);
                if (assigned) {
                    return {
                        ...f,
                        fileIds: [
                            ...f.fileIds,
                            ...assigned
                        ]
                    };
                }
                return {
                    ...f,
                    children: applyAssignments(f.children)
                };
            });
        };
        return applyAssignments(folders);
    };
    const getFolderFileCount = (folder)=>folder.rootFileIds.length + folder.subFolders.reduce((acc, sub)=>acc + getAllFileIds(sub).length, 0);
    const toggleFavorite = (id)=>{
        setFiles((prev)=>prev.map((f)=>f.id === id ? {
                    ...f,
                    favorite: !f.favorite
                } : f));
    };
    // Helper function to show confirmation modal
    const showConfirmation = (options)=>{
        setConfirmModal({
            isOpen: true,
            type: options.type || 'delete',
            title: options.title,
            message: options.message,
            itemName: options.itemName,
            onConfirm: options.onConfirm,
            onCancel: options.onCancel,
            confirmText: options.confirmText,
            cancelText: options.cancelText
        });
    };
    const closeConfirmModal = ()=>{
        setConfirmModal((prev)=>({
                ...prev,
                isOpen: false
            }));
    };
    // Delete file handler with confirmation
    const handleDeleteFile = async (fileId)=>{
        const file = files.find((f)=>f.id === fileId);
        if (!file) return;
        showConfirmation({
            type: 'delete',
            title: 'ยืนยันการลบไฟล์',
            message: 'คุณต้องการลบไฟล์นี้หรือไม่?',
            itemName: file.name,
            confirmText: 'ลบไฟล์',
            cancelText: 'ยกเลิก',
            onConfirm: async ()=>{
                closeConfirmModal();
                try {
                    const response = await fetch("/api/marketing-files", {
                        method: "DELETE",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            filePath: file.url
                        })
                    });
                    if (!response.ok) {
                        const errorBody = await response.json().catch(()=>null);
                        throw new Error(errorBody?.error || `ไม่สามารถลบไฟล์ได้ (รหัส ${response.status})`);
                    }
                    await loadMarketingFolders();
                    setSelectedFiles((prev)=>prev.filter((id)=>id !== fileId));
                } catch (error) {
                    console.error("Failed to delete file", error);
                    showConfirmation({
                        type: 'warning',
                        title: 'เกิดข้อผิดพลาด',
                        message: error instanceof Error ? error.message : 'เกิดข้อผิดพลาดขณะลบไฟล์',
                        confirmText: 'ตกลง',
                        onConfirm: closeConfirmModal
                    });
                }
            }
        });
    };
    const toggleSelect = (id)=>{
        setSelectedFiles((prev)=>prev.includes(id) ? prev.filter((i)=>i !== id) : [
                ...prev,
                id
            ]);
    };
    const selectAll = ()=>{
        if (selectedFiles.length === filteredFiles.length) {
            setSelectedFiles([]);
        } else {
            setSelectedFiles(filteredFiles.map((f)=>f.id));
        }
    };
    const openLightbox = (index)=>{
        setLightboxIndex(index);
        setShowLightbox(true);
    };
    const getTypeIcon = (type)=>{
        switch(type){
            case "image":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__["Image"], {
                    className: "w-5 h-5"
                }, void 0, false, {
                    fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                    lineNumber: 1835,
                    columnNumber: 16
                }, ("TURBOPACK compile-time value", void 0));
            case "video":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileVideo$3e$__["FileVideo"], {
                    className: "w-5 h-5"
                }, void 0, false, {
                    fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                    lineNumber: 1837,
                    columnNumber: 16
                }, ("TURBOPACK compile-time value", void 0));
            case "clip":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$film$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Film$3e$__["Film"], {
                    className: "w-5 h-5"
                }, void 0, false, {
                    fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                    lineNumber: 1839,
                    columnNumber: 16
                }, ("TURBOPACK compile-time value", void 0));
            default:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FolderOpen$3e$__["FolderOpen"], {
                    className: "w-5 h-5"
                }, void 0, false, {
                    fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                    lineNumber: 1841,
                    columnNumber: 16
                }, ("TURBOPACK compile-time value", void 0));
        }
    };
    const getTypeColor = (type)=>{
        switch(type){
            case "image":
                return "from-emerald-400 to-teal-500";
            case "video":
                return "from-purple-400 to-indigo-500";
            case "clip":
                return "from-pink-400 to-rose-500";
            default:
                return "from-gray-400 to-gray-500";
        }
    };
    const formatNumber = (num)=>{
        if (num >= 1000000) return (num / 1000000).toFixed(1) + "M";
        if (num >= 1000) return (num / 1000).toFixed(1) + "K";
        return num.toString();
    };
    // Upload files with progress animation
    const processUploadedFilesWithProgress = async (uploadedFiles, targetFolderPath)=>{
        if (!uploadedFiles.length) return;
        const filesArray = Array.from(uploadedFiles);
        // Upload each file with progress tracking
        for (const file of filesArray){
            await trackUpload(file, {
                url: "/api/marketing-files",
                method: "POST",
                fieldName: "files",
                additionalData: {
                    folderPath: targetFolderPath
                }
            });
        }
    };
    // Legacy upload without progress (kept for compatibility)
    const processUploadedFiles = async (uploadedFiles, targetFolderPath)=>{
        if (!uploadedFiles.length) return;
        const formData = new FormData();
        Array.from(uploadedFiles).forEach((file)=>{
            formData.append("files", file);
        });
        formData.append("folderPath", targetFolderPath);
        const response = await fetch("/api/marketing-files", {
            method: "POST",
            body: formData
        });
        if (!response.ok) {
            const errorBody = await response.json().catch(()=>null);
            throw new Error(errorBody?.error || `ไม่สามารถอัปโหลดไฟล์ได้ (รหัส ${response.status})`);
        }
        await loadMarketingFolders();
    };
    const handleFileUpload = async (event)=>{
        const uploadedFiles = event.target.files;
        if (!uploadedFiles?.length) return;
        const targetPath = currentNestedFolder?.relativePath ?? activeFolder?.relativePath ?? null;
        if (!targetPath) {
            alert("กรุณาเปิดโฟลเดอร์ก่อนอัปโหลดไฟล์");
            event.target.value = "";
            return;
        }
        try {
            // Use progress tracking for upload
            await processUploadedFilesWithProgress(uploadedFiles, targetPath);
            setShowUploadModal(false);
        } catch (error) {
            console.error("Failed to upload files", error);
            if (error instanceof Error) {
                alert(error.message);
            } else {
                alert("เกิดข้อผิดพลาดขณะอัปโหลดไฟล์");
            }
        } finally{
            event.target.value = "";
        }
    };
    const handleGlobalDragOver = (e)=>{
        const hasFiles = Array.from(e.dataTransfer.types || []).includes("Files");
        if (!hasFiles) return;
        e.preventDefault();
        e.stopPropagation();
        setIsGlobalDropActive(true);
        e.dataTransfer.dropEffect = "copy";
    };
    const handleGlobalDragLeave = (e)=>{
        if (e.currentTarget !== e.target) return;
        e.preventDefault();
        e.stopPropagation();
        setIsGlobalDropActive(false);
    };
    const handleGlobalDrop = async (e)=>{
        if (!e.dataTransfer.files?.length) {
            setIsGlobalDropActive(false);
            return;
        }
        e.preventDefault();
        e.stopPropagation();
        setIsGlobalDropActive(false);
        setDragOverFolderId(null);
        const targetPath = currentNestedFolder?.relativePath ?? activeFolder?.relativePath ?? null;
        if (!targetPath) {
            alert("กรุณาเปิดโฟลเดอร์ก่อนอัปโหลดไฟล์");
            return;
        }
        try {
            await processUploadedFiles(e.dataTransfer.files, targetPath);
        } catch (error) {
            console.error("Failed to upload files via drop", error);
            if (error instanceof Error) {
                alert(error.message);
            } else {
                alert("เกิดข้อผิดพลาดขณะอัปโหลดไฟล์");
            }
        }
    };
    // Generate video share URL for LINE inline playback
    const generateVideoShareUrl = async (file)=>{
        // For videos, create a special share URL that includes proper meta tags
        if (file.type === 'video' || file.type === 'clip') {
            // Extract the path from the URL (remove domain if present)
            let videoPath = file.url;
            const baseUrl = window.location.origin;
            if (videoPath.startsWith(baseUrl)) {
                videoPath = videoPath.substring(baseUrl.length);
            }
            if (!videoPath.startsWith('/')) {
                videoPath = '/' + videoPath;
            }
            try {
                const response = await fetch('/api/share-video', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        videoPath
                    })
                });
                if (response.ok) {
                    const data = await response.json();
                    return {
                        shareUrl: data.shareUrl,
                        needsTranscoding: data.needsTranscoding || false,
                        fileSizeMB: data.fileSizeMB
                    };
                }
            } catch (error) {
                console.error('Error generating share URL:', error);
            }
        }
        // Fallback to current page URL
        return {
            shareUrl: window.location.href,
            needsTranscoding: false
        };
    };
    // Transcode video for LINE compatibility
    const transcodeForLine = async (file)=>{
        try {
            const response = await fetch('/api/transcode-video', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    videoPath: file.url
                })
            });
            if (!response.ok) return false;
            const data = await response.json();
            if (data.status === 'completed') {
                return true;
            }
            // Poll for completion if processing
            if (data.status === 'processing') {
                const jobId = data.jobId;
                let attempts = 0;
                const maxAttempts = 60; // 5 minutes max
                while(attempts < maxAttempts){
                    await new Promise((resolve)=>setTimeout(resolve, 5000)); // Check every 5 seconds
                    const statusResponse = await fetch(`/api/transcode-video?jobId=${jobId}`);
                    const statusData = await statusResponse.json();
                    if (statusData.status === 'completed') {
                        return true;
                    }
                    if (statusData.status === 'error') {
                        console.error('Transcoding error:', statusData.error);
                        return false;
                    }
                    attempts++;
                }
            }
            return false;
        } catch (error) {
            console.error('Transcode error:', error);
            return false;
        }
    };
    const downloadShareBlob = async (url)=>{
        const response = await fetch(url, {
            cache: "no-store"
        });
        if (!response.ok) {
            throw new Error("Failed to download file for sharing");
        }
        return await response.blob();
    };
    const getAbsoluteMediaUrl = (file)=>{
        if (file.url.startsWith("http")) {
            return file.url;
        }
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        return `${window.location.origin}${file.url}`;
    };
    const guessShareMimeType = (url, type)=>{
        const extension = url.split("?")[0].split("/").pop()?.split(".").pop()?.toLowerCase();
        const map = {
            mp4: "video/mp4",
            mov: "video/quicktime",
            webm: "video/webm",
            mkv: "video/x-matroska",
            jpg: "image/jpeg",
            jpeg: "image/jpeg",
            png: "image/png",
            gif: "image/gif",
            bmp: "image/bmp",
            heic: "image/heic",
            heif: "image/heif"
        };
        if (extension && map[extension]) {
            return map[extension];
        }
        if (type === "image") return "image/jpeg";
        if (type === "video" || type === "clip") return "video/mp4";
        return "application/octet-stream";
    };
    const resolveShareFileName = (file, url)=>{
        if (file.name.includes(".")) {
            return file.name;
        }
        const extension = url.split("?")[0].split("/").pop()?.split(".").pop();
        return extension ? `${file.name}.${extension}` : file.name;
    };
    // Share to LINE handler with video support
    const shareToLine = async (file)=>{
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        let shareUrl;
        if (file.type === 'video' || file.type === 'clip') {
            const result = await generateVideoShareUrl(file);
            shareUrl = result.shareUrl;
            if (result.needsTranscoding) {
                console.log(`Video ${file.name} (${result.fileSizeMB}MB) may need transcoding for optimal LINE playback`);
                transcodeForLine(file).then((success)=>{
                    if (success) {
                        console.log('Transcoding completed for:', file.name);
                    }
                });
            }
        } else {
            shareUrl = window.location.href;
        }
        const shareMessage = `📹 ${file.name} - BJH Bangkok`;
        const encodedShareText = encodeURIComponent(shareMessage);
        const encodedUrl = encodeURIComponent(shareUrl);
        let sharedViaWebShare = false;
        if (typeof navigator !== 'undefined' && navigator.share) {
            try {
                const absoluteUrl = getAbsoluteMediaUrl(file);
                const blob = await downloadShareBlob(absoluteUrl);
                const shareFile = new File([
                    blob
                ], resolveShareFileName(file, absoluteUrl), {
                    type: guessShareMimeType(absoluteUrl, file.type)
                });
                const canShareFiles = !('canShare' in navigator) || navigator.canShare({
                    files: [
                        shareFile
                    ]
                });
                if (canShareFiles) {
                    await navigator.share({
                        title: file.name,
                        files: [
                            shareFile
                        ]
                    });
                    sharedViaWebShare = true;
                }
            } catch (error) {
                console.warn('Web Share failed, falling back to LINE deep link', error);
            }
        }
        if (!sharedViaWebShare) {
            if (isMobile) {
                window.location.href = `line://msg/text/${encodedShareText}%0A${encodedUrl}`;
            } else {
                window.open(`https://social-plugins.line.me/lineit/share?url=${encodedUrl}&text=${encodedShareText}`, '_blank', 'width=500,height=500');
            }
        }
        setShowShareModal(false);
        setShareFileId(null);
    };
    // Share to other platforms
    const shareFile = async (fileId, platform)=>{
        const file = files.find((f)=>f.id === fileId);
        if (!file) return;
        switch(platform){
            case 'line':
                await shareToLine(file);
                break;
            case 'copy':
                {
                    const shareResult = file.type === 'video' || file.type === 'clip' ? await generateVideoShareUrl(file) : {
                        shareUrl: window.location.href
                    };
                    await navigator.clipboard.writeText(shareResult.shareUrl);
                    alert('Link copied to clipboard!');
                    setShowShareModal(false);
                    setShareFileId(null);
                    break;
                }
            case 'native':
                if (navigator.share) {
                    try {
                        const shareResult = file.type === 'video' || file.type === 'clip' ? await generateVideoShareUrl(file) : {
                            shareUrl: window.location.href
                        };
                        await navigator.share({
                            title: file.name,
                            text: `Check out this ${file.type}: ${file.name}`,
                            url: shareResult.shareUrl
                        });
                    } catch (err) {
                        console.log('Share cancelled');
                    }
                }
                setShowShareModal(false);
                setShareFileId(null);
                break;
        }
    };
    // Send video directly to LINE user via Messaging API (plays inline in LINE app)
    const sendVideoToLineUser = async (fileId)=>{
        const file = files.find((f)=>f.id === fileId);
        if (!file) return;
        if (!lineSendUserId.trim()) {
            setLineSendError("กรุณาใส่ LINE User ID");
            return;
        }
        setLineSendStatus("sending");
        setLineSendError("");
        try {
            const response = await fetch('/api/line-send-video', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    videoPath: file.url,
                    lineUserId: lineSendUserId.trim(),
                    videoName: file.name
                })
            });
            const data = await response.json();
            if (data.success) {
                setLineSendStatus("success");
                // Reset after 2 seconds
                setTimeout(()=>{
                    setShowLineSendModal(false);
                    setLineSendUserId("");
                    setLineSendStatus("idle");
                    setShareFileId(null);
                }, 2000);
            } else {
                setLineSendStatus("error");
                setLineSendError(data.error || "ไม่สามารถส่งวิดีโอได้");
            }
        } catch (error) {
            setLineSendStatus("error");
            setLineSendError("เกิดข้อผิดพลาดในการเชื่อมต่อ");
        }
    };
    // Send video directly to LINE Group
    const sendVideoToLineGroup = async (fileId, groupId)=>{
        const file = files.find((f)=>f.id === fileId);
        if (!file) return;
        const targetGroupId = groupId || selectedLineGroup;
        if (!targetGroupId) {
            setLineSendError("กรุณาเลือกกลุ่ม LINE");
            return;
        }
        setLineSendStatus("sending");
        setLineSendError("");
        try {
            const response = await fetch('/api/line-send-video', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    videoPath: file.url,
                    lineGroupId: targetGroupId,
                    videoName: file.name
                })
            });
            const data = await response.json();
            if (data.success) {
                setLineSendStatus("success");
                // Reset after 2 seconds
                setTimeout(()=>{
                    setShowShareModal(false);
                    setShowLineGroupModal(false);
                    setLineSendStatus("idle");
                    setShareFileId(null);
                }, 2000);
            } else {
                setLineSendStatus("error");
                setLineSendError(data.error || "ไม่สามารถส่งวิดีโอได้");
                // Reset after 3 seconds on error
                setTimeout(()=>{
                    setLineSendStatus("idle");
                    setLineSendError("");
                }, 3000);
            }
        } catch (error) {
            setLineSendStatus("error");
            setLineSendError("เกิดข้อผิดพลาดในการเชื่อมต่อ");
            setTimeout(()=>{
                setLineSendStatus("idle");
                setLineSendError("");
            }, 3000);
        }
    };
    // Download file handler with progress animation
    const handleDownloadFile = async (fileId)=>{
        const file = files.find((f)=>f.id === fileId);
        if (!file) return;
        try {
            // Parse file size string to number (e.g., "2.5 MB" -> 2621440)
            const parseSizeToBytes = (sizeStr)=>{
                const match = sizeStr.match(/([\d.]+)\s*(B|KB|MB|GB)/i);
                if (!match) return 0;
                const value = parseFloat(match[1]);
                const unit = match[2].toUpperCase();
                const multipliers = {
                    B: 1,
                    KB: 1024,
                    MB: 1024 * 1024,
                    GB: 1024 * 1024 * 1024
                };
                return Math.round(value * (multipliers[unit] || 1));
            };
            // Use progress tracking for download
            await trackDownload(file.url, file.name, parseSizeToBytes(file.size), {
                saveAs: true
            });
        } catch (error) {
            console.error('Download error:', error);
            // Fallback: open in new tab
            window.open(file.url, '_blank');
        }
    };
    // AI Video Production handlers
    const handleAIDragOver = (e)=>{
        e.preventDefault();
        e.dataTransfer.dropEffect = "copy";
        setAIDragOver(true);
    };
    const handleAIDragLeave = ()=>{
        setAIDragOver(false);
    };
    const handleAIDrop = (e)=>{
        e.preventDefault();
        const fileId = parseInt(e.dataTransfer.getData("text/plain"));
        if (!isNaN(fileId)) {
            // Add to AI processing queue
            setAIProcessingFiles((prev)=>[
                    ...prev,
                    fileId
                ]);
            // Simulate AI processing (in real app, this would call an API)
            setTimeout(()=>{
                alert(`🎬 AI Video Production started for file ID: ${fileId}\n\nYour video will be ready soon!`);
                setAIProcessingFiles((prev)=>prev.filter((id)=>id !== fileId));
            }, 2000);
        }
        setAIDragOver(false);
    };
    // Touch-based file selection for mobile
    const handleTouchSelect = (fileId)=>{
        if (isMobile) {
            toggleSelect(fileId);
        }
    };
    // Video placeholder fallback
    const VIDEO_PLACEHOLDER = "/images/video-placeholder.svg";
    // Thumbnail component with video poster extraction
    const ThumbnailImage = ({ file, className, alt })=>{
        _s1();
        const [imgSrc, setImgSrc] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(file.thumbnail);
        const [hasError, setHasError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
        const videoRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
        const isVideoType = file.type === 'video' || file.type === 'clip';
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
            "AllFilesGalleryPage.ThumbnailImage.useEffect": ()=>{
                setImgSrc(file.thumbnail);
                setHasError(false);
            }
        }["AllFilesGalleryPage.ThumbnailImage.useEffect"], [
            file.thumbnail
        ]);
        const handleError = ()=>{
            setHasError(true);
            setImgSrc(VIDEO_PLACEHOLDER);
        };
        const handleVideoLoad = ()=>{
            // Seek to 1 second for better thumbnail
            if (videoRef.current) {
                videoRef.current.currentTime = 1;
            }
        };
        // สำหรับวิดีโอ - แสดง video element โดยตรงเพื่อดึงเฟรมแรก
        if (isVideoType) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-full h-full bg-gradient-to-br from-slate-800 to-purple-900 overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                        ref: videoRef,
                        src: file.url,
                        muted: true,
                        playsInline: true,
                        preload: "metadata",
                        onLoadedData: handleVideoLoad,
                        className: `${className} w-full h-full object-cover`,
                        style: {
                            pointerEvents: 'none'
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                        lineNumber: 2427,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 flex items-center justify-center pointer-events-none",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-3 rounded-full bg-black/40 backdrop-blur-sm",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                className: "w-6 h-6 text-white fill-white"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                lineNumber: 2440,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                            lineNumber: 2439,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                        lineNumber: 2438,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                lineNumber: 2426,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0));
        }
        // สำหรับรูปภาพ - แสดงทันทีโดยไม่ต้องรอ loading
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative w-full h-full bg-gradient-to-br from-slate-800/50 to-purple-900/50",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: imgSrc,
                alt: alt,
                className: className,
                onError: handleError,
                loading: "eager"
            }, void 0, false, {
                fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                lineNumber: 2450,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
            lineNumber: 2449,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    };
    _s1(ThumbnailImage, "6obzV+h46geD/S8fQZhTs00CBVA=");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: customScrollbarStyle
            }, void 0, false, {
                fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                lineNumber: 2463,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden",
                onDragOver: handleGlobalDragOver,
                onDragEnter: handleGlobalDragOver,
                onDragLeave: handleGlobalDragLeave,
                onDrop: (e)=>void handleGlobalDrop(e),
                children: [
                    isGlobalDropActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "fixed inset-0 z-40 flex items-center justify-center bg-black/50 transition-opacity pointer-events-none",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl bg-gradient-to-r from-purple-600 via-purple-700 to-blue-500 text-white text-responsive-lg font-semibold pointer-events-none",
                            children: "วางไฟล์เพื่ออัพโหลดที่นี่"
                        }, void 0, false, {
                            fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                            lineNumber: 2473,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                        lineNumber: 2472,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 overflow-hidden pointer-events-none",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                lineNumber: 2481,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/30 rounded-full blur-3xl animate-pulse delay-1000"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                lineNumber: 2482,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/20 rounded-full blur-3xl animate-pulse delay-500"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                lineNumber: 2483,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:100px_100px]"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                lineNumber: 2486,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            [
                                {
                                    left: 5,
                                    top: 10,
                                    color: '#8b5cf6',
                                    delay: 0,
                                    duration: 6
                                },
                                {
                                    left: 15,
                                    top: 80,
                                    color: '#ec4899',
                                    delay: 1,
                                    duration: 7
                                },
                                {
                                    left: 25,
                                    top: 30,
                                    color: '#f97316',
                                    delay: 2,
                                    duration: 8
                                },
                                {
                                    left: 35,
                                    top: 60,
                                    color: '#06b6d4',
                                    delay: 3,
                                    duration: 9
                                },
                                {
                                    left: 45,
                                    top: 20,
                                    color: '#8b5cf6',
                                    delay: 4,
                                    duration: 6
                                },
                                {
                                    left: 55,
                                    top: 90,
                                    color: '#ec4899',
                                    delay: 0.5,
                                    duration: 7
                                },
                                {
                                    left: 65,
                                    top: 40,
                                    color: '#f97316',
                                    delay: 1.5,
                                    duration: 8
                                },
                                {
                                    left: 75,
                                    top: 70,
                                    color: '#06b6d4',
                                    delay: 2.5,
                                    duration: 9
                                },
                                {
                                    left: 85,
                                    top: 15,
                                    color: '#8b5cf6',
                                    delay: 3.5,
                                    duration: 6
                                },
                                {
                                    left: 95,
                                    top: 55,
                                    color: '#ec4899',
                                    delay: 4.5,
                                    duration: 7
                                },
                                {
                                    left: 10,
                                    top: 45,
                                    color: '#f97316',
                                    delay: 0.8,
                                    duration: 8
                                },
                                {
                                    left: 20,
                                    top: 75,
                                    color: '#06b6d4',
                                    delay: 1.8,
                                    duration: 9
                                },
                                {
                                    left: 30,
                                    top: 5,
                                    color: '#8b5cf6',
                                    delay: 2.8,
                                    duration: 6
                                },
                                {
                                    left: 40,
                                    top: 85,
                                    color: '#ec4899',
                                    delay: 3.8,
                                    duration: 7
                                },
                                {
                                    left: 50,
                                    top: 35,
                                    color: '#f97316',
                                    delay: 4.2,
                                    duration: 8
                                },
                                {
                                    left: 60,
                                    top: 65,
                                    color: '#06b6d4',
                                    delay: 0.3,
                                    duration: 9
                                },
                                {
                                    left: 70,
                                    top: 25,
                                    color: '#8b5cf6',
                                    delay: 1.3,
                                    duration: 6
                                },
                                {
                                    left: 80,
                                    top: 95,
                                    color: '#ec4899',
                                    delay: 2.3,
                                    duration: 7
                                },
                                {
                                    left: 90,
                                    top: 50,
                                    color: '#f97316',
                                    delay: 3.3,
                                    duration: 8
                                },
                                {
                                    left: 98,
                                    top: 8,
                                    color: '#06b6d4',
                                    delay: 4.8,
                                    duration: 9
                                }
                            ].map((particle, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute w-2 h-2 rounded-full animate-float",
                                    style: {
                                        left: `${particle.left}%`,
                                        top: `${particle.top}%`,
                                        background: `linear-gradient(135deg, ${particle.color}, transparent)`,
                                        animationDelay: `${particle.delay}s`,
                                        animationDuration: `${particle.duration}s`
                                    }
                                }, i, false, {
                                    fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                    lineNumber: 2511,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                        lineNumber: 2479,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative z-10 p-3 md:p-6 pb-20",
                        children: [
                            isFileSelectionMode ? /* File Selection Mode Header */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between mb-4 md:mb-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: selectAll,
                                        className: "flex items-center gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `w-7 h-7 rounded-full border-2 flex items-center justify-center transition-colors ${selectedFiles.length === filteredFiles.length && filteredFiles.length > 0 ? 'bg-white border-white' : 'border-white/70'}`,
                                                children: selectedFiles.length === filteredFiles.length && filteredFiles.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                    className: "w-5 h-5 text-black"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                    lineNumber: 2537,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                lineNumber: 2535,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-white/70 text-sm",
                                                children: "ทั้งหมด"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                lineNumber: 2540,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                        lineNumber: 2531,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-white/70 text-sm",
                                        children: [
                                            "เลือก ",
                                            selectedFiles.length,
                                            " รายการแล้ว"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                        lineNumber: 2544,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>{
                                            setIsFileSelectionMode(false);
                                            setSelectedFiles([]);
                                        },
                                        className: "text-white/70 text-sm px-2 py-1",
                                        children: "ยกเลิก"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                        lineNumber: 2549,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                lineNumber: 2529,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)) : /* Normal Mode Header */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between mb-4 md:mb-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>{
                                                    if (activeFolder) {
                                                        // If in nested folder, go back one level
                                                        if (folderPath.length > 0) {
                                                            setFolderPath((prev)=>prev.slice(0, -1));
                                                        } else {
                                                            // Go back to main folder list
                                                            setActiveFolderId(null);
                                                            setFolderPath([]);
                                                        }
                                                    } else {
                                                        router.push("/home");
                                                    }
                                                },
                                                className: "p-2 md:p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all flex items-center justify-center",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                                    className: "w-5 h-5 md:w-6 md:h-6"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                    lineNumber: 2581,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                lineNumber: 2564,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            activeFolder && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                className: "folder-title font-bold text-white text-sm sm:text-base flex items-center",
                                                children: currentNestedFolder?.name || activeFolder.name
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                lineNumber: 2586,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            !activeFolder && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                className: "hidden md:block text-lg font-semibold text-white/90 flex items-center",
                                                children: "อัลบั้มทั้งหมด"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                lineNumber: 2593,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                        lineNumber: 2563,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-1 sm:gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setShowUploadModal(true),
                                                className: "p-2 md:p-2.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all hover:scale-105 flex items-center justify-center",
                                                title: "อัพโหลดไฟล์",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                    className: "w-5 h-5 md:w-6 md:h-6"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                    lineNumber: 2607,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                lineNumber: 2602,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setShowHeaderSearch(!showHeaderSearch),
                                                className: `p-2 md:p-2.5 rounded-full transition-all flex items-center justify-center ${showHeaderSearch ? 'bg-purple-500/30 text-purple-300' : 'bg-white/10 hover:bg-white/20 text-white'}`,
                                                title: "ค้นหา",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                                    className: "w-5 h-5 md:w-6 md:h-6"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                    lineNumber: 2616,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                lineNumber: 2611,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>setShowHeaderMenu(!showHeaderMenu),
                                                        className: `p-2 md:p-2.5 rounded-full transition-all flex items-center justify-center ${showHeaderMenu ? 'bg-purple-500/30 text-purple-300' : 'bg-white/10 hover:bg-white/20 text-white'}`,
                                                        title: "เมนู",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2d$vertical$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreVertical$3e$__["MoreVertical"], {
                                                            className: "w-5 h-5 md:w-6 md:h-6"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                            lineNumber: 2626,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                        lineNumber: 2621,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    showHeaderMenu && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "fixed inset-0 z-40",
                                                                onClick: ()=>setShowHeaderMenu(false)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                                lineNumber: 2633,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "absolute right-0 top-full mt-2 w-56 bg-slate-800/95 backdrop-blur-xl border border-purple-500/30 rounded-xl shadow-2xl overflow-hidden z-50 animate-slide-up",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: ()=>{
                                                                            setShowHeaderMenu(false);
                                                                            if (activeFolder) {
                                                                                setIsCreatingSubFolder(true);
                                                                                setSubFolderDraftName("");
                                                                            } else {
                                                                                alert("กรุณาเลือกโฟลเดอร์หลักก่อนสร้างโฟลเดอร์ย่อย");
                                                                            }
                                                                        },
                                                                        className: "w-full flex items-center gap-3 px-4 py-3 text-left text-white/90 hover:bg-white/10 transition-colors",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2d$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FolderPlus$3e$__["FolderPlus"], {
                                                                                className: "w-5 h-5 text-cyan-400"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                                                lineNumber: 2651,
                                                                                columnNumber: 27
                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                children: "สร้างโฟลเดอร์"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                                                lineNumber: 2652,
                                                                                columnNumber: 27
                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                                        lineNumber: 2639,
                                                                        columnNumber: 25
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: ()=>{
                                                                            setShowHeaderMenu(false);
                                                                            selectAll();
                                                                        },
                                                                        className: "w-full flex items-center gap-3 px-4 py-3 text-left text-white/90 hover:bg-white/10 transition-colors",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                                                className: "w-5 h-5 text-purple-400"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                                                lineNumber: 2663,
                                                                                columnNumber: 27
                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                children: selectedFiles.length > 0 ? 'ยกเลิกการเลือก' : 'เลือกทั้งหมด'
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                                                lineNumber: 2664,
                                                                                columnNumber: 27
                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                                        lineNumber: 2656,
                                                                        columnNumber: 25
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "border-t border-white/10 my-1"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                                        lineNumber: 2668,
                                                                        columnNumber: 25
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "px-4 py-2",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-xs text-purple-300/60 uppercase tracking-wider",
                                                                            children: "มุมมอง"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                                            lineNumber: 2672,
                                                                            columnNumber: 27
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                                        lineNumber: 2671,
                                                                        columnNumber: 25
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-center gap-1 px-4 pb-3",
                                                                        children: [
                                                                            {
                                                                                mode: "masonry",
                                                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$grid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutGrid$3e$__["LayoutGrid"],
                                                                                label: "Masonry"
                                                                            },
                                                                            {
                                                                                mode: "list",
                                                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__List$3e$__["List"],
                                                                                label: "List"
                                                                            }
                                                                        ].map(({ mode, icon: Icon, label })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                onClick: ()=>{
                                                                                    setViewMode(mode);
                                                                                    setShowHeaderMenu(false);
                                                                                },
                                                                                className: `flex-1 p-2 rounded-lg transition-all ${viewMode === mode ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white" : "bg-white/10 text-purple-300 hover:bg-white/20"}`,
                                                                                title: label,
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                                                    className: "w-4 h-4 mx-auto"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                                                    lineNumber: 2691,
                                                                                    columnNumber: 31
                                                                                }, ("TURBOPACK compile-time value", void 0))
                                                                            }, mode, false, {
                                                                                fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                                                lineNumber: 2679,
                                                                                columnNumber: 29
                                                                            }, ("TURBOPACK compile-time value", void 0)))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                                        lineNumber: 2674,
                                                                        columnNumber: 25
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                                lineNumber: 2637,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                lineNumber: 2620,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "hidden md:block ml-2",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UserMenu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                                    fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                    lineNumber: 2702,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                lineNumber: 2701,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                        lineNumber: 2600,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                lineNumber: 2561,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            showHeaderSearch && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-4 animate-slide-up space-y-3",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                            className: "absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-purple-300"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                            lineNumber: 2713,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            placeholder: "ค้นหาไฟล์...",
                                            value: searchTerm,
                                            onChange: (e)=>setSearchTerm(e.target.value),
                                            autoFocus: true,
                                            className: "w-full pl-12 pr-12 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-purple-300/50 focus:outline-none focus:ring-2 focus:ring-purple-500"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                            lineNumber: 2714,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        searchTerm && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setSearchTerm(""),
                                            className: "absolute right-4 top-1/2 transform -translate-y-1/2 p-1 rounded-full bg-white/10 hover:bg-white/20 text-purple-300",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                lineNumber: 2727,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                            lineNumber: 2723,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                    lineNumber: 2712,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                lineNumber: 2710,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            !activeFolder && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-2 sm:gap-3 md:gap-5 mb-6 md:mb-8",
                                children: folders.map((folder, index)=>{
                                    const Icon = folder.icon;
                                    const isActive = activeFolderId === folder.id;
                                    const fileCount = getFolderFileCount(folder);
                                    const subFolderCount = folder.subFolders.length;
                                    const isEditing = editingFolderId === folder.id;
                                    const isDragOver = dragOverFolderId === folder.id;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        onDragOver: (e)=>handleDragOver(e, folder.id),
                                        onDragLeave: handleDragLeave,
                                        onDrop: (e)=>void handleDropOnFolder(e, folder.id),
                                        className: `group relative glass-card rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-5 text-left transition-all duration-300 hover:scale-[1.03] border overflow-hidden animate-slide-up ${isActive ? "border-purple-400/80 shadow-lg shadow-purple-500/30 ring-2 ring-purple-400/50" : isDragOver ? "border-emerald-400/80 shadow-lg shadow-emerald-500/30 ring-2 ring-emerald-400/50 scale-105" : "border-white/10 hover:border-purple-300/50 hover:shadow-lg hover:shadow-purple-500/20"}`,
                                        style: {
                                            animationDelay: `${index * 0.05}s`
                                        },
                                        children: [
                                            isDragOver && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute inset-0 bg-emerald-500/20 flex items-center justify-center z-30 rounded-2xl",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-emerald-300 font-semibold text-sm flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"], {
                                                            className: "w-5 h-5"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                            lineNumber: 2763,
                                                            columnNumber: 27
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        "วางไฟล์ที่นี่"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                    lineNumber: 2762,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                lineNumber: 2761,
                                                columnNumber: 23
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `absolute inset-0 bg-gradient-to-br ${folder.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 ${isActive ? 'opacity-10' : ''}`
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                lineNumber: 2770,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            isEditing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative z-10 flex flex-col gap-3 h-full",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        value: editingFolderValue,
                                                        onChange: (e)=>setEditingFolderValue(e.target.value),
                                                        className: "w-full px-3 py-2 rounded-xl bg-white/10 border border-white/20 text-white text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all",
                                                        autoFocus: true
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                        lineNumber: 2774,
                                                        columnNumber: 25
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>handleSaveFolderName(folder.id),
                                                                className: "flex-1 px-3 py-2 rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 text-white text-xs font-medium shadow-lg hover:shadow-green-500/50 transition-all",
                                                                children: "บันทึก"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                                lineNumber: 2782,
                                                                columnNumber: 27
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: handleCancelEditFolder,
                                                                className: "flex-1 px-3 py-2 rounded-xl bg-white/10 text-purple-100 text-xs font-medium hover:bg-white/20 transition-all",
                                                                children: "ยกเลิก"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                                lineNumber: 2788,
                                                                columnNumber: 27
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                        lineNumber: 2781,
                                                        columnNumber: 25
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                lineNumber: 2773,
                                                columnNumber: 23
                                            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative z-10 cursor-pointer",
                                                onClick: ()=>handleFolderSelect(folder.id),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br ${folder.gradient} flex items-center justify-center mb-2 sm:mb-3 md:mb-4 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300 ${isActive ? 'scale-110 shadow-xl' : ''}`,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                            className: "w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white drop-shadow-md"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                            lineNumber: 2804,
                                                            columnNumber: 27
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                        lineNumber: 2801,
                                                        columnNumber: 25
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "folder-title font-bold text-white group-hover:text-purple-100 transition-colors text-sm sm:text-base",
                                                        children: folder.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                        lineNumber: 2806,
                                                        columnNumber: 25
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "folder-description text-purple-200/60 mt-0.5 sm:mt-1 line-clamp-2 text-xs sm:text-sm hidden sm:block",
                                                        children: folder.description
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                        lineNumber: 2809,
                                                        columnNumber: 25
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between folder-meta mt-2 sm:mt-3 md:mt-4 pt-2 sm:pt-3 border-t border-white/10 text-xs sm:text-sm",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "flex items-center gap-1 sm:gap-1.5 text-purple-200/70",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FolderOpen$3e$__["FolderOpen"], {
                                                                        className: "w-3 h-3 sm:w-3.5 sm:h-3.5"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                                        lineNumber: 2814,
                                                                        columnNumber: 29
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    subFolderCount
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                                lineNumber: 2813,
                                                                columnNumber: 27
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "flex items-center gap-1 sm:gap-1.5 text-purple-200/70",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileVideo$3e$__["FileVideo"], {
                                                                        className: "w-3 h-3 sm:w-3.5 sm:h-3.5"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                                        lineNumber: 2818,
                                                                        columnNumber: 29
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    fileCount
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                                lineNumber: 2817,
                                                                columnNumber: 27
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                        lineNumber: 2812,
                                                        columnNumber: 25
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                lineNumber: 2797,
                                                columnNumber: 23
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            isActive && !isEditing && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute bottom-2 right-2 w-3 h-3 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 animate-pulse shadow-lg shadow-purple-500/50"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                lineNumber: 2827,
                                                columnNumber: 23
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, folder.id, true, {
                                        fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                        lineNumber: 2746,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0));
                                })
                            }, void 0, false, {
                                fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                lineNumber: 2736,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            activeFolder && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-6 md:mb-8 space-y-5",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 gap-2 sm:gap-3 md:gap-5",
                                    children: displayFolders.map((subFolder, index)=>{
                                        const isEditing = editingSubFolderId === subFolder.id;
                                        const hasChildren = subFolder.children.length > 0;
                                        const isLeaf = isLeafFolder(subFolder);
                                        const subFolderCount = subFolder.children.length;
                                        const fileCount = subFolder.fileIds.length;
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            onClick: ()=>{
                                                if (!isEditing) {
                                                    handleNestedFolderSelect(subFolder.id);
                                                }
                                            },
                                            onTouchStart: ()=>{
                                                if (!isEditing) {
                                                    longPressTimerRef.current = setTimeout(()=>{
                                                        setFolderActionSheet({
                                                            isOpen: true,
                                                            folderId: subFolder.id,
                                                            folderName: subFolder.name
                                                        });
                                                    }, 500);
                                                }
                                            },
                                            onTouchEnd: ()=>{
                                                if (longPressTimerRef.current) {
                                                    clearTimeout(longPressTimerRef.current);
                                                    longPressTimerRef.current = null;
                                                }
                                            },
                                            onTouchMove: ()=>{
                                                if (longPressTimerRef.current) {
                                                    clearTimeout(longPressTimerRef.current);
                                                    longPressTimerRef.current = null;
                                                }
                                            },
                                            onContextMenu: (e)=>{
                                                e.preventDefault();
                                                if (!isEditing) {
                                                    setFolderActionSheet({
                                                        isOpen: true,
                                                        folderId: subFolder.id,
                                                        folderName: subFolder.name
                                                    });
                                                }
                                            },
                                            className: `group relative glass-card rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-5 text-left transition-all duration-300 hover:scale-[1.03] border overflow-hidden animate-slide-up cursor-pointer border-white/10 hover:border-purple-300/50 hover:shadow-lg hover:shadow-purple-500/20`,
                                            style: {
                                                animationDelay: `${index * 0.05}s`
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `absolute inset-0 bg-gradient-to-br ${activeFolder.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                    lineNumber: 2891,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                isEditing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "relative z-10 flex flex-col gap-3 h-full",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "text",
                                                            value: editingSubFolderValue,
                                                            onChange: (e)=>setEditingSubFolderValue(e.target.value),
                                                            onClick: (e)=>e.stopPropagation(),
                                                            className: "w-full px-3 py-2 rounded-xl bg-white/10 border border-white/20 text-white text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all",
                                                            autoFocus: true
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                            lineNumber: 2895,
                                                            columnNumber: 27
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: (event)=>{
                                                                        event.stopPropagation();
                                                                        handleSaveSubFolderName(subFolder.id);
                                                                    },
                                                                    className: "flex-1 px-3 py-2 rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 text-white text-xs font-medium shadow-lg hover:shadow-green-500/50 transition-all",
                                                                    children: "บันทึก"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                                    lineNumber: 2904,
                                                                    columnNumber: 29
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: (event)=>{
                                                                        event.stopPropagation();
                                                                        handleCancelEditSubFolder();
                                                                    },
                                                                    className: "flex-1 px-3 py-2 rounded-xl bg-white/10 text-purple-100 text-xs font-medium hover:bg-white/20 transition-all",
                                                                    children: "ยกเลิก"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                                    lineNumber: 2913,
                                                                    columnNumber: 29
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                            lineNumber: 2903,
                                                            columnNumber: 27
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                    lineNumber: 2894,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "relative z-10 cursor-pointer",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: `w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br ${activeFolder.gradient} flex items-center justify-center mb-2 sm:mb-3 md:mb-4 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300`,
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FolderOpen$3e$__["FolderOpen"], {
                                                                className: "w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white drop-shadow-md"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                                lineNumber: 2929,
                                                                columnNumber: 29
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                            lineNumber: 2926,
                                                            columnNumber: 27
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "folder-title font-bold text-white group-hover:text-purple-100 transition-colors text-sm sm:text-base",
                                                            children: subFolder.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                            lineNumber: 2931,
                                                            columnNumber: 27
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "folder-description text-purple-200/60 mt-0.5 sm:mt-1 line-clamp-2 text-xs sm:text-sm hidden sm:block",
                                                            children: isLeaf ? `${fileCount} ไฟล์` : `${subFolderCount} โฟลเดอร์`
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                            lineNumber: 2934,
                                                            columnNumber: 27
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center justify-between folder-meta mt-2 sm:mt-3 md:mt-4 pt-2 sm:pt-3 border-t border-white/10 text-xs sm:text-sm",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "flex items-center gap-1 sm:gap-1.5 text-purple-200/70",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FolderOpen$3e$__["FolderOpen"], {
                                                                            className: "w-3 h-3 sm:w-3.5 sm:h-3.5"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                                            lineNumber: 2939,
                                                                            columnNumber: 31
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        subFolderCount
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                                    lineNumber: 2938,
                                                                    columnNumber: 29
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "flex items-center gap-1 sm:gap-1.5 text-purple-200/70",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileVideo$3e$__["FileVideo"], {
                                                                            className: "w-3 h-3 sm:w-3.5 sm:h-3.5"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                                            lineNumber: 2943,
                                                                            columnNumber: 31
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        fileCount
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                                    lineNumber: 2942,
                                                                    columnNumber: 29
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                            lineNumber: 2937,
                                                            columnNumber: 27
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                    lineNumber: 2925,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                isLeaf && !isEditing && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute bottom-2 right-2 w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-gradient-to-r from-emerald-400 to-green-400 shadow-lg shadow-emerald-500/50"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                    lineNumber: 2952,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, subFolder.id, true, {
                                            fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                            lineNumber: 2847,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0));
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                    lineNumber: 2838,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                lineNumber: 2836,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            showUploadModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-end justify-center",
                                onClick: ()=>setShowUploadModal(false),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-full max-w-lg bg-slate-900 rounded-t-3xl overflow-hidden animate-slide-up",
                                    onClick: (e)=>e.stopPropagation(),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-5 border-b border-white/10",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-12 h-1 bg-white/30 rounded-full mx-auto mb-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                    lineNumber: 2973,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-lg font-semibold text-white text-center",
                                                    children: "อัพโหลดไฟล์"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                    lineNumber: 2974,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                            lineNumber: 2972,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            ref: fileInputRef,
                                            type: "file",
                                            multiple: true,
                                            accept: "image/*,video/*,.jpg,.jpeg,.png,.gif,.webp,.mp4,.mov,.avi,.webm",
                                            onChange: handleFileUpload,
                                            className: "hidden"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                            lineNumber: 2980,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            ref: cameraInputRef,
                                            type: "file",
                                            accept: "image/*",
                                            capture: "environment",
                                            onChange: handleFileUpload,
                                            className: "hidden"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                            lineNumber: 2988,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            id: "videoCaptureInput",
                                            type: "file",
                                            accept: "video/*",
                                            capture: "environment",
                                            onChange: handleFileUpload,
                                            className: "hidden"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                            lineNumber: 2996,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-5 space-y-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>fileInputRef.current?.click(),
                                                            className: "w-full flex items-center gap-4 px-5 py-4 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__["Image"], {
                                                                        className: "w-6 h-6 text-purple-400"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                                        lineNumber: 3015,
                                                                        columnNumber: 25
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                                    lineNumber: 3014,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-left",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-white text-lg block",
                                                                            children: "แกลเลอรี่"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                                            lineNumber: 3018,
                                                                            columnNumber: 25
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-purple-200/60 text-sm",
                                                                            children: "เลือกรูป/วิดีโอ"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                                            lineNumber: 3019,
                                                                            columnNumber: 25
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                                    lineNumber: 3017,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                            lineNumber: 3010,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>fileInputRef.current?.click(),
                                                            className: "w-full flex items-center gap-4 px-5 py-4 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FolderOpen$3e$__["FolderOpen"], {
                                                                        className: "w-6 h-6 text-emerald-400"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                                        lineNumber: 3029,
                                                                        columnNumber: 25
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                                    lineNumber: 3028,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-left",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-white text-lg block",
                                                                            children: "ไฟล์อื่นๆ"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                                            lineNumber: 3032,
                                                                            columnNumber: 25
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-emerald-200/60 text-sm",
                                                                            children: "เลือกจากโฟลเดอร์"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                                            lineNumber: 3033,
                                                                            columnNumber: 25
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                                    lineNumber: 3031,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                            lineNumber: 3024,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                    lineNumber: 3008,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-wrap items-center justify-center gap-2 pt-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-purple-300/50 text-xs",
                                                            children: "รองรับ:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                            lineNumber: 3040,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "px-2 py-1 rounded-full bg-purple-500/20 text-purple-300 text-xs",
                                                            children: "JPG"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                            lineNumber: 3041,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "px-2 py-1 rounded-full bg-purple-500/20 text-purple-300 text-xs",
                                                            children: "PNG"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                            lineNumber: 3042,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "px-2 py-1 rounded-full bg-purple-500/20 text-purple-300 text-xs",
                                                            children: "GIF"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                            lineNumber: 3043,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "px-2 py-1 rounded-full bg-pink-500/20 text-pink-300 text-xs",
                                                            children: "MP4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                            lineNumber: 3044,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "px-2 py-1 rounded-full bg-pink-500/20 text-pink-300 text-xs",
                                                            children: "MOV"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                            lineNumber: 3045,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                    lineNumber: 3039,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                (currentNestedFolder || activeFolder) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-center gap-2 p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FolderOpen$3e$__["FolderOpen"], {
                                                            className: "w-4 h-4 text-emerald-400"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                            lineNumber: 3051,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-emerald-300 text-sm",
                                                            children: [
                                                                "อัพโหลดไปที่: ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "font-medium",
                                                                    children: currentNestedFolder?.name || activeFolder?.name
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                                    lineNumber: 3053,
                                                                    columnNumber: 39
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                            lineNumber: 3052,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                    lineNumber: 3050,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                            lineNumber: 3006,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-5 pt-0",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setShowUploadModal(false),
                                                className: "w-full py-4 rounded-2xl bg-white/10 text-white font-medium text-lg hover:bg-white/20 transition-colors",
                                                children: "ยกเลิก"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                lineNumber: 3061,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                            lineNumber: 3060,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                    lineNumber: 2967,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                lineNumber: 2963,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            confirmModal.isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "fixed inset-0 z-[60] flex items-center justify-center p-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 bg-black/70 backdrop-blur-sm",
                                        onClick: ()=>{
                                            if (confirmModal.onCancel) {
                                                confirmModal.onCancel();
                                            }
                                            closeConfirmModal();
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                        lineNumber: 3076,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative w-full max-w-md transform transition-all animate-bounce-in",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "glass-card rounded-2xl sm:rounded-3xl overflow-hidden border border-white/20 shadow-2xl",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `p-6 sm:p-8 text-center ${confirmModal.type === 'delete' ? 'bg-gradient-to-br from-red-500/20 to-pink-500/20' : confirmModal.type === 'warning' ? 'bg-gradient-to-br from-amber-500/20 to-orange-500/20' : 'bg-gradient-to-br from-blue-500/20 to-cyan-500/20'}`,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: `w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 rounded-full flex items-center justify-center ${confirmModal.type === 'delete' ? 'bg-gradient-to-br from-red-500 to-pink-600 shadow-lg shadow-red-500/40' : confirmModal.type === 'warning' ? 'bg-gradient-to-br from-amber-500 to-orange-600 shadow-lg shadow-amber-500/40' : 'bg-gradient-to-br from-blue-500 to-cyan-600 shadow-lg shadow-blue-500/40'}`,
                                                            children: confirmModal.type === 'delete' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                className: "w-8 h-8 sm:w-10 sm:h-10 text-white"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                                lineNumber: 3104,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0)) : confirmModal.type === 'warning' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                                                className: "w-8 h-8 sm:w-10 sm:h-10 text-white"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                                lineNumber: 3106,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__["Info"], {
                                                                className: "w-8 h-8 sm:w-10 sm:h-10 text-white"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                                lineNumber: 3108,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                            lineNumber: 3097,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "text-responsive-xl sm:text-2xl font-bold text-white mb-2",
                                                            children: confirmModal.title
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                            lineNumber: 3113,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-responsive-sm sm:text-base text-purple-200/80",
                                                            children: confirmModal.message
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                            lineNumber: 3118,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        confirmModal.itemName && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mt-4 px-4 py-3 bg-white/10 rounded-xl border border-white/10",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-responsive-sm text-purple-300/60 mb-1",
                                                                    children: "ชื่อไฟล์:"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                                    lineNumber: 3125,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-responsive-base text-white font-medium truncate",
                                                                    children: confirmModal.itemName
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                                    lineNumber: 3126,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                            lineNumber: 3124,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        confirmModal.type === 'delete' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mt-4 flex items-center justify-center gap-2 text-red-300/80",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                                                    className: "w-4 h-4"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                                    lineNumber: 3135,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-responsive-xs sm:text-sm",
                                                                    children: "การดำเนินการนี้ไม่สามารถย้อนกลับได้"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                                    lineNumber: 3136,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                            lineNumber: 3134,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                    lineNumber: 3090,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "p-4 sm:p-6 bg-slate-900/50 flex flex-col-reverse sm:flex-row gap-3",
                                                    children: [
                                                        confirmModal.cancelText && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>{
                                                                if (confirmModal.onCancel) {
                                                                    confirmModal.onCancel();
                                                                }
                                                                closeConfirmModal();
                                                            },
                                                            className: "flex-1 px-6 py-3 sm:py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium transition-all duration-200 btn-text border border-white/10",
                                                            children: confirmModal.cancelText
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                            lineNumber: 3144,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>confirmModal.onConfirm(),
                                                            className: `flex-1 px-6 py-3 sm:py-3.5 rounded-xl font-medium transition-all duration-200 btn-text shadow-lg ${confirmModal.type === 'delete' ? 'bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-400 hover:to-pink-500 text-white shadow-red-500/30 hover:shadow-red-500/50' : confirmModal.type === 'warning' ? 'bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-white shadow-amber-500/30 hover:shadow-amber-500/50' : 'bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-400 hover:to-cyan-500 text-white shadow-blue-500/30 hover:shadow-blue-500/50'}`,
                                                            children: confirmModal.confirmText || 'ยืนยัน'
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                            lineNumber: 3156,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                    lineNumber: 3142,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                            lineNumber: 3088,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                        lineNumber: 3087,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                lineNumber: 3074,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            showShareModal && shareFileId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm flex items-end justify-center",
                                onClick: ()=>{
                                    setShowShareModal(false);
                                    setShareFileId(null);
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-full max-w-lg bg-slate-900 rounded-t-3xl overflow-hidden animate-slide-up",
                                    onClick: (e)=>e.stopPropagation(),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-5 border-b border-white/10",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-12 h-1 bg-white/30 rounded-full mx-auto mb-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                    lineNumber: 3188,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-lg font-semibold text-white text-center",
                                                    children: "แชร์ไฟล์"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                    lineNumber: 3189,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                            lineNumber: 3187,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-5 space-y-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>shareFile(shareFileId, 'line'),
                                                    className: "w-full flex items-center gap-4 px-5 py-4 rounded-2xl bg-green-500/10 hover:bg-green-500/20 transition-colors",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-12 h-12 rounded-full bg-green-500 flex items-center justify-center",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"], {
                                                                className: "w-6 h-6 text-white"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                                lineNumber: 3200,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                            lineNumber: 3199,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex-1 text-left",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-white text-lg block",
                                                                    children: "LINE (แชร์ลิงก์)"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                                    lineNumber: 3203,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-white/50 text-sm",
                                                                    children: "เปิดในเบราว์เซอร์ LINE"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                                    lineNumber: 3204,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                            lineNumber: 3202,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                    lineNumber: 3195,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                (files.find((f)=>f.id === shareFileId)?.type === 'video' || files.find((f)=>f.id === shareFileId)?.type === 'clip') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-2 px-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-white/60 text-sm",
                                                                    children: "ส่งไปกลุ่ม:"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                                    lineNumber: 3214,
                                                                    columnNumber: 27
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                    value: selectedLineGroup || "",
                                                                    onChange: (e)=>setSelectedLineGroup(e.target.value),
                                                                    className: "flex-1 bg-slate-800 text-white text-sm rounded-lg px-3 py-2 border border-white/20 focus:border-green-500 focus:outline-none",
                                                                    children: lineGroups.map((group)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: group.id,
                                                                            children: group.name
                                                                        }, group.id, false, {
                                                                            fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                                            lineNumber: 3221,
                                                                            columnNumber: 31
                                                                        }, ("TURBOPACK compile-time value", void 0)))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                                    lineNumber: 3215,
                                                                    columnNumber: 27
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>setShowLineGroupModal(true),
                                                                    className: "p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-white/60 hover:text-white transition-colors",
                                                                    title: "จัดการกลุ่ม",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                                        className: "w-5 h-5"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                                        lineNumber: 3231,
                                                                        columnNumber: 29
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                                    lineNumber: 3226,
                                                                    columnNumber: 27
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                            lineNumber: 3213,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>{
                                                                if (shareFileId && selectedLineGroup) {
                                                                    sendVideoToLineGroup(shareFileId, selectedLineGroup);
                                                                }
                                                            },
                                                            disabled: lineSendStatus === "sending" || !selectedLineGroup,
                                                            className: "w-full flex items-center gap-4 px-5 py-4 rounded-2xl bg-gradient-to-r from-green-500/20 to-emerald-500/20 hover:from-green-500/30 hover:to-emerald-500/30 transition-colors border border-green-500/30 disabled:opacity-50",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "w-12 h-12 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center",
                                                                    children: lineSendStatus === "sending" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                                                        className: "w-6 h-6 text-white animate-spin"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                                        lineNumber: 3247,
                                                                        columnNumber: 31
                                                                    }, ("TURBOPACK compile-time value", void 0)) : lineSendStatus === "success" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                                        className: "w-6 h-6 text-white"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                                        lineNumber: 3249,
                                                                        columnNumber: 31
                                                                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$film$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Film$3e$__["Film"], {
                                                                        className: "w-6 h-6 text-white"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                                        lineNumber: 3251,
                                                                        columnNumber: 31
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                                    lineNumber: 3245,
                                                                    columnNumber: 27
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex-1 text-left",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-white text-lg block",
                                                                            children: lineSendStatus === "sending" ? "กำลังส่ง..." : lineSendStatus === "success" ? "ส่งสำเร็จ! ✅" : "ส่งวิดีโอตรงไป LINE ⭐"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                                            lineNumber: 3255,
                                                                            columnNumber: 29
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-green-300 text-sm",
                                                                            children: lineSendStatus === "sending" ? "รอสักครู่..." : lineSendStatus === "success" ? "ดูได้ในแชทเลย" : lineGroups.find((g)=>g.id === selectedLineGroup)?.name || "เลือกกลุ่ม"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                                            lineNumber: 3260,
                                                                            columnNumber: 29
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                                    lineNumber: 3254,
                                                                    columnNumber: 27
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                            lineNumber: 3236,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                    lineNumber: 3211,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>{
                                                        const file = files.find((f)=>f.id === shareFileId);
                                                        if (file) {
                                                            // Use direct video URL for inline playback in WhatsApp/Telegram
                                                            const directVideoUrl = `https://app.bjhbangkok.com${file.url}`;
                                                            const text = encodeURIComponent(`🎬 ${file.name}\n\n${directVideoUrl}`);
                                                            window.open(`https://wa.me/?text=${text}`, '_blank');
                                                        }
                                                        setShowShareModal(false);
                                                        setShareFileId(null);
                                                    },
                                                    className: "w-full flex items-center gap-4 px-5 py-4 rounded-2xl bg-emerald-500/10 hover:bg-emerald-500/20 transition-colors",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-12 h-12 rounded-full bg-emerald-500 flex items-center justify-center",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2d$quote$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquareQuote$3e$__["MessageSquareQuote"], {
                                                                className: "w-6 h-6 text-white"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                                lineNumber: 3286,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                            lineNumber: 3285,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex-1 text-left",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-white text-lg block",
                                                                    children: "WhatsApp"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                                    lineNumber: 3289,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-emerald-300 text-sm",
                                                                    children: "เล่น inline ได้เลย"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                                    lineNumber: 3290,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                            lineNumber: 3288,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                    lineNumber: 3271,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>{
                                                        const file = files.find((f)=>f.id === shareFileId);
                                                        if (file) {
                                                            const directVideoUrl = `https://app.bjhbangkok.com${file.url}`;
                                                            const text = encodeURIComponent(`🎬 ${file.name}`);
                                                            const url = encodeURIComponent(directVideoUrl);
                                                            window.open(`https://t.me/share/url?url=${url}&text=${text}`, '_blank');
                                                        }
                                                        setShowShareModal(false);
                                                        setShareFileId(null);
                                                    },
                                                    className: "w-full flex items-center gap-4 px-5 py-4 rounded-2xl bg-blue-500/10 hover:bg-blue-500/20 transition-colors",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"], {
                                                                className: "w-6 h-6 text-white"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                                lineNumber: 3310,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                            lineNumber: 3309,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex-1 text-left",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-white text-lg block",
                                                                    children: "Telegram"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                                    lineNumber: 3313,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-blue-300 text-sm",
                                                                    children: "เล่น inline ได้เลย"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                                    lineNumber: 3314,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                            lineNumber: 3312,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                    lineNumber: 3295,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>shareFile(shareFileId, 'copy'),
                                                    className: "w-full flex items-center gap-4 px-5 py-4 rounded-2xl bg-purple-500/10 hover:bg-purple-500/20 transition-colors",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-12 h-12 rounded-full bg-purple-500 flex items-center justify-center",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                                                                className: "w-6 h-6 text-white"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                                lineNumber: 3324,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                            lineNumber: 3323,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-white text-lg",
                                                            children: "คัดลอกลิงก์"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                            lineNumber: 3326,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                    lineNumber: 3319,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                (files.find((f)=>f.id === shareFileId)?.type === 'video' || files.find((f)=>f.id === shareFileId)?.type === 'clip') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>{
                                                        const file = files.find((f)=>f.id === shareFileId);
                                                        if (file) {
                                                            const directVideoUrl = `https://app.bjhbangkok.com${file.url}`;
                                                            navigator.clipboard.writeText(directVideoUrl);
                                                            // Show toast or feedback
                                                            alert('คัดลอก Video URL แล้ว! 📋');
                                                        }
                                                        setShowShareModal(false);
                                                        setShareFileId(null);
                                                    },
                                                    className: "w-full flex items-center gap-4 px-5 py-4 rounded-2xl bg-orange-500/10 hover:bg-orange-500/20 transition-colors",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$film$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Film$3e$__["Film"], {
                                                                className: "w-6 h-6 text-white"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                                lineNumber: 3347,
                                                                columnNumber: 27
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                            lineNumber: 3346,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex-1 text-left",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-white text-lg block",
                                                                    children: "คัดลอก Video URL"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                                    lineNumber: 3350,
                                                                    columnNumber: 27
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-orange-300 text-sm",
                                                                    children: "ลิงก์ .mp4 โดยตรง"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                                    lineNumber: 3351,
                                                                    columnNumber: 27
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                            lineNumber: 3349,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                    lineNumber: 3332,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>shareFile(shareFileId, 'native'),
                                                    className: "w-full flex items-center gap-4 px-5 py-4 rounded-2xl bg-blue-500/10 hover:bg-blue-500/20 transition-colors",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Share2$3e$__["Share2"], {
                                                                className: "w-6 h-6 text-white"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                                lineNumber: 3362,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                            lineNumber: 3361,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-white text-lg",
                                                            children: "แอปอื่นๆ"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                            lineNumber: 3364,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                    lineNumber: 3357,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                            lineNumber: 3193,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-5 pt-0",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>{
                                                    setShowShareModal(false);
                                                    setShareFileId(null);
                                                },
                                                className: "w-full py-4 rounded-2xl bg-white/10 text-white font-medium text-lg hover:bg-white/20 transition-colors",
                                                children: "ยกเลิก"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                lineNumber: 3370,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                            lineNumber: 3369,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                    lineNumber: 3182,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                lineNumber: 3175,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            showLineSendModal && shareFileId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "fixed inset-0 z-[70] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4",
                                onClick: ()=>{
                                    if (lineSendStatus !== "sending") {
                                        setShowLineSendModal(false);
                                        setLineSendUserId("");
                                        setLineSendStatus("idle");
                                        setLineSendError("");
                                    }
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-full max-w-md bg-slate-900 rounded-3xl overflow-hidden",
                                    onClick: (e)=>e.stopPropagation(),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-5 border-b border-white/10 bg-gradient-to-r from-green-500/20 to-emerald-500/20",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-xl font-bold text-white text-center flex items-center justify-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$film$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Film$3e$__["Film"], {
                                                            className: "w-6 h-6 text-green-400"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                            lineNumber: 3404,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        "ส่งวิดีโอตรงไป LINE"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                    lineNumber: 3403,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-green-300/80 text-sm text-center mt-1",
                                                    children: "เล่นได้เลยในแอป LINE!"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                    lineNumber: 3407,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                            lineNumber: 3402,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-5 space-y-4",
                                            children: lineSendStatus === "success" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-center py-8",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                            className: "w-10 h-10 text-green-400"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                            lineNumber: 3415,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                        lineNumber: 3414,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-green-400 text-xl font-semibold",
                                                        children: "ส่งวิดีโอสำเร็จ!"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                        lineNumber: 3417,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-white/60 text-sm mt-2",
                                                        children: "วิดีโอถูกส่งไปยัง LINE แล้ว"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                        lineNumber: 3418,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                lineNumber: 3413,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "bg-black/30 rounded-xl p-3 flex items-center gap-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-16 h-16 rounded-lg bg-purple-500/20 flex items-center justify-center overflow-hidden",
                                                                children: files.find((f)=>f.id === shareFileId)?.thumbnail ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                    src: files.find((f)=>f.id === shareFileId)?.thumbnail,
                                                                    alt: "Video thumbnail",
                                                                    className: "w-full h-full object-cover"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                                    lineNumber: 3426,
                                                                    columnNumber: 29
                                                                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$film$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Film$3e$__["Film"], {
                                                                    className: "w-8 h-8 text-purple-400"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                                    lineNumber: 3432,
                                                                    columnNumber: 29
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                                lineNumber: 3424,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex-1 min-w-0",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-white font-medium truncate",
                                                                        children: files.find((f)=>f.id === shareFileId)?.name
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                                        lineNumber: 3436,
                                                                        columnNumber: 27
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-white/50 text-sm",
                                                                        children: files.find((f)=>f.id === shareFileId)?.size
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                                        lineNumber: 3439,
                                                                        columnNumber: 27
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                                lineNumber: 3435,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                        lineNumber: 3423,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "block text-white/80 text-sm font-medium mb-2",
                                                                children: "LINE User ID ของผู้รับ"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                                lineNumber: 3447,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "text",
                                                                value: lineSendUserId,
                                                                onChange: (e)=>setLineSendUserId(e.target.value),
                                                                placeholder: "U1234567890abcdef...",
                                                                className: "w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500",
                                                                disabled: lineSendStatus === "sending"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                                lineNumber: 3450,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-white/40 text-xs mt-2",
                                                                children: "💡 ผู้รับต้องเพิ่ม LINE Official Account ของคุณเป็นเพื่อนก่อน"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                                lineNumber: 3458,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                        lineNumber: 3446,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    lineSendError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "bg-red-500/20 border border-red-500/30 rounded-xl p-3 flex items-center gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                                                className: "w-5 h-5 text-red-400 flex-shrink-0"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                                lineNumber: 3466,
                                                                columnNumber: 27
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-red-300 text-sm",
                                                                children: lineSendError
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                                lineNumber: 3467,
                                                                columnNumber: 27
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                        lineNumber: 3465,
                                                        columnNumber: 25
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex gap-3 pt-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>{
                                                                    setShowLineSendModal(false);
                                                                    setLineSendUserId("");
                                                                    setLineSendStatus("idle");
                                                                    setLineSendError("");
                                                                },
                                                                disabled: lineSendStatus === "sending",
                                                                className: "flex-1 py-3 rounded-xl bg-white/10 text-white font-medium hover:bg-white/20 transition-colors disabled:opacity-50",
                                                                children: "ยกเลิก"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                                lineNumber: 3473,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>sendVideoToLineUser(shareFileId),
                                                                disabled: lineSendStatus === "sending" || !lineSendUserId.trim(),
                                                                className: "flex-1 py-3 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 text-white font-medium hover:from-green-600 hover:to-emerald-600 transition-colors disabled:opacity-50 flex items-center justify-center gap-2",
                                                                children: lineSendStatus === "sending" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                                            lineNumber: 3492,
                                                                            columnNumber: 31
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        "กำลังส่ง..."
                                                                    ]
                                                                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"], {
                                                                            className: "w-5 h-5"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                                            lineNumber: 3497,
                                                                            columnNumber: 31
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        "ส่งวิดีโอ"
                                                                    ]
                                                                }, void 0, true)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                                lineNumber: 3485,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                        lineNumber: 3472,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                            lineNumber: 3411,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                    lineNumber: 3397,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                lineNumber: 3386,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            showLineGroupModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "fixed inset-0 z-[80] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4",
                                onClick: ()=>setShowLineGroupModal(false),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-full max-w-md bg-slate-900 rounded-3xl overflow-hidden",
                                    onClick: (e)=>e.stopPropagation(),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-5 border-b border-white/10 bg-gradient-to-r from-green-500/20 to-emerald-500/20",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-xl font-bold text-white text-center flex items-center justify-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"], {
                                                            className: "w-6 h-6 text-green-400"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                            lineNumber: 3523,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        "จัดการกลุ่ม LINE"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                    lineNumber: 3522,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-green-300/80 text-sm text-center mt-1",
                                                    children: "เพิ่มหรือลบกลุ่มที่ต้องการส่งวิดีโอ"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                    lineNumber: 3526,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                            lineNumber: 3521,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-5 space-y-4 max-h-96 overflow-y-auto custom-scrollbar",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block text-white/80 text-sm font-medium",
                                                            children: "กลุ่มที่บันทึกไว้"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                            lineNumber: 3533,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        lineGroups.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-white/40 text-sm",
                                                            children: "ยังไม่มีกลุ่ม"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                            lineNumber: 3535,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)) : lineGroups.map((group)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-2 bg-white/5 rounded-xl p-3",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex-1",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "text-white font-medium",
                                                                                children: group.name
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                                                lineNumber: 3540,
                                                                                columnNumber: 29
                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "text-white/40 text-xs truncate",
                                                                                children: group.id
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                                                lineNumber: 3541,
                                                                                columnNumber: 29
                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                                        lineNumber: 3539,
                                                                        columnNumber: 27
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: ()=>removeLineGroup(group.id),
                                                                        className: "p-2 rounded-lg bg-red-500/20 hover:bg-red-500/30 text-red-400 transition-colors",
                                                                        title: "ลบกลุ่ม",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                            className: "w-4 h-4"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                                            lineNumber: 3548,
                                                                            columnNumber: 29
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                                        lineNumber: 3543,
                                                                        columnNumber: 27
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, group.id, true, {
                                                                fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                                lineNumber: 3538,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0)))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                    lineNumber: 3532,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "bg-green-500/10 border border-green-500/20 rounded-xl p-4 space-y-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-green-400 font-medium flex items-center gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__["Info"], {
                                                                    className: "w-4 h-4"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                                    lineNumber: 3558,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                "วิธีหา Group ID"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                            lineNumber: 3557,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                                                            className: "text-white/70 text-sm space-y-1 list-decimal list-inside",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    children: "เปิดแอป LINE บนมือถือ"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                                    lineNumber: 3562,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    children: "เชิญ Bot เข้ากลุ่มที่ต้องการ"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                                    lineNumber: 3563,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    children: [
                                                                        "พิมพ์ ",
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                                            className: "bg-white/10 px-1 rounded",
                                                                            children: "!groupid"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                                            lineNumber: 3564,
                                                                            columnNumber: 33
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        " ในกลุ่ม"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                                    lineNumber: 3564,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    children: "Bot จะตอบกลับ Group ID มาให้"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                                    lineNumber: 3565,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    children: "คัดลอก ID มาใส่ด้านล่าง"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                                    lineNumber: 3566,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                            lineNumber: 3561,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                    lineNumber: 3556,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "border-t border-white/10 pt-4 space-y-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block text-white/80 text-sm font-medium",
                                                            children: "เพิ่มกลุ่มใหม่"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                            lineNumber: 3572,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "text",
                                                            value: newGroupName,
                                                            onChange: (e)=>setNewGroupName(e.target.value),
                                                            placeholder: "ชื่อกลุ่ม (เช่น ทีมการตลาด)",
                                                            className: "w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-green-500"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                            lineNumber: 3573,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "text",
                                                            value: newGroupId,
                                                            onChange: (e)=>setNewGroupId(e.target.value),
                                                            placeholder: "Group ID (เช่น C31a793e94485a393...)",
                                                            className: "w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-green-500"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                            lineNumber: 3580,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: addLineGroup,
                                                            disabled: !newGroupName.trim() || !newGroupId.trim(),
                                                            className: "w-full py-3 rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold hover:from-green-400 hover:to-emerald-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                                    className: "w-5 h-5"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                                    lineNumber: 3592,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                "เพิ่มกลุ่ม"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                            lineNumber: 3587,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                    lineNumber: 3571,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                            lineNumber: 3530,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-4 border-t border-white/10",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setShowLineGroupModal(false),
                                                className: "w-full py-3 rounded-xl bg-white/10 text-white font-medium hover:bg-white/20 transition-colors",
                                                children: "ปิด"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                lineNumber: 3600,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                            lineNumber: 3599,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                    lineNumber: 3516,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                lineNumber: 3512,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-center h-96",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "animate-spin rounded-full h-16 w-16 border-4 border-purple-500 border-t-transparent"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                    lineNumber: 3614,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                lineNumber: 3613,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)) : filteredFiles.length === 0 ? null : viewMode === "list" ? // List View - Mobile friendly, no header
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "glass-card rounded-2xl overflow-hidden",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                    className: "w-full",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                        children: filteredFiles.map((file, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                className: `border-b border-purple-500/10 hover:bg-white/5 transition-colors ${selectedFiles.includes(file.id) ? 'bg-purple-500/10' : ''}`,
                                                onTouchStart: ()=>{
                                                    fileLongPressRef.current = setTimeout(()=>{
                                                        setIsFileSelectionMode(true);
                                                        if (!selectedFiles.includes(file.id)) {
                                                            toggleSelect(file.id);
                                                        }
                                                    }, 500);
                                                },
                                                onTouchEnd: ()=>{
                                                    if (fileLongPressRef.current) {
                                                        clearTimeout(fileLongPressRef.current);
                                                        fileLongPressRef.current = null;
                                                    }
                                                },
                                                onTouchMove: ()=>{
                                                    if (fileLongPressRef.current) {
                                                        clearTimeout(fileLongPressRef.current);
                                                        fileLongPressRef.current = null;
                                                    }
                                                },
                                                onContextMenu: (e)=>{
                                                    e.preventDefault();
                                                    setIsFileSelectionMode(true);
                                                    if (!selectedFiles.includes(file.id)) {
                                                        toggleSelect(file.id);
                                                    }
                                                },
                                                children: [
                                                    isFileSelectionMode && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "p-1 sm:p-2 text-center",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "checkbox",
                                                            checked: selectedFiles.includes(file.id),
                                                            onChange: ()=>toggleSelect(file.id),
                                                            className: "w-4 h-4 rounded cursor-pointer"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                            lineNumber: 3658,
                                                            columnNumber: 27
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                        lineNumber: 3657,
                                                        columnNumber: 25
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "p-1 sm:p-2",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "relative w-10 h-10 sm:w-12 sm:h-10 rounded-lg overflow-hidden cursor-pointer hover:scale-110 transition-transform mx-auto",
                                                            onClick: ()=>openLightbox(index),
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ThumbnailImage, {
                                                                    file: file,
                                                                    alt: file.name,
                                                                    className: "w-full h-full object-cover"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                                    lineNumber: 3671,
                                                                    columnNumber: 27
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                (file.type === "video" || file.type === "clip") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "absolute inset-0 flex items-center justify-center bg-black/50",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                                                        className: "w-3 h-3 text-white"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                                        lineNumber: 3678,
                                                                        columnNumber: 31
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                                    lineNumber: 3677,
                                                                    columnNumber: 29
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                            lineNumber: 3667,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                        lineNumber: 3666,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "p-1 sm:p-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "font-medium text-white text-xs sm:text-sm truncate max-w-[100px] sm:max-w-[180px]",
                                                                children: file.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                                lineNumber: 3684,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex gap-0.5 mt-0.5 flex-wrap",
                                                                children: file.tags.slice(0, 2).map((tag)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "px-1 py-0 bg-purple-500/20 text-purple-300 text-[10px] rounded-full",
                                                                        children: tag
                                                                    }, tag, false, {
                                                                        fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                                        lineNumber: 3689,
                                                                        columnNumber: 29
                                                                    }, ("TURBOPACK compile-time value", void 0)))
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                                lineNumber: 3687,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                        lineNumber: 3683,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "p-1 sm:p-2",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center justify-center gap-0.5 sm:gap-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>handleDownloadFile(file.id),
                                                                    className: "p-1 sm:p-1.5 rounded-lg bg-white/10 text-purple-300 hover:bg-white/20 transition-colors flex items-center justify-center",
                                                                    title: "ดาวน์โหลด",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                                                        className: "w-3.5 h-3.5"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                                        lineNumber: 3705,
                                                                        columnNumber: 29
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                                    lineNumber: 3700,
                                                                    columnNumber: 27
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>{
                                                                        setShareFileId(file.id);
                                                                        setShowShareModal(true);
                                                                    },
                                                                    className: "p-1 sm:p-1.5 rounded-lg bg-white/10 text-purple-300 hover:bg-white/20 transition-colors flex items-center justify-center",
                                                                    title: "แชร์",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Share2$3e$__["Share2"], {
                                                                        className: "w-3.5 h-3.5"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                                        lineNumber: 3715,
                                                                        columnNumber: 29
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                                    lineNumber: 3707,
                                                                    columnNumber: 27
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>handleDeleteFile(file.id),
                                                                    className: "p-1 sm:p-1.5 rounded-lg bg-white/10 text-red-400 hover:bg-red-500/20 transition-colors flex items-center justify-center",
                                                                    title: "ลบ",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                        className: "w-3.5 h-3.5"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                                        lineNumber: 3722,
                                                                        columnNumber: 29
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                                    lineNumber: 3717,
                                                                    columnNumber: 27
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                            lineNumber: 3699,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                        lineNumber: 3698,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, file.id, true, {
                                                fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                lineNumber: 3624,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                        lineNumber: 3622,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                    lineNumber: 3621,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                lineNumber: 3620,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)) : // Samsung Gallery Style - 4 columns grid
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-4 gap-0.5",
                                children: filteredFiles.map((file, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `relative aspect-square overflow-hidden cursor-pointer ${selectedFiles.includes(file.id) ? 'ring-2 ring-white ring-inset' : ''}`,
                                        onClick: ()=>{
                                            // In selection mode: toggle selection
                                            // Not in selection mode: open lightbox to view
                                            if (isFileSelectionMode) {
                                                toggleSelect(file.id);
                                            } else {
                                                openLightbox(index);
                                            }
                                        },
                                        onTouchStart: ()=>{
                                            // Long press to enter selection mode
                                            fileLongPressRef.current = setTimeout(()=>{
                                                setIsFileSelectionMode(true);
                                                if (!selectedFiles.includes(file.id)) {
                                                    toggleSelect(file.id);
                                                }
                                            }, 500);
                                        },
                                        onTouchEnd: ()=>{
                                            if (fileLongPressRef.current) {
                                                clearTimeout(fileLongPressRef.current);
                                                fileLongPressRef.current = null;
                                            }
                                        },
                                        onTouchMove: ()=>{
                                            if (fileLongPressRef.current) {
                                                clearTimeout(fileLongPressRef.current);
                                                fileLongPressRef.current = null;
                                            }
                                        },
                                        onContextMenu: (e)=>{
                                            e.preventDefault();
                                            setIsFileSelectionMode(true);
                                            if (!selectedFiles.includes(file.id)) {
                                                toggleSelect(file.id);
                                            }
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ThumbnailImage, {
                                                file: file,
                                                alt: file.name,
                                                className: "w-full h-full object-cover"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                lineNumber: 3777,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            (isFileSelectionMode || selectedFiles.includes(file.id)) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute top-2 left-2",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${selectedFiles.includes(file.id) ? 'bg-white border-white' : 'border-white/70 bg-black/30'}`,
                                                    children: selectedFiles.includes(file.id) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                        className: "w-4 h-4 text-black"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                        lineNumber: 3793,
                                                        columnNumber: 27
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                    lineNumber: 3786,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                lineNumber: 3785,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            file.duration && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute bottom-1 right-1 px-1.5 py-0.5 bg-black/70 rounded text-white text-xs font-medium",
                                                children: file.duration
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                lineNumber: 3801,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            (file.type === "video" || file.type === "clip") && !file.duration && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute bottom-1 right-1",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                                    className: "w-4 h-4 text-white drop-shadow-lg",
                                                    fill: "white"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                    lineNumber: 3809,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                lineNumber: 3808,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, file.id, true, {
                                        fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                        lineNumber: 3735,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)))
                            }, void 0, false, {
                                fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                lineNumber: 3733,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `fixed bottom-0 left-0 right-0 bg-black border-t border-white/10 z-50 safe-area-bottom transform transition-transform duration-300 ease-out ${isFileSelectionMode && !showShareModal ? 'translate-y-0' : 'translate-y-full'}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-around py-3 px-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>{
                                                if (selectedFiles.length > 0) {
                                                    selectedFiles.forEach((id)=>handleDownloadFile(id));
                                                }
                                            },
                                            className: "flex flex-col items-center gap-1 px-4 py-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                                    className: "w-6 h-6 text-white"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                    lineNumber: 3832,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-white text-xs",
                                                    children: "ดาวน์โหลด"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                    lineNumber: 3833,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                            lineNumber: 3824,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>{
                                                if (selectedFiles.length > 0) {
                                                    setShareFileId(selectedFiles[0]);
                                                    setShowShareModal(true);
                                                }
                                            },
                                            className: "flex flex-col items-center gap-1 px-4 py-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Share2$3e$__["Share2"], {
                                                    className: "w-6 h-6 text-white"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                    lineNumber: 3846,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-white text-xs",
                                                    children: "แชร์"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                    lineNumber: 3847,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                            lineNumber: 3837,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>{
                                                if (selectedFiles.length > 0) {
                                                    setConfirmModal({
                                                        isOpen: true,
                                                        type: 'delete',
                                                        title: 'ลบไฟล์ที่เลือก',
                                                        message: `คุณต้องการลบ ${selectedFiles.length} ไฟล์ที่เลือกหรือไม่?`,
                                                        onConfirm: ()=>{
                                                            selectedFiles.forEach((id)=>handleDeleteFile(id));
                                                            setSelectedFiles([]);
                                                            setIsFileSelectionMode(false);
                                                            closeConfirmModal();
                                                        },
                                                        confirmText: 'ลบ',
                                                        cancelText: 'ยกเลิก'
                                                    });
                                                }
                                            },
                                            className: "flex flex-col items-center gap-1 px-4 py-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                    className: "w-6 h-6 text-white"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                    lineNumber: 3872,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-white text-xs",
                                                    children: "ลบ"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                    lineNumber: 3873,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                            lineNumber: 3851,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                    lineNumber: 3822,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                lineNumber: 3818,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            showLightbox && filteredFiles[lightboxIndex] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "fixed inset-0 z-50 bg-black/95 flex items-center justify-center",
                                onClick: ()=>setShowLightbox(false),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative w-full h-full flex items-center justify-center p-4",
                                    onClick: (e)=>e.stopPropagation(),
                                    onTouchStart: (e)=>{
                                        const touch = e.touches[0];
                                        e.currentTarget.dataset.touchStartX = String(touch.clientX);
                                    },
                                    onTouchEnd: (e)=>{
                                        const touchStartX = parseFloat(e.currentTarget.dataset.touchStartX || '0');
                                        const touchEndX = e.changedTouches[0].clientX;
                                        const diff = touchStartX - touchEndX;
                                        if (Math.abs(diff) > 50) {
                                            if (diff > 0) {
                                                // Swipe left - next
                                                setLightboxIndex((prev)=>prev < filteredFiles.length - 1 ? prev + 1 : 0);
                                            } else {
                                                // Swipe right - previous
                                                setLightboxIndex((prev)=>prev > 0 ? prev - 1 : filteredFiles.length - 1);
                                            }
                                        }
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute top-4 right-4 flex items-center gap-2 z-50",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>handleDownloadFile(filteredFiles[lightboxIndex].id),
                                                    className: "p-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:from-blue-400 hover:to-cyan-400 transition-colors",
                                                    title: "ดาวน์โหลด",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                                        className: "w-6 h-6"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                        lineNumber: 3915,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                    lineNumber: 3910,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>{
                                                        setShareFileId(filteredFiles[lightboxIndex].id);
                                                        setShowShareModal(true);
                                                    },
                                                    className: "p-3 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 text-white hover:from-green-400 hover:to-emerald-400 transition-colors",
                                                    title: "แชร์",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Share2$3e$__["Share2"], {
                                                        className: "w-6 h-6"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                        lineNumber: 3927,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                    lineNumber: 3919,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>{
                                                        if (confirm('คุณต้องการลบไฟล์นี้หรือไม่?')) {
                                                            handleDeleteFile(filteredFiles[lightboxIndex].id);
                                                            // Close lightbox if no more files or move to next
                                                            if (filteredFiles.length <= 1) {
                                                                setShowLightbox(false);
                                                            } else if (lightboxIndex >= filteredFiles.length - 1) {
                                                                setLightboxIndex(lightboxIndex - 1);
                                                            }
                                                        }
                                                    },
                                                    className: "p-3 rounded-full bg-gradient-to-r from-red-500 to-pink-500 text-white hover:from-red-400 hover:to-pink-400 transition-colors",
                                                    title: "ลบ",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                        className: "w-6 h-6"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                        lineNumber: 3946,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                    lineNumber: 3931,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setShowLightbox(false),
                                                    className: "p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                        className: "w-6 h-6"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                        lineNumber: 3954,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                    lineNumber: 3950,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                            lineNumber: 3908,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setLightboxIndex((prev)=>prev > 0 ? prev - 1 : filteredFiles.length - 1),
                                            className: "absolute left-4 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-50",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                                className: "w-8 h-8"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                lineNumber: 3967,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                            lineNumber: 3959,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setLightboxIndex((prev)=>prev < filteredFiles.length - 1 ? prev + 1 : 0),
                                            className: "absolute right-4 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-50",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                                className: "w-8 h-8"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                lineNumber: 3977,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                            lineNumber: 3969,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "max-w-6xl max-h-[85vh] rounded-2xl overflow-hidden shadow-2xl",
                                            children: filteredFiles[lightboxIndex].type === 'video' || filteredFiles[lightboxIndex].type === 'clip' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                                                src: filteredFiles[lightboxIndex].url,
                                                poster: filteredFiles[lightboxIndex].thumbnail !== VIDEO_PLACEHOLDER ? filteredFiles[lightboxIndex].thumbnail : undefined,
                                                controls: true,
                                                autoPlay: true,
                                                className: "max-w-full max-h-[85vh] object-contain"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                lineNumber: 3983,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: filteredFiles[lightboxIndex].thumbnail,
                                                alt: filteredFiles[lightboxIndex].name,
                                                className: "max-w-full max-h-[85vh] object-contain"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                lineNumber: 3991,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                            lineNumber: 3981,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "max-w-4xl mx-auto",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        className: "text-2xl font-bold text-white mb-2",
                                                        children: filteredFiles[lightboxIndex].name
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                        lineNumber: 4002,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-4 text-white/70",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "flex items-center gap-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                                        className: "w-4 h-4"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                                        lineNumber: 4007,
                                                                        columnNumber: 25
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    filteredFiles[lightboxIndex].date
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                                lineNumber: 4006,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "flex items-center gap-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hard$2d$drive$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HardDrive$3e$__["HardDrive"], {
                                                                        className: "w-4 h-4"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                                        lineNumber: 4011,
                                                                        columnNumber: 25
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    filteredFiles[lightboxIndex].size
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                                lineNumber: 4010,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "flex items-center gap-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                                                        className: "w-4 h-4"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                                        lineNumber: 4015,
                                                                        columnNumber: 25
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    formatNumber(filteredFiles[lightboxIndex].views),
                                                                    " views"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                                lineNumber: 4014,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                        lineNumber: 4005,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex gap-2 mt-3",
                                                        children: filteredFiles[lightboxIndex].tags.map((tag)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "px-3 py-1 bg-white/20 rounded-full text-white text-sm",
                                                                children: [
                                                                    "#",
                                                                    tag
                                                                ]
                                                            }, tag, true, {
                                                                fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                                lineNumber: 4021,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0)))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                        lineNumber: 4019,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                lineNumber: 4001,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                            lineNumber: 4000,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute top-4 left-4 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white font-medium",
                                            children: [
                                                lightboxIndex + 1,
                                                " / ",
                                                filteredFiles.length
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                            lineNumber: 4033,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                    lineNumber: 3884,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                lineNumber: 3880,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            folderActionSheet.isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-end justify-center",
                                onClick: ()=>setFolderActionSheet({
                                        isOpen: false,
                                        folderId: null,
                                        folderName: ''
                                    }),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-full max-w-lg bg-slate-900 rounded-t-3xl overflow-hidden animate-slide-up",
                                    onClick: (e)=>e.stopPropagation(),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-5 border-b border-white/10",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-12 h-1 bg-white/30 rounded-full mx-auto mb-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                    lineNumber: 4052,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-lg font-semibold text-white text-center",
                                                    children: folderActionSheet.folderName
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                    lineNumber: 4053,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                            lineNumber: 4051,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-4 space-y-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>{
                                                        const folder = displayFolders.find((f)=>f.id === folderActionSheet.folderId);
                                                        if (folder) {
                                                            handleStartEditSubFolder(folder);
                                                        }
                                                        setFolderActionSheet({
                                                            isOpen: false,
                                                            folderId: null,
                                                            folderName: ''
                                                        });
                                                    },
                                                    className: "w-full flex items-center gap-4 px-5 py-4 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pencil$3e$__["Pencil"], {
                                                                className: "w-6 h-6 text-blue-400"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                                lineNumber: 4072,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                            lineNumber: 4071,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-white text-lg",
                                                            children: "แก้ไขชื่อ"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                            lineNumber: 4074,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                    lineNumber: 4061,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>{
                                                        if (folderActionSheet.folderId) {
                                                            handleDeleteSubFolder(folderActionSheet.folderId);
                                                        }
                                                        setFolderActionSheet({
                                                            isOpen: false,
                                                            folderId: null,
                                                            folderName: ''
                                                        });
                                                    },
                                                    className: "w-full flex items-center gap-4 px-5 py-4 rounded-2xl bg-white/5 hover:bg-red-500/20 transition-colors",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                className: "w-6 h-6 text-red-400"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                                lineNumber: 4088,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                            lineNumber: 4087,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-red-400 text-lg",
                                                            children: "ลบโฟลเดอร์"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                            lineNumber: 4090,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                    lineNumber: 4078,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                            lineNumber: 4059,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-4 pt-0",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setFolderActionSheet({
                                                        isOpen: false,
                                                        folderId: null,
                                                        folderName: ''
                                                    }),
                                                className: "w-full py-4 rounded-2xl bg-white/10 text-white font-medium text-lg hover:bg-white/20 transition-colors",
                                                children: "ยกเลิก"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                lineNumber: 4096,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                            lineNumber: 4095,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                    lineNumber: 4046,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                lineNumber: 4042,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            isCreatingSubFolder && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-end justify-center",
                                onClick: ()=>setIsCreatingSubFolder(false),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-full max-w-lg bg-slate-900 rounded-t-3xl overflow-hidden animate-slide-up",
                                    onClick: (e)=>e.stopPropagation(),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-5 border-b border-white/10",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-12 h-1 bg-white/30 rounded-full mx-auto mb-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                    lineNumber: 4119,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-lg font-semibold text-white text-center",
                                                    children: "สร้างโฟลเดอร์ใหม่"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                    lineNumber: 4120,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                            lineNumber: 4118,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-5 space-y-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    value: subFolderDraftName,
                                                    onChange: (e)=>setSubFolderDraftName(e.target.value),
                                                    placeholder: "ตั้งชื่อโฟลเดอร์ใหม่",
                                                    className: "w-full px-4 py-4 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-purple-200/50 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all text-lg",
                                                    autoFocus: true
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                    lineNumber: 4127,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>{
                                                        handleCreateSubFolder();
                                                    },
                                                    className: "w-full py-4 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold text-lg hover:from-green-400 hover:to-emerald-500 shadow-lg shadow-green-500/30 hover:shadow-green-500/50 transition-all duration-200",
                                                    children: "สร้าง"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                    lineNumber: 4135,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                            lineNumber: 4126,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-5 pt-0",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setIsCreatingSubFolder(false),
                                                className: "w-full py-4 rounded-2xl bg-white/10 text-white font-medium text-lg hover:bg-white/20 transition-colors",
                                                children: "ยกเลิก"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                lineNumber: 4147,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                            lineNumber: 4146,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                    lineNumber: 4113,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                lineNumber: 4109,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            fileActionSheet.isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-end md:items-center justify-center",
                                onClick: ()=>setFileActionSheet({
                                        isOpen: false,
                                        fileId: null,
                                        fileName: '',
                                        fileIndex: -1
                                    }),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-full max-w-lg bg-slate-900 rounded-t-3xl md:rounded-3xl overflow-hidden animate-slide-up",
                                    onClick: (e)=>e.stopPropagation(),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-5 border-b border-white/10",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-12 h-1 bg-white/30 rounded-full mx-auto mb-4 md:hidden"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                    lineNumber: 4170,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-lg font-semibold text-white text-center truncate px-4",
                                                    children: fileActionSheet.fileName
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                    lineNumber: 4171,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                            lineNumber: 4169,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-4 space-y-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>{
                                                        if (fileActionSheet.fileIndex >= 0) {
                                                            openLightbox(fileActionSheet.fileIndex);
                                                        }
                                                        setFileActionSheet({
                                                            isOpen: false,
                                                            fileId: null,
                                                            fileName: '',
                                                            fileIndex: -1
                                                        });
                                                    },
                                                    className: "w-full flex items-center gap-4 px-5 py-4 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                                                className: "w-6 h-6 text-purple-400"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                                lineNumber: 4189,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                            lineNumber: 4188,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-white text-lg",
                                                            children: "ดูไฟล์"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                            lineNumber: 4191,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                    lineNumber: 4179,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>{
                                                        if (fileActionSheet.fileId) {
                                                            handleDownloadFile(fileActionSheet.fileId);
                                                        }
                                                        setFileActionSheet({
                                                            isOpen: false,
                                                            fileId: null,
                                                            fileName: '',
                                                            fileIndex: -1
                                                        });
                                                    },
                                                    className: "w-full flex items-center gap-4 px-5 py-4 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                                                className: "w-6 h-6 text-blue-400"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                                lineNumber: 4205,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                            lineNumber: 4204,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-white text-lg",
                                                            children: "ดาวน์โหลด"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                            lineNumber: 4207,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                    lineNumber: 4195,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>{
                                                        if (fileActionSheet.fileId) {
                                                            setIsFileSelectionMode(true);
                                                            if (!selectedFiles.includes(fileActionSheet.fileId)) {
                                                                toggleSelect(fileActionSheet.fileId);
                                                            }
                                                        }
                                                        setFileActionSheet({
                                                            isOpen: false,
                                                            fileId: null,
                                                            fileName: '',
                                                            fileIndex: -1
                                                        });
                                                    },
                                                    className: "w-full flex items-center gap-4 px-5 py-4 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                                className: "w-6 h-6 text-emerald-400"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                                lineNumber: 4224,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                            lineNumber: 4223,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-white text-lg",
                                                            children: "เลือก"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                            lineNumber: 4226,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                    lineNumber: 4211,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>{
                                                        if (fileActionSheet.fileId) {
                                                            handleDeleteFile(fileActionSheet.fileId);
                                                        }
                                                        setFileActionSheet({
                                                            isOpen: false,
                                                            fileId: null,
                                                            fileName: '',
                                                            fileIndex: -1
                                                        });
                                                    },
                                                    className: "w-full flex items-center gap-4 px-5 py-4 rounded-2xl bg-white/5 hover:bg-red-500/20 transition-colors",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                className: "w-6 h-6 text-red-400"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                                lineNumber: 4240,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                            lineNumber: 4239,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-red-400 text-lg",
                                                            children: "ลบไฟล์"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                            lineNumber: 4242,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                    lineNumber: 4230,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                            lineNumber: 4177,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-4 pt-0",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setFileActionSheet({
                                                        isOpen: false,
                                                        fileId: null,
                                                        fileName: '',
                                                        fileIndex: -1
                                                    }),
                                                className: "w-full py-4 rounded-2xl bg-white/10 text-white font-medium text-lg hover:bg-white/20 transition-colors",
                                                children: "ยกเลิก"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                                lineNumber: 4248,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                            lineNumber: 4247,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                    lineNumber: 4164,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                                lineNumber: 4160,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                        lineNumber: 2525,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FileProgress$2f$FileProgressContainer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FileProgressContainer"], {
                        items: progressItems,
                        onCancel: cancelTransfer,
                        onDismiss: dismissItem,
                        onClearAll: clearCompleted,
                        position: "bottom-right"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                        lineNumber: 4261,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(fullscreen)/all-files-gallery/page.tsx",
                lineNumber: 2464,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
};
_s(AllFilesGalleryPage, "PnR3+QeepARcZ+qOMWB5NQ74I/o=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LoadingContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLoading"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FileProgress$2f$useFileProgress$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFileProgress"]
    ];
});
_c = AllFilesGalleryPage;
const __TURBOPACK__default__export__ = AllFilesGalleryPage;
var _c;
__turbopack_context__.k.register(_c, "AllFilesGalleryPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_103a1b87._.js.map