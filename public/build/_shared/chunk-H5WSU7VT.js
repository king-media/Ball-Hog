import {
  __toESM,
  createTheme_default,
  emotion_cache_browser_esm_default,
  red_default,
  require_react
} from "/build/_shared/chunk-ZXJVO4WW.js";

// src/css-theme/emotion-cache.ts
function createEmotionCache() {
  return emotion_cache_browser_esm_default({ key: "css" });
}

// src/css-theme/theme.ts
var theme = createTheme_default({
  palette: {
    primary: {
      main: "#556cd6"
    },
    secondary: {
      main: "#19857b"
    },
    error: {
      main: red_default.A400
    }
  }
});

// src/css-theme/styles-context.tsx
var import_react = __toESM(require_react());
var styles_context_default = (0, import_react.createContext)(null);

export {
  styles_context_default,
  createEmotionCache,
  theme
};
//# sourceMappingURL=/build/_shared/chunk-H5WSU7VT.js.map
