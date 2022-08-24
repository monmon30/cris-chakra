import { Box, Img, Flex, Spacer, Text } from "@chakra-ui/react";

const Product = ({ product }) => {
  return (
    <Box bgColor={"white"} padding={1}>
      <Img
        boxSize={{ base: "xl", md: "300px" }}
        alt={"Product Image"}
        objectFit={"cover"}
        src={
          "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg"
        }
      />
      <Box padding={5}>
        <Flex marginTop={2}>
          <Text color={"gray.800"}>{product.name}</Text>
          <Spacer />
          <Text fontWeight={"bold"} color={"gray.800"}>
            {product.price}
          </Text>
        </Flex>
        <Text color={"gray.600"}>Black</Text>
      </Box>
    </Box>
  );
};

export default Product;
