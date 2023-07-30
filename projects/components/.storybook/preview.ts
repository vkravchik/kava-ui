import { setCompodocJson } from '@storybook/addon-docs/angular';
import type { Preview } from '@storybook/angular';
import docJson from '../documentation.json';
import { withThemeProvider } from './with-theme-provider';

setCompodocJson(docJson);

const preview: Preview = {
  globalTypes: {
    theme: {
      description: 'Global theme for components',
      defaultValue: 'light',
      toolbar: {
        // The label to show for this toolbar item
        title: 'Theme',
        icon: 'circlehollow',
        // Array of plain string values or MenuItem shape (see below)
        items: [{
          value: 'light',
          title: 'KaVa Light',
        }, {
          value: 'dark',
          title: 'KaVa Dark',
        }],
        // Change title based on selected value
        dynamicTitle: true,
      },
    },
  },
  decorators: [
    withThemeProvider
  ],
  parameters: {
    layout: 'centered',
    docs: {
      story: { inline: false }, // render the story in an iframe
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
