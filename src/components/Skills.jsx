import React from "react";
import angular from "../assets/angular.png";
import react from "../assets/react.png";
import postgres from "../assets/postgre.png";
import aws from "../assets/aws.png";
import circle from "../assets/circleci.png";
import css from "../assets/css-3.png";
import html from "../assets/html.png";
import java from "../assets/java.png";
import node from "../assets/node.png";
import php from "../assets/php.png";
import ts from "../assets/typescript.png";
import js from "../assets/js.png";
import py from "../assets/python.png";

const Skills = () => {
  return (
    <div
      className="bg-gray-50 border-t border-slate-900 text-slate-900 md:h-[150px] max-w-[1200px] mx-auto grid grid-cols-3
  place-items-center md:flex md:justify-between md:items-center "
    >
      <h2 className="text-slate-800 text-2xl md:text-4xl font-bold m-4">
        Tech <br /> Stack
      </h2>
      <div className="flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]">
        <img
          className="w-[80px] md:w-[100px] h-auto rounded shadow"
          src="../assets/angular.png"
          alt=""
        />
      </div>
      <div className="flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]">
        <img src={angular} alt="" />
      </div>
      <div className="flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]">
        <img src={node} alt="" />
      </div>
      <div className="flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]">
        <img src={react} alt="" />
      </div>
      <div className="flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]">
        <img src={aws} alt="" />
      </div>
      <div className="flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]">
        <img src={circle} alt="" />
      </div>
      <div className="flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]">
        <img src={postgres} alt="" />
      </div>
      <div className="flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]">
        <img src={php} alt="" />
      </div>
      <div className="flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]">
        <img src={js} alt="" />
      </div>
      <div className="flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]">
        <img src={ts} alt="" />
      </div>
      <div className="flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]">
        <img src={java} alt="" />
      </div>
      <div className="flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]">
        <img src={py} alt="" />
      </div>
      <div className="flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]">
        <img src={css} alt="" />
      </div>
      <div className="flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]">
        <img src={html} alt="" />
      </div>
    </div>
  );
};

export default Skills;
