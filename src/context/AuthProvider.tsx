import { createContext, useContext, useState } from "react"

const AuthContext = createContext(null);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState(() => localStorage.getItem('user') || null)

  const signin = (newUser: string, callback:() => void) => {
    setUser(newUser)
    localStorage.setItem('user', newUser)
    callback();
  }

  const signout = (callback:() => void) => {
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
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    <AuthContext.Provider value={ value }>
      { children }
    </AuthContext.Provider>
  )
}
