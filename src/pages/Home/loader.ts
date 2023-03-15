import { json } from '@remix-run/server-runtime'
import { LoaderArgs, SerializeFrom } from '@remix-run/node'

export type HomeLoaderData = SerializeFrom<typeof loader>

export const loader = async ({ request }: LoaderArgs) => {
  const url = new URL(request.url)

  const startDate = url.searchParams.get('startDate')
  const endDate = url.searchParams.get('endDate')

  return json({
    games: [],
    metaData: null,
  })
}
