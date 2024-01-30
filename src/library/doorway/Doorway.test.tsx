import { render, screen } from "@testing-library/react";
import { Doorway } from "./Doorway";
import React from "react";
import { Provider } from "react-redux";
import store from "../../application/redux/store";
import "@testing-library/jest-dom";

describe("Doorway Component", () => {
  const setupMediaQuery = (isDesktopOrLaptopVal: boolean) => {
    window.matchMedia = jest.fn().mockImplementation(() => ({
      matches: isDesktopOrLaptopVal,
      media: "",
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
    }));
  };

  it("renders component desktop", () => {
    setupMediaQuery(true);
    render(
      <Provider store={store}>
        <Doorway
          skyColour={"dawn.secondary.500"}
          buildingColour={"dawn.primary.500"}
        />
      </Provider>,
    );
    expect(screen.getByTestId("doorway")).toBeInTheDocument();
  });

  it("renders component mobile", () => {
    setupMediaQuery(false);
    render(
      <Provider store={store}>
        <Doorway
          skyColour={"dawn.secondary.500"}
          buildingColour={"dawn.primary.500"}
        />
      </Provider>,
    );
    expect(screen.getByTestId("doorway")).toBeInTheDocument();
  });
});
