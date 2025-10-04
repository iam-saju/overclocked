import { Calendar, Clock, Award, Users as UsersIcon } from 'lucide-react';

export default function Schedule() {
  const schedulePhases = [
    {
      phase: 'Pre-Event',
      icon: Calendar,
      color: '#00ff9d',
      events: [
        { time: 'September 1 - October 10', title: 'Registration Period', description: 'Teams register online through the official portal' },
        { time: 'October 1 - October 12', title: 'Team Formation', description: 'Assemble your squad of 1-4 members' },
        { time: 'October 13, 6:00 PM', title: 'Walkthrough Session', description: 'Platform demo and rules briefing for participants' }
      ]
    },
    {
      phase: 'During Event',
      icon: Clock,
      color: '#00d9ff',
      events: [
        { time: 'October 15, 12:00 AM', title: 'Competition Begins', description: 'CTF platform goes live with all challenges' },
        { time: '6:00 AM', title: 'Morning Milestone', description: 'First wave of bonus challenges unlocked' },
        { time: '12:00 PM', title: 'Midway Check-in', description: 'Leaderboard analysis and mentor Q&A session' },
        { time: '6:00 PM', title: 'Final Sprint', description: 'Last-hour challenges and time-bonus activations' },
        { time: 'October 16, 12:00 AM', title: 'Competition Ends', description: 'All submissions locked, scoring finalized' }
      ]
    },
    {
      phase: 'Post-Event',
      icon: Award,
      color: '#ff006e',
      events: [
        { time: 'October 16, 2:00 AM', title: 'Results Announcement', description: 'Winners declared on website and Discord' },
        { time: '10:00 AM', title: 'Award Ceremony', description: 'Prize distribution and certificates (on-campus or virtual)' },
        { time: '11:00 AM', title: 'Networking Session', description: 'Meet fellow hackers, organizers, and industry mentors' }
      ]
    }
  ];

  return (
    <section id="schedule" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#00ff9d] rounded-full filter blur-[150px]"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#00d9ff] rounded-full filter blur-[150px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            EVENT <span className="text-[#ff006e] glow-pink">SCHEDULE</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#ff006e] to-transparent mx-auto mb-8"></div>
          <p className="text-[#a0a0a0] text-lg max-w-3xl mx-auto">
            Your complete roadmap from registration to victory
          </p>
        </div>

        <div className="space-y-12">
          {schedulePhases.map((phase, phaseIndex) => {
            const PhaseIcon = phase.icon;
            return (
              <div key={phaseIndex} className="relative">
                <div className="flex items-center mb-8">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center mr-4"
                    style={{ backgroundColor: `${phase.color}20`, border: `2px solid ${phase.color}` }}
                  >
                    <PhaseIcon style={{ color: phase.color }} size={24} />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white">{phase.phase}</h3>
                </div>

                <div className="ml-6 border-l-2" style={{ borderColor: `${phase.color}40` }}>
                  {phase.events.map((event, eventIndex) => (
                    <div key={eventIndex} className="relative pl-8 pb-8 last:pb-0">
                      <div
                        className="absolute left-0 top-0 w-4 h-4 rounded-full transform -translate-x-[9px]"
                        style={{ backgroundColor: phase.color }}
                      ></div>

                      <div className="bg-[#1a1a2e] border border-[#00ff9d]/20 rounded-lg p-4 md:p-6 hover:border-[#00ff9d] transition-all duration-300 hover:transform hover:translate-x-2">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                          <h4 className="text-lg md:text-xl font-bold text-white mb-1 md:mb-0">{event.title}</h4>
                          <span
                            className="text-sm font-mono font-semibold"
                            style={{ color: phase.color }}
                          >
                            {event.time}
                          </span>
                        </div>
                        <p className="text-[#a0a0a0] text-sm md:text-base">{event.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-gradient-to-r from-[#1a1a2e] to-[#0a0a0a] border border-[#00ff9d]/30 rounded-xl p-6 md:p-8 text-center">
          <UsersIcon className="text-[#00ff9d] mx-auto mb-4" size={48} />
          <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Stay Connected</h3>
          <p className="text-[#a0a0a0]">
            Join our Discord server for real-time updates, announcements, and community support throughout the event
          </p>
        </div>
      </div>
    </section>
  );
}
