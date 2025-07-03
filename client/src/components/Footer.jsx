import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <footer className="bg-blue-200 dark:bg-gray-900 text-gray-800 dark:text-gray-300 py-10 px-6">
  <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-8">
    
    {/* Logo */}
    <div className="flex items-center justify-center sm:justify-start">
      <img width={180} src={assets.logo} alt="Logo" className="object-contain" />
    </div>

    {/* Text */}
    <div className="text-center sm:text-left text-sm leading-relaxed max-w-xl">
      © {new Date().getFullYear()}{" "}
      <span className="text-blue-500 dark:text-blue-300 font-semibold">@key.viapractice();</span>{" "}
      | Developed by{" "}
      <span className="text-black dark:text-white font-medium">VIJAY VARDHAN MASIRAPA</span>{" "}
      | All rights reserved.
    </div>

    {/* Social Icons */}
    <div className="flex gap-4">
      <a href="#" target="_blank" rel="noopener noreferrer">
        <img src={assets.instagram_icon} className="w-8 h-8" alt="Instagram" />
      </a>
      <a href="#" target="_blank" rel="noopener noreferrer">
        <img src={assets.twitter_icon} className="w-8 h-8" alt="Twitter" />
      </a>
      <a href="#">
        <img src={assets.facebook_icon} className="w-8 h-8" alt="Facebook" />
      </a>
    </div>
  </div>
</footer>

  );
};

export default Footer;