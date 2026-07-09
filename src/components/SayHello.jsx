import React from "react";

const SayHello = () => {
  return (
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
  );
};

export default SayHello;