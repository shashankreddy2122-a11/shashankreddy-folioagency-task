const WhatWeDo = () => {
  return (
    <div id="whatwedo" className="min-h-screen bg-gradient-to-br from-gray-50 via-purple-50 to-gray-100 relative overflow-hidden">
      {/* Navigation Arrows */}
      <div className="absolute top-8 right-6 md:right-12 lg:right-20 flex space-x-4 z-20">
        <button className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-colors">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-colors">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Section Header */}
      <div className="px-6 md:px-12 lg:px-20 pt-12 md:pt-16 lg:pt-24">
        <div className="flex items-center space-x-4 mb-4">
          <img
      src="/assests/logo.png"
      alt="Logo"
      className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain"
    />
          <span className="text-folio-accent font-semibold text-sm md:text-base">02. What We Do</span>
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-black leading-tight mb-8">
          We Make Designs that<br />Lead and Inspire.
        </h2>
      </div>

      {/* Services Images */}
      <div className="px-6 md:px-12 lg:px-20 py-8 md:py-12">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

    {/* Strategy */}
    <div className="bg-gray-50 rounded-2xl p-4 hover:shadow-lg hover:shadow-purple-500/30 transition-all cursor-pointer flex items-center gap-4 md:flex-col">
      <img
        src="/assests/strategy.png"
        alt="Strategy"
        className="w-24 h-24 sm:w-28 sm:h-28 md:w-full md:h-auto object-contain flex-shrink-0"
      />
      <h3 className="text-folio-accent font-semibold text-lg md:text-center">
        Strategy
      </h3>
    </div>

    {/* Branding */}
    <div className="bg-gray-50 rounded-2xl p-4 hover:shadow-lg hover:shadow-purple-500/30 transition-all cursor-pointer flex items-center gap-4 md:flex-col">
      <img
        src="/assests/branding.png"
        alt="Branding"
        className="w-24 h-24 sm:w-28 sm:h-28 md:w-full md:h-auto object-contain flex-shrink-0"
      />
      <h3 className="text-folio-accent font-semibold text-lg md:text-center">
        Branding
      </h3>
    </div>

    {/* Interactive */}
    <div className="bg-gray-50 rounded-2xl p-4 hover:shadow-lg hover:shadow-purple-500/30 transition-all cursor-pointer flex items-center gap-4 md:flex-col">
      <img
        src="/assests/interactive.png"
        alt="Interactive"
        className="w-24 h-24 sm:w-28 sm:h-28 md:w-full md:h-auto object-contain flex-shrink-0"
      />
      <h3 className="text-folio-accent font-semibold text-lg md:text-center">
        Interactive
      </h3>
    </div>

    {/* Communication */}
    <div className="bg-gray-50 rounded-2xl p-4 hover:shadow-lg hover:shadow-purple-500/30 transition-all cursor-pointer flex items-center gap-4 md:flex-col">
      <img
        src="/assests/communication.png"
        alt="Communication"
        className="w-24 h-24 sm:w-28 sm:h-28 md:w-full md:h-auto object-contain flex-shrink-0"
      />
      <h3 className="text-folio-accent font-semibold text-lg md:text-center">
        Communication
      </h3>
    </div>

  </div>
</div>

      {/* Achievement Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between px-6 md:px-12 lg:px-20 py-8 md:py-12">
        {/* Left - Achievement Image */}
        <div className="lg:w-1/2 mb-12 lg:mb-0 relative flex justify-center">
          <img 
            src="/assests/achievement.png" 
            alt="Achievement" 
            className="w-full max-w-xs md:max-w-sm h-auto object-contain relative z-10"
          />
        </div>

        {/* Right - Achievement Stats */}
        <div className="lg:w-1/2">
          <div className="flex items-center space-x-4 mb-4">
            <img
      src="/assests/logo.png"
      alt="Logo"
      className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain"
    />
            <span className="text-folio-accent font-semibold text-sm md:text-base text-gray-700 text-base">03. Achievement</span>
          </div>
          <p className="text-gray-700 text-base md:text-lg lg:text-xl mb-8 leading-relaxed font-extrabold">
            A design team building a curated marketplace for UI designers.
          </p><br/>
          <div className="flex items-end space-x-4 mb-2">
            <div className="text-6xl md:text-7xl lg:text-8xl font-bold text-folio-accent">68</div>
          </div><br/>
          <div className="text-gray-800 text-lg md:text-xl font-extrabold">😎 Successful Projects</div>
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        <div className="w-3 h-3 rounded-full bg-gray-300"></div>
        <div className="w-3 h-3 rounded-full bg-gray-300"></div>
        <div className="w-3 h-3 rounded-full bg-folio-accent"></div>
        <div className="w-3 h-3 rounded-full bg-gray-300"></div>
        <div className="w-3 h-3 rounded-full bg-gray-300"></div>
      </div>
    </div>
  )
}

export default WhatWeDo
