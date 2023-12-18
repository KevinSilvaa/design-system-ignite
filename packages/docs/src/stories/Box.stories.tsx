import { Meta, StoryObj } from '@storybook/react'
import { Box, BoxProps, Text } from '@ignite-ui/react'

export default {
  title: 'Surfaces/Box',
  component: Box,
  tags: ['autodocs'],
  args: {
    children: <Text>Teste elemento box</Text>,
  },
} as Meta<BoxProps>

export const Primaru: StoryObj<BoxProps> = {}
