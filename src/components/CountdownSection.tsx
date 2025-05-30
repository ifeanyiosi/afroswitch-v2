"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Ticket, CalendarDays, Clock, Mail } from "lucide-react";

const CountdownSection = () => {
  // Configuration Dates
  const eventTargetDate = new Date("2025-08-31T00:00:00");
  const countdownActivationDate = new Date("2000-01-01T00:00:00");

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    milliseconds: 0,
  });

  const [isLiveModeActive, setIsLiveModeActive] = useState(false);

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date();
      const currentlyLive = now >= countdownActivationDate;
      setIsLiveModeActive(currentlyLive);

      const difference = eventTargetDate.getTime() - now.getTime();

      if (currentlyLive && difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / (1000 * 60)) % 60);
        const seconds = Math.floor((difference / 1000) % 60);
        const milliseconds = Math.floor(difference % 1000);

        setTimeLeft({ days, hours, minutes, seconds, milliseconds });
      } else {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          milliseconds: 0,
        });
      }
    };

    updateCountdown();
    const timer = setInterval(updateCountdown, 10);
    return () => clearInterval(timer);
  }, []);

  const padNumber = (num: number, length: number = 2) => {
    return num.toString().padStart(length, "0");
  };

  return (
    <section
      className="relative min-h-screen overflow-hidden py-16 lg:py-24"
      style={{ backgroundColor: "#FF5722" }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Elements */}
        <div
          className="absolute top-20 left-10 w-24 h-24 rounded-full blur-xl animate-pulse"
          style={{ backgroundColor: "rgba(255, 235, 59, 0.3)" }}
        ></div>
        <div
          className="absolute bottom-40 right-20 w-32 h-32 rotate-45 blur-xl animate-spin"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.3)",
            animationDuration: "25s",
          }}
        ></div>
        <div
          className="absolute top-1/3 right-1/4 w-16 h-16 rounded-full blur-lg animate-bounce"
          style={{ backgroundColor: "rgba(76, 175, 80, 0.3)" }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center gap-3 px-8 py-3 rounded-full mb-8 border-4 shadow-2xl transform hover:scale-105 transition-all duration-300"
            style={{
              backgroundColor: "#ffffff",
              borderColor: "#4CAF50",
              boxShadow: "0 10px 30px rgba(76, 175, 80, 0.3)",
            }}
          >
            <Clock
              className="w-6 h-6 animate-pulse"
              style={{ color: "#FF5722" }}
            />
            <span
              className="font-black tracking-wider text-lg"
              style={{
                color: "#4CAF50",
                fontFamily: "Impact, Arial Black, sans-serif",
                textShadow: "1px 1px 0 rgba(255, 235, 59, 0.5)",
              }}
            >
              ⏳ COUNTDOWN ⏳
            </span>
          </div>

          <h1
            className="text-4xl sm:text-5xl lg:text-7xl font-black leading-tight mb-6"
            style={{
              fontFamily: "Impact, Arial Black, sans-serif",
              textShadow:
                "4px 4px 0 rgba(255, 255, 255, 0.8), 8px 8px 0 rgba(76, 175, 80, 0.3)",
            }}
          >
            <span style={{ color: "#FFFFFF" }}>AFROSWITCH</span>
            <span
              className="block animate-pulse"
              style={{
                color: "#FFEB3B",
                textShadow: "3px 3px 0 #4CAF50, 6px 6px 0 rgba(0, 0, 0, 0.1)",
              }}
            >
              STARTS IN
            </span>
          </h1>
        </div>

        {/* Countdown Timer */}
        <div
          className="bg-white rounded-3xl border-4 p-8 lg:p-12 shadow-2xl mb-16"
          style={{
            borderColor: "#4CAF50",
            boxShadow: "0 20px 50px rgba(76, 175, 80, 0.3)",
          }}
        >
          <div className="text-center mb-8">
            <h2
              className="text-2xl md:text-4xl font-bold mb-4"
              style={{
                color: "#FF5722",
                fontFamily: "Impact, Arial Black, sans-serif",
              }}
            >
              {isLiveModeActive ? "GATES OPEN IN" : "COMING SOON"}
            </h2>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 text-[#FF5722]">
            {[
              { value: timeLeft.days, label: "DAYS" },
              { value: timeLeft.hours, label: "HOURS" },
              { value: timeLeft.minutes, label: "MINUTES" },
              { value: timeLeft.seconds, label: "SECONDS" },
            ].map((item, index) => (
              <React.Fragment key={item.label}>
                <div
                  className="flex flex-col items-center p-4 rounded-2xl border-4 transform hover:scale-110 transition-all duration-300"
                  style={{
                    backgroundColor: "#FFEB3B",
                    borderColor: "#4CAF50",
                    minWidth: "120px",
                  }}
                >
                  <span
                    className="text-4xl md:text-6xl font-bold"
                    style={{
                      fontFamily: "Impact, Arial Black, sans-serif",
                      textShadow: "2px 2px 0 rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    {padNumber(item.value)}
                  </span>
                  <span
                    className="text-sm md:text-base font-bold uppercase"
                    style={{ color: "#4CAF50" }}
                  >
                    {item.label}
                  </span>
                </div>
                {index < 3 && (
                  <div
                    className="text-4xl md:text-6xl font-bold"
                    style={{ color: "#4CAF50" }}
                  >
                    :
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="flex justify-center mb-8">
            <div
              className="w-16 h-1 rounded-full animate-pulse"
              style={{ backgroundColor: "#FFEB3B" }}
            ></div>
          </div>

          <h2
            className="text-2xl md:text-4xl font-bold mb-8"
            style={{
              color: "#FFFFFF",
              fontFamily: "Impact, Arial Black, sans-serif",
              textShadow: "2px 2px 0 rgba(0, 0, 0, 0.2)",
            }}
          >
            {isLiveModeActive
              ? "SECURE YOUR PLACE NOW!"
              : "JOIN OUR NEWSLETTER FOR UPDATES"}
          </h2>

          <Link
            href={
              isLiveModeActive
                ? "https://www.showpass.com/afroswitch24/"
                : "/newsletter"
            }
            className="inline-flex items-center gap-3 font-bold px-12 py-6 rounded-full transition-all duration-300 transform hover:scale-110 hover:rotate-2 border-4 text-xl shadow-2xl"
            style={{
              backgroundColor: isLiveModeActive ? "#4CAF50" : "#FFEB3B",
              color: isLiveModeActive ? "#FFFFFF" : "#FF5722",
              borderColor: isLiveModeActive ? "#FFEB3B" : "#4CAF50",
              fontFamily: "Impact, Arial Black, sans-serif",
              textShadow: "2px 2px 0 rgba(0, 0, 0, 0.2)",
              boxShadow: "0 15px 40px rgba(0, 0, 0, 0.2)",
            }}
          >
            {isLiveModeActive ? (
              <>
                <Ticket className="w-8 h-8" />
                BUY TICKETS NOW!
              </>
            ) : (
              <>
                <Mail className="w-8 h-8" />
                JOIN THE WAITLIST
              </>
            )}
          </Link>

          {/* Event Date */}
          <div
            className="mt-12 inline-flex items-center gap-3 px-6 py-3 rounded-full border-4"
            style={{
              backgroundColor: "#4CAF50",
              borderColor: "#FFEB3B",
            }}
          >
            <CalendarDays className="w-6 h-6" style={{ color: "#FFFFFF" }} />
            <span
              className="font-black text-lg"
              style={{
                color: "#FFFFFF",
                fontFamily: "Impact, Arial Black, sans-serif",
              }}
            >
              🗓️ AUGUST 31, 2025 🎉
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountdownSection;
