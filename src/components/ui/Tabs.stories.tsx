import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Tabs } from "./Tabs";

const meta: Meta<typeof Tabs> = {
  title: "Navigation/Tabs",
  component: Tabs,
  tags: ["autodocs"],
  args: {
    items: [
      { value: "afinacao", label: "Afinação" },
      { value: "restauro", label: "Restauração" },
      { value: "venda", label: "Compra e venda" },
    ],
  },
};
export default meta;

type Story = StoryObj<typeof Tabs>;

export const Interactive: Story = {
  render: function TabsDemo(args) {
    const [value, setValue] = useState("afinacao");
    return <Tabs {...args} value={value} onChange={setValue} />;
  },
};

export const OnDark: Story = {
  render: function TabsOnDarkDemo(args) {
    const [value, setValue] = useState("afinacao");
    return <Tabs {...args} tone="dark" value={value} onChange={setValue} />;
  },
  parameters: { backgrounds: { default: "ebony" } },
};
