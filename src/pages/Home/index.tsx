import { useLoaderData } from '@remix-run/react'
import { useEffect } from 'react'
import { HomeLoaderData } from './loader'

import { GamesCardCarousel } from './components/games-card-carousel'
import { ScheduledGamesTitle } from './components/scheduled-games-title'

import { Box } from '@mui/material'
import dayjs from 'dayjs'

export function Home() {
  const { liveGames, scheduledGames, metaData } =
    useLoaderData<HomeLoaderData>()

  useEffect(() => {
    console.log(liveGames, scheduledGames)
    console.log('meta>>>>>', metaData)
  })

  const season = metaData?.scheduled?.season || metaData.live.season

  return (
    <Box>
      <GamesCardCarousel games={liveGames} show={4} title="Today's Games" />
      <GamesCardCarousel
        games={scheduledGames}
        show={4}
        title={
          <ScheduledGamesTitle season={season || dayjs().year().toString()} />
        }
      />
    </Box>
  )
}
