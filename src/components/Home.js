import React from 'react';
import { ReactTyped } from "react-typed";

const Home = () => {
  return (
    <div className="relative h-screen flex items-center justify-center text-white overflow-hidden bg-cover">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute z-0 w-auto min-w-full min-h-full max-w-none"
      >
        <source src={"https://cdn.pixabay.com/video/2016/08/22/4733-179738669_large.mp4"} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content */}
      <div className="relative z-10 text-center p-5 md:p-20">
        <h1 className="text-2xl md:text-5xl font-bold text-[#f06321] opacity-90 mb-4"> Welcome to {" "}
        <ReactTyped
              strings={[
                "Gollamudi Technology and Software"
                
              ]}
              typeSpeed={100}
              loop={true}
              backSpeed={50}
            /> </h1>
        <p className="text-sm md:text-2xl text-white leading-relaxed mb-6">
        At GTS, we transform ideas into reality. Our expertise lies in building world-class web and mobile applications tailored to meet your business goals. Whether it's designing user-friendly websites or developing powerful software solutions, we deliver innovation that drives success.
        </p>
        <p className="text-sm md:text-2xl text-white leading-relaxed mb-6">
        Are you ready to kickstart your career? Join our team and become part of a dynamic environment that values creativity, growth, and excellence. At GTS, fresh talent is nurtured, and every idea matters.
        </p>
        
      </div>
    </div>
  );
};

export default Home;