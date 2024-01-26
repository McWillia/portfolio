import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { BubbleCard } from "../../library/bubble_card";
import { Castle } from "../../library/castle";
import { Experience } from "../../library/experience";
import { ThemeChanger } from "../../library/theme_changer";
import { COLOUR_THEME_OPTIONS, StateType } from "../redux/constants";
import { useSelector } from "react-redux";
import {
  getAboutText,
  cert_csm,
  getSiteInfo,
  xp_bw,
  xp_i,
  xp_jpm,
  xp_sh4,
  xp_sh5,
  cert_d,
  getContact
} from "../config/commonText";

const Desktop = () => {
  const colourThemeVal: COLOUR_THEME_OPTIONS = useSelector(
    (state: StateType) => state.colourTheme,
  );

  return (
    <Flex className="App" h={"100%"} position={"relative"}>
      <Flex w={"600px"} minH={"100%"} flexShrink={0}>
        <Castle
          skyColour={`${COLOUR_THEME_OPTIONS[colourThemeVal]}.light.500`}
          buildingColour={`${COLOUR_THEME_OPTIONS[colourThemeVal]}.primary.500`}
        />
      </Flex>

      <Flex
        paddingTop={32}
        paddingLeft={5}
        paddingRight={5}
        bg={`${COLOUR_THEME_OPTIONS[colourThemeVal]}.light.500`}
        direction={"column"}
        flexShrink={1}
      >
        {/* ---------------------- ABOUT SECTION ---------------------- */}

        <Flex>
          <BubbleCard
            padding={2}
            marginBottom={5}
            flexDirection={"column"}
            w={"80%"}
          >
            <Text fontSize={"3xl"} fontFamily={"silk"} id="about_section">
              About
            </Text>
            {getAboutText}
          </BubbleCard>

          <BubbleCard
            padding={2}
            marginBottom={5}
            marginLeft={5}
            flexDirection={"column"}
            maxW={"20%"}
            minW={44}
          >
            <Flex flexDirection={"column"}>
              <Text fontSize={"3xl"} fontFamily={"silk"}>
                Contact
              </Text>
              <Flex flexDirection={"column"} paddingTop={5}>
                {getContact}
              </Flex>
            </Flex>
          </BubbleCard>
        </Flex>

        {/* ---------------------- CERTIFICATION SECTION ---------------------- */}

        <BubbleCard padding={2} marginBottom={5} flexDirection={"column"}>
          <Text fontSize={"3xl"} fontFamily={"silk"} id="cert_section">
            Certification
          </Text>
          <Experience {...cert_d} />
          <Experience {...cert_csm} />
        </BubbleCard>

        {/* ---------------------- TECH SECTION ---------------------- */}

        <BubbleCard padding={2} marginBottom={5} flexDirection={"column"}>
          <Text fontSize={"3xl"} fontFamily={"silk"} id="tech_section">
            Technologies Used
          </Text>
          § Language/ Tech: HTML, CSS, JavaScript, TypeScript, React, SCSS,
          NodeJS, Cube JS, JQuery, Directus, OAuth
          <br />
          § Databases: MySQL, POSTGRESQL, MariaDB
          <br />
          § Tools/Frameworks: Spring Boot, Docker, Jenkins CI/CD, Git, JIRA,
          SonarQube, Storybook, Teamcity
          <br />
          § Methods and techniques: Agile, Scrum, Kanban, Waterfall
          <br />§ Software modelling tools: Archimate
        </BubbleCard>

        {/* ---------------------- XP SECTION ---------------------- */}

        <BubbleCard padding={2} marginBottom={5} flexDirection={"column"}>
          <Text fontSize={"3xl"} fontFamily={"silk"} id="xp_section">
            Experience
          </Text>

          <Experience {...xp_bw} />
          <Experience {...xp_jpm} />
          <Experience {...xp_i} />
          <Experience {...xp_sh5} />
          <Experience {...xp_sh4} />
        </BubbleCard>

        {/* ---------------------- Site creation SECTION ---------------------- */}

        <BubbleCard padding={2} marginBottom={5} flexDirection={"column"}>
          <Text fontSize={"3xl"} fontFamily={"silk"} id="site_section">
            About the Site
          </Text>
          {getSiteInfo}
        </BubbleCard>
      </Flex>

      <Box position={"absolute"} top={0} right={0}>
        <ThemeChanger />
      </Box>
    </Flex>
  );
};

export { Desktop };
