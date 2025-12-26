import Image from "next/image";
import FakeAppSimulator from "./components/FakeAppSimulator";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#1C1C1E]">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
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
          <h1 className="text-5xl sm:text-7xl font-black text-gray-900 dark:text-white mb-6 tracking-tight">
            Pointless Button
          </h1>
          <p className="text-xl sm:text-2xl text-[#8E8E93] mb-4 max-w-2xl mx-auto font-medium">
            The most gloriously pointless iOS app you&apos;ll ever tap
          </p>
          <p className="text-lg text-[#8E8E93] mb-12 max-w-xl mx-auto">
            No purpose. No goal. No meaning. Just pure, unadulterated tapping.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://apps.apple.com/us/app/pointless-tap/id6755431610"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-[#2C2C2E] dark:bg-[#48484A] rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-[0.98] active:scale-95"
            >
              Download on App Store
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-gray-900 dark:text-white bg-[#F2F2F7] dark:bg-[#2C2C2E] rounded-full shadow-md hover:shadow-lg transition-all duration-200 border border-[#8E8E93]/20"
            >
              Learn More
            </a>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="bg-[#F2F2F7] dark:bg-[#2C2C2E] rounded-2xl p-6 shadow-lg">
              <div className="text-4xl font-black text-[#0A84FF] mb-2">∞</div>
              <div className="text-sm font-semibold text-[#8E8E93] tracking-wide">POINTLESS TAPS</div>
            </div>
            <div className="bg-[#F2F2F7] dark:bg-[#2C2C2E] rounded-2xl p-6 shadow-lg">
              <div className="text-4xl font-black text-[#0A84FF] mb-2">0</div>
              <div className="text-sm font-semibold text-[#8E8E93] tracking-wide">ACTUAL PURPOSE</div>
            </div>
            <div className="bg-[#F2F2F7] dark:bg-[#2C2C2E] rounded-2xl p-6 shadow-lg">
              <div className="text-4xl font-black text-[#0A84FF] mb-2">100%</div>
              <div className="text-sm font-semibold text-[#8E8E93] tracking-wide">TIME WASTED</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-[#F2F2F7] dark:bg-[#1C1C1E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 dark:text-white mb-4">
              Pointless Features
            </h2>
            <p className="text-xl text-[#8E8E93] max-w-2xl mx-auto">
              Everything you never knew you didn&apos;t need
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature Cards */}
            <div className="bg-white dark:bg-[#2C2C2E] p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-[#8E8E93]/10">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">The Button</h3>
              <p className="text-[#8E8E93]">
                A big, beautiful, completely pointless 200x200 button with spring animations. Tap it. That&apos;s it.
              </p>
            </div>

            <div className="bg-white dark:bg-[#2C2C2E] p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-[#8E8E93]/10">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Global Counter</h3>
              <p className="text-[#8E8E93]">
                Watch as humanity collectively wastes time together in real-time via Firebase.
              </p>
            </div>

            <div className="bg-white dark:bg-[#2C2C2E] p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-[#8E8E93]/10">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">33 Achievements</h3>
              <p className="text-[#8E8E93]">
                Unlock badges from &quot;First Tap&quot; to absurd milestones. Beautiful toast notifications celebrate your wasted time.
              </p>
            </div>

            <div className="bg-white dark:bg-[#2C2C2E] p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-[#8E8E93]/10">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Speed Challenge</h3>
              <p className="text-[#8E8E93]">
                30-second tapping sprints with live metrics. Track your current, average, and peak taps per second.
              </p>
            </div>

            <div className="bg-white dark:bg-[#2C2C2E] p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-[#8E8E93]/10">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Global Leaderboard</h3>
              <p className="text-[#8E8E93]">
                Compete with tappers worldwide. See top 100 players and track your rank with auto-generated usernames.
              </p>
            </div>

            <div className="bg-white dark:bg-[#2C2C2E] p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-[#8E8E93]/10">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">2X Multiplier</h3>
              <p className="text-[#8E8E93]">
                Watch ads to double your taps for 30 seconds. Or buy Remove Ads for unlimited direct access.
              </p>
            </div>

            <div className="bg-white dark:bg-[#2C2C2E] p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-[#8E8E93]/10">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Haptic Feedback</h3>
              <p className="text-[#8E8E93]">
                Feel every single pointless tap with satisfying haptic feedback and spring animations.
              </p>
            </div>

            <div className="bg-white dark:bg-[#2C2C2E] p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-[#8E8E93]/10">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Usernames</h3>
              <p className="text-[#8E8E93]">
                Auto-generated creative names like &quot;swift_panda_472&quot; or customize your own tapper identity.
              </p>
            </div>

            <div className="bg-white dark:bg-[#2C2C2E] p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-[#8E8E93]/10">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Easter Eggs</h3>
              <p className="text-[#8E8E93]">
                Discover special animations at ridiculous milestone numbers as you tap your way to infinity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section className="py-24 bg-white dark:bg-[#1C1C1E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 dark:text-white mb-4">
              Try It Yourself
            </h2>
            <p className="text-xl text-[#8E8E93]">
              Experience the pointlessness firsthand
            </p>
          </div>

          <div className="flex justify-center">
            <FakeAppSimulator />
          </div>
        </div>
      </section>

      {/* Screenshots Section */}
      <section className="py-24 bg-[#F2F2F7] dark:bg-[#1C1C1E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 dark:text-white mb-4">
              See It In Action
            </h2>
            <p className="text-xl text-[#8E8E93]">
              Witness the pointlessness in all its glory
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
            {/* Screenshot 1: Home */}
            <div className="relative max-w-[280px]">
              <div className="absolute top-6 left-0 right-0 z-10 px-6">
                <h3 className="text-2xl font-black text-white text-center drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                  Tap. Count. Compete.
                </h3>
              </div>
              <Image
                src="/screenshots/home.png"
                alt="Main tapping screen with global counter and 2X multiplier"
                width={280}
                height={606}
                className="rounded-3xl shadow-2xl"
              />
            </div>

            {/* Screenshot 2: Speed Challenge */}
            <div className="relative max-w-[280px]">
              <div className="absolute top-6 left-0 right-0 z-10 px-6">
                <h3 className="text-2xl font-black text-white text-center drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                  Beat Your Best Time
                </h3>
              </div>
              <Image
                src="/screenshots/speed-challenge.png"
                alt="Speed challenge mode with timer and performance metrics"
                width={280}
                height={606}
                className="rounded-3xl shadow-2xl"
              />
            </div>

            {/* Screenshot 3: Leaderboard */}
            <div className="relative max-w-[280px]">
              <div className="absolute top-6 left-0 right-0 z-10 px-6">
                <h3 className="text-2xl font-black text-white text-center drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                  Climb the Global Ranks
                </h3>
              </div>
              <Image
                src="/screenshots/leaderboard.png"
                alt="Global leaderboard with top players and rankings"
                width={280}
                height={606}
                className="rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-[#F2F2F7] dark:bg-[#1C1C1E]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 dark:text-white mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-8">
            <div className="bg-white dark:bg-[#2C2C2E] p-6 rounded-2xl border border-[#8E8E93]/10">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Why does this exist?</h3>
              <p className="text-[#8E8E93]">Why not?</p>
            </div>

            <div className="bg-white dark:bg-[#2C2C2E] p-6 rounded-2xl border border-[#8E8E93]/10">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                What&apos;s the highest tap count possible?
              </h3>
              <p className="text-[#8E8E93]">
                The limit does not exist. (Technically, UInt64.max)
              </p>
            </div>

            <div className="bg-white dark:bg-[#2C2C2E] p-6 rounded-2xl border border-[#8E8E93]/10">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Is this a social commentary on mobile gaming and microtransactions?
              </h3>
              <p className="text-[#8E8E93]">
                It&apos;s a button. You tap it. Don&apos;t overthink it.
              </p>
            </div>

            <div className="bg-white dark:bg-[#2C2C2E] p-6 rounded-2xl border border-[#8E8E93]/10">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Can I get a refund for the Remove Ads purchase?
              </h3>
              <p className="text-[#8E8E93]">
                Yes, through Apple&apos;s standard refund process. But those ads were pretty unobtrusive...
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="download" className="py-24 bg-[#2C2C2E] dark:bg-[#48484A] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-black mb-6">
            Ready to Waste Some Time?
          </h2>
          <p className="text-xl mb-10 text-[#8E8E93]">
            Join the pointless revolution and start tapping now!
          </p>
          <a
            href="https://apps.apple.com/us/app/pointless-tap/id6755431610"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-10 py-5 text-xl font-bold text-gray-900 bg-white rounded-full shadow-2xl hover:shadow-3xl transition-all duration-200 hover:scale-[0.98] cursor-pointer"
          >
            Download on App Store
          </a>
          <p className="mt-8 text-sm text-[#8E8E93]">
            iOS 17.0 or later required
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1C1C1E] text-[#8E8E93] py-12">
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
              <a href="/support" className="hover:text-white transition-colors">
                Support
              </a>
              <a href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </a>
            </div>
            <p className="text-sm mb-4">
              Made with questionable life choices
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
