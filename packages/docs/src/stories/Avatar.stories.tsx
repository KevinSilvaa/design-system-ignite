import { Meta, StoryObj } from '@storybook/react'
import { Avatar, AvatarProps } from '@ignite-ui-kevinsilvaa/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/KevinSilvaa.png',
    alt: 'Kevin Silvaa',
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
