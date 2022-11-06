import { Container } from '@mui/material'
import { PropsWithChildren } from 'react'
import { Footer } from './footer'
import { Header } from './header'

export default function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <Header />
      <Container maxWidth="xl" sx={{ paddingTop: '2em' }}>
        {children}
      </Container>
      <Footer />
    </>
  )
}
