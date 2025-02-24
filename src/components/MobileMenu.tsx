import React from "react";

import Link from "next/link";
import { MenuIcon, X } from "lucide-react";
import { navLinks } from "@/constants";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";

export default function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <MenuIcon className="h-[50px] w-[50px] text-primary" />
      </SheetTrigger>
      <SheetContent
        side="top"
        className="bg-black z-[500000000] h-screen p-4 w-full"
      >
        <SheetTitle>Menu</SheetTitle>
        <SheetClose asChild>
          <button className="absolute top-6 right-6">
            <X className="h-10 w-10 text-white hover:text-primary transition-all" />
          </button>
        </SheetClose>
        {/* Mobile Navigation Links */}
        <div className="flex flex-col space-y-8 font-galindo uppercase pt-10">
          <>
            {navLinks.map((item) => (
              <React.Fragment key={item?.name}>
                <SheetClose asChild>
                  <Link
                    className="text-gray-400 hover:text-primary text-6xl py-2"
                    href={item?.href ?? "#"}
                    passHref
                  >
                    {item?.name}
                  </Link>
                </SheetClose>
              </React.Fragment>
            ))}
          </>
        </div>
      </SheetContent>
    </Sheet>
  );
}
