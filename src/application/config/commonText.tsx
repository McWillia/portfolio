import { ExperienceProps } from "../../library/experience";
import React from "react";
import {
  Text,
  ListItem,
  UnorderedList,
  ListIcon,
  Flex,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { ExternalLink } from "../../library/external_link";

export const getAboutText = (
  <Flex flexDirection={"column"}>
    <Text>
      I am a young professional trained in software engineering and software
      development practices however I am looking to transition to more people
      oriented roles and thus have decided to pursue a career in nursing.
      <br />
      <br />
      I completed my Bachelors degree in Computer Science at the University of
      St Andrews in 2020 and spent a few years working as a frontend developer
      and then a project coordinator. However I found this work unsatisfying due
      to the constant pressures of capitalism really ruining what seems like
      good and humane work.
      <br />
      <br />I was living in Canada last year and when I returned to Scotland I
      had changed quite strongly in my political stance, finding myself going
      deeper and deeper into leftist politics and radical organisation. To this
      end, I wanted to update this site to provide links to all the content I
      write as well as art I create as well as anything else I want to put on
      here.
    </Text>
  </Flex>
);

export const getContact = (
  <Flex flexDirection={"column"}>
    <Text>+1 (250) 686 5299</Text>
    <Text>steve-mcw@live.co.uk</Text>
    <Text>Sooke, BC</Text>
  </Flex>
);

export const cert_d: ExperienceProps = {
  key: "cert_d",
  startDate: "Sep 2016",
  endDate: "May 2020",
  title: "BSc in Computer Science",
  company: "University Of St Andrews",
};

export const cert_csm: ExperienceProps = {
  key: "cert_csm",
  startDate: "Dec 2023",
  title: "Scrum Alliance",
  company: "Certified Scrum Master",
  blurb: (
    <Text>
      I attained certification as a scrum master by validated my knowledge and
      understanding of agile methodologies and their use in practical software
      development as well as better understand the nuance of the roles and
      responsibilities of the product and development teams.
    </Text>
  ),
};

export const cert_smhp: ExperienceProps = {
  key: "cert_smhp",
  startDate: "July 2025",
  title: "Complete Training (Inverclyde) Ltd",
  company: "Scottish Manual Handling Passport",
  blurb: (
    <Text>
      I trained through the Scottish Manual Handling Passport Scheme completing
      Modules A-E in order to develop my practical skills in assisting with
      moving people. This covered working with mechanical hoists as well as
      using tools like glide sheets to safely manouver individuals.
    </Text>
  ),
};

export const cert_fh: ExperienceProps = {
  key: "cert_fh",
  startDate: "July 2025",
  title: "Complete Training (Inverclyde) Ltd",
  company: "Food Hygine/HACCP and Infection Control",
  blurb: (
    <Text>
      I completed training on the principles of Food Hygine as well as on
      Infection control. This has developed my skills in dynamic and on going
      risk assessment as well as build my knowledge on safe practices when
      dealing with food.
    </Text>
  ),
};

export const cert_fa: ExperienceProps = {
  key: "cert_fa",
  startDate: "July 2025",
  title: "Glasgow Kelvin College ",
  company: "Emergency First Aid At Work",
  blurb: (
    <Text>
      I completed training on the principles of first aid including how to
      approach a first Aid incident safely as well as practical skills around
      chest compressions and basic lifesaving skills.
    </Text>
  ),
};

export const getSiteInfo = (
  <Flex flexDirection={"column"}>
    <Text>
      I built this site using React and Typescript. It makes use of the Chakra
      UI component library for the styled system and uses Vite as the build
      manager. I made use of redux for the theme control in order to not need to
      pass around a theme key to every child, instead letting them pull from the
      global state if they need to interact. I've made use of Chakra's
      useMediaQuery hook to check for screen width in order to provide a mobile
      friendly layout for the site as well as adapt components to a mobile
      friendly UX. Testing has been implemented using react testing library and
      Jest. Routing is implemented using react router.
    </Text>
    <ExternalLink
      fontSize={"2xl"}
      displayText={"View Repo"}
      hrefVal={"https://github.com/McWillia/portfolio"}
      isExternal
    />
  </Flex>
);

export const xp_cct: ExperienceProps = {
  key: "xp_cct",
  startDate: "July 2025",
  endDate: "Ongoing",
  title: "Digitial Inclusion Officer",
  company: "Connect Community Trust",
  blurb: (
    <Text>
      <UnorderedList styleType="none">
        <ListItem>
          <ListIcon as={ChevronRightIcon} />
          Working with digitally excluded people referred to the Trust to
          increase their technical skills and confidence
        </ListItem>
        <ListItem>
          <ListIcon as={ChevronRightIcon} />
          Assisted with understanding welfare rights systems and signposting to
          further supports available
        </ListItem>
        <ListItem>
          <ListIcon as={ChevronRightIcon} />
          Designed and delivered presentations on fraud and scam prevention in
          online spaces
        </ListItem>
      </UnorderedList>
    </Text>
  ),
};

export const xp_pan: ExperienceProps = {
  key: "xp_pan",
  startDate: "Feburary 2025",
  endDate: "Ongoing",
  title: "Volunteer Digitial Inclusion Officer",
  company: "Pollokshaws Area Network",
  blurb: <Text />,
};

export const xp_v: ExperienceProps = {
  key: "xp_v",
  startDate: "20th Feburary 2024",
  endDate: "11th October 2024",
  title: "Project Cooridinator",
  company: "Vretta Inc",
  blurb: (
    <Text>
      <UnorderedList styleType="none">
        <ListItem>
          <ListIcon as={ChevronRightIcon} />
          Managed a team of developers to build an online assessment platform
        </ListItem>
        <ListItem>
          <ListIcon as={ChevronRightIcon} />
          Used Notion to build an agile task management system and document the
          project
        </ListItem>
        <ListItem>
          <ListIcon as={ChevronRightIcon} />
          Worked with management to understand and communicate the complex goals
        </ListItem>
        <ListItem>
          <ListIcon as={ChevronRightIcon} />
          Organised and ran planning meetings to define implementation timelines
        </ListItem>
        <ListItem>
          <ListIcon as={ChevronRightIcon} />
          Worked with external clients and learned about expectation management
        </ListItem>
      </UnorderedList>
    </Text>
  ),
  techUsed: ["Notion"],
};

export const xp_bw: ExperienceProps = {
  key: "xp_bw",
  startDate: "19th April 2022",
  endDate: "8th Jan 2024",
  title: "Frontend Developer",
  company: "Brainnwave Ltd / Hatch Ltd",
  blurb: (
    <Text>
      <UnorderedList styleType="none">
        <ListItem>
          <ListIcon as={ChevronRightIcon} />
          Used Typescript to build up a component library to implement the
          company's design system provided from Figma.
        </ListItem>
        <ListItem>
          <ListIcon as={ChevronRightIcon} />
          Used Storybook to visualise and develop components.
        </ListItem>
        <ListItem>
          <ListIcon as={ChevronRightIcon} />
          Integrated the library into a React SaaS platform for report building.{" "}
        </ListItem>
        <ListItem>
          <ListIcon as={ChevronRightIcon} />
          Programmed a dynamic data visualisation builder using Cube JS to pull
          data from the Postgres database and then displayed charts using the
          Apache Echarts library.{" "}
        </ListItem>
      </UnorderedList>
      My role with Hatch was primarily to facilitate continuing to work with
      Brainnwave after having moved to Canada.
    </Text>
  ),
  techUsed: [
    "React",
    "Typescript",
    "NodeJS",
    "Cube JS",
    "Directus",
    "Postgres",
    "Storybook",
    "REST API",
    "AWS",
  ],
};

export const xp_jpm: ExperienceProps = {
  key: "xp_jpm",
  startDate: "17th September 2020",
  endDate: "14th April 2022",
  title: "Analyst",
  company: "JP Morgan Software Engineering Program",
  blurb: (
    <Text>
      <UnorderedList styleType="none">
        <ListItem>
          <ListIcon as={ChevronRightIcon} />
          Developed an ETL monitoring dashboard using React.
        </ListItem>
        <ListItem>
          <ListIcon as={ChevronRightIcon} />
          Used Springboot to build a REST service that accessed a MariaDB
          database.{" "}
        </ListItem>
        <ListItem>
          <ListIcon as={ChevronRightIcon} />
          Managed the application state using Redux.{" "}
        </ListItem>
      </UnorderedList>
      This has given me a long-term view of project development and allowed me
      to develop a better understanding of receiving and prioritising
      requirements.
    </Text>
  ),
  techUsed: ["React", "NodeJS", "MariaDB", "Springboot", "REST API"],
};

export const xp_sec: ExperienceProps = {
  key: "xp_sec",
  startDate: "2017",
  endDate: "2020",
  title: "Door Supervisor",
  company: "Various Companies",
  blurb: (
    <UnorderedList styleType="none">
      <ListItem>
        <ListIcon as={ChevronRightIcon} />
        Worked at the Oran Mor and The Garage in Glasgow as well as Strike Force
        Security who did event work in St Andrews
      </ListItem>
      <ListItem>
        <ListIcon as={ChevronRightIcon} />
        Worked as part of the security team in various pubs, clubs and event
        spaces
      </ListItem>
      <ListItem>
        <ListIcon as={ChevronRightIcon} />
        Responded to high pressure situations in a calm and de-escalating manner
      </ListItem>
    </UnorderedList>
  ),
};

export const xp_i: ExperienceProps = {
  key: "xp_i",
  startDate: "17th June 2019",
  endDate: "23rd August 2019",
  title: "Intern Analyst",
  company: "JP Morgan Summer Technology Analyst",
  blurb: (
    <UnorderedList styleType="none">
      <ListItem>
        <ListIcon as={ChevronRightIcon} />
        Worked within Asset Wealth Management for 10 weeks as a developer.
      </ListItem>
      <ListItem>
        <ListIcon as={ChevronRightIcon} />
        Implemented various components in React to refactor an existing
        application.{" "}
      </ListItem>
      <ListItem>
        <ListIcon as={ChevronRightIcon} />
        Managed the application state using Redux.{" "}
      </ListItem>
    </UnorderedList>
  ),
  techUsed: ["React", "NodeJS"],
};

export const xp_sh5: ExperienceProps = {
  key: "xp_sh5",
  startDate: "2019",
  title: "Musync Creator",
  company: "STACS Hack 5 - Hackathon",
  blurb: (
    <UnorderedList styleType="none">
      <ListItem>
        <ListIcon as={ChevronRightIcon} />
        Used React to build a frontend that integrated with Spotify's public
        API.
      </ListItem>
      <ListItem>
        <ListIcon as={ChevronRightIcon} />
        Implemented OAuth to authenticate users and managed tokens to make
        calls.
      </ListItem>
      <ListItem>
        <ListIcon as={ChevronRightIcon} />
        Implemented two features which have since been properly developed by
        Spotify: group session control and playlists that blend two people's
        music tastes together.
      </ListItem>
    </UnorderedList>
  ),
  techUsed: ["React", "NodeJS", "OAuth", "Spotify's public API"],
};

export const xp_sh4: ExperienceProps = {
  key: "xp_sh4",
  startDate: "2018",
  title: "Pointless Button Creator",
  company: "STACS Hack 4 - Hackathon",
  blurb: (
    <UnorderedList styleType="none">
      <ListItem>
        <ListIcon as={ChevronRightIcon} />
        Designed and implemented a cookie-clicker-style game that centred around
        a pointless button.{" "}
      </ListItem>
      <ListItem>
        <ListIcon as={ChevronRightIcon} />
        Implemented using HTML5 grid systems, JQuery for dynamic styling, and
        local storage to track data.
      </ListItem>
      <ListItem>
        <ListIcon as={ChevronRightIcon} />
        For this Hackathon, I received the prize for best presentation due to my
        charming demonstration of my game.
      </ListItem>
      <ListItem>
        <ExternalLink
          displayText={"View Here"}
          hrefVal={"https://mcwillia.github.io/PointlessButton/"}
          isExternal
        />
      </ListItem>
    </UnorderedList>
  ),
  techUsed: ["HTML5 grid systems", "JQuery"],
};
