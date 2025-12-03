(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["chunks/[root-of-the-server]__8978dbac._.js",
"[externals]/node:buffer [external] (node:buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:buffer", () => require("node:buffer"));

module.exports = mod;
}),
"[externals]/node:async_hooks [external] (node:async_hooks, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:async_hooks", () => require("node:async_hooks"));

module.exports = mod;
}),
"[project]/src/middleware.ts [middleware-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "config",
    ()=>config,
    "middleware",
    ()=>middleware
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$api$2f$server$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/api/server.js [middleware-edge] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/web/exports/index.js [middleware-edge] (ecmascript)");
;
// Supported locales
const locales = [
    "th",
    "en"
];
const defaultLocale = "th";
function middleware(request) {
    const { pathname } = request.nextUrl;
    // Check authentication for protected routes
    const token = request.cookies.get("authToken")?.value;
    // Public paths that don't require authentication
    const publicPaths = [
        "/login",
        "/register",
        "/forgot-password",
        "/"
    ];
    const isPublicPath = publicPaths.includes(pathname) || pathname.startsWith("/_next") || pathname.startsWith("/api") || pathname.startsWith("/images") || pathname.startsWith("/downloads") || pathname.startsWith("/static") || pathname.startsWith("/share/video") || // LINE video share pages (public)
    pathname.includes(".");
    // If accessing any path without token (except public paths), redirect to login
    if (!isPublicPath && !token) {
        const loginUrl = new URL("/login", request.url);
        loginUrl.searchParams.set("redirect", pathname);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].redirect(loginUrl);
    }
    // If already logged in and trying to access login page, redirect to home
    if (token && pathname === "/login") {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].redirect(new URL("/home", request.url));
    }
    // ตรวจสอบว่า URL มี locale prefix หรือไม่
    const pathnameHasLocale = locales.some((locale)=>pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`);
    if (pathnameHasLocale) {
        // ถ้ามี locale prefix (เช่น /th/contact-inquiry)
        // ให้ rewrite ไปยัง path จริงโดยไม่มี locale prefix
        const locale = pathname.split("/")[1];
        const pathWithoutLocale = pathname.replace(`/${locale}`, "") || "/";
        // Rewrite URL
        const url = request.nextUrl.clone();
        url.pathname = pathWithoutLocale;
        // เก็บ locale ไว้ใน header
        const response = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].rewrite(url);
        response.headers.set("x-locale", locale);
        return response;
    }
    // ถ้าไม่มี locale prefix ให้ทำงานปกติ
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].next();
}
const config = {
    // กำหนด path ที่ต้องการให้ middleware ทำงาน
    matcher: [
        // ไม่รวม static files และ API routes
        "/((?!api|_next/static|_next/image|favicon.ico|images|downloads|TPP.ico).*)"
    ]
};
}),
]);

//# sourceMappingURL=%5Broot-of-the-server%5D__8978dbac._.js.map