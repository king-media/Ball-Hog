import { fetch } from '@remix-run/node'

import type {
  GameStatsResults,
  StatsData,
  TeamStats,
  GameStatsDTO,
} from './types'

const mapPlayerStats = (
  teamId: string,
  playerStats: StatsData[]
): TeamStats => {
  let stats = playerStats.filter((data) => data.team.id === teamId)

  const leadingStats = stats.find(
    (teamStats) =>
      teamStats.pts === Math.max(...stats.map((allStats) => allStats.pts))
  )

  if (leadingStats) {
    return {
      stats,
      leadingStats,
    }
  }

  return { stats }
}

const mapGameStatsData = (
  data: StatsData[],
  homeTeamId: string,
  visitorTeamId: string
): GameStatsDTO => {
  const home_team = mapPlayerStats(homeTeamId, data)
  const visitor_team = mapPlayerStats(visitorTeamId, data)

  return { home_team, visitor_team }
}

export const getGameStats = async (
  gameId?: string
): Promise<GameStatsResults> => {
  console.log(`stats called for ${gameId}`)

  try {
    const gameStatsResponse = await fetch(
      `https://www.balldontlie.io/api/v1/stats?game_ids[]=${gameId}&per_page=50`
    )
    const gameStatsResponseData = await gameStatsResponse.json()
    const { home_team_id, visitor_team_id } =
      gameStatsResponseData.data[0]?.game

    return {
      data: mapGameStatsData(
        gameStatsResponseData.data,
        home_team_id,
        visitor_team_id
      ),
    }
  } catch (err) {
    console.error(err)
    return {
      data: null,
      error: err as Error,
    }
  }
}
