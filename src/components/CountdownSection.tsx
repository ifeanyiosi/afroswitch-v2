"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";

const CountdownSection = () => {
  // Configuration Dates
  const eventTargetDate = new Date("2025-08-31T00:00:00"); // The date countdown is aiming for
  const countdownActivationDate = new Date("2000-01-01T00:00:00"); // Countdown becomes active from this date

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    milliseconds: 0,
  });

  // State to control UI elements like text and button links based on activation date
  const [isLiveModeActive, setIsLiveModeActive] = useState(false);

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date();

      // Determine if we are in "live" mode based on the activation date
      const currentlyLive = now >= countdownActivationDate;
      setIsLiveModeActive(currentlyLive);

      const difference = eventTargetDate.getTime() - now.getTime();

      // Only calculate and set countdown if in live mode and event is still in the future
      if (currentlyLive && difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / (1000 * 60)) % 60);
        const seconds = Math.floor((difference / 1000) % 60);
        const milliseconds = Math.floor(difference % 1000); // Milliseconds calculation

        setTimeLeft({ days, hours, minutes, seconds, milliseconds });
      } else {
        // If not in live mode yet, or if the event has passed, show zeros
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          milliseconds: 0,
        });
      }
    };

    updateCountdown(); // Call immediately to set initial state correctly
    // Update every 10ms for smooth milliseconds display (if you choose to display them)
    const timer = setInterval(updateCountdown, 10);

    return () => clearInterval(timer); // Cleanup interval on component unmount
  }, []); // eventTargetDate and countdownActivationDate are stable, so empty dependency array is fine.

  const padNumber = (num: number, length: number = 2) => {
    return num.toString().padStart(length, "0");
  };

  return (
    <div className="bg-black text-white px-4 py-20">
      <div className="max-w-[1500px] mx-auto px-4">
        {/* Countdown Section */}
        <div className="text-center mb-16">
          <div className="text-2xl uppercase md:text-4xl font-bold mb-8">
            {isLiveModeActive ? "Gates open in" : "Coming Soon"}
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
            {/* If you wish to display milliseconds, you can add a similar block here:
            <span className="text-3xl md:text-6xl font-bold">:</span>
            <div className="flex flex-col items-center">
              <span className="text-xl md:text-4xl font-bold">
                {padNumber(timeLeft.milliseconds, 3)} 
              </span>
              <span className="text-xs md:text-sm text-white opacity-80">
                MS
              </span>
            </div>
            */}
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
            {isLiveModeActive
              ? "Secure your place and register now"
              : "Join our newsletter for notifications"}
          </h2>
          <Link
            href={
              isLiveModeActive
                ? "https://www.showpass.com/afroswitch24/"
                : "/newsletter"
            }
            className="bg-[#FF5300] hover:bg-[#FF5300]/90 text-white font-bold py-4 px-8 rounded-full text-lg md:text-xl transition-all duration-300 transform hover:scale-105"
          >
            {isLiveModeActive ? "BUY TICKETS" : "JOIN"}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CountdownSection;
