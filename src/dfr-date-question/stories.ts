import type { Meta, StoryObj } from "@storybook/html";
import ".";

const meta: Meta = {
    title: "Molecules/Date Question",
    component: "dfr-date-question",
    argTypes: {
        label: { control: "text" },
        description: { control: "text" },
        required: { control: "boolean" },
        disabled: { control: "boolean" },
        value: { control: "date" },
        minDate: { control: "date" },
        maxDate: { control: "date" },
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
        minDate: args.minDate
            ? new Date(args.minDate).toISOString().split("T")[0]
            : undefined,
        maxDate: args.maxDate
            ? new Date(args.maxDate).toISOString().split("T")[0]
            : undefined,
    };

    const questionJson = JSON.stringify(question).replace(/"/g, "&quot;");

    return `
    <dfr-date-question
      question="${questionJson}"
    ></dfr-date-question>
  `;
};

export const Default: Story = {
    args: {
        label: "Date of Birth",
        description: "Please enter your birth date",
        required: false,
        disabled: false,
        value: "",
    },
    render: createRender,
};

export const Required: Story = {
    args: {
        label: "Appointment Date",
        description: "When would you like to come in?",
        required: true,
        disabled: false,
        value: "",
    },
    render: createRender,
};

export const WithConstraints: Story = {
    args: {
        label: "Booking Date",
        description: "Must be in 2025",
        required: true,
        disabled: false,
        value: "",
        minDate: new Date("2025-01-01"),
        maxDate: new Date("2025-12-31"),
    },
    render: createRender,
};

export const Disabled: Story = {
    args: {
        label: "Archived Date",
        description: "This field is disabled",
        required: false,
        disabled: true,
        value: "2023-01-01",
    },
    render: createRender,
};
