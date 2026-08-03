import { useLanguage } from '@/hooks/use-language'
import { PixelCat } from './PixelCat'
import { Github, Linkedin, Mail, ExternalLink, MessageCircle } from 'lucide-react'

interface FooterProps {
  scanlines: boolean
  onToggleScanlines: () => void
  onPressStart: () => void
}

export function Footer({ scanlines, onToggleScanlines, onPressStart }: FooterProps) {
  const { t } = useLanguage()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="border-t border-[#1a1a22] bg-[#080808] py-12 px-6 font-mono text-xs text-gray-400 relative">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <PixelCat state="sleep" />
          <div>
            <div className="text-gray-200 font-bold">NICOLE MAIRA (NICK)</div>
            <div className="text-gray-500">
              Game Developer & Software Engineer © {new Date().getFullYear()}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4 text-gray-300">
          <a
            href="https://github.com/NicolePLSilva"
            target="_blank"
            rel="noreferrer"
            className="hover:text-purple-400 transition-colors"
            title="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/nicole-maira/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-purple-400 transition-colors"
            title="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href="https://pls-nick.itch.io/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-purple-400 transition-colors flex items-center gap-1"
            title="Itch.io"
          >
            <ExternalLink className="w-4 h-4" />
          </a>
          <a
            href="https://wa.me/5571985304202"
            target="_blank"
            rel="noreferrer"
            className="hover:text-purple-400 transition-colors"
            title="WhatsApp"
          >
            <MessageCircle className="w-4 h-4" />
          </a>
          <a
            href="mailto:nicolemairaplsilva@gmail.com"
            className="hover:text-purple-400 transition-colors"
            title="Email"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={onPressStart}
            className="bg-purple-600/30 hover:bg-purple-600 text-purple-300 hover:text-[#EDEDED] border border-purple-500/50 px-3 py-1 font-mono transition-all animate-pulse"
          >
            🕹️ {t('footer_press_start')}
          </button>
          <button
            onClick={onToggleScanlines}
            className={`px-2 py-1 border text-[10px] ${
              scanlines
                ? 'border-cyan-500 text-cyan-400 bg-cyan-950/20'
                : 'border-[#1a1a22] text-gray-500'
            }`}
          >
            {t('footer_scanlines')}: {scanlines ? 'ON' : 'OFF'}
          </button>
          <button onClick={scrollToTop} className="hover:text-purple-400 transition-colors">
            {t('footer_back_top')}
          </button>
        </div>
      </div>
    </footer>
  )
}
