import React from "react";
import { Flex } from "@chakra-ui/react";
import { Header } from "../header";
import { Middle } from "../middle";
import { Doorway } from "../doorway";

interface CastleProps {
  skyColour: string;
  buildingColour: string;
}

const Castle = ({
  skyColour = "day.light.500",
  buildingColour = "day.primary.500",
}: CastleProps) => (
  <Flex w={"100%"} flexDirection={"column"} flexGrow={1}>
    <Header skyColour={skyColour} buildingColour={buildingColour} />
    <Middle buildingColour={buildingColour} />
    <Doorway skyColour={skyColour} buildingColour={buildingColour} />
  </Flex>
);

export { Castle, type CastleProps };
