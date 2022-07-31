import { createContext, useContext, useState } from 'react'

const AuthContex = createContext(null)

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState()

  const Signin = (user) => {
    setUser(user)
  }

  const Signout = () => {
    setUser(null)
  }

  return (
    <AuthContex.Provider value={{user, Signin, Signout}}>
      {children}
    </AuthContex.Provider>
  )
}


export const useAuth = () => {
  return useContext(AuthContex)
}