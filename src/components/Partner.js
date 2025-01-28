// import React, { useState, useRef } from "react";
// import { useNavigate } from "react-router-dom";
// import emailjs from "emailjs-com";
// import logo from "../assets/logo.jpeg";

// const Partner = () => {
//   const [open, setOpen] = useState(false);
//   const [alertMessage, setAlertMessage] = useState('');
//   const [showAlert, setShowAlert] = useState(false);
//   const [errors, setErrors] = useState({});
//   const form = useRef();

//   // Handle toggle
//   const toggle = () => {
//     setOpen(!open);
//   };

//   const navigate = useNavigate();

//   // Form validation
//   const validateForm = () => {
//     const formData = new FormData(form.current);
//     const name = formData.get("name").trim();
//     const email = formData.get("email").trim();
//     const phone = formData.get("phone").trim();
//     const message = formData.get("message").trim();
//     let valid = true;
//     const newErrors = {};

//     if (!name) {
//       valid = false;
//       newErrors.name = "Name is required.";
//     }

//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!email || !emailRegex.test(email)) {
//       valid = false;
//       newErrors.email = "Please enter a valid email.";
//     }

//     const phoneRegex = /^[0-9]{10}$/;
//     if (!phone || !phoneRegex.test(phone)) {
//       valid = false;
//       newErrors.phone = "Please enter a valid 10-digit phone number.";
//     }

//     if (!message) {
//       valid = false;
//       newErrors.message = "Message cannot be empty.";
//     }

//     setErrors(newErrors);
//     return valid;
//   };

//   // Send email function
//   const sendEmail = (e) => {
//     e.preventDefault();
//     if (!validateForm()) return;

//     emailjs
//       .sendForm(
//         "service_6dmiyzx", // Replace with your EmailJS Service ID
//         "template_lcgbj1o", // Replace with your EmailJS Template ID
//         form.current,
//         "pilFSvoqFoHBRuGBG" // Replace with your EmailJS Public Key
//       )
//       .then(
//         (result) => {
//           setAlertMessage("Message sent successfully!");
//           setShowAlert(true);
//           form.current.reset(); // Clear the form after sending
//         },
//         (error) => {
//           setAlertMessage("Failed to send message. Please try again.");
//           setShowAlert(true);
//         }
//       );
//   };

//   const handleCloseAlert = () => {
//     setShowAlert(false);
//     setAlertMessage('');
//   };

//   return (
//     <>
//       <div
//         id="home"
//         className="w-full mb-20 text-white bg-[#f06321] opacity-90 shadow-xl p-12 font-[\'Roboto Slab\'] mt-20"
//       >
//         <div className="w-full flex items-center justify-center pb-10 ">
//           <h1 className="text-2xl md:text-5xl font-bold pb-5">Our Partners</h1>
//         </div>

//         <div className="flex justify-center items-center w-full lg:w-3/3 flex-col lg:flex-row bg-white border-2 shadow-lg rounded-lg px-8 py-12 gap-10 z-20">
//           <div className="flex justify-center items-start flex-col gap-4 w-full">
//             <h2 className="text-2xl md:text-4xl font-bold text-[#f06321] underline decoration-2">
//               REQUEST A CALL BACK
//             </h2>
//             <h3 className="text-sm md:text-xl text-[#f06321] uppercase underline decoration-1 tracking-wider">
//               Our Consultants always help you
//             </h3>
//             <p className="text-sm md:text-2xl font-semibold text-[#f06321]">
//               "Request a call back" in the context of partnerships refers to a
//               simple process or feature where one party (usually a potential
//               partner or client) can provide their contact information and
//               request the other party to call them at a convenient time. This is
//               often used in business or service contexts to initiate
//               discussions, clarify details, or explore collaboration
//               opportunities. It prioritizes effective communication and
//               strengthens relationships.
//             </p>
//           </div>

//           <div className="flex flex-col justify-center items-center gap-5 w-full">
//             <form ref={form} onSubmit={sendEmail} className="space-y-5 w-full">
//               <input
//                 type="text"
//                 name="name"
//                 placeholder="Enter your name"
//                 className="text-black px-4 py-4 w-full border-2 border-[#f06321] rounded-lg text-sm md:text-xl bg-slate-100 focus:outline-none hover:scale-105 transition duration-300"
//                 required
//               />
//               {errors.name && <p className="text-red-500">{errors.name}</p>}

//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Enter your email"
//                 className="text-black px-4 py-4 w-full border-2 border-[#f06321] rounded-lg text-sm md:text-xl bg-slate-100 focus:outline-none hover:scale-105 transition duration-300"
//                 required
//               />
//               {errors.email && <p className="text-red-500">{errors.email}</p>}

//               <input
//                 type="tel"
//                 name="phone"
//                 placeholder="Your Phone Number"
//                 className="text-black px-4 py-4 w-full border-2 border-[#f06321] rounded-lg text-sm md:text-xl bg-slate-100 focus:outline
// [10:40 AM, 1/27/2025] Sai Teja Team GTS: -none hover:scale-105 transition duration-300"
//                 required
//               />
//               {errors.phone && <p className="text-red-500">{errors.phone}</p>}

//               <textarea
//                 name="message"
//                 placeholder="Enter your message"
//                 className="text-black px-4 py-4 w-full border-2 border-[#f06321] rounded-lg text-sm md:text-xl bg-slate-100 focus:outline-none hover:scale-105 transition duration-300"
//                 rows="5"
//                 required
//               ></textarea>
//               {errors.message && <p className="text-red-500">{errors.message}</p>}

//               <button
//                 type="submit"
//                 className="bg-[#f06321] opacity-90 text-sm md:text-2xl text-white px-4 py-3 w-full rounded-lg font-bold cursor-pointer hover:opacity-90 hover:scale-105 transition duration-300"
//               >
//                 Send
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>

//       {showAlert && (
//         <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
//           <div className="bg-white rounded-lg p-6 text-center shadow-lg">
//             <p className="text-lg font-semibold mb-4">{alertMessage}</p>
//             <button
//               onClick={handleCloseAlert}
//               className="bg-[#f06321] text-white px-4 py-2 rounded-lg hover:bg-orange-500"
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Partner;