import React, { useEffect } from "react";
import { Header } from "../components";
import { Outlet, useNavigate } from "react-router-dom";
import {
  Box,
  Drawer,
  DrawerContent,
  Portal,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { useAuth } from "../helpers/authProvider";
import Sidebar from "./components/sidebar/sidebar";
import { useDispatch, useSelector } from "react-redux";
import { authSelector, logoff } from "../features/auth/authSlice";
import Navbar from "./components/navbar/navbar";

const MainLayout = () => {
  const auth = useAuth();
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const item = sessionStorage.getItem("gxg-hasn");
  const { user } = useSelector(authSelector);

  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    if (!item && !user?.remember) {
      dispatch(logoff());
      auth.SignOut();
      Navigate("/login", { replace: true });
    }
  }, [auth]);

  return (
    <Box minH="100vh" bg={useColorModeValue("gray.100", "gray.900")}>
      {/* Sidebar */}
      <Sidebar
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        onClose={onClose}
        placement="left"
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="sm"
      >
        {/* Sidebar */}
        <DrawerContent>
          <Sidebar onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* Mobile nav */}
      <Box
        float="right"
        minHeight="100vh"
        height="100%"
        overflow="auto"
        position="relative"
        maxHeight="100%"
        w={{ base: "100%", xl: "calc( 100% - 290px )" }}
        maxWidth={{ base: "100%", xl: "calc( 100% - 290px )" }}
        transition="all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)"
        transitionDuration=".2s, .2s, .35s"
        transitionProperty="top, bottom, width"
        transitionTimingFunction="linear, linear, ease"
      >
        <Portal>
          <Box>
            <Navbar
              onOpen={onOpen}
              logoText={"Horizon UI Dashboard PRO"}
              brandText={'Das'}
              secondary={'das'}
              message={'dash'}
              fixed={true}
            />
          </Box>
        </Portal>
        <Box
          mx="auto"
          p={{ base: "20px", md: "30px" }}
          pe="20px"
          minH="100vh"
          pt="50px"
        >
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

export default MainLayout;
