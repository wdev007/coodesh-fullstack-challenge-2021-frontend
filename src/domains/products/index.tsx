import React from "react";
import { Container } from "@chakra-ui/react";

import ProductsProvider from "./contexts/products";

import Listing from "./components/Listing";

const Products = () => {
  return (
    <ProductsProvider>
      <Container w="full" maxW="full">
        <Listing />
      </Container>
    </ProductsProvider>
  );
};

export default Products;
