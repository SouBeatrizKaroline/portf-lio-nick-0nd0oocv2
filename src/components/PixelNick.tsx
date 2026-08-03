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

  // Color Palette Constants
  const SKIN = '#F5C6A5'
  const SKIN_SHADOW = '#D99B7F'
  const HAIR_DARK = '#261438'
  const HAIR_MID = '#3D1E58'
  const HAIR_HIGHLIGHT_PURPLE = '#A78BFA'
  const HAIR_HIGHLIGHT_CYAN = '#22D3EE'
  const EYE_COLOR = '#1E1B4B'
  const LIP_COLOR = '#E11D48'
  const HOODIE_BASE = '#5B21B6'
  const HOODIE_SHADOW = '#3730A3'
  const HOODIE_LIGHT = '#7C3AED'
  const HOODIE_ACCENT = '#22D3EE'
  const GLASSES_FRAME = '#A855F7'
  const GLASSES_SHINE = '#E0F2FE'
  const HEADSET_BASE = '#1E1B4B'
  const HEADSET_LIGHT = '#06B6D4'
  const PANTS = '#1F2937'
  const SHOES = '#22D3EE'
  const CAT_DARK = '#181825'
  const CAT_EYE = '#38BDF8'
  const STAR_GOLD = '#FBBF24'
  const STAR_GLOW = '#F59E0B'

  return (
    <div
      className={`relative inline-flex flex-col items-center justify-center select-none ${className}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ transform: `scale(${scale})` }}
    >
      {/* Optional Speech Bubble */}
      {(showSpeechBubble || speechText) && (
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 z-20 bg-[#181818] border border-purple-500 text-purple-300 font-mono text-[10px] px-2 py-0.5 rounded shadow-[0_0_10px_rgba(168,85,247,0.4)] whitespace-nowrap animate-bounce">
          {speechText || (hovered ? 'Hey! I build games! 🎮' : 'Dev Mode: Active ✨')}
          <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 border-4 border-transparent border-t-purple-500" />
        </div>
      )}

      {/* SVG Pixel Character Container */}
      <div
        className={`relative ${
          animated ? (pose === 'achievement' ? 'animate-bounce' : 'animate-pulse') : ''
        }`}
        style={{ animationDuration: pose === 'achievement' ? '1.5s' : '3s' }}
      >
        <svg
          width="128"
          height="128"
          viewBox="0 0 32 32"
          fill="none"
          className="image-rendering-pixelated drop-shadow-[0_0_12px_rgba(139,92,246,0.35)]"
        >
          {/* Background Ambient Aura for Achievement / Gaming */}
          {pose === 'achievement' && (
            <g
              className="animate-spin"
              style={{ transformOrigin: '16px 16px', animationDuration: '8s' }}
            >
              <rect x="15" y="1" width="2" height="2" fill={STAR_GOLD} opacity="0.8" />
              <rect x="28" y="14" width="2" height="2" fill={STAR_GOLD} opacity="0.8" />
              <rect x="1" y="15" width="2" height="2" fill={HAIR_HIGHLIGHT_CYAN} opacity="0.8" />
              <rect x="14" y="28" width="2" height="2" fill={HAIR_HIGHLIGHT_PURPLE} opacity="0.8" />
              <rect x="24" y="6" width="1" height="1" fill="#FFF" />
              <rect x="6" y="24" width="1" height="1" fill="#FFF" />
            </g>
          )}

          {/* ============================================================ */}
          {/* COMMON BASE: LONG WAVY HAIR (BACK LAYER)                     */}
          {/* ============================================================ */}
          <g id="hair-back">
            <rect x="10" y="5" width="12" height="12" fill={HAIR_DARK} />
            <rect x="9" y="7" width="14" height="11" fill={HAIR_MID} />
            <rect x="8" y="10" width="16" height="9" fill={HAIR_DARK} />
            <rect x="7" y="13" width="18" height="7" fill={HAIR_MID} />
            {/* Wavy Strands on shoulders */}
            <rect x="7" y="17" width="3" height="6" fill={HAIR_DARK} />
            <rect x="22" y="17" width="3" height="6" fill={HAIR_DARK} />
            <rect x="6" y="20" width="3" height="5" fill={HAIR_MID} />
            <rect x="23" y="20" width="3" height="5" fill={HAIR_MID} />
            {/* Purple & Cyan Neon Highlights */}
            <rect x="8" y="15" width="1" height="6" fill={HAIR_HIGHLIGHT_PURPLE} />
            <rect x="23" y="16" width="1" height="6" fill={HAIR_HIGHLIGHT_CYAN} />
            <rect x="24" y="19" width="1" height="4" fill={HAIR_HIGHLIGHT_PURPLE} />
          </g>

          {/* ============================================================ */}
          {/* HEAD & FACE                                                  */}
          {/* ============================================================ */}
          <g id="head">
            {/* Skin Face Base */}
            <rect x="11" y="7" width="10" height="8" fill={SKIN} />
            <rect x="12" y="15" width="8" height="2" fill={SKIN} />
            <rect x="13" y="17" width="6" height="1" fill={SKIN_SHADOW} />

            {/* Cheeks blush */}
            <rect x="11" y="12" width="2" height="1" fill="#F43F5E" opacity="0.6" />
            <rect x="19" y="12" width="2" height="1" fill="#F43F5E" opacity="0.6" />

            {/* Eyes */}
            {pose === 'achievement' || pose === 'gaming' ? (
              // Happy Arc Eyes ^_^
              <g>
                <path d="M12 11 H14 V12 H12 Z" fill={EYE_COLOR} />
                <path d="M18 11 H20 V12 H18 Z" fill={EYE_COLOR} />
                <rect x="13" y="10" width="1" height="1" fill={EYE_COLOR} />
                <rect x="19" y="10" width="1" height="1" fill={EYE_COLOR} />
              </g>
            ) : (
              // Expressive Big Eyes
              <g>
                <rect x="12" y="10" width="2" height="3" fill={EYE_COLOR} />
                <rect x="18" y="10" width="2" height="3" fill={EYE_COLOR} />
                <rect x="12" y="10" width="1" height="1" fill="#FFFFFF" />
                <rect x="18" y="10" width="1" height="1" fill="#FFFFFF" />
                {/* Eyelashes / Feminine touch */}
                <rect x="11" y="9" width="3" height="1" fill={HAIR_DARK} />
                <rect x="18" y="9" width="3" height="1" fill={HAIR_DARK} />
              </g>
            )}

            {/* Mouth */}
            {pose === 'achievement' ? (
              <rect x="14" y="14" width="4" height="2" fill={LIP_COLOR} />
            ) : (
              <rect x="14" y="14" width="4" height="1" fill={LIP_COLOR} />
            )}
          </g>

          {/* ============================================================ */}
          {/* FRONT HAIR & BANGS                                           */}
          {/* ============================================================ */}
          <g id="hair-front">
            <rect x="10" y="5" width="12" height="3" fill={HAIR_MID} />
            <rect x="11" y="4" width="10" height="2" fill={HAIR_DARK} />
            {/* Side bangs framing face */}
            <rect x="9" y="7" width="2" height="6" fill={HAIR_MID} />
            <rect x="21" y="7" width="2" height="6" fill={HAIR_MID} />
            <rect x="10" y="6" width="2" height="2" fill={HAIR_HIGHLIGHT_PURPLE} />
            <rect x="20" y="6" width="2" height="2" fill={HAIR_HIGHLIGHT_CYAN} />
          </g>

          {/* ============================================================ */}
          {/* ACCESSORY: GLASSES (OPTIONAL)                                */}
          {/* ============================================================ */}
          {hasGlasses && (
            <g id="glasses">
              {/* Left Lens Frame */}
              <rect x="11" y="9" width="4" height="4" fill={GLASSES_FRAME} />
              <rect x="12" y="10" width="2" height="2" fill="none" />
              {/* Right Lens Frame */}
              <rect x="17" y="9" width="4" height="4" fill={GLASSES_FRAME} />
              <rect x="18" y="10" width="2" height="2" fill="none" />
              {/* Bridge */}
              <rect x="15" y="10" width="2" height="1" fill={GLASSES_FRAME} />
              {/* Lens Glint */}
              <rect x="12" y="10" width="1" height="1" fill={GLASSES_SHINE} opacity="0.8" />
              <rect x="18" y="10" width="1" height="1" fill={GLASSES_SHINE} opacity="0.8" />
            </g>
          )}

          {/* ============================================================ */}
          {/* ACCESSORY: HEADSET (OPTIONAL)                                */}
          {/* ============================================================ */}
          {hasHeadset && (
            <g id="headset">
              {/* Top Band */}
              <rect x="10" y="3" width="12" height="2" fill={HEADSET_BASE} />
              <rect x="12" y="2" width="8" height="1" fill={HEADSET_LIGHT} />
              {/* Ear Cups */}
              <rect x="8" y="8" width="3" height="5" fill={HEADSET_BASE} />
              <rect x="21" y="8" width="3" height="5" fill={HEADSET_BASE} />
              {/* Glowing Accents */}
              <rect x="8" y="9" width="1" height="3" fill={HEADSET_LIGHT} />
              <rect x="23" y="9" width="1" height="3" fill={HEADSET_LIGHT} />
              {/* Cute Cat Ear Headset details */}
              <polygon points="9,3 11,0 12,3" fill={HEADSET_LIGHT} />
              <polygon points="20,3 21,0 23,3" fill={HEADSET_LIGHT} />
            </g>
          )}

          {/* ============================================================ */}
          {/* BODY & CLOTHING ACCORDING TO POSE                            */}
          {/* ============================================================ */}

          {/* 1. POSE: IDLE (Neutral / Standing Gamer Dev) */}
          {pose === 'idle' && (
            <g id="body-idle">
              {/* Torso - Purple Hoodie */}
              <rect x="11" y="18" width="10" height="8" fill={HOODIE_BASE} />
              <rect x="12" y="18" width="8" height="7" fill={HOODIE_LIGHT} />
              {/* Zipper & Strings */}
              <rect x="15" y="18" width="2" height="8" fill={HOODIE_SHADOW} />
              <rect x="14" y="19" width="1" height="4" fill={HOODIE_ACCENT} />
              <rect x="17" y="19" width="1" height="4" fill={HOODIE_ACCENT} />
              {/* Game Dev Logo on Hoodie (C# / Gamepad) */}
              <rect x="13" y="22" width="2" height="2" fill={HOODIE_ACCENT} />

              {/* Arms - Relaxed at sides */}
              <rect x="9" y="18" width="2" height="7" fill={HOODIE_BASE} />
              <rect x="21" y="18" width="2" height="7" fill={HOODIE_BASE} />
              {/* Hands */}
              <rect x="9" y="25" width="2" height="2" fill={SKIN} />
              <rect x="21" y="25" width="2" height="2" fill={SKIN} />

              {/* Legs - Cargo Pants */}
              <rect x="12" y="26" width="3" height="4" fill={PANTS} />
              <rect x="17" y="26" width="3" height="4" fill={PANTS} />
              {/* Sneakers */}
              <rect x="11" y="30" width="4" height="2" fill={SHOES} />
              <rect x="17" y="30" width="4" height="2" fill={SHOES} />
            </g>
          )}

          {/* 2. POSE: CODING (Focused at Desk with Laptop) */}
          {pose === 'coding' && (
            <g id="body-coding">
              {/* Torso leaning slightly */}
              <rect x="11" y="18" width="10" height="7" fill={HOODIE_BASE} />
              <rect x="12" y="18" width="8" height="6" fill={HOODIE_LIGHT} />

              {/* Arms typing forward */}
              <rect x="9" y="20" width="4" height="3" fill={HOODIE_BASE} />
              <rect x="19" y="20" width="4" height="3" fill={HOODIE_BASE} />
              <rect x="11" y="23" width="3" height="2" fill={SKIN} />
              <rect x="18" y="23" width="3" height="2" fill={SKIN} />

              {/* Legs Sitting */}
              <rect x="10" y="25" width="12" height="3" fill={PANTS} />
              <rect x="9" y="28" width="4" height="4" fill={SHOES} />
              <rect x="19" y="28" width="4" height="4" fill={SHOES} />

              {/* Laptop with Stickers */}
              <rect x="8" y="24" width="16" height="6" fill="#1E293B" />
              <rect x="9" y="25" width="14" height="4" fill="#0F172A" />
              {/* Glowing Screen Code */}
              <rect x="10" y="26" width="4" height="1" fill={HAIR_HIGHLIGHT_CYAN} />
              <rect x="15" y="26" width="6" height="1" fill={HAIR_HIGHLIGHT_PURPLE} />
              <rect x="10" y="27" width="8" height="1" fill="#4ADE80" />
              {/* Laptop Lid Stickers: Unity / Code */}
              <rect x="21" y="24" width="2" height="2" fill={HOODIE_ACCENT} />
              <rect x="12" y="24" width="2" height="2" fill="#EC4899" />
            </g>
          )}

          {/* 3. POSE: WITH-CAT (Beside Nick's Pixel Cat Companion) */}
          {pose === 'with-cat' && (
            <g id="body-with-cat">
              {/* Nick Torso */}
              <rect x="9" y="18" width="10" height="8" fill={HOODIE_BASE} />
              <rect x="10" y="18" width="8" height="7" fill={HOODIE_LIGHT} />
              {/* One hand petting cat */}
              <rect x="7" y="18" width="2" height="7" fill={HOODIE_BASE} />
              <rect x="6" y="24" width="3" height="2" fill={SKIN} />
              <rect x="19" y="18" width="2" height="6" fill={HOODIE_BASE} />
              <rect x="19" y="24" width="2" height="2" fill={SKIN} />

              {/* Legs */}
              <rect x="10" y="26" width="3" height="4" fill={PANTS} />
              <rect x="15" y="26" width="3" height="4" fill={PANTS} />
              <rect x="9" y="30" width="4" height="2" fill={SHOES} />
              <rect x="15" y="30" width="4" height="2" fill={SHOES} />

              {/* Black Pixel Cat by her side */}
              <g id="pixel-cat-side">
                {/* Cat Body */}
                <rect x="22" y="24" width="7" height="6" fill={CAT_DARK} />
                {/* Cat Head */}
                <rect x="21" y="20" width="6" height="5" fill={CAT_DARK} />
                {/* Ears */}
                <rect x="21" y="18" width="2" height="2" fill={CAT_DARK} />
                <rect x="25" y="18" width="2" height="2" fill={CAT_DARK} />
                <rect x="22" y="19" width="1" height="1" fill="#F43F5E" />
                <rect x="25" y="19" width="1" height="1" fill="#F43F5E" />
                {/* Glowing Cyan/Blue Cat Eyes */}
                <rect x="22" y="22" width="1" height="1" fill={CAT_EYE} />
                <rect x="25" y="22" width="1" height="1" fill={CAT_EYE} />
                {/* Tail Curved Up */}
                <rect x="28" y="22" width="2" height="6" fill={CAT_DARK} />
                <rect x="29" y="20" width="2" height="2" fill={CAT_DARK} />
                {/* Floating Heart Particle */}
                <path
                  d="M24 15 H26 V17 H24 Z M23 16 H27 V17 H23 Z"
                  fill="#F43F5E"
                  className="animate-bounce"
                />
              </g>
            </g>
          )}

          {/* 4. POSE: GAMING (Holding Retro Controller) */}
          {pose === 'gaming' && (
            <g id="body-gaming">
              {/* Torso */}
              <rect x="11" y="18" width="10" height="8" fill={HOODIE_BASE} />
              <rect x="12" y="18" width="8" height="7" fill={HOODIE_LIGHT} />

              {/* Arms holding controller in front */}
              <rect x="8" y="19" width="4" height="4" fill={HOODIE_BASE} />
              <rect x="20" y="19" width="4" height="4" fill={HOODIE_BASE} />
              <rect x="11" y="22" width="2" height="2" fill={SKIN} />
              <rect x="19" y="22" width="2" height="2" fill={SKIN} />

              {/* Gamepad Controller */}
              <rect x="11" y="22" width="10" height="4" fill="#0F172A" />
              <rect x="10" y="23" width="2" height="3" fill="#1E293B" />
              <rect x="20" y="23" width="2" height="3" fill="#1E293B" />
              {/* D-Pad */}
              <rect x="12" y="23" width="2" height="2" fill={HOODIE_ACCENT} />
              {/* ABXY Buttons */}
              <rect x="18" y="23" width="1" height="1" fill="#F43F5E" />
              <rect x="19" y="24" width="1" height="1" fill="#3B82F6" />
              <rect x="17" y="24" width="1" height="1" fill="#EAB308" />

              {/* Legs */}
              <rect x="12" y="26" width="3" height="4" fill={PANTS} />
              <rect x="17" y="26" width="3" height="4" fill={PANTS} />
              <rect x="11" y="30" width="4" height="2" fill={SHOES} />
              <rect x="17" y="30" width="4" height="2" fill={SHOES} />
            </g>
          )}

          {/* 5. POSE: ACHIEVEMENT (Victory / Raising Glowing Star) */}
          {pose === 'achievement' && (
            <g id="body-achievement">
              {/* Torso */}
              <rect x="11" y="18" width="10" height="8" fill={HOODIE_BASE} />
              <rect x="12" y="18" width="8" height="7" fill={HOODIE_LIGHT} />

              {/* Left Arm Down */}
              <rect x="9" y="18" width="2" height="7" fill={HOODIE_BASE} />
              <rect x="9" y="25" width="2" height="2" fill={SKIN} />

              {/* Right Arm Raised High Holding Star */}
              <rect x="21" y="12" width="3" height="8" fill={HOODIE_BASE} />
              <rect x="22" y="10" width="2" height="3" fill={SKIN} />

              {/* Glowing Pixel Star Trophy */}
              <g id="victory-star">
                <rect x="20" y="3" width="6" height="6" fill={STAR_GOLD} />
                <rect x="22" y="1" width="2" height="10" fill={STAR_GOLD} />
                <rect x="18" y="5" width="10" height="2" fill={STAR_GOLD} />
                <rect x="22" y="5" width="2" height="2" fill="#FFF" />
                {/* Star Glow Particles */}
                <rect x="17" y="2" width="2" height="2" fill={STAR_GLOW} />
                <rect x="27" y="2" width="2" height="2" fill={STAR_GLOW} />
                <rect x="17" y="8" width="2" height="2" fill={STAR_GLOW} />
                <rect x="27" y="8" width="2" height="2" fill={STAR_GLOW} />
              </g>

              {/* Legs */}
              <rect x="12" y="26" width="3" height="4" fill={PANTS} />
              <rect x="17" y="26" width="3" height="4" fill={PANTS} />
              <rect x="11" y="30" width="4" height="2" fill={SHOES} />
              <rect x="17" y="30" width="4" height="2" fill={SHOES} />
            </g>
          )}
        </svg>
      </div>
    </div>
  )
}
