import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { IoMdCall } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";

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
      className="min-h-screen flex items-center justify-center p-6 mt-10"
    >
      <div className="relative  w-full max-w-8xl grid grid-cols-1 md:grid-cols-2 gap-10 bg-white shadow-2xl rounded-lg p-10 transform transition-transform duration-300 ease-in-out">
        {/* Left Section: Contact Information */}
        <div className="space-y-6">
          <h2 className="text-2xl md:text-5xl font-bold text-black hover:translate-x-2 transition-transform duration-300">
            Get In Touch With Us
          </h2>
          <p className="text-sm md:text-2xl text-black">
            Together, we can create something extraordinary. Let’s talk!
          </p>
          <div className="space-y-4">
            {/* Location Info */}
            <div className="flex items-center space-x-4">
              <div className="bg-[#f06321] opacity-90 text-white p-4 rounded-lg shadow-2xl transform hover:scale-110 transition-transform duration-300">
                <IoLocationSharp className="text-4xl" />
              </div>
              <p className="text-black text-sm md:text-2xl">
                Tenali, Andhra Pradesh
              </p>
            </div>
            {/* Phone Info */}
            <div className="flex items-center space-x-4">
              <div className="bg-[#f06321] opacity-90 text-white p-4 rounded-lg shadow-2xl transform hover:scale-110 transition-transform duration-300">
                <IoMdCall className="text-4xl" />
              </div>
              <p className="text-black text-sm md:text-2xl">
                +919490612648
              </p>
            </div>
            {/* Email Info */}
            <div className="flex items-center space-x-4">
              <div className="bg-[#f06321] opacity-90 text-white p-4 rounded-lg shadow-2xl transform hover:scale-110 transition-transform duration-300">
                <MdOutlineEmail className="text-4xl" />
              </div>
              <p className="text-black text-sm md:text-2xl">
                rohithsai.g@gtands.com
              </p>
            </div>
          </div>
        </div>

        {/* Right Section: Contact Form */}
        <div className="bg-white  p-8 rounded-lg shadow-lg relative transform hover:scale-105 transition-transform duration-300">
          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <div>
              <input
                type="text"
                name="from_name"
                placeholder="Your Name"
                className="text-black text-sm md:text-2xl w-full px-4 py-2 bg-transparent border-b-2 border-black focus:outline-none focus:border-black placeholder-black "
                required
              />
            </div>
            <div>
              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                className="text-black text-sm md:text-2xl w-full px-4 py-2 bg-transparent border-b-2 border-black focus:outline-none focus:border-black placeholder-black "
                required
              />
            </div>
            <div>
              <input
                type="tel"
                name="user_phone"
                placeholder="Your Phone"
                className="text-black text-sm md:text-2xl w-full px-4 py-2 bg-transparent border-b-2 border-black focus:outline-none focus:border-black placeholder-black "
                required
              />
            </div>
            <div>
              <textarea
                name="message"
                placeholder="Your Message"
                rows="4"
                className="text-black text-sm md:text-2xl w-full px-4 py-2 bg-transparent border-b-2 border-black focus:outline-none focus:border-black placeholder-black "
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="text-sm md:text-2xl w-full px-4 py-2 bg-[#f06321] opacity-90 text-black rounded-md  transition-colors duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Popup Alert */}
      {showAlert && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg p-6 text-center shadow-lg">
            <p className="text-lg font-semibold mb-4">{alertMessage}</p>
            <button
              onClick={handleCloseAlert}
              className="bg-[#f06321] opacity-90 text-white px-4 py-2 rounded-lg "
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