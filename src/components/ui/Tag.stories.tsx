import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Tag } from "./Tag";

const meta: Meta<typeof Tag> = {
  title: "Core/Tag",
  component: Tag,
  tags: ["autodocs"],
  args: { children: "Verticais" },
};
export default meta;

type Story = StoryObj<typeof Tag>;

export const Static: Story = {};
export const Selected: Story = { args: { selected: true } };
export const Removable: Story = { args: { onRemove: () => {} } };

export const FilterGroup: Story = {
  render: function FilterGroupDemo() {
    const options = ["Todos", "Verticais", "Caudas", "A restaurar"];
    const [selected, setSelected] = useState("Todos");
    return (
      <div className="flex gap-2">
        {options.map((option) => (
          <Tag key={option} selected={selected === option} onClick={() => setSelected(option)}>
            {option}
          </Tag>
        ))}
      </div>
    );
  },
};
