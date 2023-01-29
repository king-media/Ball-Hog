import {
  useLoaderData,
  useRevalidator,
  useSearchParams,
} from '@remix-run/react'

import { useEffect } from 'react'

import { GamesCardCarousel } from './components/games-card-carousel'
import { ScheduledGamesTitle } from './components/scheduled-games-title'

import { Box } from '@mui/material'

import dayjs from 'dayjs'
import { dateFormat } from 'utilities/constants/date-constants'

import type { HomeLoaderData } from './loader'

export function Home() {
  const { games, metaData } = useLoaderData<HomeLoaderData>()

  const revalidator = useRevalidator()
  const [searchParams, setSearchParams] = useSearchParams()

  useEffect(() => {
    if (!searchParams.get('startDate')) {
      const startDate = dayjs().format(dateFormat)
      const endDate = dayjs().add(1, 'week').format(dateFormat)

      setSearchParams({ startDate, endDate })
    }

    const refreshInterval = setInterval(() => {
      if (revalidator.state === 'idle') {
        revalidator.revalidate()
      }
    }, 60000)

    return () => clearInterval(refreshInterval)
  }, [])

  const season = metaData?.season

  return (
    <Box>
      <GamesCardCarousel
        games={games}
        title={
          <ScheduledGamesTitle season={season || dayjs().year().toString()} />
        }
      />
    </Box>
  )
}
