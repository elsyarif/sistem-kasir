import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@chakra-ui/react'
import { logout } from '../../features/auth/authSlice';
import { useAuth } from '../../helpers/authProvider';

const Dashboard = () => {
  const auth = useAuth()
  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(logout())
    auth.SignOut()
  }

  return (
    <div>
      <Button colorScheme="blue" onClick={handleLogout}>Logout</Button>
      <h1>Dashoboard</h1>
    </div>
  )
}

export default Dashboard