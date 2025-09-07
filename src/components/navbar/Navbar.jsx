import React, { useState } from "react";
import { Link } from "react-router-dom";
import profile from "../../assets/gils.jpg";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 w-full">
      <nav className="w-full px-4 sm:px-6 lg:px-8 h-17 flex items-center justify-center">
        <div className="w-full max-w-[1470px] flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-[#212121]">Pezo</span>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <Link
              to="/print"
              className="font-medium text-gray-600 hover:text-black transition"
            >
              Print
            </Link>
            <Link
              to="/about"
              className="font-medium text-gray-600 hover:text-black transition"
            >
              About
            </Link>
            <div className="relative w-10 h-10">
              <img
                src={profile}
                alt="profile"
                className="w-full h-full rounded-full border-2 border-gray-200"
              />
              <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-600 border-2 border-white rounded-full"></span>
            </div>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            className="md:hidden flex items-center justify-center w-10 h-10"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <HiX className="w-6 h-6" />
            ) : (
              <HiMenu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-16 left-0 w-full bg-white shadow-md md:hidden z-50">
            <ul className="flex flex-col items-start px-6 py-4 space-y-4 max-w-[1600px] mx-auto">
              <li>
                <Link
                  to="/print"
                  className="font-medium text-gray-600 hover:text-black transition"
                  onClick={() => setIsOpen(false)}
                >
                  Print
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="font-medium text-gray-600 hover:text-black transition"
                  onClick={() => setIsOpen(false)}
                >
                  About
                </Link>
              </li>
              <li className="flex items-center space-x-3 mt-2">
                <img
                  src={profile}
                  alt="profile"
                  className="w-10 h-10 rounded-full border-2 border-gray-200"
                />
                <span className="w-3 h-3 bg-green-600 border-2 border-white rounded-full mt-6 ml-[-14px]"></span>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
