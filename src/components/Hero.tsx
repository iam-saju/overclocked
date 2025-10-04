import CountdownTimer from './CountdownTimer';
import { Download, Users } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#1a1a2e] to-[#0a0a0a]"></div>

      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-72 h-72 bg-[#00ff9d] rounded-full filter blur-[128px] animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#00d9ff] rounded-full filter blur-[128px] animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#ff006e] rounded-full filter blur-[128px] animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6 glitch-text">
            <span className="text-[#00ff9d] glow-green">OVERCLOCKED</span>
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white mb-4">
            The Ultimate Capture The Flag Experience
          </h2>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-[#a0a0a0] text-sm md:text-lg font-mono mb-8">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[#00ff9d] rounded-full animate-pulse"></span>
              24 Hours
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[#00d9ff] rounded-full animate-pulse"></span>
              200+ Participants
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[#ff006e] rounded-full animate-pulse"></span>
              100+ Challenges
            </span>
          </div>
        </div>

        <CountdownTimer />

        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#register"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#register')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="group relative px-8 py-4 bg-[#00ff9d] text-[#0a0a0a] font-bold rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,255,157,0.5)] flex items-center justify-center gap-2"
          >
            <Users size={20} />
            <span>REGISTER NOW</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
          </a>

          <button
            className="group relative px-8 py-4 bg-transparent border-2 border-[#00d9ff] text-[#00d9ff] font-bold rounded-lg overflow-hidden transition-all duration-300 hover:bg-[#00d9ff] hover:text-[#0a0a0a] hover:scale-105 hover:shadow-[0_0_30px_rgba(0,217,255,0.5)] flex items-center justify-center gap-2"
          >
            <Download size={20} />
            <span>DOWNLOAD BROCHURE</span>
          </button>
        </div>

        <div className="mt-16 text-[#a0a0a0] text-sm md:text-base">
          <p className="mb-2">Part of <span className="text-[#00d9ff] font-semibold">Abhiyanthriki 2025</span></p>
          <p>Rajagiri School of Engineering & Technology</p>
        </div>
      </div>
    </section>
  );
}
