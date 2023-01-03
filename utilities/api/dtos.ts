import type { GameData } from './types'

export type GamesDTO = {
  home_team: GameData
  visitor_team: GameData
  id: string
  status: string
  date: string
  meta: GamesDTO
}

export type GamesMetaDataDTO = {
  season: string
  current_page: string
  next_page: string
  total_pages: string
  total_count: string
}
