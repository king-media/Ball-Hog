const { VERCEL } = process.env
const useVercelRuntime = !!VERCEL

/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  serverBuildTarget: 'vercel',
  server: process.env.NODE_ENV === 'development' ? undefined : './server.js',

  appDirectory: 'src',
  // ignoredRouteFiles: [
  //   '.*',
  //   '**/*.action.*',
  //   '**/*.loader.*',
  //   '**/*.meta.*',
  //   '**/*.story.*',
  //   '**/*.test.*',
  //   '**/components/**/*.*',
  // ],
}
