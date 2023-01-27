import { useLoaderData, useRevalidator } from '@remix-run/react'
import { useEffect } from 'react'
import { GameStatsLoaderData } from './loader'

import { Box } from '@mui/material'

export function GameStats() {
  const { gameStats } = useLoaderData<GameStatsLoaderData>()
  const revalidator = useRevalidator()

  useEffect(() => {
    console.table(gameStats)
    const refreshInterval = setInterval(() => {
      if (revalidator.state === 'idle') {
        revalidator.revalidate()
      }
    }, 60000)

    return () => clearInterval(refreshInterval)
  }, [])

  return <Box>Will code game stats components later</Box>
}
