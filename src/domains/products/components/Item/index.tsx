import React, { FC } from "react";
import { Box, Flex, Image } from "@chakra-ui/react";

import { IProduct } from "../../interfaces/product.interface";

const Item: FC<IProduct> = ({ image_url, product_name }) => {
  return (
    <Box
      w="100%"
      // h="60"
      maxW="sm"
      borderWidth="2px"
      borderRadius="lg"
      overflow="hidden"
    >
      <Flex
        alignItems="center"
        justifyContent="space-between"
        flexDirection="column"
      >
        <Flex
          w="100%"
          alignItems="center"
          justifyContent="center"
          marginTop="2.5"
        >
          <Image
            src={image_url}
            alt={product_name}
            borderRadius="full"
            boxSize="80px"
          />
        </Flex>
        <Box p="6">
          <Box
            mt="1"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            isTruncated
          >
            {product_name}
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default Item;
