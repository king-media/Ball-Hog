import dayjs from 'dayjs'

import type { GamesDTO } from './api/dtos'
import type { GameStatus } from './api/types'

export const formatGameDate = (
  date: string,
  timeLocal: string,
  formatStr?: string
) => {
  const time = timeLocal.split(' ').shift()
  const isoDate = dayjs(date).toISOString().split('T').shift()

  return dayjs(`${isoDate} ${time}`).format(formatStr)
}

export const formatGameTime = (time?: string) => time?.split(' ').pop()

export const isTime = (time?: string) =>
  time !== '' && !time?.match(/Final|Half/)

export const isGameLive = (game: GamesDTO) =>
  (<any>Object).values(GameStatus).includes(game.status)
