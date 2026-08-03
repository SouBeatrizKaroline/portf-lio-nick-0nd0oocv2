import { useLanguage } from '@/hooks/use-language'
import type { ProjectRecord } from '@/services/projects'
import { Target, Lightbulb, User, TrendingUp, Trophy, Clock, Users, Building2 } from 'lucide-react'

const CASE_LABELS = {
  pt: {
    problem: 'Problema',
    solution: 'Solução',
    role: 'Papel',
    impact: 'Impacto & Resultados',
    awards: 'Prêmios & Reconhecimentos',
    client: 'Cliente',
    duration: 'Duração',
    team: 'Equipe',
  },
  en: {
    problem: 'Problem',
    solution: 'Solution',
    role: 'Role',
    impact: 'Impact & Results',
    awards: 'Awards & Recognition',
    client: 'Client',
    duration: 'Duration',
    team: 'Team',
  },
  es: {
    problem: 'Problema',
    solution: 'Solución',
    role: 'Rol',
    impact: 'Impacto & Resultados',
    awards: 'Premios & Reconocimientos',
    client: 'Cliente',
    duration: 'Duración',
    team: 'Equipo',
  },
} as const

interface CaseStudySectionProps {
  project: ProjectRecord
}

export function CaseStudySection({ project }: CaseStudySectionProps) {
  const { locale, t } = useLanguage()

  const getField = (base: string) =>
    project[`${base}_${locale}` as keyof ProjectRecord] as string | undefined

  const problem = getField('problem')
  const solution = getField('solution')
  const role = getField('project_role')
  const impact = getField('impact')
  const awards = project.awards

  const labels = CASE_LABELS[locale]
  const metaItems = [
    { icon: Building2, label: labels.client, value: project.client },
    { icon: Clock, label: labels.duration, value: project.duration },
    { icon: Users, label: labels.team, value: project.team_size },
  ].filter((item) => item.value)

  const hasCaseContent = problem || solution || role || impact

  if (!hasCaseContent && metaItems.length === 0) return null

  const sections = [
    { icon: Target, title: labels.problem, content: problem, color: 'text-rose-400' },
    { icon: Lightbulb, title: labels.solution, content: solution, color: 'text-cyan-400' },
    { icon: User, title: labels.role, content: role, color: 'text-purple-400' },
    { icon: TrendingUp, title: labels.impact, content: impact, color: 'text-emerald-400' },
  ].filter((s) => s.content)

  return (
    <div className="space-y-6">
      {metaItems.length > 0 && (
        <div className="flex flex-wrap gap-4 pb-4 border-b border-[#1a1a22]">
          {metaItems.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.label}
                className="flex items-center gap-2 bg-[#101014] border border-[#1a1a22] px-3 py-2"
              >
                <Icon className="w-3.5 h-3.5 text-cyan-400" />
                <div>
                  <div className="text-[9px] font-mono text-gray-500 uppercase tracking-wider">
                    {item.label}
                  </div>
                  <div className="text-xs font-mono text-[#EDEDED]">{item.value}</div>
                </div>
              </div>
            )
          })}
        </div>
      )}

      <div className="grid sm:grid-cols-2 gap-6">
        {sections.map((section) => {
          const Icon = section.icon
          return (
            <div
              key={section.title}
              className="bg-[#101014] border border-[#1a1a22] p-5 space-y-3 hover:border-[#2a2a35] transition-colors"
            >
              <div className="flex items-center gap-2">
                <Icon className={`w-4 h-4 ${section.color}`} />
                <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-gray-300">
                  {section.title}
                </h3>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed">{section.content}</p>
            </div>
          )
        })}
      </div>

      {awards && awards.length > 0 && (
        <div className="bg-[#101014] border border-yellow-500/20 p-5 space-y-3">
          <div className="flex items-center gap-2">
            <Trophy className="w-4 h-4 text-yellow-400" />
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-yellow-400">
              {labels.awards}
            </h3>
          </div>
          <ul className="space-y-2">
            {awards.map((award, idx) => (
              <li key={idx} className="text-sm text-gray-300 flex items-start gap-2">
                <span className="text-yellow-400 mt-0.5">★</span>
                {award}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
