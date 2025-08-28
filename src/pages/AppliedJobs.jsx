import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { assets } from '../assets/assets';
import moment from 'moment';

const AppliedJobs = () => {
  // Mock applied jobs data - in real app, this would come from context/API
  const [appliedJobs] = useState([
    {
      _id: '1',
      jobId: {
        title: 'Full Stack Developer',
        location: 'San Francisco, CA',
        salary: 120000
      },
      companyId: {
        name: 'TechCorp',
        image: assets.company_icon
      },
      status: 'Under Review',
      appliedDate: new Date('2024-01-15'),
      lastUpdate: new Date('2024-01-18')
    },
    {
      _id: '2',
      jobId: {
        title: 'Senior React Developer',
        location: 'New York, NY',
        salary: 130000
      },
      companyId: {
        name: 'StartupXYZ',
        image: assets.company_icon
      },
      status: 'Interview Scheduled',
      appliedDate: new Date('2024-01-10'),
      lastUpdate: new Date('2024-01-20')
    },
    {
      _id: '3',
      jobId: {
        title: 'Frontend Engineer',
        location: 'Austin, TX',
        salary: 95000
      },
      companyId: {
        name: 'InnovateLab',
        image: assets.company_icon
      },
      status: 'Rejected',
      appliedDate: new Date('2024-01-05'),
      lastUpdate: new Date('2024-01-12')
    }
  ]);

  const [statusFilter, setStatusFilter] = useState('all');

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'under review':
        return 'bg-yellow-100 text-yellow-800';
      case 'interview scheduled':
        return 'bg-blue-100 text-blue-800';
      case 'accepted':
        return 'bg-green-100 text-green-800';
      case 'rejected':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredJobs = appliedJobs.filter(job => {
    if (statusFilter === 'all') return true;
    return job.status.toLowerCase().replace(' ', '-') === statusFilter;
  });

  const statusCounts = {
    total: appliedJobs.length,
    underReview: appliedJobs.filter(job => job.status === 'Under Review').length,
    interviews: appliedJobs.filter(job => job.status === 'Interview Scheduled').length,
    accepted: appliedJobs.filter(job => job.status === 'Accepted').length,
    rejected: appliedJobs.filter(job => job.status === 'Rejected').length
  };

  return (
    <>
      <NavBar />
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="container mx-auto px-4 2xl:px-20">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Applied Jobs</h1>
              <p className="text-gray-600">Track the status of your job applications</p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
              <div className="bg-white rounded-lg shadow-sm p-6 text-center">
                <div className="text-2xl font-bold text-gray-900">{statusCounts.total}</div>
                <div className="text-sm text-gray-600">Total Applied</div>
              </div>
              <div className="bg-white rounded-lg shadow-sm p-6 text-center">
                <div className="text-2xl font-bold text-yellow-600">{statusCounts.underReview}</div>
                <div className="text-sm text-gray-600">Under Review</div>
              </div>
              <div className="bg-white rounded-lg shadow-sm p-6 text-center">
                <div className="text-2xl font-bold text-blue-600">{statusCounts.interviews}</div>
                <div className="text-sm text-gray-600">Interviews</div>
              </div>
              <div className="bg-white rounded-lg shadow-sm p-6 text-center">
                <div className="text-2xl font-bold text-green-600">{statusCounts.accepted}</div>
                <div className="text-sm text-gray-600">Accepted</div>
              </div>
              <div className="bg-white rounded-lg shadow-sm p-6 text-center">
                <div className="text-2xl font-bold text-red-600">{statusCounts.rejected}</div>
                <div className="text-sm text-gray-600">Rejected</div>
              </div>
            </div>

            {/* Filters */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <div className="flex flex-wrap gap-4 items-center">
                <span className="text-sm font-medium text-gray-700">Filter by status:</span>
                <div className="flex flex-wrap gap-2">
                  {[
                    { key: 'all', label: 'All' },
                    { key: 'under-review', label: 'Under Review' },
                    { key: 'interview-scheduled', label: 'Interview Scheduled' },
                    { key: 'accepted', label: 'Accepted' },
                    { key: 'rejected', label: 'Rejected' }
                  ].map((filter) => (
                    <button
                      key={filter.key}
                      onClick={() => setStatusFilter(filter.key)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition duration-200 ${
                        statusFilter === filter.key
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {filter.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Applications List */}
            {filteredJobs.length > 0 ? (
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Company & Job
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Location
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Salary
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Status
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Applied Date
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Last Update
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {filteredJobs.map((application) => (
                        <tr key={application._id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <img
                                className="h-10 w-10 rounded-full"
                                src={application.companyId.image}
                                alt={application.companyId.name}
                              />
                              <div className="ml-4">
                                <div className="text-sm font-medium text-gray-900">
                                  {application.jobId.title}
                                </div>
                                <div className="text-sm text-gray-500">
                                  {application.companyId.name}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {application.jobId.location}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            ${application.jobId.salary.toLocaleString()}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(application.status)}`}>
                              {application.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {moment(application.appliedDate).format('MMM DD, YYYY')}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {moment(application.lastUpdate).format('MMM DD, YYYY')}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            <button className="text-blue-600 hover:text-blue-900 mr-3">
                              View Details
                            </button>
                            <button className="text-red-600 hover:text-red-900">
                              Withdraw
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="mx-auto h-24 w-24 text-gray-400 mb-4">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">No applications found</h3>
                <p className="text-gray-500 mb-6">You haven't applied to any jobs yet. Start browsing and apply to jobs that interest you!</p>
                <a
                  href="/"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                >
                  Browse Jobs
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AppliedJobs;