import {
  __toESM,
  createTheme_default,
  red_default,
  require_emotion_cache_cjs,
  require_react
} from "/build/_shared/chunk-7A67SNNS.js";

// src/css-theme/emotion-cache.ts
var import_cache = __toESM(require_emotion_cache_cjs());
function createEmotionCache() {
  return (0, import_cache.default)({ key: "css" });
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
//# sourceMappingURL=/build/_shared/chunk-UTT5GAK4.js.map
