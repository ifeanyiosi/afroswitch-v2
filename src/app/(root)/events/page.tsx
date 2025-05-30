/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React, { useState, useEffect } from "react";
import {
  Calendar,
  Clock,
  MapPin,
 
  Users,
  
  Drum,
  Utensils,
  Palette,
} from "lucide-react";
import Link from "next/link";

const EventsPage = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);

  // SUPER VIBRANT COLOR PALETTE
  const colors = {
    gold: "#FFDC96",
    green: "#4CAF50",
    red: "#FF5252",
    purple: "#9C27B0",
    blue: "#2196F3",
    pink: "#E91E63",
    yellow: "#FFEB3B",
  };

  // Animation effects
  useEffect(() => {
    setIsLoaded(true);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // FUNKY FEATURES
  const features = [
    {
      icon: Drum,
      text: "🔥 LIVE AFROBEATS 🔥",
      color: colors.red,
      bgColor: "rgba(255, 82, 82, 0.15)",
    },
    {
      icon: Utensils,
      text: "🍗 FOOD GALORE 🍗",
      color: colors.green,
      bgColor: "rgba(76, 175, 80, 0.15)",
    },
    {
      icon: Palette,
      text: "🎨 ART VILLAGE 🎨",
      color: colors.purple,
      bgColor: "rgba(156, 39, 176, 0.15)",
    },
    {
      icon: Users,
      text: "💃 DANCE WORKSHOPS 💃",
      color: colors.blue,
      bgColor: "rgba(33, 150, 243, 0.15)",
    },
  ];

  // FLOATING FUN ELEMENTS
  const floatingShapes = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    color: [colors.red, colors.green, colors.purple, colors.blue, colors.pink][
      i % 5
    ],
    size: Math.random() * 40 + 20,
    position: {
      x: Math.random() * 100,
      y: Math.random() * 100,
    },
    shape: ["circle", "triangle", "square"][i % 3],
    animation: {
      duration: `${Math.random() * 10 + 10}s`,
      delay: `${Math.random() * 5}s`,
    },
  }));

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFEB3B] to-[#E91E63] text-white overflow-hidden relative">
      {/* CRAZY BACKGROUND ELEMENTS */}
      <div className="fixed inset-0 pointer-events-none">
        {/* BIG COLOR SPLASHES */}
        <div
          className="absolute w-[500px] h-[500px] rounded-full blur-[150px] opacity-30 animate-float"
          style={{
            backgroundColor: colors.pink,
            left: "10%",
            top: "20%",
            animationDuration: "25s",
          }}
        />
        <div
          className="absolute w-[600px] h-[600px] rounded-full blur-[180px] opacity-30 animate-float-reverse"
          style={{
            backgroundColor: colors.blue,
            right: "15%",
            bottom: "15%",
            animationDuration: "30s",
            animationDelay: "5s",
          }}
        />

        {/* FLOATING SHAPES */}
        {floatingShapes.map((shape) => (
          <div
            key={shape.id}
            className={`absolute animate-float ${
              shape.shape === "triangle"
                ? "clip-triangle"
                : shape.shape === "square"
                ? "clip-square"
                : ""
            }`}
            style={{
              backgroundColor: shape.color,
              width: `${shape.size}px`,
              height: `${shape.size}px`,
              left: `${shape.position.x}%`,
              top: `${shape.position.y}%`,
              animationDuration: shape.animation.duration,
              animationDelay: shape.animation.delay,
              opacity: 0.4,
              filter: `drop-shadow(0 0 10px ${shape.color})`,
              rotate: `${Math.random() * 360}deg`,
            }}
          />
        ))}
      </div>

      {/* MAIN CONTENT */}
      <div className="relative z-10 max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        {/* HERO SECTION */}
        <div className="text-center mb-20">
          {/* FUNKY TITLE */}
          <h1
            className="text-7xl sm:text-8xl md:text-9xl font-extrabold mb-6 animate-pulse"
            style={{
              background: `linear-gradient(45deg, ${colors.red}, ${colors.purple}, ${colors.blue})`,
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
              fontFamily: "'Luckiest Guy', cursive",
              textShadow: "5px 5px 0 rgba(0,0,0,0.1)",
              letterSpacing: "2px",
              lineHeight: "1.1",
            }}
          >
            AFROSWITCH
          </h1>

          {/* SUBTITLE */}
          <p
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8"
            style={{
              color: colors.yellow,
              fontFamily: "'Bungee', cursive",
              textShadow: "3px 3px 0 rgba(0,0,0,0.2)",
            }}
          >
            CALGARY'S WILDEST CULTURAL PARTY! 🎉
          </p>

          {/* DATE */}
          <div
            className="inline-block px-6 py-3 rounded-full border-4 mb-10 transform hover:rotate-2 transition-transform"
            style={{
              backgroundColor: colors.green,
              borderColor: colors.yellow,
              fontFamily: "'Bungee Shade', cursive",
            }}
          >
            <span className="text-xl md:text-2xl">✨ JULY 13, 2025 ✨</span>
          </div>

          {/* CTA BUTTON */}
          <Link
            href="https://www.showpass.com/afroswitch24"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-5 rounded-full text-xl font-bold transition-all duration-300 hover:scale-110 hover:rotate-2"
            style={{
              background: `linear-gradient(45deg, ${colors.red}, ${colors.purple})`,
              color: "white",
              fontFamily: "'Bungee', cursive",
              boxShadow: `0 10px 20px ${colors.purple}80`,
              border: `4px solid ${colors.yellow}`,
            }}
          >
            🎟️ GRAB YOUR TICKETS NOW! 🎟️
          </Link>
        </div>

        {/* EVENT DETAILS */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* MAIN CARD */}
          <div className="lg:col-span-2">
            <div
              className="p-8 rounded-3xl backdrop-blur-sm border-4 transform hover:scale-[1.01] transition-all"
              style={{
                backgroundColor: "rgba(255,255,255,0.2)",
                borderColor: colors.yellow,
                boxShadow: `0 20px 40px ${colors.purple}40`,
              }}
            >
              <h2
                className="text-4xl sm:text-5xl font-bold mb-6"
                style={{
                  color: colors.yellow,
                  fontFamily: "'Luckiest Guy', cursive",
                  textShadow: "3px 3px 0 rgba(0,0,0,0.2)",
                }}
              >
                SUMMER AFROSWITCH 2025
              </h2>

              <p
                className="text-xl mb-8"
                style={{
                  color: "white",
                  fontFamily: "'Fredoka One', cursive",
                }}
              >
                The most EPIC celebration of African culture in Canada! Get
                ready for non-stop music, dancing, food, and good vibes all day
                long! 🌍✨
              </p>

              {/* DETAIL CARDS */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                {/* DATE */}
                <div
                  className="p-6 rounded-2xl border-4 transform hover:scale-105 transition-all"
                  style={{
                    backgroundColor: colors.red,
                    borderColor: colors.yellow,
                    fontFamily: "'Fredoka One', cursive",
                  }}
                >
                  <div className="flex items-center gap-4">
                    <Calendar className="w-10 h-10" />
                    <div>
                      <p className="text-lg font-bold">JULY 13, 2025</p>
                      <p className="text-sm">SAVE THE DATE!</p>
                    </div>
                  </div>
                </div>

                {/* TIME */}
                <div
                  className="p-6 rounded-2xl border-4 transform hover:scale-105 transition-all"
                  style={{
                    backgroundColor: colors.blue,
                    borderColor: colors.yellow,
                    fontFamily: "'Fredoka One', cursive",
                  }}
                >
                  <div className="flex items-center gap-4">
                    <Clock className="w-10 h-10" />
                    <div>
                      <p className="text-lg font-bold">12PM - 11PM</p>
                      <p className="text-sm">ALL DAY FUN!</p>
                    </div>
                  </div>
                </div>

                {/* LOCATION */}
                <Link
                  href="https://www.google.com/maps?q=Confluence+Historic+Site"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sm:col-span-2 p-6 rounded-2xl border-4 transform hover:scale-105 transition-all"
                  style={{
                    backgroundColor: colors.green,
                    borderColor: colors.yellow,
                    fontFamily: "'Fredoka One', cursive",
                  }}
                >
                  <div className="flex items-center gap-4">
                    <MapPin className="w-10 h-10" />
                    <div>
                      <p className="text-lg font-bold">
                        CONFLUENCE HISTORIC SITE
                      </p>
                      <p className="text-sm">CALGARY'S COOLEST VENUE</p>
                    </div>
                  </div>
                </Link>
              </div>

              {/* ATTENDANCE */}
              <div
                className="p-6 rounded-2xl border-4 text-center"
                style={{
                  backgroundColor: colors.purple,
                  borderColor: colors.yellow,
                  fontFamily: "'Bungee', cursive",
                }}
              >
                <p className="text-3xl font-bold">5,000+</p>
                <p className="text-lg">HAPPY PEOPLE LAST YEAR!</p>
              </div>
            </div>
          </div>

          {/* FEATURES */}
          <div className="space-y-6">
            <h3
              className="text-3xl font-bold text-center"
              style={{
                color: colors.yellow,
                fontFamily: "'Bungee Shade', cursive",
                textShadow: "3px 3px 0 rgba(0,0,0,0.2)",
              }}
            >
              WHAT'S POPPIN'?
            </h3>

            {features.map((feature, index) => (
              <div
                key={index}
                className={`p-6 rounded-2xl border-4 transform transition-all duration-300 ${
                  activeFeature === index ? "scale-105" : "hover:scale-103"
                }`}
                style={{
                  backgroundColor: feature.bgColor,
                  borderColor: feature.color,
                  fontFamily: "'Fredoka One', cursive",
                }}
              >
                <div className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: feature.color }}
                  >
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <p className="text-lg font-bold">{feature.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FUNKY FONTS */}
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Bungee&family=Bungee+Shade&family=Fredoka+One&family=Luckiest+Guy&display=swap");

        @keyframes float {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }
        @keyframes float-reverse {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(20px) rotate(-5deg);
          }
        }
        @keyframes pulse {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }
        .clip-triangle {
          clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
        }
        .clip-square {
          clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
        }
      `}</style>
    </div>
  );
};

export default EventsPage;
