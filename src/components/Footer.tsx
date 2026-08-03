import { CyberDecal } from './CyberDecals'
import { CyberMicroDetails } from './CyberMicroDetails'
import { Github, Gamepad2, Linkedin, Mail, MessageSquare } from 'lucide-react'

export function Footer() {
  return (
    <footer className="relative bg-[#060608] border-t border-cyan-500/15 py-12 px-6 font-mono text-xs text-gray-400 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />

      <div className="max-w-6xl mx-auto space-y-6">
        <CyberMicroDetails className="justify-center" count={8} offset={0} />

        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="border border-cyan-500/40 bg-[#121218] px-3 py-1 font-bold text-cyan-400">
              NICK_OS // V3.0
            </div>
            <CyberDecal variant="barcode" />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://pls-nick.itch.io/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-purple-400 transition-colors flex items-center gap-1"
            >
              <Gamepad2 className="w-3.5 h-3.5 text-purple-400" /> Itch.io
            </a>
            <a
              href="https://github.com/NicolePLSilva"
              target="_blank"
              rel="noreferrer"
              className="hover:text-cyan-400 transition-colors flex items-center gap-1"
            >
              <Github className="w-3.5 h-3.5 text-cyan-400" /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/nicole-maira/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-400 transition-colors flex items-center gap-1"
            >
              <Linkedin className="w-3.5 h-3.5 text-blue-400" /> LinkedIn
            </a>
            <a
              href="https://wa.me/5571985304202"
              target="_blank"
              rel="noreferrer"
              className="hover:text-emerald-400 transition-colors flex items-center gap-1"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-400" /> WhatsApp
            </a>
            <a
              href="mailto:nicolemairaplsilva@gmail.com"
              className="hover:text-rose-400 transition-colors flex items-center gap-1"
            >
              <Mail className="w-3.5 h-3.5 text-rose-400" /> Email
            </a>
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
