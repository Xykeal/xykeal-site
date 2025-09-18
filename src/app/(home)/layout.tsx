import { ReactNode } from "react";
import Image from "next/image";
import Navbar from "@/components/navbar";
import { appConfig } from "@/config/app-config";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="relative flex min-h-screen w-screen flex-col items-center justify-between font-serif">
      <Image
        src={appConfig.bgPath}
        fill
        draggable={false}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        objectFit="cover"
        objectPosition="bottom"
        className="-z-10 brightness-75"
        alt="background image"
      />

      {children}

      <Navbar />
    </div>
  );
}
