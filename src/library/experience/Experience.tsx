import React, { ReactNode } from "react";
import { Flex, Text, useMediaQuery } from "@chakra-ui/react";

interface ExperienceProps {
  key: string;
  startDate: string;
  endDate?: string;
  title: string;
  company: string;
  blurb?: ReactNode;
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
}: ExperienceProps) => {

  const [isDesktopOrLaptop] = useMediaQuery("(min-width: 1244px)");

  return (
    <Flex direction={"column"} paddingBottom={5}>
      <Flex fontSize={"xl"} direction={isDesktopOrLaptop ? "row" : "column"}>
        <Text fontWeight={"bold"}>{company}</Text> <Text>/ {title}</Text>
      </Flex>
      {endDate && endDate.length > 0 ? (
        <Text fontWeight={"thin"}>
          {startDate} - {endDate}
        </Text>
      ) : (
        <Text fontWeight={"thin"}>{startDate}</Text>
      )}

      {blurb}

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
  )
};

export { Experience, type ExperienceProps };
