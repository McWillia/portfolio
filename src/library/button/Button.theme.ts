import { ComponentStyleConfig } from "@chakra-ui/react";

const ButtonThemeConfig: ComponentStyleConfig = {
  baseStyle: {
    borderRadius: "10px",
  },
  variants: {
    primary: {
      bg: "Marroon.100",
    },
    secondary: {
      bg: "red.500",
    },
  },
  defaultProps: {
    variant: "primary",
  },
};

export { ButtonThemeConfig };
