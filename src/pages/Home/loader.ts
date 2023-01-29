import { json } from '@remix-run/server-runtime'
import { LoaderArgs, SerializeFrom } from '@remix-run/node'

import { getGames } from 'utilities/api/get-games-service'

import dayjs from 'dayjs'

export type HomeLoaderData = SerializeFrom<typeof loader>

export const loader = async ({ request }: LoaderArgs) => {
  const url = new URL(request.url)

  const startDate = url.searchParams.get('startDate')
  const endDate = url.searchParams.get('endDate')

  if (startDate && endDate) {
    const currentDate = dayjs(startDate)
    const year = currentDate.year()

    const gamesRequest = await getGames(year, startDate, endDate)

    return json({
      games: gamesRequest.data,
      metaData: gamesRequest.meta,
    })
  }

  return json({
    games: [],
    metaData: null,
  })
}
