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
    <section className="relative min-h-screen overflow-hidden py-16 sm:py-20 lg:py-24 bg-[#fdf8f3]">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Triangles */}
        <div
          className="absolute top-20 left-10 w-16 sm:w-20 h-16 sm:h-20 clip-triangle animate-spin-slow"
          style={{
            backgroundColor: "rgba(191, 128, 96, 0.1)",
            animationDuration: "40s",
          }}
        ></div>
        <div
          className="absolute bottom-40 right-20 w-24 sm:w-32 h-24 sm:h-32 clip-triangle animate-spin-slower"
          style={{
            backgroundColor: "rgba(125, 185, 182, 0.1)",
            animationDuration: "35s",
          }}
        ></div>

        {/* Floating Circles */}
        <div
          className="absolute top-1/3 right-1/4 w-12 sm:w-16 h-12 sm:h-16 rounded-full blur-lg animate-bounce"
          style={{ backgroundColor: "rgba(255, 213, 153, 0.2)" }}
        ></div>
        <div
          className="absolute bottom-1/4 left-1/3 w-16 sm:w-20 h-16 sm:h-20 rounded-full blur-lg animate-bounce delay-1000"
          style={{ backgroundColor: "rgba(241, 170, 145, 0.2)" }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div
            className="inline-flex items-center gap-2 sm:gap-3 px-3 py-1.5 sm:py-2 rounded-full mb-6 sm:mb-8 border-2 bg-white/80 shadow-sm backdrop-blur"
            style={{ borderColor: "#c0a67d" }}
          >
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-[#a67c52]" />
            <span className="font-semibold tracking-wide text-xs sm:text-sm text-[#5e4328]">
              ✨ CULTURAL IMMERSION ✨
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-[#2e2a25]">
            <span className="text-[#a67c52]">MORE THAN</span>
            <span className="block text-[#5d8579]">MUSIC</span>
            <span className="block text-[#a67c52] italic">
              A CULTURAL JOURNEY!
            </span>
          </h1>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-2xl sm:rounded-3xl border border-[#dfd3c3] p-4 sm:p-6 lg:p-10 shadow-md">
          <Accordion type="single" collapsible className="w-full space-y-6">
            {/* Fashion Accordion */}
            <AccordionItem value="fashion">
              <AccordionTrigger className="p-4 sm:p-6 rounded-xl border bg-[#fdf6ed] hover:bg-[#faefe3] transition">
                <div className="flex items-center gap-4 sm:gap-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center bg-[#a67c52]">
                    <Palette className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-[#3f342c]">
                    AFRICAN FASHION SHOWCASE
                  </h3>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-4 sm:pt-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                  <div>
                    <p className="text-[#5d4c3d] text-sm sm:text-base leading-relaxed">
                      Step into the{" "}
                      <span className="font-bold">Cultural Zone</span> at
                      AfroSwitch and immerse yourself in the rich tapestry of
                      African heritage. This vibrant space celebrates the
                      diversity and creativity of African culture through
                      interactive experiences and live showcases.
                    </p>
                    <ul className="mt-4 space-y-2 pl-5 text-[#7c5e49] text-sm sm:text-base list-disc">
                      <li>Traditional and contemporary African designs</li>
                      <li>Live runway shows featuring local designers</li>
                      <li>Pop-up shops with authentic African textiles</li>
                    </ul>
                  </div>
                  <div className="relative h-56 sm:h-64 lg:h-full rounded-xl overflow-hidden border border-[#cba87c]">
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
            <AccordionItem value="food">
              <AccordionTrigger className="p-4 sm:p-6 rounded-xl border bg-[#f6f9f8] hover:bg-[#eaf4f2] transition">
                <div className="flex items-center gap-4 sm:gap-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center bg-[#5d8579]">
                    <Utensils className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-[#32433b]">
                    FOOD & DRINK VILLAGE
                  </h3>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-4 sm:pt-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                  <div>
                    <p className="text-[#415b53] text-sm sm:text-base leading-relaxed">
                      Indulge in the rich and diverse flavors of African cuisine
                      at our <span className="font-bold">Food Village</span>.
                      From savory street food to gourmet dishes, explore the
                      tastes that define the continent.
                    </p>
                    <ul className="mt-4 space-y-2 pl-5 text-[#a67c52] text-sm sm:text-base list-disc">
                      <li>
                        Jollof Rice Wars - Taste different regional varieties
                      </li>
                      <li>Live Suya (spiced skewer) grilling stations</li>
                      <li>African cocktail bar with palm wine and more</li>
                    </ul>
                  </div>
                  <div className="relative h-56 sm:h-64 lg:h-full rounded-xl overflow-hidden border border-[#a0c1b8]">
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
            <AccordionItem value="workshops">
              <AccordionTrigger className="p-4 sm:p-6 rounded-xl border bg-[#fdf6ed] hover:bg-[#f9ece2] transition">
                <div className="flex items-center gap-4 sm:gap-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center bg-[#a67c52]">
                    <Drum className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-[#3f342c]">
                    CULTURAL WORKSHOPS
                  </h3>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-4 sm:pt-6">
                <p className="text-[#5d4c3d] text-sm sm:text-base leading-relaxed">
                  Discover, learn, and engage through hands-on workshops hosted
                  by culture bearers and artisans. Dive into drum circles,
                  storytelling sessions, beadwork, dance, and much more as you
                  journey deeper into the soul of Africa.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
}
