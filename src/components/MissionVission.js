import React from "react";
import { motion } from "framer-motion";

const missionVision = [
  {
    title: "Mission",
    description:
      "Our Mission is to be a global leader in innovative technology solutions, empowering businesses with cutting-edge software, web applications, and mobile solutions. We strive to transform ideas into reality by delivering exceptional quality, seamless user experiences, and fostering long-term partnerships for digital success.",
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
    <section id="missionVision" className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <div className="mb-12">
          <h2 className="text-2xl md:text-5xl font-bold text-[#f06321] opacity-90">
            Our Mission & Vision
          </h2>
          <p className="text-sm md:text-2xl text-[#f06321] opacity-90 leading-relaxed mt-4">
            Driving innovation with purpose and creating a brighter tomorrow.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {missionVision.map((item, index) => (
            <motion.div
              key={index}
              className="relative group bg-white shadow-lg rounded-lg p-6 text-center transform transition hover:scale-105"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 50 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>

              <div className="relative">
                {/* Icon */}
                <div className="mb-4">
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="mx-auto h-12 w-12 group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                {/* Title */}
                <h3 className="text-2xl font-bold text-[#f06321] opacity-90 group-hover:text-white transition-colors duration-300">
                  {item.title}
                </h3>
                {/* Description */}
                <p className="text-sm md:text-xl text-[#f06321] opacity-90 mt-2 group-hover:text-white transition-colors duration-300">
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
