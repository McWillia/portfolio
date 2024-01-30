import { CHANGE_THEME } from "./actions";
import { COLOUR_THEME_OPTIONS, initialState } from "./constants";

const themeReducer = (state = initialState, action: { type: string }) => {
  switch (action.type) {
    case CHANGE_THEME:
      if (state.colourTheme === COLOUR_THEME_OPTIONS.day) {
        return {
          colourTheme: COLOUR_THEME_OPTIONS.night,
        };
      } else if (state.colourTheme === COLOUR_THEME_OPTIONS.night) {
        return {
          colourTheme: COLOUR_THEME_OPTIONS.dawn,
        };
      } else {
        return {
          colourTheme: COLOUR_THEME_OPTIONS.day,
        };
      }

    default:
      return state;
  }
};

export default themeReducer;
