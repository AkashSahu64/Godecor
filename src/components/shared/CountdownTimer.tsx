import React, { useState, useEffect } from 'react';

interface CountdownTimerProps {
  targetDate: number;
}

const CountdownTimer = ({ targetDate }: CountdownTimerProps) => {
  const calculateTimeLeft = () => {
    const difference = targetDate - new Date().getTime();
    
    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60)
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex space-x-4 text-center">
      {Object.entries(timeLeft).map(([key, value]) => (
        <div key={key} className="flex-1">
          <div className="text-xl font-bold text-green-700">{value}</div>
          <div className="text-xs text-green-600 capitalize">{key}</div>
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;