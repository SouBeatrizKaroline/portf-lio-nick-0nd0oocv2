import { useLanguage } from '@/hooks/use-language'
import { HudFrame } from './HudFrame'
import { SectionReveal } from './SectionReveal'
import { NickAvatarShowcase } from './NickAvatarShowcase'
import { CyberMicroDetails } from './CyberMicroDetails'

export function AboutSection() {
  const { t } = useLanguage()

  return (
    <section
      id="about"
      className="py-16 sm:py-20 px-4 sm:px-6 bg-[#080808] space-y-8 sm:space-y-12"
    >
      <div className="max-w-5xl mx-auto">
        <SectionReveal>
          <HudFrame label="DEVELOPER_PROFILE" status="OPTIMAL">
            <div className="text-xs font-mono text-purple-400 mb-1 tracking-widest uppercase">
              [{t('about_subtitle')}]
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-[#EDEDED] mb-6">
              {t('about_title')}
            </h2>

            <div className="space-y-4 text-gray-300 text-sm sm:text-base leading-relaxed font-sans">
              <p>{t('about_text_1')}</p>
              <p>{t('about_text_2')}</p>
              <p>{t('about_text_3')}</p>
            </div>
          </HudFrame>
        </SectionReveal>
      </div>

      <div className="max-w-5xl mx-auto">
        <SectionReveal delay={150}>
          <NickAvatarShowcase />
        </SectionReveal>
      </div>

      <div className="max-w-5xl mx-auto">
        <CyberMicroDetails className="justify-center pt-4" count={4} offset={2} />
      </div>
    </section>
  )
}
