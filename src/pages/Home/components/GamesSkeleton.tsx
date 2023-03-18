import Box from '@mui/material/Box'
import Skeleton from '@mui/material/Skeleton'

import { CardCarouselProps } from '~/components/card-carousel'

type GameSkeletonProps = {
  responsive: CardCarouselProps['responsive']
  deviceType: string
}

export function GamesSkeleton({ responsive, deviceType }: GameSkeletonProps) {
  const itemsCount = responsive[deviceType].items

  return (
    <Box display="flex" columnGap="0.5em">
      {Array.from(new Array(itemsCount)).map((_, idx) => (
        <Box
          key={`item-${idx}`}
          display="flex"
          flexDirection="column"
          padding="1em 1.5em"
        >
          <Box display="flex" justifyContent="space-evenly">
            <Skeleton width="25%" sx={{ padding: '0.2em' }} />
            <Skeleton width="25%" sx={{ padding: '0.2em' }} />
          </Box>
          <Box padding="1em 0">
            <Skeleton
              variant="rectangular"
              height={400}
              sx={{ minWidth: 300 }}
            />
          </Box>

          <Skeleton width="30%" sx={{ alignSelf: 'center' }} />
        </Box>
      ))}
    </Box>
  )
}
