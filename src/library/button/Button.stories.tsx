// Button.stories.ts|tsx

import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./Button";
import React from "react";

const meta: Meta<typeof Button> = {
  component: Button,
  argTypes: {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    variant: {
      options: ["primary", "secondary"],
      // control: { type: "radio" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  render: () => <Button content="CONNNNNNNTENT" />,
};
