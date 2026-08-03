import { CyberDecal } from './CyberDecals'
import { CyberMicroDetails } from './CyberMicroDetails'
import { useLanguage } from '@/hooks/use-language'
import { Linkedin, Github, Mail, MessageSquare, Gamepad2 } from 'lucide-react'

export function Footer() {
  const { t } = useLanguage()

  const handleEmailClick = (e: React.MouseEvent) => {
    e.preventDefault()
    const u = 'nicolemairaplsilva'
    const d = 'gmail.com'
    window.location.href = `mailto:${u}@${d}`
  }

  return (
    <footer className="relative bg-[#060608] border-t border-cyan-500/15 py-8 sm:py-10 px-4 sm:px-6 font-mono text-xs text-gray-400 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />

      <div className="max-w-6xl mx-auto space-y-6">
        <CyberMicroDetails className="justify-center" count={6} offset={0} />

        <div className="flex flex-col items-center gap-3">
          <div className="flex items-center gap-2 text-[10px]">
            <span className="flex items-center gap-1.5 text-emerald-400">
              <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
              {t('footer_node_online')}
            </span>
          </div>
          <div className="text-[10px] text-gray-500 text-center">
            {t('footer_user_profile')} <span className="text-gray-700 mx-1">//</span>{' '}
            {t('footer_status')}
          </div>
        </div>

        <div className="flex flex-col items-center gap-3">
          <div className="text-[9px] text-cyan-400/60 tracking-widest uppercase">
            {t('footer_connection')}
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://www.linkedin.com/in/nicole-maira/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 hover:text-blue-400 transition-colors touch-min px-2"
            >
              <Linkedin className="w-3.5 h-3.5 text-blue-400" /> LinkedIn
            </a>
            <a
              href="https://github.com/NicolePLSilva"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors touch-min px-2"
            >
              <Github className="w-3.5 h-3.5 text-cyan-400" /> GitHub
            </a>
            <a
              href="https://pls-nick.itch.io/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 hover:text-rose-400 transition-colors touch-min px-2"
            >
              <Gamepad2 className="w-3.5 h-3.5 text-rose-400" /> Itch.io
            </a>
            <button
              onClick={handleEmailClick}
              className="flex items-center gap-1.5 hover:text-purple-400 transition-colors touch-min px-2 bg-transparent border-0 cursor-pointer font-mono text-xs text-gray-400"
            >
              <Mail className="w-3.5 h-3.5 text-purple-400" /> {t('footer_email_btn')}
            </button>
            <a
              href="https://wa.me/5511991467419"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors touch-min px-2"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-400" /> WhatsApp
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-4 border-t border-[#1a1a22]">
          <div className="flex items-center gap-3">
            <div className="border border-cyan-500/40 bg-[#121218] px-3 py-1 font-bold text-cyan-400">
              NICK_OS // V3.0
            </div>
            <CyberDecal variant="barcode" />
          </div>

          <div className="text-gray-500 text-[10px] text-center md:text-right">
            <div>© {new Date().getFullYear()} Nicole (Nick) Lopes. All rights reserved.</div>
            <div className="text-cyan-500/60 mt-0.5">
              SYSTEM_STATUS: ALL_MODULES_OPTIMAL // CAT_CORE: PURRING
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
