import MouseMoveEffect from "@/components/mouse-move-effect";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type React from "react";
import { Site } from "./constants";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `${Site.name} - Cutting-Edge Software Solutions`,
  description: `${Site.name} delivers innovative, high-performance software solutions for businesses of the future.`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="light">
      <body
        className={`${inter.className} bg-background text-foreground antialiased`}
      >
        <MouseMoveEffect />
        {children}
      </body>
      <Analytics />
    </html>
  );
}
