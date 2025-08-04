import { CHANGE_THEME } from "./actions";
import { COLOUR_THEME_OPTIONS, FLAG_OPTIONS, initialState } from "./constants";

const themeReducer = (state = initialState, action: { type: string }) => {
  const pick: number = Math.floor(Math.random() * 5);
  const flagPick: string | undefined = Object.keys(FLAG_OPTIONS).find(
    (_, index) => index === pick,
  );
  switch (action.type) {
    case CHANGE_THEME:
      if (state.colourTheme === COLOUR_THEME_OPTIONS.day) {
        return {
          colourTheme: COLOUR_THEME_OPTIONS.night,
          flag: flagPick,
        };
      } else if (state.colourTheme === COLOUR_THEME_OPTIONS.night) {
        return {
          colourTheme: COLOUR_THEME_OPTIONS.dawn,
          flag: flagPick,
        };
      } else {
        return {
          colourTheme: COLOUR_THEME_OPTIONS.day,
          flag: flagPick,
        };
      }

    default:
      return state;
  }
};

export default themeReducer;
