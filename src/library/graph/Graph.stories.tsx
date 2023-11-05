
// Graph.stories.ts|tsx

import type { Meta, StoryObj } from "@storybook/react";

import { Graph } from "./Graph";
import React from "react";
import { Box } from "@chakra-ui/react";

const meta: Meta<typeof Graph> = {
  component: Graph,
  argTypes: {
  },
};

export default meta;
type Story = StoryObj<typeof Graph>;

export const Primary: Story = {
  render: () => {
    return (
        <Box h={600} w={900}>
            <Graph />

        </Box>
    );
  },
  args: {
  },
};
