import { Box, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerOverlay, Flex, Icon, useColorModeValue, useDisclosure } from "@chakra-ui/react";
import React, { useRef } from "react";
import Scrollbars from "react-custom-scrollbars-2";

import { renderThumb, renderTrack, renderView } from '../../../components/scrollbar/Scrollbar'
import { IoMenuOutline } from 'react-icons/io5'
import Content from "./components/Content";

const Sidebar = (props) => {
  return (
    <Box display={{ sm: "none", xl: "block" }} position="fixed" minH="100%">
      <Box
        bg={useColorModeValue('white', 'navy.800')}
        transition="0.2s linear"
        w='300px'
        h='100vh'
        m='0px'
        minH='100%'
        overflowX='hidden'
        boxShadow={useColorModeValue("14px 17px 40px 4px rgba(112, 144, 176, 0.08)", "unset")}
        >
            <Scrollbars
                autoHide
                renderTrackVertical={renderTrack}
                renderThumbVertical={renderThumb}
                renderView={renderView}>
                   {/* Content */}
                   <Content/>
            </Scrollbars>
      </Box>
    </Box>
  );
};


export function SidebarReponsive(props){
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = useRef()

    return (
        <Flex 
            display={{sm: 'flex', xl: 'none'}} 
            alignItems='center'>

            <Flex 
                ref={btnRef}
                w="max-content"
                h="max-content"
                onClick={onOpen}>
                <Icon 
                    as={IoMenuOutline}
                    color={useColorModeValue('gray.400', 'white')}
                    my='auto'
                    w='20px'
                    h='20px'
                    me='10px'
                    _hover={{cursor: "pointer"}}/>
            </Flex>

            <Drawer
                isOpen={isOpen}
                onClose={onClose}
                finalFocusRef={btnRef}>
                <DrawerOverlay/>
                <DrawerContent w='285px' maxW='285px' bg={useColorModeValue("white", "navy.800")}>
                    <DrawerCloseButton
                        zIndex='3'
                        onClose={onClose}
                        _focus={{ boxShadow: 'none' }}
                        _hover={{ boxShadow: 'none' }}/>
                    <DrawerBody
                        maxW="285px" px='0rem' pb='0'>
                        <Scrollbars
                            autoHide
                            renderTrackVertical={renderTrack}
                            renderThumbVertical={renderThumb}
                            renderView={renderView}>
                            {/* Content */}
                            <Content/>
                        </Scrollbars>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </Flex>
    )
}

export default Sidebar;
