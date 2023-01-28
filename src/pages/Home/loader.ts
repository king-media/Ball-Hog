import { json } from '@remix-run/server-runtime'
import { getGames } from 'utilities/api/service'
import { LoaderArgs, SerializeFrom } from '@remix-run/node'

import dayjs from 'dayjs'

export type HomeLoaderData = SerializeFrom<typeof loader>

export const loader = async ({ request }: LoaderArgs) => {
  const url = new URL(request.url)
  const currentDate = dayjs()
  const startDate =
    url.searchParams.get('startDate') || currentDate.format('YYYY-MM-DD')
  const endDate =
    url.searchParams.get('endDate') ||
    currentDate.add(7, 'day').format('YYYY-MM-DD')
  const year = currentDate.year()

  const liveGamesRequest = await getGames(year, startDate, endDate)

  const liveGames = liveGamesRequest.data.filter(
    (game) => game.date === currentDate.format('ddd MMM DD YYYY')
  )

  let scheduledGamesRequest
  let scheduledGames = liveGamesRequest.data

  if (
    (url.searchParams.get('startDate') || url.searchParams.get('endDate')) &&
    liveGamesRequest
  ) {
    scheduledGamesRequest = await getGames(
      Number.parseInt(liveGamesRequest.meta.season),
      startDate,
      endDate
    )
    scheduledGames = scheduledGamesRequest.data
  }

  return json({
    liveGames: liveGames,
    scheduledGames: scheduledGames,
    metaData: {
      live: liveGamesRequest.meta,
      scheduled: scheduledGamesRequest?.meta,
    },
  })
}
