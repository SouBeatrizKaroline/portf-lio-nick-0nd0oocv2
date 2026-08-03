interface ScanlinesOverlayProps {
  visible: boolean
}

export function ScanlinesOverlay({ visible }: ScanlinesOverlayProps) {
  if (!visible) return null

  return (
    <div
      className="fixed inset-0 pointer-events-none z-50 overflow-hidden opacity-30 select-none"
      style={{
        background:
          'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.03), rgba(0, 255, 0, 0.01), rgba(0, 0, 255, 0.03))',
        backgroundSize: '100% 3px, 6px 100%',
      }}
    />
  )
}
