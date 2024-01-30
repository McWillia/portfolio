import { render, screen } from "@testing-library/react";
import { ExternalLink } from './ExternalLink';
import React from "react";
import { Provider } from "react-redux";
import store from "../../application/redux/store";
import '@testing-library/jest-dom';


describe('Stlyed Link Component', () => {

    it("renders component", () => {
        render(       
          <Provider store={store}>
            <ExternalLink displayText={"displayText"} hrefVal={""}  />
          </Provider>
        );
        
        expect(screen.getByTestId('external-link')).toBeInTheDocument();
        expect(screen.getByText(/displayText/i)).toBeInTheDocument();
    });
});
