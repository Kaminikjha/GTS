// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const Home = () => {
//   const [open, setOpen] = useState(false);

//   // Handle toggle
//   const toggle = () => {
//     setOpen(!open);
//   };

//   const navigate = useNavigate();

//   return (
//     <>
//       <div
//         id="Home"
//         className="w-full h-screen relative text-white flex items-center justify-center flex-col md:flex-row p-8 md:p-16 font-[\'Roboto Slab\']"
//         style={{
//           backgroundImage:
//             "url('https://images.unsplash.com/photo-1484417894907-623942c8ee29?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//       >
//         {/* Text Content */}
//         <div className="text-center md:text-left md:w-3/4 md:pr-10 z-10">
//           <h1 className="text-2xl md:text-5xl font-bold text-[#f06321] opacity-90 mb-4">
//             Welcome to Gollamudi Technology and Software
//           </h1>
//           <p className="text-sm md:text-2xl text-white leading-relaxed mb-6">
//             At GTS, we transform ideas into reality. Our expertise lies in building world-class web and mobile applications tailored to meet your business goals. Whether it's designing user-friendly websites or developing powerful software solutions, we deliver innovation that drives success.
//           </p>
//           <p className="text-sm md:text-2xl text-white leading-relaxed mb-6">
//             Are you ready to kickstart your career? Join our team and become part of a dynamic environment that values creativity, growth, and excellence. At GTS, fresh talent is nurtured, and every idea matters.
//           </p>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Home;

import React from "react";
import img from "../assets/img.png";

const Home = () => {
  return (
    <>
      <div className="flex pt-10 flex-col md:gap-20 md:flex-row justify-between items-center px-10  font-[\'Roboto Slab\']">
        <div className="md:w-1/2">
          <div className=" md:text-left  ">
            <h1 className="text-2xl md:text-5xl font-bold text-black mb-4">
              Welcome to Gollamudi Technology and Software
            </h1>
            <p className="text-sm md:text-2xl text-black leading-relaxed mb-6">
              At GTS, we transform ideas into reality. Our expertise lies in
              building world-class web and mobile applications tailored to meet
              your business goals. Whether it's designing user-friendly websites
              or developing powerful software solutions, we deliver innovation
              that drives success.
            </p>
            <p className="text-sm md:text-2xl text-black leading-relaxed mb-6">
             Are you ready to kickstart your career? Join our team and become part of a dynamic environment that values creativity, growth, and excellence. At GTS, fresh talent is nurtured, and every idea matters.
           </p>
          </div>
        </div>

        <div>
          <img src={img} width={600} className=" object-cover" alt=" Avtar Image" />
        </div>
      </div>
    </>
  );
};

export default Home;
