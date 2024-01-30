
import { render, screen } from "@testing-library/react";
import { Experience } from './Experience';
import React from "react";
import { Provider } from "react-redux";
import store from "../../application/redux/store";
import '@testing-library/jest-dom';


describe('Experience Component', () => {
    
    const setupMediaQuery = (isDesktopOrLaptopVal: boolean) => {
        window.matchMedia = jest.fn().mockImplementation(() => ({
            matches: isDesktopOrLaptopVal,
            media: '',
            onchange: null,
            addListener: jest.fn(),
            removeListener: jest.fn()
        }));
    }

    it("renders component desktop", () => {
        setupMediaQuery(true);
        render(       
          <Provider store={store}>
            <Experience key={"test"} startDate={"start"} title={"title"} company={"company"} />
          </Provider>
        );
        expect(screen.getByTestId('experience')).toBeInTheDocument();
        expect(screen.getByText(/start/i)).toBeInTheDocument();
        expect(screen.getByText(/title/i)).toBeInTheDocument();
        expect(screen.getByText(/company/i)).toBeInTheDocument();
    });

    it("should show end date if provided", () => {
      setupMediaQuery(true);
      render(       
        <Provider store={store}>
          <Experience key={"test"} startDate={"start"} endDate={"end"} title={"title"} company={"company"} />
        </Provider>
      );
      expect(screen.getByTestId('experience')).toBeInTheDocument();
      expect(screen.getByText(/start/i)).toBeInTheDocument();
      expect(screen.getByText(/end/i)).toBeInTheDocument();
      expect(screen.getByText(/title/i)).toBeInTheDocument();
      expect(screen.getByText(/company/i)).toBeInTheDocument();
  });

  it("should show blurb if provided", () => {
    setupMediaQuery(true);
    render(       
      <Provider store={store}>
        <Experience key={"test"} startDate={"start"} blurb={"blurb"} title={"title"} company={"company"} />
      </Provider>
    );
    expect(screen.getByTestId('experience')).toBeInTheDocument();
    expect(screen.getByText(/start/i)).toBeInTheDocument();
    expect(screen.getByText(/blurb/i)).toBeInTheDocument();
    expect(screen.getByText(/title/i)).toBeInTheDocument();
    expect(screen.getByText(/company/i)).toBeInTheDocument();
});

it("should show tech stack if provided", () => {
  setupMediaQuery(true);
  render(       
    <Provider store={store}>
      <Experience key={"test"} startDate={"start"} techUsed={["tech1","tech2"]} title={"title"} company={"company"} />
    </Provider>
  );
  expect(screen.getByTestId('experience')).toBeInTheDocument();
  expect(screen.getByText(/start/i)).toBeInTheDocument();
  expect(screen.getByText(/tech1/i)).toBeInTheDocument();
  expect(screen.getByText(/tech2/i)).toBeInTheDocument();
  expect(screen.getByText(/title/i)).toBeInTheDocument();
  expect(screen.getByText(/company/i)).toBeInTheDocument();
});


it("should show all parts if provided", () => {
  setupMediaQuery(true);
  render(       
    <Provider store={store}>
      <Experience key={"test"} startDate={"start"} endDate={"end"} blurb={"blurb"} techUsed={["tech1","tech2"]} title={"title"} company={"company"} />
    </Provider>
  );
  expect(screen.getByTestId('experience')).toBeInTheDocument();
  expect(screen.getByText(/start/i)).toBeInTheDocument();
  expect(screen.getByText(/end/i)).toBeInTheDocument();
  expect(screen.getByText(/blurb/i)).toBeInTheDocument();
  expect(screen.getByText(/tech1/i)).toBeInTheDocument();
  expect(screen.getByText(/tech2/i)).toBeInTheDocument();
  expect(screen.getByText(/title/i)).toBeInTheDocument();
  expect(screen.getByText(/company/i)).toBeInTheDocument();
});



    

    it("renders component mobile", () => {
        setupMediaQuery(false);
        render(       
          <Provider store={store}>
            <Experience key={"test"} startDate={"start"} title={"title"} company={"company"} />
          </Provider>
        );
        expect(screen.getByTestId('experience')).toBeInTheDocument();
    });
  
});
