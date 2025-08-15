import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { Menu, X } from "lucide-react";

const NavBar = () => {
  const { openSignIn } = useClerk();
  const { user } = useUser();
  const navigate = useNavigate();
  const { setShowRecruiterLogin } = useContext(AppContext);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="relative backdrop-blur-lg bg-white/70 shadow-md border-b border-white/40 sticky top-0 z-50">
      <div className="container px-4 2xl:px-20 mx-auto flex justify-between items-center py-3">
        
        {/* Logo */}
        <div
          className="flex-shrink-0 cursor-pointer group"
          onClick={() => navigate("/")}
        >
          <img
            src={assets.logo}
            alt="Logo"
            className="h-10 object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden sm:flex justify-end items-center gap-4 text-sm font-medium">
          {user ? (
            <>
              <Link
                to="/applications"
                className="relative text-gray-700 hover:text-blue-800 transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:h-[2px] after:bg-gradient-to-r from-blue-600 to-purple-600 hover:after:w-full after:transition-all after:duration-300"
              >
                Applied Jobs
              </Link>
              <span className="text-gray-300">|</span>
              <p>
                Hi,{" "}
                <span className="text-blue-800 font-semibold">
                  {user.firstName + " " + user.lastName}
                </span>
              </p>
              <UserButton
                afterSignOutUrl="/"
                appearance={{
                  elements: { userButtonAvatarBox: "h-8 w-8" },
                }}
              />
            </>
          ) : (
            <div className="flex gap-4">
              <button
                onClick={() => setShowRecruiterLogin(true)}
                className="bg-white/80 backdrop-blur-md text-blue-800 font-bold border border-blue-800 px-4 py-1.5 rounded-lg hover:bg-gradient-to-r from-blue-700 to-blue-900 hover:text-white transition-all duration-500 shadow-sm hover:shadow-md"
              >
                Recruiter Login
              </button>
              <button
                onClick={() => openSignIn()}
                className="bg-gradient-to-r from-blue-700 to-blue-900 text-white font-semibold px-4 py-1.5 rounded-lg hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
              >
                Login
              </button>
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="sm:hidden flex items-center"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu Overlay */}
      <div
        className={`sm:hidden absolute left-0 w-full bg-white/90 backdrop-blur-lg border-t border-gray-200 transform origin-top transition-all duration-300 ease-in-out ${
          isMenuOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"
        }`}
        style={{ top: "100%" }}
      >
        <div className="flex flex-col gap-4 px-4 py-4 text-sm font-medium">
          {user ? (
            <>
              <Link
                to="/applications"
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-700 hover:text-blue-800"
              >
                Applied Jobs
              </Link>
              <p className="text-gray-600">
                Hi,{" "}
                <span className="text-blue-800 font-semibold">
                  {user.firstName + " " + user.lastName}
                </span>
              </p>
              <UserButton
                afterSignOutUrl="/"
                appearance={{
                  elements: { userButtonAvatarBox: "h-8 w-8" },
                }}
              />
            </>
          ) : (
            <>
              <button
                onClick={() => {
                  setShowRecruiterLogin(true);
                  setIsMenuOpen(false);
                }}
                className="bg-white/80 text-blue-800 font-bold border border-blue-800 px-4 py-1.5 rounded-lg hover:bg-gradient-to-r from-blue-700 to-blue-900 hover:text-white transition-all duration-500"
              >
                Recruiter Login
              </button>
              <button
                onClick={() => {
                  openSignIn();
                  setIsMenuOpen(false);
                }}
                className="bg-gradient-to-r from-blue-700 to-blue-900 text-white font-semibold px-4 py-1.5 rounded-lg"
              >
                Login
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
