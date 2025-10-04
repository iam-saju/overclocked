import { useState } from 'react';
import { Lock, Globe, Search, Code, Binary, Eye, Terminal, Image, Network, Puzzle, Users, Brain, Bot, X } from 'lucide-react';

interface Domain {
  name: string;
  icon: any;
  color: string;
  description: string;
}

export default function ChallengeDomains() {
  const [selectedDomain, setSelectedDomain] = useState<Domain | null>(null);

  const domains: Domain[] = [
    {
      name: 'Cryptography',
      icon: Lock,
      color: '#00ff9d',
      description: 'Decode encrypted messages, break classical and modern ciphers, and explore the mathematics of secure communication.'
    },
    {
      name: 'Web Security',
      icon: Globe,
      color: '#00d9ff',
      description: 'Exploit web vulnerabilities including SQL injection, XSS, CSRF, and authentication bypasses in realistic web applications.'
    },
    {
      name: 'Forensics',
      icon: Search,
      color: '#ff006e',
      description: 'Investigate digital artifacts, recover hidden data, analyze memory dumps, and piece together evidence from corrupted files.'
    },
    {
      name: 'Reverse Engineering',
      icon: Code,
      color: '#ffbe0b',
      description: 'Disassemble binaries, understand program logic, patch software, and uncover hidden functionality in compiled code.'
    },
    {
      name: 'OSINT',
      icon: Eye,
      color: '#00ff9d',
      description: 'Leverage open-source intelligence techniques to gather information from public sources and social media.'
    },
    {
      name: 'Binary Exploitation',
      icon: Binary,
      color: '#00d9ff',
      description: 'Exploit memory corruption vulnerabilities, buffer overflows, and format string bugs to gain system access.'
    },
    {
      name: 'Programming',
      icon: Terminal,
      color: '#ff006e',
      description: 'Solve algorithmic challenges, optimize code performance, and develop creative solutions to complex problems.'
    },
    {
      name: 'Steganography',
      icon: Image,
      color: '#ffbe0b',
      description: 'Uncover hidden messages in images, audio files, and other media through advanced steganographic techniques.'
    },
    {
      name: 'Networking',
      icon: Network,
      color: '#00ff9d',
      description: 'Analyze network traffic, understand protocols, and identify security issues in network communications.'
    },
    {
      name: 'Physical Puzzles',
      icon: Puzzle,
      color: '#00d9ff',
      description: 'Solve hands-on challenges involving hardware, lockpicking, electronics, and physical security systems.'
    },
    {
      name: 'Social Engineering',
      icon: Users,
      color: '#ff006e',
      description: 'Master psychological manipulation techniques and understand the human factor in cybersecurity breaches.'
    },
    {
      name: 'Logic & Trivia',
      icon: Brain,
      color: '#ffbe0b',
      description: 'Test your knowledge of cybersecurity history, solve logical puzzles, and answer technical trivia questions.'
    },
    {
      name: 'AI Debates',
      icon: Bot,
      color: '#00ff9d',
      description: 'Engage with AI systems, explore machine learning vulnerabilities, and debate the future of AI in security.'
    }
  ];

  return (
    <section id="domains" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0a0a0a] to-[#1a1a2e] relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            CHALLENGE <span className="text-[#00d9ff] glow-blue">DOMAINS</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#00d9ff] to-transparent mx-auto mb-8"></div>
          <p className="text-[#a0a0a0] text-lg max-w-3xl mx-auto">
            13 diverse categories designed to test every aspect of your cybersecurity knowledge
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {domains.map((domain, index) => {
            const Icon = domain.icon;
            return (
              <button
                key={index}
                onClick={() => setSelectedDomain(domain)}
                className="group bg-[#1a1a2e] border border-[#00ff9d]/20 rounded-lg p-4 md:p-6 hover:border-[#00ff9d] transition-all duration-300 hover:transform hover:scale-105 hover:shadow-[0_0_30px_rgba(0,255,157,0.2)] text-left"
                style={{
                  borderColor: `${domain.color}20`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = domain.color;
                  e.currentTarget.style.boxShadow = `0 0 30px ${domain.color}40`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = `${domain.color}20`;
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div
                  className="w-10 h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center mb-3 md:mb-4 transition-all"
                  style={{
                    backgroundColor: `${domain.color}10`,
                  }}
                >
                  <Icon style={{ color: domain.color }} size={20} className="md:w-6 md:h-6" />
                </div>
                <h3 className="text-white font-bold text-sm md:text-base">{domain.name}</h3>
              </button>
            );
          })}
        </div>
      </div>

      {selectedDomain && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={() => setSelectedDomain(null)}>
          <div
            className="bg-[#1a1a2e] border-2 rounded-xl p-6 md:p-8 max-w-lg w-full relative"
            style={{ borderColor: selectedDomain.color }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedDomain(null)}
              className="absolute top-4 right-4 text-[#a0a0a0] hover:text-white transition-colors"
            >
              <X size={24} />
            </button>

            <div
              className="w-16 h-16 rounded-lg flex items-center justify-center mb-4"
              style={{ backgroundColor: `${selectedDomain.color}20` }}
            >
              <selectedDomain.icon style={{ color: selectedDomain.color }} size={32} />
            </div>

            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{selectedDomain.name}</h3>
            <p className="text-[#a0a0a0] text-base md:text-lg leading-relaxed">
              {selectedDomain.description}
            </p>

            <div className="mt-6 pt-6 border-t border-[#00ff9d]/20">
              <p className="text-sm text-[#a0a0a0]">
                Click outside to close
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
