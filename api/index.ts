import fs from 'node:fs'
import path from 'node:path'
import express from 'express'
import cors from 'cors'

const root = process.env.CWD || process.cwd()
const app = express()
console.log('root', root)
const resolve = (p: string) => path.resolve(root, p)

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(resolve('/dist')))
// Add API Routes here.... app.use("/api", apiRoutes)
app.use('*', async (req, res) => {
  try {
    const url = req.originalUrl
    const template = fs.readFileSync(resolve('dist/client/index.html'), 'utf-8')

    const render = (await import('../dist/server/entry-server.js')).render
    const manifest: Record<string, string[]> = (
      await import('../dist/client/ssr-manifest.json')
    ).default

    const [appHtml, preloadLinks] = await render(url, manifest)

    const html = template
      .replace(`<!--preload-links-->`, preloadLinks)
      .replace('<!--ssr-app-->', appHtml)

    res.status(200).set({ 'Content-Type': 'text/html' }).end(html)
  } catch (e) {
    const err = e as Error
    console.log(err.stack)

    res.status(500).end(err.stack)
  }
})

export default app
