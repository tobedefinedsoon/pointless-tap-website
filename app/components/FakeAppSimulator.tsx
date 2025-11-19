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
            {/* Global Counter at top */}
            <div className="flex items-center justify-center pt-3 pb-8">
              <div className="flex flex-col items-center gap-1">
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <span className="text-[10px] font-medium text-[#8E8E93] tracking-[0.15em]">GLOBAL</span>
                </div>
                <span className="text-2xl font-bold text-gray-900 dark:text-white opacity-80">
                  3.2K
                </span>
              </div>
              {/* Trophy icon in top right */}
              <div className="absolute right-6 top-12">
                <div className="w-12 h-12 rounded-full bg-[#8E8E93] bg-opacity-20 flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="#2C2C2E" className="dark:fill-white">
                    <path d="M7 3h10c.55 0 1 .45 1 1v5c0 2.76-2.24 5-5 5s-5-2.24-5-5V4c0-.55.45-1 1-1zm5 12c1.64 0 3.09-.81 4-2.05V16c0 .55-.45 1-1 1h-2v3h3c.55 0 1 .45 1 1s-.45 1-1 1H8c-.55 0-1-.45-1-1s.45-1 1-1h3v-3H9c-.55 0-1-.45-1-1v-3.05c.91 1.24 2.36 2.05 4 2.05zM6 5H4c-.55 0-1 .45-1 1v1c0 1.66 1.34 3 3 3V5zm14 0h-2v5c1.66 0 3-1.34 3-3V6c0-.55-.45-1-1-1z"/>
                  </svg>
                </div>
              </div>
            </div>

            {/* Counter Display */}
            <div className="flex-1 flex flex-col items-center justify-center">
              {/* Counter */}
              <div className="text-center mb-12">
                <p className="text-6xl font-bold text-gray-900 dark:text-white mb-2" style={{ fontVariantNumeric: 'tabular-nums' }}>
                  {tapCount.toLocaleString()}
                </p>
                <p className="text-sm font-medium text-[#8E8E93] tracking-[0.25em]">
                  TAPS
                </p>
              </div>

              {/* The Button */}
              <div className="relative">
                {/* Outer shadow/glow */}
                <div
                  className="absolute inset-0 rounded-full bg-[#2C2C2E] dark:bg-[#48484A] opacity-30 blur-2xl"
                  style={{ width: '220px', height: '220px', left: '-10px', top: '-10px' }}
                ></div>

                {/* Main Button */}
                <button
                  onClick={handleTap}
                  onMouseDown={() => setIsPressed(true)}
                  onMouseUp={() => setIsPressed(false)}
                  onMouseLeave={() => setIsPressed(false)}
                  onTouchStart={() => setIsPressed(true)}
                  onTouchEnd={() => setIsPressed(false)}
                  className={`
                    relative w-[200px] h-[200px] rounded-full
                    bg-[#2C2C2E] dark:bg-[#48484A]
                    shadow-lg
                    transition-transform duration-300 ease-out
                    ${isPressed ? 'scale-95' : 'scale-100'}
                    cursor-pointer
                    flex items-center justify-center
                  `}
                  style={{
                    boxShadow: '0 5px 10px rgba(0, 0, 0, 0.2)'
                  }}
                >
                  {/* Hand pointing icon */}
                  <svg
                    width="80"
                    height="80"
                    viewBox="0 0 24 24"
                    fill="white"
                    className="select-none"
                  >
                    <path d="M8.5 14.5v-5c0-.55.45-1 1-1s1 .45 1 1v5c0 .55-.45 1-1 1s-1-.45-1-1zm-2-1v-6c0-.55.45-1 1-1s1 .45 1 1v6c0 .55-.45 1-1 1s-1-.45-1-1zm-2-2v-4c0-.55.45-1 1-1s1 .45 1 1v4c0 .55-.45 1-1 1s-1-.45-1-1zm13.5 3.5c0 1.93-1.57 3.5-3.5 3.5h-2.17c-.53 0-1.04-.21-1.42-.59L6.59 13.59c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0l2 2V7c0-.55.45-1 1-1s1 .45 1 1v5h.5c.28 0 .5.22.5.5s-.22.5-.5.5h-.5v1h.5c.28 0 .5.22.5.5s-.22.5-.5.5h-.5v1h1.5c.28 0 .5.22.5.5s-.22.5-.5.5H12v.5c0 .28.22.5.5.5h1.5c1.38 0 2.5-1.12 2.5-2.5v-3c0-.55.45-1 1-1s1 .45 1 1v3z"/>
                  </svg>
                </button>
              </div>
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
