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
          <Card>
            <CardContent
              sx={{
                display: 'flex',
                flexDirection: 'column',
                minWidth: 300,
                height: 400,
              }}
            >
              <Box
                display="flex"
                justifyContent="space-evenly"
                alignItems="center"
              >
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  {game.date}
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.primary"
                  gutterBottom
                >
                  {game.status}
                </Typography>
              </Box>
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                rowGap="1em"
                padding="1em 1.5em"
              >
                <Box>
                  <Typography
                    variant="subtitle2"
                    color="text.secondary"
                    gutterBottom
                  >
                    Home
                  </Typography>
                  <Typography variant="h6" color="text.primary" gutterBottom>
                    {game.home_team.fullName}
                  </Typography>
                  <Typography variant="h3" gutterBottom>
                    {game.home_team.score}
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    variant="subtitle2"
                    color="text.secondary"
                    gutterBottom
                  >
                    Away
                  </Typography>
                  <Typography variant="h6" color="text.primary" gutterBottom>
                    {game.visitor_team.fullName}
                  </Typography>
                  <Typography variant="h3" gutterBottom>
                    {game.home_team.score}
                  </Typography>
                </Box>
              </Box>
            </CardContent>
            <CardActions sx={{ justifyContent: 'center' }}>
              <Button size="small">View Game</Button>
            </CardActions>
          </Card>
        </div>
      ))}
    </CardCarousel>
  )
}
