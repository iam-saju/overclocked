import { Trophy, Crown, Medal, Star, Zap, Flame, Target, Award } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function LeaderboardPage() {
  const leaderboardData = [
    { rank: 1, teamName: 'CYBER NINJAS', score: 2450, members: ['Alice', 'Bob', 'Charlie'], badge: 'GOLD' },
    { rank: 2, teamName: 'HACK MASTERS', score: 2380, members: ['David', 'Eve'], badge: 'SILVER' },
    { rank: 3, teamName: 'CODE BREAKERS', score: 2290, members: ['Frank', 'Grace', 'Henry', 'Ivy'], badge: 'BRONZE' },
    { rank: 4, teamName: 'BINARY HUNTERS', score: 2150, members: ['Jack', 'Kate'], badge: 'RISING' },
    { rank: 5, teamName: 'NEURAL NETWORK', score: 2080, members: ['Liam', 'Maya', 'Noah'], badge: 'RISING' },
    { rank: 6, teamName: 'QUANTUM HACKERS', score: 1950, members: ['Olivia', 'Paul'], badge: 'RISING' },
    { rank: 7, teamName: 'CYBER WARRIORS', score: 1820, members: ['Quinn', 'Ruby', 'Sam'], badge: 'RISING' },
    { rank: 8, teamName: 'DIGITAL NOMADS', score: 1750, members: ['Tara', 'Ulysses'], badge: 'RISING' },
    { rank: 9, teamName: 'ALGORITHM KINGS', score: 1680, members: ['Vera', 'Will', 'Xara'], badge: 'RISING' },
    { rank: 10, teamName: 'BYTE SLAYERS', score: 1620, members: ['Yara', 'Zack'], badge: 'RISING' }
  ];

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1: return <Crown className="text-yellow-500" size={24} />;
      case 2: return <Medal className="text-gray-400" size={24} />;
      case 3: return <Award className="text-orange-600" size={24} />;
      default: return <Star className="text-blue-500" size={20} />;
    }
  };

  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case 'GOLD': return 'bg-yellow-500 text-black';
      case 'SILVER': return 'bg-gray-400 text-white';
      case 'BRONZE': return 'bg-orange-600 text-white';
      default: return 'bg-green-500 text-white';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-200 via-yellow-300 to-red-400 text-gray-800">
      <Navigation />
      
      {/* Enhanced Retro Game Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-10 w-96 h-96 bg-yellow-400 rounded-full filter blur-[150px] opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-orange-400 rounded-full filter blur-[150px] opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-72 h-72 bg-red-400 rounded-full filter blur-[150px] opacity-15 animate-pulse delay-500"></div>
        
        {/* Retro Grid Pattern */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `repeating-linear-gradient(0deg, #000 0px, #000 1px, transparent 1px, transparent 20px),
                            repeating-linear-gradient(90deg, #000 0px, #000 1px, transparent 1px, transparent 20px)`,
        }}></div>
      </div>

      <section className="relative pt-32 pb-8 px-4 sm:px-6 lg:px-8 min-h-screen">
        <div className="max-w-6xl mx-auto relative z-10">
          {/* Header Section */}
          <div className="text-center mb-6">
            <div className="mb-4 flex justify-center items-center gap-2 md:gap-4">
              <Trophy className="text-yellow-600 animate-bounce" size={32} />
              <h1 className="text-2xl md:text-4xl font-black text-gray-800 cyber-title">
                🏆 LEADERBOARD 🏆
              </h1>
              <Trophy className="text-yellow-600 animate-bounce" size={32} />
            </div>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent mx-auto mb-4"></div>
            <p className="text-gray-800 text-sm md:text-lg hack-font font-bold">
              🎮 LIVE RANKINGS - WHO WILL DOMINATE THE CYBER ARENA? 🎮
            </p>
          </div>

          {/* Leaderboard Container */}
          <div className="bg-black/90 backdrop-blur-sm rounded-2xl p-4 md:p-6 shadow-2xl border-4 border-yellow-400">
            {/* Header Row */}
            <div className="grid grid-cols-12 gap-1 md:gap-4 mb-3 p-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg">
              <div className="col-span-1 text-center">
                <span className="gaming-font font-black text-black text-xs md:text-sm">RANK</span>
              </div>
              <div className="col-span-4 text-center">
                <span className="gaming-font font-black text-black text-xs md:text-sm">TEAM</span>
              </div>
              <div className="col-span-3 text-center">
                <span className="gaming-font font-black text-black text-xs md:text-sm">SCORE</span>
              </div>
              <div className="col-span-3 text-center">
                <span className="gaming-font font-black text-black text-xs md:text-sm">MEMBERS</span>
              </div>
              <div className="col-span-1 text-center">
                <span className="gaming-font font-black text-black text-xs md:text-sm">BADGE</span>
              </div>
            </div>

            {/* Leaderboard Entries */}
            <div className="space-y-2 max-h-96 overflow-y-auto">
              {leaderboardData.map((team, index) => (
                <div
                  key={index}
                  className={`grid grid-cols-12 gap-2 md:gap-4 p-3 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                    team.rank <= 3 
                      ? 'bg-gradient-to-r from-yellow-100 to-orange-200 border-2 border-yellow-400' 
                      : 'bg-white/80 border border-gray-300 hover:border-orange-400'
                  }`}
                >
                  {/* Rank */}
                  <div className="col-span-1 flex items-center justify-center">
                    <div className="flex flex-col items-center gap-1">
                      {getRankIcon(team.rank)}
                      <span className="gaming-font font-black text-sm">
                        #{team.rank}
                      </span>
                    </div>
                  </div>

                  {/* Team Name */}
                  <div className="col-span-4 flex items-center">
                    <div className="flex items-center gap-2">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                        team.rank <= 3 ? 'bg-yellow-400' : 'bg-orange-400'
                      }`}>
                        <span className="gaming-font font-black text-black text-xs">
                          {team.rank}
                        </span>
                      </div>
                      <span className="hack-font font-black text-sm md:text-base truncate">
                        {team.teamName}
                      </span>
                    </div>
                  </div>

                  {/* Score */}
                  <div className="col-span-3 flex items-center justify-center">
                    <div className="flex items-center gap-1">
                      <Zap className="text-orange-500" size={16} />
                      <span className="gaming-font font-black text-sm md:text-lg text-orange-600">
                        {team.score.toLocaleString()}
                      </span>
                    </div>
                  </div>

                  {/* Members */}
                  <div className="col-span-3 flex items-center justify-center">
                    <div className="flex items-center gap-1">
                      {team.members.slice(0, 2).map((member, memberIndex) => (
                        <div key={memberIndex} className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs font-bold">
                            {member[0]}
                          </span>
                        </div>
                      ))}
                      {team.members.length > 2 && (
                        <span className="text-xs font-bold text-gray-600">
                          +{team.members.length - 2}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Badge */}
                  <div className="col-span-1 flex items-center justify-center">
                    <span className={`px-1 py-0.5 rounded-full text-xs font-black gaming-font ${getBadgeColor(team.badge)}`}>
                      {team.badge}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Live Status */}
            <div className="mt-4 text-center">
              <div className="inline-flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-full gaming-font font-black text-sm">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                🔴 LIVE UPDATES
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white/90 rounded-xl p-4 text-center hover:scale-105 transition-all duration-300 shadow-lg">
              <Flame className="text-orange-500 mx-auto mb-2" size={24} />
              <h3 className="gaming-font font-black text-sm mb-1">TOTAL TEAMS</h3>
              <p className="hack-font font-black text-xl text-orange-600">50+</p>
            </div>
            <div className="bg-white/90 rounded-xl p-4 text-center hover:scale-105 transition-all duration-300 shadow-lg">
              <Target className="text-red-500 mx-auto mb-2" size={24} />
              <h3 className="gaming-font font-black text-sm mb-1">CHALLENGES SOLVED</h3>
              <p className="hack-font font-black text-xl text-red-600">1,250+</p>
            </div>
            <div className="bg-white/90 rounded-xl p-4 text-center hover:scale-105 transition-all duration-300 shadow-lg">
              <Award className="text-yellow-500 mx-auto mb-2" size={24} />
              <h3 className="gaming-font font-black text-sm mb-1">TOTAL POINTS</h3>
              <p className="hack-font font-black text-xl text-yellow-600">25,000+</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
