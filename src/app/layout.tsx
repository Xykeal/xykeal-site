import type { Metadata } from "next";
import { Crimson_Pro } from "next/font/google";
import "@/styles/globals.css";

const crimsonPro = Crimson_Pro({
  variable: "--font-crimson-pro",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Xykeal",
  description: "My personal site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${crimsonPro.variable} antialiased`}>{children}</body>
    </html>
  );
}
