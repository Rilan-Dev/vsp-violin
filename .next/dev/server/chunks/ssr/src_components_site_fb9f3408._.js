module.exports = [
"[project]/src/components/site/studio-login.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StudioLogin",
    ()=>StudioLogin,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/lock.js [app-ssr] (ecmascript) <export default as Lock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-ssr] (ecmascript) <export default as ArrowRight>");
"use client";
;
;
;
;
function StudioLogin() {
    const [token, setToken] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const handleSubmit = async (e)=>{
        e.preventDefault();
        if (!token.trim()) {
            setError("Enter the studio token.");
            return;
        }
        setLoading(true);
        setError(null);
        try {
            const res = await fetch("/api/studio/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    token: token.trim()
                })
            });
            if (res.ok) {
                router.refresh();
                return;
            }
            const data = await res.json().catch(()=>({}));
            setError(data.error ?? "Invalid token.");
        } catch  {
            setError("Network error. Try again.");
        } finally{
            setLoading(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#16102A",
            padding: "24px"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "vsp-card-gold",
            style: {
                maxWidth: "440px",
                width: "100%",
                padding: "40px 36px"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-3",
                    style: {
                        marginBottom: "24px"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"], {
                            size: 22,
                            "aria-hidden": true,
                            style: {
                                color: "#E0BC6A"
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/site/studio-login.tsx",
                            lineNumber: 64,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "vsp-eyebrow",
                            children: "Studio · owner only"
                        }, void 0, false, {
                            fileName: "[project]/src/components/site/studio-login.tsx",
                            lineNumber: 65,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/site/studio-login.tsx",
                    lineNumber: 63,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    style: {
                        fontFamily: "var(--font-marcellus), serif",
                        fontSize: "32px",
                        lineHeight: 1.1,
                        margin: 0,
                        color: "#F3EDDF"
                    },
                    children: "Suka Pavalan Studio"
                }, void 0, false, {
                    fileName: "[project]/src/components/site/studio-login.tsx",
                    lineNumber: 67,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    style: {
                        fontSize: "14.5px",
                        lineHeight: 1.6,
                        color: "rgba(243,237,223,0.72)",
                        margin: "12px 0 28px"
                    },
                    children: "The private dashboard for managing enquiries and lessons. Not linked from the public site."
                }, void 0, false, {
                    fileName: "[project]/src/components/site/studio-login.tsx",
                    lineNumber: 78,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: handleSubmit,
                    className: "flex flex-col gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: "flex flex-col gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        fontFamily: "var(--font-geist-mono), monospace",
                                        fontSize: "10.5px",
                                        letterSpacing: "0.18em",
                                        textTransform: "uppercase",
                                        color: "rgba(243,237,223,0.62)"
                                    },
                                    children: "Studio token"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/site/studio-login.tsx",
                                    lineNumber: 91,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "password",
                                    value: token,
                                    onChange: (e)=>setToken(e.target.value),
                                    placeholder: "Enter the shared token",
                                    autoFocus: true,
                                    "aria-label": "Studio token",
                                    style: {
                                        padding: "12px 16px",
                                        background: "rgba(22,16,42,0.6)",
                                        border: "1px solid rgba(243,237,223,0.2)",
                                        color: "#F3EDDF",
                                        fontFamily: "var(--font-instrument-sans)",
                                        fontSize: "14.5px",
                                        borderRadius: 0
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/site/studio-login.tsx",
                                    lineNumber: 102,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/site/studio-login.tsx",
                            lineNumber: 90,
                            columnNumber: 11
                        }, this),
                        error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            role: "status",
                            "aria-live": "polite",
                            style: {
                                padding: "10px 14px",
                                border: "1px solid #E08C50",
                                background: "rgba(224,140,80,0.08)",
                                color: "#F2C5A5",
                                fontSize: "13px"
                            },
                            children: error
                        }, void 0, false, {
                            fileName: "[project]/src/components/site/studio-login.tsx",
                            lineNumber: 121,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "submit",
                            disabled: loading,
                            className: "vsp-cta-gold flex items-center justify-center gap-2",
                            style: {
                                padding: "13px 24px",
                                background: loading ? "rgba(224,188,106,0.45)" : "#E0BC6A",
                                color: "#1B1233",
                                fontFamily: "var(--font-marcellus), serif",
                                fontSize: "14px",
                                letterSpacing: "0.04em",
                                border: "none",
                                cursor: loading ? "wait" : "pointer",
                                borderRadius: 0
                            },
                            children: [
                                loading ? "Entering…" : "Enter Studio",
                                !loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                    size: 16,
                                    "aria-hidden": true
                                }, void 0, false, {
                                    fileName: "[project]/src/components/site/studio-login.tsx",
                                    lineNumber: 152,
                                    columnNumber: 26
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/site/studio-login.tsx",
                            lineNumber: 135,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/site/studio-login.tsx",
                    lineNumber: 89,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    style: {
                        marginTop: "24px",
                        fontSize: "11.5px",
                        color: "rgba(243,237,223,0.5)",
                        fontFamily: "var(--font-geist-mono), monospace",
                        letterSpacing: "0.04em"
                    },
                    children: "Dev token: vsp-studio-dev"
                }, void 0, false, {
                    fileName: "[project]/src/components/site/studio-login.tsx",
                    lineNumber: 155,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/site/studio-login.tsx",
            lineNumber: 59,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/site/studio-login.tsx",
        lineNumber: 49,
        columnNumber: 5
    }, this);
}
const __TURBOPACK__default__export__ = StudioLogin;
}),
"[project]/src/components/site/studio-dashboard.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StudioDashboard",
    ()=>StudioDashboard,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mail.js [app-ssr] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-ssr] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$archive$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Archive$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/archive.js [app-ssr] (ecmascript) <export default as Archive>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-ssr] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/log-out.js [app-ssr] (ecmascript) <export default as LogOut>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$inbox$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Inbox$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/inbox.js [app-ssr] (ecmascript) <export default as Inbox>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/book-open.js [app-ssr] (ecmascript) <export default as BookOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-ssr] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-ssr] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2d$line$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__PencilLine$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pencil-line.js [app-ssr] (ecmascript) <export default as PencilLine>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/external-link.js [app-ssr] (ecmascript) <export default as ExternalLink>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2d$tree$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FolderTree$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/folder-tree.js [app-ssr] (ecmascript) <export default as FolderTree>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-ssr] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$tags$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Tags$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/tags.js [app-ssr] (ecmascript) <export default as Tags>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chart-column.js [app-ssr] (ecmascript) <export default as BarChart3>");
