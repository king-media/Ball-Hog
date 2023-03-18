import Container from '@mui/material/Container'
import { useCatch } from '@remix-run/react'
import { ErrorContainer } from '~/Layout/ErrorContainer'

export function CatchBoundary() {
  const caught = useCatch()

  switch (caught.status) {
    case 404:
      return (
        <Container maxWidth="xl" sx={{ paddingTop: '2em' }}>
          <ErrorContainer
            title="Woaa We Don't Have Games For You"
            message="We weren't able to find scheduled games!"
          />
        </Container>
      )

    default:
      throw new Error(caught.data || caught.statusText)
  }
}
