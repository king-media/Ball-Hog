import { useCatch, useNavigation } from '@remix-run/react'

import Container from '@mui/material/Container'

import { ErrorContainer } from '~/Layout/ErrorContainer'

import { ScheduledGamesTitle } from '~/pages/Home/components/scheduled-games-title'
import { GamesSkeleton } from '~/pages/Home/components/GamesSkeleton'

export function CatchBoundary() {
  const caught = useCatch()
  const navigation = useNavigation()

  const { deviceType } = caught.data

  switch (caught.status) {
    case 404:
      return (
        <Container maxWidth="xl" sx={{ paddingTop: '2em' }}>
          <ScheduledGamesTitle />
          {navigation.state === 'loading' ? (
            <GamesSkeleton deviceType={String(deviceType)} />
          ) : (
            <ErrorContainer
              title="Woaa We Don't Have Games For You"
              message="We weren't able to find scheduled games!"
            />
          )}
        </Container>
      )

    default:
      throw new Error(caught.data || caught.statusText)
  }
}
