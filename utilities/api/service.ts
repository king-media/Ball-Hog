import { fetch } from '@remix-run/node'

import dayjs from 'dayjs'

import {
  GameResults,
  GameStatsResults,
  GameStatus,
  StatsData,
  TeamStats,
} from './types'

import type { GamesDTO, GameStatsDTO } from './dtos'

export const isGameLive = (game: GamesDTO) =>
  (<any>Object).values(GameStatus).includes(game.status)
export const isTime = (time?: string) => time !== '' && !time?.includes('Final')

const formatGameTime = (
  date: string,
  timeLocal: string,
  formatStr?: string
) => {
  const time = timeLocal.split(' ').pop()
  const isoDate = dayjs(date).toISOString().split('T').shift()

  return dayjs(`${isoDate} ${isTime(time) ? time : ''}`).format(formatStr)
}

export const mapGamesData = (gamesData: any): GamesDTO[] => {
  const mappedGamesData: GamesDTO[] = gamesData.map(
    ({ home_team, visitor_team, ...game }: any) => ({
      home_team: {
        id: home_team.id,
        fullName: home_team.full_name,
        score: game.home_team_score,
        stats: null,
      },
      visitor_team: {
        id: visitor_team.id,
        fullName: visitor_team.full_name,
        score: game.visitor_team_score,
        stats: null,
      },
      id: game.id,
      status: game.status as GameStatus | string,
      time: game.time.split(' ').pop(),
      date: formatGameTime(game.date, game.time, 'ddd MMM DD YYYY'),
    })
  )

  return mappedGamesData.sort((gameOne, gameTwo) => {
    const gameOneLive = isGameLive(gameOne)
    const gameTwoLive = isGameLive(gameTwo)

    const gameOneTime = formatGameTime(
      gameOne.date,
      gameOneLive ? '' : gameOne.time
    )
    const gameTwoTime = formatGameTime(
      gameTwo.date,
      gameTwoLive ? '' : gameTwo.time
    )

    if (gameOneTime > gameTwoTime) {
      return 1
    }

    if (gameOneTime < gameTwoTime) {
      return -1
    }

    return 0
  })
}

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
        date: dayjs(teamStats.game.date).format('ddd MMM DD YYYY'),
        time: teamStats.game.time?.split(' ').pop(),
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

export const getGames = async (
  season: number,
  startDate: string,
  endDate: string
): Promise<GameResults> => {
  try {
    const gamesResponse = await fetch(
      `https://www.balldontlie.io/api/v1/games?seasons[]=${season}&start_date=${startDate}&end_date=${endDate}&per_page=100`
    )

    const gamesResponseData = await gamesResponse.json()

    // Retry recursively w/ different year
    if (gamesResponse.status === 200 && gamesResponseData.data.length === 0) {
      return getGames(season - 1, startDate, endDate)
    }

    return {
      data: mapGamesData(gamesResponseData.data),
      meta: { ...gamesResponseData.meta, season },
    }
  } catch (err) {
    console.error(err)
    return {
      data: [],
      meta: { season: String(season) },
      error: err as Error,
    }
  }
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
