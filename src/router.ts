import {
  createRouter as _createRouter,
  createMemoryHistory,
  createWebHistory,
} from 'vue-router'

import type { RouteRecordRaw } from 'vue-router'
// Auto generates routes from vue files under ./pages
// https://vitejs.dev/guide/features.html#glob-import
const pages = import.meta.glob('./pages/*.vue')

const routes: RouteRecordRaw[] = Object.keys(pages).map((path) => {
  const pathMatch = path.match(/\.\/pages(.*)\.vue$/)
  const name = pathMatch && pathMatch[1].toLowerCase()

  return {
    path: name === '/home' ? '/' : name,
    component: pages[path], // () => import('./pages/*.vue')
  } as RouteRecordRaw
})

export function createRouter() {
  return _createRouter({
    // use appropriate history implementation for server/client
    // import.meta.env.SSR is injected by Vite.
    history: import.meta.env.SSR
      ? createMemoryHistory('/')
      : createWebHistory('/'),
    routes,
  })
}
