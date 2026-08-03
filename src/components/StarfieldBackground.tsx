import { useEffect, useRef } from 'react'
import { useReducedMotion } from '@/hooks/use-reduced-motion'

export function StarfieldBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const reduced = useReducedMotion()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animId = 0
    const stars: { x: number; y: number; size: number; speed: number; opacity: number }[] = []

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
      stars.length = 0
      const count = Math.min(70, Math.floor((canvas.width * canvas.height) / 18000))
      for (let i = 0; i < count; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 1.4 + 0.3,
          speed: Math.random() * 0.25 + 0.05,
          opacity: Math.random() * 0.4 + 0.15,
        })
      }
    }

    const drawStatic = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      stars.forEach((s) => {
        ctx.fillStyle = `rgba(168, 85, 247, ${s.opacity})`
        ctx.fillRect(s.x, s.y, s.size, s.size)
      })
    }

    const drawAnimated = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      stars.forEach((s) => {
        s.y += s.speed
        if (s.y > canvas.height) s.y = 0
        ctx.fillStyle = `rgba(168, 85, 247, ${s.opacity})`
        ctx.fillRect(s.x, s.y, s.size, s.size)
      })
      for (let i = 0; i < stars.length; i++) {
        for (let j = i + 1; j < stars.length; j++) {
          const dx = stars[i].x - stars[j].x
          const dy = stars[i].y - stars[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 100) {
            ctx.strokeStyle = `rgba(139, 92, 246, ${(1 - dist / 100) * 0.06})`
            ctx.lineWidth = 0.5
            ctx.beginPath()
            ctx.moveTo(stars[i].x, stars[i].y)
            ctx.lineTo(stars[j].x, stars[j].y)
            ctx.stroke()
          }
        }
      }
      animId = requestAnimationFrame(drawAnimated)
    }

    resize()
    if (reduced) {
      drawStatic()
    } else {
      drawAnimated()
    }
    window.addEventListener('resize', resize)
    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [reduced])

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />
}
