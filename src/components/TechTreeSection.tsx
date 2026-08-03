import { useEffect, useState } from 'react'
import { useLanguage } from '@/hooks/use-language'
import { getStack, StackRecord } from '@/services/stack'

export function TechTreeSection() {
  const { t } = useLanguage()
  const [stack, setStack] = useState<StackRecord[]>([])

  useEffect(() => {
    getStack()
      .then(setStack)
      .catch(() => {})
  }, [])

  return (
    <section className="py-20 px-6 bg-[#090909]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="text-xs font-mono text-purple-400 tracking-widest uppercase">
            [{t('stack_subtitle')}]
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-mono text-[#EDEDED]">
            {t('stack_title')}
          </h2>
        </div>

        <div className="space-y-6">
          {stack.map((group) => (
            <div key={group.id} className="bg-[#101010] border border-[#2A2A2A] p-5">
              <h3 className="text-sm font-bold font-mono text-purple-400 mb-3 uppercase tracking-wider">
                // {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items?.map((item) => (
                  <span
                    key={item}
                    className="text-xs font-mono bg-[#181818] border border-purple-900/50 text-gray-200 px-3 py-1 hover:border-cyan-400 transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
