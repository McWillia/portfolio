import { extendBaseTheme } from "@chakra-ui/react";

const SunsetTheme = extendBaseTheme({
  colors: {
    scotland: {
      blue: "#005EB8",
      brown: "#8B4513",
    },
    palestine: {
      red: "#E4312b",
      green: "#149954",
    },
    sudan: {
      red: "#D21034",
      green: "#007229",
    },
    drc: {
      blue: "#0085CA",
      yellow: "#FFD100",
      red: "#EF3340",
    },
    trans: {
      blue: "#7BCCE5",
      pink: "#F4AEC8",
    },
    day: {
      primary: {
        500: "#ee5d6c", //
        100: "#fad1d5", //
      },
      dark: {
        500: "#6a0d83", //
      },
      light: {
        500: "#eeaf61", //
      },
      contrast: {
        500: "#5E2BFF", //
      },
      offwhite: {
        500: "#ffe6c7", //
      },
      grey: {
        900: "#353333",
        500: "#4D4949",
        100: "#827f7f",
      },
    },
    dawn: {
      primary: {
        500: "#7597c5", //
        100: "#dbe4f0", //
      },
      dark: {
        500: "#24344b", //
      },
      light: {
        500: "#f7c3da", //
      },
      contrast: {
        500: "#e07122", //
      },
      offwhite: {
        500: "#fff6de", //
      },
      grey: {
        900: "#353333",
        500: "#4D4949",
        100: "#827f7f",
      },
    },
    night: {
      primary: {
        500: "#373866", //
        100: "#dedeed", //
      },
      dark: {
        500: "#1b1725", //
      },
      light: {
        500: "#a499b3", //
      },
      contrast: {
        500: "#e07122", //
      },
      offwhite: {
        500: "#d0bcd5", //
      },
      grey: {
        900: "#353333",
        500: "#4D4949",
        100: "#827f7f",
      },
    },
  },
  fonts: {
    silk: `'Silkscreen', sans-serif`,
  },
});

export const ThemesExport = { SunsetTheme };
