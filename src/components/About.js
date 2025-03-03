import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import video from "../assets/video.mp4"

const About = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        id="about"
        className="bg-gradient-to-br py-12 md:py-20 px-10 min-h-[80vh] flex items-center relative overflow-hidden"
      >
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          <source
            src={video}
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        <div className="max-w-8xl mx-auto w-full">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
            {/* Text Content */}
            <div className="md:w-1/2 space-y-6 animate-fade-in-up">
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                About Us
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed opacity-90">
                <span className="text-sm sm:text-base md:text-xl text-white leading-relaxed mb-8">
                  Gollamudi Technology and Software
                </span>{" "}
                delivers innovative technology solutions for businesses. We
                specialize in custom software, web, and mobile applications,
                ensuring high quality, user-friendly experiences. Our expert
                team focuses on innovation, collaboration, and modern
                strategies to help businesses grow and succeed in the digital
                world.
              </p>
            </div>

            {/* Lottie Animation Section */}
            <div className="md:w-1/2 relative">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <DotLottieReact
                  src="https://lottie.host/6a5486d6-9a46-460e-bb83-1895d12aa914/jrbH08hw5e.lottie"
                  loop
                  autoplay
                  className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover"
                />
                {/* Overlay Effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Add some custom CSS */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 1s ease-out forwards;
        }

        @media (max-width: 768px) {
          .text-5xl {
            font-size: 2.5rem;
          }
          .text-xl {
            font-size: 1.125rem;
          }
        }
      `}</style>
    </>
  );
};

export default About;