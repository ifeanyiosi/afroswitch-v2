"use client";

import React, { useState } from "react";
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
} from "lucide-react";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db } from "@/firebase/firebaseConfig";

type FormFieldKey = "name" | "email" | "location" | "phone";

interface FormFields {
  name: string;
  email: string;
  location: string;
  phone: string;
}

const JoinCommunity = () => {
  const [formData, setFormData] = useState<FormFields>({
    name: "",
    email: "",
    location: "",
    phone: "",
  });
  const [errors, setErrors] = useState<Partial<FormFields>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [focusedField, setFocusedField] = useState<FormFieldKey | "">("");

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email) ? "" : "Please enter a valid email";
  };

  const validatePhone = (phone: string) => {
    if (phone && !/^[\d\s+\-()]+$/.test(phone)) {
      return "Please enter a valid phone number";
    }
    return "";
  };

  const validateField = (field: FormFieldKey, value: string) => {
    if (!value.trim()) return "This field is required";
    if (field === "email") return validateEmail(value);
    if (field === "phone") return validatePhone(value);
    return "";
  };

  const handleInputChange = (field: FormFieldKey, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: Partial<FormFields> = {};
    (Object.keys(formData) as FormFieldKey[]).forEach((key) => {
      const error = validateField(key, formData[key]);
      if (error) newErrors[key] = error;
    });

    setErrors(newErrors);
    if (Object.keys(newErrors).length) return;

    setIsSubmitting(true);
    try {
      await addDoc(collection(db, "contact"), {
        ...formData,
        submittedAt: Timestamp.now(),
      });
      setIsSuccess(true);
      setFormData({ name: "", email: "", location: "", phone: "" });
      setTimeout(() => setIsSuccess(false), 4000);
    } catch (err) {
      console.error("Error:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Rest of your component remains the same...
  // Just make sure to cast the field.key to FormFieldKey when needed
  // For example, in your form fields array:

  const formFields = [
    { key: "name" as const, icon: User, placeholder: "Your full name" },
    { key: "email" as const, icon: Mail, placeholder: "your@email.com" },
    { key: "location" as const, icon: MapPin, placeholder: "City, Province" },
    { key: "phone" as const, icon: Phone, placeholder: "+1 (555) 123-4567" },
  ];

  return (
    <section
      className="relative min-h-screen overflow-hidden py-16 lg:py-24"
      style={{ backgroundColor: "#368552" }}
    >
      {/* Background bubbles */}
      <div className="absolute inset-0">
        <div
          className="absolute top-20 left-10 w-32 h-32 rounded-full blur-xl animate-pulse"
          style={{ backgroundColor: "rgba(216, 18, 18, 0.3)" }}
        ></div>
        <div
          className="absolute bottom-40 right-20 w-40 h-40 rounded-full blur-xl animate-pulse delay-300"
          style={{ backgroundColor: "rgba(255, 220, 150, 0.4)" }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center gap-3 px-8 py-3 rounded-full mb-8 border-4 shadow-2xl transform hover:scale-105 transition-all duration-300"
            style={{
              backgroundColor: "#ffffff",
              borderColor: "#d81212",
              boxShadow: "0 10px 30px rgba(216, 18, 18, 0.3)",
            }}
          >
            <Users
              className="w-6 h-6 animate-pulse"
              style={{ color: "#368552" }}
            />
            <span
              className="font-black tracking-wider text-lg"
              style={{
                color: "#d81212",
                fontFamily: "Impact, Arial Black, sans-serif",
                textShadow: "1px 1px 0 rgba(255, 220, 150, 0.5)",
              }}
            >
              ✨ JOIN THE VIBE ✨
            </span>
          </div>

          <h1
            className="text-4xl sm:text-5xl lg:text-7xl font-black leading-tight mb-6"
            style={{
              fontFamily: "Impact, Arial Black, sans-serif",
              textShadow:
                "4px 4px 0 rgba(255, 255, 255, 0.8), 8px 8px 0 rgba(216, 18, 18, 0.3)",
            }}
          >
            <span style={{ color: "#ffffff" }}>BE PART OF</span>
            <span
              className="block animate-pulse"
              style={{
                color: "#ffdc96",
                textShadow: "3px 3px 0 #d81212, 6px 6px 0 rgba(0, 0, 0, 0.2)",
              }}
            >
              AFROSWITCH
            </span>
            <span
              className="block"
              style={{
                color: "#d81212",
                fontFamily: "cursive, fantasy",
                transform: "rotate(-2deg)",
                display: "inline-block",
              }}
            >
              COMMUNITY! 💃
            </span>
          </h1>
        </div>

        {/* Grid: Left + Form */}
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left */}
          <div className="space-y-8">
            <p className="text-xl leading-relaxed text-white font-serif">
              Stay connected with Calgary&apos;s vibrant African cultural scene. Get
              exclusive access to{" "}
              <span className="font-bold text-[#ffdc96]">
                early bird tickets
              </span>
              , behind-the-scenes content, and{" "}
              <span className="font-bold text-[#d81212]">VIP experiences</span>.
            </p>

            {/* Features */}
            <div className="space-y-4">
              {[
                {
                  icon: Bell,
                  text: "First to know about events",
                  color: "#d81212",
                },
                {
                  icon: Star,
                  text: "Exclusive member perks",
                  color: "#ffdc96",
                },
                {
                  icon: Heart,
                  text: "Special community offers",
                  color: "#ffffff",
                },
              ].map((feature, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 p-4 rounded-xl border-4 transform hover:scale-105 transition-all duration-300"
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    borderColor: feature.color,
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: feature.color }}
                  >
                    <feature.icon className="w-6 h-6 text-[#368552]" />
                  </div>
                  <span
                    className="text-lg font-bold"
                    style={{ color: feature.color }}
                  >
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 pt-8">
              <div
                className="text-center p-6 rounded-2xl border-4 transform hover:scale-105 transition-all duration-300"
                style={{
                  backgroundColor: "rgba(216, 18, 18, 0.2)",
                  borderColor: "#ffdc96",
                }}
              >
                <div className="text-4xl font-black mb-2 text-white">2.5K+</div>
                <div className="text-sm uppercase tracking-wider text-[#ffdc96]">
                  Members
                </div>
              </div>
              <div
                className="text-center p-6 rounded-2xl border-4 transform hover:scale-105 transition-all duration-300"
                style={{
                  backgroundColor: "rgba(255, 220, 150, 0.2)",
                  borderColor: "#d81212",
                }}
              >
                <div className="text-4xl font-black mb-2 text-white">50+</div>
                <div className="text-sm uppercase tracking-wider text-[#d81212]">
                  Events
                </div>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div>
            {!isSuccess ? (
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-3xl border-4 p-8 lg:p-10 shadow-2xl"
                style={{
                  borderColor: "#d81212",
                  boxShadow: "0 20px 50px rgba(216, 18, 18, 0.3)",
                }}
              >
                <h2 className="text-3xl font-black mb-6 text-center text-[#368552] font-impact">
                  JOIN US NOW!
                </h2>

                {formFields.map((field) => (
                  <div key={field.key} className="mb-6">
                    <div className="relative">
                      <field.icon
                        className={`absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 ${
                          focusedField === field.key || formData[field.key]
                            ? "text-[#d81212]"
                            : "text-gray-400"
                        }`}
                      />
                      <input
                        type={field.key === "email" ? "email" : "text"}
                        value={formData[field.key]}
                        onChange={(e) =>
                          handleInputChange(field.key, e.target.value)
                        }
                        onFocus={() => setFocusedField(field.key)}
                        onBlur={() => setFocusedField("")}
                        placeholder={field.placeholder}
                        className={`w-full pl-12 pr-4 py-3 rounded-xl border-2 focus:outline-none focus:ring-2 ${
                          errors[field.key]
                            ? "border-red-500 focus:ring-red-200"
                            : "border-gray-300 focus:border-[#368552] focus:ring-[#368552]/50"
                        }`}
                      />
                    </div>
                    {errors[field.key] && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors[field.key]}
                      </p>
                    )}
                  </div>
                ))}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-[#d81212] to-[#368552] text-white font-bold py-4 px-6 rounded-xl text-lg flex items-center justify-center gap-3 transform hover:scale-105 transition-all duration-300"
                >
                  {isSubmitting ? (
                    <>
                      <Sparkles className="animate-spin w-5 h-5" />{" "}
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" /> Join the Community
                    </>
                  )}
                </button>
              </form>
            ) : (
              <div className="bg-white text-center rounded-3xl border-4 p-10 shadow-2xl border-[#d81212]">
                <CheckCircle className="w-16 h-16 text-[#368552] mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-[#368552] mb-2">
                  Success!
                </h2>
                <p className="text-lg text-gray-700">
                  Thanks for joining! We&apos;ll be in touch soon. 🎉
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinCommunity;
