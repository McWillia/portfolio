import type { Meta, StoryObj } from "@storybook/react";

import { ExternalLink } from "./ExternalLink";
import React from "react";
import { Card, CardBody } from "@chakra-ui/react";

const meta: Meta<typeof ExternalLink> = {
  component: ExternalLink,
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof ExternalLink>;

export const Primary: Story = {
  render: () => {
    return (
      <Card>
        <CardBody padding={3} bg="day.primary.500">
          <ExternalLink displayText={"Display"} hrefVal={"#"} />
        </CardBody>
      </Card>
    );
  },
};
