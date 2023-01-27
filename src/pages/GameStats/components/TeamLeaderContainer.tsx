import { Box, Typography } from '@mui/material'
import { LeadingStatsData } from 'utilities/api/types'

export function TeamLeaderContainer({
  leadingStats,
}: {
  leadingStats?: LeadingStatsData
}) {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      rowGap="1rem"
      className="team-lead"
    >
      <Typography variant="h3">{leadingStats?.team.full_name}</Typography>
      <Typography variant="subtitle1">Leading Scorer</Typography>
      <Typography variant="h5">{leadingStats?.player.full_name}</Typography>
      <Box display="flex" columnGap="1.5rem">
        <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
          <span>
            <strong className="stat-title">Points:</strong>
            {leadingStats?.pts}
          </span>
        </Typography>
        <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
          <span>
            <strong className="stat-title">Rebounds:</strong>
            {leadingStats?.reb}
          </span>
        </Typography>
        <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
          <span>
            <strong className="stat-title">Assists:</strong>
            {leadingStats?.ast}
          </span>
        </Typography>
      </Box>
    </Box>
  )
}
