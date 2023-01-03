import { forwardRef, PropsWithChildren, useState } from 'react'

import { ArrowButtonPrimitive } from './primitive'

import { useTheme } from '@mui/material/styles'

import { Box, LinearProgress, Typography } from '@mui/material'
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material'

import Carousel from 'react-multi-carousel'

import type { CarouselProps } from 'react-multi-carousel'

import type { ArrowButtonProps } from './primitive'

export type CardCarouselProps = PropsWithChildren<
  Omit<CarouselProps, 'responsive'> & {
    autoplay?: boolean
    totalItems: number
    show: number
    title: React.ReactNode
    titlePosition?: 'left' | 'center'
  }
>

const MaterialArrowButton = forwardRef<HTMLButtonElement, ArrowButtonProps>(
  ({ onClick, direction, ...props }, ref) => (
    <ArrowButtonPrimitive
      ref={ref}
      direction={direction}
      size="small"
      variant="text"
      onClick={() => onClick()}
    >
      {direction === 'right' ? (
        <KeyboardArrowRight fontSize="large" color="primary" />
      ) : (
        <KeyboardArrowLeft fontSize="large" color="primary" />
      )}
    </ArrowButtonPrimitive>
  )
)

export function CardCarousel({
  autoplay = false,
  children,
  totalItems,
  show,
  title,
  titlePosition = 'left',
  ...props
}: CardCarouselProps) {
  const theme = useTheme()

  const calculateProgress = (step: number) => {
    let percentage = 0

    if (step === 0) {
      // set initial progress
      percentage = (100 * show) / totalItems
    } else {
      const shownStep = step + show
      percentage = (100 * shownStep) / totalItems
    }

    return percentage > 100 ? 100 : percentage
  }

  const [progress, setLinearProgress] = useState(calculateProgress(0))

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: show,
      slidesToSlide: show, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: show - 2,
      slidesToSlide: show - 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  }

  return (
    <Box paddingBottom="2rem">
      <Typography
        align={titlePosition}
        variant="h2"
        sx={{ padding: '1rem', letterSpacing: '1.5px' }}
      >
        {title}
      </Typography>
      <Carousel
        swipeable
        ssr
        keyBoardControl
        afterChange={(_, { currentSlide }) => {
          setLinearProgress(calculateProgress(currentSlide))
        }}
        autoPlay={autoplay}
        autoPlaySpeed={1000}
        containerClass="carousel-container"
        customRightArrow={<MaterialArrowButton direction="right" />}
        customLeftArrow={<MaterialArrowButton direction="left" />}
        removeArrowOnDeviceType={['tablet', 'mobile']}
        responsive={responsive}
        rtl={theme.direction === 'rtl'}
        itemClass="carousel-item"
        {...props}
      >
        {children}
      </Carousel>
      <Box maxWidth={400} margin="1.5em auto">
        <LinearProgress variant="determinate" value={progress} />
      </Box>
    </Box>
  )
}
