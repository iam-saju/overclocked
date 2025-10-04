import { Trophy } from 'lucide-react';

export default function Leaderboard() {
  return (
    <section id="leaderboard" className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-red-100 to-orange-200 relative">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, #00ff9d 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }}></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-black text-gray-800 mb-4 hack-font">
            <span className="text-orange-600">LEADERBOARD</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent mx-auto mb-6"></div>
        </div>

        <div className="bg-white/90 border border-orange-300 rounded-xl p-12 text-center hover:shadow-xl transition-all duration-300">
          <Trophy className="text-orange-600 mx-auto mb-6 hover:scale-110 transition-transform duration-300" size={80} />
          <h3 className="text-3xl md:text-5xl font-black text-orange-600 mb-4 gaming-font">
            COMING SOON
          </h3>
          <p className="text-gray-800 text-base md:text-lg hack-font font-bold">
            THE LEADERBOARD WILL GO LIVE ONCE THE COMPETITION BEGINS
          </p>
        </div>
      </div>
    </section>
  );
}
