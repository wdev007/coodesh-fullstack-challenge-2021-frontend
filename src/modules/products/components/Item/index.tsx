import React, { FC } from "react";
import { Box, Flex, Image } from "@chakra-ui/react";

import { IProduct } from "../../interfaces/product.interface";

interface IProps extends IProduct {
  onClick: () => void;
}

const Item: FC<IProps> = ({ image_url, product_name, onClick }) => {
  return (
    <Box
      w="100%"
      maxW="sm"
      borderWidth="2px"
      borderRadius="lg"
      overflow="hidden"
      shadow="xl"
      cursor="pointer"
      onClick={onClick}
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
        <Box p="3" w="100%">
          <Box
            mt="1"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            isTruncated
            maxW="60%"
            margin="auto"
            textAlign="center"
          >
            {product_name}
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default Item;
