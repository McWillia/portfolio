import type { Meta, StoryObj } from "@storybook/react";

import { Castle } from "./Castle";
import React from "react";
import { Card, CardBody, Flex } from "@chakra-ui/react";

const meta: Meta<typeof Castle> = {
  component: Castle,
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
type Story = StoryObj<typeof Castle>;

export const Primary: Story = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  render: ({ ...rest }: any) => {
    return (
      <Card>
        <CardBody padding={0} bg="green.500">
          <Flex>
            <Castle {...rest} />
          </Flex>
        </CardBody>
      </Card>
    );
  },
};
