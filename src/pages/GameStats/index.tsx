import { useLoaderData, useRevalidator } from '@remix-run/react'
import { useEffect } from 'react'
import { GameStatsLoaderData } from './loader'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { TeamLeaderContainer } from './components/TeamLeaderContainer'
import { TeamStatsContainer } from './components/TeamStatsContainer'

export function GameStats() {
  const { gameStats, homeTeamStats, visitorTeamStats } =
    useLoaderData<GameStatsLoaderData>()
  const revalidator = useRevalidator()

  useEffect(() => {
    const refreshInterval = setInterval(() => {
      if (revalidator.state === 'idle') {
        revalidator.revalidate()
      }
    }, 60000)

    return () => clearInterval(refreshInterval)
  }, [])

  return (
    <Box display="flex" flexDirection="column" className="stats-wrapper">
      {gameStats ? (
        <Box>
          <Box
            display="flex"
            flexDirection="column"
            className="game-container"
            paddingTop="1rem"
            alignItems="center"
          >
            <Box
              display="flex"
              paddingTop="1rem"
              alignItems="center"
              justifyContent="space-evenly"
              width="100%"
            >
              <TeamLeaderContainer
                teamType="Home"
                leadingStats={homeTeamStats?.leadingStats}
              />
              <Box
                display="flex"
                flexDirection="column"
                className="game-container"
                paddingTop="1rem"
                alignItems="center"
              >
                <Typography
                  sx={{ fontSize: 16 }}
                  color="text.secondary"
                  gutterBottom
                >
                  {gameStats?.date}
                </Typography>
                <Typography>@</Typography>
                <Typography
                  variant="subtitle1"
                  color="text.primary"
                  gutterBottom
                >
                  {gameStats?.status} - {gameStats.time.split(' ').pop()}
                </Typography>
                <Typography
                  variant="h5"
                  color="text.primary"
                  paddingTop="1.5rem"
                  gutterBottom
                >
                  {gameStats?.home_team_score} - {gameStats.visitor_team_score}
                </Typography>
              </Box>
              <TeamLeaderContainer
                teamType="Away"
                leadingStats={visitorTeamStats?.leadingStats}
              />
            </Box>
          </Box>
          <TeamStatsContainer teamStats={homeTeamStats} />
          <TeamStatsContainer teamStats={visitorTeamStats} />
        </Box>
      ) : (
        <Box
          display="flex"
          flexDirection="column"
          rowGap="4rem"
          justifyContent="center"
          alignItems="center"
        >
          <Typography variant="h3">No Stats Available</Typography>
          <Typography variant="subtitle2" fontSize="16px">
            Wait for game to start...
          </Typography>
        </Box>
      )}
    </Box>
  )
}
