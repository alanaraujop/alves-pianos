import type { Meta, StoryObj } from "@storybook/react";
import { Tooltip } from "./Tooltip";
import { IconButton } from "./IconButton";
import { Info } from "lucide-react";

const meta: Meta<typeof Tooltip> = {
  title: "Feedback/Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
  decorators: [(Story) => <div className="p-12"><Story /></div>],
};
export default meta;

type Story = StoryObj<typeof Tooltip>;

export const Top: Story = {
  args: {
    placement: "top",
    content: "Respondemos em até um dia útil.",
    children: (
      <IconButton label="Mais informações">
        <Info size={18} strokeWidth={1.5} />
      </IconButton>
    ),
  },
};

export const Bottom: Story = {
  args: { ...Top.args, placement: "bottom" },
};
