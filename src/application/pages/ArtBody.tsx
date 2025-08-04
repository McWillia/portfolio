import React from "react";
import { Flex } from "@chakra-ui/react";

import { COLOUR_THEME_OPTIONS, StateType } from "../redux/constants";
import { useSelector } from "react-redux";

const ArtBody = () => {
  const colourThemeVal: COLOUR_THEME_OPTIONS = useSelector(
    (state: StateType) => state.colourTheme,
  );

  return (
    <Flex className="App" h={"100%"} w={"100%"} position={"relative"}>
      WRITING
      {colourThemeVal}
    </Flex>
  );
};

export { ArtBody };
