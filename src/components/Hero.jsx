import React from "react";
import heroImage from "../assets/bryan2.png";
import { TypeAnimation } from "react-type-animation";
import github from "../assets/github-logo.png";
import email from "../assets/email.png";
import linkedin from "../assets/linkedin.png";
import cv from "../assets/cv.png";

const Hero = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3  max-w-[1200px] md:h-[70vh] mx-auto py-8 bg-gray-50">
      <div className="col-span-2 px-5 my-auto">
        <h1 className="text-gray-950 text-4xl sm:text-5xl lg:text-8xl font-extrabold">
          <span className="text-blue-500">Bryan Rachmat</span>
          <br />
          <TypeAnimation
            sequence={["Software Developer", 1000]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </h1>
      </div>

      {/* <p className="text-blue-300 sm:text-lg my-6 lg:text-xl">
        4th Year University Student going into the tech industry
      </p> */}

      <div className="flex flex-col sm:flex-row justify-center items-center sm:col-span-2 lg:col-span-1">
        <div className="flex flex-wrap justify-center gap-4 my-4">
          <a
            href="../../public/Bryan_CV.pdf"
            download="Bryan_CV.pdf
          "
          >
            <img className="w-8 h-8" src={cv} alt="LinkedIn profile" />
          </a>

          <a
            href="https://www.linkedin.com/in/bryan-rachmat-a48006269/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="w-8 h-8" src={linkedin} alt="LinkedIn profile" />
          </a>

          <a
            href="https://github.com/rachmatbryan"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="w-8 h-8" src={github} alt="GitHub profile" />
          </a>

          <a href="mailto:rachmat.bryan@gmail.com">
            <img className="w-8 h-8" src={email} alt="Email" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
