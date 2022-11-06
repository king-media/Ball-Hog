import {
  createEmotionCache,
  theme
} from "/build/_shared/chunk-SQ3MN6Q3.js";
import {
  CssBaseline_default,
  RemixBrowser,
  __commonJS,
  __toESM,
  require_emotion_react_cjs,
  require_jsx_dev_runtime,
  require_react,
  require_react_dom
} from "/build/_shared/chunk-X76OAK42.js";

// node_modules/react-dom/client.js
var require_client = __commonJS({
  "node_modules/react-dom/client.js"(exports) {
    "use strict";
    var m = require_react_dom();
    if (false) {
      exports.createRoot = m.createRoot;
      exports.hydrateRoot = m.hydrateRoot;
    } else {
      i = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
      exports.createRoot = function(c, o) {
        i.usingClientEntryPoint = true;
        try {
          return m.createRoot(c, o);
        } finally {
          i.usingClientEntryPoint = false;
        }
      };
      exports.hydrateRoot = function(c, h, o) {
        i.usingClientEntryPoint = true;
        try {
          return m.hydrateRoot(c, h, o);
        } finally {
          i.usingClientEntryPoint = false;
        }
      };
    }
    var i;
  }
});

// src/entry.client.tsx
var import_react2 = __toESM(require_react());
var import_client = __toESM(require_client());
var import_react3 = __toESM(require_emotion_react_cjs());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var emotionCache = createEmotionCache();
function hydrate() {
  (0, import_react2.startTransition)(() => {
    (0, import_client.hydrateRoot)(
      document,
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.StrictMode, {
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react3.CacheProvider, {
          value: emotionCache,
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react3.ThemeProvider, {
            theme,
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CssBaseline_default, {}, void 0, false, {
                fileName: "src/entry.client.tsx",
                lineNumber: 20,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RemixBrowser, {}, void 0, false, {
                fileName: "src/entry.client.tsx",
                lineNumber: 21,
                columnNumber: 13
              }, this)
            ]
          }, void 0, true, {
            fileName: "src/entry.client.tsx",
            lineNumber: 18,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: "src/entry.client.tsx",
          lineNumber: 17,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: "src/entry.client.tsx",
        lineNumber: 16,
        columnNumber: 7
      }, this)
    );
  });
}
if (window.requestIdleCallback) {
  window.requestIdleCallback(hydrate);
} else {
  window.setTimeout(hydrate, 1);
}
//# sourceMappingURL=/build/entry.client-UHCIH35A.js.map
