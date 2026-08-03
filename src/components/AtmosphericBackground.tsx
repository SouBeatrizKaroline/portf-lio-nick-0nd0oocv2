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
      <div
        className="absolute inset-[-40px] holo-grid opacity-40 transition-transform duration-500 ease-out"
        style={{ transform: `translate3d(${mousePos.x * 0.5}px, ${mousePos.y * 0.5}px, 0)` }}
      />

      <svg
        className="absolute inset-0 w-full h-full opacity-[0.04]"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <pattern id="circuit" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
            <path
              d="M0,50 L80,50 L80,20 L140,20 L140,80 L200,80"
              fill="none"
              stroke="#00f0ff"
              strokeWidth="1"
            />
            <path
              d="M0,150 L60,150 L60,120 L120,120 L120,180 L200,180"
              fill="none"
              stroke="#a855f7"
              strokeWidth="1"
            />
            <circle cx="80" cy="50" r="2" fill="#00f0ff" />
            <circle cx="140" cy="20" r="2" fill="#00f0ff" />
            <circle cx="60" cy="150" r="2" fill="#a855f7" />
            <circle cx="120" cy="120" r="2" fill="#a855f7" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#circuit)" />
      </svg>

      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-purple-900/8 rounded-full blur-[140px]" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-cyan-900/8 rounded-full blur-[120px]" />
      <div className="absolute top-1/2 left-1/3 w-[300px] h-[300px] bg-indigo-900/5 rounded-full blur-[100px]" />

      <div className="absolute top-[30%] left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent energy-line" />
      <div
        className="absolute top-[70%] left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/10 to-transparent energy-line"
        style={{ animationDelay: '1s' }}
      />

      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <span
            key={i}
            className="absolute w-0.5 h-0.5 bg-cyan-400/30 rounded-full tech-star"
            style={{
              top: `${(i * 37) % 100}%`,
              left: `${(i * 53) % 100}%`,
              animationDelay: `${i * 0.3}s`,
            }}
          />
        ))}
      </div>

      <div className="absolute inset-0 cyber-dots opacity-25" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%)] bg-[length:100%_4px] opacity-20 pointer-events-none" />
    </div>
  )
}
