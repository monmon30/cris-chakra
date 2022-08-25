import { Stack, Box, Center, Text, Wrap, WrapItem } from "@chakra-ui/react";
import Product from "./ProductItem";

const products = [
  {
    id: 1,
    name: "Sample Product Name",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae ab dolor harum, officiis ad ducimus temporibus consequuntur repellendus quis fugiat.",
    price: "$15",
    image_url:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
  },

  {
    id: 2,
    name: "Sample Product Name",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae ab dolor harum, officiis ad ducimus temporibus consequuntur repellendus quis fugiat.",
    price: "$15",
    image_url:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
  },
  {
    id: 3,
    name: "Sample Product Name",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae ab dolor harum, officiis ad ducimus temporibus consequuntur repellendus quis fugiat.",
    price: "$15",
    image_url:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
  },
  {
    id: 4,
    name: "Sample Product Name",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae ab dolor harum, officiis ad ducimus temporibus consequuntur repellendus quis fugiat.",
    price: "$15",
    image_url:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
  },
  {
    id: 5,
    name: "Sample Product Name",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae ab dolor harum, officiis ad ducimus temporibus consequuntur repellendus quis fugiat.",
    price: "$15",
    image_url:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
  },

  {
    id: 6,
    name: "Sample Product Name",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae ab dolor harum, officiis ad ducimus temporibus consequuntur repellendus quis fugiat.",
    price: "$15",
    image_url:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
  },

  {
    id: 7,
    name: "Sample Product Name",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae ab dolor harum, officiis ad ducimus temporibus consequuntur repellendus quis fugiat.",
    price: "$15",
    image_url:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
  },

  {
    id: 8,
    name: "Sample Product Name",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae ab dolor harum, officiis ad ducimus temporibus consequuntur repellendus quis fugiat.",
    price: "$15",
    image_url:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
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
