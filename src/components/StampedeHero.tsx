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
    <div className="relative h-screen w-full overflow-hidden bg-black">
      {/* Background Image */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
              index === currentImageIndex ? "opacity-30" : "opacity-0"
            }`}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}

        {/* Rich colored overlay */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center max-w-4xl mx-auto transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Brand */}
          <div className="mb-4">
            <span
              className="text-sm font-bold tracking-wider uppercase px-4 py-2 rounded-full border-2"
              style={{
                color: "#ffdc96",
                borderColor: "#ffdc96",
                backgroundColor: "rgba(255, 220, 150, 0.1)",
              }}
            >
              Afroswitch Presents
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-4 leading-tight">
            <span style={{ color: "#d81212" }}>STAMPEDE</span>
            <span
              className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mt-2"
              style={{ color: "#ffdc96" }}
            >
              2025
            </span>
          </h1>

          {/* Subtitle */}
          <p
            className="text-lg sm:text-xl md:text-2xl mb-8 max-w-2xl mx-auto font-semibold"
            style={{ color: "#368552" }}
          >
            African Music Festival
          </p>

          {/* Event Info */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mb-10">
            <div
              className="flex items-center gap-2 px-6 py-3 rounded-full border-2"
              style={{
                backgroundColor: "#368552",
                borderColor: "#ffdc96",
                color: "white",
              }}
            >
              <Calendar className="w-4 h-4" style={{ color: "#ffdc96" }} />
              <span className="text-sm font-bold">July 13, 2025</span>
            </div>
            <Link
              href="https://www.google.com/maps?q=Confluence+Historic+Site"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div
                className="flex items-center gap-2 px-6 py-3 rounded-full border-2 cursor-pointer transition hover:scale-105"
                style={{
                  backgroundColor: "#d81212",
                  borderColor: "#ffdc96",
                  color: "white",
                }}
              >
                <MapPin className="w-4 h-4" style={{ color: "#ffdc96" }} />
                <span className="text-sm font-bold">
                  Confluence Historic Site
                </span>
              </div>
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button asChild>
              <Link
                href={"https://www.showpass.com/afroswitch24"}
                className="w-full sm:w-auto font-bold px-10 py-4 rounded-full transition-all duration-200 flex items-center justify-center gap-3 text-lg border-3 hover:scale-105 transform"
                style={{
                  backgroundColor: "#ffdc96",
                  color: "#d81212",
                  borderColor: "#368552",
                  borderWidth: "3px",
                }}
              >
                <Music className="w-6 h-6" />
                Buy Tickets
              </Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl mx-auto">
            <div className="text-center">
              <div
                className="text-2xl sm:text-3xl font-bold"
                style={{ color: "#d81212" }}
              >
                50+
              </div>
              <div
                style={{ color: "#ffdc96" }}
                className="text-sm font-semibold"
              >
                Artists
              </div>
            </div>
            <div className="text-center">
              <div
                className="text-2xl sm:text-3xl font-bold"
                style={{ color: "#368552" }}
              >
                3
              </div>
              <div
                style={{ color: "#ffdc96" }}
                className="text-sm font-semibold"
              >
                Stages
              </div>
            </div>
            <div className="text-center">
              <div
                className="text-2xl sm:text-3xl font-bold"
                style={{ color: "#d81212" }}
              >
                15K+
              </div>
              <div
                style={{ color: "#ffdc96" }}
                className="text-sm font-semibold"
              >
                Attendees
              </div>
            </div>
            <div className="text-center">
              <div
                className="text-2xl sm:text-3xl font-bold"
                style={{ color: "#368552" }}
              >
                12H
              </div>
              <div
                style={{ color: "#ffdc96" }}
                className="text-sm font-semibold"
              >
                Music
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6" style={{ color: "#ffdc96" }} />
      </div>

      {/* Image Navigation Dots */}
      <div className="absolute bottom-6 right-6 flex gap-3">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`h-3 rounded-full transition-all duration-300 border-2 ${
              index === currentImageIndex ? "w-8" : "w-3 hover:scale-110"
            }`}
            style={{
              backgroundColor:
                index === currentImageIndex ? "#d81212" : "transparent",
              borderColor: index === currentImageIndex ? "#ffdc96" : "#368552",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default StampedeHero;
