"use client";

import React, { useEffect, useState, useRef } from "react";
import { Howl } from "howler";
import { appConfig } from "@/config/app-config";
import LyreIcon from "./icons/lyre-icon";

export default function ToggleMusic() {
  const [enabled, setEnabled] = useState(false);
  const bgmRef = useRef<Howl | null>(null);

  useEffect(() => {
    bgmRef.current = new Howl({
      src: [appConfig.bgmPath],
      loop: true,
      volume: 0.5,
    });

    return () => {
      bgmRef.current?.stop();
    };
  }, []);

  useEffect(() => {
    if (!bgmRef.current) return;

    if (enabled) {
      bgmRef.current.play();
    } else {
      bgmRef.current.pause();
    }
  }, [enabled]);

  return (
    <button
      className="hover:animate-glow-drop cursor-pointer"
      onClick={() => setEnabled(!enabled)}
    >
      <LyreIcon className="size-8 fill-white" />
    </button>
  );
}
