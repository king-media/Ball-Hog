import { Box, Typography, useTheme } from '@mui/material'
import { PropsWithChildren } from 'react'

type ErrorContainerProps = PropsWithChildren & {
  fill?: boolean
  title: string
  message: string
}

export function ErrorContainer({
  children,
  fill,
  title,
  message,
}: ErrorContainerProps) {
  const theme = useTheme()

  const errorBorderCss = {
    border: `4px solid ${theme.palette.error.light}`,
  }

  const errorBackgroundCss = {
    backgroundColor: theme.palette.error.light,
  }

  return (
    <Box
      display="flex"
      flexDirection="column"
      sx={fill ? errorBackgroundCss : errorBorderCss}
      padding="5em"
    >
      <Typography
        variant="h2"
        textAlign="center"
        fontWeight={600}
        color={fill ? theme.palette.error.dark : theme.palette.error.main}
      >
        {title.toUpperCase()}
      </Typography>
      <Typography variant="h5" textAlign="center" paddingTop="2em">
        {message}
      </Typography>
      {children}
    </Box>
  )
}
