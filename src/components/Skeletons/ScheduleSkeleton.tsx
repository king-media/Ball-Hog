import { Box, Skeleton, useTheme } from '@mui/material'

export function ScheduledSkeleton() {
  const theme = useTheme()

  function TeamLeaderSkeleton() {
    return (
      <Box
        display="flex"
        flexDirection="column"
        className="game-container"
        paddingTop="1rem"
        alignItems="center"
      >
        <Skeleton
          variant="rectangular"
          width="50px"
          sx={{ marginBottom: '1rem' }}
        />
        <Skeleton
          variant="rectangular"
          width="315px"
          height="55px"
          sx={{ marginBottom: '0.5rem' }}
        />
        <Skeleton variant="text" width="20%" />
        <Skeleton variant="rectangular" width="50%" />
        <Box
          display="flex"
          paddingTop="1rem"
          alignItems="center"
          justifyContent="space-evenly"
          width="100%"
        >
          <Skeleton variant="rectangular" width="25%" />
          <Skeleton variant="rectangular" width="25%" />
          <Skeleton variant="rectangular" width="25%" />
        </Box>
      </Box>
    )
  }

  return (
    <Box>
      <Box
        display="flex"
        justifyContent="space-evenly"
        sx={{
          [theme.breakpoints.down('lg')]: {
            flexDirection: 'column',
            rowGap: '1rem',
          },
        }}
      >
        <TeamLeaderSkeleton />
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          rowGap="0.5rem"
          paddingTop="2rem"
        >
          <Skeleton variant="rectangular" width="125px" />
          <Skeleton variant="circular" width="30px" height="30px" />
          <Skeleton
            variant="rectangular"
            width="50px"
            sx={{ marginBottom: '1.5rem' }}
          />
          <Skeleton variant="rectangular" width="75%" />
        </Box>
        <TeamLeaderSkeleton />
      </Box>
      <Skeleton
        variant="rectangular"
        width="100%"
        height="500px"
        sx={{ margin: '5rem 0' }}
      />
    </Box>
  )
}
