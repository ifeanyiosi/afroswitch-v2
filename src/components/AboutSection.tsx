/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Globe, Calendar, Music, Zap } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

// Reusable Info Card component
const InfoCard = ({
  icon,
  title,
  subtitle,
  text,
  href,
  color = "emerald",
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  text: string;
  href?: string;
  color?: "emerald" | "amber";
}) => {
  const content = (
    <div className="group p-6 md:p-8 rounded-2xl border border-neutral-200 bg-white hover:bg-neutral-50 hover:border-neutral-300 transition-all duration-300 hover:shadow-lg">
      <div className="flex items-start gap-4">
        <div
          className={`w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center ${
            color === "amber"
              ? "bg-amber-100 text-amber-600"
              : "bg-emerald-100 text-emerald-600"
          } transition-colors group-hover:${
            color === "amber" ? "bg-amber-200" : "bg-emerald-200"
          }`}
        >
          {icon}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-xs md:text-sm font-medium text-neutral-500 uppercase tracking-wider mb-1">
            {title}
          </h3>
          <p className="text-lg md:text-xl font-semibold text-neutral-900 mb-1">
            {subtitle}
          </p>
          <p className="text-sm md:text-base text-neutral-600">{text}</p>
        </div>
      </div>
    </div>
  );

  return href ? (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${title} - ${subtitle}`}
      className="block"
    >
      {content}
    </Link>
  ) : (
    content
  );
};

const AboutSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-neutral-50 to-[#f9f0e6]">
      {/* Subtle background accent */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-20 left-4 md:left-10 w-24 h-24 md:w-32 md:h-32 rounded-full bg-amber-200 blur-3xl"></div>
        <div className="absolute bottom-40 right-4 md:right-20 w-32 h-32 md:w-40 md:h-40 rounded-full bg-emerald-200 blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-24">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-3 px-4 py-2 md:px-6 md:py-3 rounded-full mb-6 md:mb-8 bg-white border border-amber-200 shadow-sm">
            <Music
              className="w-4 h-4 md:w-5 md:h-5 text-amber-600"
              aria-hidden="true"
            />
            <span className="font-medium tracking-wider text-xs md:text-sm text-neutral-700 uppercase">
              AFROSWITCH 2025
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-4 md:mb-6 text-neutral-900">
            <span className="block">Experience The</span>
            <span className="block text-amber-600">Rhythm</span>
            <span className="block">Of Africa</span>
          </h1>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 md:gap-8 lg:gap-12">
          {/* Event Info */}
          <div className="lg:col-span-2 space-y-4 md:space-y-6">
            <InfoCard
              icon={<Globe className="w-5 h-5 md:w-6 md:h-6" />}
              title="Location"
              subtitle="Confluence Historic Site"
              text="Calgary, Canada"
              href="https://www.google.com/maps?q=Confluence+Historic+Site"
              color="emerald"
            />
            <InfoCard
              icon={<Calendar className="w-5 h-5 md:w-6 md:h-6" />}
              title="Date"
              subtitle="July 13, 2025"
              text="Save the date"
              color="amber"
            />
          </div>

          {/* Description */}
          <div className="lg:col-span-3">
            <div className="p-6 sm:p-8 lg:p-12 rounded-2xl bg-white border border-neutral-200 shadow-sm">
              {/* Branding */}
              <div className="flex items-center gap-4 mb-6 md:mb-8">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center bg-amber-600 text-white shadow-lg">
                  <Zap className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-neutral-900">
                    AFROSWITCH
                  </h3>
                  <p className="text-sm md:text-base text-amber-600 font-medium">
                    Music Festival
                  </p>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-4 md:space-y-6">
                <p className="text-base md:text-lg leading-relaxed text-neutral-700">
                  <span className="font-bold text-neutral-900">AfroSwitch</span>{" "}
                  brings the vibrant energy of Afrobeats to the heart of Canada.
                  This groundbreaking festival transforms{" "}
                  <span className="font-medium text-emerald-600">
                    Confluence Historic Site
                  </span>{" "}
                  in Calgary into a celebration of African music, culture, and
                  unity.
                </p>
                <p className="text-base md:text-lg leading-relaxed text-neutral-700">
                  Experience world-class performances, immersive cultural
                  experiences, and the best of Afrobeats in Canada on{" "}
                  <span className="font-semibold text-amber-600">
                    July 13, 2025
                  </span>
                  .
                </p>

                {/* Quote */}
                <div className="p-4 md:p-6 rounded-xl bg-amber-50 border border-amber-200">
                  <p className="text-base md:text-lg font-medium text-center text-neutral-800">
                    "Where music tells stories, dances bridge communities, and
                    culture takes center stage!"
                  </p>
                </div>

                {/* CTA Button */}
                <div className="pt-6 md:pt-8 text-center">
                  <Button asChild className="w-full sm:w-auto">
                    <Link
                      href="https://www.showpass.com/afroswitch24"
                      className="inline-flex items-center justify-center gap-3 font-medium px-6 md:px-8 py-3 md:py-4 rounded-full bg-amber-600 hover:bg-amber-700 text-white transition-colors duration-300 text-sm md:text-base"
                    >
                      <Music className="w-4 h-4 md:w-5 md:h-5" />
                      Get Your Tickets Now
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Decorative Elements */}
        <div className="mt-16 md:mt-20 text-center">
          <div className="inline-flex items-center gap-2">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full ${
                  i % 2 === 0 ? "bg-amber-400" : "bg-emerald-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
