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
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-red-900 text-white">
      <Navigation />
      
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

      <section className="relative pt-32 pb-8 px-4 sm:px-6 lg:px-8 min-h-screen">
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header Section */}
          <div className="text-center mb-6">
            <h1 className="text-xl md:text-2xl font-black text-white gaming-font mb-3">
              <span className="text-red-400">[</span>EVENT SCHEDULE<span className="text-red-400">]</span>
            </h1>
            <div className="bg-red-900/80 border border-red-500 rounded-lg p-3 max-w-2xl mx-auto">
              <p className="text-white text-sm gaming-font font-bold">
                <span className="text-red-300">🎮</span> COMPLETE ROADMAP TO VICTORY <span className="text-red-300">🎮</span><br/>
                <span className="text-red-200">24 HOURS • NON-STOP HACKING • EPIC PRIZES</span>
              </p>
            </div>
          </div>

          {/* Timeline */}
          <div className="space-y-8">
            {schedulePhases.map((phase, phaseIndex) => {
              const PhaseIcon = phase.icon;
              return (
                <div key={phaseIndex} className="relative">
                  {/* Phase Header */}
                  <div className="flex items-center mb-4">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center mr-3 transition-all hover:scale-110 bg-gradient-to-br from-red-500 to-red-700 border border-red-400 shadow-lg group-hover:from-yellow-400 group-hover:to-red-500"
                    >
                      <PhaseIcon className="text-white" size={20} />
                    </div>
                    <div>
                      <h2 className="text-lg font-black text-white gaming-font">{phase.phase.toUpperCase()}</h2>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="w-2 h-2 rounded-full animate-pulse bg-red-400"></div>
                        <span className="text-xs text-red-200 gaming-font font-bold">{phase.events.length} EVENTS</span>
                      </div>
                    </div>
                  </div>

                  {/* Events Timeline */}
                  <div className="ml-6 border-l-2 border-red-500/50">
                    {phase.events.map((event, eventIndex) => (
                      <div key={eventIndex} className="relative pl-6 pb-6 last:pb-0 group">
                        {/* Timeline dot */}
                        <div className="absolute left-0 top-2 w-4 h-4 rounded-full transform -translate-x-[9px] transition-all group-hover:scale-125 bg-red-500 shadow-lg">
                          {event.status === 'completed' && (
                            <CheckCircle size={12} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white" />
                          )}
                        </div>

                        {/* Event Card */}
                        <div className="bg-gradient-to-br from-gray-900/90 to-black/95 border border-red-500/50 rounded-lg p-4 transition-all duration-300 hover:transform hover:translate-x-2 hover:shadow-2xl relative overflow-hidden hover:border-red-400 group">
                          {/* Rich hover effects */}
                          <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-transparent to-red-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/5 via-red-500/5 to-blue-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          
                          <div className="relative z-10">
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                              <div className="flex items-center gap-2 mb-1 md:mb-0">
                                <Zap className="text-red-400" size={16} />
                                <h3 className="text-sm font-black text-white gaming-font group-hover:text-yellow-200 transition-colors duration-300">{event.title.toUpperCase()}</h3>
                              </div>
                              <div className="flex items-center gap-2">
                                <Clock size={12} className="text-red-400" />
                                <span className="text-xs gaming-font font-black text-red-300">
                                  {event.time.toUpperCase()}
                                </span>
                              </div>
                            </div>
                            
                            <p className="text-red-200 text-xs leading-relaxed gaming-font font-bold group-hover:text-white transition-colors duration-300">
                              {event.description.toUpperCase()}
                            </p>
                            
                            {/* Status Badge */}
                            <div className="mt-2">
                              {event.status === 'completed' ? (
                                <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-black bg-green-500 text-white gaming-font">
                                  <CheckCircle size={10} />
                                  COMPLETED
                                </span>
                              ) : (
                                <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-black bg-red-500 text-white gaming-font">
                                  <Bell size={10} />
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

        </div>
      </section>

      <Footer />
    </div>
  );
}
