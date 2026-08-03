import { useEffect, useState } from 'react'
import { useLanguage } from '@/hooks/use-language'
import { getCertificates, CertificateRecord } from '@/services/certificates'
import { SectionReveal } from './SectionReveal'
import { ModuleHeader } from './ModuleHeader'
import { TechPanel } from './TechPanel'
import { ExternalLink, Award } from 'lucide-react'

export function CertificatesSection() {
  const { t } = useLanguage()
  const [certs, setCerts] = useState<CertificateRecord[]>([])
  const [filter, setFilter] = useState<string>('all')

  useEffect(() => {
    getCertificates()
      .then(setCerts)
      .catch(() => {})
  }, [])

  const issuers = ['all', 'Unity', 'GameDev.tv', 'Udemy', 'Unity Technologies']
  const filtered = filter === 'all' ? certs : certs.filter((c) => c.issuer === filter)

  return (
    <section className="py-20 px-6 bg-[#080808]">
      <div className="max-w-4xl mx-auto">
        <SectionReveal>
          <ModuleHeader
            moduleLabel={t('module_certification')}
            subtitle={t('cert_subtitle')}
            title={t('cert_title')}
          />
        </SectionReveal>

        <SectionReveal delay={100}>
          <div className="flex justify-center flex-wrap gap-2 font-mono text-xs mb-10">
            {issuers.map((issuer) => (
              <button
                key={issuer}
                onClick={() => setFilter(issuer)}
                className={`px-3 py-1.5 border transition-all uppercase ${
                  filter === issuer
                    ? 'border-purple-500 bg-purple-950/40 text-purple-300 font-bold'
                    : 'border-[#1a1a22] bg-[#101014] text-gray-400 hover:text-[#EDEDED]'
                }`}
              >
                {issuer === 'all' ? t('cert_all') : issuer}
              </button>
            ))}
          </div>
        </SectionReveal>

        <SectionReveal delay={150}>
          <div className="relative border-l-2 border-purple-500/20 ml-4 sm:ml-8 space-y-6 pl-6 sm:pl-8">
            {filtered.map((c) => (
              <div key={c.id} className="relative group">
                <div className="absolute -left-[31px] sm:-left-[39px] top-3 w-3.5 h-3.5 bg-purple-600 border-2 border-cyan-400/60 rotate-45 group-hover:scale-125 transition-transform" />
                <TechPanel className="p-4 sm:p-5 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 bg-purple-950/40 border border-purple-500/30 flex items-center justify-center text-purple-300 shrink-0">
                      <Award className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-mono text-cyan-400 mb-0.5">
                        {c.issuer} • {c.year}
                      </div>
                      <div className="text-sm font-bold font-display text-[#EDEDED]">{c.title}</div>
                    </div>
                  </div>
                  {c.link && (
                    <a
                      href={c.link}
                      target="_blank"
                      rel="noreferrer"
                      className="text-gray-400 hover:text-purple-400 transition-colors p-2 shrink-0"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </TechPanel>
              </div>
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}
