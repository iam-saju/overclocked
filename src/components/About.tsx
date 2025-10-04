import { Shield, Clock, Trophy, Zap } from 'lucide-react';

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
      icon: Trophy,
      title: 'Competitive Leaderboard',
      description: 'LIVE RANKINGS. EPIC PRIZES. BRAGGING RIGHTS.'
    },
    {
      icon: Zap,
      title: 'Hybrid Format',
      description: 'ONLINE OR OFFLINE. YOUR BATTLEGROUND, YOUR RULES.'
    }
  ];

  return (
    <section id="about" className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-200 via-yellow-300 to-red-400 relative">
      {/* Background effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-10 w-96 h-96 bg-yellow-500 rounded-full filter blur-[150px] opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-orange-500 rounded-full filter blur-[150px] opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-72 h-72 bg-red-500 rounded-full filter blur-[150px] opacity-15 animate-pulse delay-500"></div>
        <div className="absolute bottom-1/4 left-1/2 w-64 h-64 bg-yellow-600 rounded-full filter blur-[150px] opacity-15 animate-pulse delay-700"></div>

        {/* Retro grid pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `repeating-linear-gradient(0deg, #000 0px, #000 1px, transparent 1px, transparent 20px),
                            repeating-linear-gradient(90deg, #000 0px, #000 1px, transparent 1px, transparent 20px)`,
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-8">
          <div className="relative inline-block">
            <h2 className="text-2xl md:text-3xl font-black text-gray-800 mb-4 gaming-font relative">
              <span className="text-orange-600">[</span>ABOUT OVERCLOCKED<span className="text-orange-600">]</span>
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-red-500 rounded-full animate-pulse delay-300"></div>
            </h2>
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-red-500/20 blur-xl -z-10"></div>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent mx-auto mb-4"></div>
          <div className="bg-white/90 backdrop-blur-sm border-2 border-orange-400 rounded-xl p-4 max-w-3xl mx-auto shadow-xl">
            <p className="text-gray-800 text-sm md:text-base max-w-2xl mx-auto leading-relaxed gaming-font font-black">
              <span className="text-orange-600 text-lg">⚡</span> KERALA'S LARGEST CTF EVENT! <span className="text-orange-600 text-lg">🏆</span><br/>
              <span className="text-red-600 text-base">24 HOURS OF NON-STOP HACKING ACTION</span><br/>
              <span className="text-yellow-600">TEST YOUR SKILLS. BREAK THE CODE. DOMINATE THE LEADERBOARD.</span>
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-gray-900 to-black border-2 border-orange-400 rounded-xl p-4 hover:border-orange-500 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl cursor-pointer shadow-lg overflow-hidden"
              >
                {/* Retro scan lines effect */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-400/10 to-transparent animate-pulse"></div>
                <div className="absolute inset-0 opacity-5" style={{
                  backgroundImage: `repeating-linear-gradient(0deg, #ff6b35 0px, #ff6b35 1px, transparent 1px, transparent 20px)`,
                }}></div>
                
                {/* Glowing corners */}
                <div className="absolute top-0 left-0 w-2 h-2 bg-orange-500 rounded-br-lg animate-pulse"></div>
                <div className="absolute top-0 right-0 w-2 h-2 bg-orange-500 rounded-bl-lg animate-pulse delay-200"></div>
                <div className="absolute bottom-0 left-0 w-2 h-2 bg-orange-500 rounded-tr-lg animate-pulse delay-500"></div>
                <div className="absolute bottom-0 right-0 w-2 h-2 bg-orange-500 rounded-tl-lg animate-pulse delay-700"></div>
                
                <div className="relative z-10">
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-red-500 rounded-lg flex items-center justify-center mb-3 group-hover:from-orange-500 group-hover:to-red-600 transition-all duration-300 shadow-lg border border-orange-300">
                    <Icon className="text-white" size={20} />
                  </div>
                  <h3 className="text-white font-black text-sm mb-2 gaming-font">{feature.title.toUpperCase()}</h3>
                  <p className="text-orange-300 text-xs gaming-font font-bold">{feature.description.toUpperCase()}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="relative bg-gradient-to-br from-gray-900 to-black border-2 border-orange-400 rounded-xl p-6 shadow-xl overflow-hidden">
          {/* Retro grid pattern */}
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: `repeating-linear-gradient(0deg, #ff6b35 0px, #ff6b35 1px, transparent 1px, transparent 20px),
                              repeating-linear-gradient(90deg, #ff6b35 0px, #ff6b35 1px, transparent 1px, transparent 20px)`,
          }}></div>
          
          {/* Glowing border effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-red-500/20 blur-xl -z-10"></div>
          
          <div className="relative z-10">
            <div className="text-center mb-6">
              <h3 className="text-xl md:text-2xl font-black text-orange-400 mb-3 gaming-font relative">
                <span className="text-orange-600">[</span>HOW OVERCLOCKED IS DIFFERENT<span className="text-orange-600">]</span>
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
                <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-red-500 rounded-full animate-pulse delay-500"></div>
              </h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 text-orange-300">
              <div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 group">
                    <span className="text-orange-500 mt-1 font-black text-sm">▶</span>
                    <span className="gaming-font font-bold text-sm"><strong className="text-orange-400">13 DOMAINS:</strong> CRYPTO. FORENSICS. WEB. REVERSE. AI. EVERYTHING!</span>
                  </li>
                  <li className="flex items-start gap-3 group">
                    <span className="text-orange-500 mt-1 font-black text-sm">▶</span>
                    <span className="gaming-font font-bold text-sm"><strong className="text-orange-400">ALL SKILLS:</strong> NEWBIE TO PRO. SOMETHING FOR EVERYONE!</span>
                  </li>
                  <li className="flex items-start gap-3 group">
                    <span className="text-orange-500 mt-1 font-black text-sm">▶</span>
                    <span className="gaming-font font-bold text-sm"><strong className="text-orange-400">TEAM UP:</strong> 1-4 PLAYERS. STRONGER TOGETHER!</span>
                  </li>
                </ul>
              </div>
              <div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 group">
                    <span className="text-orange-500 mt-1 font-black text-sm">▶</span>
                    <span className="gaming-font font-bold text-sm"><strong className="text-orange-400">REAL HACKS:</strong> ACTUAL BUGS. REAL VULNS. LEGIT CHALLENGES!</span>
                  </li>
                  <li className="flex items-start gap-3 group">
                    <span className="text-orange-500 mt-1 font-black text-sm">▶</span>
                    <span className="gaming-font font-bold text-sm"><strong className="text-orange-400">FIRST BLOOD:</strong> SPEED MATTERS. BONUS POINTS FOR FIRST SOLVES!</span>
                  </li>
                  <li className="flex items-start gap-3 group">
                    <span className="text-orange-500 mt-1 font-black text-sm">▶</span>
                    <span className="gaming-font font-bold text-sm"><strong className="text-orange-400">NETWORK:</strong> MEET HACKERS. LEARN. GROW. CONNECT!</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <div className="relative inline-block">
            <div className="bg-gradient-to-br from-gray-900 to-black border-2 border-orange-400 rounded-xl p-6 shadow-xl">
              <p className="text-orange-300 text-lg gaming-font font-black mb-3">
                <span className="text-orange-500 text-xl">⚡</span> PRO OR NEWBIE? DOESN'T MATTER! <span className="text-orange-500 text-xl">⚡</span>
              </p>
              <p className="text-yellow-400 text-xl gaming-font font-black mb-3">
                JOIN KERALA'S BIGGEST HACKING BATTLE!
              </p>
              <p className="text-red-400 text-lg gaming-font font-black">
                READY TO PROVE YOURSELF? <span className="text-2xl">🚀</span>
              </p>
            </div>
            {/* Glowing corners */}
            <div className="absolute -top-1 -left-1 w-3 h-3 bg-orange-500 rounded-br-lg animate-pulse"></div>
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-orange-500 rounded-bl-lg animate-pulse delay-200"></div>
            <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-orange-500 rounded-tr-lg animate-pulse delay-500"></div>
            <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-orange-500 rounded-tl-lg animate-pulse delay-700"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
