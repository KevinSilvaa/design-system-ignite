import { Meta, StoryObj } from '@storybook/react'
import { Box, BoxProps, Text } from '@ignite-ui-kevinsilvaa/react'

export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: <Text>Teste elemento box</Text>,
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
