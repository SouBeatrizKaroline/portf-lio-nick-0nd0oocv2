import { useLanguage } from '@/hooks/use-language'
import { HudFrame } from './HudFrame'
import { SectionReveal } from './SectionReveal'
import { CyberMicroDetails } from './CyberMicroDetails'
import {
  ExternalLink,
  Github,
  Gamepad2,
  Linkedin,
  Mail,
  MessageSquare,
  Terminal,
  Wifi,
} from 'lucide-react'

export function ContactSection() {
  const { t } = useLanguage()

  const connectionLinks = [
    {
      platform: 'Itch.io',
      desc: 'Playable Games',
      cmd: 'open itch.io/nick',
      status: 'EXPLORE_GAMES',
      statusColor:
        'text-rose-300 border-rose-500/60 bg-rose-950/40 shadow-[0_0_12px_rgba(244,63,94,0.3)]',
      hoverGlow: 'hover:border-rose-400 hover:shadow-[0_0_20px_rgba(244,63,94,0.3)]',
      url: 'https://pls-nick.itch.io/',
      icon: Gamepad2,
      featured: true,
    },
    {
      platform: 'GitHub',
      desc: 'Source Repositories',
      cmd: 'connect github.com/NicolePLSilva',
      status: 'ACTIVE_CODE',
      statusColor: 'text-cyan-400 border-cyan-500/40 bg-cyan-950/30',
      hoverGlow: 'hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(0,240,255,0.3)]',
      url: 'https://github.com/NicolePLSilva',
      icon: Github,
    },
    {
      platform: 'LinkedIn',
      desc: 'Professional Profile',
      cmd: 'connect linkedin.com/nicole-maira',
      status: 'AVAILABLE',
      statusColor: 'text-blue-400 border-blue-500/40 bg-blue-950/30',
      hoverGlow: 'hover:border-blue-400 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]',
      url: 'https://www.linkedin.com/in/nicole-maira/',
      icon: Linkedin,
    },
    {
      platform: 'WhatsApp',
      desc: 'Direct Message',
      cmd: 'dial +55 71 98530-4202',
      status: '+55 71 98530-4202',
      statusColor: 'text-emerald-400 border-emerald-500/40 bg-emerald-950/30',
      hoverGlow: 'hover:border-emerald-400 hover:shadow-[0_0_15px_rgba(16,185,129,0.3)]',
      url: 'https://wa.me/5571985304202',
      icon: MessageSquare,
    },
    {
      platform: 'Email',
      desc: 'Direct Contact',
      cmd: 'send nicolemairaplsilva@gmail.com',
      status: 'nicolemairaplsilva@gmail.com',
      statusColor: 'text-purple-400 border-purple-500/40 bg-purple-950/30',
      hoverGlow: 'hover:border-purple-400 hover:shadow-[0_0_15px_rgba(168,85,247,0.3)]',
      url: 'mailto:nicolemairaplsilva@gmail.com',
      icon: Mail,
    },
  ]

  return (
    <section id="contact" className="py-16 sm:py-20 px-4 sm:px-6 bg-[#080808]">
      <div className="max-w-4xl mx-auto">
        <SectionReveal>
          <HudFrame label="SYSTEM_CONNECTION // TERMINAL_NODE" status="ONLINE">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div>
                <div className="text-xs font-mono text-cyan-400 mb-1 tracking-widest uppercase">
                  [DIRECT PLATFORM LINK PROTOCOL]
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold font-display text-[#EDEDED]">
                  {t('contact_connection_title')}
                </h2>
              </div>

              <div className="flex items-center gap-2 font-mono text-[10px] text-emerald-400 bg-emerald-950/40 border border-emerald-500/30 px-3 py-1">
                <Terminal className="w-3.5 h-3.5" />
                <span>TERMINAL_STATUS: READY</span>
              </div>
            </div>

            <div className="bg-[#0C0C10] border border-[#1a1a22] p-4 mb-6 font-mono text-xs space-y-1">
              <div className="text-gray-500">
                <span className="text-emerald-400">●</span> CONNECTION_TERMINAL v3.0
              </div>
              <div className="text-gray-600">
                <span className="text-cyan-400">{t('contact_terminal_prompt')}</span>{' '}
                <span className="text-gray-300">initialize --channels</span>
              </div>
              <div className="text-purple-400/70">
                {'> '} Scanning available communication nodes...
              </div>
              <div className="text-emerald-400/70 flex items-center gap-1">
                {'> '} <Wifi className="w-3 h-3" /> 5 nodes detected. CAT_CORE monitoring.
              </div>
            </div>

            <div className="space-y-2.5 font-mono text-xs">
              {connectionLinks.map((item) => {
                const Icon = item.icon
                return (
                  <a
                    key={item.platform}
                    href={item.url}
                    target={item.url.startsWith('mailto:') ? '_self' : '_blank'}
                    rel="noreferrer"
                    aria-label={`${item.platform} - ${item.desc}`}
                    className={`flex items-center justify-between p-3.5 bg-[#101015] border border-[#262635] transition-all group touch-min ${
                      item.featured ? 'bg-[#14121d] border-rose-500/40' : ''
                    } ${item.hoverGlow}`}
                  >
                    <div className="flex items-center gap-3 min-w-0 flex-1">
                      <Icon
                        className={`w-4 h-4 shrink-0 ${item.featured ? 'text-rose-400' : 'text-cyan-400'}`}
                      />
                      <div className="min-w-0 flex-1">
                        <div className="text-[#EDEDED] group-hover:text-cyan-300 font-bold flex items-baseline gap-2">
                          <span>{item.platform}</span>
                          <span className="text-gray-600 font-normal text-[10px]">
                            // {item.desc}
                          </span>
                        </div>
                        <div className="text-gray-600 text-[10px] truncate">
                          <span className="text-purple-500/50">$</span> {item.cmd}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 shrink-0 ml-2">
                      <span
                        className={`hidden sm:inline-block px-2.5 py-1 border text-[9px] font-bold uppercase ${item.statusColor}`}
                      >
                        {item.status}
                      </span>
                      <ExternalLink className="w-3.5 h-3.5 text-gray-500 group-hover:text-cyan-400 transition-colors" />
                    </div>
                  </a>
                )
              })}
            </div>

            <div className="mt-6 bg-[#0C0C10] border border-[#1a1a22] p-3 font-mono text-[10px] text-gray-500 flex items-center justify-between">
              <span>
                <span className="text-emerald-400">●</span> All channels operational.{' '}
                <span className="text-purple-400/60">CAT_CORE: PURRFORMANCE OPTIMAL</span>
              </span>
              <span className="text-cyan-400/40">ENC: AES-256 // SECURE</span>
            </div>
          </HudFrame>
        </SectionReveal>

        <CyberMicroDetails className="justify-center mt-8" count={6} offset={12} />
      </div>
    </section>
  )
}
