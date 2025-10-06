import { UserPlus } from 'lucide-react';

export default function Registration() {
  const handleRegister = () => {
    window.open('https://konfhub.com/overclocked-the-ultimate-ctf-challenge', '_blank');
  };

  return (
    <section id="register" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-black via-gray-900 to-red-900 relative">
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

      <div className="max-w-4xl mx-auto relative z-10 px-4">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-black text-white mb-3 sm:mb-4 cyber-title px-2">
            TEAM <span className="text-red-500">REGISTRATION</span>
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent mx-auto mb-4 sm:mb-6"></div>
        </div>

        {/* ID Card Style Registration */}
        <div className="bg-gradient-to-br from-white to-gray-100 rounded-xl sm:rounded-2xl shadow-2xl border-2 sm:border-4 border-red-600 overflow-hidden relative w-full max-w-[90vw] sm:max-w-md mx-auto" style={{
          background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 50%, #e9ecef 100%)'
        }}>
          {/* ID Card Header */}
          <div className="bg-gradient-to-r from-red-600 to-red-800 px-4 sm:px-6 py-3 sm:py-4 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
            <div className="relative z-10 flex items-center justify-between">
              <div>
                <h3 className="text-sm sm:text-base font-black text-white gaming-font">HACKER ID CARD</h3>
                <p className="text-white/90 text-xs sm:text-sm hack-font font-bold">OVERCLOCKED CTF 2025</p>
              </div>
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white text-xs sm:text-sm gaming-font font-black">🏆</span>
              </div>
            </div>
          </div>
          
          {/* ID Card Body */}
          <div className="p-4 sm:p-6">
            {/* Hacker Image */}
            <div className="flex justify-center mb-4 sm:mb-6">
              <div className="w-28 h-36 sm:w-32 sm:h-40 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg border-2 border-red-600 relative overflow-hidden flex items-center justify-center" style={{
                imageRendering: 'pixelated'
              }}>
                <img 
                  src="/dy6smdl15t791.png" 
                  alt="Hacker Avatar" 
                  className="w-full h-full object-contain filter contrast-150 brightness-110"
                  loading="lazy"
                  style={{
                    imageRendering: 'pixelated',
                    filter: 'contrast(1.5) brightness(1.1) saturate(1.2)'
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-red-400/10 to-red-600/10"></div>
              </div>
            </div>

            {/* Registration Button */}
            <div className="text-center">
              <button
                onClick={handleRegister}
                className="w-full bg-gradient-to-r from-red-600 to-red-800 text-white font-black py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg hover:from-red-700 hover:to-red-900 hover:scale-105 transition-all duration-300 gaming-font text-sm sm:text-base flex items-center justify-center gap-1.5 sm:gap-2 shadow-lg"
              >
                <UserPlus size={14} className="sm:w-4 sm:h-4" />
                REGISTER HERE
              </button>
              
              <p className="text-gray-700 text-xs sm:text-sm mt-2 sm:mt-3 gaming-font font-bold px-2">
                REGISTER ON KONFHUB TO JOIN THE ULTIMATE CTF CHALLENGE
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}