import { useState } from 'react'
import { useLanguage } from '@/hooks/use-language'
import { HudFrame } from './HudFrame'
import { PixelNick, NickPose } from './PixelNick'
import { PixelCat } from './PixelCat'
import { ArrowDown, Github, ExternalLink, Mail } from 'lucide-react'

export function HeroSection() {
  const { t } = useLanguage()
  const [heroPose, setHeroPose] = useState<NickPose>('idle')

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-6 overflow-hidden">
      {/* Background Grid & Ambient Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.08)_0,transparent_70%)] pointer-events-none" />
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(#2A2A2A 1px, transparent 1px), linear-gradient(90deg, #2A2A2A 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="max-w-4xl w-full mx-auto relative z-10">
        <HudFrame label="SYSTEM.ONLINE" className="p-8 sm:p-12">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div className="inline-flex items-center gap-2 bg-purple-950/60 border border-purple-500/40 text-purple-300 text-xs font-mono px-3 py-1">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-ping" />
              {t('hero_player')}
            </div>

            {/* Interactive Nick Avatar in Hero */}
            <div
              className="cursor-pointer group flex items-center gap-3 bg-[#181818] border border-purple-500/30 px-3 py-1.5 hover:border-purple-500 transition-all rounded"
              onClick={() => {
                const poses: NickPose[] = ['idle', 'gaming', 'with-cat', 'coding', 'achievement']
                const next = poses[(poses.indexOf(heroPose) + 1) % poses.length]
                setHeroPose(next)
              }}
              title="Click to cycle Nick's pose!"
            >
              <PixelNick pose={heroPose} scale={0.8} />
              <div className="text-left font-mono text-[11px] hidden sm:block">
                <span className="text-purple-400 font-bold block">Nick (Dev Avatar)</span>
                <span className="text-gray-400 text-[10px]">Pose: {heroPose} ⚡</span>
              </div>
            </div>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#EDEDED] font-mono tracking-tight mb-3">
            Nicole Maira <span className="text-purple-400">(Nick)</span>
          </h1>

          <div className="text-lg sm:text-2xl font-mono text-cyan-400 mb-6 flex flex-wrap items-center gap-2">
            <span>{t('hero_role_1')}</span>
            <span className="text-purple-500">•</span>
            <span>{t('hero_role_2')}</span>
            <span className="text-purple-500">•</span>
            <span>{t('hero_role_3')}</span>
          </div>

          <p className="text-gray-300 font-sans text-base sm:text-lg max-w-2xl leading-relaxed mb-8">
            {t('hero_desc')}
          </p>

          <div className="flex flex-wrap gap-4 items-center">
            <a
              href="#projects"
              className="bg-purple-600 hover:bg-purple-500 text-white font-mono px-6 py-2.5 text-sm font-bold transition-all shadow-[0_0_15px_rgba(139,92,246,0.4)] flex items-center gap-2"
            >
              {t('hero_btn_projects')}
              <ArrowDown className="w-4 h-4" />
            </a>

            <a
              href="https://github.com/nicolemaira"
              target="_blank"
              rel="noreferrer"
              className="border border-[#2A2A2A] bg-[#181818] hover:border-purple-500 text-gray-300 hover:text-white font-mono px-4 py-2.5 text-sm transition-all flex items-center gap-2"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>

            <a
              href="https://nicolemaira.itch.io"
              target="_blank"
              rel="noreferrer"
              className="border border-[#2A2A2A] bg-[#181818] hover:border-purple-500 text-gray-300 hover:text-white font-mono px-4 py-2.5 text-sm transition-all flex items-center gap-2"
            >
              <ExternalLink className="w-4 h-4" />
              Itch.io
            </a>

            <a
              href="#contact"
              className="border border-[#2A2A2A] bg-[#181818] hover:border-purple-500 text-gray-300 hover:text-white font-mono px-4 py-2.5 text-sm transition-all flex items-center gap-2"
            >
              <Mail className="w-4 h-4" />
              {t('hero_btn_contact')}
            </a>
          </div>
        </HudFrame>
      </div>
    </section>
  )
}
