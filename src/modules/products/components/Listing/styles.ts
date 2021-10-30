import { ButtonProps } from "@chakra-ui/button";

const baseStyles: ButtonProps = {
  w: 7,
  fontSize: "sm",
  color: "white",
};

export const normalStyles: ButtonProps = {
  ...baseStyles,
  _hover: {
    bg: "gray.300",
  },
  bg: "gray.500",
};

export const activeStyles: ButtonProps = {
  ...baseStyles,
  _hover: {
    bg: "gray.600",
  },
  bg: "gray.700",
};

export const separatorStyles: ButtonProps = {
  w: 7,
  bg: "gray.400",
};
