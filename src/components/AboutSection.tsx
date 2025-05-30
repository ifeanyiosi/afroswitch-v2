import React from "react";
import { Globe, Calendar, Music, Zap } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

const AboutSection = () => {
  return (
    <section
      className="relative min-h-screen overflow-hidden"
      style={{ backgroundColor: "#368552" }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Circles */}
        <div
          className="absolute top-20 left-10 w-32 h-32 rounded-full blur-xl animate-pulse"
          style={{ backgroundColor: "rgba(216, 18, 18, 0.3)" }}
        ></div>
        <div
          className="absolute bottom-40 right-20 w-40 h-40 rounded-full blur-xl animate-pulse delay-300"
          style={{ backgroundColor: "rgba(255, 220, 150, 0.4)" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/4 w-24 h-24 rounded-full blur-xl animate-pulse delay-500"
          style={{ backgroundColor: "rgba(216, 18, 18, 0.2)" }}
        ></div>
        <div
          className="absolute top-32 right-1/3 w-28 h-28 rounded-full blur-xl animate-pulse delay-700"
          style={{ backgroundColor: "rgba(255, 220, 150, 0.3)" }}
        ></div>

        {/* Geometric Shapes */}
        <div
          className="absolute bottom-20 left-1/3 w-16 h-16 rotate-45 animate-spin"
          style={{
            backgroundColor: "rgba(216, 18, 18, 0.2)",
            animationDuration: "20s",
          }}
        ></div>
        <div
          className="absolute top-1/4 right-10 w-20 h-6 animate-bounce delay-1000"
          style={{
            backgroundColor: "rgba(255, 220, 150, 0.3)",
            borderRadius: "10px",
          }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        {/* Main Title Section */}
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center gap-3 px-8 py-3 rounded-full mb-8 border-4 shadow-2xl transform hover:scale-105 transition-all duration-300"
            style={{
              backgroundColor: "#ffffff",
              borderColor: "#d81212",
              boxShadow: "0 10px 30px rgba(216, 18, 18, 0.3)",
            }}
          >
            <Music
              className="w-6 h-6 animate-bounce"
              style={{ color: "#368552" }}
            />
            <span
              className="font-black tracking-wider text-lg"
              style={{
                color: "#d81212",
                fontFamily: "Impact, Arial Black, sans-serif",
                textShadow: "1px 1px 0 rgba(255, 220, 150, 0.5)",
              }}
            >
              🎉 AFROSWITCH 2025 🎉
            </span>
          </div>

          <h1
            className="text-6xl sm:text-7xl lg:text-9xl font-black leading-tight mb-6 transform hover:scale-105 transition-all duration-300"
            style={{
              fontFamily: "Impact, Arial Black, sans-serif",
              textShadow:
                "4px 4px 0 rgba(255, 255, 255, 0.8), 8px 8px 0 rgba(216, 18, 18, 0.3)",
            }}
          >
            <span style={{ color: "#ffffff" }}>LET THE</span>
            <span
              className="block animate-pulse"
              style={{
                color: "#ffdc96",
                textShadow: "3px 3px 0 #d81212, 6px 6px 0 rgba(0, 0, 0, 0.2)",
              }}
            >
              BEAT
            </span>
            <span
              className="block"
              style={{
                color: "#d81212",
                fontFamily: "cursive, fantasy",
                transform: "rotate(-2deg)",
                display: "inline-block",
              }}
            >
              TAKE OVER! 🔥
            </span>
          </h1>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Left Side - Event Info */}
          <div className="lg:col-span-2 space-y-8">
            {/* Event Details Cards */}
            <div className="space-y-6">
              <div
                className="group p-8 rounded-3xl border-4 transition-all duration-300 hover:transform hover:scale-110 hover:rotate-1 shadow-2xl"
                style={{
                  backgroundColor: "#ffffff",
                  borderColor: "#ffdc96",
                  boxShadow: "0 15px 40px rgba(255, 220, 150, 0.4)",
                }}
              >
                <Link
                  href="https://www.google.com/maps?q=Confluence+Historic+Site"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 mb-4"
                >
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center group-hover:rotate-45 transition-transform shadow-lg"
                    style={{ backgroundColor: "#d81212" }}
                  >
                    <Globe className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3
                      className="text-2xl font-black"
                      style={{
                        color: "#368552",
                        fontFamily: "Impact, Arial Black, sans-serif",
                      }}
                    >
                      📍 WHERE?
                    </h3>
                    <p
                      className="text-3xl font-black"
                      style={{
                        color: "#d81212",
                        fontFamily: "Impact, Arial Black, sans-serif",
                      }}
                    >
                      Confluence Historic Site
                    </p>
                    <p
                      style={{ color: "#368552" }}
                      className="font-bold text-lg"
                    >
                      Calgary, Canada 🇨🇦
                    </p>
                  </div>
                </Link>
              </div>

              <div
                className="group p-8 rounded-3xl border-4 transition-all duration-300 hover:transform hover:scale-110 hover:rotate-1 shadow-2xl"
                style={{
                  backgroundColor: "#ffffff",
                  borderColor: "#d81212",
                  boxShadow: "0 15px 40px rgba(216, 18, 18, 0.4)",
                }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center group-hover:rotate-45 transition-transform shadow-lg"
                    style={{ backgroundColor: "#ffdc96" }}
                  >
                    <Calendar
                      className="w-8 h-8"
                      style={{ color: "#d81212" }}
                    />
                  </div>
                  <div>
                    <h3
                      className="text-2xl font-black"
                      style={{
                        color: "#368552",
                        fontFamily: "Impact, Arial Black, sans-serif",
                      }}
                    >
                      📅 WHEN?
                    </h3>
                    <p
                      className="text-3xl font-black"
                      style={{
                        color: "#d81212",
                        fontFamily: "Impact, Arial Black, sans-serif",
                      }}
                    >
                      July 13, 2025
                    </p>
                    <p
                      style={{ color: "#368552" }}
                      className="font-bold text-lg"
                    >
                      Save the Date! ⏰
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Description */}
          <div className="lg:col-span-3">
            <div className="relative">
              {/* Main Content Card */}
              <div
                className="relative backdrop-blur-sm rounded-3xl p-8 sm:p-12 border-4 overflow-hidden transform hover:scale-105 transition-all duration-300 shadow-2xl"
                style={{
                  backgroundColor: "#ffffff",
                  borderColor: "#d81212",
                  boxShadow: "0 20px 50px rgba(216, 18, 18, 0.3)",
                }}
              >
                {/* Decorative Elements */}
                <div
                  className="absolute top-4 right-4 w-20 h-20 rounded-full blur-2xl animate-pulse"
                  style={{ backgroundColor: "rgba(255, 220, 150, 0.3)" }}
                ></div>
                <div
                  className="absolute bottom-4 left-4 w-16 h-16 rounded-full blur-2xl animate-pulse delay-300"
                  style={{ backgroundColor: "rgba(54, 133, 82, 0.2)" }}
                ></div>

                <div className="relative z-10">
                  {/* Logo/Brand */}
                  <div className="flex items-center gap-4 mb-8">
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg transform hover:rotate-12 transition-transform"
                      style={{ backgroundColor: "#368552" }}
                    >
                      <Zap className="w-8 h-8 text-white animate-pulse" />
                    </div>
                    <div>
                      <h3
                        className="text-3xl font-black"
                        style={{
                          color: "#d81212",
                          fontFamily: "Impact, Arial Black, sans-serif",
                          textShadow: "2px 2px 0 rgba(255, 220, 150, 0.5)",
                        }}
                      >
                        AFROSWITCH 🎤
                      </h3>
                      <p
                        className="text-xl font-bold"
                        style={{
                          color: "#368552",
                          fontFamily: "cursive, fantasy",
                        }}
                      >
                        Music Festival Extraordinaire
                      </p>
                    </div>
                  </div>

                  {/* Main Description */}
                  <div className="space-y-6">
                    <p
                      className="text-xl sm:text-2xl leading-relaxed font-bold"
                      style={{
                        color: "#368552",
                        fontFamily: "Georgia, serif",
                      }}
                    >
                      <span
                        className="font-black text-3xl"
                        style={{
                          color: "#d81212",
                          fontFamily: "Impact, sans-serif",
                        }}
                      >
                        AfroSwitch
                      </span>{" "}
                      brings the vibrant energy of Afrobeats to the heart of
                      Canada! 🇨🇦 This groundbreaking festival transforms{" "}
                      <span
                        className="font-black text-xl"
                        style={{
                          color: "#ffdc96",
                          backgroundColor: "#368552",
                          padding: "2px 8px",
                          borderRadius: "8px",
                        }}
                      >
                        Confluence Historic Site
                      </span>{" "}
                      in Calgary into a celebration of African music, culture,
                      and unity! ✨
                    </p>

                    <p
                      className="text-lg sm:text-xl leading-relaxed font-bold"
                      style={{
                        color: "#d81212",
                        fontFamily: "Georgia, serif",
                      }}
                    >
                      Experience world-class performances, immersive cultural
                      experiences, and the best of Afrobeats in the Great White
                      North on{" "}
                      <span
                        className="font-black text-2xl px-3 py-1 rounded-lg"
                        style={{
                          color: "#ffffff",
                          backgroundColor: "#368552",
                          fontFamily: "Impact, sans-serif",
                        }}
                      >
                        July 13, 2025 🗓️
                      </span>
                      .
                    </p>

                    {/* Quote */}
                    <div
                      className="p-8 rounded-3xl border-4 transform hover:scale-105 transition-all duration-300"
                      style={{
                        backgroundColor: "#ffdc96",
                        borderColor: "#368552",
                        boxShadow: "0 10px 30px rgba(255, 220, 150, 0.3)",
                      }}
                    >
                      <p
                        className="text-xl font-black text-center"
                        style={{
                          color: "#d81212",
                          fontFamily: "cursive, fantasy",
                          textShadow: "1px 1px 0 rgba(255, 255, 255, 0.5)",
                        }}
                      >
                        💫 &quot;Where music tells stories, dances bridge
                        communities, and culture takes center stage!&quot; 💫
                      </p>
                    </div>

                    {/* CTA Button */}
                    <div className="pt-8 text-center">
                      <Button asChild>
                        <Link
                          href={"https://www.showpass.com/afroswitch24"}
                          className="group font-black px-12 py-6 rounded-full transition-all duration-300 transform hover:scale-110 hover:rotate-2 border-4 text-2xl shadow-2xl"
                          style={{
                            backgroundColor: "#d81212",
                            color: "#ffffff",
                            borderColor: "#ffdc96",
                            fontFamily: "Impact, Arial Black, sans-serif",
                            textShadow: "2px 2px 0 rgba(0, 0, 0, 0.3)",
                            boxShadow: "0 15px 40px rgba(216, 18, 18, 0.4)",
                          }}
                        >
                          <span className="flex items-center gap-3">
                            <Music className="w-8 h-8 group-hover:rotate-45 group-hover:animate-bounce transition-all" />
                            🎟️ GET YOUR TICKETS NOW! 🎟️
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
          <div className="inline-flex items-center gap-4">
            <div
              className="w-16 h-2 rounded-full animate-pulse"
              style={{ backgroundColor: "#ffdc96" }}
            ></div>
            <div
              className="w-4 h-4 rounded-full animate-bounce"
              style={{ backgroundColor: "#d81212" }}
            ></div>
            <div
              className="w-4 h-4 rounded-full animate-bounce delay-200"
              style={{ backgroundColor: "#ffffff" }}
            ></div>
            <div
              className="w-4 h-4 rounded-full animate-bounce delay-400"
              style={{ backgroundColor: "#d81212" }}
            ></div>
            <div
              className="w-16 h-2 rounded-full animate-pulse delay-300"
              style={{ backgroundColor: "#ffdc96" }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
