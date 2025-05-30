import Image from "next/image";
import Link from "next/link";
import { Store, Mic, Sparkles } from "lucide-react";

const SectionCard = ({
  title,
  description,
  buttonLabel,
  buttonLink,
  imageUrl,
  icon,
  accentColor,
}: {
  title: string;
  description: string;
  buttonLabel: string;
  buttonLink: string;
  imageUrl: string;
  icon: React.ReactNode;
  accentColor: string;
}) => (
  <div className="relative w-full h-[500px] rounded-3xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-all duration-500 group">
    {/* Background Image with overlay */}
    <Image
      src={imageUrl}
      alt={title}
      fill
      className="object-cover z-0 group-hover:scale-105 transition-transform duration-500"
    />

    {/* Gradient overlay */}
    <div
      className="absolute inset-0 z-10"
      style={{
        background: `linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, ${accentColor}80 100%)`,
      }}
    />

    {/* Decorative elements */}
    <div
      className="absolute top-4 right-4 w-16 h-16 rounded-full blur-xl animate-pulse z-20"
      style={{ backgroundColor: `${accentColor}40` }}
    ></div>

    <div className="relative z-30 h-full flex flex-col justify-center items-center text-center px-8">
      {/* Icon with animated background */}
      <div
        className="w-24 h-24 rounded-2xl flex items-center justify-center mb-6 border-4 transform group-hover:rotate-12 transition-all duration-300 shadow-xl"
        style={{
          backgroundColor: "#ffffff",
          borderColor: accentColor,
        }}
      >
        <div className="text-4xl">{icon}</div>
      </div>

      <h2
        className="text-white text-4xl md:text-5xl font-black mb-4 uppercase tracking-wide"
        style={{
          fontFamily: "Impact, Arial Black, sans-serif",
          textShadow: `3px 3px 0 ${accentColor}, 6px 6px 0 rgba(0, 0, 0, 0.2)`,
        }}
      >
        {title}
      </h2>

      <p
        className="mt-3 text-white text-xl max-w-xl font-bold mb-8 leading-relaxed"
        style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.5)" }}
      >
        {description}
      </p>

      <Link
        href={buttonLink}
        className="mt-5 px-10 py-4 rounded-full text-xl font-black tracking-wide shadow-2xl hover:scale-110 transition-all duration-300 flex items-center gap-3"
        style={{
          backgroundColor: accentColor,
          color: "#ffffff",
          boxShadow: `0 10px 30px ${accentColor}80`,
          fontFamily: "Impact, Arial Black, sans-serif",
        }}
      >
        {buttonLabel}
        <Sparkles className="w-5 h-5 animate-pulse" />
      </Link>
    </div>
  </div>
);

export default function VendorArtistSection() {
  return (
    <section
      className="px-4 py-16 lg:py-24 relative overflow-hidden"
      style={{ backgroundColor: "#FFEB3B" }}
    >
      {/* Background elements */}
      <div className="absolute inset-0">
        <div
          className="absolute top-20 left-10 w-32 h-32 rounded-full blur-xl animate-pulse"
          style={{ backgroundColor: "rgba(255, 87, 34, 0.3)" }}
        ></div>
        <div
          className="absolute bottom-40 right-20 w-40 h-40 rounded-full blur-xl animate-pulse delay-300"
          style={{ backgroundColor: "rgba(76, 175, 80, 0.3)" }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section header */}
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
              ✨ JOIN THE EXPERIENCE ✨
            </span>
          </div>

          <h1
            className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight mb-6"
            style={{
              fontFamily: "Impact, Arial Black, sans-serif",
              textShadow:
                "4px 4px 0 rgba(255, 255, 255, 0.8), 8px 8px 0 rgba(255, 87, 34, 0.3)",
            }}
          >
            <span style={{ color: "#FF5722" }}>BE PART OF</span>
            <span
              className="block animate-pulse"
              style={{
                color: "#4CAF50",
                textShadow: "3px 3px 0 #FF5722, 6px 6px 0 rgba(0, 0, 0, 0.1)",
              }}
            >
              AFROSWITCH!
            </span>
          </h1>
        </div>

        {/* Cards container */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 px-4">
          <SectionCard
            title="Call for Vendors"
            description="Showcase your brand to thousands at Canada's hottest Afrobeats festival! Limited premium spots available!"
            buttonLabel="Apply as Vendor"
            buttonLink="/vendor-signup"
            imageUrl="/vendor-call.jpg"
            icon={<Store className="w-12 h-12" style={{ color: "#FF5722" }} />}
            accentColor="#FF5722"
          />

          <SectionCard
            title="Call for Artists"
            description="Bring your talent to our stage! We're looking for amazing performers to electrify our audience!"
            buttonLabel="Apply as Artist"
            buttonLink="/artist-signup"
            imageUrl="/artist-call.jpg"
            icon={<Mic className="w-12 h-12" style={{ color: "#4CAF50" }} />}
            accentColor="#4CAF50"
          />
        </div>
      </div>
    </section>
  );
}
