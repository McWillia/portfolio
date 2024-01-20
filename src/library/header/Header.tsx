import React from "react";
import { Box, Flex } from "@chakra-ui/react";

interface HeaderProps {
  skyColour: string;
  buildingColour: string;
}

const ROOF_CLIP_PATH =
  "polygon(15% 100%, 29% 100%, 29% 0, 43% 0, 43% 100%, 57% 100%, 57% 0, 71% 0, 71% 100%, 85% 100%, 85% 0, 100% 0, 100% 100%, 0 100%, 0 0, 15% 0)";

const Header = ({ skyColour, buildingColour }: HeaderProps) => {
  return (
    <Box w={"100%"} flexGrow={0} bg={skyColour}>
      <Flex position={"relative"} paddingTop={2} paddingLeft={2}>
        <Box h={16} w={2} bg={"scotland.brown"} />
        <Box h={10} w={20} bg={"scotland.blue"} />
        <Box
          h={10}
          w={20}
          bg={"white"}
          clipPath={"polygon(0 5%, 0 0, 5% 0, 100% 95%, 100% 100%, 95% 100%)"}
          position={"absolute"}
          marginLeft={2}
        />
        <Box
          h={10}
          w={20}
          bg={"white"}
          clipPath={"polygon(95% 0, 100% 0, 100% 5%, 5% 100%, 0 100%, 0 95%)"}
          position={"absolute"}
          marginLeft={2}
        />
      </Flex>
      <Box h={16} bg={buildingColour} clipPath={ROOF_CLIP_PATH} />
    </Box>
  );
};
export { Header, type HeaderProps };
