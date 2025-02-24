/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

import { collection, addDoc } from "firebase/firestore";
import { db } from "@/firebase/firebaseConfig";
import { Bounce, toast, ToastContainer } from "react-toastify";

const JoinCommunity = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "contact"), {
        name: name,
        email: email,
        location: location,
        phone: phone,
        timestamp: new Date(),
      });
      toast.success("Success!", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
        transition: Bounce,
        theme: "dark",
      });
      // Reset form fields
      setName("");
      setEmail("");
      setLocation("");
      setPhone("");
    } catch (error) {
      console.error("Error adding document: ", error);
      const errorMessage =
        error instanceof Error
          ? error.message
          : "An unexpected error occurred.";
      toast.error(errorMessage, {
        position: "top-right",
        autoClose: 3000,
        theme: "dark",
      });
    }
  };

  return (
    <div className="w-full max-w-[1500px] mx-auto lg:pb-[100px] p-6">
      <ToastContainer />
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
          <form
            onSubmit={handleSubmit}
            className="space-y-4 flex flex-col gap-4"
          >
            <div className="space-y-2">
              <Label className="text-[#DFDFDF]" htmlFor="fullName">
                Full Name
              </Label>
              <Input
                id="fullName"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label className="text-[#DFDFDF]" htmlFor="email">
                Email Address
              </Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label className="text-[#DFDFDF]" htmlFor="location">
                Location
              </Label>
              <Input
                id="location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label className="text-[#DFDFDF]" htmlFor="phone">
                Phone Number
              </Label>
              <Input
                id="phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
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

export default JoinCommunity;
