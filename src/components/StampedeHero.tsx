"use client";

import React, { useState, useEffect } from "react";
import { Calendar, MapPin, Music, ChevronDown, Play } from "lucide-react";

const StampedeHero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const heroImages = ["/images/afro-hero.png"];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-neutral-900">
      {/* Background Slideshow */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
              index === currentImageIndex ? "opacity-30" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url(${image})`,
              filter: "brightness(0.9) contrast(1.1)",
            }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/5 to-black/30" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
        <div
          className={`text-center max-w-5xl mx-auto transition-all duration-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
          }`}
        >
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 text-white tracking-tight">
            AFROSWITCH
          </h1>

          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-10 h-px bg-white/30" />
            <p className="text-base sm:text-lg font-medium text-white/80 uppercase tracking-widest">
              Music Festival
            </p>
            <div className="w-10 h-px bg-white/30" />
          </div>

          {/* Info Cards */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-12 px-2">
            {/* Date */}
            <div className="group relative w-full max-w-xs sm:max-w-sm">
              <div className="flex items-center gap-4 px-6 py-5 sm:py-6 rounded-xl bg-black/50 backdrop-blur-sm border border-white/10 hover:border-amber-500/30 transition-all duration-300">
                <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20">
                  <Calendar className="w-6 h-6 text-amber-400" />
                </div>
                <div className="text-left">
                  <p className="text-xs text-white/60 font-medium uppercase tracking-wider">
                    Event Date
                  </p>
                  <p className="text-lg sm:text-xl font-semibold text-white">
                    July 13, 2025
                  </p>
                </div>
              </div>
            </div>

            {/* Location */}
            <a
              href="https://www.google.com/maps?q=Confluence+Historic+Site"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-full max-w-xs sm:max-w-sm"
            >
              <div className="flex items-center gap-4 px-6 py-5 sm:py-6 rounded-xl bg-black/50 backdrop-blur-sm border border-white/10 hover:border-emerald-500/30 transition-all duration-300">
                <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                  <MapPin className="w-6 h-6 text-emerald-400" />
                </div>
                <div className="text-left">
                  <p className="text-xs text-white/60 font-medium uppercase tracking-wider">
                    Location
                  </p>
                  <p className="text-lg sm:text-xl font-semibold text-white">
                    Confluence Historic Site
                  </p>
                </div>
              </div>
            </a>
          </div>

          {/* CTA Button */}
          <div className="mb-12">
            <a
              href="https://www.showpass.com/afroswitch24"
              className="group relative inline-flex items-center justify-center gap-3 px-8 sm:px-12 py-4 sm:py-5 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold text-base sm:text-lg shadow-lg hover:shadow-amber-500/30 transition-all duration-300 overflow-hidden"
            >
              <div className="relative p-2 rounded-full bg-white/10 group-hover:bg-white/20 transition-all duration-300">
                <Play className="w-5 h-5 fill-current" />
              </div>
              <span>Get Your Tickets Now</span>
              <div className="relative p-2 rounded-full bg-white/10 group-hover:bg-white/20 transition-all duration-300">
                <Music className="w-5 h-5" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-amber-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="p-3 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 animate-bounce">
          <ChevronDown className="w-5 h-5 text-white/80" />
        </div>
      </div>

      {/* Image Navigation */}
      <div className="absolute bottom-6 right-4 sm:right-8 flex gap-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentImageIndex ? "bg-white" : "bg-white/30"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default StampedeHero;
