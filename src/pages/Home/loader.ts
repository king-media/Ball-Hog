import { json } from '@remix-run/server-runtime'
import { LoaderArgs, SerializeFrom } from '@remix-run/node'

import { GameResults } from '~/utilities/api/types'

export type HomeLoaderData = SerializeFrom<typeof loader>

export const loader = async ({ request }: LoaderArgs) => {
  const url = new URL(request.url)

  const startDate = url.searchParams.get('startDate')
  const endDate = url.searchParams.get('endDate')

  if (startDate && endDate) {
    const gamesResponse = await fetch(
      `https://www.balldontlie.io/api/v1/games?start_date=${startDate}&end_date=${endDate}&per_page=100`
    )

    const gamesResponseData: GameResults = await gamesResponse.json()

    return json({
      games: gamesResponseData.data,
      metaData: gamesResponseData.meta,
    })
  }

  return json({
    games: [],
    metaData: null,
  })
}
