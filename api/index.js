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
  let cache = createEmotionCache(), { extractCriticalToChunks } = (0, import_create_instance.default)(cache), MuiRemixServer = () => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react3.CacheProvider, {
    value: cache,
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_styles2.ThemeProvider, {
      theme,
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_CssBaseline.default, {}, void 0, !1, {
          fileName: "src/entry.server.tsx",
          lineNumber: 25,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.RemixServer, {
          context: remixContext,
          url: request.url
        }, void 0, !1, {
          fileName: "src/entry.server.tsx",
          lineNumber: 26,
          columnNumber: 9
        }, this)
      ]
    }, void 0, !0, {
      fileName: "src/entry.server.tsx",
      lineNumber: 23,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "src/entry.server.tsx",
    lineNumber: 22,
    columnNumber: 5
  }, this), html = (0, import_server.renderToString)(
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(styles_context_default.Provider, {
      value: null,
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MuiRemixServer, {}, void 0, !1, {
        fileName: "src/entry.server.tsx",
        lineNumber: 34,
        columnNumber: 7
      }, this)
    }, void 0, !1, {
      fileName: "src/entry.server.tsx",
      lineNumber: 33,
      columnNumber: 5
    }, this)
  ), emotionChunks = extractCriticalToChunks(html), markup = (0, import_server.renderToString)(
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(styles_context_default.Provider, {
      value: emotionChunks.styles,
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MuiRemixServer, {}, void 0, !1, {
        fileName: "src/entry.server.tsx",
        lineNumber: 44,
        columnNumber: 7
      }, this)
    }, void 0, !1, {
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

// src/root.tsx
var import_react4 = require("react"), import_react5 = require("@remix-run/react");

// src/Layout/index.tsx
var import_material = require("@mui/material"), import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function Layout({ children }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_material.Container, {
    maxWidth: "xl",
    sx: { paddingTop: "2em" },
    children
  }, void 0, !1, {
    fileName: "src/Layout/index.tsx",
    lineNumber: 6,
    columnNumber: 5
  }, this);
}

// src/root.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), meta = () => ({
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
  }
];
function Document({
  children,
  title
}) {
  let styleData = (0, import_react4.useContext)(styles_context_default);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("html", {
    lang: "en",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("head", {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("meta", {
            name: "theme-color",
            content: theme.palette.primary.main
          }, void 0, !1, {
            fileName: "src/root.tsx",
            lineNumber: 52,
            columnNumber: 9
          }, this),
          title ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("title", {
            children: title
          }, void 0, !1, {
            fileName: "src/root.tsx",
            lineNumber: 53,
            columnNumber: 18
          }, this) : null,
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react5.Meta, {}, void 0, !1, {
            fileName: "src/root.tsx",
            lineNumber: 54,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react5.Links, {}, void 0, !1, {
            fileName: "src/root.tsx",
            lineNumber: 55,
            columnNumber: 9
          }, this),
          styleData == null ? void 0 : styleData.map(({ key, ids, css }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("style", {
            "data-emotion": `${key} ${ids.join(" ")}`,
            dangerouslySetInnerHTML: { __html: css },
            suppressHydrationWarning: !0
          }, key, !1, {
            fileName: "src/root.tsx",
            lineNumber: 57,
            columnNumber: 11
          }, this))
        ]
      }, void 0, !0, {
        fileName: "src/root.tsx",
        lineNumber: 51,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("body", {
        children: [
          children,
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react5.ScrollRestoration, {}, void 0, !1, {
            fileName: "src/root.tsx",
            lineNumber: 67,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react5.Scripts, {}, void 0, !1, {
            fileName: "src/root.tsx",
            lineNumber: 68,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react5.LiveReload, {}, void 0, !1, {
            fileName: "src/root.tsx",
            lineNumber: 69,
            columnNumber: 52
          }, this)
        ]
      }, void 0, !0, {
        fileName: "src/root.tsx",
        lineNumber: 65,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "src/root.tsx",
    lineNumber: 50,
    columnNumber: 5
  }, this);
}
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Document, {
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout, {
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react5.Outlet, {}, void 0, !1, {
        fileName: "src/root.tsx",
        lineNumber: 83,
        columnNumber: 9
      }, this)
    }, void 0, !1, {
      fileName: "src/root.tsx",
      lineNumber: 82,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "src/root.tsx",
    lineNumber: 81,
    columnNumber: 5
  }, this);
}
function ErrorBoundary({ error }) {
  return console.error(error), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Document, {
    title: "Error!",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
          children: "Woaa there baller!"
        }, void 0, !1, {
          fileName: "src/root.tsx",
          lineNumber: 97,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
          children: error.message
        }, void 0, !1, {
          fileName: "src/root.tsx",
          lineNumber: 98,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("hr", {}, void 0, !1, {
          fileName: "src/root.tsx",
          lineNumber: 99,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
          children: "We gotta call timeout here something isn't right on our end!!"
        }, void 0, !1, {
          fileName: "src/root.tsx",
          lineNumber: 100,
          columnNumber: 9
        }, this)
      ]
    }, void 0, !0, {
      fileName: "src/root.tsx",
      lineNumber: 96,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "src/root.tsx",
    lineNumber: 95,
    columnNumber: 5
  }, this);
}
function CatchBoundary() {
  let caught = (0, import_react5.useCatch)(), message;
  switch (caught.status) {
    case 401:
      message = /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
        children: "Oops! Looks like you tried to visit a page that you do not have access to."
      }, void 0, !1, {
        fileName: "src/root.tsx",
        lineNumber: 114,
        columnNumber: 9
      }, this);
      break;
    case 404:
      message = /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
        children: "Oops! Looks like you tried to visit a page that does not exist."
      }, void 0, !1, {
        fileName: "src/root.tsx",
        lineNumber: 122,
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
      }, void 0, !0, {
        fileName: "src/root.tsx",
        lineNumber: 133,
        columnNumber: 7
      }, this),
      message
    ]
  }, void 0, !0, {
    fileName: "src/root.tsx",
    lineNumber: 132,
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
var import_react7 = require("@remix-run/react"), import_react8 = require("react"), import_material4 = require("@mui/material");

// src/components/card-carousel/card-carousel.tsx
var import_react6 = require("react");

// src/components/card-carousel/primitive.tsx
var import_material2 = require("@mui/material"), import_styles4 = require("@mui/material/styles"), ArrowButtonPrimitive = (0, import_styles4.styled)(import_material2.Button)(
  ({ direction }) => `
    position: absolute;
    bottom: 0;
    ${[direction]}: -1px;
    padding: 6px 2px;
    border-radius: 999px;
`
);

// src/components/card-carousel/card-carousel.tsx
var import_styles5 = require("@mui/material/styles"), import_material3 = require("@mui/material"), import_icons_material = require("@mui/icons-material"), import_react_multi_carousel = __toESM(require("react-multi-carousel")), import_jsx_dev_runtime = require("@emotion/react/jsx-dev-runtime"), MaterialArrowButton = (0, import_react6.forwardRef)(
  ({ onClick, direction, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowButtonPrimitive, {
    ref,
    direction,
    size: "small",
    variant: "text",
    onClick: () => onClick(),
    children: direction === "right" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_icons_material.KeyboardArrowRight, {
      fontSize: "large",
      color: "primary"
    }, void 0, !1, {
      fileName: "src/components/card-carousel/card-carousel.tsx",
      lineNumber: 37,
      columnNumber: 9
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_icons_material.KeyboardArrowLeft, {
      fontSize: "large",
      color: "primary"
    }, void 0, !1, {
      fileName: "src/components/card-carousel/card-carousel.tsx",
      lineNumber: 39,
      columnNumber: 9
    }, this)
  }, void 0, !1, {
    fileName: "src/components/card-carousel/card-carousel.tsx",
    lineNumber: 29,
    columnNumber: 5
  }, this)
);
function CardCarousel({
  autoplay = !1,
  children,
  totalItems,
  show,
  ...props
}) {
  let theme2 = (0, import_styles5.useTheme)(), calculateProgress = (step) => {
    if (step === 0)
      return 100 * show / totalItems;
    let shownStep = step + show;
    return 100 * shownStep / totalItems;
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_multi_carousel.default, {
        swipeable: !0,
        ssr: !0,
        keyBoardControl: !0,
        afterChange: (_, { currentSlide }) => {
          setLinearProgress(calculateProgress(currentSlide));
        },
        autoPlay: autoplay,
        autoPlaySpeed: 1e3,
        containerClass: "carousel-container",
        customRightArrow: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MaterialArrowButton, {
          direction: "right"
        }, void 0, !1, {
          fileName: "src/components/card-carousel/card-carousel.tsx",
          lineNumber: 95,
          columnNumber: 27
        }, this),
        customLeftArrow: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MaterialArrowButton, {
          direction: "left"
        }, void 0, !1, {
          fileName: "src/components/card-carousel/card-carousel.tsx",
          lineNumber: 96,
          columnNumber: 26
        }, this),
        removeArrowOnDeviceType: ["tablet", "mobile"],
        responsive,
        rtl: theme2.direction === "rtl",
        itemClass: "carousel-item",
        ...props,
        children
      }, void 0, !1, {
        fileName: "src/components/card-carousel/card-carousel.tsx",
        lineNumber: 85,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_material3.Box, {
        maxWidth: 400,
        margin: "1.5em auto",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_material3.LinearProgress, {
          variant: "determinate",
          value: progress
        }, void 0, !1, {
          fileName: "src/components/card-carousel/card-carousel.tsx",
          lineNumber: 106,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "src/components/card-carousel/card-carousel.tsx",
        lineNumber: 105,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "src/components/card-carousel/card-carousel.tsx",
    lineNumber: 84,
    columnNumber: 5
  }, this);
}

// src/pages/Home/index.tsx
var import_jsx_dev_runtime = require("@emotion/react/jsx-dev-runtime");
function Home() {
  let { liveGames, scheduledGames, metaData } = (0, import_react7.useLoaderData)();
  return (0, import_react8.useEffect)(() => {
    console.log(liveGames, scheduledGames), console.log("meta>>>>>", metaData);
  }), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardCarousel, {
    show: 4,
    totalItems: liveGames.length,
    children: liveGames.map((game, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      style: { paddingRight: "1em" },
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_material4.Card, {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_material4.CardContent, {
            sx: {
              display: "flex",
              flexDirection: "column",
              minWidth: 300,
              height: 400
            },
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_material4.Box, {
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_material4.Typography, {
                    sx: { fontSize: 14 },
                    color: "text.secondary",
                    gutterBottom: !0,
                    children: game.date
                  }, void 0, !1, {
                    fileName: "src/pages/Home/index.tsx",
                    lineNumber: 46,
                    columnNumber: 17
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_material4.Typography, {
                    variant: "subtitle1",
                    color: "text.primary",
                    gutterBottom: !0,
                    children: game.status
                  }, void 0, !1, {
                    fileName: "src/pages/Home/index.tsx",
                    lineNumber: 53,
                    columnNumber: 17
                  }, this)
                ]
              }, void 0, !0, {
                fileName: "src/pages/Home/index.tsx",
                lineNumber: 41,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_material4.Box, {
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                rowGap: "1em",
                padding: "1em 1.5em",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_material4.Box, {
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_material4.Typography, {
                        variant: "subtitle2",
                        color: "text.secondary",
                        gutterBottom: !0,
                        children: "Home"
                      }, void 0, !1, {
                        fileName: "src/pages/Home/index.tsx",
                        lineNumber: 69,
                        columnNumber: 19
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_material4.Typography, {
                        variant: "h6",
                        color: "text.primary",
                        gutterBottom: !0,
                        children: game.home_team.fullName
                      }, void 0, !1, {
                        fileName: "src/pages/Home/index.tsx",
                        lineNumber: 76,
                        columnNumber: 19
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_material4.Typography, {
                        variant: "h3",
                        gutterBottom: !0,
                        children: game.home_team.score
                      }, void 0, !1, {
                        fileName: "src/pages/Home/index.tsx",
                        lineNumber: 79,
                        columnNumber: 19
                      }, this)
                    ]
                  }, void 0, !0, {
                    fileName: "src/pages/Home/index.tsx",
                    lineNumber: 68,
                    columnNumber: 17
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_material4.Box, {
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_material4.Typography, {
                        variant: "subtitle2",
                        color: "text.secondary",
                        gutterBottom: !0,
                        children: "Away"
                      }, void 0, !1, {
                        fileName: "src/pages/Home/index.tsx",
                        lineNumber: 84,
                        columnNumber: 19
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_material4.Typography, {
                        variant: "h6",
                        color: "text.primary",
                        gutterBottom: !0,
                        children: game.visitor_team.fullName
                      }, void 0, !1, {
                        fileName: "src/pages/Home/index.tsx",
                        lineNumber: 91,
                        columnNumber: 19
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_material4.Typography, {
                        variant: "h3",
                        gutterBottom: !0,
                        children: game.home_team.score
                      }, void 0, !1, {
                        fileName: "src/pages/Home/index.tsx",
                        lineNumber: 94,
                        columnNumber: 19
                      }, this)
                    ]
                  }, void 0, !0, {
                    fileName: "src/pages/Home/index.tsx",
                    lineNumber: 83,
                    columnNumber: 17
                  }, this)
                ]
              }, void 0, !0, {
                fileName: "src/pages/Home/index.tsx",
                lineNumber: 61,
                columnNumber: 15
              }, this)
            ]
          }, void 0, !0, {
            fileName: "src/pages/Home/index.tsx",
            lineNumber: 33,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_material4.CardActions, {
            sx: { justifyContent: "center" },
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_material4.Button, {
              size: "small",
              children: "View Game"
            }, void 0, !1, {
              fileName: "src/pages/Home/index.tsx",
              lineNumber: 101,
              columnNumber: 15
            }, this)
          }, void 0, !1, {
            fileName: "src/pages/Home/index.tsx",
            lineNumber: 100,
            columnNumber: 13
          }, this)
        ]
      }, void 0, !0, {
        fileName: "src/pages/Home/index.tsx",
        lineNumber: 32,
        columnNumber: 11
      }, this)
    }, game.id, !1, {
      fileName: "src/pages/Home/index.tsx",
      lineNumber: 31,
      columnNumber: 9
    }, this))
  }, void 0, !1, {
    fileName: "src/pages/Home/index.tsx",
    lineNumber: 29,
    columnNumber: 5
  }, this);
}

