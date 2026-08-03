import { useEffect, useState } from 'react'
import { useLanguage } from '@/hooks/use-language'
import { getCertificates, CertificateRecord } from '@/services/certificates'
import { HudFrame } from './HudFrame'
import { SectionReveal } from './SectionReveal'
import { Award, ExternalLink, ShieldCheck, Building2, Calendar, CheckCircle2 } from 'lucide-react'

const CERT_SKILLS: Record<string, string[]> = {
  gamedev: ['Unity 2D', 'C# Gameplay', 'Level Design', 'State Machine'],
  udemy: ['C# Advanced', 'Combat Systems', 'Architecture', 'Game Feel'],
  unitytech: ['Unity Certification', 'C# Programming', 'Optimization', 'Best Practices'],
  unity: ['Unity Engine', 'Scripting', 'Animation', 'Physics'],
}

export function CertificatesSection() {
  const { t } = useLanguage()
  const [certs, setCerts] = useState<CertificateRecord[]>([])

  useEffect(() => {
    getCertificates()
      .then(setCerts)
      .catch(() => {})
  }, [])

  return (
    <section id="certificates" className="py-16 sm:py-20 px-4 sm:px-6 bg-[#0D0D10]">
      <div className="max-w-5xl mx-auto space-y-10">
        <SectionReveal>
          <HudFrame label="CERTIFICATION_VAULT" status="VERIFIED">
            <div className="text-xs font-mono text-cyan-400 mb-1 tracking-widest uppercase">
              [{t('cert_subtitle')}]
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-[#EDEDED] mb-8">
              {t('cert_title')}
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {certs.map((cert) => {
                const skills = CERT_SKILLS[cert.category || ''] || []
                return (
                  <div
                    key={cert.id}
                    className="bg-[#111114] border border-[#2a2a35] p-4 flex flex-col justify-between space-y-3 hover:border-purple-500/50 hover:shadow-[0_0_15px_rgba(168,85,247,0.1)] transition-all group"
                  >
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="inline-flex items-center gap-1 text-[9px] font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-500/30 px-2 py-0.5 uppercase">
                          <ShieldCheck className="w-2.5 h-2.5" /> {t('cert_verified')}
                        </span>
                        <span className="text-[10px] font-mono text-cyan-400 flex items-center gap-1">
                          <Calendar className="w-2.5 h-2.5" /> {cert.year}
                        </span>
                      </div>

                      <h3 className="text-xs font-mono font-bold text-[#EDEDED] leading-snug group-hover:text-cyan-300 transition-colors">
                        {cert.title}
                      </h3>

                      <div className="text-[10px] font-mono text-purple-400 flex items-center gap-1.5">
                        <Building2 className="w-3 h-3" />
                        <span className="uppercase tracking-wider">{cert.issuer}</span>
                      </div>

                      {skills.length > 0 && (
                        <div className="pt-2 border-t border-[#1a1a22]">
                          <div className="text-[9px] font-mono text-gray-500 uppercase mb-1.5">
                            {t('cert_skills')}
                          </div>
                          <div className="flex flex-wrap gap-1">
                            {skills.map((skill) => (
                              <span
                                key={skill}
                                className="inline-flex items-center gap-0.5 text-[9px] font-mono bg-[#0D0D14] border border-[#232330] text-gray-300 px-1.5 py-0.5"
                              >
                                <CheckCircle2 className="w-2 h-2 text-emerald-500/60" />
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    {cert.link && (
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 text-[10px] font-mono text-cyan-400 hover:text-cyan-300 border-t border-[#1a1a22] pt-2"
                      >
                        <Award className="w-3 h-3" />
                        Verify Badge <ExternalLink className="w-2.5 h-2.5" />
                      </a>
                    )}
                  </div>
                )
              })}
            </div>
          </HudFrame>
        </SectionReveal>
      </div>
    </section>
  )
}
