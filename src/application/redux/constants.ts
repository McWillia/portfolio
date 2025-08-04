export enum COLOUR_THEME_OPTIONS {
  "day",
  "night",
  "dawn",
}
export enum FLAG_OPTIONS {
  Scottish_Flag,
  Palestine_Flag,
  Sudan_Flag,
  Drc_Flag,
  Trans_Flag,
}

export interface StateType {
  colourTheme: COLOUR_THEME_OPTIONS;
  flag: FLAG_OPTIONS;
}

export const initialState: StateType = {
  colourTheme: COLOUR_THEME_OPTIONS.dawn,
  flag: FLAG_OPTIONS.Scottish_Flag,
};
