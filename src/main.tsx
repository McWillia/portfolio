import * as React from "react";
import * as ReactDOM from "react-dom/client";
import App from "./application/App";

import { ChakraBaseProvider } from "@chakra-ui/react";
import { ThemesExport } from "./application/config/theme";

const rootElement = document.getElementById("root");
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <ChakraBaseProvider theme={ThemesExport.MaroonTheme}>
      <App />
    </ChakraBaseProvider>
  </React.StrictMode>,
);
