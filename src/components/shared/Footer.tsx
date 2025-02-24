"use client";

import { ArrowUp } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    if (window.scrollTo) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      document.documentElement.scrollTop = 0; // Fallback
    }
  };

  const footerSections = [
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Contact", href: "/contact" },
        { name: "Newsletter", href: "/newsletter" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Service", href: "/terms" },
      ],
    },
  ];

  return (
    <footer className="relative bg-black text-gray-300">
      {/* Background image container with overlay */}
      <div
        className="absolute inset-0 bg-[url('/footer.jpg')] bg-cover bg-center opacity-10"
        aria-hidden="true"
      />

      {/* Content container */}
      <div className="relative container px-4 py-16 mx-auto">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
          {/* Company Info and Contact */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-white uppercase">
                <Link href="/" className="flex items-center space-x-2">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md">
                    <Image
                      width={100}
                      height={50}
                      src={"/icons/afroswitch-logo.png"}
                      alt="Afroswitch Logo"
                    />
                  </div>
                  <h1 className="text-xl uppercase hidden lg:flex font-bold text-white hover:text-primary transition-colors">
                    Afroswitch
                  </h1>
                </Link>
              </h2>
              <p className="mt-4 text-sm text-gray-400 leading-relaxed">
                Celebrating African culture and music in the heart of Calgary.
                Join us for an unforgettable experience of unity, rhythm, and
                joy.
              </p>
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section) => (
            <div key={section.title} className="space-y-4">
              <h3 className="text-lg font-semibold text-white uppercase after:content-[''] after:block after:w-12 after:h-1 after:bg-primary after:mt-2">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-primary transition-colors inline-block focus:ring focus:ring-primary"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-gray-700/50">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Afroswitch. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link
                href="/privacy"
                className="text-sm text-gray-400 hover:text-primary transition-colors focus:ring focus:ring-primary"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-sm text-gray-400 hover:text-primary transition-colors focus:ring focus:ring-primary"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      <Button
        variant="secondary"
        size="icon"
        className={`fixed bottom-6 right-6 bg-primary text-white  shadow-lg hover:shadow-xl transition-all duration-300 focus:ring focus:ring-blue-400 ${
          showScrollTop
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5 text-black " />
      </Button>
    </footer>
  );
};

export { Footer };
