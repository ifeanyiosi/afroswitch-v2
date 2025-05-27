import React from "react";
import { Globe, Calendar, Music, Zap } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

const AboutSection = () => {
  return (
    <section className="relative bg-black text-white min-h-screen overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div
          className="absolute top-20 left-10 w-32 h-32 rounded-full blur-xl animate-pulse"
          style={{ backgroundColor: "rgba(216, 18, 18, 0.1)" }}
        ></div>
        <div
          className="absolute bottom-40 right-20 w-40 h-40 rounded-full blur-xl animate-pulse delay-300"
          style={{ backgroundColor: "rgba(54, 133, 82, 0.1)" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/4 w-24 h-24 rounded-full blur-xl animate-pulse delay-500"
          style={{ backgroundColor: "rgba(255, 220, 150, 0.1)" }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        {/* Main Title Section */}
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center gap-3 px-6 py-2 rounded-full mb-8 border-2"
            style={{
              backgroundColor: "rgba(255, 220, 150, 0.1)",
              borderColor: "#368552",
            }}
          >
            <Music className="w-5 h-5" style={{ color: "#ffdc96" }} />
            <span
              className="font-semibold tracking-wide"
              style={{ color: "#ffdc96" }}
            >
              AFROSWITCH 2025
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black leading-tight mb-6">
            LET THE
            <span className="block animate-pulse" style={{ color: "#d81212" }}>
              BEAT
            </span>
            <span className="block text-white">TAKE OVER</span>
          </h1>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Left Side - Event Info */}
          <div className="lg:col-span-2 space-y-8">
            {/* Event Details Cards */}
            <div className="space-y-6">
              <div
                className="group p-6 rounded-2xl border-2 transition-all duration-300 hover:transform hover:scale-105"
                style={{
                  backgroundColor: "rgba(54, 133, 82, 0.1)",
                  borderColor: "#368552",
                }}
              >
                <Link
                  href="https://www.google.com/maps?q=Confluence+Historic+Site"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 mb-4"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform"
                    style={{ backgroundColor: "#d81212" }}
                  >
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3
                      className="text-xl font-bold"
                      style={{ color: "#ffdc96" }}
                    >
                      WHERE?
                    </h3>
                    <p className="text-2xl font-black text-white">
                      Confluence Historic Site
                    </p>
                    <p style={{ color: "#368552" }} className="font-semibold">
                      Calgary, Canada
                    </p>
                  </div>
                </Link>
              </div>

              <div
                className="group p-6 rounded-2xl border-2 transition-all duration-300 hover:transform hover:scale-105"
                style={{
                  backgroundColor: "rgba(216, 18, 18, 0.1)",
                  borderColor: "#d81212",
                }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform"
                    style={{ backgroundColor: "#368552" }}
                  >
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3
                      className="text-xl font-bold"
                      style={{ color: "#ffdc96" }}
                    >
                      WHEN?
                    </h3>
                    <p className="text-2xl font-black text-white">
                      July 13, 2025
                    </p>
                    <p style={{ color: "#d81212" }} className="font-semibold">
                      Save the Date!
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div
                className="p-4 rounded-xl border-2 text-center"
                style={{
                  backgroundColor: "rgba(255, 220, 150, 0.1)",
                  borderColor: "#ffdc96",
                }}
              >
                <div
                  className="text-3xl font-black"
                  style={{ color: "#d81212" }}
                >
                  1ST
                </div>
                <div
                  className="text-sm uppercase tracking-wide font-bold"
                  style={{ color: "#368552" }}
                >
                  In Canada
                </div>
              </div>
              <div
                className="p-4 rounded-xl border-2 text-center"
                style={{
                  backgroundColor: "rgba(54, 133, 82, 0.1)",
                  borderColor: "#368552",
                }}
              >
                <div
                  className="text-3xl font-black"
                  style={{ color: "#d81212" }}
                >
                  100%
                </div>
                <div
                  className="text-sm uppercase tracking-wide font-bold"
                  style={{ color: "#ffdc96" }}
                >
                  Afrobeats
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Description */}
          <div className="lg:col-span-3">
            <div className="relative">
              {/* Main Content Card */}
              <div
                className="relative backdrop-blur-sm rounded-3xl p-8 sm:p-12 border-3 overflow-hidden"
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.7)",
                  borderColor: "#ffdc96",
                  borderWidth: "3px",
                }}
              >
                {/* Decorative Elements */}
                <div
                  className="absolute top-4 right-4 w-20 h-20 rounded-full blur-2xl"
                  style={{ backgroundColor: "rgba(216, 18, 18, 0.1)" }}
                ></div>
                <div
                  className="absolute bottom-4 left-4 w-16 h-16 rounded-full blur-2xl"
                  style={{ backgroundColor: "rgba(54, 133, 82, 0.1)" }}
                ></div>

                <div className="relative z-10">
                  {/* Logo/Brand */}
                  <div className="flex items-center gap-3 mb-8">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center"
                      style={{ backgroundColor: "#368552" }}
                    >
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3
                        className="text-xl font-bold"
                        style={{ color: "#d81212" }}
                      >
                        AFROSWITCH
                      </h3>
                      <p
                        className="text-sm font-semibold"
                        style={{ color: "#ffdc96" }}
                      >
                        Music Festival
                      </p>
                    </div>
                  </div>

                  {/* Main Description */}
                  <div className="space-y-6 text-white">
                    <p className="text-lg sm:text-xl leading-relaxed font-medium">
                      <span className="font-bold" style={{ color: "#d81212" }}>
                        AfroSwitch
                      </span>{" "}
                      brings the vibrant energy of Afrobeats to the heart of
                      Canada. This groundbreaking festival transforms{" "}
                      <span className="font-bold" style={{ color: "#368552" }}>
                        Confluence Historic Site
                      </span>{" "}
                      in Calgary into a celebration of African music, culture,
                      and unity.
                    </p>

                    <p
                      className="text-base sm:text-lg leading-relaxed font-medium"
                      style={{ color: "#ffdc96" }}
                    >
                      Experience world-class performances, immersive cultural
                      experiences, and the best of Afrobeats in the Great White
                      North on{" "}
                      <span className="font-bold" style={{ color: "#d81212" }}>
                        July 13, 2025
                      </span>
                      .
                    </p>

                    {/* Quote */}
                    <div
                      className="p-6 rounded-2xl border-l-4"
                      style={{
                        backgroundColor: "rgba(54, 133, 82, 0.1)",
                        borderColor: "#368552",
                      }}
                    >
                      <p
                        className="text-lg italic font-medium"
                        style={{ color: "#ffdc96" }}
                      >
                        &quot;Where music tells stories, dances bridge
                        communities, and culture takes center stage.&quot;
                      </p>
                    </div>

                    {/* CTA Button */}
                    <div className="pt-6">
                      <Button asChild>
                        <Link
                          href={"https://www.showpass.com/afroswitch24"}
                          className="group font-bold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl border-3"
                          style={{
                            backgroundColor: "#ffdc96",
                            color: "#d81212",
                            borderColor: "#368552",
                            borderWidth: "3px",
                          }}
                        >
                          <span className="flex items-center gap-2">
                            <Music className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                            Get Access
                          </span>
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Wave Decoration */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-2">
            <div
              className="w-12 h-px"
              style={{
                background: `linear-gradient(to right, transparent, #368552)`,
              }}
            ></div>
            <div
              className="w-2 h-2 rounded-full animate-pulse"
              style={{ backgroundColor: "#d81212" }}
            ></div>
            <div
              className="w-12 h-px"
              style={{
                background: `linear-gradient(to left, transparent, #368552)`,
              }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
