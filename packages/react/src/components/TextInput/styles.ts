import { styled } from '../../styles'

export const TextInputContainer = styled('div', {
  display: 'flex',
  alignItems: 'baseline',
  padding: '$3 $4',
  backgroundColor: '$gray900',
  borderRadius: '$sm',
  fontFamily: '$default',
  fontSize: '$sm',
  fontWeight: '$regular',
  boxSizing: 'border-box',
  border: '2px solid $gray900',
  transition: 'all 0.2s ease-in-out',

  '&:focus-within': {
    borderColor: '$ignite300',
  },

  '&:has(input:disabled)': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },
})

export const Prefix = styled('span', {
  color: '$gray400',
})

export const Input = styled('input', {
  width: '100%',
  backgroundColor: 'transparent',
  color: '$white',
  border: 0,

  '&:focus': {
    outline: 0,
  },

  '&:disabled': {
    cursor: 'not-allowed',
  },

  '&::placeholder': {
    color: '$gray400',
  },
})