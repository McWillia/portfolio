export enum COLOUR_THEME_OPTIONS{
    'day',
    'night',
    'dawn'
}

export interface StateType {
    colourTheme: COLOUR_THEME_OPTIONS
}

export const initialState: StateType = {
    colourTheme: COLOUR_THEME_OPTIONS.day
};
