module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/pg [external] (pg, esm_import)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

const mod = await __turbopack_context__.y("pg");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[project]/src/lib/db.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/pg [external] (pg, esm_import)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
// กำหนดให้ pg ไม่แปลง DATE เป็น JavaScript Date object
// เพื่อหลีกเลี่ยงปัญหา timezone shift
__TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$29$__["types"].setTypeParser(__TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$29$__["types"].builtins.DATE, (val)=>val); // DATE - return as string
__TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$29$__["types"].setTypeParser(__TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$29$__["types"].builtins.TIMESTAMP, (val)=>val); // TIMESTAMP - return as string
__TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$29$__["types"].setTypeParser(__TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$29$__["types"].builtins.TIMESTAMPTZ, (val)=>val); // TIMESTAMPTZ - return as string
// สร้าง connection pool สำหรับ PostgreSQL (n8n.bjhbangkok.com)
const pool = new __TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$29$__["Pool"]({
    host: process.env.DB_HOST || "n8n.bjhbangkok.com",
    port: parseInt(process.env.DB_PORT || "5432"),
    user: process.env.DB_USER || "postgres",
    password: process.env.DB_PASSWORD || "Bjh12345!!",
    database: process.env.DB_NAME || "postgres",
    max: 20,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 30000,
    statement_timeout: 60000,
    query_timeout: 60000,
    // n8n ไม่รองรับ SSL
    ssl: false
});
// ตรวจสอบการเชื่อมต่อ
pool.on("connect", ()=>{
// Connected to database
});
pool.on("error", (err)=>{
    // Database error
    // ไม่ exit ใน production เพื่อให้ retry ได้
    if ("TURBOPACK compile-time truthy", 1) {
        process.exit(-1);
    }
});
const __TURBOPACK__default__export__ = pool;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/app/api/facebook-ads-phone-leads/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "GET",
    ()=>GET
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/db.ts [app-route] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
async function GET(request) {
    let client;
    try {
        const { searchParams } = new URL(request.url);
        const dateParam = searchParams.get("date"); // Format: YYYY-MM-DD (optional)
        const adIdsParam = searchParams.get("ad_ids"); // Format: comma-separated ad IDs (optional)
        console.log("📞 [Phone Leads API] Request params:", {
            dateParam,
            adIdsParam
        });
        client = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].connect();
        console.log("✅ [Phone Leads API] Database connected successfully");
        // Build SQL query - Group by date OR by ad_id
        let query;
        const queryParams = [];
        if (adIdsParam) {
            // Query for specific ad IDs - group by ad_id
            const adIds = adIdsParam.split(",").map((id)=>id.trim());
            query = `
        SELECT
          c.ad_id,
          COUNT(DISTINCT ct.customer_id) AS customers_with_phone
        FROM "BJH-Server".fb_customer_tags ct
        JOIN "BJH-Server".fb_tags t ON t.id = ct.tag_id
        JOIN "BJH-Server".fb_customers c ON c.id = ct.customer_id
        WHERE t.name = 'phone'
          AND c.ad_id = ANY($1)
        GROUP BY c.ad_id
      `;
            queryParams.push(adIds);
        } else {
            // Query for all dates - group by date
            query = `
        SELECT
          ct.assigned_at::date AS date,
          COUNT(DISTINCT ct.customer_id) AS customers_with_phone
        FROM "BJH-Server".fb_customer_tags ct
        JOIN "BJH-Server".fb_tags t ON t.id = ct.tag_id
        WHERE t.name = 'phone'
      `;
            // Add date filter if provided (for single date)
            if (dateParam) {
                queryParams.push(dateParam);
                query += ` AND ct.assigned_at::date = $${queryParams.length}`;
            }
            query += `
        GROUP BY ct.assigned_at::date
        ORDER BY date DESC
      `;
        }
        console.log("📞 [Phone Leads API] Executing query:", query);
        console.log("📞 [Phone Leads API] Query params:", queryParams);
        const result = await client.query(query, queryParams);
        console.log("✅ [Phone Leads API] Query result:", result.rows.length, "rows");
        console.log("📊 [Phone Leads API] Sample data:", result.rows.slice(0, 3));
        // Convert to map for easy lookup
        const phoneLeadsMap = {};
        if (adIdsParam) {
            // Format: { "ad_id_1": count, "ad_id_2": count, ... }
            result.rows.forEach((row)=>{
                phoneLeadsMap[row.ad_id] = parseInt(row.customers_with_phone) || 0;
                console.log(`  📍 Ad ${row.ad_id}: ${row.customers_with_phone} phone leads`);
            });
        } else {
            // Format: { "YYYY-MM-DD": count, ... }
            result.rows.forEach((row)=>{
                const date = new Date(row.date);
                const year = date.getFullYear();
                const month = String(date.getMonth() + 1).padStart(2, "0");
                const day = String(date.getDate()).padStart(2, "0");
                const dateStr = `${year}-${month}-${day}`;
                phoneLeadsMap[dateStr] = parseInt(row.customers_with_phone) || 0;
                console.log(`  📍 Date ${dateStr}: ${row.customers_with_phone} phone leads`);
            });
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            data: phoneLeadsMap,
            details: result.rows,
            count: result.rows.length
        });
    } catch (error) {
        console.error("❌ [Phone Leads API] Error:", error);
        console.error("❌ [Phone Leads API] Error stack:", error?.stack);
        console.error("❌ [Phone Leads API] Error name:", error?.name);
        console.error("❌ [Phone Leads API] Error message:", error?.message);
        // Return empty data instead of error to prevent breaking the UI
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: false,
            error: "Failed to fetch phone leads data",
            details: error?.message || error?.toString() || "Unknown error",
            errorType: error?.name || "Error",
            data: {}
        });
    } finally{
        // Release the client back to the pool
        if (client) {
            client.release();
        }
    }
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__1d3e08db._.js.map