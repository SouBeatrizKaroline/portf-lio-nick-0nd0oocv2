import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface HudFrameProps {
  children: ReactNode
  className?: string
  label?: string
  status?: string
}

export function HudFrame({
  children,
  className,
  label = 'SYS_MODULE',
  status = 'ACTIVE',
}: HudFrameProps) {
  return (
    <div
      className={cn(
        'relative border border-[#2a2a35] bg-[#1A1A20]/90 backdrop-blur-md p-6 sm:p-8 hud-corners traveling-border shadow-[0_10px_30px_rgba(0,0,0,0.6)] transition-all duration-300 hover:border-cyan-500/40',
        className,
      )}
    >
      {/* Sci-Fi Header Strip */}
      <div className="flex items-center justify-between border-b border-[#2a2a35] pb-3 mb-6 text-[10px] font-mono text-gray-400">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-ping" />
          <span className="text-cyan-400 font-bold uppercase tracking-wider">[{label}]</span>
        </div>
        <div className="flex items-center gap-3 text-gray-500">
          <span className="hidden sm:inline">LOC: 0x8F40</span>
          <span className="text-emerald-400 font-semibold uppercase">[{status}]</span>
        </div>
      </div>

      {children}

      {/* Sci-Fi Corner Decals & Coordinates */}
      <div className="absolute bottom-1 right-2 text-[8px] font-mono text-gray-600 tracking-widest pointer-events-none">
        COORD: 23.5505° S, 46.6333° W
      </div>
    </div>
  )
}
