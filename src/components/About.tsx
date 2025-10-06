import { Shield, Clock, Trophy, Zap, Award } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: Clock,
      title: '24-Hour Marathon',
      description: 'NON-STOP HACKING. NO SLEEP. PURE ADRENALINE.'
    },
    {
      icon: Shield,
      title: 'Diverse Challenges',
      description: '100+ PUZZLES. 13 DOMAINS. UNLIMITED POSSIBILITIES.'
    },
    {
      icon: Zap,
      title: 'Hybrid Format',
      description: 'ONLINE OR OFFLINE. YOUR BATTLEGROUND, YOUR RULES.'
    }
  ];

  return (
    <section id="about" className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-black via-gray-900 to-red-900 relative">
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
        <div className="text-center mb-4 sm:mb-5 md:mb-6">
          <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-black text-white mb-2 sm:mb-3 gaming-font">
            <span className="text-red-400">[</span>ABOUT OVERCLOCKED<span className="text-red-400">]</span>
          </h2>
          <div className="bg-red-900/80 border border-red-500 rounded-lg p-2 sm:p-3 max-w-2xl mx-auto">
            <p className="text-white text-xs sm:text-sm gaming-font font-bold">
              <span className="text-red-300">⚡</span> KERALA'S LARGEST CTF EVENT <span className="text-red-300">🏆</span><br/>
              <span className="text-red-200">24 HOURS • 200+ PLAYERS • 100+ CHALLENGES</span>
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 mb-4 sm:mb-5 md:mb-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-gray-900/90 to-black/95 border border-red-500/50 rounded-lg p-3 sm:p-4 hover:border-red-400 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl cursor-pointer shadow-lg overflow-hidden"
              >
                {/* Rich hover effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 via-transparent to-red-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-red-500 to-red-700 rounded-lg flex items-center justify-center mb-2 sm:mb-3 group-hover:from-yellow-400 group-hover:to-red-500 transition-all duration-300 shadow-lg">
                    <Icon className="text-white" size={16} />
                  </div>
                  <h3 className="text-white font-black text-xs sm:text-sm mb-1.5 sm:mb-2 gaming-font group-hover:text-yellow-200 transition-colors duration-300">{feature.title.toUpperCase()}</h3>
                  <p className="text-red-200 text-[0.65rem] sm:text-xs gaming-font font-bold group-hover:text-white transition-colors duration-300">{feature.description.toUpperCase()}</p>
                </div>
              </div>
            );
          })}
        </div>


        {/* Quick Facts */}
        <div className="mt-3 sm:mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-3">
          <div className="bg-gradient-to-br from-gray-900/90 to-black/95 border border-red-500/50 rounded-lg p-2.5 sm:p-3 text-center hover:scale-105 transition-all duration-300 shadow-lg group">
            <Trophy className="text-red-400 mx-auto mb-1.5 sm:mb-2 group-hover:text-yellow-400 transition-colors duration-300" size={20} />
            <h3 className="text-xs sm:text-sm font-black text-white mb-0.5 sm:mb-1 gaming-font group-hover:text-yellow-200 transition-colors duration-300">24 HOURS</h3>
            <p className="text-red-200 text-[0.65rem] sm:text-xs gaming-font font-bold group-hover:text-white transition-colors duration-300">OF NON-STOP HACKING</p>
          </div>
          <div className="bg-gradient-to-br from-gray-900/90 to-black/95 border border-red-500/50 rounded-lg p-2.5 sm:p-3 text-center hover:scale-105 transition-all duration-300 shadow-lg group">
            <Zap className="text-red-400 mx-auto mb-1.5 sm:mb-2 group-hover:text-green-400 transition-colors duration-300" size={20} />
            <h3 className="text-xs sm:text-sm font-black text-white mb-0.5 sm:mb-1 gaming-font group-hover:text-green-200 transition-colors duration-300">LIVE SUPPORT</h3>
            <p className="text-red-200 text-[0.65rem] sm:text-xs gaming-font font-bold group-hover:text-white transition-colors duration-300">MENTORS & Q&A SESSIONS</p>
          </div>
          <div className="bg-gradient-to-br from-gray-900/90 to-black/95 border border-red-500/50 rounded-lg p-2.5 sm:p-3 text-center hover:scale-105 transition-all duration-300 shadow-lg group sm:col-span-2 md:col-span-1">
            <Award className="text-red-400 mx-auto mb-1.5 sm:mb-2 group-hover:text-blue-400 transition-colors duration-300" size={20} />
            <h3 className="text-xs sm:text-sm font-black text-white mb-0.5 sm:mb-1 gaming-font group-hover:text-blue-200 transition-colors duration-300">EXCITING PRIZES</h3>
            <p className="text-red-200 text-[0.65rem] sm:text-xs gaming-font font-bold group-hover:text-white transition-colors duration-300">FOR TOP PERFORMERS</p>
          </div>
        </div>

        <div className="mt-8 sm:mt-12 md:mt-16 text-center px-2">
          <div className="relative inline-block w-full max-w-4xl">
            <div className="bg-gradient-to-br from-red-900/90 to-black/95 border-2 border-red-500 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 lg:p-10 shadow-2xl backdrop-blur-sm">
              {/* Background effects */}
              <div className="absolute inset-0 opacity-10" style={{
                backgroundImage: `repeating-linear-gradient(45deg, #dc2626 0px, #dc2626 1px, transparent 1px, transparent 6px)`,
              }}></div>
              
              <p className="text-red-200 text-sm sm:text-base md:text-lg lg:text-2xl gaming-font font-black mb-3 sm:mb-4 md:mb-6 relative z-10">
                <span className="text-red-400 text-lg sm:text-xl md:text-2xl lg:text-3xl">⚡</span> PRO OR NEWBIE? DOESN'T MATTER! <span className="text-red-400 text-lg sm:text-xl md:text-2xl lg:text-3xl">⚡</span>
              </p>
              <p className="text-red-100 text-base sm:text-lg md:text-xl lg:text-3xl gaming-font font-black mb-3 sm:mb-4 md:mb-6 relative z-10">
                JOIN KERALA'S BIGGEST HACKING BATTLE!
              </p>
              <p className="text-red-300 text-sm sm:text-base md:text-lg lg:text-2xl gaming-font font-black relative z-10">
                READY TO PROVE YOURSELF? <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl">🚀</span>
              </p>
            </div>
            {/* Enhanced glowing corners */}
            <div className="absolute -top-1 sm:-top-2 -left-1 sm:-left-2 w-3 h-3 sm:w-4 sm:h-4 bg-red-400 rounded-br-lg animate-pulse"></div>
            <div className="absolute -top-1 sm:-top-2 -right-1 sm:-right-2 w-3 h-3 sm:w-4 sm:h-4 bg-red-400 rounded-bl-lg animate-pulse delay-200"></div>
            <div className="absolute -bottom-1 sm:-bottom-2 -left-1 sm:-left-2 w-3 h-3 sm:w-4 sm:h-4 bg-red-400 rounded-tr-lg animate-pulse delay-500"></div>
            <div className="absolute -bottom-1 sm:-bottom-2 -right-1 sm:-right-2 w-3 h-3 sm:w-4 sm:h-4 bg-red-400 rounded-tl-lg animate-pulse delay-700"></div>
            
            {/* Glowing border effect */}
            <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-r from-red-500/20 via-red-600/10 to-red-500/20 blur-lg -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
