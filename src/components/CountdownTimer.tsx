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
        <div className="text-4xl md:text-6xl font-bold text-[#00ff9d] animate-pulse glow-green">
          🔴 EVENT LIVE!
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center py-8">
      <div className="grid grid-cols-4 gap-4 md:gap-8">
        {[
          { label: 'DAYS', value: timeLeft.days },
          { label: 'HOURS', value: timeLeft.hours },
          { label: 'MINUTES', value: timeLeft.minutes },
          { label: 'SECONDS', value: timeLeft.seconds }
        ].map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="bg-[#1a1a2e] border-2 border-[#00ff9d] rounded-lg p-4 md:p-6 min-w-[60px] md:min-w-[100px] glow-green">
              <div className="text-3xl md:text-5xl font-bold text-[#00ff9d] font-mono">
                {String(item.value).padStart(2, '0')}
              </div>
            </div>
            <div className="text-[#a0a0a0] text-xs md:text-sm mt-2 font-semibold tracking-wider">
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
