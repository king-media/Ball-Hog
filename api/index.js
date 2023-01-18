var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// src/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_react2 = require("@remix-run/react"), import_server = require("react-dom/server");

// src/css-theme/styles-context.tsx
var import_react = require("react"), styles_context_default = (0, import_react.createContext)(null);

// src/css-theme/emotion-cache.ts
var import_cache = __toESM(require("@emotion/cache"));
function createEmotionCache() {
  return (0, import_cache.default)({ key: "css" });
}

// src/css-theme/theme.ts
var import_styles = require("@mui/material/styles"), import_colors = require("@mui/material/colors"), theme = (0, import_styles.createTheme)({
  palette: {
    primary: {
      main: "#556cd6"
    },
    secondary: {
      main: "#19857b"
    },
    error: {
      main: import_colors.red.A400
    }
  }
});

// src/entry.server.tsx
var import_CssBaseline = __toESM(require("@mui/material/CssBaseline")), import_styles2 = require("@mui/material/styles"), import_react3 = require("@emotion/react"), import_create_instance = __toESM(require("@emotion/server/create-instance")), import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let cache = createEmotionCache(), { extractCriticalToChunks } = (0, import_create_instance.default)(cache), MuiRemixServer = () => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react3.CacheProvider, { value: cache, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_styles2.ThemeProvider, { theme, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_CssBaseline.default, {}, void 0, !1, {
      fileName: "src/entry.server.tsx",
      lineNumber: 25,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.RemixServer, { context: remixContext, url: request.url }, void 0, !1, {
      fileName: "src/entry.server.tsx",
      lineNumber: 26,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "src/entry.server.tsx",
    lineNumber: 23,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "src/entry.server.tsx",
    lineNumber: 22,
    columnNumber: 5
  }, this), html = (0, import_server.renderToString)(
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(styles_context_default.Provider, { value: null, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MuiRemixServer, {}, void 0, !1, {
      fileName: "src/entry.server.tsx",
      lineNumber: 34,
      columnNumber: 7
    }, this) }, void 0, !1, {
      fileName: "src/entry.server.tsx",
      lineNumber: 33,
      columnNumber: 5
    }, this)
  ), emotionChunks = extractCriticalToChunks(html), markup = (0, import_server.renderToString)(
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(styles_context_default.Provider, { value: emotionChunks.styles, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MuiRemixServer, {}, void 0, !1, {
      fileName: "src/entry.server.tsx",
      lineNumber: 44,
      columnNumber: 7
    }, this) }, void 0, !1, {
      fileName: "src/entry.server.tsx",
      lineNumber: 43,
      columnNumber: 5
    }, this)
  );
  return responseHeaders.set("Content-Type", "text/html"), new Response(`<!DOCTYPE html>${markup}`, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// src/root.tsx
var root_exports = {};
__export(root_exports, {
  CatchBoundary: () => CatchBoundary,
  ErrorBoundary: () => ErrorBoundary,
  default: () => App,
  links: () => links,
  meta: () => meta
});

// node_modules/react-multi-carousel/lib/styles.css
var styles_default = "/build/_assets/styles-CKMVMKON.css";

// src/css/global-styles.css
var global_styles_default = "/build/_assets/global-styles-24MPYW4Y.css";

// src/root.tsx
var import_react4 = require("react"), import_react5 = require("@remix-run/react");

// src/Layout/index.tsx
var import_material3 = require("@mui/material");

// src/Layout/footer/index.tsx
var import_material = require("@mui/material"), import_jsx_dev_runtime2 = require("react/jsx-dev-runtime"), Footer = (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_material.Box, { className: "placeholder-header", padding: "4rem", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { children: "FOOTER" }, void 0, !1, {
    fileName: "src/Layout/footer/index.tsx",
    lineNumber: 6,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
    import_material.Container,
    {
      maxWidth: "xl",
      sx: { padding: 0 },
      className: "placeholder-navigation",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { children: "FOOTER CONTENT" }, void 0, !1, {
        fileName: "src/Layout/footer/index.tsx",
        lineNumber: 12,
        columnNumber: 9
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "src/Layout/footer/index.tsx",
      lineNumber: 7,
      columnNumber: 7
    },
    this
  )
] }, void 0, !0, {
  fileName: "src/Layout/footer/index.tsx",
  lineNumber: 5,
  columnNumber: 5
}, this) }, void 0, !1, {
  fileName: "src/Layout/footer/index.tsx",
  lineNumber: 4,
  columnNumber: 3
}, this);

