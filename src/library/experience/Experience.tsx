import React from "react";
import { Flex, Text } from "@chakra-ui/react";

interface ExperienceProps {
  key: string;
  startDate: string;
  endDate?: string;
  title: string;
  company: string;
  blurb: string;
  techUsed?: string[];
}

<Text fontSize={"2xl"} fontFamily={"silk"} id="xp_section">
  Experience
</Text>;

const Experience = ({
  startDate,
  endDate,
  title,
  company,
  blurb,
  techUsed,
}: ExperienceProps) => (
  <Flex direction={"column"} paddingBottom={5}>
    <Flex fontSize={"xl"} direction={"row"}>
      <Text fontWeight={"bold"}>{company}</Text> / <Text>{title}</Text>
    </Flex>
    {endDate && endDate.length > 0 ? (
      <Text fontWeight={"thin"}>
        {startDate} - {endDate}
      </Text>
    ) : (
      <Text fontWeight={"thin"}>{startDate}</Text>
    )}

    <Text>{blurb}</Text>

    {techUsed && (
      <Text key={`tech-used`} fontWeight={"light"}>
        {techUsed.reduce((running, next, index) => {
          return index === 0
            ? running.concat(`${next}`)
            : running.concat(`, ${next}`);
        }, "Technologies used: ")}
      </Text>
    )}
  </Flex>
);

export { Experience, type ExperienceProps };
