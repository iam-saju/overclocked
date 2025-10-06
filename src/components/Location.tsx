export default function Location() {
  return (
    <section id="location" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-black via-gray-900 to-red-900 relative">
      {/* Background effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-10 w-96 h-96 bg-red-600 rounded-full filter blur-[150px] opacity-15 animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gray-800 rounded-full filter blur-[150px] opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-72 h-72 bg-red-700 rounded-full filter blur-[150px] opacity-10 animate-pulse delay-500"></div>
        <div className="absolute bottom-1/4 left-1/2 w-64 h-64 bg-gray-700 rounded-full filter blur-[150px] opacity-15 animate-pulse delay-700"></div>

        {/* Retro grid pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `repeating-linear-gradient(0deg, #000 0px, #000 1px, transparent 1px, transparent 20px),
                            repeating-linear-gradient(90deg, #000 0px, #000 1px, transparent 1px, transparent 20px)`,
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black text-white mb-4 sm:mb-5 md:mb-6 gaming-font">
            <span className="text-red-400">[</span>EVENT LOCATION<span className="text-red-400">]</span>
          </h2>
          <div className="w-24 sm:w-32 md:w-40 h-1 bg-gradient-to-r from-red-400 to-red-600 rounded-full mx-auto"></div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-center">
          {/* Left Side - Venue Information */}
          <div className="space-y-4 sm:space-y-6 md:space-y-8">
            {/* Venue Card */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-red-600/20 rounded-xl sm:rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative bg-gradient-to-br from-gray-900/95 to-black/95 border-2 border-red-500/60 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-2xl">
                {/* Header */}
                <div className="flex items-center mb-4 sm:mb-5 md:mb-6">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gradient-to-br from-red-500 to-red-700 rounded-xl sm:rounded-2xl flex items-center justify-center mr-3 sm:mr-4 md:mr-6 shadow-lg flex-shrink-0">
                    <span className="text-2xl sm:text-2xl md:text-3xl">🏛️</span>
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-black text-white gaming-font">VENUE</h3>
                    <div className="w-12 sm:w-14 md:w-16 h-1 bg-gradient-to-r from-red-400 to-red-600 rounded-full mt-1 sm:mt-1.5 md:mt-2"></div>
                  </div>
                </div>
                
                {/* Venue Details */}
                <div className="space-y-2 sm:space-y-3 md:space-y-4">
                  <h4 className="text-sm sm:text-base md:text-lg lg:text-xl font-black text-red-200 gaming-font">RAJAGIRI SCHOOL OF ENGINEERING & TECHNOLOGY</h4>
                  <div className="space-y-1 sm:space-y-1.5 md:space-y-2">
                    <p className="text-red-300 text-xs sm:text-sm md:text-base lg:text-lg gaming-font font-bold">📍 RAJAGIRI VALLEY</p>
                    <p className="text-red-400 text-xs sm:text-sm md:text-base gaming-font">🏙️ KAKKANAD, KERALA, INDIA</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
              <a 
                href="https://www.google.com/maps/search/?api=1&query=Rajagiri+School+of+Engineering+&+Technology,+Rajagiri+Valley,+Kakkanad,+Kerala,+India"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex-1 inline-flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 bg-gradient-to-r from-red-600 to-red-700 text-white font-black rounded-lg hover:from-red-500 hover:to-red-600 hover:scale-105 transition-all duration-300 gaming-font text-xs sm:text-sm shadow-lg border border-red-400 hover:border-red-300"
              >
                <span className="text-base sm:text-lg">🗺️</span>
                <span className="whitespace-nowrap">OPEN IN GOOGLE MAPS</span>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-red-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              <button className="group relative flex-1 inline-flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 bg-gradient-to-r from-gray-700 to-gray-800 text-white font-black rounded-lg hover:from-gray-600 hover:to-gray-700 hover:scale-105 transition-all duration-300 gaming-font text-xs sm:text-sm shadow-lg border border-gray-500 hover:border-gray-400">
                <span className="text-base sm:text-lg">📋</span>
                <span className="whitespace-nowrap">COPY ADDRESS</span>
              </button>
            </div>
          </div>

          {/* Right Side - Map Preview */}
          <div className="relative">
            {/* Map Container */}
            <div className="relative bg-gradient-to-br from-gray-800 to-black rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl border-2 border-red-500/50">
              {/* Map Preview */}
              <div className="relative h-64 sm:h-80 md:h-96 bg-gradient-to-br from-gray-700 to-gray-900">
                {/* Map Placeholder with Google Maps Embed */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.8!2d76.3!3d10.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d8b8b8b8b8b%3A0x8b8b8b8b8b8b8b8b!2sRajagiri%20School%20of%20Engineering%20%26%20Technology!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-2xl"
                ></iframe>
                
                {/* Overlay with Venue Info */}
                <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-sm rounded-lg p-3 border border-red-500/50">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                    <span className="text-white text-sm font-bold gaming-font">EVENT VENUE</span>
                  </div>
                </div>
              </div>
              
              {/* Map Controls Overlay */}
              <div className="absolute bottom-4 right-4 flex gap-2">
                <button className="w-10 h-10 bg-black/80 backdrop-blur-sm rounded-lg flex items-center justify-center text-white hover:bg-red-500/80 transition-colors duration-300">
                  <span className="text-lg">🔍</span>
                </button>
                <button className="w-10 h-10 bg-black/80 backdrop-blur-sm rounded-lg flex items-center justify-center text-white hover:bg-red-500/80 transition-colors duration-300">
                  <span className="text-lg">📍</span>
                </button>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-red-500 rounded-full animate-pulse"></div>
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-red-500 rounded-full animate-pulse delay-300"></div>
            <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-red-500 rounded-full animate-pulse delay-600"></div>
            <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-red-500 rounded-full animate-pulse delay-900"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
