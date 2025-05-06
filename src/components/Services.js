import React, { useState, useEffect } from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import video from '../assets/video.mp4'; // Ensure the path is correct

const ServiceCard = ({ lottieSrc, title, description }) => {
  const [isFlipped, setIsFlipped] = React.useState(false);

  return (
    <div
      className="group h-72 w-full max-w-sm mx-auto perspective cursor-pointer transition-all duration-300 hover:scale-105"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div
        className={`relative w-full h-full transition-transform duration-500 transform-style-3d ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
      >
        {/* Front Face with Glass Effect */}
        <div className="absolute w-full h-full backface-hidden rounded-xl shadow-lg overflow-hidden bg-white/10 backdrop-blur-md border border-white/20">
          <DotLottieReact
            src={lottieSrc}
            loop
            autoplay
            className="w-full h-full object-contain p-6"
          />
        </div>

        {/* Back Face with Orange Theme */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180 rounded-xl shadow-lg p-6 flex flex-col justify-center text-center bg-gradient-to-br from-orange-500 to-orange-600 backdrop-blur-md border border-orange-500/30">
          <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
          <p className="text-orange-100 text-base leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      title: 'App Development',
      description:
        'We create custom mobile applications tailored to your business needs using cutting-edge technology. Our focus is on delivering seamless performance and exceptional user experiences across all devices.',
      lottieSrc:
        'https://lottie.host/69dd8df4-bc8c-4ce2-9f3f-8345d3ba3482/csDNqlAUes.lottie',
    },
    {
      title: 'Web Development',
      description:
        'Our team builds responsive, modern websites designed to enhance your online presence. We prioritize speed, security, and user-friendly interfaces to drive your business growth.',
      lottieSrc:
        'https://lottie.host/25a94245-fc3f-4a93-9376-f4cb3bb1318f/iOpltwc20O.lottie',
    },
  ];

  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        // Scrolling down
        setShowNavbar(false);
      } else {
        // Scrolling up
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <section className="relative min-h-screen w-full overflow-hidden flex items-center justify-center">
 
      

      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0 filter brightness-75"
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay with better contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40 z-10" />

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 py-20 flex flex-col items-center justify-center">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-tight text-white text-center mb-12 md:mb-16 drop-shadow-lg">
          Our Services
        </h2>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8 w-full max-w-4xl mx-auto">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              lottieSrc={service.lottieSrc}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        .perspective {
          perspective: 1200px;
        }
        .transform-style-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </section>
  );
};

export default Services;