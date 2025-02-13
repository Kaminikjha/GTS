import React from "react";

const About = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        id="about"
        className="flex md:gap-10 flex-col md:flex-row justify-between items-center px-10 my-20"
      >
        {/* Text Content */}
        <div className="md:w-1/2">
          <h2 className="text-2xl md:text-5xl font-bold text-black mb-6">
            About Us
          </h2>
          <p className="text-sm md:text-2xl text-black leading-relaxed">
            Gollamudi Technology and Software is dedicated to delivering
            cutting-edge technology solutions that empower modern businesses.
            Our team of experts specializes in developing bespoke software,
            dynamic web applications, and intuitive mobile apps designed to
            elevate user experience and drive business success. With an
            unwavering commitment to innovation, quality, and collaboration, we
            transform visionary ideas into impactful digital solutions through
            strategic planning and sophisticated design. Whether you seek
            seamless digital experiences or robust business solutions, we are
            your trusted partner in accelerating growth and achieving excellence
            in the digital era. Let’s innovate, build, and lead the future
            together.
          </p>
        </div>

        {/* Video Section */}
        <div className="md:w-1/2 relative mt-10 md:mt-0 pb-10 md:pb-0">
          <video
            autoPlay
            loop
            muted
            className="rounded-lg shadow-lg object-cover w-full h-auto"
          >
            <source
              src={
                "https://cdn.pixabay.com/video/2021/01/03/61037-497754241_large.mp4"
              }
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>
    </>
  );
};

export default About;
