import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Pointless Button",
  description: "Privacy Policy for Pointless Button. Learn how we collect anonymous usage data and protect your privacy. We don't sell your data.",
};

export default function Privacy() {
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
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full mb-6">
              <span className="text-4xl">🔒</span>
            </div>
            <h1 className="text-5xl sm:text-6xl font-black text-gray-900 mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Your privacy matters, even when tapping pointlessly.
            </p>
            <p className="text-sm text-gray-500 mt-4">
              Last Updated: November 18, 2025
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-12 space-y-8">
            {/* Introduction */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Introduction</h2>
              <p className="text-gray-700 leading-relaxed">
                Welcome to Pointless Button. This Privacy Policy explains how we collect, use, and protect
                your information when you use our iOS application. We are committed to protecting your
                privacy and being transparent about our data practices.
              </p>
            </section>

            {/* Information We Collect */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Information We Collect</h2>

              <div className="space-y-4">
                <div className="bg-blue-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <span>📊</span>
                    Anonymous Usage Data
                  </h3>
                  <p className="text-gray-700 mb-3">
                    We collect anonymous, aggregated data about how you use the app, including:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li>Number of button taps (aggregated globally)</li>
                    <li>Achievement unlocks and milestones reached</li>
                    <li>App session duration and frequency</li>
                    <li>Device type and iOS version (for compatibility purposes)</li>
                    <li>Crash reports and error logs (to improve app stability)</li>
                  </ul>
                  <p className="text-gray-700 mt-3">
                    <strong>This data is completely anonymous and cannot be traced back to you personally.</strong>
                  </p>
                </div>

                <div className="bg-green-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <span>💾</span>
                    Local Data Storage
                  </h3>
                  <p className="text-gray-700">
                    Your personal tap count, achievements, and preferences are stored locally on your device
                    and synchronized via iCloud (if enabled). This data remains private to you and is not
                    accessible to us.
                  </p>
                </div>
              </div>
            </section>

            {/* What We DON'T Collect */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">What We DON&apos;T Collect</h2>
              <div className="bg-gradient-to-br from-red-50 to-orange-50 p-6 rounded-xl border-2 border-red-200">
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-xl">❌</span>
                    <span><strong>No Personal Information:</strong> We do not collect your name, email address, phone number, or any other personally identifiable information.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-xl">❌</span>
                    <span><strong>No Location Data:</strong> We do not track or collect your location.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-xl">❌</span>
                    <span><strong>No Contacts or Photos:</strong> We do not access your contacts, photos, or any other personal data on your device.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-xl">❌</span>
                    <span><strong>No Third-Party Tracking:</strong> We do not use third-party advertising networks or tracking tools.</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* How We Use Your Information */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">How We Use Your Information</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The anonymous usage data we collect is used solely for:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Maintaining and displaying the global tap counter</li>
                <li>Improving app performance and fixing bugs</li>
                <li>Understanding which features are most popular</li>
                <li>Planning future updates and improvements</li>
              </ul>
            </section>

            {/* Data Sharing */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Data Sharing and Sales</h2>
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl border-2 border-purple-200">
                <p className="text-lg font-bold text-gray-900 mb-3">
                  🛡️ We do NOT sell, rent, or share your data with third parties. Period.
                </p>
                <p className="text-gray-700">
                  Your data is not a commodity. We do not monetize your information through data sales
                  or sharing arrangements with advertisers, data brokers, or any other third parties.
                  The only revenue we generate comes from optional in-app purchases for cosmetic achievements.
                </p>
              </div>
            </section>

            {/* In-App Purchases */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">In-App Purchases</h2>
              <p className="text-gray-700 leading-relaxed">
                The app offers optional in-app purchases for cosmetic achievements and badges.
                These transactions are processed entirely through Apple&apos;s App Store, and we do not
                collect or store your payment information. Please refer to{" "}
                <a
                  href="https://www.apple.com/legal/privacy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 font-semibold underline"
                >
                  Apple&apos;s Privacy Policy
                </a>
                {" "}for information about how Apple handles payment data.
              </p>
            </section>

            {/* Firebase & Cloud Services */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Firebase & Cloud Services</h2>
              <p className="text-gray-700 leading-relaxed">
                We use Firebase (Google&apos;s cloud platform) to power the global tap counter and sync
                anonymous aggregate data. Firebase may collect technical information such as IP addresses
                for service operation, but this data is not used for tracking or profiling individual users.
                For more information, see{" "}
                <a
                  href="https://firebase.google.com/support/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 font-semibold underline"
                >
                  Firebase&apos;s Privacy Policy
                </a>
                .
              </p>
            </section>

            {/* Children's Privacy */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Children&apos;s Privacy</h2>
              <p className="text-gray-700 leading-relaxed">
                Pointless Button is designed to be safe for all ages. We do not knowingly collect personal
                information from children under 13. Since we don&apos;t collect personal information from anyone,
                the app is compliant with COPPA (Children&apos;s Online Privacy Protection Act).
              </p>
            </section>

            {/* Your Rights */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Your Rights</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Since we don&apos;t collect personal data, there&apos;s nothing to access, delete, or modify on our end.
                However, you can:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Delete the app to remove all local data from your device</li>
                <li>Disable iCloud sync for the app in your iOS settings</li>
                <li>Reset your local tap count within the app settings</li>
                <li>Contact us with any privacy concerns or questions</li>
              </ul>
            </section>

            {/* Changes to This Policy */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Changes to This Policy</h2>
              <p className="text-gray-700 leading-relaxed">
                We may update this Privacy Policy from time to time. Any changes will be posted on this page
                with an updated &quot;Last Updated&quot; date. We encourage you to review this policy periodically.
                Continued use of the app after changes constitutes acceptance of the updated policy.
              </p>
            </section>

            {/* Contact Us */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact Us</h2>
              <p className="text-gray-700 leading-relaxed">
                If you have any questions or concerns about this Privacy Policy or our data practices,
                please contact us through our{" "}
                <Link href="/support" className="text-red-600 hover:text-red-700 font-semibold underline">
                  Support page
                </Link>
                .
              </p>
            </section>

            {/* Summary Box */}
            <section className="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-2xl border-2 border-green-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span>✨</span>
                Privacy in a Nutshell
              </h2>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-lg">✅</span>
                  <span>We collect anonymous usage statistics to improve the app</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-lg">✅</span>
                  <span>We do NOT collect personal information</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-lg">✅</span>
                  <span>We do NOT sell or share your data</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-lg">✅</span>
                  <span>Your tap count and achievements stay on your device (and iCloud if enabled)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-lg">✅</span>
                  <span>We&apos;re committed to keeping your pointless tapping private and secure</span>
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
