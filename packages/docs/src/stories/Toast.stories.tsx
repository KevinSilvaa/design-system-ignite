import { Meta, StoryObj } from '@storybook/react'
import { Box, Button, Toast, ToastProps } from '@ignite-ui-kevinsilvaa/react'
import { useState } from 'react'

export default {
  title: 'Data display/Toast',
  component: Toast,
  args: {
    title: 'Toast dispatch',
    description: 'The message has been dispatch',
    open: true,
    type: 'normal',
  },
  argTypes: {
    open: {
      control: {
        type: 'boolean',
      },
    },
  },
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}

export const Success: StoryObj<ToastProps> = {
  args: {
    type: 'success',
  },
}

export const Error: StoryObj<ToastProps> = {
  args: {
    type: 'error',
  },
}

export const ExampleToast: StoryObj<ToastProps> = {
  argTypes: {
    open: {
      table: {
        disable: true,
      },
    },
    type: {
      table: {
        disable: true,
      },
    },
  },

  decorators: [
    (Story) => {
      const [open, setOpen] = useState(false)

      return (
        <Box>
          <Button onClick={() => setOpen((state) => !state)}>
            Click to open/close toast
          </Button>

          {Story({
            args: {
              title: 'Toast dispatch',
              description: 'The message has been dispatch',
              open,
              setOpen,
            },
          })}
        </Box>
      )
    },
  ],
}
