(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/ui/sheet.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Sheet",
    ()=>Sheet,
    "SheetClose",
    ()=>SheetClose,
    "SheetContent",
    ()=>SheetContent,
    "SheetDescription",
    ()=>SheetDescription,
    "SheetFooter",
    ()=>SheetFooter,
    "SheetHeader",
    ()=>SheetHeader,
    "SheetTitle",
    ()=>SheetTitle,
    "SheetTrigger",
    ()=>SheetTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-dialog/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as XIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
function Sheet({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "sheet",
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/sheet.tsx",
        lineNumber: 10,
        columnNumber: 10
    }, this);
}
_c = Sheet;
function SheetTrigger({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"], {
        "data-slot": "sheet-trigger",
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/sheet.tsx",
        lineNumber: 16,
        columnNumber: 10
    }, this);
}
_c1 = SheetTrigger;
function SheetClose({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Close"], {
        "data-slot": "sheet-close",
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/sheet.tsx",
        lineNumber: 22,
        columnNumber: 10
    }, this);
}
_c2 = SheetClose;
function SheetPortal({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"], {
        "data-slot": "sheet-portal",
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/sheet.tsx",
        lineNumber: 28,
        columnNumber: 10
    }, this);
}
_c3 = SheetPortal;
function SheetOverlay({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Overlay"], {
        "data-slot": "sheet-overlay",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/sheet.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, this);
}
_c4 = SheetOverlay;
function SheetContent({ className, children, side = "right", ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SheetPortal, {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SheetOverlay, {}, void 0, false, {
                fileName: "[project]/src/components/ui/sheet.tsx",
                lineNumber: 57,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
                "data-slot": "sheet-content",
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-background data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 flex flex-col gap-4 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500", side === "right" && "data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm", side === "left" && "data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm", side === "top" && "data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b", side === "bottom" && "data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t", className),
                ...props,
                children: [
                    children,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Close"], {
                        className: "ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XIcon$3e$__["XIcon"], {
                                className: "size-4"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/sheet.tsx",
                                lineNumber: 76,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "sr-only",
                                children: "Close"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/sheet.tsx",
                                lineNumber: 77,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/sheet.tsx",
                        lineNumber: 75,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/sheet.tsx",
                lineNumber: 58,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/sheet.tsx",
        lineNumber: 56,
        columnNumber: 5
    }, this);
}
_c5 = SheetContent;
function SheetHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "sheet-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col gap-1.5 p-4", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/sheet.tsx",
        lineNumber: 86,
        columnNumber: 5
    }, this);
}
_c6 = SheetHeader;
function SheetFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "sheet-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("mt-auto flex flex-col gap-2 p-4", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/sheet.tsx",
        lineNumber: 96,
        columnNumber: 5
    }, this);
}
_c7 = SheetFooter;
function SheetTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"], {
        "data-slot": "sheet-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-foreground font-semibold", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/sheet.tsx",
        lineNumber: 109,
        columnNumber: 5
    }, this);
}
_c8 = SheetTitle;
function SheetDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Description"], {
        "data-slot": "sheet-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-muted-foreground text-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/sheet.tsx",
        lineNumber: 122,
        columnNumber: 5
    }, this);
}
_c9 = SheetDescription;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;
__turbopack_context__.k.register(_c, "Sheet");
__turbopack_context__.k.register(_c1, "SheetTrigger");
__turbopack_context__.k.register(_c2, "SheetClose");
__turbopack_context__.k.register(_c3, "SheetPortal");
__turbopack_context__.k.register(_c4, "SheetOverlay");
__turbopack_context__.k.register(_c5, "SheetContent");
__turbopack_context__.k.register(_c6, "SheetHeader");
__turbopack_context__.k.register(_c7, "SheetFooter");
__turbopack_context__.k.register(_c8, "SheetTitle");
__turbopack_context__.k.register(_c9, "SheetDescription");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/site/nav.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Nav",
    ()=>Nav
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.js [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/sheet.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function Nav({ megaMenu }) {
    _s();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [mobileOpen, setMobileOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [expandedGroup, setExpandedGroup] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const navRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const closeTimer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Nav.useEffect": ()=>{
            if (!open) return;
            const onKey = {
                "Nav.useEffect.onKey": (e)=>{
                    if (e.key === "Escape") setOpen(false);
                }
            }["Nav.useEffect.onKey"];
            document.addEventListener("keydown", onKey);
            return ({
                "Nav.useEffect": ()=>document.removeEventListener("keydown", onKey)
            })["Nav.useEffect"];
        }
    }["Nav.useEffect"], [
        open
    ]);
    const cancelClose = ()=>{
        if (closeTimer.current) {
            clearTimeout(closeTimer.current);
            closeTimer.current = null;
        }
    };
    const scheduleClose = ()=>{
        cancelClose();
        closeTimer.current = setTimeout(()=>setOpen(false), 120);
    };
    const links = [
        {
            href: "/library",
            label: "Library",
            match: "/library"
        },
        {
            href: "/about",
            label: "The Guru",
            match: "/about"
        },
        {
            href: "/honours",
            label: "Honours",
            match: "/honours"
        },
        {
            href: "/stage",
            label: "Stage",
            match: "/stage"
        }
    ];
    const isActive = (match)=>{
        if (match === "/library") return pathname === "/library" || pathname.startsWith("/lessons/");
        return pathname === match;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        ref: navRef,
        "aria-label": "Primary",
        onMouseLeave: scheduleClose,
        onBlur: (e)=>{
            if (!e.currentTarget.contains(e.relatedTarget)) setOpen(false);
        },
        className: "fixed top-0 left-0 right-0 z-50",
        style: {
            background: "rgba(22,16,42,0.92)",
            backdropFilter: "blur(22px)",
            WebkitBackdropFilter: "blur(22px)",
            borderBottom: "1px solid rgba(224,188,106,0.24)"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between gap-4 sm:gap-7 px-5 sm:px-8",
                style: {
                    paddingBlock: "14px"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "/",
                        "aria-label": "Suka Pavalan — back to homepage",
                        className: "shrink-0",
                        style: {
                            fontFamily: "var(--font-marcellus), serif",
                            fontSize: "clamp(15px, 3.5vw, 21px)",
                            letterSpacing: "0.07em",
                            color: "#E0BC6A"
                        },
                        children: "SUKA PAVALAN"
                    }, void 0, false, {
                        fileName: "[project]/src/components/site/nav.tsx",
                        lineNumber: 80,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden md:flex items-center gap-6 lg:gap-7 text-sm font-medium",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                "aria-expanded": open,
                                "aria-controls": "lessons-menu",
                                "aria-label": "Lessons — open category menu",
                                onClick: ()=>setOpen((v)=>!v),
                                onMouseEnter: ()=>{
                                    cancelClose();
                                    setOpen(true);
                                },
                                onFocus: ()=>setOpen(true),
                                className: "relative flex items-center gap-1.5 cursor-pointer bg-transparent border-none",
                                style: {
                                    color: "#F3EDDF",
                                    fontSize: "14px",
                                    fontWeight: 500
                                },
                                children: [
                                    "Lessons",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                        size: 12,
                                        "aria-hidden": true,
                                        style: {
                                            color: "#E0BC6A",
                                            transition: "transform 200ms ease",
                                            transform: open ? "rotate(180deg)" : "none"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/site/nav.tsx",
                                        lineNumber: 111,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/site/nav.tsx",
                                lineNumber: 96,
                                columnNumber: 11
                            }, this),
                            links.map((l)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: l.href,
                                    className: "transition-colors relative",
                                    style: {
                                        color: isActive(l.match) ? "#F3EDDF" : "rgba(243,237,223,0.72)",
                                        paddingBottom: "4px",
                                        borderBottom: isActive(l.match) ? "2px solid #E0BC6A" : "2px solid transparent",
                                        transition: "color 200ms ease, border-color 200ms ease"
                                    },
                                    children: l.label
                                }, l.href, false, {
                                    fileName: "[project]/src/components/site/nav.tsx",
                                    lineNumber: 122,
                                    columnNumber: 13
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/site/nav.tsx",
                        lineNumber: 95,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "/#enrol",
                        className: "shrink-0",
                        style: {
                            padding: "10px 20px",
                            border: "1px solid #E0BC6A",
                            color: "#E0BC6A",
                            fontFamily: "var(--font-marcellus), serif",
                            fontSize: "14px",
                            letterSpacing: "0.06em"
                        },
                        children: "Enrol"
                    }, void 0, false, {
                        fileName: "[project]/src/components/site/nav.tsx",
                        lineNumber: 138,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "md:hidden",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Sheet"], {
                            open: mobileOpen,
                            onOpenChange: setMobileOpen,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SheetTrigger"], {
                                    asChild: true,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        "aria-label": "Open menu",
                                        className: "flex items-center justify-center",
                                        style: {
                                            width: "44px",
                                            height: "44px",
                                            background: "transparent",
                                            border: "1px solid rgba(224,188,106,0.34)",
                                            color: "#E0BC6A",
                                            cursor: "pointer",
                                            borderRadius: 0
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                            size: 18,
                                            "aria-hidden": true
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/site/nav.tsx",
                                            lineNumber: 171,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/site/nav.tsx",
                                        lineNumber: 157,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/site/nav.tsx",
                                    lineNumber: 156,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SheetContent"], {
                                    side: "right",
                                    className: "rounded-none border-l border-[rgba(224,188,106,0.34)] bg-[#16102A] p-0",
                                    style: {
                                        width: "320px",
                                        maxWidth: "85vw"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SheetHeader"], {
                                            className: "sr-only",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SheetTitle"], {
                                                children: "Navigation"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/site/nav.tsx",
                                                lineNumber: 180,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/site/nav.tsx",
                                            lineNumber: 179,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col h-full vsp-scroll",
                                            style: {
                                                overflowY: "auto"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between",
                                                    style: {
                                                        padding: "18px 22px",
                                                        borderBottom: "1px solid rgba(224,188,106,0.24)"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            style: {
                                                                fontFamily: "var(--font-marcellus), serif",
                                                                fontSize: "18px",
                                                                letterSpacing: "0.06em",
                                                                color: "#E0BC6A"
                                                            },
                                                            children: "SUKA PAVALAN"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/site/nav.tsx",
                                                            lineNumber: 185,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: ()=>setMobileOpen(false),
                                                            "aria-label": "Close menu",
                                                            style: {
                                                                background: "transparent",
                                                                border: "none",
                                                                color: "rgba(243,237,223,0.62)",
                                                                cursor: "pointer",
                                                                padding: "4px"
                                                            },
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                                size: 18
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/site/nav.tsx",
                                                                lineNumber: 194,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/site/nav.tsx",
                                                            lineNumber: 188,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/site/nav.tsx",
                                                    lineNumber: 184,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                                    className: "flex flex-col",
                                                    style: {
                                                        padding: "14px 22px",
                                                        gap: "4px"
                                                    },
                                                    children: [
                                                        [
                                                            {
                                                                href: "/library",
                                                                label: "Library"
                                                            },
                                                            {
                                                                href: "/about",
                                                                label: "The Guru"
                                                            },
                                                            {
                                                                href: "/honours",
                                                                label: "Honours"
                                                            },
                                                            {
                                                                href: "/stage",
                                                                label: "Stage"
                                                            },
                                                            {
                                                                href: "/learn",
                                                                label: "Learn the Violin"
                                                            },
                                                            {
                                                                href: "/testimonials",
                                                                label: "Testimonials"
                                                            }
                                                        ].map((l)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                href: l.href,
                                                                onClick: ()=>setMobileOpen(false),
                                                                className: "transition-colors hover:text-gold-hover",
                                                                style: {
                                                                    fontFamily: "var(--font-marcellus), serif",
                                                                    fontSize: "22px",
                                                                    color: isActive(l.href) ? "#F3EDDF" : "rgba(243,237,223,0.82)",
                                                                    padding: "10px 0",
                                                                    borderBottom: "1px solid rgba(243,237,223,0.08)"
                                                                },
                                                                children: l.label
                                                            }, l.href, false, {
                                                                fileName: "[project]/src/components/site/nav.tsx",
                                                                lineNumber: 208,
                                                                columnNumber: 21
                                                            }, this)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: "/#enrol",
                                                            onClick: ()=>setMobileOpen(false),
                                                            className: "vsp-cta-gold flex items-center justify-center",
                                                            style: {
                                                                marginTop: "16px",
                                                                padding: "14px 20px",
                                                                background: "#E0BC6A",
                                                                color: "#1B1233",
                                                                fontFamily: "var(--font-marcellus), serif",
                                                                fontSize: "15px",
                                                                letterSpacing: "0.04em"
                                                            },
                                                            children: "Enrol"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/site/nav.tsx",
                                                            lineNumber: 224,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/site/nav.tsx",
                                                    lineNumber: 199,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        padding: "8px 22px 24px",
                                                        borderTop: "1px solid rgba(224,188,106,0.16)",
                                                        marginTop: "12px"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "vsp-eyebrow",
                                                            style: {
                                                                display: "block",
                                                                margin: "14px 0 10px"
                                                            },
                                                            children: "Lessons by category"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/site/nav.tsx",
                                                            lineNumber: 244,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex flex-col",
                                                            style: {
                                                                gap: "0"
                                                            },
                                                            children: megaMenu.map((col)=>{
                                                                const colKey = col.label || "Light Music";
                                                                const isExpanded = expandedGroup === colKey;
                                                                const totalLessons = col.items.reduce((sum, c)=>sum + c.count, 0);
                                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    style: {
                                                                        borderBottom: "1px solid rgba(243,237,223,0.08)"
                                                                    },
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            type: "button",
                                                                            onClick: ()=>setExpandedGroup(isExpanded ? null : colKey),
                                                                            className: "flex items-center justify-between w-full",
                                                                            style: {
                                                                                padding: "12px 0",
                                                                                background: "transparent",
                                                                                border: "none",
                                                                                color: "#F3EDDF",
                                                                                fontFamily: "var(--font-marcellus), serif",
                                                                                fontSize: "16px",
                                                                                cursor: "pointer",
                                                                                textAlign: "left"
                                                                            },
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    children: colKey
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/site/nav.tsx",
                                                                                    lineNumber: 269,
                                                                                    columnNumber: 29
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    style: {
                                                                                        display: "flex",
                                                                                        alignItems: "center",
                                                                                        gap: "8px"
                                                                                    },
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            style: {
                                                                                                fontFamily: "var(--font-geist-mono), monospace",
                                                                                                fontSize: "11px",
                                                                                                color: "rgba(224,188,106,0.6)"
                                                                                            },
                                                                                            children: totalLessons
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/components/site/nav.tsx",
                                                                                            lineNumber: 271,
                                                                                            columnNumber: 31
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                                                            size: 14,
                                                                                            "aria-hidden": true,
                                                                                            style: {
                                                                                                color: "#E0BC6A",
                                                                                                transition: "transform 200ms ease",
                                                                                                transform: isExpanded ? "rotate(180deg)" : "none"
                                                                                            }
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/components/site/nav.tsx",
                                                                                            lineNumber: 274,
                                                                                            columnNumber: 31
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/components/site/nav.tsx",
                                                                                    lineNumber: 270,
                                                                                    columnNumber: 29
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/components/site/nav.tsx",
                                                                            lineNumber: 254,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        isExpanded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex flex-col",
                                                                            style: {
                                                                                paddingBottom: "10px",
                                                                                paddingLeft: "12px",
                                                                                gap: "6px"
                                                                            },
                                                                            children: col.items.map((c)=>{
                                                                                const empty = c.count === 0;
                                                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                                    href: `/library?category=${c.slug}`,
                                                                                    onClick: ()=>setMobileOpen(false),
                                                                                    className: "flex items-center justify-between transition-colors hover:text-gold-hover",
                                                                                    style: {
                                                                                        fontSize: "14px",
                                                                                        color: empty ? "rgba(243,237,223,0.5)" : "rgba(243,237,223,0.82)",
                                                                                        padding: "5px 0"
                                                                                    },
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            children: c.name
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/components/site/nav.tsx",
                                                                                            lineNumber: 301,
                                                                                            columnNumber: 37
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            style: {
                                                                                                fontFamily: "var(--font-geist-mono), monospace",
                                                                                                fontSize: "11px",
                                                                                                color: "rgba(224,188,106,0.6)"
                                                                                            },
                                                                                            children: c.count
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/components/site/nav.tsx",
                                                                                            lineNumber: 302,
                                                                                            columnNumber: 37
                                                                                        }, this)
                                                                                    ]
                                                                                }, c.slug, true, {
                                                                                    fileName: "[project]/src/components/site/nav.tsx",
                                                                                    lineNumber: 290,
                                                                                    columnNumber: 35
                                                                                }, this);
                                                                            })
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/site/nav.tsx",
                                                                            lineNumber: 286,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, colKey, true, {
                                                                    fileName: "[project]/src/components/site/nav.tsx",
                                                                    lineNumber: 253,
                                                                    columnNumber: 25
                                                                }, this);
                                                            })
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/site/nav.tsx",
                                                            lineNumber: 247,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/site/nav.tsx",
                                                    lineNumber: 243,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/site/nav.tsx",
                                            lineNumber: 182,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/site/nav.tsx",
                                    lineNumber: 174,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/site/nav.tsx",
                            lineNumber: 155,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/site/nav.tsx",
                        lineNumber: 154,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/site/nav.tsx",
                lineNumber: 76,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: "lessons-menu",
                role: "region",
                "aria-label": "Lessons by category",
                "aria-hidden": !open,
                onMouseEnter: cancelClose,
                className: "vsp-mega-menu",
                style: {
                    padding: open ? "26px 32px 30px" : "0 32px",
                    maxHeight: open ? "70vh" : "0",
                    overflowY: open ? "auto" : "hidden",
                    visibility: open ? "visible" : "hidden",
                    opacity: open ? 1 : 0,
                    transition: "max-height 340ms cubic-bezier(.16,1,.3,1), opacity 240ms ease, padding 340ms, visibility 340ms",
                    borderTop: open ? "1px solid rgba(224,188,106,0.24)" : "1px solid transparent",
                    background: "rgba(22,16,42,0.96)"
                },
                children: [
                    megaMenu.map((col)=>{
                        const colKey = col.label || "Light Music";
                        const totalLessons = col.items.reduce((sum, c)=>sum + c.count, 0);
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "vsp-mega-group",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: `/library?category=${col.items[0]?.slug ?? ""}`,
                                    className: "vsp-eyebrow vsp-mega-group-header",
                                    style: {
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                        textDecoration: "none",
                                        color: "#E0BC6A",
                                        cursor: "pointer",
                                        marginBottom: "12px"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: colKey
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/site/nav.tsx",
                                            lineNumber: 361,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                fontFamily: "var(--font-geist-mono), monospace",
                                                fontSize: "10px",
                                                color: "rgba(243,237,223,0.5)"
                                            },
                                            children: totalLessons
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/site/nav.tsx",
                                            lineNumber: 362,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/site/nav.tsx",
                                    lineNumber: 348,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col",
                                    style: {
                                        gap: "6px",
                                        paddingLeft: "8px"
                                    },
                                    children: col.items.map((c)=>{
                                        const empty = c.count === 0;
                                        const opacity = empty ? 0.5 : 0.82;
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: `/library?category=${c.slug}`,
                                            "data-category": c.slug,
                                            className: "transition-colors hover:text-gold-hover",
                                            style: {
                                                fontSize: "13px",
                                                color: `rgba(243,237,223,${opacity})`,
                                                paddingLeft: "12px",
                                                position: "relative"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    "aria-hidden": "true",
                                                    style: {
                                                        position: "absolute",
                                                        left: "0",
                                                        top: "50%",
                                                        width: "6px",
                                                        height: "1px",
                                                        background: "rgba(224,188,106,0.3)"
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/site/nav.tsx",
                                                    lineNumber: 388,
                                                    columnNumber: 23
                                                }, this),
                                                c.name,
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        color: `rgba(243,237,223,${empty ? 0.4 : 0.5})`,
                                                        fontFamily: "var(--font-geist-mono), monospace",
                                                        fontSize: "10.5px"
                                                    },
                                                    children: c.count
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/site/nav.tsx",
                                                    lineNumber: 400,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, c.slug, true, {
                                            fileName: "[project]/src/components/site/nav.tsx",
                                            lineNumber: 376,
                                            columnNumber: 21
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/src/components/site/nav.tsx",
                                    lineNumber: 371,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, colKey, true, {
                            fileName: "[project]/src/components/site/nav.tsx",
                            lineNumber: 346,
                            columnNumber: 13
                        }, this);
                    }),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "vsp-mega-group vsp-mega-more hidden md:flex flex-col gap-2.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "vsp-eyebrow",
                                children: "Pages"
                            }, void 0, false, {
                                fileName: "[project]/src/components/site/nav.tsx",
                                lineNumber: 418,
                                columnNumber: 11
                            }, this),
                            [
                                {
                                    href: "/learn",
                                    label: "Learn the Violin"
                                },
                                {
                                    href: "/about",
                                    label: "The Guru"
                                },
                                {
                                    href: "/honours",
                                    label: "Honours"
                                },
                                {
                                    href: "/stage",
                                    label: "Stage"
                                },
                                {
                                    href: "/testimonials",
                                    label: "Testimonials"
                                }
                            ].map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: p.href,
                                    className: "transition-colors hover:text-gold-hover",
                                    style: {
                                        fontSize: "13px",
                                        color: "rgba(243,237,223,0.82)"
                                    },
                                    children: p.label
                                }, p.href, false, {
                                    fileName: "[project]/src/components/site/nav.tsx",
                                    lineNumber: 426,
                                    columnNumber: 13
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/site/nav.tsx",
                        lineNumber: 417,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/site/nav.tsx",
                lineNumber: 322,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/site/nav.tsx",
        lineNumber: 61,
        columnNumber: 5
    }, this);
}
_s(Nav, "eA9M2oGkVZDl54X9O37slKM0364=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = Nav;
var _c;
__turbopack_context__.k.register(_c, "Nav");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/site/use-reveal.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useReveal",
    ()=>useReveal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
function useReveal(options) {
    _s();
    const { threshold = 0.15, rootMargin = "0px 0px -10% 0px", once = true } = options ?? {};
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [visible, setVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useReveal.useEffect": ()=>{
            const el = ref.current;
            if (!el) return;
            const observer = new IntersectionObserver({
                "useReveal.useEffect": (entries)=>{
                    for (const entry of entries){
                        if (entry.isIntersecting) {
                            setVisible(true);
                            if (once) observer.unobserve(entry.target);
                        } else if (!once) {
                            setVisible(false);
                        }
                    }
                }
            }["useReveal.useEffect"], {
                threshold,
                rootMargin
            });
            observer.observe(el);
            return ({
                "useReveal.useEffect": ()=>observer.disconnect()
            })["useReveal.useEffect"];
        }
    }["useReveal.useEffect"], [
        threshold,
        rootMargin,
        once
    ]);
    return {
        ref,
        visible
    };
}
_s(useReveal, "F7BtIAxVh3vOWU1Jr24RYsj9CHc=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/site/library-preview.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LibraryPreview",
    ()=>LibraryPreview,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$site$2f$use$2d$reveal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/site/use-reveal.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
/* ---- Constants -------------------------------------------------- */ const MAX_CARDS = 8;
const LEVEL_LABELS = {
    1: "Level I",
    2: "Level II",
    3: "Level III",
    4: "Level IV",
    5: "Level V",
    6: "Level VI",
    7: "Level VII"
};
const STAT_CELLS = [
    {
        key: "lessons",
        label: "Lessons"
    },
    {
        key: "notationSheets",
        label: "Notation sheets"
    },
    {
        key: "categories",
        label: "Categories"
    },
    {
        key: "ragas",
        label: "Ragas"
    }
];
const ASSET_BADGES = [
    {
        key: "hasEnglishNotation",
        label: "EN",
        title: "English notation PDF"
    },
    {
        key: "hasTamilNotation",
        label: "TA",
        title: "Tamil notation PDF"
    },
    {
        key: "hasAudio",
        label: "♪",
        title: "Practice audio tracks"
    },
    {
        key: "hasVideo",
        label: "▶",
        title: "Violin / vocal video"
    }
];
const ALL_SLUG = "all";
/* ---- Helpers ---------------------------------------------------- */ function levelLabel(level) {
    if (level == null) return null;
    return LEVEL_LABELS[level] ?? `Level ${level}`;
}
function categoryName(slug, categories) {
    return categories.find((c)=>c.slug === slug)?.name ?? slug;
}
function LibraryPreview({ lessons, categories, stats }) {
    _s();
    const { ref, visible } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$site$2f$use$2d$reveal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReveal"])({
        threshold: 0.12
    });
    const [activeSlug, setActiveSlug] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(ALL_SLUG);
    const visibleCategories = categories.filter((c)=>c.count > 0).slice().sort((a, b)=>b.count - a.count); // sort by count (most lessons first)
    // On the homepage, show limited categories. Full list on /library page.
    // Desktop: 6 chips + "All" + "+N more" link (wraps naturally)
    // Mobile: horizontal scrollable rail (no wrapping, snap scroll)
    const MAX_CHIPS_DESKTOP = 6;
    const MAX_CHIPS_MOBILE = 4;
    const homepageCategories = visibleCategories.slice(0, MAX_CHIPS_DESKTOP);
    const mobileCategories = visibleCategories.slice(0, MAX_CHIPS_MOBILE);
    const showViewAllLink = visibleCategories.length > MAX_CHIPS_DESKTOP;
    const showMobileMore = visibleCategories.length > MAX_CHIPS_MOBILE;
    const filtered = activeSlug === ALL_SLUG ? lessons : lessons.filter((l)=>l.category === activeSlug);
    const shown = filtered.slice(0, MAX_CARDS);
    const totalCount = stats.lessons || lessons.length;
    const allLabel = `All ${totalCount}`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "library",
        ref: ref,
        className: `reveal py-14 md:py-20 px-5 md:px-8 ${visible ? "is-visible" : ""}`,
        style: {
            maxWidth: 1440,
            margin: "0 auto"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                style: {
                    marginBottom: 40
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "vsp-eyebrow",
                        style: {
                            display: "block",
                            marginBottom: 18
                        },
                        children: "The Library · free forever"
                    }, void 0, false, {
                        fileName: "[project]/src/components/site/library-preview.tsx",
                        lineNumber: 161,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "font-display",
                        style: {
                            margin: 0,
                            fontSize: "clamp(30px, 4.2vw, 48px)",
                            lineHeight: 1.06,
                            letterSpacing: "0.005em",
                            color: "#F3EDDF",
                            maxWidth: "22ch"
                        },
                        children: [
                            totalCount,
                            " notation lessons. One lineage."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/site/library-preview.tsx",
                        lineNumber: 167,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            margin: "20px 0 0",
                            fontSize: 16,
                            lineHeight: 1.65,
                            color: "rgba(243, 237, 223, 0.72)",
                            maxWidth: "62ch"
                        },
                        children: "Every Carnatic violin lesson Suka Pavalan teaches, given away free — Tamil and English notation PDFs, violin and vocal video, and practice tracks in five sruthis. The library is the funnel; one-to-one teaching is the craft."
                    }, void 0, false, {
                        fileName: "[project]/src/components/site/library-preview.tsx",
                        lineNumber: 180,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/site/library-preview.tsx",
                lineNumber: 160,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 md:grid-cols-4",
                style: {
                    borderTop: "1px solid rgba(224, 188, 106, 0.26)",
                    borderBottom: "1px solid rgba(224, 188, 106, 0.26)"
                },
                children: STAT_CELLS.map((cell, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            padding: "20px 22px",
                            display: "flex",
                            flexDirection: "column",
                            gap: 6,
                            borderRight: i < STAT_CELLS.length - 1 ? "1px solid rgba(224, 188, 106, 0.22)" : undefined
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-display",
                                style: {
                                    fontSize: 30,
                                    lineHeight: 1,
                                    color: "#E0BC6A"
                                },
                                children: stats[cell.key]
                            }, void 0, false, {
                                fileName: "[project]/src/components/site/library-preview.tsx",
                                lineNumber: 218,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-mono",
                                style: {
                                    fontSize: "9.5px",
                                    letterSpacing: "0.14em",
                                    textTransform: "uppercase",
                                    color: "rgba(243, 237, 223, 0.62)"
                                },
                                children: cell.label
                            }, void 0, false, {
                                fileName: "[project]/src/components/site/library-preview.tsx",
                                lineNumber: 224,
                                columnNumber: 13
                            }, this)
                        ]
                    }, cell.key, true, {
                        fileName: "[project]/src/components/site/library-preview.tsx",
                        lineNumber: 205,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/site/library-preview.tsx",
                lineNumber: 197,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    marginTop: 34,
                    marginBottom: 26
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "vsp-chip-rail md:hidden",
                        style: {
                            gap: "7px",
                            overflowX: "auto",
                            scrollSnapType: "x mandatory",
                            WebkitOverflowScrolling: "touch",
                            paddingBottom: "4px",
                            marginLeft: "-4px",
                            paddingLeft: "4px",
                            marginRight: "-4px",
                            paddingRight: "4px"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Chip, {
                                label: allLabel,
                                active: activeSlug === ALL_SLUG,
                                onClick: ()=>setActiveSlug(ALL_SLUG)
                            }, void 0, false, {
                                fileName: "[project]/src/components/site/library-preview.tsx",
                                lineNumber: 256,
                                columnNumber: 11
                            }, this),
                            mobileCategories.map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Chip, {
                                    label: `${cat.name} ${cat.count}`,
                                    active: activeSlug === cat.slug,
                                    onClick: ()=>setActiveSlug(cat.slug)
                                }, cat.slug, false, {
                                    fileName: "[project]/src/components/site/library-preview.tsx",
                                    lineNumber: 262,
                                    columnNumber: 13
                                }, this)),
                            showMobileMore && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "/library",
                                style: {
                                    fontFamily: "var(--font-geist-mono), monospace",
                                    fontSize: "10px",
                                    letterSpacing: "0.14em",
                                    textTransform: "uppercase",
                                    color: "#E0BC6A",
                                    padding: "7px 13px",
                                    border: "1px solid rgba(224,188,106,0.34)",
                                    whiteSpace: "nowrap",
                                    textDecoration: "none",
                                    scrollSnapAlign: "start",
                                    flexShrink: 0
                                },
                                children: "All categories"
                            }, void 0, false, {
                                fileName: "[project]/src/components/site/library-preview.tsx",
                                lineNumber: 270,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/site/library-preview.tsx",
                        lineNumber: 242,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden md:flex flex-wrap items-center",
                        style: {
                            gap: 7
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-mono",
                                style: {
                                    fontSize: "9.5px",
                                    letterSpacing: "0.16em",
                                    textTransform: "uppercase",
                                    color: "rgba(243, 237, 223, 0.6)",
                                    paddingRight: 6
                                },
                                children: "Category"
                            }, void 0, false, {
                                fileName: "[project]/src/components/site/library-preview.tsx",
                                lineNumber: 293,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Chip, {
                                label: allLabel,
                                active: activeSlug === ALL_SLUG,
                                onClick: ()=>setActiveSlug(ALL_SLUG)
                            }, void 0, false, {
                                fileName: "[project]/src/components/site/library-preview.tsx",
                                lineNumber: 305,
                                columnNumber: 11
                            }, this),
                            homepageCategories.map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Chip, {
                                    label: `${cat.name} ${cat.count}`,
                                    active: activeSlug === cat.slug,
                                    onClick: ()=>setActiveSlug(cat.slug)
                                }, cat.slug, false, {
                                    fileName: "[project]/src/components/site/library-preview.tsx",
                                    lineNumber: 311,
                                    columnNumber: 13
                                }, this)),
                            showViewAllLink && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "/library",
                                className: "transition-colors hover:text-gold-hover",
                                style: {
                                    fontFamily: "var(--font-geist-mono), monospace",
                                    fontSize: "10px",
                                    letterSpacing: "0.14em",
                                    textTransform: "uppercase",
                                    color: "#E0BC6A",
                                    padding: "7px 13px",
                                    border: "1px solid rgba(224,188,106,0.34)",
                                    whiteSpace: "nowrap",
                                    textDecoration: "none"
                                },
                                children: [
                                    "+",
                                    visibleCategories.length - MAX_CHIPS_DESKTOP,
                                    " more"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/site/library-preview.tsx",
                                lineNumber: 319,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/site/library-preview.tsx",
                        lineNumber: 292,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/site/library-preview.tsx",
                lineNumber: 240,
                columnNumber: 7
            }, this),
            shown.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
                style: {
                    gap: 16
                },
                children: shown.map((lesson, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LessonCard, {
                        lesson: lesson,
                        categoryName: categoryName(lesson.category, categories),
                        gold: idx === 0
                    }, lesson.id, false, {
                        fileName: "[project]/src/components/site/library-preview.tsx",
                        lineNumber: 347,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/site/library-preview.tsx",
                lineNumber: 342,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "font-mono",
                style: {
                    padding: "48px 0",
                    textAlign: "center",
                    color: "rgba(243, 237, 223, 0.5)",
                    fontSize: 12,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    border: "1px dashed rgba(243, 237, 223, 0.18)"
                },
                children: "No lessons in this category yet."
            }, void 0, false, {
                fileName: "[project]/src/components/site/library-preview.tsx",
                lineNumber: 356,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    marginTop: 40,
                    textAlign: "center"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: "/library",
                    className: "font-display",
                    style: {
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 10,
                        fontSize: 19,
                        letterSpacing: "0.02em",
                        color: "#E0BC6A",
                        borderBottom: "1px solid rgba(224, 188, 106, 0.34)",
                        paddingBottom: 6,
                        transition: "color 200ms ease, border-color 200ms ease"
                    },
                    children: [
                        "Browse all ",
                        totalCount,
                        " lessons",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            "aria-hidden": true,
                            style: {
                                transform: "translateY(-1px)"
                            },
                            children: "→"
                        }, void 0, false, {
                            fileName: "[project]/src/components/site/library-preview.tsx",
                            lineNumber: 390,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/site/library-preview.tsx",
                    lineNumber: 374,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/site/library-preview.tsx",
                lineNumber: 373,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/site/library-preview.tsx",
        lineNumber: 153,
        columnNumber: 5
    }, this);
}
_s(LibraryPreview, "5nrh9b8jHnmZ0+oHJPPiFMFDUhI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$site$2f$use$2d$reveal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReveal"]
    ];
});
_c = LibraryPreview;
/* ---- Chip ------------------------------------------------------- */ function Chip({ label, active, onClick }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: "button",
        onClick: onClick,
        "aria-pressed": active,
        className: "lib-chip font-mono",
        style: {
            padding: "9px 16px",
            border: active ? "1px solid rgba(224, 188, 106, 0.6)" : "1px solid rgba(243, 237, 223, 0.5)",
            background: active ? "rgba(224, 188, 106, 0.08)" : "transparent",
            color: active ? "#E0BC6A" : "rgba(243, 237, 223, 0.72)",
            fontSize: 11,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            cursor: "pointer",
            borderRadius: 0,
            whiteSpace: "nowrap",
            flexShrink: 0,
            scrollSnapAlign: "start"
        },
        children: label
    }, void 0, false, {
        fileName: "[project]/src/components/site/library-preview.tsx",
        lineNumber: 411,
        columnNumber: 5
    }, this);
}
_c1 = Chip;
/* ---- Lesson card ------------------------------------------------ */ function LessonCard({ lesson, categoryName, gold }) {
    const level = levelLabel(lesson.level);
    const meta = [
        categoryName,
        level
    ].filter(Boolean).join(" · ");
    const ragaThala = [
        lesson.raga,
        lesson.thala
    ].filter(Boolean).join(" · ");
    // Resolve assets with graceful defaults (all present if omitted).
    const assets = {
        hasEnglishNotation: lesson.assets?.hasEnglishNotation ?? true,
        hasTamilNotation: lesson.assets?.hasTamilNotation ?? true,
        hasAudio: lesson.assets?.hasAudio ?? true,
        hasVideo: lesson.assets?.hasVideo ?? true
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        href: `/lessons/${lesson.id}`,
        className: "block h-full",
        style: {
            textDecoration: "none",
            color: "inherit",
            height: "100%"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
            className: `lib-card ${gold ? "lib-card-gold vsp-card-gold" : "vsp-card-neutral"}`,
            style: {
                display: "flex",
                flexDirection: "column",
                overflow: "hidden",
                height: "100%"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        position: "relative",
                        aspectRatio: "16 / 9",
                        background: "#251A42",
                        overflow: "hidden"
                    },
                    children: lesson.titleCard ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: lesson.titleCard,
                        alt: "",
                        loading: "lazy",
                        decoding: "async",
                        style: {
                            position: "absolute",
                            inset: 0,
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            display: "block"
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/site/library-preview.tsx",
                        lineNumber: 486,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: "absolute",
                            inset: 0,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            padding: 20,
                            background: "linear-gradient(155deg, #2A1D4E 0%, #251A42 60%, #1A1234 100%)"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-display",
                            style: {
                                fontSize: 19,
                                lineHeight: 1.22,
                                textAlign: "center",
                                color: "rgba(243, 237, 223, 0.78)",
                                maxWidth: "18ch"
                            },
                            children: lesson.title
                        }, void 0, false, {
                            fileName: "[project]/src/components/site/library-preview.tsx",
                            lineNumber: 513,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/site/library-preview.tsx",
                        lineNumber: 501,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/site/library-preview.tsx",
                    lineNumber: 477,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: "flex",
                        flexDirection: "column",
                        gap: 9,
                        padding: "18px 20px 20px",
                        flex: 1
                    },
                    children: [
                        meta && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "font-mono",
                            style: {
                                fontSize: "10px",
                                letterSpacing: "0.14em",
                                textTransform: "uppercase",
                                color: "#E0BC6A"
                            },
                            children: meta
                        }, void 0, false, {
                            fileName: "[project]/src/components/site/library-preview.tsx",
                            lineNumber: 541,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "font-display",
                            style: {
                                margin: 0,
                                fontSize: 21,
                                lineHeight: 1.2,
                                color: "#F3EDDF"
                            },
                            children: lesson.title
                        }, void 0, false, {
                            fileName: "[project]/src/components/site/library-preview.tsx",
                            lineNumber: 555,
                            columnNumber: 9
                        }, this),
                        lesson.titleTamil && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                fontSize: 13,
                                lineHeight: 1.4,
                                color: "rgba(243, 237, 223, 0.62)"
                            },
                            children: lesson.titleTamil
                        }, void 0, false, {
                            fileName: "[project]/src/components/site/library-preview.tsx",
                            lineNumber: 569,
                            columnNumber: 11
                        }, this),
                        ragaThala && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "font-mono",
                            style: {
                                fontSize: 11,
                                letterSpacing: "0.06em",
                                color: "rgba(243, 237, 223, 0.62)",
                                marginTop: 2
                            },
                            children: ragaThala
                        }, void 0, false, {
                            fileName: "[project]/src/components/site/library-preview.tsx",
                            lineNumber: 582,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: "flex",
                                flexWrap: "wrap",
                                gap: 6,
                                marginTop: "auto",
                                paddingTop: 10
                            },
                            children: ASSET_BADGES.map((badge)=>{
                                const present = assets[badge.key];
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    title: badge.title,
                                    "aria-label": badge.title,
                                    "aria-hidden": false,
                                    className: "font-mono",
                                    style: {
                                        display: "inline-flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        minWidth: 26,
                                        height: 22,
                                        padding: "0 7px",
                                        fontSize: "10px",
                                        letterSpacing: "0.06em",
                                        border: present ? "1px solid rgba(224, 188, 106, 0.4)" : "1px solid rgba(243, 237, 223, 0.18)",
                                        background: present ? "rgba(224, 188, 106, 0.1)" : "transparent",
                                        color: present ? "#E0BC6A" : "rgba(243, 237, 223, 0.3)"
                                    },
                                    children: badge.label
                                }, badge.key, false, {
                                    fileName: "[project]/src/components/site/library-preview.tsx",
                                    lineNumber: 608,
                                    columnNumber: 15
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/src/components/site/library-preview.tsx",
                            lineNumber: 596,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/site/library-preview.tsx",
                    lineNumber: 530,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/site/library-preview.tsx",
            lineNumber: 467,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/site/library-preview.tsx",
        lineNumber: 462,
        columnNumber: 5
    }, this);
}
_c2 = LessonCard;
const __TURBOPACK__default__export__ = LibraryPreview;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "LibraryPreview");
__turbopack_context__.k.register(_c1, "Chip");
__turbopack_context__.k.register(_c2, "LessonCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/site/practice-room.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PracticeRoom",
    ()=>PracticeRoom
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$site$2f$use$2d$reveal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/site/use-reveal.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const SRUTHI_OPTIONS = [
    "C-1",
    "D#-2.5",
    "F-4",
    "G#-5.5",
    "A#-6.5"
];
// Map sruthi labels to actual frequencies (Hz) — the note + position
// C-1 = C at kattai 1 (approx 261.63 Hz)
// D#-2.5 = D# at kattai 2.5 (approx 311.13 Hz)
// F-4 = F at kattai 4 (approx 349.23 Hz)
// G#-5.5 = G# at kattai 5.5 (approx 415.30 Hz)
// A#-6.5 = A# at kattai 6.5 (approx 466.16 Hz)
const SRUTHI_FREQ = {
    "C-1": 261.63,
    "D#-2.5": 311.13,
    "F-4": 349.23,
    "G#-5.5": 415.3,
    "A#-6.5": 466.16
};
// Speed affects the pulse rate (beats per second)
const SPEED_PULSE_MS = {
    "1st": 1200,
    "2nd": 600,
    "3rd": 300,
    thrikaalam: 150
};
const SPEED_OPTIONS = [
    {
        id: "1st",
        label: "1st Speed"
    },
    {
        id: "2nd",
        label: "2nd Speed"
    },
    {
        id: "3rd",
        label: "3rd Speed"
    },
    {
        id: "thrikaalam",
        label: "Thrikaalam"
    }
];
const BULLETS = [
    "Five sruthis match every vocal range",
    "Three speeds build from walk to run",
    "Violin and vocal tracks are separate — learn the line, then play it"
];
const LEAD = "Every lesson ships with practice audio in five sruthis — C, D#, F, G#, A# — across three speeds, for violin and vocal. That's fifteen files per lesson, collapsed into a single dial. Pick your sruthi, pick your speed, press play. This is how a student practises between lessons.";
const TOTAL_SECONDS = 30;
const TICK_MS = 500;
const TICK_STEP = TICK_MS / (TOTAL_SECONDS * 1000) * 100;
const initialState = {
    voice: "violin",
    sruthi: "D#-2.5",
    speed: "1st",
    playing: false,
    progress: 0
};
function reducer(state, action) {
    switch(action.type){
        case "SET_VOICE":
            return {
                ...state,
                voice: action.voice,
                progress: 0
            };
        case "SET_SRUTHI":
            return {
                ...state,
                sruthi: action.sruthi,
                progress: 0
            };
        case "SET_SPEED":
            return {
                ...state,
                speed: action.speed,
                progress: 0
            };
        case "TOGGLE_PLAY":
            if (state.progress >= 100) {
                return {
                    ...state,
                    playing: true,
                    progress: 0
                };
            }
            return {
                ...state,
                playing: !state.playing
            };
        case "TICK":
            {
                const next = state.progress + TICK_STEP;
                if (next >= 100) {
                    return {
                        ...state,
                        progress: 100,
                        playing: false
                    };
                }
                return {
                    ...state,
                    progress: next
                };
            }
        default:
            return state;
    }
}
function formatSruthiLarge(s) {
    const [note, position] = s.split("-");
    return `${note} — ${position}`;
}
function formatTime(progress) {
    const seconds = Math.floor(progress / 100 * TOTAL_SECONDS);
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}
function PracticeRoom() {
    _s();
    const { ref, visible } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$site$2f$use$2d$reveal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReveal"])({
        threshold: 0.12
    });
    const [state, dispatch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducer"])(reducer, initialState);
    // Web Audio API refs
    const audioCtxRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const oscRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const gainRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const pulseIntervalRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // ---- Audio functions (declared before effects that use them) ----
    const stopAudio = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PracticeRoom.useCallback[stopAudio]": ()=>{
            if (pulseIntervalRef.current) {
                clearInterval(pulseIntervalRef.current);
                pulseIntervalRef.current = null;
            }
            if (gainRef.current && audioCtxRef.current) {
                try {
                    gainRef.current.gain.linearRampToValueAtTime(0, audioCtxRef.current.currentTime + 0.15);
                } catch  {}
            }
            if (oscRef.current) {
                try {
                    oscRef.current.stop((audioCtxRef.current?.currentTime ?? 0) + 0.2);
                } catch  {}
                oscRef.current = null;
            }
            gainRef.current = null;
        }
    }["PracticeRoom.useCallback[stopAudio]"], []);
    const restartPulse = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PracticeRoom.useCallback[restartPulse]": ()=>{
            if (pulseIntervalRef.current) {
                clearInterval(pulseIntervalRef.current);
                pulseIntervalRef.current = null;
            }
            if (!gainRef.current || !audioCtxRef.current) return;
            const pulseMs = SPEED_PULSE_MS[state.speed];
            let pulseOn = true;
            pulseIntervalRef.current = setInterval({
                "PracticeRoom.useCallback[restartPulse]": ()=>{
                    if (!gainRef.current || !audioCtxRef.current) return;
                    const target = pulseOn ? 0.12 : 0.04;
                    gainRef.current.gain.linearRampToValueAtTime(target, audioCtxRef.current.currentTime + pulseMs / 2000);
                    pulseOn = !pulseOn;
                }
            }["PracticeRoom.useCallback[restartPulse]"], pulseMs);
        }
    }["PracticeRoom.useCallback[restartPulse]"], [
        state.speed
    ]);
    const startAudio = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PracticeRoom.useCallback[startAudio]": ()=>{
            try {
                if (!audioCtxRef.current) {
                    audioCtxRef.current = new (window.AudioContext || window.webkitAudioContext)();
                }
                const ctx = audioCtxRef.current;
                if (ctx.state === "suspended") ctx.resume();
                const freq = SRUTHI_FREQ[state.sruthi];
                const osc = ctx.createOscillator();
                osc.type = state.voice === "violin" ? "sawtooth" : "sine";
                osc.frequency.setValueAtTime(freq, ctx.currentTime);
                if (state.voice === "violin") {
                    osc.detune.setValueAtTime(5, ctx.currentTime);
                }
                const gain = ctx.createGain();
                gain.gain.setValueAtTime(0, ctx.currentTime);
                gain.gain.linearRampToValueAtTime(0.12, ctx.currentTime + 0.3);
                osc.connect(gain);
                gain.connect(ctx.destination);
                osc.start();
                oscRef.current = osc;
                gainRef.current = gain;
                restartPulse();
            } catch (e) {
                console.warn("Web Audio API not available:", e);
            }
        }
    }["PracticeRoom.useCallback[startAudio]"], [
        state.sruthi,
        state.voice,
        restartPulse
    ]);
    // ---- Effects ----
    // Tick the progress bar while playing
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PracticeRoom.useEffect": ()=>{
            if (!state.playing) return;
            const id = setInterval({
                "PracticeRoom.useEffect.id": ()=>dispatch({
                        type: "TICK"
                    })
            }["PracticeRoom.useEffect.id"], TICK_MS);
            return ({
                "PracticeRoom.useEffect": ()=>clearInterval(id)
            })["PracticeRoom.useEffect"];
        }
    }["PracticeRoom.useEffect"], [
        state.playing
    ]);
    // Start/stop audio when play state changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PracticeRoom.useEffect": ()=>{
            if (state.playing) {
                startAudio();
            } else {
                stopAudio();
            }
            return ({
                "PracticeRoom.useEffect": ()=>stopAudio()
            })["PracticeRoom.useEffect"];
        }
    }["PracticeRoom.useEffect"], [
        state.playing,
        startAudio,
        stopAudio
    ]);
    // Update frequency when sruthi changes (if playing)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PracticeRoom.useEffect": ()=>{
            if (oscRef.current && state.playing) {
                const freq = SRUTHI_FREQ[state.sruthi];
                oscRef.current.frequency.setValueAtTime(freq, audioCtxRef.current?.currentTime ?? 0);
            }
        }
    }["PracticeRoom.useEffect"], [
        state.sruthi
    ]);
    // Update pulse rate when speed changes (if playing)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PracticeRoom.useEffect": ()=>{
            if (state.playing) {
                restartPulse();
            }
        }
    }["PracticeRoom.useEffect"], [
        state.speed,
        state.playing,
        restartPulse
    ]);
    // Cleanup on unmount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PracticeRoom.useEffect": ()=>{
            return ({
                "PracticeRoom.useEffect": ()=>{
                    stopAudio();
                    if (audioCtxRef.current) {
                        audioCtxRef.current.close();
                        audioCtxRef.current = null;
                    }
                }
            })["PracticeRoom.useEffect"];
        }
    }["PracticeRoom.useEffect"], [
        stopAudio
    ]);
    const activeSpeedLabel = SPEED_OPTIONS.find((s)=>s.id === state.speed)?.label ?? "";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "practice",
        ref: ref,
        style: {
            background: "linear-gradient(180deg, #1A1234 0%, #241A44 100%)",
            padding: "48px 20px",
            borderTop: "1px solid rgba(224,188,106,0.18)",
            borderBottom: "1px solid rgba(224,188,106,0.18)"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `reveal ${visible ? "is-visible" : ""}`,
            style: {
                maxWidth: "1440px",
                margin: "0 auto"
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 min-[720px]:grid-cols-[1fr_0.92fr] gap-6 min-[720px]:gap-10 min-[1024px]:gap-16",
                style: {
                    alignItems: "center"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col",
                        style: {
                            gap: "20px"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "vsp-eyebrow",
                                children: "The Practice Room"
                            }, void 0, false, {
                                fileName: "[project]/src/components/site/practice-room.tsx",
                                lineNumber: 273,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                style: {
                                    fontFamily: "var(--font-marcellus), serif",
                                    fontSize: "28px",
                                    lineHeight: 1.1,
                                    letterSpacing: "-0.01em",
                                    color: "#F3EDDF",
                                    margin: 0
                                },
                                children: [
                                    "One dial.",
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            color: "#E0BC6A"
                                        },
                                        children: "Fifteen"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/site/practice-room.tsx",
                                        lineNumber: 286,
                                        columnNumber: 15
                                    }, this),
                                    " tracks."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/site/practice-room.tsx",
                                lineNumber: 275,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    fontSize: "15px",
                                    lineHeight: 1.7,
                                    color: "rgba(243,237,223,0.82)",
                                    maxWidth: "540px",
                                    margin: 0
                                },
                                children: LEAD
                            }, void 0, false, {
                                fileName: "[project]/src/components/site/practice-room.tsx",
                                lineNumber: 289,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "flex flex-col",
                                style: {
                                    gap: "12px",
                                    listStyle: "none",
                                    padding: 0,
                                    margin: "8px 0 0"
                                },
                                children: BULLETS.map((b)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "flex items-start",
                                        style: {
                                            gap: "12px",
                                            fontSize: "14.5px",
                                            lineHeight: 1.55,
                                            color: "rgba(243,237,223,0.82)"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                "aria-hidden": "true",
                                                style: {
                                                    color: "#E0BC6A",
                                                    fontSize: "13px",
                                                    lineHeight: 1.65,
                                                    flexShrink: 0
                                                },
                                                children: "✦"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/site/practice-room.tsx",
                                                lineNumber: 321,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: b
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/site/practice-room.tsx",
                                                lineNumber: 332,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, b, true, {
                                        fileName: "[project]/src/components/site/practice-room.tsx",
                                        lineNumber: 311,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/site/practice-room.tsx",
                                lineNumber: 301,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/site/practice-room.tsx",
                        lineNumber: 272,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "vsp-card-gold",
                        style: {
                            padding: "32px",
                            borderRadius: "0"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                role: "group",
                                "aria-label": "Voice",
                                className: "flex",
                                style: {
                                    width: "100%"
                                },
                                children: [
                                    "violin",
                                    "vocal"
                                ].map((v, i)=>{
                                    const active = state.voice === v;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        "aria-pressed": active,
                                        onClick: ()=>dispatch({
                                                type: "SET_VOICE",
                                                voice: v
                                            }),
                                        style: {
                                            flex: 1,
                                            padding: "11px 16px",
                                            fontFamily: "var(--font-geist-mono), monospace",
                                            fontSize: "12px",
                                            letterSpacing: "0.2em",
                                            textTransform: "uppercase",
                                            background: active ? "#E0BC6A" : "transparent",
                                            color: active ? "#1B1233" : "rgba(243,237,223,0.76)",
                                            border: `1px solid ${active ? "#E0BC6A" : "rgba(224,188,106,0.34)"}`,
                                            borderLeft: i === 0 ? undefined : "none",
                                            cursor: "pointer",
                                            transition: "background 200ms ease, color 200ms ease, border-color 200ms ease"
                                        },
                                        children: v === "violin" ? "Violin" : "Vocal"
                                    }, v, false, {
                                        fileName: "[project]/src/components/site/practice-room.tsx",
                                        lineNumber: 353,
                                        columnNumber: 19
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/src/components/site/practice-room.tsx",
                                lineNumber: 344,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    marginTop: "32px",
                                    display: "flex",
                                    alignItems: "flex-end",
                                    justifyContent: "space-between",
                                    gap: "16px"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "vsp-eyebrow",
                                                style: {
                                                    marginBottom: "8px"
                                                },
                                                children: "Active sruthi"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/site/practice-room.tsx",
                                                lineNumber: 393,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontFamily: "var(--font-marcellus), serif",
                                                    fontSize: "24px",
                                                    color: "#E0BC6A",
                                                    letterSpacing: "0.02em",
                                                    lineHeight: 1
                                                },
                                                children: formatSruthiLarge(state.sruthi)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/site/practice-room.tsx",
                                                lineNumber: 396,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/site/practice-room.tsx",
                                        lineNumber: 392,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            textAlign: "right"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "vsp-eyebrow",
                                                style: {
                                                    marginBottom: "8px"
                                                },
                                                children: "Speed"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/site/practice-room.tsx",
                                                lineNumber: 409,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontFamily: "var(--font-geist-mono), monospace",
                                                    fontSize: "14px",
                                                    color: "rgba(243,237,223,0.9)",
                                                    letterSpacing: "0.05em"
                                                },
                                                children: activeSpeedLabel
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/site/practice-room.tsx",
                                                lineNumber: 412,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/site/practice-room.tsx",
                                        lineNumber: 408,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/site/practice-room.tsx",
                                lineNumber: 383,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                role: "group",
                                "aria-label": "Sruthi selection",
                                className: "flex flex-wrap",
                                style: {
                                    gap: "8px",
                                    marginTop: "20px"
                                },
                                children: SRUTHI_OPTIONS.map((s)=>{
                                    const active = state.sruthi === s;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        "aria-pressed": active,
                                        onClick: ()=>dispatch({
                                                type: "SET_SRUTHI",
                                                sruthi: s
                                            }),
                                        className: active ? "vsp-sruthi-active" : "",
                                        style: {
                                            padding: "12px 16px",
                                            fontFamily: "var(--font-geist-mono), monospace",
                                            fontSize: "13px",
                                            letterSpacing: "0.06em",
                                            background: active ? "#E0BC6A" : "transparent",
                                            color: active ? "#1B1233" : "rgba(243,237,223,0.76)",
                                            border: `1px solid ${active ? "#E0BC6A" : "rgba(243,237,223,0.5)"}`,
                                            cursor: "pointer",
                                            transition: "background 200ms ease, color 200ms ease, border-color 200ms ease"
                                        },
                                        children: s
                                    }, s, false, {
                                        fileName: "[project]/src/components/site/practice-room.tsx",
                                        lineNumber: 435,
                                        columnNumber: 19
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/src/components/site/practice-room.tsx",
                                lineNumber: 426,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                role: "group",
                                "aria-label": "Speed selection",
                                className: "flex flex-wrap",
                                style: {
                                    gap: "8px",
                                    marginTop: "12px"
                                },
                                children: SPEED_OPTIONS.map((sp)=>{
                                    const active = state.speed === sp.id;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        "aria-pressed": active,
                                        onClick: ()=>dispatch({
                                                type: "SET_SPEED",
                                                speed: sp.id
                                            }),
                                        className: active ? "vsp-sruthi-active" : "",
                                        style: {
                                            padding: "12px 16px",
                                            fontFamily: "var(--font-geist-mono), monospace",
                                            fontSize: "13px",
                                            letterSpacing: "0.06em",
                                            background: active ? "#E0BC6A" : "transparent",
                                            color: active ? "#1B1233" : "rgba(243,237,223,0.76)",
                                            border: `1px solid ${active ? "#E0BC6A" : "rgba(243,237,223,0.5)"}`,
                                            cursor: "pointer",
                                            transition: "background 200ms ease, color 200ms ease, border-color 200ms ease"
                                        },
                                        children: sp.label
                                    }, sp.id, false, {
                                        fileName: "[project]/src/components/site/practice-room.tsx",
                                        lineNumber: 474,
                                        columnNumber: 19
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/src/components/site/practice-room.tsx",
                                lineNumber: 465,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    marginTop: "28px",
                                    paddingTop: "20px",
                                    borderTop: "1px solid rgba(243,237,223,0.16)"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontFamily: "var(--font-geist-mono), monospace",
                                            fontSize: "11px",
                                            letterSpacing: "0.18em",
                                            textTransform: "uppercase",
                                            color: "rgba(243,237,223,0.62)",
                                            marginBottom: "16px",
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "8px"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                "aria-hidden": "true",
                                                style: {
                                                    width: "6px",
                                                    height: "6px",
                                                    borderRadius: "50%",
                                                    background: state.playing ? "#E0BC6A" : "rgba(243,237,223,0.4)",
                                                    display: "inline-block",
                                                    flexShrink: 0,
                                                    transition: "background 200ms ease",
                                                    animation: state.playing ? "vsp-pulse-gold 1s ease-in-out infinite" : "none"
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/site/practice-room.tsx",
                                                lineNumber: 525,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    "Now playing — ",
                                                    state.voice,
                                                    " · ",
                                                    state.sruthi,
                                                    " · ",
                                                    state.speed
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/site/practice-room.tsx",
                                                lineNumber: 540,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/site/practice-room.tsx",
                                        lineNumber: 512,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center",
                                        style: {
                                            gap: "16px"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    position: "relative",
                                                    width: "64px",
                                                    height: "64px",
                                                    flexShrink: 0,
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        width: "64",
                                                        height: "64",
                                                        viewBox: "0 0 64 64",
                                                        "aria-hidden": "true",
                                                        style: {
                                                            position: "absolute",
                                                            inset: 0,
                                                            animation: "vsp-dial-spin 3.6s linear infinite",
                                                            animationPlayState: state.playing ? "running" : "paused",
                                                            opacity: state.playing ? 1 : 0.45,
                                                            transition: "opacity 300ms ease"
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                cx: "32",
                                                                cy: "32",
                                                                r: "30",
                                                                fill: "none",
                                                                stroke: "rgba(224,188,106,0.2)",
                                                                strokeWidth: "1"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/site/practice-room.tsx",
                                                                lineNumber: 575,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                cx: "32",
                                                                cy: "32",
                                                                r: "30",
                                                                fill: "none",
                                                                stroke: "#E0BC6A",
                                                                strokeWidth: "1.5",
                                                                strokeLinecap: "round",
                                                                strokeDasharray: "55 135"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/site/practice-room.tsx",
                                                                lineNumber: 583,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/site/practice-room.tsx",
                                                        lineNumber: 559,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        "aria-pressed": state.playing,
                                                        "aria-label": state.playing ? "Pause practice track" : "Play practice track",
                                                        onClick: ()=>dispatch({
                                                                type: "TOGGLE_PLAY"
                                                            }),
                                                        style: {
                                                            width: "48px",
                                                            height: "48px",
                                                            borderRadius: "50%",
                                                            border: "1px solid #E0BC6A",
                                                            background: state.playing ? "rgba(224,188,106,0.14)" : "transparent",
                                                            color: "#E0BC6A",
                                                            display: "flex",
                                                            alignItems: "center",
                                                            justifyContent: "center",
                                                            cursor: "pointer",
                                                            padding: 0,
                                                            position: "relative",
                                                            zIndex: 1,
                                                            transition: "background 200ms ease"
                                                        },
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            "aria-hidden": "true",
                                                            style: {
                                                                fontSize: "15px",
                                                                lineHeight: 1,
                                                                transform: state.playing ? "none" : "translateX(1px)",
                                                                transition: "transform 200ms ease"
                                                            },
                                                            children: state.playing ? "⏸" : "▶"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/site/practice-room.tsx",
                                                            lineNumber: 623,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/site/practice-room.tsx",
                                                        lineNumber: 595,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/site/practice-room.tsx",
                                                lineNumber: 548,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                role: "progressbar",
                                                "aria-valuenow": Math.round(state.progress),
                                                "aria-valuemin": 0,
                                                "aria-valuemax": 100,
                                                "aria-label": "Practice track progress",
                                                style: {
                                                    flex: 1,
                                                    position: "relative",
                                                    height: "4px",
                                                    background: "rgba(243,237,223,0.16)"
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        width: `${state.progress}%`,
                                                        height: "100%",
                                                        background: "#E0BC6A",
                                                        transition: "width 500ms linear"
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/site/practice-room.tsx",
                                                    lineNumber: 653,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/site/practice-room.tsx",
                                                lineNumber: 640,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontFamily: "var(--font-geist-mono), monospace",
                                                    fontSize: "13px",
                                                    color: "rgba(243,237,223,0.7)",
                                                    letterSpacing: "0.05em",
                                                    whiteSpace: "nowrap",
                                                    minWidth: "92px",
                                                    textAlign: "right"
                                                },
                                                children: [
                                                    formatTime(state.progress),
                                                    " / 00:30"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/site/practice-room.tsx",
                                                lineNumber: 664,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/site/practice-room.tsx",
                                        lineNumber: 546,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/site/practice-room.tsx",
                                lineNumber: 504,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/site/practice-room.tsx",
                        lineNumber: 339,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/site/practice-room.tsx",
                lineNumber: 267,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/site/practice-room.tsx",
            lineNumber: 263,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/site/practice-room.tsx",
        lineNumber: 253,
        columnNumber: 5
    }, this);
}
_s(PracticeRoom, "YjiB5TtcEqtE69DnxH0vLrvHVec=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$site$2f$use$2d$reveal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReveal"]
    ];
});
_c = PracticeRoom;
var _c;
__turbopack_context__.k.register(_c, "PracticeRoom");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/db.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "db",
    ()=>db
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$client$2f$index$2d$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@prisma/client/index-browser.js [app-client] (ecmascript)");
;
const globalForPrisma = globalThis;
const db = globalForPrisma.prisma ?? new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$client$2f$index$2d$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PrismaClient"]({
    log: ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : [
        'error',
        'warn'
    ]
});
if ("TURBOPACK compile-time truthy", 1) globalForPrisma.prisma = db;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/site-content.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v(JSON.parse("{\"brand\":{\"name\":\"Violin Suka Pavalan\",\"shortName\":\"VSP\",\"tagline\":\"Soulful Strings, Timeless Melodies.\",\"greeting\":\"VANAKAM!\",\"person\":\"SUKA PAVALAN\",\"credentials\":\"(M.A. ThamizhIsai, D. C. Tech, D.T.T)\",\"copyright\":\"© 2025 Violin Suka Pavalan. All rights reserved\",\"domains\":[\"https://vspviolinrainbow.com/\",\"https://www.sukapavalan.com/\"],\"experienceYears\":\"37 years (owner-confirmed figure to use site-wide)\",\"mediaPolicy\":\"Hotlink images from the current hosts for now; swap to uploaded originals later.\",\"revampGoals\":[\"Enroll new students\",\"Get booked for performances\",\"Showcase honours and credibility\",\"Publish the free lesson library\",\"Build a following / audience\"],\"unify\":\"Single site — vspviolinrainbow.com pages plus the full sukapavalan.com lesson library.\"},\"contact\":{\"address\":\"58, Main St, Asiriyar Nagar, Karaikal, Puducherry 609602\",\"phone\":\"98656 44345\",\"email\":\"sukapavalan@gmail.com\",\"social\":{\"youtube\":\"https://www.youtube.com/channel/UCwtXQIbtIvtGXEXnGU0pL7w\",\"facebook\":\"https://www.facebook.com/ViolinSukaPavalan\",\"instagram\":\"https://www.instagram.com/sukapavalan/\",\"twitter\":\"https://twitter.com/suka_pavalan\"},\"formIntent\":[\"Booking Inquiries\",\"Music Lessons\",\"Collaborations\"],\"formFields\":[\"NAME\",\"EMAIL*\",\"Phone Number\",\"YOUR MESSAGE*\"],\"formSuccess\":\"Your message was sent successfully! We will be in touch as soon as we can.\",\"formError\":\"Something went wrong, try refreshing and submitting the form again.\",\"heroLine\":\"Connect. Collaborate. Create.\",\"heroSub\":[\"Whether you have a query,\",\"wish to learn, or\",\"want to book a performance\",\"I'm here to listen.\"],\"directionCta\":\"Direction\",\"addressLines\":[\"58, Main St, Asiriyar Nagar, Karaikal,\",\"Puducherry 609602\"]},\"nav\":{\"primary\":[\"Home\",\"About\",\"Learning\",\"Achievements\",\"Gallery\",\"Contact\"],\"learningSub\":[{\"label\":\"Carnatic Lessons\",\"url\":\"https://vspviolinrainbow.com/carnatic_lessons.html\"},{\"label\":\"Light Music Lessons\",\"url\":\"https://vspviolinrainbow.com/light_music_lessons.html\"},{\"label\":\"Learn the Violin\",\"url\":\"https://vspviolinrainbow.com/learn_the_violin.html\"}]},\"home\":{\"heroLines\":[\"Soulful Strings,\",\"Timeless Melodies.\"],\"introHeading\":[\"VANAKAM!\",\"I'm SUKA PAVALAN\"],\"introBody\":[\"A passionate violinist with a deep love for bringing music to life. With 37 years of experience, I specialize in classical and film music, performing as a soloist and collaborating with ensembles. My journey with the violin has taken me to notable performances, competitions, or achievements and I'm always exploring new ways to connect with audiences through music. Whether on stage or in the studio, my goal is to inspire and create unforgettable musical moments. Connecting with students across the globe and imparting knowledge of violin, makes me complete as a guru.\",\"I was fortunate enough to start learning Music (Violin and Vocal) Lessons from the age of 6 from Music Legends Thiruvarur Shri S. Santhanam, Nellai Shri E. Shanmuganathan and Mayavaram Shri S. Sivaswamy Iyer. I had the opportunity of learning advanced violin lessons from Shri V. L. Sudharsan and Shri Kumaresh (Ganesh Kumaresh) Learnt Western Music from Porayar Shri Adisayam Arumairaj. Credits for learning Harmonium goes to my dear Father, Shri. S. Subramaniyan. Then with a strong foundation, I started performing on the stage from the age of 8.\"],\"mission\":[\"To share the joy of violin playing with students of all ages, nurturing their skills, creativity, and love for music.\",\"To continuously grow as a musician, refining my technique and expression while staying true to my passion for music.\",\"To inspire and move audiences through the beauty of violin music, bringing emotion, storytelling, and artistry to every performance.\",\"To use the power of music to connect cultures, promote peace, and bring hope to communities through performances and outreach.\"],\"vision\":[\"To redefine the possibilities of violin music, blending tradition with innovation to create transformative musical experiences that touch the soul.\",\"To use the violin as a tool for cultural exchange, healing, and unity, bringing music to communities that need it most.\",\"To build a world where music education is accessible to all, inspiring future generations of violinists to develop their talent and passion for the arts.\",\"To continuously evolve as an artist, pushing creative boundaries while honoring the rich heritage of violin music.\"],\"testimonialsHeading\":\"See What All the Talk is About\",\"testimonials\":[{\"title\":\"A Mentor Beyond Music\",\"author\":\"Arun Family\",\"place\":\"Los Angeles - USA\",\"quote\":\"Pavalan Sir's influence extends beyond the realm of music; he embodies values of humility, generosity, and devotion to family and community. We consider ourselves profoundly fortunate to have him as both a teacher and a role model for our children. It is our sincere prayer that the Almighty blesses him and his family with enduring health, success, and recognition for the light they bring to the world through their artistry and kindness.\"},{\"title\":\"The Art of Masterful Music\",\"author\":\"Sri Babu Parameshwaran\",\"place\":\"Director Of Keerthana School Of Indian Music, California\",\"quote\":\"What sets Mr. Pavalan apart is not only his mastery of the violin but also his extraordinary versatility. He plays a wide range of Indian musical genres with equal ease and brilliance, and his command of the Western musical system is equally impressive. His deep knowledge and ongoing commitment to learning—especially in the area of audio technology—allow him to deliver a sound quality that is truly exceptional. His violin tone is distinctive, rich, and refined, often standing out in a way that captures the attention of even the most discerning listeners.\"},{\"title\":\"Fostering Passion Through Music\",\"author\":\"Suba & Karthik\",\"place\":\"St. Augustine USA\",\"quote\":\"Your passion and dedication for teaching has made him learn more and try new music. You inspire him to be his best and make him love to play his violin. You have a special way of teaching by making him introduce the song first by reciting Swaram, Sahithyam and then playing the violin which makes him learn easier as he has not listened to most of the songs. He really enjoys your class because of the fun and engaging learning experiences. Thank you so much for being an amazing teacher for Kavin !!\"},{\"title\":\"காரைக்காலின் பெருமைகளில் இவரும் ஒன்று\",\"author\":\"வ. சவரிராஜன்\",\"place\":\"ASI காவல்துறை.\",\"quote\":\"மதிப்பிற்குரிய சுகபாவலன் ஐயா அவர்கள் காரைக்காலுக்கு பெருமை. இசையில் ஆர்வமுள்ளவர்களை அவரின் வயலின் இசையால் கவர்ந்திழுக்க கூடிய மகத்தான திறைமை பெற்றவர். அதுமட்டுமல்லாது அவரது 25 ஆண்டுகளை கடந்த வயலின் இசை பயிற்ச்சியில் அவரைபோன்றே திறமையான இளம் வயலின் இசை கலைஞர்களை உருவாக்குவதிலும் வல்லமை பெற்றவர். காரைக்காலின் பெருமைகளில் இவரும் ஒன்று. இறைவன் அருளால் ஐயா அவர்களின் இசை பயணம் இனிதாய் தொடர எனது மகிழ்ச்சியான வாழ்த்துகள்.\"}],\"contactHeading\":\"What brings you here today?\"},\"about\":{\"heroLine\":\"Weaving melodies  inspiring generations.\",\"role\":\"Suka Pavalan — Violinist, Music Educator, and Guru\",\"body\":[\"A highly skilled and passionate Violinist with over 30 years of experience, I have had the privilege of performing and teaching across various musical genres, including Classical, Light Music, and both Carnatic and Western styles. As a performer, I have organized, coordinated, and participated in numerous live and televised concerts, both nationally and internationally.\",\"I am honored to have received several prestigious awards and titles throughout my career, celebrating my contributions to the world of music. My extensive expertise in composing music spans both Carnatic and Western traditions, and I take pride in collaborating with other artists to create exceptional performances that resonate with diverse audiences.\",\"One of my proudest achievements is the development of a unique method to convert Carnatic notation into multiple languages. This system is now widely used in universities and colleges, helping students around the world access this invaluable knowledge in a more inclusive and comprehensible way.\",\"Since 2000, I have been dedicated to teaching violin and vocal classes to students of all ages and backgrounds, both in person and online. My work as a mentor has been especially rewarding, as I have guided many students to successfully complete their Arangetrams—an important milestone in their musical journey. Today, many of my students continue to perform and share their musical talents across India and beyond.\",\"My mission is to continue passing on this beautiful art form to future generations, fostering a deep appreciation for music and its transformative power.\"],\"tours\":{\"label\":\"Abroad Tours\",\"country\":\"United States of America\",\"body\":\"Performed in prestigious venues and events across the USA, captivating audiences with mesmerizing musical performances. These international tours highlight a global presence and a dedication to sharing the richness of music across cultures.\",\"years\":[\"2013 - 2015\",\"2017 - 2019\"]},\"honorsTeaser\":[\"A journey adorned with prestigious titles,\",\"unwavering dedication, and musical mastery\"],\"honorsCta\":{\"label\":\"Discover Honor\",\"url\":\"https://vspviolinrainbow.com/achievement.html\"},\"performance\":{\"heading\":\"Radio and Stage performance\",\"body\":\"As an artist, it always gives pleasure while performing on any platform. I have an opportunity to perform in various Radio programmes and also on different stages to create good vibrations and contribute to divine music.\",\"radio\":{\"since\":\"Since 1992\",\"body\":\"Regularly featured in numerous broadcasts on All India Radio (AIR) stations, including:\",\"stations\":[\"AIR Trichy\",\"AIR Puducherry\",\"AIR Karaikal\"]},\"stage\":[{\"since\":\"Since 1990\",\"body\":\"Over 5,000 live performances across various prestigious platforms.\"},{\"since\":\"Since 1992\",\"body\":\"Annual participation in the Thyagaraja Aradhana Utsavam, Thiruvaiyaru, paying homage to the legendary saint-composer.\"}],\"closing\":\"With an extensive career spanning decades, these performances reflect a deep-rooted passion for music and an unwavering commitment to artistic excellence.\"},\"education\":[{\"title\":\"Diploma In Computer Technology (D.C. Tech)\",\"detail\":\"Karaikal Polytechnic (1997-2000)\"},{\"title\":\"Bachelor of Music - Violin (B. Music - Violin)\",\"detail\":\"Annamalai University (2005-2008)\"},{\"title\":\"Higher Grade in Indian Music\",\"detail\":\"2007\"},{\"title\":\"Diploma Teacher Training Course (Music)\",\"detail\":\"Tamil University (2007-2008)\"},{\"title\":\"M.A. Thamizhisai\",\"detail\":\"Tamil University (2008-2010)\"}],\"interests\":[{\"title\":\"Music Education for All\",\"body\":\"Conducting free coaching classes for economically disadvantaged students, nurturing the next generation of musicians.\",\"icon\":\"icons/music_ic.svg\"},{\"title\":\"Carnatic Music Made Easy\",\"body\":\"Developing a comprehensive book to simplify Carnatic music learning in multiple languages.\",\"icon\":\"icons/carnatic_ic.svg\"},{\"title\":\"Fusion & Creative Composition\",\"body\":\"Experimenting with diverse musical styles, including jingles and innovative compositions\",\"icon\":\"icons/fusion_ic.svg\"},{\"title\":\"Background Scores for Short Films\",\"body\":\"Composing expressive and dynamic scores for visual storytelling.\",\"icon\":\"icons/bg_ic.svg\"},{\"title\":\"Home Studio Recording\",\"body\":\"Exploring sound production and recording music in a professional home studio setup.\",\"icon\":\"icons/homestudio_ic.svg\"},{\"title\":\"Playback Singing\",\"body\":\"Contributing vocals for light music albums, blending classical depth with contemporary styles.\",\"icon\":\"icons/playback_ic.svg\"}]},\"achievements\":{\"heroLine\":\"A Journey of Excellence, One Note at a Time.\",\"honorificsIntro\":\"With the blessings of the Almighty, over the years, I have been honored with prestigious titles that reflect my mastery, dedication, and contribution to the world of Music, especially violin. These honorifics serve as a testament to my excellence and lasting impact.\",\"honorifics\":[{\"title\":\"Violin Ratna\",\"meaning\":\"Jewel of Violin Artistry\",\"image\":\"images/honors/Violin Rathna District Collectorate Karaikal Govt Of Puducherry 2024.jpg\",\"awardedBy\":\"District Collectorate Karaikal, Govt of Puducherry\",\"year\":2024},{\"title\":\"Vallalar\",\"meaning\":\"Vallalar Excellence Award\",\"image\":\"images/honors/Karaikal Arutpa Innisai Maamamni - Samara Sanmarga Sangam Niravi 2017.jpg\",\"awardedBy\":\"Samara Sanmarga Sangam, Niravi\",\"year\":2017},{\"title\":\"Violin Chakravarthy\",\"meaning\":\"Emperor of Violin\",\"image\":\"images/honors/Violin Chakravarthi - Agila India Samuga Amaippu - Pondy 2019.jpg\",\"awardedBy\":\"Agila India Samuga Amaippu, Pondy\",\"year\":2019},{\"title\":\"Innisai Ilaval\",\"meaning\":\"Prince of Sweet Music\",\"image\":\"images/honors/honor (1).jpg\"},{\"title\":\"Villisai Vendan\",\"meaning\":\"King of Violin Music\",\"image\":\"images/honors/honor (1).webp\"},{\"title\":\"Sangeetha Sangoli\",\"meaning\":\"Resonating Voice of Music\",\"image\":\"images/honors/honor (2).jpg\"},{\"title\":\"Violin Vidhva Vibhushan\",\"meaning\":\"Ornament of Violin Expertise\",\"image\":\"images/honors/violin_vithya_vibushanam.jpg\"},{\"title\":\"Sunadham\",\"meaning\":\"Melodious Sound\",\"image\":\"images/honors/honor (2).webp\"},{\"title\":\"Kalai Valar Maamani\",\"meaning\":\"Jewel of Growing Art [source typo: 'Ghonorifics-rowing Art']\",\"image\":\"images/honors/kalaivaalar_maamani.jpg\"},{\"title\":\"Kalai Seer Kaavalar\",\"meaning\":\"Guardian of Artistic Excellence\",\"image\":\"images/honors/Kalaiseer Kavalar - Kaapiya Kazhagam Karaikal 2012.jpg\",\"awardedBy\":\"Kaapiya Kazhagam Karaikal\",\"year\":2012},{\"title\":\"Isai Saathanayaalan\",\"meaning\":\"Master of Music\",\"image\":\"images/honors/honor (3).webp\"},{\"title\":\"Sapthaswara Maamani\",\"meaning\":\"Jewel of the Seven Musical Notes\",\"image\":\"images/honors/Sapthaswara Maamani - Sapthaswaram Music Academy Karaikal 2009.jpg\",\"awardedBy\":\"Sapthaswaram Music Academy Karaikal\",\"year\":2009}],\"accoladesHeading\":\"Prestigious Accolades\",\"accolades\":[{\"title\":\"Cultural Talent Search Scholarship (1994 – 2000)\",\"body\":\"Awarded by the Center for Cultural Resources and Training (CCRT), New Delhi, in recognition of exceptional talent and dedication to cultural arts.\"},{\"title\":\"First Prize Winner in Numerous Competitions:\",\"body\":\"Consistently secured top honors in various prestigious competitions, showcasing unparalleled skill and artistry.\"},{\"title\":\"Thamizhisai Sangam, Chennai:\",\"body\":\"Awarded First Prize and honored with a violin as a special recognition for outstanding musical excellence.\"}]},\"gallery\":{\"heading\":\"Gallery of Glory\",\"images\":[\"images/gallery/gallery-img (12).webp\",\"images/gallery/gallery-img (10).webp\",\"images/gallery/gallery-img (9).webp\",\"images/gallery/gallery-img (11).webp\",\"images/gallery/gallery-img (7).webp\",\"images/gallery/gallery-img (6).webp\",\"images/gallery/gallery-img (3).webp\",\"images/gallery/gallery-img (8).webp\",\"images/gallery/gallery-img (4).webp\",\"images/gallery/gallery-img (5).webp\",\"images/gallery/gallery-img (15).webp\",\"images/gallery/gallery-img (14).webp\",\"images/gallery/gallery-img (2).webp\",\"images/gallery/gallery-img (1).webp\",\"images/gallery/gallery-img (13).webp\"]},\"carnaticLessons\":{\"heroLine\":\"Strings of Tradition / Notes of Passion  [NOTE: live site contains 'Loreip' placeholder text — needs real copy]\",\"categories\":[\"Basic Lessons\",\"Geetham\",\"Swarajathi\",\"Nottuswaram\",\"Varnam\",\"Krithi\",\"Thirupugazh\"],\"note\":\"Lesson content on the live site loads async and rendered as 'Loading...' — actual lesson items live on sukapavalan.com blog labels.\"},\"learnTheViolin\":{\"heroLine\":\"Learn the Language of the Violin  [NOTE: live site contains 'Lorem,ip' placeholder text]\",\"intro\":\"Music is a universal language that transcends boundaries, emotions, and cultures. It has the power to inspire, heal, and bring people together. Instrumental music speaks beyond words, evoking emotions and telling stories through melody, harmony, and rhythm. From the soaring notes of a violin to the deep resonance of a piano, each instrument brings a unique voice to the symphony of sound. Whether in classical compositions, jazz improvisations, or modern cinematic scores, instrumental music has the power to inspire, heal, and transport listeners to new worlds. Its timeless beauty connects cultures and generations, making it an essential part of human expression.\",\"violinHistory\":[\"The modern violin was developed in the early 16th century in Italy, with Andrea Amati of Cremona often credited as its inventor. Amati refined the design of earlier stringed instruments like the rebec, lira da braccio, and vihuela, creating the foundation for the violin as we know it today.\",\"His work influenced later master luthiers such as Antonio Stradivari and Giuseppe Guarneri, whose violins remain some of the most prized instruments in the world. While bowed string instruments existed long before Amati's time, his craftsmanship set the standard for the modern violin's structure, tone, and playability.\",\"The violin is a timeless instrument known for its rich, expressive sound and versatility across musical genres. From classical concertos to contemporary compositions, the violin captivates audiences with its emotional depth and technical brilliance. Mastering the violin requires dedication, precision, and passion, making it a rewarding pursuit for musicians of all levels. Whether played solo, in an orchestra, or as part of an ensemble, the violin remains a symbol of elegance and artistic excellence.\"],\"pullQuote\":{\"text\":\"When you play a violin piece, you are a storyteller, and you're telling a story.\",\"author\":\"Joshua Bell\"},\"strings\":{\"heading\":\"Violin Strings\",\"intro\":\"The violin has four strings, each tuned to a specific pitch:\",\"items\":[{\"name\":\"G String (G3)\",\"body\":\"The lowest and thickest string, producing a deep, warm, and rich tone.\"},{\"name\":\"A String (A4)\",\"body\":\"A bright and expressive middle string, often used for melodies.\"},{\"name\":\"D String (D4)\",\"body\":\"Slightly higher in pitch, offering a balanced and mellow sound.\"},{\"name\":\"E String (E5)\",\"body\":\"The highest and thinnest string, delivering a sharp, brilliant, and resonant tone.\"}]},\"materials\":{\"heading\":\"Materials & Types\",\"intro\":\"Violin strings are made from different materials, affecting their tone and playability:\",\"closing\":\"Violinists choose strings based on their playing style, genre, and personal preference to achieve the perfect tone.\",\"items\":[{\"name\":\"Gut Strings\",\"body\":\"Made from sheep intestines, they offer a warm, complex sound but require frequent tuning.\",\"image\":\"images/violin-materials (2).png\"},{\"name\":\"Steel Strings\",\"body\":\"Provide a bright, focused tone with excellent durability and stability.\",\"image\":\"images/violin-materials (3).png\"},{\"name\":\"Synthetic Strings\",\"body\":\"Made from nylon or composite materials, they balance warmth and stability, offering a sound similar to gut strings.\",\"image\":\"images/violin-materials (1).png\"}]},\"fingering\":{\"heading\":\"Finger Placement on Violin\",\"intro\":\"Placement of the finger while playing violin is extremely important to produce the right sound or the intended sound.\",\"items\":[{\"code\":\"O – Open String\",\"body\":\"Play the string without pressing it down with any finger.\",\"image\":\"images/openfinger.png\"},{\"code\":\"1f – Index Finger\",\"body\":\"Press the string down using the index finger.\",\"image\":\"images/indexfinger.png\"},{\"code\":\"2f – Middle Finger\",\"body\":\"Press the string down using the middle finger.\",\"image\":\"images/middle finger.png\"},{\"code\":\"3f – Ring Finger\",\"body\":\"Press the string down using the ring finger.\",\"image\":\"images/3f – Ring Finger.png\"},{\"code\":\"4f – Little Finger\",\"body\":\"Press the string down using the pinky finger.\",\"image\":\"images/4f – Little Finger.png\"}]}},\"lightMusicLessons\":{\"heroLine\":\"Strings of soul, notes of freedom  [NOTE: live site contains 'Loreip' placeholder text]\",\"categories\":[\"Cine Songs\"],\"note\":\"Only one category tab on the live site; list renders 'Loading...' — content never populates. Blogger nav implies intended categories: Devotions Songs, Cine Songs, English Songs, Other Language Songs.\"},\"lessonModel\":{\"perLesson\":[\"Notation in Tamil\",\"Notation in English\",\"YouTube video\",\"Audio track\",\"Downloadable PDF\",\"Raga / thala metadata\",\"Difficulty level\"]}}"));}),
"[project]/src/lib/data.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getAllLessonsForStudio",
    ()=>getAllLessonsForStudio,
    "getCategoriesWithCounts",
    ()=>getCategoriesWithCounts,
    "getLessonById",
    ()=>getLessonById,
    "getLessons",
    ()=>getLessons,
    "getLibraryStats",
    ()=>getLibraryStats,
    "getMegaMenu",
    ()=>getMegaMenu,
    "getPrevNextLessons",
    ()=>getPrevNextLessons,
    "getRelatedLessons",
    ()=>getRelatedLessons,
    "getSiteContent",
    ()=>getSiteContent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/db.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$site$2d$content$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/lib/site-content.json (json)");
;
;
async function getCategoriesWithCounts() {
    const categories = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].category.findMany({
        orderBy: [
            {
                group: "asc"
            },
            {
                order: "asc"
            }
        ]
    });
    const lessons = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].lesson.findMany({
        where: {
            status: "published"
        },
        select: {
            category: true
        }
    });
    const countMap = new Map();
    for (const l of lessons){
        countMap.set(l.category, (countMap.get(l.category) ?? 0) + 1);
    }
    return categories.map((c)=>({
            slug: c.slug,
            name: c.name,
            group: c.group,
            order: c.order,
            count: countMap.get(c.slug) ?? 0
        }));
}
async function getLessons(categorySlug) {
    const where = {
        status: "published",
        ...categorySlug ? {
            category: categorySlug
        } : {}
    };
    const lessons = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].lesson.findMany({
        where,
        orderBy: [
            {
                level: "asc"
            },
            {
                date: "desc"
            }
        ]
    });
    return lessons.map((l)=>({
            id: l.id,
            title: l.title,
            titleTamil: l.titleTamil,
            category: l.category,
            level: l.level,
            raga: l.raga,
            thala: l.thala,
            composer: l.composer,
            date: l.date,
            titleCard: l.titleCard,
            status: l.status
        }));
}
async function getAllLessonsForStudio() {
    const lessons = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].lesson.findMany({
        orderBy: [
            {
                category: "asc"
            },
            {
                level: "asc"
            },
            {
                date: "desc"
            }
        ]
    });
    return lessons.map((l)=>({
            id: l.id,
            title: l.title,
            titleTamil: l.titleTamil,
            category: l.category,
            level: l.level,
            raga: l.raga,
            thala: l.thala,
            composer: l.composer,
            date: l.date,
            titleCard: l.titleCard,
            status: l.status
        }));
}
async function getLessonById(id) {
    const l = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].lesson.findUnique({
        where: {
            id
        }
    });
    if (!l) return null;
    return {
        id: l.id,
        title: l.title,
        titleTamil: l.titleTamil,
        category: l.category,
        level: l.level,
        raga: l.raga,
        thala: l.thala,
        composer: l.composer,
        date: l.date,
        titleCard: l.titleCard,
        notationTamil: l.notationTamil,
        notationEnglish: l.notationEnglish,
        violinVideo: l.violinVideo,
        vocalVideo: l.vocalVideo,
        sourceUrl: l.sourceUrl,
        perVideoEmbeds: l.perVideoEmbeds ? JSON.parse(l.perVideoEmbeds) : null,
        audioLessons: l.audioLessons ? JSON.parse(l.audioLessons) : null,
        videoParts: l.videoParts ? JSON.parse(l.videoParts) : null
    };
}
/**
 * Prev/next navigation for the lesson page.
 * Basics (5 lessons across 5 sub-categories) are treated as one family —
 * prev/next walks the 5 in level order. Other categories order by date.
 */ const BASICS_SLUGS = [
    "sruthi-swara-varisai",
    "sarali-varisai",
    "janta-varisai",
    "melsthayi-varisai",
    "thattu-varisai"
];
async function getPrevNextLessons(currentId, category) {
    const isBasics = BASICS_SLUGS.includes(category);
    const where = isBasics ? {
        status: "published",
        category: {
            in: BASICS_SLUGS
        }
    } : {
        status: "published",
        category
    };
    const orderBy = isBasics ? [
        {
            level: "asc"
        },
        {
            date: "asc"
        }
    ] : [
        {
            date: "asc"
        }
    ];
    const lessons = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].lesson.findMany({
        where,
        orderBy,
        select: {
            id: true,
            title: true,
            titleTamil: true,
            category: true,
            level: true
        }
    });
    const idx = lessons.findIndex((l)=>l.id === currentId);
    return {
        prev: idx > 0 ? lessons[idx - 1] : null,
        next: idx >= 0 && idx < lessons.length - 1 ? lessons[idx + 1] : null,
        siblings: lessons,
        currentIndex: idx
    };
}
async function getRelatedLessons(currentId, raga, category) {
    if (raga) {
        const byRaga = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].lesson.findMany({
            where: {
                status: "published",
                raga,
                id: {
                    not: currentId
                }
            },
            orderBy: {
                date: "desc"
            },
            take: 4,
            select: {
                id: true,
                title: true,
                titleTamil: true,
                category: true,
                raga: true,
                titleCard: true
            }
        });
        if (byRaga.length >= 2) return byRaga;
        // Fall back to filling with same-category lessons
        const byCategory = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].lesson.findMany({
            where: {
                status: "published",
                category,
                id: {
                    not: currentId,
                    notIn: byRaga.map((l)=>l.id)
                }
            },
            orderBy: {
                date: "desc"
            },
            take: 4 - byRaga.length,
            select: {
                id: true,
                title: true,
                titleTamil: true,
                category: true,
                raga: true,
                titleCard: true
            }
        });
        return [
            ...byRaga,
            ...byCategory
        ];
    }
    // No raga — check if this is a basic lesson, then look across all 5 basics
    if (BASICS_SLUGS.includes(category)) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].lesson.findMany({
            where: {
                status: "published",
                category: {
                    in: BASICS_SLUGS
                },
                id: {
                    not: currentId
                }
            },
            orderBy: [
                {
                    level: "asc"
                },
                {
                    date: "desc"
                }
            ],
            take: 4,
            select: {
                id: true,
                title: true,
                titleTamil: true,
                category: true,
                raga: true,
                titleCard: true
            }
        });
    }
    // No raga, not basics — just same category
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].lesson.findMany({
        where: {
            status: "published",
            category,
            id: {
                not: currentId
            }
        },
        orderBy: {
            date: "desc"
        },
        take: 4,
        select: {
            id: true,
            title: true,
            titleTamil: true,
            category: true,
            raga: true,
            titleCard: true
        }
    });
}
async function getLibraryStats() {
    const [lessonCount, categoryCount, lessonsWithRaga, lessonsWithNotation] = await Promise.all([
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].lesson.count({
            where: {
                status: "published"
            }
        }),
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].category.count(),
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].lesson.findMany({
            where: {
                status: "published",
                raga: {
                    not: null
                }
            },
            select: {
                raga: true
            }
        }),
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"].lesson.findMany({
            where: {
                status: "published",
                notationTamil: {
                    not: null
                }
            },
            select: {
                id: true
            }
        })
    ]);
    const ragaSet = new Set(lessonsWithRaga.map((l)=>l.raga).filter(Boolean));
    return {
        lessons: lessonCount,
        notationSheets: lessonsWithNotation.length * 2,
        categories: categoryCount,
        ragas: ragaSet.size
    };
}
function getSiteContent() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$site$2d$content$2e$json__$28$json$29$__["default"];
}
async function getMegaMenu() {
    const cats = await getCategoriesWithCounts();
    const groups = {
        basics: {
            label: "Carnatic — Basics",
            items: []
        },
        advanced: {
            label: "Carnatic — Advanced",
            items: []
        },
        devotional: {
            label: "Devotional",
            items: []
        },
        light: {
            label: "Light Music & Media",
            items: cats.filter((c)=>c.group === "light")
        },
        media: {
            label: "",
            items: cats.filter((c)=>c.group === "media")
        }
    };
    for (const c of cats){
        if (c.group === "light" || c.group === "media") continue;
        groups[c.group].items.push(c);
    }
    // Merge light + media into one visual column but keep group labels clear.
    const lightMedia = {
        label: "Light Music & Media",
        items: [
            ...groups.light.items,
            ...groups.media.items
        ]
    };
    return [
        groups.basics,
        groups.advanced,
        groups.devotional,
        lightMedia
    ];
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/input.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Input",
    ()=>Input
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
function Input({ className, type, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        type: type,
        "data-slot": "input",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]", "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/input.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = Input;
;
var _c;
__turbopack_context__.k.register(_c, "Input");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/textarea.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Textarea",
    ()=>Textarea
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
function Textarea({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
        "data-slot": "textarea",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/textarea.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = Textarea;
;
var _c;
__turbopack_context__.k.register(_c, "Textarea");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/label.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Label",
    ()=>Label
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-label/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
function Label({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "label",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/label.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_c = Label;
;
var _c;
__turbopack_context__.k.register(_c, "Label");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
            destructive: "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
            outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
            secondary: "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-9 px-4 py-2 has-[>svg]:px-3",
            sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
            lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
            icon: "size-9"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
function Button({ className, variant, size, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/button.tsx",
        lineNumber: 51,
        columnNumber: 5
    }, this);
}
_c = Button;
;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/select.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Select",
    ()=>Select,
    "SelectContent",
    ()=>SelectContent,
    "SelectGroup",
    ()=>SelectGroup,
    "SelectItem",
    ()=>SelectItem,
    "SelectLabel",
    ()=>SelectLabel,
    "SelectScrollDownButton",
    ()=>SelectScrollDownButton,
    "SelectScrollUpButton",
    ()=>SelectScrollUpButton,
    "SelectSeparator",
    ()=>SelectSeparator,
    "SelectTrigger",
    ()=>SelectTrigger,
    "SelectValue",
    ()=>SelectValue
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-select/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as CheckIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDownIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDownIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUpIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-up.js [app-client] (ecmascript) <export default as ChevronUpIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
function Select({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "select",
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/select.tsx",
        lineNumber: 12,
        columnNumber: 10
    }, this);
}
_c = Select;
function SelectGroup({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"], {
        "data-slot": "select-group",
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/select.tsx",
        lineNumber: 18,
        columnNumber: 10
    }, this);
}
_c1 = SelectGroup;
function SelectValue({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Value"], {
        "data-slot": "select-value",
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/select.tsx",
        lineNumber: 24,
        columnNumber: 10
    }, this);
}
_c2 = SelectValue;
function SelectTrigger({ className, size = "default", children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"], {
        "data-slot": "select-trigger",
        "data-size": size,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-fit items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
        ...props,
        children: [
            children,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                asChild: true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDownIcon$3e$__["ChevronDownIcon"], {
                    className: "size-4 opacity-50"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/select.tsx",
                    lineNumber: 47,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ui/select.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/select.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, this);
}
_c3 = SelectTrigger;
function SelectContent({ className, children, position = "popper", ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
            "data-slot": "select-content",
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border shadow-md", position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", className),
            position: position,
            ...props,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SelectScrollUpButton, {}, void 0, false, {
                    fileName: "[project]/src/components/ui/select.tsx",
                    lineNumber: 72,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Viewport"], {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("p-1", position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"),
                    children: children
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/select.tsx",
                    lineNumber: 73,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SelectScrollDownButton, {}, void 0, false, {
                    fileName: "[project]/src/components/ui/select.tsx",
                    lineNumber: 82,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/select.tsx",
            lineNumber: 61,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/select.tsx",
        lineNumber: 60,
        columnNumber: 5
    }, this);
}
_c4 = SelectContent;
function SelectLabel({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
        "data-slot": "select-label",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-muted-foreground px-2 py-1.5 text-xs", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/select.tsx",
        lineNumber: 93,
        columnNumber: 5
    }, this);
}
_c5 = SelectLabel;
function SelectItem({ className, children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Item"], {
        "data-slot": "select-item",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2", className),
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "absolute right-2 flex size-3.5 items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ItemIndicator"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckIcon$3e$__["CheckIcon"], {
                        className: "size-4"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/select.tsx",
                        lineNumber: 117,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/select.tsx",
                    lineNumber: 116,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ui/select.tsx",
                lineNumber: 115,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ItemText"], {
                children: children
            }, void 0, false, {
                fileName: "[project]/src/components/ui/select.tsx",
                lineNumber: 120,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/select.tsx",
        lineNumber: 107,
        columnNumber: 5
    }, this);
}
_c6 = SelectItem;
function SelectSeparator({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"], {
        "data-slot": "select-separator",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-border pointer-events-none -mx-1 my-1 h-px", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/select.tsx",
        lineNumber: 130,
        columnNumber: 5
    }, this);
}
_c7 = SelectSeparator;
function SelectScrollUpButton({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollUpButton"], {
        "data-slot": "select-scroll-up-button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex cursor-default items-center justify-center py-1", className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUpIcon$3e$__["ChevronUpIcon"], {
            className: "size-4"
        }, void 0, false, {
            fileName: "[project]/src/components/ui/select.tsx",
            lineNumber: 151,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/select.tsx",
        lineNumber: 143,
        columnNumber: 5
    }, this);
}
_c8 = SelectScrollUpButton;
function SelectScrollDownButton({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollDownButton"], {
        "data-slot": "select-scroll-down-button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex cursor-default items-center justify-center py-1", className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDownIcon$3e$__["ChevronDownIcon"], {
            className: "size-4"
        }, void 0, false, {
            fileName: "[project]/src/components/ui/select.tsx",
            lineNumber: 169,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/select.tsx",
        lineNumber: 161,
        columnNumber: 5
    }, this);
}
_c9 = SelectScrollDownButton;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;
__turbopack_context__.k.register(_c, "Select");
__turbopack_context__.k.register(_c1, "SelectGroup");
__turbopack_context__.k.register(_c2, "SelectValue");
__turbopack_context__.k.register(_c3, "SelectTrigger");
__turbopack_context__.k.register(_c4, "SelectContent");
__turbopack_context__.k.register(_c5, "SelectLabel");
__turbopack_context__.k.register(_c6, "SelectItem");
__turbopack_context__.k.register(_c7, "SelectSeparator");
__turbopack_context__.k.register(_c8, "SelectScrollUpButton");
__turbopack_context__.k.register(_c9, "SelectScrollDownButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/site/enrol.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Enrol",
    ()=>Enrol,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/data.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$site$2f$use$2d$reveal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/site/use-reveal.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/textarea.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/label.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/select.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-toast.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
const INTENT_LABELS = {
    lesson: "One-to-one Lessons",
    booking: "Book a Performance",
    collaboration: "Collaborations"
};
const INTENT_FOOTERS = {
    lesson: "Free trial · No obligation · Children and adults welcome",
    booking: "Concerts · Festivals · Thyagaraja Aradhana · Devotional evenings",
    collaboration: "Recordings · Fusion · Session violin · Composition"
};
const TRIAL_CHECKLIST = [
    "Free trial lesson, no obligation",
    "Tamil or English notation provided",
    "Practice tracks in five sruthis",
    "Online or in-person in Karaikal",
    "Children (6–16) and adults welcome"
];
const WHO_FOR_OPTIONS = [
    "Myself",
    "My child",
    "A student",
    "An organisation"
];
const INSTRUMENT_OPTIONS = [
    "Violin",
    "Vocal",
    "Both",
    "Not sure yet"
];
const LEVEL_OPTIONS = [
    "Beginner",
    "Intermediate",
    "Advanced",
    "Returning after a break"
];
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const labelStyle = {
    fontFamily: "var(--font-geist-mono), monospace",
    fontSize: "10.5px",
    letterSpacing: "0.18em",
    textTransform: "uppercase",
    color: "rgba(243,237,223,0.78)"
};
const inputStyle = {
    height: "44px",
    backgroundColor: "rgba(243,237,223,0.03)",
    color: "#F3EDDF",
    fontSize: "14.5px",
    fontFamily: "var(--font-instrument-sans), sans-serif",
    borderRadius: 0
};
const textareaStyle = {
    ...inputStyle,
    height: "auto",
    minHeight: "140px",
    resize: "vertical",
    paddingTop: "12px",
    paddingBottom: "12px",
    lineHeight: 1.6
};
const intentButtonBase = {
    fontFamily: "var(--font-marcellus), serif",
    letterSpacing: "0.02em",
    borderRadius: 0
};
/** Render the contact heading with the word "today" wrapped in gold. */ function renderHeadingWithGoldToday(text) {
    const target = "today";
    const idx = text.toLowerCase().indexOf(target);
    if (idx === -1) return text;
    const before = text.slice(0, idx);
    const match = text.slice(idx, idx + target.length);
    const after = text.slice(idx + target.length);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            before,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    color: "#E0BC6A"
                },
                children: match
            }, void 0, false, {
                fileName: "[project]/src/components/site/enrol.tsx",
                lineNumber: 114,
                columnNumber: 7
            }, this),
            after
        ]
    }, void 0, true);
}
function Enrol() {
    _s();
    const c = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSiteContent"])();
    const { ref: sectionRef, visible } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$site$2f$use$2d$reveal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReveal"])({
        threshold: 0.1
    });
    const { toast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"])();
    const panelRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [intent, setIntent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("lesson");
    const [name, setName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [phone, setPhone] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [city, setCity] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [whoFor, setWhoFor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [instrument, setInstrument] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [level, setLevel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [message, setMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [submitError, setSubmitError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const handleIntentClick = (next)=>{
        setIntent(next);
        setSubmitError(null);
        // Defer the scroll so the intent label paints first.
        if (panelRef.current) {
            panelRef.current.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    };
    const resetForm = ()=>{
        setName("");
        setEmail("");
        setPhone("");
        setCity("");
        setWhoFor("");
        setInstrument("");
        setLevel("");
        setMessage("");
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setSubmitError(null);
        // Mirror server-side required checks for immediate UX.
        if (!name.trim()) {
            setSubmitError("Please tell me your name so I know who I'm writing back to.");
            return;
        }
        if (!email.trim() || !EMAIL_RE.test(email.trim())) {
            setSubmitError("A valid email is required so I can reply.");
            return;
        }
        if (!message.trim()) {
            setSubmitError("A short message helps me understand what you're looking for.");
            return;
        }
        setIsSubmitting(true);
        try {
            const res = await fetch("/api/enquiries", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name: name.trim(),
                    email: email.trim(),
                    phone: phone.trim() || undefined,
                    city: city.trim() || undefined,
                    intent,
                    instrument: instrument || undefined,
                    level: level || undefined,
                    whoFor: whoFor || undefined,
                    message: message.trim()
                })
            });
            if (res.ok) {
                toast({
                    title: "Enquiry sent",
                    description: c.contact.formSuccess
                });
                resetForm();
                return;
            }
            const data = await res.json().catch(()=>null);
            let issueText = "";
            if (data?.issues) {
                const parts = [];
                for (const [k, v] of Object.entries(data.issues)){
                    if (Array.isArray(v) && v.length) parts.push(`${k}: ${v.join(", ")}`);
                }
                issueText = parts.join(" · ");
            }
            const full = issueText ? `${c.contact.formError} — ${issueText}` : c.contact.formError;
            setSubmitError(full);
            toast({
                title: "Couldn't send",
                description: full
            });
        } catch  {
            setSubmitError(c.contact.formError);
            toast({
                title: "Couldn't send",
                description: c.contact.formError
            });
        } finally{
            setIsSubmitting(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: sectionRef,
        id: "enrol",
        "aria-label": "Enrol — three ways to begin",
        className: `reveal ${visible ? "is-visible" : ""}`,
        style: {
            paddingTop: "90px",
            paddingBottom: "80px",
            background: "linear-gradient(180deg, #16102A 0%, #1A1234 100%)"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto",
            style: {
                maxWidth: "1140px",
                padding: "0 32px"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        maxWidth: "760px",
                        margin: "0 auto",
                        textAlign: "center"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "vsp-eyebrow",
                            children: "Begin · three ways in"
                        }, void 0, false, {
                            fileName: "[project]/src/components/site/enrol.tsx",
                            lineNumber: 259,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            style: {
                                fontFamily: "var(--font-marcellus), serif",
                                fontSize: "clamp(32px, 4.6vw, 44px)",
                                lineHeight: 1.12,
                                letterSpacing: "-0.01em",
                                color: "#F3EDDF",
                                fontWeight: 400,
                                marginTop: "18px"
                            },
                            children: renderHeadingWithGoldToday(c.home.contactHeading)
                        }, void 0, false, {
                            fileName: "[project]/src/components/site/enrol.tsx",
                            lineNumber: 260,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: {
                                marginTop: "18px",
                                fontSize: "16px",
                                lineHeight: 1.7,
                                color: "rgba(243,237,223,0.72)",
                                fontFamily: "var(--font-instrument-sans), sans-serif"
                            },
                            children: "Whether you have a query, wish to learn, or want to book a performance — I'm here to listen. Every enquiry reaches Suka Pavalan directly."
                        }, void 0, false, {
                            fileName: "[project]/src/components/site/enrol.tsx",
                            lineNumber: 273,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/site/enrol.tsx",
                    lineNumber: 258,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-[1.25fr_1fr_1fr]",
                    style: {
                        gap: "16px",
                        marginTop: "48px"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "vsp-card-gold",
                            style: {
                                padding: "28px",
                                borderRadius: 0,
                                display: "flex",
                                flexDirection: "column"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "vsp-eyebrow",
                                    children: "One-to-one Lessons"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/site/enrol.tsx",
                                    lineNumber: 303,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    style: {
                                        fontFamily: "var(--font-marcellus), serif",
                                        fontSize: "26px",
                                        lineHeight: 1.15,
                                        color: "#F3EDDF",
                                        marginTop: "10px",
                                        fontWeight: 400
                                    },
                                    children: "Begin with a free trial"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/site/enrol.tsx",
                                    lineNumber: 304,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    style: {
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: "12px",
                                        marginTop: "20px"
                                    },
                                    children: TRIAL_CHECKLIST.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            style: {
                                                display: "flex",
                                                gap: "12px",
                                                alignItems: "flex-start",
                                                fontFamily: "var(--font-instrument-sans), sans-serif",
                                                fontSize: "14.5px",
                                                lineHeight: 1.5,
                                                color: "rgba(243,237,223,0.88)"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    "aria-hidden": true,
                                                    style: {
                                                        color: "#E0BC6A",
                                                        fontSize: "14px",
                                                        lineHeight: 1.5,
                                                        flexShrink: 0
                                                    },
                                                    children: "✦"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/site/enrol.tsx",
                                                    lineNumber: 337,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: item
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/site/enrol.tsx",
                                                    lineNumber: 348,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, item, true, {
                                            fileName: "[project]/src/components/site/enrol.tsx",
                                            lineNumber: 325,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/site/enrol.tsx",
                                    lineNumber: 316,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        marginTop: "auto",
                                        paddingTop: "24px"
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>handleIntentClick("lesson"),
                                        "aria-pressed": intent === "lesson",
                                        className: "group inline-flex items-center gap-[10px] bg-[#E0BC6A] text-[#1B1233] hover:bg-[#F2D89A] transition-all duration-200",
                                        style: {
                                            ...intentButtonBase,
                                            fontSize: "14.5px",
                                            padding: "12px 22px"
                                        },
                                        children: [
                                            "Start your trial",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                "aria-hidden": true,
                                                className: "transition-transform duration-200 group-hover:translate-x-1",
                                                children: "→"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/site/enrol.tsx",
                                                lineNumber: 361,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/site/enrol.tsx",
                                        lineNumber: 353,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/site/enrol.tsx",
                                    lineNumber: 352,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/site/enrol.tsx",
                            lineNumber: 294,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "vsp-card-neutral",
                            style: {
                                padding: "28px",
                                borderRadius: 0,
                                display: "flex",
                                flexDirection: "column"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "vsp-eyebrow",
                                    children: "Book a Performance"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/site/enrol.tsx",
                                    lineNumber: 381,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    style: {
                                        fontFamily: "var(--font-marcellus), serif",
                                        fontSize: "22px",
                                        lineHeight: 1.2,
                                        color: "#F3EDDF",
                                        marginTop: "10px",
                                        fontWeight: 400
                                    },
                                    children: "For sabhas and organisers"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/site/enrol.tsx",
                                    lineNumber: 382,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        fontFamily: "var(--font-instrument-sans), sans-serif",
                                        fontSize: "14.5px",
                                        lineHeight: 1.6,
                                        color: "rgba(243,237,223,0.78)",
                                        marginTop: "14px"
                                    },
                                    children: "Concerts, festivals, Thyagaraja Aradhana, fusion collaborations, devotional evenings."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/site/enrol.tsx",
                                    lineNumber: 394,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        marginTop: "auto",
                                        paddingTop: "24px"
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>handleIntentClick("booking"),
                                        "aria-pressed": intent === "booking",
                                        className: "group inline-flex items-center gap-[8px] bg-transparent text-[#E0BC6A] border border-[rgba(224,188,106,0.46)] hover:border-[rgba(224,188,106,0.8)] hover:bg-[rgba(224,188,106,0.06)] transition-all duration-200",
                                        style: {
                                            ...intentButtonBase,
                                            fontSize: "14px",
                                            padding: "11px 18px"
                                        },
                                        children: [
                                            "Enquire about booking",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                "aria-hidden": true,
                                                className: "transition-transform duration-200 group-hover:translate-x-1",
                                                children: "→"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/site/enrol.tsx",
                                                lineNumber: 415,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/site/enrol.tsx",
                                        lineNumber: 407,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/site/enrol.tsx",
                                    lineNumber: 406,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/site/enrol.tsx",
                            lineNumber: 372,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "vsp-card-neutral",
                            style: {
                                padding: "28px",
                                borderRadius: 0,
                                display: "flex",
                                flexDirection: "column"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "vsp-eyebrow",
                                    children: "Collaborations"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/site/enrol.tsx",
                                    lineNumber: 435,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    style: {
                                        fontFamily: "var(--font-marcellus), serif",
                                        fontSize: "22px",
                                        lineHeight: 1.2,
                                        color: "#F3EDDF",
                                        marginTop: "10px",
                                        fontWeight: 400
                                    },
                                    children: "For fellow musicians"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/site/enrol.tsx",
                                    lineNumber: 436,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        fontFamily: "var(--font-instrument-sans), sans-serif",
                                        fontSize: "14.5px",
                                        lineHeight: 1.6,
                                        color: "rgba(243,237,223,0.78)",
                                        marginTop: "14px"
                                    },
                                    children: "Recordings, fusion projects, session violin, vocal and composition work."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/site/enrol.tsx",
                                    lineNumber: 448,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        marginTop: "auto",
                                        paddingTop: "24px"
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>handleIntentClick("collaboration"),
                                        "aria-pressed": intent === "collaboration",
                                        className: "group inline-flex items-center gap-[8px] bg-transparent text-[#E0BC6A] border border-[rgba(224,188,106,0.46)] hover:border-[rgba(224,188,106,0.8)] hover:bg-[rgba(224,188,106,0.06)] transition-all duration-200",
                                        style: {
                                            ...intentButtonBase,
                                            fontSize: "14px",
                                            padding: "11px 18px"
                                        },
                                        children: [
                                            "Propose a collaboration",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                "aria-hidden": true,
                                                className: "transition-transform duration-200 group-hover:translate-x-1",
                                                children: "→"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/site/enrol.tsx",
                                                lineNumber: 469,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/site/enrol.tsx",
                                        lineNumber: 461,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/site/enrol.tsx",
                                    lineNumber: 460,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/site/enrol.tsx",
                            lineNumber: 426,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/site/enrol.tsx",
                    lineNumber: 289,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ref: panelRef,
                    className: "vsp-card-neutral mx-auto p-6 md:p-8",
                    style: {
                        maxWidth: "760px",
                        borderRadius: 0,
                        marginTop: "48px",
                        scrollMarginTop: "96px"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: "flex",
                                alignItems: "flex-end",
                                justifyContent: "space-between",
                                gap: "16px",
                                flexWrap: "wrap",
                                paddingBottom: "20px",
                                borderBottom: "1px solid rgba(243,237,223,0.16)"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "vsp-eyebrow",
                                            children: "Intent"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/site/enrol.tsx",
                                            lineNumber: 504,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                fontFamily: "var(--font-marcellus), serif",
                                                fontSize: "20px",
                                                color: "#E0BC6A",
                                                marginTop: "6px"
                                            },
                                            children: INTENT_LABELS[intent]
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/site/enrol.tsx",
                                            lineNumber: 505,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/site/enrol.tsx",
                                    lineNumber: 503,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        fontFamily: "var(--font-instrument-sans), sans-serif",
                                        fontSize: "13px",
                                        lineHeight: 1.5,
                                        color: "rgba(243,237,223,0.62)",
                                        maxWidth: "320px",
                                        textAlign: "right"
                                    },
                                    children: "Every enquiry reaches Suka Pavalan directly. A reply usually comes within two days."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/site/enrol.tsx",
                                    lineNumber: 516,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/site/enrol.tsx",
                            lineNumber: 492,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            onSubmit: handleSubmit,
                            "aria-label": "Trial lesson enquiry",
                            noValidate: true,
                            style: {
                                display: "flex",
                                flexDirection: "column",
                                gap: "20px",
                                marginTop: "24px"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 md:grid-cols-2",
                                    style: {
                                        gap: "20px"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                    htmlFor: "enrol-name",
                                                    style: labelStyle,
                                                    children: [
                                                        "Name",
                                                        " ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            "aria-hidden": true,
                                                            style: {
                                                                color: "#E0BC6A"
                                                            },
                                                            children: "*"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/site/enrol.tsx",
                                                            lineNumber: 550,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/site/enrol.tsx",
                                                    lineNumber: 548,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                    id: "enrol-name",
                                                    type: "text",
                                                    autoComplete: "name",
                                                    required: true,
                                                    "aria-required": "true",
                                                    value: name,
                                                    onChange: (e)=>setName(e.target.value),
                                                    className: "rounded-none",
                                                    style: inputStyle
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/site/enrol.tsx",
                                                    lineNumber: 554,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/site/enrol.tsx",
                                            lineNumber: 547,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                    htmlFor: "enrol-email",
                                                    style: labelStyle,
                                                    children: [
                                                        "Email",
                                                        " ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            "aria-hidden": true,
                                                            style: {
                                                                color: "#E0BC6A"
                                                            },
                                                            children: "*"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/site/enrol.tsx",
                                                            lineNumber: 569,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/site/enrol.tsx",
                                                    lineNumber: 567,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                    id: "enrol-email",
                                                    type: "email",
                                                    autoComplete: "email",
                                                    required: true,
                                                    "aria-required": "true",
                                                    value: email,
                                                    onChange: (e)=>setEmail(e.target.value),
                                                    className: "rounded-none",
                                                    style: inputStyle
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/site/enrol.tsx",
                                                    lineNumber: 573,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/site/enrol.tsx",
                                            lineNumber: 566,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/site/enrol.tsx",
                                    lineNumber: 543,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 md:grid-cols-2",
                                    style: {
                                        gap: "20px"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                    htmlFor: "enrol-phone",
                                                    style: labelStyle,
                                                    children: "Phone (optional)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/site/enrol.tsx",
                                                    lineNumber: 593,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                    id: "enrol-phone",
                                                    type: "tel",
                                                    autoComplete: "tel",
                                                    value: phone,
                                                    onChange: (e)=>setPhone(e.target.value),
                                                    className: "rounded-none",
                                                    style: inputStyle
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/site/enrol.tsx",
                                                    lineNumber: 596,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/site/enrol.tsx",
                                            lineNumber: 592,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                    htmlFor: "enrol-city",
                                                    style: labelStyle,
                                                    children: "City / Timezone (optional)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/site/enrol.tsx",
                                                    lineNumber: 607,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                    id: "enrol-city",
                                                    type: "text",
                                                    value: city,
                                                    onChange: (e)=>setCity(e.target.value),
                                                    className: "rounded-none",
                                                    style: inputStyle
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/site/enrol.tsx",
                                                    lineNumber: 610,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/site/enrol.tsx",
                                            lineNumber: 606,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/site/enrol.tsx",
                                    lineNumber: 588,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 md:grid-cols-3",
                                    style: {
                                        gap: "20px"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                    htmlFor: "enrol-who",
                                                    style: labelStyle,
                                                    children: "Who is this for?"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/site/enrol.tsx",
                                                    lineNumber: 627,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                                    value: whoFor,
                                                    onValueChange: setWhoFor,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                                            id: "enrol-who",
                                                            className: "rounded-none w-full",
                                                            style: inputStyle,
                                                            "aria-label": "Who is this for?",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                                                                placeholder: "Select…"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/site/enrol.tsx",
                                                                lineNumber: 637,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/site/enrol.tsx",
                                                            lineNumber: 631,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                                                            className: "rounded-none",
                                                            children: WHO_FOR_OPTIONS.map((o)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                                    value: o,
                                                                    className: "rounded-none",
                                                                    children: o
                                                                }, o, false, {
                                                                    fileName: "[project]/src/components/site/enrol.tsx",
                                                                    lineNumber: 641,
                                                                    columnNumber: 23
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/site/enrol.tsx",
                                                            lineNumber: 639,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/site/enrol.tsx",
                                                    lineNumber: 630,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/site/enrol.tsx",
                                            lineNumber: 626,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                    htmlFor: "enrol-instrument",
                                                    style: labelStyle,
                                                    children: "Instrument"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/site/enrol.tsx",
                                                    lineNumber: 649,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                                    value: instrument,
                                                    onValueChange: setInstrument,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                                            id: "enrol-instrument",
                                                            className: "rounded-none w-full",
                                                            style: inputStyle,
                                                            "aria-label": "Instrument",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                                                                placeholder: "Select…"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/site/enrol.tsx",
                                                                lineNumber: 659,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/site/enrol.tsx",
                                                            lineNumber: 653,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                                                            className: "rounded-none",
                                                            children: INSTRUMENT_OPTIONS.map((o)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                                    value: o,
                                                                    className: "rounded-none",
                                                                    children: o
                                                                }, o, false, {
                                                                    fileName: "[project]/src/components/site/enrol.tsx",
                                                                    lineNumber: 663,
                                                                    columnNumber: 23
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/site/enrol.tsx",
                                                            lineNumber: 661,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/site/enrol.tsx",
                                                    lineNumber: 652,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/site/enrol.tsx",
                                            lineNumber: 648,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                    htmlFor: "enrol-level",
                                                    style: labelStyle,
                                                    children: "Level"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/site/enrol.tsx",
                                                    lineNumber: 671,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                                    value: level,
                                                    onValueChange: setLevel,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                                            id: "enrol-level",
                                                            className: "rounded-none w-full",
                                                            style: inputStyle,
                                                            "aria-label": "Level",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                                                                placeholder: "Select…"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/site/enrol.tsx",
                                                                lineNumber: 681,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/site/enrol.tsx",
                                                            lineNumber: 675,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                                                            className: "rounded-none",
                                                            children: LEVEL_OPTIONS.map((o)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                                    value: o,
                                                                    className: "rounded-none",
                                                                    children: o
                                                                }, o, false, {
                                                                    fileName: "[project]/src/components/site/enrol.tsx",
                                                                    lineNumber: 685,
                                                                    columnNumber: 23
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/site/enrol.tsx",
                                                            lineNumber: 683,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/site/enrol.tsx",
                                                    lineNumber: 674,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/site/enrol.tsx",
                                            lineNumber: 670,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/site/enrol.tsx",
                                    lineNumber: 622,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                            htmlFor: "enrol-message",
                                            style: labelStyle,
                                            children: [
                                                "Message",
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    "aria-hidden": true,
                                                    style: {
                                                        color: "#E0BC6A"
                                                    },
                                                    children: "*"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/site/enrol.tsx",
                                                    lineNumber: 698,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/site/enrol.tsx",
                                            lineNumber: 696,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Textarea"], {
                                            id: "enrol-message",
                                            required: true,
                                            "aria-required": "true",
                                            value: message,
                                            onChange: (e)=>setMessage(e.target.value),
                                            placeholder: "Tell me a little about the student, your goals, and your timezone.",
                                            className: "rounded-none",
                                            style: textareaStyle
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/site/enrol.tsx",
                                            lineNumber: 702,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/site/enrol.tsx",
                                    lineNumber: 695,
                                    columnNumber: 13
                                }, this),
                                submitError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    role: "status",
                                    "aria-live": "polite",
                                    style: {
                                        fontSize: "13.5px",
                                        lineHeight: 1.5,
                                        color: "#F2C5A5",
                                        fontFamily: "var(--font-instrument-sans), sans-serif",
                                        padding: "10px 14px",
                                        border: "1px solid rgba(224,140,80,0.4)",
                                        background: "rgba(224,140,80,0.08)",
                                        borderRadius: 0
                                    },
                                    children: submitError
                                }, void 0, false, {
                                    fileName: "[project]/src/components/site/enrol.tsx",
                                    lineNumber: 716,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "20px",
                                        flexWrap: "wrap",
                                        marginTop: "4px"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            type: "submit",
                                            disabled: isSubmitting,
                                            className: "group rounded-none",
                                            style: {
                                                fontFamily: "var(--font-marcellus), serif",
                                                fontSize: "15px",
                                                letterSpacing: "0.02em",
                                                padding: "13px 26px",
                                                background: isSubmitting ? "rgba(224,188,106,0.45)" : "#E0BC6A",
                                                color: "#1B1233",
                                                borderRadius: 0
                                            },
                                            children: [
                                                isSubmitting ? "Sending…" : "Send enquiry",
                                                !isSubmitting && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    "aria-hidden": true,
                                                    className: "transition-transform duration-200 group-hover:translate-x-1",
                                                    children: "→"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/site/enrol.tsx",
                                                    lineNumber: 762,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/site/enrol.tsx",
                                            lineNumber: 744,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                fontFamily: "var(--font-geist-mono), monospace",
                                                fontSize: "10.5px",
                                                letterSpacing: "0.16em",
                                                textTransform: "uppercase",
                                                color: "rgba(243,237,223,0.5)"
                                            },
                                            children: INTENT_FOOTERS[intent]
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/site/enrol.tsx",
                                            lineNumber: 770,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/site/enrol.tsx",
                                    lineNumber: 735,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/site/enrol.tsx",
                            lineNumber: 531,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/site/enrol.tsx",
                    lineNumber: 481,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/site/enrol.tsx",
            lineNumber: 256,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/site/enrol.tsx",
        lineNumber: 245,
        columnNumber: 5
    }, this);
}
_s(Enrol, "z7aaMYjvBl42lQ4u8CXrtx2TLf0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$site$2f$use$2d$reveal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReveal"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"]
    ];
});
_c = Enrol;
const __TURBOPACK__default__export__ = Enrol;
var _c;
__turbopack_context__.k.register(_c, "Enrol");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/site/reveal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Reveal",
    ()=>Reveal,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$site$2f$use$2d$reveal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/site/use-reveal.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function Reveal({ children, as: Tag = "div", className, style, delay = 0, threshold, id, "aria-label": ariaLabel }) {
    _s();
    const { ref, visible } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$site$2f$use$2d$reveal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReveal"])({
        threshold
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Tag, {
        ref: ref,
        id: id,
        "aria-label": ariaLabel,
        className: `reveal ${visible ? "is-visible" : ""} ${className ?? ""}`,
        style: {
            transitionDelay: delay ? `${delay}ms` : undefined,
            ...style
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/site/reveal.tsx",
        lineNumber: 37,
        columnNumber: 5
    }, this);
}
_s(Reveal, "M2uV/+i61alUo/hG/g9vVK6yajw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$site$2f$use$2d$reveal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReveal"]
    ];
});
_c = Reveal;
const __TURBOPACK__default__export__ = Reveal;
var _c;
__turbopack_context__.k.register(_c, "Reveal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_b653f10a._.js.map