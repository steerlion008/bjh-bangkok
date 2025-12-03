module.exports = [
"[project]/src/app/facebook-ads-manager/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FacebookAdsManagerPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$facebook$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-facebook/dist/esm/index.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
// Facebook SDK Initialization
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
// ปิด root layout และเพิ่ม CSS สำหรับ modal
if (typeof document !== "undefined") {
    const style = document.createElement("style");
    style.textContent = `
    header, footer, nav.navbar, .layout-grid > :not(main) {
      display: none !important;
    }
    body {
      padding: 0 !important;
      margin: 0 !important;
      overflow-x: hidden !important;
    }
    main, .layout-grid {
      padding: 0 !important;
      margin: 0 !important;
    }
    /* Mobile Responsive Styles */
    @media (max-width: 640px) {
      .min-h-screen {
        min-height: 100vh !important;
      }
    }
    @media (max-width: 768px) {
      /* Make tables scrollable on mobile */
      .overflow-x-auto {
        overflow-x: auto !important;
        -webkit-overflow-scrolling: touch !important;
      }
    }
    .modal-overlay {
      backdrop-filter: blur(8px);
      animation: fadeIn 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }
    .video-modal-container {
      animation: slideUp 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
    }
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    @keyframes slideUp {
      from { 
        opacity: 0;
        transform: translateY(30px) scale(0.95);
      }
      to { 
        opacity: 1;
        transform: translateY(0) scale(1);
      }
    }
    @keyframes float {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-10px); }
    }
    @keyframes shimmer {
      0% { background-position: -1000px 0; }
      100% { background-position: 1000px 0; }
    }
    @keyframes pulse {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.8; }
    }
    @keyframes slideInFromLeft {
      from { 
        opacity: 0;
        transform: translateX(-30px);
      }
      to { 
        opacity: 1;
        transform: translateX(0);
      }
    }
    @keyframes slideInFromRight {
      from { 
        opacity: 0;
        transform: translateX(30px);
      }
      to { 
        opacity: 1;
        transform: translateX(0);
      }
    }
    .animate-slide-in-left {
      animation: slideInFromLeft 0.5s ease-out;
    }
    .animate-slide-in-right {
      animation: slideInFromRight 0.5s ease-out;
    }
    .glass-effect {
      background: rgba(255, 255, 255, 0.9);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.2);
    }
    .gradient-border {
      position: relative;
      background: linear-gradient(white, white) padding-box,
                  linear-gradient(135deg, #667eea 0%, #764ba2 100%) border-box;
      border: 2px solid transparent;
    }
  `;
    document.head.appendChild(style);
}
function FacebookAdsManagerPage() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [insights, setInsights] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [viewMode, setViewMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("ads");
    const [dateRange, setDateRange] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("today");
    const [customDateStart, setCustomDateStart] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [customDateEnd, setCustomDateEnd] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [showDatePicker, setShowDatePicker] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Page selection for different ad portfolios (Facebook, TikTok, etc.)
    const [selectedPage, setSelectedPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1);
    const [googleSheetsData, setGoogleSheetsData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [googleSheetsLoading, setGoogleSheetsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [googleAdsData, setGoogleAdsData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [googleAdsLoading, setGoogleAdsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [facebookBalance, setFacebookBalance] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [facebookBalanceLoading, setFacebookBalanceLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [phoneCountData, setPhoneCountData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        total: 0,
        datesWithData: 0
    });
    const [phoneCountLoading, setPhoneCountLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedPlatform, setSelectedPlatform] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("facebook");
    const [adCreatives, setAdCreatives] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(new Map());
    const [creativesLoading, setCreativesLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedAdForPreview, setSelectedAdForPreview] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showVideoModal, setShowVideoModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [topAdsSortBy, setTopAdsSortBy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("leads");
    const [dailySummaryData, setDailySummaryData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [dailySummaryLoading, setDailySummaryLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [phoneLeadsData, setPhoneLeadsData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [phoneLeadsLoading, setPhoneLeadsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [topAdsPhoneLeads, setTopAdsPhoneLeads] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(new Map());
    const [topAdsPhoneLeadsLoading, setTopAdsPhoneLeadsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [topAdsLimit, setTopAdsLimit] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(20);
    // State for adset-level insights (for TOP Ad Set table)
    const [adsetInsights, setAdsetInsights] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [adsetInsightsLoading, setAdsetInsightsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Campaign type filter for Ad Set table (TOF, MOF, BOF)
    const [adSetCampaignFilter, setAdSetCampaignFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(new Set([
        "MOF",
        "BOF"
    ]));
    // Separate state for Ad Set table sorting and limit (independent from TOP Ads)
    const [topAdSetSortBy, setTopAdSetSortBy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("leads");
    const [topAdSetLimit, setTopAdSetLimit] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(20);
    // State for Ad Set detail modal
    const [selectedAdSet, setSelectedAdSet] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showAdSetModal, setShowAdSetModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [page2Insights, setPage2Insights] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [page2Loading, setPage2Loading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [page2Error, setPage2Error] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [page2Summary, setPage2Summary] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        totalSpend: 0,
        totalImpressions: 0,
        totalClicks: 0,
        totalAds: 0,
        avgCtr: 0,
        avgCpc: 0,
        avgCpm: 0,
        total_messaging_first_reply: 0,
        total_messaging_connection: 0
    });
    const [page2SortBy, setPage2SortBy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("spend");
    const [page2Limit, setPage2Limit] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(20);
    // Page 2 Balance State
    const [page2Balance, setPage2Balance] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [page2BalanceLoading, setPage2BalanceLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [page2AmountSpent, setPage2AmountSpent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [page2Currency, setPage2Currency] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("THB");
    // Get ads that belong to a specific adset
    const getAdsByAdSetId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((adsetId)=>{
        return insights.filter((ad)=>ad.adset_id === adsetId);
    }, [
        insights
    ]);
    // Get total phone leads for an adset (sum of all ads in this adset)
    const getPhoneLeadsByAdSetId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((adsetId)=>{
        const adsInAdSet = insights.filter((ad)=>ad.adset_id === adsetId);
        let totalPhoneLeads = 0;
        adsInAdSet.forEach((ad)=>{
            totalPhoneLeads += topAdsPhoneLeads.get(ad.ad_id) || 0;
        });
        return totalPhoneLeads;
    }, [
        insights,
        topAdsPhoneLeads
    ]);
    // Re-parse Facebook SDK when modal opens
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
    }, [
        showVideoModal,
        selectedAdForPreview
    ]);
    const fetchAdCreatives = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (adIds)=>{
        setCreativesLoading(true);
        try {
            const creativesMap = new Map();
            for (const adId of adIds){
                try {
                    // ใช้ Next.js API route แทน Railway API
                    const response = await fetch(`/api/facebook-ads-creative?ad_id=${adId}`);
                    const result = await response.json();
                    if (result.success && result.data) {
                        creativesMap.set(adId, result.data);
                    }
                } catch (error) {
                // Error fetching creative
                }
            }
            // Force re-render by creating a new Map instance
            setAdCreatives(new Map(creativesMap));
        } catch (error) {
        // Fatal error
        } finally{
            setCreativesLoading(false);
        }
    }, []);
    const fetchTopAdsPhoneLeads = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (adIds)=>{
        try {
            setTopAdsPhoneLeadsLoading(true);
            const adIdsParam = adIds.join(",");
            // Calculate date range based on current dateRange state
            const today = new Date();
            let startDate;
            let endDate = today.toISOString().split("T")[0];
            if (dateRange === "custom" && customDateStart && customDateEnd) {
                startDate = customDateStart;
                endDate = customDateEnd;
            } else {
                let start;
                switch(dateRange){
                    case "today":
                        startDate = endDate;
                        break;
                    case "yesterday":
                        const yesterday = new Date(today);
                        yesterday.setDate(yesterday.getDate() - 1);
                        startDate = endDate = yesterday.toISOString().split("T")[0];
                        break;
                    case "last_7d":
                        start = new Date(today);
                        start.setDate(start.getDate() - 7);
                        startDate = start.toISOString().split("T")[0];
                        break;
                    case "last_14d":
                        start = new Date(today);
                        start.setDate(start.getDate() - 14);
                        startDate = start.toISOString().split("T")[0];
                        break;
                    case "last_30d":
                        start = new Date(today);
                        start.setDate(start.getDate() - 30);
                        startDate = start.toISOString().split("T")[0];
                        break;
                    case "this_month":
                        start = new Date(today.getFullYear(), today.getMonth(), 1);
                        startDate = start.toISOString().split("T")[0];
                        break;
                    case "last_month":
                        start = new Date(today.getFullYear(), today.getMonth() - 1, 1);
                        const lastMonthEnd = new Date(today.getFullYear(), today.getMonth(), 0);
                        startDate = start.toISOString().split("T")[0];
                        endDate = lastMonthEnd.toISOString().split("T")[0];
                        break;
                    default:
                        startDate = endDate;
                }
            }
            // ใช้ API ใหม่ที่ query จาก SQL โดยแมพกับ fb_ad_id และ filter ตามวันที่
            const response = await fetch(`/api/facebook-ads-phone-leads-sql?ad_ids=${adIdsParam}&date_start=${startDate}&date_end=${endDate}`);
            const result = await response.json();
            if (result.success && result.data) {
                const phoneLeadsMap = new Map();
                Object.keys(result.data).forEach((adId)=>{
                    phoneLeadsMap.set(adId, result.data[adId]);
                });
                setTopAdsPhoneLeads(new Map(phoneLeadsMap));
            }
        } catch (error) {
            setTopAdsPhoneLeads(new Map());
        } finally{
            setTopAdsPhoneLeadsLoading(false);
        }
    }, [
        dateRange,
        customDateStart,
        customDateEnd
    ]);
    const fetchInsights = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (isBackgroundRefresh = false, retryCount = 0)=>{
        try {
            if (!isBackgroundRefresh) {
                setLoading(true);
            }
            setError(null);
            const levelParam = viewMode === "campaigns" ? "campaign" : viewMode === "adsets" ? "adset" : "ad";
            let url = `https://believable-ambition-production.up.railway.app/api/facebook-ads-campaigns?level=${levelParam}`;
            const filtering = JSON.stringify([
                {
                    field: "action_type",
                    operator: "IN",
                    value: [
                        "onsite_conversion.messaging_first_reply",
                        "onsite_conversion.total_messaging_connection"
                    ]
                }
            ]);
            url += `&filtering=${encodeURIComponent(filtering)}`;
            url += `&action_breakdowns=action_type`;
            if (dateRange === "custom" && customDateStart && customDateEnd) {
                const timeRange = JSON.stringify({
                    since: customDateStart,
                    until: customDateEnd
                });
                url += `&time_range=${encodeURIComponent(timeRange)}`;
            } else {
                url += `&date_preset=${dateRange}`;
            }
            const response = await fetch(url);
            const result = await response.json();
            // ตรวจสอบ Rate Limit Error (403)
            if (response.status === 403 && result.error?.includes("Application request limit reached")) {
                const retryDelay = Math.min(30000 * Math.pow(2, retryCount), 120000); // Exponential backoff: 30s, 60s, 120s
                setError(`⏳ API Rate Limit - จะรีเฟรชอัตโนมัติในอีก ${retryDelay / 1000} วินาที... (ครั้งที่ ${retryCount + 1})`);
                // รีเฟรชอัตโนมัติหลังจาก delay
                setTimeout(()=>{
                    if (retryCount < 3) {
                        // จำกัดไม่เกิน 3 ครั้ง
                        fetchInsights(isBackgroundRefresh, retryCount + 1);
                    } else {
                        setError("❌ API Rate Limit - เกินจำนวนครั้งที่กำหนด กรุณารอสักครู่แล้วลองใหม่อีกครั้ง");
                        setLoading(false);
                    }
                }, retryDelay);
                return; // หยุดการทำงานของฟังก์ชันชั่วคราว
            }
            if (!response.ok || !result.success) {
                throw new Error(result.error || "ไม่สามารถดึงข้อมูลได้");
            }
            const uniqueData = new Map();
            result.data.forEach((item)=>{
                const key = item.ad_id || item.adset_id || item.campaign_id;
                if (uniqueData.has(key)) {
                    const existing = uniqueData.get(key);
                    if (item.actions) {
                        if (!existing.actions) existing.actions = [];
                        item.actions.forEach((action)=>{
                            const existingAction = existing.actions.find((a)=>a.action_type === action.action_type);
                            if (existingAction) {
                                existingAction.value = String(parseInt(existingAction.value || "0") + parseInt(action.value || "0"));
                            } else {
                                existing.actions.push({
                                    ...action
                                });
                            }
                        });
                    }
                    if (item.conversions) {
                        if (!existing.conversions) existing.conversions = [];
                        item.conversions.forEach((conversion)=>{
                            const existingConversion = existing.conversions.find((c)=>c.action_type === conversion.action_type);
                            if (existingConversion) {
                                existingConversion.value = String(parseInt(existingConversion.value || "0") + parseInt(conversion.value || "0"));
                            } else {
                                existing.conversions.push({
                                    ...conversion
                                });
                            }
                        });
                    }
                } else {
                    uniqueData.set(key, {
                        ...item
                    });
                }
            });
            const insightsArray = Array.from(uniqueData.values());
            setInsights(insightsArray);
            // Fetch creatives for ALL ads
            const allAdIds = insightsArray.filter((item)=>item.ad_id).map((item)=>item.ad_id);
            if (allAdIds.length > 0) {
                fetchAdCreatives(allAdIds);
                // Fetch phone leads for TOP 10 Ads
                fetchTopAdsPhoneLeads(allAdIds);
            }
        } catch (err) {
            setError(err instanceof Error ? err.message : "เกิดข้อผิดพลาด");
        } finally{
            if (!isBackgroundRefresh) {
                setLoading(false);
            }
        }
    }, [
        dateRange,
        viewMode,
        customDateStart,
        customDateEnd,
        fetchAdCreatives,
        fetchTopAdsPhoneLeads
    ]);
    const fetchGoogleSheetsData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        try {
            setGoogleSheetsLoading(true);
            let url = "https://believable-ambition-production.up.railway.app/api/google-sheets-data";
            if (dateRange === "custom" && customDateStart && customDateEnd) {
                const timeRange = JSON.stringify({
                    since: customDateStart,
                    until: customDateEnd
                });
                url += `?time_range=${encodeURIComponent(timeRange)}`;
            } else {
                url += `?date_preset=${dateRange}`;
            }
            const response = await fetch(url);
            const result = await response.json();
            if (!response.ok || !result.success) {
                setGoogleSheetsData(0);
            } else {
                setGoogleSheetsData(result.total || 0);
            }
        } catch (err) {
            setGoogleSheetsData(0);
        } finally{
            setGoogleSheetsLoading(false);
        }
    }, [
        dateRange,
        customDateStart,
        customDateEnd
    ]);
    const fetchGoogleAdsData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        try {
            setGoogleAdsLoading(true);
            let url = "https://believable-ambition-production.up.railway.app/api/google-ads";
            if (dateRange === "custom" && customDateStart && customDateEnd) {
                url += `?startDate=${customDateStart}&endDate=${customDateEnd}`;
            } else {
                const today = new Date();
                let startDate = "";
                let endDate = today.toISOString().split("T")[0];
                switch(dateRange){
                    case "today":
                        startDate = endDate;
                        break;
                    case "yesterday":
                        const yesterday = new Date(today);
                        yesterday.setDate(yesterday.getDate() - 1);
                        startDate = endDate = yesterday.toISOString().split("T")[0];
                        break;
                    case "last_7d":
                        const last7d = new Date(today);
                        last7d.setDate(last7d.getDate() - 7);
                        startDate = last7d.toISOString().split("T")[0];
                        break;
                    case "last_30d":
                        const last30d = new Date(today);
                        last30d.setDate(last30d.getDate() - 30);
                        startDate = last30d.toISOString().split("T")[0];
                        break;
                    case "this_month":
                        startDate = new Date(today.getFullYear(), today.getMonth(), 1).toISOString().split("T")[0];
                        break;
                    case "last_month":
                        const lastMonth = new Date(today.getFullYear(), today.getMonth() - 1, 1);
                        const lastMonthEnd = new Date(today.getFullYear(), today.getMonth(), 0);
                        startDate = lastMonth.toISOString().split("T")[0];
                        endDate = lastMonthEnd.toISOString().split("T")[0];
                        break;
                    default:
                        startDate = endDate;
                }
                url += `?startDate=${startDate}&endDate=${endDate}`;
            }
            const response = await fetch(url);
            const result = await response.json();
            if (!response.ok || result.error) {
                setGoogleAdsData(0);
            } else {
                const totalClicks = result.summary?.totalClicks || 0;
                setGoogleAdsData(totalClicks);
            }
        } catch (err) {
            setGoogleAdsData(0);
        } finally{
            setGoogleAdsLoading(false);
        }
    }, [
        dateRange,
        customDateStart,
        customDateEnd
    ]);
    const fetchFacebookBalance = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        try {
            setFacebookBalanceLoading(true);
            const response = await fetch("/api/facebook-ads-balance");
            const result = await response.json();
            if (!response.ok || !result.success) {
                setFacebookBalance(0);
            } else {
                setFacebookBalance(result.data.available_balance || 0);
            }
        } catch (err) {
            setFacebookBalance(0);
        } finally{
            setFacebookBalanceLoading(false);
        }
    }, []);
    const fetchPhoneCount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        try {
            setPhoneCountLoading(true);
            // Calculate date range
            const today = new Date();
            let startDate;
            let endDate = today.toISOString().split("T")[0];
            if (dateRange === "custom" && customDateStart && customDateEnd) {
                startDate = customDateStart;
                endDate = customDateEnd;
            } else {
                let start;
                switch(dateRange){
                    case "today":
                        startDate = endDate;
                        break;
                    case "yesterday":
                        const yesterday = new Date(today);
                        yesterday.setDate(yesterday.getDate() - 1);
                        startDate = endDate = yesterday.toISOString().split("T")[0];
                        break;
                    case "last_7d":
                        start = new Date(today);
                        start.setDate(start.getDate() - 7);
                        startDate = start.toISOString().split("T")[0];
                        break;
                    case "last_14d":
                        start = new Date(today);
                        start.setDate(start.getDate() - 14);
                        startDate = start.toISOString().split("T")[0];
                        break;
                    case "last_30d":
                        start = new Date(today);
                        start.setDate(start.getDate() - 30);
                        startDate = start.toISOString().split("T")[0];
                        break;
                    case "this_month":
                        start = new Date(today.getFullYear(), today.getMonth(), 1);
                        startDate = start.toISOString().split("T")[0];
                        break;
                    case "last_month":
                        start = new Date(today.getFullYear(), today.getMonth() - 1, 1);
                        const lastMonthEnd = new Date(today.getFullYear(), today.getMonth(), 0);
                        startDate = start.toISOString().split("T")[0];
                        endDate = lastMonthEnd.toISOString().split("T")[0];
                        break;
                    default:
                        startDate = endDate;
                }
            }
            // Fetch phone count with date range from Next.js API
            const response = await fetch(`/api/phone-count`);
            const result = await response.json();
            if (!response.ok || !result.success) {
                setPhoneCountData({
                    total: 0,
                    datesWithData: 0
                });
            } else {
                // Calculate total for date range from result.data { "2025-11-23": 3, ... }
                let total = 0;
                let datesCount = 0;
                // Compare dates as strings (YYYY-MM-DD format)
                Object.keys(result.data || {}).forEach((dateStr)=>{
                    // dateStr is already in YYYY-MM-DD format
                    if (dateStr >= startDate && dateStr <= endDate) {
                        total += result.data[dateStr];
                        datesCount++;
                    }
                });
                setPhoneCountData({
                    total: total,
                    datesWithData: datesCount
                });
            }
        } catch (err) {
            setPhoneCountData({
                total: 0,
                datesWithData: 0
            });
        } finally{
            setPhoneCountLoading(false);
        }
    }, [
        dateRange,
        customDateStart,
        customDateEnd
    ]);
    const fetchPhoneLeadsData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        try {
            setPhoneLeadsLoading(true);
            // Fetch all phone leads data grouped by date (no date filter = get all dates)
            const response = await fetch(`/api/facebook-ads-phone-leads`);
            const result = await response.json();
            if (result.success && result.data) {
                // Store phone leads count for each date
                // result.data format: { "2024-11-23": 5, "2024-11-22": 3, ... }
                setPhoneLeadsData(result.data);
            } else {
                setPhoneLeadsData({});
            }
        } catch (err) {
            setPhoneLeadsData({});
        } finally{
            setPhoneLeadsLoading(false);
        }
    }, []);
    const fetchDailySummaryData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        try {
            setDailySummaryLoading(true);
            // Fetch last 30 days data from Facebook Ads API with daily breakdown
            const url = `https://believable-ambition-production.up.railway.app/api/facebook-ads-campaigns?level=ad&date_preset=last_30d&time_increment=1`;
            const response = await fetch(url);
            const result = await response.json();
            if (!response.ok || !result.success) {
                setDailySummaryData([]);
            } else {
                setDailySummaryData(result.data || []);
                // Fetch phone leads data for all dates
                fetchPhoneLeadsData();
            }
        } catch (err) {
            setDailySummaryData([]);
        } finally{
            setDailySummaryLoading(false);
        }
    }, [
        fetchPhoneLeadsData
    ]);
    // Fetch adset-level insights for TOP Ad Set table
    const fetchAdsetInsights = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        try {
            setAdsetInsightsLoading(true);
            let url = `https://believable-ambition-production.up.railway.app/api/facebook-ads-campaigns?level=adset`;
            if (dateRange === "custom" && customDateStart && customDateEnd) {
                const timeRange = JSON.stringify({
                    since: customDateStart,
                    until: customDateEnd
                });
                url += `&time_range=${encodeURIComponent(timeRange)}`;
            } else {
                url += `&date_preset=${dateRange}`;
            }
            const response = await fetch(url);
            const result = await response.json();
            if (!response.ok || !result.success) {
                setAdsetInsights([]);
            } else {
                // Deduplicate adset data
                const uniqueData = new Map();
                result.data.forEach((item)=>{
                    const key = item.adset_id;
                    if (uniqueData.has(key)) {
                        const existing = uniqueData.get(key);
                        if (item.actions) {
                            if (!existing.actions) existing.actions = [];
                            item.actions.forEach((action)=>{
                                const existingAction = existing.actions.find((a)=>a.action_type === action.action_type);
                                if (existingAction) {
                                    existingAction.value = String(parseInt(existingAction.value || "0") + parseInt(action.value || "0"));
                                } else {
                                    existing.actions.push({
                                        ...action
                                    });
                                }
                            });
                        }
                    } else {
                        uniqueData.set(key, {
                            ...item
                        });
                    }
                });
                setAdsetInsights(Array.from(uniqueData.values()));
            }
        } catch (err) {
            setAdsetInsights([]);
        } finally{
            setAdsetInsightsLoading(false);
        }
    }, [
        dateRange,
        customDateStart,
        customDateEnd
    ]);
    // ============ Fetch Page 2 Data ============
    const fetchPage2Insights = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        try {
            setPage2Loading(true);
            setPage2Error(null);
            // ใช้ Railway API แทน local API
            let url = `https://believable-ambition-production.up.railway.app/api/facebook-ads-campaigns`;
            const params = new URLSearchParams();
            // Set ad_account_id for Page 2
            params.append("ad_account_id", "act_869492750129928");
            // Set level to ad
            params.append("level", "ad");
            // Add filtering for messaging actions
            const filtering = JSON.stringify([
                {
                    field: "action_type",
                    operator: "IN",
                    value: [
                        "onsite_conversion.messaging_first_reply",
                        "onsite_conversion.total_messaging_connection"
                    ]
                }
            ]);
            params.append("filtering", filtering);
            params.append("action_breakdowns", "action_type");
            // ใช้ date range เดียวกับ Page 1
            if (dateRange === "custom" && customDateStart && customDateEnd) {
                const timeRange = JSON.stringify({
                    since: customDateStart,
                    until: customDateEnd
                });
                params.append("time_range", timeRange);
            } else {
                params.append("date_preset", dateRange);
            }
            const response = await fetch(`${url}?${params.toString()}`);
            const result = await response.json();
            if (!response.ok || !result.success) {
                setPage2Error(result.error || "ไม่สามารถดึงข้อมูล Page 2 ได้");
                setPage2Insights([]);
                setPage2Summary({
                    totalSpend: 0,
                    totalImpressions: 0,
                    totalClicks: 0,
                    totalAds: 0,
                    avgCtr: 0,
                    avgCpc: 0,
                    avgCpm: 0,
                    total_messaging_first_reply: 0,
                    total_messaging_connection: 0
                });
            } else {
                setPage2Insights(result.data || []);
                // Map API summary fields to state
                setPage2Summary({
                    totalSpend: result.summary?.total_spend || 0,
                    totalImpressions: result.summary?.total_impressions || 0,
                    totalClicks: result.summary?.total_clicks || 0,
                    totalAds: result.data?.length || 0,
                    avgCtr: result.summary?.total_impressions > 0 ? result.summary?.total_clicks / result.summary?.total_impressions * 100 : 0,
                    avgCpc: result.summary?.total_clicks > 0 ? result.summary?.total_spend / result.summary?.total_clicks : 0,
                    avgCpm: result.summary?.total_impressions > 0 ? result.summary?.total_spend / result.summary?.total_impressions * 1000 : 0,
                    total_messaging_first_reply: result.summary?.total_messaging_first_reply || 0,
                    total_messaging_connection: result.summary?.total_messaging_connection || 0
                });
            }
        } catch (err) {
            setPage2Error(err instanceof Error ? err.message : "เกิดข้อผิดพลาด");
            setPage2Insights([]);
        } finally{
            setPage2Loading(false);
        }
    }, [
        dateRange,
        customDateStart,
        customDateEnd
    ]);
    // ============ Fetch Page 2 Balance ============
    const fetchPage2Balance = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        try {
            setPage2BalanceLoading(true);
            const response = await fetch("/api/facebook-ads-balance-page2");
            const result = await response.json();
            if (!response.ok || !result.success) {
                setPage2Balance(0);
                setPage2AmountSpent(0);
            } else {
                setPage2Balance(result.data.available_balance || result.data.balance || 0);
                setPage2AmountSpent(result.data.amount_spent || 0);
                setPage2Currency(result.data.currency || "THB");
            }
        } catch (err) {
            setPage2Balance(0);
            setPage2AmountSpent(0);
        } finally{
            setPage2BalanceLoading(false);
        }
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const loadAllData = async ()=>{
            try {
                await Promise.all([
                    fetchInsights(),
                    fetchGoogleSheetsData(),
                    fetchGoogleAdsData(),
                    fetchFacebookBalance(),
                    fetchPhoneCount(),
                    fetchDailySummaryData(),
                    fetchAdsetInsights(),
                    fetchPage2Insights(),
                    fetchPage2Balance()
                ]);
            } catch (error) {
                setError("เกิดข้อผิดพลาดในการโหลดข้อมูล");
                setLoading(false);
            }
        };
        loadAllData();
        // Auto-refresh every 2 minutes (120000ms) in background - ลด frequency เพื่อป้องกัน Rate Limit
        const refreshInterval = setInterval(()=>{
            Promise.all([
                fetchInsights(true),
                fetchGoogleSheetsData(),
                fetchGoogleAdsData(),
                fetchFacebookBalance(),
                fetchPhoneCount(),
                fetchDailySummaryData(),
                fetchAdsetInsights(),
                fetchPage2Insights(),
                fetchPage2Balance()
            ]);
        }, 120000); // 120000ms = 2 minutes (เพิ่มจาก 1 นาที เป็น 2 นาที)
        // Cleanup interval on unmount
        return ()=>{
            clearInterval(refreshInterval);
        };
    }, [
        fetchInsights,
        fetchGoogleSheetsData,
        fetchGoogleAdsData,
        fetchFacebookBalance,
        fetchPhoneCount,
        fetchDailySummaryData,
        fetchAdsetInsights,
        fetchPage2Insights,
        fetchPage2Balance
    ]);
    // Monitor adCreatives changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
    // adCreatives updated
    }, [
        adCreatives
    ]);
    const formatNumber = (value)=>{
        const num = typeof value === "string" ? parseFloat(value) : value;
        return isNaN(num) ? "—" : num.toLocaleString("th-TH", {
            maximumFractionDigits: 2
        });
    };
    const formatCurrency = (value)=>{
        const num = typeof value === "string" ? parseFloat(value) : value;
        return isNaN(num) ? "—" : `฿${num.toLocaleString("th-TH", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        })}`;
    };
    const formatPercentage = (value)=>{
        const num = typeof value === "string" ? parseFloat(value) : value;
        return isNaN(num) ? "—" : `${num.toLocaleString("th-TH", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        })}%`;
    };
    const getResultsByActionType = (actions, actionType)=>{
        if (!actions) return 0;
        const action = actions.find((a)=>a.action_type === actionType);
        return action ? parseInt(action.value || "0") : 0;
    };
    const getTotalResults = ()=>{
        let total = 0;
        insights.forEach((ad)=>{
            if (ad.actions) {
                const messagingAction = ad.actions.find((action)=>action.action_type === "onsite_conversion.messaging_first_reply");
                if (messagingAction) {
                    const value = parseInt(messagingAction.value || "0");
                    total += value;
                }
            }
        });
        return total;
    };
    const getTotalMessagingConnection = ()=>{
        let total = 0;
        insights.forEach((ad)=>{
            if (ad.actions) {
                const messagingAction = ad.actions.find((action)=>action.action_type === "onsite_conversion.total_messaging_connection");
                if (messagingAction) {
                    const value = parseInt(messagingAction.value || "0");
                    total += value;
                }
            }
        });
        return total;
    };
    const getTotalLeads = ()=>{
        let total = 0;
        insights.forEach((ad)=>{
            if (ad.actions) {
                const leadAction = ad.actions.find((action)=>action.action_type === "lead");
                if (leadAction) {
                    const value = parseInt(leadAction.value || "0");
                    total += value;
                }
            }
        });
        return total;
    };
    const handleDateRangeChange = (value)=>{
        setDateRange(value);
        if (value === "custom") {
            const today = new Date().toISOString().split("T")[0];
            if (!customDateStart) setCustomDateStart(today);
            if (!customDateEnd) setCustomDateEnd(today);
            setShowDatePicker(true);
        } else {
            setShowDatePicker(false);
        }
    };
    const applyCustomDateRange = ()=>{
        if (customDateStart && customDateEnd) {
            setShowDatePicker(false);
            setTimeout(()=>{
                setDateRange("custom");
            }, 0);
        }
    };
    // Filter insights based on main date range (ใช้ช่วงเวลาจาก 📊 ช่องควบคุม)
    const getTopAdsFilteredInsights = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        // ใช้ช่วงเวลาเดียวกับ main dateRange (📊 ช่องควบคุม)
        return insights;
    }, [
        insights,
        dateRange
    ]);
    const filteredInsights = insights;
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "inline-block animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-600 mb-6"
                    }, void 0, false, {
                        fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                        lineNumber: 1142,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-700 text-xl font-semibold",
                        children: "กำลังโหลดข้อมูล..."
                    }, void 0, false, {
                        fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                        lineNumber: 1143,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-500 text-sm mt-2",
                        children: "โปรดรอสักครู่"
                    }, void 0, false, {
                        fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                        lineNumber: 1146,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                lineNumber: 1141,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
            lineNumber: 1140,
            columnNumber: 7
        }, this);
    }
    if (error) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-gray-50 flex items-center justify-center p-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white rounded-lg shadow-lg p-8 max-w-2xl w-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-red-500 text-5xl mb-4 text-center",
                        children: "⚠️"
                    }, void 0, false, {
                        fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                        lineNumber: 1155,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-xl font-bold text-gray-800 mb-4 text-center",
                        children: "เกิดข้อผิดพลาด"
                    }, void 0, false, {
                        fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                        lineNumber: 1156,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-600 mb-6 text-center",
                        children: error
                    }, void 0, false, {
                        fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                        lineNumber: 1159,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-3",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>{
                                setError(null);
                                setLoading(true);
                                fetchInsights(false);
                            },
                            className: "flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors",
                            children: "ลองอีกครั้ง"
                        }, void 0, false, {
                            fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                            lineNumber: 1161,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                        lineNumber: 1160,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                lineNumber: 1154,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
            lineNumber: 1153,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gradient-to-br from-gray-50 to-blue-50",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white border-b border-gray-200 px-3 sm:px-6 py-3",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>router.push("/home"),
                    className: "flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-lg transition-all shadow-md hover:shadow-lg font-medium text-sm",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-lg",
                            children: "←"
                        }, void 0, false, {
                            fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                            lineNumber: 1184,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "กลับไปหน้าหลัก"
                        }, void 0, false, {
                            fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                            lineNumber: 1185,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                    lineNumber: 1180,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                lineNumber: 1179,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white shadow-md border-b border-gray-200",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "px-3 sm:px-6 py-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hidden md:flex items-center space-x-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "px-3 sm:px-6 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors font-medium text-xs sm:text-sm",
                                    children: "📊 ช่องควบคุม"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                    lineNumber: 1193,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>handleDateRangeChange("today"),
                                    className: `px-3 sm:px-6 py-2 rounded-lg transition-colors font-medium text-xs sm:text-sm ${dateRange === "today" ? "bg-blue-500 text-white shadow-md" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`,
                                    children: "วันนี้"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                    lineNumber: 1196,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>handleDateRangeChange("yesterday"),
                                    className: `px-6 py-2 rounded-lg transition-colors font-medium text-sm ${dateRange === "yesterday" ? "bg-blue-500 text-white shadow-md" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`,
                                    children: "เมื่อวาน"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                    lineNumber: 1205,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>handleDateRangeChange("last_7d"),
                                    className: `px-6 py-2 rounded-lg transition-colors font-medium text-sm ${dateRange === "last_7d" ? "bg-blue-500 text-white shadow-md" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`,
                                    children: "7 วัน"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                    lineNumber: 1214,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>handleDateRangeChange("last_30d"),
                                    className: `px-6 py-2 rounded-lg transition-colors font-medium text-sm ${dateRange === "last_30d" ? "bg-blue-500 text-white shadow-md" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`,
                                    children: "30 วัน"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                    lineNumber: 1223,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>handleDateRangeChange("this_month"),
                                    className: `px-6 py-2 rounded-lg transition-colors font-medium text-sm ${dateRange === "this_month" ? "bg-blue-500 text-white shadow-md" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`,
                                    children: "เดือนนี้"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                    lineNumber: 1232,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>handleDateRangeChange("custom"),
                                    className: `px-6 py-2 rounded-lg transition-colors font-medium text-sm ${dateRange === "custom" ? "bg-blue-500 text-white shadow-md" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`,
                                    children: "🗓️ กำหนดเอง"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                    lineNumber: 1241,
                                    columnNumber: 13
                                }, this),
                                dateRange === "custom" && customDateStart && customDateEnd && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs text-gray-600 bg-blue-50 px-3 py-2 rounded-lg border border-blue-200 font-medium ml-2",
                                    children: [
                                        customDateStart,
                                        " ถึง ",
                                        customDateEnd
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                    lineNumber: 1251,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                    lineNumber: 1256,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2 border-l border-gray-300 pl-4 ml-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setSelectedPage(1),
                                            className: `px-4 py-2 rounded-lg transition-colors font-medium text-sm ${selectedPage === 1 ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-md" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`,
                                            children: "Page 1"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                            lineNumber: 1259,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setSelectedPage(2),
                                            className: `px-4 py-2 rounded-lg transition-colors font-medium text-sm ${selectedPage === 2 ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-md" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`,
                                            children: "Page 2"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                            lineNumber: 1268,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setSelectedPage(3),
                                            className: `px-4 py-2 rounded-lg transition-colors font-medium text-sm ${selectedPage === 3 ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-md" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`,
                                            children: "Page 3"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                            lineNumber: 1277,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setSelectedPage(4),
                                            className: `px-4 py-2 rounded-lg transition-colors font-medium text-sm ${selectedPage === 4 ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-md" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`,
                                            children: "Page 4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                            lineNumber: 1286,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                    lineNumber: 1258,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                            lineNumber: 1192,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "md:hidden space-y-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm font-semibold text-gray-700",
                                            children: "📅"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                            lineNumber: 1300,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: dateRange,
                                            onChange: (e)=>handleDateRangeChange(e.target.value),
                                            className: "flex-1 px-4 py-2 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-700 font-medium text-sm",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "today",
                                                    children: "วันนี้"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                    lineNumber: 1306,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "yesterday",
                                                    children: "เมื่อวาน"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                    lineNumber: 1307,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "last_7d",
                                                    children: "7 วันที่ผ่านมา"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                    lineNumber: 1308,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "last_14d",
                                                    children: "14 วันที่ผ่านมา"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                    lineNumber: 1309,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "last_30d",
                                                    children: "30 วันที่ผ่านมา"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                    lineNumber: 1310,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "this_month",
                                                    children: "เดือนนี้"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                    lineNumber: 1311,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "custom",
                                                    children: "🗓️ กำหนดเองเอง"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                    lineNumber: 1312,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                            lineNumber: 1301,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                    lineNumber: 1299,
                                    columnNumber: 13
                                }, this),
                                dateRange === "custom" && customDateStart && customDateEnd && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-xs text-gray-600 bg-blue-50 px-3 py-2 rounded-lg border border-blue-200 font-medium",
                                    children: [
                                        customDateStart,
                                        " ถึง ",
                                        customDateEnd
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                    lineNumber: 1316,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm font-semibold text-gray-700",
                                            children: "📄"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                            lineNumber: 1322,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: selectedPage,
                                            onChange: (e)=>setSelectedPage(Number(e.target.value)),
                                            className: "flex-1 px-4 py-2 border-2 border-purple-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 bg-white text-gray-700 font-medium text-sm",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: 1,
                                                    children: "Page 1"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                    lineNumber: 1330,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: 2,
                                                    children: "Page 2"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                    lineNumber: 1331,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: 3,
                                                    children: "Page 3"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                    lineNumber: 1332,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: 4,
                                                    children: "Page 4"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                    lineNumber: 1333,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                            lineNumber: 1323,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                    lineNumber: 1321,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                            lineNumber: 1298,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                    lineNumber: 1190,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                lineNumber: 1189,
                columnNumber: 7
            }, this),
            showDatePicker && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "modal-overlay fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4",
                onClick: (e)=>{
                    if (e.target === e.currentTarget) {
                        setShowDatePicker(false);
                    }
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "date-picker-container bg-white rounded-2xl shadow-2xl p-8 max-w-3xl w-full",
                    onClick: (e)=>e.stopPropagation(),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between mb-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-2xl font-bold text-gray-800",
                                    children: "เลือกช่วงวันที่"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                    lineNumber: 1354,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setShowDatePicker(false),
                                    className: "text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full p-2 transition-all text-2xl w-10 h-10 flex items-center justify-center",
                                    children: "✕"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                    lineNumber: 1357,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                            lineNumber: 1353,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 gap-8 mb-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-base font-bold text-gray-700 mb-4",
                                            children: "📅 จากวันที่"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                            lineNumber: 1366,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border-2 border-blue-300 shadow-md",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "date",
                                                value: customDateStart || new Date().toISOString().split("T")[0],
                                                onChange: (e)=>setCustomDateStart(e.target.value),
                                                className: "w-full px-5 py-4 border-2 border-gray-300 rounded-xl text-lg font-medium focus:outline-none focus:ring-4 focus:ring-blue-300 focus:border-blue-500"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                lineNumber: 1370,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                            lineNumber: 1369,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                    lineNumber: 1365,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-base font-bold text-gray-700 mb-4",
                                            children: "📅 ถึงวันที่"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                            lineNumber: 1381,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl border-2 border-orange-300 shadow-md",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "date",
                                                value: customDateEnd || new Date().toISOString().split("T")[0],
                                                onChange: (e)=>setCustomDateEnd(e.target.value),
                                                className: "w-full px-5 py-4 border-2 border-gray-300 rounded-xl text-lg font-medium focus:outline-none focus:ring-4 focus:ring-orange-300 focus:border-orange-500"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                lineNumber: 1385,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                            lineNumber: 1384,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                    lineNumber: 1380,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                            lineNumber: 1364,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex space-x-4 justify-end",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setShowDatePicker(false),
                                    className: "px-10 py-4 text-base border-2 border-gray-300 rounded-xl hover:bg-gray-100 transition-colors font-semibold text-gray-700",
                                    children: "ยกเลิก"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                    lineNumber: 1397,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: applyCustomDateRange,
                                    className: "px-10 py-4 text-base bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all font-semibold",
                                    children: "✓ ตกลง"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                    lineNumber: 1403,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                            lineNumber: 1396,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                    lineNumber: 1349,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                lineNumber: 1341,
                columnNumber: 9
            }, this),
            showVideoModal && selectedAdForPreview && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "modal-overlay fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50",
                style: {
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    width: "100vw",
                    height: "100vh",
                    margin: 0,
                    padding: "1rem"
                },
                onClick: (e)=>{
                    if (e.target === e.currentTarget) {
                        setShowVideoModal(false);
                        setSelectedAdForPreview(null);
                    }
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "video-modal-container bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto",
                    onClick: (e)=>e.stopPropagation(),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "sticky top-0 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 px-6 py-4 flex items-center justify-between z-10 rounded-t-2xl",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-xl font-bold text-white truncate",
                                            children: [
                                                "🎯 ",
                                                selectedAdForPreview.ad_name
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                            lineNumber: 1441,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col sm:flex-row sm:gap-4 mt-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-white/80",
                                                    children: [
                                                        "📁 Campaign: ",
                                                        selectedAdForPreview.campaign_name
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                    lineNumber: 1445,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-white/80",
                                                    children: [
                                                        "📂 Ad Set: ",
                                                        selectedAdForPreview.adset_name || "—"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                    lineNumber: 1448,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                            lineNumber: 1444,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                    lineNumber: 1440,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        setShowVideoModal(false);
                                        setSelectedAdForPreview(null);
                                    },
                                    className: "text-white hover:text-gray-200 hover:bg-white/20 rounded-full p-2 transition-all text-2xl w-10 h-10 flex items-center justify-center ml-4",
                                    children: "✕"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                    lineNumber: 1453,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                            lineNumber: 1439,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-6",
                                    children: (()=>{
                                        const creative = adCreatives.get(selectedAdForPreview.ad_id);
                                        const effectiveStoryId = creative?.effective_object_story_id;
                                        const videoId = creative?.object_story_spec?.video_data?.video_id || creative?.video_id;
                                        const thumbnailUrl = creative?.thumbnail_url || creative?.object_story_spec?.video_data?.image_url || creative?.image_url;
                                        // ถ้ามี effective_object_story_id ใช้ EmbeddedPost ก่อน
                                        if (effectiveStoryId) {
                                            const postUrl = `https://www.facebook.com/${effectiveStoryId.replace("_", "/posts/")}`;
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "bg-white rounded-xl overflow-hidden shadow-lg",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$facebook$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FacebookProvider"], {
                                                            appId: "1086145253509335",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$facebook$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EmbeddedPost"], {
                                                                href: postUrl,
                                                                width: "100%",
                                                                showText: true
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                lineNumber: 1487,
                                                                columnNumber: 29
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                            lineNumber: 1486,
                                                            columnNumber: 27
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                        lineNumber: 1485,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-center",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: postUrl,
                                                            target: "_blank",
                                                            rel: "noopener noreferrer",
                                                            className: "flex items-center justify-center gap-2 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors font-medium shadow-lg",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: "📱"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                    lineNumber: 1502,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: "เปิดดูโพสต์เต็มรูปแบบใน Facebook"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                    lineNumber: 1503,
                                                                    columnNumber: 29
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                            lineNumber: 1496,
                                                            columnNumber: 27
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                        lineNumber: 1495,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                lineNumber: 1483,
                                                columnNumber: 23
                                            }, this);
                                        }
                                        // ลองใช้ local video file ก่อน (จาก /images/video/{video_id}.mp4)
                                        const localVideoPath = videoId ? `/images/video/${videoId}.mp4` : null;
                                        const videoSource = creative?.video_source;
                                        // ถ้ามี videoId - ลองเล่นจาก local ก่อน
                                        if (videoId) {
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "rounded-xl overflow-hidden bg-black shadow-lg",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                                                            controls: true,
                                                            autoPlay: true,
                                                            className: "w-full h-auto max-h-[60vh]",
                                                            poster: thumbnailUrl,
                                                            onError: (e)=>{
                                                                console.log("❌ [Video Error] Local video not found, trying Facebook source");
                                                                const videoEl = e.target;
                                                                // ถ้า local ไม่มี ลองใช้ video_source จาก Facebook
                                                                if (videoSource && videoEl.src !== videoSource) {
                                                                    videoEl.src = videoSource;
                                                                } else {
                                                                    // ถ้าทั้ง local และ Facebook ไม่ได้ แสดง fallback
                                                                    videoEl.style.display = "none";
                                                                    const parent = videoEl.parentElement;
                                                                    if (parent && thumbnailUrl) {
                                                                        parent.innerHTML = `
                                    <div class="relative">
                                      <img src="${thumbnailUrl}" alt="Video thumbnail" class="w-full h-auto" />
                                      <div class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
                                        <span class="text-white text-4xl">⚠️ วิดีโอไม่สามารถเล่นได้</span>
                                      </div>
                                    </div>
                                  `;
                                                                    }
                                                                }
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("source", {
                                                                    src: localVideoPath || videoSource || '',
                                                                    type: "video/mp4"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                    lineNumber: 1547,
                                                                    columnNumber: 29
                                                                }, this),
                                                                "เบราว์เซอร์ของคุณไม่รองรับการเล่นวิดีโอ"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                            lineNumber: 1519,
                                                            columnNumber: 27
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                        lineNumber: 1518,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "grid grid-cols-2 gap-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                href: `https://www.facebook.com/reel/${videoId}`,
                                                                target: "_blank",
                                                                rel: "noopener noreferrer",
                                                                className: "flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors font-medium shadow-lg text-sm sm:text-base",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: "🎬"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                        lineNumber: 1559,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: "ดูเป็น Reel"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                        lineNumber: 1560,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                lineNumber: 1553,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                href: `https://www.facebook.com/watch/?v=${videoId}`,
                                                                target: "_blank",
                                                                rel: "noopener noreferrer",
                                                                className: "flex items-center justify-center gap-2 px-6 py-3 bg-gray-700 hover:bg-gray-800 text-white rounded-lg transition-colors font-medium shadow-lg text-sm sm:text-base",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: "▶️"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                        lineNumber: 1568,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: "ดูเป็น Video"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                        lineNumber: 1569,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                lineNumber: 1562,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                        lineNumber: 1552,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                lineNumber: 1516,
                                                columnNumber: 23
                                            }, this);
                                        }
                                        // ถ้ามีแค่รูปภาพ (ไม่มี video)
                                        if (thumbnailUrl) {
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "rounded-xl overflow-hidden bg-gray-100 shadow-lg",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: thumbnailUrl,
                                                    alt: selectedAdForPreview.ad_name,
                                                    className: "w-full h-auto",
                                                    onError: (e)=>{
                                                        e.target.style.display = "none";
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                    lineNumber: 1579,
                                                    columnNumber: 25
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                lineNumber: 1578,
                                                columnNumber: 23
                                            }, this);
                                        }
                                        // ไม่มีข้อมูล
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "aspect-video bg-gray-200 rounded-xl flex items-center justify-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-6xl mb-4 block",
                                                        children: "🎬"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                        lineNumber: 1595,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-gray-600",
                                                        children: "ไม่พบวิดีโอหรือรูปภาพ"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                        lineNumber: 1596,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                lineNumber: 1594,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                            lineNumber: 1593,
                                            columnNumber: 21
                                        }, this);
                                    })()
                                }, void 0, false, {
                                    fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                    lineNumber: 1465,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 md:grid-cols-4 gap-4 mb-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-blue-50 rounded-lg p-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-sm text-gray-600 mb-1",
                                                    children: "💰 Spent"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                    lineNumber: 1605,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-xl font-bold text-blue-700",
                                                    children: formatCurrency(selectedAdForPreview.spend)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                    lineNumber: 1606,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                            lineNumber: 1604,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-green-50 rounded-lg p-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-sm text-gray-600 mb-1",
                                                    children: "💬 New Inbox"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                    lineNumber: 1611,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-xl font-bold text-green-700",
                                                    children: getResultsByActionType(selectedAdForPreview.actions, "onsite_conversion.messaging_first_reply")
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                    lineNumber: 1612,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                            lineNumber: 1610,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-teal-50 rounded-lg p-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-sm text-gray-600 mb-1",
                                                    children: "📨 Total Inbox"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                    lineNumber: 1620,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-xl font-bold text-teal-700",
                                                    children: getResultsByActionType(selectedAdForPreview.actions, "onsite_conversion.total_messaging_connection")
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                    lineNumber: 1623,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                            lineNumber: 1619,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-purple-50 rounded-lg p-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-sm text-gray-600 mb-1",
                                                    children: "📞 ชื่อ - เบอร์"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                    lineNumber: 1631,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-xl font-bold text-purple-700",
                                                    children: topAdsPhoneLeads.get(selectedAdForPreview.ad_id) || 0
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                    lineNumber: 1634,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                            lineNumber: 1630,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                    lineNumber: 1603,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-3 gap-4 mb-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-orange-50 rounded-lg p-4 text-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-sm text-gray-600 mb-1",
                                                    children: "📊 CTR"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                    lineNumber: 1643,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-2xl font-bold text-orange-700",
                                                    children: formatPercentage(selectedAdForPreview.ctr)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                    lineNumber: 1644,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-xs text-gray-500 mt-1",
                                                    children: "Click-Through Rate"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                    lineNumber: 1647,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                            lineNumber: 1642,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-pink-50 rounded-lg p-4 text-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-sm text-gray-600 mb-1",
                                                    children: "💵 CPM"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                    lineNumber: 1652,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-2xl font-bold text-pink-700",
                                                    children: formatCurrency(selectedAdForPreview.cpm)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                    lineNumber: 1653,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-xs text-gray-500 mt-1",
                                                    children: "Cost per 1,000 Impressions"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                    lineNumber: 1656,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                            lineNumber: 1651,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-indigo-50 rounded-lg p-4 text-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-sm text-gray-600 mb-1",
                                                    children: "🖱️ CPC"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                    lineNumber: 1661,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-2xl font-bold text-indigo-700",
                                                    children: formatCurrency(selectedAdForPreview.cpc)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                    lineNumber: 1662,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-xs text-gray-500 mt-1",
                                                    children: "Cost per Click"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                    lineNumber: 1665,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                            lineNumber: 1660,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                    lineNumber: 1641,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-gray-50 rounded-lg p-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "font-semibold text-gray-800 mb-3",
                                                    children: "📈 Performance Details"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                    lineNumber: 1674,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-2 text-sm",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex justify-between",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-gray-600",
                                                                    children: "Impressions:"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                    lineNumber: 1679,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "font-medium",
                                                                    children: formatNumber(selectedAdForPreview.impressions)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                    lineNumber: 1680,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                            lineNumber: 1678,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex justify-between",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-gray-600",
                                                                    children: "Clicks:"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                    lineNumber: 1685,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "font-medium",
                                                                    children: formatNumber(selectedAdForPreview.clicks)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                    lineNumber: 1686,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                            lineNumber: 1684,
                                                            columnNumber: 21
                                                        }, this),
                                                        selectedAdForPreview.reach && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex justify-between",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-gray-600",
                                                                    children: "Reach:"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                    lineNumber: 1692,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "font-medium",
                                                                    children: formatNumber(selectedAdForPreview.reach)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                    lineNumber: 1693,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                            lineNumber: 1691,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex justify-between",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-gray-600",
                                                                    children: "ThruPlay:"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                    lineNumber: 1699,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "font-medium",
                                                                    children: (()=>{
                                                                        const thruplay = selectedAdForPreview.actions?.find((action)=>action.action_type === "video_view");
                                                                        return thruplay ? formatNumber(thruplay.value) : "—";
                                                                    })()
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                    lineNumber: 1700,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                            lineNumber: 1698,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex justify-between",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-gray-600",
                                                                    children: "Cost per Inbox:"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                    lineNumber: 1710,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "font-medium",
                                                                    children: (()=>{
                                                                        const costPerMessaging = selectedAdForPreview.cost_per_action_type?.find((cost)=>cost.action_type === "onsite_conversion.total_messaging_connection");
                                                                        return costPerMessaging ? formatCurrency(costPerMessaging.value) : "—";
                                                                    })()
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                    lineNumber: 1711,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                            lineNumber: 1709,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                    lineNumber: 1677,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                            lineNumber: 1673,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-gray-50 rounded-lg p-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "font-semibold text-gray-800 mb-3",
                                                    children: "📋 Campaign & Ad Set Info"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                    lineNumber: 1728,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-2 text-sm",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex justify-between",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-gray-600",
                                                                    children: "Campaign:"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                    lineNumber: 1733,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "font-medium text-right max-w-[180px] truncate",
                                                                    title: selectedAdForPreview.campaign_name,
                                                                    children: selectedAdForPreview.campaign_name
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                    lineNumber: 1734,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                            lineNumber: 1732,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex justify-between",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-gray-600",
                                                                    children: "Ad Set:"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                    lineNumber: 1742,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "font-medium text-right max-w-[180px] truncate",
                                                                    title: selectedAdForPreview.adset_name,
                                                                    children: selectedAdForPreview.adset_name || "—"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                    lineNumber: 1743,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                            lineNumber: 1741,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex justify-between",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-gray-600",
                                                                    children: "Ad ID:"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                    lineNumber: 1751,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "font-medium text-xs",
                                                                    children: selectedAdForPreview.ad_id
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                    lineNumber: 1752,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                            lineNumber: 1750,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex justify-between",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-gray-600",
                                                                    children: "Date Range:"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                    lineNumber: 1757,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "font-medium",
                                                                    children: selectedAdForPreview.date_start
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                    lineNumber: 1758,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                            lineNumber: 1756,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                    lineNumber: 1731,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                            lineNumber: 1727,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                    lineNumber: 1672,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                            lineNumber: 1463,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                    lineNumber: 1435,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                lineNumber: 1415,
                columnNumber: 9
            }, this),
            showAdSetModal && selectedAdSet && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "modal-overlay fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50",
                style: {
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    width: "100vw",
                    height: "100vh",
                    margin: 0,
                    padding: "1rem"
                },
                onClick: (e)=>{
                    if (e.target === e.currentTarget) {
                        setShowAdSetModal(false);
                        setSelectedAdSet(null);
                    }
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "video-modal-container bg-white rounded-2xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto",
                    onClick: (e)=>e.stopPropagation(),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "sticky top-0 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 px-6 py-4 flex items-center justify-between z-10 rounded-t-2xl",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-xl font-bold text-white truncate",
                                            children: [
                                                "📊 ",
                                                selectedAdSet.adset_name
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                            lineNumber: 1798,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-white/80 mt-1",
                                            children: [
                                                "Campaign: ",
                                                selectedAdSet.campaign_name
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                            lineNumber: 1801,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                    lineNumber: 1797,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        setShowAdSetModal(false);
                                        setSelectedAdSet(null);
                                    },
                                    className: "text-white hover:text-gray-200 hover:bg-white/20 rounded-full p-2 transition-all text-2xl w-10 h-10 flex items-center justify-center ml-4",
                                    children: "✕"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                    lineNumber: 1805,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                            lineNumber: 1796,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-6 border-b border-gray-200",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-2 md:grid-cols-5 gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-blue-50 rounded-lg p-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-sm text-gray-600 mb-1",
                                                children: "จ่ายแล้ว"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                lineNumber: 1820,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-xl font-bold text-blue-700",
                                                children: formatCurrency(selectedAdSet.spend)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                lineNumber: 1821,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                        lineNumber: 1819,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-green-50 rounded-lg p-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-sm text-gray-600 mb-1",
                                                children: "New Inbox"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                lineNumber: 1826,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-xl font-bold text-green-700",
                                                children: getResultsByActionType(selectedAdSet.actions, "onsite_conversion.messaging_first_reply")
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                lineNumber: 1827,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                        lineNumber: 1825,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-purple-50 rounded-lg p-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-sm text-gray-600 mb-1",
                                                children: "Total Inbox"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                lineNumber: 1835,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-xl font-bold text-purple-700",
                                                children: getResultsByActionType(selectedAdSet.actions, "onsite_conversion.total_messaging_connection")
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                lineNumber: 1836,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                        lineNumber: 1834,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-cyan-50 rounded-lg p-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-sm text-gray-600 mb-1",
                                                children: "ThruPlay"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                lineNumber: 1844,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-xl font-bold text-cyan-700",
                                                children: (()=>{
                                                    const thruplay = selectedAdSet.actions?.find((action)=>action.action_type === "video_view");
                                                    return thruplay ? formatNumber(thruplay.value) : "—";
                                                })()
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                lineNumber: 1845,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                        lineNumber: 1843,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-orange-50 rounded-lg p-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-sm text-gray-600 mb-1",
                                                children: "ต้นทุน/Inbox"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                lineNumber: 1855,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-xl font-bold text-orange-700",
                                                children: (()=>{
                                                    const spend = parseFloat(selectedAdSet.spend || "0");
                                                    const inbox = getResultsByActionType(selectedAdSet.actions, "onsite_conversion.total_messaging_connection");
                                                    return inbox > 0 ? formatCurrency(spend / inbox) : "—";
                                                })()
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                lineNumber: 1856,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                        lineNumber: 1854,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                lineNumber: 1818,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                            lineNumber: 1817,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "text-lg font-bold text-gray-800 mb-4 flex items-center gap-2",
                                    children: [
                                        "🎯 Ads ใน Ad Set นี้",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "bg-purple-100 text-purple-700 text-sm px-2 py-1 rounded-full",
                                            children: [
                                                getAdsByAdSetId(selectedAdSet.adset_id).length,
                                                " รายการ"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                            lineNumber: 1874,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                    lineNumber: 1872,
                                    columnNumber: 15
                                }, this),
                                getAdsByAdSetId(selectedAdSet.adset_id).length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center py-8 text-gray-500",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-4xl mb-2",
                                            children: "💭"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                            lineNumber: 1881,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "ไม่พบ Ads ใน Ad Set นี้"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                            lineNumber: 1882,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                    lineNumber: 1880,
                                    columnNumber: 17
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "overflow-x-auto",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                        className: "w-full",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    className: "border-b-2 border-gray-200 bg-gray-50",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "text-center py-3 px-2 font-semibold text-gray-700 text-sm",
                                                            children: "#"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                            lineNumber: 1889,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "text-left py-3 px-2 font-semibold text-gray-700 text-sm",
                                                            children: "รูป"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                            lineNumber: 1892,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "text-left py-3 px-2 font-semibold text-gray-700 text-sm",
                                                            children: "ชื่อ Ad"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                            lineNumber: 1895,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "text-center py-3 px-2 font-semibold text-gray-700 text-sm",
                                                            children: "จ่ายแล้ว"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                            lineNumber: 1898,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "text-center py-3 px-2 font-semibold text-gray-700 text-sm",
                                                            children: "New Inbox"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                            lineNumber: 1901,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "text-center py-3 px-2 font-semibold text-gray-700 text-sm",
                                                            children: "Total Inbox"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                            lineNumber: 1904,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "text-center py-3 px-2 font-semibold text-gray-700 text-sm",
                                                            children: "ชื่อ-เบอร์"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                            lineNumber: 1907,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "text-center py-3 px-2 font-semibold text-gray-700 text-sm",
                                                            children: "ThruPlay"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                            lineNumber: 1910,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "text-center py-3 px-2 font-semibold text-gray-700 text-sm",
                                                            children: "ต้นทุน/Inbox"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                            lineNumber: 1913,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                    lineNumber: 1888,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                lineNumber: 1887,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                children: getAdsByAdSetId(selectedAdSet.adset_id).sort((a, b)=>{
                                                    const inboxA = getResultsByActionType(a.actions, "onsite_conversion.total_messaging_connection");
                                                    const inboxB = getResultsByActionType(b.actions, "onsite_conversion.total_messaging_connection");
                                                    return inboxB - inboxA;
                                                }).map((ad, idx)=>{
                                                    const creative = adCreatives.get(ad.ad_id);
                                                    const thumbnailUrl = creative?.thumbnail_url || creative?.image_url || creative?.object_story_spec?.video_data?.image_url;
                                                    const spend = parseFloat(ad.spend || "0");
                                                    const inbox = getResultsByActionType(ad.actions, "onsite_conversion.total_messaging_connection");
                                                    const costPerInbox = inbox > 0 ? spend / inbox : 0;
                                                    const phoneLeads = topAdsPhoneLeads.get(ad.ad_id) || 0;
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                        className: "border-b border-gray-100 hover:bg-gray-50 transition-colors cursor-pointer",
                                                        onClick: ()=>{
                                                            setSelectedAdForPreview(ad);
                                                            setShowVideoModal(true);
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "py-3 px-2 text-center text-gray-600 font-medium",
                                                                children: idx + 1
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                lineNumber: 1955,
                                                                columnNumber: 31
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "py-3 px-2",
                                                                children: thumbnailUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                    src: thumbnailUrl,
                                                                    alt: "Ad thumbnail",
                                                                    className: "w-12 h-12 object-cover rounded-lg shadow-sm"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                    lineNumber: 1960,
                                                                    columnNumber: 35
                                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center text-gray-400",
                                                                    children: "🖼️"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                    lineNumber: 1966,
                                                                    columnNumber: 35
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                lineNumber: 1958,
                                                                columnNumber: 31
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "py-3 px-2",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-gray-700 font-medium text-sm max-w-[200px] truncate",
                                                                    title: ad.ad_name,
                                                                    children: ad.ad_name || "—"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                    lineNumber: 1972,
                                                                    columnNumber: 33
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                lineNumber: 1971,
                                                                columnNumber: 31
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "py-3 px-2 text-center text-gray-700 font-semibold",
                                                                children: formatCurrency(ad.spend)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                lineNumber: 1979,
                                                                columnNumber: 31
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "py-3 px-2 text-center font-semibold text-green-600",
                                                                children: getResultsByActionType(ad.actions, "onsite_conversion.messaging_first_reply")
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                lineNumber: 1982,
                                                                columnNumber: 31
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "py-3 px-2 text-center font-semibold text-blue-600",
                                                                children: getResultsByActionType(ad.actions, "onsite_conversion.total_messaging_connection")
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                lineNumber: 1988,
                                                                columnNumber: 31
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "py-3 px-2 text-center font-semibold text-purple-600",
                                                                children: phoneLeads
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                lineNumber: 1994,
                                                                columnNumber: 31
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "py-3 px-2 text-center font-semibold text-cyan-600",
                                                                children: (()=>{
                                                                    const thruplay = ad.actions?.find((action)=>action.action_type === "video_view");
                                                                    return thruplay ? formatNumber(thruplay.value) : "—";
                                                                })()
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                lineNumber: 1997,
                                                                columnNumber: 31
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "py-3 px-2 text-center text-gray-700",
                                                                children: costPerInbox > 0 ? formatCurrency(costPerInbox) : "—"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                lineNumber: 2008,
                                                                columnNumber: 31
                                                            }, this)
                                                        ]
                                                    }, ad.ad_id, true, {
                                                        fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                        lineNumber: 1947,
                                                        columnNumber: 29
                                                    }, this);
                                                })
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                lineNumber: 1918,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                        lineNumber: 1886,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                    lineNumber: 1885,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                            lineNumber: 1871,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                    lineNumber: 1791,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                lineNumber: 1771,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-3 sm:px-6 py-3 sm:py-6",
                children: [
                    selectedPage === 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 rounded-2xl sm:rounded-3xl p-4 sm:p-8 text-white shadow-2xl",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-cols-2 gap-2 sm:gap-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-center",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-xs sm:text-base font-semibold opacity-90 mb-1 sm:mb-2",
                                                                    children: "💵 เงินคงเหลือ"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                    lineNumber: 2038,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-xl sm:text-3xl font-bold",
                                                                    children: facebookBalanceLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-2xl",
                                                                        children: "⏳"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                        lineNumber: 2043,
                                                                        columnNumber: 27
                                                                    }, this) : `฿${facebookBalance.toLocaleString("th-TH", {
                                                                        minimumFractionDigits: 2,
                                                                        maximumFractionDigits: 2
                                                                    })}`
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                    lineNumber: 2041,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                            lineNumber: 2037,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-center",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-xs sm:text-base font-semibold opacity-90 mb-1 sm:mb-2",
                                                                    children: "💰 ใช้จ่ายรวม"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                    lineNumber: 2053,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-xl sm:text-3xl font-bold",
                                                                    children: formatCurrency(insights.reduce((sum, ad)=>sum + parseFloat(ad.spend || "0"), 0))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                    lineNumber: 2056,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                            lineNumber: 2052,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                    lineNumber: 2036,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                lineNumber: 2035,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-white rounded-b-2xl sm:rounded-b-3xl shadow-2xl overflow-hidden border border-gray-100 border-t-0 flex-1 mt-0",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "overflow-y-auto max-h-[120px]",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                                        className: "w-full min-w-max text-xs",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                                className: "bg-blue-50 sticky top-0",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                            className: "px-2 py-2 text-center font-semibold text-gray-700 border-b text-xs whitespace-nowrap",
                                                                            children: "วันที่"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                            lineNumber: 2073,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                            className: "px-2 py-2 text-center font-semibold text-gray-700 border-b text-xs whitespace-nowrap",
                                                                            children: "จ่ายแล้ว"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                            lineNumber: 2076,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                    lineNumber: 2072,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                lineNumber: 2071,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                                children: dailySummaryLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        colSpan: 2,
                                                                        className: "px-2 py-4 text-center text-xs",
                                                                        children: "⏳"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                        lineNumber: 2084,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                    lineNumber: 2083,
                                                                    columnNumber: 27
                                                                }, this) : (()=>{
                                                                    const dailyData = new Map();
                                                                    dailySummaryData.forEach((ad)=>{
                                                                        const date = ad.date_start;
                                                                        const existing = dailyData.get(date) || {
                                                                            spend: 0
                                                                        };
                                                                        existing.spend += parseFloat(ad.spend || "0");
                                                                        dailyData.set(date, existing);
                                                                    });
                                                                    const sortedDates = Array.from(dailyData.keys()).sort((a, b)=>new Date(b).getTime() - new Date(a).getTime());
                                                                    const last30Days = sortedDates.slice(1, 31);
                                                                    return last30Days.map((date)=>{
                                                                        const data = dailyData.get(date);
                                                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                            className: "hover:bg-blue-50 border-b",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                    className: "px-2 py-2 text-center text-xs text-gray-900",
                                                                                    children: new Date(date).toLocaleDateString("th-TH", {
                                                                                        month: "short",
                                                                                        day: "numeric"
                                                                                    })
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                                    lineNumber: 2112,
                                                                                    columnNumber: 35
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                    className: "px-2 py-2 text-center text-xs font-semibold text-blue-600",
                                                                                    children: formatCurrency(data.spend)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                                    lineNumber: 2118,
                                                                                    columnNumber: 35
                                                                                }, this)
                                                                            ]
                                                                        }, date, true, {
                                                                            fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                            lineNumber: 2108,
                                                                            columnNumber: 33
                                                                        }, this);
                                                                    });
                                                                })()
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                lineNumber: 2081,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                        lineNumber: 2070,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                    lineNumber: 2069,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                lineNumber: 2068,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                        lineNumber: 2033,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-gradient-to-br from-teal-500 via-teal-600 to-cyan-600 rounded-2xl sm:rounded-3xl p-4 sm:p-8 text-white shadow-2xl",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-cols-2 gap-2 sm:gap-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-center",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-xs sm:text-base font-semibold opacity-90 mb-1 sm:mb-3",
                                                                    children: "New Inbox"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                    lineNumber: 2138,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-xl sm:text-4xl font-bold",
                                                                    children: getTotalResults()
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                    lineNumber: 2141,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                            lineNumber: 2137,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-center",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-xs sm:text-base font-semibold opacity-90 mb-1 sm:mb-3",
                                                                    children: "Total Inbox"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                    lineNumber: 2146,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-xl sm:text-4xl font-bold",
                                                                    children: getTotalMessagingConnection()
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                    lineNumber: 2149,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                            lineNumber: 2145,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                    lineNumber: 2136,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                lineNumber: 2135,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-white rounded-b-2xl sm:rounded-b-3xl shadow-2xl overflow-hidden border border-gray-100 border-t-0 flex-1 mt-0",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "overflow-y-auto max-h-[120px]",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                                        className: "w-full min-w-max text-xs",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                                className: "bg-teal-50 sticky top-0",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                            className: "px-2 py-2 text-center font-semibold text-gray-700 border-b text-xs whitespace-nowrap",
                                                                            children: "วันที่"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                            lineNumber: 2161,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                            className: "px-2 py-2 text-center font-semibold text-gray-700 border-b text-xs whitespace-nowrap",
                                                                            children: "New Inbox"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                            lineNumber: 2164,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                            className: "px-2 py-2 text-center font-semibold text-gray-700 border-b text-xs whitespace-nowrap",
                                                                            children: "Total Inbox"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                            lineNumber: 2167,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                    lineNumber: 2160,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                lineNumber: 2159,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                                children: dailySummaryLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        colSpan: 3,
                                                                        className: "px-2 py-4 text-center text-xs",
                                                                        children: "⏳"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                        lineNumber: 2175,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                    lineNumber: 2174,
                                                                    columnNumber: 27
                                                                }, this) : (()=>{
                                                                    const dailyData = new Map();
                                                                    dailySummaryData.forEach((ad)=>{
                                                                        const date = ad.date_start;
                                                                        const existing = dailyData.get(date) || {
                                                                            newInbox: 0,
                                                                            totalInbox: 0
                                                                        };
                                                                        existing.newInbox += getResultsByActionType(ad.actions, "onsite_conversion.messaging_first_reply");
                                                                        existing.totalInbox += getResultsByActionType(ad.actions, "onsite_conversion.total_messaging_connection");
                                                                        dailyData.set(date, existing);
                                                                    });
                                                                    const sortedDates = Array.from(dailyData.keys()).sort((a, b)=>new Date(b).getTime() - new Date(a).getTime());
                                                                    const last30Days = sortedDates.slice(1, 31);
                                                                    return last30Days.map((date)=>{
                                                                        const data = dailyData.get(date);
                                                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                            className: "hover:bg-teal-50 border-b",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                    className: "px-2 py-2 text-center text-xs text-gray-900",
                                                                                    children: new Date(date).toLocaleDateString("th-TH", {
                                                                                        month: "short",
                                                                                        day: "numeric"
                                                                                    })
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                                    lineNumber: 2216,
                                                                                    columnNumber: 35
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                    className: "px-2 py-2 text-center text-xs font-semibold text-green-600",
                                                                                    children: data.newInbox
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                                    lineNumber: 2222,
                                                                                    columnNumber: 35
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                    className: "px-2 py-2 text-center text-xs font-semibold text-teal-600",
                                                                                    children: data.totalInbox
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                                    lineNumber: 2225,
                                                                                    columnNumber: 35
                                                                                }, this)
                                                                            ]
                                                                        }, date, true, {
                                                                            fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                            lineNumber: 2212,
                                                                            columnNumber: 33
                                                                        }, this);
                                                                    });
                                                                })()
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                lineNumber: 2172,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                        lineNumber: 2158,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                    lineNumber: 2157,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                lineNumber: 2156,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                        lineNumber: 2133,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-gradient-to-br from-purple-500 via-purple-600 to-indigo-600 rounded-2xl sm:rounded-3xl p-4 sm:p-8 text-white shadow-2xl text-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-base sm:text-xl font-semibold mb-2 sm:mb-3 opacity-90",
                                                        children: "📞 ชื่อ - เบอร์"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                        lineNumber: 2243,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-2xl sm:text-4xl font-bold",
                                                        children: phoneCountLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-3xl",
                                                            children: "⏳"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                            lineNumber: 2248,
                                                            columnNumber: 23
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: phoneCountData.total.toLocaleString()
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                            lineNumber: 2250,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                        lineNumber: 2246,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                lineNumber: 2242,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-white rounded-b-2xl sm:rounded-b-3xl shadow-2xl overflow-hidden border border-gray-100 border-t-0 flex-1 mt-0",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "overflow-y-auto max-h-[120px]",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                                        className: "w-full min-w-max text-xs",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                                className: "bg-purple-50 sticky top-0",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                            className: "px-2 py-2 text-center font-semibold text-gray-700 border-b text-xs whitespace-nowrap",
                                                                            children: "วันที่"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                            lineNumber: 2260,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                            className: "px-2 py-2 text-center font-semibold text-gray-700 border-b text-xs whitespace-nowrap",
                                                                            children: "เบอร์"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                            lineNumber: 2263,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                    lineNumber: 2259,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                lineNumber: 2258,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                                children: phoneLeadsLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        colSpan: 2,
                                                                        className: "px-2 py-4 text-center text-xs",
                                                                        children: "⏳"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                        lineNumber: 2271,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                    lineNumber: 2270,
                                                                    columnNumber: 27
                                                                }, this) : Object.entries(phoneLeadsData).sort(([dateA], [dateB])=>new Date(dateB).getTime() - new Date(dateA).getTime()).slice(1).map(([date, count])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                        className: "hover:bg-purple-50 border-b",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                className: "px-2 py-2 text-center text-xs text-gray-900",
                                                                                children: new Date(date).toLocaleDateString("th-TH", {
                                                                                    month: "short",
                                                                                    day: "numeric"
                                                                                })
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                                lineNumber: 2291,
                                                                                columnNumber: 33
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                className: "px-2 py-2 text-center text-xs font-semibold text-purple-600",
                                                                                children: count
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                                lineNumber: 2297,
                                                                                columnNumber: 33
                                                                            }, this)
                                                                        ]
                                                                    }, date, true, {
                                                                        fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                        lineNumber: 2287,
                                                                        columnNumber: 31
                                                                    }, this))
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                lineNumber: 2268,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                        lineNumber: 2257,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                    lineNumber: 2256,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                lineNumber: 2255,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                        lineNumber: 2240,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                lineNumber: 2031,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mt-4 sm:mt-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-4 sm:p-8 border border-gray-100",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 px-4 sm:px-8 py-4 sm:py-6 -m-4 sm:-m-8 mb-4 sm:mb-8 relative overflow-hidden rounded-t-2xl sm:rounded-t-3xl",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-10 transition-opacity duration-500"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                    lineNumber: 2315,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                lineNumber: 2314,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col gap-3 mb-3 sm:mb-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        className: "text-lg sm:text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent flex items-center gap-2",
                                                        children: [
                                                            "🏆 TOP ",
                                                            topAdsLimit === "all" ? "ทั้งหมด" : topAdsLimit,
                                                            " Ads",
                                                            " ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "bg-gradient-to-r from-yellow-400 via-orange-400 to-red-500 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full text-base sm:text-xl font-bold shadow-xl",
                                                                children: "นักเตะยอดเยี่ยม"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                lineNumber: 2320,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                        lineNumber: 2318,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex flex-col sm:flex-row gap-2 w-full",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex gap-2 flex-1",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: ()=>setTopAdsSortBy("leads"),
                                                                        className: `flex-1 sm:flex-none px-3 sm:px-4 py-2 rounded-lg font-medium text-xs sm:text-sm transition-all ${topAdsSortBy === "leads" ? "bg-purple-600 text-white shadow-lg" : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`,
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "hidden sm:inline",
                                                                                children: "💬 Total Inbox (มาก → น้อย)"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                                lineNumber: 2334,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "sm:hidden",
                                                                                children: "💬 Inbox"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                                lineNumber: 2337,
                                                                                columnNumber: 25
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                        lineNumber: 2327,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: ()=>setTopAdsSortBy("phone"),
                                                                        className: `flex-1 sm:flex-none px-3 sm:px-4 py-2 rounded-lg font-medium text-xs sm:text-sm transition-all ${topAdsSortBy === "phone" ? "bg-purple-600 text-white shadow-lg" : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`,
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "hidden sm:inline",
                                                                                children: "📞 ชื่อ - เบอร์ (มาก → น้อย)"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                                lineNumber: 2346,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "sm:hidden",
                                                                                children: "📞 เบอร์"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                                lineNumber: 2349,
                                                                                columnNumber: 25
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                        lineNumber: 2339,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: ()=>setTopAdsSortBy("cost"),
                                                                        className: `flex-1 sm:flex-none px-3 sm:px-4 py-2 rounded-lg font-medium text-xs sm:text-sm transition-all ${topAdsSortBy === "cost" ? "bg-purple-600 text-white shadow-lg" : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`,
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "hidden sm:inline",
                                                                                children: "💰 ต้นทุน (น้อย → มาก)"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                                lineNumber: 2358,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "sm:hidden",
                                                                                children: "💰 Cost"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                                lineNumber: 2361,
                                                                                columnNumber: 25
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                        lineNumber: 2351,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: ()=>setTopAdsSortBy("thruplay"),
                                                                        className: `flex-1 sm:flex-none px-3 sm:px-4 py-2 rounded-lg font-medium text-xs sm:text-sm transition-all ${topAdsSortBy === "thruplay" ? "bg-purple-600 text-white shadow-lg" : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`,
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "hidden sm:inline",
                                                                                children: "🎬 ThruPlay (มาก → น้อย)"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                                lineNumber: 2370,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "sm:hidden",
                                                                                children: "🎬 ThruPlay"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                                lineNumber: 2373,
                                                                                columnNumber: 25
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                        lineNumber: 2363,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                lineNumber: 2326,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                value: topAdsLimit,
                                                                onChange: (e)=>{
                                                                    const value = e.target.value;
                                                                    setTopAdsLimit(value === "all" ? "all" : Number(value));
                                                                },
                                                                className: "flex-1 sm:flex-none sm:min-w-[140px] px-3 py-2 rounded-lg font-medium text-xs sm:text-sm bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-800 hover:from-yellow-500 hover:to-orange-500 transition-all border-2 border-yellow-500 shadow-lg cursor-pointer",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: 5,
                                                                        children: "⭐ Top 5"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                        lineNumber: 2389,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: 10,
                                                                        children: "⭐ Top 10"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                        lineNumber: 2390,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: 15,
                                                                        children: "⭐ Top 15"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                        lineNumber: 2391,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: 20,
                                                                        children: "⭐ Top 20"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                        lineNumber: 2392,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: 30,
                                                                        children: "⭐ Top 30"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                        lineNumber: 2393,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: "all",
                                                                        children: "⭐ Top ทั้งหมด"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                        lineNumber: 2394,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                lineNumber: 2377,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                        lineNumber: 2324,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                lineNumber: 2317,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "overflow-x-auto",
                                                children: [
                                                    creativesLoading && adCreatives.size === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "bg-blue-50 border-l-4 border-blue-500 p-3 mb-4 rounded",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-blue-700 text-sm font-medium",
                                                            children: "⏳ กำลังโหลดรูปภาพโฆษณา..."
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                            lineNumber: 2402,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                        lineNumber: 2401,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                                        className: "w-full",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                    className: "border-b-2 border-gradient-to-r from-blue-200 via-purple-200 to-pink-200",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                            className: "text-center py-2 px-1 font-semibold text-gray-700 text-sm",
                                                                            children: "#"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                            lineNumber: 2418,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                            className: "text-center py-2 px-1 font-semibold text-gray-700 text-sm",
                                                                            children: "Ad Image"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                            lineNumber: 2421,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                            className: "text-center py-2 px-1 font-semibold text-gray-700 text-sm",
                                                                            children: "จ่ายแล้ว"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                            lineNumber: 2424,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                            className: "text-center py-2 px-1 font-semibold text-gray-700 text-sm",
                                                                            children: "New Inbox"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                            lineNumber: 2427,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                            className: "text-center py-2 px-1 font-semibold text-gray-700 text-sm",
                                                                            children: "Total Inbox"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                            lineNumber: 2430,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                            className: "text-center py-2 px-1 font-semibold text-gray-700 text-sm",
                                                                            children: "ชื่อ - เบอร์"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                            lineNumber: 2433,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                            className: "text-center py-2 px-1 font-semibold text-gray-700 text-sm",
                                                                            children: "ThruPlay"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                            lineNumber: 2436,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                            className: "text-center py-2 px-1 font-semibold text-gray-700 text-sm",
                                                                            children: "ต้นทุน Inbox"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                            lineNumber: 2439,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                    lineNumber: 2417,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                lineNumber: 2416,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                                children: getTopAdsFilteredInsights().sort((a, b)=>{
                                                                    if (topAdsSortBy === "leads") {
                                                                        // เรียงตาม Total Inbox จากมากไปน้อย
                                                                        const totalInboxA = getResultsByActionType(a.actions, "onsite_conversion.total_messaging_connection");
                                                                        const totalInboxB = getResultsByActionType(b.actions, "onsite_conversion.total_messaging_connection");
                                                                        return totalInboxB - totalInboxA;
                                                                    } else if (topAdsSortBy === "phone") {
                                                                        // เรียงตาม ชื่อ - เบอร์ จากมากไปน้อย
                                                                        const phoneLeadsA = topAdsPhoneLeads.get(a.ad_id) || 0;
                                                                        const phoneLeadsB = topAdsPhoneLeads.get(b.ad_id) || 0;
                                                                        return phoneLeadsB - phoneLeadsA;
                                                                    } else if (topAdsSortBy === "thruplay") {
                                                                        // เรียงตาม ThruPlay จากมากไปน้อย
                                                                        const thruplayA = a.actions?.find((action)=>action.action_type === "video_view");
                                                                        const thruplayB = b.actions?.find((action)=>action.action_type === "video_view");
                                                                        const valueA = thruplayA ? parseFloat(thruplayA.value) : 0;
                                                                        const valueB = thruplayB ? parseFloat(thruplayB.value) : 0;
                                                                        return valueB - valueA;
                                                                    } else {
                                                                        // เรียงตาม cost per messaging connection จากน้อยไปมาก
                                                                        const costA = a.cost_per_action_type?.find((cost)=>cost.action_type === "onsite_conversion.total_messaging_connection");
                                                                        const costB = b.cost_per_action_type?.find((cost)=>cost.action_type === "onsite_conversion.total_messaging_connection");
                                                                        const valueA = costA ? parseFloat(costA.value) : Infinity;
                                                                        const valueB = costB ? parseFloat(costB.value) : Infinity;
                                                                        return valueA - valueB;
                                                                    }
                                                                }).slice(0, topAdsLimit === "all" ? undefined : topAdsLimit).map((ad, index)=>{
                                                                    const creative = adCreatives.get(ad.ad_id);
                                                                    console.log(`🖼️ [Render TOP ${index + 1}] Ad:`, ad.ad_id, ad.ad_name?.substring(0, 30), "| Creative:", creative ? {
                                                                        id: creative.id,
                                                                        has_thumbnail: !!creative.thumbnail_url,
                                                                        has_image: !!creative.image_url,
                                                                        thumbnail_preview: creative.thumbnail_url?.substring(0, 60)
                                                                    } : "NO CREATIVE DATA");
                                                                    console.log("📦 [Render] adCreatives Map:", "size=", adCreatives.size, "| Has this ad?", adCreatives.has(ad.ad_id), "| All ad IDs in map:", Array.from(adCreatives.keys()));
                                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                        className: "border-b border-gray-100 hover:bg-gradient-to-r hover:from-blue-50 hover:via-purple-50 hover:to-pink-50 transition-all duration-300 hover:shadow-md",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                className: "py-2 px-1 text-center",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "text-gray-700 font-bold text-lg",
                                                                                    children: index + 1
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                                    lineNumber: 2532,
                                                                                    columnNumber: 33
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                                lineNumber: 2531,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                className: "py-2 px-1 text-center",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "relative group cursor-pointer flex justify-center items-center",
                                                                                    onClick: ()=>{
                                                                                        setSelectedAdForPreview(ad);
                                                                                        setShowVideoModal(true);
                                                                                    },
                                                                                    children: (()=>{
                                                                                        const videoId = creative?.object_story_spec?.video_data?.video_id || creative?.video_id;
                                                                                        const thumbnailUrl = creative?.thumbnail_url || creative?.image_url;
                                                                                        const localVideoPath = videoId ? `/images/video/${videoId}.mp4` : null;
                                                                                        // ถ้ามี videoId - แสดง video preview ที่เล่นอัตโนมัติ 3 วิ เมื่อ hover
                                                                                        if (videoId && localVideoPath) {
                                                                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                className: "w-20 h-20 flex-shrink-0 relative overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-shadow",
                                                                                                children: [
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                                                                                                        src: localVideoPath,
                                                                                                        className: "w-full h-full object-cover",
                                                                                                        muted: true,
                                                                                                        loop: true,
                                                                                                        playsInline: true,
                                                                                                        autoPlay: true,
                                                                                                        onLoadedMetadata: (e)=>{
                                                                                                            const video = e.currentTarget;
                                                                                                            // จำกัดให้เล่นแค่ 3 วินาทีแรก
                                                                                                            video.currentTime = 0;
                                                                                                            const checkTime = ()=>{
                                                                                                                if (video.currentTime >= 3) {
                                                                                                                    video.currentTime = 0;
                                                                                                                }
                                                                                                            };
                                                                                                            video.addEventListener('timeupdate', checkTime);
                                                                                                        },
                                                                                                        onError: (e)=>{
                                                                                                            // ถ้าโหลดวิดีโอไม่ได้ แสดง thumbnail แทน
                                                                                                            const video = e.currentTarget;
                                                                                                            video.style.display = 'none';
                                                                                                            const parent = video.parentElement;
                                                                                                            if (parent && thumbnailUrl) {
                                                                                                                const img = document.createElement('img');
                                                                                                                img.src = thumbnailUrl;
                                                                                                                img.className = 'w-full h-full object-cover';
                                                                                                                img.alt = 'Ad preview';
                                                                                                                parent.appendChild(img);
                                                                                                            }
                                                                                                        }
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                                                        lineNumber: 2558,
                                                                                                        columnNumber: 43
                                                                                                    }, this),
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                        className: "absolute inset-0 flex items-center justify-center bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity",
                                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                            className: "text-white text-2xl drop-shadow-lg",
                                                                                                            children: "▶️"
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                                                            lineNumber: 2592,
                                                                                                            columnNumber: 45
                                                                                                        }, this)
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                                                        lineNumber: 2591,
                                                                                                        columnNumber: 43
                                                                                                    }, this)
                                                                                                ]
                                                                                            }, void 0, true, {
                                                                                                fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                                                lineNumber: 2556,
                                                                                                columnNumber: 41
                                                                                            }, this);
                                                                                        }
                                                                                        // แสดง thumbnail พร้อม play icon สำหรับวิดีโอ
                                                                                        if (thumbnailUrl) {
                                                                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                className: "w-20 h-20 flex-shrink-0 relative",
                                                                                                children: [
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                                                        src: thumbnailUrl,
                                                                                                        alt: "Ad preview",
                                                                                                        className: "w-full h-full object-cover rounded-lg shadow-sm cursor-pointer hover:shadow-md transition-shadow",
                                                                                                        onError: (e)=>{
                                                                                                            e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80'%3E%3Crect width='80' height='80' fill='%23e5e7eb'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='%239ca3af' font-size='12'%3ENo Image%3C/text%3E%3C/svg%3E";
                                                                                                        }
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                                                        lineNumber: 2602,
                                                                                                        columnNumber: 43
                                                                                                    }, this),
                                                                                                    videoId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                        className: "absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 rounded-lg",
                                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                            className: "text-white text-2xl",
                                                                                                            children: "▶️"
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                                                            lineNumber: 2613,
                                                                                                            columnNumber: 47
                                                                                                        }, this)
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                                                        lineNumber: 2612,
                                                                                                        columnNumber: 45
                                                                                                    }, this)
                                                                                                ]
                                                                                            }, void 0, true, {
                                                                                                fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                                                lineNumber: 2601,
                                                                                                columnNumber: 41
                                                                                            }, this);
                                                                                        }
                                                                                        // ถ้าไม่มีทั้งวิดีโอและรูปภาพ
                                                                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: "w-20 h-20 bg-gray-100 rounded-lg flex items-center justify-center",
                                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                className: "text-gray-400 text-xs",
                                                                                                children: "📷"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                                                lineNumber: 2622,
                                                                                                columnNumber: 41
                                                                                            }, this)
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                                            lineNumber: 2621,
                                                                                            columnNumber: 39
                                                                                        }, this);
                                                                                    })()
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                                    lineNumber: 2537,
                                                                                    columnNumber: 33
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                                lineNumber: 2536,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                className: "py-2 px-1 text-center text-gray-700 font-semibold text-xl",
                                                                                children: formatCurrency(ad.spend)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                                lineNumber: 2630,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                className: "py-2 px-1 text-center font-semibold text-green-700 text-xl",
                                                                                children: getResultsByActionType(ad.actions, "onsite_conversion.messaging_first_reply")
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                                lineNumber: 2633,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                className: "py-2 px-1 text-center font-semibold text-blue-700 text-xl",
                                                                                children: getResultsByActionType(ad.actions, "onsite_conversion.total_messaging_connection")
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                                lineNumber: 2639,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                className: "py-2 px-1 text-center font-semibold text-purple-700 text-xl",
                                                                                children: topAdsPhoneLeadsLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "text-sm",
                                                                                    children: "⏳"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                                    lineNumber: 2647,
                                                                                    columnNumber: 35
                                                                                }, this) : topAdsPhoneLeads.get(ad.ad_id) || 0
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                                lineNumber: 2645,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                className: "py-2 px-1 text-center text-gray-700 text-xl",
                                                                                children: (()=>{
                                                                                    const thruplay = ad.actions?.find((action)=>action.action_type === "video_view");
                                                                                    return thruplay ? formatNumber(thruplay.value) : "—";
                                                                                })()
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                                lineNumber: 2652,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                className: "py-2 px-1 text-center text-gray-700 text-xl",
                                                                                children: (()=>{
                                                                                    const costPerMessaging = ad.cost_per_action_type?.find((cost)=>cost.action_type === "onsite_conversion.total_messaging_connection");
                                                                                    return costPerMessaging ? formatCurrency(costPerMessaging.value) : "—";
                                                                                })()
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                                lineNumber: 2662,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        ]
                                                                    }, ad.ad_id, true, {
                                                                        fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                        lineNumber: 2527,
                                                                        columnNumber: 29
                                                                    }, this);
                                                                })
                                                            }, `tbody-${adCreatives.size}-${Date.now()}`, false, {
                                                                fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                lineNumber: 2444,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, `table-${adCreatives.size}`, true, {
                                                        fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                        lineNumber: 2415,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                lineNumber: 2398,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                        lineNumber: 2313,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-4 sm:p-8 border border-gray-100",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 px-4 sm:px-8 py-4 sm:py-6 -m-4 sm:-m-8 mb-4 sm:mb-8 relative overflow-hidden rounded-t-2xl sm:rounded-t-3xl",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-10 transition-opacity duration-500"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                    lineNumber: 2686,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                lineNumber: 2685,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col gap-3 mb-3 sm:mb-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        className: "text-lg sm:text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent flex items-center gap-2",
                                                        children: [
                                                            "🏆 TOP ",
                                                            topAdSetLimit === "all" ? "ทั้งหมด" : topAdSetLimit,
                                                            " Ad Set",
                                                            " ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "bg-gradient-to-r from-yellow-400 via-orange-400 to-red-500 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full text-base sm:text-xl font-bold shadow-xl",
                                                                children: "พื้นที่ลูกค้ายอดเยี่ยม"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                lineNumber: 2692,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                        lineNumber: 2689,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex flex-col sm:flex-row gap-2 w-full",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex gap-2 flex-1",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: ()=>setTopAdSetSortBy("leads"),
                                                                        className: `flex-1 sm:flex-none px-3 sm:px-4 py-2 rounded-lg font-medium text-xs sm:text-sm transition-all ${topAdSetSortBy === "leads" ? "bg-purple-600 text-white shadow-lg" : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`,
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "hidden sm:inline",
                                                                                children: "💬 Total Inbox (มาก → น้อย)"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                                lineNumber: 2706,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "sm:hidden",
                                                                                children: "💬 Inbox"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                                lineNumber: 2709,
                                                                                columnNumber: 25
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                        lineNumber: 2699,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: ()=>setTopAdSetSortBy("phone"),
                                                                        className: `flex-1 sm:flex-none px-3 sm:px-4 py-2 rounded-lg font-medium text-xs sm:text-sm transition-all ${topAdSetSortBy === "phone" ? "bg-purple-600 text-white shadow-lg" : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`,
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "hidden sm:inline",
                                                                                children: "📞 ชื่อ - เบอร์ (มาก → น้อย)"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                                lineNumber: 2718,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "sm:hidden",
                                                                                children: "📞 เบอร์"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                                lineNumber: 2721,
                                                                                columnNumber: 25
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                        lineNumber: 2711,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: ()=>setTopAdSetSortBy("thruplay"),
                                                                        className: `flex-1 sm:flex-none px-3 sm:px-4 py-2 rounded-lg font-medium text-xs sm:text-sm transition-all ${topAdSetSortBy === "thruplay" ? "bg-purple-600 text-white shadow-lg" : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`,
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "hidden sm:inline",
                                                                                children: "🎬 ThruPlay (มาก → น้อย)"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                                lineNumber: 2730,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "sm:hidden",
                                                                                children: "🎬 ThruPlay"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                                lineNumber: 2733,
                                                                                columnNumber: 25
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                        lineNumber: 2723,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                lineNumber: 2698,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                value: topAdSetLimit,
                                                                onChange: (e)=>{
                                                                    const value = e.target.value;
                                                                    setTopAdSetLimit(value === "all" ? "all" : Number(value));
                                                                },
                                                                className: "flex-1 sm:flex-none sm:min-w-[140px] px-3 py-2 rounded-lg font-medium text-xs sm:text-sm bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-800 hover:from-yellow-500 hover:to-orange-500 transition-all border-2 border-yellow-500 shadow-lg cursor-pointer",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: 5,
                                                                        children: "⭐ Top 5"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                        lineNumber: 2749,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: 10,
                                                                        children: "⭐ Top 10"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                        lineNumber: 2750,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: 15,
                                                                        children: "⭐ Top 15"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                        lineNumber: 2751,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: 20,
                                                                        children: "⭐ Top 20"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                        lineNumber: 2752,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: 30,
                                                                        children: "⭐ Top 30"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                        lineNumber: 2753,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: "all",
                                                                        children: "⭐ Top ทั้งหมด"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                        lineNumber: 2754,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                lineNumber: 2737,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                        lineNumber: 2696,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>{
                                                                    const newFilter = new Set(adSetCampaignFilter);
                                                                    if (newFilter.has("TOF")) {
                                                                        newFilter.delete("TOF");
                                                                    } else {
                                                                        newFilter.add("TOF");
                                                                    }
                                                                    setAdSetCampaignFilter(newFilter);
                                                                },
                                                                className: `px-3 sm:px-4 py-2 rounded-lg font-medium text-xs sm:text-sm transition-all ${adSetCampaignFilter.has("TOF") ? "bg-blue-600 text-white shadow-lg" : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`,
                                                                children: "TOF"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                lineNumber: 2759,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>{
                                                                    const newFilter = new Set(adSetCampaignFilter);
                                                                    if (newFilter.has("MOF")) {
                                                                        newFilter.delete("MOF");
                                                                    } else {
                                                                        newFilter.add("MOF");
                                                                    }
                                                                    setAdSetCampaignFilter(newFilter);
                                                                },
                                                                className: `px-3 sm:px-4 py-2 rounded-lg font-medium text-xs sm:text-sm transition-all ${adSetCampaignFilter.has("MOF") ? "bg-green-600 text-white shadow-lg" : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`,
                                                                children: "MOF"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                lineNumber: 2776,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>{
                                                                    const newFilter = new Set(adSetCampaignFilter);
                                                                    if (newFilter.has("BOF")) {
                                                                        newFilter.delete("BOF");
                                                                    } else {
                                                                        newFilter.add("BOF");
                                                                    }
                                                                    setAdSetCampaignFilter(newFilter);
                                                                },
                                                                className: `px-3 sm:px-4 py-2 rounded-lg font-medium text-xs sm:text-sm transition-all ${adSetCampaignFilter.has("BOF") ? "bg-orange-600 text-white shadow-lg" : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`,
                                                                children: "BOF"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                lineNumber: 2793,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                        lineNumber: 2758,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                lineNumber: 2688,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "overflow-x-auto",
                                                children: [
                                                    adsetInsightsLoading && adsetInsights.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "bg-blue-50 border-l-4 border-blue-500 p-3 mb-4 rounded",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-blue-700 text-sm font-medium",
                                                            children: "⏳ กำลังโหลดข้อมูล Ad Set..."
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                            lineNumber: 2815,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                        lineNumber: 2814,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                                        className: "w-full",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                    className: "border-b-2 border-gradient-to-r from-blue-200 via-purple-200 to-pink-200",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                            className: "text-center py-2 px-1 font-semibold text-gray-700 text-sm",
                                                                            children: "#"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                            lineNumber: 2823,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                            className: "text-center py-2 px-1 font-semibold text-gray-700 text-sm",
                                                                            children: "Ad Set"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                            lineNumber: 2826,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                            className: "text-center py-2 px-1 font-semibold text-gray-700 text-sm",
                                                                            children: "จ่ายแล้ว"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                            lineNumber: 2829,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                            className: "text-center py-2 px-1 font-semibold text-gray-700 text-sm",
                                                                            children: "New Inbox"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                            lineNumber: 2832,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                            className: "text-center py-2 px-1 font-semibold text-gray-700 text-sm",
                                                                            children: "Total Inbox"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                            lineNumber: 2835,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                            className: "text-center py-2 px-1 font-semibold text-gray-700 text-sm",
                                                                            children: "ชื่อ - เบอร์"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                            lineNumber: 2838,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                            className: "text-center py-2 px-1 font-semibold text-gray-700 text-sm",
                                                                            children: "ThruPlay"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                            lineNumber: 2841,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                    lineNumber: 2822,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                lineNumber: 2821,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                                children: adsetInsights.filter((adset)=>{
                                                                    // If no filter selected, show all
                                                                    if (adSetCampaignFilter.size === 0) return true;
                                                                    // Get first 3 characters of campaign name (uppercase)
                                                                    const campaignPrefix = (adset.campaign_name || "").substring(0, 3).toUpperCase();
                                                                    return adSetCampaignFilter.has(campaignPrefix);
                                                                }).sort((a, b)=>{
                                                                    if (topAdSetSortBy === "leads") {
                                                                        const totalInboxA = getResultsByActionType(a.actions, "onsite_conversion.total_messaging_connection");
                                                                        const totalInboxB = getResultsByActionType(b.actions, "onsite_conversion.total_messaging_connection");
                                                                        return totalInboxB - totalInboxA;
                                                                    } else if (topAdSetSortBy === "phone") {
                                                                        // Sort by phone leads (highest first)
                                                                        const phoneLeadsA = getPhoneLeadsByAdSetId(a.adset_id);
                                                                        const phoneLeadsB = getPhoneLeadsByAdSetId(b.adset_id);
                                                                        return phoneLeadsB - phoneLeadsA;
                                                                    } else {
                                                                        // Sort by thruplay (highest first)
                                                                        const thruplayA = a.actions?.find((action)=>action.action_type === "video_view");
                                                                        const thruplayB = b.actions?.find((action)=>action.action_type === "video_view");
                                                                        const valueA = thruplayA ? parseFloat(thruplayA.value) : 0;
                                                                        const valueB = thruplayB ? parseFloat(thruplayB.value) : 0;
                                                                        return valueB - valueA;
                                                                    }
                                                                }).slice(0, topAdSetLimit === "all" ? undefined : topAdSetLimit).map((adset, index)=>{
                                                                    // Calculate cost per inbox
                                                                    const spend = parseFloat(adset.spend || "0");
                                                                    const totalInbox = getResultsByActionType(adset.actions, "onsite_conversion.total_messaging_connection");
                                                                    const costPerInbox = totalInbox > 0 ? spend / totalInbox : 0;
                                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                        className: "border-b border-gray-100 hover:bg-gradient-to-r hover:from-blue-50 hover:via-purple-50 hover:to-pink-50 transition-all duration-300 hover:shadow-md cursor-pointer",
                                                                        onClick: ()=>{
                                                                            setSelectedAdSet(adset);
                                                                            setShowAdSetModal(true);
                                                                        },
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                className: "py-2 px-1 text-center",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "text-gray-700 font-bold text-lg",
                                                                                    children: index + 1
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                                    lineNumber: 2914,
                                                                                    columnNumber: 33
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                                lineNumber: 2913,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                className: "py-2 px-1 text-center",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "text-gray-700 font-medium text-sm max-w-[150px] truncate mx-auto hover:text-purple-600",
                                                                                    title: adset.adset_name,
                                                                                    children: adset.adset_name || "—"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                                    lineNumber: 2919,
                                                                                    columnNumber: 33
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                                lineNumber: 2918,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                className: "py-2 px-1 text-center text-gray-700 font-semibold text-xl",
                                                                                children: formatCurrency(adset.spend)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                                lineNumber: 2926,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                className: "py-2 px-1 text-center font-semibold text-green-700 text-xl",
                                                                                children: getResultsByActionType(adset.actions, "onsite_conversion.messaging_first_reply")
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                                lineNumber: 2929,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                className: "py-2 px-1 text-center font-semibold text-blue-700 text-xl",
                                                                                children: getResultsByActionType(adset.actions, "onsite_conversion.total_messaging_connection")
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                                lineNumber: 2935,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                className: "py-2 px-1 text-center font-semibold text-purple-700 text-xl",
                                                                                children: topAdsPhoneLeadsLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "text-sm",
                                                                                    children: "⏳"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                                    lineNumber: 2943,
                                                                                    columnNumber: 35
                                                                                }, this) : getPhoneLeadsByAdSetId(adset.adset_id)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                                lineNumber: 2941,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                className: "py-2 px-1 text-center text-gray-700 text-xl",
                                                                                children: (()=>{
                                                                                    const thruplay = adset.actions?.find((action)=>action.action_type === "video_view");
                                                                                    return thruplay ? formatNumber(thruplay.value) : "—";
                                                                                })()
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                                lineNumber: 2948,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        ]
                                                                    }, adset.adset_id, true, {
                                                                        fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                        lineNumber: 2905,
                                                                        columnNumber: 29
                                                                    }, this);
                                                                })
                                                            }, `tbody2-${adsetInsights.length}-${Date.now()}`, false, {
                                                                fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                lineNumber: 2846,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, `table2-${adsetInsights.length}`, true, {
                                                        fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                        lineNumber: 2820,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                lineNumber: 2812,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                        lineNumber: 2684,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                lineNumber: 2311,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true),
                    selectedPage === 2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 rounded-2xl sm:rounded-3xl p-4 sm:p-8 text-white shadow-2xl",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-cols-2 gap-2 sm:gap-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-center",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-xs sm:text-base font-semibold opacity-90 mb-1 sm:mb-2",
                                                                    children: "💵 เงินคงเหลือ"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                    lineNumber: 2980,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-xl sm:text-3xl font-bold",
                                                                    children: page2BalanceLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-2xl",
                                                                        children: "⏳"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                        lineNumber: 2985,
                                                                        columnNumber: 27
                                                                    }, this) : `฿${page2Balance.toLocaleString("th-TH", {
                                                                        minimumFractionDigits: 2,
                                                                        maximumFractionDigits: 2
                                                                    })}`
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                    lineNumber: 2983,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                            lineNumber: 2979,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-center",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-xs sm:text-base font-semibold opacity-90 mb-1 sm:mb-2",
                                                                    children: "💰 ใช้จ่ายรวม"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                    lineNumber: 2995,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-xl sm:text-3xl font-bold",
                                                                    children: page2Loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-2xl",
                                                                        children: "⏳"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                        lineNumber: 3000,
                                                                        columnNumber: 27
                                                                    }, this) : formatCurrency(page2Summary.totalSpend)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                    lineNumber: 2998,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                            lineNumber: 2994,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                    lineNumber: 2978,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                lineNumber: 2977,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-white rounded-b-2xl sm:rounded-b-3xl shadow-2xl overflow-hidden border border-gray-100 border-t-0 flex-1 mt-0",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "overflow-y-auto max-h-[120px]",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                                        className: "w-full min-w-max text-xs",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                                className: "bg-blue-50 sticky top-0",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                            className: "px-2 py-2 text-center font-semibold text-gray-700 border-b text-xs whitespace-nowrap",
                                                                            children: "วันที่"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                            lineNumber: 3014,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                            className: "px-2 py-2 text-center font-semibold text-gray-700 border-b text-xs whitespace-nowrap",
                                                                            children: "จ่ายแล้ว"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                            lineNumber: 3017,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                    lineNumber: 3013,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                lineNumber: 3012,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                                children: page2Loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        colSpan: 2,
                                                                        className: "px-2 py-4 text-center text-xs",
                                                                        children: "⏳"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                        lineNumber: 3025,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                    lineNumber: 3024,
                                                                    columnNumber: 27
                                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        colSpan: 2,
                                                                        className: "px-2 py-4 text-center text-xs text-gray-400",
                                                                        children: "ไม่มีข้อมูลรายวัน"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                        lineNumber: 3031,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                    lineNumber: 3030,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                lineNumber: 3022,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                        lineNumber: 3011,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                    lineNumber: 3010,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                lineNumber: 3009,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                        lineNumber: 2975,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-gradient-to-br from-teal-500 via-teal-600 to-cyan-600 rounded-2xl sm:rounded-3xl p-4 sm:p-8 text-white shadow-2xl",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-cols-2 gap-2 sm:gap-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-center",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-xs sm:text-base font-semibold opacity-90 mb-1 sm:mb-3",
                                                                    children: "New Inbox"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                    lineNumber: 3048,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-xl sm:text-4xl font-bold",
                                                                    children: page2Loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-2xl",
                                                                        children: "⏳"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                        lineNumber: 3053,
                                                                        columnNumber: 27
                                                                    }, this) : formatNumber(page2Summary.total_messaging_first_reply || 0)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                    lineNumber: 3051,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                            lineNumber: 3047,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-center",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-xs sm:text-base font-semibold opacity-90 mb-1 sm:mb-3",
                                                                    children: "Total Inbox"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                    lineNumber: 3060,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-xl sm:text-4xl font-bold",
                                                                    children: page2Loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-2xl",
                                                                        children: "⏳"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                        lineNumber: 3065,
                                                                        columnNumber: 27
                                                                    }, this) : formatNumber(page2Summary.total_messaging_connection || 0)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                    lineNumber: 3063,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                            lineNumber: 3059,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                    lineNumber: 3046,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                lineNumber: 3045,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-white rounded-b-2xl sm:rounded-b-3xl shadow-2xl overflow-hidden border border-gray-100 border-t-0 flex-1 mt-0",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "overflow-y-auto max-h-[120px]",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                                        className: "w-full min-w-max text-xs",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                                className: "bg-teal-50 sticky top-0",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                            className: "px-2 py-2 text-center font-semibold text-gray-700 border-b text-xs whitespace-nowrap",
                                                                            children: "วันที่"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                            lineNumber: 3079,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                            className: "px-2 py-2 text-center font-semibold text-gray-700 border-b text-xs whitespace-nowrap",
                                                                            children: "New Inbox"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                            lineNumber: 3082,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                            className: "px-2 py-2 text-center font-semibold text-gray-700 border-b text-xs whitespace-nowrap",
                                                                            children: "Total Inbox"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                            lineNumber: 3085,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                    lineNumber: 3078,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                lineNumber: 3077,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                                children: page2Loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        colSpan: 3,
                                                                        className: "px-2 py-4 text-center text-xs",
                                                                        children: "⏳"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                        lineNumber: 3093,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                    lineNumber: 3092,
                                                                    columnNumber: 27
                                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        colSpan: 3,
                                                                        className: "px-2 py-4 text-center text-xs text-gray-400",
                                                                        children: "ไม่มีข้อมูล Inbox"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                        lineNumber: 3099,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                    lineNumber: 3098,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                lineNumber: 3090,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                        lineNumber: 3076,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                    lineNumber: 3075,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                lineNumber: 3074,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                        lineNumber: 3043,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-gradient-to-br from-purple-500 via-purple-600 to-indigo-600 rounded-2xl sm:rounded-3xl p-4 sm:p-8 text-white shadow-2xl text-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-base sm:text-xl font-semibold mb-2 sm:mb-3 opacity-90",
                                                        children: "📞 ชื่อ - เบอร์"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                        lineNumber: 3114,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-2xl sm:text-4xl font-bold",
                                                        children: page2Loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-3xl",
                                                            children: "⏳"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                            lineNumber: 3119,
                                                            columnNumber: 23
                                                        }, this) : "—"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                        lineNumber: 3117,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                lineNumber: 3113,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-white rounded-b-2xl sm:rounded-b-3xl shadow-2xl overflow-hidden border border-gray-100 border-t-0 flex-1 mt-0",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "overflow-y-auto max-h-[120px]",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                                        className: "w-full min-w-max text-xs",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                                className: "bg-purple-50 sticky top-0",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                            className: "px-2 py-2 text-center font-semibold text-gray-700 border-b text-xs whitespace-nowrap",
                                                                            children: "วันที่"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                            lineNumber: 3131,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                            className: "px-2 py-2 text-center font-semibold text-gray-700 border-b text-xs whitespace-nowrap",
                                                                            children: "เบอร์"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                            lineNumber: 3134,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                    lineNumber: 3130,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                lineNumber: 3129,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                                children: page2Loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        colSpan: 2,
                                                                        className: "px-2 py-4 text-center text-xs",
                                                                        children: "⏳"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                        lineNumber: 3142,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                    lineNumber: 3141,
                                                                    columnNumber: 27
                                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        colSpan: 2,
                                                                        className: "px-2 py-4 text-center text-xs text-gray-400",
                                                                        children: "ไม่มีข้อมูลเบอร์โทร"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                        lineNumber: 3148,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                    lineNumber: 3147,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                lineNumber: 3139,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                        lineNumber: 3128,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                    lineNumber: 3127,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                lineNumber: 3126,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                        lineNumber: 3111,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                lineNumber: 2973,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mt-4 sm:mt-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-4 sm:p-8 border border-gray-100",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 px-4 sm:px-8 py-4 sm:py-6 -m-4 sm:-m-8 mb-4 sm:mb-8 relative overflow-hidden rounded-t-2xl sm:rounded-t-3xl",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-10 transition-opacity duration-500"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                    lineNumber: 3165,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                lineNumber: 3164,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col gap-3 mb-3 sm:mb-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        className: "text-lg sm:text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent flex items-center gap-2",
                                                        children: [
                                                            "🏆 TOP ",
                                                            page2Limit === "all" ? "ทั้งหมด" : page2Limit,
                                                            " Ads",
                                                            " ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "bg-gradient-to-r from-yellow-400 via-orange-400 to-red-500 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full text-base sm:text-xl font-bold shadow-xl",
                                                                children: "นักเตะยอดเยี่ยม"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                lineNumber: 3170,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                        lineNumber: 3168,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex flex-col sm:flex-row gap-2 w-full",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex gap-2 flex-1",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: ()=>setPage2SortBy("spend"),
                                                                        className: `flex-1 sm:flex-none px-3 sm:px-4 py-2 rounded-lg font-medium text-xs sm:text-sm transition-all ${page2SortBy === "spend" ? "bg-purple-600 text-white shadow-lg" : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`,
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "hidden sm:inline",
                                                                                children: "💰 Spend (มาก → น้อย)"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                                lineNumber: 3184,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "sm:hidden",
                                                                                children: "💰 Spend"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                                lineNumber: 3187,
                                                                                columnNumber: 25
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                        lineNumber: 3177,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: ()=>setPage2SortBy("clicks"),
                                                                        className: `flex-1 sm:flex-none px-3 sm:px-4 py-2 rounded-lg font-medium text-xs sm:text-sm transition-all ${page2SortBy === "clicks" ? "bg-purple-600 text-white shadow-lg" : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`,
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "hidden sm:inline",
                                                                                children: "🖱️ Clicks (มาก → น้อย)"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                                lineNumber: 3196,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "sm:hidden",
                                                                                children: "🖱️ Clicks"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                                lineNumber: 3199,
                                                                                columnNumber: 25
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                        lineNumber: 3189,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: ()=>setPage2SortBy("ctr"),
                                                                        className: `flex-1 sm:flex-none px-3 sm:px-4 py-2 rounded-lg font-medium text-xs sm:text-sm transition-all ${page2SortBy === "ctr" ? "bg-purple-600 text-white shadow-lg" : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`,
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "hidden sm:inline",
                                                                                children: "📈 CTR (มาก → น้อย)"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                                lineNumber: 3208,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "sm:hidden",
                                                                                children: "📈 CTR"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                                lineNumber: 3211,
                                                                                columnNumber: 25
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                        lineNumber: 3201,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: ()=>setPage2SortBy("impressions"),
                                                                        className: `flex-1 sm:flex-none px-3 sm:px-4 py-2 rounded-lg font-medium text-xs sm:text-sm transition-all ${page2SortBy === "impressions" ? "bg-purple-600 text-white shadow-lg" : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`,
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "hidden sm:inline",
                                                                                children: "👁️ Impressions (มาก → น้อย)"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                                lineNumber: 3220,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "sm:hidden",
                                                                                children: "👁️ Impr"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                                lineNumber: 3223,
                                                                                columnNumber: 25
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                        lineNumber: 3213,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                lineNumber: 3176,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                value: page2Limit,
                                                                onChange: (e)=>{
                                                                    const value = e.target.value;
                                                                    setPage2Limit(value === "all" ? "all" : Number(value));
                                                                },
                                                                className: "flex-1 sm:flex-none sm:min-w-[140px] px-3 py-2 rounded-lg font-medium text-xs sm:text-sm bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-800 hover:from-yellow-500 hover:to-orange-500 transition-all border-2 border-yellow-500 shadow-lg cursor-pointer",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: 5,
                                                                        children: "⭐ Top 5"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                        lineNumber: 3239,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: 10,
                                                                        children: "⭐ Top 10"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                        lineNumber: 3240,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: 15,
                                                                        children: "⭐ Top 15"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                        lineNumber: 3241,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: 20,
                                                                        children: "⭐ Top 20"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                        lineNumber: 3242,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: 30,
                                                                        children: "⭐ Top 30"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                        lineNumber: 3243,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: "all",
                                                                        children: "⭐ Top ทั้งหมด"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                        lineNumber: 3244,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                lineNumber: 3227,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                        lineNumber: 3174,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                lineNumber: 3167,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "overflow-x-auto",
                                                children: [
                                                    page2Loading && page2Insights.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "bg-blue-50 border-l-4 border-blue-500 p-3 mb-4 rounded",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-blue-700 text-sm font-medium",
                                                            children: "⏳ กำลังโหลดข้อมูล..."
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                            lineNumber: 3252,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                        lineNumber: 3251,
                                                        columnNumber: 21
                                                    }, this),
                                                    page2Error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "bg-red-50 border-l-4 border-red-500 p-3 mb-4 rounded",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-red-700 text-sm font-medium",
                                                            children: [
                                                                "❌ ",
                                                                page2Error
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                            lineNumber: 3259,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                        lineNumber: 3258,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                                        className: "w-full",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                    className: "border-b-2 border-gradient-to-r from-blue-200 via-purple-200 to-pink-200",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                            className: "text-center py-2 px-1 font-semibold text-gray-700 text-sm",
                                                                            children: "#"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                            lineNumber: 3267,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                            className: "text-center py-2 px-1 font-semibold text-gray-700 text-sm",
                                                                            children: "Ad Image"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                            lineNumber: 3270,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                            className: "text-center py-2 px-1 font-semibold text-gray-700 text-sm",
                                                                            children: "จ่ายแล้ว"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                            lineNumber: 3273,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                            className: "text-center py-2 px-1 font-semibold text-gray-700 text-sm",
                                                                            children: "New Inbox"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                            lineNumber: 3276,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                            className: "text-center py-2 px-1 font-semibold text-gray-700 text-sm",
                                                                            children: "Total Inbox"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                            lineNumber: 3279,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                            className: "text-center py-2 px-1 font-semibold text-gray-700 text-sm",
                                                                            children: "ชื่อ - เบอร์"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                            lineNumber: 3282,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                            className: "text-center py-2 px-1 font-semibold text-gray-700 text-sm",
                                                                            children: "ThruPlay"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                            lineNumber: 3285,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                            className: "text-center py-2 px-1 font-semibold text-gray-700 text-sm",
                                                                            children: "ต้นทุน Inbox"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                            lineNumber: 3288,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                    lineNumber: 3266,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                lineNumber: 3265,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                                children: page2Insights.sort((a, b)=>{
                                                                    switch(page2SortBy){
                                                                        case "spend":
                                                                            return parseFloat(b.spend || "0") - parseFloat(a.spend || "0");
                                                                        case "clicks":
                                                                            return parseInt(b.clicks || "0") - parseInt(a.clicks || "0");
                                                                        case "impressions":
                                                                            return parseInt(b.impressions || "0") - parseInt(a.impressions || "0");
                                                                        case "ctr":
                                                                            return parseFloat(b.ctr || "0") - parseFloat(a.ctr || "0");
                                                                        case "cpc":
                                                                            return parseFloat(b.cpc || "0") - parseFloat(a.cpc || "0");
                                                                        case "cpm":
                                                                            return parseFloat(b.cpm || "0") - parseFloat(a.cpm || "0");
                                                                        default:
                                                                            return parseFloat(b.spend || "0") - parseFloat(a.spend || "0");
                                                                    }
                                                                }).slice(0, page2Limit === "all" ? undefined : page2Limit).map((ad, index)=>{
                                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                        className: "border-b border-gray-100 hover:bg-gradient-to-r hover:from-blue-50 hover:via-purple-50 hover:to-pink-50 transition-all duration-300 hover:shadow-md",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                className: "py-2 px-1 text-center",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "text-gray-700 font-bold text-lg",
                                                                                    children: index + 1
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                                    lineNumber: 3321,
                                                                                    columnNumber: 33
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                                lineNumber: 3320,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                className: "py-2 px-1 text-center",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "relative group cursor-pointer flex justify-center items-center",
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "w-20 h-20 bg-gray-100 rounded-lg flex items-center justify-center",
                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            className: "text-gray-400 text-xs",
                                                                                            children: "📷"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                                            lineNumber: 3329,
                                                                                            columnNumber: 37
                                                                                        }, this)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                                        lineNumber: 3328,
                                                                                        columnNumber: 35
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                                    lineNumber: 3326,
                                                                                    columnNumber: 33
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                                lineNumber: 3325,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                className: "py-2 px-1 text-center text-gray-700 font-semibold text-xl",
                                                                                children: formatCurrency(ad.spend)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                                lineNumber: 3335,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                className: "py-2 px-1 text-center font-semibold text-green-700 text-xl",
                                                                                children: (()=>{
                                                                                    const newInbox = ad.actions?.find((action)=>action.action_type === "onsite_conversion.messaging_first_reply");
                                                                                    return newInbox ? formatNumber(newInbox.value) : "—";
                                                                                })()
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                                lineNumber: 3338,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                className: "py-2 px-1 text-center font-semibold text-blue-700 text-xl",
                                                                                children: (()=>{
                                                                                    const totalInbox = ad.actions?.find((action)=>action.action_type === "onsite_conversion.total_messaging_connection");
                                                                                    return totalInbox ? formatNumber(totalInbox.value) : "—";
                                                                                })()
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                                lineNumber: 3346,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                className: "py-2 px-1 text-center font-semibold text-purple-700 text-xl",
                                                                                children: "—"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                                lineNumber: 3354,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                className: "py-2 px-1 text-center text-gray-700 text-xl",
                                                                                children: "—"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                                lineNumber: 3358,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                className: "py-2 px-1 text-center text-gray-700 text-xl",
                                                                                children: (()=>{
                                                                                    const totalInbox = ad.actions?.find((action)=>action.action_type === "onsite_conversion.total_messaging_connection");
                                                                                    const spend = parseFloat(ad.spend || "0");
                                                                                    const inboxCount = parseInt(totalInbox?.value || "0");
                                                                                    if (inboxCount > 0) {
                                                                                        return formatCurrency(spend / inboxCount);
                                                                                    }
                                                                                    return "—";
                                                                                })()
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                                lineNumber: 3362,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        ]
                                                                    }, ad.ad_id, true, {
                                                                        fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                        lineNumber: 3316,
                                                                        columnNumber: 29
                                                                    }, this);
                                                                })
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                lineNumber: 3293,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, `page2-table-${page2Insights.length}`, true, {
                                                        fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                        lineNumber: 3264,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                lineNumber: 3248,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                        lineNumber: 3163,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-4 sm:p-8 border border-gray-100",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 px-4 sm:px-8 py-4 sm:py-6 -m-4 sm:-m-8 mb-4 sm:mb-8 relative overflow-hidden rounded-t-2xl sm:rounded-t-3xl",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-10 transition-opacity duration-500"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                    lineNumber: 3386,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                lineNumber: 3385,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col gap-3 mb-3 sm:mb-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        className: "text-lg sm:text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent flex items-center gap-2",
                                                        children: [
                                                            "🏆 TOP ",
                                                            page2Limit === "all" ? "ทั้งหมด" : page2Limit,
                                                            " Ad Set",
                                                            " ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "bg-gradient-to-r from-yellow-400 via-orange-400 to-red-500 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full text-base sm:text-xl font-bold shadow-xl",
                                                                children: "พื้นที่ลูกค้ายอดเยี่ยม"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                lineNumber: 3391,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                        lineNumber: 3389,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex flex-col sm:flex-row gap-2 w-full",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex gap-2 flex-1",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: ()=>setPage2SortBy("spend"),
                                                                        className: `flex-1 sm:flex-none px-3 sm:px-4 py-2 rounded-lg font-medium text-xs sm:text-sm transition-all ${page2SortBy === "spend" ? "bg-purple-600 text-white shadow-lg" : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`,
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "hidden sm:inline",
                                                                                children: "💰 Spend (มาก → น้อย)"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                                lineNumber: 3405,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "sm:hidden",
                                                                                children: "💰 Spend"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                                lineNumber: 3408,
                                                                                columnNumber: 25
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                        lineNumber: 3398,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: ()=>setPage2SortBy("clicks"),
                                                                        className: `flex-1 sm:flex-none px-3 sm:px-4 py-2 rounded-lg font-medium text-xs sm:text-sm transition-all ${page2SortBy === "clicks" ? "bg-purple-600 text-white shadow-lg" : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`,
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "hidden sm:inline",
                                                                                children: "🖱️ Clicks (มาก → น้อย)"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                                lineNumber: 3417,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "sm:hidden",
                                                                                children: "🖱️ Clicks"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                                lineNumber: 3420,
                                                                                columnNumber: 25
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                        lineNumber: 3410,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: ()=>setPage2SortBy("impressions"),
                                                                        className: `flex-1 sm:flex-none px-3 sm:px-4 py-2 rounded-lg font-medium text-xs sm:text-sm transition-all ${page2SortBy === "impressions" ? "bg-purple-600 text-white shadow-lg" : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`,
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "hidden sm:inline",
                                                                                children: "👁️ Impressions (มาก → น้อย)"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                                lineNumber: 3429,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "sm:hidden",
                                                                                children: "👁️ Impr"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                                lineNumber: 3432,
                                                                                columnNumber: 25
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                        lineNumber: 3422,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                lineNumber: 3397,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                value: page2Limit,
                                                                onChange: (e)=>{
                                                                    const value = e.target.value;
                                                                    setPage2Limit(value === "all" ? "all" : Number(value));
                                                                },
                                                                className: "flex-1 sm:flex-none sm:min-w-[140px] px-3 py-2 rounded-lg font-medium text-xs sm:text-sm bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-800 hover:from-yellow-500 hover:to-orange-500 transition-all border-2 border-yellow-500 shadow-lg cursor-pointer",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: 5,
                                                                        children: "⭐ Top 5"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                        lineNumber: 3448,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: 10,
                                                                        children: "⭐ Top 10"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                        lineNumber: 3449,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: 15,
                                                                        children: "⭐ Top 15"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                        lineNumber: 3450,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: 20,
                                                                        children: "⭐ Top 20"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                        lineNumber: 3451,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: 30,
                                                                        children: "⭐ Top 30"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                        lineNumber: 3452,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: "all",
                                                                        children: "⭐ Top ทั้งหมด"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                        lineNumber: 3453,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                lineNumber: 3436,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                        lineNumber: 3395,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                lineNumber: 3388,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "overflow-x-auto",
                                                children: [
                                                    page2Loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "bg-blue-50 border-l-4 border-blue-500 p-3 mb-4 rounded",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-blue-700 text-sm font-medium",
                                                            children: "⏳ กำลังโหลดข้อมูล Ad Set..."
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                            lineNumber: 3460,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                        lineNumber: 3459,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                                        className: "w-full",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                    className: "border-b-2 border-gradient-to-r from-blue-200 via-purple-200 to-pink-200",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                            className: "text-center py-2 px-1 font-semibold text-gray-700 text-sm",
                                                                            children: "#"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                            lineNumber: 3468,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                            className: "text-center py-2 px-1 font-semibold text-gray-700 text-sm",
                                                                            children: "Ad Set"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                            lineNumber: 3471,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                            className: "text-center py-2 px-1 font-semibold text-gray-700 text-sm",
                                                                            children: "จ่ายแล้ว"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                            lineNumber: 3474,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                            className: "text-center py-2 px-1 font-semibold text-gray-700 text-sm",
                                                                            children: "New Inbox"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                            lineNumber: 3477,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                            className: "text-center py-2 px-1 font-semibold text-gray-700 text-sm",
                                                                            children: "Total Inbox"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                            lineNumber: 3480,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                            className: "text-center py-2 px-1 font-semibold text-gray-700 text-sm",
                                                                            children: "ชื่อ - เบอร์"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                            lineNumber: 3483,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                            className: "text-center py-2 px-1 font-semibold text-gray-700 text-sm",
                                                                            children: "ThruPlay"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                            lineNumber: 3486,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                    lineNumber: 3467,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                lineNumber: 3466,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                                children: (()=>{
                                                                    // Group by adset with actions data
                                                                    const adsetData = new Map();
                                                                    page2Insights.forEach((ad)=>{
                                                                        const existing = adsetData.get(ad.adset_id) || {
                                                                            adset_id: ad.adset_id,
                                                                            adset_name: ad.adset_name,
                                                                            campaign_name: ad.campaign_name,
                                                                            spend: 0,
                                                                            clicks: 0,
                                                                            impressions: 0,
                                                                            newInbox: 0,
                                                                            totalInbox: 0
                                                                        };
                                                                        existing.spend += parseFloat(ad.spend || "0");
                                                                        existing.clicks += parseInt(ad.clicks || "0");
                                                                        existing.impressions += parseInt(ad.impressions || "0");
                                                                        // Sum up actions
                                                                        if (ad.actions) {
                                                                            const newInboxAction = ad.actions.find((action)=>action.action_type === "onsite_conversion.messaging_first_reply");
                                                                            const totalInboxAction = ad.actions.find((action)=>action.action_type === "onsite_conversion.total_messaging_connection");
                                                                            existing.newInbox += parseInt(newInboxAction?.value || "0");
                                                                            existing.totalInbox += parseInt(totalInboxAction?.value || "0");
                                                                        }
                                                                        adsetData.set(ad.adset_id, existing);
                                                                    });
                                                                    return Array.from(adsetData.values()).sort((a, b)=>{
                                                                        switch(page2SortBy){
                                                                            case "spend":
                                                                                return b.spend - a.spend;
                                                                            case "clicks":
                                                                                return b.clicks - a.clicks;
                                                                            case "impressions":
                                                                                return b.impressions - a.impressions;
                                                                            default:
                                                                                return b.spend - a.spend;
                                                                        }
                                                                    }).slice(0, page2Limit === "all" ? undefined : page2Limit).map((adset, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                            className: "border-b border-gray-100 hover:bg-gradient-to-r hover:from-blue-50 hover:via-purple-50 hover:to-pink-50 transition-all duration-300 hover:shadow-md cursor-pointer",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                    className: "py-2 px-1 text-center",
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "text-gray-700 font-bold text-lg",
                                                                                        children: index + 1
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                                        lineNumber: 3555,
                                                                                        columnNumber: 33
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                                    lineNumber: 3554,
                                                                                    columnNumber: 31
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                    className: "py-2 px-1 text-center",
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "text-gray-700 font-medium text-sm max-w-[150px] truncate mx-auto hover:text-purple-600",
                                                                                        title: adset.adset_name,
                                                                                        children: adset.adset_name || "—"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                                        lineNumber: 3560,
                                                                                        columnNumber: 33
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                                    lineNumber: 3559,
                                                                                    columnNumber: 31
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                    className: "py-2 px-1 text-center text-gray-700 font-semibold text-xl",
                                                                                    children: formatCurrency(adset.spend)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                                    lineNumber: 3567,
                                                                                    columnNumber: 31
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                    className: "py-2 px-1 text-center font-semibold text-green-700 text-xl",
                                                                                    children: adset.newInbox > 0 ? formatNumber(adset.newInbox) : "—"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                                    lineNumber: 3570,
                                                                                    columnNumber: 31
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                    className: "py-2 px-1 text-center font-semibold text-blue-700 text-xl",
                                                                                    children: adset.totalInbox > 0 ? formatNumber(adset.totalInbox) : "—"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                                    lineNumber: 3573,
                                                                                    columnNumber: 31
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                    className: "py-2 px-1 text-center font-semibold text-purple-700 text-xl",
                                                                                    children: "—"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                                    lineNumber: 3576,
                                                                                    columnNumber: 31
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                    className: "py-2 px-1 text-center text-gray-700 text-xl",
                                                                                    children: "—"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                                    lineNumber: 3580,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            ]
                                                                        }, adset.adset_id, true, {
                                                                            fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                            lineNumber: 3550,
                                                                            columnNumber: 29
                                                                        }, this));
                                                                })()
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                lineNumber: 3491,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, `page2-adset-table-${page2Insights.length}`, true, {
                                                        fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                        lineNumber: 3465,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                lineNumber: 3457,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                        lineNumber: 3384,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                lineNumber: 3161,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true),
                    selectedPage === 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 rounded-2xl sm:rounded-3xl p-4 sm:p-8 text-white shadow-2xl",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-cols-2 gap-2 sm:gap-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-center",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-xs sm:text-base font-semibold opacity-90 mb-1 sm:mb-2",
                                                                    children: "💵 เงินคงเหลือ (Page 3)"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                    lineNumber: 3606,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-xl sm:text-3xl font-bold",
                                                                    children: facebookBalanceLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-2xl",
                                                                        children: "⏳"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                        lineNumber: 3611,
                                                                        columnNumber: 27
                                                                    }, this) : `฿${facebookBalance.toLocaleString("th-TH", {
                                                                        minimumFractionDigits: 2,
                                                                        maximumFractionDigits: 2
                                                                    })}`
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                    lineNumber: 3609,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                            lineNumber: 3605,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-center",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-xs sm:text-base font-semibold opacity-90 mb-1 sm:mb-2",
                                                                    children: "💰 ใช้จ่ายรวม"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                    lineNumber: 3621,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-xl sm:text-3xl font-bold",
                                                                    children: formatCurrency(insights.reduce((sum, ad)=>sum + parseFloat(ad.spend || "0"), 0))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                    lineNumber: 3624,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                            lineNumber: 3620,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                    lineNumber: 3604,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                lineNumber: 3603,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-white rounded-b-2xl sm:rounded-b-3xl shadow-2xl overflow-hidden border border-gray-100 border-t-0 flex-1 mt-0",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "overflow-y-auto max-h-[120px]",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                                        className: "w-full min-w-max text-xs",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                                className: "bg-blue-50 sticky top-0",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                            className: "px-2 py-2 text-center font-semibold text-gray-700 border-b text-xs whitespace-nowrap",
                                                                            children: "วันที่"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                            lineNumber: 3641,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                            className: "px-2 py-2 text-center font-semibold text-gray-700 border-b text-xs whitespace-nowrap",
                                                                            children: "จ่ายแล้ว"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                            lineNumber: 3644,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                    lineNumber: 3640,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                lineNumber: 3639,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                                children: dailySummaryLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        colSpan: 2,
                                                                        className: "px-2 py-4 text-center text-xs",
                                                                        children: "⏳"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                        lineNumber: 3652,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                    lineNumber: 3651,
                                                                    columnNumber: 27
                                                                }, this) : (()=>{
                                                                    const dailyData = new Map();
                                                                    dailySummaryData.forEach((ad)=>{
                                                                        const date = ad.date_start;
                                                                        const existing = dailyData.get(date) || {
                                                                            spend: 0
                                                                        };
                                                                        existing.spend += parseFloat(ad.spend || "0");
                                                                        dailyData.set(date, existing);
                                                                    });
                                                                    const sortedDates = Array.from(dailyData.keys()).sort((a, b)=>new Date(b).getTime() - new Date(a).getTime());
                                                                    const last30Days = sortedDates.slice(1, 31);
                                                                    return last30Days.map((date)=>{
                                                                        const data = dailyData.get(date);
                                                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                            className: "hover:bg-blue-50 border-b",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                    className: "px-2 py-2 text-center text-xs text-gray-900",
                                                                                    children: new Date(date).toLocaleDateString("th-TH", {
                                                                                        month: "short",
                                                                                        day: "numeric"
                                                                                    })
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                                    lineNumber: 3671,
                                                                                    columnNumber: 35
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                    className: "px-2 py-2 text-center text-xs font-semibold text-blue-600",
                                                                                    children: formatCurrency(data.spend)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                                    lineNumber: 3674,
                                                                                    columnNumber: 35
                                                                                }, this)
                                                                            ]
                                                                        }, date, true, {
                                                                            fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                            lineNumber: 3670,
                                                                            columnNumber: 33
                                                                        }, this);
                                                                    });
                                                                })()
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                lineNumber: 3649,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                        lineNumber: 3638,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                    lineNumber: 3637,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                lineNumber: 3636,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                        lineNumber: 3601,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-gradient-to-br from-teal-500 via-teal-600 to-cyan-600 rounded-2xl sm:rounded-3xl p-4 sm:p-8 text-white shadow-2xl",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-cols-2 gap-2 sm:gap-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-center",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-xs sm:text-base font-semibold opacity-90 mb-1 sm:mb-3",
                                                                    children: "New Inbox"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                    lineNumber: 3694,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-xl sm:text-4xl font-bold",
                                                                    children: getTotalResults()
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                    lineNumber: 3697,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                            lineNumber: 3693,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-center",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-xs sm:text-base font-semibold opacity-90 mb-1 sm:mb-3",
                                                                    children: "Total Inbox"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                    lineNumber: 3702,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-xl sm:text-4xl font-bold",
                                                                    children: getTotalMessagingConnection()
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                    lineNumber: 3705,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                            lineNumber: 3701,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                    lineNumber: 3692,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                lineNumber: 3691,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-white rounded-b-2xl sm:rounded-b-3xl shadow-2xl overflow-hidden border border-gray-100 border-t-0 flex-1 mt-0",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "overflow-y-auto max-h-[120px]",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                                        className: "w-full min-w-max text-xs",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                                className: "bg-teal-50 sticky top-0",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                            className: "px-2 py-2 text-center font-semibold text-gray-700 border-b text-xs whitespace-nowrap",
                                                                            children: "วันที่"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                            lineNumber: 3717,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                            className: "px-2 py-2 text-center font-semibold text-gray-700 border-b text-xs whitespace-nowrap",
                                                                            children: "New Inbox"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                            lineNumber: 3718,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                            className: "px-2 py-2 text-center font-semibold text-gray-700 border-b text-xs whitespace-nowrap",
                                                                            children: "Total Inbox"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                            lineNumber: 3719,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                    lineNumber: 3716,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                lineNumber: 3715,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                                children: dailySummaryLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        colSpan: 3,
                                                                        className: "px-2 py-4 text-center text-xs",
                                                                        children: "⏳"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                        lineNumber: 3724,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                    lineNumber: 3724,
                                                                    columnNumber: 27
                                                                }, this) : (()=>{
                                                                    const dailyData = new Map();
                                                                    dailySummaryData.forEach((ad)=>{
                                                                        const date = ad.date_start;
                                                                        const existing = dailyData.get(date) || {
                                                                            newInbox: 0,
                                                                            totalInbox: 0
                                                                        };
                                                                        existing.newInbox += getResultsByActionType(ad.actions, "onsite_conversion.messaging_first_reply");
                                                                        existing.totalInbox += getResultsByActionType(ad.actions, "onsite_conversion.total_messaging_connection");
                                                                        dailyData.set(date, existing);
                                                                    });
                                                                    const sortedDates = Array.from(dailyData.keys()).sort((a, b)=>new Date(b).getTime() - new Date(a).getTime());
                                                                    const last30Days = sortedDates.slice(1, 31);
                                                                    return last30Days.map((date)=>{
                                                                        const data = dailyData.get(date);
                                                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                            className: "hover:bg-teal-50 border-b",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                    className: "px-2 py-2 text-center text-xs text-gray-900",
                                                                                    children: new Date(date).toLocaleDateString("th-TH", {
                                                                                        month: "short",
                                                                                        day: "numeric"
                                                                                    })
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                                    lineNumber: 3741,
                                                                                    columnNumber: 35
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                    className: "px-2 py-2 text-center text-xs font-semibold text-green-600",
                                                                                    children: data.newInbox
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                                    lineNumber: 3744,
                                                                                    columnNumber: 35
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                    className: "px-2 py-2 text-center text-xs font-semibold text-teal-600",
                                                                                    children: data.totalInbox
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                                    lineNumber: 3745,
                                                                                    columnNumber: 35
                                                                                }, this)
                                                                            ]
                                                                        }, date, true, {
                                                                            fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                            lineNumber: 3740,
                                                                            columnNumber: 33
                                                                        }, this);
                                                                    });
                                                                })()
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                lineNumber: 3722,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                        lineNumber: 3714,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                    lineNumber: 3713,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                lineNumber: 3712,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                        lineNumber: 3689,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-gradient-to-br from-purple-500 via-purple-600 to-indigo-600 rounded-2xl sm:rounded-3xl p-4 sm:p-8 text-white shadow-2xl text-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-base sm:text-xl font-semibold mb-2 sm:mb-3 opacity-90",
                                                        children: "📞 ชื่อ - เบอร์"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                        lineNumber: 3761,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-2xl sm:text-4xl font-bold",
                                                        children: phoneCountLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-3xl",
                                                            children: "⏳"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                            lineNumber: 3763,
                                                            columnNumber: 42
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: phoneCountData.total.toLocaleString()
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                            lineNumber: 3763,
                                                            columnNumber: 80
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                        lineNumber: 3762,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                lineNumber: 3760,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-white rounded-b-2xl sm:rounded-b-3xl shadow-2xl overflow-hidden border border-gray-100 border-t-0 flex-1 mt-0",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "overflow-y-auto max-h-[120px]",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                                        className: "w-full min-w-max text-xs",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                                className: "bg-purple-50 sticky top-0",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                            className: "px-2 py-2 text-center font-semibold text-gray-700 border-b text-xs whitespace-nowrap",
                                                                            children: "วันที่"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                            lineNumber: 3772,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                            className: "px-2 py-2 text-center font-semibold text-gray-700 border-b text-xs whitespace-nowrap",
                                                                            children: "เบอร์"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                            lineNumber: 3773,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                    lineNumber: 3771,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                lineNumber: 3770,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                                children: phoneLeadsLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        colSpan: 2,
                                                                        className: "px-2 py-4 text-center text-xs",
                                                                        children: "⏳"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                        lineNumber: 3778,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                    lineNumber: 3778,
                                                                    columnNumber: 27
                                                                }, this) : Object.entries(phoneLeadsData).sort(([dateA], [dateB])=>new Date(dateB).getTime() - new Date(dateA).getTime()).slice(1).map(([date, count])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                        className: "hover:bg-purple-50 border-b",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                className: "px-2 py-2 text-center text-xs text-gray-900",
                                                                                children: new Date(date).toLocaleDateString("th-TH", {
                                                                                    month: "short",
                                                                                    day: "numeric"
                                                                                })
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                                lineNumber: 3785,
                                                                                columnNumber: 33
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                className: "px-2 py-2 text-center text-xs font-semibold text-purple-600",
                                                                                children: count
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                                lineNumber: 3788,
                                                                                columnNumber: 33
                                                                            }, this)
                                                                        ]
                                                                    }, date, true, {
                                                                        fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                        lineNumber: 3784,
                                                                        columnNumber: 31
                                                                    }, this))
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                lineNumber: 3776,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                        lineNumber: 3769,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                    lineNumber: 3768,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                lineNumber: 3767,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                        lineNumber: 3758,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                lineNumber: 3599,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mt-4 sm:mt-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-4 sm:p-8 border border-gray-100",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 px-4 sm:px-8 py-4 sm:py-6 -m-4 sm:-m-8 mb-4 sm:mb-8 relative overflow-hidden rounded-t-2xl sm:rounded-t-3xl",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-10 transition-opacity duration-500"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                    lineNumber: 3804,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                lineNumber: 3803,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col gap-3 mb-3 sm:mb-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        className: "text-lg sm:text-2xl font-bold bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent flex items-center gap-2",
                                                        children: "🌐 Page 3 - Campaign Overview"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                        lineNumber: 3807,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-gray-600 text-sm",
                                                        children: "Page 3 content area - Same structure as Page 1"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                        lineNumber: 3810,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                lineNumber: 3806,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-8 text-center text-gray-500",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-6xl mb-4",
                                                        children: "🎯"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                        lineNumber: 3813,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-lg",
                                                        children: "Page 3 specific content will be displayed here"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                        lineNumber: 3814,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                lineNumber: 3812,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                        lineNumber: 3802,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-4 sm:p-8 border border-gray-100",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 px-4 sm:px-8 py-4 sm:py-6 -m-4 sm:-m-8 mb-4 sm:mb-8 relative overflow-hidden rounded-t-2xl sm:rounded-t-3xl",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-10 transition-opacity duration-500"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                    lineNumber: 3820,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                lineNumber: 3819,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col gap-3 mb-3 sm:mb-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        className: "text-lg sm:text-2xl font-bold bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent flex items-center gap-2",
                                                        children: "📊 Page 3 - Performance Metrics"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                        lineNumber: 3823,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-gray-600 text-sm",
                                                        children: "Page 3 metrics area"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                        lineNumber: 3826,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                lineNumber: 3822,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-8 text-center text-gray-500",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-6xl mb-4",
                                                        children: "📉"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                        lineNumber: 3829,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-lg",
                                                        children: "Page 3 metrics will be displayed here"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                        lineNumber: 3830,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                lineNumber: 3828,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                        lineNumber: 3818,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                lineNumber: 3800,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true),
                    selectedPage === 4 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 rounded-2xl sm:rounded-3xl p-4 sm:p-8 text-white shadow-2xl",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-cols-2 gap-2 sm:gap-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-center",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-xs sm:text-base font-semibold opacity-90 mb-1 sm:mb-2",
                                                                    children: "💵 เงินคงเหลือ (Page 4)"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                    lineNumber: 3848,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-xl sm:text-3xl font-bold",
                                                                    children: facebookBalanceLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-2xl",
                                                                        children: "⏳"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                        lineNumber: 3853,
                                                                        columnNumber: 27
                                                                    }, this) : `฿${facebookBalance.toLocaleString("th-TH", {
                                                                        minimumFractionDigits: 2,
                                                                        maximumFractionDigits: 2
                                                                    })}`
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                    lineNumber: 3851,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                            lineNumber: 3847,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-center",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-xs sm:text-base font-semibold opacity-90 mb-1 sm:mb-2",
                                                                    children: "💰 ใช้จ่ายรวม"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                    lineNumber: 3863,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-xl sm:text-3xl font-bold",
                                                                    children: formatCurrency(insights.reduce((sum, ad)=>sum + parseFloat(ad.spend || "0"), 0))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                    lineNumber: 3866,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                            lineNumber: 3862,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                    lineNumber: 3846,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                lineNumber: 3845,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-white rounded-b-2xl sm:rounded-b-3xl shadow-2xl overflow-hidden border border-gray-100 border-t-0 flex-1 mt-0",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "overflow-y-auto max-h-[120px]",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                                        className: "w-full min-w-max text-xs",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                                className: "bg-blue-50 sticky top-0",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                            className: "px-2 py-2 text-center font-semibold text-gray-700 border-b text-xs whitespace-nowrap",
                                                                            children: "วันที่"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                            lineNumber: 3883,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                            className: "px-2 py-2 text-center font-semibold text-gray-700 border-b text-xs whitespace-nowrap",
                                                                            children: "จ่ายแล้ว"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                            lineNumber: 3886,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                    lineNumber: 3882,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                lineNumber: 3881,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                                children: dailySummaryLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        colSpan: 2,
                                                                        className: "px-2 py-4 text-center text-xs",
                                                                        children: "⏳"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                        lineNumber: 3894,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                    lineNumber: 3893,
                                                                    columnNumber: 27
                                                                }, this) : (()=>{
                                                                    const dailyData = new Map();
                                                                    dailySummaryData.forEach((ad)=>{
                                                                        const date = ad.date_start;
                                                                        const existing = dailyData.get(date) || {
                                                                            spend: 0
                                                                        };
                                                                        existing.spend += parseFloat(ad.spend || "0");
                                                                        dailyData.set(date, existing);
                                                                    });
                                                                    const sortedDates = Array.from(dailyData.keys()).sort((a, b)=>new Date(b).getTime() - new Date(a).getTime());
                                                                    const last30Days = sortedDates.slice(1, 31);
                                                                    return last30Days.map((date)=>{
                                                                        const data = dailyData.get(date);
                                                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                            className: "hover:bg-blue-50 border-b",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                    className: "px-2 py-2 text-center text-xs text-gray-900",
                                                                                    children: new Date(date).toLocaleDateString("th-TH", {
                                                                                        month: "short",
                                                                                        day: "numeric"
                                                                                    })
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                                    lineNumber: 3913,
                                                                                    columnNumber: 35
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                    className: "px-2 py-2 text-center text-xs font-semibold text-blue-600",
                                                                                    children: formatCurrency(data.spend)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                                    lineNumber: 3916,
                                                                                    columnNumber: 35
                                                                                }, this)
                                                                            ]
                                                                        }, date, true, {
                                                                            fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                            lineNumber: 3912,
                                                                            columnNumber: 33
                                                                        }, this);
                                                                    });
                                                                })()
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                lineNumber: 3891,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                        lineNumber: 3880,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                    lineNumber: 3879,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                lineNumber: 3878,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                        lineNumber: 3843,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-gradient-to-br from-teal-500 via-teal-600 to-cyan-600 rounded-2xl sm:rounded-3xl p-4 sm:p-8 text-white shadow-2xl",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-cols-2 gap-2 sm:gap-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-center",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-xs sm:text-base font-semibold opacity-90 mb-1 sm:mb-3",
                                                                    children: "New Inbox"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                    lineNumber: 3936,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-xl sm:text-4xl font-bold",
                                                                    children: getTotalResults()
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                    lineNumber: 3939,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                            lineNumber: 3935,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-center",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-xs sm:text-base font-semibold opacity-90 mb-1 sm:mb-3",
                                                                    children: "Total Inbox"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                    lineNumber: 3944,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-xl sm:text-4xl font-bold",
                                                                    children: getTotalMessagingConnection()
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                    lineNumber: 3947,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                            lineNumber: 3943,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                    lineNumber: 3934,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                lineNumber: 3933,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-white rounded-b-2xl sm:rounded-b-3xl shadow-2xl overflow-hidden border border-gray-100 border-t-0 flex-1 mt-0",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "overflow-y-auto max-h-[120px]",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                                        className: "w-full min-w-max text-xs",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                                className: "bg-teal-50 sticky top-0",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                            className: "px-2 py-2 text-center font-semibold text-gray-700 border-b text-xs whitespace-nowrap",
                                                                            children: "วันที่"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                            lineNumber: 3959,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                            className: "px-2 py-2 text-center font-semibold text-gray-700 border-b text-xs whitespace-nowrap",
                                                                            children: "New Inbox"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                            lineNumber: 3960,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                            className: "px-2 py-2 text-center font-semibold text-gray-700 border-b text-xs whitespace-nowrap",
                                                                            children: "Total Inbox"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                            lineNumber: 3961,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                    lineNumber: 3958,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                lineNumber: 3957,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                                children: dailySummaryLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        colSpan: 3,
                                                                        className: "px-2 py-4 text-center text-xs",
                                                                        children: "⏳"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                        lineNumber: 3966,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                    lineNumber: 3966,
                                                                    columnNumber: 27
                                                                }, this) : (()=>{
                                                                    const dailyData = new Map();
                                                                    dailySummaryData.forEach((ad)=>{
                                                                        const date = ad.date_start;
                                                                        const existing = dailyData.get(date) || {
                                                                            newInbox: 0,
                                                                            totalInbox: 0
                                                                        };
                                                                        existing.newInbox += getResultsByActionType(ad.actions, "onsite_conversion.messaging_first_reply");
                                                                        existing.totalInbox += getResultsByActionType(ad.actions, "onsite_conversion.total_messaging_connection");
                                                                        dailyData.set(date, existing);
                                                                    });
                                                                    const sortedDates = Array.from(dailyData.keys()).sort((a, b)=>new Date(b).getTime() - new Date(a).getTime());
                                                                    const last30Days = sortedDates.slice(1, 31);
                                                                    return last30Days.map((date)=>{
                                                                        const data = dailyData.get(date);
                                                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                            className: "hover:bg-teal-50 border-b",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                    className: "px-2 py-2 text-center text-xs text-gray-900",
                                                                                    children: new Date(date).toLocaleDateString("th-TH", {
                                                                                        month: "short",
                                                                                        day: "numeric"
                                                                                    })
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                                    lineNumber: 3983,
                                                                                    columnNumber: 35
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                    className: "px-2 py-2 text-center text-xs font-semibold text-green-600",
                                                                                    children: data.newInbox
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                                    lineNumber: 3986,
                                                                                    columnNumber: 35
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                    className: "px-2 py-2 text-center text-xs font-semibold text-teal-600",
                                                                                    children: data.totalInbox
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                                    lineNumber: 3987,
                                                                                    columnNumber: 35
                                                                                }, this)
                                                                            ]
                                                                        }, date, true, {
                                                                            fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                            lineNumber: 3982,
                                                                            columnNumber: 33
                                                                        }, this);
                                                                    });
                                                                })()
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                lineNumber: 3964,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                        lineNumber: 3956,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                    lineNumber: 3955,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                lineNumber: 3954,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                        lineNumber: 3931,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-gradient-to-br from-purple-500 via-purple-600 to-indigo-600 rounded-2xl sm:rounded-3xl p-4 sm:p-8 text-white shadow-2xl text-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-base sm:text-xl font-semibold mb-2 sm:mb-3 opacity-90",
                                                        children: "📞 ชื่อ - เบอร์"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                        lineNumber: 4003,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-2xl sm:text-4xl font-bold",
                                                        children: phoneCountLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-3xl",
                                                            children: "⏳"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                            lineNumber: 4005,
                                                            columnNumber: 42
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: phoneCountData.total.toLocaleString()
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                            lineNumber: 4005,
                                                            columnNumber: 80
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                        lineNumber: 4004,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                lineNumber: 4002,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-white rounded-b-2xl sm:rounded-b-3xl shadow-2xl overflow-hidden border border-gray-100 border-t-0 flex-1 mt-0",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "overflow-y-auto max-h-[120px]",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                                        className: "w-full min-w-max text-xs",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                                className: "bg-purple-50 sticky top-0",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                            className: "px-2 py-2 text-center font-semibold text-gray-700 border-b text-xs whitespace-nowrap",
                                                                            children: "วันที่"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                            lineNumber: 4014,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                            className: "px-2 py-2 text-center font-semibold text-gray-700 border-b text-xs whitespace-nowrap",
                                                                            children: "เบอร์"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                            lineNumber: 4015,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                    lineNumber: 4013,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                lineNumber: 4012,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                                children: phoneLeadsLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        colSpan: 2,
                                                                        className: "px-2 py-4 text-center text-xs",
                                                                        children: "⏳"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                        lineNumber: 4020,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                    lineNumber: 4020,
                                                                    columnNumber: 27
                                                                }, this) : Object.entries(phoneLeadsData).sort(([dateA], [dateB])=>new Date(dateB).getTime() - new Date(dateA).getTime()).slice(1).map(([date, count])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                        className: "hover:bg-purple-50 border-b",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                className: "px-2 py-2 text-center text-xs text-gray-900",
                                                                                children: new Date(date).toLocaleDateString("th-TH", {
                                                                                    month: "short",
                                                                                    day: "numeric"
                                                                                })
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                                lineNumber: 4027,
                                                                                columnNumber: 33
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                className: "px-2 py-2 text-center text-xs font-semibold text-purple-600",
                                                                                children: count
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                                lineNumber: 4030,
                                                                                columnNumber: 33
                                                                            }, this)
                                                                        ]
                                                                    }, date, true, {
                                                                        fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                        lineNumber: 4026,
                                                                        columnNumber: 31
                                                                    }, this))
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                                lineNumber: 4018,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                        lineNumber: 4011,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                    lineNumber: 4010,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                lineNumber: 4009,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                        lineNumber: 4000,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                lineNumber: 3841,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mt-4 sm:mt-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-4 sm:p-8 border border-gray-100",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 px-4 sm:px-8 py-4 sm:py-6 -m-4 sm:-m-8 mb-4 sm:mb-8 relative overflow-hidden rounded-t-2xl sm:rounded-t-3xl",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-10 transition-opacity duration-500"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                    lineNumber: 4046,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                lineNumber: 4045,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col gap-3 mb-3 sm:mb-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        className: "text-lg sm:text-2xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent flex items-center gap-2",
                                                        children: "⚙️ Page 4 - Settings & Configuration"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                        lineNumber: 4049,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-gray-600 text-sm",
                                                        children: "Page 4 content area - Same structure as Page 1"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                        lineNumber: 4052,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                lineNumber: 4048,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-8 text-center text-gray-500",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-6xl mb-4",
                                                        children: "🔧"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                        lineNumber: 4055,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-lg",
                                                        children: "Page 4 specific content will be displayed here"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                        lineNumber: 4056,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                lineNumber: 4054,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                        lineNumber: 4044,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-4 sm:p-8 border border-gray-100",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 px-4 sm:px-8 py-4 sm:py-6 -m-4 sm:-m-8 mb-4 sm:mb-8 relative overflow-hidden rounded-t-2xl sm:rounded-t-3xl",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-10 transition-opacity duration-500"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                    lineNumber: 4062,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                lineNumber: 4061,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col gap-3 mb-3 sm:mb-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        className: "text-lg sm:text-2xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent flex items-center gap-2",
                                                        children: "📝 Page 4 - Additional Info"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                        lineNumber: 4065,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-gray-600 text-sm",
                                                        children: "Page 4 additional area"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                        lineNumber: 4068,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                lineNumber: 4064,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-8 text-center text-gray-500",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-6xl mb-4",
                                                        children: "📋"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                        lineNumber: 4071,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-lg",
                                                        children: "Page 4 additional content will be displayed here"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                        lineNumber: 4072,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                                lineNumber: 4070,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                        lineNumber: 4060,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                                lineNumber: 4042,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
                lineNumber: 2026,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/facebook-ads-manager/page.tsx",
        lineNumber: 1177,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=src_app_facebook-ads-manager_page_tsx_a3bcf5cb._.js.map