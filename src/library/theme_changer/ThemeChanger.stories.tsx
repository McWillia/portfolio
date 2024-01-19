import type { Meta, StoryObj } from "@storybook/react";

import { ThemeChanger } from "./ThemeChanger";
import React from "react";
import { Card, CardBody, Flex, Spacer } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import {
  COLOUR_THEME_OPTIONS,
  StateType,
} from "../../application/redux/constants";

const meta: Meta<typeof ThemeChanger> = {
  component: ThemeChanger,
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
type Story = StoryObj<typeof ThemeChanger>;

export const Primary: Story = {
  render: () => {
    const colourThemeVal: COLOUR_THEME_OPTIONS = useSelector(
      (state: StateType) => state.colourTheme,
    );

    return (
      <Card>
        <CardBody bg={`${COLOUR_THEME_OPTIONS[colourThemeVal]}.light.500`}>
          <Flex>
            <Spacer />
            <ThemeChanger />
          </Flex>
        </CardBody>
      </Card>
    );
  },
};
