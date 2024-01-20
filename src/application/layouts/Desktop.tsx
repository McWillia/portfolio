import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { BubbleCard } from "../../library/bubble_card";
import { Castle } from "../../library/castle";
import { Experience } from "../../library/experience";
import { ThemeChanger } from "../../library/theme_changer";
import { COLOUR_THEME_OPTIONS, StateType } from "../redux/constants";
import { useSelector } from "react-redux";

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
        <BubbleCard padding={2} marginBottom={5} flexDirection={"column"}>
          <Text fontSize={"3xl"} fontFamily={"silk"} id="about_section">
            About
          </Text>

          <Text>
            I am a young professional trained in software engineering and
            software development practices. I completed my Bachelors degree in
            Computer Science at the University of St Andrews in 2020 and since
            then have been working as a frontend developer. Recently I've been
            thinking about other roles in the software development space and to
            that end, got myself certified as a scrum master.
          </Text>
        </BubbleCard>

        {/* ---------------------- CERTIFICATION SECTION ---------------------- */}

        <BubbleCard padding={2} marginBottom={5} flexDirection={"column"}>
          <Text fontSize={"3xl"} fontFamily={"silk"} id="cert_section">
            Certification
          </Text>
          <Experience
            key="cert_csm"
            startDate={"Dec 2023"}
            endDate={"Dec 2025"}
            title={"Scrum Alliance"}
            company={"Certified Scrum Master"}
            blurb={
              "I validated my knowledge and understanding of agile methodologies and their use in practical software development as well as better understand the nuance of the roles and responsibilities of the product and development teams."
            }
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

        {/* ---------------------- XP SECTION ---------------------- */}

        <BubbleCard padding={2} marginBottom={5} flexDirection={"column"}>
          <Text fontSize={"3xl"} fontFamily={"silk"} id="xp_section">
            Experience
          </Text>
          <Experience
            key="xp_bw"
            startDate={"19th April 2022"}
            endDate={"8th Jan 2024"}
            title={"Frontend Developer"}
            company={"Brainnwave Ltd / Hatch Ltd"}
            blurb={
              "My role at Brainnwave has been using Typescript to build up a component library to implement the company's design system provided from Figma. I integrated the library into a React SaaS platform for report building. I programmed a dynamic data visualisation builder using Cube JS to pull data from the Postgres database and then displayed charts using the Apache Echarts library. I integrated with the backend storage solution using Directus for CMS management. I’ve gained a better understanding of building scalable client systems as well as a deeper understanding of the react ecosystem using tools such as storybook to visualise and develop components. My role with Hatch was primarily to facilitate continuing to work with Brainnwave after having moved to Canada."
            }
            techUsed={[
              "React",
              "Typescript",
              "NodeJS",
              "Cube JS",
              "Directus",
              "Postgres",
              "Storybook",
              "REST API",
              "AWS",
            ]}
          />
          <Experience
            key="xp_jpm"
            startDate={"17th September 2020"}
            endDate={"14th April 2022"}
            title={"Analyst"}
            company={"JP Morgan Software Engineering Program "}
            blurb={
              "I developed an ETL monitoring dashboard using React to implement the frontend, Springboot to build the backend and Maria DB as a database. I integrated API routes in Spring that were then called in React to visualise the current status of the ETL job. I managed the application state using Redux. This has given me a long-term view of project development and allowed me to develop a better understanding of receiving and prioritising requirements."
            }
            techUsed={["React", "NodeJS", "MariaDB", "Springboot", "REST API"]}
          />
          <Experience
            key="xp_i"
            startDate={"17th June 2019"}
            endDate={"23rd August 2019"}
            title={"Intern Analyst"}
            company={"JP Morgan Summer Technology Analyst"}
            blurb={
              "I worked within an Asset Wealth Management software development team for 10 weeks over the summer during which time I implemented various components in React to build towards refactoring an existing application. This allowed me to see what working in an office would be like as well as how teams within JPMorgan various lines of business operate."
            }
            techUsed={["React", "NodeJS"]}
          />
          <Experience
            key="xp_sh5"
            startDate={"2019"}
            title={"Musync Creator"}
            company={"STACS Hack 5 - Hackathon"}
            blurb={
              "I used React to build a frontend that integrated with Spotify's public API. We implemented OAuth to authenticate users and managed tokens to make calls. We implemented two features which have since been properly developed by Spotify: group session control and playlists that blend two people's music tastes together."
            }
            techUsed={["React", "NodeJS", "OAuth", "Spotify's public API"]}
          />
          <Experience
            key="xp_sh4"
            startDate={"2018"}
            title={"Pointless Button Creator"}
            company={"STACS Hack 4 - Hackathon"}
            blurb={
              "During a 24-hour hackathon at the University of St Andrews, I designed, implemented, and iterated a cookie-clicker-style game that centred around a pointless button. The game was implemented using HTML5 grid systems, JQuery for dynamic styling, and local storage to track data. For this Hackathon, I received the prize for best presentation due to my charming demonstration of my game."
            }
            techUsed={["HTML5 grid systems", "JQuery"]}
          />
        </BubbleCard>

        {/* ---------------------- Site creation SECTION ---------------------- */}

        <BubbleCard padding={2} marginBottom={5} flexDirection={"column"}>
          <Text fontSize={"3xl"} fontFamily={"silk"} id="xp_section">
            About the Site
          </Text>
          I built this site using React and Typescript. It makes use of the
          Chakra UI component library for the styled system and uses Vite as the
          build manager. I made use of redux for the theme control in order to
          not need to pass around a theme key to every child, instead letting
          them pull from the global state if they need to interact.
        </BubbleCard>
      </Flex>

      <Box position={"absolute"} top={0} right={0}>
        <ThemeChanger />
      </Box>
    </Flex>
  );
};

export { Desktop };
