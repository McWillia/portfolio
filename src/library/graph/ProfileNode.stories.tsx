
// ProfileNode.stories.ts|tsx

import type { Meta, StoryObj } from "@storybook/react";

import { ProfileNode, ProfileNodeProps } from "./ProfileNode";
import React from "react";
import { Box } from "@chakra-ui/react";

const meta: Meta<typeof ProfileNode> = {
  component: ProfileNode,
  argTypes: {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    imgSrc: {
        options: ["./sad_aang.png", "./bait.jpg", "./momo.png"],
        control: { type: "radio" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ProfileNode>;

export const Primary: Story = {
    render: ({imgSrc}: ProfileNodeProps) => {
    return (
        <Box h={500} w={500}>
            <ProfileNode imgSrc={imgSrc} />
        </Box>
    );
  },
  args: {
    imgSrc: "./bait.jpg",
  },
};


export const UndefinedSrc: Story = {
    render: () => {
      return (
          <Box h={500} w={500}>
              <ProfileNode imgSrc={undefined} />
          </Box>
      );
    },
    args: {
    },
  };
  