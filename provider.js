/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useUser } from "@clerk/nextjs";
import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";

export const UserContext = createContext({});

export const useUserContext = () => {
  const {userDetails,setUserDetails} = useContext(UserContext);  
  return {userDetails,setUserDetails};
};

const Provider = ({ children }) => {
  const { user } = useUser();
  const [userDetails, setUserDetails] = useState();


  useEffect(() => {
    user && callUser();
  }, [user]);

  const callUser = async () => {
    try {
      const response = await axios.post(`/api/verify-user`, { user });
      setUserDetails(response.data?.user);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <UserContext.Provider value={{ userDetails, setUserDetails }}>
      {children}
    </UserContext.Provider>
  );
};

export default Provider;
