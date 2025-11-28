import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - Pointless Button",
  description: "Terms of Service for Pointless Button. Read the rules for tapping our pointless button.",
};

export default function Terms() {
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
              <Link href="/support" className="text-gray-600 hover:text-gray-900 font-medium">
                Support
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
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mb-6">
              <span className="text-4xl">📜</span>
            </div>
            <h1 className="text-5xl sm:text-6xl font-black text-gray-900 mb-6">
              Terms of Service
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The rules for using the world&apos;s most pointless app.
            </p>
            <p className="text-sm text-gray-500 mt-4">
              Last Updated: November 28, 2025
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-12 space-y-8">
            {/* Introduction */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Agreement to Terms</h2>
              <p className="text-gray-700 leading-relaxed">
                By downloading, installing, or using Pointless Button (&quot;the App&quot;), you agree to be
                bound by these Terms of Service. If you do not agree to these terms, please do not use the App.
              </p>
            </section>

            {/* License */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">License to Use</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We grant you a limited, non-exclusive, non-transferable, revocable license to use
                Pointless Button for personal, non-commercial purposes. You may:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Download and install the App on devices you own or control</li>
                <li>Use the App&apos;s features as intended</li>
                <li>Tap the button as many times as your heart desires</li>
              </ul>
            </section>

            {/* Restrictions */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Restrictions</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                You agree NOT to:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Reverse engineer, decompile, or disassemble the App</li>
                <li>Modify, adapt, or create derivative works of the App</li>
                <li>Use automated tools, bots, or scripts to artificially inflate tap counts</li>
                <li>Attempt to circumvent or disable any security features</li>
                <li>Use the App for any illegal or unauthorized purpose</li>
                <li>Interfere with or disrupt the App&apos;s servers or networks</li>
              </ul>
            </section>

            {/* In-App Purchases */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">In-App Purchases</h2>
              <div className="space-y-4">
                <div className="bg-orange-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <span>💳</span>
                    Remove Ads Purchase
                  </h3>
                  <p className="text-gray-700 mb-3">
                    The App offers a non-consumable in-app purchase to remove all advertisements:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li><strong>Price:</strong> $1.99 USD (or equivalent in your local currency)</li>
                    <li><strong>Type:</strong> One-time purchase, permanent removal of ads</li>
                    <li><strong>Restoration:</strong> Can be restored on any device signed in with your Apple ID</li>
                    <li><strong>Functionality:</strong> Removes banner ads and provides instant access to the 2x multiplier (no video ads required)</li>
                  </ul>
                </div>

                <p className="text-gray-700 leading-relaxed">
                  All purchases are processed through Apple&apos;s App Store and are subject to Apple&apos;s
                  terms and conditions. Payment will be charged to your Apple ID account at confirmation
                  of purchase.
                </p>

                <div className="bg-blue-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <span>↩️</span>
                    Refunds
                  </h3>
                  <p className="text-gray-700">
                    All sales are final. However, you may request a refund through Apple within 90 days
                    of purchase. We do not control Apple&apos;s refund policy or process. To request a refund,
                    visit{" "}
                    <a
                      href="https://reportaproblem.apple.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-700 font-semibold underline"
                    >
                      reportaproblem.apple.com
                    </a>
                    {" "}or contact Apple Support.
                  </p>
                </div>
              </div>
            </section>

            {/* Advertising */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Advertising</h2>
              <p className="text-gray-700 leading-relaxed">
                The free version of the App displays advertisements through Google AdMob. These ads help
                support the development and maintenance of the App. By using the App, you consent to
                viewing these advertisements. You may remove all ads by purchasing the &quot;Remove Ads&quot;
                in-app purchase.
              </p>
            </section>

            {/* User Content & Data */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Your Data</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The App stores your tap count and achievement data locally on your device and
                optionally syncs it via iCloud. You retain all rights to your data. We collect
                anonymous, aggregated usage statistics as described in our{" "}
                <Link href="/privacy" className="text-red-600 hover:text-red-700 font-semibold underline">
                  Privacy Policy
                </Link>
                .
              </p>
            </section>

            {/* No Warranty */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">No Warranty</h2>
              <div className="bg-yellow-50 p-6 rounded-xl border-2 border-yellow-200">
                <p className="text-gray-700 leading-relaxed mb-3">
                  THE APP IS PROVIDED &quot;AS IS&quot; WITHOUT WARRANTY OF ANY KIND. We make no guarantees
                  that the App will:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>Be error-free, secure, or uninterrupted</li>
                  <li>Meet your expectations (it probably won&apos;t - it&apos;s literally pointless)</li>
                  <li>Be available at all times (servers may go down)</li>
                  <li>Accurately track every single tap (though we try!)</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-3">
                  Use the App at your own risk. We are not responsible for any data loss, device issues,
                  or existential crises resulting from excessive tapping.
                </p>
              </div>
            </section>

            {/* Limitation of Liability */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Limitation of Liability</h2>
              <p className="text-gray-700 leading-relaxed">
                To the maximum extent permitted by law, we shall not be liable for any indirect,
                incidental, special, consequential, or punitive damages, including loss of profits,
                data, or other intangible losses resulting from your use or inability to use the App.
                Our total liability shall not exceed the amount you paid for in-app purchases (if any)
                in the 12 months prior to the claim.
              </p>
            </section>

            {/* Termination */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Termination</h2>
              <p className="text-gray-700 leading-relaxed">
                We reserve the right to terminate or suspend your access to the App at any time,
                with or without notice, for any reason, including violation of these Terms. You may
                stop using the App at any time by deleting it from your device. Your in-app purchases
                will remain tied to your Apple ID even after deletion.
              </p>
            </section>

            {/* Changes to Terms */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Changes to These Terms</h2>
              <p className="text-gray-700 leading-relaxed">
                We may update these Terms of Service from time to time. Changes will be posted on
                this page with an updated date. Continued use of the App after changes constitutes
                acceptance of the updated terms. We encourage you to review these terms periodically.
              </p>
            </section>

            {/* Governing Law */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Governing Law</h2>
              <p className="text-gray-700 leading-relaxed">
                These Terms shall be governed by and construed in accordance with the laws of your
                jurisdiction, without regard to conflict of law principles. Any disputes arising from
                these Terms or your use of the App shall be resolved in accordance with applicable law.
              </p>
            </section>

            {/* Contact */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact Information</h2>
              <p className="text-gray-700 leading-relaxed">
                If you have questions about these Terms of Service, please contact us through our{" "}
                <Link href="/support" className="text-red-600 hover:text-red-700 font-semibold underline">
                  Support page
                </Link>
                .
              </p>
            </section>

            {/* Summary */}
            <section className="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-2xl border-2 border-green-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span>✨</span>
                TL;DR
              </h2>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-lg">✅</span>
                  <span>Use the App however you want (within reason)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-lg">❌</span>
                  <span>Don&apos;t use bots or try to hack the App</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-lg">💳</span>
                  <span>In-app purchases are processed by Apple and are non-refundable (unless Apple says otherwise)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-lg">🛡️</span>
                  <span>We&apos;re not responsible if your excessive tapping leads to questioning life choices</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-lg">📱</span>
                  <span>The App is provided as-is with no guarantees</span>
                </li>
              </ul>
            </section>
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
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms of Service
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
