import { GameStatus } from 'utilities/api/types'

import { json } from '@remix-run/server-runtime'
import { getGameStats } from 'utilities/api/service'
import { LoaderArgs, SerializeFrom } from '@remix-run/node'

export type GameStatsLoaderData = SerializeFrom<typeof loader>

export const loader = async ({ params }: LoaderArgs) => {
  const { gameId } = params

  const gameStats = await getGameStats(gameId)

  return json({
    gameStats,
  })
}
