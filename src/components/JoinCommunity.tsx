/* eslint-disable react/no-unescaped-entities */
"use client";

import React, { useState, useEffect } from "react";
import {
  Mail,
  User,
  MapPin,
  Phone,
  Sparkles,
  Heart,
  Send,
  CheckCircle,
  Users,
  Bell,
  Star,
  LucideProps, // Import LucideProps for icon typing
} from "lucide-react";

// Import Firebase related modules

import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db } from "@/firebase/firebaseConfig";

// Define types for better type safety
interface FormDataState {
  name: string;
  email: string;
  location: string;
  phone: string;
}

type IconType = React.ComponentType<LucideProps>;

interface InputFieldConfig {
  key: keyof FormDataState;
  label: string;
  type: string;
  icon: IconType;
  placeholder: string;
}

const JoinCommunity: React.FC = () => {
  const [formData, setFormData] = useState<FormDataState>({
    name: "",
    email: "",
    location: "",
    phone: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null); // For displaying errors
  const [focusedField, setFocusedField] = useState<keyof FormDataState | "">(
    ""
  );
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Type the event
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleInputChange = (field: keyof FormDataState, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    // Type the event
    e.preventDefault();
    setIsSubmitting(true);
    setIsSuccess(false);
    setError(null);

    try {
      // Add a new document with a generated ID to the "contact" collection.
      await addDoc(collection(db, "contact"), {
        ...formData,
        submittedAt: Timestamp.now(), // Add a server timestamp
      });

      setIsSuccess(true);
      setFormData({ name: "", email: "", location: "", phone: "" }); // Clear form

      // Hide success message after a delay
      setTimeout(() => {
        setIsSuccess(false);
      }, 3000);
    } catch (err) {
      console.error("Error adding document to Firestore: ", err);
      setError("Failed to join the community. Please try again.");
      // You might want to provide more specific error messages based on err.code
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputFields: InputFieldConfig[] = [
    {
      key: "name",
      label: "Full Name",
      type: "text",
      icon: User,
      placeholder: "Enter your full name",
    },
    {
      key: "email",
      label: "Email Address",
      type: "email",
      icon: Mail,
      placeholder: "your@email.com",
    },
    {
      key: "location",
      label: "Location",
      type: "text",
      icon: MapPin,
      placeholder: "City, Province",
    },
    {
      key: "phone",
      label: "Phone Number",
      type: "tel",
      icon: Phone,
      placeholder: "+1 (555) 123-4567",
    },
  ];

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      {" "}
      {/* Added text-white */}
      {/* Dynamic Background */}
      <div className="absolute inset-0">
        <div
          className="absolute w-[800px] h-[800px] rounded-full opacity-10 blur-3xl transition-all duration-1000"
          style={{
            background: `radial-gradient(circle, #d81212 0%, transparent 70%)`,
            left: `${mousePosition.x * 0.3}%`,
            top: `${mousePosition.y * 0.3}%`,
          }}
        />
        <div
          className="absolute w-[600px] h-[600px] rounded-full opacity-15 blur-2xl transition-all duration-700"
          style={{
            background: `radial-gradient(circle, #368552 0%, transparent 70%)`,
            right: `${(100 - mousePosition.x) * 0.2}%`,
            bottom: `${(100 - mousePosition.y) * 0.2}%`,
          }}
        />
        <div
          className="absolute w-[400px] h-[400px] rounded-full opacity-20 blur-xl transition-all duration-500"
          style={{
            background: `radial-gradient(circle, #ffdc96 0%, transparent 70%)`,
            left: `${mousePosition.x * 0.1}%`,
            bottom: `${(100 - mousePosition.y) * 0.1}%`,
          }}
        />
      </div>
      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          >
            <div
              className="w-2 h-2 rounded-full opacity-40"
              style={{
                backgroundColor: ["#d81212", "#368552", "#ffdc96"][
                  Math.floor(Math.random() * 3)
                ],
              }}
            />
          </div>
        ))}
      </div>
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border-2 border-[#ffdc96]/30 bg-[#ffdc96]/10 backdrop-blur-sm">
                <Users className="w-5 h-5 text-[#ffdc96]" />
                <span className="text-[#ffdc96] font-semibold tracking-wide">
                  COMMUNITY
                </span>
              </div>

              <h2 className="text-6xl lg:text-8xl font-black uppercase tracking-tight leading-none">
                <span className="block text-[#d81212] drop-shadow-2xl">
                  Join the
                </span>
                <span className="block bg-gradient-to-r from-[#368552] to-[#ffdc96] text-transparent bg-clip-text">
                  Community
                </span>
              </h2>

              <p className="text-xl text-gray-300 max-w-md leading-relaxed">
                Stay connected with Calgary's vibrant African cultural scene.
                Get exclusive access to
                <span className="text-[#ffdc96] font-semibold">
                  {" "}
                  early bird tickets
                </span>
                , behind-the-scenes content, and
                <span className="text-[#368552] font-semibold">
                  {" "}
                  VIP experiences
                </span>
                .
              </p>
            </div>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-4">
              {[
                { icon: Bell, text: "First to Know", color: "#d81212" },
                { icon: Star, text: "VIP Access", color: "#368552" },
                { icon: Heart, text: "Exclusive Content", color: "#ffdc96" },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-sm border"
                  style={{
                    borderColor: `${feature.color}40`, // Opacity for border
                    backgroundColor: `${feature.color}15`, // Opacity for background
                  }}
                >
                  <feature.icon
                    className="w-4 h-4"
                    style={{ color: feature.color }}
                  />
                  <span
                    className="text-sm font-medium"
                    style={{ color: feature.color }}
                  >
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 pt-8">
              <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-[#d81212]/20 to-[#d81212]/5 backdrop-blur-sm border border-[#d81212]/30">
                <div className="text-4xl font-bold text-[#d81212] mb-2">
                  2.5K+
                </div>
                <div className="text-gray-400 text-sm uppercase tracking-wider">
                  Community Members
                </div>
              </div>
              <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-[#368552]/20 to-[#368552]/5 backdrop-blur-sm border border-[#368552]/30">
                <div className="text-4xl font-bold text-[#368552] mb-2">
                  50+
                </div>
                <div className="text-gray-400 text-sm uppercase tracking-wider">
                  Events Hosted
                </div>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="relative">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-[#d81212]/20 via-[#368552]/20 to-[#ffdc96]/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500" />

              <div className="relative bg-black/40 backdrop-blur-xl border border-white/20 rounded-3xl p-8 lg:p-12">
                {!isSuccess ? (
                  <div className="space-y-8">
                    <div className="text-center mb-8">
                      <h3 className="text-3xl font-bold text-white mb-2">
                        Get Started
                      </h3>
                      <p className="text-gray-400">
                        Join thousands of culture enthusiasts
                      </p>
                    </div>

                    {/* Optional: Display error message */}
                    {error && (
                      <div
                        className="p-3 mb-4 text-sm text-red-400 bg-red-900/30 rounded-lg border border-red-400/50"
                        role="alert"
                      >
                        {error}
                      </div>
                    )}

                    {inputFields.map((field) => {
                      const Icon = field.icon;
                      const isFocused = focusedField === field.key;
                      const hasValue = formData[field.key].length > 0;

                      return (
                        <div key={field.key} className="space-y-3">
                          <label
                            className="block text-sm font-semibold text-gray-300 uppercase tracking-wider"
                            htmlFor={field.key}
                          >
                            {field.label}
                          </label>

                          <div className="relative group/input">
                            <div
                              className={`absolute inset-0 rounded-xl transition-all duration-300 ${
                                isFocused
                                  ? "bg-gradient-to-r from-[#d81212]/20 to-[#368552]/20 shadow-lg shadow-[#ffdc96]/20"
                                  : "bg-white/5"
                              }`}
                            />
                            <div className="relative flex items-center">
                              <Icon
                                className={`absolute left-4 w-5 h-5 z-10 transition-all duration-300 ${
                                  isFocused || hasValue
                                    ? "text-[#ffdc96]"
                                    : "text-gray-500"
                                }`}
                              />
                              <input
                                id={field.key}
                                type={field.type}
                                value={formData[field.key]}
                                onChange={(e) =>
                                  handleInputChange(field.key, e.target.value)
                                }
                                onFocus={() => setFocusedField(field.key)}
                                onBlur={() => setFocusedField("")}
                                placeholder={field.placeholder}
                                required
                                className={`w-full pl-12 pr-4 py-4 bg-transparent border-2 rounded-xl text-white placeholder-gray-500 transition-all duration-300 focus:outline-none ${
                                  isFocused
                                    ? "border-[#ffdc96] shadow-lg shadow-[#ffdc96]/20"
                                    : "border-white/20 hover:border-white/40"
                                }`}
                              />
                            </div>
                          </div>
                        </div>
                      );
                    })}

                    <button
                      onClick={handleSubmit}
                      disabled={isSubmitting}
                      className="group relative w-full overflow-hidden bg-gradient-to-r from-[#d81212] via-[#368552] to-[#ffdc96] p-[2px] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#ffdc96] focus:ring-offset-2 focus:ring-offset-black transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <div className="relative bg-black rounded-lg px-8 py-4 group-hover:bg-transparent transition-all duration-300">
                        <div className="flex items-center justify-center gap-3">
                          {isSubmitting ? (
                            <>
                              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                              <span className="text-white font-semibold text-lg">
                                Joining...
                              </span>
                            </>
                          ) : (
                            <>
                              <Send className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
                              <span className="text-white font-semibold text-lg uppercase tracking-wider">
                                Join Community
                              </span>
                              <Sparkles className="w-5 h-5 text-white group-hover:rotate-12 transition-transform" />
                            </>
                          )}
                        </div>
                      </div>
                    </button>
                    <p className="text-center text-gray-500 text-sm">
                      By joining, you agree to receive updates about AfroSwitch
                      events and community news.
                    </p>
                  </div>
                ) : (
                  /* Success State */
                  <div className="text-center py-12">
                    <div className="w-20 h-20 bg-gradient-to-r from-[#368552] to-[#ffdc96] rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
                      <CheckCircle className="w-10 h-10 text-black" />
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-4">
                      Welcome to the Community!
                    </h3>
                    <p className="text-gray-300 text-lg mb-6">
                      You're now part of Calgary's premier African cultural
                      community.
                    </p>
                    <div className="flex items-center justify-center gap-2 text-[#ffdc96]">
                      <Heart className="w-5 h-5 animate-pulse" />
                      <span className="font-semibold">
                        Check your email for exclusive content!
                      </span>
                      <Heart className="w-5 h-5 animate-pulse" />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default JoinCommunity;
