"use client";

import React, { useState, useEffect } from "react";

const CountdownSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    milliseconds: 0,
  });

  useEffect(() => {
    // Set your event date here
    const eventDate = new Date("2025-08-31T00:00:00");

    const updateCountdown = () => {
      const now = new Date();
      const difference = eventDate.getTime() - now.getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / (1000 * 60)) % 60);
        const seconds = Math.floor((difference / 1000) % 60);
        const milliseconds = Math.floor(difference % 1000);

        setTimeLeft({ days, hours, minutes, seconds, milliseconds });
      }
    };

    // Update every 10ms for smooth milliseconds display
    const timer = setInterval(updateCountdown, 10);

    return () => clearInterval(timer);
  }, []);

  const padNumber = (num: number, length: number = 2) => {
    return num.toString().padStart(length, "0");
  };

  return (
    <div className="bg-black lg:min-h-screen text-white px-4 py-20">
      <div className="max-w-[1500px] mx-auto px-4">
        {/* Countdown Section */}
        <div className="text-center mb-16">
          <div className="text-2xl uppercase md:text-4xl font-bold mb-8">
            Gates open in
          </div>
          <div className="flex justify-center items-center gap-2 md:gap-8 text-[#FF5300] mb-8">
            <div className="flex flex-col items-center">
              <span className="text-3xl md:text-6xl font-bold">
                {padNumber(timeLeft.days)}
              </span>
              <span className="text-sm md:text-base text-white opacity-80">
                DAYS
              </span>
            </div>
            <span className="text-3xl md:text-6xl font-bold">:</span>
            <div className="flex flex-col items-center">
              <span className="text-3xl md:text-6xl font-bold">
                {padNumber(timeLeft.hours)}
              </span>
              <span className="text-sm md:text-base text-white opacity-80">
                HOURS
              </span>
            </div>
            <span className="text-3xl md:text-6xl font-bold">:</span>
            <div className="flex flex-col items-center">
              <span className="text-3xl md:text-6xl font-bold">
                {padNumber(timeLeft.minutes)}
              </span>
              <span className="text-sm md:text-base text-white opacity-80">
                MINUTES
              </span>
            </div>
            <span className="text-3xl md:text-6xl font-bold">:</span>
            <div className="flex flex-col items-center">
              <span className="text-3xl md:text-6xl font-bold">
                {padNumber(timeLeft.seconds)}
              </span>
              <span className="text-sm md:text-base text-white opacity-80">
                SECONDS
              </span>
            </div>
          </div>
        </div>

        {/* Separator */}
        <div className="flex items-center justify-center mb-16">
          <div className="flex-grow h-px bg-white/20"></div>
          <div className="mx-4">
            <div className="w-4 h-4 rotate-45 border-2 border-[#FF5300]"></div>
          </div>
          <div className="flex-grow h-px bg-white/20"></div>
        </div>

        {/* Call to Action Section */}
        <div className="text-center">
          <h2 className="text-2xl uppercase md:text-4xl font-bold mb-6">
            Secure your place and pre-register now
          </h2>
          <button className="bg-[#FF5300] hover:bg-[#FF5300]/90 text-white font-bold py-4 px-8 rounded-full text-lg md:text-xl transition-all duration-300 transform hover:scale-105">
            BUY TICKETS
          </button>
        </div>
      </div>
    </div>
  );
};

export default CountdownSection;
