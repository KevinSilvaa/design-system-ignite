import { Meta, StoryObj } from '@storybook/react'
import { Button, Tooltip, TooltipProps } from '@ignite-ui-kevinsilvaa/react'

export default {
  title: 'Data display/Tooltip',
  component: Tooltip,
  args: {
    content: '21 de Outubro - Indisponível',
    children: (
      <Button css={{ margin: '$10 0' }}>Selecione o dia da sua consulta</Button>
    ),
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
    delayDuration: {
      control: {
        type: 'number',
      },
    },
  },
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {}
