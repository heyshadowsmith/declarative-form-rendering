import type { Meta, StoryObj } from "@storybook/html";
import ".";

const meta: Meta = {
    title: "Molecules/Select Question",
    component: "dfr-select-question",
    argTypes: {
        label: { control: "text" },
        description: { control: "text" },
        required: { control: "boolean" },
        disabled: { control: "boolean" },
        value: { control: "text" },
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
        options: args.options || [
            { value: "us", label: "United States" },
            { value: "ca", label: "Canada" },
            { value: "uk", label: "United Kingdom" },
            { value: "au", label: "Australia" },
        ],
    };

    const questionJson = JSON.stringify(question).replace(/"/g, "&quot;");

    return `
    <dfr-select-question
      question="${questionJson}"
    ></dfr-select-question>
  `;
};

export const Default: Story = {
    args: {
        label: "Country",
        description: "Select your country",
        required: false,
        disabled: false,
        value: "",
    },
    render: createRender,
};

export const Required: Story = {
    args: {
        label: "Shipping Method",
        description: "Choose a shipping method",
        required: true,
        disabled: false,
        value: "",
        options: [
            { value: "standard", label: "Standard Shipping" },
            { value: "express", label: "Express Shipping" },
            { value: "overnight", label: "Overnight Shipping" },
        ],
    },
    render: createRender,
};

export const PreSelected: Story = {
    args: {
        label: "Language",
        description: "Preferred language",
        required: true,
        disabled: false,
        value: "es",
        options: [
            { value: "en", label: "English" },
            { value: "es", label: "Spanish" },
            { value: "fr", label: "French" },
        ],
    },
    render: createRender,
};

export const Disabled: Story = {
    args: {
        label: "Region",
        description: "Region selection is disabled",
        required: false,
        disabled: true,
        value: "na",
        options: [
            { value: "na", label: "North America" },
            { value: "eu", label: "Europe" },
            { value: "as", label: "Asia" },
        ],
    },
    render: createRender,
};
