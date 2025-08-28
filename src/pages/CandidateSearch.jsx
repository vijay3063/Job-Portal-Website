import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { assets } from '../assets/assets';

const CandidateSearch = () => {
  const [searchFilters, setSearchFilters] = useState({
    skills: '',
    location: '',
    experience: '',
    education: ''
  });

  // Mock candidates data
  const [candidates] = useState([
    {
      id: '1',
      name: 'John Smith',
      title: 'Senior Full Stack Developer',
      location: 'San Francisco, CA',
      experience: '5+ years',
      skills: ['React', 'Node.js', 'Python', 'MongoDB'],
      education: 'BS Computer Science',
      image: assets.profile_img,
      availability: 'Available',
      salary: '$120k - $150k'
    },
    {
      id: '2',
      name: 'Sarah Johnson',
      title: 'UX/UI Designer',
      location: 'New York, NY',
      experience: '3+ years',
      skills: ['Figma', 'Adobe XD', 'Sketch', 'Prototyping'],
      education: 'BA Design',
      image: assets.profile_img,
      availability: 'Available in 2 weeks',
      salary: '$80k - $100k'
    },
    {
      id: '3',
      name: 'Mike Chen',
      title: 'Data Scientist',
      location: 'Seattle, WA',
      experience: '4+ years',
      skills: ['Python', 'Machine Learning', 'SQL', 'TensorFlow'],
      education: 'MS Data Science',
      image: assets.profile_img,
      availability: 'Available',
      salary: '$110k - $140k'
    }
  ]);

  const handleFilterChange = (e) => {
    setSearchFilters({
      ...searchFilters,
      [e.target.name]: e.target.value
    });
  };

  const handleSearch = (e) => {
    e.preventDefault();
    // Search logic will be implemented here
    console.log('Searching candidates with filters:', searchFilters);
  };

  return (
    <>
      <NavBar />
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="container mx-auto px-4 2xl:px-20">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Candidate Search</h1>
              <p className="text-gray-600">Find the perfect candidates for your open positions</p>
            </div>

            {/* Search Filters */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
              <form onSubmit={handleSearch}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Skills
                    </label>
                    <input
                      type="text"
                      name="skills"
                      placeholder="e.g. React, Python, Design"
                      value={searchFilters.skills}
                      onChange={handleFilterChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Location
                    </label>
                    <input
                      type="text"
                      name="location"
                      placeholder="City, State"
                      value={searchFilters.location}
                      onChange={handleFilterChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Experience
                    </label>
                    <select
                      name="experience"
                      value={searchFilters.experience}
                      onChange={handleFilterChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Any Experience</option>
                      <option value="0-1">0-1 years</option>
                      <option value="1-3">1-3 years</option>
                      <option value="3-5">3-5 years</option>
                      <option value="5+">5+ years</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Education
                    </label>
                    <select
                      name="education"
                      value={searchFilters.education}
                      onChange={handleFilterChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Any Education</option>
                      <option value="high-school">High School</option>
                      <option value="bachelor">Bachelor's Degree</option>
                      <option value="master">Master's Degree</option>
                      <option value="phd">PhD</option>
                    </select>
                  </div>
                </div>
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    Search Candidates
                  </button>
                </div>
              </form>
            </div>

            {/* Results */}
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Search Results ({candidates.length} candidates found)
              </h2>
            </div>

            {/* Candidates Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {candidates.map((candidate) => (
                <div key={candidate.id} className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition duration-200">
                  <div className="flex items-start space-x-4">
                    <img
                      src={candidate.image}
                      alt={candidate.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900">{candidate.name}</h3>
                          <p className="text-blue-600 font-medium">{candidate.title}</p>
                        </div>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          {candidate.availability}
                        </span>
                      </div>
                      
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center text-sm text-gray-600">
                          <img src={assets.location_icon} alt="" className="w-4 h-4 mr-2" />
                          {candidate.location}
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <img src={assets.suitcase_icon} alt="" className="w-4 h-4 mr-2" />
                          {candidate.experience} experience
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <img src={assets.money_icon} alt="" className="w-4 h-4 mr-2" />
                          {candidate.salary}
                        </div>
                      </div>

                      <div className="mb-4">
                        <p className="text-sm text-gray-600 mb-2">Skills:</p>
                        <div className="flex flex-wrap gap-2">
                          {candidate.skills.map((skill, index) => (
                            <span
                              key={index}
                              className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex space-x-3">
                        <button className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 text-sm font-medium">
                          View Profile
                        </button>
                        <button className="flex-1 border border-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-50 text-sm font-medium">
                          Contact
                        </button>
                        <button className="px-3 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-8 flex justify-center">
              <nav className="flex items-center space-x-2">
                <button className="px-3 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">
                  Previous
                </button>
                <button className="px-3 py-2 bg-blue-600 text-white rounded-md">1</button>
                <button className="px-3 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">2</button>
                <button className="px-3 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">3</button>
                <button className="px-3 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">
                  Next
                </button>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CandidateSearch;