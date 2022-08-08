import React from 'react'
import { Container } from '@chakra-ui/react'
import { Outlet } from 'react-router-dom'

const AuthLayout = () => {
  return (
    <Container  maxW="lg" py={{ base: '12', md: '24' }} px={{ base: '0', sm: '8' }}>
      <Outlet/>
    </Container>
  )
}

export default AuthLayout