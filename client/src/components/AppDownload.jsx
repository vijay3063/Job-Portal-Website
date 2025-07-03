import React from "react";
import { assets } from "../assets/assets";

const AppDownload = () => {
  return (
    <div className="container px-4 2xl:px-20 mx-auto my-20">
      <div className="relative bg-gradient-to-r from-blue-400 to-blue-300 p-8 sm:p-16 lg:p-24 rounded-3xl overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* Text + Store Buttons */}
        <div className="max-w-xl text-gray-800">
          <h1 className="text-white text-3xl sm:text-4xl font-bold mb-6 leading-tight">Download Mobile App For Better Experience</h1>
          <div className="flex items-center gap-4 flex-wrap">
            <a href="">
              <img className="h-12 sm:h-14" src={assets.play_store} alt="Play Store" />
            </a>
            <a href="">
              <img className="h-12 sm:h-14" src={assets.app_store} alt="App Store"/>
            </a>
          </div>
        </div>

        {/* App Image */}
        <div className="relative w-40 sm:w-52 md:w-60 lg:w-72 xl:w-80 animate-shake-smooth">
          <img src={assets.Mobile_App_Img} alt="Mobile App" className="w-full h-auto" />
        </div>
      </div>
    </div>
  );
};

export default AppDownload;