import '@testing-library/jest-dom';
import { COLOUR_THEME_OPTIONS, initialState } from "../../application/redux/constants";
import themeReducer from "./reducers";
import { changeTheme } from "./actions";


describe('reducer.ts', () => {


    it("should return state with no command type", () => {
        const reducer = themeReducer;
        
        expect(reducer(initialState, {
            type: ''
        })).toStrictEqual(initialState);
    });


    it("should return if dawn then return day", () => {
        const reducer = themeReducer;
        
        
        expect(reducer(initialState, changeTheme())).toStrictEqual({
            colourTheme: COLOUR_THEME_OPTIONS.day
        });
    });
    it("should return if day then return night", () => {
        const reducer = themeReducer;
        
        
        expect(reducer({colourTheme:COLOUR_THEME_OPTIONS.day}, changeTheme())).toStrictEqual({
            colourTheme: COLOUR_THEME_OPTIONS.night
        });
    });

    it("should return if night then return dawn", () => {
        const reducer = themeReducer;
        
        
        expect(reducer({colourTheme:COLOUR_THEME_OPTIONS.night}, changeTheme())).toStrictEqual({
            colourTheme: COLOUR_THEME_OPTIONS.dawn
        });
    });

     
});
