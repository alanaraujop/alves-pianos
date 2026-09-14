import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Switch } from "./Switch";

const meta: Meta<typeof Switch> = {
  title: "Forms/Switch",
  component: Switch,
  tags: ["autodocs"],
  args: { label: "Receber lembretes de afinação" },
};
export default meta;

type Story = StoryObj<typeof Switch>;

export const Off: Story = { args: { checked: false } };
export const On: Story = { args: { checked: true } };
export const Disabled: Story = { args: { checked: false, disabled: true } };

export const Interactive: Story = {
  render: function SwitchDemo(args) {
    const [checked, setChecked] = useState(false);
    return <Switch {...args} checked={checked} onChange={(event) => setChecked(event.target.checked)} />;
  },
};
