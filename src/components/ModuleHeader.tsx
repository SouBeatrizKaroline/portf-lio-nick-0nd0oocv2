import { cn } from '@/lib/utils'

interface ModuleHeaderProps {
  moduleLabel: string
  subtitle: string
  title: string
  center?: boolean
}

export function ModuleHeader({ moduleLabel, subtitle, title, center = true }: ModuleHeaderProps) {
  return (
    <div className={cn('mb-10', center && 'text-center')}>
      <div className="text-[10px] font-mono text-cyan-400/50 tracking-[0.3em] uppercase mb-1">
        {moduleLabel}
      </div>
      <div className="text-xs font-mono text-purple-400 tracking-widest uppercase mb-2">
        [{subtitle}]
      </div>
      <h2 className="text-2xl sm:text-3xl font-bold font-display text-[#EDEDED] tracking-tight">
        {title}
      </h2>
    </div>
  )
}
