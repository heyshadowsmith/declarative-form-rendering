/** @type { import('@storybook/web-components-vite').StorybookConfig } */
const config = {
  stories: ["../src/**/stories.ts"],

  framework: {
    name: "@storybook/web-components-vite",
  },

  addons: ["@storybook/addon-vitest"],

  async viteFinal(config) {
    config.base = "./";
    return config;
  },
};
export default config;
