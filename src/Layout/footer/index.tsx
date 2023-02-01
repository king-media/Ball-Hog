import { Box, Typography } from '@mui/material'
import dayjs from 'dayjs'

export const Footer = (props: any) => {
  let year = dayjs().year()

  return (
    <>
      <Box className="footer" padding="2rem">
        <Typography
          variant="caption"
          color="white"
        >{`@ ${year} Ball Hog - ReKara, Inc.`}</Typography>
      </Box>
    </>
  )
}
