import React from "react";

const Skills = () => {
  return (
    <div
      className="bg-gray-200 text-slate-800 md:h-[150px] max-w-[1200px] mx-auto grid grid-cols-3
  place-items-center md:flex md:justify-between md:items-center "
    >
      <h2 className="text-slate-800 text-2xl md:text-4xl font-bold m-4">
        Tech <br /> Stack
      </h2>
      <div className="flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]">
        <img alt="" />
        <p className="mt-2">HTML</p>
      </div>
      <div className="flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]">
        <img alt="" />
        <p className="mt-2">CSS</p>
      </div>
      <div className="flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]">
        <img alt="" />
        <p className="mt-2">NODE</p>
      </div>
      <div className="flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]">
        <img alt="" />
        <p className="mt-2">REACT</p>
      </div>
      <div className="flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]">
        <img alt="" />
        <p className="mt-2">ANGULAR</p>
      </div>
      <div className="flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]">
        <img alt="" />
        <p className="mt-2">POSTGRESQL</p>
      </div>
      <div className="flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]">
        <img alt="" />
        <p className="mt-2">JAVA</p>
      </div>
      <div className="flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]">
        <img alt="" />
        <p className="mt-2">PYTHON</p>
      </div>
      <div className="flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]">
        <img alt="" />
        <p className="mt-2">TYPESCRIPT</p>
      </div>
    </div>
  );
};

export default Skills;
