import { useEffect, useState } from 'react'
import { useLanguage } from '@/hooks/use-language'
import { getCertificates, CertificateRecord } from '@/services/certificates'
import { SectionReveal } from './SectionReveal'
import { ModuleHeader } from './ModuleHeader'
import { TechPanel } from './TechPanel'
import { ExternalLink } from 'lucide-react'

export function CertificatesSection() {
  const { t } = useLanguage()
  const [certs, setCerts] = useState<CertificateRecord[]>([])

  useEffect(() => {
    getCertificates()
      .then(setCerts)
      .catch(() => {})
  }, [])

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
          <div className="grid sm:grid-cols-2 gap-4">
            {certs.map((c) => (
              <TechPanel key={c.id} className="p-4 flex items-center justify-between">
                <div>
                  <div className="text-xs font-mono text-cyan-400 mb-1">
                    {c.issuer} • {c.year}
                  </div>
                  <div className="text-sm font-bold font-display text-[#EDEDED]">{c.title}</div>
                </div>
                {c.link && (
                  <a
                    href={c.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-400 hover:text-purple-400 transition-colors p-2"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </TechPanel>
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}
