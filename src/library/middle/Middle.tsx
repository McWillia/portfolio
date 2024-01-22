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

  return isDesktopOrLaptop ? (
    <Flex
      h={"100%"}
      w={"100%"}
      bg={buildingColour}
      direction={"column"}
      flexGrow={1}
      paddingTop={paddingVal}
      transition={"0.2s"}
      paddingLeft={2}
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
        Frontend Developer //
        <br />
        Aspiring Scrum Master
      </Text>

      <StyledLink
        displayText={"about and contact"}
        hrefVal={"#about_section"}
      />
      <StyledLink displayText={"certification"} hrefVal={"#cert_section"} />
      <StyledLink displayText={"tech"} hrefVal={"#tech_section"} />
      <StyledLink displayText={"xp"} hrefVal={"#xp_section"} />
      <StyledLink displayText={"Site Info"} hrefVal={"#site_section"} />
    </Flex>
  ) : (
    <Flex
      w={"100%"}
      bg={buildingColour}
      direction={"column"}
      flexGrow={1}
      paddingLeft={2}
    >
      <Heading fontSize={"5xl"} fontFamily={"silk"} color={"white"}>
        Steven
        <br />
        McWilliam
      </Heading>

      <Text
        fontFamily={"silk"}
        color={`${COLOUR_THEME_OPTIONS[colourThemeVal]}.light.500`}
        fontSize={"xl"}
      >
        Frontend Developer //
        <br />
        Aspiring Scrum Master
      </Text>

      <StyledLink displayText={"about"} hrefVal={"#about_section"} />
      <StyledLink displayText={"certification"} hrefVal={"#cert_section"} />
      <StyledLink displayText={"tech"} hrefVal={"#tech_section"} />
      <StyledLink displayText={"xp"} hrefVal={"#xp_section"} />
      <StyledLink displayText={"Site Info"} hrefVal={"#site_section"} />
    </Flex>
  );
};

export { Middle };
