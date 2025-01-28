import React from "react";
import { ReactTyped } from "react-typed";
import img6 from "../assets/img-6.jpg";

const VisionMission = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        id="about"
        className="flex md:gap-20 flex-col md:flex-row justify-between items-center px-10 my-20"
      >
          {/* Image Section */}
          <div className="md:w-1/2 relative mt-10 md:mt-0 pb-10 md:pb-0">
          <div className="">
            <img
              src={img6}
              alt="Bakery Visual"
              className="rounded-lg shadow-lg object-cover w-auto h-auto"
            />
          </div>
        </div>
        {/* Text Content */}
        <div className="md:w-1/2">
          <h2 className="text-2xl md:text-5xl font-bold text-[#f06321] opacity-90 mb-6">
            About Us
          </h2>

          <p className="text-sm md:text-2xl text-[#f06321] opacity-90 leading-relaxed">
            Gollamudi Technology and Software is dedicated to providing
            top-notch technology solutions for modern businesses. Our team of
            experts specializes in creating custom software, web applications,
            and mobile apps tailored to your unique needs. With a focus on
            innovation, quality, and user experience, Gollamudi Technology and
            Software is your trusted partner for digital success. Transform your
            ideas into reality with us. At Gollamudi Technology and Software, we
            bring ideas to life with innovative technology solutions. We
            specialize in creating top-quality web and mobile applications,
            custom software, and user-friendly digital experiences. Our goal is
            to empower businesses with modern technology, creative design, and
            smart strategies. With a focus on quality and collaboration, we are
            your trusted partner for growth and success in the digital world.
          </p>
        </div>

      
      </section>
    </>
  );
};

export default VisionMission;
