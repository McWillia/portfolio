import { fireEvent, render, screen } from "@testing-library/react";
import { ThemeChanger } from './ThemeChanger';
import React from "react";
import { Provider } from "react-redux";
import store from "../../application/redux/store";
import '@testing-library/jest-dom';
import { COLOUR_THEME_OPTIONS } from "../../application/redux/constants";


describe('ThemeChanger Component', () => {

    it("renders App component", () => {
        render(       
          <Provider store={store}>
            <ThemeChanger />
          </Provider>
        );
        const element = screen.getByTestId('theme-changer');
        
        expect(element).toBeInTheDocument();
    });

    it("On click it changes redux state", () => {
        render(
          <Provider store={store}>
            <ThemeChanger />
          </Provider>
        )

        expect(store.getState().colourTheme).toEqual(COLOUR_THEME_OPTIONS.dawn)

        fireEvent.click(screen.getByText(/Click Me/i))

        expect(store.getState().colourTheme).toEqual(COLOUR_THEME_OPTIONS.day)
        fireEvent.click(screen.getByText(/Click Me/i))

        expect(store.getState().colourTheme).toEqual(COLOUR_THEME_OPTIONS.night)

        fireEvent.click(screen.getByText(/Click Me/i))

        expect(store.getState().colourTheme).toEqual(COLOUR_THEME_OPTIONS.dawn)

    });
});
