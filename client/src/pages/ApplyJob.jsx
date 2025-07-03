import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { assets } from "../assets/assets";
import Loading from "../components/Loading";
import NavBar from '../components/NavBar.jsx'
import kconvert from 'k-convert';
import moment from 'moment';
import JobCard from '../components/JobCard.jsx';
import Footer from '../components/Footer.jsx';

const ApplyJob = () => {
  const { id } = useParams();

  const [JobData, setJobData] = useState(null);

  const { jobs } = useContext(AppContext);

  const fetchJob = async () => {
    const data = jobs.filter((job) => job._id === id);
    if (data.length !== 0) {
      setJobData(data[0]);
      console.log(data[0]);
    }
  };

  useEffect(() => {
    if (jobs.length > 0) {
      fetchJob();
    }
  }, [id, jobs]);

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
      src={JobData.companyId.image}
      alt="company logo"
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
    <button className="bg-blue-600 hover:bg-blue-700 transition duration-300 p-2.5 px-8 text-white rounded-lg shadow-md w-fit">
      Apply Now
    </button>
    <p className="mt-2 text-gray-600">
      Posted {moment(JobData.data).fromNow()}
    </p>
  </div>
</div>


        <div className="flex flex-col lg:flex-row justify-between items-start">
          <div className="w-full lg:w-2/3">
            <h2 className="font-bold text-2xl mb-4">Job Description</h2>
            <div className="rich-text" dangerouslySetInnerHTML={{__html:JobData.description}}></div>
            <button className="bg-blue-600 mt-10 p-2.5 px-10 text-white rounded">Apply Now</button>
          </div>

          {/* Right Section - More Jobs */}
          <div className="w-full lg:w-1/3 mt-8 lg:mt-0 lg:ml-8 space-y-5">
            <h2>More jobs from {JobData.companyId.name}</h2>
            {/* {jobs.filter( job => job._id !== JobData._id && job.companyId._id === JobData.companyId._id).filter( job => true).slice(0,3).map((job,index) => <JobCard  key={index} job={job}/> )} */}
            {jobs.filter(job => job._id !== JobData._id && job.companyId._id === JobData.companyId._id).slice(0, 3).map((job, index) => <JobCard key={index} job={job} />)}

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