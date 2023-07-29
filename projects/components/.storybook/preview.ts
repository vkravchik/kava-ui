import type { Preview, StoryContext, StoryFn } from '@storybook/angular';
import { setCompodocJson } from "@storybook/addon-docs/angular";
import docJson from "../documentation.json";
import { ThemeService } from '../src/lib/theme/theme.service';

setCompodocJson(docJson);

const withThemeProvider = (story: Function, context: StoryContext) => {
  const themeService = new ThemeService();

  if (context.globals['theme'] === 'dark') {
    themeService.setDarkTheme();
  } else {
    themeService.setLightTheme();
  }

  return story();
}

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
        items: ['light', 'dark'],
        // Change title based on selected value
        dynamicTitle: true,
      },
    },
  },
  decorators: [
    withThemeProvider
  ],
  parameters: {
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
