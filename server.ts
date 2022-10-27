import fs from 'node:fs'
import path from 'node:path'
import express from 'express'
import { createServer as createViteServer } from 'vite'

const app = express()
const isProd = process.env.NODE_ENV === 'production'
const port = process.env.PORT || 8000
const root = process.env.CWD || process.cwd()

async function createServer() {
  const resolve = (p: string) => path.resolve(root, p)
  console.info('CWD', root)

  /**
   * @type {import('vite').ViteDevServer}
   */

  // Create Vite server in middleware mode and configure the app type as
  // 'custom', disabling Vite's own HTML serving logic so parent server
  // can take control
  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: 'custom',
  })

  // use vite's connect instance as middleware
  // if you use your own express router (express.Router()), you should use router.use
  app.use(vite.middlewares)

  app.use('*', async (req, res) => {
    try {
      const url = req.originalUrl

      let template, render
      if (!isProd) {
        // 2. Apply Vite HTML transforms. This injects the Vite HMR client, and
        //    also applies HTML transforms from Vite plugins, e.g. global preambles
        //    from @vitejs/plugin-react
        // always read fresh template in dev
        template = fs.readFileSync(resolve('index.html'), 'utf-8')
        template = await vite.transformIndexHtml(url, template)

        // 3. Load the server entry. vite.ssrLoadModule automatically transforms
        //    your ESM source code to be usable in Node.js! There is no bundling
        //    required, and provides efficient invalidation similar to HMR.
        render = (await vite.ssrLoadModule('/src/entry-server.ts')).render
      }
      // 4. render the app HTML. This assumes entry-server.js's exported `render`
      //    function calls appropriate framework SSR APIs,
      //    e.g. Vue.renderToString()
      const [appHtml, preloadLinks] = await render(url, {})
      // 5. Inject the app-rendered HTML into the template.
      const html = template
        .replace(`<!--preload-links-->`, preloadLinks)
        .replace('<!--ssr-app-->', appHtml)
      // 6. Send the rendered HTML back.
      res.status(200).set({ 'Content-Type': 'text/html' }).end(html)
    } catch (e) {
      // If an error is caught, let Vite fix the stack trace so it maps back to
      // your actual source code.
      const err = e as Error

      vite && vite.ssrFixStacktrace(err)
      console.log(err.stack)

      res.status(500).end(err.stack)
    }
  })

  return { app, vite }
}

createServer().then(({ app }) => {
  app.listen(port, () => {
    console.log('http://localhost:8000')
  })
})

export default app
