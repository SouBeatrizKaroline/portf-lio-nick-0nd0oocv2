import { useEffect, useState } from 'react'
import { useLanguage } from '@/hooks/use-language'
import { getCertificates, CertificateRecord } from '@/services/certificates'
import { HudFrame } from './HudFrame'
import { SectionReveal } from './SectionReveal'
import { Award, ExternalLink } from 'lucide-react'

export function CertificatesSection() {
  const { t } = useLanguage()
  const [certs, setCerts] = useState<CertificateRecord[]>([])

  useEffect(() => {
    getCertificates()
      .then(setCerts)
      .catch(() => {})
  }, [])

  return (
    <section id="certificates" className="py-20 px-6 bg-[#0D0D10]">
      <div className="max-w-5xl mx-auto space-y-10">
        <SectionReveal>
          <HudFrame label="CERTIFICATION_VAULT" status="VERIFIED">
            <div className="text-xs font-mono text-cyan-400 mb-1 tracking-widest uppercase">
              [{t('cert_subtitle')}]
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-[#EDEDED] mb-8">
              {t('cert_title')}
            </h2>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {certs.map((cert) => (
                <div
                  key={cert.id}
                  className="bg-[#111114] border border-[#2a2a35] p-4 flex flex-col justify-between space-y-3 hover:border-purple-500/50 transition-colors"
                >
                  <div className="space-y-1">
                    <div className="flex items-center justify-between text-[10px] font-mono text-purple-400">
                      <span>{cert.issuer}</span>
                      <span>{cert.year}</span>
                    </div>
                    <h3 className="text-xs font-mono font-bold text-[#EDEDED] leading-snug">
                      {cert.title}
                    </h3>
                  </div>

                  {cert.link && (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-[10px] font-mono text-cyan-400 hover:text-cyan-300"
                    >
                      <Award className="w-3 h-3" />
                      Verify Badge <ExternalLink className="w-2.5 h-2.5" />
                    </a>
                  )}
                </div>
              ))}
            </div>
          </HudFrame>
        </SectionReveal>
      </div>
    </section>
  )
}
