import { useState, useEffect } from 'react'

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
  const [blinking, setBlinking] = useState(false)

  useEffect(() => {
    if (!animated) return
    const blink = () => {
      setBlinking(true)
      setTimeout(() => setBlinking(false), 120)
    }
    const interval = setInterval(blink, 3500 + Math.random() * 2500)
    return () => clearInterval(interval)
  }, [animated])

  const speechMap: Record<NickPose, string> = {
    idle: 'Unity & C# Systems Ready ⚡',
    coding: 'Compiling State Machine... 🎮',
    'with-cat': 'Cat Companion Online! 🐈',
    gaming: 'Playtesting WebGL Build! 🕹️',
    achievement: 'Level Up! ⭐',
  }

  return (
    <div
      className={`relative inline-flex flex-col items-center select-none ${className}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ transform: `scale(${scale})` }}
    >
      {(showSpeechBubble || speechText || hovered) && (
        <div className="absolute -top-9 left-1/2 -translate-x-1/2 z-30 bg-[#12121A] border border-cyan-400/70 text-cyan-300 font-mono text-[10px] px-3 py-1 whitespace-nowrap max-w-[90vw] overflow-hidden animate-fade-in pointer-events-none">
          <span className="text-purple-400 font-bold mr-1">[NICK]:</span>
          {speechText || speechMap[pose]}
          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 border-4 border-transparent border-t-cyan-400/70" />
        </div>
      )}

      <div
        className={animated ? 'character-breathe' : ''}
        style={{ transformOrigin: 'center bottom' }}
      >
        <svg
          width="160"
          height="160"
          viewBox="0 0 40 40"
          fill="none"
          className="image-rendering-pixelated drop-shadow-[0_0_12px_rgba(0,240,255,0.3)]"
        >
          <defs>
            <linearGradient id="nickHoodie" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#7C3AED" />
              <stop offset="100%" stopColor="#4C1D95" />
            </linearGradient>
            <linearGradient id="nickHair" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#2D1B4E" />
              <stop offset="100%" stopColor="#150A21" />
            </linearGradient>
            <linearGradient id="nickSkin" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#F5C6A5" />
              <stop offset="100%" stopColor="#E2B292" />
            </linearGradient>
          </defs>

          {pose === 'achievement' && (
            <g className="animate-pulse">
              <circle cx="31" cy="5" r="1" fill="#FBBF24" />
              <circle cx="35" cy="11" r="0.8" fill="#00F0FF" />
              <circle cx="24" cy="8" r="0.8" fill="#A855F7" />
            </g>
          )}

          <rect x="11" y="7" width="18" height="17" fill="url(#nickHair)" rx="4" />
          <rect x="9" y="14" width="22" height="11" fill="url(#nickHair)" rx="3" />
          <rect x="8" y="19" width="4" height="9" fill="#150A21" rx="2" />
          <rect x="28" y="19" width="4" height="9" fill="#150A21" rx="2" />

          <rect x="14" y="9" width="12" height="11" fill="url(#nickSkin)" rx="3" />
          <rect x="15" y="18" width="10" height="2" fill="#E2B292" rx="1" />
          <rect x="15" y="15" width="1.5" height="1" fill="#F43F5E" opacity="0.35" />
          <rect x="23.5" y="15" width="1.5" height="1" fill="#F43F5E" opacity="0.35" />

          {blinking ? (
            <g>
              <rect x="16" y="14.5" width="2.5" height="0.5" fill="#1E1B4B" />
              <rect x="21.5" y="14.5" width="2.5" height="0.5" fill="#1E1B4B" />
            </g>
          ) : (
            <g>
              <rect x="16" y="13" width="2.5" height="3" fill="#1E1B4B" rx="0.5" />
              <rect x="21.5" y="13" width="2.5" height="3" fill="#1E1B4B" rx="0.5" />
              <rect x="16.5" y="13" width="0.8" height="0.8" fill="#00F0FF" />
              <rect x="22" y="13" width="0.8" height="0.8" fill="#00F0FF" />
            </g>
          )}

          <path
            d="M18 17.5 Q20 18.3 22 17.5"
            stroke="#E11D48"
            strokeWidth="0.5"
            fill="none"
            strokeLinecap="round"
          />

          <rect x="12" y="6" width="16" height="5" fill="url(#nickHair)" rx="2" />
          <rect x="11" y="9" width="3" height="6" fill="url(#nickHair)" rx="1" />
          <rect x="26" y="9" width="3" height="6" fill="url(#nickHair)" rx="1" />
          <rect x="14" y="7" width="1.5" height="2" fill="#6B21A8" opacity="0.6" />
          <rect x="25" y="7" width="1.5" height="2" fill="#00F0FF" opacity="0.4" />

          {hasGlasses && (
            <g>
              <rect
                x="14.5"
                y="12"
                width="5"
                height="4"
                fill="none"
                stroke="#A855F7"
                strokeWidth="0.5"
                rx="1"
              />
              <rect
                x="20.5"
                y="12"
                width="5"
                height="4"
                fill="none"
                stroke="#A855F7"
                strokeWidth="0.5"
                rx="1"
              />
              <rect x="19.5" y="13" width="1" height="0.5" fill="#A855F7" />
            </g>
          )}

          {hasHeadset && (
            <g>
              <rect x="13" y="4" width="14" height="2" fill="#1E1B4B" rx="1" />
              <rect x="15" y="3" width="10" height="0.5" fill="#00F0FF" opacity="0.7" />
              <rect x="10" y="11" width="3" height="5" fill="#1E1B4B" rx="1" />
              <rect x="27" y="11" width="3" height="5" fill="#1E1B4B" rx="1" />
            </g>
          )}

          {pose === 'idle' && (
            <g>
              <rect x="14" y="20" width="12" height="11" fill="url(#nickHoodie)" rx="2" />
              <rect x="19" y="20" width="2" height="11" fill="#3730A3" opacity="0.6" />
              <rect x="17" y="22" width="6" height="2.5" fill="#1E1B4B" rx="0.5" />
              <rect x="18" y="23" width="1" height="0.5" fill="#00F0FF" />
              <rect x="21" y="23" width="1" height="0.5" fill="#F43F5E" />
              <rect x="11" y="21" width="3" height="8" fill="url(#nickHoodie)" rx="1" />
              <rect x="11" y="29" width="3" height="2.5" fill="url(#nickSkin)" rx="1" />
              <rect x="26" y="17" width="3" height="7" fill="url(#nickHoodie)" rx="1" />
              <rect x="26" y="14" width="3" height="3" fill="url(#nickSkin)" rx="1" />
              <rect x="15" y="31" width="4" height="6" fill="#1F2937" rx="1" />
              <rect x="21" y="31" width="4" height="6" fill="#1F2937" rx="1" />
              <rect x="14" y="37" width="5" height="2.5" fill="#7C3AED" rx="1" />
              <rect x="21" y="37" width="5" height="2.5" fill="#00F0FF" rx="1" />
            </g>
          )}

          {pose === 'coding' && (
            <g>
              <rect x="14" y="20" width="12" height="9" fill="url(#nickHoodie)" rx="2" />
              <rect x="11" y="22" width="4" height="5" fill="url(#nickHoodie)" rx="1" />
              <rect x="25" y="22" width="4" height="5" fill="url(#nickHoodie)" rx="1" />
              <rect x="13" y="27" width="3" height="2.5" fill="url(#nickSkin)" rx="1" />
              <rect x="24" y="27" width="3" height="2.5" fill="url(#nickSkin)" rx="1" />
              <rect x="9" y="29" width="22" height="8" fill="#12121C" rx="1.5" />
              <rect x="11" y="30" width="18" height="5" fill="#0D0D14" rx="0.5" />
              <rect x="13" y="31" width="5" height="0.5" fill="#00F0FF" />
              <rect x="13" y="32.5" width="9" height="0.5" fill="#A855F7" />
              <rect x="13" y="33.5" width="7" height="0.5" fill="#10B981" />
              <rect x="7" y="36.5" width="26" height="1.5" fill="#2A2A35" rx="0.5" />
            </g>
          )}

          {pose === 'with-cat' && (
            <g>
              <rect x="11" y="20" width="12" height="11" fill="url(#nickHoodie)" rx="2" />
              <rect x="16" y="20" width="2" height="11" fill="#3730A3" opacity="0.6" />
              <rect x="8" y="21" width="3" height="8" fill="url(#nickHoodie)" rx="1" />
              <rect x="8" y="29" width="3" height="2.5" fill="url(#nickSkin)" rx="1" />
              <rect x="23" y="21" width="3" height="7" fill="url(#nickHoodie)" rx="1" />
              <rect x="23" y="28" width="3" height="2.5" fill="url(#nickSkin)" rx="1" />
              <rect x="12" y="31" width="4" height="6" fill="#1F2937" rx="1" />
              <rect x="18" y="31" width="4" height="6" fill="#1F2937" rx="1" />
              <rect x="11" y="37" width="5" height="2.5" fill="#7C3AED" rx="1" />
              <rect x="18" y="37" width="5" height="2.5" fill="#00F0FF" rx="1" />
              <g className="animate-pulse" style={{ animationDuration: '4s' }}>
                <rect x="27" y="28" width="9" height="8" fill="#12121A" rx="2" />
                <rect x="26" y="23" width="8" height="7" fill="#12121A" rx="2" />
                <polygon points="26,23 28,19 29,23" fill="#12121A" />
                <polygon points="31,23 33,19 34,23" fill="#12121A" />
                <rect x="27" y="25" width="2" height="2" fill="#00F0FF" />
                <rect x="31" y="25" width="2" height="2" fill="#00F0FF" />
                <rect x="30" y="17" width="3" height="3" fill="#F43F5E" rx="0.5" />
              </g>
            </g>
          )}

          {pose === 'gaming' && (
            <g>
              <rect x="14" y="20" width="12" height="10" fill="url(#nickHoodie)" rx="2" />
              <rect x="10" y="21" width="4" height="6" fill="url(#nickHoodie)" rx="1" />
              <rect x="26" y="21" width="4" height="6" fill="url(#nickHoodie)" rx="1" />
              <rect x="12" y="26" width="3" height="2.5" fill="url(#nickSkin)" rx="1" />
              <rect x="25" y="26" width="3" height="2.5" fill="url(#nickSkin)" rx="1" />
              <rect x="12" y="28" width="16" height="4" fill="#12121C" rx="1.5" />
              <rect x="14" y="29" width="2" height="1.5" fill="#00F0FF" />
              <rect x="22" y="29" width="2" height="1.5" fill="#F43F5E" />
              <rect x="14" y="30" width="4" height="6" fill="#1F2937" rx="1" />
              <rect x="22" y="30" width="4" height="6" fill="#1F2937" rx="1" />
              <rect x="13" y="36" width="5" height="2.5" fill="#7C3AED" rx="1" />
              <rect x="22" y="36" width="5" height="2.5" fill="#00F0FF" rx="1" />
            </g>
          )}

          {pose === 'achievement' && (
            <g>
              <rect x="14" y="20" width="12" height="11" fill="url(#nickHoodie)" rx="2" />
              <rect x="10" y="20" width="3" height="8" fill="url(#nickHoodie)" rx="1" />
              <rect x="10" y="28" width="3" height="2.5" fill="url(#nickSkin)" rx="1" />
              <rect x="26" y="12" width="3" height="11" fill="url(#nickHoodie)" rx="1" />
              <rect x="26" y="9" width="3" height="3" fill="url(#nickSkin)" rx="1" />
              <rect x="27.5" y="2" width="1" height="8" fill="#F59E0B" />
              <polygon
                points="28,0 30,3 33,3.5 30.5,6 31.5,9 28,7.5 24.5,9 25.5,6 23,3.5 26,3"
                fill="#FBBF24"
              />
              <rect x="15" y="31" width="4" height="6" fill="#1F2937" rx="1" />
              <rect x="21" y="31" width="4" height="6" fill="#1F2937" rx="1" />
              <rect x="14" y="37" width="5" height="2.5" fill="#7C3AED" rx="1" />
              <rect x="21" y="37" width="5" height="2.5" fill="#00F0FF" rx="1" />
            </g>
          )}
        </svg>
      </div>
    </div>
  )
}
