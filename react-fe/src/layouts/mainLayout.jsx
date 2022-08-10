import React, { useEffect } from 'react'
import { Header } from '../components'
import {Outlet, useNavigate} from 'react-router-dom'
import { Box, Drawer, DrawerContent, useColorModeValue, useDisclosure } from '@chakra-ui/react'
import { useAuth } from '../helpers/authProvider'
import Sidebar from './components/sidebar'
import { useDispatch, useSelector } from 'react-redux'
import { authSelector, logoff } from '../features/auth/authSlice'
import Navbar from './components/navbar'

const MainLayout = () => {
  const auth = useAuth()
  const Navigate = useNavigate()
  const dispatch = useDispatch()
  const item = sessionStorage.getItem('gxg-hasn')
  const { user } = useSelector(authSelector)

  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    if(!item && !user?.remember){
      dispatch(logoff())
      auth.SignOut()
      Navigate('/login', {replace: true})
    }
  }, [auth])

  return (
    <Box minH='100vh' bg={useColorModeValue('gray.100', 'gray.900')}>
      {/* Sidebar */}
      <Sidebar 
        onClose={() => onClose}
        display={{base: 'none', md: 'block'}}/>
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        onClose={onClose}
        placement='left'
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size='sm'>
        {/* Sidebar */}
        <DrawerContent>
          <Sidebar onClose={onClose}/>
        </DrawerContent>
      </Drawer>
      {/* Mobile nav */}
      <Navbar onOpen={onOpen}/>
      <Box ml={{ base: 0, md: 60 }} p='4'>
        <Outlet/>
      </Box>
    </Box>
  )
}

export default MainLayout