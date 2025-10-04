import { Calendar, Clock, Award, Users as UsersIcon, Zap, Bell, Trophy, CheckCircle } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function SchedulePage() {
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
    <div className="min-h-screen bg-gradient-to-br from-orange-200 via-yellow-300 to-red-400 text-gray-800">
      <Navigation />
      
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

      <section className="relative pt-32 pb-8 px-4 sm:px-6 lg:px-8 min-h-screen">
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header Section */}
          <div className="text-center mb-8">
            <div className="mb-4 flex justify-center items-center gap-2 md:gap-4">
              <Clock className="text-orange-600 animate-bounce" size={32} />
              <h1 className="text-2xl md:text-4xl font-black text-gray-800 cyber-title">
                🕐 EVENT SCHEDULE 🕐
              </h1>
              <Clock className="text-orange-600 animate-bounce" size={32} />
            </div>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent mx-auto mb-4"></div>
            <p className="text-gray-800 text-sm md:text-lg max-w-3xl mx-auto leading-relaxed hack-font font-bold">
              🎮 YOUR COMPLETE ROADMAP FROM REGISTRATION TO VICTORY. MARK YOUR CALENDARS AND PREPARE FOR 24 HOURS OF NON-STOP HACKING EXCITEMENT! 🎮
            </p>
          </div>

          {/* Timeline */}
          <div className="space-y-8">
            {schedulePhases.map((phase, phaseIndex) => {
              const PhaseIcon = phase.icon;
              return (
                <div key={phaseIndex} className="relative">
                  {/* Phase Header */}
                  <div className="flex items-center mb-6">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center mr-4 transition-all hover:scale-110 bg-white/90 border-2 border-orange-400 shadow-lg"
                    >
                      <PhaseIcon className="text-orange-600" size={24} />
                    </div>
                    <div>
                      <h2 className="text-xl md:text-2xl font-black text-gray-800 hack-font">{phase.phase.toUpperCase()}</h2>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="w-2 h-2 rounded-full animate-pulse bg-orange-500"></div>
                        <span className="text-sm text-gray-800 hack-font font-bold">{phase.events.length} EVENTS</span>
                      </div>
                    </div>
                  </div>

                  {/* Events Timeline */}
                  <div className="ml-6 border-l-4 border-orange-300">
                    {phase.events.map((event, eventIndex) => (
                      <div key={eventIndex} className="relative pl-8 pb-8 last:pb-0 group">
                        {/* Timeline dot */}
                        <div className="absolute left-0 top-2 w-6 h-6 rounded-full transform -translate-x-[13px] transition-all group-hover:scale-125 bg-orange-500 shadow-lg">
                          {event.status === 'completed' && (
                            <CheckCircle size={16} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white" />
                          )}
                        </div>

                        {/* Event Card */}
                        <div className="bg-white/90 backdrop-blur-sm border-2 border-orange-300 rounded-xl p-4 md:p-6 transition-all duration-300 hover:transform hover:translate-x-2 hover:shadow-xl relative overflow-hidden hover:border-orange-500">
                          <div className="relative z-10">
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                              <div className="flex items-center gap-2 mb-2 md:mb-0">
                                <Zap className="text-orange-500" size={18} />
                                <h3 className="text-base md:text-lg font-black text-gray-800 hack-font">{event.title.toUpperCase()}</h3>
                              </div>
                              <div className="flex items-center gap-2">
                                <Clock size={14} className="text-orange-500" />
                                <span className="text-sm md:text-base hack-font font-black text-orange-600">
                                  {event.time.toUpperCase()}
                                </span>
                              </div>
                            </div>
                            
                            <p className="text-gray-800 text-sm md:text-base leading-relaxed hack-font font-bold">
                              {event.description.toUpperCase()}
                            </p>
                            
                            {/* Status Badge */}
                            <div className="mt-3">
                              {event.status === 'completed' ? (
                                <span className="inline-flex items-center gap-2 px-2 py-1 rounded-full text-xs font-black bg-green-500 text-white gaming-font">
                                  <CheckCircle size={12} />
                                  COMPLETED
                                </span>
                              ) : (
                                <span className="inline-flex items-center gap-2 px-2 py-1 rounded-full text-xs font-black bg-orange-500 text-white gaming-font">
                                  <Bell size={12} />
                                  UPCOMING
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
          <div className="mt-12">
            <div className="bg-white/90 backdrop-blur-sm border-2 border-orange-400 rounded-2xl p-6 md:p-8 text-center shadow-xl">
              <div className="flex justify-center mb-4">
                <div className="relative">
                  <UsersIcon className="text-orange-600" size={48} />
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                </div>
              </div>
              <h2 className="text-xl md:text-2xl font-black text-gray-800 mb-3 hack-font">
                STAY CONNECTED & UPDATED
              </h2>
              <p className="text-gray-800 text-sm md:text-base mb-6 max-w-2xl mx-auto hack-font font-bold">
                JOIN OUR DISCORD SERVER FOR REAL-TIME UPDATES, ANNOUNCEMENTS, AND COMMUNITY SUPPORT THROUGHOUT THE EVENT.
                GET INSTANT NOTIFICATIONS FOR CHALLENGE RELEASES AND LEADERBOARD UPDATES!
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button className="px-6 py-3 bg-orange-500 text-white font-black rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl gaming-font">
                  JOIN DISCORD
                </button>
                <button className="px-6 py-3 border-2 border-orange-500 text-orange-600 font-black rounded-lg transition-all duration-300 hover:bg-orange-500 hover:text-white hover:scale-105 gaming-font">
                  SET REMINDER
                </button>
              </div>
            </div>
          </div>

          {/* Quick Facts */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white/90 backdrop-blur-sm border-2 border-orange-400 rounded-xl p-4 text-center hover:scale-105 transition-all duration-300 shadow-lg">
              <Trophy className="text-orange-500 mx-auto mb-3" size={32} />
              <h3 className="text-base font-black text-gray-800 mb-1 hack-font">24 HOURS</h3>
              <p className="text-gray-800 text-xs hack-font font-bold">OF NON-STOP HACKING</p>
            </div>
            <div className="bg-white/90 backdrop-blur-sm border-2 border-orange-400 rounded-xl p-4 text-center hover:scale-105 transition-all duration-300 shadow-lg">
              <Zap className="text-red-500 mx-auto mb-3" size={32} />
              <h3 className="text-base font-black text-gray-800 mb-1 hack-font">LIVE SUPPORT</h3>
              <p className="text-gray-800 text-xs hack-font font-bold">MENTORS & Q&A SESSIONS</p>
            </div>
            <div className="bg-white/90 backdrop-blur-sm border-2 border-orange-400 rounded-xl p-4 text-center hover:scale-105 transition-all duration-300 shadow-lg">
              <Award className="text-yellow-500 mx-auto mb-3" size={32} />
              <h3 className="text-base font-black text-gray-800 mb-1 hack-font">EXCITING PRIZES</h3>
              <p className="text-gray-800 text-xs hack-font font-bold">FOR TOP PERFORMERS</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
