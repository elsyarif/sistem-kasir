import React, { useEffect } from 'react'
import { Header } from '../components'
import {Outlet, useNavigate} from 'react-router-dom'
import { Box } from '@chakra-ui/react'
import { useAuth } from '../helpers/authProvider'

import { useDispatch, useSelector } from 'react-redux'
import { authSelector, logoff } from '../features/auth/authSlice'

const MainLayout = () => {
  const auth = useAuth()
  const Navigate = useNavigate()
  const dispatch = useDispatch()
  const item = sessionStorage.getItem('gxg-hasn')
  const { user } = useSelector(authSelector)

  useEffect(() => {
    if(!item && !user?.remember){
      dispatch(logoff())
      auth.SignOut()
      Navigate('/login', {replace: true})
    }
  }, [auth])

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