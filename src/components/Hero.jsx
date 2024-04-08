import React from "react";
import heroImage from "../assets/30.jpg";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[1200px] md:h-[70vh] mx-auto py-8 bg-gray-50">
      <div className=" col-span-1 my-auto mx-auto w-[300px] h-auto lg:w-[400px]">
        <img src={heroImage} alt="hero image" />
      </div>

      <div className="col-span-2 px-5 my-auto">
        <h1 className="text-gray-950 text-4xl sm:text-5xl lg:text-8xl font-extrabold">
          <span className="text-blue-400">Bryan Rachmat</span>
          <br />
          <TypeAnimation
            sequence={["Software Developer", 1000]}
            wrapper="span"
            speed={1000}
            repeat={Infinity}
          />
        </h1>
      </div>

      <p className="text-blue-300 sm:text-lg my-6 lg:text-xl">
        4th Year University Student going into the tech industry
      </p>

      <div className="my-8">
        <a
          href="/"
          className="px-6 py-3 w-full rounded-xl mr-4 bg-blue-400 text-gray-50"
        >
          CV
        </a>

        <a
          href="/"
          className="px-6 py-3 w-full rounded-xl mr-4 border-blue-400 bg-gray-50 hover:border-none"
        >
          Contact
        </a>
      </div>
    </div>
  );
};

export default Hero;
