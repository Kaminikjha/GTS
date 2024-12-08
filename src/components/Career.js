import React from 'react'

const Career = () => {
  return (
   <>
   <div id='Career' className='gap-3 text-white  md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-[#f06321] shadow-xl mx-0 md:mx-20 bg-opacity-70 rounded-lg p-12 my-20'>
   <div>
    <h2 className='text-2xl md:text-4xl font-bold pb-5'>
Career Section
    </h2>
    </div>
    <div className='gap-3 border-2 border-gray-200 rounded-xl w-full px-5 py-4 flex flex-col lg:flex-row justify-between lg:items-center mb-3'>
      <div>
      <h1 className=" font-semibold underline">
      Backend Developer
      </h1>
      <p>Skills:- Node.js / Python (Django/Flask) / PHP</p>
      <div className='pt-2 flex gap-3'>
      <button className='border border-1 rounded-lg bg-gray-400 w-fit px-2 py-1'>
        Internship
      </button>

      </div>
        </div>
      <button className='hover:opacity-85 duration-300 hover:scale-105 border-2 rounded-lg px-4 py-2'>
        Apply
      </button>

    </div>

    <div className='gap-3 border-2 border-gray-200 rounded-xl w-full px-5 py-4 flex flex-col lg:flex-row justify-between lg:items-center mb-3'>
      <div>
      <h1 className=" font-semibold underline">
      Frontend Developer
      </h1>
      <p>Skills:- Frontend: HTML, CSS, JavaScript (React/Angular optional)</p>
      <div className='pt-2 flex gap-3'>
     
      <button className='gap-3 border border-1 rounded-lg bg-gray-400 w-fit px-2 py-1'>
        Job
      </button>
      </div>
        </div>
      <button className='hover:opacity-85 duration-300 hover:scale-105 border-2 rounded-lg px-4 py-2'>
        Apply
      </button>

    </div>

    <div className='gap-3 border-2 border-gray-200 rounded-xl w-full px-5 py-4 flex flex-col lg:flex-row justify-between lg:items-center mb-3'>
      <div>
      <h1 className=" font-semibold underline">
      Database
      </h1>
      <p>Skills:- MySQL / PostgreSQL / MongoDB</p>
      <div className='pt-2 flex gap-3'>
      <button className='border border-1 rounded-lg bg-gray-400 w-fit px-2 py-1'>
        Internship
      </button>

      </div>
        </div>
      <button className='hover:opacity-85 duration-300 hover:scale-105 border-2 rounded-lg px-4 py-2'>
        Apply
      </button>

    </div>

    <div className='gap-3 border-2 border-gray-200 rounded-xl w-full px-5 py-4 flex flex-col lg:flex-row justify-between lg:items-center mb-3'>
      <div>
      <h1 className=" font-semibold underline">
      Authentication
      </h1>
      <p>Skills:- JWT / OAuth</p>
      <div className='pt-2 flex gap-3'>
      

      <button className='gap-3 border border-1 rounded-lg bg-gray-400 w-fit px-2 py-1'>
        Job
      </button>
      </div>
        </div>
      <button className=' hover:opacity-85 duration-300 hover:scale-105 border-2 rounded-lg px-4 py-2'>
        Apply
      </button>

    </div>
    <button className='underline hover:opacity-85 duration-300 hover:scale-105 border-2 rounded-lg px-4 py-2'>
        View More
      </button>
   </div>
   </>
  )
}

export default Career
