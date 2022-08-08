import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@chakra-ui/react'
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
      Navigae('/login', {replace: true})
      auth.SignOut()
    }
  }, [auth])

  const handleLogout = () => {
    dispatch(logout())
  }

  return (
    <div>
      <Button colorScheme="blue" onClick={handleLogout}>Logout</Button>
      <h1>Dashoboard</h1>
    </div>
  )
}

export default Dashboard