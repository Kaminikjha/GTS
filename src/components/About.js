import React from 'react'
import img from "../assets/img-2.png"

import { IoMdArrowRoundForward } from "react-icons/io";

const About = () => {
  return (
    <>
      <div id='About' className='text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-[#ffa500] shadow-xl mx-0 md:mx-20 bg-opacity-70 rounded-lg p-12'>
<div>
    <h2 className='text-2xl md:text-4xl font-bold'>
About
    </h2>

    <div className='md:flex flex-wrap flex-col md:flex-row items-center'>
<img src={img} width={600} alt=" About Image" />

<ul>
    <div className='flex gap-3 py-4'>
    <IoMdArrowRoundForward size={30} className=' mt-1'/>

    <span className='w-96'>
<h1 className='text-xl md:text-2xl font-semibold leading-normal'>Softwear Developer</h1>
<p className=' text-sm md:text-md leading-normal pt-2'>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Et dolore, modi nulla consequatur voluptas itaque rem fugiat ex a omnis facere aliquam? Deserunt iusto facilis beatae ipsam earum quae quas.
    </p>
    </span>
    </div>

    <div className='flex gap-3 py-4'>
    <IoMdArrowRoundForward size={30} className='mt-1'/>

    <span className='w-96'>
<h1 className='text-xl md:text-2xl font-semibold leading-normal'>Web Developer</h1>
<p className=' text-sm md:text-md leading-normal pt-2'>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Non sequi distinctio accusamus impedit atque dignissimos accusantium quidem similique ab delectus veritatis necessitatibus repellat molestiae explicabo, ipsa aliquam? Expedita, assumenda est.
    </p>
    </span>
    </div>

    <div className='flex gap-3 py-4'>
    <IoMdArrowRoundForward size={30} className=' mt-1'/>

    <span className='w-96'>
<h1 className='text-xl md:text-2xl font-semibold leading-normal'>User interface designer</h1>
<p className=' text-sm md:text-md leading-normal pt-2'>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut ipsum eligendi consequatur aspernatur placeat porro accusamus sint quod dolorem laborum repellat accusantium explicabo ex qui quam, excepturi quo molestias atque!
    </p>
    </span>
    </div>


</ul>
    </div>
</div>
      </div>
    </>
  )
}

export default About

