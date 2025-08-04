import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import { FLAG_OPTIONS, StateType } from "../../application/redux/constants";
import { useSelector } from "react-redux";

interface HeaderProps {
  skyColour: string;
  buildingColour: string;
}

const ROOF_CLIP_PATH =
  "polygon(15% 100%, 29% 100%, 29% 0, 43% 0, 43% 100%, 57% 100%, 57% 0, 71% 0, 71% 100%, 85% 100%, 85% 0, 100% 0, 100% 100%, 0 100%, 0 0, 15% 0)";

const Scottish_Flag = () => (
  <Flex
    key={FLAG_OPTIONS.Scottish_Flag}
    position={"relative"}
    paddingTop={2}
    paddingLeft={2}
    data-testid="scottish_flag"
  >
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
);

const Palestine_Flag = () => (
  <Flex
    key={FLAG_OPTIONS.Palestine_Flag}
    position={"relative"}
    paddingTop={2}
    paddingLeft={2}
    data-testid="palestine_flag"
  >
    <Box h={16} w={2} bg={"scotland.brown"} />
    <Box
      h={10}
      w={20}
      bg={"black"}
      clipPath={"polygon(0 0%, 100% 0%, 100% 33%, 0% 33%)"}
      position={"absolute"}
      marginLeft={2}
    />
    <Box
      h={10}
      w={20}
      bg={"white"}
      clipPath={"polygon(0 33%, 100% 33%, 100% 67%, 0% 67%)"}
      position={"absolute"}
      marginLeft={2}
    />
    <Box
      h={10}
      w={20}
      bg={"green"}
      clipPath={"polygon(0 67%, 100% 67%, 100% 100%, 0% 100%)"}
      position={"absolute"}
      marginLeft={2}
    />

    <Box
      h={10}
      w={20}
      bg={"palestine.red"}
      clipPath={"polygon(0 0%, 50% 50%, 0% 100%)"}
      position={"absolute"}
      marginLeft={2}
    />
  </Flex>
);

const Sudan_Flag = () => (
  <Flex
    key={FLAG_OPTIONS.Sudan_Flag}
    position={"relative"}
    paddingTop={2}
    paddingLeft={2}
    data-testid="sudan_Flag"
  >
    <Box h={16} w={2} bg={"scotland.brown"} />
    <Box
      h={10}
      w={20}
      bg={"sudan.red"}
      clipPath={"polygon(0 0%, 100% 0%, 100% 33%, 0% 33%)"}
      position={"absolute"}
      marginLeft={2}
    />
    <Box
      h={10}
      w={20}
      bg={"white"}
      clipPath={"polygon(0 33%, 100% 33%, 100% 67%, 0% 67%)"}
      position={"absolute"}
      marginLeft={2}
    />
    <Box
      h={10}
      w={20}
      bg={"black"}
      clipPath={"polygon(0 67%, 100% 67%, 100% 100%, 0% 100%)"}
      position={"absolute"}
      marginLeft={2}
    />

    <Box
      h={10}
      w={20}
      bg={"sudan.green"}
      clipPath={"polygon(0 0%, 50% 50%, 0% 100%)"}
      position={"absolute"}
      marginLeft={2}
    />
  </Flex>
);

const Drc_Flag = () => (
  <Flex
    key={FLAG_OPTIONS.Drc_Flag}
    position={"relative"}
    paddingTop={2}
    paddingLeft={2}
    data-testid="drc_Flag"
  >
    <Box h={16} w={2} bg={"scotland.brown"} />
    <Box
      h={10}
      w={20}
      bg={"drc.blue"}
      clipPath={"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"}
      position={"absolute"}
      marginLeft={2}
    />
    <Box
      h={10}
      w={20}
      bg={"drc.yellow"}
      clipPath={"polygon(0 85%, 0% 100%, 15% 100%, 100% 15%, 100% 0%, 85% 0%)"}
      position={"absolute"}
      marginLeft={2}
    />
    <Box
      h={10}
      w={20}
      bg={"drc.red"}
      clipPath={"polygon(0 90%, 0% 100%, 10% 100%, 100% 10%, 100% 0%, 90% 0%)"}
      position={"absolute"}
      marginLeft={2}
    />

    <Box
      h={10}
      w={20}
      bg={"drc.yellow"}
      clipPath={
        "polygon(16% 5%, 20% 16%, 32% 16%, 22% 24%, 26% 35%, 16% 28%, 7% 35%, 10% 24%, 1% 17%, 13% 16%)"
      }
      position={"absolute"}
      marginLeft={2}
    />
  </Flex>
);

const Trans_Flag = () => (
  <Flex
    key={FLAG_OPTIONS.Trans_Flag}
    position={"relative"}
    paddingTop={2}
    paddingLeft={2}
    data-testid="Trans_Flag"
  >
    <Box h={16} w={2} bg={"scotland.brown"} />
    <Box
      h={10}
      w={20}
      bg={"trans.blue"}
      clipPath={"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"}
      position={"absolute"}
      marginLeft={2}
    />
    <Box
      h={10}
      w={20}
      bg={"trans.pink"}
      clipPath={"polygon(0 80%, 0% 20%, 100% 20%, 100% 80%)"}
      position={"absolute"}
      marginLeft={2}
    />
    <Box
      h={10}
      w={20}
      bg={"white"}
      clipPath={"polygon(0 60%, 0% 40%, 100% 40%, 100% 60%)"}
      position={"absolute"}
      marginLeft={2}
    />
  </Flex>
);

const Header = ({ skyColour, buildingColour }: HeaderProps) => {
  const flag: FLAG_OPTIONS = useSelector((state: StateType) => {
    return state.flag;
  });

  return (
    <Box w={"100%"} flexGrow={0} bg={skyColour} data-testid="header">
      {flag == FLAG_OPTIONS.Scottish_Flag ? (
        <Scottish_Flag />
      ) : flag == FLAG_OPTIONS.Palestine_Flag ? (
        <Palestine_Flag />
      ) : flag == FLAG_OPTIONS.Sudan_Flag ? (
        <Sudan_Flag />
      ) : flag == FLAG_OPTIONS.Drc_Flag ? (
        <Drc_Flag />
      ) : (
        <Trans_Flag />
      )}
      <Box h={16} bg={buildingColour} clipPath={ROOF_CLIP_PATH} />
    </Box>
  );
};
export { Header, type HeaderProps };
