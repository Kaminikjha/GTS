
import { useNavigate } from 'react-router-dom';
import React, { useState } from "react";
import logo from "../assets/logo.jpeg"

  

const Client = () => {
  const [open, setOpen] =useState(false)
  
    //handle toggle
  
    const toggle =() =>{
      setOpen(!open)
    }
    const navigate = useNavigate();

  return (
    <>
      <div>
        <h2 className="text-2xl md:text-4xl font-bold pb-5 text-[#f06321] flex justify-center p-5">
          Our Clients
        </h2>
      </div>
      <div
        id="Client"
        className="text-white flex md:flex flex-wrap flex-col-2 md:flex-row  w-full justify-evenly items-start md:p-20"
      >
        <div className="border border-1 border-white shadow-lg rounded-xl font-bold hover:opacity-85 duration-300 hover:scale-105 mb-5">
        <img onClick={()=> navigate("/home")} className="rounded-2xl" src={logo} width={200} alt="" />
        </div>

        <div className="border border-1 border-white shadow-lg rounded-xl font-bold hover:opacity-85 duration-300 hover:scale-105 ">
        <img onClick={()=> navigate("/home")} className="rounded-2xl" src={logo} width={200} alt="" />
        </div>

        <div className=" border border-1 border-white shadow-lg rounded-xl font-bold hover:opacity-85 duration-300 hover:scale-105 ">
        <img onClick={()=> navigate("/home")} className="rounded-2xl" src={logo} width={200} alt="" />
        </div>

        <div className="border border-1 border-white shadow-lg rounded-xl font-bold hover:opacity-85 duration-300 hover:scale-105  mb-5">
        <img onClick={()=> navigate("/home")} className="rounded-2xl" src={logo} width={200} alt="" />
        </div>
      </div>
    </>
  );
};

export default Client;
