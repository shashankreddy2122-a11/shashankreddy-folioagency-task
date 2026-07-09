import React from "react";
import { FaFacebookF, FaYoutube, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="footer" className="bg-white py-14 sm:py-16 lg:py-20">

      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-20">

        {/* Logo */}
        <div className="flex justify-center items-center gap-3">

          <img
            src="/assests/logo.png"
            alt="Logo"
            className="w-12 h-12 sm:w-14 sm:h-14 object-contain"
          />

          <h2 className="text-3xl font-bold text-black">
            folio.
          </h2>

        </div>

        {/* Description */}
        <p className="max-w-2xl mx-auto text-center text-gray-500 text-base sm:text-lg leading-relaxed mt-8">
          Agency is a full-service agency, busy designing and building
          beautiful digital products, brands, and experiences.
        </p>

        {/* Navigation */}
        <div className="flex flex-wrap justify-center gap-8 sm:gap-10 mt-10 text-black font-medium">

          <a href="#whoarewe" className="hover:text-gray-500 transition">
            About
          </a>

          <a href="#whatwedo" className="hover:text-gray-500 transition">
            Work
          </a>

          <a href="#partnership" className="hover:text-gray-500 transition">
            Services
          </a>

          <a href="#wearehiring" className="hover:text-gray-500 transition">
            Jobs
          </a>

        </div>

        {/* Divider */}
        <div className="border-t border-gray-300 mt-12"></div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mt-8">

          {/* Left */}
          <div className="flex items-center gap-3 text-gray-600">

            <div className="w-7 h-7 rounded-full border border-gray-500 flex items-center justify-center text-xs">
              C
            </div>

            <span className="text-sm sm:text-base">
              2020, UI8 LLC
            </span>

          </div>

          {/* Right */}
         <div className="flex items-center gap-5">
  <span className="font-medium text-black">
    Follow Us
  </span>

<div className="flex items-center gap-5 text-2xl">

  <FaFacebookF className="cursor-pointer hover:text-blue-600 transition-colors" />

  <FaYoutube className="cursor-pointer hover:text-red-600 transition-colors" />

  <FaInstagram className="cursor-pointer hover:text-pink-600 transition-colors" />

</div>
</div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;