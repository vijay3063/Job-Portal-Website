import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { assets } from '../assets/assets';

const CompanyProfile = () => {
  const [activeTab, setActiveTab] = useState('overview');

  // Mock company data
  const companyData = {
    name: 'TechCorp Solutions',
    logo: assets.company_icon,
    industry: 'Technology',
    size: '500-1000 employees',
    founded: '2010',
    location: 'San Francisco, CA',
    website: 'www.techcorp.com',
    description: 'TechCorp Solutions is a leading technology company specializing in innovative software solutions for businesses worldwide. We are committed to creating cutting-edge products that transform how companies operate and grow.',
    mission: 'To empower businesses through innovative technology solutions that drive growth and efficiency.',
    values: ['Innovation', 'Integrity', 'Collaboration', 'Excellence', 'Customer Focus'],
    benefits: [
      'Competitive salary and equity',
      'Comprehensive health insurance',
      'Flexible work arrangements',
      'Professional development budget',
      'Unlimited PTO',
      'Modern office spaces',
      '401(k) matching',
      'Wellness programs'
    ],
    culture: 'We foster a collaborative and inclusive environment where creativity thrives. Our team is passionate about technology and committed to making a positive impact.',
    stats: {
      employees: 750,
      offices: 5,
      countries: 12,
      clients: 500
    }
  };

  const openJobs = [
    {
      id: '1',
      title: 'Senior Full Stack Developer',
      department: 'Engineering',
      location: 'San Francisco, CA',
      type: 'Full-time',
      posted: '2 days ago'
    },
    {
      id: '2',
      title: 'Product Manager',
      department: 'Product',
      location: 'Remote',
      type: 'Full-time',
      posted: '1 week ago'
    },
    {
      id: '3',
      title: 'UX Designer',
      department: 'Design',
      location: 'New York, NY',
      type: 'Full-time',
      posted: '3 days ago'
    }
  ];

  return (
    <>
      <NavBar />
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-white shadow-sm">
          <div className="container mx-auto px-4 2xl:px-20 py-8">
            <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
              <img
                src={companyData.logo}
                alt={companyData.name}
                className="w-24 h-24 rounded-lg border border-gray-200 p-2"
              />
              <div className="flex-1">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{companyData.name}</h1>
                <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                  <span className="flex items-center">
                    <img src={assets.suitcase_icon} alt="" className="w-4 h-4 mr-1" />
                    {companyData.industry}
                  </span>
                  <span className="flex items-center">
                    <img src={assets.location_icon} alt="" className="w-4 h-4 mr-1" />
                    {companyData.location}
                  </span>
                  <span className="flex items-center">
                    <img src={assets.person_icon} alt="" className="w-4 h-4 mr-1" />
                    {companyData.size}
                  </span>
                  <span>Founded {companyData.founded}</span>
                </div>
                <div className="flex space-x-4">
                  <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
                    Follow Company
                  </button>
                  <button className="border border-gray-300 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-50">
                    Visit Website
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-white border-b">
          <div className="container mx-auto px-4 2xl:px-20">
            <nav className="flex space-x-8">
              {[
                { key: 'overview', label: 'Overview' },
                { key: 'jobs', label: 'Open Jobs' },
                { key: 'culture', label: 'Culture & Benefits' },
                { key: 'about', label: 'About' }
              ].map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`py-4 px-2 border-b-2 font-medium text-sm ${
                    activeTab === tab.key
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 2xl:px-20 py-8">
          <div className="max-w-6xl mx-auto">
            {activeTab === 'overview' && (
              <div className="space-y-8">
                {/* Company Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="bg-white rounded-lg shadow-sm p-6 text-center">
                    <div className="text-2xl font-bold text-blue-600">{companyData.stats.employees}</div>
                    <div className="text-sm text-gray-600">Employees</div>
                  </div>
                  <div className="bg-white rounded-lg shadow-sm p-6 text-center">
                    <div className="text-2xl font-bold text-green-600">{companyData.stats.offices}</div>
                    <div className="text-sm text-gray-600">Offices</div>
                  </div>
                  <div className="bg-white rounded-lg shadow-sm p-6 text-center">
                    <div className="text-2xl font-bold text-purple-600">{companyData.stats.countries}</div>
                    <div className="text-sm text-gray-600">Countries</div>
                  </div>
                  <div className="bg-white rounded-lg shadow-sm p-6 text-center">
                    <div className="text-2xl font-bold text-orange-600">{companyData.stats.clients}+</div>
                    <div className="text-sm text-gray-600">Clients</div>
                  </div>
                </div>

                {/* About Section */}
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">About {companyData.name}</h2>
                  <p className="text-gray-600 leading-relaxed">{companyData.description}</p>
                </div>

                {/* Mission & Values */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-lg shadow-sm p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Our Mission</h3>
                    <p className="text-gray-600">{companyData.mission}</p>
                  </div>
                  <div className="bg-white rounded-lg shadow-sm p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Our Values</h3>
                    <div className="flex flex-wrap gap-2">
                      {companyData.values.map((value, index) => (
                        <span
                          key={index}
                          className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800"
                        >
                          {value}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'jobs' && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-semibold text-gray-900">Open Positions ({openJobs.length})</h2>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                    View All Jobs
                  </button>
                </div>
                <div className="space-y-4">
                  {openJobs.map((job) => (
                    <div key={job.id} className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition duration-200">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">{job.title}</h3>
                          <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-3">
                            <span>{job.department}</span>
                            <span>•</span>
                            <span>{job.location}</span>
                            <span>•</span>
                            <span>{job.type}</span>
                            <span>•</span>
                            <span>{job.posted}</span>
                          </div>
                        </div>
                        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                          Apply Now
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'culture' && (
              <div className="space-y-8">
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">Company Culture</h2>
                  <p className="text-gray-600 leading-relaxed">{companyData.culture}</p>
                </div>

                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Benefits & Perks</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {companyData.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <span className="text-gray-600">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'about' && (
              <div className="space-y-8">
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">Company Information</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Industry</h4>
                      <p className="text-gray-600">{companyData.industry}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Company Size</h4>
                      <p className="text-gray-600">{companyData.size}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Founded</h4>
                      <p className="text-gray-600">{companyData.founded}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Headquarters</h4>
                      <p className="text-gray-600">{companyData.location}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Website</h4>
                      <a href="#" className="text-blue-600 hover:text-blue-800">{companyData.website}</a>
                    </div>
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

export default CompanyProfile;