import Designs from "@/components/custom/Designs";
import { UserButton } from "@clerk/nextjs";
import React from "react";

const Dashboard = () => {
  return (
    <div className="w-screen h-max flex flex-col items-center">
      <Designs />
    </div>
  );
};

export default Dashboard;
