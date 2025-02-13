
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from 'react-router-dom';
import React, { useState } from "react";
import {
  faInstagram,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import logo from "../assets/logo.jpeg";

const Footer = () => {

  const [open, setOpen] =useState(false)

  //handle toggle

  const toggle =() =>{
    setOpen(!open)
  }

  const navigate = useNavigate();

  return (
    <footer className="bg-[#f06321] opacity-90 text-white py-8 font-['Roboto Slab'] mt-10">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <div className="flex flex-col md:flex-row justify-center w-full text-center">
          <div className="flex items-center justify-center space-x-4  md:px-10 lg:pl-36 pb-3 sm:pb-0">
            <img
              className="rounded-2xl hover:opacity-90 hover:scale-105 transition duration-300"
              src={logo}
              width={90}
              alt="Logo"
            />
          </div>

          <div className="flex flex-col mb-4 md:mb-0 md:w-1/3">
            <h2 className="font-bold text-sm md:text-2xl hover:opacity-90 hover:scale-105 transition duration-300">
              About Us
            </h2>
            <a
             onClick={()=> navigate("/services")}
              className=" cursor-pointer mt-2 text-sm md:text-xl hover:opacity-90 hover:scale-105 transition duration-300"
            >
              Our Services
            </a>
            
          </div>
          <div className="block md:hidden container mx-auto px-4 flex-col md:flex-row justify-center items-center mt-4 border-t pt-4"></div>
          <div className="flex flex-col mb-4 md:mb-0 md:w-1/3">
            <h2 className="font-bold text-sm md:text-2xl hover:opacity-90 hover:scale-105 transition duration-300">
              Support
            </h2>
            <a
              onClick={()=> navigate("/contact")}
              className=" cursor-pointer mt-2 text-sm md:text-xl hover:opacity-90 hover:scale-105 transition duration-300"
            >
              Contact
            </a>
          </div>
          <div className="block md:hidden container mx-auto px-4 flex-col md:flex-row justify-center items-center mt-4 border-t pt-4"></div>
          <div className="flex flex-col md:w-1/3">
            <h2 className="font-bold text-sm md:text-2xl hover:opacity-90 hover:scale-105 transition duration-300">
              Social
            </h2>
          
            <a
              href="https://www.linkedin.com/company/gollamudi-technology-and-software/posts/?feedView=all"
              className="mt-2 flex items-center justify-center text-lg md:text-xl hover:opacity-90 hover:scale-105 transition duration-300"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                className="mr-2  text-sm md:text-xl hover:opacity-90 hover:scale-105 transition duration-300"
              />
              LinkedIn
            </a>
            
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-center items-center mt-8 border-t pt-4 ">
        <p className="mb-4 md:mb-0 text-center text-sm md:text-xl  hover:opacity-90 hover:scale-105 transition duration-30">
          Copyright ©{" "}
          <a href="" className="md:mr-4 text-sm md:text-xl">
            2025 Gollamudi Technology and Software
          </a>
        </p>
        <div className="flex flex-col md:flex-row text-center"></div>
      </div>
    </footer>
  );
};

export default Footer;
