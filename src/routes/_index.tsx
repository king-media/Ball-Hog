export { Home as default } from 'src/pages/Home'
export { loader } from 'src/pages/Home/loader'
export { CatchBoundary } from '~/pages/Home/CatchBoundary'
export { ErrorBoundary } from '~/pages/Home/ErrorBoundary'

import gameStyles from '~/css/game-styles.css'

export function links() {
  return [{ rel: 'stylesheet', href: gameStyles }]
}
