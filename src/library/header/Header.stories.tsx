import type { Meta, StoryObj } from "@storybook/react";

import { Header } from "./Header";
import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import { ThemeChanger } from "../theme_changer";
import {
  COLOUR_THEME_OPTIONS,
  StateType,
} from "../../application/redux/constants";
import { useSelector } from "react-redux";

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
  render: () => {
    const colourThemeVal: COLOUR_THEME_OPTIONS = useSelector(
      (state: StateType) => state.colourTheme,
    );
    return (
      <Flex padding={0} bg="green.500">
        <Header
          skyColour={`${COLOUR_THEME_OPTIONS[colourThemeVal]}.light.500`}
          buildingColour={`${COLOUR_THEME_OPTIONS[colourThemeVal]}.primary.500`}
        />
        <Box position={"absolute"} top={0} right={0}>
          <ThemeChanger />
        </Box>
      </Flex>
    );
  },
};
