import { useLanguage } from '@/hooks/use-language'
import { HudFrame } from './HudFrame'
import { NickAvatarShowcase } from './NickAvatarShowcase'
import { PixelNick } from './PixelNick'

export function AboutSection() {
  const { t } = useLanguage()

  return (
    <section id="about" className="py-20 px-6 bg-[#090909] space-y-12">
      <div className="max-w-4xl mx-auto">
        <HudFrame label="CHARACTER_BIO" className="p-8 sm:p-10">
          <div className="text-xs font-mono text-purple-400 mb-1 tracking-widest uppercase">
            [{t('about_subtitle')}]
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-mono text-[#EDEDED] mb-6">
            {t('about_title')}
          </h2>

          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="relative group flex flex-col items-center justify-center">
              <div className="aspect-square w-full bg-[#181818] border-2 border-purple-500/50 p-4 overflow-hidden flex flex-col items-center justify-center relative shadow-[0_0_20px_rgba(139,92,246,0.2)]">
                <PixelNick
                  pose="coding"
                  scale={1.2}
                  showSpeechBubble
                  speechText="C# & Unity Engine ✨"
                />
                <div className="mt-2 text-[10px] font-mono text-purple-300 text-center">
                  Nick (Nicole Maira)
                </div>
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

      {/* Interactive Avatar Showcase */}
      <div className="max-w-4xl mx-auto">
        <NickAvatarShowcase />
      </div>
    </section>
  )
}
