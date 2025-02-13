import { navLinks } from "@/constants";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

export default function Footer() {
  return (
    <footer className="bg-black  items-center  w-full flex flex-col lg:flex-row justify-between px-4 lg:px-8 mx-auto py-6 lg:py-10">
      <div className="flex flex-col bg-black lg:flex-row justify-between  w-full max-w-[1500px] mx-auto">
        <div className="w-full gap-4 flex flex-col lg:flex-row items-center">
          {navLinks.map((items) => (
            <Link
              className="text-[#DFDFDF] hover:text-primary "
              href={items.href}
              key={items.name}
            >
              {items.name}
            </Link>
          ))}
        </div>

        <Button size={"lg"} className="uppercase mt-4  ">
          buy tickets
        </Button>
      </div>
    </footer>
  );
}
