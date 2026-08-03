import { useLanguage } from '@/hooks/use-language'
import { HudFrame } from './HudFrame'
import { SectionReveal } from './SectionReveal'
import { ExternalLink, Github, Gamepad2, Linkedin, Mail, MessageSquare } from 'lucide-react'

export function ContactSection() {
  const { t } = useLanguage()

  const connectionLinks = [
    {
      platform: 'GitHub',
      dots: '........................',
      status: 'CONNECTED',
      statusColor: 'text-purple-400 border-purple-500/40 bg-purple-950/30',
      hoverGlow: 'hover:border-purple-400 hover:shadow-[0_0_15px_rgba(168,85,247,0.3)]',
      url: 'https://github.com/NicolePLSilva',
      icon: Github,
    },
    {
      platform: 'Itch.io',
      dots: '........................',
      status: 'ONLINE',
      statusColor: 'text-rose-400 border-rose-500/40 bg-rose-950/30',
      hoverGlow: 'hover:border-rose-400 hover:shadow-[0_0_15px_rgba(244,63,94,0.3)]',
      url: 'https://pls-nick.itch.io/',
      icon: Gamepad2,
    },
    {
      platform: 'LinkedIn',
      dots: '........................',
      status: 'AVAILABLE',
      statusColor: 'text-blue-400 border-blue-500/40 bg-blue-950/30',
      hoverGlow: 'hover:border-blue-400 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]',
      url: 'https://www.linkedin.com/in/nicole-maira/',
      icon: Linkedin,
    },
    {
      platform: 'Email',
      dots: '........................',
      status: 'READY',
      statusColor: 'text-cyan-400 border-cyan-500/40 bg-cyan-950/30',
      hoverGlow: 'hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(0,240,255,0.3)]',
      url: 'mailto:nicolemairaplsilva@gmail.com',
      icon: Mail,
    },
    {
      platform: 'WhatsApp',
      dots: '........................',
      status: 'ACTIVE',
      statusColor: 'text-emerald-400 border-emerald-500/40 bg-emerald-950/30',
      hoverGlow: 'hover:border-emerald-400 hover:shadow-[0_0_15px_rgba(16,185,129,0.3)]',
      url: 'https://wa.me/5571985304202',
      icon: MessageSquare,
    },
  ]

  return (
    <section id="contact" className="py-20 px-6 bg-[#080808]">
      <div className="max-w-4xl mx-auto">
        <SectionReveal>
          <HudFrame label="SYSTEM_CONNECTION" status="ONLINE">
            <div className="text-xs font-mono text-cyan-400 mb-1 tracking-widest uppercase">
              [DIRECT PLATFORM LINK PROTOCOL]
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-[#EDEDED] mb-6">
              {t('contact_connection_title')}
            </h2>

            <div className="space-y-3 font-mono text-xs">
              {connectionLinks.map((item) => {
                const Icon = item.icon
                return (
                  <a
                    key={item.platform}
                    href={item.url}
                    target={item.url.startsWith('mailto:') ? '_self' : '_blank'}
                    rel="noreferrer"
                    className={`flex items-center justify-between p-3 bg-[#111114] border border-[#2a2a35] transition-all group ${item.hoverGlow}`}
                  >
                    <div className="flex items-center gap-3 text-[#EDEDED] group-hover:text-cyan-300 font-bold">
                      <Icon className="w-4 h-4 text-cyan-400" />
                      <span>{item.platform}</span>
                      <span className="hidden sm:inline text-gray-600 font-normal">
                        {item.dots}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span
                        className={`px-2.5 py-0.5 border text-[10px] font-bold rounded-none ${item.statusColor}`}
                      >
                        {item.status}
                      </span>
                      <ExternalLink className="w-3.5 h-3.5 text-gray-500 group-hover:text-cyan-400 transition-colors" />
                    </div>
                  </a>
                )
              })}
            </div>
          </HudFrame>
        </SectionReveal>
      </div>
    </section>
  )
}
