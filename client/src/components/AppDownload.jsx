import React from "react";
import { assets } from "../assets/assets";
import Lottie from "lottie-react";
import DownloadAppAnimation from "../assets/download-app.json";

const AppDownload = () => {
  return (
    <div className="container px-4 2xl:px-20 mx-auto my-16">
      <div className="relative rounded-3xl overflow-hidden shadow-xl border border-gray-100 bg-white">
        {/* Subtle Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* Content */}
        <div className="relative flex flex-col lg:flex-row items-center justify-between gap-10 p-8 sm:p-12 lg:p-16">
          {/* Text Section */}
          <div className="max-w-xl text-center lg:text-left">
            <h1 className="text-gray-900 text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-4">
              Download Our App
            </h1>
            <p className="text-gray-600 mb-6 text-sm sm:text-base">
              Enjoy a seamless, fast, and feature-rich experience directly from
              your phone — anytime, anywhere.
            </p>

            <div className="flex items-center justify-center lg:justify-start gap-4 flex-wrap">
              <a
                href="#"
                className="transition-transform hover:scale-105 active:scale-95"
              >
                <img
                  className="h-12 sm:h-14"
                  src={assets.play_store}
                  alt="Play Store"
                />
              </a>
              <a
                href="#"
                className="transition-transform hover:scale-105 active:scale-95"
              >
                <img
                  className="h-12 sm:h-14"
                  src={assets.app_store}
                  alt="App Store"
                />
              </a>
            </div>
          </div>

          {/* Animation */}
          <div className="relative w-40 sm:w-52 md:w-60 lg:w-72 xl:w-80">
            <Lottie animationData={DownloadAppAnimation} loop={true} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppDownload;
