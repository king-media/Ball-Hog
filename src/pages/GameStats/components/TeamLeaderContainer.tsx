import { useTheme } from '@mui/material/styles'
import { Box, Typography } from '@mui/material'

import { LeadingStatsData } from '~/utilities/api/types'
export function TeamLeaderContainer({
  leadingStats,
  teamType,
}: {
  leadingStats?: LeadingStatsData
  teamType: 'Home' | 'Away'
}) {
  const theme = useTheme()

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      rowGap="1rem"
      className="team-lead"
    >
      <Typography variant="h6">{teamType}</Typography>
      <Typography
        sx={{
          typography: 'h3',
          [theme.breakpoints.down('sm')]: {
            typography: 'h5',
          },
        }}
      >
        {leadingStats?.team.full_name}
      </Typography>
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
