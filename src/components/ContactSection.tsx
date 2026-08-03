import { useState } from 'react'
import { useLanguage } from '@/hooks/use-language'
import { sendContactMessage } from '@/services/contact'
import { extractFieldErrors, type FieldErrors } from '@/lib/pocketbase/errors'
import { HudFrame } from './HudFrame'
import { SectionReveal } from './SectionReveal'
import { CyberMicroDetails } from './CyberMicroDetails'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import {
  Github,
  Gamepad2,
  Linkedin,
  Mail,
  MessageSquare,
  Send,
  Terminal,
  CheckCircle2,
  AlertCircle,
} from 'lucide-react'

export function ContactSection() {
  const { t, locale } = useLanguage()
  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({})
  const [formError, setFormError] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitting(true)
    setFieldErrors({})
    setFormError('')

    const formData = new FormData(e.currentTarget)
    const data = {
      name: (formData.get('name') as string)?.trim() || '',
      email: (formData.get('email') as string)?.trim() || '',
      subject: (formData.get('subject') as string)?.trim() || '',
      message: (formData.get('message') as string)?.trim() || '',
    }

    try {
      await sendContactMessage(data)
      setSuccess(true)
      e.currentTarget.reset()
      setTimeout(() => setSuccess(false), 5000)
    } catch (err) {
      setFieldErrors(extractFieldErrors(err))
      setFormError('Failed to send message. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  const quickLinks = [
    {
      platform: 'Itch.io',
      url: 'https://pls-nick.itch.io/',
      icon: Gamepad2,
      color: 'text-rose-400 hover:border-rose-400 hover:shadow-[0_0_15px_rgba(244,63,94,0.2)]',
    },
    {
      platform: 'GitHub',
      url: 'https://github.com/NicolePLSilva',
      icon: Github,
      color: 'text-cyan-400 hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(0,240,255,0.2)]',
    },
    {
      platform: 'LinkedIn',
      url: 'https://www.linkedin.com/in/nicole-maira/',
      icon: Linkedin,
      color: 'text-blue-400 hover:border-blue-400 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)]',
    },
  ]

  return (
    <section id="contact" className="py-16 sm:py-20 px-4 sm:px-6 bg-[#080808]">
      <div className="max-w-4xl mx-auto">
        <SectionReveal>
          <HudFrame label="SYSTEM_CONNECTION // TERMINAL_NODE" status="ONLINE">
            <div className="text-center mb-8">
              <div className="text-xs font-mono text-cyan-400 mb-2 tracking-widest uppercase">
                [DIRECT PLATFORM LINK PROTOCOL]
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-[#EDEDED] mb-3 title-glow">
                {t('contact_connection_title')}
              </h2>
              <p className="text-sm text-gray-400 font-sans max-w-xl mx-auto">
                {locale === 'pt'
                  ? 'Vamos construir algo juntos? Estou disponível para oportunidades, colaborações e projetos.'
                  : locale === 'es'
                    ? '¿Construimos algo juntos? Disponible para oportunidades, colaboraciones y proyectos.'
                    : "Let's build something together? Available for opportunities, collaborations, and projects."}
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
              {quickLinks.map((item) => {
                const Icon = item.icon
                return (
                  <a
                    key={item.platform}
                    href={item.url}
                    target={item.url.startsWith('mailto:') ? '_self' : '_blank'}
                    rel="noreferrer"
                    aria-label={item.platform}
                    className={`flex items-center gap-2 px-4 py-2.5 bg-[#101015] border border-[#262635] transition-all group touch-min ${item.color}`}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="font-mono text-xs font-bold">{item.platform}</span>
                  </a>
                )
              })}
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8">
              <a
                href="https://wa.me/5511991467419"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-500 hover:to-green-500 text-[#EDEDED] font-bold font-mono text-xs border border-emerald-400/60 shadow-[0_0_20px_rgba(16,185,129,0.2)] transition-all hover:scale-105 active:scale-95 w-full sm:w-auto justify-center touch-min"
              >
                <MessageSquare className="w-4 h-4" />
                {t('contact_whatsapp')}
              </a>
              <a
                href="mailto:nicolemairaplsilva@gmail.com"
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-[#EDEDED] font-bold font-mono text-xs border border-purple-400/60 shadow-[0_0_20px_rgba(168,85,247,0.2)] transition-all hover:scale-105 active:scale-95 w-full sm:w-auto justify-center touch-min"
              >
                <Mail className="w-4 h-4" />
                {t('contact_email')}
              </a>
            </div>

            <div className="grid md:grid-cols-5 gap-6">
              <div className="md:col-span-2 flex flex-col justify-between space-y-4">
                <div className="bg-[#0C0C10] border border-[#1a1a22] p-4 font-mono text-xs space-y-1">
                  <div className="text-gray-500">
                    <span className="text-emerald-400">●</span> CONNECTION_TERMINAL v3.0
                  </div>
                  <div className="text-gray-600">
                    <span className="text-cyan-400">{t('contact_terminal_prompt')}</span>{' '}
                    <span className="text-gray-300">initialize --channels</span>
                  </div>
                  <div className="text-purple-400/70">{'> '} Scanning communication nodes...</div>
                  <div className="text-emerald-400/70">
                    {'> '} 5 channels detected. CAT_CORE monitoring.
                  </div>
                  <div className="text-cyan-400/60">
                    {'> '} Direct contact buttons ready. Awaiting input...
                  </div>
                </div>

                <div className="bg-[#0C0C10] border border-[#1a1a22] p-4 font-mono text-[10px] text-gray-500">
                  <div className="flex items-center justify-between mb-2">
                    <span>RESPONSE_TIME</span>
                    <span className="text-emerald-400">&lt; 24h</span>
                  </div>
                  <div className="h-1 bg-[#1a1a22] rounded-full overflow-hidden">
                    <div className="h-full w-[95%] bg-gradient-to-r from-emerald-500/50 to-emerald-300/50 rounded-full" />
                  </div>
                  <div className="flex items-center justify-between mt-3 mb-2">
                    <span>AVAILABILITY</span>
                    <span className="text-cyan-400">OPEN</span>
                  </div>
                  <div className="h-1 bg-[#1a1a22] rounded-full overflow-hidden">
                    <div className="h-full w-[100%] bg-gradient-to-r from-cyan-500/50 to-cyan-300/50 rounded-full" />
                  </div>
                </div>
              </div>

              <div className="md:col-span-3">
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="block text-[10px] font-mono text-gray-400 uppercase tracking-wider mb-1.5"
                      >
                        Name *
                      </label>
                      <Input
                        id="contact-name"
                        name="name"
                        required
                        placeholder="Your name"
                        className="bg-[#0C0C10] border-[#1a1a22] text-[#EDEDED] font-mono text-sm focus:border-cyan-500/50"
                      />
                      {fieldErrors.name && (
                        <p className="text-[10px] text-red-400 mt-1 font-mono">
                          {fieldErrors.name}
                        </p>
                      )}
                    </div>
                    <div>
                      <label
                        htmlFor="contact-email"
                        className="block text-[10px] font-mono text-gray-400 uppercase tracking-wider mb-1.5"
                      >
                        Email *
                      </label>
                      <Input
                        id="contact-email"
                        name="email"
                        type="email"
                        required
                        placeholder="your@email.com"
                        className="bg-[#0C0C10] border-[#1a1a22] text-[#EDEDED] font-mono text-sm focus:border-cyan-500/50"
                      />
                      {fieldErrors.email && (
                        <p className="text-[10px] text-red-400 mt-1 font-mono">
                          {fieldErrors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-subject"
                      className="block text-[10px] font-mono text-gray-400 uppercase tracking-wider mb-1.5"
                    >
                      Subject
                    </label>
                    <Input
                      id="contact-subject"
                      name="subject"
                      placeholder="What's this about?"
                      className="bg-[#0C0C10] border-[#1a1a22] text-[#EDEDED] font-mono text-sm focus:border-cyan-500/50"
                    />
                    {fieldErrors.subject && (
                      <p className="text-[10px] text-red-400 mt-1 font-mono">
                        {fieldErrors.subject}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-[10px] font-mono text-gray-400 uppercase tracking-wider mb-1.5"
                    >
                      Message *
                    </label>
                    <Textarea
                      id="contact-message"
                      name="message"
                      required
                      rows={4}
                      placeholder="Tell me about your project, role, or collaboration..."
                      className="bg-[#0C0C10] border-[#1a1a22] text-[#EDEDED] font-mono text-sm focus:border-cyan-500/50 resize-none"
                    />
                    {fieldErrors.message && (
                      <p className="text-[10px] text-red-400 mt-1 font-mono">
                        {fieldErrors.message}
                      </p>
                    )}
                  </div>

                  {formError && (
                    <div className="flex items-center gap-2 text-xs font-mono text-red-400 bg-red-950/30 border border-red-500/30 px-3 py-2">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {formError}
                    </div>
                  )}

                  {success && (
                    <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-950/30 border border-emerald-500/30 px-3 py-2 animate-fade-in">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Message sent successfully! I'll get back to you soon.
                    </div>
                  )}

                  <Button
                    type="submit"
                    disabled={submitting}
                    className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-[#EDEDED] font-bold font-mono text-xs border border-purple-400/60 shadow-[0_0_20px_rgba(168,85,247,0.2)] transition-all hover:scale-[1.02] disabled:opacity-50 disabled:hover:scale-100"
                  >
                    {submitting ? (
                      <span className="flex items-center gap-2">
                        <Terminal className="w-4 h-4 animate-pulse" />
                        SENDING...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send className="w-4 h-4" />
                        {t('contact_connect')}
                      </span>
                    )}
                  </Button>
                </form>
              </div>
            </div>
          </HudFrame>
        </SectionReveal>

        <CyberMicroDetails className="justify-center mt-8" count={6} offset={12} />
      </div>
    </section>
  )
}
