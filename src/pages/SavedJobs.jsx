import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import JobCard from '../components/JobCard';
import { assets } from '../assets/assets';

const SavedJobs = () => {
  // Mock saved jobs data - in real app, this would come from context/API
  const [savedJobs] = useState([
    {
      _id: '1',
      title: 'Senior Frontend Developer',
      location: 'San Francisco, CA',
      level: 'Senior Level',
      companyId: {
        name: 'TechCorp',
        image: assets.company_icon
      },
      description: 'We are looking for a Senior Frontend Developer to join our team...',
      salary: 120000,
      category: 'Programming'
    },
    {
      _id: '2',
      title: 'UX/UI Designer',
      location: 'New York, NY',
      level: 'Intermediate Level',
      companyId: {
        name: 'DesignStudio',
        image: assets.company_icon
      },
      description: 'Join our creative team as a UX/UI Designer...',
      salary: 85000,
      category: 'Designing'
    }
  ]);

  const [filter, setFilter] = useState('all');

  const filteredJobs = savedJobs.filter(job => {
    if (filter === 'all') return true;
    return job.category.toLowerCase() === filter.toLowerCase();
  });

  return (
    <>
      <NavBar />
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="container mx-auto px-4 2xl:px-20">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Saved Jobs</h1>
              <p className="text-gray-600">Keep track of jobs you're interested in</p>
            </div>

            {/* Filters */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <div className="flex flex-wrap gap-4 items-center">
                <span className="text-sm font-medium text-gray-700">Filter by category:</span>
                <div className="flex flex-wrap gap-2">
                  {['all', 'programming', 'designing', 'marketing', 'data science'].map((category) => (
                    <button
                      key={category}
                      onClick={() => setFilter(category)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition duration-200 ${
                        filter === category
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Jobs Grid */}
            {filteredJobs.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredJobs.map((job) => (
                  <div key={job._id} className="relative">
                    <JobCard job={job} />
                    <button className="absolute top-4 right-4 p-2 bg-red-100 text-red-600 rounded-full hover:bg-red-200 transition duration-200">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="mx-auto h-24 w-24 text-gray-400 mb-4">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">No saved jobs found</h3>
                <p className="text-gray-500 mb-6">Start browsing jobs and save the ones you're interested in!</p>
                <a
                  href="/"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                >
                  Browse Jobs
                </a>
              </div>
            )}

            {/* Stats */}
            {savedJobs.length > 0 && (
              <div className="mt-8 bg-white rounded-lg shadow-sm p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-2xl font-bold text-blue-600">{savedJobs.length}</div>
                    <div className="text-sm text-gray-600">Total Saved Jobs</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-600">
                      {savedJobs.filter(job => job.level === 'Senior Level').length}
                    </div>
                    <div className="text-sm text-gray-600">Senior Level</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-purple-600">
                      {new Set(savedJobs.map(job => job.category)).size}
                    </div>
                    <div className="text-sm text-gray-600">Different Categories</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SavedJobs;