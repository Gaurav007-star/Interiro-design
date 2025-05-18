"use client";
import React, { useContext } from "react";
import Image from "next/image";
import { UserButton, useUser } from "@clerk/nextjs";
import { MoonStar } from "lucide-react";
import Link from "next/link";
import { useUserContext } from "@/provider";

const Header = () => {
  const {user} = useUser()
  const { userDetails } = useUserContext();

  return (
    <>
      {user && (
        <div
          className={`w-full h-max p-5 flex items-center justify-between text-primary `}
        >
          <Link
            href={"/"}
            className="icon w-max flex gap-2 items-center text-xl font-bold"
          >
            {" "}
            <Image alt="icon" src={`/logo.svg`} width={30} height={30} />
            <h1>Room Designer</h1>
          </Link>

          {/* middle div */}
          <div className="w-max py-2 px-20 bg-violet-100 rounded-[10px] font-bold cursor-pointer hover:scale-105 transition-all duration-300">
            <span>Buy more credits</span>
          </div>

          {/* point div */}
          <div className="point w-max flex items-center gap-4 font-bold cursor-pointer">
            {/* icon */}
            <div className="star-point flex items-center gap-0.5">
              <MoonStar size={20} />
              <span>{userDetails && userDetails?.credits}</span>
            </div>
            <UserButton />
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
