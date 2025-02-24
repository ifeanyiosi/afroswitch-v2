"use client";

import React, { useState } from "react";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { z } from "zod";
import Image from "next/image";
import { db } from "@/firebase/firebaseConfig";
import { Bounce, toast, ToastContainer } from "react-toastify";

// Define the subscriber data schema
const subscriberSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  location: z.string().optional(),
  createdAt: z.instanceof(Timestamp),
});

type SubscriberData = z.infer<typeof subscriberSchema>;

const NewsletterPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    location: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Validate the form data
      const validatedData: SubscriberData = {
        ...formData,
        createdAt: Timestamp.now(),
      };

      // Validate using Zod
      subscriberSchema.parse(validatedData);

      // Add to Firestore
      await addDoc(collection(db, "newsletter"), validatedData);

      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        location: "",
      });

      // Show success message
      toast.success("Success!", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
        transition: Bounce,
        theme: "dark",
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        // Handle validation errors
        error.errors.forEach((err) => {
          toast.error(err.message);
        });
      } else {
        console.error("Error adding subscriber:", error);
        toast.error("Failed to subscribe. Please try again later.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white py-16">
      <ToastContainer />
      <div className="fixed inset-[1px] border-[4px] border-primary pointer-events-none z-50" />
      <div className="container mx-auto ">
        <div className="max-w-[1500px] mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
              Join Our Newsletter
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Get exclusive updates on upcoming events, artist announcements,
              and special offers from AfroSwitch - Calgary&apos;s premier
              Afrobeats festival.
            </p>
          </div>

          {/* Content Area */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Image Section */}
            <div className="relative h-[300px] md:h-[500px] rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-primary/20" />
              <Image
                src="/images/16.jpg"
                alt="AfroSwitch Festival"
                fill
                className="object-cover"
              />
            </div>

            {/* Form Section */}
            <div className="bg-black/50 backdrop-blur p-4 md:p-8 rounded-lg border border-primary/30">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-gray-300 mb-1"
                    >
                      First Name <span className="text-primary">*</span>
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-white/10 border border-primary/30 rounded-lg text-white placeholder:text-white/70 focus:outline-none focus:border-primary"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-gray-300 mb-1"
                    >
                      Last Name <span className="text-primary">*</span>
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-white/10 border border-primary/30 rounded-lg text-white placeholder:text-white/70 focus:outline-none focus:border-primary"
                      placeholder="Your last name"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-300 mb-1"
                  >
                    Email Address <span className="text-primary">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-white/10 border border-primary/30 rounded-lg text-white placeholder:text-white/70 focus:outline-none focus:border-primary"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-300 mb-1"
                  >
                    Phone Number (Optional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-white/10 border border-primary/30 rounded-lg text-white placeholder:text-white/70 focus:outline-none focus:border-primary"
                    placeholder="Your phone number"
                  />
                </div>

                <div>
                  <label
                    htmlFor="location"
                    className="block text-sm font-medium text-gray-300 mb-1"
                  >
                    Location (Optional)
                  </label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-white/10 border border-primary/30 rounded-lg text-white placeholder:text-white/70 focus:outline-none focus:border-primary"
                    placeholder="City, Province/State"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary text-black font-bold py-3 rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Subscribing..." : "Subscribe to Newsletter"}
                </button>
              </form>

              <p className="text-gray-400 text-xs mt-6">
                By subscribing, you agree to receive updates about AfroSwitch
                events and promotions. We respect your privacy and will never
                share your information with third parties.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterPage;
