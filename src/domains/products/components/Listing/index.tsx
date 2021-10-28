import React, { FC, useContext } from "react";
import { Grid } from "@chakra-ui/react";

import { ProductsContext } from "../../contexts/products";

import Item from "../Item";

const Listing: FC = () => {
  const { products } = useContext(ProductsContext);
  return (
    <Grid templateColumns="repeat(4, 1fr)" gap={6} w="90%" margin="auto">
      {products.map((product) => (
        <Item key={product.barcode} {...product} />
      ))}
    </Grid>
  );
};

export default Listing;
