import React from "react";
import { Box, Flex, HStack, Text, useColorModeValue } from "@chakra-ui/react";
import { IoHome } from "react-icons/io5";
import { NavLink, useLocation } from "react-router-dom";

const Links = ({ menus }) => {
  let location = useLocation();
  let activeColor = useColorModeValue("gray.700", "white");
  let inactiveColor = useColorModeValue(
    "secondaryGray.600",
    "secondaryGray.600"
  );
  let activeIcon = useColorModeValue("brand.500", "white");
  let textColor = useColorModeValue("secondaryGray.500", "white");
  let brandColor = useColorModeValue("brand.500", "brand.400");

  const activeRoute = (routeName) => {
    return location.pathname.includes(routeName);
  };
  return (
    <NavLink key={1} to="/">
      <Box>
        <HStack
          py="5px"
          ps="10px"
          spacing={activeRoute("dashboard") ? "22px" : "26px"}
        >
          <Flex w="100%" alignItems="center" justifyContent="center">
            <Box
              color={activeRoute("dashboard") ? activeIcon : textColor}
              me="18px"
            >
              <IoHome />
            </Box>
            <Text
              me="auto"
              fontWeight={activeRoute("dashboard") ? "bold" : "normal"}
              color={activeRoute("dashboard") ? activeColor : textColor}
            >
              Dashboard
            </Text>
          </Flex>
          <Box
            h="36px"
            w="4px"
            borderRadius="5px"
            bg={activeRoute("dashboard") ? brandColor : "transparent"}
          />
        </HStack>
      </Box>
    </NavLink>
  );
};

export default Links;
