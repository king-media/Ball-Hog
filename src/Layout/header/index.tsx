import { Box, Container } from '@mui/material'

export const Header = (props: any) => (
  <>
    <Box className="placeholder-header" padding="4rem">
      <h1>HEADER</h1>
    </Box>
    <Container
      maxWidth="xl"
      sx={{ padding: 0 }}
      className="placeholder-navigation"
    >
      <h1>NAVIGATION</h1>
    </Container>
  </>
)
