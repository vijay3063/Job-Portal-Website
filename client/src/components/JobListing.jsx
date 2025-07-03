// import React, { use, useContext, useState } from "react";
import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import { assets, JobCategories, JobLocations } from "../assets/assets";
import JobCard from "./JobCard";

const JobListing = () => {
  const { isSearched, searchFilter, setSearchFilter, jobs } = useContext(AppContext);

  const [showFilter, setShowFilter] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)

  const [selectedCategories, setSelectedCategories] = useState([])
  const [selectedLocation, setSelectedLocation] = useState([])

  const [filteredJobs, setFilteredJobs] = useState(jobs)

  const handleLocationChnage = (category) => {
    setSelectedLocation (
      prev => prev.includes(category) ? prev.filter(c => c !== category) : [...prev, category]
    );
  }

  const handleCatogoryChnage = (location) => {
    setSelectedCategories (
      prev => prev.includes(location) ? prev.filter(c => c !== location) : [...prev, location]
    );
  }

  useEffect(() => {
    const matchesCategory = job => selectedCategories.length === 0 || selectedCategories.includes(job.category)

    const matchesLocation = job => selectedLocation.length === 0 || selectedLocation.includes(job.location)

    const matchesTitle = job => searchFilter.title === "" || job.title.toLowerCase().includes(searchFilter.title.toLowerCase())

    const matchesSearchLocation = job => searchFilter.location === "" || job.location.toLowerCase().includes(searchFilter.location.toLowerCase())

    const newFilteredJobs = jobs.slice().reverse().filter(
      job => matchesCategory(job) && matchesLocation(job) && matchesTitle(job) && matchesSearchLocation(job)
    )

    setFilteredJobs(newFilteredJobs)
    setCurrentPage(1)
  },[jobs, selectedCategories, selectedLocation, searchFilter])

  return (
    <div className="container 2xl:px-20 mx-auto flex flex-col lg:flex-row max-lg:space-y-8 py-8">
      {/* Sidebar */}

      <div className="w-full lg:w-1/4 bg-white px-4">
        {/* Search Filter from Hero Component */}
        {isSearched &&
          (searchFilter.title != "" || searchFilter.location != "") && (
            <>
              <h3 className="font-semibold text-xl mb-4 text-gray-800">
                Current Search
              </h3>

              <div className="mb-6 flex flex-wrap gap-3">
                {searchFilter.title && (
                  <span className="inline-flex items-center gap-2.5 bg-blue-100 border border-blue-300 text-blue-800 px-4 py-1.5 rounded-full shadow-sm hover:bg-blue-200 transition-all duration-200">
                    {searchFilter.title}
                    <img
                      onClick={() =>
                        setSearchFilter((prev) => ({ ...prev, title: "" }))
                      }
                      className="cursor-pointer w-4 h-4 hover:scale-110 transition-transform duration-150"
                      src={assets.cross_icon}
                      alt="Clear title filter"
                    />
                  </span>
                )}
                {searchFilter.location && (
                  <span className="inline-flex items-center gap-2.5 bg-blue-100 border border-blue-300 text-blue-800 px-4 py-1.5 rounded-full shadow-sm hover:bg-blue-200 transition-all duration-200">
                    {searchFilter.location}
                    <img
                      onClick={() =>
                        setSearchFilter((prev) => ({ ...prev, location: "" }))
                      }
                      className="cursor-pointer w-4 h-4 hover:scale-110 transition-transform duration-150"
                      src={assets.cross_icon}
                      alt="Clear location filter"
                    />
                  </span>
                )}
              </div>
            </>
          )}

          <button onClick={() => {setShowFilter(prev => !prev)}} className="px-6 py-1.5 rounded border border-gray-400 lg:hidden">
            {showFilter ? "Close" : "Filters"}
          </button>

          {/* Category Filter */}
          <div className={showFilter ? "" : "max-lg:hidden"}>
            <h4 className='font-medium text-lg py-4'>Search by Categories</h4>
            <ul className="space-y-4 text-gray-600">
                {
                    JobCategories.map((category,index) => (
                        <li className="flex gap-3 items-center" key={index}>
                            <input className="scale-125" type="checkbox" onChange={() => handleCatogoryChnage(category)} checked={selectedCategories.includes(category)} />
                            {category}
                        </li>
                    ))
                }
            </ul>
          </div>

          {/* Location Filter */}
          <div className={showFilter ? "" : "max-lg:hidden"}>
            <h4 className='font-medium text-lg py-4 pt-14'>Search by Location</h4>
            <ul className="space-y-4 text-gray-600">
                {
                    JobLocations.map((location,index) => (
                        <li className="flex gap-3 items-center" key={index}>
                            <input className="scale-125" type="checkbox" onChange={() => handleLocationChnage(location)} checked={selectedLocation.includes(location)}/>
                            {location}
                        </li>
                    ))
                }
            </ul>
          </div>
      </div>

      {/* Job Listing */}
      <section className="w-full lg:w-3/4 text-gray-800 max-lg:px-4">
        <h3 className="font-medium text-3xl py-2" id="job-list">Latest Jobs</h3>
        <p className="mb-8">Get your desired job from top companies</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
            {filteredJobs.slice((currentPage - 1)*6, currentPage*6).map((job,index) => (
                <JobCard key={index} job={job}/>
            ))}
        </div>

        {/* Pagination */}
        {filteredJobs.length > 0&& (
            <div className="flex items-center justify-center space-x-2 mt-10">
                <a href="#job-list">
                    <img onClick={() => setCurrentPage(Math.max(currentPage-1), 1)} src={assets.left_arrow_icon} alt="" />
                </a>
                {Array.from({length:Math.ceil(filteredJobs.length/6)}).map((_,index) => (
                    <a key={index} href="#job-list">
                        <button onClick={() => setCurrentPage(index+1)} className={`w-10 h-10 flex items-center justify-center border border-gray-300 rounded ${currentPage === index + 1 ? 'bg-blue-100 text-blue-500' : 'text-gray-500 '}`}>{index + 1}</button>
                    </a>
                ))}
                <a href="#job-list">
                    <img onClick={() => setCurrentPage(Math.min(currentPage+1), Math.ceil(filteredJobs.length/6))} src={assets.right_arrow_icon} alt="" />
                </a>
            </div>
        )}
      </section>
    </div>
  );
};

export default JobListing;