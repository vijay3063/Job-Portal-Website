import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import JobCard from '../components/JobCard';
import { JobCategories as categories, assets } from '../assets/assets';

const JobCategories = () => {
  const [selectedCategory, setSelectedCategory] = useState('Programming');

  // Mock jobs data by category
  const jobsByCategory = {
    'Programming': [
      {
        _id: '1',
        title: 'Senior Full Stack Developer',
        location: 'San Francisco, CA',
        level: 'Senior Level',
        companyId: { name: 'TechCorp', image: assets.company_icon },
        description: 'We are looking for a Senior Full Stack Developer...',
        salary: 120000,
        category: 'Programming'
      },
      {
        _id: '2',
        title: 'Frontend React Developer',
        location: 'New York, NY',
        level: 'Intermediate Level',
        companyId: { name: 'StartupXYZ', image: assets.company_icon },
        description: 'Join our team as a Frontend React Developer...',
        salary: 95000,
        category: 'Programming'
      }
    ],
    'Data Science': [
      {
        _id: '3',
        title: 'Senior Data Scientist',
        location: 'Seattle, WA',
        level: 'Senior Level',
        companyId: { name: 'DataCorp', image: assets.company_icon },
        description: 'We are seeking a Senior Data Scientist...',
        salary: 130000,
        category: 'Data Science'
      }
    ],
    'Designing': [
      {
        _id: '4',
        title: 'UX/UI Designer',
        location: 'Austin, TX',
        level: 'Intermediate Level',
        companyId: { name: 'DesignStudio', image: assets.company_icon },
        description: 'Join our creative team as a UX/UI Designer...',
        salary: 85000,
        category: 'Designing'
      }
    ],
    'Marketing': [
      {
        _id: '5',
        title: 'Digital Marketing Manager',
        location: 'Los Angeles, CA',
        level: 'Senior Level',
        companyId: { name: 'MarketPro', image: assets.company_icon },
        description: 'Lead our digital marketing efforts...',
        salary: 90000,
        category: 'Marketing'
      }
    ],
    'Management': [
      {
        _id: '6',
        title: 'Project Manager',
        location: 'Chicago, IL',
        level: 'Senior Level',
        companyId: { name: 'ManageCorp', image: assets.company_icon },
        description: 'We need an experienced Project Manager...',
        salary: 100000,
        category: 'Management'
      }
    ],
    'Networking': [
      {
        _id: '7',
        title: 'Network Engineer',
        location: 'Denver, CO',
        level: 'Intermediate Level',
        companyId: { name: 'NetSolutions', image: assets.company_icon },
        description: 'Join our networking team...',
        salary: 85000,
        category: 'Networking'
      }
    ],
    'Cybersecurity': [
      {
        _id: '8',
        title: 'Cybersecurity Analyst',
        location: 'Washington, DC',
        level: 'Senior Level',
        companyId: { name: 'SecureTech', image: assets.company_icon },
        description: 'Protect our systems as a Cybersecurity Analyst...',
        salary: 110000,
        category: 'Cybersecurity'
      }
    ]
  };

  const getCategoryIcon = (category) => {
    const icons = {
      'Programming': '💻',
      'Data Science': '📊',
      'Designing': '🎨',
      'Marketing': '📈',
      'Management': '👔',
      'Networking': '🌐',
      'Cybersecurity': '🔒'
    };
    return icons[category] || '💼';
  };

  const getCategoryDescription = (category) => {
    const descriptions = {
      'Programming': 'Build the future with code. From web development to mobile apps.',
      'Data Science': 'Turn data into insights. Machine learning, analytics, and more.',
      'Designing': 'Create beautiful experiences. UI/UX, graphic design, and branding.',
      'Marketing': 'Drive growth and engagement. Digital marketing, content, and strategy.',
      'Management': 'Lead teams to success. Project management, operations, and leadership.',
      'Networking': 'Connect the world. Network infrastructure, security, and administration.',
      'Cybersecurity': 'Protect digital assets. Security analysis, penetration testing, and compliance.'
    };
    return descriptions[category] || 'Explore opportunities in this field.';
  };

  const currentJobs = jobsByCategory[selectedCategory] || [];

  return (
    <>
      <NavBar />
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="container mx-auto px-4 2xl:px-20">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Browse Jobs by Category</h1>
              <p className="text-xl text-gray-600">Find your perfect career path in your field of expertise</p>
            </div>

            {/* Category Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
              {categories.map((category) => {
                const jobCount = jobsByCategory[category]?.length || 0;
                return (
                  <div
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`cursor-pointer rounded-lg p-6 transition duration-200 hover:shadow-lg ${
                      selectedCategory === category
                        ? 'bg-blue-600 text-white shadow-lg'
                        : 'bg-white text-gray-900 hover:bg-gray-50'
                    }`}
                  >
                    <div className="text-center">
                      <div className="text-4xl mb-3">{getCategoryIcon(category)}</div>
                      <h3 className="text-lg font-semibold mb-2">{category}</h3>
                      <p className={`text-sm mb-3 ${
                        selectedCategory === category ? 'text-blue-100' : 'text-gray-600'
                      }`}>
                        {getCategoryDescription(category)}
                      </p>
                      <div className={`text-sm font-medium ${
                        selectedCategory === category ? 'text-blue-100' : 'text-blue-600'
                      }`}>
                        {jobCount} {jobCount === 1 ? 'job' : 'jobs'} available
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Selected Category Jobs */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    {getCategoryIcon(selectedCategory)} {selectedCategory} Jobs
                  </h2>
                  <p className="text-gray-600">{getCategoryDescription(selectedCategory)}</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-blue-600">{currentJobs.length}</div>
                  <div className="text-sm text-gray-600">Available Jobs</div>
                </div>
              </div>

              {currentJobs.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {currentJobs.map((job) => (
                    <JobCard key={job._id} job={job} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <div className="text-6xl mb-4">🔍</div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No jobs found in {selectedCategory}</h3>
                  <p className="text-gray-500 mb-6">Check back later for new opportunities in this category.</p>
                  <button
                    onClick={() => setSelectedCategory('Programming')}
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                  >
                    Browse Programming Jobs
                  </button>
                </div>
              )}
            </div>

            {/* Category Stats */}
            <div className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-white">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">Job Market Overview</h3>
                <p className="text-blue-100">Discover opportunities across all categories</p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-1">
                    {Object.values(jobsByCategory).reduce((total, jobs) => total + jobs.length, 0)}
                  </div>
                  <div className="text-blue-100 text-sm">Total Jobs</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-1">{categories.length}</div>
                  <div className="text-blue-100 text-sm">Categories</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-1">500+</div>
                  <div className="text-blue-100 text-sm">Companies</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-1">50+</div>
                  <div className="text-blue-100 text-sm">Locations</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default JobCategories;