import type { Meta, StoryObj } from "@storybook/html";
import ".";

const meta: Meta = {
    title: "Atoms/Label",
    component: "dfr-label",
    argTypes: {
        label: { control: "text" },
        htmlFor: { control: "text" },
        required: { control: "boolean" },
    },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
    args: {
        label: "First Name",
        htmlFor: "input-1",
        required: false,
    },
    render: (args) => `
    <dfr-label
      label="${args.label}"
      htmlFor="${args.htmlFor}"
      ${args.required ? "required" : ""}
    ></dfr-label>
  `,
};

export const Required: Story = {
    args: {
        label: "Email Address",
        htmlFor: "input-2",
        required: true,
    },
    render: (args) => `
    <dfr-label
      label="${args.label}"
      htmlFor="${args.htmlFor}"
      ${args.required ? "required" : ""}
    ></dfr-label>
  `,
};
