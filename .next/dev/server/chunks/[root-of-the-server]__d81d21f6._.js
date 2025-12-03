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
"[project]/src/app/api/facebook-ads-phone-leads-sql/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
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
        const adIdsParam = searchParams.get("ad_ids"); // Format: comma-separated fb_ad_id (optional)
        const dateStartParam = searchParams.get("date_start"); // Format: YYYY-MM-DD (optional)
        const dateEndParam = searchParams.get("date_end"); // Format: YYYY-MM-DD (optional)
        console.log("📞 [Phone Leads SQL API] Request params:", {
            adIdsParam,
            dateStartParam,
            dateEndParam
        });
        client = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].connect();
        console.log("✅ [Phone Leads SQL API] Database connected successfully");
        // Build SQL query based on the new schema
        let query;
        const queryParams = [];
        if (adIdsParam) {
            // Query for specific fb_ad_ids - group by fb_ad_id
            const adIds = adIdsParam.split(",").map((id)=>id.trim());
            query = `
        SELECT
          ads.fb_ad_id,
          ads.ad_name,
          COUNT(DISTINCT ct.customer_id) AS customers_with_phone
        FROM "BJH-Server".fb_customer_tags AS ct
        JOIN "BJH-Server".fb_tags AS t
          ON t.id = ct.tag_id
        JOIN "BJH-Server".fb_conversations AS conv
          ON conv.customer_id = ct.customer_id
        JOIN "BJH-Server".fb_conversation_sources AS src
          ON src.conversation_id = conv.id
        JOIN "BJH-Server".fb_ads AS ads
          ON ads.id = src.ad_id
        WHERE t.name = 'phone'
          AND ads.fb_ad_id = ANY($1)`;
            queryParams.push(adIds);
            // Add date range filter if provided
            if (dateStartParam && dateEndParam) {
                query += `
          AND ct.assigned_at::date BETWEEN $2 AND $3`;
                queryParams.push(dateStartParam, dateEndParam);
            } else if (dateStartParam) {
                query += `
          AND ct.assigned_at::date >= $2`;
                queryParams.push(dateStartParam);
            } else if (dateEndParam) {
                query += `
          AND ct.assigned_at::date <= $2`;
                queryParams.push(dateEndParam);
            }
            query += `
        GROUP BY
          ads.fb_ad_id,
          ads.ad_name
        ORDER BY
          customers_with_phone DESC
      `;
        } else {
            // Query for all ad_ids with phone leads
            query = `
        SELECT
          ads.fb_ad_id,
          ads.ad_name,
          COUNT(DISTINCT ct.customer_id) AS customers_with_phone
        FROM "BJH-Server".fb_customer_tags AS ct
        JOIN "BJH-Server".fb_tags AS t
          ON t.id = ct.tag_id
        JOIN "BJH-Server".fb_conversations AS conv
          ON conv.customer_id = ct.customer_id
        JOIN "BJH-Server".fb_conversation_sources AS src
          ON src.conversation_id = conv.id
        JOIN "BJH-Server".fb_ads AS ads
          ON ads.id = src.ad_id
        WHERE t.name = 'phone'`;
            // Add date range filter if provided
            if (dateStartParam && dateEndParam) {
                query += `
          AND ct.assigned_at::date BETWEEN $1 AND $2`;
                queryParams.push(dateStartParam, dateEndParam);
            } else if (dateStartParam) {
                query += `
          AND ct.assigned_at::date >= $1`;
                queryParams.push(dateStartParam);
            } else if (dateEndParam) {
                query += `
          AND ct.assigned_at::date <= $1`;
                queryParams.push(dateEndParam);
            }
            query += `
        GROUP BY
          ads.fb_ad_id,
          ads.ad_name
        ORDER BY
          customers_with_phone DESC
      `;
        }
        console.log("📞 [Phone Leads SQL API] Executing query:", query);
        console.log("📞 [Phone Leads SQL API] Query params:", queryParams);
        const result = await client.query(query, queryParams);
        console.log("✅ [Phone Leads SQL API] Query result:", result.rows.length, "rows");
        console.log("📊 [Phone Leads SQL API] Sample data:", result.rows.slice(0, 5));
        // Convert to map for easy lookup
        // Format: { "fb_ad_id_1": count, "fb_ad_id_2": count, ... }
        const phoneLeadsMap = {};
        result.rows.forEach((row)=>{
            phoneLeadsMap[row.fb_ad_id] = parseInt(row.customers_with_phone) || 0;
            console.log(`  📍 Ad ${row.fb_ad_id} (${row.ad_name}): ${row.customers_with_phone} phone leads`);
        });
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            data: phoneLeadsMap,
            details: result.rows,
            count: result.rows.length
        });
    } catch (error) {
        console.error("❌ [Phone Leads SQL API] Error:", error);
        console.error("❌ [Phone Leads SQL API] Error stack:", error?.stack);
        console.error("❌ [Phone Leads SQL API] Error name:", error?.name);
        console.error("❌ [Phone Leads SQL API] Error message:", error?.message);
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

//# sourceMappingURL=%5Broot-of-the-server%5D__d81d21f6._.js.map