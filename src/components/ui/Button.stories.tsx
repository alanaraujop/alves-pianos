import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Core/Button",
  component: Button,
  tags: ["autodocs"],
  args: { children: "Pedir orçamento" },
  argTypes: {
    variant: { control: "select", options: ["primary", "gold", "secondary", "ghost", "onDark"] },
    size: { control: "select", options: ["sm", "md", "lg"] },
  },
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = { args: { variant: "primary" } };
export const Gold: Story = { args: { variant: "gold" } };
export const Secondary: Story = { args: { variant: "secondary" } };
export const Ghost: Story = { args: { variant: "ghost", children: "Ver todos" } };
export const OnDark: Story = {
  args: { variant: "onDark" },
  parameters: { backgrounds: { default: "ebony" } },
};
export const Disabled: Story = { args: { variant: "primary", disabled: true } };
export const AsLink: Story = { args: { variant: "secondary", href: "#acervo", children: "Ver acervo" } };
export const FullWidth: Story = { args: { variant: "gold", full: true } };

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3">
      <Button variant="primary">Primary</Button>
      <Button variant="gold">Gold</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="onDark">On dark</Button>
    </div>
  ),
  parameters: { backgrounds: { default: "ebony" } },
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
  ),
};
