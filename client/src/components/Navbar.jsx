import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";


const Navbar = () => {
      const { openSignIn } = useClerk();
    const { user } = useUser();

    const navigate = useNavigate()

    const { setShowRecruiterLogin } = useContext(AppContext)

    
  return (
    <div className="shadow py-2">
  <div className="container px-4 2xl:px-20 mx-auto flex flex-wrap sm:flex-nowrap justify-between items-center gap-4">
    
    {/* Logo Section */}
    <div className="flex-shrink-0">
      <img onClick={() => navigate('/')} src={assets.logo} alt="Logo" className="cursor-pointer h-10 object-contain" />
    </div>

    {/* Right Section */}
    <div className="flex flex-wrap justify-end items-center gap-3 text-sm text-gray-700 font-medium flex-1">
      {user ? (
        <>
          <Link to="/applications" className="hover:text-blue-700 transition-colors duration-200" >
            Applied Jobs
          </Link>
          <span className="text-gray-400 hidden sm:inline">|</span>
          <p className="max-sm:hidden">
            Hi,{" "}
            <span className="text-blue-800 font-semibold">
              {user.firstName + " " + user.lastName}
            </span>
          </p>
          <UserButton afterSignOutUrl="/" appearance={{ elements: { userButtonAvatarBox: "h-7 w-7" } }} />
        </>
      ) : (
        <div className="flex gap-2 sm:gap-4">
          <button onClick={() => setShowRecruiterLogin(true)} className="bg-white text-blue-800 font-bold border border-blue-800 px-4 py-1 rounded hover:bg-gradient-to-r from-blue-700 to-blue-900 hover:text-white transition duration-700" >
            Recruiter Login
          </button>
          <button onClick={() => openSignIn()} className="bg-gradient-to-r from-blue-700 to-blue-900 text-white font-semibold px-4 py-1 rounded hover:bg-blue-900 transition duration-200" >
            Login
          </button>
        </div>
      )}
    </div>
  </div>
</div>

  );
};

export default Navbar;