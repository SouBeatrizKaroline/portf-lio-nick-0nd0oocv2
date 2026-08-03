import { useState, useEffect } from 'react'
import { useLanguage } from '@/hooks/use-language'
import { useReducedMotion } from '@/hooks/use-reduced-motion'
import { HudFrame } from './HudFrame'
import { StarfieldBackground } from './StarfieldBackground'
import { PixelNick, NickPose } from './PixelNick'
import { ArrowDown, Github, ExternalLink, Mail } from 'lucide-react'

export function HeroSection() {
  const { t } = useLanguage()
  const reduced = useReducedMotion()
  const [heroPose, setHeroPose] = useState<NickPose>('idle')
  const [roleIdx, setRoleIdx] = useState(0)

  const roles = [t('hero_role_1'), t('hero_role_2'), t('hero_role_3'), t('hero_role_4')]

  useEffect(() => {
    if (reduced) return
    const interval = setInterval(() => {
      setRoleIdx((prev) => (prev + 1) % roles.length)
    }, 2800)
    return () => clearInterval(interval)
  }, [reduced, roles.length])

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-6 overflow-hidden">
      <StarfieldBackground />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.06)_0,transparent_70%)] pointer-events-none" />
      <div className="absolute inset-0 holo-grid opacity-30 pointer-events-none" />

      <div className="max-w-4xl w-full mx-auto relative z-10">
        <HudFrame label="SYSTEM.ONLINE" className="p-8 sm:p-12">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div className="inline-flex items-center gap-2 bg-purple-950/40 border border-purple-500/30 text-purple-300 text-xs font-mono px-3 py-1">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              {t('hero_player')}
            </div>

            <div
              className="cursor-pointer group flex items-center gap-3 bg-[#101014] border border-purple-500/20 px-3 py-1.5 hover:border-purple-500/50 transition-all rounded"
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

          <div className="text-[10px] font-mono text-cyan-400/50 tracking-[0.3em] uppercase mb-2">
            {t('module_profile')}
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold font-display text-[#EDEDED] tracking-tight mb-2">
            Nicole Maira Passos Lopes da Silva
          </h1>

          <div className="text-base sm:text-xl font-mono text-purple-400 mb-4">
            [ CODENAME: <span className="text-cyan-400">NICK</span> ]
          </div>

          <div className="text-lg sm:text-2xl font-mono text-cyan-400 mb-6 h-8 flex items-center gap-2">
            <span className="text-purple-500">{'>'}</span>
            <span key={roleIdx} className="animate-fade-in">
              {roles[roleIdx]}
            </span>
            <span className="animate-pulse text-purple-400">_</span>
          </div>

          <p className="text-gray-300 font-sans text-base sm:text-lg max-w-2xl leading-relaxed mb-8">
            {t('hero_desc')}
          </p>

          <div className="flex flex-wrap gap-4 items-center">
            <a
              href="#projects"
              className="bg-purple-600 hover:bg-purple-500 text-[#EDEDED] font-mono px-6 py-2.5 text-sm font-bold transition-all shadow-[0_0_15px_rgba(139,92,246,0.3)] flex items-center gap-2"
            >
              {t('hero_btn_projects')}
              <ArrowDown className="w-4 h-4" />
            </a>
            <a
              href="https://github.com/NicolePLSilva"
              target="_blank"
              rel="noreferrer"
              className="border border-[#1a1a22] bg-[#101014] hover:border-purple-500/50 text-gray-300 hover:text-[#EDEDED] font-mono px-4 py-2.5 text-sm transition-all flex items-center gap-2"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
            <a
              href="https://pls-nick.itch.io/"
              target="_blank"
              rel="noreferrer"
              className="border border-[#1a1a22] bg-[#101014] hover:border-purple-500/50 text-gray-300 hover:text-[#EDEDED] font-mono px-4 py-2.5 text-sm transition-all flex items-center gap-2"
            >
              <ExternalLink className="w-4 h-4" />
              Itch.io
            </a>
            <a
              href="mailto:nicolemairaplsilva@gmail.com"
              className="border border-[#1a1a22] bg-[#101014] hover:border-purple-500/50 text-gray-300 hover:text-[#EDEDED] font-mono px-4 py-2.5 text-sm transition-all flex items-center gap-2"
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
