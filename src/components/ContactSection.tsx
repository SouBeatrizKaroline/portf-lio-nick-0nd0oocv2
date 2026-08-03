import { useState } from 'react'
import { useLanguage } from '@/hooks/use-language'
import { sendContactMessage } from '@/services/contact'
import { HudFrame } from './HudFrame'
import { SectionReveal } from './SectionReveal'
import {
  Terminal,
  Send,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  Github,
  Gamepad2,
  Linkedin,
  Mail,
  MessageSquare,
} from 'lucide-react'

export function ContactSection() {
  const { t } = useLanguage()
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState<string | null>(null)

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      await sendContactMessage(form)
      setSent(true)
      setForm({ name: '', email: '', subject: '', message: '' })
    } catch (err) {
      setError('Transmission failed. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-20 px-6 bg-[#080808] space-y-12">
      {/* System Connection Terminal Section */}
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

      {/* Transmission Form */}
      <div className="max-w-4xl mx-auto">
        <SectionReveal delay={150}>
          <HudFrame label="COMMUNICATION_TERMINAL" status="ONLINE">
            <div className="text-xs font-mono text-purple-400 mb-1 tracking-widest uppercase">
              [{t('contact_subtitle')}]
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-[#EDEDED] mb-4">
              {t('contact_title')}
            </h2>
            <p className="text-xs text-gray-300 font-mono mb-8">{t('contact_intro')}</p>

            {sent ? (
              <div className="bg-emerald-950/40 border border-emerald-500/50 p-6 text-center space-y-3 font-mono">
                <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto" />
                <div className="text-emerald-400 font-bold text-sm">{t('contact_success')}</div>
                <button
                  onClick={() => setSent(false)}
                  className="text-xs text-cyan-400 underline pt-2"
                >
                  Send another transmission
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 font-mono">
                {error && (
                  <div className="flex items-center gap-2 bg-rose-950/40 border border-rose-500/50 p-3 text-xs text-rose-300">
                    <AlertCircle className="w-4 h-4" />
                    <span>{error}</span>
                  </div>
                )}

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs text-gray-400">{t('contact_name')} *</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full bg-[#111114] border border-[#2a2a35] px-3 py-2 text-xs text-[#EDEDED] focus:border-cyan-400 focus:outline-none"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs text-gray-400">{t('contact_email')} *</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full bg-[#111114] border border-[#2a2a35] px-3 py-2 text-xs text-[#EDEDED] focus:border-cyan-400 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs text-gray-400">{t('contact_subject')}</label>
                  <input
                    type="text"
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    className="w-full bg-[#111114] border border-[#2a2a35] px-3 py-2 text-xs text-[#EDEDED] focus:border-cyan-400 focus:outline-none"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs text-gray-400">{t('contact_msg')} *</label>
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-[#111114] border border-[#2a2a35] px-3 py-2 text-xs text-[#EDEDED] focus:border-cyan-400 focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-[#EDEDED] font-bold py-3 text-xs uppercase tracking-wider border border-purple-400/40 transition-all shadow-[0_0_15px_rgba(168,85,247,0.3)] disabled:opacity-50"
                >
                  <Send className="w-3.5 h-3.5" />
                  {loading ? 'TRANSMITTING...' : t('contact_send')}
                </button>
              </form>
            )}
          </HudFrame>
        </SectionReveal>
      </div>
    </section>
  )
}
