/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

export default function MusicSection() {
  return (
    <div className=" lg:min-h-[300px] mx-auto max-w-[1500px] bg-black w-full flex flex-col lg:flex-row py-10 ">
      <div className=" lg:min-h-[400px] w-full flex flex-col items-center justify-center  px-4">
        <div className=" w-full mt-4 mx-auto shadow-lg rounded-lg overflow-hidden">
          <iframe
            src="https://open.spotify.com/embed/playlist/12vhlA9WakYDweQODMjfNs?utm_source=generator"
            width="100%"
            height="352"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>

        <div className="py-10">
          {" "}
          <Link
            href="https://open.spotify.com/playlist/12vhlA9WakYDweQODMjfNs"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 px-6 py-2 bg-primary text-black rounded-lg hover:bg-green-600 transition"
          >
            Listen on Spotify
          </Link>
        </div>
      </div>
    </div>
  );
}
