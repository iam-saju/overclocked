import CountdownTimer from './CountdownTimer';
import { Download, Users } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-200 via-yellow-300 to-red-400"></div>

      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-72 h-72 bg-[#00ff9d] rounded-full filter blur-[128px] animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#00d9ff] rounded-full filter blur-[128px] animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#ff006e] rounded-full filter blur-[128px] animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center min-h-screen">
        <div className="mb-4 flex flex-col items-center relative">
          <div className="mb-1 flex justify-center relative">
            <img 
              src="/WhatsApp_Image_2025-09-27_at_1.07.09_PM-removebg-preview.png" 
              alt="OVERCLOCKED" 
              className="w-full max-w-2xl h-auto filter drop-shadow-[0_0_20px_rgba(0,255,157,0.5)]"
              onError={(e) => {
                console.log('Image failed to load:', e);
                e.currentTarget.style.display = 'none';
              }}
              onLoad={() => console.log('Image loaded successfully')}
            />
            {/* Absolute positioned text under logo */}

          </div>
          <h2 className="text-lg sm:text-xl md:text-2xl font-black text-gray-800 mb-4 text-center gaming-font">
            INTRODUCING KERALA🌴'S LARGEST 24HR CTF EVENT TILL NOW
          </h2>
          <div className="flex flex-wrap justify-center gap-3 md:gap-6 text-gray-800 text-sm md:text-base gaming-font mb-4">
            <span className="flex items-center gap-2 px-4 py-2 bg-white/90 rounded border-2 border-orange-400 font-bold shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300 cursor-pointer">
              <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></span>
              24 HOURS
            </span>
            <span className="flex items-center gap-2 px-4 py-2 bg-white/90 rounded border-2 border-yellow-400 font-bold shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300 cursor-pointer">
              <span className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></span>
              200+ PLAYERS
            </span>
            <span className="flex items-center gap-2 px-4 py-2 bg-white/90 rounded border-2 border-red-400 font-bold shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300 cursor-pointer">
              <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
              100+ CHALLENGES
            </span>
          </div>
        </div>

        <CountdownTimer />

        <div className="mt-4 flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="#register"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#register')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="group relative px-6 py-3 bg-orange-500 text-white font-bold rounded-lg overflow-hidden transition-all duration-300 hover:scale-110 hover:shadow-[0_0_30px_rgba(249,115,22,0.8)] hover:bg-orange-600 flex items-center justify-center gap-2 gaming-font transform hover:rotate-1"
          >
            <Users size={16} />
            <span>REGISTER NOW</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
          </a>

          <button
            className="group relative px-6 py-3 bg-transparent border-2 border-red-500 text-red-500 font-bold rounded-lg overflow-hidden transition-all duration-300 hover:bg-red-500 hover:text-white hover:scale-110 hover:shadow-[0_0_30px_rgba(239,68,68,0.8)] flex items-center justify-center gap-2 gaming-font transform hover:-rotate-1"
          >
            <Download size={16} />
            <span>DOWNLOAD BROCHURE</span>
          </button>
        </div>

      </div>
    </section>
  );
}
