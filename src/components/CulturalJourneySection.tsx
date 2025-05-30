"use client";

import Image from "next/image";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Palette, Utensils, Drum, Sparkles } from "lucide-react";

export default function CulturalJourneySection() {
  return (
    <section
      className="relative min-h-screen overflow-hidden py-16 lg:py-24"
      style={{ backgroundColor: "#FFEB3B" }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Triangles */}
        <div
          className="absolute top-20 left-10 w-24 h-24 clip-triangle animate-spin"
          style={{
            backgroundColor: "rgba(255, 87, 34, 0.3)",
            animationDuration: "30s",
          }}
        ></div>
        <div
          className="absolute bottom-40 right-20 w-32 h-32 clip-triangle animate-spin delay-2000"
          style={{
            backgroundColor: "rgba(76, 175, 80, 0.3)",
            animationDuration: "25s",
          }}
        ></div>

        {/* Floating Circles */}
        <div
          className="absolute top-1/3 right-1/4 w-16 h-16 rounded-full blur-lg animate-bounce"
          style={{ backgroundColor: "rgba(255, 235, 59, 0.5)" }}
        ></div>
        <div
          className="absolute bottom-1/4 left-1/3 w-20 h-20 rounded-full blur-lg animate-bounce delay-1000"
          style={{ backgroundColor: "rgba(255, 87, 34, 0.4)" }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center gap-3 px-8 py-3 rounded-full mb-8 border-4 shadow-2xl transform hover:scale-105 transition-all duration-300"
            style={{
              backgroundColor: "#ffffff",
              borderColor: "#FF5722",
              boxShadow: "0 10px 30px rgba(255, 87, 34, 0.3)",
            }}
          >
            <Sparkles
              className="w-6 h-6 animate-pulse"
              style={{ color: "#4CAF50" }}
            />
            <span
              className="font-black tracking-wider text-lg"
              style={{
                color: "#FF5722",
                fontFamily: "Impact, Arial Black, sans-serif",
                textShadow: "1px 1px 0 rgba(76, 175, 80, 0.5)",
              }}
            >
              ✨ CULTURAL IMMERSION ✨
            </span>
          </div>

          <h1
            className="text-5xl sm:text-6xl lg:text-8xl font-black leading-tight mb-6"
            style={{
              fontFamily: "Impact, Arial Black, sans-serif",
              textShadow:
                "4px 4px 0 rgba(255, 255, 255, 0.8), 8px 8px 0 rgba(255, 87, 34, 0.3)",
            }}
          >
            <span style={{ color: "#FF5722" }}>MORE THAN</span>
            <span
              className="block animate-pulse"
              style={{
                color: "#4CAF50",
                textShadow: "3px 3px 0 #FF5722, 6px 6px 0 rgba(0, 0, 0, 0.1)",
              }}
            >
              MUSIC
            </span>
            <span
              className="block"
              style={{
                color: "#FF5722",
                fontFamily: "cursive, fantasy",
                transform: "rotate(-2deg)",
                display: "inline-block",
              }}
            >
              A CULTURAL JOURNEY! 🌍
            </span>
          </h1>
        </div>

        {/* Main Content */}
        <div
          className="bg-white rounded-3xl border-4 p-8 lg:p-12 shadow-2xl"
          style={{
            borderColor: "#4CAF50",
            boxShadow: "0 20px 50px rgba(76, 175, 80, 0.3)",
          }}
        >
          <Accordion type="single" collapsible className="w-full space-y-6">
            {/* Fashion Accordion */}
            <AccordionItem value="fashion" className="border-b-0">
              <AccordionTrigger
                className="hover:no-underline p-6 rounded-2xl border-4 transition-all duration-300 hover:bg-opacity-90"
                style={{
                  backgroundColor: "#FF5722",
                  borderColor: "#4CAF50",
                  boxShadow: "0 10px 30px rgba(255, 87, 34, 0.3)",
                }}
              >
                <div className="flex items-center gap-6">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "#4CAF50" }}
                  >
                    <Palette className="w-8 h-8 text-white" />
                  </div>
                  <h3
                    className="text-2xl lg:text-3xl font-black text-left"
                    style={{
                      color: "#FFFFFF",
                      fontFamily: "Impact, Arial Black, sans-serif",
                      textShadow: "2px 2px 0 rgba(0, 0, 0, 0.2)",
                    }}
                  >
                    AFRICAN FASHION SHOWCASE
                  </h3>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-6">
                <div className="grid lg:grid-cols-2 gap-8">
                  <div>
                    <p
                      className="text-lg leading-relaxed"
                      style={{
                        color: "#FF5722",
                        fontFamily: "Georgia, serif",
                      }}
                    >
                      Step into the{" "}
                      <span className="font-bold">Cultural Zone</span> at
                      AfroSwitch and immerse yourself in the rich tapestry of
                      African heritage. This vibrant space celebrates the
                      diversity and creativity of African culture through
                      interactive experiences and live showcases.
                    </p>
                    <ul
                      className="mt-4 space-y-2 pl-5"
                      style={{
                        color: "#4CAF50",
                        fontFamily: "Georgia, serif",
                      }}
                    >
                      <li className="relative before:content-['➡️'] before:absolute before:-left-5">
                        Traditional and contemporary African designs
                      </li>
                      <li className="relative before:content-['➡️'] before:absolute before:-left-5">
                        Live runway shows featuring local designers
                      </li>
                      <li className="relative before:content-['➡️'] before:absolute before:-left-5">
                        Pop-up shops with authentic African textiles
                      </li>
                    </ul>
                  </div>
                  <div
                    className="relative h-64 lg:h-full rounded-xl overflow-hidden border-4"
                    style={{ borderColor: "#FF5722" }}
                  >
                    <Image
                      src="/images/18.jpg"
                      fill
                      alt="African Fashion Showcase"
                      className="object-cover"
                    />
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Food Accordion */}
            <AccordionItem value="food" className="border-b-0">
              <AccordionTrigger
                className="hover:no-underline p-6 rounded-2xl border-4 transition-all duration-300 hover:bg-opacity-90"
                style={{
                  backgroundColor: "#4CAF50",
                  borderColor: "#FF5722",
                  boxShadow: "0 10px 30px rgba(76, 175, 80, 0.3)",
                }}
              >
                <div className="flex items-center gap-6">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "#FF5722" }}
                  >
                    <Utensils className="w-8 h-8 text-white" />
                  </div>
                  <h3
                    className="text-2xl lg:text-3xl font-black text-left"
                    style={{
                      color: "#FFFFFF",
                      fontFamily: "Impact, Arial Black, sans-serif",
                      textShadow: "2px 2px 0 rgba(0, 0, 0, 0.2)",
                    }}
                  >
                    FOOD & DRINK VILLAGE
                  </h3>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-6">
                <div className="grid lg:grid-cols-2 gap-8">
                  <div>
                    <p
                      className="text-lg leading-relaxed"
                      style={{
                        color: "#4CAF50",
                        fontFamily: "Georgia, serif",
                      }}
                    >
                      Indulge in the rich and diverse flavors of African cuisine
                      at our <span className="font-bold">Food Village</span>.
                      From savory street food to gourmet dishes, explore the
                      tastes that define the continent.
                    </p>
                    <ul
                      className="mt-4 space-y-2 pl-5"
                      style={{
                        color: "#FF5722",
                        fontFamily: "Georgia, serif",
                      }}
                    >
                      <li className="relative before:content-['🍛'] before:absolute before:-left-5">
                        Jollof Rice Wars - Taste different regional varieties
                      </li>
                      <li className="relative before:content-['🍢'] before:absolute before:-left-5">
                        Live Suya (spiced skewer) grilling stations
                      </li>
                      <li className="relative before:content-['🍹'] before:absolute before:-left-5">
                        African cocktail bar with palm wine and more
                      </li>
                    </ul>
                  </div>
                  <div
                    className="relative h-64 lg:h-full rounded-xl overflow-hidden border-4"
                    style={{ borderColor: "#4CAF50" }}
                  >
                    <Image
                      src="/images/1.jpg"
                      fill
                      alt="Food and Drink Village"
                      className="object-cover"
                    />
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Workshops Accordion */}
            <AccordionItem value="workshops" className="border-b-0">
              <AccordionTrigger
                className="hover:no-underline p-6 rounded-2xl border-4 transition-all duration-300 hover:bg-opacity-90"
                style={{
                  backgroundColor: "#FF5722",
                  borderColor: "#4CAF50",
                  boxShadow: "0 10px 30px rgba(255, 87, 34, 0.3)",
                }}
              >
                <div className="flex items-center gap-6">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "#4CAF50" }}
                  >
                    <Drum className="w-8 h-8 text-white" />
                  </div>
                  <h3
                    className="text-2xl lg:text-3xl font-black text-left"
                    style={{
                      color: "#FFFFFF",
                      fontFamily: "Impact, Arial Black, sans-serif",
                      textShadow: "2px 2px 0 rgba(0, 0, 0, 0.2)",
                    }}
                  >
                    CULTURAL WORKSHOPS
                  </h3>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-6">
                <div className="grid lg:grid-cols-2 gap-8">
                  <div>
                    <p
                      className="text-lg leading-relaxed"
                      style={{
                        color: "#FF5722",
                        fontFamily: "Georgia, serif",
                      }}
                    >
                      Get hands-on with activities that bring African traditions
                      to life at our{" "}
                      <span className="font-bold">Interactive Workshops</span>.
                      Learn from masters of various African arts and crafts.
                    </p>
                    <ul
                      className="mt-4 space-y-2 pl-5"
                      style={{
                        color: "#4CAF50",
                        fontFamily: "Georgia, serif",
                      }}
                    >
                      <li className="relative before:content-['🥁'] before:absolute before:-left-5">
                        Djembe drumming lessons with master drummers
                      </li>
                      <li className="relative before:content-['💃'] before:absolute before:-left-5">
                        Afrobeats dance classes for all skill levels
                      </li>
                      <li className="relative before:content-['🎨'] before:absolute before:-left-5">
                        Traditional beadwork and textile workshops
                      </li>
                    </ul>
                  </div>
                  <div
                    className="relative h-64 lg:h-full rounded-xl overflow-hidden border-4"
                    style={{ borderColor: "#FF5722" }}
                  >
                    <Image
                      src="/images/10.jpg"
                      fill
                      alt="Cultural Workshops"
                      className="object-cover"
                    />
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Bottom Decoration */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className={`w-${i % 2 === 0 ? "16" : "4"} h-${
                  i % 2 === 0 ? "2" : "4"
                } rounded-full animate-pulse`}
                style={{
                  backgroundColor: i % 2 === 0 ? "#4CAF50" : "#FF5722",
                  animationDelay: `${i * 300}ms`,
                }}
              ></div>
            ))}
          </div>
        </div>
      </div>

      {/* Custom CSS for triangle shape */}
      <style jsx>{`
        .clip-triangle {
          clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
        }
      `}</style>
    </section>
  );
}
