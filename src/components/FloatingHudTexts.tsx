import { useState, useEffect, useRef } from 'react'
import { useReducedMotion } from '@/hooks/use-reduced-motion'

const HUD_TEXTS = [
  'SYS://CONNECTED',
  'CAT_CORE ACTIVE',
  'FPS:144',
  'LATENCY:12ms',
  'GPU:ONLINE',
  'PURRFORMANCE: OPTIMAL',
]

interface HudZone {
  text: string
  position: string
  delay: number
}

export function FloatingHudTexts() {
  const reduced = useReducedMotion()
  const [visible, setVisible] = useState(false)
  const [opacity, setOpacity] = useState(0.12)
  const [isMobile, setIsMobile] = useState(false)
  const scrollTimerRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    if (reduced) return
    setVisible(true)

    const handleScroll = () => {
      setOpacity(0.05)
      if (scrollTimerRef.current) clearTimeout(scrollTimerRef.current)
      scrollTimerRef.current = setTimeout(() => setOpacity(0.12), 800)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (scrollTimerRef.current) clearTimeout(scrollTimerRef.current)
    }
  }, [reduced])

  if (reduced || !visible) return null

  if (isMobile) {
    return (
      <div
        className="fixed top-16 right-2 z-[1] pointer-events-none font-mono text-[7px] text-cyan-400/25 tracking-wider select-none"
        style={{ opacity: opacity * 0.5, transition: 'opacity 0.5s ease' }}
      >
        <span className="flex items-center gap-1">
          <span className="w-0.5 h-0.5 bg-cyan-500/20 rounded-full" />
          {HUD_TEXTS[0]}
        </span>
      </div>
    )
  }

  const zones: HudZone[] = [
    { text: HUD_TEXTS[0], position: 'top-20 left-3', delay: 0 },
    { text: HUD_TEXTS[1], position: 'top-20 right-3', delay: 1.5 },
    { text: HUD_TEXTS[2], position: 'bottom-20 left-3', delay: 3 },
    { text: HUD_TEXTS[3], position: 'bottom-20 right-3', delay: 4.5 },
  ]

  return (
    <div
      className="fixed inset-0 z-[1] pointer-events-none"
      style={{ opacity, transition: 'opacity 0.5s ease' }}
    >
      {zones.map((zone, i) => (
        <div
          key={i}
          className={`absolute ${zone.position} font-mono text-[9px] text-cyan-400/50 tracking-wider select-none safe-float`}
          style={{ animationDelay: `${zone.delay}s` }}
        >
          <span className="flex items-center gap-1">
            <span className="w-1 h-1 bg-cyan-500/25 rounded-full" />
            {zone.text}
          </span>
        </div>
      ))}
    </div>
  )
}
