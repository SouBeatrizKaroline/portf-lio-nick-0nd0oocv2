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
        'relative border border-[#2a2a35] bg-[#1A1A20]/85 backdrop-blur-lg p-4 sm:p-6 md:p-8 hud-corners shadow-[0_10px_40px_rgba(0,0,0,0.6)] transition-all duration-500 hover:border-cyan-500/30 hud-frame-glow overflow-hidden',
        className,
      )}
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent hud-scanline" />
      </div>

      <div className="flex items-center justify-between border-b border-[#2a2a35] pb-3 mb-6 text-[10px] font-mono text-gray-400 relative z-10">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-ping shadow-[0_0_6px_rgba(0,240,255,0.6)]" />
          <span className="text-cyan-400 font-bold uppercase tracking-wider">[{label}]</span>
        </div>
        <div className="flex items-center gap-3 text-gray-500">
          <span className="hidden sm:inline">LOC: 0x8F40</span>
          <span className="text-emerald-400 font-semibold uppercase">[{status}]</span>
        </div>
      </div>

      <div className="relative z-10">{children}</div>

      <div className="absolute bottom-1 right-2 text-[8px] font-mono text-gray-600 tracking-widest pointer-events-none">
        COORD: 23.5505° S, 46.6333° W
      </div>
    </div>
  )
}
