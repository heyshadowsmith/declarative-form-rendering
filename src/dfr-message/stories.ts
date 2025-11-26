import type { Meta, StoryObj } from "@storybook/html";
import ".";

const meta: Meta = {
    title: "Atoms/Message",
    component: "dfr-message",
    argTypes: {
        message: { control: "text" },
    },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
    args: {
        message: "This is a helpful message.",
    },
    render: (args) => `
    <dfr-message message="${args.message}"></dfr-message>
  `,
};

export const Empty: Story = {
    args: {
        message: "",
    },
    render: (args) => `
    <dfr-message message="${args.message}"></dfr-message>
  `,
};
