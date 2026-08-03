import { useState, useEffect, useRef } from 'react'
import { PixelCat } from './PixelCat'

type CatState = 'sleep' | 'sit' | 'walk' | 'peek'

const CAT_STATES: CatState[] = ['sleep', 'sit', 'walk', 'peek']

interface Position {
  x: number
  y: number
}

export function HolographicCat() {
  const [visible, setVisible] = useState(false)
  const [catState, setCatState] = useState<CatState>('sit')
  const [position, setPosition] = useState<Position>({ x: 80, y: 80 })
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    const showTimer = setTimeout(() => setVisible(true), 3000)

    intervalRef.current = setInterval(() => {
      const rand = Math.random()
      if (rand < 0.25) {
        setCatState('sleep')
      } else if (rand < 0.5) {
        setCatState('sit')
      } else if (rand < 0.75) {
        setCatState('walk')
      } else {
        setCatState('peek')
      }

      setPosition({
        x: Math.max(
          20,
          Math.min(window.innerWidth - 60, Math.random() * (window.innerWidth - 80) + 20),
        ),
        y: Math.max(
          20,
          Math.min(window.innerHeight - 60, Math.random() * (window.innerHeight - 80) + 20),
        ),
      })
    }, 8000)

    return () => {
      clearTimeout(showTimer)
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [])

  if (!visible) return null

  return (
    <div
      className="fixed z-40 pointer-events-none transition-all duration-1000 ease-in-out animate-float"
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
    >
      <div className="relative">
        <div className="absolute inset-0 bg-purple-500/20 blur-lg rounded-full" />
        <div className="absolute inset-0 bg-cyan-500/10 blur-md rounded-full animate-pulse" />
        <div className="relative opacity-70 hover:opacity-100 transition-opacity duration-300">
          <PixelCat state={catState} className="scale-150" />
        </div>
        <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 text-[8px] font-mono text-purple-400/60 whitespace-nowrap">
          {catState === 'sleep' && 'zZz...'}
          {catState === 'sit' && '~meow~'}
          {catState === 'walk' && '*pitter*'}
          {catState === 'peek' && '?'}
        </div>
      </div>
    </div>
  )
}
