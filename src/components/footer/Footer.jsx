import React from "react";
import { FaInstagram, FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";
import logo from "../../assets/Frame(1).png";

const Footer = () => {
  return (
    <footer className="bg-[#F9FAFB] py-10 px-6 md:px-20 border-t border-[#E5E7EB] mt-40 w-full">
      <div className="max-w-7xl mx-auto text-gray-700">
        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 border-b border-[#E5E7EB] pb-8">
          {/* Logo + About */}
          <div className="md:col-span-2 flex flex-col space-y-4">
            <div className="flex items-center space-x-3">
              <img
                src={logo}
                alt="printer"
                className="w-8 h-8 object-contain"
              />
              <span className="font-semibold text-2xl text-blue-500">Pezo</span>
            </div>
            <p className="text-sm leading-relaxed">
              Modernizing the printing experience for everyone.
            </p>
            <div className="flex space-x-4 text-xl text-[#212121]">
              <FaInstagram className="hover:text-blue-500 cursor-pointer" />
              <FaLinkedin className="hover:text-blue-500 cursor-pointer" />
              <FaTwitter className="hover:text-blue-500 cursor-pointer" />
              <FaFacebook className="hover:text-blue-500 cursor-pointer" />
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-[#212121]">
              Product
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-blue-500 cursor-pointer">Features</li>
              <li className="hover:text-blue-500 cursor-pointer">Pricing</li>
              <li className="hover:text-blue-500 cursor-pointer">
                For Print Shops
              </li>
              <li className="hover:text-blue-500 cursor-pointer">
                For Businesses
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-[#212121]">
              Company
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-blue-500 cursor-pointer">About Us</li>
              <li className="hover:text-blue-500 cursor-pointer">Careers</li>
              <li className="hover:text-blue-500 cursor-pointer">Blog</li>
              <li className="hover:text-blue-500 cursor-pointer">Contact</li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-[#212121]">
              Support
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-blue-500 cursor-pointer">
                Help Center
              </li>
              <li className="hover:text-blue-500 cursor-pointer">
                Privacy Policy
              </li>
              <li className="hover:text-blue-500 cursor-pointer">
                Terms of Service
              </li>
              <li className="hover:text-blue-500 cursor-pointer">FAQ</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-6 text-sm text-[#212121] gap-4">
          <p>© 2023 Pezo. All rights reserved.</p>
          <div className="flex flex-wrap justify-center md:justify-end gap-4">
            <span className="hover:text-blue-500 cursor-pointer">
              Privacy Policy
            </span>
            <span className="hover:text-blue-500 cursor-pointer">
              Terms of Service
            </span>
            <span className="hover:text-blue-500 cursor-pointer">Cookies</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
