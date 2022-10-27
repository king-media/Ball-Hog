import fs from 'node:fs'
import path from 'node:path'
import express from 'express'

const isProd = process.env.NODE_ENV === 'production'
const root = process.env.CWD || process.cwd()
const app = express()

const resolve = (p: string) => path.resolve(root, p)

const template = isProd
  ? fs.readFileSync(resolve('dist/client/index.html'), 'utf-8')
  : ''

const manifest: Record<string, string[]> = isProd
  ? // @ts-ignore
    (await import('../dist/client/ssr-manifest.json')).default
  : {}

app.use(express.static(resolve('/dist')))
app.use('*', async (req, res) => {
  try {
    const url = req.originalUrl
    // @ts-ignore
    const render = (await import('/dist/server/entry-server.js')).render

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
