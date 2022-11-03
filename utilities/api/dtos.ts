import type { GameData } from './types'

export type gamesDTO = {
  home_team: GameData
  visitor_team: GameData
  id: string
  status: string
  date: string
  meta: gamesDTO
}

export type gamesMetaDataDTO = {
  season: string
  current_page: string
  next_page: string
  total_pages: string
  total_count: string
}
