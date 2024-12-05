import React from 'react'
import image from "../assets/img.png"

const Home = () => {
  return (
    <>
     <div id='Home'  className='text-white flex md:flex flex-wrap flex-col md:flex-row  w-full justify-between items-start p-10 md:p-20'>
<div className='md:w-2/4 md:pt-10'>
<h1 className='text-3xl md:text-6xl font-bold flex leading-normal tracking-tighter pb-8'>

</h1>
<p className='text-sm md:text-2xl text-[#ffa500] leading-tight tracking-tight'>
   Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem laudantium maiores ducimus esse nihil quae laboriosam incidunt illum, quis sequi voluptate ad, ea unde doloribus magnam molestias quas mollitia quia? 
</p>
<button className='mt-5 md:mt-10  text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#ffa500]'>Contact Us</button>
</div>


<div>
    <img src={image}width={500}  alt=" Avtar Image" />
</div>
      </div></>
  )
}

export default Home
