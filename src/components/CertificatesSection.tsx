import { useEffect, useState } from 'react'
import { useLanguage } from '@/hooks/use-language'
import { getCertificates, CertificateRecord } from '@/services/certificates'
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
    <section className="py-20 px-6 bg-[#101010]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="text-xs font-mono text-purple-400 tracking-widest uppercase">
            [{t('cert_subtitle')}]
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-mono text-[#EDEDED]">
            {t('cert_title')}
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {certs.map((c) => (
            <div
              key={c.id}
              className="bg-[#181818] border border-[#2A2A2A] p-4 flex items-center justify-between"
            >
              <div>
                <div className="text-xs font-mono text-cyan-400 mb-1">
                  {c.issuer} • {c.year}
                </div>
                <div className="text-sm font-bold font-mono text-white">{c.title}</div>
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
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
