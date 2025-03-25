import React, { useState } from 'react';

const JobPostingPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    linkedIn: '',
    github: '',
    experience: '',
    resume: null,
    coverLetter: '',
    motivation: '',
  });

  const [errors, setErrors] = useState({});
  const [showPopup, setShowPopup] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
    if (!formData.experience) newErrors.experience = 'Experience level is required';
    if (!formData.resume) newErrors.resume = 'Resume is required';
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    console.log('Form submitted:', formData);
    setShowPopup(true);

    setFormData({
      fullName: '',
      email: '',
      phone: '',
      linkedIn: '',
      github: '',
      experience: '',
      resume: null,
      coverLetter: '',
      motivation: '',
    });
    setErrors({});
  };

  return (
    <div className="min-h-screen bg-black font-sans py-6 px-4 sm:px-6 lg:px-8">
      {/* Main Content */}
      <main className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Left Column - Job Details */}
          <div className="md:col-span-2 space-y-6 sm:space-y-8">
            {/* Overview */}
            <section className="bg-white p-4 sm:p-6 rounded-lg shadow-md border border-[rgba(240,99,33,0.9)]">
              <h2 className="text-xl sm:text-2xl font-bold text-[rgba(240,99,33,0.9)] mb-4">Overview</h2>
              <p className="text-black text-sm sm:text-base leading-relaxed">
                Join GTS and kickstart your career across various professional fields. At GTS, we are committed to fostering talent in multiple disciplines, offering comprehensive training programs tailored to your chosen career path. Whether you're interested in technology, business operations, marketing, or customer service, no prior professional experience is required—just a passion for your field and a drive to succeed. You'll collaborate with seasoned professionals, contributing to impactful projects that serve our diverse client base while building a solid foundation for your future.
              </p>
            </section>

            {/* Benefits */}
            <section className="bg-white p-4 sm:p-6 rounded-lg shadow-md border border-[rgba(240,99,33,0.9)]">
              <h2 className="text-xl sm:text-2xl font-bold text-[rgba(240,99,33,0.9)] mb-4">Benefits</h2>
              <ul className="list-none space-y-2 text-black text-sm sm:text-base leading-relaxed ">
                <li className="pl-6 relative">
                  <span className="absolute left-0 top-1/2 transform -translate-y-1/2 w-2 h-2 rounded-full bg-[rgba(240,99,33,0.9)]"></span>
                  Comprehensive paid training program customized to your role
                </li>
                <li className="pl-6 relative">
                  <span className="absolute left-0 top-1/2 transform -translate-y-1/2 w-2 h-2 rounded-full bg-[rgba(240,99,33,0.9)]"></span>
                  Competitive starting salary with opportunities for growth
                </li>
                <li className="pl-6 relative">
                  <span className="absolute left-0 top-1/2 transform -translate-y-1/2 w-2 h-2 rounded-full bg-[rgba(240,99,33,0.9)]"></span>
                  Full health, vision, and dental insurance coverage
                </li>
                <li className="pl-6 relative">
                  <span className="absolute left-0 top-1/2 transform -translate-y-1/2 w-2 h-2 rounded-full bg-[rgba(240,99,33,0.9)]"></span>
                  Relocation assistance for eligible candidates
                </li>
                <li className="pl-6 relative">
                  <span className="absolute left-0 top-1/2 transform -translate-y-1/2 w-2 h-2 rounded-full bg-[rgba(240,99,33,0.9)]"></span>
                  401k retirement plan with company matching
                </li>
                <li className="pl-6 relative">
                  <span className="absolute left-0 top-1/2 transform -translate-y-1/2 w-2 h-2 rounded-full bg-[rgba(240,99,33,0.9)]"></span>
                  Personalized mentoring from industry experts
                </li>
                <li className="pl-6 relative">
                  <span className="absolute left-0 top-1/2 transform -translate-y-1/2 w-2 h-2 rounded-full bg-[rgba(240,99,33,0.9)]"></span>
                  Access to professional development resources and tools
                </li>
                <li className="pl-6 relative">
                  <span className="absolute left-0 top-1/2 transform -translate-y-1/2 w-2 h-2 rounded-full bg-[rgba(240,99,33,0.9)]"></span>
                  Career advancement opportunities through skill-building programs
                </li>
              </ul>
            </section>

            {/* Responsibilities */}
            <section className="bg-white p-4 sm:p-6 rounded-lg shadow-md border border-[rgba(240,99,33,0.9)]">
              <h2 className="text-xl sm:text-2xl font-bold text-[rgba(240,99,33,0.9)] mb-4">What You'll Do</h2>
              <ul className="list-none space-y-2 text-black text-sm sm:text-base leading-relaxed">
                <li className="pl-6 relative">
                  <span className="absolute left-0 top-1/2 transform -translate-y-1/2 w-2 h-2 rounded-full bg-[rgba(240,99,33,0.9)]"></span>
                  Engage in a tailored full-time training program for your role
                </li>
                <li className="pl-6 relative">
                  <span className="absolute left-0 top-1/2 transform -translate-y-1/2 w-2 h-2 rounded-full bg-[rgba(240,99,33,0.9)]"></span>
                  Collaborate on projects that align with your career interests
                </li>
                <li className="pl-6 relative">
                  <span className="absolute left-0 top-1/2 transform -translate-y-1/2 w-2 h-2 rounded-full bg-[rgba(240,99,33,0.9)]"></span>
                  Develop solutions that support GTS’s wide-ranging client needs
                </li>
                <li className="pl-6 relative">
                  <span className="absolute left-0 top-1/2 transform -translate-y-1/2 w-2 h-2 rounded-full bg-[rgba(240,99,33,0.9)]"></span>
                  Learn essential skills and best practices in your field
                </li>
                <li className="pl-6 relative">
                  <span className="absolute left-0 top-1/2 transform -translate-y-1/2 w-2 h-2 rounded-full bg-[rgba(240,99,33,0.9)]"></span>
                  Participate in team-based problem-solving and process improvement
                </li>
                <li className="pl-6 relative">
                  <span className="absolute left-0 top-1/2 transform -translate-y-1/2 w-2 h-2 rounded-full bg-[rgba(240,99,33,0.9)]"></span>
                  Work with diverse teams to deliver high-quality results
                </li>
                <li className="pl-6 relative">
                  <span className="absolute left-0 top-1/2 transform -translate-y-1/2 w-2 h-2 rounded-full bg-[rgba(240,99,33,0.9)]"></span>
                  Stay informed about industry trends through continuous learning
                </li>
              </ul>
            </section>
          </div>

          {/* Right Column - Enhanced Application Form */}
          <div className="md:col-span-1">
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border border-[rgba(240,99,33,0.9)] sticky top-4">
              <h2 className="text-xl sm:text-2xl font-bold text-[rgba(240,99,33,0.9)] mb-4">Apply Now</h2>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
                    value={formData.fullName}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 border border-[rgba(240,99,33,0.9)] rounded-md focus:outline-none focus:ring-2 focus:ring-[rgba(240,99,33,0.9)] hover:border-[rgba(240,99,33,1)] transition-colors text-sm sm:text-base ${errors.fullName ? 'border-red-500' : ''}`}
                  />
                  {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 border border-[rgba(240,99,33,0.9)] rounded-md focus:outline-none focus:ring-2 focus:ring-[rgba(240,99,33,0.9)] hover:border-[rgba(240,99,33,1)] transition-colors text-sm sm:text-base ${errors.email ? 'border-red-500' : ''}`}
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>
                <div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 border border-[rgba(240,99,33,0.9)] rounded-md focus:outline-none focus:ring-2 focus:ring-[rgba(240,99,33,0.9)] hover:border-[rgba(240,99,33,1)] transition-colors text-sm sm:text-base ${errors.phone ? 'border-red-500' : ''}`}
                  />
                  {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                </div>
                <div>
                  <input
                    type="text"
                    name="linkedIn"
                    placeholder="LinkedIn Profile URL (Optional)"
                    value={formData.linkedIn}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-[rgba(240,99,33,0.9)] rounded-md focus:outline-none focus:ring-2 focus:ring-[rgba(240,99,33,0.9)] hover:border-[rgba(240,99,33,1)] transition-colors text-sm sm:text-base"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="github"
                    placeholder="GitHub Profile URL (Optional)"
                    value={formData.github}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-[rgba(240,99,33,0.9)] rounded-md focus:outline-none focus:ring-2 focus:ring-[rgba(240,99,33,0.9)] hover:border-[rgba(240,99,33,1)] transition-colors text-sm sm:text-base"
                  />
                </div>
                <div>
                  <select
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 border border-[rgba(240,99,33,0.9)] rounded-md focus:outline-none focus:ring-2 focus:ring-[rgba(240,99,33,0.9)] hover:border-[rgba(240,99,33,1)] transition-colors text-sm sm:text-base ${errors.experience ? 'border-red-500' : ''}`}
                  >
                    <option value="">Select Experience Level</option>
                    <option value="0-1">0-1 Years</option>
                    <option value="1-3">1-3 Years</option>
                    <option value="3+">3+ Years</option>
                  </select>
                  {errors.experience && <p className="text-red-500 text-xs mt-1">{errors.experience}</p>}
                </div>
                <div>
                  <label htmlFor="resume" className="block text-sm font-medium text-[rgba(240,99,33,0.9)] mb-1">
                    Upload Resume
                  </label>
                  <input
                    type="file"
                    id="resume"
                    name="resume"
                    onChange={handleChange}
                    className={`w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[rgba(240,99,33,0.1)] file:text-[rgba(240,99,33,0.9)] hover:file:bg-[rgba(240,99,33,0.2)] ${errors.resume ? 'border-red-500' : ''}`}
                  />
                  {errors.resume && <p className="text-red-500 text-xs mt-1">{errors.resume}</p>}
                </div>
                <div>
                  <textarea
                    name="coverLetter"
                    placeholder="Cover Letter"
                    value={formData.coverLetter}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-3 py-2 border border-[rgba(240,99,33,0.9)] rounded-md focus:outline-none focus:ring-2 focus:ring-[rgba(240,99,33,0.9)] hover:border-[rgba(240,99,33,1)] transition-colors text-sm sm:text-base"
                  />
                </div>
                <div>
                  <textarea
                    name="motivation"
                    placeholder="Why do you want to join GTS?"
                    value={formData.motivation}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-3 py-2 border border-[rgba(240,99,33,0.9)] rounded-md focus:outline-none focus:ring-2 focus:ring-[rgba(240,99,33,0.9)] hover:border-[rgba(240,99,33,1)] transition-colors text-sm sm:text-base"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[rgba(240,99,33,0.9)] text-white py-2 px-4 rounded-md hover:bg-[rgba(240,99,33,1)] focus:outline-none focus:ring-2 focus:ring-[rgba(240,99,33,0.9)] focus:ring-offset-2 text-base sm:text-xl shadow-md hover:shadow-lg transition-shadow"
                >
                  Submit Application
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>

      {/* Popup Message */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg max-w-sm w-full border border-[rgba(240,99,33,0.9)]">
            <h3 className="text-base sm:text-lg font-semibold text-[rgba(240,99,33,0.9)] mb-4">Application Submitted!</h3>
            <p className="text-gray-600 mb-4 text-sm sm:text-base">Thank you for applying to GTS. We'll review your application and get back to you soon.</p>
            <button
              onClick={() => setShowPopup(false)}
              className="w-full bg-[rgba(240,99,33,0.9)] text-white py-2 px-4 rounded-md hover:bg-[rgba(240,99,33,1)] focus:outline-none focus:ring-2 focus:ring-[rgba(240,99,33,0.9)] focus:ring-offset-2 shadow-md hover:shadow-lg transition-shadow text-sm sm:text-base"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default JobPostingPage;