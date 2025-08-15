import React, { useContext, useRef } from "react";
import { assets } from "../assets/assets";
import { AppContext } from "../context/AppContext";
import Lottie from "lottie-react";
import JobSearchAnimation from "../assets/job-search.json";

const Hero = () => {
  const { setSearchFilter, setIsSearched } = useContext(AppContext);

  const titleRef = useRef(null);
  const locationRef = useRef(null);

  const onSearch = () => {
    setSearchFilter({
      title: titleRef.current.value.trim(),
      location: locationRef.current.value.trim(),
    });
    setIsSearched(true);
  };

  return (
    <div className="container 2xl:px-20 mx-auto my-10 px-4">
      {/* Main Hero Section */}
      <div className="bg-white rounded-xl flex flex-col lg:flex-row items-center lg:items-start gap-10 p-6 lg:p-12">
        {/* Left Side - Lottie Animation */}
        <div className="flex-1 flex justify-center">
          <Lottie
            animationData={JobSearchAnimation}
            loop={true}
            className="w-[200px] sm:w-[260px] md:w-[340px] lg:w-[440px] xl:w-[480px]"
          />
        </div>

        {/* Right Side - Search Content */}
        <div className="flex-1 flex flex-col justify-center text-center lg:text-left max-w-xl">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 leading-snug">
            Your Career’s Next Chapter is Just One Search Away
          </h2>
          <p className="mt-4 text-sm sm:text-base text-gray-600">
            Your Next Big Career Move Starts Right Here — Explore the Best Job
            Opportunities and Take the First Step Towards Your Future!
          </p>

          {/* Search Bar */}
          <div className="mt-6 flex flex-col sm:flex-row items-center sm:items-stretch gap-3 bg-white border border-gray-200 rounded-lg p-2 shadow-sm">
            {/* Job Search Input */}
            <div className="flex items-center flex-1 px-2">
              <img className="h-5 mr-2" src={assets.search_icon} alt="" />
              <input
                type="text"
                placeholder="Search for Jobs"
                className="text-sm p-2 rounded outline-none w-full bg-transparent"
                ref={titleRef}
              />
            </div>

            {/* Location Input */}
            <div className="flex items-center flex-1 sm:border-l sm:border-gray-300 px-2">
              <img className="h-5 mr-2" src={assets.location_icon} alt="" />
              <input
                type="text"
                placeholder="Location"
                className="text-sm p-2 rounded outline-none w-full bg-transparent"
                ref={locationRef}
              />
            </div>

            {/* Search Button */}
            <button
              onClick={onSearch}
              className="bg-black hover:bg-gray-800 transition px-6 py-2 rounded-lg text-white w-full sm:w-auto"
            >
              Search
            </button>
          </div>
        </div>
      </div>

      {/* Trusted By Section */}
      <div className="border border-gray-200 mx-2 mt-5 p-4 sm:p-6 rounded-xl flex bg-gradient-to-r from-white via-gray-50 to-white shadow-lg overflow-x-auto">
        <div className="flex items-center gap-6 sm:gap-8 lg:gap-12 flex-nowrap min-w-max">
          <p className="font-semibold text-gray-600 uppercase tracking-wider whitespace-nowrap text-sm sm:text-base">
            Trusted by
          </p>
          <img
            className="h-6 sm:h-8 flex-shrink-0 transition-transform duration-300 hover:scale-110"
            src={assets.microsoft_logo}
            alt="MicrosoftLogo"
          />
          <img
            className="h-6 sm:h-8 flex-shrink-0 transition-transform duration-300 hover:scale-110"
            src={assets.walmart_logo}
            alt="WalmartLogo"
          />
          <img
            className="h-6 sm:h-8 flex-shrink-0 transition-transform duration-300 hover:scale-110"
            src={assets.accenture_logo}
            alt="AccentureLogo"
          />
          <img
            className="h-6 sm:h-8 flex-shrink-0 transition-transform duration-300 hover:scale-110"
            src={assets.samsung_logo}
            alt="SamsungLogo"
          />
          <img
            className="h-6 sm:h-8 flex-shrink-0 transition-transform duration-300 hover:scale-110"
            src={assets.amazon_logo}
            alt="AmazonLogo"
          />
          <img
            className="h-6 sm:h-8 flex-shrink-0 transition-transform duration-300 hover:scale-110"
            src={assets.adobe_logo}
            alt="AdobeLogo"
          />
          <img
            className="h-6 sm:h-8 flex-shrink-0 transition-transform duration-300 hover:scale-110"
            src={assets.juspay_logo}
            alt="JusPayLogo"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
