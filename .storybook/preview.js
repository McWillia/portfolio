/** @type { import('@storybook/react').Preview } */

// .storybook/preview.js

import  {ThemesExport} from '../src/application/config/theme'

const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    chakra: { theme:ThemesExport.SunsetTheme },
  },
};

export default preview;
