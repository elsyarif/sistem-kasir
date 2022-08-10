import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import { HSeparator } from "../../../../components";

const Brand = () => {
  return (
    <Flex align="center" direction="column">
      <Text h='26px'  my='14px' fontSize="2xl" fontFamily="monospace" fontWeight="bold">
        Point of Sale
      </Text>
      <HSeparator mb="20px" />
    </Flex>
  );
};

export default Brand;
