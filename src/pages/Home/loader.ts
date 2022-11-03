import type { LoaderFunction } from '@remix-run/server-runtime'
import type { gamesDTO, gamesMetaDataDTO } from 'utilities/api/dtos'
import { GameStatus } from 'utilities/api/types'

import { json } from '@remix-run/server-runtime'
import { getGames } from 'utilities/api/service'

export type HomeLoaderData = {
  liveGames: gamesDTO[]
  scheduledGames: gamesDTO[]
  metaData: Array<gamesMetaDataDTO & { requestType: string }>
}

export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url)
  const startDate = url.searchParams.get('startDate')
  const endDate = url.searchParams.get('endDate')

  const liveGamesRequest = await getGames()
  const liveGames = liveGamesRequest?.data.filter(
    (game) => game.date === new Date().toDateString()
  )

  let scheduledGamesRequest
  let scheduledGames = liveGamesRequest?.data.filter(
    (game) => !(<any>Object).values(GameStatus).includes(game.status)
  )

  if (startDate && endDate) {
    scheduledGamesRequest = await getGames(
      liveGamesRequest?.meta.season,
      startDate,
      endDate
    )
    scheduledGames = scheduledGamesRequest?.data
  }

  return json<HomeLoaderData>({
    liveGames: liveGames || [],
    scheduledGames: scheduledGames || [],
    metaData: [
      { requestType: 'live', ...liveGamesRequest?.meta },
      { requestType: 'scheduled', ...scheduledGamesRequest?.meta },
    ],
  })
}
