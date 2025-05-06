import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { IoMdCall } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { DotLottieReact } from "@lottiefiles/dotlottie-react"; // Import DotLottieReact
import video from "../assets/video.mp4"; // Ensure the path is correct

const ContactUs = () => {
  const form = useRef();
  const [alertMessage, setAlertMessage] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  // Validate form inputs
  const validateForm = () => {
    const name = form.current.from_name.value.trim();
    const email = form.current.user_email.value.trim();
    const phone = form.current.user_phone.value.trim();
    const message = form.current.message.value.trim();

    // Validate Name
    if (name === "") {
      setAlertMessage("Please enter your name.");
      setShowAlert(true);
      return false;
    }

    // Validate Email
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (email === "" || !emailRegex.test(email)) {
      setAlertMessage("Please enter a valid email address.");
      setShowAlert(true);
      return false;
    }

    // Validate Phone Number
    const phoneRegex = /^[0-9]{10}$/;
    if (phone === "" || !phoneRegex.test(phone)) {
      setAlertMessage("Please enter a valid 10-digit phone number.");
      setShowAlert(true);
      return false;
    }

    // Validate Message
    if (message === "") {
      setAlertMessage("Please enter your message.");
      setShowAlert(true);
      return false;
    }

    return true;
  };

  // Send email function
  const sendEmail = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return; // Do not proceed with sending the email if validation fails
    }

    // Using your EmailJS credentials
    emailjs
      .sendForm(
        "service_6dmiyzx", // Replace with your EmailJS Service ID
        "template_xxeyn07", // Replace with your EmailJS Template ID
        form.current,
        "pilFSvoqFoHBRuGBG" // Replace with your EmailJS Public Key
      )
      .then(
        (result) => {
          setAlertMessage("Message sent successfully!");
          setShowAlert(true);
          form.current.reset(); // Clear the form after sending
        },
        (error) => {
          setAlertMessage("Failed to send message. Please try again.");
          setShowAlert(true);
        }
      );
  };

  const handleCloseAlert = () => {
    setShowAlert(false);
    setAlertMessage("");
  };

  return (
    <div
      id="contact"
      className="min-h-screen flex items-center justify-center   relative"
    >
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute z-0 w-full h-full object-cover"
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

      <div className="relative w-full max-w-8xl grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 p-4 md:p-6 lg:p-10 transform transition-transform duration-300 ease-in-out z-20  ">
        {/* Left Section: Contact Information */}
        <div className="space-y-4 md:space-y-6">
          <h2 className="text-xl md:text-2xl lg:text-5xl font-bold text-white hover:translate-x-2 transition-transform duration-300">
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

      {/* Popup Alert */}
      {showAlert && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg p-4 md:p-6 text-center shadow-lg">
            <p className="text-sm md:text-lg font-semibold mb-2 md:mb-4">{alertMessage}</p>
            <button
              onClick={handleCloseAlert}
              className="bg-[#f06321] opacity-90 text-white px-3 md:px-4 py-2 md:py-2 rounded-lg text-sm md:text-lg"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactUs;