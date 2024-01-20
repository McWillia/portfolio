import React from "react";
import { Desktop } from "./layouts/Desktop";
import { Mobile } from "./layouts/Mobile";
import { useMediaQuery } from "@chakra-ui/react";

function App() {
  const [isDesktopOrLaptop] = useMediaQuery("(min-width: 1244px)");

  return isDesktopOrLaptop ? <Desktop /> : <Mobile />;
}

export default App;
