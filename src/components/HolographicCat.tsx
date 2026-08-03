import { useEffect, useState, useRef } from 'react'
import { useReducedMotion } from '@/hooks/use-reduced-motion'

export function HolographicCat() {
  const reduced = useReducedMotion()
  const [visible, setVisible] = useState(false)
  const [position, setPosition] = useState({ top: 30, duration: 8 })
  const [mood, setMood] = useState<'walk' | 'peek'>('walk')
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)

  useEffect(() => {
    if (reduced) return

    const scheduleNext = () => {
      const delay = 30000 + Math.random() * 60000
      timeoutRef.current = setTimeout(() => {
        setVisible(true)
        setPosition({
          top: 15 + Math.random() * 60,
          duration: 6 + Math.random() * 4,
        })
        setMood(Math.random() > 0.5 ? 'walk' : 'peek')

        setTimeout(() => setVisible(false), 9000)
        scheduleNext()
      }, delay)
    }

    scheduleNext()

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [reduced])

  if (reduced || !visible) return null

  return (
    <div
      className="fixed pointer-events-none z-30"
      style={{
        top: `${position.top}%`,
        left: '-40px',
        animation: `cat-cross ${position.duration}s linear forwards`,
      }}
    >
      <svg
        width="48"
        height="36"
        viewBox="0 0 24 18"
        fill="none"
        className="opacity-30"
        style={{ filter: 'drop-shadow(0 0 6px rgba(0,240,255,0.5))' }}
      >
        <g>
          <rect
            x="4"
            y="8"
            width="16"
            height="7"
            fill="none"
            stroke="#00f0ff"
            stroke-width="0.8"
            stroke-dasharray="1.5 1"
          />
          <rect
            x="3"
            y="4"
            width="14"
            height="7"
            fill="none"
            stroke="#00f0ff"
            stroke-width="0.8"
            stroke-dasharray="1.5 1"
          />
          <polygon
            points="3,4 5,1 6,4"
            fill="none"
            stroke="#00f0ff"
            stroke-width="0.8"
            stroke-dasharray="1.5 1"
          />
          <polygon
            points="11,4 13,1 14,4"
            fill="none"
            stroke="#00f0ff"
            stroke-width="0.8"
            stroke-dasharray="1.5 1"
          />
          <rect x="5" y="6" width="2" height="2" fill="#00f0ff" opacity="0.7">
            <animate
              attributeName="opacity"
              values="0.7;0.2;0.7"
              dur="2s"
              repeatCount="indefinite"
            />
          </rect>
          <rect x="11" y="6" width="2" height="2" fill="#a855f7" opacity="0.7">
            <animate
              attributeName="opacity"
              values="0.7;0.2;0.7"
              dur="2s"
              repeatCount="indefinite"
            />
          </rect>
          <path
            d="M20 11 Q24 9 23 4"
            fill="none"
            stroke="#00f0ff"
            stroke-width="0.8"
            stroke-dasharray="1.5 1"
          />
          <rect
            x="3"
            y="15"
            width="3"
            height="3"
            fill="none"
            stroke="#00f0ff"
            stroke-width="0.5"
            stroke-dasharray="1 1"
          />
          <rect
            x="17"
            y="15"
            width="3"
            height="3"
            fill="none"
            stroke="#00f0ff"
            stroke-width="0.5"
            stroke-dasharray="1 1"
          />
          {mood === 'walk' && (
            <rect x="9" y="15" width="4" height="1" fill="#00f0ff" opacity="0.3">
              <animate
                attributeName="opacity"
                values="0.3;0;0.3"
                dur="0.5s"
                repeatCount="indefinite"
              />
            </rect>
          )}
        </g>
      </svg>
      <div
        className="text-[7px] font-mono text-cyan-400/40 mt-1 whitespace-nowrap"
        style={{ animation: 'cat-cross 0s linear forwards' }}
      >
        {mood === 'walk' ? 'CAT_CORE: PATROL' : 'CAT_CORE: SCAN'}
      </div>
    </div>
  )
}
