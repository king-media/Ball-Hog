import {
  createEmotionCache,
  theme_default
} from "/build/_shared/chunk-KN4WTVEV.js";
import "/build/_shared/chunk-PPW4M5YU.js";
import {
  CssBaseline_default,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  __toESM,
  require_emotion_react_cjs,
  require_jsx_dev_runtime
} from "/build/_shared/chunk-IGDJSQXI.js";

// node_modules/react-multi-carousel/lib/styles.css
var styles_default = "/build/_assets/styles-CKMVMKON.css";

// src/root.tsx
var import_react2 = __toESM(require_emotion_react_cjs());
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("html", {
    lang: "en",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("head", {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Meta, {}, void 0, false, {
            fileName: "src/root.tsx",
            lineNumber: 67,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Links, {}, void 0, false, {
            fileName: "src/root.tsx",
            lineNumber: 68,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("meta", {
            name: "emotion-insertion-point",
            content: ""
          }, void 0, false, {
            fileName: "src/root.tsx",
            lineNumber: 69,
            columnNumber: 9
          }, this)
        ]
      }, void 0, true, {
        fileName: "src/root.tsx",
        lineNumber: 66,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.CacheProvider, {
        value: cache,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.ThemeProvider, {
          theme: theme_default,
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CssBaseline_default, {}, void 0, false, {
              fileName: "src/root.tsx",
              lineNumber: 73,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("body", {
              "data-theme": theme_default,
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, {}, void 0, false, {
                  fileName: "src/root.tsx",
                  lineNumber: 75,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ScrollRestoration, {}, void 0, false, {
                  fileName: "src/root.tsx",
                  lineNumber: 76,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Scripts, {}, void 0, false, {
                  fileName: "src/root.tsx",
                  lineNumber: 77,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LiveReload, {}, void 0, false, {
                  fileName: "src/root.tsx",
                  lineNumber: 78,
                  columnNumber: 13
                }, this)
              ]
            }, void 0, true, {
              fileName: "src/root.tsx",
              lineNumber: 74,
              columnNumber: 11
            }, this)
          ]
        }, void 0, true, {
          fileName: "src/root.tsx",
          lineNumber: 72,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: "src/root.tsx",
        lineNumber: 71,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "src/root.tsx",
    lineNumber: 65,
    columnNumber: 5
  }, this);
}
export {
  App as default,
  links,
  meta
};
//# sourceMappingURL=/build/root-7ZDE5D4L.js.map
