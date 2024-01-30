import React from "react";
import { Link, LinkProps } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import {
  COLOUR_THEME_OPTIONS,
  StateType,
} from "../../application/redux/constants";

import { ExternalLinkIcon } from '@chakra-ui/icons'

interface ExternalLinkProps extends LinkProps {
  displayText: string;
  hrefVal: string;
}

const ExternalLink = ({ displayText, hrefVal }: ExternalLinkProps) => {
  const colourThemeVal: COLOUR_THEME_OPTIONS = useSelector(
    (state: StateType) => state.colourTheme,
  );

  return (
    <Link 
      href={hrefVal} 
      isExternal 
      display={"flex"} 
      alignItems={"center"}
      color={`${COLOUR_THEME_OPTIONS[colourThemeVal]}.primary.500`} 
      fontWeight={"semibold"}
      data-testid="external-link"
    >
      {displayText} <ExternalLinkIcon marginX={2} />
    </Link>
  );

};

export { ExternalLink };
