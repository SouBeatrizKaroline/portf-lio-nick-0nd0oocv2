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
        target.getAttribute('role') === 'button'
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
      <div
        className="pointer-events-none fixed z-50 h-1.5 w-1.5 rounded-full bg-purple-400 transition-transform duration-75 -translate-x-1/2 -translate-y-1/2"
        style={{ left: `${pos.x}px`, top: `${pos.y}px` }}
      />
      <div
        className={`pointer-events-none fixed z-50 border transition-all duration-150 ease-out -translate-x-1/2 -translate-y-1/2 ${
          isHovered
            ? 'h-8 w-8 border-cyan-400/60 rotate-45 scale-110 bg-purple-500/5'
            : 'h-6 w-6 rounded-full border-purple-500/40'
        }`}
        style={{ left: `${pos.x}px`, top: `${pos.y}px` }}
      />
    </>
  )
}
