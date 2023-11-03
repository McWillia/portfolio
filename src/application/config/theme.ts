import { extendBaseTheme } from "@chakra-ui/react";
import { ButtonThemeConfig } from "../../library/button";

const DefaultTheme = extendBaseTheme({
  colors: {
    Marroon: {
      500: "#4a1e35",
      100: "#96607c",
    },
  },
  components: {
    Button: ButtonThemeConfig,
  },
});

export const ThemesExport = { DefaultTheme };
