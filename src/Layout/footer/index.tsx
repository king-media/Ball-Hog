import { Box, Container } from '@mui/material'

export const Footer = (props: any) => (
  <>
    <Box className="placeholder-header" padding="4rem">
      <h1>FOOTER</h1>
      <Container
        maxWidth="xl"
        sx={{ padding: 0 }}
        className="placeholder-navigation"
      >
        <h1>FOOTER CONTENT</h1>
      </Container>
    </Box>
  </>
)
