import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaYoutube, FaInstagram } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";

const Work = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="min-h-screen bg-white">

      {/* ================= NAVBAR ================= */}

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
      
      <Link to="/#whoarewe" onClick={() => setMenuOpen(false)}>
  About
</Link>

      <Link
        to="/work"
        className="text-gray-500 hover:text-black transition"
      >
        Work
      </Link>


      <Link to="/#whatwedo" onClick={() => setMenuOpen(false)}>
        Services
      </Link>

      <Link to="/#wearehiring" onClick={() => setMenuOpen(false)}>
        Jobs
      </Link>

      <a
      href="/#footer"
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

       <Link to="/#whoarewe" onClick={() => setMenuOpen(false)}>
  About
</Link>

      <Link to="/#whatwedo" onClick={() => setMenuOpen(false)}>
        Services
      </Link>

      <Link to="/#wearehiring" onClick={() => setMenuOpen(false)}>
        Jobs
      </Link>

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

      {/* ================= HERO ================= */}

      <section className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 lg:px-20 pt-32 pb-20">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* ================= LEFT ================= */}

          <div>

            {/* Arrow */}

            <button className="w-14 h-14 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition">

              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>

            </button>

            {/* Featured */}

            <button className="mt-10 px-6 py-3 rounded-full bg-orange-300 text-white font-semibold text-sm sm:text-base">
              Featured Product
            </button>

            {/* Heading */}

            <h1 className="mt-8 text-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-none">
              Bento.
            </h1>

            <h2 className="mt-6 text-black text-2xl sm:text-3xl md:text-4xl font-semibold">
              Drag &amp; Drop 3D Visual
            </h2>

            <h2 className="mt-2 text-black text-2xl sm:text-3xl md:text-4xl font-semibold">
              Design System
            </h2>

            {/* Cards will be added in Part 2 */}
                  {/* ================= FEATURE CARDS ================= */}

<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-14">

  {/* Card 1 */}
  <div className="bg-white border border-gray-200 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 p-6">

    <img
      src="/assests/emoji.jpg"
      alt="Logo"
      className="w-14 h-14 object-contain"
    />
    <h3 className="mt-8 text-purple-800 text-xl font-bold">
      Global Digital
    </h3>

    <p className="mt-2 text-purple-900 text-lg">
      Agency of Record
    </p>

  </div>

  {/* Card 2 */}
  <div className="bg-white border border-gray-200 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 p-6">

    <img
      src="/assests/inc.jpg"
      alt="Logo"
      className="w-14 h-14 object-contain"
    />
    <h3 className="mt-8 text-purple-900 text-xl font-bold">
      5 Years of Digital
    </h3>

    <p className="mt-2 text-purple-900 text-lg">
      Marketing Excellence
    </p>

  </div>

</div>
          </div>

          {/* ================= RIGHT ================= */}

          <div className="flex justify-center lg:justify-end mt-12 lg:mt-0">

            {/* Image will be added in Part 2 */}
            <img
  src="/assests/work.png"
  alt="Bento Design"
  className="
    w-full
    max-w-[320px]
    sm:max-w-[420px]
    md:max-w-[520px]
    lg:max-w-[620px]
    xl:max-w-[680px]
    h-auto
    object-contain
    select-none
  "
/>

          </div>

        </div>

      </section>
      {/* ================= OVERVIEW SECTION ================= */}

<section className="bg-white py-20 lg:py-28">

  <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-20">

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

      {/* LEFT IMAGE */}

      <div className="flex justify-center">

        <img
          src="/assests/work 2.png"
          alt="Overview"
          className="
            w-full
            max-w-[320px]
            sm:max-w-[430px]
            md:max-w-[520px]
            lg:max-w-[600px]
            xl:max-w-[680px]
            h-auto
            object-contain
          "
        />

      </div>

      {/* RIGHT CONTENT */}
       

      <div>
        <p className="text-sm font-semibold tracking-[3px] uppercase text-black mb-5">
          01. Overview
        </p>

        <h2 className="text-black font-bold leading-tight text-4xl sm:text-5xl md:text-6xl">

          The First Fully

        </h2>

        <h2 className="text-black font-bold leading-tight text-4xl sm:text-5xl md:text-6xl mt-2">

          Editable 3D Visual

        </h2>

        <h2 className="text-black font-bold leading-tight text-4xl sm:text-5xl md:text-6xl mt-2">

          Design System.

        </h2>

        <p className="text-gray-500 text-base leading-8 mt-8">

          Effortlessly different elements to create comppelling compositions that will surly help you tell a better story for your lanfing pages,wwebsites, portfolios,presentations and more in just  matter of minutes.

        </p>

        <div className="mt-8 space-y-2">

          <h3 className="font-bold text-2xl text-black">
            🔥 The number of applications
          </h3>

          <h3 className="font-bold text-2xl text-black">
            and use cases is nearly endless.
          </h3>

        </div>

        {/* Feature Cards */}

        <div className="grid grid-cols-2 gap-6 mt-10">

          {/* Card 1 */}

          <div className="bg-white rounded-3xl shadow-lg border border-gray-200 p-6 hover:shadow-xl transition">

            <img
              src="/assests/interactive.png"
              alt=""
              className="w-full h-36 object-contain"
            />

            <h4 className="mt-6 text-xl font-bold text-[#0A2458] text-center">
              Fully Editable
            </h4>

          </div>

          {/* Card 2 */}

          <div className="bg-white rounded-3xl shadow-lg border border-gray-200 p-6 hover:shadow-xl transition">

            <img
              src="/assests/communication.png"
              alt=""
              className="w-full h-36 object-contain"
            />

            <h4 className="mt-6 text-xl font-bold text-[#0A2458] text-center">
              High Resolution
            </h4>

          </div>

        </div>

      </div>

    </div>

  </div>

</section>
{/* ====================== SECTION 02 ====================== */}

{/* ================= COMPLETE SECTION WITH BACKGROUND IMAGE ================= */}

<section
  className="
    work-section
    relative
    overflow-hidden
    py-20
    lg:py-28
  "
  style={{
    backgroundImage: "url('/assests/overview.png')",
  }}
>

  {/* Optional dark overlay */}
  <div className="absolute inset-0 bg-black/40"></div>


  <div className="relative z-10">


    {/* ======================= STATS SECTION ======================= */}

    <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-20">


      {/* Heading */}
      <div className="mb-24">

        <div className="flex items-center gap-4">

          <img
            src="/assests/logo 2.png"
            alt=""
            className="w-6 h-6 object-contain"
          />

          <p className="uppercase tracking-[4px] text-xs text-white/70">
            02.
          </p>

          <p className="text-white text-sm">
            Folio Agency
          </p>

        </div>


        <h2
          className="
          mt-5
          text-white
          font-bold
          leading-none
          text-4xl
          sm:text-5xl
          lg:text-6xl
          "
        >
          By the Numbers.
        </h2>

      </div>


      {/* Statistics */}

      <div
        className="
        grid
        grid-cols-1
        lg:grid-cols-2
        gap-24
        lg:gap-36
        "
      >


        {/* LEFT */}
        {/* LEFT */}

<div className="lg:pt-20">

  <h1
    className="
      text-white
      font-bold
      leading-none
      text-7xl
      sm:text-8xl
      lg:text-[120px]
    "
  >
    20
  </h1>


  <p className="mt-5 text-white font-semibold text-xl">
    Pre-build Scenes 🔥
  </p>


  <div className="w-full h-px bg-white/20 my-8"></div>


  <p className="text-white/70 leading-8 text-base max-w-sm">
    Bento is the first fully editable, 3D visual design system with global
    auto-updateable style guides built right in Figma.
  </p><br/>
  <button className="flex items-center gap-2 bg-folio-accent text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-all duration-300 shadow-lg">
  <FiDownload className="text-lg" />
  <span>Download</span>
</button>


