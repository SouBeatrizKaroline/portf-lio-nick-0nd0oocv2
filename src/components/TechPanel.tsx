import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface TechPanelProps {
  children: ReactNode
  className?: string
  hover?: boolean
}

export function TechPanel({ children, className, hover = true }: TechPanelProps) {
  return (
    <div
      className={cn(
        'relative border border-[#2a2a35] bg-[#1A1A20]/90 backdrop-blur-md transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.4)] traveling-border',
        hover && 'hover:border-purple-500/50 hover:shadow-[0_0_20px_rgba(168,85,247,0.15)]',
        className,
      )}
    >
      {/* Top Corner Decal Ticks */}
      <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-cyan-400/60 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-purple-400/60 pointer-events-none" />
      {children}
    </div>
  )
}
