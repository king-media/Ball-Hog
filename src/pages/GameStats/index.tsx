import { useLoaderData, useRevalidator } from '@remix-run/react'
import { useEffect } from 'react'
import { GameStatsLoaderData } from './loader'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

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
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        columnGap="1.5rem"
      >
        <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
          {gameStats?.date}
        </Typography>
        <Typography variant="subtitle1" color="text.primary" gutterBottom>
          {gameStats?.status}
        </Typography>
      </Box>
      <Box
        display="flex"
        justifyContent="space-evenly"
        className="game-container"
        paddingTop="1rem"
        alignItems="center"
      >
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          rowGap="1rem"
          className="home-team-lead"
        >
          <Typography variant="h3">
            {homeTeamStats?.leadingStats?.team.full_name}
          </Typography>
          <Typography variant="subtitle1">Leading Scorer</Typography>
          <Typography variant="h5">
            {homeTeamStats?.leadingStats?.player.full_name}
          </Typography>
          <Box display="flex" columnGap="1.5rem">
            <Typography
              sx={{ fontSize: 16 }}
              color="text.secondary"
              gutterBottom
            >
              <span>
                <strong className="stat-title">Points:</strong>
                {homeTeamStats?.leadingStats?.pts}
              </span>
            </Typography>
            <Typography
              sx={{ fontSize: 16 }}
              color="text.secondary"
              gutterBottom
            >
              <span>
                <strong className="stat-title">Rebounds:</strong>
                {homeTeamStats?.leadingStats?.reb}
              </span>
            </Typography>
            <Typography
              sx={{ fontSize: 16 }}
              color="text.secondary"
              gutterBottom
            >
              <span>
                <strong className="stat-title">Assists:</strong>
                {homeTeamStats?.leadingStats?.ast}
              </span>
            </Typography>
          </Box>
        </Box>
        <Typography>@</Typography>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          rowGap="1rem"
          className="visitor-team-lead"
        >
          <Typography variant="h3">
            {visitorTeamStats?.leadingStats?.team.full_name}
          </Typography>
          <Typography variant="subtitle1">Leading Scorer</Typography>
          <Typography variant="h5">
            {visitorTeamStats?.leadingStats?.player.full_name}
          </Typography>
          <Box display="flex" columnGap="1.5rem">
            <Typography
              sx={{ fontSize: 16 }}
              color="text.secondary"
              gutterBottom
            >
              <span>
                <strong className="stat-title">Points:</strong>
                {visitorTeamStats?.leadingStats?.pts}
              </span>
            </Typography>
            <Typography
              sx={{ fontSize: 16 }}
              color="text.secondary"
              gutterBottom
            >
              <span>
                <strong className="stat-title">Rebounds:</strong>
                {visitorTeamStats?.leadingStats?.reb}
              </span>
            </Typography>
            <Typography
              sx={{ fontSize: 16 }}
              color="text.secondary"
              gutterBottom
            >
              <span>
                <strong className="stat-title">Assists:</strong>
                {visitorTeamStats?.leadingStats?.ast}
              </span>
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        className="team-stats-container"
      >
        <Typography variant="h6" padding="2rem">
          {homeTeamStats?.leadingStats?.team.name}
        </Typography>
        <Box
          display="flex"
          flexDirection="column"
          className="team-1-stats"
          alignItems="start"
          rowGap="1.5rem"
          width="100%"
        >
          {homeTeamStats?.stats.map((stat) => (
            <Box
              key={stat.player.id}
              display="flex"
              padding="0.5rem"
              columnGap="2rem"
              borderTop="1px solid black"
              borderBottom="1px solid black"
              width="100%"
              whiteSpace="nowrap"
              overflow="hidden"
            >
              <Typography
                sx={{ fontSize: 16 }}
                color="text.secondary"
                gutterBottom
              >
                {stat.player.full_name} | {stat.player.position}
              </Typography>
              <Box
                display="flex"
                className="stat-row"
                columnGap="0.5rem"
                flexShrink="0"
              >
                {Object.keys(stat).map((statName) => {
                  if (
                    statName !== 'game' &&
                    statName !== 'player' &&
                    statName !== 'team' &&
                    !statName.match(/[Id|id]/)
                  ) {
                    return (
                      <span key={statName}>
                        {statName} - {stat[statName]}
                      </span>
                    )
                  }
                  return null
                })}
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        className="team-stats-container"
      >
        <Typography variant="h6" padding="2rem">
          {visitorTeamStats?.leadingStats?.team.name}
        </Typography>
        <Box
          display="flex"
          flexDirection="column"
          className="team-2-stats"
          alignItems="start"
          rowGap="1.5rem"
          width="100%"
        >
          {visitorTeamStats?.stats.map((stat) => (
            <Box
              key={stat.player.id}
              display="flex"
              padding="0.5rem"
              columnGap="2rem"
              borderTop="1px solid black"
              borderBottom="1px solid black"
              width="100%"
              whiteSpace="nowrap"
              overflow="hidden"
            >
              <Typography
                sx={{ fontSize: 16 }}
                color="text.secondary"
                gutterBottom
              >
                {stat.player.full_name} | {stat.player.position}
              </Typography>
              <Box
                display="flex"
                className="stat-row"
                columnGap="0.5rem"
                flexShrink="0"
              >
                {Object.keys(stat).map((statName) => {
                  if (
                    statName !== 'game' &&
                    statName !== 'player' &&
                    statName !== 'team' &&
                    !statName.match(/[Id|id]/)
                  ) {
                    return (
                      <span key={statName}>
                        {statName} - {stat[statName]}
                      </span>
                    )
                  }
                  return null
                })}
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  )
}
