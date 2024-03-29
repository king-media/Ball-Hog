const { VERCEL } = process.env
const useVercelRuntime = !!VERCEL

/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  future: {
    v2_routeConvention: true,
  },

  serverBuildTarget: useVercelRuntime ? 'vercel' : 'node-cjs',
  // When running locally in development mode, we use the built in remix
  // server. This does not understand the vercel lambda module format,
  // so we default back to the standard build output.
  server: useVercelRuntime ? './server.js' : undefined,

  appDirectory: 'src',
  assetsBuildDirectory: 'public/build',

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
