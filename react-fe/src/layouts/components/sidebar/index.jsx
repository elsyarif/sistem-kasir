import React from 'react'
import { Box, CloseButton, Flex, Text, useColorModeValue } from '@chakra-ui/react'
import NavItems from '../navitems';
import { FiCompass, FiHome, FiSettings, FiStar, FiTrendingUp } from 'react-icons/fi';

const LinkItems = [
    { name: 'Home', icon: FiHome },
    { name: 'Trending', icon: FiTrendingUp },
    { name: 'Explore', icon: FiCompass },
    { name: 'Favourites', icon: FiStar },
    { name: 'Settings', icon: FiSettings },
  ];

const Sidebar = ({onClose, menuItem, ...rest}) => {
  return (
    <Box
        transition='3s ease'
        bg={useColorModeValue('white', 'gray.900')}
        borderRight='1px'
        borderRightColor={useColorModeValue('gray.200', 'gray.700')}
        w={{base: 'full', md: 60}}
        pos='fixed'
        h='full'
        {...rest}>
        <Flex h='20' alignItems='center' mx='8' justifyContent='space-between'>
            <Text fontSize='2xl' fontFamily='monospace' fontWeight='bold'> Logo </Text>
            <CloseButton display={{base: 'flex', md:'none'}} onClick={onClose}/>
        </Flex>
        {LinkItems.map((link) => (
        <NavItems key={link.name} icon={link.icon}>
          {link.name}
        </NavItems>
      ))}
    </Box>
  )
}

export default Sidebar