import { Box, Typography } from '@mui/material'
import { StatsData, TeamStats } from 'utilities/api/types'

export function TeamStatsContainer({ teamStats }: { teamStats?: TeamStats }) {
  const sortPlayerStats = (stats: StatsData) => {
    const mainStats = Object.keys(stats).filter((key) =>
      key.match(/ast|pts|reb/)
    )
    const remainingStats = Object.keys(stats).filter(
      (key) => !key.match(/ast|pts|reb/)
    )

    return [...mainStats, ...remainingStats].filter(
      (key) => !key.match(/Id|id/) && !key.match(/game|player|team/)
    )
  }

  const renderStat = (stat: string) => {
    const numberStat = Number.parseFloat(stat)

    if (numberStat) {
      if (numberStat % 1 != 0) {
        return `${Math.round(numberStat * 100 * 100) / 100}%`
      }

      return numberStat
    }

    return stat
  }

  return (
    <Box display="flex" flexDirection="column" className="team-stats-container">
      <Typography variant="h6" padding="2rem">
        {teamStats?.leadingStats?.team.name}
      </Typography>
      <Box
        display="flex"
        flexDirection="column"
        className="team-1-stats"
        alignItems="start"
        rowGap="1.5rem"
        width="100%"
      >
        {teamStats?.stats.map((playerStats) => (
          <Box
            key={playerStats.player.id}
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
              {playerStats.player.full_name} | {playerStats.player.position}
            </Typography>
            <Box
              display="flex"
              className="stat-row"
              columnGap="4rem"
              flexShrink="0"
            >
              {sortPlayerStats(playerStats).map((statName) => (
                <Box key={statName} display="flex" flexDirection="column">
                  <Typography variant="subtitle2" paddingBottom="0.5rem">
                    {statName.toUpperCase()}
                  </Typography>
                  <Typography variant="body1">
                    {renderStat(playerStats[statName])}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  )
}
