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
      <div className="flex justify-center items-center py-4 sm:py-6 md:py-8 px-4">
        <div className="bg-gradient-to-r from-red-600 to-red-800 px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 rounded-xl sm:rounded-2xl shadow-2xl border-2 sm:border-4 border-red-400 relative overflow-hidden">
          {/* Animated background effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
          <div className="relative z-10 text-center">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-black text-white mb-1 sm:mb-2 gaming-font animate-pulse">
              🔴 EVENT IS LIVE! 🔴
            </h2>
            <p className="text-white text-sm sm:text-base md:text-lg font-bold hack-font">
              JOIN THE COMPETITION NOW!
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center items-center py-2 sm:py-3 md:py-4 px-2">
      <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-black text-white mb-2 sm:mb-3 gaming-font text-center">COUNTDOWN TO EVENT</h3>
      <div className="grid grid-cols-4 gap-1.5 sm:gap-2 md:gap-4 lg:gap-6 bg-gradient-to-br from-red-900/90 to-black/90 backdrop-blur-sm rounded-xl sm:rounded-2xl p-2 sm:p-3 md:p-4 shadow-2xl border-2 sm:border-4 border-red-600 relative overflow-hidden w-full max-w-xs sm:max-w-md md:max-w-2xl">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `repeating-linear-gradient(0deg, #dc2626 0px, #dc2626 1px, transparent 1px, transparent 20px),
                            repeating-linear-gradient(90deg, #dc2626 0px, #dc2626 1px, transparent 1px, transparent 20px)`,
        }}></div>
        
        {[
          { label: 'DAYS', value: timeLeft.days, color: 'from-red-600 to-red-800' },
          { label: 'HOURS', value: timeLeft.hours, color: 'from-red-700 to-red-900' },
          { label: 'MINUTES', value: timeLeft.minutes, color: 'from-red-500 to-red-700' },
          { label: 'SECONDS', value: timeLeft.seconds, color: 'from-red-800 to-black' }
        ].map((item, index) => (
          <div key={index} className="flex flex-col items-center relative z-10">
            <div className={`bg-gradient-to-br ${item.color} border-2 sm:border-3 md:border-4 border-red-400 rounded-lg sm:rounded-xl p-1.5 sm:p-2 md:p-3 min-w-[50px] sm:min-w-[60px] md:min-w-[90px] shadow-lg hover:shadow-red-400/70 hover:scale-110 transition-all duration-300 gaming-font relative overflow-hidden`}>
              {/* Retro scan lines effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/20 to-transparent animate-pulse"></div>
              <div className="relative z-10">
                <div className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-black text-white hack-font text-center drop-shadow-lg">
                  {String(item.value).padStart(2, '0')}
                </div>
              </div>
            </div>
            <div className="text-white text-[0.5rem] sm:text-xs md:text-sm mt-0.5 sm:mt-1 font-black tracking-wider gaming-font text-center">
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
