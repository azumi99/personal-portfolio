import Navbar from "@/components/navbar";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import { TooltipProvider } from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: DATA.name,
  description: DATA.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className={cn("relative min-h-screen bg-background font-sans antialiased", geist.variable, geistMono.variable)}>
        <TooltipProvider delayDuration={0}>
          <div className="absolute inset-x-0 top-0 z-0 h-[100px] overflow-hidden">
            <FlickeringGrid
              className="h-full w-full"
              squareSize={2}
              gridGap={2}
              style={{
                maskImage: "linear-gradient(to bottom, black, transparent)",
                WebkitMaskImage: "linear-gradient(to bottom, black, transparent)",
              }}
            />
          </div>
          <div className="relative z-10 mx-auto max-w-2xl px-6 py-12 pb-24 sm:py-24">{children}</div>
          <Navbar />
        </TooltipProvider>
      </body>
    </html>
  );
}
