/** @type { import('@storybook/react').Preview } */
import { themes } from '@storybook/theming'

const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    docs: {
      theme: themes.dark,
    },
    options: {
      storySort: {
        order: ['Tokens', 'Data display', 'Surfaces', 'Typography', 'Form'],
        locales: 'en-US',
      },
    },
  },
};

export default preview;
