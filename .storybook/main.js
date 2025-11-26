/** @type { import('@storybook/web-components-vite').StorybookConfig } */
const config = {
  stories: ["../src/**/stories.ts"],

  framework: {
    name: "@storybook/web-components-vite",
  },

  addons: ["@storybook/addon-vitest"],

  managerHead: (head) => `
    ${head}
    <base href="/storybook/">
  `,

  async viteFinal(config) {
    config.base = "/storybook/";
    return config;
  },
};
export default config;
