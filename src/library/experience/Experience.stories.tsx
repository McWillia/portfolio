import type { Meta, StoryObj } from "@storybook/react";

import { Experience, ExperienceProps } from "./Experience";
import React from "react";
import { Card, CardBody } from "@chakra-ui/react";

const meta: Meta<typeof Experience> = {
  component: Experience,
  argTypes: {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    startDate: {
      control: 'text',
      default: "start",
    },
    endDate: {
      control: 'text',
      default: "end",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Experience>;

export const Primary: Story = {
  render: ({...all}: ExperienceProps) => {
    return (
        <Card>
            <CardBody padding={3} bg="green.500">
               <Experience {...all} />
  
                
            </CardBody>
            
        </Card>
      
    );
  },
  args: {
    startDate: "start",
    endDate: "end",
    title: "title",
    company: "company",
    blurb: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem officiis ea distinctio autem magnam reprehenderit optio eius minus similique. Dignissimos necessitatibus fugit eaque? Tempore consequatur mollitia unde quia! Quibusdam, nostrum!",
    techUsed: ["one", "two"]
  },
};
