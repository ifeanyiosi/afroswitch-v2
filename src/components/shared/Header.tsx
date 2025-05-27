"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

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
            ? "bg-black shadow-2xl border-b-2"
            : "bg-black bg-opacity-95"
        }`}
        style={{
          borderBottomColor: isScrolled ? "#ffdc96" : "transparent",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center group">
              <div className="relative">
                <h1
                  className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight transition-all duration-300 group-hover:scale-105"
                  style={{ color: "#ffdc96" }}
                >
                  AfroSwitch
                </h1>
                <div
                  className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full"
                  style={{ backgroundColor: "#d81212" }}
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`relative px-4 lg:px-6 py-2 lg:py-3 text-sm lg:text-base font-semibold transition-all duration-300 rounded-lg group ${
                    item.special
                      ? "text-black font-bold"
                      : "text-white hover:text-white"
                  }`}
                  style={{
                    backgroundColor: item.special ? "#ffdc96" : "transparent",
                  }}
                >
                  {!item.special && (
                    <>
                      <div
                        className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300"
                        style={{ backgroundColor: "rgba(54, 133, 82, 0.2)" }}
                      />
                      <div
                        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 group-hover:w-3/4 transition-all duration-300"
                        style={{ backgroundColor: "#368552" }}
                      />
                    </>
                  )}

                  {item.special && (
                    <div
                      className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300"
                      style={{ backgroundColor: "#368552" }}
                    />
                  )}

                  <span
                    className={`relative z-10 ${
                      item.special ? "group-hover:text-white" : ""
                    }`}
                  >
                    {item.name}
                  </span>

                  {item.special && (
                    <div
                      className="absolute -top-1 -right-1 w-2 h-2 rounded-full animate-pulse"
                      style={{ backgroundColor: "#d81212" }}
                    />
                  )}
                </a>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden w-10 h-10 flex items-center justify-center text-white hover:bg-white hover:bg-opacity-10 rounded-lg transition-all duration-300"
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
            className="absolute inset-0 bg-black bg-opacity-70 backdrop-blur-sm"
            onClick={toggleMenu}
          />

          {/* Mobile Menu */}
          <div
            className="absolute top-16 sm:top-20 left-4 right-4 bg-black border-2 rounded-2xl shadow-2xl overflow-hidden"
            style={{ borderColor: "#ffdc96" }}
          >
            {/* Menu Header */}
            <div
              className="px-6 py-4 border-b"
              style={{
                backgroundColor: "rgba(255, 220, 150, 0.1)",
                borderBottomColor: "#ffdc96",
              }}
            >
              <div className="flex items-center justify-between">
                <div>
                  <h2
                    className="text-xl font-bold"
                    style={{ color: "#ffdc96" }}
                  >
                    AfroSwitch
                  </h2>
                  <p className="text-sm" style={{ color: "#368552" }}>
                    Calgary&apos;s Premier African Festival
                  </p>
                </div>
                <div
                  className="w-3 h-3 rounded-full animate-pulse"
                  style={{ backgroundColor: "#d81212" }}
                />
              </div>
            </div>

            {/* Menu Items */}
            <nav className="py-2">
              {menuItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={toggleMenu}
                  className={`block px-6 py-4 text-base font-semibold transition-all duration-300 border-l-4 ${
                    item.special
                      ? "text-black font-bold"
                      : "text-white border-transparent hover:border-current"
                  }`}
                  style={{
                    backgroundColor: item.special
                      ? "#ffdc96"
                      : index % 2 === 0
                      ? "rgba(54, 133, 82, 0.05)"
                      : "transparent",
                    borderLeftColor: item.special ? "#d81212" : "transparent",
                  }}
                >
                  <div className="flex items-center justify-between">
                    <span>{item.name}</span>
                    {item.name === "Events" && (
                      <span
                        className="text-xs px-2 py-1 rounded-full"
                        style={{
                          backgroundColor: "rgba(212, 18, 18, 0.2)",
                          color: "#d81212",
                        }}
                      >
                        July 13
                      </span>
                    )}
                    {item.special && (
                      <span
                        className="text-xs px-2 py-1 rounded-full"
                        style={{
                          backgroundColor: "rgba(54, 133, 82, 0.2)",
                          color: "#368552",
                        }}
                      >
                        Limited
                      </span>
                    )}
                  </div>
                  {item.name === "Events" && (
                    <div
                      className="text-xs mt-1 opacity-70"
                      style={{ color: "#368552" }}
                    >
                      Summer Festival 2025
                    </div>
                  )}
                  {item.special && (
                    <div
                      className="text-xs mt-1 opacity-70"
                      style={{ color: "#368552" }}
                    >
                      Early Bird Available
                    </div>
                  )}
                </a>
              ))}
            </nav>

            {/* Menu Footer */}
            <div
              className="px-6 py-4 border-t"
              style={{
                backgroundColor: "rgba(54, 133, 82, 0.1)",
                borderTopColor: "#368552",
              }}
            >
              <div className="text-center">
                <div
                  className="text-sm font-semibold"
                  style={{ color: "#ffdc96" }}
                >
                  Confluence Historic Site
                </div>
                <div className="text-xs mt-1" style={{ color: "#368552" }}>
                  Calgary, Canada • July 13, 2025
                </div>
                <div className="mt-3 flex items-center justify-center space-x-2">
                  <div
                    className="w-2 h-2 rounded-full animate-pulse"
                    style={{ backgroundColor: "#d81212" }}
                  />
                  <span
                    className="text-xs font-medium"
                    style={{ color: "#d81212" }}
                  >
                    Tickets Available Now
                  </span>
                  <div
                    className="w-2 h-2 rounded-full animate-pulse"
                    style={{ backgroundColor: "#d81212" }}
                  />
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
