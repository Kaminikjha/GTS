import React, { useState } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import { RiCloseFill } from "react-icons/ri";
import logo from "../assets/logo.jpeg"


const Navbar = () => {
  const [menu, openMenu] = useState(false);
  const [showMenue, setShowmenu] = useState(true);

  return (
    <>
      <nav className="bg-[#f06321] opacity-90 flex flex-wrap justify-between md:items-center text-white px-10 py-6  md:px-20">
        <span className=" overflow-hidden h-fit  text-3xl ">
          {" "}
          <img className="rounded-2xl" src={logo} width={80} alt="" />
        </span>

        <ul
          className={`${
            menu ? "block" : "hidden"
          }             w-full md:w-auto py-2 mt-10 font-semibold  md:mt-5  rounded-xl bg-opacity-30 md:border-none text-center  md:bg-transparent md:static md:mx-0 md:flex gap-8`}
        >
          
          <a href="/home">
          <hr className="block md:hidden flex-grow border-t border-gray-100"></hr>
            <li className="hover:opacity-95 hover:scale-105 md:hover:underline transition-colors p-2 md:p-0 text-white text-lg md:text-2xl">
              Home
            </li>
          </a>
          <hr className="block md:hidden flex-grow border-t border-gray-100"></hr>
          <a href="/career">
            <li className="  hover:opacity-95 hover:scale-105 md:hover:underline transition-colors p-2 md:p-0 text-white text-lg md:text-2xl">
              Careers
            </li>
          </a>
          <hr className="block md:hidden flex-grow border-t border-gray-100"></hr>
          <a href="/client">
            <li className="  hover:opacity-95 hover:scale-105 md:hover:underline transition-colors p-2 md:p-0 text-white text-lg md:text-2xl">
            Clients
            </li>
          </a>
          <hr className="block md:hidden flex-grow border-t border-gray-100"></hr>
          <a href="/partner">
            <li className="  hover:opacity-95 hover:scale-105 md:hover:underline transition-colors p-2 text-center md:p-0 text-white text-lg md:text-2xl">
             Our Partners
            </li>
          </a>
          <hr className="block md:hidden flex-grow border-t border-gray-100"></hr>
          <a href="/about">
            <li className=" hover:opacity-95 hover:scale-105 md:hover:underline transition-colors p-2 text-center md:p-0 text-white text-lg md:text-2xl">
              About
            </li>
          </a>
          <hr className="block md:hidden flex-grow border-t border-gray-100"></hr>
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
