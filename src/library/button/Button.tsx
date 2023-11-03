import React from "react";
import { Button as ChakraButton } from "@chakra-ui/react";
import { ButtonThemeConfig } from "./Button.theme";

interface ButtonProps {
  content?: string;
}

const Button = ({ content, ...props }: ButtonProps) => {
  return (
    <ChakraButton bg={"Marroon.500"} {...props}>
      {content}
    </ChakraButton>
  );
};

export { Button, ButtonThemeConfig, type ButtonProps };
