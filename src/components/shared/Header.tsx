/* eslint-disable react/no-unescaped-entities */
"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const AfroSwitchHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "Events", href: "/events" },
    { name: "Contact", href: "/contact" },
    {
      name: "Get Tickets",
      href: "https://www.showpass.com/afroswitch24",
      special: true,
    },
  ];

  return (
    <>
      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#f9f0e6] backdrop-blur-md shadow-lg border-b border-amber-200"
            : "bg-[#f9f0e6] backdrop-blur-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center group gap-3">
              <div className="relative flex items-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-amber-100 rounded-full flex items-center justify-center shadow-sm border border-amber-200 transition-all duration-300 group-hover:shadow-md group-hover:bg-amber-200">
                  <Image
                    width={32}
                    height={32}
                    src={"/icons/afroswitch-logo.png"}
                    alt="Afroswitch Logo"
                    className="w-6 h-6 sm:w-8 sm:h-8"
                  />
                </div>

                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-500 transition-all duration-300 group-hover:w-full" />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-2 lg:space-x-4">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative px-4 lg:px-6 py-2 lg:py-3 text-sm lg:text-base font-medium transition-all duration-300 rounded-lg group ${
                    item.special
                      ? "bg-amber-600 text-white font-semibold hover:bg-amber-700 shadow-sm"
                      : "text-neutral-700 hover:text-neutral-900 hover:bg-neutral-100"
                  }`}
                >
                  {!item.special && (
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-emerald-500 group-hover:w-3/4 transition-all duration-300" />
                  )}

                  <span className="relative z-10">{item.name}</span>

                  {item.special && (
                    <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                  )}
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden w-10 h-10 flex items-center justify-center text-neutral-700 hover:bg-neutral-100 rounded-lg transition-all duration-300"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div
            className="absolute inset-0 bg-black/20 backdrop-blur-sm"
            onClick={toggleMenu}
          />

          {/* Mobile Menu */}
          <div className="absolute top-16 sm:top-20 left-4 right-4 bg-white border border-neutral-200 rounded-2xl shadow-xl overflow-hidden">
            {/* Menu Header */}
            <div className="px-6 py-4 bg-amber-50 border-b border-amber-200">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-bold text-neutral-900">
                    AfroSwitch
                  </h2>
                  <p className="text-sm text-emerald-600 font-medium">
                    Calgary's Premier African Festival
                  </p>
                </div>
                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
              </div>
            </div>

            {/* Menu Items */}
            <nav className="py-2">
              {menuItems.map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={toggleMenu}
                  className={`block px-6 py-4 text-base font-medium transition-all duration-300 border-l-4 ${
                    item.special
                      ? "bg-amber-100 text-neutral-900 font-semibold border-amber-500"
                      : "text-neutral-700 border-transparent hover:border-emerald-400 hover:bg-neutral-50"
                  } ${index % 2 === 0 && !item.special ? "bg-neutral-25" : ""}`}
                >
                  <div className="flex items-center justify-between">
                    <span>{item.name}</span>
                    {item.name === "Events" && (
                      <span className="text-xs px-2 py-1 bg-red-100 text-red-600 rounded-full font-medium">
                        July 13
                      </span>
                    )}
                    {item.special && (
                      <span className="text-xs px-2 py-1 bg-emerald-100 text-emerald-600 rounded-full font-medium">
                        Limited
                      </span>
                    )}
                  </div>
                  {item.name === "Events" && (
                    <div className="text-xs mt-1 text-emerald-600">
                      Summer Festival 2025
                    </div>
                  )}
                  {item.special && (
                    <div className="text-xs mt-1 text-amber-600">
                      Early Bird Available
                    </div>
                  )}
                </Link>
              ))}
            </nav>

            {/* Menu Footer */}
            <div className="px-6 py-4 bg-emerald-50 border-t border-emerald-200">
              <div className="text-center">
                <div className="text-sm font-semibold text-neutral-900">
                  Confluence Historic Site
                </div>
                <div className="text-xs mt-1 text-emerald-600">
                  Calgary, Canada • July 13, 2025
                </div>
                <div className="mt-3 flex items-center justify-center space-x-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                  <span className="text-xs font-medium text-red-600">
                    Tickets Available Now
                  </span>
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AfroSwitchHeader;
