import { extendBaseTheme } from "@chakra-ui/react";
import { ButtonThemeConfig } from "../../library/button";

// https://www.adobe.com/creativecloud/design/hub/guides/colors-that-go-well-with-maroon.html#:~:text=Teal%20is%20maroon's%20complementary%20shade,lets%20maroon's%20luxurious%20warmth%20radiate.
// https://coolors.co/210202-6d3636-ffbf00-66b2b2-ffecd1

const MaroonTheme = extendBaseTheme({
  colors: {
    primary: {
      500: "#6D3636", //Maroon (Garnet)
      100: "#C17171", //Old rose
    },
    dark: {
      500: "#210202", // licorice
    },
    light: {
      500: "#FFBF00", // amber
    },
    contrast: {
      500: "#00DADA", //
    },
    offwhite: {
      500: "#FFECD1", //papaya whip
    },
    grey: {
      900: "#353333",
      500: "#4D4949",
      100: "#827f7f",
    },
  },
  components: {
    Button: ButtonThemeConfig,
  },
});

const SunsetTheme = extendBaseTheme({
  colors: {
    primary: {
      500: "#FF5A5A", //
      100: "#ffd1d1", //
    },
    dark:{
      500:"#C04CFD" // 
    },
    light:{
      500:"#FF8A37" // 
    },
    contrast:{
      500:"#5E2BFF" //
    },
    offwhite:{
      500:"#FDED3C" //

    },
    grey:{
      900:"#353333",
      500:"#4D4949",
      100:"#827f7f"

    }
  },
  components: {
    Button: ButtonThemeConfig,
  },
});

export const ThemesExport = { MaroonTheme, SunsetTheme };
