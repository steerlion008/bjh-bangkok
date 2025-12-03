(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/api/customer-data/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "columnMapping",
    ()=>columnMapping,
    "getLatestUpdatedAt",
    ()=>getLatestUpdatedAt,
    "getThaiHeaders",
    ()=>getThaiHeaders,
    "mapRowsToThai",
    ()=>mapRowsToThai,
    "reverseColumnMapping",
    ()=>reverseColumnMapping
]);
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
const reverseColumnMapping = Object.entries(columnMapping).reduce((acc, [eng, thai])=>{
    acc[thai] = eng;
    return acc;
}, {});
const mapFieldNameToThai = (fieldName)=>columnMapping[fieldName] || fieldName;
const getThaiHeaders = (fields)=>fields.map((field)=>mapFieldNameToThai(field.name));
const mapRowsToThai = (rows, fields)=>rows.map((row)=>{
        const rowObj = {};
        fields.forEach((field, index)=>{
            const thaiColumnName = mapFieldNameToThai(field.name);
            rowObj[thaiColumnName] = row[field.name];
        });
        return rowObj;
    });
const getLatestUpdatedAt = (rows)=>{
    let latest = null;
    rows.forEach((row)=>{
        if (row.updated_at) {
            const date = new Date(row.updated_at);
            if (!Number.isNaN(date.getTime())) {
                const iso = date.toISOString();
                if (!latest || iso > latest) {
                    latest = iso;
                }
            }
        }
    });
    return latest;
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/(fullscreen)/customer-all-data/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CustomerAllDataPageWrapper
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-up.js [app-client] (ecmascript) <export default as ChevronUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$funnel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Filter$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/funnel.js [app-client] (ecmascript) <export default as Filter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$EditCustomerModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/EditCustomerModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AddCustomerModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/AddCustomerModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$customer$2d$data$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/api/customer-data/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
// Add custom styles for scrollbar (horizontal and vertical)
const customScrollbarStyle = `
  .custom-scrollbar::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }
  .custom-scrollbar::-webkit-scrollbar-track {
    background: rgba(219, 234, 254, 0.5);
    border-radius: 10px;
  }
  .custom-scrollbar::-webkit-scrollbar-thumb {
    background: linear-gradient(to bottom, #3b82f6, #06b6d4);
    border-radius: 10px;
  }
  .custom-scrollbar::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(to bottom, #0284c7, #0891b2);
  }
  .custom-scrollbar-horizontal::-webkit-scrollbar {
    height: 8px;
    width: 8px;
  }
  .custom-scrollbar-horizontal::-webkit-scrollbar-track {
    background: rgba(219, 234, 254, 0.5);
    border-radius: 10px;
  }
  .custom-scrollbar-horizontal::-webkit-scrollbar-thumb {
    background: linear-gradient(to right, #3b82f6, #06b6d4);
    border-radius: 10px;
  }
  .custom-scrollbar-horizontal::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(to right, #0284c7, #0891b2);
  }
`;
const CustomerAllDataPage = ()=>{
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const customerType = searchParams.get("type"); // "existing" or "new"
    const [tableData, setTableData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [lastUpdateTimestamp, setLastUpdateTimestamp] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [currentUser, setCurrentUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [searchTerm, setSearchTerm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [debouncedSearchTerm, setDebouncedSearchTerm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [filterColumn, setFilterColumn] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("all");
    const [showFilterMenu, setShowFilterMenu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [statusFilter, setStatusFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("all");
    const [showStatusMenu, setShowStatusMenu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [productFilter, setProductFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("all");
    const [showProductMenu, setShowProductMenu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [contactFilter, setContactFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("all");
    const [showContactMenu, setShowContactMenu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showFollowUpLastMenu, setShowFollowUpLastMenu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [followUpLastDate, setFollowUpLastDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [showFollowUpNextMenu, setShowFollowUpNextMenu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [followUpNextDate, setFollowUpNextDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [showConsultMenu, setShowConsultMenu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [consultDate, setConsultDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [showSurgeryMenu, setShowSurgeryMenu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [surgeryDate, setSurgeryDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [showGetNameMenu, setShowGetNameMenu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [getNameDate, setGetNameDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [showGetConsultApptMenu, setShowGetConsultApptMenu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [getConsultApptDate, setGetConsultApptDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [showGetSurgeryApptMenu, setShowGetSurgeryApptMenu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [getSurgeryApptDate, setGetSurgeryApptDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [sortColumn, setSortColumn] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [sortDirection, setSortDirection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("asc");
    const [currentPage, setCurrentPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [itemsPerPage, setItemsPerPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(500);
    const [selectedRow, setSelectedRow] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [editedRow, setEditedRow] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isEditModalOpen, setIsEditModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [editingCustomer, setEditingCustomer] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isAddModalOpen, setIsAddModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedIds, setSelectedIds] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isDeleting, setIsDeleting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showFilterSheet, setShowFilterSheet] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [statusOptions, setStatusOptions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [tableSizeOptions, setTableSizeOptions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [showTableSizeMenu, setShowTableSizeMenu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [tableSize, setTableSize] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(500);
    const tableDataRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const fetchData = async ()=>{
        try {
            setIsLoading(true);
            // ใช้ API endpoint ที่เชื่อมกับ n8n database
            const response = await fetch("/api/customer-data");
            const result = await response.json();
            if (!result.success || !result.columns || !result.data || result.data.length === 0) {
                return;
            }
            // API ตอนนี้ return format: { success: true, columns: [...], data: [{...}, {...}], ... }
            // ข้อมูลเป็น array of objects แล้ว ไม่ต้องแปลง
            // รวม 'id' ใน headers เพื่อแสดงในตาราง
            const headers = result.columns;
            const formattedData = result.data;
            const tables = [
                {
                    tableNumber: 1,
                    headers: headers,
                    rowCount: formattedData.length,
                    data: formattedData
                }
            ];
            if (tables && tables.length > 0) {
                const sanitizedTables = tables.map((table)=>{
                    // Trim whitespace so columns with stray spaces still render and match filters
                    const sanitizedHeaders = table.headers.map((header)=>header.trim());
                    const sanitizedData = table.data.map((row)=>{
                        const sanitizedRow = {};
                        Object.entries(row).forEach(([key, value])=>{
                            sanitizedRow[key.trim()] = value;
                        });
                        return sanitizedRow;
                    });
                    return {
                        ...table,
                        headers: sanitizedHeaders,
                        data: sanitizedData,
                        rowCount: sanitizedData.length
                    };
                });
                // Define the desired column order for consistency between table and form
                const columnOrder = [
                    "ผู้ติดต่อ",
                    "สถานะ",
                    "ผลิตภัณฑ์ที่สนใจ",
                    "ชื่อ",
                    "เบอร์โทร",
                    "เพศ",
                    "แหล่งที่มา",
                    "หมายเหตุ",
                    "วันที่ได้ชื่อ เบอร์",
                    "วันที่ติดตามครั้งล่าสุด",
                    "วันที่ติดตามครั้งถัดไป",
                    "วันที่ได้นัด consult",
                    "วันที่ Consult",
                    "วันที่ได้นัดผ่าตัด",
                    "วันที่ผ่าตัด",
                    "เวลาที่นัด",
                    "หมอ",
                    "ยอดนำเสนอ",
                    "รหัสลูกค้า",
                    "ติดดาว",
                    "ประเทศ",
                    "เวลาให้เรียกรถ",
                    "Lat",
                    "Long",
                    "id"
                ];
                // Mandatory fields that should always be shown even if empty
                const mandatoryFields = [
                    "สถานะ",
                    "ผลิตภัณฑ์ที่สนใจ",
                    "ชื่อ",
                    "เบอร์โทร",
                    "แหล่งที่มา",
                    "เพศ"
                ];
                const allHeadersSet = new Set();
                const allHeaders = [];
                // First add mandatory fields in the column order
                columnOrder.forEach((header)=>{
                    if (mandatoryFields.includes(header) && !allHeadersSet.has(header)) {
                        allHeadersSet.add(header);
                        allHeaders.push(header);
                    }
                });
                // Then add other headers in the desired order that exist in data
                columnOrder.forEach((header)=>{
                    if (!allHeadersSet.has(header)) {
                        sanitizedTables.forEach((table)=>{
                            if (table.headers.includes(header) && !allHeadersSet.has(header)) {
                                allHeadersSet.add(header);
                                allHeaders.push(header);
                            }
                        });
                    }
                });
                // Then add any remaining headers not in the columnOrder
                sanitizedTables.forEach((table)=>{
                    table.headers.forEach((header)=>{
                        if (!allHeadersSet.has(header)) {
                            allHeadersSet.add(header);
                            allHeaders.push(header);
                        }
                    });
                });
                const filteredHeaders = allHeaders.filter((header)=>{
                    // Exclude specified columns
                    const excludedColumns = [
                        "รูป",
                        "อายุ",
                        "รหัสลูกค้า",
                        "อาชีพ",
                        "มาจากจังหวัด",
                        "จะเดินทางมารพ.ยังไง",
                        "Event ID",
                        "htmlLink",
                        "iCalUID",
                        "Log",
                        "Doc Calendar",
                        "Doc Event ID",
                        "Doc htmlLink",
                        "Doc iCalUID",
                        "line",
                        "line หมอ",
                        "IVR",
                        "TRANSFER_TO",
                        "status_call"
                    ];
                    if (excludedColumns.includes(header)) {
                        return false;
                    }
                    // Always include mandatory fields
                    if (mandatoryFields.includes(header)) {
                        return true;
                    }
                    return sanitizedTables.some((table)=>{
                        return table.data.some((row)=>row[header] !== undefined && row[header] !== null && row[header] !== "");
                    });
                });
                const allData = [];
                sanitizedTables.forEach((table)=>{
                    allData.push(...table.data);
                });
                // Filter by customer type based on CN number (cn column from OPD system)
                let typeFilteredData = allData;
                if (customerType === "existing") {
                    // ลูกค้าเก่า - customers with CN number (opened OPD)
                    typeFilteredData = allData.filter((row)=>{
                        const cnValue = row["cn"];
                        return cnValue && cnValue.toString().trim() !== "";
                    });
                } else if (customerType === "new") {
                    // ลูกค้าใหม่ - customers without CN number (not opened OPD yet)
                    typeFilteredData = allData.filter((row)=>{
                        const cnValue = row["cn"];
                        return !cnValue || cnValue.toString().trim() === "";
                    });
                }
                // Keep all rows that have at least one value in any header
                const filteredData = typeFilteredData.filter((row)=>{
                    return filteredHeaders.some((header)=>{
                        const value = row[header];
                        return value !== undefined && value !== null && value !== "";
                    });
                });
                const mergedTable = {
                    tableNumber: 1,
                    headers: filteredHeaders,
                    rowCount: filteredData.length,
                    data: filteredData
                };
                setTableData([
                    mergedTable
                ]);
                const latestTimestamp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$customer$2d$data$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLatestUpdatedAt"])(result.data);
                if (latestTimestamp) {
                    setLastUpdateTimestamp(latestTimestamp);
                }
            } else {
                setTableData([]);
            }
        } catch (err) {
        // Error during fetch
        } finally{
            setIsLoading(false);
        }
    };
    const fetchStatusOptions = async ()=>{
        try {
            const response = await fetch("/api/status-options");
            const result = await response.json();
            if (result.success && result.data) {
                setStatusOptions(result.data);
            } else {
                console.error("Failed to fetch status options:", result.error);
                // Fallback to default if API fails
                setStatusOptions([
                    {
                        value: "all",
                        label: "ทั้งหมด",
                        color: "bg-gray-200 text-gray-800"
                    }
                ]);
            }
        } catch (error) {
            console.error("Error fetching status options:", error);
            // Fallback to default if API fails
            setStatusOptions([
                {
                    value: "all",
                    label: "ทั้งหมด",
                    color: "bg-gray-200 text-gray-800"
                }
            ]);
        }
    };
    const fetchTableSizeOptions = async ()=>{
        try {
            const response = await fetch("/api/table-size-options");
            const result = await response.json();
            if (result.success && result.data) {
                setTableSizeOptions(result.data);
            } else {
                console.error("Failed to fetch table size options:", result.error);
            }
        } catch (error) {
            console.error("Error fetching table size options:", error);
        }
    };
    const fetchRealtimeUpdates = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CustomerAllDataPage.useCallback[fetchRealtimeUpdates]": async ()=>{
            if (!lastUpdateTimestamp || tableDataRef.current.length === 0) {
                return;
            }
            try {
                const response = await fetch(`/api/customer-updates?since=${encodeURIComponent(lastUpdateTimestamp)}`);
                const result = await response.json();
                if (!response.ok || result.success === false) {
                    return;
                }
                if (!Array.isArray(result.data) || result.data.length === 0) {
                    return;
                }
                const currentTable = tableDataRef.current[0];
                if (!currentTable) {
                    return;
                }
                const mergedMap = new Map();
                currentTable.data.forEach({
                    "CustomerAllDataPage.useCallback[fetchRealtimeUpdates]": (row)=>{
                        if (row.id !== undefined && row.id !== null) {
                            mergedMap.set(row.id, row);
                        }
                    }
                }["CustomerAllDataPage.useCallback[fetchRealtimeUpdates]"]);
                result.data.forEach({
                    "CustomerAllDataPage.useCallback[fetchRealtimeUpdates]": (incoming)=>{
                        if (incoming.id === undefined || incoming.id === null) {
                            return;
                        }
                        const existing = mergedMap.get(incoming.id);
                        mergedMap.set(incoming.id, existing ? {
                            ...existing,
                            ...incoming
                        } : incoming);
                    }
                }["CustomerAllDataPage.useCallback[fetchRealtimeUpdates]"]);
                const updatedData = Array.from(mergedMap.values());
                const mergedHeaders = [
                    ...currentTable.headers
                ];
                (result.columns || []).forEach({
                    "CustomerAllDataPage.useCallback[fetchRealtimeUpdates]": (column)=>{
                        if (!mergedHeaders.includes(column)) {
                            mergedHeaders.push(column);
                        }
                    }
                }["CustomerAllDataPage.useCallback[fetchRealtimeUpdates]"]);
                setTableData([
                    {
                        ...currentTable,
                        headers: mergedHeaders,
                        data: updatedData,
                        rowCount: updatedData.length
                    }
                ]);
                if (result.latestUpdatedAt) {
                    setLastUpdateTimestamp(result.latestUpdatedAt);
                }
            } catch (error) {
                console.error("Error fetching realtime updates:", error);
            }
        }
    }["CustomerAllDataPage.useCallback[fetchRealtimeUpdates]"], [
        lastUpdateTimestamp
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CustomerAllDataPage.useEffect": ()=>{
            tableDataRef.current = tableData;
        }
    }["CustomerAllDataPage.useEffect"], [
        tableData
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CustomerAllDataPage.useEffect": ()=>{
            // Check authentication and get user data
            const checkAuth = {
                "CustomerAllDataPage.useEffect.checkAuth": ()=>{
                    const userStr = localStorage.getItem("user");
                    if (!userStr) {
                        window.location.href = "/login";
                        return;
                    }
                    const user = JSON.parse(userStr);
                    setCurrentUser(user);
                }
            }["CustomerAllDataPage.useEffect.checkAuth"];
            checkAuth();
            fetchData();
            fetchStatusOptions();
            fetchTableSizeOptions();
        }
    }["CustomerAllDataPage.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CustomerAllDataPage.useEffect": ()=>{
            if (!lastUpdateTimestamp || tableData.length === 0) {
                return;
            }
            fetchRealtimeUpdates();
            const interval = setInterval(fetchRealtimeUpdates, 8000);
            return ({
                "CustomerAllDataPage.useEffect": ()=>clearInterval(interval)
            })["CustomerAllDataPage.useEffect"];
        }
    }["CustomerAllDataPage.useEffect"], [
        lastUpdateTimestamp,
        fetchRealtimeUpdates,
        tableData.length
    ]);
    // Debounce search term - only update after 300ms of no typing and when 3+ chars
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CustomerAllDataPage.useEffect": ()=>{
            const timer = setTimeout({
                "CustomerAllDataPage.useEffect.timer": ()=>{
                    if (searchTerm.length >= 3 || searchTerm.length === 0) {
                        setDebouncedSearchTerm(searchTerm);
                    }
                }
            }["CustomerAllDataPage.useEffect.timer"], 300);
            return ({
                "CustomerAllDataPage.useEffect": ()=>clearTimeout(timer)
            })["CustomerAllDataPage.useEffect"];
        }
    }["CustomerAllDataPage.useEffect"], [
        searchTerm
    ]);
    // Close all menus when clicking outside
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CustomerAllDataPage.useEffect": ()=>{
            const handleClickOutside = {
                "CustomerAllDataPage.useEffect.handleClickOutside": (event)=>{
                    const target = event.target;
                    // Close dropdowns when clicking outside the filter toolbar
                    if (!target.closest('.filter-toolbar')) {
                        closeAllFilterMenus();
                    }
                }
            }["CustomerAllDataPage.useEffect.handleClickOutside"];
            // Add event listener
            document.addEventListener("mousedown", handleClickOutside);
            // Cleanup
            return ({
                "CustomerAllDataPage.useEffect": ()=>{
                    document.removeEventListener("mousedown", handleClickOutside);
                }
            })["CustomerAllDataPage.useEffect"];
        }
    }["CustomerAllDataPage.useEffect"], []);
    // Helper function to format date values and remove timezone
    const formatDateValue = (value)=>{
        if (!value) return "";
        const strValue = String(value);
        // Check if value contains ISO date format with timezone (T...Z)
        if (strValue.includes("T") && strValue.includes("Z")) {
            try {
                // Extract just the date part (YYYY-MM-DD)
                const dateOnly = strValue.split("T")[0];
                return dateOnly;
            } catch (error) {
                return strValue;
            }
        }
        return strValue;
    };
    const handleSort = (column)=>{
        if (sortColumn === column) {
            setSortDirection(sortDirection === "asc" ? "desc" : "asc");
        } else {
            setSortColumn(column);
            setSortDirection("asc");
        }
    };
    const handleEditRow = (row)=>{
        setSelectedRow(row);
        setEditedRow({
            ...row
        });
    };
    const handleFieldChange = (fieldName, value)=>{
        if (editedRow) {
            setEditedRow({
                ...editedRow,
                [fieldName]: value
            });
        }
    };
    const handleSaveRow = ()=>{
        if (editedRow) {
        // Data saved successfully
        }
    };
    const exportToCSV = ()=>{
        if (tableData.length === 0) return;
        const table = tableData[0];
        const headers = table.headers.join(",");
        const rows = filteredAndSortedData.map((row)=>table.headers.map((header)=>{
                const value = row[header] || "";
                const stringValue = String(value).replace(/"/g, '""');
                return stringValue.includes(",") ? `"${stringValue}"` : stringValue;
            }).join(",")).join("\n");
        const csv = `\ufeff${headers}\n${rows}`;
        const blob = new Blob([
            csv
        ], {
            type: "text/csv;charset=utf-8;"
        });
        const link = document.createElement("a");
        const url = URL.createObjectURL(blob);
        link.setAttribute("href", url);
        link.setAttribute("download", `customer_data_${new Date().toISOString().split("T")[0]}.csv`);
        link.style.visibility = "hidden";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    const exportToExcel = ()=>{
        if (tableData.length === 0) return;
        const table = tableData[0];
        let html = '<html xmlns:x="urn:schemas-microsoft-com:office:excel">';
        html += '<head><meta charset="UTF-8"></head><body>';
        html += '<table border="1">';
        html += "<tr>";
        table.headers.forEach((header)=>{
            html += `<th style="background-color: #fde047; font-weight: bold;">${header}</th>`;
        });
        html += "</tr>";
        filteredAndSortedData.forEach((row, idx)=>{
            const bgColor = idx % 2 === 0 ? "#ffffff" : "#fbcfe8";
            html += `<tr style="background-color: ${bgColor};">`;
            table.headers.forEach((header)=>{
                const value = row[header] || "-";
                html += `<td>${value}</td>`;
            });
            html += "</tr>";
        });
        html += "</table></body></html>";
        const blob = new Blob([
            html
        ], {
            type: "application/vnd.ms-excel"
        });
        const link = document.createElement("a");
        const url = URL.createObjectURL(blob);
        link.setAttribute("href", url);
        link.setAttribute("download", `customer_data_${new Date().toISOString().split("T")[0]}.xls`);
        link.style.visibility = "hidden";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    const handleEditCustomer = (row)=>{
        console.log("🔧 Opening edit modal for:", row);
        setEditingCustomer(row);
        setIsEditModalOpen(true);
    };
    const handleSaveCustomer = async (updatedData)=>{
        try {
            const response = await fetch("/api/customer-data", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    action: "update",
                    data: updatedData
                })
            });
            const result = await response.json();
            if (result.success) {
                setIsEditModalOpen(false);
                // รีโหลดข้อมูลใหม่
                await fetchData();
            } else {
                console.error(`เกิดข้อผิดพลาด: ${result.error}`);
            }
        } catch (error) {
            console.error("เกิดข้อผิดพลาดในการบันทึกข้อมูล");
        }
    };
    const handleAddCustomer = async (newData)=>{
        try {
            const response = await fetch("/api/customer-data", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    action: "create",
                    data: newData
                })
            });
            const result = await response.json();
            if (result.success) {
                setIsAddModalOpen(false);
                // รีโหลดข้อมูลใหม่
                await fetchData();
            } else {
                console.error(`เกิดข้อผิดพลาด: ${result.error}`);
            }
        } catch (error) {
            console.error("เกิดข้อผิดพลาดในการเพิ่มข้อมูล");
        }
    };
    const handleDeleteMultiple = async ()=>{
        if (selectedIds.length === 0) {
            alert("กรุณาเลือกรายการที่ต้องการลบ");
            return;
        }
        const confirmMessage = `คุณต้องการลบข้อมูล ${selectedIds.length} รายการใช่หรือไม่?\n\nID ที่จะลบ: ${selectedIds.join(", ")}\n\nการดำเนินการนี้ไม่สามารถย้อนกลับได้`;
        if (!confirm(confirmMessage)) {
            return;
        }
        try {
            setIsDeleting(true);
            const response = await fetch("/api/customer-data", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    action: "deleteMultiple",
                    data: {
                        ids: selectedIds
                    }
                })
            });
            const result = await response.json();
            if (result.success) {
                alert(`ลบข้อมูลสำเร็จ ${result.deletedCount} รายการ`);
                setSelectedIds([]);
                await fetchData();
            } else {
                alert(`เกิดข้อผิดพลาด: ${result.error}`);
            }
        } catch (error) {
            console.error("เกิดข้อผิดพลาดในการลบข้อมูล:", error);
            alert("เกิดข้อผิดพลาดในการลบข้อมูล");
        } finally{
            setIsDeleting(false);
        }
    };
    const handleToggleSelectAll = ()=>{
        if (selectedIds.length === filteredAndSortedData.length) {
            setSelectedIds([]);
        } else {
            const allIds = filteredAndSortedData.map((row)=>row["id"]).filter((id)=>id != null);
            setSelectedIds(allIds);
        }
    };
    const handleToggleSelect = (id)=>{
        setSelectedIds((prev)=>{
            if (prev.includes(id)) {
                return prev.filter((selectedId)=>selectedId !== id);
            } else {
                return [
                    ...prev,
                    id
                ];
            }
        });
    };
    const filteredAndSortedData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CustomerAllDataPage.useMemo[filteredAndSortedData]": ()=>{
            if (tableData.length === 0) return [];
            // Only consider search term active if it has 3+ characters
            const effectiveSearchTerm = debouncedSearchTerm.length >= 3 ? debouncedSearchTerm : "";
            // Check if any filter is active - if not, return empty for performance
            const hasActiveFilter = statusFilter !== "all" || productFilter !== "all" || contactFilter !== "all" || followUpLastDate || followUpNextDate || consultDate || surgeryDate || getNameDate || getConsultApptDate || getSurgeryApptDate || effectiveSearchTerm;
            // Return empty array if no filters applied (for mobile performance)
            if (!hasActiveFilter) return [];
            let filtered = [
                ...tableData[0].data
            ];
            // Filter by current user if not superadmin or admin
            if (currentUser && currentUser.role_tag !== "superadmin" && currentUser.role_tag !== "admin") {
                const contactColumnIndex = tableData[0].headers.findIndex({
                    "CustomerAllDataPage.useMemo[filteredAndSortedData].contactColumnIndex": (h)=>h.toLowerCase().includes("ผู้ติดต่อ") || h.toLowerCase().includes("contact") || h.toLowerCase().includes("ติดต่อ")
                }["CustomerAllDataPage.useMemo[filteredAndSortedData].contactColumnIndex"]);
                if (contactColumnIndex !== -1) {
                    const contactColumn = tableData[0].headers[contactColumnIndex];
                    filtered = filtered.filter({
                        "CustomerAllDataPage.useMemo[filteredAndSortedData]": (row)=>{
                            const value = row[contactColumn];
                            // Match by user's name
                            return value && String(value).trim() === currentUser.name;
                        }
                    }["CustomerAllDataPage.useMemo[filteredAndSortedData]"]);
                }
            }
            if (statusFilter !== "all") {
                const statusColumnIndex = tableData[0].headers.findIndex({
                    "CustomerAllDataPage.useMemo[filteredAndSortedData].statusColumnIndex": (h)=>h.toLowerCase().includes("สถานะ") || h.toLowerCase().includes("status")
                }["CustomerAllDataPage.useMemo[filteredAndSortedData].statusColumnIndex"]);
                if (statusColumnIndex !== -1) {
                    const statusColumn = tableData[0].headers[statusColumnIndex];
                    filtered = filtered.filter({
                        "CustomerAllDataPage.useMemo[filteredAndSortedData]": (row)=>{
                            const value = row[statusColumn];
                            return value && String(value).trim() === statusFilter;
                        }
                    }["CustomerAllDataPage.useMemo[filteredAndSortedData]"]);
                }
            }
            if (productFilter !== "all") {
                const productColumnIndex = tableData[0].headers.findIndex({
                    "CustomerAllDataPage.useMemo[filteredAndSortedData].productColumnIndex": (h)=>h.toLowerCase().includes("ผลิตภัณฑ์") || h.toLowerCase().includes("product") || h.toLowerCase().includes("สนใจ")
                }["CustomerAllDataPage.useMemo[filteredAndSortedData].productColumnIndex"]);
                if (productColumnIndex !== -1) {
                    const productColumn = tableData[0].headers[productColumnIndex];
                    filtered = filtered.filter({
                        "CustomerAllDataPage.useMemo[filteredAndSortedData]": (row)=>{
                            const value = row[productColumn];
                            if (value) {
                                const products = String(value).split(/[,\n]+/).map({
                                    "CustomerAllDataPage.useMemo[filteredAndSortedData].products": (p)=>p.trim()
                                }["CustomerAllDataPage.useMemo[filteredAndSortedData].products"]);
                                return products.some({
                                    "CustomerAllDataPage.useMemo[filteredAndSortedData]": (p)=>p === productFilter
                                }["CustomerAllDataPage.useMemo[filteredAndSortedData]"]);
                            }
                            return false;
                        }
                    }["CustomerAllDataPage.useMemo[filteredAndSortedData]"]);
                }
            }
            if (contactFilter !== "all") {
                const contactColumnIndex = tableData[0].headers.findIndex({
                    "CustomerAllDataPage.useMemo[filteredAndSortedData].contactColumnIndex": (h)=>h.toLowerCase().includes("ผู้ติดต่อ") || h.toLowerCase().includes("contact") || h.toLowerCase().includes("ติดต่อ")
                }["CustomerAllDataPage.useMemo[filteredAndSortedData].contactColumnIndex"]);
                if (contactColumnIndex !== -1) {
                    const contactColumn = tableData[0].headers[contactColumnIndex];
                    filtered = filtered.filter({
                        "CustomerAllDataPage.useMemo[filteredAndSortedData]": (row)=>{
                            const value = row[contactColumn];
                            return value && String(value).trim() === contactFilter;
                        }
                    }["CustomerAllDataPage.useMemo[filteredAndSortedData]"]);
                }
            }
            const filterByDate = {
                "CustomerAllDataPage.useMemo[filteredAndSortedData].filterByDate": (columnName, dateValue)=>{
                    if (!dateValue) return;
                    const dateColumnIndex = tableData[0].headers.findIndex({
                        "CustomerAllDataPage.useMemo[filteredAndSortedData].filterByDate.dateColumnIndex": (h)=>h.trim() === columnName
                    }["CustomerAllDataPage.useMemo[filteredAndSortedData].filterByDate.dateColumnIndex"]);
                    if (dateColumnIndex !== -1) {
                        const dateColumn = tableData[0].headers[dateColumnIndex];
                        filtered = filtered.filter({
                            "CustomerAllDataPage.useMemo[filteredAndSortedData].filterByDate": (row)=>{
                                const value = row[dateColumn];
                                if (!value) return false;
                                const dateStr = String(value).trim();
                                let rowDate = null;
                                const ddmmyyyyMatch = dateStr.match(/(\d{1,2})\/(\d{1,2})\/(\d{4})/);
                                if (ddmmyyyyMatch) {
                                    const [, day, month, year] = ddmmyyyyMatch;
                                    rowDate = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
                                } else if (dateStr.match(/\d{4}-\d{2}-\d{2}/)) {
                                    rowDate = new Date(dateStr);
                                }
                                if (!rowDate || isNaN(rowDate.getTime())) return false;
                                const filterDate = new Date(dateValue);
                                // Set time to start of day for comparison
                                filterDate.setHours(0, 0, 0, 0);
                                rowDate.setHours(0, 0, 0, 0);
                                return rowDate.getTime() === filterDate.getTime();
                            }
                        }["CustomerAllDataPage.useMemo[filteredAndSortedData].filterByDate"]);
                    }
                }
            }["CustomerAllDataPage.useMemo[filteredAndSortedData].filterByDate"];
            filterByDate("วันที่ติดตามครั้งล่าสุด", followUpLastDate);
            filterByDate("วันที่ติดตามครั้งถัดไป", followUpNextDate);
            filterByDate("วันที่ Consult", consultDate);
            filterByDate("วันที่ผ่าตัด", surgeryDate);
            filterByDate("วันที่ได้ชื่อ เบอร์", getNameDate);
            filterByDate("วันที่ได้นัด Consult", getConsultApptDate);
            filterByDate("วันที่ได้นัดผ่าตัด", getSurgeryApptDate);
            // Use effective search term (only if 3+ characters)
            if (effectiveSearchTerm) {
                filtered = filtered.filter({
                    "CustomerAllDataPage.useMemo[filteredAndSortedData]": (row)=>{
                        if (filterColumn === "all") {
                            return tableData[0].headers.some({
                                "CustomerAllDataPage.useMemo[filteredAndSortedData]": (header)=>{
                                    const value = row[header];
                                    return value && String(value).toLowerCase().includes(effectiveSearchTerm.toLowerCase());
                                }
                            }["CustomerAllDataPage.useMemo[filteredAndSortedData]"]);
                        } else {
                            const value = row[filterColumn];
                            return value && String(value).toLowerCase().includes(effectiveSearchTerm.toLowerCase());
                        }
                    }
                }["CustomerAllDataPage.useMemo[filteredAndSortedData]"]);
            }
            if (sortColumn) {
                filtered.sort({
                    "CustomerAllDataPage.useMemo[filteredAndSortedData]": (a, b)=>{
                        const aVal = a[sortColumn] || "";
                        const bVal = b[sortColumn] || "";
                        const aStr = String(aVal).toLowerCase();
                        const bStr = String(bVal).toLowerCase();
                        if (aStr < bStr) return sortDirection === "asc" ? -1 : 1;
                        if (aStr > bStr) return sortDirection === "asc" ? 1 : -1;
                        return 0;
                    }
                }["CustomerAllDataPage.useMemo[filteredAndSortedData]"]);
            }
            return filtered;
        }
    }["CustomerAllDataPage.useMemo[filteredAndSortedData]"], [
        tableData,
        debouncedSearchTerm,
        filterColumn,
        sortColumn,
        sortDirection,
        statusFilter,
        productFilter,
        contactFilter,
        followUpLastDate,
        currentUser,
        followUpNextDate,
        consultDate,
        surgeryDate,
        getNameDate,
        getConsultApptDate,
        getSurgeryApptDate
    ]);
    // Helper to check if any filter is active (for UI display)
    const hasActiveFilter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CustomerAllDataPage.useMemo[hasActiveFilter]": ()=>{
            const effectiveSearch = debouncedSearchTerm.length >= 3;
            return statusFilter !== "all" || productFilter !== "all" || contactFilter !== "all" || followUpLastDate || followUpNextDate || consultDate || surgeryDate || getNameDate || getConsultApptDate || getSurgeryApptDate || effectiveSearch;
        }
    }["CustomerAllDataPage.useMemo[hasActiveFilter]"], [
        statusFilter,
        productFilter,
        contactFilter,
        followUpLastDate,
        followUpNextDate,
        consultDate,
        surgeryDate,
        getNameDate,
        getConsultApptDate,
        getSurgeryApptDate,
        debouncedSearchTerm
    ]);
    // Check if user is typing but hasn't reached minimum characters yet
    const isTypingSearch = searchTerm.length > 0 && searchTerm.length < 3;
    // Compact columns to show when filter/search is active
    const compactColumns = [
        "สถานะ",
        "ชื่อ",
        "เบอร์โทร",
        "ผลิตภัณฑ์ที่สนใจ"
    ];
    // Get display headers based on filter state
    const displayHeaders = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CustomerAllDataPage.useMemo[displayHeaders]": ()=>{
            if (hasActiveFilter && tableData.length > 0) {
                return compactColumns.filter({
                    "CustomerAllDataPage.useMemo[displayHeaders]": (col)=>tableData[0].headers.includes(col)
                }["CustomerAllDataPage.useMemo[displayHeaders]"]);
            }
            return tableData.length > 0 ? tableData[0].headers : [];
        }
    }["CustomerAllDataPage.useMemo[displayHeaders]"], [
        hasActiveFilter,
        tableData
    ]);
    const paginatedData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CustomerAllDataPage.useMemo[paginatedData]": ()=>{
            const startIndex = (currentPage - 1) * itemsPerPage;
            const endIndex = startIndex + itemsPerPage;
            return filteredAndSortedData.slice(startIndex, endIndex);
        }
    }["CustomerAllDataPage.useMemo[paginatedData]"], [
        filteredAndSortedData,
        currentPage,
        itemsPerPage
    ]);
    const totalPages = Math.ceil(filteredAndSortedData.length / itemsPerPage);
    // ฟังก์ชันสำหรับปิดตัวกรองทั้งหมด
    const closeAllFilterMenus = ()=>{
        setShowFilterMenu(false);
        setShowStatusMenu(false);
        setShowProductMenu(false);
        setShowContactMenu(false);
        setShowFollowUpLastMenu(false);
        setShowFollowUpNextMenu(false);
        setShowConsultMenu(false);
        setShowSurgeryMenu(false);
        setShowGetNameMenu(false);
        setShowGetConsultApptMenu(false);
        setShowGetSurgeryApptMenu(false);
        setShowTableSizeMenu(false);
    };
    const contactOptions = [
        {
            value: "all",
            label: "ทั้งหมด"
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
            value: "ว่าน",
            label: "ว่าน"
        },
        {
            value: "จีน",
            label: "จีน"
        },
        {
            value: "มุก",
            label: "มุก"
        },
        {
            value: "ตั้งโอ๋",
            label: "ตั้งโอ๋"
        }
    ];
    const productOptions = [
        {
            value: "all",
            label: "ทั้งหมด"
        },
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
            value: "เสร็จตาขาว",
            label: "เสร็จตาขาว"
        },
        {
            value: "ลิงหน้า",
            label: "ลิงหน้า"
        },
        {
            value: "Skin",
            label: "Skin"
        },
        {
            value: "ตื่อ",
            label: "ตื่อ"
        }
    ];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CustomerAllDataPage.useEffect": ()=>{
            setCurrentPage(1);
        }
    }["CustomerAllDataPage.useEffect"], [
        searchTerm,
        filterColumn,
        statusFilter,
        productFilter,
        contactFilter,
        followUpLastDate,
        followUpNextDate,
        consultDate,
        surgeryDate,
        getNameDate,
        getConsultApptDate,
        getSurgeryApptDate
    ]);
    if (isLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full h-screen flex items-center justify-center bg-white",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-gray-600",
                children: "กำลังโหลดข้อมูล..."
            }, void 0, false, {
                fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                lineNumber: 999,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
            lineNumber: 998,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: customScrollbarStyle
            }, void 0, false, {
                fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                lineNumber: 1005,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 p-3 flex flex-col",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between items-center mb-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>router.push("/customer-selection"),
                                className: "flex items-center justify-center w-11 h-11 bg-white hover:bg-slate-50 text-slate-600 rounded-xl transition-all shadow-sm border border-slate-200 active:scale-95",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                    className: "w-5 h-5"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                                    lineNumber: 1013,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                                lineNumber: 1009,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 text-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-lg font-semibold text-slate-700",
                                    children: customerType === "existing" ? "ลูกค้าเก่า" : customerType === "new" ? "ลูกค้าใหม่" : "ลูกค้าทั้งหมด"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                                    lineNumber: 1017,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                                lineNumber: 1016,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setIsAddModalOpen(true),
                                className: "flex items-center justify-center w-11 h-11 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white rounded-xl transition-all shadow-md active:scale-95",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                    className: "w-6 h-6"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                                    lineNumber: 1025,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                                lineNumber: 1021,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                        lineNumber: 1008,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-3",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                    className: "absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                                    lineNumber: 1032,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    placeholder: "ค้นหาลูกค้า (พิมพ์อย่างน้อย 3 ตัวอักษร)...",
                                    value: searchTerm,
                                    onChange: (e)=>setSearchTerm(e.target.value),
                                    className: `w-full pl-10 pr-4 py-3 bg-white border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm text-sm ${isTypingSearch ? "border-yellow-400" : "border-slate-200"}`
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                                    lineNumber: 1033,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                isTypingSearch && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "absolute right-3 top-1/2 transform -translate-y-1/2 text-xs text-yellow-600",
                                    children: [
                                        "+",
                                        3 - searchTerm.length
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                                    lineNumber: 1042,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                            lineNumber: 1031,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                        lineNumber: 1030,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex md:hidden items-center gap-2 mb-3",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setShowFilterSheet(true),
                            className: `flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl transition-all text-sm font-medium ${hasActiveFilter ? "bg-blue-500 text-white shadow-md" : "bg-white text-slate-600 border border-slate-200 shadow-sm"}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$funnel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Filter$3e$__["Filter"], {
                                    className: "w-5 h-5"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                                    lineNumber: 1058,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "ตัวกรอง"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                                    lineNumber: 1059,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                hasActiveFilter && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "bg-white text-blue-500 px-2 py-0.5 rounded-full text-xs font-bold",
                                    children: [
                                        statusFilter !== "all",
                                        productFilter !== "all",
                                        contactFilter !== "all",
                                        followUpLastDate,
                                        followUpNextDate,
                                        consultDate,
                                        surgeryDate,
                                        getNameDate,
                                        getConsultApptDate,
                                        getSurgeryApptDate,
                                        searchTerm
                                    ].filter(Boolean).length
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                                    lineNumber: 1061,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                            lineNumber: 1051,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                        lineNumber: 1050,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    selectedIds.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-3 md:hidden",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleDeleteMultiple,
                            disabled: isDeleting,
                            className: "w-full flex items-center justify-center gap-2 px-4 py-3 bg-rose-500 text-white rounded-xl text-sm font-medium hover:bg-rose-600 disabled:opacity-50 shadow-md",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                                    lineNumber: 1088,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                isDeleting ? "กำลังลบ..." : `ลบรายการที่เลือก (${selectedIds.length})`
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                            lineNumber: 1083,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                        lineNumber: 1082,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    showFilterSheet && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "fixed inset-0 z-50 md:hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 bg-black/50 transition-opacity",
                                onClick: ()=>setShowFilterSheet(false)
                            }, void 0, false, {
                                fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                                lineNumber: 1098,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute bottom-0 left-0 right-0 bg-white rounded-t-3xl max-h-[85vh] overflow-hidden animate-slide-up",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-center py-3",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-10 h-1 bg-slate-300 rounded-full"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                                            lineNumber: 1107,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                                        lineNumber: 1106,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between px-4 pb-3 border-b border-slate-100",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-lg font-semibold text-slate-800",
                                                children: "ตัวกรอง"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                                                lineNumber: 1112,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>{
                                                            setStatusFilter("all");
                                                            setProductFilter("all");
                                                            setContactFilter("all");
                                                            setFollowUpLastDate("");
                                                            setFollowUpNextDate("");
                                                            setConsultDate("");
                                                            setSurgeryDate("");
                                                            setGetNameDate("");
                                                            setGetConsultApptDate("");
                                                            setGetSurgeryApptDate("");
                                                        },
                                                        className: "px-3 py-1.5 text-sm text-rose-500 hover:bg-rose-50 rounded-lg",
                                                        children: "ล้างทั้งหมด"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                                                        lineNumber: 1114,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>setShowFilterSheet(false),
                                                        className: "p-2 hover:bg-slate-100 rounded-full",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                            className: "w-5 h-5 text-slate-500"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                                                            lineNumber: 1135,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                                                        lineNumber: 1131,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                                                lineNumber: 1113,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                                        lineNumber: 1111,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "overflow-y-auto max-h-[calc(85vh-120px)] px-4 py-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mb-5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-sm font-medium text-slate-700 mb-2",
                                                        children: "สถานะ"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                                                        lineNumber: 1144,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        value: statusFilter,
                                                        onChange: (e)=>setStatusFilter(e.target.value),
                                                        className: "w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "all",
                                                                children: "ทั้งหมด"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                                                                lineNumber: 1150,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            statusOptions.map((status)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: status.value,
                                                                    children: status.label
                                                                }, status.value, false, {
                                                                    fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                                                                    lineNumber: 1152,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0)))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                                                        lineNumber: 1145,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                                                lineNumber: 1143,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mb-5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-sm font-medium text-slate-700 mb-2",
                                                        children: "สินค้า"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                                                        lineNumber: 1159,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        value: productFilter,
                                                        onChange: (e)=>setProductFilter(e.target.value),
                                                        className: "w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent",
                                                        children: productOptions.map((product)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: product.value,
                                                                children: product.label
                                                            }, product.value, false, {
                                                                fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                                                                lineNumber: 1166,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                                                        lineNumber: 1160,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                                                lineNumber: 1158,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            currentUser && (currentUser.role_tag === "superadmin" || currentUser.role_tag === "admin") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mb-5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-sm font-medium text-slate-700 mb-2",
                                                        children: "ผู้ติดต่อ"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                                                        lineNumber: 1174,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        value: contactFilter,
                                                        onChange: (e)=>setContactFilter(e.target.value),
                                                        className: "w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent",
                                                        children: contactOptions.map((contact)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: contact.value,
                                                                children: contact.label
                                                            }, contact.value, false, {
                                                                fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                                                                lineNumber: 1181,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0)))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                                                        lineNumber: 1175,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                                                lineNumber: 1173,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mb-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-sm font-medium text-slate-700 mb-3",
                                                        children: "กรองตามวันที่"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                                                        lineNumber: 1189,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "space-y-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-3",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-xs text-slate-500 w-24 shrink-0",
                                                                        children: "ติดตาม-ล่าสุด"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                                                                        lineNumber: 1194,
                                                                        columnNumber: 23
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "date",
                                                                        value: followUpLastDate,
                                                                        onChange: (e)=>setFollowUpLastDate(e.target.value),
                                                                        className: "flex-1 px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                                                                        lineNumber: 1195,
                                                                        columnNumber: 23
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    followUpLastDate && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: ()=>setFollowUpLastDate(""),
                                                                        className: "p-1 text-rose-500",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                                            className: "w-4 h-4"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                                                                            lineNumber: 1203,
                                                                            columnNumber: 27
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                                                                        lineNumber: 1202,
                                                                        columnNumber: 25
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                                                                lineNumber: 1193,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-3",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-xs text-slate-500 w-24 shrink-0",
                                                                        children: "ติดตาม-ถัดไป"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                                                                        lineNumber: 1210,
                                                                        columnNumber: 23
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "date",
                                                                        value: followUpNextDate,
                                                                        onChange: (e)=>setFollowUpNextDate(e.target.value),
                                                                        className: "flex-1 px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                                                                        lineNumber: 1211,
                                                                        columnNumber: 23
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    followUpNextDate && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: ()=>setFollowUpNextDate(""),
                                                                        className: "p-1 text-rose-500",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                                            className: "w-4 h-4"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                                                                            lineNumber: 1219,
                                                                            columnNumber: 27
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                                                                        lineNumber: 1218,
                                                                        columnNumber: 25
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                                                                lineNumber: 1209,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-3",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-xs text-slate-500 w-24 shrink-0",
                                                                        children: "วัน Consult"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                                                                        lineNumber: 1226,
                                                                        columnNumber: 23
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "date",
                                                                        value: consultDate,
                                                                        onChange: (e)=>setConsultDate(e.target.value),
                                                                        className: "flex-1 px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                                                                        lineNumber: 1227,
                                                                        columnNumber: 23
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    consultDate && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: ()=>setConsultDate(""),
                                                                        className: "p-1 text-rose-500",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                                            className: "w-4 h-4"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                                                                            lineNumber: 1235,
                                                                            columnNumber: 27
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                                                                        lineNumber: 1234,
                                                                        columnNumber: 25
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                                                                lineNumber: 1225,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-3",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-xs text-slate-500 w-24 shrink-0",
                                                                        children: "วันผ่าตัด"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                                                                        lineNumber: 1242,
                                                                        columnNumber: 23
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "date",
                                                                        value: surgeryDate,
                                                                        onChange: (e)=>setSurgeryDate(e.target.value),
                                                                        className: "flex-1 px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                                                                        lineNumber: 1243,
                                                                        columnNumber: 23
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    surgeryDate && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: ()=>setSurgeryDate(""),
                                                                        className: "p-1 text-rose-500",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                                            className: "w-4 h-4"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                                                                            lineNumber: 1251,
                                                                            columnNumber: 27
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                                                                        lineNumber: 1250,
                                                                        columnNumber: 25
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                                                                lineNumber: 1241,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-3",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-xs text-slate-500 w-24 shrink-0",
                                                                        children: "วันได้ชื่อ"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                                                                        lineNumber: 1258,
                                                                        columnNumber: 23
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "date",
                                                                        value: getNameDate,
                                                                        onChange: (e)=>setGetNameDate(e.target.value),
                                                                        className: "flex-1 px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                                                                        lineNumber: 1259,
                                                                        columnNumber: 23
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    getNameDate && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: ()=>setGetNameDate(""),
                                                                        className: "p-1 text-rose-500",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                                            className: "w-4 h-4"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                                                                            lineNumber: 1267,
                                                                            columnNumber: 27
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                                                                        lineNumber: 1266,
                                                                        columnNumber: 25
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                                                                lineNumber: 1257,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-3",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-xs text-slate-500 w-24 shrink-0",
                                                                        children: "ได้นัด Consult"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                                                                        lineNumber: 1274,
                                                                        columnNumber: 23
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "date",
                                                                        value: getConsultApptDate,
                                                                        onChange: (e)=>setGetConsultApptDate(e.target.value),
                                                                        className: "flex-1 px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                                                                        lineNumber: 1275,
                                                                        columnNumber: 23
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    getConsultApptDate && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: ()=>setGetConsultApptDate(""),
                                                                        className: "p-1 text-rose-500",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                                            className: "w-4 h-4"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                                                                            lineNumber: 1283,
                                                                            columnNumber: 27
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                                                                        lineNumber: 1282,
                                                                        columnNumber: 25
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                                                                lineNumber: 1273,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-3",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-xs text-slate-500 w-24 shrink-0",
                                                                        children: "ได้นัดผ่าตัด"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                                                                        lineNumber: 1290,
                                                                        columnNumber: 23
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "date",
                                                                        value: getSurgeryApptDate,
                                                                        onChange: (e)=>setGetSurgeryApptDate(e.target.value),
                                                                        className: "flex-1 px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                                                                        lineNumber: 1291,
                                                                        columnNumber: 23
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    getSurgeryApptDate && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: ()=>setGetSurgeryApptDate(""),
                                                                        className: "p-1 text-rose-500",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                                            className: "w-4 h-4"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                                                                            lineNumber: 1299,
                                                                            columnNumber: 27
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                                                                        lineNumber: 1298,
                                                                        columnNumber: 25
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                                                                lineNumber: 1289,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                                                        lineNumber: 1191,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                                                lineNumber: 1188,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                                        lineNumber: 1141,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "px-4 py-4 border-t border-slate-100 bg-white",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setShowFilterSheet(false),
                                            className: "w-full py-3 bg-blue-500 text-white rounded-xl font-medium hover:bg-blue-600 transition-colors",
                                            children: "แสดงผลลัพธ์"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                                            lineNumber: 1309,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                                        lineNumber: 1308,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                                lineNumber: 1104,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                        lineNumber: 1096,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden md:block bg-white rounded-xl shadow-sm border border-slate-200 p-4 mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap items-center gap-3 mb-3 filter-toolbar",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>{
                                                    closeAllFilterMenus();
                                                    setShowStatusMenu(!showStatusMenu);
                                                },
                                                className: `px-4 py-2 rounded-lg flex items-center gap-2 transition-all text-sm font-medium border ${statusFilter !== "all" ? "bg-cyan-50 border-cyan-300 text-cyan-700" : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50"}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "สถานะ"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                                                        lineNumber: 1335,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                        className: `w-4 h-4 transition-transform ${showStatusMenu ? "rotate-180" : ""}`
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                                                        lineNumber: 1336,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                                                lineNumber: 1325,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            showStatusMenu && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute top-full left-0 mt-2 bg-white border border-slate-200 rounded-xl shadow-lg z-50 min-w-[200px] overflow-hidden",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "max-h-64 overflow-y-auto",
                                                    children: statusOptions.map((status)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>{
                                                                setStatusFilter(status.value);
                                                                setShowStatusMenu(false);
                                                            },
                                                            className: `w-full text-left px-4 py-2.5 transition-all text-sm ${statusFilter === status.value ? "bg-cyan-50 text-cyan-700 font-medium" : "text-slate-600 hover:bg-slate-50"}`,
                                                            children: [
                                                                statusFilter === status.value && "✓ ",
                                                                status.label
                                                            ]
                                                        }, status.value, true, {
                                                            fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                                                            lineNumber: 1342,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                                                    lineNumber: 1340,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                                                lineNumber: 1339,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                                        lineNumber: 1324,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>{
                                                    closeAllFilterMenus();
                                                    setShowProductMenu(!showProductMenu);
                                                },
                                                className: `px-4 py-2 rounded-lg flex items-center gap-2 transition-all text-sm font-medium border ${productFilter !== "all" ? "bg-indigo-50 border-indigo-300 text-indigo-700" : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50"}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "สินค้า"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                                                        lineNumber: 1374,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                        className: `w-4 h-4 transition-transform ${showProductMenu ? "rotate-180" : ""}`
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                                                        lineNumber: 1375,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                                                lineNumber: 1364,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            showProductMenu && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute top-full left-0 mt-2 bg-white border border-slate-200 rounded-xl shadow-lg z-50 min-w-[200px] overflow-hidden",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "max-h-64 overflow-y-auto",
                                                    children: productOptions.map((product)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>{
                                                                setProductFilter(product.value);
                                                                setShowProductMenu(false);
                                                            },
                                                            className: `w-full text-left px-4 py-2.5 transition-all text-sm ${productFilter === product.value ? "bg-indigo-50 text-indigo-700 font-medium" : "text-slate-600 hover:bg-slate-50"}`,
                                                            children: [
                                                                productFilter === product.value && "✓ ",
                                                                product.label
                                                            ]
                                                        }, product.value, true, {
                                                            fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                                                            lineNumber: 1381,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                                                    lineNumber: 1379,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                                                lineNumber: 1378,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                                        lineNumber: 1363,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    currentUser && (currentUser.role_tag === "superadmin" || currentUser.role_tag === "admin") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>{
                                                    closeAllFilterMenus();
                                                    setShowContactMenu(!showContactMenu);
                                                },
                                                className: `px-4 py-2 rounded-lg flex items-center gap-2 transition-all text-sm font-medium border ${contactFilter !== "all" ? "bg-rose-50 border-rose-300 text-rose-700" : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50"}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "ผู้ติดต่อ"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                                                        lineNumber: 1414,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                        className: `w-4 h-4 transition-transform ${showContactMenu ? "rotate-180" : ""}`
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                                                        lineNumber: 1415,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                                                lineNumber: 1404,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            showContactMenu && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute top-full left-0 mt-2 bg-white border border-slate-200 rounded-xl shadow-lg z-50 min-w-[180px] overflow-hidden",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "max-h-64 overflow-y-auto",
                                                    children: contactOptions.map((contact)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>{
                                                                setContactFilter(contact.value);
                                                                setShowContactMenu(false);
                                                            },
                                                            className: `w-full text-left px-4 py-2.5 transition-all text-sm ${contactFilter === contact.value ? "bg-rose-50 text-rose-700 font-medium" : "text-slate-600 hover:bg-slate-50"}`,
                                                            children: [
                                                                contactFilter === contact.value && "✓ ",
                                                                contact.label
                                                            ]
                                                        }, contact.value, true, {
                                                            fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                                                            lineNumber: 1421,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0)))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                                                    lineNumber: 1419,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                                                lineNumber: 1418,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                                        lineNumber: 1403,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>{
                                                    closeAllFilterMenus();
                                                    setShowFollowUpLastMenu(!showFollowUpLastMenu);
                                                },
                                                className: `px-4 py-2 rounded-lg flex items-center gap-2 transition-all text-sm font-medium border ${followUpLastDate ? "bg-emerald-50 border-emerald-300 text-emerald-700" : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50"}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "ติดตาม-ล่าสุด"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                                                        lineNumber: 1454,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                        className: `w-4 h-4 transition-transform ${showFollowUpLastMenu ? "rotate-180" : ""}`
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                                                        lineNumber: 1455,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                                                lineNumber: 1444,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            showFollowUpLastMenu && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute top-full left-0 mt-2 bg-white border border-slate-200 rounded-xl shadow-lg z-50 p-3 w-64",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "date",
                                                        value: followUpLastDate,
                                                        onChange: (e)=>setFollowUpLastDate(e.target.value),
                                                        className: "w-full px-3 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                                                        lineNumber: 1459,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    followUpLastDate && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>setFollowUpLastDate(""),
                                                        className: "mt-2 w-full px-3 py-2 text-sm text-rose-600 hover:bg-rose-50 rounded-lg",
                                                        children: "ล้างตัวกรอง"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                                                        lineNumber: 1466,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                                                lineNumber: 1458,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                                        lineNumber: 1443,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>{
                                                    closeAllFilterMenus();
                                                    setShowFollowUpNextMenu(!showFollowUpNextMenu);
                                                },
                                                className: `px-4 py-2 rounded-lg flex items-center gap-2 transition-all text-sm font-medium border ${followUpNextDate ? "bg-violet-50 border-violet-300 text-violet-700" : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50"}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "ติดตาม-ถัดไป"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                                                        lineNumber: 1485,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                        className: `w-4 h-4 transition-transform ${showFollowUpNextMenu ? "rotate-180" : ""}`
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                                                        lineNumber: 1486,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                                                lineNumber: 1475,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            showFollowUpNextMenu && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute top-full left-0 mt-2 bg-white border border-slate-200 rounded-xl shadow-lg z-50 p-3 w-64",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "date",
                                                        value: followUpNextDate,
                                                        onChange: (e)=>setFollowUpNextDate(e.target.value),
                                                        className: "w-full px-3 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent text-sm"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                                                        lineNumber: 1490,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    followUpNextDate && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>setFollowUpNextDate(""),
                                                        className: "mt-2 w-full px-3 py-2 text-sm text-rose-600 hover:bg-rose-50 rounded-lg",
                                                        children: "ล้างตัวกรอง"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                                                        lineNumber: 1497,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                                                lineNumber: 1489,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                                        lineNumber: 1474,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>{
                                                    closeAllFilterMenus();
                                                    setShowConsultMenu(!showConsultMenu);
                                                },
                                                className: `px-4 py-2 rounded-lg flex items-center gap-2 transition-all text-sm font-medium border ${consultDate ? "bg-fuchsia-50 border-fuchsia-300 text-fuchsia-700" : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50"}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Consult"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                                                        lineNumber: 1516,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                        className: `w-4 h-4 transition-transform ${showConsultMenu ? "rotate-180" : ""}`
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                                                        lineNumber: 1517,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                                                lineNumber: 1506,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            showConsultMenu && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute top-full left-0 mt-2 bg-white border border-slate-200 rounded-xl shadow-lg z-50 p-3 w-64",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "date",
                                                        value: consultDate,
                                                        onChange: (e)=>setConsultDate(e.target.value),
                                                        className: "w-full px-3 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-fuchsia-500 focus:border-transparent text-sm"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                                                        lineNumber: 1521,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    consultDate && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>setConsultDate(""),
                                                        className: "mt-2 w-full px-3 py-2 text-sm text-rose-600 hover:bg-rose-50 rounded-lg",
                                                        children: "ล้างตัวกรอง"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                                                        lineNumber: 1528,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                                                lineNumber: 1520,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                                        lineNumber: 1505,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>{
                                                    closeAllFilterMenus();
                                                    setShowSurgeryMenu(!showSurgeryMenu);
                                                },
                                                className: `px-4 py-2 rounded-lg flex items-center gap-2 transition-all text-sm font-medium border ${surgeryDate ? "bg-orange-50 border-orange-300 text-orange-700" : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50"}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "ผ่าตัด"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                                                        lineNumber: 1547,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                        className: `w-4 h-4 transition-transform ${showSurgeryMenu ? "rotate-180" : ""}`
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                                                        lineNumber: 1548,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                                                lineNumber: 1537,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            showSurgeryMenu && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute top-full left-0 mt-2 bg-white border border-slate-200 rounded-xl shadow-lg z-50 p-3 w-64",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "date",
                                                        value: surgeryDate,
                                                        onChange: (e)=>setSurgeryDate(e.target.value),
                                                        className: "w-full px-3 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                                                        lineNumber: 1552,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    surgeryDate && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>setSurgeryDate(""),
                                                        className: "mt-2 w-full px-3 py-2 text-sm text-rose-600 hover:bg-rose-50 rounded-lg",
                                                        children: "ล้างตัวกรอง"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                                                        lineNumber: 1559,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                                                lineNumber: 1551,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                                        lineNumber: 1536,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>{
                                                    closeAllFilterMenus();
                                                    setShowGetNameMenu(!showGetNameMenu);
                                                },
                                                className: `px-4 py-2 rounded-lg flex items-center gap-2 transition-all text-sm font-medium border ${getNameDate ? "bg-teal-50 border-teal-300 text-teal-700" : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50"}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "วันได้ชื่อ"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                                                        lineNumber: 1578,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                        className: `w-4 h-4 transition-transform ${showGetNameMenu ? "rotate-180" : ""}`
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                                                        lineNumber: 1579,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                                                lineNumber: 1568,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            showGetNameMenu && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute top-full left-0 mt-2 bg-white border border-slate-200 rounded-xl shadow-lg z-50 p-3 w-64",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "date",
                                                        value: getNameDate,
                                                        onChange: (e)=>setGetNameDate(e.target.value),
                                                        className: "w-full px-3 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                                                        lineNumber: 1583,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    getNameDate && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>setGetNameDate(""),
                                                        className: "mt-2 w-full px-3 py-2 text-sm text-rose-600 hover:bg-rose-50 rounded-lg",
                                                        children: "ล้างตัวกรอง"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                                                        lineNumber: 1590,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                                                lineNumber: 1582,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                                        lineNumber: 1567,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>{
                                                    closeAllFilterMenus();
                                                    setShowGetConsultApptMenu(!showGetConsultApptMenu);
                                                },
                                                className: `px-4 py-2 rounded-lg flex items-center gap-2 transition-all text-sm font-medium border ${getConsultApptDate ? "bg-sky-50 border-sky-300 text-sky-700" : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50"}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "ได้นัด Consult"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                                                        lineNumber: 1609,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                        className: `w-4 h-4 transition-transform ${showGetConsultApptMenu ? "rotate-180" : ""}`
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                                                        lineNumber: 1610,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                                                lineNumber: 1599,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            showGetConsultApptMenu && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute top-full left-0 mt-2 bg-white border border-slate-200 rounded-xl shadow-lg z-50 p-3 w-64",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "date",
                                                        value: getConsultApptDate,
                                                        onChange: (e)=>setGetConsultApptDate(e.target.value),
                                                        className: "w-full px-3 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent text-sm"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                                                        lineNumber: 1614,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    getConsultApptDate && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>setGetConsultApptDate(""),
                                                        className: "mt-2 w-full px-3 py-2 text-sm text-rose-600 hover:bg-rose-50 rounded-lg",
                                                        children: "ล้างตัวกรอง"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                                                        lineNumber: 1621,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                                                lineNumber: 1613,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                                        lineNumber: 1598,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>{
                                                    closeAllFilterMenus();
                                                    setShowGetSurgeryApptMenu(!showGetSurgeryApptMenu);
                                                },
                                                className: `px-4 py-2 rounded-lg flex items-center gap-2 transition-all text-sm font-medium border ${getSurgeryApptDate ? "bg-amber-50 border-amber-300 text-amber-700" : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50"}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "ได้นัดผ่าตัด"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                                                        lineNumber: 1640,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                        className: `w-4 h-4 transition-transform ${showGetSurgeryApptMenu ? "rotate-180" : ""}`
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                                                        lineNumber: 1641,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                                                lineNumber: 1630,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            showGetSurgeryApptMenu && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute top-full left-0 mt-2 bg-white border border-slate-200 rounded-xl shadow-lg z-50 p-3 w-64",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "date",
                                                        value: getSurgeryApptDate,
                                                        onChange: (e)=>setGetSurgeryApptDate(e.target.value),
                                                        className: "w-full px-3 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-sm"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                                                        lineNumber: 1645,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    getSurgeryApptDate && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>setGetSurgeryApptDate(""),
                                                        className: "mt-2 w-full px-3 py-2 text-sm text-rose-600 hover:bg-rose-50 rounded-lg",
                                                        children: "ล้างตัวกรอง"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                                                        lineNumber: 1652,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                                                lineNumber: 1644,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                                        lineNumber: 1629,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    hasActiveFilter && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>{
                                            setStatusFilter("all");
                                            setProductFilter("all");
                                            setContactFilter("all");
                                            setFollowUpLastDate("");
                                            setFollowUpNextDate("");
                                            setConsultDate("");
                                            setSurgeryDate("");
                                            setGetNameDate("");
                                            setGetConsultApptDate("");
                                            setGetSurgeryApptDate("");
                                        },
                                        className: "px-4 py-2 bg-rose-500 text-white rounded-lg text-sm font-medium hover:bg-rose-600",
                                        children: "ล้างทั้งหมด"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                                        lineNumber: 1662,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                                lineNumber: 1322,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between items-center pt-3 border-t border-slate-100",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm text-slate-600",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-medium",
                                                children: filteredAndSortedData.length
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                                                lineNumber: 1685,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            " รายการ"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                                        lineNumber: 1684,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    selectedIds.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleDeleteMultiple,
                                        disabled: isDeleting,
                                        className: "flex items-center gap-2 px-4 py-2 bg-rose-500 text-white rounded-lg text-sm font-medium hover:bg-rose-600 disabled:opacity-50",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                                                lineNumber: 1693,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            isDeleting ? "กำลังลบ..." : `ลบรายการที่เลือก (${selectedIds.length})`
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                                        lineNumber: 1688,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                                lineNumber: 1683,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                        lineNumber: 1321,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    hasActiveFilter && tableData.length > 0 && totalPages > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex md:hidden justify-center items-center gap-1 mb-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setCurrentPage(currentPage - 1),
                                disabled: currentPage === 1,
                                className: "px-3 py-2 bg-white border border-slate-200 rounded-lg text-sm disabled:opacity-50 shadow-sm",
                                children: "←"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                                lineNumber: 1704,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1",
                                children: [
                                    Array.from({
                                        length: Math.min(5, totalPages)
                                    }, (_, i)=>{
                                        let page;
                                        if (totalPages <= 5) {
                                            page = i + 1;
                                        } else if (currentPage <= 3) {
                                            page = i + 1;
                                        } else if (currentPage >= totalPages - 2) {
                                            page = totalPages - 4 + i;
                                        } else {
                                            page = currentPage - 2 + i;
                                        }
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setCurrentPage(page),
                                            className: `px-3 py-2 rounded-lg text-sm font-medium transition-all ${page === currentPage ? "bg-blue-500 text-white shadow-md" : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-50"}`,
                                            children: page
                                        }, page, false, {
                                            fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                                            lineNumber: 1724,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0));
                                    }),
                                    totalPages > 5 && currentPage < totalPages - 2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-slate-400",
                                                children: "..."
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                                                lineNumber: 1738,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setCurrentPage(totalPages),
                                                className: "px-3 py-2 bg-white border border-slate-200 rounded-lg text-sm text-slate-600 hover:bg-slate-50",
                                                children: totalPages
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                                                lineNumber: 1739,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                                lineNumber: 1711,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setCurrentPage(currentPage + 1),
                                disabled: currentPage === totalPages,
                                className: "px-3 py-2 bg-white border border-slate-200 rounded-lg text-sm disabled:opacity-50 shadow-sm",
                                children: "→"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                                lineNumber: 1748,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                        lineNumber: 1703,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    tableData.length > 0 && totalPages > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden md:flex justify-center items-center gap-1 mb-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setCurrentPage(currentPage - 1),
                                disabled: currentPage === 1,
                                className: "px-3 py-2 bg-white border border-slate-200 rounded-lg text-sm disabled:opacity-50 shadow-sm",
                                children: "←"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                                lineNumber: 1761,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1",
                                children: [
                                    Array.from({
                                        length: Math.min(5, totalPages)
                                    }, (_, i)=>{
                                        let page;
                                        if (totalPages <= 5) {
                                            page = i + 1;
                                        } else if (currentPage <= 3) {
                                            page = i + 1;
                                        } else if (currentPage >= totalPages - 2) {
                                            page = totalPages - 4 + i;
                                        } else {
                                            page = currentPage - 2 + i;
                                        }
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setCurrentPage(page),
                                            className: `px-3 py-2 rounded-lg text-sm font-medium transition-all ${page === currentPage ? "bg-blue-500 text-white shadow-md" : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-50"}`,
                                            children: page
                                        }, page, false, {
                                            fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                                            lineNumber: 1781,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0));
                                    }),
                                    totalPages > 5 && currentPage < totalPages - 2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-slate-400",
                                                children: "..."
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                                                lineNumber: 1795,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setCurrentPage(totalPages),
                                                className: "px-3 py-2 bg-white border border-slate-200 rounded-lg text-sm text-slate-600 hover:bg-slate-50",
                                                children: totalPages
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                                                lineNumber: 1796,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                                lineNumber: 1768,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setCurrentPage(currentPage + 1),
                                disabled: currentPage === totalPages,
                                className: "px-3 py-2 bg-white border border-slate-200 rounded-lg text-sm disabled:opacity-50 shadow-sm",
                                children: "→"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                                lineNumber: 1805,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                        lineNumber: 1760,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    !hasActiveFilter && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "md:hidden flex-1 flex flex-col items-center justify-center py-16",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$funnel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Filter$3e$__["Filter"], {
                                className: "w-16 h-16 text-slate-300 mb-4"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                                lineNumber: 1818,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            isTypingSearch ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-slate-500 text-center text-sm",
                                children: [
                                    "พิมพ์อีก ",
                                    3 - searchTerm.length,
                                    " ตัวอักษรเพื่อค้นหา"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                                lineNumber: 1820,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-slate-500 text-center text-sm",
                                children: "กรุณาเลือกตัวกรองหรือพิมพ์อย่างน้อย 3 ตัวอักษรเพื่อค้นหา"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                                lineNumber: 1824,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setShowFilterSheet(true),
                                className: "mt-4 px-6 py-2 bg-blue-500 text-white rounded-xl text-sm font-medium hover:bg-blue-600 transition-colors",
                                children: "เลือกตัวกรอง"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                                lineNumber: 1826,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                        lineNumber: 1817,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    hasActiveFilter && tableData.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "md:hidden bg-white rounded-lg shadow-md overflow-hidden mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "overflow-x-auto custom-scrollbar-horizontal",
                                style: {
                                    overflowY: "hidden",
                                    height: "12px"
                                },
                                onScroll: (e)=>{
                                    const target = e.currentTarget;
                                    const tableContainer = target.nextElementSibling;
                                    if (tableContainer) {
                                        tableContainer.scrollLeft = target.scrollLeft;
                                    }
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        width: tableData[0].headers.length * 150 + "px",
                                        height: "1px"
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                                    lineNumber: 1854,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                                lineNumber: 1840,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "overflow-x-auto overflow-y-auto custom-scrollbar",
                                style: {
                                    maxHeight: `calc(100vh + ${tableSize}px)`,
                                    position: "relative"
                                },
                                onScroll: (e)=>{
                                    const target = e.currentTarget;
                                    const topScroller = target.previousElementSibling;
                                    if (topScroller) {
                                        topScroller.scrollLeft = target.scrollLeft;
                                    }
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                    className: "w-full border-collapse text-sm table-auto",
                                    style: {
                                        position: "relative",
                                        zIndex: 1
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                            className: "sticky top-0 z-30 bg-yellow-300",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                className: "bg-yellow-300 border border-gray-400",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "px-3 py-2 text-center font-bold text-gray-900 border-r border-gray-400",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "checkbox",
                                                            checked: selectedIds.length === filteredAndSortedData.length && filteredAndSortedData.length > 0,
                                                            onChange: handleToggleSelectAll,
                                                            className: "w-4 h-4 cursor-pointer",
                                                            title: "เลือกทั้งหมด"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                                                            lineNumber: 1883,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                                                        lineNumber: 1882,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    displayHeaders.map((header, idx)=>{
                                                        // Define gradient colors for header date columns
                                                        const headerGradients = {
                                                            วันที่ติดตามครั้งล่าสุด: "bg-gradient-to-r from-emerald-300 to-emerald-400",
                                                            วันที่ติดตามครั้งถัดไป: "bg-gradient-to-r from-emerald-300 to-emerald-400",
                                                            "วันที่ Consult": "bg-gradient-to-r from-fuchsia-300 to-fuchsia-400",
                                                            วันที่ผ่าตัด: "bg-gradient-to-r from-orange-300 to-orange-400",
                                                            เวลาที่นัด: "bg-gradient-to-r from-orange-300 to-orange-400",
                                                            "วันที่ได้ชื่อ เบอร์": "bg-gradient-to-r from-blue-300 to-blue-400",
                                                            "วันที่ได้นัด consult": "bg-gradient-to-r from-fuchsia-300 to-fuchsia-400",
                                                            วันที่ได้นัดผ่าตัด: "bg-gradient-to-r from-orange-300 to-orange-400"
                                                        };
                                                        const headerGradient = headerGradients[header] || "bg-yellow-300";
                                                        const hoverClass = headerGradients[header] ? "hover:opacity-90" : "hover:bg-yellow-400";
                                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            onClick: ()=>handleSort(header),
                                                            className: `px-3 py-2 text-center text-xs font-bold text-gray-900 border-r border-gray-400 whitespace-nowrap cursor-pointer ${hoverClass} transition-all ${headerGradient}`,
                                                            style: {
                                                                fontSize: "11px"
                                                            },
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center justify-center gap-1",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: header
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                                                                        lineNumber: 1929,
                                                                        columnNumber: 31
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    sortColumn === header && (sortDirection === "asc" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__["ChevronUp"], {
                                                                        className: "w-3 h-3"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                                                                        lineNumber: 1932,
                                                                        columnNumber: 35
                                                                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                                        className: "w-3 h-3"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                                                                        lineNumber: 1934,
                                                                        columnNumber: 35
                                                                    }, ("TURBOPACK compile-time value", void 0)))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                                                                lineNumber: 1928,
                                                                columnNumber: 29
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, idx, false, {
                                                            fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                                                            lineNumber: 1922,
                                                            columnNumber: 27
                                                        }, ("TURBOPACK compile-time value", void 0));
                                                    }),
                                                    hasActiveFilter && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "px-3 py-2 text-center text-xs font-bold text-gray-900 border-r border-gray-400 whitespace-nowrap bg-blue-300",
                                                        style: {
                                                            fontSize: "11px"
                                                        },
                                                        children: "ดูเพิ่มเติม"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                                                        lineNumber: 1942,
                                                        columnNumber: 25
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                                                lineNumber: 1881,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                                            lineNumber: 1880,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                            children: [
                                                (()=>{
                                                    console.log("📊 Rendering tbody with", paginatedData.length, "rows");
                                                    return null;
                                                })(),
                                                paginatedData.map((row, rowIndex)=>{
                                                    const absoluteIndex = (currentPage - 1) * itemsPerPage + rowIndex;
                                                    const patternIndex = absoluteIndex % 4;
                                                    const rowId = row["id"];
                                                    const isChecked = selectedIds.includes(rowId);
                                                    // Pattern: white (0) → pink (1) → white (2) → purple-light (3)
                                                    let bgColor = "bg-white";
                                                    if (patternIndex === 1) {
                                                        bgColor = "bg-pink-200";
                                                    } else if (patternIndex === 3) {
                                                        bgColor = "bg-purple-200";
                                                    }
                                                    if (isChecked) {
                                                        bgColor = "bg-blue-100";
                                                    }
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                        onClick: ()=>{
                                                            setEditingCustomer(row);
                                                            setIsEditModalOpen(true);
                                                        },
                                                        className: `border border-gray-300 transition-all duration-200 group ${bgColor} hover:bg-blue-50 cursor-pointer`,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "px-3 py-2 border-r border-gray-300 text-center",
                                                                onClick: (e)=>e.stopPropagation(),
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "checkbox",
                                                                    checked: isChecked,
                                                                    onChange: ()=>handleToggleSelect(rowId),
                                                                    className: "w-4 h-4 cursor-pointer"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                                                                    lineNumber: 1988,
                                                                    columnNumber: 29
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                                                                lineNumber: 1984,
                                                                columnNumber: 27
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            displayHeaders.map((header, colIdx)=>{
                                                                const value = row[header];
                                                                const hasValue = value !== undefined && value !== null && value !== "";
                                                                const displayValue = formatDateValue(value);
                                                                const isNotesColumn = header === "หมายเหตุ";
                                                                // Define gradient colors for specific date columns
                                                                const dateColumns = {
                                                                    วันที่ติดตามครั้งล่าสุด: "bg-gradient-to-r from-emerald-100 to-emerald-200",
                                                                    วันที่ติดตามครั้งถัดไป: "bg-gradient-to-r from-emerald-100 to-emerald-200",
                                                                    "วันที่ Consult": "bg-gradient-to-r from-fuchsia-100 to-fuchsia-200",
                                                                    วันที่ผ่าตัด: "bg-gradient-to-r from-orange-100 to-orange-200",
                                                                    เวลาที่นัด: "bg-gradient-to-r from-orange-100 to-orange-200",
                                                                    "วันที่ได้ชื่อ เบอร์": "bg-gradient-to-r from-blue-100 to-blue-200",
                                                                    "วันที่ได้นัด consult": "bg-gradient-to-r from-fuchsia-100 to-fuchsia-200",
                                                                    วันที่ได้นัดผ่าตัด: "bg-gradient-to-r from-orange-100 to-orange-200"
                                                                };
                                                                const gradientClass = dateColumns[header] || "";
                                                                const isDateColumn = !!dateColumns[header];
                                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: `px-3 py-2 text-xs text-gray-900 border-r border-gray-300 text-center align-middle ${isNotesColumn ? "" : "whitespace-nowrap"} ${gradientClass}`,
                                                                    style: {
                                                                        fontSize: "11px",
                                                                        minWidth: isNotesColumn ? "450px" : isDateColumn ? "80px" : undefined,
                                                                        maxWidth: isNotesColumn ? "450px" : isDateColumn ? "80px" : undefined
                                                                    },
                                                                    children: hasValue ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: isNotesColumn ? "block text-left whitespace-pre-wrap break-words" : "block",
                                                                        children: displayValue
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                                                                        lineNumber: 2047,
                                                                        columnNumber: 35
                                                                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-gray-400 block",
                                                                        children: "-"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                                                                        lineNumber: 2057,
                                                                        columnNumber: 35
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                }, colIdx, false, {
                                                                    fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                                                                    lineNumber: 2028,
                                                                    columnNumber: 31
                                                                }, ("TURBOPACK compile-time value", void 0));
                                                            }),
                                                            hasActiveFilter && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "px-3 py-2 text-center border-r border-gray-300",
                                                                onClick: (e)=>e.stopPropagation(),
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>{
                                                                        setEditingCustomer(row);
                                                                        setIsEditModalOpen(true);
                                                                    },
                                                                    className: "px-3 py-1.5 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white text-xs font-medium rounded-lg transition-all duration-200 shadow-sm hover:shadow-md",
                                                                    children: "ดูเพิ่มเติม"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                                                                    lineNumber: 2068,
                                                                    columnNumber: 31
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                                                                lineNumber: 2064,
                                                                columnNumber: 29
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, rowIndex, true, {
                                                        fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                                                        lineNumber: 1976,
                                                        columnNumber: 25
                                                    }, ("TURBOPACK compile-time value", void 0));
                                                })
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                                            lineNumber: 1948,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                                    lineNumber: 1876,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                                lineNumber: 1861,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                        lineNumber: 1838,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    !hasActiveFilter && tableData.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden md:flex flex-col items-center justify-center py-16 bg-white rounded-xl shadow-sm border border-slate-200",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$funnel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Filter$3e$__["Filter"], {
                                className: "w-16 h-16 text-slate-300 mb-4"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                                lineNumber: 2091,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            isTypingSearch ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-slate-500 text-center text-sm",
                                children: [
                                    "พิมพ์อีก ",
                                    3 - searchTerm.length,
                                    " ตัวอักษรเพื่อค้นหา"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                                lineNumber: 2093,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-slate-500 text-center text-sm",
                                children: "กรุณาเลือกตัวกรองหรือพิมพ์อย่างน้อย 3 ตัวอักษรเพื่อค้นหา"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                                lineNumber: 2097,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                        lineNumber: 2090,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    hasActiveFilter && tableData.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden md:block bg-white rounded-lg shadow-md overflow-hidden mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "overflow-x-auto custom-scrollbar-horizontal",
                                style: {
                                    overflowY: "hidden",
                                    height: "12px"
                                },
                                onScroll: (e)=>{
                                    const target = e.currentTarget;
                                    const tableContainer = target.nextElementSibling;
                                    if (tableContainer) {
                                        tableContainer.scrollLeft = target.scrollLeft;
                                    }
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        width: tableData[0].headers.length * 150 + "px",
                                        height: "1px"
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                                    lineNumber: 2120,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                                lineNumber: 2106,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "overflow-x-auto overflow-y-auto custom-scrollbar",
                                style: {
                                    maxHeight: `calc(100vh + ${tableSize}px)`,
                                    position: "relative"
                                },
                                onScroll: (e)=>{
                                    const target = e.currentTarget;
                                    const topScroller = target.previousElementSibling;
                                    if (topScroller) {
                                        topScroller.scrollLeft = target.scrollLeft;
                                    }
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                    className: "w-full border-collapse text-sm table-auto",
                                    style: {
                                        position: "relative",
                                        zIndex: 1
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                            className: "sticky top-0 z-30 bg-yellow-300",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                className: "bg-yellow-300 border border-gray-400",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "px-3 py-2 text-center font-bold text-gray-900 border-r border-gray-400",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "checkbox",
                                                            checked: selectedIds.length === filteredAndSortedData.length && filteredAndSortedData.length > 0,
                                                            onChange: handleToggleSelectAll,
                                                            className: "w-4 h-4 cursor-pointer",
                                                            title: "เลือกทั้งหมด"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                                                            lineNumber: 2148,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                                                        lineNumber: 2147,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    displayHeaders.map((header, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "px-3 py-2 text-center font-bold text-gray-900 whitespace-nowrap border-r border-gray-400",
                                                            children: header
                                                        }, idx, false, {
                                                            fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                                                            lineNumber: 2160,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0))),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "px-3 py-2 text-center font-bold text-gray-900 whitespace-nowrap border-r border-gray-400 bg-blue-300",
                                                        children: "ดูเพิ่มเติม"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                                                        lineNumber: 2168,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                                                lineNumber: 2146,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                                            lineNumber: 2145,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                            children: paginatedData.map((row, rowIdx)=>{
                                                const rowId = row["ไอดี"] || row["id"] || rowIdx;
                                                const isSelected = selectedIds.includes(rowId);
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    className: `border-b border-gray-200 ${isSelected ? "bg-blue-50" : rowIdx % 2 === 0 ? "bg-white" : "bg-gray-50"} hover:bg-blue-100 transition-colors`,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "px-3 py-2 text-center border-r border-gray-200",
                                                            onClick: (e)=>e.stopPropagation(),
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "checkbox",
                                                                checked: isSelected,
                                                                onChange: ()=>handleToggleSelect(rowId),
                                                                className: "w-4 h-4 cursor-pointer"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                                                                lineNumber: 2187,
                                                                columnNumber: 27
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                                                            lineNumber: 2183,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        displayHeaders.map((header, colIdx)=>{
                                                            const value = row[header];
                                                            const hasValue = value !== undefined && value !== null && value !== "";
                                                            const displayValue = hasValue ? String(value) : "-";
                                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "px-3 py-2 text-center border-r border-gray-200 whitespace-nowrap",
                                                                style: {
                                                                    fontSize: "11px"
                                                                },
                                                                children: hasValue ? displayValue : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-gray-400",
                                                                    children: "-"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                                                                    lineNumber: 2204,
                                                                    columnNumber: 58
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, colIdx, false, {
                                                                fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                                                                lineNumber: 2199,
                                                                columnNumber: 29
                                                            }, ("TURBOPACK compile-time value", void 0));
                                                        }),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "px-3 py-2 text-center border-r border-gray-200",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>{
                                                                    setEditingCustomer(row);
                                                                    setIsEditModalOpen(true);
                                                                },
                                                                className: "px-3 py-1.5 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white text-xs font-medium rounded-lg transition-all duration-200 shadow-sm hover:shadow-md",
                                                                children: "ดูเพิ่มเติม"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                                                                lineNumber: 2210,
                                                                columnNumber: 27
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                                                            lineNumber: 2209,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, rowIdx, true, {
                                                    fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                                                    lineNumber: 2178,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0));
                                            })
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                                            lineNumber: 2173,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                                    lineNumber: 2141,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                                lineNumber: 2127,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                        lineNumber: 2104,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                lineNumber: 1006,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$EditCustomerModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditCustomerModal"], {
                isOpen: isEditModalOpen,
                onClose: ()=>setIsEditModalOpen(false),
                customerData: editingCustomer || {},
                onSave: handleSaveCustomer
            }, void 0, false, {
                fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                lineNumber: 2229,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AddCustomerModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AddCustomerModal"], {
                isOpen: isAddModalOpen,
                onClose: ()=>setIsAddModalOpen(false),
                onSuccess: ()=>{
                    setIsAddModalOpen(false);
                    fetchData();
                }
            }, void 0, false, {
                fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                lineNumber: 2235,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
};
_s(CustomerAllDataPage, "8i74jIzEc4/ubMahwkFFA55j/WA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"]
    ];
});
_c = CustomerAllDataPage;
function CustomerAllDataPageWrapper() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Suspense"], {
        fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-slate-500",
                children: "กำลังโหลด..."
            }, void 0, false, {
                fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
                lineNumber: 2252,
                columnNumber: 9
            }, void 0)
        }, void 0, false, {
            fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
            lineNumber: 2251,
            columnNumber: 7
        }, void 0),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CustomerAllDataPage, {}, void 0, false, {
            fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
            lineNumber: 2255,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/(fullscreen)/customer-all-data/page.tsx",
        lineNumber: 2250,
        columnNumber: 5
    }, this);
}
_c1 = CustomerAllDataPageWrapper;
var _c, _c1;
__turbopack_context__.k.register(_c, "CustomerAllDataPage");
__turbopack_context__.k.register(_c1, "CustomerAllDataPageWrapper");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_app_ae44ef26._.js.map