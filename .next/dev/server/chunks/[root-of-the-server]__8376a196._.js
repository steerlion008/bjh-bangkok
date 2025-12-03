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
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
"[project]/src/app/api/marketing-folders/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DELETE",
    ()=>DELETE,
    "GET",
    ()=>GET,
    "PATCH",
    ()=>PATCH,
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/fs [external] (fs, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
;
;
;
const thumbnailsRoot = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), "public", "images", "video");
const marketingRoot = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), "public", "images", "video");
const folderDefinitions = [
    {
        id: "ad-content",
        name: "Ad Content"
    },
    {
        id: "before-and-after",
        name: "Before and After"
    },
    {
        id: "branding",
        name: "Branding"
    },
    {
        id: "presentations",
        name: "Presentations"
    },
    {
        id: "all-footages",
        name: "All Footages"
    },
    {
        id: "other-files",
        name: "Other Files"
    }
];
const imageExtensions = new Set([
    ".png",
    ".jpg",
    ".jpeg",
    ".webp",
    ".gif",
    ".bmp",
    ".tif",
    ".tiff"
]);
const videoExtensions = new Set([
    ".mp4",
    ".mov",
    ".avi",
    ".mkv",
    ".webm",
    ".flv",
    ".mpeg"
]);
const slugify = (value)=>value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "");
const formatBytes = (bytes)=>{
    if (bytes === 0) return "0 B";
    const units = [
        "B",
        "KB",
        "MB",
        "GB",
        "TB"
    ];
    const exponent = Math.floor(Math.log(bytes) / Math.log(1024));
    const value = bytes / Math.pow(1024, exponent);
    return `${value.toFixed(2)} ${units[exponent]}`;
};
const getFileType = (fileName)=>{
    const ext = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].extname(fileName).toLowerCase();
    if (imageExtensions.has(ext)) return "image";
    if (videoExtensions.has(ext)) return "video";
    return "clip";
};
const pathExists = async (target)=>{
    try {
        const stats = await __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["promises"].stat(target);
        return stats.isDirectory();
    } catch  {
        return false;
    }
};
const sanitizeFolderName = (value)=>value.replace(/[\\/]/g, "").trim();
const normalizeSegments = (pathString)=>pathString.split("/").map((segment)=>segment.trim()).filter(Boolean);
const isInsideMarketingRoot = (target)=>{
    const relative = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].relative(marketingRoot, target);
    if (relative === "") return true;
    return !relative.startsWith("..") && !__TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].isAbsolute(relative);
};
const fileExists = async (target)=>{
    try {
        const stats = await __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["promises"].stat(target);
        return stats.isFile();
    } catch  {
        return false;
    }
};
// Generate thumbnail path for a video file
const getVideoThumbnailPath = (segments, fileName)=>{
    const baseName = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].basename(fileName, __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].extname(fileName));
    const thumbnailName = `${baseName}_thumb.jpg`;
    return __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(thumbnailsRoot, thumbnailName);
};
// Get thumbnail URL for a video file
const getVideoThumbnailUrl = (segments, fileName)=>{
    const baseName = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].basename(fileName, __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].extname(fileName));
    const thumbnailName = `${baseName}_thumb.jpg`;
    return `/images/video/${thumbnailName}`;
};
// Default video placeholder
const VIDEO_PLACEHOLDER = "/images/video-placeholder.svg";
const buildFolderNode = async (dirPath, segments, category, files, counter)=>{
    const entries = await __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["promises"].readdir(dirPath, {
        withFileTypes: true
    });
    entries.sort((a, b)=>a.name.localeCompare(b.name, undefined, {
            sensitivity: "base"
        }));
    const fileIds = [];
    const children = [];
    for (const entry of entries){
        if (entry.name.startsWith(".")) continue;
        const entryPath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(dirPath, entry.name);
        if (entry.isDirectory()) {
            const childNode = await buildFolderNode(entryPath, [
                ...segments,
                entry.name
            ], category, files, counter);
            children.push(childNode);
            continue;
        }
        if (entry.isFile()) {
            const stats = await __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["promises"].stat(entryPath);
            const fileId = counter.value++;
            const fileSegments = [
                ...segments,
                entry.name
            ];
            const urlSegments = fileSegments.map((segment)=>encodeURIComponent(segment));
            const url = `/api/serve-video/${urlSegments.join("/")}`;
            const fileType = getFileType(entry.name);
            // Determine thumbnail for the file
            let thumbnail = url;
            let needsThumbnailGeneration = false;
            if (fileType === "video" || fileType === "clip") {
                // Check if thumbnail exists
                const thumbnailPath = getVideoThumbnailPath(fileSegments, entry.name);
                const thumbnailExists = await fileExists(thumbnailPath);
                if (thumbnailExists) {
                    thumbnail = getVideoThumbnailUrl(fileSegments, entry.name);
                } else {
                    // Use placeholder and mark for generation
                    thumbnail = VIDEO_PLACEHOLDER;
                    needsThumbnailGeneration = true;
                }
            }
            const fileItem = {
                id: fileId,
                name: entry.name,
                type: fileType,
                url,
                thumbnail,
                size: formatBytes(stats.size),
                date: stats.mtime.toISOString(),
                tags: segments,
                favorite: false,
                views: 0,
                category,
                needsThumbnailGeneration
            };
            files.push(fileItem);
            fileIds.push(fileId);
        }
    }
    const nodeId = segments.map(slugify).join("-");
    return {
        id: nodeId,
        name: segments[segments.length - 1] ?? "",
        path: segments.join("/"),
        fileIds,
        children
    };
};
async function GET() {
    try {
        const files = [];
        const counter = {
            value: 1
        };
        const folders = [];
        for (const definition of folderDefinitions){
            const dirPath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(marketingRoot, definition.name);
            if (await pathExists(dirPath)) {
                const node = await buildFolderNode(dirPath, [
                    definition.name
                ], definition.name, files, counter);
                folders.push(node);
            } else {
                folders.push({
                    id: definition.id,
                    name: definition.name,
                    path: definition.name,
                    fileIds: [],
                    children: []
                });
            }
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            folders,
            files
        }, {
            status: 200
        });
    } catch (error) {
        console.error("Error reading marketing folders", error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            folders: [],
            files: [],
            error: "Unable to read marketing assets."
        }, {
            status: 500
        });
    }
}
const isDirectoryEmpty = async (dirPath)=>{
    try {
        const entries = await __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["promises"].readdir(dirPath);
        return entries.length === 0;
    } catch  {
        return false;
    }
};
async function PATCH(req) {
    try {
        const body = await req.json();
        const rawCurrentPath = typeof body.currentPath === "string" ? body.currentPath : "";
        const rawNewName = typeof body.newName === "string" ? body.newName : "";
        const sanitizedNewName = sanitizeFolderName(rawNewName);
        if (!rawCurrentPath || !sanitizedNewName) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Current path and new folder name are required."
            }, {
                status: 400
            });
        }
        if (sanitizedNewName.includes("..")) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Invalid folder name."
            }, {
                status: 400
            });
        }
        const currentSegments = normalizeSegments(rawCurrentPath);
        if (currentSegments.length === 0 || currentSegments.some((segment)=>segment.includes(".."))) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Invalid current path."
            }, {
                status: 400
            });
        }
        const currentDir = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(marketingRoot, ...currentSegments);
        if (!isInsideMarketingRoot(currentDir)) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Current path is outside of marketing assets."
            }, {
                status: 400
            });
        }
        if (!await pathExists(currentDir)) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Folder does not exist."
            }, {
                status: 404
            });
        }
        const parentSegments = currentSegments.slice(0, -1);
        const parentDir = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(marketingRoot, ...parentSegments);
        if (!isInsideMarketingRoot(parentDir)) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Invalid parent folder."
            }, {
                status: 400
            });
        }
        const newDir = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(parentDir, sanitizedNewName);
        if (!isInsideMarketingRoot(newDir)) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Invalid target path."
            }, {
                status: 400
            });
        }
        if (await pathExists(newDir)) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Target folder already exists."
            }, {
                status: 409
            });
        }
        await __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["promises"].rename(currentDir, newDir);
        const parentPath = parentSegments.join("/");
        const newPath = parentPath ? `${parentPath}/${sanitizedNewName}` : sanitizedNewName;
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            path: newPath
        }, {
            status: 200
        });
    } catch (error) {
        console.error("Error renaming marketing folder", error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Unable to rename folder."
        }, {
            status: 500
        });
    }
}
async function POST(req) {
    try {
        const body = await req.json();
        const rawParentPath = typeof body.parentPath === "string" ? body.parentPath : "";
        const rawFolderName = typeof body.folderName === "string" ? body.folderName : "";
        const sanitizedFolderName = sanitizeFolderName(rawFolderName);
        if (!rawParentPath || !sanitizedFolderName) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Parent path and folder name are required."
            }, {
                status: 400
            });
        }
        if (sanitizedFolderName.includes("..")) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Invalid folder name."
            }, {
                status: 400
            });
        }
        const parentSegments = normalizeSegments(rawParentPath);
        if (parentSegments.length === 0 || parentSegments.some((segment)=>segment.includes(".."))) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Invalid parent path."
            }, {
                status: 400
            });
        }
        const parentDir = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(marketingRoot, ...parentSegments);
        if (!isInsideMarketingRoot(parentDir)) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Parent path is outside of the marketing tree."
            }, {
                status: 400
            });
        }
        if (!await pathExists(parentDir)) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Parent folder does not exist."
            }, {
                status: 404
            });
        }
        const newFolderPath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(parentDir, sanitizedFolderName);
        if (!isInsideMarketingRoot(newFolderPath)) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Invalid folder path."
            }, {
                status: 400
            });
        }
        if (await pathExists(newFolderPath)) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Folder already exists."
            }, {
                status: 409
            });
        }
        await __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["promises"].mkdir(newFolderPath);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            path: `${rawParentPath}/${sanitizedFolderName}`
        }, {
            status: 201
        });
    } catch (error) {
        console.error("Error creating marketing folder", error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Unable to create folder."
        }, {
            status: 500
        });
    }
}
async function DELETE(req) {
    try {
        const body = await req.json();
        const rawPath = typeof body.path === "string" ? body.path : "";
        const normalized = normalizeSegments(rawPath);
        if (normalized.length === 0) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Folder path is required."
            }, {
                status: 400
            });
        }
        if (normalized.some((segment)=>segment.includes(".."))) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Invalid folder path."
            }, {
                status: 400
            });
        }
        const targetDir = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(marketingRoot, ...normalized);
        if (!isInsideMarketingRoot(targetDir)) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Path is outside marketing assets."
            }, {
                status: 400
            });
        }
        if (!await pathExists(targetDir)) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Folder not found."
            }, {
                status: 404
            });
        }
        if (!await isDirectoryEmpty(targetDir)) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Folder must be empty before deleting."
            }, {
                status: 409
            });
        }
        await __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["promises"].rmdir(targetDir);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            path: normalized.join("/")
        }, {
            status: 200
        });
    } catch (error) {
        console.error("Error deleting marketing folder", error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Unable to delete folder."
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__8376a196._.js.map