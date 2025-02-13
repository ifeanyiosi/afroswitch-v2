/* eslint-disable @next/next/no-img-element */
import CountdownSection from "@/components/CountdownSection";
import CulturalJourneySection from "@/components/CulturalJourneySection";
import ImageCarousel from "@/components/ImageCarousel";
import InstagramGallery from "@/components/InstagramGallery";
import JohnCommunity from "@/components/JoinCommunity";
import { Calendar, Facebook, Globe, Instagram } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface HeroProps {
  title: string;
  date: string;
  location: string;
}

const Hero = ({
  title = "Afroswitch 2025",
  date = "31 AUGUST 2024: MAIN FESTIVAL",
  location = "malaga FORUM Andalusia, Spain",
}: HeroProps) => {
  const randomDate = new Date(
    2025,
    Math.floor(Math.random() * 12),
    Math.floor(Math.random() * 28) + 1
  );
  const formattedDate = randomDate.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="bg-black relative w-full">
      <div className="fixed inset-[1px] border-[4px] border-primary pointer-events-none z-50" />

      {/* Social Media Links */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 flex flex-col gap-2 z-40">
        <Link
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3  rounded-full  transition-all duration-300"
        >
          <Facebook className="w-6 h-6 text-primary" />
        </Link>
        <Link
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className=" p-3 rounded-full  transition-all duration-300"
        >
          <Instagram className="w-6 h-6 text-primary" />
        </Link>
        <Link
          href="https://snapchat.com"
          target="_blank"
          rel="noopener noreferrer"
          className=" p-3 rounded-full  transition-all duration-300"
        >
          <Instagram className="w-6 h-6 text-primary" />
        </Link>
      </div>

      <div className="relative mx-auto max-w-[1500px] flex items-center justify-center h-[500px]  bg-black lg:h-screen w-full">
        <img
          src="/images/afro-one.jpg"
          alt="Festival atmosphere"
          className="w-full h-[500px] lg:h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 uppercase">
          <div className="h-full w-full flex flex-col justify-center text-center lg:text-left px-4 ">
            <p className="text-white text-[16px] mb-4">
              Canada&apos;s Biggest Afro Music Festival
            </p>
            <h1 className="text-white text-4xl md:text-6xl lg:text-[100px] uppercase font-bold mb-6">
              {title}
            </h1>
            <div className="space-y-2">
              <p className="text-primary text-[16px] font-semibold">
                {date + location}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-2 py-8 mx-auto max-w-[1500px] lg:py-[60px] bg-black text-white min-h-screen overflow-hidden">
        {/* Background Image */}
        <img
          src="https://emagefest.com/wp-content/uploads/2023/08/bg2.png"
          alt="Decorative background"
          className="absolute   hidden lg:flex left-0 top-1/2 -translate-y-1/2 h-[800px] w-auto -translate-x-1/4"
        />

        {/* Div A - Left side */}
        <div className="flex flex-col w-full items-start justify-center ">
          <h1 className="text-6xl md:text-8xl lg:text-[96px] font-bold mb-8 leading-tight">
            LET THE BEAT TAKE OVER
          </h1>

          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Globe className="w-6 text-primary h-6" />
              <span className="text-xl">Calgary, Canada</span>
            </div>

            <div className="flex items-center gap-2">
              <Calendar className="w-6 h-6 text-primary" />
              <span className="text-xl">{formattedDate}</span>
            </div>
          </div>
        </div>

        {/* Div B - Right side */}
        <div className="flex items-center justify-center w-full lg:max-w-[63%]">
          <div
            className="relative w-full  rounded-lg overflow-hidden bg-cover bg-center bg-no-repeat p-6 lg:rotate-[-8deg] hover:lg:rotate-[-0deg] transform"
            style={{
              backgroundImage: `url('https://afromusicfestyeg.com/wp-content/uploads/2025/02/371339423_a980cbb2-4e86-4a0f-a913-536706e40412-scaled.jpg')`,
            }}
          >
            <div className="absolute inset-0 bg-black/60" />
            <div className="relative text-white ">
              <p className="text-base lg:text-2xl leading-relaxed">
                AfroSwitch brings the vibrant energy of Afrobeats to the heart
                of Canada. Similar to the globally renowned Afronation, this
                groundbreaking festival transforms Calgary into a celebration of
                African music, culture, and unity. Experience world-class
                performances, immersive cultural experiences, and the best of
                Afrobeats in the Great White North.
              </p>

              <p className="mt-8 text-base lg:text-2xl">
                Dive into a world where music tells stories, dances bridge
                communities, and culture takes center stage.
              </p>

              <div className="mt-4">
                <Image
                  width={100}
                  height={50}
                  src="/icons/afroswitch-logo.png"
                  alt="Afroswitch Logo"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <InstagramGallery
        images={[
          {
            src: "/images/8.jpg",
            link: "https://www.instagram.com/afroswitch.ca/reel/C9Q7hXZPhBD/",
          },
          {
            src: "/images/8.jpg",
            link: "https://www.instagram.com/p/CxYzDEF/",
          },
          {
            src: "/images/8.jpg",
            link: "https://www.instagram.com/afroswitch.ca/reel/C9Q7hXZPhBD/",
          },
          {
            src: "/images/8.jpg",
            link: "https://www.instagram.com/p/CxYzDEF/",
          },
          {
            src: "/images/8.jpg",
            link: "https://www.instagram.com/afroswitch.ca/reel/C9Q7hXZPhBD/",
          },
          {
            src: "/images/8.jpg",
            link: "https://www.instagram.com/p/CxYzDEF/",
          },
          {
            src: "/images/8.jpg",
            link: "https://www.instagram.com/afroswitch.ca/reel/C9Q7hXZPhBD/",
          },
          {
            src: "/images/8.jpg",
            link: "https://www.instagram.com/p/CxYzDEF/",
          },
        ]}
      />

      <CulturalJourneySection />
      <ImageCarousel />
      <CountdownSection />
      <JohnCommunity />
      <div className="w-full h-[1px]  max-w-[1500px] mx-auto bg-gray-400" />
    </div>
  );
};

export default Hero;
