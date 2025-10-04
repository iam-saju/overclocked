import { Shield, Clock, Trophy, Zap } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: Clock,
      title: '24-Hour Marathon',
      description: 'Non-stop challenges testing your endurance and skill'
    },
    {
      icon: Shield,
      title: 'Diverse Challenges',
      description: '100+ problems across 13 cybersecurity domains'
    },
    {
      icon: Trophy,
      title: 'Competitive Leaderboard',
      description: 'Real-time rankings and exciting prizes for top teams'
    },
    {
      icon: Zap,
      title: 'Hybrid Format',
      description: 'Participate online or on-campus, your choice'
    }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a] relative">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(#00ff9d 1px, transparent 1px), linear-gradient(90deg, #00ff9d 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            ABOUT <span className="text-[#00ff9d] glow-green">OVERCLOCKED</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#00ff9d] to-transparent mx-auto mb-8"></div>
          <p className="text-[#a0a0a0] text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            OverClocked is not just another CTF competition—it's an immersive 24-hour cybersecurity challenge
            that pushes the boundaries of your technical skills, creativity, and problem-solving abilities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group bg-[#1a1a2e] border border-[#00ff9d]/20 rounded-lg p-6 hover:border-[#00ff9d] transition-all duration-300 hover:transform hover:scale-105 hover:shadow-[0_0_30px_rgba(0,255,157,0.2)]"
              >
                <div className="w-12 h-12 bg-[#00ff9d]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#00ff9d]/20 transition-colors">
                  <Icon className="text-[#00ff9d]" size={24} />
                </div>
                <h3 className="text-white font-bold text-lg mb-2">{feature.title}</h3>
                <p className="text-[#a0a0a0] text-sm">{feature.description}</p>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-br from-[#1a1a2e] to-[#0a0a0a] border border-[#00d9ff]/30 rounded-xl p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold text-[#00d9ff] mb-6 glow-blue">
            How OverClocked is Different
          </h3>
          <div className="grid md:grid-cols-2 gap-6 text-[#a0a0a0]">
            <div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-[#00ff9d] mt-1">▸</span>
                  <span><strong className="text-white">Comprehensive Domain Coverage:</strong> 13 distinct challenge categories from cryptography to AI debates</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#00ff9d] mt-1">▸</span>
                  <span><strong className="text-white">Beginner to Advanced:</strong> Challenges designed for all skill levels with progressive difficulty</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#00ff9d] mt-1">▸</span>
                  <span><strong className="text-white">Team Collaboration:</strong> Work with 1-4 members, fostering teamwork and knowledge sharing</span>
                </li>
              </ul>
            </div>
            <div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-[#00ff9d] mt-1">▸</span>
                  <span><strong className="text-white">Real-World Scenarios:</strong> Challenges mirror actual cybersecurity threats and vulnerabilities</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#00ff9d] mt-1">▸</span>
                  <span><strong className="text-white">Dynamic Scoring:</strong> First-blood bonuses and time-based scoring keep competition fierce</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#00ff9d] mt-1">▸</span>
                  <span><strong className="text-white">Networking Opportunity:</strong> Connect with fellow hackers, mentors, and industry professionals</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-[#a0a0a0] text-lg">
            Whether you're a seasoned security professional or a curious beginner,
            OverClocked offers an unparalleled platform to test your mettle and learn from the best.
          </p>
        </div>
      </div>
    </section>
  );
}
