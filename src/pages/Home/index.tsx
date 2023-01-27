import { useLoaderData, useRevalidator } from '@remix-run/react'
import { useEffect } from 'react'
import { HomeLoaderData } from './loader'

import { GamesCardCarousel } from './components/games-card-carousel'
import { ScheduledGamesTitle } from './components/scheduled-games-title'

import { Box } from '@mui/material'
import dayjs from 'dayjs'

export function Home() {
  const { liveGames, scheduledGames, metaData } =
    useLoaderData<HomeLoaderData>()
  const revalidator = useRevalidator()

  useEffect(() => {
    const refreshInterval = setInterval(() => {
      if (revalidator.state === 'idle') {
        revalidator.revalidate()
      }
    }, 60000)

    return () => clearInterval(refreshInterval)
  }, [])

  const season = metaData?.scheduled?.season || metaData?.live?.season

  return (
    <Box>
      <GamesCardCarousel games={liveGames} title="Today's Games" />
      <GamesCardCarousel
        games={scheduledGames}
        title={
          <ScheduledGamesTitle season={season || dayjs().year().toString()} />
        }
      />
    </Box>
  )
}
