import {
  styles_context_default,
  theme
} from "/build/_shared/chunk-HIBRBV44.js";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  __toESM,
  require_jsx_dev_runtime,
  require_react,
  useCatch
} from "/build/_shared/chunk-GA27UGXE.js";

// node_modules/react-multi-carousel/lib/styles.css
var styles_default = "/build/_assets/styles-CKMVMKON.css";

// src/root.tsx
var import_react = __toESM(require_react());
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
function Document({
  children,
  title
}) {
  const styleData = (0, import_react.useContext)(styles_context_default);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("html", {
    lang: "en",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("head", {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("meta", {
            name: "theme-color",
            content: theme.palette.primary.main
          }, void 0, false, {
            fileName: "src/root.tsx",
            lineNumber: 52,
            columnNumber: 9
          }, this),
          title ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("title", {
            children: title
          }, void 0, false, {
            fileName: "src/root.tsx",
            lineNumber: 53,
            columnNumber: 18
          }, this) : null,
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Meta, {}, void 0, false, {
            fileName: "src/root.tsx",
            lineNumber: 54,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Links, {}, void 0, false, {
            fileName: "src/root.tsx",
            lineNumber: 55,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("link", {
            rel: "stylesheet",
            href: "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          }, void 0, false, {
            fileName: "src/root.tsx",
            lineNumber: 56,
            columnNumber: 9
          }, this),
          styleData == null ? void 0 : styleData.map(({ key, ids, css }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("style", {
            "data-emotion": `${key} ${ids.join(" ")}`,
            dangerouslySetInnerHTML: { __html: css }
          }, key, false, {
            fileName: "src/root.tsx",
            lineNumber: 61,
            columnNumber: 11
          }, this))
        ]
      }, void 0, true, {
        fileName: "src/root.tsx",
        lineNumber: 51,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("body", {
        children: [
          children,
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ScrollRestoration, {}, void 0, false, {
            fileName: "src/root.tsx",
            lineNumber: 71,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Scripts, {}, void 0, false, {
            fileName: "src/root.tsx",
            lineNumber: 72,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LiveReload, {}, void 0, false, {
            fileName: "src/root.tsx",
            lineNumber: 73,
            columnNumber: 52
          }, this)
        ]
      }, void 0, true, {
        fileName: "src/root.tsx",
        lineNumber: 69,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "src/root.tsx",
    lineNumber: 50,
    columnNumber: 5
  }, this);
}
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Document, {
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, {}, void 0, false, {
      fileName: "src/root.tsx",
      lineNumber: 86,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: "src/root.tsx",
    lineNumber: 85,
    columnNumber: 5
  }, this);
}
function ErrorBoundary({ error }) {
  console.error(error);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Document, {
    title: "Error!",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
          children: "Woaa there baller!"
        }, void 0, false, {
          fileName: "src/root.tsx",
          lineNumber: 99,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
          children: error.message
        }, void 0, false, {
          fileName: "src/root.tsx",
          lineNumber: 100,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("hr", {}, void 0, false, {
          fileName: "src/root.tsx",
          lineNumber: 101,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
          children: "We gotta call timeout here something isn't right on our end!!"
        }, void 0, false, {
          fileName: "src/root.tsx",
          lineNumber: 102,
          columnNumber: 9
        }, this)
      ]
    }, void 0, true, {
      fileName: "src/root.tsx",
      lineNumber: 98,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: "src/root.tsx",
    lineNumber: 97,
    columnNumber: 5
  }, this);
}
function CatchBoundary() {
  const caught = useCatch();
  let message;
  switch (caught.status) {
    case 401:
      message = /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
        children: "Oops! Looks like you tried to visit a page that you do not have access to."
      }, void 0, false, {
        fileName: "src/root.tsx",
        lineNumber: 116,
        columnNumber: 9
      }, this);
      break;
    case 404:
      message = /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
        children: "Oops! Looks like you tried to visit a page that does not exist."
      }, void 0, false, {
        fileName: "src/root.tsx",
        lineNumber: 124,
        columnNumber: 9
      }, this);
      break;
    default:
      throw new Error(caught.data || caught.statusText);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Document, {
    title: `${caught.status} ${caught.statusText}`,
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
        children: [
          caught.status,
          ": ",
          caught.statusText
        ]
      }, void 0, true, {
        fileName: "src/root.tsx",
        lineNumber: 135,
        columnNumber: 7
      }, this),
      message
    ]
  }, void 0, true, {
    fileName: "src/root.tsx",
    lineNumber: 134,
    columnNumber: 5
  }, this);
}
export {
  CatchBoundary,
  ErrorBoundary,
  App as default,
  links,
  meta
};
//# sourceMappingURL=/build/root-77XPTEUG.js.map
