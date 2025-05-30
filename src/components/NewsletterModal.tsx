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
      style={{ backgroundImage: "url('/images/18.jpg')" }}
      className="fixed inset-0 z-50 bg-cover bg-center flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      onClick={handleBackdropClick}
    >
      <ToastContainer />
      <div
        ref={modalRef}
        className="relative w-full max-w-[700px] rounded-lg overflow-hidden border-4"
        style={{
          backgroundColor: "#000000",
          borderColor: "#ffdc96",
        }}
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('/images/15.jpg')" }}
        />

        {/* Content */}
        <div
          className="relative p-6 md:p-8"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.85)" }}
        >
          {/* Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-0 right-0 transition-colors p-2 rounded-full border-2"
            style={{
              color: "#ffdc96",
              borderColor: "#368552",
              backgroundColor: "rgba(54, 133, 82, 0.2)",
            }}
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Header */}
          <div className="text-center mb-8">
            <h2
              className="text-2xl md:text-3xl font-bold mb-4"
              style={{ color: "#d81212" }}
            >
              Join the AfroSwitch Community
            </h2>
            <p
              className="text-sm md:text-base font-semibold"
              style={{ color: "#ffdc96" }}
            >
              Be the first to know about ticket releases, lineup announcements,
              and exclusive offers!
            </p>
          </div>

          {/* Form */}
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-5 w-full"
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
                        className="w-full h-12 border-2 rounded-lg px-4 font-medium"
                        style={{
                          backgroundColor: "rgba(255, 220, 150, 0.1)",
                          borderColor: "#368552",
                          color: "#ffdc96",
                        }}
                        {...field}
                        disabled={loading}
                      />
                    </FormControl>
                    <FormMessage
                      className="text-sm mt-1"
                      style={{ color: "#d81212" }}
                    />
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
                        className="w-full h-12 border-2 rounded-lg px-4 font-medium"
                        style={{
                          backgroundColor: "rgba(255, 220, 150, 0.1)",
                          borderColor: "#368552",
                          color: "#ffdc96",
                        }}
                        {...field}
                        disabled={loading}
                      />
                    </FormControl>
                    <FormMessage
                      className="text-sm mt-1"
                      style={{ color: "#d81212" }}
                    />
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
                        className="w-full h-12 border-2 rounded-lg px-4 font-medium"
                        style={{
                          backgroundColor: "rgba(255, 220, 150, 0.1)",
                          borderColor: "#368552",
                          color: "#ffdc96",
                        }}
                        {...field}
                        disabled={loading}
                      />
                    </FormControl>
                    <FormMessage
                      className="text-sm mt-1"
                      style={{ color: "#d81212" }}
                    />
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
                        className="w-full h-12 border-2 rounded-lg px-4 font-medium"
                        style={{
                          backgroundColor: "rgba(255, 220, 150, 0.1)",
                          borderColor: "#368552",
                          color: "#ffdc96",
                        }}
                        {...field}
                        disabled={loading}
                      />
                    </FormControl>
                    <FormMessage
                      className="text-sm mt-1"
                      style={{ color: "#d81212" }}
                    />
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
                        className="w-full h-12 border-2 rounded-lg px-4 font-medium"
                        style={{
                          backgroundColor: "rgba(255, 220, 150, 0.1)",
                          borderColor: "#368552",
                          color: "#ffdc96",
                        }}
                        {...field}
                        disabled={loading}
                      />
                    </FormControl>
                    <FormMessage
                      className="text-sm mt-1"
                      style={{ color: "#d81212" }}
                    />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                className="w-full h-12 font-bold text-lg border-3 rounded-lg transition-all duration-200 hover:scale-105 transform"
                style={{
                  backgroundColor: "#d81212",
                  color: "#ffdc96",
                  borderColor: "#368552",
                  borderWidth: "3px",
                }}
              >
                {loading ? "Submitting..." : "Subscribe Now"}
              </Button>
            </form>
          </Form>

          {/* Footer */}
          <div
            className="text-center mt-6 p-4 rounded-lg border-2"
            style={{
              color: "#368552",
              borderColor: "rgba(54, 133, 82, 0.3)",
              backgroundColor: "rgba(54, 133, 82, 0.1)",
            }}
          >
            <p className="text-xs font-medium">
              By signing up, you agree to receive updates about AfroSwitch. We
              respect your privacy and will never share your information.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterModal;
