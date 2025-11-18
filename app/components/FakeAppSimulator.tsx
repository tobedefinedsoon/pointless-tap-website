'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function FakeAppSimulator() {
  const [tapCount, setTapCount] = useState(0);
  const [isPressed, setIsPressed] = useState(false);

  const handleTap = () => {
    setTapCount(prev => prev + 1);
    setIsPressed(true);
    setTimeout(() => setIsPressed(false), 150);
  };

  return (
    <div className="flex flex-col items-center gap-6">
      {/* iPhone Frame */}
      <div className="relative bg-[#1C1C1E] rounded-[3.5rem] shadow-2xl p-4 w-[340px] border-8 border-[#1C1C1E]">
        {/* Dynamic Island / Notch */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-8 bg-[#1C1C1E] rounded-b-3xl z-10"></div>

        {/* Screen Content */}
        <div className="relative bg-white dark:bg-[#000000] rounded-[2.5rem] overflow-hidden h-[680px]">
          {/* Status Bar */}
          <div className="absolute top-0 left-0 right-0 h-14 bg-[#F2F2F7] dark:bg-[#1C1C1E] flex items-center justify-between px-8 pt-4 z-20">
            <span className="text-sm font-semibold text-gray-900 dark:text-white">9:41</span>
            <div className="flex gap-1">
              <div className="w-5 h-3 bg-gray-900 dark:bg-white rounded-sm"></div>
              <div className="w-5 h-3 bg-gray-900 dark:bg-white rounded-sm"></div>
              <div className="w-5 h-3 bg-gray-900 dark:bg-white rounded-sm"></div>
            </div>
          </div>

          {/* App Content */}
          <div className="h-full bg-[#F2F2F7] dark:bg-[#1C1C1E] pt-14 flex flex-col">
            {/* Header with Logo */}
            <div className="flex flex-col items-center pt-8 pb-6">
              <Image
                src="/logo/pointless-tap.png"
                alt="Pointless Button Logo"
                width={80}
                height={80}
                className="rounded-2xl shadow-lg mb-4"
              />
              <h1 className="text-2xl font-black text-gray-900 dark:text-white">
                Pointless Button
              </h1>
            </div>

            {/* Counter Display */}
            <div className="flex-1 flex flex-col items-center justify-center px-6">
              <div className="bg-white dark:bg-[#2C2C2E] rounded-3xl p-8 w-full shadow-lg mb-8">
                <div className="text-center">
                  <p className="text-sm font-semibold text-[#8E8E93] mb-2 tracking-wide">
                    YOUR TAPS
                  </p>
                  <p className="text-6xl font-black text-[#0A84FF] mb-2">
                    {tapCount.toLocaleString()}
                  </p>
                  <p className="text-xs text-[#8E8E93]">
                    (This is just you, locally!)
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
                  relative w-48 h-48 rounded-full
                  bg-gradient-to-br from-[#0A84FF] to-[#0055D4]
                  shadow-2xl
                  transition-all duration-150 ease-out
                  ${isPressed ? 'scale-95 shadow-lg' : 'scale-100 hover:scale-105'}
                  active:scale-95
                  cursor-pointer
                  group
                `}
              >
                <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-10 transition-opacity"></div>
                <div className="flex items-center justify-center h-full">
                  <span className="text-4xl font-black text-white drop-shadow-lg">
                    TAP
                  </span>
                </div>
              </button>

              <p className="text-xs text-[#8E8E93] mt-6 text-center">
                Go ahead, tap it. It does nothing but count.
              </p>
            </div>

            {/* Bottom Safe Area */}
            <div className="h-8"></div>
          </div>
        </div>
      </div>

      {/* Info Text */}
      <div className="text-center max-w-md">
        <p className="text-sm text-[#8E8E93] dark:text-[#8E8E93]">
          ✨ Try the interactive demo above! This is a fake version—your taps stay local and don&apos;t affect the real Firebase counter.
        </p>
      </div>
    </div>
  );
}
