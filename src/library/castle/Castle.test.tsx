import { render, screen } from "@testing-library/react";
import { Castle } from "./Castle";
import React from "react";
import { Provider } from "react-redux";
import store from "../../application/redux/store";
import "@testing-library/jest-dom";

describe("Castle Component", () => {
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
        <Castle
          skyColour={"dawn.secondary.500"}
          buildingColour={"dawn.primary.500"}
        />
      </Provider>,
    );
    expect(screen.getByTestId("doorway")).toBeInTheDocument();
    expect(screen.getByTestId("flag")).toBeInTheDocument();
    expect(screen.getByTestId("header")).toBeInTheDocument();
    expect(screen.getByTestId("castle-middle-desktop")).toBeInTheDocument();
  });

  it("renders component mobile", () => {
    setupMediaQuery(false);
    render(
      <Provider store={store}>
        <Castle
          skyColour={"dawn.secondary.500"}
          buildingColour={"dawn.primary.500"}
        />
      </Provider>,
    );
    expect(screen.getByTestId("doorway")).toBeInTheDocument();
    expect(screen.getByTestId("flag")).toBeInTheDocument();
    expect(screen.getByTestId("header")).toBeInTheDocument();
    expect(screen.getByTestId("castle-middle-mobile")).toBeInTheDocument();
  });
});
