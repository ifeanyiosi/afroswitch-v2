/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Store, Mic2, Users, Star } from "lucide-react";

const SectionCard = ({
  title,
  description,
  buttonLabel,
  buttonLink,
  imageUrl,
  icon: Icon,
  features,
}: {
  title: string;
  description: string;
  buttonLabel: string;
  buttonLink: string;
  imageUrl: string;
  icon: any;
  features: string[];
}) => (
  <div className="group relative w-full bg-white rounded-xl overflow-hidden shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300">
    {/* Image Container */}
    <div className="relative w-full h-48 sm:h-56 md:h-64 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-gray-300 group-hover:scale-105 transition-transform duration-500"
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

      {/* Icon Badge */}
      <div className="absolute top-4 left-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-lg flex items-center justify-center">
        <Icon className="w-6 h-6 text-red-600" />
      </div>
    </div>

    {/* Content */}
    <div className="p-6 sm:p-8">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3">
        {title}
      </h2>

      <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
        {description}
      </p>

      {/* Features List */}
      <div className="mb-6 space-y-2">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex items-center gap-2 text-sm text-gray-700"
          >
            <div className="w-1.5 h-1.5 bg-red-600 rounded-full flex-shrink-0" />
            <span>{feature}</span>
          </div>
        ))}
      </div>

      {/* Button */}
      <Link
        href={buttonLink}
        className="inline-flex items-center gap-2 w-full sm:w-auto justify-center bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200 group"
      >
        <span>{buttonLabel}</span>
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
      </Link>
    </div>
  </div>
);

export default function VendorArtistSection() {
  return (
    <section className="bg-[#f9f0e6] py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-lg mb-6">
            <Users className="w-4 h-4" />
            <span className="font-semibold text-sm">Join Our Community</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Be Part of the Experience
          </h1>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Whether you're a creative artist or innovative vendor, join us in
            creating an unforgettable cultural celebration
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          <SectionCard
            title="Call for Vendors"
            description="Showcase your brand, products, and services at Calgary's premier African cultural event. Connect with thousands of engaged attendees and grow your business."
            buttonLabel="Apply as Vendor"
            buttonLink="/vendor-signup"
            imageUrl="/images/vendor.png"
            icon={Store}
            features={[
              "Prime booth locations available",
              "Access to diverse customer base",
              "Marketing support and promotion",
              "Networking opportunities",
            ]}
          />

          <SectionCard
            title="Call for Volunteers"
            description="Join Calgary's vibrant African community by volunteering your time and skills. Whether you’re helping with events, outreach, or logistics — we need passionate people like you!"
            buttonLabel="Sign Up as Volunteer"
            buttonLink="/volunteer-signup"
            imageUrl="/images/volun.png"
            icon={Users} // (or any volunteer-related Lucide icon you prefer)
            features={[
              "Meaningful community impact",
              "Training and support provided",
              "Networking opportunities",
              "Volunteer recognition and rewards",
            ]}
          />
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-xl border border-gray-200 p-8 sm:p-10 shadow-lg max-w-3xl mx-auto">
            <Star className="w-12 h-12 text-red-600 mx-auto mb-4" />
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
              Limited Spots Available
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Don't miss your chance to be part of this incredible celebration.
              Applications are reviewed on a first-come, first-served basis.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/vendor-signup"
                className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200"
              >
                <Store className="w-4 h-4" />
                Vendor Application
              </Link>
              <Link
                href="/artist-signup"
                className="inline-flex items-center justify-center gap-2 bg-gray-900 hover:bg-gray-800 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200"
              >
                <Mic2 className="w-4 h-4" />
                Artist Application
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
