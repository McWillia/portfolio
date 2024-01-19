import type { Meta, StoryObj } from "@storybook/react";

import { Doorway } from "./Doorway";
import React from "react";
import { Card, CardBody } from "@chakra-ui/react";

const meta: Meta<typeof Doorway> = {
  component: Doorway,
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
type Story = StoryObj<typeof Doorway>;

export const Primary: Story = {
  render: () => {
    return (
        <Card>
            <CardBody padding={3} bg="green.500">
               <Doorway skyColour={"day.light.500"} buildingColour={"day.primary.500"}/>               
            </CardBody>
        </Card>
    );
  }
};
