import { useEffect, useState, useMemo } from 'react'
import '@/styles/skill-matrix.css'
import { useLanguage } from '@/hooks/use-language'
import { useRealtime } from '@/hooks/use-realtime'
import { getSkills, SkillRecord } from '@/services/skills'
import { skillCategories, getConnectedSet, type CategoryConfig } from '@/lib/skill-config'
import { HudFrame } from './HudFrame'
import { SectionReveal } from './SectionReveal'
import { CyberDecal } from './CyberDecals'
import { SkillCard } from './SkillCard'
import { Cpu } from 'lucide-react'

export function SkillRegistrySection() {
  const { t, locale } = useLanguage()
  const [skills, setSkills] = useState<SkillRecord[]>([])
  const [activeCategory, setActiveCategory] = useState('all')
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  const loadSkills = async () => {
    try {
      setSkills(await getSkills())
    } catch {
      /* intentionally ignored */
    }
  }

  useEffect(() => {
    loadSkills()
  }, [])
  useRealtime('skills', () => {
    loadSkills()
  })

  const connectedSet = useMemo(() => getConnectedSet(hoveredSkill), [hoveredSkill])

  const filteredSkills = useMemo(() => {
    if (activeCategory === 'all') return skills
    return skills.filter((s) => s.categories.includes(activeCategory))
  }, [skills, activeCategory])

  const getConnState = (skill: SkillRecord): 'normal' | 'active' | 'linked' | 'dimmed' => {
    if (!connectedSet) return 'normal'
    if (skill.name_en === hoveredSkill) return 'active'
    if (connectedSet.has(skill.name_en)) return 'linked'
    return 'dimmed'
  }

  return (
    <section id="skills" className="py-20 px-6 bg-[#080808] relative">
      <div className="max-w-5xl mx-auto space-y-8">
        <SectionReveal>
          <HudFrame label="SKILL_REGISTRY // MATRIX_V2" status="SYNCED">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div>
                <div className="text-xs font-mono text-cyan-400 mb-1 tracking-widest uppercase">
                  [{t('skills_subtitle')}]
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold font-display text-[#EDEDED]">
                  {t('skills_title')}
                </h2>
              </div>
              <CyberDecal variant="decal-004" />
            </div>

            <div className="flex flex-wrap gap-2 mb-8 font-mono text-xs border-b border-[#2a2a35] pb-4">
              {skillCategories.map((cat: CategoryConfig) => {
                const isActive = activeCategory === cat.id
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={cn(
                      'flex items-center gap-1.5 px-3 py-1.5 border transition-all',
                      isActive
                        ? 'bg-purple-600/30 border-purple-500 text-purple-200 shadow-[0_0_12px_rgba(168,85,247,0.3)] font-bold'
                        : 'bg-[#111116] border-[#2a2a35] text-gray-400 hover:text-cyan-300 hover:border-cyan-500/40',
                    )}
                  >
                    <Cpu
                      className={cn('w-3.5 h-3.5', isActive ? 'text-purple-400' : 'text-gray-500')}
                    />
                    <span>{cat.labels[locale]}</span>
                  </button>
                )
              })}
            </div>

            {hoveredSkill && (
              <div className="mb-4 text-[10px] font-mono text-cyan-400/60 animate-fade-in">
                ◇ {t('skills_connection_hint')}
              </div>
            )}

            <div
              key={activeCategory}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3"
            >
              {filteredSkills.map((skill, idx) => (
                <div
                  key={skill.id}
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${idx * 25}ms` }}
                >
                  <SkillCard
                    skill={skill}
                    locale={locale}
                    t={t as (key: string) => string}
                    connectionState={getConnState(skill)}
                    onHover={setHoveredSkill}
                    index={idx}
                  />
                </div>
              ))}
            </div>

            {filteredSkills.length === 0 && (
              <div className="text-center py-12 text-gray-500 font-mono text-sm">
                <Cpu className="w-8 h-8 mx-auto mb-3 opacity-30" />
                Loading skill matrix...
              </div>
            )}
          </HudFrame>
        </SectionReveal>
      </div>
    </section>
  )
}

import { cn } from '@/lib/utils'
