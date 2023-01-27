import { GamesDTO, GamesMetaDataDTO, GameStatsDTO } from './dtos'

export type StatsData = {
  id: number
  ast: number
  blk: number
  dreb: number
  fg3_pct: number
  fg3a: number
  fg3m: number
  fg_pct: number
  fga: number
  fgm: number
  ft_pct: number
  fta: number
  ftm: number
  game: GameStatsData
  min: string
  oreb: number
  pf: number
  player: PlayerData
  pts: number
  reb: number
  stl: number
  team: TeamData
  turnover: number
}

export type LeadingStatsData = {
  player: PlayerData
  team: TeamData
  pts: number
  ast: number
  reb: number
}

export type GameData = {
  id: string
  fullName: string
  score: string
  stats?: StatsData
}

export type GameStatsData = {
  id: string
  date: string
  home_team_id: string
  home_team_score: string
  period: string
  postseason: boolean
  season: string
  status: string
  time: string
  visitor_team_id: string
  visitor_team_score: string
}

export type GameResults = {
  data: GamesDTO[]
  meta: GamesMetaDataDTO
  error?: Error
}

export type GameStatsResults = {
  data: GameStatsDTO | null
  error?: Error
}

export type PlayerData = {
  id: string
  first_name: string
  height_feet?: null
  height_inches?: null
  last_name: string
  full_name: string
  position: string
  team_id: string
  weight_pounds?: null
}

export type TeamData = {
  id: string
  abbreviation: string
  city: string
  conference: string
  division: string
  full_name: string
  name: string
}

export type TeamStats = {
  stats: StatsData[]
  leadingStats?: LeadingStatsData
}

export enum GameStatus {
  '1st Qtr' = '1st Qtr',
  '2nd Qtr' = '2nd Qtr',
  'Halftime' = 'Halftime',
  '3rd Qtr' = '3rd Qtr',
  '4th Qtr' = '4th Qtr',
  'Final' = 'Final',
}
