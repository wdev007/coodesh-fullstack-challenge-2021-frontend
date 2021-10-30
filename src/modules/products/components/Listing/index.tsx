import React, { FC, useContext, ChangeEvent, useState } from "react";
import { Grid, Center, Select, Box, Flex } from "@chakra-ui/react";
import {
  Paginator,
  Container,
  Previous,
  usePaginator,
  Next,
  PageGroup,
} from "chakra-paginator";

import { ProductsContext } from "../../contexts/products";
import { activeStyles, normalStyles, separatorStyles } from "./styles";

import Item from "../Item";
import AppModal from "../../../../shared/components/Modal";
import { IProduct } from "../../interfaces/product.interface";
import ModalBody from "../ModalBody";

const outerLimit = 2;
const innerLimit = 2;

const Listing: FC = () => {
  const { products, total, findProducts, findOne, product } =
    useContext(ProductsContext);
  const [isOpen, setIsOpen] = useState(false);

  const {
    isDisabled,
    pagesQuantity,
    currentPage,
    setCurrentPage,
    pageSize,
    setPageSize,
  } = usePaginator({
    total,
    initialState: {
      pageSize: 12,
      currentPage: 1,
      isDisabled: false,
    },
  });

  const handleClickItem = async (product: IProduct) => {
    await findOne(product.code);
    setIsOpen(true);
  };

  const handlePageChange = async (nextPage: number) => {
    setCurrentPage(nextPage);
    await findProducts({ limit: pageSize, skip: nextPage });
  };

  const handlePageSizeChange = async (
    event: ChangeEvent<HTMLSelectElement>
  ) => {
    const pageSize = Number(event.target.value);
    setPageSize(pageSize);
    await findProducts({ limit: pageSize });
  };

  return (
    <>
      <Flex
        w="100%"
        justifyContent="space-between"
        alignItems="center"
        flexDirection="column"
      >
        <Grid templateColumns="repeat(4, 1fr)" gap={6} w="90%" margin="auto">
          {products.map((product) => (
            <Item
              key={product.barcode}
              {...product}
              onClick={() => handleClickItem(product)}
            />
          ))}
        </Grid>
        <Box w="80%" marginTop="4">
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
            <Select
              w={40}
              ml={3}
              onChange={handlePageSizeChange}
              defaultChecked
              defaultValue={12}
            >
              <option value="4">4</option>
              <option value="8">8</option>
              <option value="12" defaultChecked>
                12
              </option>
            </Select>
          </Center>
        </Box>
      </Flex>
      <AppModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onOpen={() => setIsOpen(true)}
        title={product?.product_name || ""}
        isLink
        url={product?.url}
      >
        <ModalBody />
      </AppModal>
    </>
  );
};

export default Listing;
