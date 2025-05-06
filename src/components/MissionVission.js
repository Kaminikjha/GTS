import React from "react";
import { motion } from "framer-motion";
import video from "../assets/video.mp4"; // Ensure the path is correct

const missionVision = [
  {
    title: "Mission",
    description:
      "Our mission is to empower businesses by delivering innovative and reliable technology solutions. Through custom software, web, and mobile applications, we aim to simplify challenges, enhance user experiences, and drive meaningful growth for our clients.",
    icon: "https://cdn-icons-png.flaticon.com/128/14676/14676084.png",
  },
  {
    title: "Vision",
    description:
      "Our vision is to be a global leader in innovative technology solutions, empowering businesses with cutting-edge software, web applications, and mobile solutions. We strive to transform ideas into reality by delivering exceptional quality, seamless user experiences, and fostering long-term partnerships for digital success.",
    icon: "https://cdn-icons-png.flaticon.com/128/10434/10434252.png",
  },
];

const MissionVisionSection = () => {
  return (
    <section
      id="missionVision"
      className="relative py-8 sm:py-10 md:py-12 px-2 sm:px-4 md:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Overlay to darken video and improve text readability */}
        <div className="absolute inset-0 bg-black opacity-40 z-10"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto text-center">
        <div className="mb-4 sm:mb-5 md:mb-6 lg:mb-12">
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-5xl font-bold text-white">
            Our Mission & Vision
          </h2>
          <p className="text-xs sm:text-sm md:text-base lg:text-2xl text-white leading-relaxed mt-1 sm:mt-2 md:mt-3 lg:mt-4">
            Driving innovation with purpose and creating a brighter tomorrow.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-2 sm:gap-4 md:gap-6 lg:gap-10">
          {missionVision.map((item, index) => (
            <motion.div
              key={index}
              className="relative group border border-1 border-[#f06321] opacity-90 shadow-lg rounded-lg p-2 sm:p-3 md:p-4 lg:p-8 text-center transform transition hover:scale-105"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 50 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>

              <div className="relative">
                {/* Icon */}
                <div className="mb-1 sm:mb-2 md:mb-3 lg:mb-6">
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="mx-auto h-6 sm:h-8 md:h-10 lg:h-14 w-6 sm:w-8 md:w-12 lg:w-14 object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                {/* Title */}
                <h3 className="text-base sm:text-lg md:text-xl lg:text-3xl font-bold text-white group-hover:text-black transition-colors duration-300">
                  {item.title}
                </h3>
                {/* Description */}
                <p className="text-xs sm:text-sm md:text-base lg:text-xl text-white mt-1 sm:mt-2 md:mt-3 lg:mt-4 group-hover:text-black transition-colors duration-300">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionVisionSection;