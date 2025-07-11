import React, { useContext, useEffect, useState } from 'react'
import moment from 'moment';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import axios from 'axios';
import { toast } from 'react-toastify';
import Loading from '../components/Loading';

const ManageJobs = () => {

    const navigate = useNavigate()

    const [jobs, setJobs] = useState(null); // Updated: initialized to null instead of false

    const { backendUrl, companyToken } = useContext(AppContext)

    // Fetch company job postings
    const fetchCompanyJobs = async () => {
        try {
            const { data } = await axios.get(backendUrl + '/api/company/list-jobs',
                { headers: { token: companyToken } }
            );

            if (data.success) {
                setJobs(data.jobsData.reverse());
            } else {
                toast.error(data.message);
            }

        } catch (error) {
            toast.error(error.message);
        }
    }

    // Change job visibility (toggle)
    const changeJobVisibility = async (id) => {
        try {
            const { data } = await axios.post(backendUrl + '/api/company/change-visibility',
                { id },
                { headers: { token: companyToken } }
            );

            if (data.success) {
                toast.success(data.message);
                fetchCompanyJobs();
            } else {
                toast.error(data.message);
            }

        } catch (error) {
            toast.error(error.message);
        }
    }

    useEffect(() => {
        if (companyToken) {
            fetchCompanyJobs();
        }
    }, [companyToken]);

    // Loading state
    if (jobs === null) {
        return <Loading />;
    }

    // No jobs state
    if (jobs.length === 0) {
        return (
            <div className="text-center text-gray-600 py-20">
                No jobs found. Please add a job posting.
                <div className='mt-6'>
                    <button
                        onClick={() => navigate('/dashboard/add-job')}
                        className='px-6 py-3 bg-black text-white rounded-lg hover:bg-white hover:text-black border border-black transition duration-300'
                    >
                        Add Job
                    </button>
                </div>
            </div>
        );
    }

    // Jobs available state
    return jobs && jobs.length === 0 ? ( 
        <div className='flex items-center justify-center h-[70vh]'> 
        <p className='text-xl sm:text-2xl'>NO Jobs Available or Posted</p>
        </div>) : (
        <div className='container p-4 max-w-5xl'>
            <div className='overflow-x-auto'>
                <table className='min-w-full bg-white border border-gray-200 max-sm:text-sm'>
                    <thead>
                        <tr>
                            <th className='py-2 px-4 border-b text-left max-sm:hidden'>#</th>
                            <th className='py-2 px-4 border-b text-left'>Job Title</th>
                            <th className='py-2 px-4 border-b text-left max-sm:hidden'>Date</th>
                            <th className='py-2 px-4 border-b text-left max-sm:hidden'>Location</th>
                            <th className='py-2 px-4 border-b text-center'>Applicants</th>
                            <th className='py-2 px-4 border-b text-left'>Checked</th>
                        </tr>
                    </thead>
                    <tbody>
                        {jobs.map((job, index) => (
                            <tr key={job._id} className='text-gray-700'>
                                <td className='py-2 px-4 border-b max-sm:hidden'>{index + 1}</td>
                                <td className='py-2 px-4 border-b'>{job.title}</td>
                                <td className='py-2 px-4 border-b max-sm:hidden'>{moment(job.date).format('ll')}</td>
                                <td className='py-2 px-4 border-b max-sm:hidden'>{job.location}</td>
                                <td className='py-2 px-4 border-b text-center'>{job.applicants}</td>
                                <td className='py-2 px-4 border-b'>
                                    <input
                                        onChange={() => changeJobVisibility(job._id)}
                                        className='scale-125 ml-4'
                                        type="checkbox"
                                        checked={job.visible}
                                    />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className='mt-4 flex justify-end'>
                <button
                    onClick={() => navigate('/dashboard/add-job')}
                    className='w-full sm:w-32 py-3 mt-6 bg-black text-white border-2 border-black rounded-lg hover:bg-white hover:text-black transition duration-300 font-medium shadow-md hover:shadow-lg'
                >
                    Add new job
                </button>
            </div>
        </div>
    );
};

export default ManageJobs;
