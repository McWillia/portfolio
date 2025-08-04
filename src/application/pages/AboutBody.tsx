import React from "react";
import { Flex, Text } from "@chakra-ui/react";

// import { COLOUR_THEME_OPTIONS, StateType } from "../redux/constants";
// import { useSelector } from "react-redux";
import { BubbleCard } from "../../library/bubble_card";
import { getAboutText, getSiteInfo } from "../config/commonText";

const AboutBody = () => {
  // const colourThemeVal: COLOUR_THEME_OPTIONS = useSelector(
  //   (state: StateType) => state.colourTheme,
  // );

  return (
    <Flex
      className="App"
      h={"100%"}
      w={"100%"}
      position={"relative"}
      flexDirection={"column"}
    >
      {/* ---------------------- ABOUT SECTION ---------------------- */}

      <BubbleCard padding={2} marginBottom={5} flexDirection={"column"}>
        <Text fontSize={"3xl"} fontFamily={"silk"} id="about_section">
          About Me
        </Text>
        {getAboutText}
      </BubbleCard>

      {/* ---------------------- Site creation SECTION ---------------------- */}

      <BubbleCard padding={2} marginBottom={5} flexDirection={"column"}>
        <Text fontSize={"3xl"} fontFamily={"silk"} id="site_section">
          About the Site
        </Text>
        {getSiteInfo}
      </BubbleCard>
    </Flex>
  );
};

export { AboutBody };
