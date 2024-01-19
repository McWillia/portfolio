import type { Meta, StoryObj } from "@storybook/react";

import { BubbleCard } from "./BubbleCard";
import React from "react";
import { Card, CardBody } from "@chakra-ui/react";
import { Experience } from "../experience";

const meta: Meta<typeof BubbleCard> = {
  component: BubbleCard,
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
type Story = StoryObj<typeof BubbleCard>;

export const Primary: Story = {
  render: () => {
    return (
      <Card>
        <CardBody padding={3} bg="green.500">
          <BubbleCard>
            <Experience
              key="xp_i"
              startDate={"17th June 2019"}
              endDate={"23rd August 2019"}
              title={"Intern Analyst"}
              company={"JP Morgan Summer Technology Analyst"}
              blurb={
                "I worked within an Asset Wealth Management software development team for 10 weeks over the summer during which time I implemented various components in React to build towards refactoring an existing application. This allowed me to see what working in an office would be like as well as how teams within JPMorgan various lines of business operate."
              }
              techUsed={["React", "NodeJS"]}
            />
          </BubbleCard>
        </CardBody>
      </Card>
    );
  },
};
