import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";

const urbanist = Urbanist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Afroswitch | The Ultimate Afrobeat Experience in Calgary",
  description:
    "Afroswitch brings the energy of Afrobeat, Amapiano, and Caribbean vibes to Calgary. Join us for an unforgettable festival experience!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${urbanist.className} antialiased`}>{children}</body>
    </html>
  );
}
