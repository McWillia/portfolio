import React from "react";
import { Box } from "@chakra-ui/react";
import {
  COLOUR_THEME_OPTIONS,
  StateType,
} from "../../application/redux/constants";
import { useSelector } from "react-redux";

const HorizontalLine = () => {
  const colourThemeVal: COLOUR_THEME_OPTIONS = useSelector(
    (state: StateType) => state.colourTheme,
  );

  return (
    <>
      <br />
      <Box
        w={"100%"}
        h={"5px"}
        borderRadius={"5px"}
        flexGrow={0}
        bg={`${COLOUR_THEME_OPTIONS[colourThemeVal]}.light.500`}
        data-testid="horizontal_line"
      />
      <br />
    </>
  );
};
export { HorizontalLine };
