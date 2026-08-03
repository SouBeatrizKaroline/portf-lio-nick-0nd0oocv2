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
      {(showSpeechBubble || speechText) && (
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 z-20 bg-[#181818] border border-purple-500 text-purple-300 font-mono text-[10px] px-2 py-0.5 rounded shadow-[0_0_10px_rgba(168,85,247,0.4)] whitespace-nowrap animate-bounce">
          {speechText || (hovered ? 'Hey! I build games! 🎮' : 'Dev Mode: Active ✨')}
          <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 border-4 border-transparent border-t-purple-500" />
        </div>
      )}

      <div
        className={`relative ${animated ? (pose === 'achievement' ? 'animate-bounce' : 'animate-pulse') : ''}`}
        style={{ animationDuration: pose === 'achievement' ? '1.5s' : '3s' }}
      >
        <svg
          width="128"
          height="128"
          viewBox="0 0 32 32"
          fill="none"
          className="image-rendering-pixelated drop-shadow-[0_0_12px_rgba(139,92,246,0.35)]"
        >
          <defs>
            <linearGradient id="hoodieGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#7C3AED" />
              <stop offset="100%" stopColor="#4C1D95" />
            </linearGradient>
            <linearGradient id="hairGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#3D1E58" />
              <stop offset="50%" stopColor="#2D1B3D" />
              <stop offset="100%" stopColor="#1A0E26" />
            </linearGradient>
            <linearGradient id="skinGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#F5C6A5" />
              <stop offset="100%" stopColor="#E8B898" />
            </linearGradient>
          </defs>

          {pose === 'achievement' && (
            <g
              className="animate-spin"
              style={{ transformOrigin: '16px 16px', animationDuration: '8s' }}
            >
              <rect x="15" y="1" width="2" height="2" fill="#FBBF24" opacity="0.8" />
              <rect x="28" y="14" width="2" height="2" fill="#FBBF24" opacity="0.8" />
              <rect x="1" y="15" width="2" height="2" fill="#22D3EE" opacity="0.8" />
              <rect x="14" y="28" width="2" height="2" fill="#A78BFA" opacity="0.8" />
            </g>
          )}

          {/* Hair Back */}
          <g>
            <rect x="9" y="6" width="14" height="14" fill="url(#hairGrad)" rx="3" />
            <rect x="7" y="14" width="18" height="9" fill="url(#hairGrad)" rx="2" />
            <rect x="7" y="18" width="3" height="7" fill="#2D1B3D" rx="1" />
            <rect x="22" y="18" width="3" height="7" fill="#2D1B3D" rx="1" />
            <rect x="8" y="15" width="1" height="7" fill="#A78BFA" opacity="0.6" />
            <rect x="23" y="16" width="1" height="7" fill="#22D3EE" opacity="0.5" />
          </g>

          {/* Face */}
          <g>
            <rect x="11" y="7" width="10" height="9" fill="url(#skinGrad)" rx="2" />
            <rect x="12" y="15" width="8" height="2" fill="#E8B898" rx="1" />
            <rect x="11" y="12" width="2" height="1" fill="#F43F5E" opacity="0.5" />
            <rect x="19" y="12" width="2" height="1" fill="#F43F5E" opacity="0.5" />

            {pose === 'achievement' || pose === 'gaming' ? (
              <g>
                <path d="M12 11 H14 V12 H12 Z" fill="#1E1B4B" />
                <path d="M18 11 H20 V12 H18 Z" fill="#1E1B4B" />
              </g>
            ) : (
              <g>
                <rect x="12" y="10" width="2" height="3" fill="#1E1B4B" rx="0.5" />
                <rect x="18" y="10" width="2" height="3" fill="#1E1B4B" rx="0.5" />
                <rect x="12" y="10" width="1" height="1" fill="#FFFFFF" />
                <rect x="18" y="10" width="1" height="1" fill="#FFFFFF" />
                <rect x="11" y="9" width="3" height="1" fill="#2D1B3D" rx="0.5" />
                <rect x="18" y="9" width="3" height="1" fill="#2D1B3D" rx="0.5" />
              </g>
            )}

            {pose === 'achievement' ? (
              <rect x="14" y="14" width="4" height="2" fill="#E11D48" rx="1" />
            ) : (
              <rect x="14" y="14" width="4" height="1" fill="#E11D48" rx="0.5" />
            )}
          </g>

          {/* Front Hair */}
          <g>
            <rect x="10" y="5" width="12" height="4" fill="url(#hairGrad)" rx="2" />
            <rect x="9" y="7" width="2" height="6" fill="url(#hairGrad)" rx="1" />
            <rect x="21" y="7" width="2" height="6" fill="url(#hairGrad)" rx="1" />
            <rect x="10" y="6" width="2" height="2" fill="#A78BFA" opacity="0.5" />
            <rect x="20" y="6" width="2" height="2" fill="#22D3EE" opacity="0.4" />
          </g>

          {/* Glasses */}
          {hasGlasses && (
            <g>
              <rect x="11" y="9" width="4" height="4" fill="#A855F7" rx="1" />
              <rect x="17" y="9" width="4" height="4" fill="#A855F7" rx="1" />
              <rect x="15" y="10" width="2" height="1" fill="#A855F7" />
              <rect x="12" y="10" width="1" height="1" fill="#E0F2FE" opacity="0.8" />
              <rect x="18" y="10" width="1" height="1" fill="#E0F2FE" opacity="0.8" />
            </g>
          )}

          {/* Headset */}
          {hasHeadset && (
            <g>
              <rect x="10" y="3" width="12" height="2" fill="#1E1B4B" rx="1" />
              <rect x="12" y="2" width="8" height="1" fill="#06B6D4" />
              <rect x="8" y="8" width="3" height="5" fill="#1E1B4B" rx="1" />
              <rect x="21" y="8" width="3" height="5" fill="#1E1B4B" rx="1" />
              <rect x="8" y="9" width="1" height="3" fill="#06B6D4" />
              <rect x="23" y="9" width="1" height="3" fill="#06B6D4" />
              <polygon points="9,3 11,0 12,3" fill="#06B6D4" />
              <polygon points="20,3 21,0 23,3" fill="#06B6D4" />
            </g>
          )}

          {/* Body - Idle */}
          {pose === 'idle' && (
            <g>
              <rect x="11" y="18" width="10" height="8" fill="url(#hoodieGrad)" rx="1" />
              <rect x="15" y="18" width="2" height="8" fill="#3730A3" />
              <rect x="14" y="19" width="1" height="4" fill="#22D3EE" />
              <rect x="17" y="19" width="1" height="4" fill="#22D3EE" />
              <rect x="13" y="22" width="2" height="2" fill="#22D3EE" />
              <rect x="9" y="18" width="2" height="7" fill="url(#hoodieGrad)" rx="1" />
              <rect x="21" y="18" width="2" height="7" fill="url(#hoodieGrad)" rx="1" />
              <rect x="9" y="25" width="2" height="2" fill="url(#skinGrad)" rx="0.5" />
              <rect x="21" y="25" width="2" height="2" fill="url(#skinGrad)" rx="0.5" />
              <rect x="12" y="26" width="3" height="4" fill="#1F2937" rx="0.5" />
              <rect x="17" y="26" width="3" height="4" fill="#1F2937" rx="0.5" />
              <rect x="11" y="30" width="4" height="2" fill="#22D3EE" rx="0.5" />
              <rect x="17" y="30" width="4" height="2" fill="#22D3EE" rx="0.5" />
            </g>
          )}

          {/* Body - Coding */}
          {pose === 'coding' && (
            <g>
              <rect x="11" y="18" width="10" height="7" fill="url(#hoodieGrad)" rx="1" />
              <rect x="9" y="20" width="4" height="3" fill="url(#hoodieGrad)" rx="1" />
              <rect x="19" y="20" width="4" height="3" fill="url(#hoodieGrad)" rx="1" />
              <rect x="11" y="23" width="3" height="2" fill="url(#skinGrad)" rx="0.5" />
              <rect x="18" y="23" width="3" height="2" fill="url(#skinGrad)" rx="0.5" />
              <rect x="10" y="25" width="12" height="3" fill="#1F2937" rx="1" />
              <rect x="9" y="28" width="4" height="4" fill="#22D3EE" rx="0.5" />
              <rect x="19" y="28" width="4" height="4" fill="#22D3EE" rx="0.5" />
              <rect x="8" y="24" width="16" height="6" fill="#1E293B" rx="1" />
              <rect x="9" y="25" width="14" height="4" fill="#0F172A" rx="0.5" />
              <rect x="10" y="26" width="4" height="1" fill="#22D3EE" />
              <rect x="15" y="26" width="6" height="1" fill="#A78BFA" />
              <rect x="10" y="27" width="8" height="1" fill="#4ADE80" />
              <rect x="21" y="24" width="2" height="2" fill="#22D3EE" />
              <rect x="12" y="24" width="2" height="2" fill="#EC4899" />
            </g>
          )}

          {/* Body - With Cat */}
          {pose === 'with-cat' && (
            <g>
              <rect x="9" y="18" width="10" height="8" fill="url(#hoodieGrad)" rx="1" />
              <rect x="7" y="18" width="2" height="7" fill="url(#hoodieGrad)" rx="1" />
              <rect x="6" y="24" width="3" height="2" fill="url(#skinGrad)" rx="0.5" />
              <rect x="19" y="18" width="2" height="6" fill="url(#hoodieGrad)" rx="1" />
              <rect x="19" y="24" width="2" height="2" fill="url(#skinGrad)" rx="0.5" />
              <rect x="10" y="26" width="3" height="4" fill="#1F2937" rx="0.5" />
              <rect x="15" y="26" width="3" height="4" fill="#1F2937" rx="0.5" />
              <rect x="9" y="30" width="4" height="2" fill="#22D3EE" rx="0.5" />
              <rect x="15" y="30" width="4" height="2" fill="#22D3EE" rx="0.5" />
              {/* Pixel Cat */}
              <rect x="22" y="24" width="7" height="6" fill="#181825" rx="1" />
              <rect x="21" y="20" width="6" height="5" fill="#181825" rx="1" />
              <rect x="21" y="18" width="2" height="2" fill="#181825" />
              <rect x="25" y="18" width="2" height="2" fill="#181825" />
              <rect x="22" y="22" width="1" height="1" fill="#38BDF8" />
              <rect x="25" y="22" width="1" height="1" fill="#38BDF8" />
              <rect x="28" y="22" width="2" height="6" fill="#181825" />
              <rect x="29" y="20" width="2" height="2" fill="#181825" />
              <path
                d="M24 15 H26 V17 H24 Z M23 16 H27 V17 H23 Z"
                fill="#F43F5E"
                className="animate-bounce"
              />
            </g>
          )}

          {/* Body - Gaming */}
          {pose === 'gaming' && (
            <g>
              <rect x="11" y="18" width="10" height="8" fill="url(#hoodieGrad)" rx="1" />
              <rect x="8" y="19" width="4" height="4" fill="url(#hoodieGrad)" rx="1" />
              <rect x="20" y="19" width="4" height="4" fill="url(#hoodieGrad)" rx="1" />
              <rect x="11" y="22" width="2" height="2" fill="url(#skinGrad)" rx="0.5" />
              <rect x="19" y="22" width="2" height="2" fill="url(#skinGrad)" rx="0.5" />
              <rect x="11" y="22" width="10" height="4" fill="#0F172A" rx="1" />
              <rect x="10" y="23" width="2" height="3" fill="#1E293B" rx="0.5" />
              <rect x="20" y="23" width="2" height="3" fill="#1E293B" rx="0.5" />
              <rect x="12" y="23" width="2" height="2" fill="#22D3EE" />
              <rect x="18" y="23" width="1" height="1" fill="#F43F5E" />
              <rect x="19" y="24" width="1" height="1" fill="#3B82F6" />
              <rect x="17" y="24" width="1" height="1" fill="#EAB308" />
              <rect x="12" y="26" width="3" height="4" fill="#1F2937" rx="0.5" />
              <rect x="17" y="26" width="3" height="4" fill="#1F2937" rx="0.5" />
              <rect x="11" y="30" width="4" height="2" fill="#22D3EE" rx="0.5" />
              <rect x="17" y="30" width="4" height="2" fill="#22D3EE" rx="0.5" />
            </g>
          )}

          {/* Body - Achievement */}
          {pose === 'achievement' && (
            <g>
              <rect x="11" y="18" width="10" height="8" fill="url(#hoodieGrad)" rx="1" />
              <rect x="9" y="18" width="2" height="7" fill="url(#hoodieGrad)" rx="1" />
              <rect x="9" y="25" width="2" height="2" fill="url(#skinGrad)" rx="0.5" />
              <rect x="21" y="12" width="3" height="8" fill="url(#hoodieGrad)" rx="1" />
              <rect x="22" y="10" width="2" height="3" fill="url(#skinGrad)" rx="0.5" />
              <g>
                <rect x="20" y="3" width="6" height="6" fill="#FBBF24" rx="1" />
                <rect x="22" y="1" width="2" height="10" fill="#FBBF24" />
                <rect x="18" y="5" width="10" height="2" fill="#FBBF24" />
                <rect x="22" y="5" width="2" height="2" fill="#FFFFFF" />
                <rect x="17" y="2" width="2" height="2" fill="#F59E0B" />
                <rect x="27" y="2" width="2" height="2" fill="#F59E0B" />
                <rect x="17" y="8" width="2" height="2" fill="#F59E0B" />
                <rect x="27" y="8" width="2" height="2" fill="#F59E0B" />
              </g>
              <rect x="12" y="26" width="3" height="4" fill="#1F2937" rx="0.5" />
              <rect x="17" y="26" width="3" height="4" fill="#1F2937" rx="0.5" />
              <rect x="11" y="30" width="4" height="2" fill="#22D3EE" rx="0.5" />
              <rect x="17" y="30" width="4" height="2" fill="#22D3EE" rx="0.5" />
            </g>
          )}
        </svg>
      </div>
    </div>
  )
}
