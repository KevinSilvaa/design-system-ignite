import { styled, keyframes } from '../../styles'
import * as Toast from '@radix-ui/react-toast'

const slideIn = keyframes({
  from: {
    opacity: 0,
    transform: 'translateX(200px)',
  },
  to: {
    opacity: 1,
    transform: 'translateX(0)',
  },
})

const hideToast = keyframes({
  from: {
    opacity: 1,
  },
  to: {
    opacity: 0,
  },
})

export const ToastContainer = styled(Toast.Root, {
  padding: '$3 $5',
  backgroundColor: '$gray800',
  border: '1px solid $gray600',
  borderRadius: '$sm',
  display: 'flex',
  flexDirection: 'column',
  gap: '$1',
  fontFamily: '$default',
  lineHeight: '$base',
  position: 'relative',
  width: 360,
  transition: 'all 0.2s ease-in-out',

  '&:hover': {
    filter: 'brightness(0.9)',
  },

  '&[data-state="open"]': {
    animation: `${slideIn} 0.3s ease-in`,
  },

  '&[data-state="closed"]': {
    animation: `${hideToast} 0.2s ease-out`,
  },

  'h2, span': {
    display: '-webkit-box',
    '-webkit-box-orient': 'vertical',
    '-webkit-line-clamp': 1,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    marginRight: '$6',
  },

  variants: {
    type: {
      normal: {
        backgroundColor: '$gray800',
        border: '1px solid $gray600',

        h2: {
          color: '$white',
        },

        'span, svg': {
          color: '$gray200',
        },
      },

      success: {
        backgroundColor: '$ignite500',
        border: '1px solid $ignite300',

        h2: {
          color: '$white',
        },

        'span, svg': {
          color: '$gray100',
        },
      },

      error: {
        backgroundColor: '$red500',
        border: '1px solid $red300',

        h2: {
          color: '$white',
        },

        'span, svg': {
          color: '$gray100',
        },
      },
    },
  },

  defaultVariants: {
    type: 'normal',
  },
})

export const ToastTitle = styled(Toast.Title, {
  all: 'unset',
  color: '$white',
  fontSize: '$lg',
  fontWeight: 'bold',
})

export const ToastDescription = styled(Toast.Description, {
  color: '$gray200',
  fontSize: '$sm',
  fontWeight: 'regular',
})

export const ToastCloseButton = styled(Toast.Close, {
  all: 'unset',
  backgroundColor: 'transparent',
  color: '$gray200',
  position: 'absolute',
  width: 20,
  height: 20,
  top: '$4',
  right: '$4',
  cursor: 'pointer',
})

export const ToastViewport = styled(Toast.Viewport, {
  position: 'fixed',
  right: '$8',
  bottom: '$8',
})
