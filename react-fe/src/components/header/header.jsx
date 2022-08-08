import React from 'react'
import { Box, Flex } from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import { authSelector } from '../../features/auth/authSlice'

const header = () => {
  const { user } = useSelector(authSelector)

  return (
    <Box>
      <Flex 
        width="100vw">
        <Box>
          Logo
        </Box>
        <Box
          justifyContent="flex-end">
          {user?.username}
        </Box>
      </Flex>
      </Box>
  )
}

export default header