import React, { useEffect, useState } from "react";
import video from "../assets/video.mp4"; // Ensure the path is correct

const Achievement = () => {
  // State for counting animations
  const [projectsCompleted, setProjectsCompleted] = useState(0);
  const [clientSatisfaction, setClientSatisfaction] = useState(0);
  const [yearsOfExperience, setYearsOfExperience] = useState(0);
  const [mobileResponsive, setMobileResponsive] = useState(0);

  // Counting animation logic
  useEffect(() => {
    const interval = setInterval(() => {
      setProjectsCompleted((prev) => (prev < 10 ? prev + 1 : prev));
      setClientSatisfaction((prev) => (prev < 98 ? prev + 1 : prev));
      setYearsOfExperience((prev) => (prev < 2 ? prev + 1 : prev));
      setMobileResponsive((prev) => (prev < 100 ? prev + 1 : prev));
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute z-0 w-full h-full object-cover"
      >
        <source
          src={video}
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center min-h-screen text-white">
        {/* Title */}
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-12 md:mb-16 animate-fade-in">
          Our Achievements
        </h1>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-4">
          {/* Projects Completed */}
          <div className="flex flex-col items-center bg-[#f06321] opacity-90 p-6 rounded-lg shadow-lg animate-fade-in-up">
            <span className="text-6xl font-bold text-white">
              {projectsCompleted}+
            </span>
            <span className="text-xl text-white mt-2">Projects Completed</span>
          </div>

          {/* Client Satisfaction */}
          <div className="flex flex-col items-center bg-[#f06321] opacity-90 p-6 rounded-lg shadow-lg animate-fade-in-up">
            <span className="text-6xl font-bold text-white">
              {clientSatisfaction}%
            </span>
            <span className="text-xl text-white mt-2">Client Satisfaction</span>
          </div>

          {/* Years of Experience */}
          <div className="flex flex-col items-center bg-[#f06321] opacity-90 p-6 rounded-lg shadow-lg animate-fade-in-up">
            <span className="text-6xl font-bold text-white">
              {yearsOfExperience}+
            </span>
            <span className="text-xl text-white mt-2">
              Years of Industry Expertise
            </span>
          </div>

          {/* Mobile Responsive */}
          <div className="flex flex-col items-center bg-[#f06321] opacity-90 p-6 rounded-lg shadow-lg animate-fade-in-up">
            <span className="text-6xl font-bold text-white">
              {mobileResponsive}%
            </span>
            <span className="text-xl text-white mt-2">Mobile-Responsive</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievement;