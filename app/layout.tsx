import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pointless Button - The Most Gloriously Pointless iOS App",
  description: "The most gloriously pointless iOS app you'll ever tap. No purpose, no goal, no meaning. Just pure, unadulterated tapping. Track your taps, unlock achievements, and watch humanity waste time together.",
  keywords: ["pointless", "button", "tap", "iOS", "app", "game", "achievements", "counter"],
  openGraph: {
    title: "Pointless Button - The Most Gloriously Pointless iOS App",
    description: "No purpose. No goal. No meaning. Just pure, unadulterated tapping.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
