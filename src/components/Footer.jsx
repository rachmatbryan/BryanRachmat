import React from "react";
import github from "../assets/github-logo.png";
import email from "../assets/email.png";
import linkedin from "../assets/linkedin.png";
import cv from "../assets/cv.png";

const Footer = () => {
  return (
    <div className=" bg-slate-900 max-w-[2000px] sm:h-[150px] p-12 flex justify-between mx-auto">
      <p className="text-gray-50"> rachmat.bryan@gmail.com </p>
      <div className="flex flex-wrap justify-center gap-4 my-4">
        <a href="path_to_your_cv.pdf" download="CV_BryanRachmat">
          <img className="w-8 h-8" src={cv} alt="LinkedIn profile" />
        </a>

        <a
          href="https://www.linkedin.com/in/your-profile"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="w-8 h-8" src={linkedin} alt="LinkedIn profile" />
        </a>

        <a
          href="https://github.com/your-username"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="w-8 h-8" src={github} alt="GitHub profile" />
        </a>

        <a href="mailto:your-email@gmail.com">
          <img className="w-8 h-8" src={email} alt="Email" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
