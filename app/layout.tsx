import type { Metadata } from "next";
import "./globals.css";

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
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
