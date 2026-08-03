import { useLanguage } from '@/hooks/use-language'
import { PixelNick } from './PixelNick'
import { CyberDecal } from './CyberDecals'
import {
  Terminal,
  Github,
  Gamepad2,
  Linkedin,
  Mail,
  MessageSquare,
  Play,
  Sparkles,
} from 'lucide-react'

export function HeroSection() {
  const { t } = useLanguage()

  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 overflow-hidden"
    >
      {/* Grid Coordinates HUD Overlay */}
      <div className="absolute top-8 left-6 hidden md:block">
        <CyberDecal variant="decal-004" />
      </div>
      <div className="absolute top-8 right-6 hidden md:block text-right font-mono text-[10px] text-gray-500">
        <div>SYS_NODE // AMERICA_BR_01</div>
        <div className="text-cyan-400">STATE: OPTIMAL</div>
      </div>

      <div className="max-w-5xl mx-auto w-full text-center space-y-8 relative z-10">
        {/* Pixel Persona Avatar Display */}
        <div className="flex justify-center mb-2 relative">
          <PixelNick pose="idle" scale={1.25} showSpeechBubble={true} />
        </div>

        {/* System OS Badge */}
        <div className="inline-flex items-center gap-2 bg-[#121218] border border-cyan-500/50 px-4 py-1.5 text-xs font-mono text-cyan-400 shadow-[0_0_20px_rgba(0,240,255,0.2)]">
          <Terminal className="w-4 h-4 text-cyan-400 animate-pulse" />
          <span className="font-bold">{t('hero_player') || 'NICK // GAME DEVELOPER'}</span>
          <span className="text-gray-500">//</span>
          <span className="text-emerald-400 font-bold">
            {t('hero_status') || 'AVAILABLE FOR AAA & INDIE'}
          </span>
        </div>

        {/* Main Hero Headline */}
        <div className="space-y-4">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold font-display tracking-tight text-[#EDEDED] leading-none">
            GAME DEVELOPER & <br />
            <span className="holo-text bg-gradient-to-r from-cyan-400 via-purple-400 to-rose-400 bg-clip-text text-transparent">
              GAMEPLAY PROGRAMMER
            </span>
          </h1>
          <p className="max-w-2xl mx-auto text-gray-300 text-sm sm:text-base font-sans leading-relaxed">
            {t('hero_desc') ||
              'Specialized in Unity, C#, State Machines, Physics & Combat Systems. Designing high-performance WebGL and Mobile experiences for gaming studios.'}
          </p>
        </div>

        {/* Tech Chips */}
        <div className="flex flex-wrap justify-center gap-2 pt-2 text-xs font-mono">
          {[
            'UNITY 6 / C#',
            'STATE MACHINE',
            'PHYSICS & COMBAT',
            'WEBGL OPTIMIZATION',
            'ASP.NET CORE',
          ].map((tech, idx) => (
            <span
              key={idx}
              className="bg-[#121218] border border-[#2a2a3a] text-purple-300 px-3 py-1 hover:border-cyan-400/60 transition-colors shadow-sm"
            >
              [{tech}]
            </span>
          ))}
        </div>

        {/* Action Buttons: Itch.io, GitHub, LinkedIn, Email, WhatsApp */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-4 font-mono">
          <a
            href="https://pls-nick.itch.io/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-[#EDEDED] font-bold px-6 py-3 text-xs border border-purple-400/60 shadow-[0_0_20px_rgba(168,85,247,0.4)] transition-all hover:scale-105"
          >
            <Gamepad2 className="w-4 h-4 text-cyan-300" />
            <span>PLAY GAMES ON ITCH.IO</span>
          </a>

          <a
            href="https://github.com/NicolePLSilva"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#14141D] hover:bg-[#1c1c28] text-cyan-300 font-bold px-5 py-3 text-xs border border-cyan-500/50 transition-all hover:border-cyan-400"
          >
            <Github className="w-4 h-4 text-cyan-400" />
            <span>GITHUB</span>
          </a>

          <a
            href="https://www.linkedin.com/in/nicole-maira/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#14141D] hover:bg-[#1c1c28] text-blue-300 font-bold px-5 py-3 text-xs border border-blue-500/50 transition-all hover:border-blue-400"
          >
            <Linkedin className="w-4 h-4 text-blue-400" />
            <span>LINKEDIN</span>
          </a>

          <a
            href="mailto:nicolemairaplsilva@gmail.com"
            className="inline-flex items-center justify-center gap-2 bg-[#14141D] hover:bg-[#1c1c28] text-purple-300 font-bold px-5 py-3 text-xs border border-purple-500/50 transition-all hover:border-purple-400"
          >
            <Mail className="w-4 h-4 text-purple-400" />
            <span>EMAIL</span>
          </a>

          <a
            href="https://wa.me/5571985304202"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#14141D] hover:bg-[#1c1c28] text-emerald-300 font-bold px-5 py-3 text-xs border border-emerald-500/50 transition-all hover:border-emerald-400"
          >
            <MessageSquare className="w-4 h-4 text-emerald-400" />
            <span>WHATSAPP</span>
          </a>
        </div>
      </div>
    </section>
  )
}
