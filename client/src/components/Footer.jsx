import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <footer className="relative text-gray-800 pt-12 pb-8 px-6 overflow-hidden">
      {/* Smooth Premium Gradient Background */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(to bottom, #ffffff 0%, #f8faff 10%, #f2f6ff 40%, #eef3ff 100%), radial-gradient(circle at top left, rgba(173, 216, 255, 0.25), transparent 70%), radial-gradient(circle at bottom right, rgba(210, 178, 255, 0.3), transparent 70%)",
          backgroundBlendMode: "overlay",
        }}
      />

      {/* Content */}
      <div className="relative container mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-10">
        {/* Logo + Tagline */}
        <div className="flex flex-col items-start gap-3 col-span-2 sm:col-span-1">
          <img
            width={180}
            src={assets.logo}
            alt="Logo"
            className="object-contain"
          />
          <p className="text-sm text-gray-600 max-w-xs">
            Building a bridge between talent and opportunity with modern
            technology.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-2">
          <h3 className="text-gray-900 font-semibold mb-2">Quick Links</h3>
          <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">
            Home
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">
            About
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">
            Jobs
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">
            Contact
          </a>
        </div>

        {/* Follow Us */}
        <div className="flex flex-col gap-3">
          <h3 className="text-gray-900 font-semibold mb-2">Follow Us</h3>
          <div className="flex gap-4">
            <a
              href="#"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform duration-300"
            >
              <img
                src={assets.instagram_icon}
                className="w-7 h-7"
                alt="Instagram"
              />
            </a>
            <a
              href="#"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform duration-300"
            >
              <img
                src={assets.twitter_icon}
                className="w-7 h-7"
                alt="Twitter"
              />
            </a>
            <a
              href="#"
              className="hover:scale-110 transition-transform duration-300"
            >
              <img
                src={assets.facebook_icon}
                className="w-7 h-7"
                alt="Facebook"
              />
            </a>
          </div>
        </div>

        {/* Contact */}
        <div className="flex flex-col gap-2">
          <h3 className="text-gray-900 font-semibold mb-2">Contact</h3>
          <p className="text-gray-600 text-sm">NIT MZ, Aizawl, Mizoram</p>
          <p className="text-gray-600 text-sm">
            masirapavijayvardhan@gmail.com
          </p>
        </div>
      </div>

      {/* Divider + Bottom */}
      <div className="relative mt-8 border-t border-gray-300/50 pt-4 text-center text-xs text-gray-500">
        © {new Date().getFullYear()}{" "}
        | Developed by{" "}
        <span className="text-gray-900 font-medium">
          Masirapa Vijay Vardhan
        </span>
        <br />
        Made with ❤️ for the developer community
      </div>
    </footer>
  );
};

export default Footer;
