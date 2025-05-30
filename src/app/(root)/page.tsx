/* eslint-disable @next/next/no-img-element */
import CountdownSection from "@/components/CountdownSection";
import CulturalJourneySection from "@/components/CulturalJourneySection";
import ImageCarousel from "@/components/ImageCarousel";
import InstagramGallery from "@/components/InstagramGallery";
import JohnCommunity from "@/components/JoinCommunity";
import { BsFacebook, BsSnapchat, BsTwitterX } from "react-icons/bs";
import Link from "next/link";
import React from "react";
import MusicSection from "@/components/MusicSection";
import NewsletterModal from "@/components/NewsletterModal";
import StampedeHero from "@/components/StampedeHero";
import AboutSection from "@/components/AboutSection";
import { Instagram } from "lucide-react";
import VendorArtistSection from "@/components/VendorArtistSection";

const HeroPage = () => {
  return (
    <div className="bg-black relative w-full">
      <NewsletterModal />
      <div
        className="fixed inset-[1px] pointer-events-none z-50"
        style={{
          borderWidth: "6px",
          borderStyle: "solid",
          borderImageSlice: 1,
          borderImageSource:
            "linear-gradient(to right, #d81212, #ffdc96, #368552, black)",
        }}
      />
      {/* Social Media Links */}
      <div className="fixed right-2 md:right-4 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-40">
        <Link
          href="https://web.facebook.com/profile.php?id=61559279755750"
          target="_blank"
          rel="noopener noreferrer"
          className="group p-2 md:p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:bg-[#1877f2] border border-gray-200/50"
        >
          <BsFacebook className="w-5 h-5 md:w-6 md:h-6 text-[#1877f2] group-hover:text-white transition-colors duration-300" />
        </Link>

        <Link
          href="https://www.instagram.com/afroswitch.ca"
          target="_blank"
          rel="noopener noreferrer"
          className="group p-2 md:p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:bg-gradient-to-br hover:from-[#833ab4] hover:via-[#fd1d1d] hover:to-[#fcb045] border border-gray-200/50"
        >
          <Instagram className="w-5 h-5 md:w-6 md:h-6 text-[#E4405F] group-hover:text-white transition-colors duration-300" />
        </Link>

        <Link
          href="https://www.snapchat.com/add/afroswitch"
          target="_blank"
          rel="noopener noreferrer"
          className="group p-2 md:p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:bg-[#fffc00] border border-gray-200/50"
        >
          <BsSnapchat className="w-5 h-5 md:w-6 md:h-6 text-[#fffc00] group-hover:text-black transition-colors duration-300" />
        </Link>

        <Link
          href="https://x.com/afroswitch_ca"
          target="_blank"
          rel="noopener noreferrer"
          className="group p-2 md:p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:bg-black border border-gray-200/50"
        >
          <BsTwitterX className="w-5 h-5 md:w-6 md:h-6 text-black group-hover:text-white transition-colors duration-300" />
        </Link>
      </div>

      <div className="fixed right-2 md:right-4 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-40">
        <Link
          href="https://web.facebook.com/profile.php?id=61559279755750"
          target="_blank"
          rel="noopener noreferrer"
          className="group p-2 md:p-3 bg-[#ffdc96]/90 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:bg-[#368552] border border-[#368552]/20"
        >
          <BsFacebook className="w-5 h-5 md:w-6 md:h-6 text-[#368552] group-hover:text-white transition-colors duration-300" />
        </Link>

        <Link
          href="https://www.instagram.com/afroswitch.ca"
          target="_blank"
          rel="noopener noreferrer"
          className="group p-2 md:p-3 bg-[#ffdc96]/90 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:bg-[#d81212] border border-[#d81212]/20"
        >
          <Instagram className="w-5 h-5 md:w-6 md:h-6 text-[#d81212] group-hover:text-white transition-colors duration-300" />
        </Link>

        <Link
          href="https://www.snapchat.com/add/afroswitch"
          target="_blank"
          rel="noopener noreferrer"
          className="group p-2 md:p-3 bg-[#ffdc96]/90 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:bg-[#368552] border border-[#368552]/20"
        >
          <BsSnapchat className="w-5 h-5 md:w-6 md:h-6 text-[#368552] group-hover:text-white transition-colors duration-300" />
        </Link>

        <Link
          href="https://x.com/afroswitch_ca"
          target="_blank"
          rel="noopener noreferrer"
          className="group p-2 md:p-3 bg-[#ffdc96]/90 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:bg-[#d81212] border border-[#d81212]/20"
        >
          <BsTwitterX className="w-5 h-5 md:w-6 md:h-6 text-[#d81212] group-hover:text-white transition-colors duration-300" />
        </Link>
      </div>
      <StampedeHero />
      <AboutSection />
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
      <VendorArtistSection />
      <MusicSection />
      <JohnCommunity />
      <div className="w-full h-[1px]  max-w-[1500px] mx-auto bg-gray-400" />
    </div>
  );
};

export default HeroPage;
