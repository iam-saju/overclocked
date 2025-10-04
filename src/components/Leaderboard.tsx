import { useState, useEffect } from 'react';
import { Trophy, Medal, Award, RefreshCw } from 'lucide-react';

interface TeamScore {
  rank: number;
  teamName: string;
  totalPoints: number;
  challengesSolved: number;
  lastSolve: string;
}

export default function Leaderboard() {
  const [leaderboardData, setLeaderboardData] = useState<TeamScore[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [lastUpdate, setLastUpdate] = useState<Date>(new Date());

  const mockData: TeamScore[] = [
    { rank: 1, teamName: 'CyberNinjas', totalPoints: 8500, challengesSolved: 42, lastSolve: '2 mins ago' },
    { rank: 2, teamName: 'Binary Bandits', totalPoints: 7900, challengesSolved: 38, lastSolve: '5 mins ago' },
    { rank: 3, teamName: 'Script Kiddies Pro', totalPoints: 7200, challengesSolved: 35, lastSolve: '12 mins ago' },
    { rank: 4, teamName: 'Zero Day Warriors', totalPoints: 6800, challengesSolved: 33, lastSolve: '18 mins ago' },
    { rank: 5, teamName: 'Root Access', totalPoints: 6500, challengesSolved: 31, lastSolve: '25 mins ago' },
    { rank: 6, teamName: 'Exploit Experts', totalPoints: 6100, challengesSolved: 29, lastSolve: '32 mins ago' },
    { rank: 7, teamName: 'Hash Crackers', totalPoints: 5800, challengesSolved: 28, lastSolve: '45 mins ago' },
    { rank: 8, teamName: 'Packet Sniffers', totalPoints: 5400, challengesSolved: 26, lastSolve: '1 hour ago' },
    { rank: 9, teamName: 'SQL Injectors', totalPoints: 5000, challengesSolved: 24, lastSolve: '1 hour ago' },
    { rank: 10, teamName: 'Buffer Overflowers', totalPoints: 4700, challengesSolved: 22, lastSolve: '2 hours ago' }
  ];

  const fetchLeaderboard = () => {
    setIsLoading(true);
    setTimeout(() => {
      setLeaderboardData(mockData);
      setLastUpdate(new Date());
      setIsLoading(false);
    }, 1000);
  };

  useEffect(() => {
    fetchLeaderboard();
    const interval = setInterval(fetchLeaderboard, 30000);
    return () => clearInterval(interval);
  }, []);

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Trophy className="text-[#ffbe0b]" size={24} />;
      case 2:
        return <Medal className="text-[#a0a0a0]" size={24} />;
      case 3:
        return <Award className="text-[#cd7f32]" size={24} />;
      default:
        return <span className="text-[#a0a0a0] font-bold text-lg">{rank}</span>;
    }
  };

  const getRankColor = (rank: number) => {
    switch (rank) {
      case 1:
        return '#ffbe0b';
      case 2:
        return '#a0a0a0';
      case 3:
        return '#cd7f32';
      default:
        return '#00ff9d';
    }
  };

  return (
    <section id="leaderboard" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a] relative">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, #00ff9d 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            LIVE <span className="text-[#ffbe0b] glow-gold">LEADERBOARD</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#ffbe0b] to-transparent mx-auto mb-8"></div>
          <div className="flex flex-col items-center gap-2">
            <p className="text-[#a0a0a0] text-lg">
              Real-time rankings updated every 30 seconds
            </p>
            <button
              onClick={fetchLeaderboard}
              disabled={isLoading}
              className="flex items-center gap-2 text-[#00ff9d] hover:text-[#00d9a0] transition-colors disabled:opacity-50"
            >
              <RefreshCw size={16} className={isLoading ? 'animate-spin' : ''} />
              <span className="text-sm">Last updated: {lastUpdate.toLocaleTimeString()}</span>
            </button>
          </div>
        </div>

        <div className="bg-[#1a1a2e] border border-[#00ff9d]/20 rounded-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-[#0a0a0a] border-b border-[#00ff9d]/20">
                <tr>
                  <th className="px-4 md:px-6 py-4 text-left text-[#00ff9d] font-bold">RANK</th>
                  <th className="px-4 md:px-6 py-4 text-left text-[#00ff9d] font-bold">TEAM NAME</th>
                  <th className="px-4 md:px-6 py-4 text-center text-[#00ff9d] font-bold hidden sm:table-cell">POINTS</th>
                  <th className="px-4 md:px-6 py-4 text-center text-[#00ff9d] font-bold hidden md:table-cell">SOLVED</th>
                  <th className="px-4 md:px-6 py-4 text-right text-[#00ff9d] font-bold hidden lg:table-cell">LAST SOLVE</th>
                </tr>
              </thead>
              <tbody>
                {leaderboardData.map((team, index) => (
                  <tr
                    key={index}
                    className="border-b border-[#00ff9d]/10 hover:bg-[#00ff9d]/5 transition-colors"
                    style={{
                      borderLeftWidth: index < 3 ? '4px' : '0',
                      borderLeftColor: getRankColor(team.rank)
                    }}
                  >
                    <td className="px-4 md:px-6 py-4">
                      <div className="flex items-center justify-center w-10">
                        {getRankIcon(team.rank)}
                      </div>
                    </td>
                    <td className="px-4 md:px-6 py-4">
                      <div className="flex flex-col">
                        <span className="text-white font-bold">{team.teamName}</span>
                        <div className="flex gap-4 text-xs text-[#a0a0a0] sm:hidden">
                          <span>{team.totalPoints} pts</span>
                          <span>{team.challengesSolved} solved</span>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 md:px-6 py-4 text-center hidden sm:table-cell">
                      <span className="text-[#00d9ff] font-bold font-mono">{team.totalPoints}</span>
                    </td>
                    <td className="px-4 md:px-6 py-4 text-center hidden md:table-cell">
                      <span className="text-[#ff006e] font-bold">{team.challengesSolved}</span>
                    </td>
                    <td className="px-4 md:px-6 py-4 text-right text-[#a0a0a0] text-sm hidden lg:table-cell">
                      {team.lastSolve}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-[#a0a0a0] text-sm">
            Rankings based on total points scored. In case of a tie, teams are ranked by the time of their last correct submission.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {[
            { label: 'Total Teams', value: '200+', color: '#00ff9d' },
            { label: 'Challenges Active', value: '100+', color: '#00d9ff' },
            { label: 'Total Submissions', value: '15,000+', color: '#ff006e' }
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-[#1a1a2e] border rounded-lg p-6 text-center"
              style={{ borderColor: `${stat.color}40` }}
            >
              <div className="text-4xl font-bold mb-2" style={{ color: stat.color }}>
                {stat.value}
              </div>
              <div className="text-[#a0a0a0]">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
