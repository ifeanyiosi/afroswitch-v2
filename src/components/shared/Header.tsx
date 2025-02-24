"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { navLinks } from "@/constants";
import { Menu, X } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "../ui/navigation-menu";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full z-[50] px-4 lg:px-8 mx-auto sticky top-0 bg-[#000] py-6">
      <div className="flex max-w-[1500px] mx-auto justify-between items-center">
        <Link href="/">
          <Image
            width={100}
            height={50}
            src="/icons/afroswitch-logo.png"
            alt="Afroswitch Logo"
          />
        </Link>

        <div className="flex items-center gap-4 ">
          <Button asChild size="lg" className="uppercase">
            <Link href="https://www.showpass.com/afroswitch24/">
              Buy Tickets
            </Link>
          </Button>

          <div className="hidden md:block">
            <NavigationMenu>
              <NavigationMenuList className="space-x-1">
                {navLinks.map((item) => (
                  <NavigationMenuItem key={item?.name}>
                    <Link
                      href={item?.href ?? "#"}
                      className="relative uppercase px-3 py-2 text-lg font-medium text-white transition-all rounded-lg hover:bg-white/10 after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-primary after:left-0 after:right-0 after:bottom-0 after:transition-all hover:after:w-full"
                    >
                      {item?.name}
                    </Link>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 text-white transition-colors hover:bg-white/10 rounded-lg"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              {isOpen ? (
                <X className="w-10 h-10" aria-hidden="true" />
              ) : (
                <Menu className="w-10 h-10" aria-hidden="true" />
              )}
              <span className="sr-only">
                {isOpen ? "Close menu" : "Open menu"}
              </span>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        id="mobile-menu"
        className={`md:hidden fixed h-screen top-0 inset-0 bg-gray-900 z-50 transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!isOpen}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4 border-b border-white/10">
            <h1 className="text-xl uppercase font-bold text-white">
              Afroswitch
            </h1>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="inline-flex items-center justify-center p-2 text-white rounded-lg hover:bg-white/10"
            >
              <X className="w-5 h-5" aria-hidden="true" />
              <span className="sr-only">Close menu</span>
            </Button>
          </div>
          <div className="px-2 py-4 overflow-y-auto">
            {navLinks.map((item, index) => (
              <div key={item?.name}>
                <Link
                  href={item?.href ?? "#"}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 text-base font-medium text-white rounded-lg hover:bg-white/10 transition-all"
                >
                  {item?.name}
                </Link>
                {index !== navLinks.length - 1 && (
                  <div className="border-b border-white/20 my-2"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
