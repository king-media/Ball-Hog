export { GameStats as default } from '~/pages/GameStats'
export { loader } from 'src/pages/GameStats/loader'

import statsStyles from '~/css/stats-styles.css'

export function links() {
  return [{ rel: 'stylesheet', href: statsStyles }]
}
