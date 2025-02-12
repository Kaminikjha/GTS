import React from "react";
import { FcMultipleDevices  } from "react-icons/fc";
import { FaLaptopCode } from "react-icons/fa";

const Services = () => {
  return (
    <div
      id="services"
      className="my-20 text-white bg-[#f06321] opacity-90 shadow-xl mx-0 md:mx-10 rounded-lg p-12 font-[\'Roboto Slab\']"
    >
      {/* Main Heading */}
      <div className="text-center pb-10">
        <h2 className="text-2xl md:text-5xl font-bold text-white">Our Services</h2>
        <p className="text-sm md:text-2xl pt-4 text-white">
          At Gollamudi Technology and Software, we provide innovative and reliable technology solutions to enhance your business's efficiency and growth.
        </p>
      </div>

      {/* Services Section */}
      <div className="md:flex justify-between items-center gap-8">
        {/* Web Development Card */}
        <div className="bg-white hover:scale-105 transition duration-300 rounded-lg shadow-md w-full md:w-1/2 p-6 my-5 sm:my-0">
          <div className="flex flex-col items-center">
            <div className="text-6xl mb-2 mt-4 animate-bounce">
            <FcMultipleDevices />
            </div>
            <h3 className="text-2xl font-bold mb-2 text-black">
              Web Development
            </h3>
            <p className="text-sm md:text-xl text-center text-black">
              At Gollamudi Technology and Software, we craft stunning and user-friendly websites. Our team utilizes the latest technologies and creative designs to ensure your online presence stands out. Whether you need a simple site or a complex platform, we deliver high-quality solutions to drive your business's growth.
            </p>
          </div>
        </div>

        {/* App Development Card */}
        <div className="bg-white hover:scale-105 transition duration-300 rounded-lg shadow-md w-full md:w-1/2 p-6">
          <div className="flex flex-col items-center">
            <div className="text-6xl mb-2 mt-4 animate-bounce">📱</div>
            <h3 className="text-2xl font-bold mb-2 text-black">
              App Development
            </h3>
            <p className="text-sm md:text-xl text-center text-black">
              At Gollamudi Technology and Software, we develop high-quality mobile applications tailored to your needs. Our team leverages innovative technology and user-focused design to create apps that engage users and support your business's growth. Whether for streamlining business processes or enhancing customer interactions, we deliver exceptional app solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
