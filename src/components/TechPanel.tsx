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
        'relative border border-[#1a1a22] bg-[#101014]/80 backdrop-blur-sm transition-all duration-300',
        hover && 'hover:border-purple-500/40 hover:shadow-[0_0_15px_rgba(139,92,246,0.08)]',
        className,
      )}
    >
      {children}
    </div>
  )
}
