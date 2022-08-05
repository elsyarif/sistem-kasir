import { createContext, useContext, useState } from 'react'
import { useSelector } from "react-redux";
import { persistor } from '../app/store'
import { authSelector } from '../features/auth/authSlice'

const AuthContex = createContext(null)

export const AuthProvider = ({ children }) => {
  const { user } = useSelector(authSelector)
  const [isUser, setIsUser] = useState(user?.username)
console.log('isUser' , isUser)
  const Signin = (isUser) => {
    setIsUser(isUser)
  }

  const SignOut = () => {
    setIsUser(null)
    persistor.purge()
  }

  return (
    <AuthContex.Provider value={{isUser, Signin, SignOut}}>
      {children}
    </AuthContex.Provider>
  )
}


export const useAuth = () => {
  return useContext(AuthContex)
}