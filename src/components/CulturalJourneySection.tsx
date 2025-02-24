import Image from "next/image";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export default function CulturalJourneySection() {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-center lg:min-h-screen px-2  lg:px-16 py-12 bg-[#FFF5D1]">
      <div className="bg-[#110700] w-full max-w-6xl p-2 lg:p-16 rounded-3xl">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Section - Title */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl lg:text-5xl font-bold uppercase leading-tight text-[#FF5300]">
              More Than <span className="text-primary">Music;</span> <br /> A
              Cultural Journey
            </h2>
          </div>

          {/* Right Section - Accordion */}
          <div className="lg:w-1/2">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {/* First Accordion Item */}
              <AccordionItem value="fashion" className="border-b-0">
                <AccordionTrigger className="text-[#FFF5D1] text-2xl lg:text-3xl hover:no-underline">
                  African Fashion Showcase
                </AccordionTrigger>
                <AccordionContent>
                  <div className="grid grid-cols-1 gap-4">
                    <p className="text-lg text-white">
                      Step into the Cultural Zone at AfroVibes Festival and
                      immerse yourself in the rich tapestry of African heritage.
                      This vibrant space is dedicated to celebrating the
                      diversity and creativity of African culture through
                      interactive experiences, live showcases, and hands-on
                      workshops.
                    </p>
                    <div className="relative w-full h-48">
                      <Image
                        src="/images/18.jpg"
                        fill
                        alt="African Fashion Showcase"
                        className="rounded-lg object-cover"
                      />
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Second Accordion Item */}
              <AccordionItem value="food" className="border-b-0">
                <AccordionTrigger className="text-[#FFF5D1] text-2xl lg:text-3xl hover:no-underline">
                  Food and Drink Village
                </AccordionTrigger>
                <AccordionContent>
                  <div className="grid grid-cols-1 gap-4">
                    <p className="text-lg text-white">
                      Indulge in the rich and diverse flavors of African cuisine
                      at the Food and Drink Village. From savory street food to
                      gourmet dishes, this is your chance to explore the tastes
                      that define the continent.
                    </p>
                    <div className="relative w-full h-48">
                      <Image
                        src="/images/1.jpg"
                        fill
                        alt="Food and Drink Village"
                        className="rounded-lg object-cover"
                      />
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Third Accordion Item */}
              <AccordionItem value="workshops" className="border-b-0">
                <AccordionTrigger className="text-[#FFF5D1] text-2xl lg:text-3xl hover:no-underline">
                  Cultural Workshops
                </AccordionTrigger>
                <AccordionContent>
                  <div className="grid grid-cols-1 gap-4">
                    <p className="text-lg text-white">
                      Get hands-on with activities that bring African traditions
                      to life: Learn the rhythms of the djembe and the moves of
                      Afrobeats from expert instructors.
                    </p>
                    <div className="relative w-full h-48">
                      <Image
                        src="/images/10.jpg"
                        fill
                        alt="Cultural Workshops"
                        className="rounded-lg object-cover"
                      />
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
