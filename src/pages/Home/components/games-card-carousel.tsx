import {
  Card,
  CardContent,
  Box,
  Typography,
  CardActions,
  Button,
} from '@mui/material'

import { CardCarousel } from '~/components/card-carousel'

import { useNavigate } from '@remix-run/react'

import {
  formatGameDate,
  formatGameTime,
  isTime,
  isGameLive,
} from '~/utilities/date-helpers'
import { displayDateFormat } from '~/utilities/constants/date-constants'

import type { CardCarouselProps } from '~/components/card-carousel'

import type { HomeLoaderData } from '~/pages/Home/loader'

type GamesCardCarouselProps = Omit<
  CardCarouselProps,
  'totalItems' | 'children' | 'show'
> & {
  games: HomeLoaderData['games']
}

export const GamesCardCarousel = ({
  games,
  ...props
}: GamesCardCarouselProps) => {
  const navigate = useNavigate()

  const sortedGames = games.sort((gameOne, gameTwo) => {
    const gameOneLive = isGameLive(gameOne)
    const gameTwoLive = isGameLive(gameTwo)

    const gameOneTime = formatGameDate(
      gameOne.date,
      gameOneLive ? '' : gameOne.status
    )
    const gameTwoTime = formatGameDate(
      gameTwo.date,
      gameTwoLive ? '' : gameTwo.status
    )

    if (gameOneTime > gameTwoTime) {
      return 1
    }

    if (gameOneTime < gameTwoTime) {
      return -1
    }

    return 0
  })

  return (
    <CardCarousel totalItems={games.length} show={4} {...props}>
      {sortedGames.map((game) => {
        const time = formatGameTime(game.time)
        const date = formatGameDate(game.date, '', displayDateFormat)

        return (
          <div
            key={game.id}
            className="game-card"
            onClick={() => navigate(`/game-stats/${game.id}`)}
          >
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
                    {date}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="text.primary"
                    gutterBottom
                  >
                    {game.status} {isTime(time) && `- ${time}`}
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
                      {game.home_team.full_name}
                    </Typography>
                    <Typography variant="h3" gutterBottom>
                      {game.home_team_score}
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
                      {game.visitor_team.full_name}
                    </Typography>
                    <Typography variant="h3" gutterBottom>
                      {game.visitor_team_score}
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
              <CardActions sx={{ justifyContent: 'center' }}>
                <Button size="small">View Game</Button>
              </CardActions>
            </Card>
          </div>
        )
      })}
    </CardCarousel>
  )
}
