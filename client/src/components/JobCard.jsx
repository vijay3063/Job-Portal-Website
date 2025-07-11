import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const JobCard = ({ job }) => {
  const navigate = useNavigate();

  return (
    <div className="border p-4 sm:p-6 rounded-2xl shadow-md transition-transform duration-300 hover:shadow-xl hover:-translate-y-1 group bg-white w-full">
      <div className="flex justify-between items-center">
        <img
          className="h-8 sm:h-10 object-contain bg-white rounded-md border p-1"
          src={job.companyId?.image || assets.company_icon}
          alt={job.companyId?.name || "Company Logo"}
          onError={(e) => (e.target.src = assets.company_icon)}
        />
      </div>

      <h4 className="font-semibold text-lg sm:text-xl mt-4 text-gray-800 group-hover:text-blue-700 transition-colors">
        {job.title}
      </h4>

      <div className="flex flex-wrap items-center gap-2 mt-3 text-sm">
        <span className="bg-blue-50 border border-blue-200 text-blue-800 px-3 py-1 rounded-full">
          {job.location}
        </span>
        <span className="bg-red-50 border border-red-200 text-red-700 px-3 py-1 rounded-full">
          {job.level}
        </span>
      </div>

      <p
        className="text-gray-500 text-sm mt-4 leading-relaxed"
        dangerouslySetInnerHTML={{ __html: job.description.slice(0, 150) }}
      ></p>

      <div className="mt-5 flex flex-col sm:flex-row gap-3 text-sm">
        <button
          onClick={() => {
            navigate(`/apply-job/${job._id}`);
            scrollTo(0, 0);
          }}
          className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition duration-200 w-full sm:w-auto"
        >
          Apply Now
        </button>
        <button
          onClick={() => {
            navigate(`/apply-job/${job._id}`);
            scrollTo(0, 0);
          }}
          className="border border-gray-500 text-gray-700 px-5 py-2 rounded-lg hover:bg-gray-100 transition duration-200 w-full sm:w-auto"
        >
          Know More
        </button>
      </div>
    </div>
  );
};

export default JobCard;
