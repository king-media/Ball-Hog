const { BUNDLE_SERVER_DEPS, VERCEL } = process.env
const useVercelRuntime = !!VERCEL

/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  serverBuildTarget: 'vercel',
  // When running locally in development mode, we use the built in remix
  // server. This does not understand the vercel lambda module format,
  // so we default back to the standard build output.
  server: useVercelRuntime ? './server.js' : undefined,
  serverDependenciesToBundle: BUNDLE_SERVER_DEPS,

  appDirectory: 'src',
  assetsBuildDirectory: 'public/build',
  serverBuildPath: 'api/index.js',
  publicPath: '/build/',
  ignoredRouteFiles: [
    '.*',
    '**/*.action.*',
    '**/*.loader.*',
    '**/*.meta.*',
    '**/*.story.*',
    '**/*.test.*',
    '**/components/**/*.*',
  ],
}
