// AllSections.jsx
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import emailjs from "emailjs-com";
import bg from "../assets/bgvideo2.mp4"; // Same video as Homepage

const ServiceCard = ({ lottieSrc, title, description }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="group h-72 w-full max-w-sm mx-auto perspective cursor-pointer transition-all duration-300 hover:scale-105"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div
        className={`relative w-full h-full transition-transform duration-500 transform-style-3d ${
          isFlipped ? "rotate-y-180" : ""
        }`}
      >
        <div className="absolute w-full h-full backface-hidden rounded-xl shadow-lg overflow-hidden bg-white/10 backdrop-blur-md border border-white/20">
          <DotLottieReact
            src={lottieSrc}
            loop
            autoplay
            className="w-full h-full object-contain p-6"
          />
        </div>
        <div className="absolute w-full h-full backface-hidden rotate-y-180 rounded-xl shadow-lg p-6 flex flex-col justify-center text-center bg-gradient-to-br from-orange-500 to-orange-600 backdrop-blur-md border border-orange-500/30">
          <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
          <p className="text-orange-100 text-base leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
};

const AllSections = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const services = [
    {
      title: "App Development",
      description:
        "We create custom mobile applications tailored to your business needs using cutting-edge technology.",
      lottieSrc:
        "https://lottie.host/69dd8df4-bc8c-4ce2-9f3f-8345d3ba3482/csDNqlAUes.lottie",
    },
    {
      title: "Web Development",
      description:
        "Our team builds responsive, modern websites designed to enhance your online presence.",
      lottieSrc:
        "https://lottie.host/25a94245-fc3f-4a93-9376-f4cb3bb1318f/iOpltwc20O.lottie",
    },
  ];

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

  const [projectsCompleted, setProjectsCompleted] = useState(0);
  const [clientSatisfaction, setClientSatisfaction] = useState(0);
  const [yearsOfExperience, setYearsOfExperience] = useState(0);
  const [mobileResponsive, setMobileResponsive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProjectsCompleted((prev) => (prev < 10 ? prev + 1 : prev));
      setClientSatisfaction((prev) => (prev < 98 ? prev + 1 : prev));
      setYearsOfExperience((prev) => (prev < 2 ? prev + 1 : prev));
      setMobileResponsive((prev) => (prev < 100 ? prev + 1 : prev));
    }, 20);
    return () => clearInterval(interval);
  }, []);

  const form = useRef();
  const [alertMessage, setAlertMessage] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const validateForm = () => {
    const name = form.current.from_name.value.trim();
    const email = form.current.user_email.value.trim();
    const phone = form.current.user_phone.value.trim();
    const message = form.current.message.value.trim();

    if (name === "") {
      setAlertMessage("Please enter your name.");
      setShowAlert(true);
      return false;
    }
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA.Z0-9.-]+\.[a-zA.Z]{2,}$/;
    if (email === "" || !emailRegex.test(email)) {
      setAlertMessage("Please enter a valid email address.");
      setShowAlert(true);
      return false;
    }
    const phoneRegex = /^[0-9]{10}$/;
    if (phone === "" || !phoneRegex.test(phone)) {
      setAlertMessage("Please enter a valid 10-digit phone number.");
      setShowAlert(true);
      return false;
    }
    if (message === "") {
      setAlertMessage("Please enter your message.");
      setShowAlert(true);
      return false;
    }
    return true;
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    emailjs
      .sendForm("service_6dmiyzx", "template_xxeyn07", form.current, "pilFSvoqFoHBRuGBG")
      .then(
        () => {
          setAlertMessage("Message sent successfully!");
          setShowAlert(true);
          form.current.reset();
        },
        () => {
          setAlertMessage("Failed to send message. Please try again.");
          setShowAlert(true);
        }
      );
  };

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Background Video - Same alignment as Homepage */}
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
      <div className="absolute inset-0 w-full h-full bg-black opacity-60 z-[1]" />

      {/* About Section */}
      <section id="about" className="relative my-8 md-mt-0 flex items-center justify-center z-10">
        <div className="max-w-8xl mx-auto w-full px-10">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
            <div className="md:w-1/2 space-y-6 animate-fade-in-up">
              <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold text-white mb-6 leading-tight">
                About Us
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed opacity-90">
              Gollamudi Technology and Software delivers innovative technology solutions for businesses. We specialize in custom software, web, and mobile applications, ensuring high quality, user-friendly experiences. Our expert team focuses on innovation, collaboration, and modern strategies to help businesses grow and succeed in the digital world.
              </p>
            </div>
            <div className="md:w-1/2 relative">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <DotLottieReact
                  src="https://lottie.host/6a5486d6-9a46-460e-bb83-1895d12aa914/jrbH08hw5e.lottie"
                  loop
                  autoplay
                  className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative flex items-center justify-center z-10 my-8 md-mt-0">
      <div className="relative z-20 container mx-auto px-4 py-20 flex flex-col items-center justify-center">
        <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold leading-tight text-white text-center mb-12 md:mb-16 drop-shadow-lg">
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
      </section>

      {/* Mission Vision Section */}
      <section id="missionVision" className="relative  flex items-center justify-center z-10 mb-8 md-mt-0">
      <div className="relative z-20 max-w-7xl mx-auto text-center ">
        <div className="mb-4 sm:mb-5 md:mb-6 lg:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold text-white">
            Our Mission & Vision
          </h2>
          <p className="text-xs sm:text-sm md:text-base lg:text-2xl text-white leading-relaxed mt-1 sm:mt-2 md:mt-3 lg:mt-4">
            Driving innovation with purpose and creating a brighter tomorrow.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-4 md:gap-6 lg:gap-10">
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
                <h3 className="text-2xl sm:text-3xl md:text-3xl mx-5 md:mx-0 font-bold text-white group-hover:text-black transition-colors duration-300">
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

      {/* Achievements Section */}
      <section id="achievements" className="relative  flex items-center justify-center z-10 mb-8 md-mt-0">
      <div className="relative z-20 flex flex-col items-center justify-center min-h-screen text-white">
        {/* Title */}
        <h1 className="text-2xl sm:text-3xl md:text-3xl font-bold text-white mb-12 md:mb-16 animate-fade-in">
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
      </section>

      {/* Contact Us Section */}
      <section id="contact" className="relative  flex items-center justify-center z-10 mb-8 md-mt-0">
      <div className="relative w-full max-w-8xl grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 p-4 md:p-6 lg:p-10 transform transition-transform duration-300 ease-in-out z-20  ">
        {/* Left Section: Contact Information */}
        <div className="space-y-4 md:space-y-6">
          <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold text-white hover:translate-x-2 transition-transform duration-300">
            Get In Touch With Us
          </h2>
          <p className="text-sm md:text-lg lg:text-2xl text-white">
            Together, we can create something extraordinary. Let’s talk!
          </p>

          {/* Lottie Animation Section (Replacing Image) */}
          <div className="mt-4 md:mt-6">
            <DotLottieReact
              src="https://lottie.host/41b7c3e3-80f0-43f7-be66-c12408e4e87d/3P7voN3sI3.lottie"
              loop
              autoplay
              className="w-full  rounded-lg"
            />
          </div>
        </div>

        {/* Right Section: Contact Form */}
        <div className="border border-1 border-white shadow-2xl p-4 md:p-6 lg:p-8 rounded-lg relative transform hover:scale-105 transition-transform duration-300">
          <form ref={form} onSubmit={sendEmail} className="space-y-4 md:space-y-6">
            <div>
              <input
                type="text"
                name="from_name"
                placeholder="Your Name"
                className="text-white text-sm md:text-lg lg:text-2xl w-full px-3 md:px-4 py-2 bg-transparent border-b-2 border- focus:outline-none focus:border-white placeholder-white"
                required
              />
            </div>
            <div>
              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                className="text-white text-sm md:text-lg lg:text-2xl w-full px-3 md:px-4 py-2 bg-transparent border-b-2 border- focus:outline-none focus:border-white placeholder-white"
                required
              />
            </div>
            <div>
              <input
                type="tel"
                name="user_phone"
                placeholder="Your Phone"
                className="text-white text-sm md:text-lg lg:text-2xl w-full px-3 md:px-4 py-2 bg-transparent border-b-2 border- focus:outline-none focus:border-white placeholder-white"
                required
              />
            </div>
            <div>
              <textarea
                name="message"
                placeholder="Your Message"
                rows="4"
                className="text-white text-sm md:text-lg lg:text-2xl w-full px-3 md:px-4 py-2 bg-transparent border-b-2 border- focus:outline-none focus:border-white placeholder-white"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="text-sm md:text-lg lg:text-2xl w-full px-3 md:px-4 py-2 bg-[#f06321] opacity-90 text-white font-semibold rounded-md transition-colors duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
      </section>

      {/* Custom Styles */}
      <style jsx>{`
        .perspective { perspective: 1200px; }
        .transform-style-3d { transform-style: preserve-3d; }
        .backface-hidden { backface-visibility: hidden; }
        .rotate-y-180 { transform: rotateY(180deg); }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up { animation: fadeInUp 1s ease-out forwards; }
        @media (max-width: 768px) {
          .text-5xl { font-size: 2.5rem; }
          .text-xl { font-size: 1.125rem; }
        }
      `}</style>
    </div>
  );
};

export default AllSections;
