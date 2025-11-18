"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Support() {
  const [email, setEmail] = useState<string>("");

  useEffect(() => {
    // Obfuscated email - decoded on client side
    const parts = ["svendxs", "@", "gmail", ".", "com"];
    setEmail(parts.join(""));
  }, []);

  const handleEmailClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (email) {
      window.location.href = `mailto:${email}`;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-orange-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <Image
                src="/logo/pointless-tap.png"
                alt="Pointless Button Logo"
                width={40}
                height={40}
                className="rounded-lg"
              />
              <span className="text-xl font-bold text-gray-900">Pointless Button</span>
            </Link>
            <nav className="flex gap-6">
              <Link href="/" className="text-gray-600 hover:text-gray-900 font-medium">
                Home
              </Link>
              <Link href="/privacy" className="text-gray-600 hover:text-gray-900 font-medium">
                Privacy
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-red-500 to-orange-500 rounded-full mb-6">
              <span className="text-4xl">💬</span>
            </div>
            <h1 className="text-5xl sm:text-6xl font-black text-gray-900 mb-6">
              Support
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Need help with the most pointless app ever? We&apos;re here for you.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-12 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Us</h2>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-red-50 to-orange-50 p-6 rounded-2xl">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <span>📧</span>
                  Email Support
                </h3>
                <p className="text-gray-600 mb-4">
                  For bug reports, feature requests, or general inquiries, reach out to us at:
                </p>
                {email ? (
                  <button
                    onClick={handleEmailClick}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-red-600 to-orange-600 text-white font-semibold rounded-full hover:shadow-lg transition-all duration-200 hover:scale-105"
                  >
                    <span>✉️</span>
                    Contact Support
                  </button>
                ) : (
                  <div className="h-12 w-48 bg-gray-200 animate-pulse rounded-full"></div>
                )}
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-2xl">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <span>❓</span>
                  Common Questions
                </h3>
                <p className="text-gray-600 mb-4">
                  Before reaching out, you might find answers in our FAQ section on the{" "}
                  <Link href="/#features" className="text-red-600 hover:text-red-700 font-semibold underline">
                    main page
                  </Link>
                  .
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-teal-50 p-6 rounded-2xl">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <span>⚡</span>
                  Response Time
                </h3>
                <p className="text-gray-600">
                  We typically respond within 24-48 hours. Though why you&apos;d need urgent support for a pointless button is beyond us. 😄
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-8 border-2 border-yellow-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span>💡</span>
              Feedback Welcome
            </h3>
            <p className="text-gray-700">
              Found a bug? Have an idea for an even more pointless feature? We&apos;d love to hear from you!
              Your feedback helps us make this the most gloriously pointless app possible.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <Image
                src="/logo/pointless-tap.png"
                alt="Pointless Button Logo"
                width={48}
                height={48}
                className="rounded-lg"
              />
            </div>
            <div className="flex justify-center gap-6 mb-6 text-sm">
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <Link href="/support" className="hover:text-white transition-colors">
                Support
              </Link>
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
            </div>
            <p className="text-sm mb-4">
              Made with ❤️ and questionable life choices
            </p>
            <p className="text-xs">
              © 2025 Pointless Button. All rights reserved. Not that it matters.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
