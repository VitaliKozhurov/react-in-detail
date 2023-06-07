import type { Meta, StoryObj } from "@storybook/react";
import { SuperClock } from "./SuperClock";

const meta: Meta<typeof SuperClock> = {
    title: "Stories Custom Clock",
    component: SuperClock,
};

export default meta;
type Story = StoryObj<typeof SuperClock>;

export const Analog_Clock_Example: Story = {
    render: () => <SuperClock />,
};
