import Container from '@mui/material/Container'
import { ErrorContainer } from '~/Layout/ErrorContainer'
import { ErrorBoundaryProps } from '~/utilities/types'
import { ScheduledGamesTitle } from '~/pages/Home/components/scheduled-games-title'

export function ErrorBoundary({ error }: ErrorBoundaryProps) {
  console.log(error)

  return (
    <Container maxWidth="xl" sx={{ padding: '2rem' }}>
      <ScheduledGamesTitle />
      <ErrorContainer
        title="Woaa We Don't Have Games For You"
        message="There was an issue on our end with getting scheduled games!"
      />
    </Container>
  )
}
