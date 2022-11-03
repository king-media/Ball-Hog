import {
  __toESM,
  require_emotion_cache_cjs
} from "/build/_shared/chunk-GPSCDPY4.js";

// css-theme/emotion-cache.js
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

export {
  createEmotionCache
};
//# sourceMappingURL=/build/_shared/chunk-5TMCLW6C.js.map
