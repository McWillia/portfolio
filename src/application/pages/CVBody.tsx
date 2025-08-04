import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import { BubbleCard } from "../../library/bubble_card";
import { Experience } from "../../library/experience";
import { COLOUR_THEME_OPTIONS, StateType } from "../redux/constants";
import { useSelector } from "react-redux";
import {
  cert_csm,
  xp_bw,
  xp_i,
  xp_jpm,
  xp_sh4,
  xp_sh5,
  cert_d,
  cert_fa,
  cert_fh,
  cert_smhp,
  xp_v,
  xp_cct,
  xp_pan,
  xp_sec,
} from "../config/commonText";
import { ExternalLink } from "../../library/external_link";
import { SUN_SIZE } from "../../library/theme_changer";

const CVBody = () => {
  const colourThemeVal: COLOUR_THEME_OPTIONS = useSelector(
    (state: StateType) => state.colourTheme,
  );

  return (
    <Flex className="App" h={"100%"} w={"100%"} position={"relative"}>
      <Flex
        paddingTop={SUN_SIZE / 2}
        paddingLeft={5}
        paddingRight={5}
        bg={`${COLOUR_THEME_OPTIONS[colourThemeVal]}.light.500`}
        direction={"column"}
        flexShrink={1}
      >
        {/* ---------------------- CERTIFICATION SECTION ---------------------- */}

        <BubbleCard padding={2} marginBottom={5} flexDirection={"column"}>
          <Text fontSize={"3xl"} fontFamily={"silk"} id="cert_section">
            Certification
          </Text>
          <Experience {...cert_d} />
          <Experience {...cert_fa} />
          <Experience {...cert_fh} />
          <Experience {...cert_smhp} />
          <Experience {...cert_csm} />
        </BubbleCard>

        {/* ---------------------- XP SECTION ---------------------- */}

        <BubbleCard padding={2} marginBottom={5} flexDirection={"column"}>
          <Text fontSize={"3xl"} fontFamily={"silk"} id="xp_section">
            Experience
          </Text>

          <Experience {...xp_cct} />
          <Experience {...xp_pan} />
          <Experience {...xp_v} />

          <Experience {...xp_bw} />
          <Experience {...xp_jpm} />
          <Experience {...xp_sec} />

          <Experience {...xp_i} />
          <Experience {...xp_sh5} />
          <Experience {...xp_sh4} />

          <ExternalLink
            fontSize={"2xl"}
            displayText={"View PDF CV Here"}
            hrefVal={"/portfolio/StevenMcWilliam_CS.pdf"}
          />
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
      </Flex>
    </Flex>
  );
};

export { CVBody };
