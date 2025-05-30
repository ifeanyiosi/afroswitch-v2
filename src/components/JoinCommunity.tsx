/* eslint-disable react/no-unescaped-entities */
"use client";

import React, { useState } from "react";
import {
  Mail,
  User,
  MapPin,
  Phone,
  Send,
  CheckCircle,
  Users,
  Bell,
  Star,
  Heart,
} from "lucide-react";

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

  const handleSubmit = async () => {
    const newErrors: Partial<FormFields> = {};
    (Object.keys(formData) as FormFieldKey[]).forEach((key) => {
      const error = validateField(key, formData[key]);
      if (error) newErrors[key] = error;
    });

    setErrors(newErrors);
    if (Object.keys(newErrors).length) return;

    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setIsSuccess(true);
      setFormData({ name: "", email: "", location: "", phone: "" });
      setTimeout(() => setIsSuccess(false), 4000);
    } catch (err) {
      console.error("Error:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const formFields = [
    { key: "name" as const, icon: User, placeholder: "Your full name" },
    { key: "email" as const, icon: Mail, placeholder: "your@email.com" },
    { key: "location" as const, icon: MapPin, placeholder: "City, Province" },
    { key: "phone" as const, icon: Phone, placeholder: "+1 (555) 123-4567" },
  ];

  return (
    <section className="relative min-h-screen bg-[#fdf6ed] py-16 lg:py-24">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23d81212' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-red-600 text-white px-6 py-3 rounded-lg mb-8">
            <Users className="w-5 h-5" />
            <span className="font-semibold tracking-wide">
              Join the Community
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
            Be Part of
            <span className="block text-red-600 mt-2">
              Afroswitch Community
            </span>
          </h1>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Connect with Calgary's vibrant African cultural scene and never miss
            an event
          </p>
        </div>

        {/* Grid: Content + Form */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="prose prose-lg">
              <p className="text-gray-700 leading-relaxed">
                Stay connected with Calgary's vibrant African cultural scene.
                Get exclusive access to{" "}
                <strong className="text-red-600">early bird tickets</strong>,
                behind-the-scenes content, and{" "}
                <strong className="text-gray-900">VIP experiences</strong>.
              </p>
            </div>

            {/* Features */}
            <div className="space-y-4">
              {[
                {
                  icon: Bell,
                  text: "First to know about events",
                  desc: "Get notified before tickets go public",
                },
                {
                  icon: Star,
                  text: "Exclusive member perks",
                  desc: "Special discounts and offers",
                },
                {
                  icon: Heart,
                  text: "Community connection",
                  desc: "Connect with like-minded culture lovers",
                },
              ].map((feature, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 p-4 bg-white rounded-lg border border-gray-200 hover:border-red-300 transition-colors duration-300"
                >
                  <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {feature.text}
                    </h3>
                    <p className="text-sm text-gray-600">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 pt-8">
              <div className="text-center p-6 bg-white rounded-lg border border-gray-200">
                <div className="text-3xl font-bold text-red-600 mb-2">
                  2.5K+
                </div>
                <div className="text-sm text-gray-600 uppercase tracking-wider">
                  Community Members
                </div>
              </div>
              <div className="text-center p-6 bg-white rounded-lg border border-gray-200">
                <div className="text-3xl font-bold text-red-600 mb-2">50+</div>
                <div className="text-sm text-gray-600 uppercase tracking-wider">
                  Events Hosted
                </div>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div>
            {!isSuccess ? (
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-xl border border-gray-200 p-6 lg:p-8 shadow-lg"
              >
                <h2 className="text-2xl font-bold mb-6 text-center text-gray-900">
                  Join Our Community
                </h2>

                <div className="space-y-6">
                  {formFields.map((field) => (
                    <div key={field.key}>
                      <div className="relative">
                        <field.icon
                          className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 ${
                            focusedField === field.key || formData[field.key]
                              ? "text-red-600"
                              : "text-gray-400"
                          } transition-colors duration-200`}
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
                          className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all duration-200 ${
                            errors[field.key]
                              ? "border-red-300 focus:border-red-500 focus:ring-red-200"
                              : "border-gray-300 focus:border-red-500 focus:ring-red-200"
                          }`}
                        />
                      </div>
                      {errors[field.key] && (
                        <p className="mt-2 text-sm text-red-600">
                          {errors[field.key]}
                        </p>
                      )}
                    </div>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="w-full mt-8 bg-red-600 hover:bg-red-700 disabled:bg-red-400 text-white font-semibold py-3 px-6 rounded-lg flex items-center justify-center gap-3 transition-colors duration-200"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Joining...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Join the Community
                    </>
                  )}
                </button>

                <p className="mt-4 text-sm text-gray-500 text-center">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </form>
            ) : (
              <div className="bg-white text-center rounded-xl border border-gray-200 p-8 shadow-lg">
                <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Welcome to the Community!
                </h2>
                <p className="text-gray-600">
                  Thanks for joining! We'll be in touch with exciting updates
                  soon.
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
