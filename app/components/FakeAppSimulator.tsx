'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function FakeAppSimulator() {
  const [tapCount, setTapCount] = useState(1245);
  const [isPressed, setIsPressed] = useState(false);

  const handleTap = () => {
    setTapCount(prev => prev + 1);
    setIsPressed(true);
    setTimeout(() => setIsPressed(false), 150);
  };

  return (
    <div className="flex flex-col items-center gap-6">
      {/* iPhone Frame - Simplified */}
      <div className="relative w-[300px] rounded-[2.5rem] shadow-2xl overflow-hidden bg-black" style={{ aspectRatio: '9/19.5' }}>
        {/* Dynamic Island */}
        <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-24 h-7 bg-black rounded-full z-30"></div>

        {/* Screen Content */}
        <div className="relative h-full bg-[#F2F2F7] dark:bg-[#000000] flex flex-col">
          {/* Status Bar */}
          <div className="flex items-center justify-between px-8 pt-4 pb-2 text-xs font-semibold text-black dark:text-white">
            <span>9:41</span>
            <div className="flex items-center gap-1">
              <svg className="w-4 h-3" viewBox="0 0 16 12" fill="currentColor">
                <rect width="4" height="6" rx="0.5" />
                <rect x="6" y="3" width="4" height="9" rx="0.5" />
                <rect x="12" y="1" width="4" height="11" rx="0.5" />
              </svg>
              <svg className="w-4 h-4" viewBox="0 0 16 16" fill="currentColor">
                <path d="M11.5 1h-7A2.5 2.5 0 0 0 2 3.5v9A2.5 2.5 0 0 0 4.5 15h7a2.5 2.5 0 0 0 2.5-2.5v-9A2.5 2.5 0 0 0 11.5 1zM13 12.5a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 3 12.5v-9A1.5 1.5 0 0 1 4.5 2h7A1.5 1.5 0 0 1 13 3.5z"/>
              </svg>
            </div>
          </div>

          {/* App Content */}
          <div className="flex-1 bg-[#F2F2F7] dark:bg-[#000000] flex flex-col px-6 pt-4 pb-6">
            {/* Header with Logo */}
            <div className="flex flex-col items-center pt-4 pb-4">
              <Image
                src="/logo/pointless-tap.png"
                alt="Pointless Button Logo"
                width={64}
                height={64}
                className="rounded-xl shadow-md mb-3"
              />
              <h1 className="text-xl font-black text-gray-900 dark:text-white tracking-tight">
                Pointless Button
              </h1>
            </div>

            {/* Counter Display */}
            <div className="flex-1 flex flex-col items-center justify-center">
              <div className="bg-white dark:bg-[#1C1C1E] rounded-2xl p-6 w-full shadow-sm mb-6">
                <div className="text-center">
                  <p className="text-xs font-semibold text-[#8E8E93] mb-1 tracking-wide uppercase">
                    Your Taps
                  </p>
                  <p className="text-5xl font-black text-[#0A84FF] mb-1">
                    {tapCount.toLocaleString()}
                  </p>
                  <p className="text-[10px] text-[#8E8E93]">
                    (Local only!)
                  </p>
                </div>
              </div>

              {/* The Button */}
              <button
                onClick={handleTap}
                onMouseDown={() => setIsPressed(true)}
                onMouseUp={() => setIsPressed(false)}
                onMouseLeave={() => setIsPressed(false)}
                onTouchStart={() => setIsPressed(true)}
                onTouchEnd={() => setIsPressed(false)}
                className={`
                  relative w-40 h-40 rounded-full
                  bg-[#0A84FF]
                  shadow-lg
                  transition-all duration-100 ease-out
                  ${isPressed ? 'scale-95 shadow-md brightness-95' : 'scale-100'}
                  active:scale-95 active:brightness-95
                  cursor-pointer
                `}
              >
                <div className="flex items-center justify-center h-full">
                  <span className="text-3xl font-black text-white select-none">
                    TAP
                  </span>
                </div>
              </button>

              <p className="text-[10px] text-[#8E8E93] mt-4 text-center px-4">
                Go ahead, tap it. It does nothing but count.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Info Text */}
      <div className="text-center max-w-md px-4">
        <p className="text-sm text-[#8E8E93]">
          ✨ Try the interactive demo! Your taps stay local and don&apos;t affect the real Firebase counter.
        </p>
      </div>
    </div>
  );
}
