import { ComponentStyleConfig } from "@chakra-ui/react";

const ButtonThemeConfig: ComponentStyleConfig = {
  baseStyle: {
    borderRadius: "10px",
  },
  variants: {
    primary: {
      bg: "primary.500",
    },
    secondary: {
      bg: "light.500",
    },
  },
};

export { ButtonThemeConfig };
