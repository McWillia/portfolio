import { render, screen } from "@testing-library/react";
import { StyledLink } from "./StyledLink";
import React from "react";
import { Provider } from "react-redux";
import store from "../../application/redux/store";
import "@testing-library/jest-dom";

describe("Stlyed Link Component", () => {
  it("renders component", () => {
    render(
      <Provider store={store}>
        <StyledLink displayText={"displayText"} hrefVal={""} />
      </Provider>,
    );

    expect(screen.getByTestId("styled-link")).toBeInTheDocument();
    expect(screen.getByText(/displayText/i)).toBeInTheDocument();
  });
});
