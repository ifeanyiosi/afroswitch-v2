"use client";

import React, { useState, useEffect } from "react";
import { Calendar, MapPin, Music, ChevronDown } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

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
    <div
      className="relative h-screen w-full overflow-hidden"
      style={{ backgroundColor: "#ffdc96" }}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
              index === currentImageIndex ? "opacity-15" : "opacity-0"
            }`}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}

        {/* Simple bright overlay */}
        <div
          className="absolute inset-0"
          style={{
            backgroundColor: "rgba(255, 220, 150, 0.1)",
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center max-w-4xl mx-auto transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Subtitle */}
          <div className="mb-8">
            <p
              className="text-2xl sm:text-3xl font-bold px-6 py-2 rounded-full inline-block shadow-lg"
              style={{
                color: "#ffffff",
                backgroundColor: "#368552",
                border: "3px solid #ffdc96",
                textShadow: "1px 1px 2px rgba(0,0,0,0.3)",
              }}
            >
              ✨ Afroswitch Music Festival ✨
            </p>
          </div>

          {/* Event Info */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
            <div
              className="flex items-center gap-3 px-8 py-4 rounded-full shadow-xl transform hover:scale-105 transition-all duration-200"
              style={{
                backgroundColor: "#ffffff",
                border: "3px solid #d81212",
                color: "#d81212",
                boxShadow: "0 10px 30px rgba(216, 18, 18, 0.3)",
              }}
            >
              <Calendar className="w-5 h-5" style={{ color: "#368552" }} />
              <span className="text-lg font-bold">📅 July 13, 2025</span>
            </div>
            <Link
              href="https://www.google.com/maps?q=Confluence+Historic+Site"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div
                className="flex items-center gap-3 px-8 py-4 rounded-full shadow-xl cursor-pointer transform hover:scale-105 transition-all duration-200"
                style={{
                  backgroundColor: "#ffffff",
                  border: "3px solid #368552",
                  color: "#368552",
                  boxShadow: "0 10px 30px rgba(54, 133, 82, 0.3)",
                }}
              >
                <MapPin className="w-5 h-5" style={{ color: "#d81212" }} />
                <span className="text-lg font-bold">
                  📍 Confluence Historic Site
                </span>
              </div>
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
            <Button asChild>
              <Link
                href={"https://www.showpass.com/afroswitch24"}
                className="group w-full sm:w-auto font-bold px-12 py-5 rounded-full transition-all duration-300 flex items-center justify-center gap-4 text-xl shadow-2xl transform hover:scale-110 hover:rotate-1"
                style={{
                  backgroundColor: "#d81212",
                  color: "#ffffff",
                  border: "4px solid #368552",
                  textShadow: "1px 1px 2px rgba(0,0,0,0.3)",
                  boxShadow: "0 15px 40px rgba(216, 18, 18, 0.4)",
                }}
              >
                <Music className="w-7 h-7 group-hover:animate-bounce" />
                🎵 Get Your Tickets Now! 🎵
              </Link>
            </Button>
          </div>

          
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div
          className="animate-bounce p-3 rounded-full shadow-lg"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            border: "2px solid #368552",
          }}
        >
          <ChevronDown className="w-6 h-6" style={{ color: "#d81212" }} />
        </div>
      </div>

      {/* Image Navigation Dots */}
      <div className="absolute bottom-8 right-8 flex gap-3">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`h-4 rounded-full transition-all duration-300 shadow-lg transform hover:scale-125 ${
              index === currentImageIndex ? "w-10" : "w-4"
            }`}
            style={{
              backgroundColor:
                index === currentImageIndex
                  ? "#d81212"
                  : "rgba(255, 255, 255, 0.8)",
              border: `3px solid ${
                index === currentImageIndex ? "#ffdc96" : "#368552"
              }`,
              boxShadow:
                index === currentImageIndex
                  ? "0 4px 15px rgba(216, 18, 18, 0.4)"
                  : "0 2px 8px rgba(54, 133, 82, 0.3)",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default StampedeHero;
