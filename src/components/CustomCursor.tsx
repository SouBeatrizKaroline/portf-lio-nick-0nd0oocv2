import { useEffect, useState } from 'react'
import { useReducedMotion } from '@/hooks/use-reduced-motion'

export function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 })
  const [isHovered, setIsHovered] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const reduced = useReducedMotion()

  useEffect(() => {
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0
    if (isTouch || reduced) return

    const onMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY })
      if (!isVisible) setIsVisible(true)
    }

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.getAttribute('role') === 'button' ||
        target.classList.contains('cursor-pointer')
      ) {
        setIsHovered(true)
      } else {
        setIsHovered(false)
      }
    }

    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mouseover', onMouseOver)
    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseover', onMouseOver)
    }
  }, [isVisible, reduced])

  if (!isVisible || reduced) return null

  return (
    <>
      {/* Center Laser Dot */}
      <div
        className="pointer-events-none fixed z-50 h-1.5 w-1.5 rounded-full bg-cyan-400 -translate-x-1/2 -translate-y-1/2 shadow-[0_0_8px_#00f0ff]"
        style={{ left: `${pos.x}px`, top: `${pos.y}px` }}
      />

      {/* Cyber Reticle Bracket */}
      <div
        className={`pointer-events-none fixed z-50 border transition-all duration-150 ease-out -translate-x-1/2 -translate-y-1/2 ${
          isHovered
            ? 'h-8 w-8 border-cyan-400 bg-cyan-500/10 scale-125 rotate-45 border-2 shadow-[0_0_15px_rgba(0,240,255,0.4)]'
            : 'h-6 w-6 border-purple-500/50 rounded-none'
        }`}
        style={{ left: `${pos.x}px`, top: `${pos.y}px` }}
      >
        {/* Corner Ticks */}
        <span className="absolute -top-1 -left-1 w-1.5 h-1.5 border-t border-l border-cyan-400" />
        <span className="absolute -bottom-1 -right-1 w-1.5 h-1.5 border-b border-r border-cyan-400" />
      </div>
    </>
  )
}
