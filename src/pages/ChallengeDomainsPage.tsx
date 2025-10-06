import { useState } from 'react';
import { Lock, Globe, Search, Code, Binary, Eye, Terminal, Image, Network, Puzzle, Users, Brain, Bot, X, Shield, Zap, Trophy } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

interface Domain {
  name: string;
  icon: any;
  color: string;
  description: string;
  challenges: number;
  difficulty: string;
}

export default function ChallengeDomainsPage() {
  const [selectedDomain, setSelectedDomain] = useState<Domain | null>(null);

  const domains: Domain[] = [
    {
      name: 'Cryptography',
      icon: Lock,
      color: '#00ff9d',
      description: 'Decode encrypted messages, break classical and modern ciphers, and explore the mathematics of secure communication.',
      challenges: 12,
      difficulty: 'Medium'
    },
    {
      name: 'Web Security',
      icon: Globe,
      color: '#00d9ff',
      description: 'Exploit web vulnerabilities including SQL injection, XSS, CSRF, and authentication bypasses in realistic web applications.',
      challenges: 15,
      difficulty: 'Hard'
    },
    {
      name: 'Forensics',
      icon: Search,
      color: '#ff006e',
      description: 'Investigate digital artifacts, recover hidden data, analyze memory dumps, and piece together evidence from corrupted files.',
      challenges: 10,
      difficulty: 'Medium'
    },
    {
      name: 'Reverse Engineering',
      icon: Code,
      color: '#ffbe0b',
      description: 'Disassemble binaries, understand program logic, patch software, and uncover hidden functionality in compiled code.',
      challenges: 8,
      difficulty: 'Hard'
    },
    {
      name: 'OSINT',
      icon: Eye,
      color: '#00ff9d',
      description: 'Leverage open-source intelligence techniques to gather information from public sources and social media.',
      challenges: 7,
      difficulty: 'Easy'
    },
    {
      name: 'Binary Exploitation',
      icon: Binary,
      color: '#00d9ff',
      description: 'Exploit memory corruption vulnerabilities, buffer overflows, and format string bugs to gain system access.',
      challenges: 6,
      difficulty: 'Expert'
    },
    {
      name: 'Programming',
      icon: Terminal,
      color: '#ff006e',
      description: 'Solve algorithmic challenges, optimize code performance, and develop creative solutions to complex problems.',
      challenges: 14,
      difficulty: 'Medium'
    },
    {
      name: 'Steganography',
      icon: Image,
      color: '#ffbe0b',
      description: 'Uncover hidden messages in images, audio files, and other media through advanced steganographic techniques.',
      challenges: 9,
      difficulty: 'Medium'
    },
    {
      name: 'Networking',
      icon: Network,
      color: '#00ff9d',
      description: 'Analyze network traffic, understand protocols, and identify security issues in network communications.',
      challenges: 11,
      difficulty: 'Hard'
    },
    {
      name: 'Physical Puzzles',
      icon: Puzzle,
      color: '#00d9ff',
      description: 'Solve hands-on challenges involving hardware, lockpicking, electronics, and physical security systems.',
      challenges: 5,
      difficulty: 'Medium'
    },
    {
      name: 'Social Engineering',
      icon: Users,
      color: '#ff006e',
      description: 'Master psychological manipulation techniques and understand the human factor in cybersecurity breaches.',
      challenges: 6,
      difficulty: 'Easy'
    },
    {
      name: 'Logic & Trivia',
      icon: Brain,
      color: '#ffbe0b',
      description: 'Test your knowledge of cybersecurity history, solve logical puzzles, and answer technical trivia questions.',
      challenges: 13,
      difficulty: 'Easy'
    },
    {
      name: 'AI Debates',
      icon: Bot,
      color: '#00ff9d',
      description: 'Engage with AI systems, explore machine learning vulnerabilities, and debate the future of AI in security.',
      challenges: 4,
      difficulty: 'Medium'
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return '#00ff9d';
      case 'Medium': return '#ffbe0b';
      case 'Hard': return '#ff006e';
      case 'Expert': return '#8b00ff';
      default: return '#00d9ff';
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Navigation />
      
      {/* Enhanced Bag Theme Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-[#00ff9d] rounded-full filter blur-[150px] opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-80 h-80 bg-[#00d9ff] rounded-full filter blur-[150px] opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-[#ff006e] rounded-full filter blur-[150px] opacity-15 animate-pulse delay-500"></div>
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-[#ffbe0b] rounded-full filter blur-[150px] opacity-15 animate-pulse delay-700"></div>
        
        {/* Matrix-style grid overlay */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'linear-gradient(#00ff9d 1px, transparent 1px), linear-gradient(90deg, #00ff9d 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }}></div>
        
        {/* Cyberpunk lines */}
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-[#00d9ff]/20 to-transparent"></div>
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-[#ff006e]/20 to-transparent"></div>
      </div>

      <section className="relative py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header Section */}
          <div className="text-center mb-20">
            <div className="mb-6 flex justify-center items-center gap-4">
              <Shield className="text-[#00d9ff] glow-blue" size={48} />
              <h1 className="text-5xl md:text-7xl font-bold text-white">
                CHALLENGE <span className="text-[#00d9ff] glow-blue">DOMAINS</span>
              </h1>
              <Shield className="text-[#00d9ff] glow-blue" size={48} />
            </div>
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[#00d9ff] to-transparent mx-auto mb-8"></div>
            <p className="text-[#a0a0a0] text-xl max-w-3xl mx-auto leading-relaxed">
              Explore 13 diverse cybersecurity domains, each designed to test different aspects of your hacking skills.
              From cryptography to AI debates, choose your battlefield and conquer the challenges.
            </p>
            
            {/* Stats Section */}
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              <div className="bg-[#1a1a2e]/50 backdrop-blur-sm border border-[#00ff9d]/30 rounded-lg p-4">
                <div className="text-3xl font-bold text-[#00ff9d] glow-green">100+</div>
                <div className="text-sm text-[#a0a0a0]">Challenges</div>
              </div>
              <div className="bg-[#1a1a2e]/50 backdrop-blur-sm border border-[#00d9ff]/30 rounded-lg p-4">
                <div className="text-3xl font-bold text-[#00d9ff] glow-blue">13</div>
                <div className="text-sm text-[#a0a0a0]">Domains</div>
              </div>
              <div className="bg-[#1a1a2e]/50 backdrop-blur-sm border border-[#ff006e]/30 rounded-lg p-4">
                <div className="text-3xl font-bold text-[#ff006e] glow-pink">5</div>
                <div className="text-sm text-[#a0a0a0]">Difficulty Levels</div>
              </div>
              <div className="bg-[#1a1a2e]/50 backdrop-blur-sm border border-[#ffbe0b]/30 rounded-lg p-4">
                <div className="text-3xl font-bold text-[#ffbe0b] glow-gold">24h</div>
                <div className="text-sm text-[#a0a0a0]">Competition</div>
              </div>
            </div>
          </div>

          {/* Domains Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {domains.map((domain, index) => {
              const Icon = domain.icon;
              return (
                <button
                  key={index}
                  onClick={() => setSelectedDomain(domain)}
                  className="group relative bg-[#1a1a2e]/80 backdrop-blur-sm border rounded-xl p-6 transition-all duration-300 hover:transform hover:scale-105 text-left overflow-hidden"
                  style={{
                    borderColor: `${domain.color}30`,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = domain.color;
                    e.currentTarget.style.boxShadow = `0 0 40px ${domain.color}40`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = `${domain.color}30`;
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  {/* Background glow effect */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                    style={{ backgroundColor: domain.color }}
                  ></div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-4">
                      <div
                        className="w-14 h-14 rounded-xl flex items-center justify-center transition-all group-hover:scale-110"
                        style={{
                          backgroundColor: `${domain.color}15`,
                          boxShadow: `0 0 20px ${domain.color}30`
                        }}
                      >
                        <Icon style={{ color: domain.color }} size={28} />
                      </div>
                      <Zap style={{ color: domain.color }} size={20} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    
                    <h3 className="text-white font-bold text-lg mb-2">{domain.name}</h3>
                    
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs font-mono text-[#a0a0a0]">{domain.challenges} Challenges</span>
                      <span className="text-xs">•</span>
                      <span 
                        className="text-xs font-semibold font-mono"
                        style={{ color: getDifficultyColor(domain.difficulty) }}
                      >
                        {domain.difficulty}
                      </span>
                    </div>
                    
                    <div className="h-1 bg-[#0a0a0a] rounded-full overflow-hidden">
                      <div 
                        className="h-full transition-all duration-500"
                        style={{ 
                          width: '0%',
                          backgroundColor: domain.color 
                        }}
                        onMouseEnter={(e) => {
                          (e.target as HTMLElement).style.width = '100%';
                        }}
                        onMouseLeave={(e) => {
                          (e.target as HTMLElement).style.width = '0%';
                        }}
                      ></div>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Call to Action */}
          <div className="mt-20 text-center">
            <div className="bg-gradient-to-r from-[#1a1a2e]/80 to-[#0a0a0a]/80 backdrop-blur-sm border border-[#00ff9d]/30 rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
              <Shield className="text-[#00ff9d] mx-auto mb-6 glow-green" size={64} />
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Accept the Challenge?
              </h2>
              <p className="text-[#a0a0a0] text-lg mb-8">
                Register now and prove your skills across all 13 domains. The clock is ticking!
              </p>
              <a
                href="/#register"
                className="inline-block px-10 py-4 bg-[#00ff9d] text-[#0a0a0a] font-bold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(0,255,157,0.6)]"
              >
                REGISTER NOW
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Modal for Domain Details */}
      {selectedDomain && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md" onClick={() => setSelectedDomain(null)}>
          <div
            className="bg-[#1a1a2e] border-2 rounded-2xl p-8 md:p-10 max-w-2xl w-full relative transform transition-all animate-fadeIn"
            style={{ borderColor: selectedDomain.color }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedDomain(null)}
              className="absolute top-4 right-4 text-[#a0a0a0] hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full"
            >
              <X size={24} />
            </button>

            <div className="flex items-center gap-6 mb-6">
              <div
                className="w-20 h-20 rounded-2xl flex items-center justify-center"
                style={{ 
                  backgroundColor: `${selectedDomain.color}20`,
                  boxShadow: `0 0 30px ${selectedDomain.color}40`
                }}
              >
                <selectedDomain.icon style={{ color: selectedDomain.color }} size={40} />
              </div>
              
              <div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">{selectedDomain.name}</h3>
                <div className="flex items-center gap-4">
                  <span className="text-sm font-mono text-[#a0a0a0]">{selectedDomain.challenges} Challenges</span>
                  <span 
                    className="text-sm font-bold font-mono px-3 py-1 rounded-full"
                    style={{ 
                      backgroundColor: `${getDifficultyColor(selectedDomain.difficulty)}20`,
                      color: getDifficultyColor(selectedDomain.difficulty)
                    }}
                  >
                    {selectedDomain.difficulty}
                  </span>
                </div>
              </div>
            </div>

            <p className="text-[#a0a0a0] text-lg leading-relaxed mb-8">
              {selectedDomain.description}
            </p>

            <div className="border-t border-[#00ff9d]/20 pt-6">
              <h4 className="text-white font-bold text-lg mb-3">What You'll Learn</h4>
              <ul className="space-y-2 text-[#a0a0a0]">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: selectedDomain.color }}></div>
                  Advanced {selectedDomain.name.toLowerCase()} techniques
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: selectedDomain.color }}></div>
                  Real-world attack and defense scenarios
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: selectedDomain.color }}></div>
                  Industry-standard tools and methodologies
                </li>
              </ul>
            </div>

            <div className="mt-8 flex gap-4">
              <button
                className="flex-1 py-3 rounded-lg font-bold transition-all duration-300"
                style={{ 
                  backgroundColor: selectedDomain.color,
                  color: '#0a0a0a'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = `0 0 30px ${selectedDomain.color}60`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                Start Challenges
              </button>
              <button
                onClick={() => setSelectedDomain(null)}
                className="px-6 py-3 border-2 rounded-lg font-bold transition-all duration-300 hover:bg-white/5"
                style={{ borderColor: selectedDomain.color, color: selectedDomain.color }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

