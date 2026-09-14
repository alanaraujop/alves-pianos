import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "./Checkbox";

const meta: Meta<typeof Checkbox> = {
  title: "Forms/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  args: { label: "Quero receber dicas de conservação" },
};
export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Unchecked: Story = { args: { checked: false } };
export const Checked: Story = { args: { checked: true } };
export const Disabled: Story = { args: { checked: false, disabled: true } };

export const Interactive: Story = {
  render: function CheckboxDemo(args) {
    const [checked, setChecked] = useState(false);
    return <Checkbox {...args} checked={checked} onChange={(event) => setChecked(event.target.checked)} />;
  },
};
