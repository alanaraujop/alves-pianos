import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Radio } from "./Radio";

const meta: Meta<typeof Radio> = {
  title: "Forms/Radio",
  component: Radio,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof Radio>;

export const Unchecked: Story = { args: { label: "Vertical", checked: false } };
export const Checked: Story = { args: { label: "Cauda", checked: true } };

export const Group: Story = {
  render: function RadioGroupDemo() {
    const [value, setValue] = useState("vertical");
    const options = [
      { value: "vertical", label: "Vertical" },
      { value: "cauda", label: "Cauda" },
      { value: "outro", label: "Não sei dizer" },
    ];
    return (
      <div className="flex flex-col gap-3">
        {options.map((option) => (
          <Radio
            key={option.value}
            name="tipo"
            label={option.label}
            checked={value === option.value}
            onChange={() => setValue(option.value)}
          />
        ))}
      </div>
    );
  },
};
