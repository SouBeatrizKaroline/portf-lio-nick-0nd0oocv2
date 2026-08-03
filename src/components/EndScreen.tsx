import { useLanguage } from '@/hooks/use-language'
import { SectionReveal } from './SectionReveal'
import { CyberMicroDetails } from './CyberMicroDetails'
import { MessageSquare, ArrowDown } from 'lucide-react'
import { Link } from 'react-router-dom'

export function EndScreen() {
  const { t } = useLanguage()

  const sequence = [
    { text: 'SYSTEM COMPLETE', done: true, delay: 0 },
    { text: 'PROFILE LOADED', done: true, delay: 150 },
    { text: t('end_thank_you'), done: true, delay: 300 },
    { text: t('end_press_start'), done: false, delay: 450 },
  ]

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 bg-[#080808] relative overflow-hidden border-t border-[#1a1a22]">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />

      <div className="max-w-2xl mx-auto text-center">
        <SectionReveal>
          <div className="space-y-6">
            <div className="bg-[#0C0C10] border border-[#1a1a22] p-6 sm:p-8 font-mono space-y-2 text-xs sm:text-sm">
              <div className="text-[10px] text-gray-600 mb-3 tracking-widest uppercase">
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

            <p className="text-sm text-gray-400 font-sans max-w-md mx-auto">{t('end_subtitle')}</p>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href="https://wa.me/5511991467419"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-500 hover:to-green-500 text-[#EDEDED] font-bold font-mono text-xs px-6 py-3 border border-emerald-400/60 shadow-[0_0_20px_rgba(16,185,129,0.2)] transition-all hover:scale-105 touch-min"
              >
                <MessageSquare className="w-4 h-4" />
                {t('end_connect_whatsapp')}
              </a>
              <Link
                to="/#contact"
                className="inline-flex items-center gap-2 bg-[#14141D]/80 hover:bg-[#1c1c28] text-cyan-300 font-bold font-mono text-xs px-6 py-3 border border-cyan-500/50 transition-all hover:border-cyan-400 touch-min"
              >
                <ArrowDown className="w-4 h-4" />
                {t('end_connect_contact')}
              </Link>
            </div>

            <CyberMicroDetails className="justify-center pt-4" count={4} offset={0} />
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}