"use client";
;
;
;
;
const INTENT_LABELS = {
    lesson: "One-to-one Lessons",
    booking: "Performance Booking",
    collaboration: "Collaboration"
};
const INTENT_COLORS = {
    lesson: "#E0BC6A",
    booking: "#C9AEF5",
    collaboration: "#78DCAA"
};
function StudioDashboard({ lessons }) {
    const [data, setData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("enquiries");
    const [selectedEnquiry, setSelectedEnquiry] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [filter, setFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("all");
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const fetchData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        try {
            const res = await fetch("/api/studio/enquiries");
            if (res.status === 401) {
                router.refresh();
                return;
            }
            if (!res.ok) throw new Error("Failed to load");
            const json = await res.json();
            // Merge server-side lessons with enquiry data
            const lessonRows = lessons.map((l)=>({
                    ...l,
                    hasNotation: Boolean(l.raga || l.titleTamil),
                    hasVideo: true
                }));
            const lessonsByCategory = Object.entries(lessonRows.reduce((acc, l)=>{
                acc[l.category] = (acc[l.category] ?? 0) + 1;
                return acc;
            }, {})).map(([category, count])=>({
                    category,
                    count
                }));
            setData({
                enquiries: json.enquiries,
                counts: json.counts,
                lessons: lessonRows,
                lessonsByCategory,
                sourceBreakdown: {
                    fromLessonPage: json.enquiries.filter((e)=>e.message.toLowerCase().includes("lesson") || e.intent === "lesson").length,
                    fromOther: json.enquiries.filter((e)=>!e.message.toLowerCase().includes("lesson") && e.intent !== "lesson").length
                }
            });
        } catch (e) {
            setError(e instanceof Error ? e.message : "Unknown error");
        } finally{
            setLoading(false);
        }
    }, [
        lessons,
        router
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        fetchData();
    }, [
        fetchData
    ]);
    const updateStatus = async (id, status)=>{
        // Optimistic update
        setData((prev)=>{
            if (!prev) return prev;
            const enquiries = prev.enquiries.map((e)=>e.id === id ? {
                    ...e,
                    status
                } : e);
            const counts = {
                total: enquiries.length,
                new: enquiries.filter((e)=>e.status === "new").length,
                replied: enquiries.filter((e)=>e.status === "replied").length,
                archived: enquiries.filter((e)=>e.status === "archived").length
            };
            return {
                ...prev,
                enquiries,
                counts
            };
        });
        setSelectedEnquiry((prev)=>prev?.id === id ? {
                ...prev,
                status
            } : prev);
        await fetch(`/api/studio/enquiries/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                status
            })
        });
    };
    const deleteEnquiry = async (id)=>{
        setData((prev)=>{
            if (!prev) return prev;
            const enquiries = prev.enquiries.filter((e)=>e.id !== id);
            const counts = {
                total: enquiries.length,
                new: enquiries.filter((e)=>e.status === "new").length,
                replied: enquiries.filter((e)=>e.status === "replied").length,
                archived: enquiries.filter((e)=>e.status === "archived").length
            };
            return {
                ...prev,
                enquiries,
                counts
            };
        });
        setSelectedEnquiry(null);
        await fetch(`/api/studio/enquiries/${id}`, {
            method: "DELETE"
        });
    };
    const logout = async ()=>{
        await fetch("/api/studio/logout", {
            method: "POST"
        });
        router.refresh();
    };
    const filteredEnquiries = data ? filter === "all" ? data.enquiries : data.enquiries.filter((e)=>e.status === filter) : [];
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                minHeight: "100vh",
                background: "#16102A",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: {
                    fontFamily: "var(--font-geist-mono), monospace",
                    fontSize: "12px",
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "rgba(243,237,223,0.5)"
                },
                children: "Loading studio…"
            }, void 0, false, {
                fileName: "[project]/src/components/site/studio-dashboard.tsx",
                lineNumber: 173,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/site/studio-dashboard.tsx",
            lineNumber: 172,
            columnNumber: 7
        }, this);
    }
    if (error || !data) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                minHeight: "100vh",
                background: "#16102A",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#F2C5A5"
            },
            children: [
                "Error: ",
                error
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/site/studio-dashboard.tsx",
            lineNumber: 182,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            minHeight: "100vh",
            background: "#16102A",
            color: "#F3EDDF"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                style: {
                    position: "sticky",
                    top: 0,
                    zIndex: 40,
                    background: "rgba(22,16,42,0.95)",
                    backdropFilter: "blur(22px)",
                    WebkitBackdropFilter: "blur(22px)",
                    borderBottom: "1px solid rgba(224,188,106,0.24)"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between",
                    style: {
                        padding: "14px 32px",
                        gap: "24px"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        fontFamily: "var(--font-marcellus), serif",
                                        fontSize: "20px",
                                        letterSpacing: "0.06em",
                                        color: "#E0BC6A"
                                    },
                                    children: "SUKA PAVALAN"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/site/studio-dashboard.tsx",
                                    lineNumber: 204,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        fontFamily: "var(--font-geist-mono), monospace",
                                        fontSize: "10.5px",
                                        letterSpacing: "0.2em",
                                        textTransform: "uppercase",
                                        color: "rgba(243,237,223,0.5)"
                                    },
                                    children: "Studio"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/site/studio-dashboard.tsx",
                                    lineNumber: 207,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/site/studio-dashboard.tsx",
                            lineNumber: 203,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setActiveTab("enquiries"),
                                    "aria-pressed": activeTab === "enquiries",
                                    className: "flex items-center gap-2 transition-colors",
                                    style: {
                                        padding: "8px 14px",
                                        border: `1px solid ${activeTab === "enquiries" ? "#E0BC6A" : "rgba(243,237,223,0.2)"}`,
                                        background: activeTab === "enquiries" ? "#E0BC6A" : "transparent",
                                        color: activeTab === "enquiries" ? "#1B1233" : "rgba(243,237,223,0.82)",
                                        fontFamily: "var(--font-geist-mono), monospace",
                                        fontSize: "11px",
                                        letterSpacing: "0.12em",
                                        textTransform: "uppercase",
                                        cursor: "pointer",
                                        borderRadius: 0
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$inbox$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Inbox$3e$__["Inbox"], {
                                            size: 13,
                                            "aria-hidden": true
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/site/studio-dashboard.tsx",
                                            lineNumber: 229,
                                            columnNumber: 15
                                        }, this),
                                        "Enquiries",
                                        data.counts.new > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                marginLeft: "4px",
                                                padding: "1px 7px",
                                                background: activeTab === "enquiries" ? "#1B1233" : "#E0BC6A",
                                                color: activeTab === "enquiries" ? "#E0BC6A" : "#1B1233",
                                                fontSize: "10px",
                                                fontWeight: 600
                                            },
                                            children: data.counts.new
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/site/studio-dashboard.tsx",
                                            lineNumber: 232,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/site/studio-dashboard.tsx",
                                    lineNumber: 212,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setActiveTab("lessons"),
                                    "aria-pressed": activeTab === "lessons",
                                    className: "flex items-center gap-2 transition-colors",
                                    style: {
                                        padding: "8px 14px",
                                        border: `1px solid ${activeTab === "lessons" ? "#E0BC6A" : "rgba(243,237,223,0.2)"}`,
                                        background: activeTab === "lessons" ? "#E0BC6A" : "transparent",
                                        color: activeTab === "lessons" ? "#1B1233" : "rgba(243,237,223,0.82)",
                                        fontFamily: "var(--font-geist-mono), monospace",
                                        fontSize: "11px",
                                        letterSpacing: "0.12em",
                                        textTransform: "uppercase",
                                        cursor: "pointer",
                                        borderRadius: 0
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"], {
                                            size: 13,
                                            "aria-hidden": true
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/site/studio-dashboard.tsx",
                                            lineNumber: 263,
                                            columnNumber: 15
                                        }, this),
                                        "Lessons (",
                                        data.lessons.length,
                                        ")"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/site/studio-dashboard.tsx",
                                    lineNumber: 246,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setActiveTab("categories"),
                                    "aria-pressed": activeTab === "categories",
                                    className: "flex items-center gap-2 transition-colors",
                                    style: {
                                        padding: "8px 14px",
                                        border: `1px solid ${activeTab === "categories" ? "#E0BC6A" : "rgba(243,237,223,0.2)"}`,
                                        background: activeTab === "categories" ? "#E0BC6A" : "transparent",
                                        color: activeTab === "categories" ? "#1B1233" : "rgba(243,237,223,0.82)",
                                        fontFamily: "var(--font-geist-mono), monospace",
                                        fontSize: "11px",
                                        letterSpacing: "0.12em",
                                        textTransform: "uppercase",
                                        cursor: "pointer",
                                        borderRadius: 0
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2d$tree$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FolderTree$3e$__["FolderTree"], {
                                            size: 13,
                                            "aria-hidden": true
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/site/studio-dashboard.tsx",
                                            lineNumber: 283,
                                            columnNumber: 15
                                        }, this),
                                        "Categories"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/site/studio-dashboard.tsx",
                                    lineNumber: 266,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setActiveTab("analytics"),
                                    "aria-pressed": activeTab === "analytics",
                                    className: "flex items-center gap-2 transition-colors",
                                    style: {
                                        padding: "8px 14px",
                                        border: `1px solid ${activeTab === "analytics" ? "#E0BC6A" : "rgba(243,237,223,0.2)"}`,
                                        background: activeTab === "analytics" ? "#E0BC6A" : "transparent",
                                        color: activeTab === "analytics" ? "#1B1233" : "rgba(243,237,223,0.82)",
                                        fontFamily: "var(--font-geist-mono), monospace",
                                        fontSize: "11px",
                                        letterSpacing: "0.12em",
                                        textTransform: "uppercase",
                                        cursor: "pointer",
                                        borderRadius: 0
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__["BarChart3"], {
                                            size: 13,
                                            "aria-hidden": true
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/site/studio-dashboard.tsx",
                                            lineNumber: 303,
                                            columnNumber: 15
                                        }, this),
                                        "Analytics"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/site/studio-dashboard.tsx",
                                    lineNumber: 286,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: logout,
                                    className: "flex items-center gap-2 transition-colors",
                                    style: {
                                        padding: "8px 14px",
                                        border: "1px solid rgba(243,237,223,0.2)",
                                        background: "transparent",
                                        color: "rgba(243,237,223,0.62)",
                                        fontFamily: "var(--font-geist-mono), monospace",
                                        fontSize: "11px",
                                        letterSpacing: "0.12em",
                                        textTransform: "uppercase",
                                        cursor: "pointer",
                                        borderRadius: 0
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__["LogOut"], {
                                            size: 13,
                                            "aria-hidden": true
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/site/studio-dashboard.tsx",
                                            lineNumber: 322,
                                            columnNumber: 15
                                        }, this),
                                        "Exit"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/site/studio-dashboard.tsx",
                                    lineNumber: 306,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/site/studio-dashboard.tsx",
                            lineNumber: 211,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/site/studio-dashboard.tsx",
                    lineNumber: 202,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/site/studio-dashboard.tsx",
                lineNumber: 191,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    maxWidth: "1440px",
                    margin: "0 auto",
                    padding: "32px"
                },
                children: activeTab === "enquiries" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid gap-4 mb-8 grid-cols-2 md:grid-cols-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(StatCard, {
                                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                        size: 18
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/site/studio-dashboard.tsx",
                                        lineNumber: 334,
                                        columnNumber: 31
                                    }, void 0),
                                    label: "Total",
                                    value: data.counts.total,
                                    color: "#E0BC6A"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/site/studio-dashboard.tsx",
                                    lineNumber: 334,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(StatCard, {
                                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                        size: 18
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/site/studio-dashboard.tsx",
                                        lineNumber: 335,
                                        columnNumber: 31
                                    }, void 0),
                                    label: "New",
                                    value: data.counts.new,
                                    color: "#78DCAA"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/site/studio-dashboard.tsx",
                                    lineNumber: 335,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(StatCard, {
                                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                        size: 18
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/site/studio-dashboard.tsx",
                                        lineNumber: 336,
                                        columnNumber: 31
                                    }, void 0),
                                    label: "Replied",
                                    value: data.counts.replied,
                                    color: "#C9AEF5"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/site/studio-dashboard.tsx",
                                    lineNumber: 336,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(StatCard, {
                                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$archive$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Archive$3e$__["Archive"], {
                                        size: 18
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/site/studio-dashboard.tsx",
                                        lineNumber: 337,
                                        columnNumber: 31
                                    }, void 0),
                                    label: "Archived",
                                    value: data.counts.archived,
                                    color: "rgba(243,237,223,0.5)"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/site/studio-dashboard.tsx",
                                    lineNumber: 337,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/site/studio-dashboard.tsx",
                            lineNumber: 333,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "vsp-card-neutral mb-8",
                            style: {
                                padding: "20px 24px"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3 mb-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                                            size: 16,
                                            "aria-hidden": true,
                                            style: {
                                                color: "#E0BC6A"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/site/studio-dashboard.tsx",
                                            lineNumber: 343,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "vsp-eyebrow",
                                            children: "Source breakdown"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/site/studio-dashboard.tsx",
                                            lineNumber: 344,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/site/studio-dashboard.tsx",
                                    lineNumber: 342,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        fontSize: "14px",
                                        color: "rgba(243,237,223,0.82)",
                                        lineHeight: 1.6
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                color: "#E0BC6A",
                                                fontFamily: "var(--font-marcellus), serif",
                                                fontSize: "20px"
                                            },
                                            children: data.sourceBreakdown.fromLessonPage
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/site/studio-dashboard.tsx",
                                            lineNumber: 347,
                                            columnNumber: 17
                                        }, this),
                                        " ",
                                        "of ",
                                        data.counts.total,
                                        " enquiries came through a lesson-related intent — the free library is the funnel working as designed."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/site/studio-dashboard.tsx",
                                    lineNumber: 346,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/site/studio-dashboard.tsx",
                            lineNumber: 341,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2 mb-6 flex-wrap",
                            children: [
                                "all",
                                "new",
                                "replied",
                                "archived"
                            ].map((f)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setFilter(f),
                                    "aria-pressed": filter === f,
                                    className: "transition-colors",
                                    style: {
                                        padding: "7px 14px",
                                        border: `1px solid ${filter === f ? "#E0BC6A" : "rgba(243,237,223,0.2)"}`,
                                        background: filter === f ? "#E0BC6A" : "transparent",
                                        color: filter === f ? "#1B1233" : "rgba(243,237,223,0.82)",
                                        fontFamily: "var(--font-geist-mono), monospace",
                                        fontSize: "11px",
                                        letterSpacing: "0.12em",
                                        textTransform: "uppercase",
                                        cursor: "pointer",
                                        borderRadius: 0
                                    },
                                    children: f === "all" ? "All" : f
                                }, f, false, {
                                    fileName: "[project]/src/components/site/studio-dashboard.tsx",
                                    lineNumber: 358,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/site/studio-dashboard.tsx",
                            lineNumber: 356,
                            columnNumber: 13
                        }, this),
                        filteredEnquiries.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "vsp-card-neutral",
                            style: {
                                padding: "48px",
                                textAlign: "center"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$inbox$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Inbox$3e$__["Inbox"], {
                                    size: 32,
                                    "aria-hidden": true,
                                    style: {
                                        color: "rgba(243,237,223,0.3)",
                                        margin: "0 auto 12px"
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/site/studio-dashboard.tsx",
                                    lineNumber: 384,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        fontFamily: "var(--font-marcellus), serif",
                                        fontSize: "20px",
                                        color: "rgba(243,237,223,0.62)"
                                    },
                                    children: [
                                        "No enquiries",
                                        filter !== "all" ? ` with status "${filter}"` : "",
                                        " yet."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/site/studio-dashboard.tsx",
                                    lineNumber: 385,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/site/studio-dashboard.tsx",
                            lineNumber: 383,
                            columnNumber: 15
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid gap-4 grid-cols-1 lg:grid-cols-[1fr_1.4fr]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "vsp-scroll flex flex-col gap-2",
                                    style: {
                                        maxHeight: "70vh",
                                        overflowY: "auto",
                                        paddingRight: "8px"
                                    },
                                    children: filteredEnquiries.map((e)=>{
                                        const isSelected = selectedEnquiry?.id === e.id;
                                        const intentColor = INTENT_COLORS[e.intent] ?? "#E0BC6A";
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setSelectedEnquiry(e),
                                            className: "text-left transition-colors",
                                            style: {
                                                padding: "16px 18px",
                                                border: `1px solid ${isSelected ? "#E0BC6A" : e.status === "new" ? "rgba(224,188,106,0.34)" : "rgba(243,237,223,0.16)"}`,
                                                background: isSelected ? "rgba(224,188,106,0.08)" : "rgba(243,237,223,0.035)",
                                                cursor: "pointer",
                                                borderRadius: 0
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between gap-2 mb-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            style: {
                                                                fontFamily: "var(--font-marcellus), serif",
                                                                fontSize: "16px",
                                                                color: "#F3EDDF"
                                                            },
                                                            children: e.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/site/studio-dashboard.tsx",
                                                            lineNumber: 410,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            style: {
                                                                fontSize: "9.5px",
                                                                letterSpacing: "0.14em",
                                                                textTransform: "uppercase",
                                                                padding: "2px 8px",
                                                                border: `1px solid ${intentColor}`,
                                                                color: intentColor,
                                                                fontFamily: "var(--font-geist-mono), monospace"
                                                            },
                                                            children: INTENT_LABELS[e.intent] ?? e.intent
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/site/studio-dashboard.tsx",
                                                            lineNumber: 413,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/site/studio-dashboard.tsx",
                                                    lineNumber: 409,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    style: {
                                                        fontSize: "12.5px",
                                                        color: "rgba(243,237,223,0.62)",
                                                        margin: 0,
                                                        overflow: "hidden",
                                                        textOverflow: "ellipsis",
                                                        whiteSpace: "nowrap"
                                                    },
                                                    children: [
                                                        e.message.slice(0, 80),
                                                        "…"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/site/studio-dashboard.tsx",
                                                    lineNumber: 427,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between mt-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            style: {
                                                                fontFamily: "var(--font-geist-mono), monospace",
                                                                fontSize: "10px",
                                                                letterSpacing: "0.12em",
                                                                textTransform: "uppercase",
                                                                color: "rgba(243,237,223,0.5)"
                                                            },
                                                            children: new Date(e.createdAt).toLocaleDateString("en-US", {
                                                                month: "short",
                                                                day: "numeric",
                                                                year: "numeric"
                                                            })
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/site/studio-dashboard.tsx",
                                                            lineNumber: 431,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            style: {
                                                                fontSize: "10px",
                                                                color: e.status === "new" ? "#78DCAA" : e.status === "replied" ? "#C9AEF5" : "rgba(243,237,223,0.5)",
                                                                fontFamily: "var(--font-geist-mono), monospace",
                                                                letterSpacing: "0.08em",
                                                                textTransform: "uppercase"
                                                            },
                                                            children: e.status
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/site/studio-dashboard.tsx",
                                                            lineNumber: 434,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/site/studio-dashboard.tsx",
                                                    lineNumber: 430,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, e.id, true, {
                                            fileName: "[project]/src/components/site/studio-dashboard.tsx",
                                            lineNumber: 397,
                                            columnNumber: 23
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/src/components/site/studio-dashboard.tsx",
                                    lineNumber: 392,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: selectedEnquiry ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "vsp-card-neutral",
                                        style: {
                                            padding: "28px",
                                            position: "sticky",
                                            top: "96px"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-start justify-between gap-3 mb-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                                style: {
                                                                    fontFamily: "var(--font-marcellus), serif",
                                                                    fontSize: "26px",
                                                                    margin: 0,
                                                                    color: "#F3EDDF"
                                                                },
                                                                children: selectedEnquiry.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/site/studio-dashboard.tsx",
                                                                lineNumber: 449,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                style: {
                                                                    fontSize: "13px",
                                                                    color: "rgba(243,237,223,0.62)",
                                                                    margin: "4px 0 0",
                                                                    fontFamily: "var(--font-geist-mono), monospace",
                                                                    letterSpacing: "0.04em"
                                                                },
                                                                children: new Date(selectedEnquiry.createdAt).toLocaleString("en-US", {
                                                                    dateStyle: "full",
                                                                    timeStyle: "short"
                                                                })
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/site/studio-dashboard.tsx",
                                                                lineNumber: 452,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/site/studio-dashboard.tsx",
                                                        lineNumber: 448,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            fontSize: "10px",
                                                            letterSpacing: "0.14em",
                                                            textTransform: "uppercase",
                                                            padding: "4px 10px",
                                                            border: `1px solid ${INTENT_COLORS[selectedEnquiry.intent] ?? "#E0BC6A"}`,
                                                            color: INTENT_COLORS[selectedEnquiry.intent] ?? "#E0BC6A",
                                                            fontFamily: "var(--font-geist-mono), monospace"
                                                        },
                                                        children: INTENT_LABELS[selectedEnquiry.intent] ?? selectedEnquiry.intent
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/site/studio-dashboard.tsx",
                                                        lineNumber: 456,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/site/studio-dashboard.tsx",
                                                lineNumber: 447,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dl", {
                                                className: "grid gap-px mb-5",
                                                style: {
                                                    gridTemplateColumns: "1fr 1fr",
                                                    background: "rgba(243,237,223,0.16)"
                                                },
                                                children: [
                                                    {
                                                        label: "Email",
                                                        value: selectedEnquiry.email,
                                                        href: `mailto:${selectedEnquiry.email}`
                                                    },
                                                    {
                                                        label: "Phone",
                                                        value: selectedEnquiry.phone ?? "—",
                                                        href: selectedEnquiry.phone ? `tel:${selectedEnquiry.phone}` : undefined
                                                    },
                                                    {
                                                        label: "City / TZ",
                                                        value: selectedEnquiry.city ?? "—"
                                                    },
                                                    {
                                                        label: "Who for",
                                                        value: selectedEnquiry.whoFor ?? "—"
                                                    },
                                                    {
                                                        label: "Instrument",
                                                        value: selectedEnquiry.instrument ?? "—"
                                                    },
                                                    {
                                                        label: "Level",
                                                        value: selectedEnquiry.level ?? "—"
                                                    }
                                                ].map((row)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            background: "#1A1234",
                                                            padding: "12px 14px"
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                                                style: {
                                                                    fontFamily: "var(--font-geist-mono), monospace",
                                                                    fontSize: "9.5px",
                                                                    letterSpacing: "0.18em",
                                                                    textTransform: "uppercase",
                                                                    color: "rgba(243,237,223,0.5)",
                                                                    marginBottom: "4px"
                                                                },
                                                                children: row.label
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/site/studio-dashboard.tsx",
                                                                lineNumber: 481,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                                                style: {
                                                                    fontSize: "14px",
                                                                    color: "#F3EDDF",
                                                                    margin: 0
                                                                },
                                                                children: row.href ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                    href: row.href,
                                                                    style: {
                                                                        color: "#E0BC6A"
                                                                    },
                                                                    children: row.value
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/site/studio-dashboard.tsx",
                                                                    lineNumber: 486,
                                                                    columnNumber: 33
                                                                }, this) : row.value
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/site/studio-dashboard.tsx",
                                                                lineNumber: 484,
                                                                columnNumber: 29
                                                            }, this)
                                                        ]
                                                    }, row.label, true, {
                                                        fileName: "[project]/src/components/site/studio-dashboard.tsx",
                                                        lineNumber: 480,
                                                        columnNumber: 27
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/site/studio-dashboard.tsx",
                                                lineNumber: 471,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    marginBottom: "20px"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "vsp-eyebrow",
                                                        style: {
                                                            display: "block",
                                                            marginBottom: "8px"
                                                        },
                                                        children: "Message"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/site/studio-dashboard.tsx",
                                                        lineNumber: 496,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        style: {
                                                            fontSize: "14.5px",
                                                            lineHeight: 1.65,
                                                            color: "rgba(243,237,223,0.88)",
                                                            whiteSpace: "pre-wrap"
                                                        },
                                                        children: selectedEnquiry.message
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/site/studio-dashboard.tsx",
                                                        lineNumber: 497,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/site/studio-dashboard.tsx",
                                                lineNumber: 495,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: `mailto:${selectedEnquiry.email}?subject=Re: Your enquiry to Suka Pavalan&body=Dear ${selectedEnquiry.name},%0D%0A%0D%0AThank you for your enquiry.%0D%0A%0D%0A`,
                                                className: "vsp-cta-gold flex items-center justify-center gap-2 mb-4",
                                                style: {
                                                    padding: "12px 20px",
                                                    background: "#E0BC6A",
                                                    color: "#1B1233",
                                                    fontFamily: "var(--font-marcellus), serif",
                                                    fontSize: "14px",
                                                    letterSpacing: "0.04em",
                                                    textDecoration: "none",
                                                    borderRadius: 0
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                                        size: 15,
                                                        "aria-hidden": true
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/site/studio-dashboard.tsx",
                                                        lineNumber: 517,
                                                        columnNumber: 25
                                                    }, this),
                                                    "Reply by email"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/site/studio-dashboard.tsx",
                                                lineNumber: 503,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2 flex-wrap",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "vsp-eyebrow",
                                                        style: {
                                                            marginRight: "8px"
                                                        },
                                                        children: "Status"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/site/studio-dashboard.tsx",
                                                        lineNumber: 523,
                                                        columnNumber: 25
                                                    }, this),
                                                    [
                                                        {
                                                            value: "new",
                                                            label: "New",
                                                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                                size: 13
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/site/studio-dashboard.tsx",
                                                                lineNumber: 525,
                                                                columnNumber: 63
                                                            }, this)
                                                        },
                                                        {
                                                            value: "replied",
                                                            label: "Replied",
                                                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                                size: 13
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/site/studio-dashboard.tsx",
                                                                lineNumber: 526,
                                                                columnNumber: 71
                                                            }, this)
                                                        },
                                                        {
                                                            value: "archived",
                                                            label: "Archive",
                                                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$archive$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Archive$3e$__["Archive"], {
                                                                size: 13
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/site/studio-dashboard.tsx",
                                                                lineNumber: 527,
                                                                columnNumber: 72
                                                            }, this)
                                                        }
                                                    ].map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>updateStatus(selectedEnquiry.id, s.value),
                                                            "aria-pressed": selectedEnquiry.status === s.value,
                                                            className: "flex items-center gap-1.5 transition-colors",
                                                            style: {
                                                                padding: "7px 12px",
                                                                border: `1px solid ${selectedEnquiry.status === s.value ? "#E0BC6A" : "rgba(243,237,223,0.2)"}`,
                                                                background: selectedEnquiry.status === s.value ? "#E0BC6A" : "transparent",
                                                                color: selectedEnquiry.status === s.value ? "#1B1233" : "rgba(243,237,223,0.82)",
                                                                fontFamily: "var(--font-geist-mono), monospace",
                                                                fontSize: "10.5px",
                                                                letterSpacing: "0.12em",
                                                                textTransform: "uppercase",
                                                                cursor: "pointer",
                                                                borderRadius: 0
                                                            },
                                                            children: [
                                                                s.icon,
                                                                s.label
                                                            ]
                                                        }, s.value, true, {
                                                            fileName: "[project]/src/components/site/studio-dashboard.tsx",
                                                            lineNumber: 529,
                                                            columnNumber: 27
                                                        }, this)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>deleteEnquiry(selectedEnquiry.id),
                                                        className: "flex items-center gap-1.5 transition-colors",
                                                        style: {
                                                            padding: "7px 12px",
                                                            border: "1px solid #E08C50",
                                                            background: "transparent",
                                                            color: "#E08C50",
                                                            fontFamily: "var(--font-geist-mono), monospace",
                                                            fontSize: "10.5px",
                                                            letterSpacing: "0.12em",
                                                            textTransform: "uppercase",
                                                            cursor: "pointer",
                                                            borderRadius: 0,
                                                            marginLeft: "auto"
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                size: 13
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/site/studio-dashboard.tsx",
                                                                lineNumber: 568,
                                                                columnNumber: 27
                                                            }, this),
                                                            "Delete"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/site/studio-dashboard.tsx",
                                                        lineNumber: 551,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/site/studio-dashboard.tsx",
                                                lineNumber: 522,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/site/studio-dashboard.tsx",
                                        lineNumber: 446,
                                        columnNumber: 21
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "vsp-card-neutral",
                                        style: {
                                            padding: "64px 48px",
                                            textAlign: "center"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                                size: 32,
                                                "aria-hidden": true,
                                                style: {
                                                    color: "rgba(243,237,223,0.3)",
                                                    margin: "0 auto 16px"
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/site/studio-dashboard.tsx",
                                                lineNumber: 575,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                style: {
                                                    fontFamily: "var(--font-marcellus), serif",
                                                    fontSize: "18px",
                                                    color: "rgba(243,237,223,0.62)"
                                                },
                                                children: "Select an enquiry to read it."
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/site/studio-dashboard.tsx",
                                                lineNumber: 576,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/site/studio-dashboard.tsx",
                                        lineNumber: 574,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/site/studio-dashboard.tsx",
                                    lineNumber: 444,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/site/studio-dashboard.tsx",
                            lineNumber: 390,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true) : activeTab === "lessons" ? /* Lessons tab */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid gap-4 mb-8 grid-cols-2 md:grid-cols-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(StatCard, {
                                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"], {
                                        size: 18
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/site/studio-dashboard.tsx",
                                        lineNumber: 589,
                                        columnNumber: 31
                                    }, void 0),
                                    label: "Total lessons",
                                    value: data.lessons.length,
                                    color: "#E0BC6A"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/site/studio-dashboard.tsx",
                                    lineNumber: 589,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(StatCard, {
                                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"], {
                                        size: 18
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/site/studio-dashboard.tsx",
                                        lineNumber: 590,
                                        columnNumber: 31
                                    }, void 0),
                                    label: "Categories",
                                    value: data.lessonsByCategory.length,
                                    color: "#C9AEF5"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/site/studio-dashboard.tsx",
                                    lineNumber: 590,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(StatCard, {
                                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"], {
                                        size: 18
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/site/studio-dashboard.tsx",
                                        lineNumber: 591,
                                        columnNumber: 31
                                    }, void 0),
                                    label: "With notation",
                                    value: data.lessons.filter((l)=>l.hasNotation).length,
                                    color: "#78DCAA"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/site/studio-dashboard.tsx",
                                    lineNumber: 591,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/site/studio-dashboard.tsx",
                            lineNumber: 588,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between gap-3 flex-wrap mb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    style: {
                                        fontSize: "12.5px",
                                        color: "rgba(243,237,223,0.5)"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2d$line$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__PencilLine$3e$__["PencilLine"], {
                                            size: 13,
                                            "aria-hidden": true,
                                            style: {
                                                color: "#E0BC6A"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/site/studio-dashboard.tsx",
                                            lineNumber: 597,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                fontFamily: "var(--font-geist-mono), monospace",
                                                letterSpacing: "0.06em",
                                                textTransform: "uppercase"
                                            },
                                            children: "Click any field to edit · changes save instantly"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/site/studio-dashboard.tsx",
                                            lineNumber: 598,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/site/studio-dashboard.tsx",
                                    lineNumber: 596,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NewLessonButton, {
                                    categories: data.lessonsByCategory.map((c)=>({
                                            slug: c.category,
                                            name: c.category.replace(/-/g, " ")
                                        })),
                                    onCreated: (lesson)=>{
                                        setData((prev)=>{
                                            if (!prev) return prev;
                                            const lessons = [
                                                ...prev.lessons,
                                                {
                                                    ...lesson,
                                                    hasNotation: Boolean(lesson.raga || lesson.titleTamil),
                                                    hasVideo: true
                                                }
                                            ];
                                            const lessonsByCategory = Object.entries(lessons.reduce((acc, l)=>{
                                                acc[l.category] = (acc[l.category] ?? 0) + 1;
                                                return acc;
                                            }, {})).map(([category, count])=>({
                                                    category,
                                                    count
                                                }));
                                            return {
                                                ...prev,
                                                lessons,
                                                lessonsByCategory
                                            };
                                        });
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/site/studio-dashboard.tsx",
                                    lineNumber: 602,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/site/studio-dashboard.tsx",
                            lineNumber: 595,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "vsp-card-neutral",
                            style: {
                                padding: "0",
                                overflow: "hidden"
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "vsp-scroll",
                                style: {
                                    overflowX: "auto"
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                    style: {
                                        width: "100%",
                                        borderCollapse: "collapse",
                                        fontSize: "13.5px"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                style: {
                                                    borderBottom: "1px solid rgba(224,188,106,0.26)"
                                                },
                                                children: [
                                                    "Title",
                                                    "Category",
                                                    "Raga",
                                                    "Thala",
                                                    "Level",
                                                    "Status",
                                                    "Actions"
                                                ].map((h)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        style: {
                                                            textAlign: "left",
                                                            padding: "14px 16px",
                                                            fontFamily: "var(--font-geist-mono), monospace",
                                                            fontSize: "10px",
                                                            letterSpacing: "0.18em",
                                                            textTransform: "uppercase",
                                                            color: "rgba(243,237,223,0.5)",
                                                            fontWeight: 500,
                                                            whiteSpace: "nowrap"
                                                        },
                                                        children: h
                                                    }, h, false, {
                                                        fileName: "[project]/src/components/site/studio-dashboard.tsx",
                                                        lineNumber: 624,
                                                        columnNumber: 25
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/site/studio-dashboard.tsx",
                                                lineNumber: 622,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/site/studio-dashboard.tsx",
                                            lineNumber: 621,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                            children: data.lessons.map((l)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(EditableLessonRow, {
                                                    lesson: l,
                                                    onUpdate: (updated)=>{
                                                        setData((prev)=>{
                                                            if (!prev) return prev;
                                                            const lessons = prev.lessons.map((row)=>row.id === l.id ? {
                                                                    ...row,
                                                                    ...updated
                                                                } : row);
                                                            return {
                                                                ...prev,
                                                                lessons
                                                            };
                                                        });
                                                    },
                                                    onDelete: ()=>{
                                                        setData((prev)=>{
                                                            if (!prev) return prev;
                                                            const lessons = prev.lessons.filter((row)=>row.id !== l.id);
                                                            return {
                                                                ...prev,
                                                                lessons
                                                            };
                                                        });
                                                    }
                                                }, l.id, false, {
                                                    fileName: "[project]/src/components/site/studio-dashboard.tsx",
                                                    lineNumber: 642,
                                                    columnNumber: 23
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/site/studio-dashboard.tsx",
                                            lineNumber: 640,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/site/studio-dashboard.tsx",
                                    lineNumber: 620,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/site/studio-dashboard.tsx",
                                lineNumber: 619,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/site/studio-dashboard.tsx",
                            lineNumber: 618,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true) : activeTab === "categories" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CategoriesTab, {}, void 0, false, {
                    fileName: "[project]/src/components/site/studio-dashboard.tsx",
                    lineNumber: 662,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AnalyticsTab, {}, void 0, false, {
                    fileName: "[project]/src/components/site/studio-dashboard.tsx",
                    lineNumber: 664,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/site/studio-dashboard.tsx",
                lineNumber: 329,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/site/studio-dashboard.tsx",
        lineNumber: 189,
        columnNumber: 5
    }, this);
}
function StatCard({ icon, label, value, color, suffix }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "vsp-card-neutral",
        style: {
            padding: "20px 22px"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2 mb-2",
                style: {
                    color
                },
                children: [
                    icon,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            fontFamily: "var(--font-geist-mono), monospace",
                            fontSize: "10px",
                            letterSpacing: "0.18em",
                            textTransform: "uppercase",
                            color: "rgba(243,237,223,0.5)"
                        },
                        children: label
                    }, void 0, false, {
                        fileName: "[project]/src/components/site/studio-dashboard.tsx",
                        lineNumber: 676,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/site/studio-dashboard.tsx",
                lineNumber: 674,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: {
                    fontFamily: "var(--font-marcellus), serif",
                    fontSize: "36px",
                    color,
                    margin: 0,
                    lineHeight: 1
                },
                children: [
                    value,
                    suffix && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            fontSize: "20px",
                            color: "rgba(243,237,223,0.5)"
                        },
                        children: suffix
                    }, void 0, false, {
                        fileName: "[project]/src/components/site/studio-dashboard.tsx",
                        lineNumber: 681,
                        columnNumber: 27
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/site/studio-dashboard.tsx",
                lineNumber: 680,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/site/studio-dashboard.tsx",
        lineNumber: 673,
        columnNumber: 5
    }, this);
}
/**
 * Editable lesson row — inline editing for title, raga, thala, level.
 * Click a field to edit; Enter or blur to save (PATCH); Escape to cancel.
 * Status is a toggle button (draft/published).
 */ function EditableLessonRow({ lesson, onUpdate, onDelete }) {
    const [editingField, setEditingField] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [draft, setDraft] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [saving, setSaving] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [confirmDelete, setConfirmDelete] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const startEdit = (field, currentValue)=>{
        setEditingField(field);
        setDraft(currentValue);
    };
    const saveField = async (field)=>{
        const value = draft.trim();
        setSaving(true);
        try {
            const body = {};
            if (field === "level") {
                body.level = value ? parseInt(value, 10) : null;
            } else {
                body[field] = value;
            }
            const res = await fetch(`/api/studio/lessons/${lesson.id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(body)
            });
            if (res.ok) {
                const update = {};
                if (field === "level") {
                    update.level = value ? parseInt(value, 10) : null;
                } else {
                    update[field] = value;
                }
                onUpdate(update);
            }
        } catch  {
        // silent — the row keeps its original value
        } finally{
            setSaving(false);
            setEditingField(null);
        }
    };
    const cancelEdit = ()=>{
        setEditingField(null);
        setDraft("");
    };
    const toggleStatus = async ()=>{
        const next = lesson.status === "published" ? "draft" : "published";
        setSaving(true);
        try {
            const res = await fetch(`/api/studio/lessons/${lesson.id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    status: next
                })
            });
            if (res.ok) {
                onUpdate({
                    status: next
                });
            }
        } catch  {
        // silent
        } finally{
            setSaving(false);
        }
    };
    const handleDelete = async ()=>{
        if (!confirmDelete) {
            setConfirmDelete(true);
            setTimeout(()=>setConfirmDelete(false), 3000);
            return;
        }
        await fetch(`/api/studio/lessons/${lesson.id}`, {
            method: "DELETE"
        });
        onDelete();
    };
    const tdStyle = {
        padding: "12px 16px",
        verticalAlign: "middle"
    };
    const fieldBaseStyle = {
        background: "rgba(22,16,42,0.6)",
        border: "1px solid rgba(224,188,106,0.46)",
        color: "#F3EDDF",
        fontFamily: "var(--font-instrument-sans)",
        fontSize: "13px",
        padding: "6px 10px",
        borderRadius: 0,
        width: "100%",
        minWidth: "80px"
    };
    const displayStyle = {
        cursor: "pointer",
        padding: "6px 10px",
        border: "1px solid transparent",
        borderRadius: 0,
        transition: "border-color 160ms ease, background 160ms ease"
    };
    const renderField = (field, value, displayValue, opts)=>{
        const isEditing = editingField === field;
        const show = displayValue ?? value ?? "—";
        if (isEditing) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: field === "level" ? "number" : "text",
                        value: draft,
                        onChange: (e)=>setDraft(e.target.value),
                        onKeyDown: (e)=>{
                            if (e.key === "Enter") saveField(field);
                            if (e.key === "Escape") cancelEdit();
                        },
                        onBlur: ()=>saveField(field),
                        autoFocus: true,
                        disabled: saving,
                        style: fieldBaseStyle,
                        "aria-label": `Edit ${field}`
                    }, void 0, false, {
                        fileName: "[project]/src/components/site/studio-dashboard.tsx",
                        lineNumber: 808,
                        columnNumber: 11
                    }, this),
                    saving && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            fontSize: "10px",
                            color: "rgba(224,188,106,0.6)"
                        },
                        children: "…"
                    }, void 0, false, {
                        fileName: "[project]/src/components/site/studio-dashboard.tsx",
                        lineNumber: 822,
                        columnNumber: 22
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/site/studio-dashboard.tsx",
                lineNumber: 807,
                columnNumber: 9
            }, this);
        }
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            onClick: ()=>startEdit(field, value ?? ""),
            className: "vsp-lift inline-block",
            style: {
                ...displayStyle,
                fontFamily: opts?.mono ? "var(--font-geist-mono), monospace" : "var(--font-instrument-sans)",
                fontSize: opts?.mono ? "11px" : "13px",
                letterSpacing: opts?.mono ? "0.06em" : "0",
                color: opts?.gold ? "#E0BC6A" : value ? "#F3EDDF" : "rgba(243,237,223,0.4)"
            },
            title: "Click to edit",
            children: show
        }, void 0, false, {
            fileName: "[project]/src/components/site/studio-dashboard.tsx",
            lineNumber: 827,
            columnNumber: 7
        }, this);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
        style: {
            borderBottom: "1px solid rgba(243,237,223,0.08)"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                style: tdStyle,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: "flex",
                        flexDirection: "column",
                        gap: "2px"
                    },
                    children: [
                        renderField("title", lesson.title),
                        lesson.titleTamil && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            lang: "ta",
                            style: {
                                fontSize: "11px",
                                color: "rgba(243,237,223,0.5)",
                                paddingLeft: "10px"
                            },
                            children: lesson.titleTamil
                        }, void 0, false, {
                            fileName: "[project]/src/components/site/studio-dashboard.tsx",
                            lineNumber: 850,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/site/studio-dashboard.tsx",
                    lineNumber: 847,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/site/studio-dashboard.tsx",
                lineNumber: 846,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                style: tdStyle,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    style: {
                        fontFamily: "var(--font-geist-mono), monospace",
                        fontSize: "11px",
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        color: "rgba(243,237,223,0.72)"
                    },
                    children: lesson.category.replace(/-/g, " ")
                }, void 0, false, {
                    fileName: "[project]/src/components/site/studio-dashboard.tsx",
                    lineNumber: 857,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/site/studio-dashboard.tsx",
                lineNumber: 856,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                style: tdStyle,
                children: renderField("raga", lesson.raga ?? "", undefined, {
                    gold: true
                })
            }, void 0, false, {
                fileName: "[project]/src/components/site/studio-dashboard.tsx",
                lineNumber: 861,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                style: tdStyle,
                children: renderField("thala", lesson.thala ?? "")
            }, void 0, false, {
                fileName: "[project]/src/components/site/studio-dashboard.tsx",
                lineNumber: 862,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                style: tdStyle,
                children: renderField("level", lesson.level?.toString() ?? "", lesson.level?.toString() ?? "—", {
                    mono: true
                })
            }, void 0, false, {
                fileName: "[project]/src/components/site/studio-dashboard.tsx",
                lineNumber: 863,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                style: tdStyle,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: toggleStatus,
                    disabled: saving,
                    "aria-pressed": lesson.status === "published",
                    className: "transition-colors",
                    style: {
                        padding: "4px 10px",
                        border: `1px solid ${lesson.status === "published" ? "#78DCAA" : "rgba(243,237,223,0.3)"}`,
                        background: lesson.status === "published" ? "rgba(120,220,170,0.08)" : "transparent",
                        color: lesson.status === "published" ? "#78DCAA" : "rgba(243,237,223,0.5)",
                        fontFamily: "var(--font-geist-mono), monospace",
                        fontSize: "10px",
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        cursor: "pointer",
                        borderRadius: 0
                    },
                    children: lesson.status ?? "published"
                }, void 0, false, {
                    fileName: "[project]/src/components/site/studio-dashboard.tsx",
                    lineNumber: 865,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/site/studio-dashboard.tsx",
                lineNumber: 864,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                style: tdStyle,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: `/lessons/${lesson.id}`,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            "aria-label": "Open lesson page",
                            style: {
                                color: "rgba(243,237,223,0.5)",
                                display: "flex",
                                padding: "4px"
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                size: 13
                            }, void 0, false, {
                                fileName: "[project]/src/components/site/studio-dashboard.tsx",
                                lineNumber: 895,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/site/studio-dashboard.tsx",
                            lineNumber: 888,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleDelete,
                            "aria-label": confirmDelete ? "Confirm delete" : "Delete lesson",
                            style: {
                                background: "transparent",
                                border: "none",
                                color: confirmDelete ? "#E08C50" : "rgba(243,237,223,0.4)",
                                cursor: "pointer",
                                padding: "4px",
                                borderRadius: 0
                            },
                            title: confirmDelete ? "Click again to confirm" : "Delete",
                            children: confirmDelete ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                size: 13
                            }, void 0, false, {
                                fileName: "[project]/src/components/site/studio-dashboard.tsx",
                                lineNumber: 910,
                                columnNumber: 30
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                size: 13
                            }, void 0, false, {
                                fileName: "[project]/src/components/site/studio-dashboard.tsx",
                                lineNumber: 910,
                                columnNumber: 56
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/site/studio-dashboard.tsx",
                            lineNumber: 897,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/site/studio-dashboard.tsx",
                    lineNumber: 887,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/site/studio-dashboard.tsx",
                lineNumber: 886,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/site/studio-dashboard.tsx",
        lineNumber: 845,
        columnNumber: 5
    }, this);
}
/**
 * New lesson button + form — opens a modal-like card for creating a lesson.
 * Per the handoff's Studio.dc.html spec: title, category, raga, thala, notation links, status.
 */ function NewLessonButton({ categories, onCreated }) {
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [saving, setSaving] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        title: "",
        titleTamil: "",
        category: categories[0]?.slug ?? "",
        raga: "",
        thala: "",
        composer: "",
        notationEnglish: "",
        notationTamil: "",
        status: "draft"
    });
    const submit = async ()=>{
        setError(null);
        if (!form.title.trim()) {
            setError("Title is required");
            return;
        }
        if (!form.category) {
            setError("Category is required");
            return;
        }
        setSaving(true);
        try {
            const res = await fetch("/api/studio/lessons", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    title: form.title.trim(),
                    titleTamil: form.titleTamil.trim() || null,
                    category: form.category,
                    raga: form.raga.trim() || null,
                    thala: form.thala.trim() || null,
                    composer: form.composer.trim() || null,
                    notationEnglish: form.notationEnglish.trim() || null,
                    notationTamil: form.notationTamil.trim() || null,
                    status: form.status
                })
            });
            if (res.ok) {
                const json = await res.json();
                onCreated(json.lesson);
                setForm({
                    title: "",
                    titleTamil: "",
                    category: categories[0]?.slug ?? "",
                    raga: "",
                    thala: "",
                    composer: "",
                    notationEnglish: "",
                    notationTamil: "",
                    status: "draft"
                });
                setOpen(false);
            } else {
                const data = await res.json().catch(()=>({}));
                setError(data.error ?? "Failed to create lesson");
            }
        } catch  {
            setError("Network error");
        } finally{
            setSaving(false);
        }
    };
    if (!open) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: ()=>setOpen(true),
            className: "vsp-cta-gold flex items-center gap-2",
            style: {
                padding: "9px 16px",
                background: "#E0BC6A",
                color: "#1B1233",
                fontFamily: "var(--font-marcellus), serif",
                fontSize: "12.5px",
                letterSpacing: "0.04em",
                border: "none",
                cursor: "pointer",
                borderRadius: 0
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                    size: 14,
                    "aria-hidden": true
                }, void 0, false, {
                    fileName: "[project]/src/components/site/studio-dashboard.tsx",
                    lineNumber: 1012,
                    columnNumber: 9
                }, this),
                "New lesson"
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/site/studio-dashboard.tsx",
            lineNumber: 997,
            columnNumber: 7
        }, this);
    }
    const inputStyle = {
        padding: "9px 12px",
        background: "rgba(22,16,42,0.6)",
        border: "1px solid rgba(243,237,223,0.2)",
        color: "#F3EDDF",
        fontFamily: "var(--font-instrument-sans)",
        fontSize: "13px",
        borderRadius: 0,
        width: "100%"
    };
    const labelStyle = {
        fontFamily: "var(--font-geist-mono), monospace",
        fontSize: "10px",
        letterSpacing: "0.14em",
        textTransform: "uppercase",
        color: "rgba(243,237,223,0.62)",
        marginBottom: "5px",
        display: "block"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "vsp-card-gold",
        style: {
            padding: "24px",
            marginTop: "12px",
            width: "100%"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "vsp-eyebrow",
                        children: "New lesson"
                    }, void 0, false, {
                        fileName: "[project]/src/components/site/studio-dashboard.tsx",
                        lineNumber: 1042,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>{
                            setOpen(false);
                            setError(null);
                        },
                        "aria-label": "Close form",
                        style: {
                            background: "transparent",
                            border: "none",
                            color: "rgba(243,237,223,0.5)",
                            cursor: "pointer",
                            padding: "4px"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                            size: 16
                        }, void 0, false, {
                            fileName: "[project]/src/components/site/studio-dashboard.tsx",
                            lineNumber: 1044,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/site/studio-dashboard.tsx",
                        lineNumber: 1043,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/site/studio-dashboard.tsx",
                lineNumber: 1041,
                columnNumber: 7
            }, this),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                role: "status",
                "aria-live": "polite",
                style: {
                    marginBottom: "14px",
                    padding: "10px 14px",
                    border: "1px solid #E08C50",
                    background: "rgba(224,140,80,0.08)",
                    color: "#F2C5A5",
                    fontSize: "13px"
                },
                children: error
            }, void 0, false, {
                fileName: "[project]/src/components/site/studio-dashboard.tsx",
                lineNumber: 1049,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-3 grid-cols-1 md:grid-cols-2",
                style: {
                    marginBottom: "14px"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: labelStyle,
                                children: "Title *"
                            }, void 0, false, {
                                fileName: "[project]/src/components/site/studio-dashboard.tsx",
                                lineNumber: 1056,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                value: form.title,
                                onChange: (e)=>setForm({
                                        ...form,
                                        title: e.target.value
                                    }),
                                placeholder: "e.g. Sri Maha Ganapathim",
                                style: inputStyle,
                                autoFocus: true
                            }, void 0, false, {
                                fileName: "[project]/src/components/site/studio-dashboard.tsx",
                                lineNumber: 1057,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/site/studio-dashboard.tsx",
                        lineNumber: 1055,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: labelStyle,
                                children: "Tamil title"
                            }, void 0, false, {
                                fileName: "[project]/src/components/site/studio-dashboard.tsx",
                                lineNumber: 1060,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                value: form.titleTamil,
                                onChange: (e)=>setForm({
                                        ...form,
                                        titleTamil: e.target.value
                                    }),
                                placeholder: "ஸ்ரீ மஹாகணபதிம்",
                                lang: "ta",
                                style: inputStyle
                            }, void 0, false, {
                                fileName: "[project]/src/components/site/studio-dashboard.tsx",
                                lineNumber: 1061,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/site/studio-dashboard.tsx",
                        lineNumber: 1059,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: labelStyle,
                                children: "Category *"
                            }, void 0, false, {
                                fileName: "[project]/src/components/site/studio-dashboard.tsx",
                                lineNumber: 1064,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                value: form.category,
                                onChange: (e)=>setForm({
                                        ...form,
                                        category: e.target.value
                                    }),
                                style: inputStyle,
                                children: categories.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: c.slug,
                                        children: c.name
                                    }, c.slug, false, {
                                        fileName: "[project]/src/components/site/studio-dashboard.tsx",
                                        lineNumber: 1066,
                                        columnNumber: 36
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/site/studio-dashboard.tsx",
                                lineNumber: 1065,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/site/studio-dashboard.tsx",
                        lineNumber: 1063,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: labelStyle,
                                children: "Raga"
                            }, void 0, false, {
                                fileName: "[project]/src/components/site/studio-dashboard.tsx",
                                lineNumber: 1070,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                value: form.raga,
                                onChange: (e)=>setForm({
                                        ...form,
                                        raga: e.target.value
                                    }),
                                placeholder: "e.g. Nattai",
                                style: inputStyle
                            }, void 0, false, {
                                fileName: "[project]/src/components/site/studio-dashboard.tsx",
                                lineNumber: 1071,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/site/studio-dashboard.tsx",
                        lineNumber: 1069,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: labelStyle,
                                children: "Thala"
                            }, void 0, false, {
                                fileName: "[project]/src/components/site/studio-dashboard.tsx",
                                lineNumber: 1074,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                value: form.thala,
                                onChange: (e)=>setForm({
                                        ...form,
                                        thala: e.target.value
                                    }),
                                placeholder: "e.g. Aadhi",
                                style: inputStyle
                            }, void 0, false, {
                                fileName: "[project]/src/components/site/studio-dashboard.tsx",
                                lineNumber: 1075,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/site/studio-dashboard.tsx",
                        lineNumber: 1073,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: labelStyle,
                                children: "Composer"
                            }, void 0, false, {
                                fileName: "[project]/src/components/site/studio-dashboard.tsx",
                                lineNumber: 1078,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                value: form.composer,
                                onChange: (e)=>setForm({
                                        ...form,
                                        composer: e.target.value
                                    }),
                                placeholder: "e.g. Muthuswami Dikshitar",
                                style: inputStyle
                            }, void 0, false, {
                                fileName: "[project]/src/components/site/studio-dashboard.tsx",
                                lineNumber: 1079,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/site/studio-dashboard.tsx",
                        lineNumber: 1077,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: labelStyle,
                                children: "English notation URL"
                            }, void 0, false, {
                                fileName: "[project]/src/components/site/studio-dashboard.tsx",
                                lineNumber: 1082,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "url",
                                value: form.notationEnglish,
                                onChange: (e)=>setForm({
                                        ...form,
                                        notationEnglish: e.target.value
                                    }),
                                placeholder: "https://drive.google.com/…",
                                style: inputStyle
                            }, void 0, false, {
                                fileName: "[project]/src/components/site/studio-dashboard.tsx",
                                lineNumber: 1083,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/site/studio-dashboard.tsx",
                        lineNumber: 1081,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: labelStyle,
                                children: "Tamil notation URL"
                            }, void 0, false, {
                                fileName: "[project]/src/components/site/studio-dashboard.tsx",
                                lineNumber: 1086,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "url",
                                value: form.notationTamil,
                                onChange: (e)=>setForm({
                                        ...form,
                                        notationTamil: e.target.value
                                    }),
                                placeholder: "https://drive.google.com/…",
                                style: inputStyle
                            }, void 0, false, {
                                fileName: "[project]/src/components/site/studio-dashboard.tsx",
                                lineNumber: 1087,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/site/studio-dashboard.tsx",
                        lineNumber: 1085,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/site/studio-dashboard.tsx",
                lineNumber: 1054,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-3 mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: labelStyle,
                        children: "Status"
                    }, void 0, false, {
                        fileName: "[project]/src/components/site/studio-dashboard.tsx",
                        lineNumber: 1092,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex",
                        children: [
                            "draft",
                            "published"
                        ].map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setForm({
                                        ...form,
                                        status: s
                                    }),
                                "aria-pressed": form.status === s,
                                style: {
                                    padding: "7px 14px",
                                    border: `1px solid ${form.status === s ? "#E0BC6A" : "rgba(243,237,223,0.2)"}`,
                                    background: form.status === s ? "#E0BC6A" : "transparent",
                                    color: form.status === s ? "#1B1233" : "rgba(243,237,223,0.82)",
                                    fontFamily: "var(--font-geist-mono), monospace",
                                    fontSize: "11px",
                                    letterSpacing: "0.1em",
                                    textTransform: "uppercase",
                                    cursor: "pointer",
                                    borderRadius: 0
                                },
                                children: s
                            }, s, false, {
                                fileName: "[project]/src/components/site/studio-dashboard.tsx",
                                lineNumber: 1095,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/site/studio-dashboard.tsx",
                        lineNumber: 1093,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/site/studio-dashboard.tsx",
                lineNumber: 1091,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: submit,
                        disabled: saving,
                        className: "vsp-cta-gold",
                        style: {
                            padding: "11px 22px",
                            background: saving ? "rgba(224,188,106,0.45)" : "#E0BC6A",
                            color: "#1B1233",
                            fontFamily: "var(--font-marcellus), serif",
                            fontSize: "13px",
                            border: "none",
                            cursor: saving ? "wait" : "pointer",
                            borderRadius: 0
                        },
                        children: saving ? "Creating…" : "Create lesson"
                    }, void 0, false, {
                        fileName: "[project]/src/components/site/studio-dashboard.tsx",
                        lineNumber: 1119,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>{
                            setOpen(false);
                            setError(null);
                        },
                        style: {
                            padding: "11px 18px",
                            background: "transparent",
                            border: "1px solid rgba(243,237,223,0.2)",
                            color: "rgba(243,237,223,0.82)",
                            fontFamily: "var(--font-geist-mono), monospace",
                            fontSize: "11px",
                            letterSpacing: "0.1em",
                            textTransform: "uppercase",
                            cursor: "pointer",
                            borderRadius: 0
                        },
                        children: "Cancel"
                    }, void 0, false, {
                        fileName: "[project]/src/components/site/studio-dashboard.tsx",
                        lineNumber: 1136,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/site/studio-dashboard.tsx",
                lineNumber: 1118,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/site/studio-dashboard.tsx",
        lineNumber: 1040,
        columnNumber: 5
    }, this);
}
const GROUP_LABELS = {
    basics: "Carnatic — Basics",
    advanced: "Carnatic — Advanced",
    devotional: "Devotional",
    light: "Light Music",
    media: "Media"
};
const GROUP_ORDER = [
    "basics",
    "advanced",
    "devotional",
    "light",
    "media"
];
/** Categories tab — rename, regroup, reorder, add, delete categories. */ function CategoriesTab() {
    const [categories, setCategories] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [editingSlug, setEditingSlug] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [draftName, setDraftName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [showAddForm, setShowAddForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [newCat, setNewCat] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        slug: "",
        name: "",
        group: "advanced",
        order: 10
    });
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const fetchCategories = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        try {
            const res = await fetch("/api/studio/categories");
            if (!res.ok) throw new Error("Failed");
            const json = await res.json();
            setCategories(json.categories);
        } catch  {
            setError("Failed to load categories");
        } finally{
            setLoading(false);
        }
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        fetchCategories();
    }, [
        fetchCategories
    ]);
    const saveName = async (slug)=>{
        const value = draftName.trim();
        if (!value) {
            setEditingSlug(null);
            return;
        }
        await fetch(`/api/studio/categories/${slug}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: value
            })
        });
        setCategories((prev)=>prev.map((c)=>c.slug === slug ? {
                    ...c,
                    name: value
                } : c));
        setEditingSlug(null);
    };
    const changeGroup = async (slug, group)=>{
        await fetch(`/api/studio/categories/${slug}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                group
            })
        });
        setCategories((prev)=>prev.map((c)=>c.slug === slug ? {
                    ...c,
                    group
                } : c));
    };
    const changeOrder = async (slug, order)=>{
        await fetch(`/api/studio/categories/${slug}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                order
            })
        });
        setCategories((prev)=>prev.map((c)=>c.slug === slug ? {
                    ...c,
                    order
                } : c));
    };
    const deleteCategory = async (slug)=>{
        const res = await fetch(`/api/studio/categories/${slug}`, {
            method: "DELETE"
        });
        if (res.ok) {
            setCategories((prev)=>prev.filter((c)=>c.slug !== slug));
        } else {
            const data = await res.json().catch(()=>({}));
            setError(data.error ?? "Failed to delete");
            setTimeout(()=>setError(null), 4000);
        }
    };
    const addCategory = async ()=>{
        setError(null);
        const slug = newCat.slug.trim().toLowerCase().replace(/\s+/g, "-");
        if (!slug || !newCat.name.trim()) {
            setError("Slug and name are required");
            return;
        }
        const res = await fetch("/api/studio/categories", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                slug,
                name: newCat.name.trim(),
                group: newCat.group,
                order: newCat.order
            })
        });
        if (res.ok) {
            const json = await res.json();
            setCategories((prev)=>[
                    ...prev,
                    {
                        ...json.category,
                        lessonCount: 0,
                        publishedCount: 0
                    }
                ]);
            setNewCat({
                slug: "",
                name: "",
                group: "advanced",
                order: 10
            });
            setShowAddForm(false);
        } else {
            const data = await res.json().catch(()=>({}));
            setError(data.error ?? "Failed to create");
        }
    };
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            style: {
                fontFamily: "var(--font-geist-mono), monospace",
                fontSize: "12px",
                color: "rgba(243,237,223,0.5)"
            },
            children: "Loading categories…"
        }, void 0, false, {
            fileName: "[project]/src/components/site/studio-dashboard.tsx",
            lineNumber: 1272,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between mb-6 flex-wrap gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3 mb-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$tags$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Tags$3e$__["Tags"], {
                                        size: 18,
                                        "aria-hidden": true,
                                        style: {
                                            color: "#E0BC6A"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/site/studio-dashboard.tsx",
                                        lineNumber: 1281,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "vsp-eyebrow",
                                        children: [
                                            "Categories · ",
                                            categories.length
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/site/studio-dashboard.tsx",
                                        lineNumber: 1282,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/site/studio-dashboard.tsx",
                                lineNumber: 1280,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    fontSize: "14px",
                                    color: "rgba(243,237,223,0.62)",
                                    margin: 0
                                },
                                children: "Rename, regroup, reorder, or add categories. Changes propagate to the nav menu, library filters, and breadcrumbs."
                            }, void 0, false, {
                                fileName: "[project]/src/components/site/studio-dashboard.tsx",
                                lineNumber: 1284,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/site/studio-dashboard.tsx",
                        lineNumber: 1279,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setShowAddForm(!showAddForm),
                        "aria-pressed": showAddForm,
                        className: "vsp-cta-gold flex items-center gap-2",
                        style: {
                            padding: "10px 18px",
                            background: showAddForm ? "transparent" : "#E0BC6A",
                            color: showAddForm ? "#E0BC6A" : "#1B1233",
                            border: showAddForm ? "1px solid #E0BC6A" : "none",
                            fontFamily: "var(--font-marcellus), serif",
                            fontSize: "13px",
                            letterSpacing: "0.04em",
                            cursor: "pointer",
                            borderRadius: 0
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                size: 15,
                                "aria-hidden": true
                            }, void 0, false, {
                                fileName: "[project]/src/components/site/studio-dashboard.tsx",
                                lineNumber: 1304,
                                columnNumber: 11
                            }, this),
                            showAddForm ? "Cancel" : "Add category"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/site/studio-dashboard.tsx",
                        lineNumber: 1288,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/site/studio-dashboard.tsx",
                lineNumber: 1278,
                columnNumber: 7
            }, this),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                role: "status",
                "aria-live": "polite",
                style: {
                    marginBottom: "16px",
                    padding: "12px 16px",
                    border: "1px solid #E08C50",
                    background: "rgba(224,140,80,0.08)",
                    color: "#F2C5A5",
                    fontSize: "13px"
                },
                children: error
            }, void 0, false, {
                fileName: "[project]/src/components/site/studio-dashboard.tsx",
                lineNumber: 1311,
                columnNumber: 9
            }, this),
            showAddForm && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "vsp-card-gold",
                style: {
                    padding: "24px",
                    marginBottom: "24px"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "vsp-eyebrow",
                        style: {
                            display: "block",
                            marginBottom: "14px"
                        },
                        children: "New category"
                    }, void 0, false, {
                        fileName: "[project]/src/components/site/studio-dashboard.tsx",
                        lineNumber: 1319,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid gap-3 grid-cols-1 md:grid-cols-2",
                        style: {
                            marginBottom: "14px"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "flex flex-col gap-1.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontFamily: "var(--font-geist-mono), monospace",
                                            fontSize: "10px",
                                            letterSpacing: "0.14em",
                                            textTransform: "uppercase",
                                            color: "rgba(243,237,223,0.62)"
                                        },
                                        children: "Slug"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/site/studio-dashboard.tsx",
                                        lineNumber: 1322,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        value: newCat.slug,
                                        onChange: (e)=>setNewCat({
                                                ...newCat,
                                                slug: e.target.value
                                            }),
                                        placeholder: "e.g. thillana",
                                        style: {
                                            padding: "9px 12px",
                                            background: "rgba(22,16,42,0.6)",
                                            border: "1px solid rgba(243,237,223,0.2)",
                                            color: "#F3EDDF",
                                            fontFamily: "var(--font-geist-mono), monospace",
                                            fontSize: "13px",
                                            borderRadius: 0
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/site/studio-dashboard.tsx",
                                        lineNumber: 1323,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/site/studio-dashboard.tsx",
                                lineNumber: 1321,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "flex flex-col gap-1.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontFamily: "var(--font-geist-mono), monospace",
                                            fontSize: "10px",
                                            letterSpacing: "0.14em",
                                            textTransform: "uppercase",
                                            color: "rgba(243,237,223,0.62)"
                                        },
                                        children: "Display name"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/site/studio-dashboard.tsx",
                                        lineNumber: 1332,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        value: newCat.name,
                                        onChange: (e)=>setNewCat({
                                                ...newCat,
                                                name: e.target.value
                                            }),
                                        placeholder: "e.g. Thillana",
                                        style: {
                                            padding: "9px 12px",
                                            background: "rgba(22,16,42,0.6)",
                                            border: "1px solid rgba(243,237,223,0.2)",
                                            color: "#F3EDDF",
                                            fontFamily: "var(--font-instrument-sans)",
                                            fontSize: "13px",
                                            borderRadius: 0
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/site/studio-dashboard.tsx",
                                        lineNumber: 1333,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/site/studio-dashboard.tsx",
                                lineNumber: 1331,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "flex flex-col gap-1.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontFamily: "var(--font-geist-mono), monospace",
                                            fontSize: "10px",
                                            letterSpacing: "0.14em",
                                            textTransform: "uppercase",
                                            color: "rgba(243,237,223,0.62)"
                                        },
                                        children: "Group"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/site/studio-dashboard.tsx",
                                        lineNumber: 1342,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        value: newCat.group,
                                        onChange: (e)=>setNewCat({
                                                ...newCat,
                                                group: e.target.value
                                            }),
                                        style: {
                                            padding: "9px 12px",
                                            background: "rgba(22,16,42,0.6)",
                                            border: "1px solid rgba(243,237,223,0.2)",
                                            color: "#F3EDDF",
                                            fontFamily: "var(--font-instrument-sans)",
                                            fontSize: "13px",
                                            borderRadius: 0
                                        },
                                        children: GROUP_ORDER.map((g)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: g,
                                                children: GROUP_LABELS[g]
                                            }, g, false, {
                                                fileName: "[project]/src/components/site/studio-dashboard.tsx",
                                                lineNumber: 1348,
                                                columnNumber: 41
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/site/studio-dashboard.tsx",
                                        lineNumber: 1343,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/site/studio-dashboard.tsx",
                                lineNumber: 1341,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "flex flex-col gap-1.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontFamily: "var(--font-geist-mono), monospace",
                                            fontSize: "10px",
                                            letterSpacing: "0.14em",
                                            textTransform: "uppercase",
                                            color: "rgba(243,237,223,0.62)"
                                        },
                                        children: "Order"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/site/studio-dashboard.tsx",
                                        lineNumber: 1352,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "number",
                                        value: newCat.order,
                                        onChange: (e)=>setNewCat({
                                                ...newCat,
                                                order: parseInt(e.target.value, 10) || 0
                                            }),
                                        style: {
                                            padding: "9px 12px",
                                            background: "rgba(22,16,42,0.6)",
                                            border: "1px solid rgba(243,237,223,0.2)",
                                            color: "#F3EDDF",
                                            fontFamily: "var(--font-geist-mono), monospace",
                                            fontSize: "13px",
                                            borderRadius: 0
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/site/studio-dashboard.tsx",
                                        lineNumber: 1353,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/site/studio-dashboard.tsx",
                                lineNumber: 1351,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/site/studio-dashboard.tsx",
                        lineNumber: 1320,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: addCategory,
                        className: "vsp-cta-gold",
                        style: {
                            padding: "10px 20px",
                            background: "#E0BC6A",
                            color: "#1B1233",
                            fontFamily: "var(--font-marcellus), serif",
                            fontSize: "13px",
                            border: "none",
                            cursor: "pointer",
                            borderRadius: 0
                        },
                        children: "Create category"
                    }, void 0, false, {
                        fileName: "[project]/src/components/site/studio-dashboard.tsx",
                        lineNumber: 1361,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/site/studio-dashboard.tsx",
                lineNumber: 1318,
                columnNumber: 9
            }, this),
            GROUP_ORDER.map((group)=>{
                const groupCats = categories.filter((c)=>c.group === group).sort((a, b)=>a.order - b.order);
                if (groupCats.length === 0) return null;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    style: {
                        marginBottom: "28px"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-baseline justify-between mb-3",
                            style: {
                                paddingBottom: "10px",
                                borderBottom: "1px solid rgba(224,188,106,0.2)"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    style: {
                                        fontFamily: "var(--font-marcellus), serif",
                                        fontSize: "20px",
                                        color: "#F3EDDF",
                                        margin: 0
                                    },
                                    children: GROUP_LABELS[group]
                                }, void 0, false, {
                                    fileName: "[project]/src/components/site/studio-dashboard.tsx",
                                    lineNumber: 1378,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        fontFamily: "var(--font-geist-mono), monospace",
                                        fontSize: "10.5px",
                                        letterSpacing: "0.14em",
                                        textTransform: "uppercase",
                                        color: "rgba(243,237,223,0.5)"
                                    },
                                    children: [
                                        groupCats.length,
                                        " categor",
                                        groupCats.length !== 1 ? "ies" : "y"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/site/studio-dashboard.tsx",
                                    lineNumber: 1381,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/site/studio-dashboard.tsx",
                            lineNumber: 1377,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col",
                            style: {
                                gap: "8px"
                            },
                            children: groupCats.map((c)=>{
                                const isEditing = editingSlug === c.slug;
                                const canDelete = c.lessonCount === 0;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "vsp-card-neutral flex items-center gap-3 flex-wrap",
                                    style: {
                                        padding: "14px 18px"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "number",
                                            value: c.order,
                                            onChange: (e)=>changeOrder(c.slug, parseInt(e.target.value, 10) || 0),
                                            "aria-label": "Order",
                                            style: {
                                                width: "48px",
                                                padding: "6px 8px",
                                                background: "rgba(22,16,42,0.6)",
                                                border: "1px solid rgba(243,237,223,0.2)",
                                                color: "#E0BC6A",
                                                fontFamily: "var(--font-geist-mono), monospace",
                                                fontSize: "12px",
                                                textAlign: "center",
                                                borderRadius: 0
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/site/studio-dashboard.tsx",
                                            lineNumber: 1396,
                                            columnNumber: 21
                                        }, this),
                                        isEditing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            value: draftName,
                                            onChange: (e)=>setDraftName(e.target.value),
                                            onKeyDown: (e)=>{
                                                if (e.key === "Enter") saveName(c.slug);
                                                if (e.key === "Escape") setEditingSlug(null);
                                            },
                                            onBlur: ()=>saveName(c.slug),
                                            autoFocus: true,
                                            style: {
                                                flex: "1",
                                                minWidth: "140px",
                                                padding: "6px 10px",
                                                background: "rgba(22,16,42,0.6)",
                                                border: "1px solid rgba(224,188,106,0.46)",
                                                color: "#F3EDDF",
                                                fontFamily: "var(--font-marcellus), serif",
                                                fontSize: "15px",
                                                borderRadius: 0
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/site/studio-dashboard.tsx",
                                            lineNumber: 1405,
                                            columnNumber: 23
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            onClick: ()=>{
                                                setEditingSlug(c.slug);
                                                setDraftName(c.name);
                                            },
                                            className: "vsp-lift",
                                            style: {
                                                flex: "1",
                                                minWidth: "140px",
                                                fontFamily: "var(--font-marcellus), serif",
                                                fontSize: "16px",
                                                color: "#F3EDDF",
                                                cursor: "pointer",
                                                padding: "4px 8px",
                                                border: "1px solid transparent",
                                                borderRadius: 0
                                            },
                                            title: "Click to rename",
                                            children: c.name
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/site/studio-dashboard.tsx",
                                            lineNumber: 1415,
                                            columnNumber: 23
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                fontFamily: "var(--font-geist-mono), monospace",
                                                fontSize: "11px",
                                                color: "rgba(243,237,223,0.5)"
                                            },
                                            children: [
                                                "/",
                                                c.slug
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/site/studio-dashboard.tsx",
                                            lineNumber: 1425,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                fontFamily: "var(--font-geist-mono), monospace",
                                                fontSize: "11px",
                                                letterSpacing: "0.08em",
                                                color: c.lessonCount > 0 ? "#E0BC6A" : "rgba(243,237,223,0.4)",
                                                padding: "3px 8px",
                                                border: `1px solid ${c.lessonCount > 0 ? "rgba(224,188,106,0.34)" : "rgba(243,237,223,0.1)"}`
                                            },
                                            children: [
                                                c.lessonCount,
                                                " lesson",
                                                c.lessonCount !== 1 ? "s" : ""
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/site/studio-dashboard.tsx",
                                            lineNumber: 1429,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: c.group,
                                            onChange: (e)=>changeGroup(c.slug, e.target.value),
                                            "aria-label": "Group",
                                            style: {
                                                padding: "5px 10px",
                                                background: "rgba(22,16,42,0.6)",
                                                border: "1px solid rgba(243,237,223,0.2)",
                                                color: "rgba(243,237,223,0.72)",
                                                fontFamily: "var(--font-geist-mono), monospace",
                                                fontSize: "10.5px",
                                                letterSpacing: "0.08em",
                                                textTransform: "uppercase",
                                                borderRadius: 0
                                            },
                                            children: GROUP_ORDER.map((g)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: g,
                                                    children: GROUP_LABELS[g]
                                                }, g, false, {
                                                    fileName: "[project]/src/components/site/studio-dashboard.tsx",
                                                    lineNumber: 1439,
                                                    columnNumber: 47
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/site/studio-dashboard.tsx",
                                            lineNumber: 1433,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>canDelete ? deleteCategory(c.slug) : setError(`Cannot delete "${c.name}": ${c.lessonCount} lesson(s) still in it. Move them first.`),
                                            disabled: !canDelete,
                                            "aria-label": "Delete category",
                                            title: canDelete ? "Delete" : "Move lessons first",
                                            style: {
                                                background: "transparent",
                                                border: "none",
                                                color: canDelete ? "rgba(243,237,223,0.4)" : "rgba(243,237,223,0.15)",
                                                cursor: canDelete ? "pointer" : "not-allowed",
                                                padding: "4px",
                                                borderRadius: 0
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                size: 14
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/site/studio-dashboard.tsx",
                                                lineNumber: 1449,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/site/studio-dashboard.tsx",
                                            lineNumber: 1442,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, c.slug, true, {
                                    fileName: "[project]/src/components/site/studio-dashboard.tsx",
                                    lineNumber: 1390,
                                    columnNumber: 19
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/src/components/site/studio-dashboard.tsx",
                            lineNumber: 1385,
                            columnNumber: 13
                        }, this)
                    ]
                }, group, true, {
                    fileName: "[project]/src/components/site/studio-dashboard.tsx",
                    lineNumber: 1376,
                    columnNumber: 11
                }, this);
            })
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/site/studio-dashboard.tsx",
        lineNumber: 1276,
        columnNumber: 5
    }, this);
}
/** Analytics tab — enquiry trends, intent breakdown, response rate. */ function AnalyticsTab() {
    const [data, setData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        fetch("/api/studio/analytics").then((r)=>r.json()).then((d)=>setData(d)).catch(()=>{}).finally(()=>setLoading(false));
    }, []);
    if (loading || !data) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            style: {
                fontFamily: "var(--font-geist-mono), monospace",
                fontSize: "12px",
                color: "rgba(243,237,223,0.5)"
            },
            children: "Loading analytics…"
        }, void 0, false, {
            fileName: "[project]/src/components/site/studio-dashboard.tsx",
            lineNumber: 1487,
            columnNumber: 12
        }, this);
    }
    const maxWeekly = Math.max(...data.weekly.map((w)=>w.count), 1);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-3 mb-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__["BarChart3"], {
                        size: 18,
                        "aria-hidden": true,
                        style: {
                            color: "#E0BC6A"
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/site/studio-dashboard.tsx",
                        lineNumber: 1496,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "vsp-eyebrow",
                        children: "Analytics · enquiry insights"
                    }, void 0, false, {
                        fileName: "[project]/src/components/site/studio-dashboard.tsx",
                        lineNumber: 1497,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/site/studio-dashboard.tsx",
                lineNumber: 1495,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-4 mb-8 grid-cols-2 md:grid-cols-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(StatCard, {
                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$inbox$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Inbox$3e$__["Inbox"], {
                            size: 18
                        }, void 0, false, {
                            fileName: "[project]/src/components/site/studio-dashboard.tsx",
                            lineNumber: 1502,
                            columnNumber: 25
                        }, void 0),
                        label: "Total enquiries",
                        value: data.total,
                        color: "#E0BC6A"
                    }, void 0, false, {
                        fileName: "[project]/src/components/site/studio-dashboard.tsx",
                        lineNumber: 1502,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(StatCard, {
                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                            size: 18
                        }, void 0, false, {
                            fileName: "[project]/src/components/site/studio-dashboard.tsx",
                            lineNumber: 1503,
                            columnNumber: 25
                        }, void 0),
                        label: "Response rate",
                        value: data.responseRate,
                        color: "#78DCAA",
                        suffix: "%"
                    }, void 0, false, {
                        fileName: "[project]/src/components/site/studio-dashboard.tsx",
                        lineNumber: 1503,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(StatCard, {
                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                            size: 18
                        }, void 0, false, {
                            fileName: "[project]/src/components/site/studio-dashboard.tsx",
                            lineNumber: 1504,
                            columnNumber: 25
                        }, void 0),
                        label: "From lessons",
                        value: data.fromLessonPage,
                        color: "#C9AEF5"
                    }, void 0, false, {
                        fileName: "[project]/src/components/site/studio-dashboard.tsx",
                        lineNumber: 1504,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(StatCard, {
                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                            size: 18
                        }, void 0, false, {
                            fileName: "[project]/src/components/site/studio-dashboard.tsx",
                            lineNumber: 1505,
                            columnNumber: 25
                        }, void 0),
                        label: "Pending",
                        value: data.statusBreakdown.new,
                        color: "#E08C50"
                    }, void 0, false, {
                        fileName: "[project]/src/components/site/studio-dashboard.tsx",
                        lineNumber: 1505,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/site/studio-dashboard.tsx",
                lineNumber: 1501,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "vsp-card-neutral",
                style: {
                    padding: "28px",
                    marginBottom: "24px"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-baseline justify-between mb-5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                style: {
                                    fontFamily: "var(--font-marcellus), serif",
                                    fontSize: "20px",
                                    color: "#F3EDDF",
                                    margin: 0
                                },
                                children: "Enquiries · last 12 weeks"
                            }, void 0, false, {
                                fileName: "[project]/src/components/site/studio-dashboard.tsx",
                                lineNumber: 1511,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontFamily: "var(--font-geist-mono), monospace",
                                    fontSize: "11px",
                                    color: "rgba(243,237,223,0.5)"
                                },
                                children: [
                                    data.weekly.reduce((a, w)=>a + w.count, 0),
                                    " total"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/site/studio-dashboard.tsx",
                                lineNumber: 1514,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/site/studio-dashboard.tsx",
                        lineNumber: 1510,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-end gap-1.5",
                        style: {
                            height: "160px",
                            paddingBottom: "28px",
                            position: "relative"
                        },
                        children: [
                            [
                                0,
                                0.25,
                                0.5,
                                0.75,
                                1
                            ].map((pct)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    "aria-hidden": "true",
                                    style: {
                                        position: "absolute",
                                        left: 0,
                                        right: 0,
                                        bottom: `${28 + pct * 132}px`,
                                        height: "1px",
                                        background: "rgba(243,237,223,0.06)"
                                    }
                                }, pct, false, {
                                    fileName: "[project]/src/components/site/studio-dashboard.tsx",
                                    lineNumber: 1522,
                                    columnNumber: 13
                                }, this)),
                            data.weekly.map((w)=>{
                                const heightPct = w.count / maxWeekly * 100;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        flex: 1,
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "center",
                                        gap: "6px",
                                        position: "relative"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                fontSize: "11px",
                                                color: "#E0BC6A",
                                                fontFamily: "var(--font-geist-mono), monospace",
                                                opacity: w.count > 0 ? 1 : 0.3
                                            },
                                            children: w.count > 0 ? w.count : ""
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/site/studio-dashboard.tsx",
                                            lineNumber: 1528,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                width: "100%",
                                                height: `${heightPct}%`,
                                                minHeight: w.count > 0 ? "4px" : "2px",
                                                background: w.count > 0 ? "linear-gradient(180deg, #E0BC6A, rgba(224,188,106,0.4))" : "rgba(243,237,223,0.08)",
                                                borderRadius: 0,
                                                transition: "height 400ms cubic-bezier(0.16,1,0.3,1)",
                                                position: "relative"
                                            },
                                            title: `${w.label}: ${w.count} enquiries`
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/site/studio-dashboard.tsx",
                                            lineNumber: 1531,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                position: "absolute",
                                                bottom: "-22px",
                                                fontSize: "9px",
                                                color: "rgba(243,237,223,0.4)",
                                                fontFamily: "var(--font-geist-mono), monospace",
                                                whiteSpace: "nowrap"
                                            },
                                            children: w.label.split(" ")[0]
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/site/studio-dashboard.tsx",
                                            lineNumber: 1543,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, w.week, true, {
                                    fileName: "[project]/src/components/site/studio-dashboard.tsx",
                                    lineNumber: 1527,
                                    columnNumber: 15
                                }, this);
                            })
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/site/studio-dashboard.tsx",
                        lineNumber: 1519,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/site/studio-dashboard.tsx",
                lineNumber: 1509,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-4 grid-cols-1 md:grid-cols-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "vsp-card-neutral",
                        style: {
                            padding: "24px"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                style: {
                                    fontFamily: "var(--font-marcellus), serif",
                                    fontSize: "18px",
                                    color: "#F3EDDF",
                                    margin: "0 0 16px"
                                },
                                children: "By intent"
                            }, void 0, false, {
                                fileName: "[project]/src/components/site/studio-dashboard.tsx",
                                lineNumber: 1556,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-3",
                                children: data.intentBreakdown.map((item)=>{
                                    const pct = data.total > 0 ? Math.round(item.count / data.total * 100) : 0;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between mb-1.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            fontSize: "13.5px",
                                                            color: "rgba(243,237,223,0.82)"
                                                        },
                                                        children: item.label
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/site/studio-dashboard.tsx",
                                                        lineNumber: 1565,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            fontFamily: "var(--font-geist-mono), monospace",
                                                            fontSize: "11px",
                                                            color: item.color
                                                        },
                                                        children: [
                                                            item.count,
                                                            " · ",
                                                            pct,
                                                            "%"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/site/studio-dashboard.tsx",
                                                        lineNumber: 1566,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/site/studio-dashboard.tsx",
                                                lineNumber: 1564,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    height: "6px",
                                                    background: "rgba(243,237,223,0.08)"
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        height: "100%",
                                                        width: `${pct}%`,
                                                        background: item.color,
                                                        transition: "width 400ms ease"
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/site/studio-dashboard.tsx",
                                                    lineNumber: 1571,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/site/studio-dashboard.tsx",
                                                lineNumber: 1570,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, item.intent, true, {
                                        fileName: "[project]/src/components/site/studio-dashboard.tsx",
                                        lineNumber: 1563,
                                        columnNumber: 17
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/src/components/site/studio-dashboard.tsx",
                                lineNumber: 1559,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/site/studio-dashboard.tsx",
                        lineNumber: 1555,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "vsp-card-neutral",
                        style: {
                            padding: "24px"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                style: {
                                    fontFamily: "var(--font-marcellus), serif",
                                    fontSize: "18px",
                                    color: "#F3EDDF",
                                    margin: "0 0 16px"
                                },
                                children: "By source"
                            }, void 0, false, {
                                fileName: "[project]/src/components/site/studio-dashboard.tsx",
                                lineNumber: 1581,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    fontSize: "13.5px",
                                    color: "rgba(243,237,223,0.72)",
                                    lineHeight: 1.6,
                                    marginBottom: "16px"
                                },
                                children: "The free library is the funnel working as designed."
                            }, void 0, false, {
                                fileName: "[project]/src/components/site/studio-dashboard.tsx",
                                lineNumber: 1584,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            position: "relative",
                                            width: "100px",
                                            height: "100px"
                                        },
                                        children: data.total > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                width: "100%",
                                                height: "100%",
                                                borderRadius: "50%",
                                                background: `conic-gradient(#E0BC6A 0% ${data.fromLessonPage / data.total * 360}deg, rgba(243,237,223,0.12) ${data.fromLessonPage / data.total * 360}deg 360deg)`,
                                                mask: "radial-gradient(transparent 28px, black 30px)",
                                                WebkitMask: "radial-gradient(transparent 28px, black 30px)"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/site/studio-dashboard.tsx",
                                            lineNumber: 1591,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/site/studio-dashboard.tsx",
                                        lineNumber: 1588,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            width: "10px",
                                                            height: "10px",
                                                            background: "#E0BC6A"
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/site/studio-dashboard.tsx",
                                                        lineNumber: 1605,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            fontSize: "13px",
                                                            color: "rgba(243,237,223,0.82)"
                                                        },
                                                        children: [
                                                            "From lessons: ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    color: "#E0BC6A",
                                                                    fontFamily: "var(--font-geist-mono), monospace"
                                                                },
                                                                children: data.fromLessonPage
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/site/studio-dashboard.tsx",
                                                                lineNumber: 1607,
                                                                columnNumber: 33
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/site/studio-dashboard.tsx",
                                                        lineNumber: 1606,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/site/studio-dashboard.tsx",
                                                lineNumber: 1604,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            width: "10px",
                                                            height: "10px",
                                                            background: "rgba(243,237,223,0.12)"
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/site/studio-dashboard.tsx",
                                                        lineNumber: 1611,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            fontSize: "13px",
                                                            color: "rgba(243,237,223,0.82)"
                                                        },
                                                        children: [
                                                            "Other: ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    color: "rgba(243,237,223,0.62)",
                                                                    fontFamily: "var(--font-geist-mono), monospace"
                                                                },
                                                                children: data.fromOther
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/site/studio-dashboard.tsx",
                                                                lineNumber: 1613,
                                                                columnNumber: 26
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/site/studio-dashboard.tsx",
                                                        lineNumber: 1612,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/site/studio-dashboard.tsx",
                                                lineNumber: 1610,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/site/studio-dashboard.tsx",
                                        lineNumber: 1603,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/site/studio-dashboard.tsx",
                                lineNumber: 1587,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/site/studio-dashboard.tsx",
                        lineNumber: 1580,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/site/studio-dashboard.tsx",
                lineNumber: 1553,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "vsp-card-neutral",
                style: {
                    padding: "24px",
                    marginTop: "24px"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        style: {
                            fontFamily: "var(--font-marcellus), serif",
                            fontSize: "18px",
                            color: "#F3EDDF",
                            margin: "0 0 16px"
                        },
                        children: "Recent activity"
                    }, void 0, false, {
                        fileName: "[project]/src/components/site/studio-dashboard.tsx",
                        lineNumber: 1623,
                        columnNumber: 9
                    }, this),
                    data.recent.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            fontSize: "13.5px",
                            color: "rgba(243,237,223,0.5)"
                        },
                        children: "No enquiries yet."
                    }, void 0, false, {
                        fileName: "[project]/src/components/site/studio-dashboard.tsx",
                        lineNumber: 1627,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        style: {
                            listStyle: "none",
                            padding: 0,
                            margin: 0,
                            display: "flex",
                            flexDirection: "column",
                            gap: "10px"
                        },
                        children: data.recent.map((r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "flex items-center justify-between gap-3",
                                style: {
                                    padding: "8px 0",
                                    borderBottom: "1px solid rgba(243,237,223,0.08)"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontSize: "13px",
                                            color: "rgba(243,237,223,0.82)"
                                        },
                                        children: r.intent === "lesson" ? "One-to-one Lessons" : r.intent === "booking" ? "Performance Booking" : "Collaboration"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/site/studio-dashboard.tsx",
                                        lineNumber: 1632,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontSize: "10px",
                                                    color: r.status === "new" ? "#78DCAA" : r.status === "replied" ? "#C9AEF5" : "rgba(243,237,223,0.5)",
                                                    fontFamily: "var(--font-geist-mono), monospace",
                                                    letterSpacing: "0.08em",
                                                    textTransform: "uppercase"
                                                },
                                                children: r.status
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/site/studio-dashboard.tsx",
                                                lineNumber: 1636,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontSize: "11px",
                                                    color: "rgba(243,237,223,0.5)",
                                                    fontFamily: "var(--font-geist-mono), monospace"
                                                },
                                                children: new Date(r.createdAt).toLocaleDateString("en-US", {
                                                    month: "short",
                                                    day: "numeric"
                                                })
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/site/studio-dashboard.tsx",
                                                lineNumber: 1639,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/site/studio-dashboard.tsx",
                                        lineNumber: 1635,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, r.id, true, {
                                fileName: "[project]/src/components/site/studio-dashboard.tsx",
                                lineNumber: 1631,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/site/studio-dashboard.tsx",
                        lineNumber: 1629,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/site/studio-dashboard.tsx",
                lineNumber: 1622,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/site/studio-dashboard.tsx",
        lineNumber: 1493,
        columnNumber: 5
    }, this);
}
const __TURBOPACK__default__export__ = StudioDashboard;
}),
];

//# sourceMappingURL=src_components_site_fb9f3408._.js.map