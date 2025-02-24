/* eslint-disable @next/next/no-img-element */
import React from "react";
import {
  Calendar,
  Clock,
  MapPin,
  Music,
  Users,
  Star,
  Mail,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const EventsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-900 via-orange-950 to-black text-white">
      {/* Hero Section */}
      <div className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/70" />
        <img
          src="/images/afro-ticket.jpg"
          alt="AfroSwitch background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-fade-in bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-orange-400">
            AfroSwitch
          </h1>
          <p className="text-xl md:text-3xl mb-8 text-yellow-100 font-light">
            Calgary&apos;s Premier African Cultural Festival
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button className="bg-yellow-600 hover:bg-yellow-700 px-8 py-6 text-lg rounded-full flex items-center gap-2">
              <Mail className="w-5 h-5" />
              Coming soon
            </Button>
          </div>
        </div>
      </div>

      {/* Coming Soon Section */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <div className="inline-block">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-yellow-200 to-orange-400 text-transparent bg-clip-text">
              Coming Soon
            </h2>
            <div className="h-1 w-full bg-gradient-to-r from-yellow-600 to-orange-600" />
          </div>
          <p className="mt-6 text-xl text-yellow-100/80">
            Experience the rhythm of Africa in the heart of Calgary
          </p>
        </div>

        <div className="grid grid-cols-1 max-w-3xl mx-auto gap-8">
          <Card className="bg-gradient-to-br from-orange-900/40 to-black/40 border-yellow-600/30 backdrop-blur-sm transform hover:scale-[1.02] transition-all">
            <CardHeader>
              <div className="flex items-center gap-2 text-yellow-400 mb-2">
                <Star className="w-5 h-5" />
                <span className="text-sm uppercase tracking-wider">
                  Flagship Event
                </span>
              </div>
              <CardTitle className="text-3xl text-[#FFF5D1] font-bold">
                Summer Afroswitch 2025
              </CardTitle>
              <CardDescription className="text-orange-200 text-lg">
                A Celebration of Culture
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-yellow-400" />
                    <span className="text-yellow-50">TBA</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-yellow-400" />
                    <span className="text-yellow-50">TBA</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-yellow-400" />
                    <span className="text-yellow-50">TBA</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Music className="w-5 h-5 text-yellow-400" />
                    <span className="text-yellow-50">Live Performances</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 justify-center bg-yellow-400/10 py-3 rounded-lg">
                  <Users className="w-5 h-5 text-yellow-400" />
                  <span className="text-yellow-100">
                    Expected: 5000+ Attendees
                  </span>
                </div>

                <div className="space-y-4 pt-4">
                  <Button
                    asChild
                    className="w-full bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700 text-lg py-6"
                  >
                    <Link href={"/newsletter"}>Join Exclusive Waitlist</Link>
                  </Button>
                  <p className="text-center text-yellow-200/60 text-sm">
                    Be the first to know about ticket releases and special
                    offers
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default EventsPage;
