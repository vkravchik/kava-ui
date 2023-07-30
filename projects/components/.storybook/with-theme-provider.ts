import { StoryContext } from '@storybook/angular';
import { ThemeService } from '../src/lib/theme/theme.service';

export const withThemeProvider = (storyFn: Function, context: StoryContext) => {
    const themeService = new ThemeService();

    const theme = context.globals['theme'] || localStorage.getItem('theme');

    if (theme === 'dark') {
        themeService.setDarkTheme();
    } else {
        themeService.setLightTheme();
    }

    return storyFn(context);
}
