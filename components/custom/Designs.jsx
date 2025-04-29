"use client"

import React, { useState } from "react";
import { Button } from "../ui/button";
import EmptyBox from "./EmptyBox";
import { useUserContext } from "@/provider";
import Link from "next/link";

const Designs = () => {
  const [createdRooms, setCreateRooms] = useState([]);
  const {userDetails} = useUserContext()

  return (
    <div className="w-[60%] h-full p-10">
      <div className="top flex justify-between">
        <h1 className="text-3xl font-bold text-primary">Hello,{userDetails && userDetails.name}</h1>
        <Link href={`/dashboard/create-room`}> <Button className={`cursor-pointer`}>+Redesign room</Button></Link>
       
      </div>

      {createdRooms.length == 0 ? <EmptyBox /> : <h1>Rooms</h1>}
    </div>
  );
};

export default Designs;
