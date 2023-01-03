import {
  __toESM,
  require_jsx_dev_runtime,
  require_react,
  useLoaderData
} from "/build/_shared/chunk-P5LRQFDY.js";

// app/pages/Home/index.tsx
var import_react2 = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Home() {
  const { liveGames, scheduledGames, metaData } = useLoaderData();
  (0, import_react2.useEffect)(() => {
    console.log(liveGames, scheduledGames);
    console.log("meta>>>>>", metaData);
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    style: { fontFamily: "system-ui, sans-serif", lineHeight: "1.4" },
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
        children: "Welcome to Remix"
      }, void 0, false, {
        fileName: "app/pages/Home/index.tsx",
        lineNumber: 16,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
              target: "_blank",
              href: "https://remix.run/tutorials/blog",
              rel: "noreferrer",
              children: "15m Quickstart Blog Tutorial"
            }, void 0, false, {
              fileName: "app/pages/Home/index.tsx",
              lineNumber: 19,
              columnNumber: 11
            }, this)
          }, void 0, false, {
            fileName: "app/pages/Home/index.tsx",
            lineNumber: 18,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
              target: "_blank",
              href: "https://remix.run/tutorials/jokes",
              rel: "noreferrer",
              children: "Deep Dive Jokes App Tutorial"
            }, void 0, false, {
              fileName: "app/pages/Home/index.tsx",
              lineNumber: 28,
              columnNumber: 11
            }, this)
          }, void 0, false, {
            fileName: "app/pages/Home/index.tsx",
            lineNumber: 27,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
              target: "_blank",
              href: "https://remix.run/docs",
              rel: "noreferrer",
              children: "Remix Docs"
            }, void 0, false, {
              fileName: "app/pages/Home/index.tsx",
              lineNumber: 37,
              columnNumber: 11
            }, this)
          }, void 0, false, {
            fileName: "app/pages/Home/index.tsx",
            lineNumber: 36,
            columnNumber: 9
          }, this)
        ]
      }, void 0, true, {
        fileName: "app/pages/Home/index.tsx",
        lineNumber: 17,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/pages/Home/index.tsx",
    lineNumber: 15,
    columnNumber: 5
  }, this);
}
export {
  Home as default
};
//# sourceMappingURL=/build/routes/index-YHSA5HUM.js.map
