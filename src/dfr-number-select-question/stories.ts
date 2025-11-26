import type { Meta, StoryObj } from "@storybook/html";
import ".";

const meta: Meta = {
    title: "Molecules/Number Select Question",
    component: "dfr-number-select-question",
    argTypes: {
        label: { control: "text" },
        description: { control: "text" },
        required: { control: "boolean" },
        disabled: { control: "boolean" },
        value: { control: "number" },
    },
};

export default meta;
type Story = StoryObj;

const createRender = (args: any) => {
    const question = {
        label: args.label,
        description: args.description,
        required: args.required,
        disabled: args.disabled,
        value: args.value,
        options: args.options || [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    };

    const questionJson = JSON.stringify(question).replace(/"/g, "&quot;");

    return `
    <dfr-number-select-question
      question="${questionJson}"
    ></dfr-number-select-question>
  `;
};

export const Default: Story = {
    args: {
        label: "Satisfaction",
        description: "Rate your satisfaction (1-10)",
        required: false,
        disabled: false,
        value: 5,
    },
    render: createRender,
};

export const Required: Story = {
    args: {
        label: "NPS Score",
        description: "How likely are you to recommend us?",
        required: true,
        disabled: false,
        value: 10,
    },
    render: createRender,
};

export const CustomRange: Story = {
    args: {
        label: "Difficulty",
        description: "Rate the difficulty (1-5)",
        required: true,
        disabled: false,
        value: 3,
        options: [1, 2, 3, 4, 5],
    },
    render: createRender,
};

export const Disabled: Story = {
    args: {
        label: "Locked Rating",
        description: "This rating is locked",
        required: false,
        disabled: true,
        value: 8,
        options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    },
    render: createRender,
};
