import {
  CssBaseline_default,
  require_emotion_cache_cjs,
  require_emotion_react_cjs,
  theme_default
} from "/build/_shared/chunk-LKZDFMSJ.js";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  __toESM,
  require_jsx_dev_runtime
} from "/build/_shared/chunk-4GRYSH3V.js";

// node_modules/react-multi-carousel/lib/styles.css
var styles_default = "/build/_assets/styles-CKMVMKON.css";

// src/root.tsx
var import_react2 = __toESM(require_emotion_react_cjs());

// css-theme/emotion-cache.js
var import_cache = __toESM(require_emotion_cache_cjs());
function createEmotionCache() {
  return (0, import_cache.default)({ key: "css" });
}

// src/root.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var meta = () => ({
  charset: "utf-8",
  title: "Ball Hog",
  viewport: "width=device-width,initial-scale=1"
});
var links = () => {
  return [
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
    },
    {
      rel: "stylesheet",
      href: styles_default
    }
  ];
};
var cache = createEmotionCache();
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Document, {
    theme: theme_default,
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CssBaseline_default, {}, void 0, false, {
        fileName: "src/root.tsx",
        lineNumber: 48,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, {}, void 0, false, {
        fileName: "src/root.tsx",
        lineNumber: 49,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "src/root.tsx",
    lineNumber: 47,
    columnNumber: 5
  }, this);
}
var Document = ({ children, theme }) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("html", {
    lang: "en",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("head", {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Meta, {}, void 0, false, {
            fileName: "src/root.tsx",
            lineNumber: 58,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Links, {}, void 0, false, {
            fileName: "src/root.tsx",
            lineNumber: 59,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("style", {
            id: "emotion",
            suppressHydrationWarning: true
          }, void 0, false, {
            fileName: "src/root.tsx",
            lineNumber: 60,
            columnNumber: 9
          }, this)
        ]
      }, void 0, true, {
        fileName: "src/root.tsx",
        lineNumber: 57,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.CacheProvider, {
        value: cache,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.ThemeProvider, {
          theme,
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("body", {
            "data-theme": theme,
            children: [
              children,
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ScrollRestoration, {}, void 0, false, {
                fileName: "src/root.tsx",
                lineNumber: 66,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Scripts, {}, void 0, false, {
                fileName: "src/root.tsx",
                lineNumber: 67,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LiveReload, {}, void 0, false, {
                fileName: "src/root.tsx",
                lineNumber: 68,
                columnNumber: 13
              }, this)
            ]
          }, void 0, true, {
            fileName: "src/root.tsx",
            lineNumber: 64,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: "src/root.tsx",
          lineNumber: 63,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: "src/root.tsx",
        lineNumber: 62,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "src/root.tsx",
    lineNumber: 56,
    columnNumber: 5
  }, this);
};
export {
  App as default,
  links,
  meta
};
//# sourceMappingURL=/build/root-HPJMJOBC.js.map
