import { useState } from 'react'
import { useLanguage } from '@/hooks/use-language'
import { useAchievements } from '@/hooks/use-achievements'
import { sendContactMessage } from '@/services/contact'
import { HudFrame } from './HudFrame'
import { Mail, Send } from 'lucide-react'

export function ContactSection() {
  const { t } = useLanguage()
  const { unlockAchievement } = useAchievements()
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.message) return

    setLoading(true)
    try {
      await sendContactMessage(formData)
      setSuccess(true)
      setFormData({ name: '', email: '', subject: '', message: '' })
      unlockAchievement('contact_sent', t('ach_title'), t('ach_msg_desc'))
    } catch {
      alert('Error sending message. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-20 px-6 bg-[#101010]">
      <div className="max-w-4xl mx-auto">
        <HudFrame label="COMMUNICATION_LINK" className="p-8 sm:p-10">
          <div className="text-xs font-mono text-purple-400 tracking-widest uppercase mb-1">
            [{t('contact_subtitle')}]
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-mono text-[#EDEDED] mb-8">
            {t('contact_title')}
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4 font-mono text-xs text-gray-300">
              <p className="text-sm leading-relaxed">
                Interessado em contratar, colaborar em um jogo ou conversar sobre desenvolvimento?
                Envie um sinal abaixo!
              </p>
              <div className="p-4 bg-[#181818] border border-[#2A2A2A] space-y-2">
                <div className="flex items-center gap-2 text-cyan-400">
                  <Mail className="w-4 h-4" />
                  <span>1aspiraqualquer@gmail.com</span>
                </div>
                <div className="text-gray-500">
                  Localização: Brasil (Disponível para trabalho remoto mundial)
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 font-mono text-xs">
              {success && (
                <div className="p-3 bg-green-950/50 border border-green-500 text-green-400 font-bold">
                  {t('contact_success')}
                </div>
              )}

              <div>
                <label className="block text-gray-400 mb-1">{t('contact_name')} *</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-[#181818] border border-[#2A2A2A] p-2 text-white focus:outline-none focus:border-purple-500"
                />
              </div>

              <div>
                <label className="block text-gray-400 mb-1">{t('contact_email')} *</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-[#181818] border border-[#2A2A2A] p-2 text-white focus:outline-none focus:border-purple-500"
                />
              </div>

              <div>
                <label className="block text-gray-400 mb-1">{t('contact_msg')} *</label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-[#181818] border border-[#2A2A2A] p-2 text-white focus:outline-none focus:border-purple-500 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-purple-600 hover:bg-purple-500 text-white font-bold p-2.5 transition-all flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                {loading ? 'SENDING...' : t('contact_send')}
              </button>
            </form>
          </div>
        </HudFrame>
      </div>
    </section>
  )
}
