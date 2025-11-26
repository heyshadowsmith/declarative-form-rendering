/** @type { import('@storybook/web-components-vite').StorybookConfig } */
const config = {
  stories: ["../src/**/stories.ts"],

  framework: {
    name: "@storybook/web-components-vite",
  },

  addons: ["@storybook/addon-vitest"],
};
export default config;
