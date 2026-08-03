import { useState, useEffect } from 'react'
import { useReducedMotion } from '@/hooks/use-reduced-motion'

const SAFE_ZONE_TEXTS = [
  { text: 'SYS://CONNECTED', position: 'top-[5.5rem] left-4', delay: 0 },
  { text: 'CAT_CORE ACTIVE', position: 'bottom-[5.5rem] right-4', delay: 3 },
]

export function FloatingHudTexts() {
  const reduced = useReducedMotion()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (reduced) return
    const checkScreen = () => setVisible(window.innerWidth >= 1536)
    checkScreen()
    window.addEventListener('resize', checkScreen)
    return () => window.removeEventListener('resize', checkScreen)
  }, [reduced])

  if (reduced || !visible) return null

  return (
    <div
      className="fixed inset-0 z-[1] pointer-events-none"
      style={{ opacity: 0.04, transition: 'opacity 0.5s ease' }}
    >
      {SAFE_ZONE_TEXTS.map((zone, i) => (
        <div
          key={i}
          className={`absolute ${zone.position} font-mono text-[9px] text-cyan-400/50 tracking-wider select-none safe-float`}
          style={{ animationDelay: `${zone.delay}s`, animationDuration: '8s' }}
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
