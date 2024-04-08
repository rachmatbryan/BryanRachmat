import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div>
      <div className="bg-gray-50 h-[100px] max-w-[1200px] mx-auto flex justify-between items-center">
        <h1 class="text-3xl font-bold text-blue-400 ml-4">Bryan Rachmat</h1>
        <ul class="hidden md:flex">
          <li class="p-5">
            <a href="#about">About</a>
          </li>
          <li class="p-5">
            <a href="#work">Work</a>
          </li>
          <li class="p-5">
            <a href="#contact">Contact</a>
          </li>
        </ul>

        <div onClick={handleNav} className="block md:hidden mr-6">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>

        <div
          className={
            nav
              ? "fixed h-full left-0 top-0 w-[60%] bg-[#202121] ease-in-out duration-500"
              : "fixed left-[-100%]"
          }
        >
          <h1 class="text-3xl font-bold primary-color m-4">Bryan Rachmat</h1>
          <ul class="p-8 text-2xl">
            <li class="p-2">
              <a href="#about">About</a>
            </li>
            <li class="p-2">
              <a href="#work">Work</a>
            </li>
            <li class="p-2">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
