(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/_9ae0db._.js", {

"[project]/utils/cn.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "cn": (()=>cn)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/ui/textGenerateEffect.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "TextGenerateEffect": (()=>TextGenerateEffect)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/utils/cn.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$hooks$2f$use$2d$animate$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/framer-motion/dist/es/animation/hooks/use-animate.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$utils$2f$stagger$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/framer-motion/dist/es/animation/utils/stagger.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
const TextGenerateEffect = ({ words, className, filter = true, duration = 0.5 })=>{
    _s();
    const [scope, animate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$hooks$2f$use$2d$animate$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnimate"])();
    let wordsArray = words.split(" ");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TextGenerateEffect.useEffect": ()=>{
            animate("span", {
                opacity: 1,
                filter: filter ? "blur(0px)" : "none"
            }, {
                duration: duration ? duration : 1,
                delay: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$utils$2f$stagger$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stagger"])(0.2)
            });
        }
    }["TextGenerateEffect.useEffect"], [
        scope.current
    ]);
    const renderWords = ()=>{
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            ref: scope,
            children: wordsArray.map((word, idx)=>{
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                    className: `${idx > 3 ? 'text-pink-400' : 'dark:text-white text-black'}`,
                    style: {
                        filter: filter ? "blur(10px)" : "none"
                    },
                    children: [
                        word,
                        " "
                    ]
                }, word + idx, true, {
                    fileName: "[project]/components/ui/textGenerateEffect.tsx",
                    lineNumber: 38,
                    columnNumber: 25
                }, this);
            })
        }, void 0, false, {
            fileName: "[project]/components/ui/textGenerateEffect.tsx",
            lineNumber: 35,
            columnNumber: 13
        }, this);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("font-bold", className),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: " dark:text-white text-black leading-snug tracking-wide",
                children: renderWords()
            }, void 0, false, {
                fileName: "[project]/components/ui/textGenerateEffect.tsx",
                lineNumber: 56,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/ui/textGenerateEffect.tsx",
            lineNumber: 55,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ui/textGenerateEffect.tsx",
        lineNumber: 54,
        columnNumber: 9
    }, this);
};
_s(TextGenerateEffect, "crQrtxD822sFKyor5CO2nze/XGc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$hooks$2f$use$2d$animate$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnimate"]
    ];
});
_c = TextGenerateEffect;
var _c;
__turbopack_refresh__.register(_c, "TextGenerateEffect");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/ui/GradientBg.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "BackgroundGradientAnimation": (()=>BackgroundGradientAnimation)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/utils/cn.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
const BackgroundGradientAnimation = ({ gradientBackgroundStart = "rgb(108, 0, 162)", gradientBackgroundEnd = "rgb(0, 17, 82)", firstColor = "18, 113, 255", secondColor = "221, 74, 255", thirdColor = "100, 220, 255", fourthColor = "200, 50, 50", fifthColor = "180, 180, 50", pointerColor = "140, 100, 255", size = "80%", blendingValue = "hard-light", children, className, interactive = true, containerClassName })=>{
    _s();
    const interactiveRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [curX, setCurX] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [curY, setCurY] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [tgX, setTgX] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [tgY, setTgY] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BackgroundGradientAnimation.useEffect": ()=>{
            document.body.style.setProperty("--gradient-background-start", gradientBackgroundStart);
            document.body.style.setProperty("--gradient-background-end", gradientBackgroundEnd);
            document.body.style.setProperty("--first-color", firstColor);
            document.body.style.setProperty("--second-color", secondColor);
            document.body.style.setProperty("--third-color", thirdColor);
            document.body.style.setProperty("--fourth-color", fourthColor);
            document.body.style.setProperty("--fifth-color", fifthColor);
            document.body.style.setProperty("--pointer-color", pointerColor);
            document.body.style.setProperty("--size", size);
            document.body.style.setProperty("--blending-value", blendingValue);
        }
    }["BackgroundGradientAnimation.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BackgroundGradientAnimation.useEffect": ()=>{
            function move() {
                if (!interactiveRef.current) {
                    return;
                }
                setCurX(curX + (tgX - curX) / 20);
                setCurY(curY + (tgY - curY) / 20);
                interactiveRef.current.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
            }
            move();
        }
    }["BackgroundGradientAnimation.useEffect"], [
        tgX,
        tgY
    ]);
    const handleMouseMove = (event)=>{
        if (interactiveRef.current) {
            const rect = interactiveRef.current.getBoundingClientRect();
            setTgX(event.clientX - rect.left);
            setTgY(event.clientY - rect.top);
        }
    };
    const [isSafari, setIsSafari] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BackgroundGradientAnimation.useEffect": ()=>{
            setIsSafari(/^((?!chrome|android).)*safari/i.test(navigator.userAgent));
        }
    }["BackgroundGradientAnimation.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("h-screen w-screen relative overflow-hidden top-0 left-0 bg-[linear-gradient(40deg,var(--gradient-background-start),var(--gradient-background-end))]", containerClassName),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: "hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("filter", {
                        id: "blurMe",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feGaussianBlur", {
                                in: "SourceGraphic",
                                stdDeviation: "10",
                                result: "blur"
                            }, void 0, false, {
                                fileName: "[project]/components/ui/GradientBg.tsx",
                                lineNumber: 99,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feColorMatrix", {
                                in: "blur",
                                mode: "matrix",
                                values: "1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8",
                                result: "goo"
                            }, void 0, false, {
                                fileName: "[project]/components/ui/GradientBg.tsx",
                                lineNumber: 104,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feBlend", {
                                in: "SourceGraphic",
                                in2: "goo"
                            }, void 0, false, {
                                fileName: "[project]/components/ui/GradientBg.tsx",
                                lineNumber: 110,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ui/GradientBg.tsx",
                        lineNumber: 98,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/ui/GradientBg.tsx",
                    lineNumber: 97,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ui/GradientBg.tsx",
                lineNumber: 96,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("", className),
                children: children
            }, void 0, false, {
                fileName: "[project]/components/ui/GradientBg.tsx",
                lineNumber: 114,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("gradients-container h-full w-full blur-lg", isSafari ? "blur-2xl" : "[filter:url(#blurMe)_blur(40px)]"),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(`absolute [background:radial-gradient(circle_at_center,_var(--first-color)_0,_var(--first-color)_50%)_no-repeat]`, `[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]`, `[transform-origin:center_center]`, `animate-first`, `opacity-100`)
                    }, void 0, false, {
                        fileName: "[project]/components/ui/GradientBg.tsx",
                        lineNumber: 121,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(`absolute [background:radial-gradient(circle_at_center,_rgba(var(--second-color),_0.8)_0,_rgba(var(--second-color),_0)_50%)_no-repeat]`, `[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]`, `[transform-origin:calc(50%-400px)]`, `animate-second`, `opacity-100`)
                    }, void 0, false, {
                        fileName: "[project]/components/ui/GradientBg.tsx",
                        lineNumber: 130,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(`absolute [background:radial-gradient(circle_at_center,_rgba(var(--third-color),_0.8)_0,_rgba(var(--third-color),_0)_50%)_no-repeat]`, `[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]`, `[transform-origin:calc(50%+400px)]`, `animate-third`, `opacity-100`)
                    }, void 0, false, {
                        fileName: "[project]/components/ui/GradientBg.tsx",
                        lineNumber: 139,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(`absolute [background:radial-gradient(circle_at_center,_rgba(var(--fourth-color),_0.8)_0,_rgba(var(--fourth-color),_0)_50%)_no-repeat]`, `[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]`, `[transform-origin:calc(50%-200px)]`, `animate-fourth`, `opacity-70`)
                    }, void 0, false, {
                        fileName: "[project]/components/ui/GradientBg.tsx",
                        lineNumber: 148,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(`absolute [background:radial-gradient(circle_at_center,_rgba(var(--fifth-color),_0.8)_0,_rgba(var(--fifth-color),_0)_50%)_no-repeat]`, `[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]`, `[transform-origin:calc(50%-800px)_calc(50%+800px)]`, `animate-fifth`, `opacity-100`)
                    }, void 0, false, {
                        fileName: "[project]/components/ui/GradientBg.tsx",
                        lineNumber: 157,
                        columnNumber: 17
                    }, this),
                    interactive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: interactiveRef,
                        onMouseMove: handleMouseMove,
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(`absolute [background:radial-gradient(circle_at_center,_rgba(var(--pointer-color),_0.8)_0,_rgba(var(--pointer-color),_0)_50%)_no-repeat]`, `[mix-blend-mode:var(--blending-value)] w-full h-full -top-1/2 -left-1/2`, `opacity-70`)
                    }, void 0, false, {
                        fileName: "[project]/components/ui/GradientBg.tsx",
                        lineNumber: 168,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ui/GradientBg.tsx",
                lineNumber: 115,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/GradientBg.tsx",
        lineNumber: 90,
        columnNumber: 9
    }, this);
};
_s(BackgroundGradientAnimation, "Ali8l7wYwjWjM6LZy8MVbYYZnHM=");
_c = BackgroundGradientAnimation;
var _c;
__turbopack_refresh__.register(_c, "BackgroundGradientAnimation");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/ui/WorldMap.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "WorldMap": (()=>WorldMap)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next-themes/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$dotted$2d$map$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/dotted-map/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/motion/dist/es/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
;
;
function WorldMap({ dots = [], lineColor = "pink" }) {
    _s();
    const svgRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const map = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$dotted$2d$map$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]({
        height: 100,
        grid: "diagonal"
    });
    const { theme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const svgMap = map.getSVG({
        radius: 0.22,
        color: "white",
        shape: "circle",
        backgroundColor: "black"
    });
    const projectPoint = (lat, lng)=>{
        const x = (lng + 180) * (800 / 360);
        const y = (90 - lat) * (400 / 180);
        return {
            x,
            y
        };
    };
    const createCurvedPath = (start, end)=>{
        const midX = (start.x + end.x) / 2;
        const midY = Math.min(start.y, end.y) - 50;
        return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full aspect-[2/1] bg-black rounded-lg  relative font-sans",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: `data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`,
                className: "h-full w-full [mask-image:linear-gradient(to_bottom,transparent,white_10%,white_90%,transparent)] pointer-events-none select-none",
                alt: "world map",
                height: "495",
                width: "1056",
                draggable: false
            }, void 0, false, {
                fileName: "[project]/components/ui/WorldMap.tsx",
                lineNumber: 50,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                ref: svgRef,
                viewBox: "0 0 800 400",
                className: "w-full h-full absolute inset-0 pointer-events-none select-none",
                children: [
                    dots.map((dot, i)=>{
                        const startPoint = projectPoint(dot.start.lat, dot.start.lng);
                        const endPoint = projectPoint(dot.end.lat, dot.end.lng);
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].path, {
                                d: createCurvedPath(startPoint, endPoint),
                                fill: "none",
                                stroke: "url(#path-gradient)",
                                strokeWidth: "1",
                                initial: {
                                    pathLength: 0
                                },
                                animate: {
                                    pathLength: 1
                                },
                                transition: {
                                    duration: 1,
                                    delay: 0.5 * i,
                                    ease: "easeOut"
                                }
                            }, `start-upper-${i}`, false, {
                                fileName: "[project]/components/ui/WorldMap.tsx",
                                lineNumber: 68,
                                columnNumber: 29
                            }, this)
                        }, `path-group-${i}`, false, {
                            fileName: "[project]/components/ui/WorldMap.tsx",
                            lineNumber: 67,
                            columnNumber: 25
                        }, this);
                    }),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                            id: "path-gradient",
                            x1: "0%",
                            y1: "0%",
                            x2: "100%",
                            y2: "0%",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: "0%",
                                    stopColor: "white",
                                    stopOpacity: "0"
                                }, void 0, false, {
                                    fileName: "[project]/components/ui/WorldMap.tsx",
                                    lineNumber: 92,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: "5%",
                                    stopColor: lineColor,
                                    stopOpacity: "1"
                                }, void 0, false, {
                                    fileName: "[project]/components/ui/WorldMap.tsx",
                                    lineNumber: 93,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: "95%",
                                    stopColor: lineColor,
                                    stopOpacity: "1"
                                }, void 0, false, {
                                    fileName: "[project]/components/ui/WorldMap.tsx",
                                    lineNumber: 94,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: "100%",
                                    stopColor: "white",
                                    stopOpacity: "0"
                                }, void 0, false, {
                                    fileName: "[project]/components/ui/WorldMap.tsx",
                                    lineNumber: 95,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ui/WorldMap.tsx",
                            lineNumber: 91,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/ui/WorldMap.tsx",
                        lineNumber: 90,
                        columnNumber: 17
                    }, this),
                    dots.map((dot, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                            cx: projectPoint(dot.start.lat, dot.start.lng).x,
                                            cy: projectPoint(dot.start.lat, dot.start.lng).y,
                                            r: "2",
                                            fill: lineColor
                                        }, void 0, false, {
                                            fileName: "[project]/components/ui/WorldMap.tsx",
                                            lineNumber: 102,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                            cx: projectPoint(dot.start.lat, dot.start.lng).x,
                                            cy: projectPoint(dot.start.lat, dot.start.lng).y,
                                            r: "2",
                                            fill: lineColor,
                                            opacity: "0.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("animate", {
                                                    attributeName: "r",
                                                    from: "2",
                                                    to: "8",
                                                    dur: "1.5s",
                                                    begin: "0s",
                                                    repeatCount: "indefinite"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/ui/WorldMap.tsx",
                                                    lineNumber: 115,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("animate", {
                                                    attributeName: "opacity",
                                                    from: "0.5",
                                                    to: "0",
                                                    dur: "1.5s",
                                                    begin: "0s",
                                                    repeatCount: "indefinite"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/ui/WorldMap.tsx",
                                                    lineNumber: 123,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/ui/WorldMap.tsx",
                                            lineNumber: 108,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, `start-${i}`, true, {
                                    fileName: "[project]/components/ui/WorldMap.tsx",
                                    lineNumber: 101,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                            cx: projectPoint(dot.end.lat, dot.end.lng).x,
                                            cy: projectPoint(dot.end.lat, dot.end.lng).y,
                                            r: "2",
                                            fill: lineColor
                                        }, void 0, false, {
                                            fileName: "[project]/components/ui/WorldMap.tsx",
                                            lineNumber: 134,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                            cx: projectPoint(dot.end.lat, dot.end.lng).x,
                                            cy: projectPoint(dot.end.lat, dot.end.lng).y,
                                            r: "2",
                                            fill: lineColor,
                                            opacity: "0.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("animate", {
                                                    attributeName: "r",
                                                    from: "2",
                                                    to: "8",
                                                    dur: "1.5s",
                                                    begin: "0s",
                                                    repeatCount: "indefinite"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/ui/WorldMap.tsx",
                                                    lineNumber: 147,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("animate", {
                                                    attributeName: "opacity",
                                                    from: "0.5",
                                                    to: "0",
                                                    dur: "1.5s",
                                                    begin: "0s",
                                                    repeatCount: "indefinite"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/ui/WorldMap.tsx",
                                                    lineNumber: 155,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/ui/WorldMap.tsx",
                                            lineNumber: 140,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, `end-${i}`, true, {
                                    fileName: "[project]/components/ui/WorldMap.tsx",
                                    lineNumber: 133,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, `points-group-${i}`, true, {
                            fileName: "[project]/components/ui/WorldMap.tsx",
                            lineNumber: 100,
                            columnNumber: 21
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/components/ui/WorldMap.tsx",
                lineNumber: 58,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/WorldMap.tsx",
        lineNumber: 49,
        columnNumber: 9
    }, this);
}
_s(WorldMap, "114wOokXFw/AxEaYg5C56iy5jvw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c = WorldMap;
var _c;
__turbopack_refresh__.register(_c, "WorldMap");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/ui/MapElement.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "MapElement": (()=>MapElement)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$WorldMap$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/ui/WorldMap.tsx [app-client] (ecmascript)");
"use client";
;
;
;
MapElement;
function MapElement() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: " py-40 dark:bg-black bg-white w-full",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$WorldMap$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WorldMap"], {
            dots: [
                {
                    start: {
                        lat: 64.2008,
                        lng: -149.4937
                    },
                    end: {
                        lat: 34.0522,
                        lng: -118.2437
                    }
                },
                {
                    start: {
                        lat: 64.2008,
                        lng: -149.4937
                    },
                    end: {
                        lat: -15.7975,
                        lng: -47.8919
                    }
                },
                {
                    start: {
                        lat: -15.7975,
                        lng: -47.8919
                    },
                    end: {
                        lat: 38.7223,
                        lng: -9.1393
                    }
                },
                {
                    start: {
                        lat: 51.5074,
                        lng: -0.1278
                    },
                    end: {
                        lat: 28.6139,
                        lng: 77.209
                    }
                },
                {
                    start: {
                        lat: 28.6139,
                        lng: 77.209
                    },
                    end: {
                        lat: 43.1332,
                        lng: 131.9113
                    }
                },
                {
                    start: {
                        lat: 28.6139,
                        lng: 77.209
                    },
                    end: {
                        lat: -1.2921,
                        lng: 36.8219
                    }
                }
            ]
        }, void 0, false, {
            fileName: "[project]/components/ui/MapElement.jsx",
            lineNumber: 8,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ui/MapElement.jsx",
        lineNumber: 7,
        columnNumber: 9
    }, this);
}
_c = MapElement;
var _c;
__turbopack_refresh__.register(_c, "MapElement");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/ui/BentoGrid.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "BentoGrid": (()=>BentoGrid),
    "BentoGridItem": (()=>BentoGridItem)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/utils/cn.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$GradientBg$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/ui/GradientBg.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$MapElement$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/ui/MapElement.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$lottiefiles$2f$dotlottie$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@lottiefiles/dotlottie-react/dist/index.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
const leftList = [
    "C++",
    "Python",
    "JavaScript",
    "TypeScript"
];
const rightList = [
    "Next.js",
    "React.js",
    "HTML5",
    "CSS"
];
const BentoGrid = ({ className, children })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto", className),
        children: children
    }, void 0, false, {
        fileName: "[project]/components/ui/BentoGrid.tsx",
        lineNumber: 20,
        columnNumber: 9
    }, this);
};
_c = BentoGrid;
const BentoGridItem = ({ className, title, description, img, imgClassName, spareImg, id, titleClassName })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4", className),
        style: {
            backgroundColor: 'linear-gradient(90deg, rgba(164,0,255,1) 0%, rgba(91,30,102,1) 3%, rgba(2,0,36,1) 98%)',
            background: 'rgb(4,7,29)'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `${id === 6 && "flex justify-center"} h-full`,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full h-full absolute",
                    children: img && id !== 1 && id !== 5 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: img,
                        alt: img,
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(imgClassName, "object-cover object-center ")
                    }, void 0, false, {
                        fileName: "[project]/components/ui/BentoGrid.tsx",
                        lineNumber: 66,
                        columnNumber: 25
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/ui/BentoGrid.tsx",
                    lineNumber: 64,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `absolute h-auto left-40 -bottom-10 ${id === 5 && "w-full"} `,
                    children: img && id == 5 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$lottiefiles$2f$dotlottie$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DotLottieReact"], {
                        src: img,
                        loop: true,
                        autoplay: true,
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(imgClassName, "object-cover object-center")
                    }, void 0, false, {
                        fileName: "[project]/components/ui/BentoGrid.tsx",
                        lineNumber: 79,
                        columnNumber: 25
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/ui/BentoGrid.tsx",
                    lineNumber: 74,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `absolute right-0 -bottom-5 ${id === 5 && "mr-10 w-full opacity-80"} `,
                    children: spareImg && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: spareImg,
                        alt: spareImg,
                        //   width={220}
                        className: "object-cover object-center w-full h-full"
                    }, void 0, false, {
                        fileName: "[project]/components/ui/BentoGrid.tsx",
                        lineNumber: 93,
                        columnNumber: 25
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/ui/BentoGrid.tsx",
                    lineNumber: 88,
                    columnNumber: 17
                }, this),
                id === 6 && // add background animation , remove the p tag
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$GradientBg$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BackgroundGradientAnimation"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"
                    }, void 0, false, {
                        fileName: "[project]/components/ui/BentoGrid.tsx",
                        lineNumber: 107,
                        columnNumber: 25
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/ui/BentoGrid.tsx",
                    lineNumber: 106,
                    columnNumber: 21
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(titleClassName, "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10",
                            children: description
                        }, void 0, false, {
                            fileName: "[project]/components/ui/BentoGrid.tsx",
                            lineNumber: 118,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `font-sans text-lg lg:text-3xl max-w-96 font-bold z-10`,
                            children: title
                        }, void 0, false, {
                            fileName: "[project]/components/ui/BentoGrid.tsx",
                            lineNumber: 123,
                            columnNumber: 21
                        }, this),
                        img && id == 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$lottiefiles$2f$dotlottie$2d$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DotLottieReact"], {
                            src: img,
                            loop: true,
                            autoplay: true
                        }, void 0, false, {
                            fileName: "[project]/components/ui/BentoGrid.tsx",
                            lineNumber: 130,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "group-hover/bento:translate-x-1 transition duration-200",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "justify-center items-center flex flex-col h-full w-full",
                                children: id === 2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$MapElement$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MapElement"], {}, void 0, false, {
                                    fileName: "[project]/components/ui/BentoGrid.tsx",
                                    lineNumber: 141,
                                    columnNumber: 42
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/ui/BentoGrid.tsx",
                                lineNumber: 140,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/ui/BentoGrid.tsx",
                            lineNumber: 139,
                            columnNumber: 21
                        }, this),
                        id === 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col gap-2 md:gap-2 lg:gap-8",
                                    children: [
                                        leftList.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50    lg:opacity-100 rounded-lg text-center bg-[#10132E]",
                                                children: item
                                            }, i, false, {
                                                fileName: "[project]/components/ui/BentoGrid.tsx",
                                                lineNumber: 151,
                                                columnNumber: 37
                                            }, this)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-[#10132E]"
                                        }, void 0, false, {
                                            fileName: "[project]/components/ui/BentoGrid.tsx",
                                            lineNumber: 159,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/ui/BentoGrid.tsx",
                                    lineNumber: 149,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col gap-2 md:gap-2 lg:gap-8",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-[#10132E]"
                                        }, void 0, false, {
                                            fileName: "[project]/components/ui/BentoGrid.tsx",
                                            lineNumber: 162,
                                            columnNumber: 33
                                        }, this),
                                        rightList.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50    lg:opacity-100 rounded-lg text-center bg-[#10132E]",
                                                children: item
                                            }, i, false, {
                                                fileName: "[project]/components/ui/BentoGrid.tsx",
                                                lineNumber: 164,
                                                columnNumber: 37
                                            }, this))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/ui/BentoGrid.tsx",
                                    lineNumber: 161,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ui/BentoGrid.tsx",
                            lineNumber: 147,
                            columnNumber: 25
                        }, this),
                        id === 6
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/ui/BentoGrid.tsx",
                    lineNumber: 111,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/ui/BentoGrid.tsx",
            lineNumber: 63,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ui/BentoGrid.tsx",
        lineNumber: 53,
        columnNumber: 9
    }, this);
};
_c1 = BentoGridItem;
var _c, _c1;
__turbopack_refresh__.register(_c, "BentoGrid");
__turbopack_refresh__.register(_c1, "BentoGridItem");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/ui/FloatingNav.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "FloatingNav": (()=>FloatingNav)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/utils/cn.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/framer-motion/dist/es/value/use-scroll.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$motion$2d$value$2d$event$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/framer-motion/dist/es/utils/use-motion-value-event.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
;
const FloatingNav = ({ navItems, className })=>{
    _s();
    const { scrollYProgress } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScroll"])();
    const [visible, setVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$motion$2d$value$2d$event$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValueEvent"])(scrollYProgress, "change", {
        "FloatingNav.useMotionValueEvent": (current)=>{
            // Check if current is not undefined and is a number
            if (typeof current === "number") {
                let direction = current - scrollYProgress.getPrevious();
                if (scrollYProgress.get() < 0.05) {
                    setVisible(false);
                } else {
                    if (direction < 0) {
                        setVisible(true);
                    } else {
                        setVisible(false);
                    }
                }
            }
        }
    }["FloatingNav.useMotionValueEvent"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
        mode: "wait",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: {
                opacity: 1,
                y: -100
            },
            animate: {
                y: visible ? 0 : -100,
                opacity: visible ? 1 : 0
            },
            transition: {
                duration: 0.2
            },
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex max-w-fit  fixed top-10 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full dark:bg-black bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-2 pl-8 py-2  items-center justify-center space-x-4", className),
            children: [
                navItems.map((navItem, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: navItem.link,
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "block sm:hidden",
                                children: navItem.icon
                            }, void 0, false, {
                                fileName: "[project]/components/ui/FloatingNav.tsx",
                                lineNumber: 71,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "hidden sm:block text-sm",
                                children: navItem.name
                            }, void 0, false, {
                                fileName: "[project]/components/ui/FloatingNav.tsx",
                                lineNumber: 72,
                                columnNumber: 25
                            }, this)
                        ]
                    }, `link=${idx}`, true, {
                        fileName: "[project]/components/ui/FloatingNav.tsx",
                        lineNumber: 64,
                        columnNumber: 21
                    }, this)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "Login"
                        }, void 0, false, {
                            fileName: "[project]/components/ui/FloatingNav.tsx",
                            lineNumber: 76,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-px"
                        }, void 0, false, {
                            fileName: "[project]/components/ui/FloatingNav.tsx",
                            lineNumber: 77,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/ui/FloatingNav.tsx",
                    lineNumber: 75,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/ui/FloatingNav.tsx",
            lineNumber: 46,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ui/FloatingNav.tsx",
        lineNumber: 45,
        columnNumber: 9
    }, this);
};
_s(FloatingNav, "im9pZNlcXXzn1/AZwMke1Owg6OA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScroll"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$motion$2d$value$2d$event$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValueEvent"]
    ];
});
_c = FloatingNav;
var _c;
__turbopack_refresh__.register(_c, "FloatingNav");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),
}]);

//# sourceMappingURL=_9ae0db._.js.map