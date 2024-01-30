import React, { ReactNode } from "react";
import { BoxProps, Flex } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import {
  COLOUR_THEME_OPTIONS,
  StateType,
} from "../../application/redux/constants";

interface BubbleCardProps extends BoxProps {
  children: ReactNode;
}

const BubbleCard = ({ children, ...rest }: BubbleCardProps) => {
  const colourThemeVal: COLOUR_THEME_OPTIONS = useSelector(
    (state: StateType) => state.colourTheme,
  );

  return (
    <Flex
      bg={`${COLOUR_THEME_OPTIONS[colourThemeVal]}.offwhite.500`}
      w={"100%"}
      boxShadow={"10px 10px rgba(0,0,0,0.2)"}
      borderRadius={20}
      data-testid="bubble-card"
      {...rest}
    >
      {children}
    </Flex>
  );
};
export { BubbleCard };
