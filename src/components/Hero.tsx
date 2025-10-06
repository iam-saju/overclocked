import CountdownTimer from './CountdownTimer';
import { Download, Users } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-red-900"></div>

      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-20 left-20 w-72 h-72 bg-red-600 rounded-full filter blur-[128px] animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gray-800 rounded-full filter blur-[128px] animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-red-700 rounded-full filter blur-[128px] animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center min-h-screen">
        <div className="mb-4 sm:mb-6 flex flex-col items-center relative w-full">
          {/* SME Labs Logo at Top */}
          <div className="mb-2 sm:mb-3 flex flex-col items-center">
            <img 
              src="/smeclabs (1).png" 
              alt="SME Labs" 
              className="h-6 sm:h-8 w-auto filter brightness-110"
              loading="lazy"
              onError={(e) => {
                console.log('SME Labs logo failed to load:', e);
                e.currentTarget.style.display = 'none';
              }}
            />
          </div>

          {/* PRESENTS Text */}
          <p className="text-white text-[0.5rem] sm:text-xs gaming-font font-bold mb-3 sm:mb-4">PRESENTS</p>

          {/* Main OVERCLOCKED Title */}
          <div className="mb-4 sm:mb-6 flex flex-col items-center w-full px-2 sm:px-4">
            <div className="mb-3 sm:mb-4 flex justify-center relative w-full">
              <img 
                src="/overclocked_light.svg" 
                alt="OVERCLOCKED" 
                className="w-full max-w-xs sm:max-w-md md:max-w-2xl h-auto filter drop-shadow-[0_0_20px_rgba(220,38,38,0.6)]"
                loading="eager"
                onError={(e) => {
                  console.log('Image failed to load:', e);
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
            <h2 className="text-[0.6rem] sm:text-sm md:text-base lg:text-lg font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-red-400 to-pink-400 text-center gaming-font drop-shadow-lg px-2">
              KERALA🌴'S LARGEST 24HR CTF EVENT
            </h2>
          </div>
          
          {/* Co-Presented By Section */}
          <div className="mb-2 sm:mb-3">
            <p className="text-white text-[0.5rem] sm:text-xs gaming-font font-bold mb-2 sm:mb-3">CO-PRESENTED BY</p>
            <div className="flex items-center justify-center gap-4 sm:gap-6 opacity-80 hover:opacity-100 transition-opacity duration-300 mb-2">
              <img 
                src="/de813b6e-196c-469e-a3fe-5c00d3f9b6e4__1_-removebg-preview (1).png" 
                alt="ARTICON" 
                className="h-6 sm:h-8 w-auto filter brightness-110"
                loading="lazy"
                onError={(e) => {
                  console.log('ARTICON logo failed to load:', e);
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2 md:gap-3 text-white text-[0.5rem] sm:text-xs md:text-sm gaming-font mb-2 sm:mb-3 px-2">
            <span className="flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1.5 sm:py-2 bg-gradient-to-r from-red-500 to-red-600 rounded-lg border border-red-300 font-black shadow-lg hover:scale-105 hover:shadow-yellow-400/40 transition-all duration-300 cursor-pointer group hover:from-yellow-400 hover:to-orange-500">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-yellow-400 rounded-full animate-pulse group-hover:bg-yellow-300"></span>
              <span className="text-white group-hover:text-yellow-100 transition-colors duration-300">24 HOURS</span>
            </span>
            <span className="flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1.5 sm:py-2 bg-gradient-to-r from-red-600 to-red-700 rounded-lg border border-red-400 font-black shadow-lg hover:scale-105 hover:shadow-green-400/40 transition-all duration-300 cursor-pointer group hover:from-green-500 hover:to-emerald-600">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 rounded-full animate-pulse group-hover:bg-green-300"></span>
              <span className="text-white group-hover:text-green-100 transition-colors duration-300">200+ PLAYERS</span>
            </span>
            <span className="flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1.5 sm:py-2 bg-gradient-to-r from-red-700 to-red-800 rounded-lg border border-red-500 font-black shadow-lg hover:scale-105 hover:shadow-blue-400/40 transition-all duration-300 cursor-pointer group hover:from-blue-500 hover:to-cyan-600">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-400 rounded-full animate-pulse group-hover:bg-blue-300"></span>
              <span className="text-white group-hover:text-blue-100 transition-colors duration-300">100+ CHALLENGES</span>
            </span>
          </div>

          {/* Gap before countdown timer */}
          <div className="mb-6 sm:mb-8 md:mb-12"></div>

          <CountdownTimer />
        </div>

        <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center w-full px-4 sm:px-0">
          <a
            href="#register"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#register')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="group relative px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-red-500 to-red-600 text-white font-black rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(239,68,68,0.6)] hover:from-red-400 hover:to-red-500 flex items-center justify-center gap-1.5 sm:gap-2 gaming-font text-xs sm:text-sm border border-red-300 hover:border-red-200 shadow-lg"
          >
            <Users size={12} className="sm:w-[14px] sm:h-[14px]" />
            <span>REGISTER NOW</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
          </a>

          <button
            className="group relative px-4 sm:px-6 py-2.5 sm:py-3 bg-transparent border border-red-400 text-red-300 font-black rounded-lg overflow-hidden transition-all duration-300 hover:bg-gradient-to-r hover:from-red-500 hover:to-red-600 hover:text-white hover:scale-105 hover:shadow-[0_0_20px_rgba(239,68,68,0.6)] flex items-center justify-center gap-1.5 sm:gap-2 gaming-font text-xs sm:text-sm shadow-lg hover:border-red-300"
          >
            <Download size={12} className="sm:w-[14px] sm:h-[14px]" />
            <span>DOWNLOAD BROCHURE</span>
          </button>
        </div>

      </div>
    </section>
  );
}
