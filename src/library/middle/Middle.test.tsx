import { fireEvent, render, screen } from "@testing-library/react";
import { Middle } from "./Middle";
import React from "react";
import { Provider } from "react-redux";
import store from "../../application/redux/store";
import "@testing-library/jest-dom";
import { Box } from "@chakra-ui/react";

describe("Stlyed Link Component", () => {
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
        <Middle buildingColour={"day.primary.500"} />
      </Provider>,
    );
    expect(screen.getByTestId("castle-middle-desktop")).toBeInTheDocument();
    expect(screen.getByText(/Steven/i)).toBeInTheDocument();
    expect(screen.getByText(/McWilliam/i)).toBeInTheDocument();
    expect(screen.getByText(/about/i)).toBeInTheDocument();
    expect(screen.getByText(/certification/i)).toBeInTheDocument();
    expect(screen.getByText(/tech/i)).toBeInTheDocument();
    expect(screen.getByText(/xp/i)).toBeInTheDocument();
    expect(screen.getByText(/Site/i)).toBeInTheDocument();
  });

  it("renders component mobile", () => {
    setupMediaQuery(false);
    render(
      <Provider store={store}>
        <Middle buildingColour={"day.primary.500"} />
      </Provider>,
    );
    expect(screen.getByTestId("castle-middle-mobile")).toBeInTheDocument();
    expect(screen.getByText(/Steven/i)).toBeInTheDocument();
    expect(screen.getByText(/McWilliam/i)).toBeInTheDocument();
    expect(screen.getByText(/about/i)).toBeInTheDocument();
    expect(screen.getByText(/certification/i)).toBeInTheDocument();
    expect(screen.getByText(/tech/i)).toBeInTheDocument();
    expect(screen.getByText(/xp/i)).toBeInTheDocument();
    expect(screen.getByText(/Site/i)).toBeInTheDocument();
  });

  it("should do stuff on scroll", () => {
    setupMediaQuery(true);
    render(
      <Provider store={store}>
        <Box h={"1000px"}>
          <Middle buildingColour={"day.primary.500"} />
        </Box>
      </Provider>,
    );
    const element = screen.getByTestId("castle-middle-desktop");

    expect(element).toBeInTheDocument();
    fireEvent.scroll(window, { y: 100 });
  });
});
