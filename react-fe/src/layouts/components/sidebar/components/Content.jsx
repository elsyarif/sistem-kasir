import { Box, Flex, Stack } from "@chakra-ui/react";
import React from "react";
import Brand from "./Brand";
import Links from "./Links";

const Content = () => {
  return (
    <Flex direction="column" height="100%" pt="25px" borderRadius="30px">
      {/* brand */}
      <Brand/>
      <Stack direction='column' mb='auto' mt='8px'>
        <Box ps='20px' pe={{ md: '16px', '2xl': '1px'}}>
            {/* Links */}
            <Links/>
        </Box>
      </Stack>
    </Flex>
  );
};

export default Content;
