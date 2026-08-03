import { useLanguage } from '@/hooks/use-language'
import { Terminal, Shield, ArrowRight, Gamepad2, Code2 } from 'lucide-react'

export function HeroSection() {
  const { t } = useLanguage()

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center pt-24 pb-16 px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto w-full text-center space-y-8 relative z-10">
        {/* System OS Badge */}
        <div className="inline-flex items-center gap-2 bg-[#1A1A20] border border-cyan-500/40 px-4 py-1.5 text-xs font-mono text-cyan-400 shadow-[0_0_15px_rgba(0,240,255,0.15)] animate-fade-in">
          <Terminal className="w-4 h-4 text-cyan-400 animate-pulse" />
          <span>{t('hero_player')}</span>
          <span className="text-gray-500">//</span>
          <span className="text-emerald-400 font-bold">{t('hero_status')}</span>
        </div>

        {/* Main Hero Headline */}
        <div className="space-y-4">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold font-display tracking-tight text-[#EDEDED]">
            GAME DEVELOPER & <br />
            <span className="holo-text">GAMEPLAY PROGRAMMER</span>
          </h1>
          <p className="max-w-2xl mx-auto text-gray-300 text-sm sm:text-base font-sans leading-relaxed">
            {t('hero_desc')}
          </p>
        </div>

        {/* Tech Chips */}
        <div className="flex flex-wrap justify-center gap-2 pt-2 text-xs font-mono">
          {[
            'UNITY 6 / C#',
            'GAMEPLAY SYSTEMS',
            'ASP.NET & JAVA',
            'PHYSICS & COMBAT',
            'WEBGL GAMES',
          ].map((tech, idx) => (
            <span
              key={idx}
              className="bg-[#1A1A20] border border-[#2a2a35] text-purple-300 px-3 py-1 rounded-none hover:border-purple-500/60 transition-colors"
            >
              [{tech}]
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <a
            href="#projects"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-[#EDEDED] font-mono font-bold px-8 py-3 text-sm border border-purple-400/50 shadow-[0_0_20px_rgba(168,85,247,0.3)] transition-all hover:scale-105"
          >
            <Gamepad2 className="w-4 h-4" />
            {t('hero_btn_projects')}
          </a>

          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#1A1A20] hover:bg-[#202028] text-cyan-300 font-mono font-bold px-8 py-3 text-sm border border-cyan-500/50 transition-all hover:border-cyan-400"
          >
            <Terminal className="w-4 h-4 text-cyan-400" />
            {t('hero_btn_contact')}
          </a>
        </div>
      </div>
    </section>
  )
}
