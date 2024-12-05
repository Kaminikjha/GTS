import React from 'react'
import img1 from "../assets/client1.png"
import img2 from "../assets/client2.png"
import img4 from "../assets/client4.png"

const Testimonials = () => {
  return (
    <>
    <section
        id="Testimonials"
        className="w-full flex flex-col gap-5 h-fit  px-7 py-10 lg:px-16 lg-py-20"
      >
        <p className="text-center text-orange-400 text-sm md:text-3xl underline"> Testimonials </p>
        
        <p className=" text-[#ffa500] text-center text-2xl">
          Discover what our clients think about our services.<br/> Read testimonials
          and reviews directly from those we've had the pleasure of working
          with.
        </p>

        <div className="flex justify-center items-center flex-wrap mt-5 w-full gap-6">
          <div className="bg-[#ffa500] hover:bg-[#fabc49] hover:opacity-85  border-2 hover:border-none border-orange-300 px-6 py-8 flex just items-center flex-col gap-4 rounded-xl w-80">
            <img src={img1} alt="image" height={140} width={140} />
            <p className="text-center text-[17px] text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
              doloribus impedit porro, ducimus suscipit labore!
            </p>
            <h1 className="text-center text-white text-2xl font-semibold">
              Celia Almeda
            </h1>
            <p className="text-center text-[17px] text-white">
              Web Developer
            </p>
          </div>

          <div className=" bg-[#ffa500] hover:bg-[#fabc49] border-2 hover:border-none border-orange-300 px-6 py-8 flex just items-center flex-col gap-4 rounded-xl w-80">
            <img src={img2} alt="image" height={140} width={140} />
            <p className="text-center text-[17px] text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
              doloribus impedit porro, ducimus suscipit labore!
            </p>
            <h1 className="text-center text-white text-2xl font-semibold">
              Nat Reynolds
            </h1>
            <p className="text-center text-[17px] text-white">
              Android Developer
            </p>
          </div>

         

          <div className="bg-[#ffa500] hover:bg-[#fabc49] border-2 hover:border-none border-orange-300 px-6 py-8 flex just items-center flex-col gap-4 rounded-xl w-80">
            <img src={img4} alt="image" height={140} width={140} />
            <p className="text-center text-[17px] text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
              doloribus impedit porro, ducimus suscipit labore!
            </p>
            <h1 className="text-center text-white text-2xl font-semibold">
              Mattie Smith
            </h1>
            <p className="text-center text-[17px] text-white">
              Full Stack Developer
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Testimonials
