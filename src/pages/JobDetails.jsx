import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { assets } from '../assets/assets';
import kconvert from 'k-convert';
import moment from 'moment';

const JobDetails = () => {
  const { id } = useParams();
  const [isApplied, setIsApplied] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  // Mock job data - in real app, this would be fetched based on ID
  const jobData = {
    _id: id,
    title: 'Senior Full Stack Developer',
    location: 'San Francisco, CA',
    level: 'Senior Level',
    companyId: {
      name: 'TechCorp Solutions',
      image: assets.company_icon,
      description: 'Leading technology company specializing in innovative software solutions.',
      size: '500-1000 employees',
      industry: 'Technology',
      founded: '2010'
    },
    description: `
      <p>We are seeking a highly skilled Senior Full Stack Developer to join our dynamic and innovative team. The ideal candidate will have a passion for developing scalable web applications and working across the entire technology stack, including front-end and back-end development.</p>
      
      <h2><strong>Key Responsibilities</strong></h2>
      <ol>
        <li>Build, test, and deploy highly responsive web applications</li>
        <li>Design user-friendly interfaces using HTML, CSS, and JavaScript</li>
        <li>Develop and maintain APIs and databases to support application functionality</li>
        <li>Collaborate with cross-functional teams to define, design, and ship new features</li>
        <li>Identify and resolve bottlenecks and bugs to optimize application performance</li>
      </ol>
      
      <h2><strong>Skills Required</strong></h2>
      <ol>
        <li>Proficiency in HTML, CSS, and JavaScript frameworks (e.g., React, Angular)</li>
        <li>Experience with server-side languages (e.g., Node.js, Python)</li>
        <li>Familiarity with relational and non-relational databases (e.g., MySQL, MongoDB)</li>
        <li>Strong understanding of web security and performance optimization</li>
        <li>Ability to work in an Agile environment</li>
      </ol>
    `,
    salary: 120000,
    date: new Date('2024-01-15'),
    category: 'Programming',
    type: 'Full-time',
    remote: 'Hybrid',
    benefits: [
      'Competitive salary and equity',
      'Comprehensive health insurance',
      'Flexible work arrangements',
      'Professional development budget',
      'Unlimited PTO'
    ],
    requirements: [
      '5+ years of full-stack development experience',
      'Bachelor\'s degree in Computer Science or related field',
      'Strong problem-solving skills',
      'Excellent communication abilities',
      'Experience with cloud platforms (AWS, Azure, or GCP)'
    ]
  };

  const handleApply = () => {
    setIsApplied(true);
    // Apply logic will be implemented here
    console.log('Applied to job:', jobData._id);
  };

  const handleSave = () => {
    setIsSaved(!isSaved);
    // Save logic will be implemented here
    console.log(isSaved ? 'Unsaved job:' : 'Saved job:', jobData._id);
  };

  const handleShare = () => {
    // Share logic will be implemented here
    if (navigator.share) {
      navigator.share({
        title: jobData.title,
        text: `Check out this job opportunity: ${jobData.title} at ${jobData.companyId.name}`,
        url: window.location.href,
      });
    } else {
      // Fallback for browsers that don't support Web Share API
      navigator.clipboard.writeText(window.location.href);
      alert('Job link copied to clipboard!');
    }
  };

  return (
    <>
      <NavBar />
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="container mx-auto px-4 2xl:px-20">
          <div className="max-w-4xl mx-auto">
            {/* Job Header */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <div className="flex flex-col md:flex-row justify-between items-start gap-6">
                <div className="flex items-start space-x-4 flex-1">
                  <img
                    src={jobData.companyId.image}
                    alt={jobData.companyId.name}
                    className="w-16 h-16 rounded-lg object-contain border border-gray-200 p-2"
                  />
                  <div className="flex-1">
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{jobData.title}</h1>
                    <h2 className="text-lg text-blue-600 font-semibold mb-3">{jobData.companyId.name}</h2>
                    
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                      <span className="flex items-center">
                        <img src={assets.location_icon} alt="" className="w-4 h-4 mr-1" />
                        {jobData.location}
                      </span>
                      <span className="flex items-center">
                        <img src={assets.suitcase_icon} alt="" className="w-4 h-4 mr-1" />
                        {jobData.type}
                      </span>
                      <span className="flex items-center">
                        <img src={assets.person_icon} alt="" className="w-4 h-4 mr-1" />
                        {jobData.level}
                      </span>
                      <span className="flex items-center">
                        <img src={assets.money_icon} alt="" className="w-4 h-4 mr-1" />
                        {kconvert.convertTo(jobData.salary)}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        {jobData.category}
                      </span>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        {jobData.remote}
                      </span>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                        Posted {moment(jobData.date).fromNow()}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                  <button
                    onClick={handleApply}
                    disabled={isApplied}
                    className={`px-6 py-3 rounded-lg font-medium transition duration-200 ${
                      isApplied
                        ? 'bg-green-100 text-green-800 cursor-not-allowed'
                        : 'bg-blue-600 text-white hover:bg-blue-700'
                    }`}
                  >
                    {isApplied ? 'Applied ✓' : 'Apply Now'}
                  </button>
                  <button
                    onClick={handleSave}
                    className={`px-4 py-3 rounded-lg border transition duration-200 ${
                      isSaved
                        ? 'border-red-300 bg-red-50 text-red-600'
                        : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    {isSaved ? '❤️ Saved' : '🤍 Save'}
                  </button>
                  <button
                    onClick={handleShare}
                    className="px-4 py-3 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 transition duration-200"
                  >
                    📤 Share
                  </button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-6">
                {/* Job Description */}
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Job Description</h3>
                  <div className="rich-text" dangerouslySetInnerHTML={{ __html: jobData.description }}></div>
                </div>

                {/* Requirements */}
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Requirements</h3>
                  <ul className="space-y-2">
                    {jobData.requirements.map((requirement, index) => (
                      <li key={index} className="flex items-start">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-gray-600">{requirement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Benefits */}
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Benefits & Perks</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {jobData.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center">
                        <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                        <span className="text-gray-600">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Company Info */}
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">About {jobData.companyId.name}</h3>
                  <div className="space-y-3">
                    <p className="text-gray-600 text-sm">{jobData.companyId.description}</p>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-500">Industry:</span>
                        <span className="text-gray-900">{jobData.companyId.industry}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Company Size:</span>
                        <span className="text-gray-900">{jobData.companyId.size}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Founded:</span>
                        <span className="text-gray-900">{jobData.companyId.founded}</span>
                      </div>
                    </div>
                    <button className="w-full mt-4 bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition duration-200">
                      View Company Profile
                    </button>
                  </div>
                </div>

                {/* Job Summary */}
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Job Summary</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-500">Job Type:</span>
                      <span className="text-gray-900">{jobData.type}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Experience Level:</span>
                      <span className="text-gray-900">{jobData.level}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Work Mode:</span>
                      <span className="text-gray-900">{jobData.remote}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Salary:</span>
                      <span className="text-gray-900">{kconvert.convertTo(jobData.salary)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Posted:</span>
                      <span className="text-gray-900">{moment(jobData.date).format('MMM DD, YYYY')}</span>
                    </div>
                  </div>
                </div>

                {/* Similar Jobs */}
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Similar Jobs</h3>
                  <div className="space-y-3">
                    {[1, 2, 3].map((item) => (
                      <div key={item} className="border border-gray-200 rounded-lg p-3 hover:bg-gray-50 cursor-pointer">
                        <h4 className="font-medium text-gray-900 text-sm">Frontend Developer</h4>
                        <p className="text-xs text-gray-600 mt-1">StartupXYZ • New York, NY</p>
                        <p className="text-xs text-blue-600 mt-1">$95k - $120k</p>
                      </div>
                    ))}
                  </div>
                  <button className="w-full mt-4 text-blue-600 text-sm font-medium hover:text-blue-800">
                    View All Similar Jobs →
                  </button>
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

export default JobDetails;