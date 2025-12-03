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
"[project]/src/app/api/customer-data/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "GET",
    ()=>GET,
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/db.ts [app-route] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
// Mapping ชื่อคอลัมน์จากภาษาอังกฤษ (ในฐานข้อมูล) เป็นภาษาไทย (สำหรับ UI)
const columnMapping = {
    id: "id",
    id_all: "id_all",
    status: "สถานะ",
    source: "แหล่งที่มา",
    interested_product: "ผลิตภัณฑ์ที่สนใจ",
    doctor: "หมอ",
    contact_staff: "ผู้ติดต่อ",
    customer_name: "ชื่อ",
    phone: "เบอร์โทร",
    note: "หมายเหตุ",
    last_followup: "วันที่ติดตามครั้งล่าสุด",
    next_followup: "วันที่ติดตามครั้งถัดไป",
    consult_date: "วันที่ Consult",
    surgery_date: "วันที่ผ่าตัด",
    appointment_time: "เวลาที่นัด",
    got_contact_date: "วันที่ได้ชื่อ เบอร์",
    booked_consult_date: "วันที่ได้นัด consult",
    booked_surgery_date: "วันที่ได้นัดผ่าตัด",
    proposed_amount: "ยอดนำเสนอ",
    customer_code: "รหัสลูกค้า",
    star_flag: "ติดดาว",
    country: "ประเทศ",
    car_call_time: "เวลาให้เรียกรถ",
    lat: "Lat",
    long: "Long",
    photo_note: "รูป",
    gender: "เพศ",
    age: "อายุ",
    occupation: "อาชีพ",
    from_province: "มาจากจังหวัด",
    travel_method: "จะเดินทางมารพ.ยังไง",
    contact_prefer_date: "วันที่สะดวกให้ติดต่อ",
    contact_prefer_time: "ช่วงเวลาที่สะดวกให้ติดต่อ",
    free_program: "โครงการฟรี",
    event_id: "Event ID",
    html_link: "htmlLink",
    ical_uid: "iCalUID",
    log: "Log",
    doc_calendar: "Doc Calendar",
    doc_event_id: "Doc Event ID",
    doc_html_link: "Doc htmlLink",
    doc_ical_uid: "Doc iCalUID",
    line_note: "line",
    line_doctor_note: "line หมอ",
    ivr: "IVR",
    transfer_to: "TRANSFER_TO",
    status_call: "status_call",
    created_at: "created_at",
    updated_at: "updated_at"
};
// Reverse mapping สำหรับแปลงกลับจากภาษาไทยเป็นภาษาอังกฤษ
const reverseColumnMapping = Object.entries(columnMapping).reduce((acc, [eng, thai])=>{
    acc[thai] = eng;
    return acc;
}, {});
async function GET(request) {
    let client;
    try {
        // ใช้ client แทน pool.query โดยตรง เพื่อควบคุม timeout ได้ดีขึ้น
        client = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].connect();
        // ดึงข้อมูลทั้งหมดจากตาราง bjh_all_leads ใน schema BJH-Server
        const result = await client.query('SELECT *, id_all AS id FROM "BJH-Server".bjh_master_customers ORDER BY id_all DESC');
        const customers = result.rows;
        // แปลงชื่อคอลัมน์เป็นภาษาไทย
        const thaiHeaders = result.fields.map((field)=>columnMapping[field.name] || field.name);
        // แปลงข้อมูลให้อยู่ในรูปแบบ { columns: [], data: [] } เหมือน Railway API
        const formattedData = customers.map((row)=>{
            const rowObj = {};
            result.fields.forEach((field, index)=>{
                const thaiColumnName = thaiHeaders[index];
                rowObj[thaiColumnName] = row[field.name];
            });
            return rowObj;
        });
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            columns: thaiHeaders,
            data: formattedData,
            totalRecords: customers.length,
            source: `${process.env.DB_HOST || "n8n.bjhbangkok.com"}:${process.env.DB_PORT || "5432"}`
        });
    } catch (error) {
        console.error("Database error:", error);
        console.error("DB_HOST:", process.env.DB_HOST || "192.168.1.19");
        console.error("Error code:", error.code);
        // ให้ข้อความที่ชัดเจนกว่า
        let errorMessage = "Failed to connect to database";
        if (error.code === "ETIMEDOUT" || error.message.includes("timeout")) {
            errorMessage = "Database connection timeout. กรุณาตรวจสอบ DB_HOST environment variable หรือ migrate ไปยัง Supabase";
        } else if (error.code === "ENOTFOUND") {
            errorMessage = "Database host not found. กรุณาตรวจสอบ DB_HOST environment variable";
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: false,
            error: errorMessage,
            details: error.message,
            code: error.code,
            host: process.env.DB_HOST || "192.168.1.19"
        }, {
            status: 500
        });
    } finally{
        // Release client กลับไปยัง pool
        if (client) {
            client.release();
        }
    }
}
async function POST(request) {
    try {
        const body = await request.json();
        const { action, data } = body;
        if (action === "update") {
            // อัพเดทข้อมูลลูกค้า
            const { id, ...updateData } = data;
            // แปลงชื่อคอลัมน์จากภาษาไทยเป็นภาษาอังกฤษ
            const englishData = {};
            Object.entries(updateData).forEach(([thaiKey, value])=>{
                const englishKey = reverseColumnMapping[thaiKey] || thaiKey;
                // กรองฟิลด์ที่ไม่ควรอัปเดต
                if (englishKey !== "id" && englishKey !== "created_at" && englishKey !== "updated_at") {
                    englishData[englishKey] = value;
                }
            });
            // สร้าง SQL query สำหรับ update
            const fields = Object.keys(englishData);
            const values = Object.values(englishData);
            const setClause = fields.map((field, index)=>`${field} = $${index + 1}`).join(", ");
            const primaryKeyColumn = "id_all";
            const query = `UPDATE "BJH-Server".bjh_master_customers SET ${setClause} WHERE ${primaryKeyColumn} = $${fields.length + 1} RETURNING *`;
            const result = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].query(query, [
                ...values,
                id
            ]);
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: true,
                message: "Customer updated successfully",
                data: result.rows[0]
            });
        } else if (action === "create") {
            // สร้างลูกค้าใหม่
            try {
                // แปลงชื่อคอลัมน์จากภาษาไทยเป็นภาษาอังกฤษ
                const englishData = {};
                Object.entries(data).forEach(([thaiKey, value])=>{
                    const englishKey = reverseColumnMapping[thaiKey] || thaiKey;
                    // กรอง id, created_at, updated_at ออก เพื่อให้ database สร้างให้เอง
                    if (englishKey !== "id" && englishKey !== "created_at" && englishKey !== "updated_at" && value !== "" && value !== null && value !== undefined) {
                        englishData[englishKey] = value;
                    }
                });
                // If no fields to insert, return error
                if (Object.keys(englishData).length === 0) {
                    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                        success: false,
                        error: "ไม่มีข้อมูลที่จะเพิ่ม กรุณากรอกข้อมูลอย่างน้อย 1 ฟิลด์"
                    }, {
                        status: 400
                    });
                }
                const fields = Object.keys(englishData);
                const values = Object.values(englishData);
                const placeholders = fields.map((_, index)=>`$${index + 1}`).join(", ");
                const query = `INSERT INTO "BJH-Server".bjh_master_customers (${fields.join(", ")}) VALUES (${placeholders}) RETURNING *`;
                console.log("Inserting with fields:", fields);
                console.log("Values:", values);
                const result = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].query(query, values);
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    success: true,
                    message: "Customer created successfully",
                    data: result.rows[0]
                });
            } catch (insertError) {
                console.error("Insert error:", insertError);
                // Check if it's a duplicate key error
                if (insertError.code === "23505") {
                    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                        success: false,
                        error: "ข้อมูลซ้ำ กรุณาตรวจสอบข้อมูลก่อนส่ง",
                        code: "DUPLICATE_ENTRY",
                        details: insertError.message
                    }, {
                        status: 409
                    });
                }
                throw insertError;
            }
        } else if (action === "delete") {
            // ลบข้อมูลลูกค้า
            const { id } = data;
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].query('DELETE FROM "BJH-Server".bjh_master_customers WHERE id_all = $1', [
                id
            ]);
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: true,
                message: "Customer deleted successfully"
            });
        } else if (action === "deleteMultiple") {
            // ลบข้อมูลลูกค้าหลายรายการพร้อมกัน
            const { ids } = data;
            if (!Array.isArray(ids) || ids.length === 0) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    success: false,
                    error: "กรุณาระบุ ID ที่ต้องการลบ"
                }, {
                    status: 400
                });
            }
            // สร้าง placeholders สำหรับ SQL query ($1, $2, $3, ...)
            const placeholders = ids.map((_, index)=>`$${index + 1}`).join(", ");
            const query = `DELETE FROM "BJH-Server".bjh_master_customers WHERE id_all IN (${placeholders}) RETURNING id_all AS id`;
            const result = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].query(query, ids);
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: true,
                message: `ลบข้อมูลสำเร็จ ${result.rowCount} รายการ`,
                deletedCount: result.rowCount,
                deletedIds: result.rows.map((row)=>row.id)
            });
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: false,
            error: "Invalid action"
        }, {
            status: 400
        });
    } catch (error) {
        console.error("Database error:", error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: false,
            error: error.message || "Failed to process request",
            details: error.stack
        }, {
            status: 500
        });
    }
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__3d493163._.js.map