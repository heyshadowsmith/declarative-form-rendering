import type { Meta, StoryObj } from "@storybook/html";
import ".";

const meta: Meta = {
    title: "Molecules/Text Question",
    component: "dfr-text-question",
    argTypes: {
        label: { control: "text" },
        description: { control: "text" },
        placeholder: { control: "text" },
        required: { control: "boolean" },
        disabled: { control: "boolean" },
        value: { control: "text" },
        minLength: { control: "number" },
        maxLength: { control: "number" },
        pattern: { control: "text" },
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
        minLength: args.minLength,
        maxLength: args.maxLength,
        pattern: args.pattern,
    };

    // We need to escape quotes for the attribute
    const questionJson = JSON.stringify(question).replace(/"/g, "&quot;");

    return `
    <dfr-text-question
      question="${questionJson}"
    ></dfr-text-question>
  `;
};

export const Default: Story = {
    args: {
        label: "First Name",
        description: "Enter your first name",
        placeholder: "John",
        required: false,
        disabled: false,
        value: "",
    },
    render: createRender,
};

export const Required: Story = {
    args: {
        label: "Email",
        description: "We will not share your email",
        placeholder: "user@example.com",
        required: true,
        disabled: false,
        value: "",
    },
    render: createRender,
};

export const Disabled: Story = {
    args: {
        label: "Username",
        description: "Cannot be changed",
        placeholder: "shadow_coder",
        required: false,
        disabled: true,
        value: "shadow_coder",
    },
    render: createRender,
};

export const WithValidation: Story = {
    args: {
        label: "Zip Code",
        description: "5 digit zip code",
        placeholder: "12345",
        required: true,
        disabled: false,
        value: "",
        minLength: 5,
        maxLength: 5,
        pattern: "^[0-9]{5}$",
    },
    render: createRender,
};
