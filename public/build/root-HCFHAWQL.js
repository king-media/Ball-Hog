import {
  styles_context_default,
  theme
} from "/build/_shared/chunk-H3B6TTFI.js";
import {
  Box_default,
  Container_default
} from "/build/_shared/chunk-DOKSGHW7.js";
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
} from "/build/_shared/chunk-5TZN6UPG.js";

// node_modules/react-multi-carousel/lib/styles.css
var styles_default = "/build/_assets/styles-CKMVMKON.css";

// src/css/global-styles.css
var global_styles_default = "/build/_assets/global-styles-24MPYW4Y.css";

// src/root.tsx
var import_react = __toESM(require_react());

// src/Layout/footer/index.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var Footer = (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box_default, {
    className: "placeholder-header",
    padding: "4rem",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
        children: "FOOTER"
      }, void 0, false, {
        fileName: "src/Layout/footer/index.tsx",
        lineNumber: 6,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Container_default, {
        maxWidth: "xl",
        sx: { padding: 0 },
        className: "placeholder-navigation",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
          children: "FOOTER CONTENT"
        }, void 0, false, {
          fileName: "src/Layout/footer/index.tsx",
          lineNumber: 12,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: "src/Layout/footer/index.tsx",
        lineNumber: 7,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "src/Layout/footer/index.tsx",
    lineNumber: 5,
    columnNumber: 5
  }, this)
}, void 0, false, {
  fileName: "src/Layout/footer/index.tsx",
  lineNumber: 4,
  columnNumber: 3
}, this);

// src/Layout/header/index.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var Header = (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
  children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box_default, {
      className: "placeholder-header",
      padding: "4rem",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
        children: "HEADER"
      }, void 0, false, {
        fileName: "src/Layout/header/index.tsx",
        lineNumber: 6,
        columnNumber: 7
      }, this)
    }, void 0, false, {
      fileName: "src/Layout/header/index.tsx",
      lineNumber: 5,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Container_default, {
      maxWidth: "xl",
      sx: { padding: 0 },
      className: "placeholder-navigation",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
        children: "NAVIGATION"
      }, void 0, false, {
        fileName: "src/Layout/header/index.tsx",
        lineNumber: 13,
        columnNumber: 7
      }, this)
    }, void 0, false, {
      fileName: "src/Layout/header/index.tsx",
      lineNumber: 8,
      columnNumber: 5
    }, this)
  ]
}, void 0, true, {
  fileName: "src/Layout/header/index.tsx",
  lineNumber: 4,
  columnNumber: 3
}, this);

// src/Layout/index.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Layout({ children }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Header, {}, void 0, false, {
        fileName: "src/Layout/index.tsx",
        lineNumber: 9,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Container_default, {
        maxWidth: "xl",
        sx: { paddingTop: "2em" },
        children
      }, void 0, false, {
        fileName: "src/Layout/index.tsx",
        lineNumber: 10,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Footer, {}, void 0, false, {
        fileName: "src/Layout/index.tsx",
        lineNumber: 13,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "src/Layout/index.tsx",
    lineNumber: 8,
    columnNumber: 5
  }, this);
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
    },
    {
      rel: "stylesheet",
      href: global_styles_default
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
            lineNumber: 57,
            columnNumber: 9
          }, this),
          title ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("title", {
            children: title
          }, void 0, false, {
            fileName: "src/root.tsx",
            lineNumber: 58,
            columnNumber: 18
          }, this) : null,
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Meta, {}, void 0, false, {
            fileName: "src/root.tsx",
            lineNumber: 59,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Links, {}, void 0, false, {
            fileName: "src/root.tsx",
            lineNumber: 60,
            columnNumber: 9
          }, this),
          styleData == null ? void 0 : styleData.map(({ key, ids, css }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("style", {
            "data-emotion": `${key} ${ids.join(" ")}`,
            dangerouslySetInnerHTML: { __html: css },
            suppressHydrationWarning: true
          }, key, false, {
            fileName: "src/root.tsx",
            lineNumber: 62,
            columnNumber: 11
          }, this))
        ]
      }, void 0, true, {
        fileName: "src/root.tsx",
        lineNumber: 56,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("body", {
        children: [
          children,
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ScrollRestoration, {}, void 0, false, {
            fileName: "src/root.tsx",
            lineNumber: 72,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Scripts, {}, void 0, false, {
            fileName: "src/root.tsx",
            lineNumber: 73,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LiveReload, {}, void 0, false, {
            fileName: "src/root.tsx",
            lineNumber: 74,
            columnNumber: 52
          }, this)
        ]
      }, void 0, true, {
        fileName: "src/root.tsx",
        lineNumber: 70,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "src/root.tsx",
    lineNumber: 55,
    columnNumber: 5
  }, this);
}
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Document, {
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout, {
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, {}, void 0, false, {
        fileName: "src/root.tsx",
        lineNumber: 88,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: "src/root.tsx",
      lineNumber: 87,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: "src/root.tsx",
    lineNumber: 86,
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
          lineNumber: 102,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
          children: error.message
        }, void 0, false, {
          fileName: "src/root.tsx",
          lineNumber: 103,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("hr", {}, void 0, false, {
          fileName: "src/root.tsx",
          lineNumber: 104,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
          children: "We gotta call timeout here something isn't right on our end!!"
        }, void 0, false, {
          fileName: "src/root.tsx",
          lineNumber: 105,
          columnNumber: 9
        }, this)
      ]
    }, void 0, true, {
      fileName: "src/root.tsx",
      lineNumber: 101,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: "src/root.tsx",
    lineNumber: 100,
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
        lineNumber: 119,
        columnNumber: 9
      }, this);
      break;
    case 404:
      message = /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
        children: "Oops! Looks like you tried to visit a page that does not exist."
      }, void 0, false, {
        fileName: "src/root.tsx",
        lineNumber: 127,
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
        lineNumber: 138,
        columnNumber: 7
      }, this),
      message
    ]
  }, void 0, true, {
    fileName: "src/root.tsx",
    lineNumber: 137,
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
//# sourceMappingURL=/build/root-HCFHAWQL.js.map
