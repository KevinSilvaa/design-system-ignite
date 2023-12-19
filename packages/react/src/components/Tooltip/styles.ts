import { styled, keyframes } from '../../styles'
import * as Tooltip from '@radix-ui/react-tooltip'

const slideIn = keyframes({
  from: {
    opacity: 0,
    transform: 'translateY(-5px)',
  },
  to: {
    opacity: 1,
    transform: 'translateY(0)',
  },
})

const slideOut = keyframes({
  from: {
    opacity: 1,
    transform: 'translateY(0)',
  },
  to: {
    opacity: 0,
    transform: 'translateY(-5px)',
  },
})

const slideInTop = keyframes({
  from: {
    opacity: 0,
    transform: 'translateY(-5px)',
  },
  to: {
    opacity: 1,
    transform: 'translateY(0)',
  },
})

const slideOutTop = keyframes({
  from: {
    opacity: 1,
    transform: 'translateY(0)',
  },
  to: {
    opacity: 0,
    transform: 'translateY(-5px)',
  },
})

export const TooltipContent = styled(Tooltip.Content, {
  padding: '$3 $4',
  background: '$gray900',
  color: '$gray100',
  fontFamily: '$default',
  fontSize: '$sm',
  fontWeight: '$medium',
  borderRadius: '$sm',
  lineHeight: '$short',
  userSelect: 'none',

  '&[data-state="delayed-open"][data-side="bottom"]': {
    animation: `${slideIn} 200ms ease-in`,
  },

  '&[data-state="closed"][data-side="bottom"]': {
    animation: `${slideOut} 200ms ease-out`,
  },

  '&[data-state="delayed-open"][data-side="top"]': {
    animation: `${slideInTop} 200ms ease-in`,
  },

  '&[data-state="closed"][data-side="top"]': {
    animation: `${slideOutTop} 200ms ease-out`,
  },
})

export const TooltipArrow = styled(Tooltip.Arrow, {
  fill: '$gray900',
})
