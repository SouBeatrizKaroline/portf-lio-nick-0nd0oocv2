import React from 'react'

interface CyberDecalProps {
  variant?: 'barcode' | 'crosshair' | 'corner' | 'decal-004' | 'tech-label' | 'grid-pattern'
  className?: string
  text?: string
}

export function CyberDecal({ variant = 'barcode', className = '', text }: CyberDecalProps) {
  if (variant === 'barcode') {
    return (
      <div
        className={`font-mono text-[9px] text-cyan-500/50 flex flex-col items-start select-none ${className}`}
      >
        <div className="flex gap-[2px] h-4 items-stretch opacity-60 mb-0.5">
          <span className="w-1 bg-cyan-400" />
          <span className="w-0.5 bg-cyan-400" />
          <span className="w-[3px] bg-transparent" />
          <span className="w-[2px] bg-cyan-400" />
          <span className="w-1 bg-cyan-400" />
          <span className="w-0.5 bg-transparent" />
          <span className="w-[3px] bg-purple-400" />
          <span className="w-1 bg-purple-400" />
          <span className="w-0.5 bg-cyan-400" />
          <span className="w-1 bg-cyan-400" />
        </div>
        <span>{text || 'SYS_REF // 0921-NICK-OS'}</span>
      </div>
    )
  }

  if (variant === 'decal-004') {
    return (
      <div className={`font-mono select-none pointer-events-none ${className}`}>
        <div className="flex items-baseline gap-2 text-cyan-400/80 font-bold tracking-tighter">
          <span className="text-xl sm:text-2xl text-yellow-400">*004</span>
          <span className="text-xs tracking-widest text-purple-400 uppercase">SYS_INTERFACE</span>
        </div>
        <div className="text-[9px] text-gray-500 flex gap-3 mt-0.5">
          <span>LOC: 0x7F4A</span>
          <span>LATENCY: 12ms</span>
          <span>ENCRYPTION: AES-256</span>
        </div>
      </div>
    )
  }

  if (variant === 'crosshair') {
    return (
      <div className={`relative w-4 h-4 text-cyan-500/60 select-none ${className}`}>
        <div className="absolute inset-0 border border-cyan-500/40 rounded-full" />
        <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-cyan-500/40 -translate-y-1/2" />
        <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-cyan-500/40 -translate-x-1/2" />
      </div>
    )
  }

  if (variant === 'tech-label') {
    return (
      <div
        className={`inline-flex items-center gap-1.5 px-2 py-0.5 bg-[#14141d] border border-cyan-500/30 text-[10px] font-mono text-cyan-300 ${className}`}
      >
        <span className="w-1.5 h-1.5 bg-cyan-400 rounded-none animate-pulse" />
        <span className="tracking-widest uppercase font-semibold">{text || 'NICK_OS_CORE'}</span>
      </div>
    )
  }

  return <div className={`border-l-2 border-t-2 border-cyan-400/70 w-3 h-3 ${className}`} />
}
