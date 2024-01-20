import { ExperienceProps } from "../../library/experience";

export const getAboutText =
  "I am a young professional trained in software engineering and software development practices. I completed my Bachelors degree in Computer Science at the University of St Andrews in 2020 and since then have been working as a frontend developer. Recently I've been thinking about other roles in the software development space and to that end, got myself certified as a scrum master.";

export const getCertifications: ExperienceProps = {
  key: "cert_csm",
  startDate: "Dec 2023",
  endDate: "Dec 2025",
  title: "Scrum Alliance",
  company: "Certified Scrum Master",
  blurb:
    "I validated my knowledge and understanding of agile methodologies and their use in practical software development as well as better understand the nuance of the roles and responsibilities of the product and development teams.",
};

export const getSiteInfo =
  "I built this site using React and Typescript. It makes use of the Chakra UI component library for the styled system and uses Vite as the build manager. I made use of redux for the theme control in order to not need to pass around a theme key to every child, instead letting them pull from the global state if they need to interact.";

export const xp_bw: ExperienceProps = {
  key: "xp_bw",
  startDate: "19th April 2022",
  endDate: "8th Jan 2024",
  title: "Frontend Developer",
  company: "Brainnwave Ltd / Hatch Ltd",
  blurb:
    "My role at Brainnwave has been using Typescript to build up a component library to implement the company's design system provided from Figma. I integrated the library into a React SaaS platform for report building. I programmed a dynamic data visualisation builder using Cube JS to pull data from the Postgres database and then displayed charts using the Apache Echarts library. I integrated with the backend storage solution using Directus for CMS management. I’ve gained a better understanding of building scalable client systems as well as a deeper understanding of the react ecosystem using tools such as storybook to visualise and develop components. My role with Hatch was primarily to facilitate continuing to work with Brainnwave after having moved to Canada.",
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
  blurb:
    "I developed an ETL monitoring dashboard using React to implement the frontend, Springboot to build the backend and Maria DB as a database. I integrated API routes in Spring that were then called in React to visualise the current status of the ETL job. I managed the application state using Redux. This has given me a long-term view of project development and allowed me to develop a better understanding of receiving and prioritising requirements.",
  techUsed: ["React", "NodeJS", "MariaDB", "Springboot", "REST API"],
};

export const xp_i: ExperienceProps = {
  key: "xp_i",
  startDate: "17th June 2019",
  endDate: "23rd August 2019",
  title: "Intern Analyst",
  company: "JP Morgan Summer Technology Analyst",
  blurb:
    "I worked within an Asset Wealth Management software development team for 10 weeks over the summer during which time I implemented various components in React to build towards refactoring an existing application. This allowed me to see what working in an office would be like as well as how teams within JPMorgan various lines of business operate.",
  techUsed: ["React", "NodeJS"],
};

export const xp_sh5: ExperienceProps = {
  key: "xp_sh5",
  startDate: "2019",
  title: "Musync Creator",
  company: "STACS Hack 5 - Hackathon",
  blurb:
    "I used React to build a frontend that integrated with Spotify's public API. We implemented OAuth to authenticate users and managed tokens to make calls. We implemented two features which have since been properly developed by Spotify: group session control and playlists that blend two people's music tastes together.",
  techUsed: ["React", "NodeJS", "OAuth", "Spotify's public API"],
};

export const xp_sh4: ExperienceProps = {
  key: "xp_sh4",
  startDate: "2018",
  title: "Pointless Button Creator",
  company: "STACS Hack 4 - Hackathon",
  blurb:
    "During a 24-hour hackathon at the University of St Andrews, I designed, implemented, and iterated a cookie-clicker-style game that centred around a pointless button. The game was implemented using HTML5 grid systems, JQuery for dynamic styling, and local storage to track data. For this Hackathon, I received the prize for best presentation due to my charming demonstration of my game.",
  techUsed: ["HTML5 grid systems", "JQuery"],
};