// utilities/api/types.ts
var GameStatus = /* @__PURE__ */ ((GameStatus2) => (GameStatus2["1st Qtr"] = "1st Qtr", GameStatus2["2nd Qtr"] = "2nd Qtr", GameStatus2.Halftime = "Halftime", GameStatus2["3rd Qtr"] = "3rd Qtr", GameStatus2["4th Qtr"] = "4th Qtr", GameStatus2.Final = "Final", GameStatus2))(GameStatus || {});

// src/pages/Home/loader.ts
var import_server_runtime = require("@remix-run/server-runtime");

// utilities/api/service.ts
var import_node = require("@remix-run/node"), currentDate = new Date(), year = currentDate.getFullYear(), defaultStartDate = currentDate.toISOString().split("T")[0];
currentDate.setDate(currentDate.getDate() + 7);
var defaultEndDate = currentDate.toISOString().split("T")[0], mapGamesData = (gamesData) => gamesData.map(({ home_team, visitor_team, ...game }) => ({
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
  date: new Date(game.date).toDateString()
})), getGames = async (season = year, startDate = defaultStartDate, endDate = defaultEndDate) => {
  try {
    let gamesResponse = await (0, import_node.fetch)(
      `https://www.balldontlie.io/api/v1/games?seasons[]=${season}&start_date=${startDate}&end_date=${endDate}&per_page=100`
    ), gamesResponseData = await gamesResponse.json();
    return gamesResponse.status === 200 && gamesResponseData.data.length === 0 && getGames(season - 1, startDate, endDate), {
      data: mapGamesData(gamesResponseData.data),
      meta: { ...gamesResponseData.meta, season }
    };
  } catch (err) {
    console.error(err);
  }
};

