import { NavLink, useSearchParams } from '@remix-run/react'
import { Box, Link as MuiLink } from '@mui/material'

export const Header = (props: any) => {
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
        >
          SCORES
        </MuiLink>
      </Box>
    </>
  )
}
