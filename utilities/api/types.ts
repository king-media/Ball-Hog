import { GamesDTO, GamesMetaDataDTO } from './dtos'

export type StatsData = {}

export type GameData = {
  id: string
  fullName: string
  score: string
  stats?: StatsData
}

export type GameResults = {
  data: GamesDTO[]
  meta: GamesMetaDataDTO
  error?: unknown
}

export enum GameStatus {
  '1st Qtr' = '1st Qtr',
  '2nd Qtr' = '2nd Qtr',
  'Halftime' = 'Halftime',
  '3rd Qtr' = '3rd Qtr',
  '4th Qtr' = '4th Qtr',
  'Final' = 'Final',
}
