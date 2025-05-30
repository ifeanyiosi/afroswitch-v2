"use client";

import React, { useState, useEffect } from "react";
import {
  Calendar,
  MapPin,
  Music,
  ChevronDown,
  Sparkles,
  Star,
} from "lucide-react";

const StampedeHero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const heroImages = ["/images/11.jpg", "/images/18.jpg", "/images/7.jpg"];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-gradient-to-br from-yellow-200 via-orange-200 to-yellow-300">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #368552 2px, transparent 2px),
                           radial-gradient(circle at 75% 75%, #d81212 2px, transparent 2px)`,
            backgroundSize: "60px 60px",
            animation: "float 20s ease-in-out infinite alternate",
          }}
        ></div>
      </div>

      {/* Background Images with Ken Burns Effect */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-all duration-2000 transform ${
              index === currentImageIndex
                ? "opacity-20 scale-110"
                : "opacity-0 scale-100"
            }`}
            style={{
              backgroundImage: `url(${image})`,
              filter: "blur(0.5px) brightness(1.1) saturate(1.2)",
            }}
          />
        ))}

        {/* Dynamic Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-yellow-300/30 via-transparent to-yellow-400/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 via-transparent to-red-500/10" />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-ping opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          >
            <Star className="w-4 h-4 text-yellow-400" />
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center max-w-5xl mx-auto transition-all duration-1500 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          {/* Festival Title with Enhanced Styling */}
          <div className="mb-12 relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-green-400 via-yellow-400 to-red-400 rounded-full blur-xl opacity-30 animate-pulse"></div>
            <div className="relative">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black mb-4 bg-gradient-to-r from-green-600 via-yellow-500 to-red-600 bg-clip-text text-transparent drop-shadow-2xl">
                AFROSWITCH
              </h1>
              <div className="flex items-center justify-center gap-4 mb-6">
                <Sparkles
                  className="w-8 h-8 text-yellow-400 animate-bounce"
                  style={{ animationDelay: "0s" }}
                />
                <p className="text-2xl sm:text-4xl font-bold text-white px-8 py-3 rounded-full bg-gradient-to-r from-green-500 to-green-600 shadow-2xl border-4 border-yellow-300">
                  Music Festival
                </p>
                <Sparkles
                  className="w-8 h-8 text-yellow-400 animate-bounce"
                  style={{ animationDelay: "0.5s" }}
                />
              </div>
            </div>
          </div>

          {/* Event Info Cards */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 mb-16">
            <div className="group relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-red-500 to-red-600 rounded-3xl blur opacity-50 group-hover:opacity-75 transition duration-300"></div>
              <div className="relative flex items-center gap-4 px-10 py-6 rounded-3xl bg-white shadow-2xl border-4 border-red-500 transform hover:scale-105 hover:-rotate-1 transition-all duration-300">
                <Calendar className="w-8 h-8 text-green-600" />
                <div className="text-left">
                  <p className="text-sm text-gray-600 font-medium">
                    Event Date
                  </p>
                  <p className="text-2xl font-black text-red-600">
                    July 13, 2025
                  </p>
                </div>
              </div>
            </div>

            <a
              href="https://www.google.com/maps?q=Confluence+Historic+Site"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative cursor-pointer"
            >
              <div className="absolute -inset-2 bg-gradient-to-r from-green-500 to-green-600 rounded-3xl blur opacity-50 group-hover:opacity-75 transition duration-300"></div>
              <div className="relative flex items-center gap-4 px-10 py-6 rounded-3xl bg-white shadow-2xl border-4 border-green-500 transform hover:scale-105 hover:rotate-1 transition-all duration-300">
                <MapPin className="w-8 h-8 text-red-600" />
                <div className="text-left">
                  <p className="text-sm text-gray-600 font-medium">Location</p>
                  <p className="text-2xl font-black text-green-600">
                    Confluence Historic Site
                  </p>
                </div>
              </div>
            </a>
          </div>

          {/* Enhanced CTA Button */}
          <div className="mb-20">
            <a
              href="https://www.showpass.com/afroswitch24"
              className="group relative inline-block"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-yellow-400 via-red-500 to-green-500 rounded-full blur-2xl opacity-60 group-hover:opacity-80 animate-pulse"></div>
              <div className="relative flex items-center justify-center gap-6 px-16 py-8 rounded-full bg-gradient-to-r from-red-600 to-red-700 text-white font-black text-2xl sm:text-3xl shadow-2xl border-6 border-yellow-300 transform group-hover:scale-110 group-hover:-rotate-2 transition-all duration-300">
                <Music className="w-10 h-10 group-hover:animate-bounce" />
                <span className="drop-shadow-lg">Get Your Tickets Now!</span>
                <Music
                  className="w-10 h-10 group-hover:animate-bounce"
                  style={{ animationDelay: "0.2s" }}
                />
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
        <div className="relative">
          <div className="absolute -inset-2 bg-gradient-to-r from-green-400 to-yellow-400 rounded-full blur opacity-50 animate-pulse"></div>
          <div className="relative p-4 rounded-full bg-white/90 shadow-xl border-3 border-green-500 animate-bounce">
            <ChevronDown className="w-8 h-8 text-red-600" />
          </div>
        </div>
      </div>

      {/* Refined Image Navigation */}
      <div className="absolute bottom-12 right-12 flex flex-col gap-4">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`relative h-6 rounded-full transition-all duration-500 shadow-lg transform hover:scale-125 ${
              index === currentImageIndex ? "w-16" : "w-6"
            }`}
          >
            <div
              className={`absolute inset-0 rounded-full transition-all duration-500 ${
                index === currentImageIndex
                  ? "bg-gradient-to-r from-red-500 to-red-600 shadow-red-500/50 shadow-lg"
                  : "bg-white/80 hover:bg-white"
              }`}
              style={{
                border: `3px solid ${
                  index === currentImageIndex ? "#ffdc96" : "#368552"
                }`,
              }}
            />
            {index === currentImageIndex && (
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-red-400 to-red-500 animate-pulse opacity-50" />
            )}
          </button>
        ))}
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }
      `}</style>
    </div>
  );
};

export default StampedeHero;
