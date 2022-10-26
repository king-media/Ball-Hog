// import { createPinia } from 'pinia'
import { createSSRApp } from 'vue'
import App from './App.vue'
import { createRouter } from './router'
// SSR requires a fresh app instance per request, therefore we export a function
// that creates a fresh app instance. Pinia or store, also needs to be freshly created
// fresh store here.
export function createApp() {
  const app = createSSRApp(App)
  // const pinia = createPinia()
  // app.use(pinia)
  const router = createRouter()
  app.use(router)
  return { app, router }
}
