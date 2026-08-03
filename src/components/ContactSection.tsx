import { useState } from 'react'
import { useLanguage } from '@/hooks/use-language'
import { sendContactMessage } from '@/services/contact'
import { HudFrame } from './HudFrame'
import { SectionReveal } from './SectionReveal'
import { Terminal, Send, CheckCircle2, AlertCircle } from 'lucide-react'

export function ContactSection() {
  const { t } = useLanguage()
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState<string | null>(null)

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
    <section id="contact" className="py-20 px-6 bg-[#080808]">
      <div className="max-w-4xl mx-auto">
        <SectionReveal>
          <HudFrame label="COMMUNICATION_TERMINAL" status="ONLINE">
            <div className="text-xs font-mono text-cyan-400 mb-1 tracking-widest uppercase">
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
