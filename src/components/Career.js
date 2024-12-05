import React from 'react'
import image from "../assets/img-3.png"
import { FaLaptopCode } from "react-icons/fa";
import { AiOutlineConsoleSql } from "react-icons/ai";
import { FaDatabase } from "react-icons/fa";

const Career = () => {
  return (
  <>
  <div id='Career'  className='text-white flex md:flex flex-wrap flex-col md:flex-row  w-full justify-between items-start p-10 md:p-20'>
  <div className="flex justify-center items-center w-full lg:w-1/2 lg:flex-col-2 flex-wrap">
          <div className="flex justify-center items-center gap-3 flex-col bg-[#ffa500] hover:bg-[#fabc49] h-auto w-64 rounded-lg m-5 p-5 lg:p-7">
          <div className='animate-bounce bg-orange-500  p-3 rounded-full cursor-pointer'> <FaLaptopCode className=' h-5 w-5'/></div>
          
            <h className="text-xl lg:text-2xl text-center text-white font-semibold">
              {" "}
              Backend Developer{" "}
            </h>
            <p className="text-sm text-center text-white">
              {" "}
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </p>

            <div className="flex justify-center items-center gap-7">
              <button className="bg-orange-500 hover:opacity-85 duration-300 hover:scale-10 text-white px-2 lg:px-4 py-2 rounded-md text-sm  hover:text-white cursor-pointer ">
                View More
              </button>
            </div>
          </div>

          <div className="flex justify-center items-center gap-3 flex-col bg-[#ffa500] hover:bg-[#fabc49] h-auto w-64 rounded-lg m-5 p-5 lg:p-7">
          <div className='animate-bounce bg-orange-500  p-3 rounded-full cursor-pointer'> <FaLaptopCode className=' h-5 w-5'/></div>
          
            <h className="text-xl lg:text-2xl text-center text-white font-semibold">
              {" "}
              Frontend Developer{" "}
            </h>
            <p className="text-sm text-center text-white">
              {" "}
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </p>

            <div className="flex justify-center items-center gap-7">
              <button className="bg-orange-500 hover:opacity-85 duration-300 hover:scale-10 text-white px-2 lg:px-4 py-2 rounded-md text-sm  hover:text-white cursor-pointer ">
                View More
              </button>
            </div>
          </div>

          <div className="flex justify-center items-center gap-3 flex-col bg-[#ffa500] hover:bg-[#fabc49] h-auto w-64 rounded-lg m-5 p-5 lg:p-7">
          <div className='animate-bounce bg-orange-500  p-3 rounded-full cursor-pointer'> <FaDatabase className=' h-5 w-5'/> </div>
          
            <h className="text-xl lg:text-2xl text-center text-white font-semibold">
              {" "}
              Database{" "}
            </h>
            <p className="text-sm text-center text-white">
              {" "}
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </p>

            <div className="flex justify-center items-center gap-7">
              <button className="bg-orange-500 hover:opacity-85 duration-300 hover:scale-10 text-white px-2 lg:px-4 py-2 rounded-md text-sm  hover:text-white cursor-pointer ">
                View More
              </button>
            </div>
          </div>

          <div className="flex justify-center items-center gap-3 flex-col bg-[#ffa500] hover:bg-[#fabc49] h-auto w-64 rounded-lg m-5 p-5 lg:p-7">
          <div className='animate-bounce bg-orange-500  p-3 rounded-full cursor-pointer'> <AiOutlineConsoleSql className=' h-5 w-5'/> </div>
          
            <h className="text-xl lg:text-2xl text-center text-white font-semibold">
              {" "}
              SQL{" "}
            </h>
            <p className="text-sm text-center text-white">
              {" "}
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </p>

            <div className="flex justify-center items-center gap-7">
              <button className="bg-orange-500 hover:opacity-85 duration-300 hover:scale-10 text-white px-2 lg:px-4 py-2 rounded-md text-sm  hover:text-white cursor-pointer ">
                View More
              </button>
            </div>
          </div>
        </div>


<div>
  <h1 className=' text-orange-400 text-sm md:text-3xl underline'>Career</h1>
  <p className=' text-sm md:text-xl  text-[#ffa500] py-5'>Join us and be a part of groundbreaking software solutions.</p>
    <img src={image} width={500}  alt=" Avtar Image" />
</div>
      </div>
  </>
  )
}

export default Career
