import { extendBaseTheme } from "@chakra-ui/react";
import { ButtonThemeConfig } from "../../library/button";

// https://www.adobe.com/creativecloud/design/hub/guides/colors-that-go-well-with-maroon.html#:~:text=Teal%20is%20maroon's%20complementary%20shade,lets%20maroon's%20luxurious%20warmth%20radiate.
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
      500: "#66b2b2", //verdigris
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

// // https://www.adobe.com/creativecloud/design/hub/guides/colors-that-go-well-with-maroon.html#:~:text=Teal%20is%20maroon's%20complementary%20shade,lets%20maroon's%20luxurious%20warmth%20radiate.
// const BurgandyTheme = extendBaseTheme({
//   colors: {
//     primary: {
//       500: "#6D3636", //Maroon (Garnet)
//       100: "#C17171", //Old rose
//     },
//     dark:{
//       500:"#210202" // licorice
//     },
//     light:{
//       500:"#FFBF00" // amber
//     },
//     contrast:{
//       500:"#66b2b2" //verdigris
//     },
//     offwhite:{
//       500:"#FFECD1" //papaya whip

//     },
//     grey:{
//       900:"#353333",
//       500:"#4D4949",
//       100:"#827f7f"

//     }
//   },
//   components: {
//     Button: ButtonThemeConfig,
//   },
// });

export const ThemesExport = { MaroonTheme };
