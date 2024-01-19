import React from "react";
import { Box } from "@chakra-ui/react";

interface HeaderProps {
  skyColour: string;
  buildingColour: string;
}

const ROOF_CLIP_PATH =
  "polygon(15% 100%, 29% 100%, 29% 0, 43% 0, 43% 100%, 57% 100%, 57% 0, 71% 0, 71% 100%, 85% 100%, 85% 0, 100% 0, 100% 100%, 0 100%, 0 0, 15% 0)";

const Header = ({ skyColour, buildingColour }: HeaderProps) => {
  return (
    <Box w={"100%"} flexGrow={0} bg={skyColour}>
      <Box h={16} bg={skyColour} />
      <Box h={16} bg={buildingColour} clipPath={ROOF_CLIP_PATH} />
    </Box>
  );
};
export { Header, type HeaderProps };
