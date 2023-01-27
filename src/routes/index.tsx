export { Home as default } from 'src/pages/Home'
export { loader } from 'src/pages/Home/loader'

import gameStyles from '~/css/game-styles.css'

export function links() {
  return [{ rel: 'stylesheet', href: gameStyles }]
}
