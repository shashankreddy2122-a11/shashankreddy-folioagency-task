const WeAreHiring = () => {
  return (
    
    <div id="wearehiring" className="min-h-screen bg-gradient-to-br bg-colour-white relative overflow-hidden">
      {/* Navigation Arrows */}
      <div className="absolute top-8 right-6 md:right-12 lg:right-20 flex space-x-4 z-20">
        <button className="w-12 h-12 rounded-full border-2 border-white/30 flex items-center justify-center text-white hover:bg-white/10 transition-colors">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button className="w-12 h-12 rounded-full border-2 border-white/30 flex items-center justify-center text-white hover:bg-white/10 transition-colors">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
      {/* Main Content */}
<div className="px-6 md:px-12 lg:px-20 py-12">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

    {/* Left Side */}
    <div>
      <div className="flex items-center space-x-4 mb-4">
        <img
      src="/assests/logo.png"
      alt="Logo"
      className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain"
    />

        <span className="text-folio-accent font-semibold text-sm md:text-base">
          05. We Are Hiring
        </span>
      </div>

      <h2 className="text-3xl md:text-4xl lg:text-8xl font-bold text-black leading-tight mb-4">
        Jobs
      </h2>
      <br/>
      <p className="text-gray-500 text-base md:text-lg lg:text-xl leading-relaxed max-w-xl">
        Agency is a full-service gency,busy designing and building beautiful digital products,brands,and experience.
      </p>
      <br/>
      <p className="text-gray-500">Available Jobs</p>
    </div>

    {/* Right Side Cards */}
    <div className="flex flex-col gap-5">

      {/* Card 1 */}
      <div className="bg-white/5 border border-black rounded-2xl backdrop-blur-md p-6 hover:bg-white/10 transition-all duration-300">
        <h3 className="text-black text-2xl font-bold">
          Graphic Designer
        </h3>

        <p className="text-gray-500 text-sm mt-2">
          2 Years Experience
        </p>

        <div className="mt-5">
          <button className="w-11 h-11 rounded-full border border-white/40 flex items-center justify-center hover:bg-folio-accent transition">
            <svg
              className="w-5 h-5 text-white"
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

      {/* Card 2 */}
      <div className="bg-[#0F172A] rounded-2xl p-6 flex justify-between items-center hover:bg-[#1E293B] transition duration-300">

        <div>
          <h3 className="text-white text-2xl font-bold">
            Visual Designer
          </h3>

          <p className="text-gray-500 text-sm mt-2">
            2 Years Experience
          </p>

          <div className="mt-5">
            <button className="w-11 h-11 rounded-full border border-white/40 flex items-center justify-center hover:bg-folio-accent transition">
              <svg
                className="w-5 h-5 text-white"
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

        {/* Replace with your own image */}
        <img
          src="/assests/join.png"
          alt="Visual Designer"
          className="w-24 h-24 rounded-xl object-cover"
        />
      </div>

      {/* Card 3 */}
      <div className="bg-white/5 border border-black rounded-2xl backdrop-blur-md p-6 hover:bg-white/10 transition-all duration-300">
        <h3 className="text-black text-2xl font-bold">
          Art Director
        </h3>

        <p className="text-gray-500 text-sm mt-2">
          2 Years Experience
        </p>

        <div className="mt-5">
          <button className="w-11 h-11 rounded-full border border-white/40 flex items-center justify-center hover:bg-folio-accent transition">
            <svg
              className="w-5 h-5 text-white"
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

      {/* Card 4 */}
      <div className="bg-white/5 border border-black rounded-2xl backdrop-blur-md p-6 hover:bg-white/10 transition-all duration-300">
        <h3 className="text-black text-2xl font-bold">
          Web Designer
        </h3>

        <p className="text-gray-500 text-sm mt-2">
          2 Years Experience
        </p>

        <div className="mt-5">
          <button className="w-11 h-11 rounded-full border border-white/40 flex items-center justify-center hover:bg-folio-accent transition">
            <svg
              className="w-5 h-5 text-white"
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
</div>

      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        <div className="w-3 h-3 rounded-full bg-white/30"></div>
        <div className="w-3 h-3 rounded-full bg-white/30"></div>
        <div className="w-3 h-3 rounded-full bg-white/30"></div>
        <div className="w-3 h-3 rounded-full bg-white/30"></div>
        <div className="w-3 h-3 rounded-full bg-folio-accent"></div>
      </div>
    </div>
  )
}

export default WeAreHiring
