import { json } from '@remix-run/server-runtime'
import { getGames } from 'utilities/api/service'
import { LoaderArgs, SerializeFrom } from '@remix-run/node'

export type HomeLoaderData = SerializeFrom<typeof loader>

export const loader = async ({ request }: LoaderArgs) => {
  const url = new URL(request.url)
  const startDate = url.searchParams.get('startDate') || undefined
  const endDate = url.searchParams.get('endDate') || undefined

  const liveGamesRequest = await getGames()
  const liveGames = liveGamesRequest.data.filter(
    (game) => game.date === new Date().toDateString()
  )

  let scheduledGamesRequest
  let scheduledGames = liveGamesRequest.data

  if ((startDate || endDate) && liveGamesRequest) {
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
