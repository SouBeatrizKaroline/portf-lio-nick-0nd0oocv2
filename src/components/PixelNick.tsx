import { useState } from 'react'

export type NickPose = 'idle' | 'coding' | 'with-cat' | 'gaming' | 'achievement'

interface PixelNickProps {
  pose?: NickPose
  hasGlasses?: boolean
  hasHeadset?: boolean
  className?: string
  animated?: boolean
  scale?: number
  showSpeechBubble?: boolean
  speechText?: string
}

export function PixelNick({
  pose = 'idle',
  hasGlasses = true,
  hasHeadset = true,
  className = '',
  animated = true,
  scale = 1,
  showSpeechBubble = false,
  speechText,
}: PixelNickProps) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className={`relative inline-flex flex-col items-center justify-center select-none ${className}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ transform: `scale(${scale})` }}
    >
      {(showSpeechBubble || speechText || hovered) && (
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 z-30 bg-[#141418] border border-purple-500 text-purple-300 font-mono text-[10px] px-2.5 py-1 rounded-sm shadow-[0_0_12px_rgba(168,85,247,0.5)] whitespace-nowrap animate-bounce pointer-events-none">
          {speechText ||
            (pose === 'idle'
              ? 'Hello! I build games in Unity & C#! 🎮'
              : pose === 'coding'
                ? 'Compiling C# Gameplay Systems... ⚡'
                : pose === 'with-cat'
                  ? 'Meow! Pixel cat approved! 🐈‍⬛'
                  : pose === 'gaming'
                    ? 'Playtesting latest build! 🕹️'
                    : 'Achievement Unlocked! ⭐')}
          <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 border-4 border-transparent border-t-purple-500" />
        </div>
      )}

      <div
        className={`relative ${animated ? (pose === 'achievement' ? 'animate-bounce' : 'animate-pulse') : ''}`}
        style={{ animationDuration: pose === 'achievement' ? '1.5s' : '3s' }}
      >
        <svg
          width="160"
          height="160"
          viewBox="0 0 40 40"
          fill="none"
          className="image-rendering-pixelated drop-shadow-[0_0_15px_rgba(168,85,247,0.4)]"
        >
          <defs>
            <linearGradient id="hoodieGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#7C3AED" />
              <stop offset="100%" stopColor="#4C1D95" />
            </linearGradient>
            <linearGradient id="hairGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#3D1E58" />
              <stop offset="50%" stopColor="#251238" />
              <stop offset="100%" stopColor="#150A21" />
            </linearGradient>
            <linearGradient id="skinGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#F5C6A5" />
              <stop offset="100%" stopColor="#E2B292" />
            </linearGradient>
          </defs>

          {/* Sparkles / Background for Achievement Pose */}
          {pose === 'achievement' && (
            <g className="animate-pulse">
              <circle cx="28" cy="6" r="1.5" fill="#FBBF24" />
              <circle cx="34" cy="12" r="1" fill="#00F0FF" />
              <circle cx="22" cy="10" r="1" fill="#A855F7" />
              <circle cx="32" cy="4" r="1" fill="#F43F5E" />
            </g>
          )}

          {/* Hair Back (Volume & Wavy Curly Texture) */}
          <g>
            <rect x="11" y="7" width="18" height="18" fill="url(#hairGrad)" rx="4" />
            <rect x="9" y="14" width="22" height="12" fill="url(#hairGrad)" rx="3" />
            <rect x="8" y="19" width="5" height="10" fill="#251238" rx="2" />
            <rect x="27" y="19" width="5" height="10" fill="#251238" rx="2" />
            <rect x="10" y="18" width="2" height="10" fill="#A855F7" opacity="0.7" />
            <rect x="28" y="20" width="2" height="9" fill="#00F0FF" opacity="0.6" />
          </g>

          {/* Face Base */}
          <g>
            <rect x="14" y="9" width="12" height="11" fill="url(#skinGrad)" rx="3" />
            <rect x="15" y="18" width="10" height="3" fill="#E2B292" rx="1" />
            {/* Blushing */}
            <rect x="14" y="15" width="2" height="1" fill="#F43F5E" opacity="0.5" />
            <rect x="24" y="15" width="2" height="1" fill="#F43F5E" opacity="0.5" />

            {/* Eyes */}
            <rect x="16" y="13" width="2" height="3" fill="#1E1B4B" rx="0.5" />
            <rect x="22" y="13" width="2" height="3" fill="#1E1B4B" rx="0.5" />
            <rect x="16" y="13" width="1" height="1" fill="#EDEDED" />
            <rect x="22" y="13" width="1" height="1" fill="#EDEDED" />

            {/* Smile / Mouth */}
            <rect x="18" y="17" width="4" height="1" fill="#E11D48" rx="0.5" />
          </g>

          {/* Front Bangs & Curly Highlights */}
          <g>
            <rect x="12" y="6" width="16" height="5" fill="url(#hairGrad)" rx="2" />
            <rect x="11" y="9" width="3" height="8" fill="url(#hairGrad)" rx="1" />
            <rect x="26" y="9" width="3" height="8" fill="url(#hairGrad)" rx="1" />
            <rect x="12" y="8" width="2" height="3" fill="#A855F7" opacity="0.6" />
            <rect x="25" y="8" width="2" height="3" fill="#00F0FF" opacity="0.5" />
          </g>

          {/* Glasses Frame */}
          {hasGlasses && (
            <g>
              <rect x="14" y="12" width="5" height="5" fill="#A855F7" rx="1" />
              <rect x="21" y="12" width="5" height="5" fill="#A855F7" rx="1" />
              <rect x="19" y="13" width="2" height="1" fill="#A855F7" />
              <rect x="15" y="13" width="1" height="1" fill="#E0F2FE" opacity="0.9" />
              <rect x="22" y="13" width="1" height="1" fill="#E0F2FE" opacity="0.9" />
            </g>
          )}

          {/* Gaming Headset */}
          {hasHeadset && (
            <g>
              <rect x="13" y="4" width="14" height="3" fill="#1E1B4B" rx="1" />
              <rect x="15" y="3" width="10" height="1" fill="#00F0FF" />
              <rect x="10" y="11" width="4" height="6" fill="#1E1B4B" rx="1" />
              <rect x="26" y="11" width="4" height="6" fill="#1E1B4B" rx="1" />
              <rect x="10" y="12" width="1" height="4" fill="#00F0FF" />
              <rect x="29" y="12" width="1" height="4" fill="#00F0FF" />
            </g>
          )}

          {/* Pose 1: Idle / Neutral (Waving) */}
          {pose === 'idle' && (
            <g>
              {/* Torso Hoodie */}
              <rect x="14" y="21" width="12" height="11" fill="url(#hoodieGrad)" rx="2" />
              <rect x="19" y="21" width="2" height="11" fill="#3730A3" />
              {/* Controller Emblem on Chest */}
              <rect x="17" y="23" width="6" height="3" fill="#1E1B4B" rx="0.5" />
              <rect x="18" y="24" width="1" height="1" fill="#00F0FF" />
              <rect x="21" y="24" width="1" height="1" fill="#F43F5E" />

              {/* Left Arm (Side) */}
              <rect x="11" y="21" width="3" height="9" fill="url(#hoodieGrad)" rx="1" />
              <rect x="11" y="30" width="3" height="3" fill="url(#skinGrad)" rx="1" />

              {/* Right Arm (Waving) */}
              <rect x="26" y="17" width="3" height="8" fill="url(#hoodieGrad)" rx="1" />
              <rect x="26" y="14" width="3" height="3" fill="url(#skinGrad)" rx="1" />

              {/* Pants & Sneakers */}
              <rect x="15" y="32" width="4" height="5" fill="#1F2937" rx="1" />
              <rect x="21" y="32" width="4" height="5" fill="#1F2937" rx="1" />
              <rect x="14" y="37" width="5" height="3" fill="#7C3AED" rx="1" />
              <rect x="21" y="37" width="5" height="3" fill="#00F0FF" rx="1" />
            </g>
          )}

          {/* Pose 2: Programming (Focused at Desk) */}
          {pose === 'coding' && (
            <g>
              {/* Sitting Torso */}
              <rect x="14" y="21" width="12" height="9" fill="url(#hoodieGrad)" rx="2" />
              <rect x="11" y="23" width="4" height="5" fill="url(#hoodieGrad)" rx="1" />
              <rect x="25" y="23" width="4" height="5" fill="url(#hoodieGrad)" rx="1" />
              <rect x="13" y="28" width="3" height="3" fill="url(#skinGrad)" rx="1" />
              <rect x="24" y="28" width="3" height="3" fill="url(#skinGrad)" rx="1" />

              {/* Dark Laptop with Purple Flame Logo */}
              <rect x="10" y="29" width="20" height="9" fill="#181820" rx="1.5" />
              <rect x="12" y="30" width="16" height="6" fill="#0D0D14" rx="0.5" />
              {/* Code lines */}
              <rect x="14" y="31" width="6" height="1" fill="#00F0FF" />
              <rect x="14" y="33" width="10" height="1" fill="#A855F7" />
              <rect x="14" y="34" width="8" height="1" fill="#10B981" />
              {/* Keyboard base */}
              <rect x="8" y="37" width="24" height="2" fill="#2A2A35" rx="0.5" />

              {/* Legs sitting */}
              <rect x="15" y="30" width="10" height="5" fill="#1F2937" rx="1" />
            </g>
          )}

          {/* Pose 3: With Cat (Pixel Mascot) */}
          {pose === 'with-cat' && (
            <g>
              {/* Developer Standing */}
              <rect x="11" y="21" width="12" height="11" fill="url(#hoodieGrad)" rx="2" />
              <rect x="16" y="21" width="2" height="11" fill="#3730A3" />
              <rect x="8" y="21" width="3" height="9" fill="url(#hoodieGrad)" rx="1" />
              <rect x="8" y="30" width="3" height="3" fill="url(#skinGrad)" rx="1" />
              <rect x="23" y="21" width="3" height="8" fill="url(#hoodieGrad)" rx="1" />
              <rect x="23" y="29" width="3" height="3" fill="url(#skinGrad)" rx="1" />

              <rect x="12" y="32" width="4" height="5" fill="#1F2937" rx="1" />
              <rect x="18" y="32" width="4" height="5" fill="#1F2937" rx="1" />
              <rect x="11" y="37" width="5" height="3" fill="#7C3AED" rx="1" />
              <rect x="18" y="37" width="5" height="3" fill="#00F0FF" rx="1" />

              {/* Black Pixel Cat Mascot */}
              <g className="animate-pulse" style={{ animationDuration: '4s' }}>
                <rect x="27" y="28" width="9" height="8" fill="#12121A" rx="2" />
                <rect x="26" y="23" width="8" height="7" fill="#12121A" rx="2" />
                {/* Cat ears */}
                <polygon points="26,23 28,19 29,23" fill="#12121A" />
                <polygon points="31,23 33,19 34,23" fill="#12121A" />
                {/* Cat eyes (Glowing Gold) */}
                <rect x="27" y="25" width="2" height="2" fill="#FBBF24" />
                <rect x="31" y="25" width="2" height="2" fill="#FBBF24" />
                {/* Cat tail */}
                <path d="M36 30 Q39 28 38 23" stroke="#12121A" strokeWidth="2" fill="none" />
                {/* Heart emote */}
                <rect x="30" y="17" width="3" height="3" fill="#F43F5E" rx="0.5" />
              </g>
            </g>
          )}

          {/* Pose 4: Gaming (Happy with Controller) */}
          {pose === 'gaming' && (
            <g>
              {/* Torso */}
              <rect x="14" y="21" width="12" height="10" fill="url(#hoodieGrad)" rx="2" />
              <rect x="10" y="22" width="4" height="6" fill="url(#hoodieGrad)" rx="1" />
              <rect x="26" y="22" width="4" height="6" fill="url(#hoodieGrad)" rx="1" />
              <rect x="12" y="27" width="3" height="3" fill="url(#skinGrad)" rx="1" />
              <rect x="25" y="27" width="3" height="3" fill="url(#skinGrad)" rx="1" />

              {/* Game Controller */}
              <rect x="13" y="27" width="14" height="5" fill="#12121C" rx="1.5" />
              <rect x="15" y="28" width="2" height="2" fill="#00F0FF" />
              <rect x="23" y="28" width="2" height="2" fill="#F43F5E" />
              <rect x="21" y="29" width="1.5" height="1.5" fill="#FBBF24" />

              {/* Legs seated */}
              <rect x="14" y="31" width="5" height="6" fill="#1F2937" rx="1" />
              <rect x="21" y="31" width="5" height="6" fill="#1F2937" rx="1" />
              <rect x="13" y="37" width="6" height="3" fill="#7C3AED" rx="1" />
              <rect x="21" y="37" width="6" height="3" fill="#00F0FF" rx="1" />
            </g>
          )}

          {/* Pose 5: Achievement (Holding Star Wand) */}
          {pose === 'achievement' && (
            <g>
              {/* Torso */}
              <rect x="14" y="21" width="12" height="11" fill="url(#hoodieGrad)" rx="2" />
              <rect x="10" y="21" width="3" height="9" fill="url(#hoodieGrad)" rx="1" />
              <rect x="10" y="30" width="3" height="3" fill="url(#skinGrad)" rx="1" />

              {/* Right Arm Raised Holding Star */}
              <rect x="26" y="12" width="3" height="12" fill="url(#hoodieGrad)" rx="1" />
              <rect x="26" y="9" width="3" height="3" fill="url(#skinGrad)" rx="1" />

              {/* Star Wand */}
              <rect x="27" y="2" width="1.5" height="9" fill="#F59E0B" />
              <polygon
                points="27.75,0 30,3 33,3.5 30.5,6 31.5,9 27.75,7.5 24,9 25,6 22.5,3.5 25.5,3"
                fill="#FBBF24"
              />

              {/* Legs */}
              <rect x="15" y="32" width="4" height="5" fill="#1F2937" rx="1" />
              <rect x="21" y="32" width="4" height="5" fill="#1F2937" rx="1" />
              <rect x="14" y="37" width="5" height="3" fill="#7C3AED" rx="1" />
              <rect x="21" y="37" width="5" height="3" fill="#00F0FF" rx="1" />
            </g>
          )}
        </svg>
      </div>
    </div>
  )
}
