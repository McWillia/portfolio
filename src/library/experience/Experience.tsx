import React from "react";
import { Flex, Text } from "@chakra-ui/react";

interface ExperienceProps {
  startDate:string,
  endDate?:string,
  title:string,
  company:string,
  blurb:string,
  techUsed?:string[]
}


<Text fontSize={"2xl"} fontFamily={"silk"} id="xp_section">Experience</Text>




const Experience = ({startDate, endDate, title, company, blurb, techUsed} : ExperienceProps) => <Flex direction={"column"} paddingBottom={5}>
  <Flex 
    fontSize={"xl"}
    direction={"row"}
    // fontFamily={"silk"}
  >
    <Text fontWeight={"bold"}>{company}</Text> / <Text>{title}</Text>
  </Flex>
  {endDate && endDate.length > 0 ? <Text fontWeight={"thin"}>{startDate} - {endDate}</Text> :  <Text fontWeight={"thin"}>{startDate}</Text>}
  
  <Text>{blurb}</Text>

  {techUsed && <Flex direction={"row"} gap='2' fontWeight={"light"}>
    Technologies used: {techUsed.map((tech)=><Text key={`tech-${tech}`}>{tech}</Text>)}

  </Flex>}
</Flex>

export { Experience, type ExperienceProps };
