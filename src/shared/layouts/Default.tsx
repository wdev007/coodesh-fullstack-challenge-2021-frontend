import { Container } from "@chakra-ui/layout";
import React, { FC } from "react";
import Navbar from "../components/Navbar";

const DefaultLayout: FC = ({ children }) => {
  return (
    <>
      <Navbar />
      <Container w="full" maxW="full" height="full" marginTop="16">
        {children}
      </Container>
    </>
  );
};

export default DefaultLayout;
