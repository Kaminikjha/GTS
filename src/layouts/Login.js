import React from "react";
import { FaUser } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaLock } from "react-icons/fa";


const Login = () => {
  return (
    <>
      <div className="w-full h-screen flex items-center justify-center bg-[#f06321] tracking-wider">
        <div className="w-11/12 sm:w-5/12 md:w-3/11 text-sm">
          <div className="w-full text-center my-3 border border-1 rounded-xl py-10 shadow shadow-slate-200">
            <h2 className=" text-2xl text-white font-medium underline pb-10">
              Login
            </h2>

            <form className=" my-2">
              <div className=" flex  border-b-white border-b-2 mx-5 my-7 py-1">
                <input
                  type="email"
                  className="text-white w-11/12 bg-transparent outline-none placeholder-white"
                  placeholder="Your Email Address"
                />
                <div className=" w-2/12 flex items-center justify-center text-white">
                  <IoMdMail className="text-xl" />
                </div>
              </div>

              <div className=" flex  border-b-white border-b-2 mx-5 my-7 py-1">
                <input
                  type="password"
                  className="text-white w-11/12 bg-transparent outline-none placeholder-white"
                  placeholder="Create a Strong Password"
                />
                <div className=" w-2/12 flex items-center justify-center text-white">
                  <FaLock className="text-xl" />
                </div>
              </div>

              <div className="mx-5 flex items-center justify-end cursor-pointer track text-xs">
                <p className=" text-white hover:underline">Forgot password</p>
              </div>

              <div className="mx-5 my-7 py-2">
                <button className="bg-white w-full h-[35px] rounded-sm text-[#f06321]">
                  Login
                </button>
              </div>

              <div className=" mx-5 my-5 py-2 flex items-center justify-center cursor-pointer">
                <p className=" text-white text-sm lg:text-base">
                  Don't have a account? /Register
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
