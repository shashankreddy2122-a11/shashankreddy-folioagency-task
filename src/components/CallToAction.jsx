import React from "react";

const CallToAction = () => {
  return (
    <div
       className="relative w-full pt-[80px]">
      <img
        src= "/assests/calltoaction.png"
        alt=""
        className="absolute inset-0 w-full h-full object-cover object-center"
        />
      {/* Optional Dark Overlay */}
      <div className="absolute inset-0 bg-white/20"></div>

      <div className="relative z-10 max-w-7xl mx-auto w-full px-5 sm:px-8 md:px-12 lg:px-20 py-16 sm:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-20">

          {/* LEFT SIDE IMAGE */}
          <div className="flex justify-center lg:justify-start order-1">
            <img
              className="
                w-full
                max-w-[260px]
                sm:max-w-[330px]
                md:max-w-[420px]
                lg:max-w-[500px]
                xl:max-w-[560px]
                h-auto
                object-contain
                select-none
              "
            />
          </div>

          {/* RIGHT SIDE CONTENT */}
          <div className="order-2 text-center lg:text-left">
             
            <p className="text-white uppercase tracking-[4px] text-xs sm:text-sm md:text-base font-semibold mb-5">
              05. Call To Action
            </p>

            <h1 className="text-white font-bold leading-none text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
              We Are
            </h1>

            <h1 className="text-white font-bold leading-none mt-2 sm:mt-3 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
              Looking for
            </h1>

            <h1 className="text-white font-bold leading-none mt-2 sm:mt-3 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
              Talented
            </h1>

            <h1 className="text-white font-bold leading-none mt-2 sm:mt-3 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
  Designers
</h1>

{/* Apply Now Button */}
<div className="mt-8 sm:mt-10">
  <button className="px-8 py-3 sm:px-10 sm:py-4 bg-white text-black font-semibold text-base sm:text-lg rounded hover:bg-gray-200 transition-all duration-300 hover:scale-105 shadow-lg">
    Apply Now
  </button>
</div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;