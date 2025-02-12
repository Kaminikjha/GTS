import React from 'react';

const HomePage = () => {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Image Background */}
      <div
        className="absolute z-0 w-full h-screen bg-cover bg-center"
        style={{ backgroundImage: `url('https://png.pngtree.com/thumb_back/fh260/background/20240610/pngtree-computer-of-the-software-developer-on-the-desk-in-the-room-image_15746066.jpg')` }}
      ></div>

      {/* Text Overlay */}
      <div className="relative z-10 text-center text-white px-4 md:px-40">
        <div className="group inline-block">
          <h1 className="text-2xl md:text-5xl font-bold text-white mb-4">
            <span className="relative">
              Welcome to Gollamudi Technology and Software
              <span className="absolute bottom-0 left-0 w-0 h-1 bg-[#f06321] opacity-90 
                transition-all duration-300 ease-in-out group-hover:w-full"></span>
            </span>
          </h1>
        </div>
        
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

export default HomePage;