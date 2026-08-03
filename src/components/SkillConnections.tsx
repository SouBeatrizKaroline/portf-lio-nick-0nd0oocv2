import { useEffect, useState, RefObject } from 'react'
import { cn } from '@/lib/utils'

interface SkillConnectionsProps {
  containerRef: RefObject<HTMLDivElement | null>
  connections: Array<[string, string]>
  visibleSkills: string[]
  hoveredSkill: string | null
}

interface Pos {
  x: number
  y: number
}

export function SkillConnections({
  containerRef,
  connections,
  visibleSkills,
  hoveredSkill,
}: SkillConnectionsProps) {
  const [positions, setPositions] = useState<Record<string, Pos>>({})
  const visibleKey = visibleSkills.join(',')

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const calc = () => {
      const rect = container.getBoundingClientRect()
      const pos: Record<string, Pos> = {}
      for (const name of visibleSkills) {
        const el = container.querySelector(`[data-skill="${name}"]`)
        if (!el) continue
        const r = el.getBoundingClientRect()
        pos[name] = { x: r.left + r.width / 2 - rect.left, y: r.top + r.height / 2 - rect.top }
      }
      setPositions(pos)
    }

    const raf = requestAnimationFrame(calc)
    const ro = new ResizeObserver(calc)
    ro.observe(container)
    return () => {
      cancelAnimationFrame(raf)
      ro.disconnect()
    }
  }, [containerRef, visibleKey])

  const lines = connections
    .filter(([from, to]) => positions[from] && positions[to])
    .map(([from, to]) => ({
      x1: positions[from].x,
      y1: positions[from].y,
      x2: positions[to].x,
      y2: positions[to].y,
      active: hoveredSkill === from || hoveredSkill === to,
    }))

  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
      {lines.map((l, i) => (
        <line
          key={i}
          x1={l.x1}
          y1={l.y1}
          x2={l.x2}
          y2={l.y2}
          className={cn('transition-all duration-300', l.active ? 'opacity-70' : 'opacity-[0.07]')}
          stroke={l.active ? 'hsl(187 100% 50%)' : 'hsl(280 80% 60%)'}
          strokeWidth={l.active ? 1.5 : 0.7}
          strokeDasharray="4 6"
        />
      ))}
    </svg>
  )
}
