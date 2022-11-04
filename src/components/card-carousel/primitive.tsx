import { Button } from '@mui/material'
import { styled } from '@mui/material/styles'

export type ArrowButtonProps = typeof Button & {
  direction: 'left' | 'right'
  onClick: any
}

export const ArrowButtonPrimitive = styled(Button)(
  ({ direction }: ArrowButtonProps) => `
    position: absolute;
    bottom: 0;
    ${[direction]}: -1px;
    padding: 6px 2px;
    border-radius: 999px;
`
)
