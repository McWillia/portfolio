import React, { useState } from "react";
import { Flex, Text, Checkbox, CheckboxGroup, Stack } from "@chakra-ui/react";
import { BubbleCard } from "../../library/bubble_card";
import { ExternalLink } from "../../library/external_link";
import { useSelector } from "react-redux";
import { COLOUR_THEME_OPTIONS, StateType } from "../redux/constants";

interface artInterface {
  filePath: string;
  title: string;
  blurb?: string;
  tags?: string[];
}

const TAG_LIST = {
  written: "written",
  prose: "prose",
  poetry: "poetry",
  art: "art",
  colour: "colour",
  monotone: "monotone",
};

const ArtBody = () => {
  const artPieces: artInterface[] = [
    {
      filePath: "/wall.pdf",
      title: "A Wall of Monitors Showing Absolutely Nothing",
      blurb:
        "Written a while ago, I want to saw in 2019 or maybe 2020. It's mad I can't remember if its pre or post covid.",
      tags: [TAG_LIST.written, TAG_LIST.prose],
    },
    {
      filePath: "/Clearence.pdf",
      title: "Clearance",
      blurb:
        "I wrote and submitted this for my friend's literary mag, Glyph, for the Heros and Villains theme. Unfortunately, it didn't make the cut but I was pleased to have created the idea and did it justice. I thought it was an interesting feeling to explore.",
      tags: [TAG_LIST.written, TAG_LIST.prose],
    },

    {
      filePath: "/alien2.png",
      title: "An Alien on my wall",
      tags: [TAG_LIST.art, TAG_LIST.colour, TAG_LIST.monotone],
    },
    {
      filePath: "/alien3.png",
      title: "A second Alien on my wall",
      tags: [TAG_LIST.art, TAG_LIST.colour, TAG_LIST.monotone],
    },
    {
      filePath: "/alien4.png",
      title: "An Alien on a wall in Canada",
      tags: [TAG_LIST.art, TAG_LIST.colour, TAG_LIST.monotone],
    },
    {
      filePath: "/alien5.png",
      title: "A second Alien on a wall in Canada",
      tags: [TAG_LIST.art, TAG_LIST.colour, TAG_LIST.monotone],
    },
    {
      filePath: "/alien1.png",
      title: "An Alien I think is in Canada?",
      tags: [TAG_LIST.art, TAG_LIST.colour, TAG_LIST.monotone],
    },
    {
      filePath: "/self1.png",
      title: "Self Portrait",
      blurb:
        "This is a drawing of myself that I sent to Layli while she was in Canada and I hadn't left yet. The photo it was drawn from was a ferry ride from Gourock to whatever's on the other side. I was going to draw the others but I was so pleased with it. I left it. I rarely leave it.",
      tags: [TAG_LIST.art, TAG_LIST.colour],
    },
  ];

  const colourThemeVal: COLOUR_THEME_OPTIONS = useSelector(
    (state: StateType) => state.colourTheme,
  );

  const [filterValues, setFilterValues] = useState<string[]>([]);

  console.log(filterValues);

  return (
    <Flex flexDirection={"column"}>
      <BubbleCard
        flexDirection={"column"}
        margin={2}
        padding={2}
        bgColor={`${COLOUR_THEME_OPTIONS[colourThemeVal]}.primary.100`}
      >
        <CheckboxGroup onChange={(e: string[]) => setFilterValues(e)}>
          <Stack spacing={[1, 5]} direction={["column", "row"]}>
            {Object.values(TAG_LIST).map((value) => (
              <Checkbox checked value={value}>
                {value}
              </Checkbox>
            ))}
          </Stack>
        </CheckboxGroup>
      </BubbleCard>

      {artPieces
        .filter((artPiece: artInterface) =>
          filterValues.length === 0
            ? true
            : artPiece.tags
            ? artPiece.tags.find((tag) => filterValues.includes(tag))
            : false,
        )
        .map((artPiece: artInterface) => (
          <BubbleCard flexDirection={"column"} margin={2} padding={2}>
            <Text fontSize={"3xl"} fontFamily={"silk"}>
              {artPiece.title}
            </Text>
            {artPiece.blurb ? <Text>{artPiece.blurb}</Text> : <div />}
            <ExternalLink
              displayText={"Link"}
              hrefVal={"/portfolio" + artPiece.filePath}
            />
          </BubbleCard>
        ))}
    </Flex>
  );
};

export { ArtBody };
