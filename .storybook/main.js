/** @type { import('@storybook/react-vite').StorybookConfig } */
import { mergeConfig } from 'vite';


const config = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  staticDirs: ["../public"],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials',
    '@chakra-ui/storybook-addon'
  ],
  features: {
    emotionAlias: false,
  },
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  core: {
    builder: '@storybook/builder-vite',
  },
  viteFinal: async (config) => {
     // Merge custom configuration into the default config
     return mergeConfig(config, {
      // Add dependencies to pre-optimization
      optimizeDeps: {
        include: ['storybook-dark-mode'],
      },
    });
  }
};
export default config;
