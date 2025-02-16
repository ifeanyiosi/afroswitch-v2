/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ImageCarousel = () => {
  const images = [
    {
      url: "/images/1.jpg",
      alt: "Beautiful landscape",
      title: "Natural Wonder",
      description: "Discover the beauty of nature",
    },
    {
      url: "/images/2.jpg",
      alt: "City skyline",
      title: "Urban Life",
      description: "Experience the city lights",
    },
    {
      url: "/images/3.jpg",
      alt: "Ocean sunset",
      title: "Coastal Dreams",
      description: "Relax by the seaside",
    },
    {
      url: "/images/4.jpg",
      alt: "Mountain peaks",
      title: "Mountain Majesty",
      description: "Reach new heights",
    },
    {
      url: "/images/5.jpg",
      alt: "Forest path",
      title: "Forest Walk",
      description: "Explore the wilderness",
    },
    {
      url: "/images/12.jpg",
      alt: "Desert sands",
      title: "Desert Adventure",
      description: "Journey through the dunes",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const slidesPerView = {
    mobile: 1,
    desktop: 3,
  };

  const getVisibleSlides = useCallback(() => {
    if (typeof window !== "undefined") {
      return window.innerWidth >= 1024
        ? slidesPerView.desktop
        : slidesPerView.mobile;
    }
    return slidesPerView.mobile;
  }, []);

  const [visibleSlides, setVisibleSlides] = useState(slidesPerView.mobile);

  useEffect(() => {
    const handleResize = () => {
      setVisibleSlides(getVisibleSlides());
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [getVisibleSlides]);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + 1;
      return nextIndex > images.length - visibleSlides ? 0 : nextIndex;
    });
  }, [images.length, visibleSlides]);

  const previousSlide = () => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex - 1;
      return nextIndex < 0 ? images.length - visibleSlides : nextIndex;
    });
  };

  const goToSlide = (index: any) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    let intervalId: any;
    if (isAutoPlaying) {
      intervalId = setInterval(nextSlide, 5000);
    }
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isAutoPlaying, nextSlide]);

  return (
    <div className="relative w-full max-w-[1500px] mx-auto overflow-hidden group  lg:py-10">
      {/* Main carousel container */}
      <div className="relative h-64 sm:h-80 w-full rounded-2xl overflow-hidden">
        {/* Images */}
        <div
          className="absolute w-full h-full transition-transform duration-500 ease-out flex"
          style={{
            transform: `translateX(-${currentIndex * (100 / visibleSlides)}%)`,
            gap: "1rem",
          }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="relative mt-5 w-full h-full flex-shrink-0 px-2"
              style={{ width: `${100 / visibleSlides}%` }}
            >
              <div className="relative h-full rounded-xl overflow-hidden">
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Navigation buttons */}
        <button
          onClick={previousSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Dots navigation */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {Array.from({ length: images.length - visibleSlides + 1 }).map(
            (_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? "bg-white w-4"
                    : "bg-white/50 hover:bg-white/80"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            )
          )}
        </div>

        {/* Play/Pause button */}
        <button
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          className="absolute top-4 right-4 bg-white/80 hover:bg-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          aria-label={isAutoPlaying ? "Pause slideshow" : "Play slideshow"}
        >
          {isAutoPlaying ? (
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 9v6m4-6v6"
              />
            </svg>
          ) : (
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
              />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
};

export default ImageCarousel;
