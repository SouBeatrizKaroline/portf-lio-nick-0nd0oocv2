import { useEffect, useState } from 'react'
import { useLanguage } from '@/hooks/use-language'
import { getStack, StackRecord } from '@/services/stack'
import { SectionReveal } from './SectionReveal'
import { ModuleHeader } from './ModuleHeader'
import { TechPanel } from './TechPanel'

export function TechTreeSection() {
  const { t } = useLanguage()
  const [stack, setStack] = useState<StackRecord[]>([])

  useEffect(() => {
    getStack()
      .then(setStack)
      .catch(() => {})
  }, [])

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 bg-[#0B0B0F]">
      <div className="max-w-4xl mx-auto">
        <SectionReveal>
          <ModuleHeader
            moduleLabel={t('module_tech')}
            subtitle={t('stack_subtitle')}
            title={t('stack_title')}
          />
        </SectionReveal>

        <SectionReveal delay={100}>
          <div className="space-y-6">
            {stack.map((group) => (
              <TechPanel key={group.id} className="p-5" hover={false}>
                <h3 className="text-sm font-bold font-mono text-purple-400 mb-3 uppercase tracking-wider">
                  // {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items?.map((item: string) => (
                    <span
                      key={item}
                      className="text-xs font-mono bg-[#141418] border border-purple-900/40 text-gray-200 px-3 py-1 hover:border-cyan-400/50 transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </TechPanel>
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}