// src/pages/Home/loader.ts
var loader = async ({ request }) => {
  let url = new URL(request.url), startDate = url.searchParams.get("startDate"), endDate = url.searchParams.get("endDate"), liveGamesRequest = await getGames(), liveGames = liveGamesRequest == null ? void 0 : liveGamesRequest.data.filter(
    (game) => game.date === new Date().toDateString()
  ), scheduledGamesRequest, scheduledGames = liveGamesRequest == null ? void 0 : liveGamesRequest.data.filter(
    (game) => !Object.values(GameStatus).includes(game.status)
  );
  return startDate && endDate && (scheduledGamesRequest = await getGames(
    liveGamesRequest == null ? void 0 : liveGamesRequest.meta.season,
    startDate,
    endDate
  ), scheduledGames = scheduledGamesRequest == null ? void 0 : scheduledGamesRequest.data), (0, import_server_runtime.json)({
    liveGames: liveGames || [],
    scheduledGames: scheduledGames || [],
    metaData: [
      { requestType: "live", ...liveGamesRequest == null ? void 0 : liveGamesRequest.meta },
      { requestType: "scheduled", ...scheduledGamesRequest == null ? void 0 : scheduledGamesRequest.meta }
    ]
  });
};

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "954ca270", entry: { module: "/build/entry.client-D4BS4QDC.js", imports: ["/build/_shared/chunk-UTT5GAK4.js", "/build/_shared/chunk-7A67SNNS.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-CZ5GCUWZ.js", imports: ["/build/_shared/chunk-WST6XJCM.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !0, hasErrorBoundary: !0 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-AMA57WAS.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, url: "/build/manifest-954CA270.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
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
  publicPath,
  routes
});
//# sourceMappingURL=index.js.map
