import { useRef, ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface TechPanelProps {
  children: ReactNode
  className?: string
  hover?: boolean
}

export function TechPanel({ children, className, hover = true }: TechPanelProps) {
  const ref = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    el.style.setProperty('--mx', `${e.clientX - rect.left}px`)
    el.style.setProperty('--my', `${e.clientY - rect.top}px`)
  }

  return (
    <div
      ref={ref}
      onMouseMove={hover ? handleMouseMove : undefined}
      className={cn(
        'tech-panel-card relative border border-[#2a2a35] bg-[#1A1A20]/90 backdrop-blur-md transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.4)]',
        hover && 'hover:border-purple-500/50 hover:shadow-[0_0_20px_rgba(168,85,247,0.15)]',
        className,
      )}
    >
      <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-cyan-400/60 pointer-events-none z-10" />
      <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-purple-400/60 pointer-events-none z-10" />
      <div className="relative z-10">{children}</div>
    </div>
  )
}
