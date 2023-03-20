import { useLoaderData, useNavigation, useRevalidator } from '@remix-run/react'

import { useEffect } from 'react'

import { GamesCardCarousel } from '~/pages/Home/components/games-card-carousel'
import { ScheduledGamesTitle } from '~/pages/Home/components/scheduled-games-title'
import { ScheduledSkeleton } from '~/components/Skeletons/ScheduleSkeleton'

import { Container } from '@mui/material'

import type { HomeLoaderData } from './loader'

export function Home() {
  const { games, deviceType } = useLoaderData<HomeLoaderData>()
  const revalidator = useRevalidator()
  const navigation = useNavigation()

  useEffect(() => {
    const refreshInterval = setInterval(() => {
      if (revalidator.state === 'idle') {
        revalidator.revalidate()
      }
    }, 60000)

    return () => clearInterval(refreshInterval)
  }, [])

  return (
    <Container maxWidth="xl">
      {navigation.state === 'loading' &&
      navigation.location.pathname !== '/' ? (
        <ScheduledSkeleton />
      ) : (
        <GamesCardCarousel
          deviceType={deviceType}
          games={games}
          title={<ScheduledGamesTitle />}
        />
      )}
    </Container>
  )
}
