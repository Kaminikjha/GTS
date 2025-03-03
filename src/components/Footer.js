import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { FaLinkedin } from "react-icons/fa"; // LinkedIn icon
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa"; // Location, Phone, Email icons
import logo from "../assets/logo.jpeg";

const Footer = () => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };

  const navigate = useNavigate();

  return (
    <footer className="bg-[#f06321] opacity-90 text-white py-8 font-['Roboto Slab'] ">
      <div className="container mx-auto px-4 flex flex-col items-center">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row justify-center w-full text-center">
          <div className="flex items-center justify-center space-x-4 md:px-10 lg:pl-36 pb-3 sm:pb-0">
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
              onClick={() => navigate("/services")}
              className="cursor-pointer mt-2 text-sm md:text-xl hover:opacity-90 hover:scale-105 transition duration-300"
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
              onClick={() => navigate("/contact")}
              className="cursor-pointer mt-2 text-sm md:text-xl hover:opacity-90 hover:scale-105 transition duration-300"
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
              <FaLinkedin className="mr-2 text-sm md:text-xl hover:opacity-90 hover:scale-105 transition duration-300" />
              LinkedIn
            </a>
          </div>
        </div>

        {/* Contact Info Section - Styled Like the Image, Now Responsive */}
        <div className="mt-6 flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 w-full max-w-3xl mx-auto">
          <div className="bg-black p-2 md:px-3 rounded-full flex items-center space-x-2 text-white hover:opacity-90 transition duration-300 w-full sm:w-auto">
            <a
              href="mailto:rohithsai.g@gtands.com"
              className="flex items-center w-full"
            >
              <div className="bg-[#ff4500] rounded-full p-2">
                <FaEnvelope className="text-white text-lg" />
              </div>
              <span className="text-sm md:text-lg ml-2">rohithsai.g@gtands.com</span>
            </a>
          </div>
          <div className="bg-black p-2 md:px-3 rounded-full flex items-center space-x-2 text-white hover:opacity-90 transition duration-300 w-full sm:w-auto">
            <a
              href="tel:+919490612648"
              className="flex items-center w-full"
            >
              <div className="bg-[#ff4500] rounded-full p-2">
                <FaPhone className="text-white text-lg" />
              </div>
              <span className="text-sm md:text-lg ml-2">+919490612648</span>
            </a>
          </div>
          <div className="bg-black p-2 md:px-3 rounded-full flex items-center space-x-2 text-white w-full sm:w-auto">
            <div className="flex items-center w-full">
              <div className="bg-[#ff4500] rounded-full p-2">
                <FaMapMarkerAlt className="text-white text-lg" />
              </div>
              <span className="text-sm md:text-lg ml-2">Tenali, Andhra Pradesh</span>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-center items-center mt-8 border-t pt-4">
        <p className="mb-4 md:mb-0 text-center text-lg md:text-xl hover:opacity-90 hover:scale-105 transition duration-300">
          Copyright ©{" "}
          <a href="#" className="md:mr-4 text-lg md:text-xl">
            2025 Gollamudi Technology and Software
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;