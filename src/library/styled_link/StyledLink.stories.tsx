import type { Meta, StoryObj } from "@storybook/react";

import { StyledLink } from "./StyledLink";
import React from "react";
import { Card, CardBody } from "@chakra-ui/react";

const meta: Meta<typeof StyledLink> = {
  component: StyledLink,
  argTypes: {
  },
};

export default meta;
type Story = StoryObj<typeof StyledLink>;

export const Primary: Story = {
  render: () => {
    return (
      <Card>
          <CardBody padding={3} bg="day.primary.500">
              <StyledLink displayText={"Display"} hrefVal={"#"} />
          </CardBody>
      </Card>
    );
  }
};
