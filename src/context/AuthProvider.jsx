import { createContext, useContext, useState } from "react"

const AuthContext = createContext(null);

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => useContext(AuthContext);

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => localStorage.getItem('user') || null)

  const signin = (newUser, callback) => {
    setUser(newUser)
    localStorage.setItem('user', newUser)
    callback();
  }

  const signout = (callback) => {
    setUser(null)
    localStorage.removeItem('user')
    callback();
  }

  const value = {
    user,
    signin,
    signout
  }
  return (
    <AuthContext.Provider value={ value }>
      { children }
    </AuthContext.Provider>
  )
}
