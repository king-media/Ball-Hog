/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */

import { useLoaderData } from '@remix-run/react'
import react, { useEffect } from 'react'
import { HomeLoaderData } from './loader'

import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from '@mui/material'

import { CardCarousel } from 'src/components/card-carousel'

export function Home() {
  const { liveGames, scheduledGames, metaData } =
    useLoaderData<HomeLoaderData>()

  useEffect(() => {
    console.log(liveGames, scheduledGames)
    console.log('meta>>>>>', metaData)
  })

  return (
    <CardCarousel show={4} totalItems={liveGames.length}>
      {liveGames.map((game, index) => (
        <div key={game.id} style={{ paddingRight: '1em' }}>
          <Card sx={{ minWidth: 300 }}>
            <CardContent sx={{ display: 'flex', flexDirection: 'row' }}>
              <Box>
                <Typography variant="h5" color="text.primary" gutterBottom>
                  {game.home_team.fullName}
                </Typography>
                Home Team Info
              </Box>
              <Box>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  {game.date}
                </Typography>
                <Typography variant="h3" color="text.primary" gutterBottom>
                  {game.status}
                </Typography>
                Game Info
              </Box>
              <Box>
                <Typography variant="h5" color="text.primary" gutterBottom>
                  {game.visitor_team.fullName}
                </Typography>
                Away Team Info
              </Box>
            </CardContent>
            <CardActions>
              <Button size="small">View Game</Button>
            </CardActions>
          </Card>
        </div>
      ))}
    </CardCarousel>
  )
}
