const Partnership = () => {
  return (
    <div id="partnership" className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50 relative overflow-hidden">
      
      {/* Section Header */}
      <div className="px-6 md:px-12 lg:px-20 pt-12 md:pt-16 lg:pt-24">
        <div className="flex items-center justify-between mb-6">

  {/* Left Side */}
  <div className="flex items-center space-x-4">
    <img
      src="/assests/logo.png"
      alt="Logo"
      className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain"
    />

    <span className="text-folio-accent font-semibold text-sm md:text-base">
      04. Our Partnerships
    </span>
  </div>

  {/* Right Side */}
  <button className="bg-folio-accent text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-all duration-300 shadow-lg">
    Contact Us
  </button>

</div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight mb-4 text-center">
          Our Partnerships
        </h2>
        <p className="text-gray-600 text-base lg:text-lg xl:text-xl  leading-tight mb-4 text-center">
         Agency is a full-service agency,busy designing and building<br/>beautiful digital products,brands and experiences.
        </p>
      </div>

      {/* Partnership Cards - Zig-Zag Layout */}
      <div className="px-6 md:px-12 lg:px-20 py-8 md:py-12">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Sapiens Card */}
          <div className="w-full md:w-[500px] aspect-square bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-all ml-0">
            <div className="w-full md:w-1/2">
              <div className="flex justify-between items center mb-5">
                <span className="inline-flex items-center justify-center bg-purple-600 text-white px-4 py-2 rounded-full text-xs font-semibold text-center">
                  Featured Product
                  </span>
                <button className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-200 transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Sapiens:The Free Character Builder App.
              </h3>
              </div>
              <div className="flex justify-center items-center h-[220px] mb-6">
              <img 
                src="/assests/sapiens.png" 
                alt="Sapiens" 
                className="max-w-full max-h-full object-contain"
              />
            </div>
            <p className="text-gray-600 text-sm leading-6">
    Beautiful library of modular, component-based character illustrations
    free to use for all your personal or client projects.
  </p>
          </div>

          {/* Bento Vol 2 */}
          <div className="w-full md:w-[500px] aspect-square bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-all ml-auto">

  {/* Heading + Arrow */}
  <div className="flex items-start justify-between mb-6">
    <h3 className="text-2xl font-bold text-gray-900">
      Bento Vol. 2
    </h3>

    <button className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-200 transition-colors">
      <svg
        className="w-4 h-4"
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

  {/* Image */}
  <div className="flex justify-center items-center h-[250px] mb-6">
    <img
      src="/assests/bento vol 2.png"
      alt="Bento Vol. 2"
      className="max-w-full max-h-full object-contain"
    />
  </div>

  {/* Paragraph */}
  <p className="text-gray-600 text-sm leading-6">
    Agency is a full-service agency, busy designing and building beautiful
    digital products, brands and experiences.
  </p>

</div>

          {/* Bento 3D Illustration */}
          <div className="w-full md:w-[500px] aspect-square bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-all ml-0">

  {/* Heading + Arrow */}
  <div className="flex items-start justify-between mb-6">
    <h3 className="text-2xl font-bold text-gray-900">
      Bento 3D Illustration
    </h3>

    <button className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-200 transition-colors">
      <svg
        className="w-4 h-4"
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

  {/* Image */}
  <div className="flex justify-center items-center h-[250px] mb-6">
    <img
      src="/assests/bento 3D illustration.png"
      alt="Bento 3D Illustration"
      className="max-w-full max-h-full object-contain"
    />
  </div>

  {/* Paragraph */}
  <p className="text-gray-600 text-sm leading-6">
    Agency is a full-service agency, busy designing and building beautiful
    digital products, brands and experiences.
  </p>

</div>

          {/* Bento Vol 3 */}
          <div className="w-full md:w-[500px] aspect-square bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-all ml-auto">

  {/* Heading + Arrow */}
  <div className="flex items-start justify-between mb-6">
    <h3 className="text-2xl font-bold text-gray-900">
      Bento Vol. 3
    </h3>

    <button className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-200 transition-colors">
      <svg
        className="w-4 h-4"
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

  {/* Image */}
  <div className="flex justify-center items-center h-[250px] mb-6">
    <img
      src="/assests/bento vol 3.png"
      alt="Bento Vol. 3"
      className="max-w-full max-h-full object-contain"
    />
  </div>

  {/* Paragraph */}
  <p className="text-gray-600 text-sm leading-6">
    Agency is a full-service agency, busy designing and building beautiful
    digital products, brands and experiences.
  </p>

</div>

          {/* Sapiens Man */}
          <div className="w-full md:w-[500px] aspect-square bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-all ml-0">

  {/* Heading + Arrow */}
  <div className="flex items-start justify-between mb-6">
    <h3 className="text-2xl font-bold text-gray-900">
      Sapiens: Man
    </h3>

    <button className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-200 transition-colors">
      <svg
        className="w-4 h-4"
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

  {/* Image */}
  <div className="flex justify-center items-center h-[250px] mb-6">
    <img
      src="/assests/sapiens 2.png"
      alt="Sapiens: Man"
      className="max-w-full max-h-full object-contain"
    />
  </div>

  {/* Paragraph */}
  <p className="text-gray-600 text-sm leading-6">
    Agency is a full-service agency, busy designing and building beautiful
    digital products, brands and experiences.
  </p>

</div>
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        <div className="w-3 h-3 rounded-full bg-gray-300"></div>
        <div className="w-3 h-3 rounded-full bg-gray-300"></div>
        <div className="w-3 h-3 rounded-full bg-gray-300"></div>
        <div className="w-3 h-3 rounded-full bg-folio-accent"></div>
        <div className="w-3 h-3 rounded-full bg-gray-300"></div>
      </div>
    </div>
  )
}

export default Partnership
