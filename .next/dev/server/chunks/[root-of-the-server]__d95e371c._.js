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
"[project]/src/lib/db.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "db",
    ()=>db
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$prisma$2f$client$29$__ = __turbopack_context__.i("[externals]/@prisma/client [external] (@prisma/client, cjs, [project]/node_modules/@prisma/client)");
;
const globalForPrisma = globalThis;
const db = globalForPrisma.prisma ?? new __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$prisma$2f$client$29$__["PrismaClient"]({
    log: ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : [
        'error',
        'warn'
    ]
});
if ("TURBOPACK compile-time truthy", 1) globalForPrisma.prisma = db;
}),
"[project]/src/app/api/studio/analytics/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/db.ts [app-route] (ecmascript)");
;
;
const STUDIO_TOKEN = process.env.STUDIO_TOKEN ?? "vsp-studio-dev";
function isAuthorized(req) {
    const auth = req.headers.get("authorization");
    if (auth?.startsWith("Bearer ")) return auth.slice(7) === STUDIO_TOKEN;
    const cookie = req.headers.get("cookie") ?? "";
    return cookie.includes(`studio_token=${STUDIO_TOKEN}`);
}
async function GET(req) {
    if (!isAuthorized(req)) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Unauthorized"
        }, {
            status: 401
        });
    }
    const enquiries = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["db"].enquiry.findMany({
        orderBy: {
            createdAt: "asc"
        },
        select: {
            id: true,
            intent: true,
            status: true,
            createdAt: true,
            message: true
        }
    });
    // Enquiries over the last 12 weeks (weekly buckets)
    const now = new Date();
    const twelveWeeksAgo = new Date(now);
    twelveWeeksAgo.setDate(now.getDate() - 84); // 12 weeks
    const weekly = [];
    for(let i = 11; i >= 0; i--){
        const weekStart = new Date(now);
        weekStart.setDate(now.getDate() - i * 7 - now.getDay()); // align to Sunday
        weekStart.setHours(0, 0, 0, 0);
        const weekEnd = new Date(weekStart);
        weekEnd.setDate(weekStart.getDate() + 7);
        const count = enquiries.filter((e)=>{
            const d = new Date(e.createdAt);
            return d >= weekStart && d < weekEnd;
        }).length;
        weekly.push({
            week: weekStart.toISOString().split("T")[0],
            count,
            label: weekStart.toLocaleDateString("en-US", {
                month: "short",
                day: "numeric"
            })
        });
    }
    // Intent breakdown
    const intentBreakdown = [
        {
            intent: "lesson",
            label: "One-to-one Lessons",
            count: enquiries.filter((e)=>e.intent === "lesson").length,
            color: "#E0BC6A"
        },
        {
            intent: "booking",
            label: "Performance Booking",
            count: enquiries.filter((e)=>e.intent === "booking").length,
            color: "#C9AEF5"
        },
        {
            intent: "collaboration",
            label: "Collaboration",
            count: enquiries.filter((e)=>e.intent === "collaboration").length,
            color: "#78DCAA"
        }
    ];
    // Status breakdown
    const statusBreakdown = {
        new: enquiries.filter((e)=>e.status === "new").length,
        replied: enquiries.filter((e)=>e.status === "replied").length,
        archived: enquiries.filter((e)=>e.status === "archived").length
    };
    // Response rate (replied / total - archived)
    const actionable = enquiries.filter((e)=>e.status !== "archived").length;
    const responseRate = actionable > 0 ? Math.round(statusBreakdown.replied / actionable * 100) : 0;
    // Source breakdown (lesson-page vs other)
    const fromLessonPage = enquiries.filter((e)=>e.intent === "lesson" || e.message.toLowerCase().includes("lesson")).length;
    // Recent activity (last 5)
    const recent = enquiries.slice(-5).reverse().map((e)=>({
            id: e.id,
            intent: e.intent,
            status: e.status,
            createdAt: e.createdAt.toISOString()
        }));
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
        total: enquiries.length,
        weekly,
        intentBreakdown,
        statusBreakdown,
        responseRate,
        fromLessonPage,
        fromOther: enquiries.length - fromLessonPage,
        recent
    });
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__d95e371c._.js.map