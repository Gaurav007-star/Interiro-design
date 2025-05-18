"use client";
import AdditionalText from "@/components/custom/AdditionalText";
import DesignType from "@/components/custom/DesignType";
import ImageSection from "@/components/custom/ImageSection";
import Roomtype from "@/components/custom/Roomtype";
import React from "react";

const page = () => {
  const OnHandleInputChange = (value, fieldName) => {
    console.log("Onhandle", value);
  };

  return (
    <div className="create-room-wrapper w-screen h-max bg-amber-100">
      <div className="top w-full h-max flex flex-col items-center mt-10">
        <h1 className="text-primary text-4xl font-bold">
          Experience the Magic of AI Remodeling
        </h1>
        <p className="text-gray-400 font-bold">
          Transform any room with a click. Select a space, choose a style, and
          watch as Ai
        </p>
        <span className="text-gray-400 font-bold">
          instantly reimagines your environment.{" "}
        </span>
      </div>

      <div className="bottom w-screen h-max flex max-[640px]:flex-col justify-center gap-10 mt-10 max-[640px]:p-4 transition-all duration-500">
        {/* image section */}

        <ImageSection
          selectedImage={(value) => OnHandleInputChange(value, "Image")}
        />

        {/* ======================FORM SECTION======================== */}
        <div className="form">
          {/* Room type */}
          <Roomtype
            SelectedRoomType={(value) =>
              OnHandleInputChange(value, "Room type")
            }
          />

          {/* Design type */}
          <DesignType
            setDesignType={(value) => OnHandleInputChange(value, "Design type")}
          />

          {/* Additional requirements */}
          <AdditionalText />

          {/* Generate button */}
        </div>
      </div>
    </div>
  );
};

export default page;
