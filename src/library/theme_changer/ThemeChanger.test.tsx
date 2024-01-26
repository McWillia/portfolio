import { render, screen } from "@testing-library/react";
import { ThemeChanger } from './ThemeChanger';
import React from "react";

describe('ThemeChanger Component', () => {
  
    it("renders App component", async () => {
        render(<ThemeChanger />);
        const linkElement = await screen.findByText(/Click/i);
        expect(linkElement).toBeInTheDocument();
      });
});
