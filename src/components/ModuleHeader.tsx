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
      <div className="text-[10px] font-mono text-cyan-400/60 tracking-[0.3em] uppercase mb-1">
        {moduleLabel}
      </div>
      <div
        className={cn(
          'text-xs font-mono text-purple-400 tracking-widest uppercase mb-3 flex items-center gap-2',
          center && 'justify-center',
        )}
      >
        <span className="w-8 h-px bg-purple-400/30" />
        <span>[{subtitle}]</span>
        <span className="w-8 h-px bg-purple-400/30" />
      </div>
      <h2 className="text-2xl sm:text-4xl font-bold font-display text-[#EDEDED] tracking-tight title-glow">
        {title}
      </h2>
    </div>
  )
}
