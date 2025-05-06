import React from 'react';
import { Link } from 'react-router-dom';
import bg from "../assets/bgvideo1.mp4";

const Homepage = () => {
  return (
    <div className="h-auto bg-white">
      {/* Hero Section with Video Background */}
      <section className="relative min-h-screen flex items-center justify-center md:justify-end px-4 py-12 sm:py-16 lg:px-10 lg:py-20">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src={bg} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 w-full h-full bg-black opacity-60 z-[1]" />

        {/* Content */}
        <div className="relative z-10 w-full max-w-md sm:max-w-lg md:max-w-xl xl:max-w-2xl text-center md:text-right">
          <h1 className="text-2xl sm:text-3xl md:text-3xl font-bold text-white mb-6 leading-tight">
            Innovative Digital Solutions for Your Business
          </h1>
          <p className="text-sm sm:text-base md:text-xl text-white leading-relaxed mb-8">
            At Gollamudi Technology and Software, we create cutting-edge web and mobile applications that drive growth and innovation. Our expert team transforms ideas into powerful, user-friendly solutions using the latest technology. Whether you're a startup or an enterprise, we deliver high-performance, scalable, and visually stunning applications tailored to your needs.
          </p>
          {/* <Link
            to="/all-sections#services" // Navigate to AllSections page with #services hash
            className="inline-block bg-[#f06321] text-base sm:text-lg md:text-xl text-white font-semibold px-6 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-lg hover:bg-orange-600 transition duration-300"
          >
            Explore Our Services
          </Link> */}
        </div>
      </section>
    </div>
  );
};

export default Homepage;