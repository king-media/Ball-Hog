import { useLoaderData } from '@remix-run/react'
import { useEffect } from 'react'
import { HomeLoaderData } from './loader'

import { GamesCardCarousel } from './components/games-card-carousel'
import { ScheduledGamesTitle } from './components/scheduled-games-title'

import { Box } from '@mui/material'

export function Home() {
  const { liveGames, scheduledGames, metaData } =
    useLoaderData<HomeLoaderData>()

  useEffect(() => {
    console.log(liveGames, scheduledGames)
    console.log('meta>>>>>', metaData)
  })

  return (
    <Box>
      <GamesCardCarousel games={liveGames} show={4} title="Today's Games" />
      <GamesCardCarousel
        games={scheduledGames}
        show={4}
        title={<ScheduledGamesTitle season={metaData.scheduled.season} />}
      />
    </Box>
  )
}
