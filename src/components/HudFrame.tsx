import { ReactNode } from 'react'

interface HudFrameProps {
  children: ReactNode
  label?: string
  className?: string
}

export function HudFrame({ children, label, className = '' }: HudFrameProps) {
  return (
    <div
      className={`relative border border-[#2A2A2A] bg-[#101010]/80 p-6 backdrop-blur-sm ${className}`}
    >
      <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-purple-500" />
      <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-purple-500" />
      <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-purple-500" />
      <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-purple-500" />

      {label && (
        <div className="absolute -top-3 left-4 bg-[#090909] px-2 text-[10px] font-mono text-purple-400 tracking-widest border border-purple-900/50 uppercase">
          [{label}]
        </div>
      )}
      {children}
    </div>
  )
}
