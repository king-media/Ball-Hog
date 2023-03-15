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
  abbreviation: string
  city: string
  conference: string
  division: string
  full_name: string
  name: string
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
  time?: string
  visitor_team_id: string
  visitor_team_score: string
}

export type GameResults = {
  data: GamesDTO[]
  meta: GamesMetaDataDTO
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

// DTO Types

export type GamesDTO = {
  home_team: GameData
  home_team_score: number
  visitor_team: GameData
  visitor_team_score: number
  id: string
  status: string
  date: string
  period: number
  postseason: boolean
  time: string
  season: number
}

export type GameStatsDTO = {
  home_team: TeamStats
  visitor_team: TeamStats
}

export type GamesMetaDataDTO = {
  current_page?: string
  next_page?: string
  total_pages?: string
  total_count?: string
}
