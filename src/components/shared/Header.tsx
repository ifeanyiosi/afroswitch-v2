import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import MobileMenu from "../MobileMenu";

export default function Header() {
  return (
    <nav className="w-full  z-[50] px-4 lg:px-8 mx-auto sticky top-0 bg-[#000] py-6 ">
      <div className="flex max-w-[1500px] mx-auto justify-between items-center">
        <Link href={"/"}>
          <Image
            width={100}
            height={50}
            src={"/icons/afroswitch-logo.png"}
            alt="Afroswitch Logo"
          />
        </Link>

        <div className="flex items-center gap-4">
          <Button size={"lg"} className="uppercase  ">
            buy tickets
          </Button>
          <MobileMenu />
        </div>
      </div>
    </nav>
  );
}
