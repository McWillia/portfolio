import { render, screen } from "@testing-library/react";
import { Header } from "./Header";
import React from "react";
import { Provider } from "react-redux";
import store from "../../application/redux/store";
import "@testing-library/jest-dom";

describe("Header Component", () => {
  it("renders component", () => {
    render(
      <Provider store={store}>
        <Header
          skyColour={"dawn.secondary.500"}
          buildingColour={"dawn.primary.500"}
        />
      </Provider>,
    );

    expect(screen.getByTestId("scottish_flag")).toBeInTheDocument();
    expect(screen.getByTestId("header")).toBeInTheDocument();
  });
});
