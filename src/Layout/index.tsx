import { Container } from '@mui/material'
import { PropsWithChildren } from 'react'
import { Footer } from './footer'
import { Header } from './header'

export default function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <Header />
      <Container maxWidth="xl" sx={{ padding: '2em 0' }}>
        {children}
      </Container>
      <Footer />
    </>
  )
}
