import React, { useState } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import { RiCloseFill } from "react-icons/ri";


const Navbar = () => {
  const [menu, openMenu] = useState(false);
  const [showMenue, setShowmenu] = useState(true);

  return (
    <>
      <nav className=" bg-[#f06321]  flex flex-wrap justify-between md:items-center text-white px-10 py-6  md:px-20">
        <span className=" bg-[[#ffa500] border-2 rounded-xl px-4 py-2 overflow-hidden  duration-300 hover:scale-105 text-3xl ">
          {" "}
          GTS{" "}
        </span>

        <ul
          className={`${
            menu ? "block" : "hidden"
          }             mx-24 py-2 mt-4 font-semibold  md:mt-5 bg-black px-2 rounded-xl bg-opacity-30 md:border-none text-center md:bg-transparent md:static md:mx-0 md:flex gap-6`}
        >
          <a href="#Home">
            <li className=" hover:opacity-95 hover:scale-105 hover:underline transition-colors p-1 md:p-0 text-white text-sm md:text-2xl">
              Home
            </li>
          </a>

          <a href="#Career">
            <li className="  hover:opacity-95 hover:scale-105 hover:underline transition-colors text-md p-1 md:p-0 text-white text-sm md:text-2xl">
              Career
            </li>
          </a>

          <a href="#About">
            <li className=" hover:opacity-95 hover:scale-105 hover:underline transition-colors p-1 md:p-0 text-white text-sm md:text-2xl">
              About
            </li>
          </a>
          <a href="#Contact">
            <li className=" hover:opacity-95 hover:scale-105 hover:underline transition-colors text-md p-1 md:p-0 text-white text-sm md:text-2xl">
              Contact
            </li>
          </a>
        </ul>

        {showMenue ? (
          <RiMenu3Fill
            size={35}
            className="  md:hidden absolute right-10 top-8  transition-all duration-300"
            onClick={() => {
              openMenu(!menu);
              setShowmenu(!showMenue);
            }}
          />
        ) : (
          <RiCloseFill
            size={35}
            className=" md:hidden absolute right-10 top-8  transition-all duration-300"
            onClick={() => {
              openMenu(!menu);
              setShowmenu(!showMenue);
            }}
          />
        )}
      </nav>
    </>
  );
};

export default Navbar;
