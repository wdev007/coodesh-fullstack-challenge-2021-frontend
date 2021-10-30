import React, { useContext } from "react";
import { Box, Badge, Image, Flex } from "@chakra-ui/react";

import { ProductsContext } from "../../contexts/products";

const ModalBody = () => {
  const { product } = useContext(ProductsContext);
  return (
    <Box w="100%" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Flex flexDirection="column" justifyContent="space-between">
        <Image
          src={product?.image_url}
          alt={product?.product_name}
          // borderRadius="full"
          boxSize="md"
          margin="auto"
        />
        <div>
          <Box p="6">
            <Box
              mt="1"
              fontWeight="semibold"
              as="h4"
              color="gray.400"
              lineHeight="tight"
              isTruncated
              marginBottom="2.5"
            >
              <Box as="span" color="white" fontSize="md" marginRight="1.5">
                Marcas:
              </Box>
              {product?.brands?.split(",")?.map((item) => (
                <Badge
                  borderRadius="full"
                  px="2"
                  colorScheme="teal"
                  margin="1.5"
                >
                  {item}
                </Badge>
              ))}
            </Box>
            <Box
              mt="1"
              fontWeight="semibold"
              as="h4"
              color="gray.400"
              lineHeight="tight"
              isTruncated
              marginBottom="2.5"
            >
              <Box as="span" color="white" fontSize="md" marginRight="1.5">
                Nome:
              </Box>
              {product?.product_name}
            </Box>
            <Box
              mt="1"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              color="green.400"
              marginBottom="2.5"
            >
              <Box as="span" color="white" fontSize="md" marginRight="1.5">
                Quantidade:
              </Box>
              {product?.quantity}
            </Box>
            <Box
              mt="1"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              color="gray.400"
              marginBottom="2.5"
            >
              <Box as="span" color="white" fontSize="md" marginRight="1.5">
                Categorias:
              </Box>
              {product?.categories}
            </Box>

            <Box
              mt="1"
              fontWeight="semibold"
              as="h4"
              color="gray.400"
              lineHeight="tight"
              isTruncated
              marginBottom="2.5"
            >
              <Box as="span" color="white" fontSize="md" marginRight="1.5">
                Empacotamento:
              </Box>
              {product?.packaging}
            </Box>
          </Box>
        </div>
        <Box alignSelf="flex-end" margin="3.5" color="white">
          importado em:
          <Box as="span" color="gray.400" fontSize="md" marginLeft="1.5">
            {product?.imported_t}
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default ModalBody;
