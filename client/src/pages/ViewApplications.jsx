import React, { useContext, useEffect, useState } from "react";
import { assets } from "../assets/assets";
import { AppContext } from "../context/AppContext";
import axios from "axios";
import { toast } from "react-toastify";
import Loading from "../components/Loading";

const ViewApplications = () => {
  const { backendUrl, companyToken } = useContext(AppContext);

  const [applicants, setApplicants] = useState(false);

  const fetchCompanyJobApplications = async () => {
    try {
      const { data } = await axios.get(backendUrl + "/api/company/applicants", {
        headers: { token: companyToken },
      });

      if (data.success) {
        setApplicants(data.applications.reverse());
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  // Function to update Job Applications Status
  const changeJobApplicationStatus = async (id, status) => {
    try {

        const {data} = await axios.post(backendUrl + '/api/company/change-status', 
            {id, status},
            {headers : {token: companyToken}}
        )

        if (data.success) {
            fetchCompanyJobApplications()
        } else {
            toast.error(data.message)
        }
        
    } catch (error) {
        toast.error(error.message)
    }
  }

  useEffect(() => {
    if (companyToken) {
      fetchCompanyJobApplications();
    }
  }, [companyToken]);

  return applicants ? (
    applicants.length === 0 ? (
      <div className='flex items-center justify-center h-[70vh]'> 
        <p className='text-xl sm:text-2xl'>No applications found</p>
        </div>
    ) : (
      <div className="container mx-auto p-4">
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 max-sm:text-sm">
            <thead className="bg-gray-100">
              <tr className="border-b text-left text-gray-700">
                <th className="py-3 px-4">#</th>
                <th className="py-3 px-4">User Name</th>
                <th className="py-3 px-4 max-sm:hidden">Job Title</th>
                <th className="py-3 px-4 max-sm:hidden">Location</th>
                <th className="py-3 px-4">Resume</th>
                <th className="py-3 px-4">Action</th>
              </tr>
            </thead>
            <tbody>
              {applicants
                .filter((item) => item.jobId && item.userId)
                .map((applicant, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50">
                    <td className="py-3 px-4 text-left">{index + 1}</td>
                    <td className="py-3 px-4 flex items-center gap-3 text-left">
                      <img
                        className="w-10 h-10 rounded-full max-sm:hidden"
                        src={applicant.userId.image}
                        alt="User"
                      />
                      <span>{applicant.userId.name}</span>
                    </td>
                    <td className="py-3 px-4 max-sm:hidden text-left">
                      {applicant.jobId.title}
                    </td>
                    <td className="py-3 px-4 max-sm:hidden text-left">
                      {applicant.jobId.location}
                    </td>
                    <td className="py-3 px-4 text-left">
                      <div className="flex items-center gap-2">
                        <a
                          href={applicant.userId.resume}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-blue-50 text-blue-500 px-3 py-1 rounded hover:bg-blue-100"
                        >
                          Resume
                        </a>
                        <a
                          href={applicant.userId.resume}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            src={assets.resume_download_icon}
                            alt="Download"
                            className="w-5 h-5"
                          />
                        </a>
                      </div>
                    </td>
                    <td className="py-2 px-4 text-left">
                        {applicant.status === "Pending" ? 
                        <div className="relative inline-block text-left group">
                        <button className="text-gray-500">...</button>
                        <div className="z-10 hidden absolute right-0 top-6 w-32 bg-white border border-gray-200 rounded shadow group-hover:block">
                          <button onClick={() => changeJobApplicationStatus(applicant._id, 'Accepted')} className="block w-full text-left px-4 py-2 text-green-600 hover:bg-gray-100">
                            Accept
                          </button>
                          <button onClick={() => changeJobApplicationStatus(applicant._id, 'Rejected')} className="block w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100">
                            Reject
                          </button>
                        </div>
                      </div> :
                      <div>
                        {applicant.status}
                      </div>
                        }
                      
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    )
  ) : (
    <Loading />
  );
};

export default ViewApplications;
