"use client";

import Image from "next/image";
import React, { useState } from "react";

const ImageSection = ({ selectedImage }) => {
  const [file, setFile] = useState();

  const handleFile = (event) => {
    setFile(event.target.files[0]);
    selectedImage(event.target.files[0]);
  };

  return (
    <div>
      <label
        htmlFor="file"
        className="flex flex-col items-center justify-center gap-5 cursor-pointer border-2 border-dashed border-[#6d40cf] bg-white p-6 rounded-lg shadow-[0px_48px_35px_-48px_rgba(0,0,0,0.1)] h-[250px] w-[300px] max-[640px]:w-full"
      >
        {file ? (
          <Image
            src={URL.createObjectURL(file)}
            height={250}
            width={300}
            className="object-cover w-[300px] h-[200px]"
            alt="Uploaded Preview"
          />
        ) : (
          <>
            <div className="flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-20 fill-[#6d40cf]">
                <path
                  fill="currentColor"
                  d="M10 1C9.73 1 9.48 1.11 9.29 1.29L3.29 7.29C3.11 7.48 3 7.73 3 8V20C3 21.66 4.34 23 6 23H7C7.55 23 8 22.55 8 22C8 21.45 7.55 21 7 21H6C5.45 21 5 20.55 5 20V9H10C10.55 9 11 8.55 11 8V3H18C18.55 3 19 3.45 19 4V9C19 9.55 19.45 10 20 10C20.55 10 21 9.55 21 9V4C21 2.34 19.66 1 18 1H10ZM9 7H6.41L9 4.41V7ZM14 15.5C14 14.12 15.12 13 16.5 13C17.88 13 19 14.12 19 15.5V17H20C21.1 17 22 17.9 22 19C22 20.1 21.1 21 20 21H13C11.9 21 11 20.1 11 19C11 17.9 11.9 17 13 17H14V15.5ZM16.5 11C14.14 11 12.21 12.81 12.02 15.12C10.28 15.56 9 17.13 9 19C9 21.21 10.79 23 13 23H20C22.21 23 24 21.21 24 19C24 17.13 22.72 15.56 20.98 15.12C20.79 12.81 18.86 11 16.5 11Z"
                />
              </svg>
            </div>
            <div className="flex items-center justify-center">
              <span className="font-normal text-[#6d40cf]">Click to upload image</span>
            </div>
          </>
        )}
        <input type="file" id="file" accept="image/*" onChange={handleFile} className="hidden" />
      </label>
    </div>
  );
};

export default ImageSection;
