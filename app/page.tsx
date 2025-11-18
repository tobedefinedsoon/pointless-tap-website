import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-orange-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-orange-500/5" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 text-center">
          <div className="flex justify-center mb-8">
            <Image
              src="/logo/pointless-tap.png"
              alt="Pointless Button Logo"
              width={120}
              height={120}
              className="rounded-3xl shadow-2xl"
              priority
            />
          </div>
          <h1 className="text-5xl sm:text-7xl font-black text-gray-900 mb-6 tracking-tight">
            Pointless Button
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 mb-4 max-w-2xl mx-auto font-medium">
            The most gloriously pointless iOS app you&apos;ll ever tap
          </p>
          <p className="text-lg text-gray-500 mb-12 max-w-xl mx-auto">
            No purpose. No goal. No meaning. Just pure, unadulterated tapping.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#download"
              className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-gradient-to-r from-red-600 to-red-500 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
            >
              <span className="mr-2">🔴</span>
              Coming Soon to App Store
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-gray-700 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-200 border-2 border-gray-200 hover:border-gray-300"
            >
              Learn More
            </a>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="bg-white/60 backdrop-blur rounded-2xl p-6 shadow-lg">
              <div className="text-4xl font-black text-red-600 mb-2">∞</div>
              <div className="text-sm font-semibold text-gray-600">Pointless Taps</div>
            </div>
            <div className="bg-white/60 backdrop-blur rounded-2xl p-6 shadow-lg">
              <div className="text-4xl font-black text-red-600 mb-2">0</div>
              <div className="text-sm font-semibold text-gray-600">Actual Purpose</div>
            </div>
            <div className="bg-white/60 backdrop-blur rounded-2xl p-6 shadow-lg">
              <div className="text-4xl font-black text-red-600 mb-2">100%</div>
              <div className="text-sm font-semibold text-gray-600">Time Wasted</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4">
              Pointless Features
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you never knew you didn&apos;t need
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature Cards */}
            <div className="bg-gradient-to-br from-red-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🔴</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">The Button</h3>
              <p className="text-gray-600">
                A big, beautiful, completely pointless button. Tap it. That&apos;s it.
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Global Counter</h3>
              <p className="text-gray-600">
                Watch as humanity collectively wastes time together in real-time via Firebase.
              </p>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Achievements</h3>
              <p className="text-gray-600">
                Unlock badges that prove you&apos;ve wasted your time. Some you can even pay for!
              </p>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Haptic Feedback</h3>
              <p className="text-gray-600">
                Feel every single pointless tap with satisfying haptic feedback.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🎉</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Easter Eggs</h3>
              <p className="text-gray-600">
                Discover special animations at ridiculous milestone numbers.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Personal Stats</h3>
              <p className="text-gray-600">
                Track exactly how much time you&apos;ve wasted down to the tap.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Screenshots Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4">
              See It In Action
            </h2>
            <p className="text-xl text-gray-600">
              Witness the pointlessness
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-orange-600 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
              <div className="relative">
                <Image
                  src="/screenshots/Simulator Screenshot - iPhone 17 Pro Max - 2025-11-18 at 17.00.25.png"
                  alt="Pointless Button App Screenshot 1"
                  width={300}
                  height={650}
                  className="rounded-3xl shadow-2xl"
                />
              </div>
            </div>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 to-red-600 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
              <div className="relative">
                <Image
                  src="/screenshots/Simulator Screenshot - iPhone 17 Pro Max - 2025-11-18 at 17.00.32.png"
                  alt="Pointless Button App Screenshot 2"
                  width={300}
                  height={650}
                  className="rounded-3xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-8">
            <div className="bg-gray-50 p-6 rounded-2xl">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Why does this exist?</h3>
              <p className="text-gray-600">Why not?</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-2xl">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                What&apos;s the highest tap count possible?
              </h3>
              <p className="text-gray-600">
                The limit does not exist. (Technically, UInt64.max)
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-2xl">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Is this a social commentary on mobile gaming and microtransactions?
              </h3>
              <p className="text-gray-600">
                It&apos;s a button. You tap it. Don&apos;t overthink it.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-2xl">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Can I get a refund for achievement purchases?
              </h3>
              <p className="text-gray-600">
                Yes, through Apple&apos;s standard refund process. But why would you want to?
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="download" className="py-24 bg-gradient-to-br from-red-600 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-black mb-6">
            Ready to Waste Some Time?
          </h2>
          <p className="text-xl mb-10 opacity-90">
            Join the pointless revolution. Download the app when it launches.
          </p>
          <div className="inline-flex items-center justify-center px-10 py-5 text-xl font-bold text-red-600 bg-white rounded-full shadow-2xl hover:shadow-3xl transition-all duration-200 hover:scale-105 cursor-not-allowed opacity-90">
            <span className="mr-3">📱</span>
            Coming Soon to the App Store
          </div>
          <p className="mt-8 text-sm opacity-75">
            iOS 17.0 or later required
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
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
