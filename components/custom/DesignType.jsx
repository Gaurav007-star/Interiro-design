import Image from "next/image";
import React, { useState } from "react";

const Design = [
  {
    id: 1,
    name: "Modern",
    image: "/modern.jpg"
  },

  {
    id: 2,
    name: "Industrial",
    image: "/industrial.jpg"
  },

  {
    id: 3,
    name: "Bohemian",
    image: "/bohemian.jpg"
  },

  {
    id: 4,
    name: "Traditional",
    image: "/traditional.jpg"
  },

  {
    id: 5,
    name: "Rustic",
    image: "/rustic.jpg"
  }
];

const DesignType = ({ setDesignType }) => {
  const [selectedOption, setSelectedOption] = useState();

  return (
    <div className="design-type w-full h-max">
      <h1 className="text-slate-400 mt-4">Select Interior Design Type*</h1>

      <div className="designs-box-wrapper grid grid-cols-4 gap-2">
        {Design.map((item) => {
          return (
            <div
              className="box m-1"
              key={item.id}
              onClick={() => {
                setSelectedOption(item.name);
                setDesignType(item.name);
              }}
            >
              <Image
                src={item.image}
                alt={item.name}
                width={120}
                height={120}
                className={`object-bottom w-[100px] h-[100px] rounded-md hover:scale-105 cursor-pointer transition-all duration-300 ${selectedOption == item.name ? 'border-2 border-violet-500 p-1 shadow-md' : ''}`}
              />
              <span className="text-slate-400">{item.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DesignType;
