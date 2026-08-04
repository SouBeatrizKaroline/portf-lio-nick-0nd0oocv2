import { useLanguage } from '@/hooks/use-language'
import { PixelNick } from './PixelNick'
import { CyberDecal } from './CyberDecals'
import { Terminal, Github, Gamepad2, Linkedin, MessageSquare } from 'lucide-react'

export function HeroSection() {
  const { t, locale } = useLanguage()

  return (
    <section
      id="home"
      className="relative min-h-[85vh] flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 overflow-hidden"
    >
      <div className="absolute top-8 left-6 hidden md:block">
        <CyberDecal variant="decal-004" />
      </div>
      <div className="absolute top-8 right-6 hidden md:block text-right font-mono text-[10px] text-gray-500">
        <div>SYS_NODE // AMERICA_BR_01</div>
        <div className="text-cyan-400">STATE: OPTIMAL</div>
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-purple-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto w-full text-center space-y-6 relative z-10">
        <div className="flex justify-center mb-2">
          <div className="scale-75 sm:scale-90 lg:scale-100 transition-transform duration-500">
            <PixelNick pose="idle" showSpeechBubble={true} />
          </div>
        </div>

        <div className="inline-flex items-center gap-2 bg-[#121218]/80 border border-cyan-500/40 px-4 py-1.5 text-xs font-mono text-cyan-400 backdrop-blur-sm">
          <Terminal className="w-4 h-4 animate-pulse" />
          <span className="font-bold">{t('hero_player')}</span>
          <span className="text-gray-600">//</span>
          <span className="text-emerald-400 font-bold">{t('hero_status')}</span>
        </div>

        <h1 className="text-responsive-hero font-bold font-display tracking-tight text-[#EDEDED] title-glow">
          GAME DEVELOPER &{' '}
          <span className="holo-text bg-gradient-to-r from-cyan-400 via-purple-400 to-rose-400 bg-clip-text text-transparent">
            GAMEPLAY PROGRAMMER
          </span>
        </h1>

        <p className="max-w-2xl mx-auto text-gray-300 text-sm sm:text-base font-sans leading-relaxed">
          {t('hero_desc')}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-gray-400">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
            {locale === 'pt'
              ? 'Disponível para oportunidades'
              : locale === 'es'
                ? 'Disponible para oportunidades'
                : 'Available for opportunities'}
          </span>
          <span className="text-gray-700 hidden sm:inline">|</span>
          <span className="hidden sm:flex items-center gap-1.5">
            <span className="text-cyan-400">⏱</span>
            {locale === 'pt'
              ? 'Resposta em até 24h'
              : locale === 'es'
                ? 'Respuesta en 24h'
                : 'Response within 24h'}
          </span>
        </div>

        <div className="flex flex-wrap justify-center gap-2 text-xs font-mono">
          {[
            'UNITY 6 / C#',
            'STATE MACHINE',
            'PHYSICS & COMBAT',
            'WEBGL OPTIMIZATION',
            'ASP.NET CORE',
          ].map((tech, idx) => (
            <span
              key={idx}
              className="bg-[#121218]/80 border border-[#2a2a3a] text-purple-300 px-3 py-1 hover:border-cyan-400/60 transition-colors backdrop-blur-sm"
            >
              [{tech}]
            </span>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 pt-2 font-mono">
          <a
            href="https://pls-nick.itch.io/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-[#EDEDED] font-bold px-6 py-3 text-xs border border-purple-400/60 shadow-[0_0_20px_rgba(168,85,247,0.3)] transition-all hover:scale-105 touch-min"
          >
            <Gamepad2 className="w-4 h-4 text-cyan-300" />
            <span>PLAY GAMES ON ITCH.IO</span>
          </a>
          <a
            href="https://github.com/NicolePLSilva"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#14141D]/80 hover:bg-[#1c1c28] text-cyan-300 font-bold px-5 py-3 text-xs border border-cyan-500/50 transition-all hover:border-cyan-400 touch-min"
          >
            <Github className="w-4 h-4 text-cyan-400" />
            <span>GITHUB</span>
          </a>
          <a
            href="https://www.linkedin.com/in/nicole-maira/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#14141D]/80 hover:bg-[#1c1c28] text-blue-300 font-bold px-5 py-3 text-xs border border-blue-500/50 transition-all hover:border-blue-400 touch-min"
          >
            <Linkedin className="w-4 h-4 text-blue-400" />
            <span>LINKEDIN</span>
          </a>
          <a
            href="https://wa.me/557185304202"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#14141D]/80 hover:bg-[#1c1c28] text-emerald-300 font-bold px-5 py-3 text-xs border border-emerald-500/50 transition-all hover:border-emerald-400 touch-min"
          >
            <MessageSquare className="w-4 h-4 text-emerald-400" />
            <span>WHATSAPP</span>
          </a>
        </div>
      </div>
    </section>
  )
}
