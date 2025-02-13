import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

const JohnCommunity = () => {
  return (
    <div className="w-full max-w-[1500px] mx-auto lg:pb-[100px] p-6">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left side - Text content */}
        <div className="space-y-4">
          <h2 className="text-[40px] lg:text-[120px] uppercase text-primary font-bold tracking-tight">
            Join the community
          </h2>
          <p className="text-[16px] text-[#DFDFDF] ">
            Stay up to date with all festival announcements, news, offers, and
            more!
          </p>
        </div>

        {/* Right side - Form */}

        <div className="pt-6">
          <form className="space-y-4 flex flex-col gap-4 ">
            <div className="space-y-2">
              <Label className="text-[#DFDFDF]" htmlFor="fullName">
                Full Name
              </Label>
              <Input id="fullName" />
            </div>

            <div className="space-y-2">
              <Label className="text-[#DFDFDF]" htmlFor="email">
                Email Address
              </Label>
              <Input id="email" type="email" />
            </div>

            <div className="space-y-2">
              <Label className="text-[#DFDFDF]" htmlFor="location">
                Location
              </Label>
              <Input id="location" />
            </div>

            <div className="space-y-2">
              <Label className="text-[#DFDFDF]" htmlFor="phone">
                Phone Number
              </Label>
              <Input id="phone" type="tel" />
            </div>

            <Button
              size={"lg"}
              variant="outline"
              type="submit"
              className="w-full border border-white bg-black text-white py-4 px-8 uppercase"
            >
              Subscribe
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default JohnCommunity;
