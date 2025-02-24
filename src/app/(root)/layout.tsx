
import { Footer } from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import React from "react";

interface HomeLayoutProps {
  children: React.ReactNode;
}

export default function HomeLayout({ children }: HomeLayoutProps) {
  return (
    <div className=" flex-col">
      <Header />
      <main className="min-h-screen w-full p-4 bg-black">{children}</main>
      <Footer />
    </div>
  );
}
