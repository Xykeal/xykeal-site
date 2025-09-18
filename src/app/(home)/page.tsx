import ToggleMusic from "@/components/toggle-music";
import React from "react";

export default function Home() {
  return (
    <div className="mt-[20vh] flex max-w-7xl flex-col items-center gap-2 px-12">
      <div className="animate-glow text-xl sm:text-4xl md:text-6xl">
        &quot;Frieren, the life ahead of you will surely be much longer than we
        can imagine&quot;
      </div>
      <div className="animate-glow mb-4 self-end text-right text-base sm:text-xl md:text-2xl">
        Hero Himmel
      </div>
      <ToggleMusic />
    </div>
  );
}
