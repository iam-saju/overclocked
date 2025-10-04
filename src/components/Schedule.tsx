import { Calendar, Clock, Award, Users as UsersIcon, Zap, Bell, Trophy, CheckCircle } from 'lucide-react';

export default function Schedule() {
  const schedulePhases = [
    {
      phase: 'Pre-Event',
      icon: Calendar,
      color: '#00ff9d',
      events: [
        { time: 'September 1 - October 10', title: 'Registration Period', description: 'Teams register online through the official portal', status: 'completed' },
        { time: 'October 1 - October 12', title: 'Team Formation', description: 'Assemble your squad of 1-4 members', status: 'completed' },
        { time: 'October 13, 6:00 PM', title: 'Walkthrough Session', description: 'Platform demo and rules briefing for participants', status: 'upcoming' }
      ]
    },
    {
      phase: 'During Event',
      icon: Clock,
      color: '#00d9ff',
      events: [
        { time: 'October 15, 12:00 AM', title: 'Competition Begins', description: 'CTF platform goes live with all challenges', status: 'upcoming' },
        { time: '6:00 AM', title: 'Morning Milestone', description: 'First wave of bonus challenges unlocked', status: 'upcoming' },
        { time: '12:00 PM', title: 'Midway Check-in', description: 'Leaderboard analysis and mentor Q&A session', status: 'upcoming' },
        { time: '6:00 PM', title: 'Final Sprint', description: 'Last-hour challenges and time-bonus activations', status: 'upcoming' },
        { time: 'October 16, 12:00 AM', title: 'Competition Ends', description: 'All submissions locked, scoring finalized', status: 'upcoming' }
      ]
    },
    {
      phase: 'Post-Event',
      icon: Award,
      color: '#ff006e',
      events: [
        { time: 'October 16, 2:00 AM', title: 'Results Announcement', description: 'Winners declared on website and Discord', status: 'upcoming' },
        { time: '10:00 AM', title: 'Award Ceremony', description: 'Prize distribution and certificates (on-campus or virtual)', status: 'upcoming' },
        { time: '11:00 AM', title: 'Networking Session', description: 'Meet fellow hackers, organizers, and industry mentors', status: 'upcoming' }
      ]
    }
  ];

  return (
    <section id="schedule" className="py-32 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a] relative overflow-hidden">
      {/* Enhanced Bag Theme Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-10 w-96 h-96 bg-[#ff006e] rounded-full filter blur-[150px] opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-[#00d9ff] rounded-full filter blur-[150px] opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-72 h-72 bg-[#00ff9d] rounded-full filter blur-[150px] opacity-15 animate-pulse delay-500"></div>
        <div className="absolute bottom-1/4 left-1/2 w-64 h-64 bg-[#ffbe0b] rounded-full filter blur-[150px] opacity-15 animate-pulse delay-700"></div>
        
        {/* Digital clock pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `repeating-linear-gradient(0deg, #ff006e 0px, #ff006e 1px, transparent 1px, transparent 40px),
                            repeating-linear-gradient(90deg, #ff006e 0px, #ff006e 1px, transparent 1px, transparent 40px)`,
        }}></div>
        
        {/* Vertical accent lines */}
        <div className="absolute top-0 left-1/5 w-px h-full bg-gradient-to-b from-transparent via-[#ff006e]/20 to-transparent"></div>
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-[#00d9ff]/20 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="mb-6 flex justify-center items-center gap-4">
            <Clock className="text-[#ff006e] glow-pink" size={48} />
            <h2 className="text-5xl md:text-7xl font-bold text-white">
              EVENT <span className="text-[#ff006e] glow-pink">SCHEDULE</span>
            </h2>
            <Clock className="text-[#ff006e] glow-pink" size={48} />
          </div>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[#ff006e] to-transparent mx-auto mb-8"></div>
          <p className="text-[#a0a0a0] text-xl max-w-3xl mx-auto leading-relaxed">
            Your complete roadmap from registration to victory. Mark your calendars and prepare for 24 hours of non-stop hacking excitement!
          </p>
        </div>

        {/* Timeline */}
        <div className="space-y-16">
          {schedulePhases.map((phase, phaseIndex) => {
            const PhaseIcon = phase.icon;
            return (
              <div key={phaseIndex} className="relative">
                {/* Phase Header */}
                <div className="flex items-center mb-10">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mr-6 transition-all hover:scale-110"
                    style={{ 
                      backgroundColor: `${phase.color}20`, 
                      border: `3px solid ${phase.color}`,
                      boxShadow: `0 0 30px ${phase.color}40`
                    }}
                  >
                    <PhaseIcon style={{ color: phase.color }} size={32} />
                  </div>
                  <div>
                    <h3 className="text-3xl md:text-4xl font-bold text-white">{phase.phase}</h3>
                    <div className="flex items-center gap-2 mt-2">
                      <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: phase.color }}></div>
                      <span className="text-sm text-[#a0a0a0] font-mono">{phase.events.length} Events</span>
                    </div>
                  </div>
                </div>

                {/* Events Timeline */}
                <div className="ml-8 border-l-4" style={{ borderColor: `${phase.color}30` }}>
                  {phase.events.map((event, eventIndex) => (
                    <div key={eventIndex} className="relative pl-12 pb-12 last:pb-0 group">
                      {/* Timeline dot */}
                      <div
                        className="absolute left-0 top-2 w-6 h-6 rounded-full transform -translate-x-[13px] transition-all group-hover:scale-125"
                        style={{ 
                          backgroundColor: phase.color,
                          boxShadow: `0 0 20px ${phase.color}60`
                        }}
                      >
                        {event.status === 'completed' && (
                          <CheckCircle size={16} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#0a0a0a]" />
                        )}
                      </div>

                      {/* Event Card */}
                      <div 
                        className="bg-[#1a1a2e]/80 backdrop-blur-sm border rounded-xl p-6 md:p-8 transition-all duration-300 hover:transform hover:translate-x-2 hover:shadow-2xl relative overflow-hidden"
                        style={{ borderColor: `${phase.color}30` }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.borderColor = phase.color;
                          e.currentTarget.style.boxShadow = `0 0 40px ${phase.color}40`;
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.borderColor = `${phase.color}30`;
                          e.currentTarget.style.boxShadow = 'none';
                        }}
                      >
                        {/* Background glow */}
                        <div 
                          className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity"
                          style={{ backgroundColor: phase.color }}
                        ></div>
                        
                        <div className="relative z-10">
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                            <div className="flex items-center gap-3 mb-2 md:mb-0">
                              <Zap style={{ color: phase.color }} size={20} />
                              <h4 className="text-xl md:text-2xl font-bold text-white">{event.title}</h4>
                            </div>
                            <div className="flex items-center gap-2">
                              <Clock size={16} style={{ color: phase.color }} />
                              <span
                                className="text-sm md:text-base font-mono font-semibold"
                                style={{ color: phase.color }}
                              >
                                {event.time}
                              </span>
                            </div>
                          </div>
                          
                          <p className="text-[#a0a0a0] text-base md:text-lg leading-relaxed">
                            {event.description}
                          </p>
                          
                          {/* Status Badge */}
                          <div className="mt-4">
                            {event.status === 'completed' ? (
                              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-[#00ff9d]/20 text-[#00ff9d]">
                                <CheckCircle size={14} />
                                Completed
                              </span>
                            ) : (
                              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-[#ffbe0b]/20 text-[#ffbe0b]">
                                <Bell size={14} />
                                Upcoming
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Stay Connected Section */}
        <div className="mt-20">
          <div className="bg-gradient-to-r from-[#1a1a2e]/80 to-[#0a0a0a]/80 backdrop-blur-sm border border-[#00ff9d]/30 rounded-2xl p-8 md:p-12 text-center">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <UsersIcon className="text-[#00ff9d] glow-green" size={64} />
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-[#ff006e] rounded-full animate-pulse"></div>
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Stay Connected & Updated
            </h2>
            <p className="text-[#a0a0a0] text-lg mb-8 max-w-2xl mx-auto">
              Join our Discord server for real-time updates, announcements, and community support throughout the event.
              Get instant notifications for challenge releases and leaderboard updates!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-[#00ff9d] text-[#0a0a0a] font-bold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(0,255,157,0.6)]">
                JOIN DISCORD
              </button>
              <button className="px-8 py-4 border-2 border-[#00d9ff] text-[#00d9ff] font-bold rounded-lg transition-all duration-300 hover:bg-[#00d9ff] hover:text-[#0a0a0a] hover:scale-105">
                SET REMINDER
              </button>
            </div>
          </div>
        </div>

        {/* Quick Facts */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#1a1a2e]/50 backdrop-blur-sm border border-[#00ff9d]/30 rounded-xl p-6 text-center">
            <Trophy className="text-[#00ff9d] mx-auto mb-4 glow-green" size={48} />
            <h3 className="text-xl font-bold text-white mb-2">24 Hours</h3>
            <p className="text-[#a0a0a0] text-sm">of Non-stop Hacking</p>
          </div>
          <div className="bg-[#1a1a2e]/50 backdrop-blur-sm border border-[#00d9ff]/30 rounded-xl p-6 text-center">
            <Zap className="text-[#00d9ff] mx-auto mb-4 glow-blue" size={48} />
            <h3 className="text-xl font-bold text-white mb-2">Live Support</h3>
            <p className="text-[#a0a0a0] text-sm">Mentors & Q&A Sessions</p>
          </div>
          <div className="bg-[#1a1a2e]/50 backdrop-blur-sm border border-[#ff006e]/30 rounded-xl p-6 text-center">
            <Award className="text-[#ff006e] mx-auto mb-4 glow-pink" size={48} />
            <h3 className="text-xl font-bold text-white mb-2">Exciting Prizes</h3>
            <p className="text-[#a0a0a0] text-sm">for Top Performers</p>
          </div>
        </div>
      </div>
    </section>
  );
}
