import type { Preview } from "@storybook/react";
import "../src/app/globals.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: "ivory",
      values: [
        { name: "ivory", value: "#fbf7f0" },
        { name: "ebony", value: "#1e1410" },
      ],
    },
  },
};

export default preview;
