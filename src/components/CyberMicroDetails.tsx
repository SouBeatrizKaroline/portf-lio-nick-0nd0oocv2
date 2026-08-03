import { cn } from '@/lib/utils'

const ALL_DETAILS = [
  'SYS://CONNECTED',
  'NODE_ACTIVE',
  'CAT_CORE ACTIVE',
  'PURRFORMANCE: OPTIMAL',
  'FPS:144',
  'LATENCY:12ms',
  'GPU:ONLINE',
  'SYNC_COMPLETE',
]

interface CyberMicroDetailsProps {
  className?: string
  count?: number
  offset?: number
}

export function CyberMicroDetails({ className, count = 4, offset = 0 }: CyberMicroDetailsProps) {
  const details: string[] = []
  for (let i = 0; i < count; i++) {
    details.push(ALL_DETAILS[(offset + i) % ALL_DETAILS.length])
  }

  return (
    <div
      className={cn(
        'flex flex-wrap items-center justify-center gap-x-3 gap-y-1 font-mono text-[8px] sm:text-[9px] text-gray-600/60 tracking-wider select-none',
        className,
      )}
    >
      {details.map((detail, idx) => (
        <span
          key={idx}
          className={cn('flex items-center gap-1 transition-colors', idx >= 2 && 'hidden sm:flex')}
        >
          <span className="w-1 h-1 bg-cyan-500/20 rounded-full" />
          <span className="hover:text-cyan-400/40">{detail}</span>
        </span>
      ))}
    </div>
  )
}
