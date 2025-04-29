import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const EmptyBox = () => {
  return (
    <div className="w-full h-max flex flex-col items-center p-10 gap-4">
      <Image alt="placeholder" src={`/Room.png`} width={200} height={200} />
      <h1 className="font-bold text-slate-500">
        Create New Room Design Using AI{" "}
      </h1>
      <Link href={`/dashboard/create-room`}>
        <Button className={`cursor-pointer`}>+Redesign room</Button>
      </Link>
    </div>
  );
};

export default EmptyBox;