</div>



        {/* RIGHT */}
        <div>

          <h1 className="
            text-white
            font-bold
            text-7xl
            sm:text-8xl
            lg:text-[120px]
          ">
            40
            <sup className="text-4xl">
              +
            </sup>
          </h1>


          <p className="mt-5 text-white font-semibold text-xl">
            Scene Objects
          </p>


          <div className="w-full h-px bg-white/20 my-8"></div>


          <p className="text-white/70 leading-8 max-w-sm">
            Bento is the first fully editable, 3D visual design system with global auto-updateable style guides built right in Figma.
          </p><br/>
          <button className="flex items-center gap-2 bg-folio-accent text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-all duration-300 shadow-lg">
            <FiDownload className="text-lg" />
            <span>Download</span>
            </button>
        </div>


      </div>

    </div>


<div className="max-w-5xl mx-auto px-6 mt-32">

  <div className="relative">

    {/* Horizontal Line */}
    <div
      className="
        absolute
        top-2
        left-0
        w-full
        h-[2px]
        bg-white/30
      "
    ></div>


    {/* Points */}

    <div className="relative flex justify-between">

      {/* Overview Point - Left End */}
      <div className="flex justify-start">
        <div className="
          w-4
          h-4
          rounded-full
          bg-[#6275FF]
        "></div>
      </div>


      {/* Features */}
      <div className="flex justify-center">
        <div className="
          w-4
          h-4
          rounded-full
          bg-white
        "></div>
      </div>


      {/* Highlights */}
      <div className="flex justify-center">
        <div className="
          w-4
          h-4
          rounded-full
          bg-white
        "></div>
      </div>


      {/* Compatibility Point - Right End */}
      <div className="flex justify-end">
        <div className="
          w-4
          h-4
          rounded-full
          bg-white
        "></div>
      </div>


    </div>



    {/* Text under points */}

    <div className="
      flex
      justify-between
      mt-8
    ">


      {/* Overview */}
      <div className="text-left">
        <h4 className="
          text-white
          font-semibold
          text-lg
        ">
          Overview
        </h4>
      </div>


      {/* Features */}
      <div className="text-center">
        <h4 className="
          text-white
          font-semibold
          text-lg
        ">
          Features
        </h4>
      </div>


      {/* Highlights */}
      <div className="text-center">
        <h4 className="
          text-white
          font-semibold
          text-lg
        ">
          Highlights
        </h4>
      </div>


      {/* Compatibility */}
      <div className="text-right">
        <h4 className="
          text-white
          font-semibold
          text-lg
        ">
          Compatibility
        </h4>
      </div>


    </div>


  </div>

</div>

  {/* Image Transition Section */}

<div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 mt-20">
  <div className="flex justify-center">
    <img
      src="/assests/overview 2.png"
      alt="Overview"
      className="
        w-full
        sm:w-[90%]
        md:w-[70%]
        lg:w-[60%]
        xl:w-[50%]
        h-auto
        object-contain
        rounded-3xl
        mx-auto
        select-none
      "
    />
  </div>
</div>



  </div>


</section>

<section
  className="
    min-h-screen
    bg-white
    py-20
    px-6
    md:px-12
    lg:px-20
  "
>

  <div
    className="
      max-w-7xl
      mx-auto
      grid
      grid-cols-1
      lg:grid-cols-2
      gap-16
      items-start
    "
  >


    {/* LEFT CONTENT */}

    <div>

      <p
        className="
          text-[#6275FF]
          uppercase
          tracking-[4px]
          text-xs
        "
      >
        03 Visual Identity
      </p>


      <h2
        className="
          mt-8
          text-black
          text-5xl
          md:text-6xl
          xl:text-7xl
          font-semibold
        "
      >
        Evolving the
      </h2>


      <h1
        className="
          text-black
          text-7xl
          md:text-8xl
          xl:text-[120px]
          font-bold
          leading-none
        "
      >
        look & feel
      </h1>


      <p
        className="
          mt-8
          text-[#1F1D47]
          leading-8
          max-w-lg
        "
      >
        Agency is a full-service agency,busy designing and building beautiful digital products,brands and experience.
      </p>
      <br/>

      <div className="mt-14">

        <h1
          className="
            text-[#6275FF]
            text-7xl
            md:text-8xl
            font-bold
          "
        >
          80+
        </h1>


        <p
          className="
            mt-4
            text-black
            text-2xl
            font-medium
          "
        >
          UI Elements
        </p>

      </div>


    </div>




    {/* RIGHT CARDS */}

    <div className="space-y-8">


      {/* CARD 1 */}

      <div
        className="
          flex
          items-center
          gap-6
          border
          border-white/20
          rounded-2xl
          p-5
          bg-white/5
        "
      >

        <img
          src="/assests/communication.png"
          alt=""
          className="
            w-32
            h-28
            rounded-xl
            object-cover
          "
        />


        <h3
          className="
            text-black
            text-xl
            font-semibold
          "
        >
          Auto-updating Global Styleguide
        </h3>


      </div>




      {/* CARD 2 */}

      <div
        className="
          flex
          items-center
          gap-6
          border
          border-white/20
          rounded-2xl
          p-5
          bg-white/5
        "
      >

        <img
          src="/assests/icon.png"
          alt=""
          className="
            w-32
            h-28
            rounded-xl
            object-cover
          "
        />


        <h3
          className="
            text-black
            text-xl
            font-semibold
          "
        >
          The number of applications and use cases is nearly endless
        </h3>


      </div>




      {/* CARD 3 */}

      <div
        className="
          flex
          items-center
          gap-6
          border
          border-white/20
          rounded-2xl
          p-5
          bg-white/5
        "
      >

        <img
          src="/assests/interactive.png"
          alt=""
          className="
            w-32
            h-28
            rounded-xl
            object-cover
          "
        />


        <h3
          className="
            text-black
            text-xl
            font-semibold
          "
        >
          Auto-updating Global Styleguide
        </h3>


      </div>




      {/* CONTACT BUTTON */}
<div className="flex justify-center mt-8">
  <button
    className="
      bg-[#6275FF]
      text-white
      px-8
      py-4
      rounded
      font-medium
    "
  >
    Contact Us
  </button>
</div>
      


    </div>


  </div>


</section>
{/* ======================= CALL TO ACTION SECTION ======================= */}

<section
  className="
    relative
    w-full
    min-h-[600px]
    sm:min-h-[700px]
    lg:min-h-screen
    bg-cover
    bg-center
    md:bg-center
    lg:bg-center
    bg-no-repeat
    flex
    items-center
  "
  style={{
    backgroundImage: "url('/assests/call.png')",
  }}
>

  {/* Content */}
  <div
    className="
      relative
      z-10
      w-full
      max-w-7xl
      mx-auto
      px-6
      sm:px-8
      md:px-12
      lg:px-20
      flex
      justify-center
      lg:justify-end
    "
  >
    <div
      className="
        w-full
        max-w-xl
        text-center
        lg:text-left
      "
    >
      <p className="text-white/70 uppercase tracking-[4px] text-xs sm:text-sm">
        05 Call to Action
      </p>

      <h2 className="mt-6 text-white font-semibold text-3xl sm:text-5xl lg:text-6xl leading-tight">
        Auto-updatable
      </h2>

      <h1 className="mt-2 text-white font-bold text-5xl sm:text-6xl lg:text-[90px] leading-none">
        Styleguide
      </h1>
      <br/>
      <br/>

      <button
        className="
          mt-10
          bg-white
          text-[#6275FF]
          px-8
          py-4
          rounded
          font-semibold
          hover:bg-gray-100
          transition
        "
      >
        Download Now
      </button>
    </div>
  </div>
</section>
{/* ======================= RECENT WORKS SECTION ======================= */}

<section className="bg-white py-24">

  <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">

    {/* Heading */}
    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">

      {/* Left */}
      <div>

        <p className="text-[#6275FF] uppercase tracking-[4px] text-xs font-medium">
          04 You may also like
        </p>

        <h2 className="mt-5 text-black text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
          Recent Works
        </h2>

        <p className="mt-6 text-gray-500 leading-8 max-w-xl">
        Agency is a full-service agency,busy designing and building beautiful digital products,brands and experience.

        </p>

      </div>


      {/* Right Arrow */}
      <div className="flex md:justify-end">

        <button
          className="
            w-14
            h-14
            rounded-full
            bg-[#6275FF]
            flex
            items-center
            justify-center
            hover:bg-[#5568f5]
            transition
          "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

      </div>

    </div>



    {/* Cards */}

    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">


      {/* Card 1 */}

      <div className="bg-white rounded-3xl overflow-hidden shadow-lg">

        <img
          src="/assests/bento 3D illustration.png"
          alt=""
          className="w-full h-72 object-contain bg-white"
        />

        <div className="p-8">

          <h3 className="text-black text-2xl font-semibold">
            Bento 3D Illustration
          </h3>

          <p className="mt-4 text-gray-500 leading-7">
          Agency is a full-service agency,busy designing and building beautiful digital products,brands and experience.

          </p>

        </div>

      </div>




      {/* Card 2 */}

      <div className="bg-white rounded-3xl overflow-hidden shadow-lg">

        <img
          src="/assests/bento vol 3.png"
          alt=""
          className="w-full h-72 object-contain bg-white"
        />

        <div className="p-8">

          <h3 className="text-black text-2xl font-semibold">
            Bento Vol 3.
          </h3>

          <p className="mt-4 text-gray-500 leading-7">
          
          Agency is a full-service agency,busy designing and building beautiful digital products,brands and experience.

          </p>

        </div>

      </div>


    </div>

  </div>

</section>
    <section
      className="relative min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/assests/footer.png')",
      }}
    >

      {/* Main Content */}
      <div className="relative z-10 flex flex-col justify-between min-h-screen px-6 sm:px-8 md:px-12 lg:px-20 xl:px-28 py-12">

        {/* ===================== TOP SECTION ===================== */}
        <div className="flex flex-col items-center text-center mt-10 sm:mt-14 md:mt-20">

          {/* Logo */}
          <img
            src="/assests/logo 3.png"
            alt="Logo"
            className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain"
          />

          {/* Small Heading */}
          <p className="mt-5 text-white uppercase tracking-[3px] text-xs sm:text-sm font-medium">
            
            👋 Say Hello
          </p>

          {/* Description */}
          <p className="mt-5 max-w-xl text-white/90 text-lg sm:text-xl md:text-2xl leading-relaxed">
            A design team building a curated marketplace for UI designers.
          </p>
        </div>

        {/* ===================== BOTTOM SECTION ===================== */}
        <div className="mt-auto pb-10 sm:pb-14 lg:pb-20">
  <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10">

    {/* Left Side */}
    <div>
      <h2 className="text-white font-bold leading-none text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
        Let's talk
      </h2>

      <h2 className="text-white font-bold leading-none mt-2 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
        about your
      </h2>

      <h2 className="text-white font-bold leading-none mt-2 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
        next project
      </h2>
    </div>

    {/* Right Side */}
    <div className="flex items-center gap-5 lg:gap-6 self-start lg:self-end">

      <div className="text-right">
        <h3 className="text-white text-xl sm:text-2xl font-semibold">
          Invest in your designs
        </h3>

        <p className="text-white/90 text-lg sm:text-xl mt-1">
          today!
        </p>
      </div>

      <button className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white flex items-center justify-center hover:scale-110 transition-all duration-300">
        <svg
          className="w-6 h-6 text-black"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

    </div>

  </div>
</div>
      </div>
    </section>
        <footer className="bg-white py-14 sm:py-16 lg:py-20">

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

          <Link to="/#whoarewe" onClick={() => setMenuOpen(false)}>
  About
</Link>

      <Link
        to="/work"
        className="text-gray-500 hover:text-black transition"
      >
        Work
      </Link>


      <Link to="/#whatwedo" onClick={() => setMenuOpen(false)}>
        Services
      </Link>

      <Link to="/#wearehiring" onClick={() => setMenuOpen(false)}>
        Jobs
      </Link>

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
    </div>
  );
};

export default Work;