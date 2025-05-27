/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"; // Assuming this is for Next.js App Router

import React, { useState, useEffect } from "react";
import {
  Calendar,
  Clock,
  MapPin,
  Music,
  Users,
  Star,
  Sparkles,
  Heart,
  Award,
  Globe,
} from "lucide-react";
import Link from "next/link";

const EventsPage = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    setIsLoaded(true);

    const handleMouseMove = (e: any) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length); // Use features.length
    }, 3000);
    return () => clearInterval(interval);
  }, []); // features.length won't change, so [] is fine if features is stable

  const features = [
    { icon: Music, text: "Authentic African Music", color: "#ffdc96" },
    { icon: Users, text: "Cultural Performances", color: "#368552" },
    { icon: Globe, text: "International Artists", color: "#d81212" },
    { icon: Heart, text: "Community Celebration", color: "#ffdc96" }, // Example, color could be different
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 opacity-20 pointer-events-none">
        <div
          className="absolute w-80 h-80 rounded-full blur-3xl animate-pulse"
          style={{
            backgroundColor: "#ffdc96",
            left: `${mousePosition.x * 0.08}px`,
            top: `${mousePosition.y * 0.08}px`,
            transition: "all 0.3s ease-out",
          }}
        />
        <div
          className="absolute w-60 h-60 rounded-full blur-2xl animate-pulse"
          style={{
            backgroundColor: "#368552",
            right: `${Math.max(0, 300 - mousePosition.x * 0.05)}px`,
            bottom: `${Math.max(0, 200 - mousePosition.y * 0.05)}px`,
            transition: "all 0.5s ease-out",
            animationDelay: "1s",
          }}
        />
      </div>
      {/* Floating Particles */}
      <div className="fixed inset-0 pointer-events-none">
        {Array.from({ length: 15 }, (_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full animate-pulse" // Consider a subtle movement animation too
            style={{
              backgroundColor:
                i % 3 === 0 ? "#ffdc96" : i % 3 === 1 ? "#368552" : "#d81212",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center px-4 py-20">
        <div className="absolute inset-0 bg-black bg-opacity-60" />

        <div
          className={`relative z-10 text-center max-w-7xl mx-auto transform transition-all duration-1000 ease-out ${
            // Adjusted duration
            isLoaded ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
          }`}
        >
          {/* Main Title */}
          <div className="relative mb-8">
            <h1
              className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] font-black mb-6 relative drop-shadow-2xl"
              style={{ color: "#ffdc96" }}
            >
              AfroSwitch
            </h1>
            <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 animate-bounce">
              <Sparkles
                className="w-8 h-8 sm:w-12 sm:h-12"
                style={{ color: "#d81212" }}
              />
            </div>
          </div>

          {/* Animated Subtitle */}
          <div className="mb-12 space-y-4">
            <p
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light tracking-wide"
              style={{ color: "#ffdc96" }}
            >
              Calgary&apos;s Premier African Cultural Festival
            </p>
            <div className="flex justify-center items-center gap-2">
              <div
                className="w-2 h-2 rounded-full animate-pulse"
                style={{ backgroundColor: "#d81212" }}
              />
              <span
                className="text-base sm:text-lg uppercase tracking-widest"
                style={{ color: "#368552" }}
              >
                Summer 2025
              </span>
              <div
                className="w-2 h-2 rounded-full animate-pulse"
                style={{ backgroundColor: "#d81212" }}
              />
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex justify-center">
            <a
              href="https://www.showpass.com/afroswitch24"
              target="_blank" // Good practice for external links
              rel="noopener noreferrer" // Security for external links
              className="group relative overflow-hidden px-8 sm:px-12 py-4 rounded-full text-lg sm:text-xl font-semibold text-black transition-all duration-300 hover:scale-110 hover:shadow-2xl transform-gpu"
              style={{ backgroundColor: "#ffdc96" }}
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ backgroundColor: "#368552" }} // Hover fill color
              />
              <div className="relative flex items-center gap-3 group-hover:text-white transition-colors duration-300">
                <Star className="w-5 h-5" />
                Get Tickets
              </div>
            </a>
          </div>
        </div>
      </div>
      {/* Main Event Information Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-12 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start">
          {/* Event Details Card */}
          <div className="lg:col-span-2">
            <div className="relative group">
              <div
                className="relative border-2 rounded-3xl p-6 sm:p-8 md:p-12 hover:shadow-2xl transition-all duration-500"
                style={{
                  backgroundColor: "rgba(255, 220, 150, 0.05)",
                  borderColor: "#ffdc96",
                }}
              >
                <div
                  className="inline-flex items-center gap-2 border rounded-full px-4 sm:px-6 py-2 mb-6 sm:mb-8"
                  style={{
                    backgroundColor: "rgba(212, 18, 18, 0.1)",
                    borderColor: "#d81212",
                  }}
                >
                  <Star
                    className="w-4 h-4 sm:w-5 sm:h-5 animate-pulse"
                    style={{ color: "#d81212" }}
                  />
                  <span
                    className="text-sm sm:text-base font-semibold tracking-wide"
                    style={{ color: "#d81212" }}
                  >
                    FLAGSHIP EVENT
                  </span>
                </div>

                <h2
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
                  style={{ color: "#ffdc96" }}
                >
                  Summer AfroSwitch 2025
                </h2>
                <p
                  className="text-lg sm:text-xl md:text-2xl mb-8 sm:mb-12 font-light"
                  style={{ color: "#368552" }} // Using one of the theme colors
                >
                  A Celebration of African Culture & Heritage
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12">
                  <div
                    className="flex items-center gap-4 p-4 rounded-2xl border transition-all duration-300 hover:scale-105 hover:shadow-lg"
                    style={{
                      backgroundColor: "rgba(255, 220, 150, 0.1)",
                      borderColor: "#ffdc96",
                    }}
                  >
                    <div
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: "#ffdc96" }}
                    >
                      <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
                    </div>
                    <div>
                      <p className="text-white font-semibold text-base sm:text-lg">
                        August 31, 2025{" "}
                        {/* Updated to match countdown if this is the main event */}
                      </p>
                      <p className="text-sm" style={{ color: "#b08d57" }}>
                        {" "}
                        {/* Darker shade of ffcd96 */}
                        Save the Date
                      </p>
                    </div>
                  </div>

                  <div
                    className="flex items-center gap-4 p-4 rounded-2xl border transition-all duration-300 hover:scale-105 hover:shadow-lg"
                    style={{
                      backgroundColor: "rgba(54, 133, 82, 0.1)",
                      borderColor: "#368552",
                    }}
                  >
                    <div
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: "#368552" }}
                    >
                      <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-semibold text-base sm:text-lg">
                        12:00 PM - 11:00 PM
                      </p>
                      <p className="text-sm" style={{ color: "#a0f0c0" }}>
                        {" "}
                        {/* Lighter shade of green */}
                        All Day Celebration
                      </p>
                    </div>
                  </div>

                  <Link
                  href="https://www.google.com/maps?q=Confluence+Historic+Site"
                  target="_blank"
                  rel="noopener noreferrer"
                    className="sm:col-span-2 flex items-center gap-4 p-4 rounded-2xl border transition-all duration-300 hover:scale-105 hover:shadow-lg"
                    style={{
                      backgroundColor: "rgba(212, 18, 18, 0.1)",
                      borderColor: "#d81212",
                    }}
                  >
                    <div
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: "#d81212" }}
                    >
                      <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-semibold text-base sm:text-lg">
                        Confluence Historic Site
                      </p>
                      <p className="text-sm" style={{ color: "#ffabab" }}>
                        {" "}
                        {/* Lighter shade of red */}
                        Calgary&apos;s Premier Historic Venue
                      </p>
                    </div>
                  </Link>
                </div>

                <div
                  className="flex items-center justify-center gap-4 border rounded-2xl py-6 mb-8"
                  style={{
                    backgroundColor: "rgba(54, 133, 82, 0.1)",
                    borderColor: "#368552",
                  }}
                >
                  <Users
                    className="w-6 h-6 sm:w-8 sm:h-8"
                    style={{ color: "#368552" }}
                  />
                  <div className="text-center">
                    <p
                      className="text-2xl sm:text-3xl font-bold"
                      style={{ color: "#ffdc96" }}
                    >
                      5000+
                    </p>
                    <p
                      className="text-xs sm:text-sm uppercase tracking-wider"
                      style={{ color: "#368552" }}
                    >
                      Expected Attendees
                    </p>
                  </div>
                  <Award
                    className="w-6 h-6 sm:w-8 sm:h-8"
                    style={{ color: "#d81212" }}
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Side Features */}
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h3
                className="text-2xl sm:text-3xl font-bold mb-4"
                style={{ color: "#ffdc96" }}
              >
                Experience
              </h3>
              <div
                className="w-16 h-1 mx-auto rounded-full"
                style={{ backgroundColor: "#d81212" }}
              />
            </div>

            {features.map((feature, index) => {
              const Icon = feature.icon;
              const isActive = activeFeature === index;
              // Card background colors when active, from your original structure
              const activeCardBgColors = [
                "rgba(255, 220, 150, 0.1)", // For feature with color #ffdc96
                "rgba(54, 133, 82, 0.1)", // For feature with color #368552
                "rgba(212, 18, 18, 0.1)", // For feature with color #d81212
                "rgba(255, 220, 150, 0.1)", // For the 4th feature, assuming it's like the first
              ];

              return (
                <div
                  key={index}
                  className={`p-4 sm:p-6 rounded-2xl border-2 transition-all duration-500 transform ${
                    isActive
                      ? "scale-105 shadow-xl"
                      : "scale-100 hover:scale-102 shadow-md"
                  }`}
                  style={{
                    backgroundColor: isActive
                      ? activeCardBgColors[index % activeCardBgColors.length]
                      : "rgba(255, 255, 255, 0.03)",
                    borderColor: isActive
                      ? feature.color
                      : "rgba(255, 255, 255, 0.2)",
                  }}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center transition-all duration-300"
                      style={{
                        backgroundColor: isActive
                          ? feature.color
                          : "rgba(255, 255, 255, 0.08)",
                        boxShadow: isActive
                          ? `0 0 12px ${feature.color}`
                          : "none",
                      }}
                    >
                      <Icon
                        className="w-5 h-5 sm:w-6 sm:h-6 transition-colors duration-300"
                        style={{
                          color: isActive
                            ? feature.color === "#ffdc96"
                              ? "black"
                              : "white"
                            : feature.color,
                        }}
                      />
                    </div>
                    <div className="flex-1">
                      {" "}
                      {/* Added flex-1 for text to take available space */}
                      <p
                        className="text-base sm:text-lg font-semibold transition-colors duration-300"
                        style={{ color: isActive ? "white" : "#e0e0e0" }}
                      >
                        {feature.text}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>{" "}
          {/* End of Side Features (space-y-6) */}
        </div>{" "}
        {/* End of grid */}
      </div>{" "}
      {/* End of Main Event Information Section (max-w-7xl) */}
      {/* You can add a Footer component or section here */}
    </div> /* End of main container (min-h-screen bg-black) */
  );
};

export default EventsPage;
