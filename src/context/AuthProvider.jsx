import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/localStorage'

export const AuthContext = createContext()


const AuthProvider = ({ children }) => {

  // localStorage.clear()

  const [userdata, setuserData] = useState(null)


  useEffect(() => {
    setLocalStorage()
    // const { employees, admin } = getLocalStorage()
    const { employees } = getLocalStorage()
    // setuserData({ employees, admin })
    setuserData(employees)

  }, [])


  return (
    <div>
      <AuthContext.Provider value={[userdata, setuserData]}>
        {children}
      </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider