import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { assets } from "../assets/assets";
import Loading from "../components/Loading";
import NavBar from '../components/NavBar.jsx'
import kconvert from 'k-convert';
import moment from 'moment';
import JobCard from '../components/JobCard.jsx';
import Footer from '../components/Footer.jsx';
import axios from "axios";
import { toast } from "react-toastify";
import { useAuth } from "@clerk/clerk-react";

const ApplyJob = () => {

  const { id } = useParams()

  const {getToken} = useAuth()

  const navigate = useNavigate()

  const [JobData, setJobData] = useState(null)

  const [isAlreadyApplied, setIsAlreadyApplied] = useState(false)

  const { jobs, backendUrl, userData, userApplications, fetchUserApplications } = useContext(AppContext);

  const fetchJob = async () => {

    try {    
    
      const {data} = await axios.get(backendUrl + `/api/jobs/${id}`)

       if (data.success) {
        setJobData(data.job)
      } else {
        toast.error(data.message)
      }
      
    } catch (error) {
      toast.error(error.message)
    }

  }
 
  const applyHandler = async () => {

    try {

      if (!userData) {
        return toast.error('Login to apply to Job')
      }

      if (!userData.resume) {
        navigate('/applications')
        return toast.error('Upload resume to apply')
      }

      const token = await getToken()

      const {data} = await axios.post(backendUrl + '/api/users/apply',
        {jobId: JobData._id},
        {headers: {Authorization: `Bearer ${token}`}}
      )

      if (data.success) {
        toast.success(data.message)
        fetchUserApplications()
      } else {
        toast.error(data.message)
      }
      
    } catch (error) {
      toast.error(error.message)
    }
  }

  const checkAlreadyApplied = () => {
    const hasApplied = userApplications.some(item => item.jobId._id === JobData._id)

    setIsAlreadyApplied(hasApplied)

  }


  useEffect(() => {
      fetchJob();
  }, [id]);

  useEffect(() => {
    if (userApplications.length > 0 && JobData) {
      checkAlreadyApplied()
    }
  }, [JobData, userApplications, id ])

  return JobData ? (
    <>
    <NavBar />

    <div className="min-h-screen flex flex-col py-10 container px-4 2xl:px-20 mx-auto">
      <div className="bg-white text-black rounded-lg w-full">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 p-6 md:p-10 mb-6 bg-sky-50 border border-sky-400 rounded-xl shadow-lg animate-fade-in-down transition-all duration-500 ease-in-out">
  {/* Left Section */}
  <div className="flex flex-col md:flex-row items-center text-center md:text-left gap-4 w-full md:w-2/3">
    <img
      className="h-20 w-20 object-contain bg-white rounded-lg p-2 border shadow-sm"
      src={JobData.companyId?.image || assets.company_icon}
      alt={JobData.companyId?.name || "Company Logo"}
      onError={(e) => (e.target.src = assets.company_icon)}
    />
    <div className="text-neutral-700">
      <h1 className="text-xl sm:text-2xl font-semibold">{JobData.title}</h1>
      <div className="flex flex-wrap justify-center md:justify-start gap-4 text-gray-600 mt-2 text-sm sm:text-base">
        <span className="flex items-center gap-1">
          <img src={assets.suitcase_icon} alt="" className="h-4 w-4" />
          {JobData.companyId.name}
        </span>
        <span className="flex items-center gap-1">
          <img src={assets.location_icon} alt="" className="h-4 w-4" />
          {JobData.location}
        </span>
        <span className="flex items-center gap-1">
          <img src={assets.person_icon} alt="" className="h-4 w-4" />
          {JobData.level}
        </span>
        <span className="flex items-center gap-1">
          <img src={assets.money_icon} alt="" className="h-4 w-4" />
          CTC: {kconvert.convertTo(JobData.salary)}
        </span>
      </div>
    </div>
  </div>

  {/* Right Section */}
  <div className="flex flex-col items-center md:items-end text-sm w-full md:w-1/3">
    <button onClick={applyHandler} className="bg-blue-600 hover:bg-blue-700 transition duration-300 p-2.5 px-8 text-white rounded-lg shadow-md w-fit">
      {isAlreadyApplied ? "Applied" : "Apply Now"}
    </button>
    <p className="mt-2 text-gray-600">
      Posted {JobData.date ? moment(JobData.date).fromNow() : "Recently"}
    </p>
  </div>
</div>


        <div className="flex flex-col lg:flex-row justify-between items-start">
          <div className="w-full lg:w-2/3">
            <h2 className="font-bold text-2xl mb-4">Job Description</h2>
            <div className="rich-text" dangerouslySetInnerHTML={{__html:JobData.description}}></div>
            <button onClick={applyHandler} className="bg-blue-600 mt-10 p-2.5 px-10 text-white rounded">{isAlreadyApplied ? "Applied" : "Apply Now"}</button>
          </div>

          {/* Right Section - More Jobs */}
          <div className="w-full lg:w-1/3 mt-8 lg:mt-0 lg:ml-8 space-y-5">
            <h2>More jobs from {JobData.companyId?.name || "this company"}</h2>
            {JobData && JobData.companyId && jobs.filter((job) =>job._id !== JobData._id &&job.companyId &&job.companyId._id === JobData.companyId._id).filter(job => {
              // set of applied job Id's
              const appliedJobsIds = new Set(userApplications.map(app => app.jobId && app.jobId._id))
              // Return true if the user has not applied for this job
              return !appliedJobsIds.has(job._id)
            }).slice(0, 3).map((job, index) => (<JobCard key={index} job={job} />))}
          </div>
        </div>
      </div>
    </div>

    <Footer />
    </>
  ) : (
    <Loading />
  );
};

export default ApplyJob;