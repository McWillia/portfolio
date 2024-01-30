import { render, screen } from "@testing-library/react";
import { BubbleCard } from "./BubbleCard";
import React from "react";
import { Provider } from "react-redux";
import store from "../../application/redux/store";
import "@testing-library/jest-dom";
import { Text } from "@chakra-ui/react";

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
        <BubbleCard children={<Text>child text</Text>} />
      </Provider>,
    );
    expect(screen.getByTestId("bubble-card")).toBeInTheDocument();
    expect(screen.getByText("child text")).toBeInTheDocument();
  });
});
