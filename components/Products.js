import {
  Stack,
  Box,
  Flex,
  Center,
  Text,
  Img,
  Spacer,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import Product from "../components/Product";

const products = [
  {
    name: "Sample Product Name",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae ab dolor harum, officiis ad ducimus temporibus consequuntur repellendus quis fugiat.",
    price: "$15",
  },
  {
    name: "Sample Product Name",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae ab dolor harum, officiis ad ducimus temporibus consequuntur repellendus quis fugiat.",
    price: "$15",
  },
  {
    name: "Sample Product Name",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae ab dolor harum, officiis ad ducimus temporibus consequuntur repellendus quis fugiat.",
    price: "$15",
  },
  {
    name: "Sample Product Name2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae ab dolor harum, officiis ad ducimus temporibus consequuntur repellendus quis fugiat.",
    price: "$15",
  },
  {
    name: "Sample Product Name",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae ab dolor harum, officiis ad ducimus temporibus consequuntur repellendus quis fugiat.",
    price: "$15",
  },
  {
    name: "Sample Product Name2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae ab dolor harum, officiis ad ducimus temporibus consequuntur repellendus quis fugiat.",
    price: "$15",
  },
  {
    name: "Sample Product Name",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae ab dolor harum, officiis ad ducimus temporibus consequuntur repellendus quis fugiat.",
    price: "$15",
  },
  {
    name: "Sample Product Name2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae ab dolor harum, officiis ad ducimus temporibus consequuntur repellendus quis fugiat.",
    price: "$15",
  },
  {
    name: "Sample Product Name",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae ab dolor harum, officiis ad ducimus temporibus consequuntur repellendus quis fugiat.",
    price: "$15",
  },
];

const Products = () => {
  return (
    <Stack
      bgGradient="linear(red.100 0%, orange.100 25%, yellow.100 50%)"
      padding={2}
      minH={"100vh"}
      as="section"
    >
      <Box>
        <Center>
          <Text fontSize={"3xl"}>Our Top Selling items</Text>
        </Center>
      </Box>
      <Wrap justify={"center"}>
        {products.map((product, index) => (
          <WrapItem key={index}>
            <Product product={product} />
          </WrapItem>
        ))}
      </Wrap>
    </Stack>
  );
};

export default Products;
