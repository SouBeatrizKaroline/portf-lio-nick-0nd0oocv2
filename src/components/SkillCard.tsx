import { useState, useRef } from 'react'
import { cn } from '@/lib/utils'
import { skillIconMap, levelMeta, type LucideIcon } from '@/lib/skill-config'
import type { SkillRecord } from '@/services/skills'
import type { Locale } from '@/i18n/translations'

type ConnectionState = 'normal' | 'active' | 'linked' | 'dimmed'

interface SkillCardProps {
  skill: SkillRecord
  locale: Locale
  t: (key: string) => string
  connectionState: ConnectionState
  onHover: (name: string | null) => void
  index: number
}

export function SkillCard({ skill, locale, t, connectionState, onHover, index }: SkillCardProps) {
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 })
  const cardRef = useRef<HTMLDivElement>(null)
  const Icon: LucideIcon = skillIconMap[skill.icon] || skillIconMap.gameplay
  const lvl = levelMeta[skill.level] || levelMeta[2]
  const name = locale === 'pt' ? skill.name_pt : locale === 'es' ? skill.name_es : skill.name_en
  const desc =
    locale === 'pt'
      ? skill.description_pt
      : locale === 'es'
        ? skill.description_es
        : skill.description_en
  const isPrimary = skill.icon === 'unity'

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setMousePos({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    })
  }

  return (
    <div
      ref={cardRef}
      onMouseEnter={() => onHover(skill.name_en)}
      onMouseLeave={() => onHover(null)}
      onMouseMove={handleMouseMove}
      className={cn(
        'skill-card-sweep relative overflow-hidden rounded-lg border p-4 transition-all duration-300 cursor-default',
        'bg-white/[0.03] backdrop-blur-md',
        connectionState === 'active' &&
          'border-purple-500/70 shadow-[0_0_20px_rgba(168,85,247,0.25)] scale-[1.03] z-10',
        connectionState === 'linked' && 'border-cyan-500/60 shadow-[0_0_15px_rgba(0,240,255,0.15)]',
        connectionState === 'dimmed' && 'opacity-40 scale-[0.97]',
        connectionState === 'normal' && 'border-[#23232e] hover:border-cyan-500/40',
        isPrimary && 'border-purple-500/40 bg-purple-950/10',
      )}
      style={{ animationDelay: `${index * 30}ms` }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, rgba(0,240,255,0.06), transparent 50%)`,
          opacity: connectionState === 'active' || connectionState === 'normal' ? undefined : 0,
        }}
      />

      {isPrimary && (
        <div className="absolute top-2 right-2 text-[8px] font-mono font-bold px-1.5 py-0.5 rounded bg-purple-500/20 border border-purple-500/40 text-purple-300 tracking-wider">
          PRIMARY
        </div>
      )}

      <div className="relative z-10 flex flex-col gap-2">
        <div className="flex items-center gap-2.5">
          <div
            className={cn(
              'flex items-center justify-center w-8 h-8 rounded border transition-colors',
              lvl.border,
              'bg-white/[0.03]',
              isPrimary && 'border-purple-500/50 bg-purple-500/10',
            )}
          >
            <Icon className={cn('w-4 h-4', lvl.color)} />
          </div>
          <div className="flex-1 min-w-0">
            <span className="text-xs font-bold font-mono text-[#EDEDED] truncate block">
              {name}
            </span>
            <span className="text-[9px] font-mono text-gray-500 uppercase">
              {skill.categories.join(' / ')}
            </span>
          </div>
        </div>

        <p className="text-[10px] text-gray-400 leading-relaxed line-clamp-2">{desc}</p>

        <div className="flex items-center justify-between">
          <div
            className={cn(
              'flex items-center gap-1.5 text-[9px] font-mono font-semibold',
              lvl.color,
            )}
          >
            <span className={cn('w-1.5 h-1.5 rounded-full', lvl.dot)} />
            {t(lvl.key)}
          </div>
          {connectionState === 'linked' && (
            <span className="text-[8px] font-mono text-cyan-400 animate-pulse">◇ LINKED</span>
          )}
        </div>

        {skill.tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-1">
            {skill.tags.slice(0, 4).map((tag) => (
              <span
                key={tag}
                className="text-[8px] font-mono bg-white/[0.03] border border-white/5 text-gray-500 px-1.5 py-0.5 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
