import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import React from "react";

interface HomeLayoutProps {
  children: React.ReactNode;
}

export default function HomeLayout({ children }: HomeLayoutProps) {
  return (
    <div className="min-h-screen flex items-center justify-center flex-col">
      <Header />
      <main className=" w-full p-4 bg-black">{children}</main>
      <Footer />
    </div>
  );
}
