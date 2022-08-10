import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Button } from '@chakra-ui/react'
import { authSelector, logout } from '../../features/auth/authSlice';
import { useAuth } from '../../helpers/authProvider';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const auth = useAuth()
  const dispatch = useDispatch()
  const Navigae = useNavigate()

  const { isLoggedIn } = useSelector(authSelector)

  useEffect(() => {
    if(!isLoggedIn){
      console.log('first')
      Navigae('/login', {replace: true})
      auth.SignOut()
    }
  }, [isLoggedIn])

  const handleLogout = () => {
    dispatch(logout())
  }

  return (
    <Box mt="75px">
      <Button colorScheme="brand" onClick={handleLogout}>Logout</Button>
      <h1>Dashoboard</h1>
    </Box>
  )
}

export default Dashboard