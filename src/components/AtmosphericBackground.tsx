import { useEffect, useState } from 'react'

export function AtmosphericBackground() {
  const [mousePos, setPos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20
      const y = (e.clientY / window.innerHeight - 0.5) * 20
      setPos({ x, y })
    }
    window.addEventListener('mousemove', handleMove)
    return () => window.removeEventListener('mousemove', handleMove)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#080808]">
      {/* Holographic Cyber Grid with Parallax */}
      <div
        className="absolute inset-[-40px] holo-grid opacity-60 transition-transform duration-500 ease-out"
        style={{ transform: `translate3d(${mousePos.x * 0.5}px, ${mousePos.y * 0.5}px, 0)` }}
      />

      {/* Radial Glow Gradient */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-purple-900/10 rounded-full blur-[140px]" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-cyan-900/10 rounded-full blur-[120px]" />

      {/* Cyber Dots Mesh */}
      <div className="absolute inset-0 cyber-dots opacity-40" />

      {/* Scanline CRT overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%)] bg-[length:100%_4px] opacity-30 pointer-events-none" />
    </div>
  )
}
