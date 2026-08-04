import { useLanguage } from '@/hooks/use-language'
import { SectionReveal } from './SectionReveal'
import { CyberMicroDetails } from './CyberMicroDetails'
import { HudFrame } from './HudFrame'
import { Linkedin, Github, Mail, MessageSquare, ChevronUp } from 'lucide-react'
import { cn } from '@/lib/utils'

export function ContactSection() {
  const { t } = useLanguage()

  const handleEmailClick = (e: React.MouseEvent) => {
    e.preventDefault()
    const u = 'nicolemairaplsilva'
    const d = 'gmail.com'
    window.location.href = `mailto:${u}@${d}`
  }

  const handleWhatsAppClick = (e: React.MouseEvent) => {
    e.preventDefault()
    const p = '557185304202'
    window.open(`https://wa.me/${p}`, '_blank', 'noreferrer')
  }

  const handleScrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault()
    const el = document.getElementById('projects')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const channels = [
    {
      name: t('connection_linkedin'),
      Icon: Linkedin,
      href: 'https://www.linkedin.com/in/nicole-maira/',
      onClick: null as ((e: React.MouseEvent) => void) | null,
      border: 'hover:border-blue-400/60',
      glow: 'hover:shadow-[0_0_20px_rgba(59,130,246,0.2)]',
      iconColor: 'text-blue-400',
    },
    {
      name: t('connection_github'),
      Icon: Github,
      href: 'https://github.com/NicolePLSilva',
      onClick: null as ((e: React.MouseEvent) => void) | null,
      border: 'hover:border-cyan-400/60',
      glow: 'hover:shadow-[0_0_20px_rgba(34,211,238,0.2)]',
      iconColor: 'text-cyan-400',
    },
    {
      name: t('connection_email_label'),
      Icon: Mail,
      href: null,
      onClick: handleEmailClick,
      border: 'hover:border-purple-400/60',
      glow: 'hover:shadow-[0_0_20px_rgba(168,85,247,0.2)]',
      iconColor: 'text-purple-400',
    },
    {
      name: t('connection_whatsapp_label'),
      Icon: MessageSquare,
      href: null,
      onClick: handleWhatsAppClick,
      border: 'hover:border-emerald-400/60',
      glow: 'hover:shadow-[0_0_20px_rgba(16,185,129,0.2)]',
      iconColor: 'text-emerald-400',
    },
  ]

  const sequence = [
    { text: t('end_system_complete'), done: true, delay: 0 },
    { text: t('end_profile_loaded'), done: true, delay: 150 },
    { text: t('end_thank_you'), done: true, delay: 300 },
    { text: t('end_press_start'), done: false, delay: 450 },
  ]

  return (
    <section
      id="contact"
      className="py-16 sm:py-20 px-4 sm:px-6 bg-[#080808] relative overflow-hidden border-t border-[#1a1a22]"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />

      <div className="max-w-3xl mx-auto">
        <SectionReveal>
          <HudFrame label="CONNECTION_TERMINAL // NETWORK_ACCESS" status="ONLINE">
            <div className="space-y-6 text-center">
              <h2 className="text-xl sm:text-2xl font-bold font-display text-[#EDEDED] title-glow">
                [ {t('connection_terminal')} ]
              </h2>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3">
                <span className="text-[10px] sm:text-xs font-mono text-gray-500 uppercase tracking-widest">
                  {t('connection_status')}:
                </span>
                <span className="text-[10px] sm:text-xs font-mono text-emerald-400 font-bold uppercase tracking-widest flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                  {t('connection_available')}
                </span>
              </div>

              <p className="text-base sm:text-lg font-display text-[#EDEDED]">
                {t('connection_invitation')}
              </p>

              <div>
                <div className="text-[10px] font-mono text-purple-400/80 tracking-widest uppercase mb-4 flex items-center justify-center gap-2">
                  <span className="w-6 h-px bg-purple-400/30" />[{t('connection_channels')}]
                  <span className="w-6 h-px bg-purple-400/30" />
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                  {channels.map((ch) => {
                    const cls = cn(
                      'group relative flex flex-col items-center justify-center p-4 sm:p-5 border border-[#2a2a35] bg-[#0C0C10]/80 backdrop-blur-sm transition-all duration-300 hover:scale-[1.03] active:scale-95 touch-min',
                      ch.border,
                      ch.glow,
                    )
                    const inner = (
                      <>
                        <span className="absolute top-0 right-0 w-2 h-2 border-t border-r border-cyan-400/40" />
                        <span className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-purple-400/40" />
                        <ch.Icon className={cn('w-5 h-5 sm:w-6 sm:h-6 mb-2', ch.iconColor)} />
                        <span className="font-mono text-[10px] sm:text-xs font-bold text-[#EDEDED] text-center leading-tight">
                          {ch.name}
                        </span>
                        <span
                          className={cn(
                            'text-[8px] font-mono uppercase tracking-wider mt-1 opacity-40 group-hover:opacity-100 transition-opacity',
                            ch.iconColor,
                          )}
                        >
                          {'>'} CONNECT
                        </span>
                      </>
                    )
                    return ch.href ? (
                      <a
                        key={ch.name}
                        href={ch.href}
                        target="_blank"
                        rel="noreferrer"
                        className={cls}
                      >
                        {inner}
                      </a>
                    ) : (
                      <button key={ch.name} type="button" onClick={ch.onClick!} className={cls}>
                        {inner}
                      </button>
                    )
                  })}
                </div>
              </div>

              <div className="text-[10px] font-mono text-cyan-400/60 tracking-widest uppercase pt-3 border-t border-[#1a1a22]">
                {t('connection_ready')}
              </div>
            </div>
          </HudFrame>

          <div className="mt-6 space-y-4">
            <div className="bg-[#0C0C10] border border-[#1a1a22] p-5 sm:p-6 font-mono space-y-2 text-xs sm:text-sm">
              <div className="text-[10px] text-gray-600 mb-2 tracking-widest uppercase text-center">
                // SESSION_LOG // FINAL
              </div>
              {sequence.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-center gap-2 animate-fade-in-up"
                  style={{ animationDelay: `${item.delay}ms` }}
                >
                  <span className="text-emerald-400/70">{'>'}</span>
                  <span className={item.done ? 'text-gray-300' : 'text-cyan-400 font-bold'}>
                    {item.text}
                  </span>
                  {item.done ? (
                    <span className="text-emerald-400/50 text-[10px]">✓</span>
                  ) : (
                    <span className="w-2 h-3.5 bg-cyan-400 animate-pulse inline-block" />
                  )}
                </div>
              ))}
            </div>

            <p className="text-sm text-gray-400 font-sans max-w-md mx-auto text-center">
              {t('end_subtitle')}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <button
                type="button"
                onClick={handleWhatsAppClick}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-500 hover:to-green-500 text-[#EDEDED] font-bold font-mono text-xs px-6 py-3 border border-emerald-400/60 shadow-[0_0_20px_rgba(16,185,129,0.2)] transition-all hover:scale-105 active:scale-95 touch-min"
              >
                <MessageSquare className="w-4 h-4" />
                {t('end_connect_whatsapp')}
              </button>
              <button
                type="button"
                onClick={handleScrollToProjects}
                className="inline-flex items-center gap-2 bg-[#14141D]/80 hover:bg-[#1c1c28] text-cyan-300 font-bold font-mono text-xs px-6 py-3 border border-cyan-500/50 transition-all hover:border-cyan-400 touch-min cursor-pointer relative z-10"
              >
                <ChevronUp className="w-4 h-4" />
                {t('end_connect_contact')}
              </button>
            </div>
          </div>
        </SectionReveal>

        <CyberMicroDetails className="justify-center mt-8" count={6} offset={0} />
      </div>
    </section>
  )
}
