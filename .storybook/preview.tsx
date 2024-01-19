/** @type { import('@storybook/react').Preview } */

// .storybook/preview.js

import  {ThemesExport} from '../src/application/config/theme'

import '@fontsource/silkscreen/400.css';

import { Provider } from "react-redux";
import store from "../src/application/redux/store";
import { Preview } from '@storybook/react';
import React from 'react';


const preview: Preview = {
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
  decorators: [
    (Story) => (

      <Provider store={store}>
        <Story />
      </Provider>
    )
  ],
};


export default preview;
