import * as TooltipUI from '@radix-ui/react-tooltip'
import { ComponentProps } from 'react'
import { TooltipContent, TooltipArrow } from './styles'

export interface TooltipProps extends ComponentProps<typeof TooltipUI.Root> {
  content: string
}

export function Tooltip({ children, content, ...props }: TooltipProps) {
  return (
    <TooltipUI.Provider>
      <TooltipUI.Root {...props}>
        <TooltipUI.Trigger asChild>{children}</TooltipUI.Trigger>
        <TooltipUI.Portal>
          <TooltipContent sideOffset={4}>
            {content}
            <TooltipArrow />
          </TooltipContent>
        </TooltipUI.Portal>
      </TooltipUI.Root>
    </TooltipUI.Provider>
  )
}

Tooltip.displayName = 'Tooltip'
