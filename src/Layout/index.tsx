import { Container } from '@mui/material'
import { PropsWithChildren } from 'react'

export default function Layout({ children }: PropsWithChildren) {
  return (
    <Container maxWidth="xl" sx={{ paddingTop: '2em' }}>
      {children}
    </Container>
  )
}
