import type { Meta, StoryObj } from "@storybook/react";

import { Middle } from "./Middle";
import React from "react";
import { Card, CardBody } from "@chakra-ui/react";

const meta: Meta<typeof Middle> = {
  component: Middle,
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
type Story = StoryObj<typeof Middle>;

export const Primary: Story = {
  render: () => {
    return (
      <Card>
        <CardBody padding={3} bg="green.500">
          <Middle buildingColour={"day.primary.500"} />
        </CardBody>
      </Card>
    );
  },
};
