import { useEffect, useState } from 'react'
import { useReducedMotion } from '@/hooks/use-reduced-motion'

interface Footprint {
  id: number
  x: number
  y: number
  opacity: number
}

export function DigitalFootprints() {
  const reduced = useReducedMotion()
  const [prints, setPrints] = useState<Footprint[]>([])

  useEffect(() => {
    if (reduced) return

    let id = 0
    const handleClick = (e: MouseEvent) => {
      if (Math.random() > 0.15) return

      const footprint: Footprint = {
        id: id++,
        x: e.clientX,
        y: e.clientY,
        opacity: 0.4,
      }
      setPrints((prev) => [...prev.slice(-8), footprint])

      setTimeout(() => {
        setPrints((prev) => prev.filter((p) => p.id !== footprint.id))
      }, 3000)
    }

    window.addEventListener('click', handleClick)
    return () => window.removeEventListener('click', handleClick)
  }, [reduced])

  if (reduced) return null

  return (
    <div className="fixed inset-0 pointer-events-none z-40">
      {prints.map((p) => (
        <div
          key={p.id}
          className="absolute"
          style={{
            left: `${p.x}px`,
            top: `${p.y}px`,
            transform: 'translate(-50%, -50%)',
            animation: 'footprint-fade 3s ease-out forwards',
          }}
        >
          <svg width="20" height="20" viewBox="0 0 12 12" fill="none">
            <rect x="2" y="2" width="3" height="3" fill="#00f0ff" opacity="0.3" />
            <rect x="7" y="2" width="3" height="3" fill="#a855f7" opacity="0.3" />
            <rect x="2" y="7" width="3" height="3" fill="#a855f7" opacity="0.2" />
            <rect x="7" y="7" width="3" height="3" fill="#00f0ff" opacity="0.2" />
            <rect
              x="4.5"
              y="4.5"
              width="3"
              height="3"
              fill="none"
              stroke="#00f0ff"
              stroke-width="0.3"
              opacity="0.4"
            />
          </svg>
        </div>
      ))}
    </div>
  )
}
