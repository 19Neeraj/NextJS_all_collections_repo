"use client"
import React, { useEffect, useState } from 'react'
import UserContext from './userContext'
import { toast } from 'react-toastify';
import { currentUser } from '@/app/services/userService';

const  UserProvider = ({children}) => {
    const [user,setUser]=useState(undefined);
useEffect (()=>{
 const fetchData = async () => {
    try {
        const logeduser = await currentUser();
        // console.log(logeduser);
        setUser({...logeduser});
    } catch (error) {
        console.log(error);
        toast.error("failed to fatch the user");
    }
}
fetchData();
},[])
console.log(user);

  return (
    <UserContext.Provider value={{user,setUser}}>{children}</UserContext.Provider>
  )
}

export default UserProvider
