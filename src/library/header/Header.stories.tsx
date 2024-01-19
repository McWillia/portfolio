import type { Meta, StoryObj } from "@storybook/react";

import { Header, HeaderProps } from "./Header";
import React from "react";
import { Flex } from "@chakra-ui/react";

const meta: Meta<typeof Header> = {
  component: Header,
  argTypes: {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    // variant: {
    //   options: ["primary", "secondary"],
    //   control: { type: "radio" },
    //   default: "primary",
    // },
  },
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Primary: Story = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  render: ({skyColour="day.light.500", buildingColour="day.primary.500" }:HeaderProps) => {
    return (
      <Flex padding={0} bg="green.500">
        <Header skyColour={skyColour} buildingColour={buildingColour}        />

      </Flex>
                
      
    );
  }
};
