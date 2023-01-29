import {
  Card,
  CardContent,
  Box,
  Typography,
  CardActions,
  Button,
} from '@mui/material'

import { CardCarousel } from '~/components/card-carousel'

import type { CardCarouselProps } from '~/components/card-carousel'

import type { GamesDTO } from 'utilities/api/dtos'
import { useNavigate } from '@remix-run/react'
import { isTime } from 'utilities/api/service'

type GamesCardCarouselProps = Omit<
  CardCarouselProps,
  'totalItems' | 'children' | 'show'
> & {
  games: GamesDTO[]
}

export const GamesCardCarousel = ({
  games,
  ...props
}: GamesCardCarouselProps) => {
  if (games.length === 0) return null

  const navigate = useNavigate()

  return (
    <CardCarousel totalItems={games.length} show={4} {...props}>
      {games.map((game) => (
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
                  {game.date}
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.primary"
                  gutterBottom
                >
                  {game.status} {isTime(game.time) && `- ${game.time}`}
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
                    {game.visitor_team.score}
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
