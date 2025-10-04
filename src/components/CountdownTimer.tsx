import { useState, useEffect } from 'react';

const EVENT_DATE = new Date('2025-10-15T00:00:00+05:30').getTime();

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isLive: false
  });

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = EVENT_DATE - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isLive: true });
        return;
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
        isLive: false
      });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  if (timeLeft.isLive) {
    return (
      <div className="flex justify-center items-center py-8">
        <div className="bg-gradient-to-r from-red-500 to-orange-500 px-8 py-6 rounded-2xl shadow-2xl border-4 border-yellow-400 relative overflow-hidden">
          {/* Animated background effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
          <div className="relative z-10">
            <h2 className="text-2xl md:text-3xl font-black text-white mb-2 gaming-font animate-pulse">
              🔴 EVENT IS LIVE! 🔴
            </h2>
            <p className="text-white text-lg font-bold hack-font">
              JOIN THE COMPETITION NOW!
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center items-center py-4">
      <h3 className="text-lg md:text-xl font-black text-gray-800 mb-4 gaming-font">COUNTDOWN TO EVENT</h3>
      <div className="grid grid-cols-4 gap-3 md:gap-6 bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border-4 border-orange-400 relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `repeating-linear-gradient(0deg, #000 0px, #000 1px, transparent 1px, transparent 20px),
                            repeating-linear-gradient(90deg, #000 0px, #000 1px, transparent 1px, transparent 20px)`,
        }}></div>
        
        {[
          { label: 'DAYS', value: timeLeft.days, color: 'from-orange-400 to-orange-500' },
          { label: 'HOURS', value: timeLeft.hours, color: 'from-red-400 to-red-500' },
          { label: 'MINUTES', value: timeLeft.minutes, color: 'from-yellow-400 to-yellow-500' },
          { label: 'SECONDS', value: timeLeft.seconds, color: 'from-orange-500 to-red-500' }
        ].map((item, index) => (
          <div key={index} className="flex flex-col items-center relative z-10">
            <div className={`bg-gradient-to-br ${item.color} border-4 border-orange-300 rounded-xl p-3 md:p-4 min-w-[60px] md:min-w-[90px] shadow-lg hover:shadow-orange-400/70 hover:scale-110 transition-all duration-300 gaming-font relative overflow-hidden`}>
              {/* Retro scan lines effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/20 to-transparent animate-pulse"></div>
              <div className="relative z-10">
                <div className="text-3xl md:text-5xl font-black text-white hack-font text-center drop-shadow-lg">
                  {String(item.value).padStart(2, '0')}
                </div>
              </div>
            </div>
            <div className="text-gray-800 text-xs md:text-sm mt-2 font-black tracking-wider gaming-font text-center">
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