// src/Layout/header/index.tsx
var import_material2 = require("@mui/material"), import_jsx_dev_runtime3 = require("react/jsx-dev-runtime"), Header = (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_jsx_dev_runtime3.Fragment, { children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_material2.Box, { className: "placeholder-header", padding: "4rem", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h1", { children: "HEADER" }, void 0, !1, {
    fileName: "src/Layout/header/index.tsx",
    lineNumber: 6,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "src/Layout/header/index.tsx",
    lineNumber: 5,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
    import_material2.Container,
    {
      maxWidth: "xl",
      sx: { padding: 0 },
      className: "placeholder-navigation",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h1", { children: "NAVIGATION" }, void 0, !1, {
        fileName: "src/Layout/header/index.tsx",
        lineNumber: 13,
        columnNumber: 7
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "src/Layout/header/index.tsx",
      lineNumber: 8,
      columnNumber: 5
    },
    this
  )
] }, void 0, !0, {
  fileName: "src/Layout/header/index.tsx",
  lineNumber: 4,
  columnNumber: 3
}, this);

// src/Layout/index.tsx
var import_jsx_dev_runtime4 = require("react/jsx-dev-runtime");
function Layout({ children }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_jsx_dev_runtime4.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Header, {}, void 0, !1, {
      fileName: "src/Layout/index.tsx",
      lineNumber: 9,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_material3.Container, { maxWidth: "xl", sx: { paddingTop: "2em" }, children }, void 0, !1, {
      fileName: "src/Layout/index.tsx",
      lineNumber: 10,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Footer, {}, void 0, !1, {
      fileName: "src/Layout/index.tsx",
      lineNumber: 13,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "src/Layout/index.tsx",
    lineNumber: 8,
    columnNumber: 5
  }, this);
}

// src/root.tsx
var import_jsx_dev_runtime5 = require("react/jsx-dev-runtime"), meta = () => ({
  charset: "utf-8",
  title: "Ball Hog",
  viewport: "width=device-width,initial-scale=1"
}), links = () => [
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
function Document({
  children,
  title
}) {
  let styleData = (0, import_react4.useContext)(styles_context_default);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("meta", { name: "theme-color", content: theme.palette.primary.main }, void 0, !1, {
        fileName: "src/root.tsx",
        lineNumber: 57,
        columnNumber: 9
      }, this),
      title ? /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("title", { children: title }, void 0, !1, {
        fileName: "src/root.tsx",
        lineNumber: 58,
        columnNumber: 18
      }, this) : null,
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react5.Meta, {}, void 0, !1, {
        fileName: "src/root.tsx",
        lineNumber: 59,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react5.Links, {}, void 0, !1, {
        fileName: "src/root.tsx",
        lineNumber: 60,
        columnNumber: 9
      }, this),
      styleData == null ? void 0 : styleData.map(({ key, ids, css }) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
        "style",
        {
          "data-emotion": `${key} ${ids.join(" ")}`,
          dangerouslySetInnerHTML: { __html: css },
          suppressHydrationWarning: !0
        },
        key,
        !1,
        {
          fileName: "src/root.tsx",
          lineNumber: 62,
          columnNumber: 11
        },
        this
      ))
    ] }, void 0, !0, {
      fileName: "src/root.tsx",
      lineNumber: 56,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("body", { children: [
      children,
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react5.ScrollRestoration, {}, void 0, !1, {
        fileName: "src/root.tsx",
        lineNumber: 72,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react5.Scripts, {}, void 0, !1, {
        fileName: "src/root.tsx",
        lineNumber: 73,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react5.LiveReload, {}, void 0, !1, {
        fileName: "src/root.tsx",
        lineNumber: 74,
        columnNumber: 52
      }, this)
    ] }, void 0, !0, {
      fileName: "src/root.tsx",
      lineNumber: 70,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "src/root.tsx",
    lineNumber: 55,
    columnNumber: 5
  }, this);
}
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Document, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Layout, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react5.Outlet, {}, void 0, !1, {
    fileName: "src/root.tsx",
    lineNumber: 88,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "src/root.tsx",
    lineNumber: 87,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "src/root.tsx",
    lineNumber: 86,
    columnNumber: 5
  }, this);
}
function ErrorBoundary({ error }) {
  return console.error(error), /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Document, { title: "Error!", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h1", { children: "Woaa there baller!" }, void 0, !1, {
      fileName: "src/root.tsx",
      lineNumber: 102,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: error.message }, void 0, !1, {
      fileName: "src/root.tsx",
      lineNumber: 103,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("hr", {}, void 0, !1, {
      fileName: "src/root.tsx",
      lineNumber: 104,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "We gotta call timeout here something isn't right on our end!!" }, void 0, !1, {
      fileName: "src/root.tsx",
      lineNumber: 105,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "src/root.tsx",
    lineNumber: 101,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "src/root.tsx",
    lineNumber: 100,
    columnNumber: 5
  }, this);
}
function CatchBoundary() {
  let caught = (0, import_react5.useCatch)(), message;
  switch (caught.status) {
    case 401:
      message = /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "Oops! Looks like you tried to visit a page that you do not have access to." }, void 0, !1, {
        fileName: "src/root.tsx",
        lineNumber: 119,
        columnNumber: 9
      }, this);
      break;
    case 404:
      message = /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "Oops! Looks like you tried to visit a page that does not exist." }, void 0, !1, {
        fileName: "src/root.tsx",
        lineNumber: 127,
        columnNumber: 9
      }, this);
      break;
    default:
      throw new Error(caught.data || caught.statusText);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Document, { title: `${caught.status} ${caught.statusText}`, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h1", { children: [
      caught.status,
      ": ",
      caught.statusText
    ] }, void 0, !0, {
      fileName: "src/root.tsx",
      lineNumber: 138,
      columnNumber: 7
    }, this),
    message
  ] }, void 0, !0, {
    fileName: "src/root.tsx",
    lineNumber: 137,
    columnNumber: 5
  }, this);
}

