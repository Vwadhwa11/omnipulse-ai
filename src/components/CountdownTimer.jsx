import React, { useState, useEffect } from 'react';

export default function CountdownTimer() {
  // Launch targeted for 45 days from current date
  const [timeLeft, setTimeLeft] = useState({
    days: 42,
    hours: 14,
    minutes: 36,
    seconds: 50,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: 59, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { label: 'DAYS', value: String(timeLeft.days).padStart(2, '0') },
    { label: 'HOURS', value: String(timeLeft.hours).padStart(2, '0') },
    { label: 'MINUTES', value: String(timeLeft.minutes).padStart(2, '0') },
    { label: 'SECONDS', value: String(timeLeft.seconds).padStart(2, '0') },
  ];

  return (
    <div className="flex flex-col items-center">
      <div className="text-xs font-semibold tracking-widest text-indigo-400 uppercase mb-3 flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
        <span>Public Beta Launch Countdown</span>
      </div>
      
      <div className="grid grid-cols-4 gap-2.5 sm:gap-4 max-w-md w-full">
        {timeUnits.map((unit, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center p-3 sm:p-4 rounded-xl bg-slate-900/80 border border-slate-800/80 shadow-lg shadow-indigo-950/20 backdrop-blur-md relative overflow-hidden group hover:border-indigo-500/40 transition-all duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <span className="text-2xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-300 font-mono tracking-tight">
              {unit.value}
            </span>
            <span className="text-[10px] sm:text-xs font-semibold text-slate-400 tracking-wider mt-1">
              {unit.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
