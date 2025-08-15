import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const JobCard = ({ job }) => {
  const navigate = useNavigate();

  return (
    <div className="p-5 sm:p-6 rounded-2xl bg-white shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-gray-100 w-full group">
      {/* Company Logo */}
      <div className="flex justify-between items-center">
        <img
          className="h-10 sm:h-12 object-contain bg-white rounded-lg border border-gray-200 p-1.5 shadow-sm"
          src={job.companyId?.image || assets.company_icon}
          alt={job.companyId?.name || "Company Logo"}
          onError={(e) => (e.target.src = assets.company_icon)}
        />
      </div>

      {/* Job Title */}
      <h4 className="font-semibold text-lg sm:text-xl mt-4 text-gray-800 group-hover:text-blue-700 transition-colors">
        {job.title}
      </h4>

      {/* Tags */}
      <div className="flex flex-wrap items-center gap-2 mt-3 text-xs sm:text-sm">
        <span className="bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 text-blue-800 px-3 py-1 rounded-full shadow-sm">
          {job.location}
        </span>
        <span className="bg-gradient-to-r from-red-50 to-red-100 border border-red-200 text-red-700 px-3 py-1 rounded-full shadow-sm">
          {job.level}
        </span>
      </div>

      {/* Description */}
      <p
        className="text-gray-500 text-sm mt-4 leading-relaxed"
        dangerouslySetInnerHTML={{ __html: job.description.slice(0, 150) + "..." }}
      ></p>

      {/* Buttons */}
      <div className="mt-5 flex flex-col sm:flex-row gap-3 text-sm">
        <button
          onClick={() => {
            navigate(`/apply-job/${job._id}`);
            scrollTo(0, 0);
          }}
          className="bg-gradient-to-r from-blue-600 to-blue-500 text-white px-5 py-2.5 rounded-lg hover:from-blue-700 hover:to-blue-600 shadow-md hover:shadow-lg transition duration-300 w-full sm:w-auto"
        >
          Apply Now
        </button>
        <button
          onClick={() => {
            navigate(`/apply-job/${job._id}`);
            scrollTo(0, 0);
          }}
          className="border border-gray-300 text-gray-700 px-5 py-2.5 rounded-lg hover:bg-gray-50 shadow-sm hover:shadow-md transition duration-300 w-full sm:w-auto"
        >
          Know More
        </button>
      </div>
    </div>
  );
};

export default JobCard;
