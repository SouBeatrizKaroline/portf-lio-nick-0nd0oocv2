import { useEffect, useState } from 'react'
import { useLanguage } from '@/hooks/use-language'
import { getSkills, SkillRecord } from '@/services/skills'
import { HudFrame } from './HudFrame'
import { SectionReveal } from './SectionReveal'
import { CyberDecal } from './CyberDecals'
import { Cpu, Code, Server, Gamepad, Wrench } from 'lucide-react'

export function SkillRegistrySection() {
  const { t, locale } = useLanguage()
  const [skills, setSkills] = useState<SkillRecord[]>([])
  const [activeCategory, setActiveCategory] = useState<string>('all')

  useEffect(() => {
    getSkills()
      .then(setSkills)
      .catch(() => {})
  }, [])

  const categories = [
    { id: 'all', label: locale === 'pt' ? 'TODAS' : locale === 'es' ? 'TODAS' : 'ALL', icon: Cpu },
    {
      id: 'game_development',
      label: locale === 'pt' ? 'GAME DEV' : locale === 'es' ? 'JUEGOS' : 'GAME DEV',
      icon: Gamepad,
    },
    {
      id: 'languages',
      label: locale === 'pt' ? 'LINGUAGENS' : locale === 'es' ? 'LENGUAJES' : 'LANGUAGES',
      icon: Code,
    },
    { id: 'backend', label: 'BACKEND', icon: Server },
    {
      id: 'engines',
      label: locale === 'pt' ? 'ENGINES' : locale === 'es' ? 'MOTORES' : 'ENGINES',
      icon: Cpu,
    },
    {
      id: 'tools',
      label: locale === 'pt' ? 'FERRAMENTAS' : locale === 'es' ? 'HERRAMIENTAS' : 'TOOLS',
      icon: Wrench,
    },
  ]

  const filteredSkills =
    activeCategory === 'all' ? skills : skills.filter((s) => s.category === activeCategory)

  return (
    <section id="skills" className="py-20 px-6 bg-[#080808] relative">
      <div className="max-w-5xl mx-auto space-y-8">
        <SectionReveal>
          <HudFrame label="SKILL_REGISTRY // MATRIX_V2" status="SYNCED">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div>
                <div className="text-xs font-mono text-cyan-400 mb-1 tracking-widest uppercase">
                  [{t('skills_subtitle') || 'CAPABILITIES & COMPETENCIES'}]
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold font-display text-[#EDEDED]">
                  {t('skills_title') || 'SKILL REGISTRY'}
                </h2>
              </div>

              <CyberDecal variant="decal-004" />
            </div>

            {/* Category Filter Tabs */}
            <div className="flex flex-wrap gap-2 mb-8 font-mono text-xs border-b border-[#2a2a35] pb-4">
              {categories.map((cat) => {
                const Icon = cat.icon
                const isActive = activeCategory === cat.id
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 border transition-all ${
                      isActive
                        ? 'bg-purple-600/30 border-purple-500 text-purple-200 shadow-[0_0_12px_rgba(168,85,247,0.3)] font-bold'
                        : 'bg-[#111116] border-[#2a2a35] text-gray-400 hover:text-cyan-300 hover:border-cyan-500/40'
                    }`}
                  >
                    <Icon
                      className={`w-3.5 h-3.5 ${isActive ? 'text-purple-400' : 'text-gray-500'}`}
                    />
                    <span>{cat.label}</span>
                  </button>
                )
              })}
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredSkills.map((skill) => {
                const name =
                  locale === 'pt' ? skill.name_pt : locale === 'es' ? skill.name_es : skill.name_en
                const levelVal = skill.level || 85

                return (
                  <div
                    key={skill.id}
                    className="bg-[#101015] border border-[#23232e] p-4 flex flex-col justify-between hover:border-cyan-500/50 hover:shadow-[0_0_15px_rgba(0,240,255,0.1)] transition-all group"
                  >
                    <div className="flex items-center justify-between mb-2 font-mono">
                      <span className="text-xs font-bold text-[#EDEDED] group-hover:text-cyan-300 transition-colors">
                        {name}
                      </span>
                      <span className="text-[10px] text-purple-400 font-semibold">{levelVal}%</span>
                    </div>

                    {/* HUD Level Power Bar */}
                    <div className="w-full bg-[#1a1a24] h-2 border border-[#2a2a38] p-[1px] flex gap-[2px]">
                      {Array.from({ length: 10 }).map((_, idx) => {
                        const filled = (idx + 1) * 10 <= levelVal
                        return (
                          <div
                            key={idx}
                            className={`h-full flex-1 transition-colors ${
                              filled
                                ? idx > 7
                                  ? 'bg-cyan-400 shadow-[0_0_5px_rgba(0,240,255,0.8)]'
                                  : 'bg-purple-500'
                                : 'bg-transparent'
                            }`}
                          />
                        )
                      })}
                    </div>

                    <div className="flex justify-between items-center mt-2 text-[9px] font-mono text-gray-500">
                      <span className="uppercase">CAT: {skill.category}</span>
                      <span>SYS_OK</span>
                    </div>
                  </div>
                )
              })}
            </div>
          </HudFrame>
        </SectionReveal>
      </div>
    </section>
  )
}
