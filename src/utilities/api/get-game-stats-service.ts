import { fetch } from '@remix-run/node'

import { displayDateFormat } from '~/utilities/constants/date-constants'
import { formatGameDate, formatGameTime } from '../date-helpers'

import type { GameStatsResults, StatsData, TeamStats } from './types'
import type { GameStatsDTO } from './dtos'

const mapPlayerStats = (
  teamId: string,
  playerStats: StatsData[]
): TeamStats => {
  let stats = playerStats
    .filter((data) => data.team.id === teamId)
    .map((teamStats) => ({
      ...teamStats,
      gameId: teamStats.game.id,
      teamId: teamStats.team.id,
      game: {
        ...teamStats.game,
        date: formatGameDate(teamStats.game.date, '', displayDateFormat),
        time: formatGameTime(teamStats.game.time),
      },
      player: {
        ...teamStats.player,
        full_name: `${teamStats.player.first_name} ${teamStats.player.last_name}`,
      },
    }))

  const leadingStats = stats.find(
    (teamStats) =>
      teamStats.pts === Math.max(...stats.map((allStats) => allStats.pts))
  )

  if (leadingStats) {
    return {
      stats,
      leadingStats: {
        player: {
          ...leadingStats.player,
          full_name: `${leadingStats.player.first_name} ${leadingStats.player.last_name}`,
        },
        team: leadingStats.team,
        pts: leadingStats.pts,
        ast: leadingStats.ast,
        reb: leadingStats.reb,
      },
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
