import React, { useEffect, useState } from "react";
import { Flex, Heading, Text, useMediaQuery } from "@chakra-ui/react";
import { StyledLink } from "../styled_link";
import { useSelector } from "react-redux";
import {
  COLOUR_THEME_OPTIONS,
  StateType,
} from "../../application/redux/constants";

interface MiddleProps {
  buildingColour: string;
}

const Middle = ({ buildingColour }: MiddleProps) => {
  const [paddingVal, setPaddingVal] = useState(0);
  const colourThemeVal: COLOUR_THEME_OPTIONS = useSelector(
    (state: StateType) => state.colourTheme,
  );

  const [isDesktopOrLaptop] = useMediaQuery("(min-width: 1244px)");

  useEffect(() => {
    const handleScroll = () => {
      setPaddingVal(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Flex
      w={"100%"}
      bg={buildingColour}
      direction={"column"}
      flexGrow={1}
      paddingTop={isDesktopOrLaptop ? paddingVal : 0}
      paddingLeft={2}
      data-testid="castle-middle-desktop"
    >
      <Heading fontSize={"7xl"} fontFamily={"silk"} color={"white"}>
        Steven
        <br />
        McWilliam
      </Heading>

      <Text
        fontFamily={"silk"}
        color={`${COLOUR_THEME_OPTIONS[colourThemeVal]}.light.500`}
        fontSize={"3xl"}
      >
        Ex-Frontend Developer //
        <br />
        Aspiring Nurse
      </Text>

      <StyledLink displayText={"HOME"} hrefVal={"/portfolio/"} />
      <StyledLink displayText={"CV"} hrefVal={"/portfolio/cv"} />
      <StyledLink displayText={"Art"} hrefVal={"/portfolio/writing"} />
    </Flex>
  );
};

export { Middle };
