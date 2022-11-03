/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */

import { PropsWithChildren, useState } from 'react'
import { useTheme } from '@mui/material/styles'

import { LinearProgress } from '@mui/material'
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material'

import Carousel from 'react-multi-carousel'

import type { CarouselProps } from 'react-multi-carousel'

export type CardCarouselProps = PropsWithChildren<
  Omit<CarouselProps, 'responsive'> & {
    autoplay?: boolean
    totalItems: number
    show: number
  }
>

export function CardCarousel({
  autoplay = false,
  children,
  totalItems,
  show,
  ...props
}: CardCarouselProps) {
  const theme = useTheme()

  const [activeStep, setActiveStep] = useState(0)

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

  const handleStepChange = (step: number) => {
    setActiveStep(step / totalItems)
  }

  return (
    <>
      <Carousel
        swipeable
        ssr
        keyBoardControl
        afterChange={(_, { currentSlide }) => {
          handleStepChange(currentSlide)
        }}
        autoPlay={autoplay}
        autoPlaySpeed={1000}
        containerClass="carousel-container"
        removeArrowOnDeviceType={['tablet', 'mobile']}
        responsive={responsive}
        rtl={theme.direction === 'rtl'}
        itemClass="carousel-item"
        {...props}
      >
        {children}
      </Carousel>
      <LinearProgress variant="determinate" value={50} />
    </>
  )
}
