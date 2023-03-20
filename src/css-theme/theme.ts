import { createTheme } from '@mui/material/styles'
import { red } from '@mui/material/colors'

// Create a theme instance.
export const theme = createTheme({
  palette: {
    primary: {
      main: '#ce3f66',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
      light: red.A100,
      dark: red.A700,
    },
  },
  breakpoints: {
    values: {
      xs: 320,
      sm: 768,
      md: 1024,
      lg: 1200,
      xl: 1536,
    },
  },
})

export default theme
