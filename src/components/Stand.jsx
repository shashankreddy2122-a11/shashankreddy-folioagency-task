import { useState } from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaYoutube, FaInstagram } from "react-icons/fa";

const Stand = () => {
    const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      
      {/* Navigation */}

<nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm">
  <div className="flex items-center justify-between px-6 md:px-12 lg:px-20 py-5">

    {/* Logo */}
    <div className="flex items-center gap-3">
      <img
        src="/assests/logo.png"
        alt="Logo"
        className="w-12 h-12 md:w-16 md:h-16 object-contain"
      />

      <h1 className="text-black text-2xl md:text-3xl font-bold">
        folio.
      </h1>
    </div>

    {/* Desktop Menu */}
    <div className="hidden md:flex items-center space-x-14">
      <a href="#whoarewe" className="text-gray-500 hover:text-black transition">
        About
      </a>

      <Link
        to="/work"
        className="text-gray-500 hover:text-black transition"
      >
        Work
      </Link>

      <a href="#whatwedo" className="text-gray-500 hover:text-black transition">
        Services
      </a>

      <a href="#wearehiring" className="text-gray-500 hover:text-black transition">
        Jobs
      </a>

      <a
      href="#footer"
      className="bg-black text-white px-6 py-2.5 rounded hover:bg-gray-800 transition"
      >
  Contact Us
</a>
    </div>

    {/* Mobile Button */}
    <button
      className="md:hidden"
      onClick={() => setMenuOpen(!menuOpen)}
    >
      <svg
        className="w-7 h-7 text-black"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        {menuOpen ? (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        ) : (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        )}
      </svg>
    </button>
  </div>

  {/* Mobile Menu */}
  <div
  className={`md:hidden overflow-hidden transition-all duration-300 bg-cover bg-center bg-no-repeat ${
    menuOpen ? "max-h-96" : "max-h-0"
  }`}
  style={{
    backgroundImage: "url('/assests/overview.png')",
  }}
>
    <div className=" text-white flex flex-col px-6 py-4 space-y-5">

      <Link to="/work" onClick={() => setMenuOpen(false)}>
        Work
      </Link>

       <a href="#whoarewe" onClick={() => setMenuOpen(false)}>
        About
      </a>

      <a href="#whatwedo" onClick={() => setMenuOpen(false)}>
        Services
      </a>

      <a href="#wearehiring" onClick={() => setMenuOpen(false)}>
        Jobs
      </a>

    </div>
{/* Social Icons */}
<div className="mt-auto flex justify-end gap-6 pr-6 pb-6 pt-10">
  <a
    href="https://facebook.com"
    target="_blank"
    rel="noopener noreferrer"
    className="p-3 rounded-full bg-white/10 hover:bg-blue-600 transition-all duration-300"
  >
    <FaFacebookF className="text-2xl text-white" />
  </a>

  <a
    href="https://youtube.com"
    target="_blank"
    rel="noopener noreferrer"
    className="p-3 rounded-full bg-white/10 hover:bg-red-600 transition-all duration-300"
  >
    <FaYoutube className="text-2xl text-white" />
  </a>

  <a
    href="https://instagram.com"
    target="_blank"
    rel="noopener noreferrer"
    className="p-3 rounded-full bg-white/10 hover:bg-pink-600 transition-all duration-300"
  >
    <FaInstagram className="text-2xl text-white" />
  </a>
</div>
  </div>
</nav>

      {/* Hero Content */}
      <div className="flex flex-col lg:flex-row items-center justify-between px-6 md:px-12 lg:px-20 md:pt-12 lg:pt-20 pb-12 pt-24">
        {/* Left Content */}
        <div className="lg:w-1/2 text-center lg:text-left z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-black leading-tight mb-6">
            Stand Out<br />from The<br />Crowd.
          </h1>
          <p className="text-gray-500 text-base md:text-lg lg:text-xl mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
            Agency is a full-service agency, busy designing and building beautiful digital products,brands and experience.
          </p><br />
          <a href="#section2" className="inline-block bg-folio-accent rounded text-white px-8 py-4 text-base font-semibold hover:bg-purple-300 transition-all transform hover:scale-105 shadow-lg shadow-purple-500/30">
            Recent Work
          </a>
        </div>

        {/* Right Content - Image */}
        <div className="lg:w-1/2 mt-12 lg:mt-0 relative flex justify-center items-center">
          <img 
            src="/assests/home page pic.jpeg" 
            alt="Home Page" 
            className="w-full max-w-md md:max-w-lg lg:max-w-xl h-auto object-contain"
          />
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-6 md:left-12 lg:left-20 flex items-center space-x-3 text-gray-500/70">
        <span className="text-sm font-medium">Scroll down</span>
        <svg className="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-8 right-6 md:right-12 lg:right-20 flex space-x-2">
        <div className="w-3 h-3 rounded-full bg-folio-accent"></div>
        <div className="w-3 h-3 rounded-full bg-pink/30"></div>
        <div className="w-3 h-3 rounded-full bg-pink/30"></div>
        <div className="w-3 h-3 rounded-full bg-pink/30"></div>
        <div className="w-3 h-3 rounded-full bg-pink/30"></div>
      </div>
    </div>
  )
}

export default Stand
