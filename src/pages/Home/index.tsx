import { useLoaderData, useRevalidator } from '@remix-run/react'

import { useEffect } from 'react'

import { GamesCardCarousel } from './components/games-card-carousel'
import { ScheduledGamesTitle } from './components/scheduled-games-title'

import { Box } from '@mui/material'

import type { HomeLoaderData } from './loader'

export function Home() {
  const { games, deviceType } = useLoaderData<HomeLoaderData>()

  const revalidator = useRevalidator()

  useEffect(() => {
    const refreshInterval = setInterval(() => {
      if (revalidator.state === 'idle') {
        revalidator.revalidate()
      }
    }, 60000)

    return () => clearInterval(refreshInterval)
  }, [])

  return (
    <Box>
      <GamesCardCarousel
        deviceType={deviceType}
        games={games}
        title={<ScheduledGamesTitle />}
      />
    </Box>
  )
}
