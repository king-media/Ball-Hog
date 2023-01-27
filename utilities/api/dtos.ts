import type { GameData, TeamStats } from './types'

export type GamesDTO = {
  home_team: GameData
  visitor_team: GameData
  id: string
  status: string
  date: string
  meta: GamesMetaDataDTO
}

export type GameStatsDTO = {
  home_team: TeamStats
  visitor_team: TeamStats
}

export type GamesMetaDataDTO = {
  season: string
  current_page?: string
  next_page?: string
  total_pages?: string
  total_count?: string
}
