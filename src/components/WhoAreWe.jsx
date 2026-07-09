const WhoAreWe = () => {
  return (
    <div
  id="whoarewe"
  className="
    min-h-screen
    relative
    overflow-hidden
    bg-cover
    bg-center
    bg-no-repeat
  "
  style={{
    backgroundImage: "url('/assests/overview.png')",
  }}
>
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

      {/* Section Header */}
      <div className="px-6 md:px-12 lg:px-20 pt-12 md:pt-16 lg:pt-24 text-center">
        <img
      src="/assests/logo 2.png"
      alt="Logo"
      className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain"
    />
        <div className="flex items-center justify-center space-x-4 mb-4">
          <span className="text-folio-accent font-semibold text-sm md:text-base text-white">01 Who We Are</span>
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-8">
          We Make Designs that<br />Lead and Inspire.
        </h2>
      </div>
      {/* Main Content */}
      <div className="flex flex-col lg:flex-row items-center justify-between px-6 md:px-12 lg:px-20 py-8 md:py-12">
         <div className="flex md:flex-col justify-between md:justify-start gap-8 sm:gap-12 md:gap-8">

  <span className="text-white/60 text-lg font-medium">
    2017
  </span>

  <span className="text-white/60 text-lg font-medium">
    2018
  </span>

  <span className="text-white/60 text-lg font-medium">
    2019
  </span>

  <span className="text-white text-xl font-bold">
    2020
  </span>

  <span className="text-white/60 text-lg font-medium">
    2021
  </span>

</div>

        {/* Right - Image */}
        <div className="lg:w-2/3 relative flex justify-center">
          <img 
            src="/assests/views.png" 
            alt="Views" 
            className="w-full max-w-5xl h-auto object-contain relative z-10"

          />
        </div>
      </div>

      {/* Bottom Content */}
      <div className="flex flex-col lg:flex-row items-center justify-between px-6 md:px-12 lg:px-20 pb-12 md:pb-16 lg:pb-24">
        <div className="lg:w-2/3 mb-8 lg:mb-0">
          <p className="text-white text-base md:text-xl lg:text-xl mb-6 leading-relaxed">
            A design team building a curated marketplace for UI designers
          </p>
          <p className="text-gray-300 text-base md:text-sm lg:text-base mb-6 leading-relaxed">
            4,404 curated design resources to evergize your creative workflow. We're a growing family 334,531 designers and makers from around the world.
          </p><br/>
          <a href="#section3" className="inline-block bg-folio-accent text-white px-8 py-4 rounded text-base font-semibold hover:bg-purple-600 transition-all transform hover:scale-105 shadow-lg shadow-purple-500/30">
            Contact Us
          </a>
        </div>
        <div className="lg:w-1/3 text-center lg:text-right">
          <div className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-2 ">28</div>
          <div className="text-white/80 text-lg md:text-xl font-medium">Biggest Branding</div>
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        <div className="w-3 h-3 rounded-full bg-white/30"></div>
        <div className="w-3 h-3 rounded-full bg-folio-accent"></div>
        <div className="w-3 h-3 rounded-full bg-white/30"></div>
        <div className="w-3 h-3 rounded-full bg-white/30"></div>
        <div className="w-3 h-3 rounded-full bg-white/30"></div>
      </div>
    </div>
  )
}

export default WhoAreWe
