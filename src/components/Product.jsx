import React from "react";

import {
  Text,
  Image,
  Box,
  Stack,
  Heading,
  Tag,
  TagLabel

} from '@chakra-ui/react'

const Product = ({ Product }) => {
//   // TODO: Remove below const and instead import them from chakra
//   const Text = () => <div />;
//   const Image = () => <div />;
//   const Box = () => <div />;
//   const Stack = () => <div />;
//   const Heading = () => <div />;
//   const Tag = () => <div />;
//   const TagLabel = () => <div />;
  return (
    <div>
      {Product.map( Product => (
         <Stack data-cy="product">
            <Image data-cy="product-image" />
            <Text data-cy="product-category"></Text>
            <Tag>
              <TagLabel data-cy="product-gender"></TagLabel>
            </Tag>
            <Heading data-cy="product-title"></Heading>
            <Box data-cy="product-price"></Box>
          </Stack>
        ))}

        {/* // 
        //   <Image data-cy="product-image" />
        //   <Text data-cy="product-category"></Text>
        //   <Tag>
        //     <TagLabel data-cy="product-gender"></TagLabel>
        //   </Tag>
        //   <Heading data-cy="product-title"></Heading>
        //   <Box data-cy="product-price"></Box> */}   
      
    </div>
    
  );
};

export default Product;
