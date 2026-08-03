import { ReactNode } from 'react'

interface HudFrameProps {
  children: ReactNode
  label?: string
  className?: string
}

export function HudFrame({ children, label, className = '' }: HudFrameProps) {
  return (
    <div
      className={`relative border border-[#1a1a22] bg-[#0B0B0F]/80 p-6 backdrop-blur-sm ${className}`}
    >
      <div className="absolute -top-px -left-px w-3 h-3 border-t border-l border-purple-500/60" />
      <div className="absolute -top-px -right-px w-3 h-3 border-t border-r border-purple-500/60" />
      <div className="absolute -bottom-px -left-px w-3 h-3 border-b border-l border-purple-500/60" />
      <div className="absolute -bottom-px -right-px w-3 h-3 border-b border-r border-purple-500/60" />

      {label && (
        <div className="absolute -top-2.5 left-4 bg-[#080808] px-2 text-[10px] font-mono text-purple-400/80 tracking-widest border border-purple-900/40 uppercase">
          [{label}]
        </div>
      )}
      {children}
    </div>
  )
}
