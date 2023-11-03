/** @type { import('@storybook/react').Preview } */

// .storybook/preview.js

import  {ThemesExport} from '../src/application/config/theme'

const theme = ThemesExport.DefaultTheme;

const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    chakra: { theme },
  },
};

export default preview;
