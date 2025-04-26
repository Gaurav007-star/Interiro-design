/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useUser } from "@clerk/nextjs";
import axios from "axios";
import React, { useEffect } from "react";

const Provider = ({ children }) => {
  const { user } = useUser();

  useEffect(() => {
    user&&callUser();
  }, [user]);

  const callUser = async () => {
    const response = await axios.post(`/api/verify-user`,{user})
    console.log(response.data);
    
  };

  return <>{ children }</>;
};

export default Provider;
