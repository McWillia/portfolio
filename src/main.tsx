import * as React from "react";
import * as ReactDOM from "react-dom/client";
import App from "./application/App";

import { ChakraBaseProvider } from "@chakra-ui/react";
import { ThemesExport } from "./application/config/theme";

import '@fontsource/silkscreen/400.css';
import { Provider } from "react-redux";
import store from "./application/redux/store";



const rootElement = document.getElementById("root");
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <ChakraBaseProvider theme={ThemesExport.SunsetTheme}>
        <App />
      </ChakraBaseProvider>
    </Provider>
  </React.StrictMode>,
);
