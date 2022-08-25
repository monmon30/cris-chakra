import { Box, Img, Flex, Spacer, Text } from "@chakra-ui/react";
import Link from "next/link";
const Product = ({ product }) => {
  return (
    <Link href={`/products/${product.id}`}>
      <Box
        bgColor={"white"}
        padding={1}
        _hover={{
          cursor: "pointer",
          bgGradient: "linear(to-r, gray.100, white, gray.100)",
          fontWeight: "extrabold",
        }}
      >
        <Img
          boxSize={{ base: "xl", md: "300px" }}
          alt={product.name}
          objectFit={"cover"}
          src={product.image_url}
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
    </Link>
  );
};

export default Product;
