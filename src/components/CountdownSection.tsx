"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Ticket, CalendarDays, Clock, Mail } from "lucide-react";

const CountdownSection = () => {
  const eventTargetDate = new Date("2025-08-31T00:00:00");
  const countdownActivationDate = new Date("2000-01-01T00:00:00");

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [isLiveModeActive, setIsLiveModeActive] = useState(false);

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date();
      const isLive = now >= countdownActivationDate;
      setIsLiveModeActive(isLive);

      const diff = eventTargetDate.getTime() - now.getTime();
      if (isLive && diff > 0) {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const seconds = Math.floor((diff / 1000) % 60);
        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);
    return () => clearInterval(timer);
  }, []);

  const pad = (num: number) => num.toString().padStart(2, "0");

  return (
    <section className="relative min-h-screen bg-[#fdf6ed] text-gray-900 py-16 sm:py-24 overflow-hidden">
      {/* Subtle geometric background pattern */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-red-600 px-4 py-2 rounded-lg border border-red-500 mb-6 sm:mb-8 select-none">
            <Clock className="w-4 h-4 text-white" />
            <span className="uppercase text-xs sm:text-sm tracking-wider text-white font-medium">
              Live Countdown
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900 mb-2">
            Afroswitch
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl text-red-600 font-semibold">
            Starts In
          </p>
        </div>

        {/* Countdown Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {[
            { value: timeLeft.days, label: "Days" },
            { value: timeLeft.hours, label: "Hours" },
            { value: timeLeft.minutes, label: "Minutes" },
            { value: timeLeft.seconds, label: "Seconds" },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-gray-800 border border-gray-700 rounded-xl p-6 text-center hover:border-red-500 transition-colors duration-300 cursor-default select-none"
            >
              <div className="text-4xl sm:text-5xl font-extrabold text-red-400 mb-2">
                {pad(item.value)}
              </div>
              <div className="text-xs sm:text-sm uppercase tracking-wider text-gray-400 font-semibold">
                {item.label}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-6 sm:mb-8 text-gray-700">
            {isLiveModeActive
              ? "Don't miss out — secure your spot today"
              : "Be the first to know when tickets go live"}
          </h2>

          <div className="flex items-center flex-col gap-4">
            <Link
              href={
                isLiveModeActive
                  ? "https://www.showpass.com/afroswitch24/"
                  : "/newsletter"
              }
              className={`inline-flex items-center gap-3 px-8 py-4 text-lg font-semibold rounded-lg transition-transform duration-300 transform hover:scale-105 active:scale-95 shadow-lg ${
                isLiveModeActive
                  ? "bg-red-600 text-white hover:bg-red-700 border-2 border-red-600 hover:border-red-700"
                  : "bg-white text-gray-900 hover:bg-gray-100 border-2 border-white hover:border-gray-100"
              }`}
            >
              {isLiveModeActive ? (
                <>
                  <Ticket className="w-6 h-6" />
                  Get Tickets Now
                </>
              ) : (
                <>
                  <Mail className="w-6 h-6" />
                  Join Waitlist
                </>
              )}
            </Link>

            {/* Event Date */}
            <div className="mt-8 sm:mt-10 inline-flex items-center gap-3 px-6 py-3 rounded-lg border border-gray-700 bg-gray-800 select-none">
              <CalendarDays className="w-5 h-5 text-red-400" />
              <span className="text-base font-semibold text-white uppercase">
                August 31, 2025
              </span>
            </div>
          </div>

          {/* Additional Info */}
          <p className="mt-6 sm:mt-8 text-sm sm:text-base text-gray-500 max-w-md mx-auto leading-relaxed">
            Experience the ultimate fusion of African culture and electronic
            music
          </p>
        </div>
      </div>
    </section>
  );
};

export default CountdownSection;
