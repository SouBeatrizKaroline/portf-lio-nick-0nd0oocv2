import { useLanguage } from '@/hooks/use-language'
import { HudFrame } from './HudFrame'

export function AboutSection() {
  const { t } = useLanguage()

  return (
    <section id="about" className="py-20 px-6 bg-[#090909]">
      <div className="max-w-4xl mx-auto">
        <HudFrame label="CHARACTER_BIO" className="p-8 sm:p-10">
          <div className="text-xs font-mono text-purple-400 mb-1 tracking-widest uppercase">
            [{t('about_subtitle')}]
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-mono text-[#EDEDED] mb-6">
            {t('about_title')}
          </h2>

          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="relative group">
              <div className="aspect-square bg-[#181818] border-2 border-purple-500/50 p-2 overflow-hidden flex items-center justify-center">
                <img
                  src="https://img.usecurling.com/p/300/300?q=pixel%20art%20avatar%20game%20developer&color=purple"
                  alt="Nicole Maira"
                  className="w-full h-full object-cover image-rendering-pixelated"
                />
              </div>
            </div>

            <div className="md:col-span-2 space-y-4 text-gray-300 text-sm sm:text-base leading-relaxed">
              <p>{t('about_text_1')}</p>
              <p>{t('about_text_2')}</p>
              <p>{t('about_text_3')}</p>
            </div>
          </div>
        </HudFrame>
      </div>
    </section>
  )
}
