import Image from "next/image";
import Link from "next/link";

const SectionCard = ({
  title,
  description,
  buttonLabel,
  buttonLink,
  imageUrl,
}: {
  title: string;
  description: string;
  buttonLabel: string;
  buttonLink: string;
  imageUrl: string;
}) => (
  <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-lg">
    <Image
      src={imageUrl}
      alt={title}
      layout="fill"
      objectFit="cover"
      className="z-0"
    />
    <div className="absolute inset-0 bg-[#368552]/70 z-10" />
    <div className="relative z-20 h-full flex flex-col justify-center items-center text-center px-4">
      <h2 className="text-white text-3xl md:text-4xl font-bold drop-shadow-lg">
        {title}
      </h2>
      <p className="mt-3 text-white text-md max-w-xl drop-shadow-md">
        {description}
      </p>

      <Link
        href={buttonLink}
        className="mt-5 bg-[#ffdc96] text-[#d81212] font-semibold px-6 py-3 rounded-full text-lg shadow-md hover:bg-[#ffd170] transition duration-300"
      >
        {buttonLabel}
      </Link>
    </div>
  </div>
);

export default function VendorArtistSection() {
  return (
    <section className="px-4 py-12 bg-white space-y-10 md:space-y-0 md:space-x-6 md:flex md:items-stretch md:justify-center">
      <div className="md:w-1/2">
        <SectionCard
          title="Call for Vendors"
          description="Showcase your brand, products, and services at our upcoming event. Limited vendor spots available!"
          buttonLabel="Apply as Vendor"
          buttonLink="/vendor-signup"
          imageUrl="/vendor-call.jpg" // Replace with your actual image path
        />
      </div>
      <div className="md:w-1/2">
        <SectionCard
          title="Call for Artists"
          description="Join us to display your talent and entertain our vibrant audience. We're looking for amazing performers!"
          buttonLabel="Apply as Artist"
          buttonLink="/artist-signup"
          imageUrl="/artist-call.jpg" // Replace with your actual image path
        />
      </div>
    </section>
  );
}
