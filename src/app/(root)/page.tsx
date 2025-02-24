/* eslint-disable @next/next/no-img-element */
import CountdownSection from "@/components/CountdownSection";
import CulturalJourneySection from "@/components/CulturalJourneySection";
import ImageCarousel from "@/components/ImageCarousel";
import InstagramGallery from "@/components/InstagramGallery";
import JohnCommunity from "@/components/JoinCommunity";
import { Calendar, Globe, Instagram } from "lucide-react";
import { BsFacebook, BsSnapchat, BsTwitterX } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import MusicSection from "@/components/MusicSection";
import NewsletterModal from "@/components/NewsletterModal";

const HeroPage = () => {
  return (
    <div className="bg-black relative w-full">
      <NewsletterModal />
      <div className="fixed inset-[1px] border-[4px] border-primary pointer-events-none z-50" />

      {/* Social Media Links */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 flex flex-col gap-2 z-40">
        <Link
          href="https://web.facebook.com/profile.php?id=61559279755750"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3  rounded-full  transition-all duration-300"
        >
          <BsFacebook className="w-6 h-6 text-primary" />
        </Link>
        <Link
          href="https://www.instagram.com/afroswitch.ca"
          target="_blank"
          rel="noopener noreferrer"
          className=" p-3 rounded-full  transition-all duration-300"
        >
          <Instagram className="w-6 h-6 text-primary" />
        </Link>
        <Link
          href="https://www.snapchat.com/add/afroswitch"
          target="_blank"
          rel="noopener noreferrer"
          className=" p-3 rounded-full  transition-all duration-300"
        >
          <BsSnapchat className="w-6 h-6 text-primary" />
        </Link>

        <Link
          href="https://x.com/afroswitch_ca"
          target="_blank"
          rel="noopener noreferrer"
          className=" p-3 rounded-full  transition-all duration-300"
        >
          <BsTwitterX className="w-6 h-6 text-primary" />
        </Link>
      </div>

      <div className="relative mx-auto max-w-[1500px] flex items-center justify-center h-[500px]  bg-black lg:h-screen w-full">
        <img
          src="/images/afro-one.jpg"
          alt="Festival atmosphere"
          className="w-full h-[500px] lg:h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 uppercase">
          <div className="h-full w-full flex flex-col justify-center text-center lg:text-left px-4 lg:px-0 ">
            <p className="text-white text-[26px] mb-4">
              Canada&apos;s Biggest Afro Music Festival
            </p>
            <h1 className="text-[#FF5300] text-4xl md:text-6xl lg:text-[100px] uppercase font-bold mb-6">
              Afroswitch <br /> 2025
            </h1>
            <div className="space-y-2">
              <p className="text-primary hidden text-[26px] font-semibold">
                31 AUGUST 2024: MAIN FESTIVAL Calgary, Canada
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

          <div className=" flex flex-col lg:flex-row items-center gap-10 justify-center lg:justify-between w-full lg:max-w-[500px] ">
            <div className="flex flex-col items-center  gap-2">
              <div className="flex items-center gap-2">
                <Globe className="w-6 text-primary h-6" />
                <h1 className="text-2xl">WHERE?</h1>
              </div>
              <div>
                <span className="text-base uppercase">Calgary, Canada</span>
              </div>
            </div>

            <div className="flex flex-col items-center gap-2">
              <div className="flex items-center gap-2">
                <Calendar className="w-6 h-6 text-primary" />
                <h1 className="text-2xl">WHEN?</h1>
              </div>
              <div>
                <span className="text-base">TBA</span>
              </div>
            </div>
          </div>
        </div>

        {/* Div B - Right side */}
        <div className="flex items-center  justify-center w-full lg:max-w-[63%]">
          <div
            className="relative w-full  rounded-lg bg-[#FFF5D1] overflow-hidden bg-cover bg-center bg-no-repeat p-6  transform"
            style={{
              backgroundImage: `url('https://afromusicfestyeg.com/wp-content/uploads/2025/02/371339423_a980cbb2-4e86-4a0f-a913-536706e40412-scaled.jpg')`,
            }}
          >
            <div className="absolute inset-0 bg-[#110700] shadow-lg shadow-[#FFF5D1]/10" />
            <div className="relative text-[#FFF5D1] ">
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
            src: "/images/7.jpg",
            link: "https://www.instagram.com/afroswitch.ca/",
          },
          {
            src: "/images/8.jpg",
            link: "https://www.instagram.com/afroswitch.ca/",
          },
          {
            src: "/images/art-1.jpg",
            link: "https://www.instagram.com/afroswitch.ca/",
          },
          {
            src: "/images/art-2.jpg",
            link: "https://www.instagram.com/afroswitch.ca/",
          },
          {
            src: "/images/art-3.jpg",
            link: "https://www.instagram.com/afroswitch.ca/",
          },
          {
            src: "/images/art-4.jpg",
            link: "https://www.instagram.com/afroswitch.ca/",
          },
          {
            src: "/images/art-5.jpg",
            link: "https://www.instagram.com/afroswitch.ca/",
          },
          {
            src: "/images/art-6.jpg",
            link: "https://www.instagram.com/afroswitch.ca/",
          },
        ]}
      />

      <CulturalJourneySection />
      <ImageCarousel />
      <CountdownSection />
      <MusicSection />
      <JohnCommunity />
      <div className="w-full h-[1px]  max-w-[1500px] mx-auto bg-gray-400" />
    </div>
  );
};

export default HeroPage;
