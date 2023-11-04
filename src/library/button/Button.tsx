import React from "react";
import {
  Button as ChakraButton,
  ButtonProps as ChakraButtonProps,
} from "@chakra-ui/react";
import { ButtonThemeConfig } from "./Button.theme";

interface ButtonProps extends ChakraButtonProps {
  content?: string;
}

const Button = ({ content, ...props }: ButtonProps) => {
  return <ChakraButton {...props}>{content}</ChakraButton>;
};

export { Button, ButtonThemeConfig, type ButtonProps };
