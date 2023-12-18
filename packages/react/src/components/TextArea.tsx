import { ComponentProps } from 'react'
import { styled } from '../styles'

export const TextArea = styled('textarea', {
  backgroundColor: '$gray900',
  borderRadius: '$sm',
  fontFamily: '$default',
  fontSize: '$sm',
  color: '$white',
  padding: '$3 $4',
  fontWeight: 'regular',
  resize: 'vertical',
  minHeight: 80,
  boxSizing: 'border-box',
  border: '2px solid $gray900',
  transition: 'all 0.2s ease-in-out',

  '&:focus-within': {
    outline: 0,
    borderColor: '$ignite300',
  },

  '&:disabled': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },

  '&::placeholder': {
    color: '$gray400',
  },
})

export type TextAreaProps = ComponentProps<typeof TextArea>

TextArea.displayName = 'TextArea'
