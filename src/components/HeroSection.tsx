import { useLanguage } from '@/hooks/use-language'
import { PixelNick } from './PixelNick'
import { Terminal, Github, Gamepad2, Linkedin, Mail, MessageSquare } from 'lucide-react'

export function HeroSection() {
  const { t } = useLanguage()

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center pt-24 pb-16 px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto w-full text-center space-y-8 relative z-10">
        {/* Pixel Persona Avatar Display */}
        <div className="flex justify-center mb-2">
          <PixelNick pose="idle" scale={1.2} showSpeechBubble={true} />
        </div>

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

        {/* Action Buttons: GitHub, Itch.io, LinkedIn, Email, WhatsApp */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-4 font-mono">
          <a
            href="https://pls-nick.itch.io/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-[#EDEDED] font-bold px-5 py-2.5 text-xs border border-purple-400/50 shadow-[0_0_15px_rgba(168,85,247,0.3)] transition-all hover:scale-105"
          >
            <Gamepad2 className="w-4 h-4" />
            {t('hero_btn_itch')}
          </a>

          <a
            href="https://github.com/NicolePLSilva"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#1A1A20] hover:bg-[#202028] text-cyan-300 font-bold px-5 py-2.5 text-xs border border-cyan-500/50 transition-all hover:border-cyan-400"
          >
            <Github className="w-4 h-4 text-cyan-400" />
            {t('hero_btn_github')}
          </a>

          <a
            href="https://www.linkedin.com/in/nicole-maira/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#1A1A20] hover:bg-[#202028] text-blue-300 font-bold px-5 py-2.5 text-xs border border-blue-500/50 transition-all hover:border-blue-400"
          >
            <Linkedin className="w-4 h-4 text-blue-400" />
            {t('hero_btn_linkedin')}
          </a>

          <a
            href="mailto:nicolemairaplsilva@gmail.com"
            className="inline-flex items-center justify-center gap-2 bg-[#1A1A20] hover:bg-[#202028] text-purple-300 font-bold px-5 py-2.5 text-xs border border-purple-500/50 transition-all hover:border-purple-400"
          >
            <Mail className="w-4 h-4 text-purple-400" />
            {t('hero_btn_email')}
          </a>

          <a
            href="https://wa.me/5571985304202"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#1A1A20] hover:bg-[#202028] text-emerald-300 font-bold px-5 py-2.5 text-xs border border-emerald-500/50 transition-all hover:border-emerald-400"
          >
            <MessageSquare className="w-4 h-4 text-emerald-400" />
            {t('hero_btn_whatsapp')}
          </a>
        </div>
      </div>
    </section>
  )
}
