import { ButtonProps } from "@chakra-ui/button";

const baseStyles: ButtonProps = {
  w: 7,
  fontSize: "sm",
  color: "white",
};

export const normalStyles: ButtonProps = {
  ...baseStyles,
  _hover: {
    bg: "green.300",
  },
  bg: "red.300",
};

export const activeStyles: ButtonProps = {
  ...baseStyles,
  _hover: {
    bg: "blue.300",
  },
  bg: "green.300",
};

export const separatorStyles: ButtonProps = {
  w: 7,
  bg: "green.200",
};