// src/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Home,
  loader: () => loader
});

// src/pages/Home/index.tsx
var import_react9 = require("@remix-run/react"), import_react10 = require("react");

// src/pages/Home/components/games-card-carousel.tsx
var import_material6 = require("@mui/material");

// src/components/card-carousel/card-carousel.tsx
var import_react6 = require("react");

// src/components/card-carousel/primitive.tsx
var import_material4 = require("@mui/material"), import_styles4 = require("@mui/material/styles"), ArrowButtonPrimitive = (0, import_styles4.styled)(import_material4.Button)(
  ({ direction }) => `
    position: absolute;
    bottom: 0;
    ${[direction]}: -1px;
    padding: 6px 2px;
    border-radius: 999px;
`
);

// src/components/card-carousel/card-carousel.tsx
var import_styles5 = require("@mui/material/styles"), import_material5 = require("@mui/material"), import_icons_material = require("@mui/icons-material"), import_react_multi_carousel = __toESM(require("react-multi-carousel")), import_jsx_dev_runtime6 = require("react/jsx-dev-runtime"), MaterialArrowButton = (0, import_react6.forwardRef)(
  ({ onClick, direction, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
    ArrowButtonPrimitive,
    {
      ref,
      direction,
      size: "small",
      variant: "text",
      onClick: () => onClick(),
      children: direction === "right" ? /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_icons_material.KeyboardArrowRight, { fontSize: "large", color: "primary" }, void 0, !1, {
        fileName: "src/components/card-carousel/card-carousel.tsx",
        lineNumber: 36,
        columnNumber: 9
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_icons_material.KeyboardArrowLeft, { fontSize: "large", color: "primary" }, void 0, !1, {
        fileName: "src/components/card-carousel/card-carousel.tsx",
        lineNumber: 38,
        columnNumber: 9
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "src/components/card-carousel/card-carousel.tsx",
      lineNumber: 28,
      columnNumber: 5
    },
    this
  )
);
function CardCarousel({
  autoplay = !1,
  children,
  totalItems,
  show,
  title,
  titlePosition = "left",
  ...props
}) {
  let theme2 = (0, import_styles5.useTheme)(), calculateProgress = (step) => {
    let percentage = 0;
    return step === 0 ? percentage = 100 * show / totalItems : percentage = 100 * (step + show) / totalItems, percentage > 100 ? 100 : percentage;
  }, [progress, setLinearProgress] = (0, import_react6.useState)(calculateProgress(0)), responsive = {
    desktop: {
      breakpoint: { max: 3e3, min: 1024 },
      items: show,
      slidesToSlide: show
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: show - 2,
      slidesToSlide: show - 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_material5.Box, { paddingBottom: "2rem", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
      import_material5.Typography,
      {
        align: titlePosition,
        variant: "h2",
        sx: { padding: "1rem", letterSpacing: "1.5px" },
        children: title
      },
      void 0,
      !1,
      {
        fileName: "src/components/card-carousel/card-carousel.tsx",
        lineNumber: 90,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
      import_react_multi_carousel.default,
      {
        swipeable: !0,
        ssr: !0,
        keyBoardControl: !0,
        afterChange: (_, { currentSlide }) => {
          setLinearProgress(calculateProgress(currentSlide));
        },
        autoPlay: autoplay,
        autoPlaySpeed: 1e3,
        containerClass: "carousel-container",
        customRightArrow: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(MaterialArrowButton, { direction: "right" }, void 0, !1, {
          fileName: "src/components/card-carousel/card-carousel.tsx",
          lineNumber: 107,
          columnNumber: 27
        }, this),
        customLeftArrow: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(MaterialArrowButton, { direction: "left" }, void 0, !1, {
          fileName: "src/components/card-carousel/card-carousel.tsx",
          lineNumber: 108,
          columnNumber: 26
        }, this),
        removeArrowOnDeviceType: ["tablet", "mobile"],
        responsive,
        rtl: theme2.direction === "rtl",
        itemClass: "carousel-item",
        ...props,
        children
      },
      void 0,
      !1,
      {
        fileName: "src/components/card-carousel/card-carousel.tsx",
        lineNumber: 97,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_material5.Box, { maxWidth: 400, margin: "1.5em auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_material5.LinearProgress, { variant: "determinate", value: progress }, void 0, !1, {
      fileName: "src/components/card-carousel/card-carousel.tsx",
      lineNumber: 118,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "src/components/card-carousel/card-carousel.tsx",
      lineNumber: 117,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "src/components/card-carousel/card-carousel.tsx",
    lineNumber: 89,
    columnNumber: 5
  }, this);
}

// src/pages/Home/components/games-card-carousel.tsx
var import_jsx_dev_runtime7 = require("react/jsx-dev-runtime"), GamesCardCarousel = ({
  games,
  ...props
}) => games.length === 0 ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(CardCarousel, { totalItems: games.length, show: 4, ...props, children: games.map((game) => /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { style: { paddingRight: "1em" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_material6.Card, { children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
    import_material6.CardContent,
    {
      sx: {
        display: "flex",
        flexDirection: "column",
        minWidth: 300,
        height: 400
      },
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
          import_material6.Box,
          {
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
                import_material6.Typography,
                {
                  sx: { fontSize: 14 },
                  color: "text.secondary",
                  gutterBottom: !0,
                  children: game.date
                },
                void 0,
                !1,
                {
                  fileName: "src/pages/Home/components/games-card-carousel.tsx",
                  lineNumber: 47,
                  columnNumber: 17
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
                import_material6.Typography,
                {
                  variant: "subtitle1",
                  color: "text.primary",
                  gutterBottom: !0,
                  children: game.status
                },
                void 0,
                !1,
                {
                  fileName: "src/pages/Home/components/games-card-carousel.tsx",
                  lineNumber: 54,
                  columnNumber: 17
                },
                this
              )
            ]
          },
          void 0,
          !0,
          {
            fileName: "src/pages/Home/components/games-card-carousel.tsx",
            lineNumber: 42,
            columnNumber: 15
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
          import_material6.Box,
          {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            rowGap: "1em",
            padding: "1em 1.5em",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_material6.Box, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
                  import_material6.Typography,
                  {
                    variant: "subtitle2",
                    color: "text.secondary",
                    gutterBottom: !0,
                    children: "Home"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "src/pages/Home/components/games-card-carousel.tsx",
                    lineNumber: 70,
                    columnNumber: 19
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_material6.Typography, { variant: "h6", color: "text.primary", gutterBottom: !0, children: game.home_team.fullName }, void 0, !1, {
                  fileName: "src/pages/Home/components/games-card-carousel.tsx",
                  lineNumber: 77,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_material6.Typography, { variant: "h3", gutterBottom: !0, children: game.home_team.score }, void 0, !1, {
                  fileName: "src/pages/Home/components/games-card-carousel.tsx",
                  lineNumber: 80,
                  columnNumber: 19
                }, this)
              ] }, void 0, !0, {
                fileName: "src/pages/Home/components/games-card-carousel.tsx",
                lineNumber: 69,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_material6.Box, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
                  import_material6.Typography,
                  {
                    variant: "subtitle2",
                    color: "text.secondary",
                    gutterBottom: !0,
                    children: "Away"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "src/pages/Home/components/games-card-carousel.tsx",
                    lineNumber: 85,
                    columnNumber: 19
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_material6.Typography, { variant: "h6", color: "text.primary", gutterBottom: !0, children: game.visitor_team.fullName }, void 0, !1, {
                  fileName: "src/pages/Home/components/games-card-carousel.tsx",
                  lineNumber: 92,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_material6.Typography, { variant: "h3", gutterBottom: !0, children: game.visitor_team.score }, void 0, !1, {
                  fileName: "src/pages/Home/components/games-card-carousel.tsx",
                  lineNumber: 95,
                  columnNumber: 19
                }, this)
              ] }, void 0, !0, {
                fileName: "src/pages/Home/components/games-card-carousel.tsx",
                lineNumber: 84,
                columnNumber: 17
              }, this)
            ]
          },
          void 0,
          !0,
          {
            fileName: "src/pages/Home/components/games-card-carousel.tsx",
            lineNumber: 62,
            columnNumber: 15
          },
          this
        )
      ]
    },
    void 0,
    !0,
    {
      fileName: "src/pages/Home/components/games-card-carousel.tsx",
      lineNumber: 34,
      columnNumber: 13
    },
    this
  ),
  /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_material6.CardActions, { sx: { justifyContent: "center" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_material6.Button, { size: "small", children: "View Game" }, void 0, !1, {
    fileName: "src/pages/Home/components/games-card-carousel.tsx",
    lineNumber: 102,
    columnNumber: 15
  }, this) }, void 0, !1, {
    fileName: "src/pages/Home/components/games-card-carousel.tsx",
    lineNumber: 101,
    columnNumber: 13
  }, this)
] }, void 0, !0, {
  fileName: "src/pages/Home/components/games-card-carousel.tsx",
  lineNumber: 33,
  columnNumber: 11
}, this) }, game.id, !1, {
  fileName: "src/pages/Home/components/games-card-carousel.tsx",
  lineNumber: 32,
  columnNumber: 9
}, this)) }, void 0, !1, {
  fileName: "src/pages/Home/components/games-card-carousel.tsx",
  lineNumber: 30,
  columnNumber: 5
}, this);

