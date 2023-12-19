import * as ToastUI from '@radix-ui/react-toast'
import { ComponentProps } from 'react'
import {
  ToastContainer,
  ToastTitle,
  ToastDescription,
  ToastCloseButton,
  ToastViewport,
} from './styles'
import { X } from 'phosphor-react'

export interface ToastProps extends ComponentProps<typeof ToastContainer> {
  title: string
  description: string
  open: boolean
  setOpen: (open: boolean) => void
}

export function Toast({
  title,
  description,
  open,
  setOpen,
  ...props
}: ToastProps) {
  return (
    <ToastUI.Provider swipeDirection="right" duration={2000}>
      <ToastContainer open={open} {...props}>
        <ToastTitle as="h2">{title}</ToastTitle>

        <ToastDescription as="span">{description}</ToastDescription>

        <ToastCloseButton onClick={() => setOpen(!open)}>
          <X size={20} />
        </ToastCloseButton>
      </ToastContainer>

      <ToastViewport />
    </ToastUI.Provider>
  )
}

Toast.displayName = 'Toast'
