import type { Meta, StoryObj } from "@storybook/html";
import ".";

const meta: Meta = {
    title: "Molecules/Number Question",
    component: "dfr-number-question",
    argTypes: {
        label: { control: "text" },
        description: { control: "text" },
        placeholder: { control: "text" },
        required: { control: "boolean" },
        disabled: { control: "boolean" },
        value: { control: "number" },
        min: { control: "number" },
        max: { control: "number" },
    },
};

export default meta;
type Story = StoryObj;

const createRender = (args: any) => {
    const question = {
        label: args.label,
        description: args.description,
        placeholder: args.placeholder,
        required: args.required,
        disabled: args.disabled,
        value: args.value,
        min: args.min,
        max: args.max,
    };

    const questionJson = JSON.stringify(question).replace(/"/g, "&quot;");

    return `
    <dfr-number-question
      question="${questionJson}"
    ></dfr-number-question>
  `;
};

export const Default: Story = {
    args: {
        label: "Age",
        description: "Enter your age",
        placeholder: "25",
        required: false,
        disabled: false,
        value: "",
    },
    render: createRender,
};

export const Required: Story = {
    args: {
        label: "Quantity",
        description: "How many items?",
        placeholder: "1",
        required: true,
        disabled: false,
        value: "",
    },
    render: createRender,
};

export const WithConstraints: Story = {
    args: {
        label: "Rating",
        description: "Rate from 1 to 10",
        placeholder: "5",
        required: true,
        disabled: false,
        value: "",
        min: 1,
        max: 10,
    },
    render: createRender,
};

export const Disabled: Story = {
    args: {
        label: "Fixed Value",
        description: "This value cannot be changed",
        placeholder: "100",
        required: false,
        disabled: true,
        value: 100,
    },
    render: createRender,
};
