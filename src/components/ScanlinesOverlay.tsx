import { useReducedMotion } from '@/hooks/use-reduced-motion'

interface ScanlinesOverlayProps {
  visible: boolean
}

export function ScanlinesOverlay({ visible }: ScanlinesOverlayProps) {
  const reduced = useReducedMotion()
  if (!visible || reduced) return null

  return (
    <div
      className="fixed inset-0 pointer-events-none z-50 overflow-hidden opacity-[0.06] select-none"
      style={{
        background: 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.4) 50%)',
        backgroundSize: '100% 3px',
      }}
    />
  )
}
