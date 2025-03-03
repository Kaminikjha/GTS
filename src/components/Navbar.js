import React, { useState } from "react";
import { RiMenu3Fill, RiCloseFill } from "react-icons/ri";
import logo from "../assets/logo.jpeg";

const Navbar = () => {
  const [menu, openMenu] = useState(false);
  const [showMenu, setShowMenu] = useState(true);

  return (
    <nav className="fixed top-0 left-0 right-0 backdrop-blur-md flex flex-wrap justify-between md:items-center text-[#f06321] opacity-90 px-10 py-6 font-robotoSlab z-50">
      {/* Logo Section */}
      <div className="flex items-center space-x-4">
        <img className="rounded-2xl" src={logo} width={60} alt="Logo" />
        <span className="hidden md:block md:text-2xl font-semibold">
          Gollamudi Technology and Software
        </span>
      </div>

      {/* Navigation Links */}
      <ul
        className={`${
          menu ? "block" : "hidden"
        } w-full md:w-auto py-2 mt-10 font-semibold md:mt-0 rounded-xl backdrop-blur-md md:border-none text-center md:bg-transparent md:static md:mx-0 md:flex gap-8`}
      >
        <a href="/home">
          <li className="hover:opacity-95 hover:scale-105 md:hover:underline transition p-2 md:p-0 text-[#f06321] opacity-90 text-lg md:text-2xl">
            Home
          </li>
        </a>
        <a href="/services">
          <li className="hover:opacity-95 hover:scale-105 md:hover:underline transition p-2 md:p-0 text-[#f06321] opacity-90 text-lg md:text-2xl">
            Our Services
          </li>
        </a>
        <a href="/about">
          <li className="hover:opacity-95 hover:scale-105 md:hover:underline transition p-2 md:p-0 text-[#f06321] opacity-90 text-lg md:text-2xl">
            About us
          </li>
        </a>
        <a href="/contact">
          <li className="hover:opacity-95 hover:scale-105 md:hover:underline transition p-2 md:p-0 text-[#f06321] opacity-90 text-lg md:text-2xl">
            Contact Us
          </li>
        </a>
      </ul>

      {/* Hamburger Menu */}
      {showMenu ? (
        <RiMenu3Fill
          size={35}
          className="md:hidden absolute right-5 top-8 transition-all duration-300"
          onClick={() => {
            openMenu(!menu);
            setShowMenu(!showMenu);
          }}
        />
      ) : (
        <RiCloseFill
          size={35}
          className="md:hidden absolute right-5 top-8 transition-all duration-300"
          onClick={() => {
            openMenu(!menu);
            setShowMenu(!showMenu);
          }}
        />
      )}
    </nav>
  );
};

export default Navbar;