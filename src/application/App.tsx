import React from "react";
import { CVBody, AboutBody, ArtBody } from "./pages";
import { useMediaQuery } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router";
import { Box, Flex } from "@chakra-ui/react";
import { SUN_SIZE, ThemeChanger } from "../library/theme_changer";
import { COLOUR_THEME_OPTIONS, StateType } from "./redux/constants";
import { useSelector } from "react-redux";
import { Castle } from "../library/castle";

function App() {
  const [isDesktopOrLaptop] = useMediaQuery("(min-width: 1244px)");
  const colourThemeVal: COLOUR_THEME_OPTIONS = useSelector(
    (state: StateType) => state.colourTheme,
  );

  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={
            isDesktopOrLaptop ? (
              <Flex
                className="App"
                h={"100%"}
                minH={"100dvh"}
                position={"relative"}
              >
                <Flex w={"600px"} minH={"100%"} flexShrink={0}>
                  <Castle
                    skyColour={`${COLOUR_THEME_OPTIONS[colourThemeVal]}.light.500`}
                    buildingColour={`${COLOUR_THEME_OPTIONS[colourThemeVal]}.primary.500`}
                  />
                </Flex>

                <Box position={"absolute"} top={0} right={0}>
                  <ThemeChanger />
                </Box>

                <Flex
                  paddingTop={32}
                  paddingLeft={5}
                  paddingRight={5}
                  bg={`${COLOUR_THEME_OPTIONS[colourThemeVal]}.light.500`}
                  direction={"column"}
                  flexShrink={1}
                  w={"100%"}
                >
                  <Outlet />
                </Flex>
              </Flex>
            ) : (
              <Flex
                className="App"
                h={"100%"}
                position={"relative"}
                paddingTop={SUN_SIZE / 2}
                bg={`${COLOUR_THEME_OPTIONS[colourThemeVal]}.light.500`}
                flexDirection={"column"}
              >
                <Flex w={"100%"} flexShrink={0} flexDirection={"column"}>
                  <Castle
                    skyColour={`${COLOUR_THEME_OPTIONS[colourThemeVal]}.light.500`}
                    buildingColour={`${COLOUR_THEME_OPTIONS[colourThemeVal]}.primary.500`}
                  />
                </Flex>

                <Box position={"absolute"} top={0} right={0}>
                  <ThemeChanger />
                </Box>

                <Flex
                  paddingTop={5}
                  paddingLeft={5}
                  paddingRight={5}
                  bg={`${COLOUR_THEME_OPTIONS[colourThemeVal]}.light.500`}
                  direction={"column"}
                  flexShrink={1}
                  w={"100%"}
                >
                  <Outlet />
                </Flex>
              </Flex>
            )
          }
        >
          <Route path="/portfolio/" element={<AboutBody />} />
          <Route path="/portfolio/cv" element={<CVBody />} />
          <Route path="/portfolio/writing" element={<ArtBody />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
