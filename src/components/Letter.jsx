import React, { useEffect, useState } from 'react';

function Letter() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date('2025-01-10T13:15:00');

    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(interval);
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / (1000 * 60)) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-screen flex justify-center items-center px-4 sm:px-8 md:px-12">
      <div className="flex space-x-2 sm:space-x-4 md:space-x-6">
        <div className="flex flex-col items-center w-16 sm:w-20 md:w-24 h-20 sm:h-24 md:h-32 bg-gray-800 text-yellow-500 rounded-md justify-center">
          <div className="text-2xl sm:text-4xl md:text-5xl font-semibold">{timeLeft.days}</div>
          <div className="text-xs sm:text-sm md:text-base">days</div>
        </div>

        <div className="flex items-center justify-center text-yellow-500 text-xl sm:text-2xl md:text-3xl font-semibold">:</div>

        <div className="flex flex-col items-center w-16 sm:w-20 md:w-24 h-20 sm:h-24 md:h-32 bg-gray-800 text-yellow-500 rounded-md justify-center">
          <div className="text-2xl sm:text-4xl md:text-5xl font-semibold">{timeLeft.hours}</div>
          <div className="text-xs sm:text-sm md:text-base">hours</div>
        </div>

        <div className="flex items-center justify-center text-yellow-500 text-xl sm:text-2xl md:text-3xl font-semibold">:</div>

        <div className="flex flex-col items-center w-16 sm:w-20 md:w-24 h-20 sm:h-24 md:h-32 bg-gray-800 text-yellow-500 rounded-md justify-center">
          <div className="text-2xl sm:text-4xl md:text-5xl font-semibold">{timeLeft.minutes}</div>
          <div className="text-xs sm:text-sm md:text-base">min</div>
        </div>

        <div className="flex items-center justify-center text-yellow-500 text-xl sm:text-2xl md:text-3xl font-semibold">:</div>

        <div className="flex flex-col items-center w-16 sm:w-20 md:w-24 h-20 sm:h-24 md:h-32 bg-gray-800 text-yellow-500 rounded-md justify-center">
          <div className="text-2xl sm:text-4xl md:text-5xl font-semibold">{timeLeft.seconds}</div>
          <div className="text-xs sm:text-sm md:text-base">sec</div>
        </div>
      </div>
    </div>
  );
}

export default Letter;
