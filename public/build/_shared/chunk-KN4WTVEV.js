import {
  __toESM,
  createTheme_default,
  red_default,
  require_emotion_cache_cjs
} from "/build/_shared/chunk-IGDJSQXI.js";

// src/css-theme/emotion-cache.ts
var import_cache = __toESM(require_emotion_cache_cjs());
var isBrowser = typeof document !== "undefined";
function createEmotionCache() {
  let insertionPoint;
  if (isBrowser) {
    const emotionInsertionPoint = document.querySelector(
      'meta[name="emotion-insertion-point"]'
    );
    insertionPoint = emotionInsertionPoint != null ? emotionInsertionPoint : void 0;
  }
  return (0, import_cache.default)({ key: "mui-style", insertionPoint });
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
var theme_default = theme;

export {
  createEmotionCache,
  theme,
  theme_default
};
//# sourceMappingURL=/build/_shared/chunk-KN4WTVEV.js.map
