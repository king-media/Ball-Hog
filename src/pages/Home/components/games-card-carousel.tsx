import {
  Card,
  CardContent,
  Box,
  Typography,
  CardActions,
  Button,
  useTheme,
} from '@mui/material'

import { CardCarousel } from '~/components/card-carousel'

import { useNavigate, useNavigation } from '@remix-run/react'

import {
  formatGameDate,
  formatGameTime,
  isTime,
  isGameLive,
} from '~/utilities/date-helpers'
import { displayDateFormat } from '~/utilities/constants/date-constants'

import type { CardCarouselProps } from '~/components/card-carousel'

import type { HomeLoaderData } from '~/pages/Home/loader'
import { GamesSkeleton } from '~/pages/Home/components/GamesSkeleton'

type GamesCardCarouselProps = Omit<
  CardCarouselProps,
  'totalItems' | 'children' | 'show' | 'responsive'
> & {
  games: HomeLoaderData['games']
}

export const GamesCardCarousel = ({
  games,
  ...props
}: GamesCardCarouselProps) => {
  const navigate = useNavigate()
  const navigation = useNavigation()

  const theme = useTheme()
  const breakpoints = theme.breakpoints.values

  const show = 4
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: breakpoints.md },
      items: show,
      slidesToSlide: show, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: breakpoints.md, min: breakpoints.xs },
      items: show - 2,
      slidesToSlide: show - 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: breakpoints.xs, min: 0 },
      items: 1,
    },
  }

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
    <CardCarousel
      totalItems={games.length}
      show={show}
      responsive={responsive}
      {...props}
    >
      {navigation.state === 'loading' ? (
        <GamesSkeleton
          responsive={responsive}
          deviceType={String(props.deviceType)}
        />
      ) : (
        sortedGames.map((game) => {
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
                      <Typography
                        variant="h6"
                        color="text.primary"
                        gutterBottom
                      >
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
                      <Typography
                        variant="h6"
                        color="text.primary"
                        gutterBottom
                      >
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
        })
      )}
    </CardCarousel>
  )
}
