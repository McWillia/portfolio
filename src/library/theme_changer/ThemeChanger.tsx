import React from "react";
import { Button } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { changeTheme } from "../../application/redux/actions";
import {
  COLOUR_THEME_OPTIONS,
  StateType,
} from "../../application/redux/constants";

// interface ThemeChangerProps {
// }

const SUN_SIZE = 24;

const ThemeChanger = () => {
  const colourThemeVal: COLOUR_THEME_OPTIONS = useSelector(
    (state: StateType) => state.colourTheme,
  );

  const dispatch = useDispatch();

  const dispatchChangeTheme = () => {
    dispatch(changeTheme());
  };

  let bg;

  switch (colourThemeVal) {
    case COLOUR_THEME_OPTIONS.day:
      bg = "orange.500";
      break;
    case COLOUR_THEME_OPTIONS.night:
      bg = "white";
      break;
    default:
      bg = "#ffe9ad";
      break;
  }

  return (
    <Button
      h={SUN_SIZE}
      w={SUN_SIZE}
      bg={bg}
      flexGrow={0}
      clipPath={"ellipse(100% 100% at 100% 0%)"}
      onClick={dispatchChangeTheme}
      fontFamily={"silk"}
      justifyContent={"center"}
      alignItems={"start"}
      data-testid="theme-changer"
    >
      Click Me
    </Button>
  );
};

export { ThemeChanger, SUN_SIZE };
