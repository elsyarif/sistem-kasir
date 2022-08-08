import React from 'react'
import { Header } from '../components'
import {Outlet} from 'react-router-dom'
import { Box } from '@chakra-ui/react'

const MainLayout = () => {
  return (
    <>
      <Header/>
      <Box px={12}>
        <Outlet/>
      </Box>
    </>
  )
}

export default MainLayout