"use client";

import React, { useState, useEffect, useRef, MouseEvent } from "react";
import { X } from "lucide-react";
import { newsletterSchema } from "@/validations/newsletterSchema";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "./ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { db } from "@/firebase/firebaseConfig";
import { addDoc, collection } from "firebase/firestore";
import { Bounce, toast, ToastContainer } from "react-toastify";

const NewsletterModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState(false);
  const modalRef = useRef<HTMLDivElement | null>(null);

  const form = useForm<z.infer<typeof newsletterSchema>>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      location: "",
    },
  });

  async function onSubmit(values: z.infer<typeof newsletterSchema>) {
    setLoading(true);
    try {
      const response = await addDoc(collection(db, "newsletter"), {
        ...values,
        createdAt: new Date(), // Optionally add a timestamp
      });
      toast.success("Success!", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
        transition: Bounce,
        theme: "dark",
      });
      console.log("Submission successful:", response.id); // Log the document ID
      form.reset(); // Reset the form after successful submission
      setIsOpen(false);
    } catch (error) {
      const errorMessage =
        error instanceof Error
          ? error.message
          : "An unexpected error occurred.";
      toast.error(errorMessage, {
        position: "top-right",
        autoClose: 3000,
        theme: "dark",
      });
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  // Handle click outside
  const handleBackdropClick = (e: MouseEvent<HTMLElement>) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      setIsOpen(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      onClick={handleBackdropClick}
    >
      <ToastContainer />
      <div
        ref={modalRef}
        className="relative w-full max-w-[700px] bg-black rounded-lg overflow-hidden"
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('/images/15.jpg')" }}
        />

        {/* Content */}
        <div className="relative p-6 md:p-8">
          {/* Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 text-white hover:text-primary transition-colors"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Header */}
          <div className="text-center mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">
              Join the AfroSwitch Community
            </h2>
            <p className="text-white text-sm md:text-base">
              Be the first to know about ticket releases, lineup announcements,
              and exclusive offers!
            </p>
          </div>

          {/* Form */}
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-4 w-full "
            >
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="Email address"
                        className="w-full placeholder:text-gray-400 bg-transparent border-[1px] border-gray-400 text-white"
                        {...field}
                        disabled={loading}
                      />
                    </FormControl>
                    <FormMessage className="text-sm text-red-500 mt-1" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="First name"
                        className="w-full placeholder:text-gray-400 bg-transparent border-[1px] border-gray-400 text-white"
                        {...field}
                        disabled={loading}
                      />
                    </FormControl>
                    <FormMessage className="text-sm text-red-500 mt-1" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="Last name"
                        className="w-full placeholder:text-gray-400 bg-transparent border-[1px] border-gray-400 text-white"
                        {...field}
                        disabled={loading}
                      />
                    </FormControl>
                    <FormMessage className="text-sm text-red-500 mt-1" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="Phone"
                        className="w-full placeholder:text-gray-400 bg-transparent border-[1px] border-gray-400 text-white"
                        {...field}
                        disabled={loading}
                      />
                    </FormControl>
                    <FormMessage className="text-sm text-red-500 mt-1" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="location"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="Location"
                        className="w-full placeholder:text-gray-400 bg-transparent border-[1px] border-gray-400 text-white"
                        {...field}
                        disabled={loading}
                      />
                    </FormControl>
                    <FormMessage className="text-sm text-red-500 mt-1" />
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full bg-primary ">
                {loading ? "Submitting..." : "Subscribe Now"}
              </Button>
            </form>
          </Form>

          {/* Footer */}
          <p className="text-white/70 text-xs text-center mt-4">
            By signing up, you agree to receive updates about AfroSwitch. We
            respect your privacy and will never share your information.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsletterModal;
