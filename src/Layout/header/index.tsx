import { NavLink, useSearchParams } from '@remix-run/react'

import { useTheme } from '@mui/material/styles'
import { Box, Link as MuiLink } from '@mui/material'

export const Header = (props: any) => {
  const theme = useTheme()

  const [searchParams] = useSearchParams()

  const startDate = searchParams.get('startDate')
  const endDate = searchParams.get('endDate')

  return (
    <>
      <Box className="header" display="flex" justifyContent="center">
        <img src="/assets/Ball-Hog-Header.png" />
      </Box>
      <Box
        display="flex"
        justifyContent="space-evenly"
        width="100%"
        className="navigation"
      >
        <MuiLink
          to={{
            pathname: '/',
            search:
              startDate && endDate
                ? `?startDate=${startDate}&endDate=${endDate}`
                : '',
          }}
          underline="none"
          variant="h6"
          color="lightgray"
          component={NavLink}
          sx={{
            typography: 'h6',
            [theme.breakpoints.down('md')]: {
              typography: 'subtitle2',
            },
          }}
        >
          SCORES
        </MuiLink>
      </Box>
    </>
  )
}
