import React, { FC, useContext, ChangeEvent, useEffect } from "react";
import {
  Grid,
  ButtonProps,
  Center,
  Button,
  Select,
  Box,
} from "@chakra-ui/react";
import {
  Paginator,
  Container,
  Previous,
  usePaginator,
  Next,
  PageGroup,
} from "chakra-paginator";

import { ProductsContext } from "../../contexts/products";

import Item from "../Item";

// styles
const baseStyles: ButtonProps = {
  w: 7,
  fontSize: "sm",
};

const normalStyles: ButtonProps = {
  ...baseStyles,
  _hover: {
    bg: "green.300",
  },
  bg: "red.300",
};

const activeStyles: ButtonProps = {
  ...baseStyles,
  _hover: {
    bg: "blue.300",
  },
  bg: "green.300",
};

const separatorStyles: ButtonProps = {
  w: 7,
  bg: "green.200",
};

const outerLimit = 2;
const innerLimit = 2;

const Listing: FC = () => {
  const { products, findProducts } = useContext(ProductsContext);
  const {
    isDisabled,
    pagesQuantity,
    currentPage,
    setCurrentPage,
    setIsDisabled,
    pageSize,
    setPageSize,
    // offset, // you may not need this most of the times, but it's returned for you anyway
  } = usePaginator({
    total: products.length,
    initialState: {
      pageSize: 12,
      currentPage: 1,
      isDisabled: false,
    },
  });

  useEffect(() => {
    const main = async () => {
      await findProducts(pageSize);
    };
    main();
  }, []);

  const handlePageChange = (nextPage: number) => {
    // -> request new data using the page number
    setCurrentPage(nextPage);
    console.log("request new data with ->", nextPage);
  };

  const handlePageSizeChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const pageSize = Number(event.target.value);

    setPageSize(pageSize);
  };

  const handleDisableClick = () => {
    return setIsDisabled((oldState) => !oldState);
  };

  return (
    <>
      <Grid templateColumns="repeat(4, 1fr)" gap={6} w="90%" margin="auto">
        {products.map((product) => (
          <Item key={product.barcode} {...product} />
        ))}
      </Grid>
      <Box w="80%" margin="auto">
        <Paginator
          isDisabled={isDisabled}
          activeStyles={activeStyles}
          innerLimit={innerLimit}
          currentPage={currentPage}
          outerLimit={outerLimit}
          normalStyles={normalStyles}
          separatorStyles={separatorStyles}
          pagesQuantity={pagesQuantity}
          onPageChange={handlePageChange}
        >
          <Container align="center" justify="space-between" w="full" p={4}>
            <Previous>Previous</Previous>
            <PageGroup isInline align="center" />
            <Next>Next</Next>
          </Container>
        </Paginator>
        <Center w="full">
          <Button onClick={handleDisableClick}>Limite</Button>
          <Select w={40} ml={3} onChange={handlePageSizeChange}>
            <option value="4">4</option>
            <option value="8">8</option>
            <option value="12">12</option>
          </Select>
        </Center>
      </Box>
    </>
  );
};

export default Listing;
