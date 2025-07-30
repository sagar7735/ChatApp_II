import React, { useContext, useState } from 'react'
import { createContext } from 'react'
import Cookies from 'js-cookie'
const AuthContext=createContext()
export const AuthProvider=({children})=>{
const intialUserState=Cookies.get("token") || localStorage.getItem("ChatApp")
  
const [authUser,setAuthUser]=useState(intialUserState ? JSON.parse(intialUserState) : undefined);



return(
   <AuthContext.Provider value={[authUser,setAuthUser]}>
    {children}
   </AuthContext.Provider>
  )
}

export const useAuth=()=>{
return useContext(AuthContext)
} 