import React from 'react'

const Form = () => {
  return (
    <>
    <div id='form' className="flex flex-col items-center bg-[#f06321] opacity-90 min-h-screen p-10 md:p-20">
      <header className="mb-6">
        <h1 className="text-3xl font-bold text-white pb-5">GTS Careers</h1>
      </header>

      <div className="flex flex-col lg:flex-row w-full lg:w-11/12 gap-6">
        <div className="flex-1 bg-white p-6 rounded-lg shadow-lg ">
          <h2 className="text-[#f06321] opacity-90 text-xl font-semibold mb-4">Job Description</h2>
          <textarea 
            className="w-full h-96 p-4 border rounded resize-none bg-white text-gray-700"
            readOnly
            value={"GTS Company Careers Benefits:\n\n1. Competitive Salary Packages\n2. Health and Wellness Programs\n3. Learning and Development Opportunities\n4. Flexible Work Environment\n5. Career Growth and Advancement\n6. Work-Life Balance Initiatives\n7. Employee Recognition Programs\n8. Collaborative and Inclusive Culture\n9. Cutting-Edge Technology Exposure\n10. Opportunities for Global Networking"}
          />
        </div>

        <div className="flex-1 bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-[#f06321] opacity-90 text-xl font-semibold mb-4">Form Fill Karo</h2>
          <form className="flex flex-col gap-4">
            <input type="text" placeholder="Enter first name" className="p-2 border rounded" />
            <input type="text" placeholder="Enter first middle name" className="p-2 border rounded" />
            <input type="text" placeholder="Enter first last name" className="p-2 border rounded" />
            <input type="email" placeholder="Enter Your mail" className="p-2 border rounded" />
            <input type="text" placeholder="P. No." className="p-2 border rounded" />
            <select className="p-2 border rounded">
              <option value="">Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            <input type="text" placeholder="Work exper. 0+1" className="p-2 border rounded" />
            <input type="text" placeholder="Address" className="p-2 border rounded" />
            <input type="text" placeholder="City" className="p-2 border rounded" />
            <input type="text" placeholder="Pin no." className="p-2 border rounded" />
            <input type="text" placeholder="State" className="p-2 border rounded" />
            <input type="text" placeholder="Country" className="p-2 border rounded" />
            <input type="text" placeholder="Social media links" className="p-2 border rounded" />
            <input type="file" className="p-2 border rounded" />
            <button type="submit" className="bg-[#f06321] opacity-90 text-white py-2 rounded hover:bg-orange-600">Apply Now</button>
          </form>
        </div>
      </div>
    </div>
    </>
  )
}

export default Form
