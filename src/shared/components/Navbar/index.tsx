import React from "react";
import { Flex, Box, Text, Button, useColorModeValue } from "@chakra-ui/react";
import { ColorModeSwitcher } from "../ColorModeSwitcher";
import { APP_NAME } from "../../utils/constants";

const Navbar = () => {
  const themeName = useColorModeValue("dark", "light");
  return (
    <Box bg="#36435C" w="100%" p={4} color="white">
      <Flex justifyContent="space-between" w="100%" alignItems="center">
        <Text>{APP_NAME}</Text>
        <Flex w="10%" justifyContent="space-between" alignContent="center">
          <ColorModeSwitcher />
          <Button
            color={themeName === "dark" ? "black" : "white"}
            bgColor={themeName === "dark" ? "white" : ""}
          >
            Logout
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
