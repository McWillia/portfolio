import React from "react";
import { Link } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import {
  COLOUR_THEME_OPTIONS,
  StateType,
} from "../../application/redux/constants";

interface DoorwayProps {
  displayText: string;
  hrefVal: string;
}

const StyledLink = ({ displayText, hrefVal }: DoorwayProps) => {
  const colourThemeVal: COLOUR_THEME_OPTIONS = useSelector(
    (state: StateType) => state.colourTheme,
  );

  return (
    <Link
      href={hrefVal}
      _hover={{ bg: `${COLOUR_THEME_OPTIONS[colourThemeVal]}.contrast.500` }}
      color={"white"}
      fontSize={"xl"}
      fontFamily={"silk"}
    >
      - {displayText}
    </Link>
  );
};

export { StyledLink };
