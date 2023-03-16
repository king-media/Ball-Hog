import { json } from '@remix-run/server-runtime'
import { LoaderArgs, SerializeFrom } from '@remix-run/node'

import MobileDetect from 'mobile-detect'

import dayjs from 'dayjs'

import { GameResults } from '~/utilities/api/types'
import { dateFormat } from '~/utilities/constants/date-constants'

export type HomeLoaderData = SerializeFrom<typeof loader>

export const loader = async ({ request }: LoaderArgs) => {
  const url = new URL(request.url)

  let deviceType = 'desktop'
  let userAgent = request.headers.get('user-agent') || navigator.userAgent

  const md = new MobileDetect(userAgent)

  if (md.tablet()) {
    deviceType = 'tablet'
  }

  if (md.mobile()) {
    deviceType = 'mobile'
  }

  const startDate =
    url.searchParams.get('startDate') || dayjs().format(dateFormat)
  const endDate =
    url.searchParams.get('endDate') || dayjs().add(1, 'week').format(dateFormat)

  const gamesResponse = await fetch(
    `https://www.balldontlie.io/api/v1/games?start_date=${startDate}&end_date=${endDate}&per_page=100`
  )

  const gamesResponseData: GameResults = await gamesResponse.json()

  return json({
    deviceType,
    games: gamesResponseData.data,
    metaData: gamesResponseData.meta,
  })
}
