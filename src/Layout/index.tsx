import { PropsWithChildren } from 'react'

import Box from '@mui/material/Box'

import { Footer } from './footer'
import { Header } from './header'

export default function Layout({ children }: PropsWithChildren) {
  return (
    <Box position="relative" minHeight="100vh">
      <Header />
      <Box>{children}</Box>
      <Footer />
    </Box>
  )
}