// src/pages/Home/components/scheduled-games-title.tsx
var import_react7 = require("react"), import_react8 = require("@remix-run/react"), import_material7 = require("@mui/material"), import_LocalizationProvider = require("@mui/x-date-pickers/LocalizationProvider"), import_AdapterDayjs = require("@mui/x-date-pickers/AdapterDayjs"), import_DatePicker = require("@mui/x-date-pickers/DatePicker"), import_dayjs = __toESM(require("dayjs")), import_jsx_dev_runtime8 = require("react/jsx-dev-runtime"), dateFormat = "YYYY-MM-DD", ScheduledGamesTitle = ({ season }) => {
  let [search, setSearch] = (0, import_react8.useSearchParams)(), [dates, setDates] = (0, import_react7.useState)({
    startDate: search.get("startDate") || (0, import_dayjs.default)().format(dateFormat),
    endDate: search.get("endDate") || (0, import_dayjs.default)().add(1, "week").format(dateFormat)
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_LocalizationProvider.LocalizationProvider, { dateAdapter: import_AdapterDayjs.AdapterDayjs, children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_material7.Box, { display: "flex", alignItems: "center", justifyContent: "space-between", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
      import_material7.Typography,
      {
        align: "left",
        variant: "h2",
        sx: { padding: "1rem", letterSpacing: "1.5px" },
        children: "Scheduled Games"
      },
      void 0,
      !1,
      {
        fileName: "src/pages/Home/components/scheduled-games-title.tsx",
        lineNumber: 27,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_material7.Box, { display: "flex", columnGap: "1rem", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
        import_DatePicker.DatePicker,
        {
          views: ["day"],
          label: "Start Date",
          value: dates.startDate,
          maxDate: dates.endDate,
          minDate: `${season}-10-01`,
          onChange: (value) => {
            let selectedDate = (0, import_dayjs.default)(String(value)).format(dateFormat);
            setDates({ ...dates, startDate: selectedDate }), search.set("startDate", selectedDate), setSearch(search, { replace: !0 });
          },
          renderInput: (params) => /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_material7.TextField, { ...params, helperText: null }, void 0, !1, {
            fileName: "src/pages/Home/components/scheduled-games-title.tsx",
            lineNumber: 50,
            columnNumber: 15
          }, this)
        },
        void 0,
        !1,
        {
          fileName: "src/pages/Home/components/scheduled-games-title.tsx",
          lineNumber: 35,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
        import_DatePicker.DatePicker,
        {
          views: ["day"],
          label: "End Date",
          value: dates.endDate,
          maxDate: `${season + 1}-06-30`,
          minDate: dates.startDate,
          onChange: (value) => {
            let selectedDate = (0, import_dayjs.default)(String(value)).format(dateFormat);
            setDates({ ...dates, endDate: selectedDate }), search.set("endDate", selectedDate), setSearch(search, { replace: !0 });
          },
          renderInput: (params) => /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_material7.TextField, { ...params, helperText: null }, void 0, !1, {
            fileName: "src/pages/Home/components/scheduled-games-title.tsx",
            lineNumber: 68,
            columnNumber: 15
          }, this)
        },
        void 0,
        !1,
        {
          fileName: "src/pages/Home/components/scheduled-games-title.tsx",
          lineNumber: 53,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "src/pages/Home/components/scheduled-games-title.tsx",
      lineNumber: 34,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "src/pages/Home/components/scheduled-games-title.tsx",
    lineNumber: 26,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "src/pages/Home/components/scheduled-games-title.tsx",
    lineNumber: 25,
    columnNumber: 5
  }, this);
};

// src/pages/Home/index.tsx
var import_material8 = require("@mui/material"), import_dayjs2 = __toESM(require("dayjs")), import_jsx_dev_runtime9 = require("react/jsx-dev-runtime");
function Home() {
  var _a, _b;
  let { liveGames, scheduledGames, metaData } = (0, import_react9.useLoaderData)();
  (0, import_react10.useEffect)(() => {
    console.log(liveGames, scheduledGames), console.log("meta>>>>>", metaData);
  });
  let season = ((_a = metaData == null ? void 0 : metaData.scheduled) == null ? void 0 : _a.season) || ((_b = metaData == null ? void 0 : metaData.live) == null ? void 0 : _b.season);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_material8.Box, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(GamesCardCarousel, { games: liveGames, title: "Today's Games" }, void 0, !1, {
      fileName: "src/pages/Home/index.tsx",
      lineNumber: 24,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
      GamesCardCarousel,
      {
        games: scheduledGames,
        title: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(ScheduledGamesTitle, { season: season || (0, import_dayjs2.default)().year().toString() }, void 0, !1, {
          fileName: "src/pages/Home/index.tsx",
          lineNumber: 28,
          columnNumber: 11
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "src/pages/Home/index.tsx",
        lineNumber: 25,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "src/pages/Home/index.tsx",
    lineNumber: 23,
    columnNumber: 5
  }, this);
}

// src/pages/Home/loader.ts
var import_server_runtime = require("@remix-run/server-runtime");

// utilities/api/service.ts
var import_node = require("@remix-run/node"), import_dayjs3 = __toESM(require("dayjs")), import_utc = __toESM(require("dayjs/plugin/utc"));

// utilities/api/types.ts
var GameStatus = /* @__PURE__ */ ((GameStatus2) => (GameStatus2["1st Qtr"] = "1st Qtr", GameStatus2["2nd Qtr"] = "2nd Qtr", GameStatus2.Halftime = "Halftime", GameStatus2["3rd Qtr"] = "3rd Qtr", GameStatus2["4th Qtr"] = "4th Qtr", GameStatus2.Final = "Final", GameStatus2))(GameStatus || {});

// utilities/api/service.ts
import_dayjs3.default.extend(import_utc.default);
var currentDate = (0, import_dayjs3.default)(), year = currentDate.year(), defaultStartDate = currentDate.format("YYYY-MM-DD"), defaultEndDate = currentDate.add(7, "day").format("YYYY-MM-DD"), isGameLive = (game) => Object.values(GameStatus).includes(game.status), formatGameTime = (date, timeLocal) => {
  let time = timeLocal.split(" ").shift(), isoDate = new Date(date).toISOString().split("T").shift();
  return import_dayjs3.default.utc(`${isoDate} ${time}`).format();
}, mapGamesData = (gamesData) => gamesData.map(
  ({ home_team, visitor_team, ...game }) => ({
    home_team: {
      id: home_team.id,
      fullName: home_team.full_name,
      score: game.home_team_score,
      stats: null
    },
    visitor_team: {
      id: visitor_team.id,
      fullName: visitor_team.full_name,
      score: game.visitor_team_score,
      stats: null
    },
    id: game.id,
    status: game.status,
    date: import_dayjs3.default.utc(game.date).format("ddd MMM DD YYYY")
  })
).sort((gameOne, gameTwo) => {
  let gameOneLive = isGameLive(gameOne), gameTwoLive = isGameLive(gameTwo), gameOneTime = formatGameTime(
    gameOne.date,
    gameOneLive ? "" : gameOne.status
  ), gameTwoTime = formatGameTime(
    gameTwo.date,
    gameTwoLive ? "" : gameTwo.status
  );
  return gameOneTime > gameTwoTime ? 1 : gameOneTime < gameTwoTime ? -1 : 0;
}), getGames = async (season = year, startDate = defaultStartDate, endDate = defaultEndDate) => {
  try {
    let gamesResponse = await (0, import_node.fetch)(
      `https://www.balldontlie.io/api/v1/games?seasons[]=${season}&start_date=${startDate}&end_date=${endDate}&per_page=100`
    ), gamesResponseData = await gamesResponse.json();
    return gamesResponse.status === 200 && gamesResponseData.data.length === 0 ? getGames(season - 1, startDate, endDate) : {
      data: mapGamesData(gamesResponseData.data),
      meta: { ...gamesResponseData.meta, season }
    };
  } catch (err) {
    console.error(err);
  }
};

// src/pages/Home/loader.ts
var loader = async ({ request }) => {
  let url = new URL(request.url), startDate = url.searchParams.get("startDate") || void 0, endDate = url.searchParams.get("endDate") || void 0, liveGamesRequest = await getGames(), liveGames = liveGamesRequest == null ? void 0 : liveGamesRequest.data.filter(
    (game) => game.date === new Date().toDateString()
  ), scheduledGamesRequest, scheduledGames = liveGamesRequest == null ? void 0 : liveGamesRequest.data;
  return (startDate || endDate) && liveGamesRequest && (scheduledGamesRequest = await getGames(
    Number.parseInt(liveGamesRequest == null ? void 0 : liveGamesRequest.meta.season),
    startDate,
    endDate
  ), scheduledGames = scheduledGamesRequest == null ? void 0 : scheduledGamesRequest.data), (0, import_server_runtime.json)({
    liveGames: liveGames || [],
    scheduledGames: scheduledGames || [],
    metaData: {
      live: liveGamesRequest == null ? void 0 : liveGamesRequest.meta,
      scheduled: scheduledGamesRequest == null ? void 0 : scheduledGamesRequest.meta
    }
  });
};

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "701efc0b", entry: { module: "/build/entry.client-6PH5XJOR.js", imports: ["/build/_shared/chunk-H5WSU7VT.js", "/build/_shared/chunk-ZXJVO4WW.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-TC7PMPEZ.js", imports: ["/build/_shared/chunk-6BIRBZ7J.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !0, hasErrorBoundary: !0 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-W26QWOB7.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, url: "/build/manifest-701EFC0B.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", future = { v2_meta: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
//# sourceMappingURL=index.js.map
