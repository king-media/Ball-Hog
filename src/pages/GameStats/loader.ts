import { json } from '@remix-run/server-runtime'
import { getGameStats } from '~/utilities/api/get-game-stats-service'
import { LoaderArgs, SerializeFrom } from '@remix-run/node'

export type GameStatsLoaderData = SerializeFrom<typeof loader>

export const loader = async ({ params }: LoaderArgs) => {
  const { gameId } = params

  const gameStatsResponse = await getGameStats(gameId)

  const gameStats = gameStatsResponse.data?.home_team.stats[0].game
  const homeTeamStats = gameStatsResponse.data?.home_team
  const visitorTeamStats = gameStatsResponse.data?.visitor_team

  return json({
    gameStats,
    homeTeamStats,
    visitorTeamStats,
  })
}
