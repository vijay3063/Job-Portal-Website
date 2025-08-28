import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { assets } from '../assets/assets';
import { Link } from 'react-router-dom';

const Companies = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [industryFilter, setIndustryFilter] = useState('all');
  const [sizeFilter, setSizeFilter] = useState('all');

  // Mock companies data
  const companies = [
    {
      id: '1',
      name: 'TechCorp Solutions',
      logo: assets.microsoft_logo,
      industry: 'Technology',
      size: '500-1000',
      location: 'San Francisco, CA',
      description: 'Leading technology company specializing in innovative software solutions.',
      openJobs: 15,
      founded: '2010',
      website: 'www.techcorp.com',
      rating: 4.5,
      employees: 750
    },
    {
      id: '2',
      name: 'DataScience Pro',
      logo: assets.company_icon,
      industry: 'Data & Analytics',
      size: '100-500',
      location: 'New York, NY',
      description: 'Data science and analytics company helping businesses make data-driven decisions.',
      openJobs: 8,
      founded: '2015',
      website: 'www.datasciencepro.com',
      rating: 4.3,
      employees: 250
    },
    {
      id: '3',
      name: 'Creative Design Studio',
      logo: assets.company_icon,
      industry: 'Design & Creative',
      size: '50-100',
      location: 'Los Angeles, CA',
      description: 'Award-winning design studio creating beautiful digital experiences.',
      openJobs: 5,
      founded: '2018',
      website: 'www.creativedesign.com',
      rating: 4.7,
      employees: 75
    },
    {
      id: '4',
      name: 'FinTech Innovations',
      logo: assets.company_icon,
      industry: 'Financial Services',
      size: '200-500',
      location: 'Chicago, IL',
      description: 'Revolutionary fintech company transforming financial services.',
      openJobs: 12,
      founded: '2012',
      website: 'www.fintechinnovations.com',
      rating: 4.2,
      employees: 320
    },
    {
      id: '5',
      name: 'HealthTech Solutions',
      logo: assets.company_icon,
      industry: 'Healthcare',
      size: '100-500',
      location: 'Boston, MA',
      description: 'Healthcare technology company improving patient outcomes through innovation.',
      openJobs: 10,
      founded: '2014',
      website: 'www.healthtechsolutions.com',
      rating: 4.4,
      employees: 180
    },
    {
      id: '6',
      name: 'EduLearn Platform',
      logo: assets.company_icon,
      industry: 'Education',
      size: '50-100',
      location: 'Austin, TX',
      description: 'Online education platform making learning accessible to everyone.',
      openJobs: 6,
      founded: '2019',
      website: 'www.edulearn.com',
      rating: 4.6,
      employees: 85
    }
  ];

  const industries = ['all', 'Technology', 'Data & Analytics', 'Design & Creative', 'Financial Services', 'Healthcare', 'Education'];
  const sizes = ['all', '1-50', '50-100', '100-500', '500-1000', '1000+'];

  const filteredCompanies = companies.filter(company => {
    const matchesSearch = company.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         company.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesIndustry = industryFilter === 'all' || company.industry === industryFilter;
    const matchesSize = sizeFilter === 'all' || company.size === sizeFilter;
    
    return matchesSearch && matchesIndustry && matchesSize;
  });

  const totalJobs = companies.reduce((sum, company) => sum + company.openJobs, 0);

  return (
    <>
      <NavBar />
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="container mx-auto px-4 2xl:px-20">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Top Companies Hiring</h1>
              <p className="text-xl text-gray-600">Discover amazing companies and find your next career opportunity</p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <div className="bg-white rounded-lg shadow-sm p-6 text-center">
                <div className="text-2xl font-bold text-blue-600">{companies.length}</div>
                <div className="text-sm text-gray-600">Companies</div>
              </div>
              <div className="bg-white rounded-lg shadow-sm p-6 text-center">
                <div className="text-2xl font-bold text-green-600">{totalJobs}</div>
                <div className="text-sm text-gray-600">Open Jobs</div>
              </div>
              <div className="bg-white rounded-lg shadow-sm p-6 text-center">
                <div className="text-2xl font-bold text-purple-600">{industries.length - 1}</div>
                <div className="text-sm text-gray-600">Industries</div>
              </div>
              <div className="bg-white rounded-lg shadow-sm p-6 text-center">
                <div className="text-2xl font-bold text-orange-600">50+</div>
                <div className="text-sm text-gray-600">Locations</div>
              </div>
            </div>

            {/* Search and Filters */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Search Companies
                  </label>
                  <input
                    type="text"
                    placeholder="Company name or description..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Industry
                  </label>
                  <select
                    value={industryFilter}
                    onChange={(e) => setIndustryFilter(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    {industries.map((industry) => (
                      <option key={industry} value={industry}>
                        {industry === 'all' ? 'All Industries' : industry}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Company Size
                  </label>
                  <select
                    value={sizeFilter}
                    onChange={(e) => setSizeFilter(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    {sizes.map((size) => (
                      <option key={size} value={size}>
                        {size === 'all' ? 'All Sizes' : `${size} employees`}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Companies Grid */}
            {filteredCompanies.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredCompanies.map((company) => (
                  <div key={company.id} className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition duration-200">
                    <div className="flex items-start space-x-4">
                      <img
                        src={company.logo}
                        alt={company.name}
                        className="w-16 h-16 rounded-lg object-contain border border-gray-200 p-2"
                      />
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="text-xl font-semibold text-gray-900">{company.name}</h3>
                          <div className="flex items-center space-x-1">
                            <span className="text-yellow-400">★</span>
                            <span className="text-sm text-gray-600">{company.rating}</span>
                          </div>
                        </div>
                        
                        <div className="space-y-2 mb-4">
                          <div className="flex items-center text-sm text-gray-600">
                            <img src={assets.suitcase_icon} alt="" className="w-4 h-4 mr-2" />
                            {company.industry}
                          </div>
                          <div className="flex items-center text-sm text-gray-600">
                            <img src={assets.location_icon} alt="" className="w-4 h-4 mr-2" />
                            {company.location}
                          </div>
                          <div className="flex items-center text-sm text-gray-600">
                            <img src={assets.person_icon} alt="" className="w-4 h-4 mr-2" />
                            {company.employees} employees
                          </div>
                        </div>

                        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{company.description}</p>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                              {company.openJobs} open jobs
                            </span>
                            <span className="text-xs text-gray-500">Founded {company.founded}</span>
                          </div>
                          <div className="flex space-x-2">
                            <Link
                              to={`/company-profile`}
                              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 text-sm font-medium"
                            >
                              View Profile
                            </Link>
                            <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-50 text-sm font-medium">
                              Follow
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="mx-auto h-24 w-24 text-gray-400 mb-4">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">No companies found</h3>
                <p className="text-gray-500 mb-6">Try adjusting your search criteria or filters.</p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setIndustryFilter('all');
                    setSizeFilter('all');
                  }}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                >
                  Clear Filters
                </button>
              </div>
            )}

            {/* Pagination */}
            {filteredCompanies.length > 0 && (
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
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Companies;