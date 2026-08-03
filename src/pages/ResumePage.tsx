import { useState } from 'react'
import { useLanguage } from '@/hooks/use-language'
import { HudFrame } from '@/components/HudFrame'
import { Download, FileText } from 'lucide-react'

export default function ResumePage() {
  const { t } = useLanguage()
  const [lang, setLang] = useState<'pt' | 'en' | 'es'>('pt')

  return (
    <div className="pt-28 pb-20 px-6 max-w-4xl mx-auto font-mono bg-[#080808]">
      <HudFrame label="CURRICULUM_VITAE" className="p-8 sm:p-10">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-2xl font-bold text-white mb-1">
              Nicole Maira Passos Lopes da Silva
            </h1>
            <div className="text-xs text-purple-400">Game Developer & Software Engineer</div>
          </div>

          <div className="flex items-center gap-2">
            {(['pt', 'en', 'es'] as const).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`px-3 py-1 text-xs uppercase border ${
                  lang === l
                    ? 'bg-purple-600 border-purple-500 text-white'
                    : 'border-[#2A2A2A] text-gray-400'
                }`}
              >
                {l}
              </button>
            ))}
          </div>
        </div>

        <div className="bg-[#101014] border border-[#1a1a22] p-6 space-y-6 text-xs text-gray-300">
          {' '}
          <div>
            <div className="text-purple-400 font-bold mb-2 uppercase">// APRESENTAÇÃO</div>
            <p className="leading-relaxed">
              Formada em Análise e Desenvolvimento de Sistemas e apaixonada por criar experiências
              interativas através da programação, arquitetura de gameplay e desenvolvimento de
              sistemas para jogos digitais.
            </p>
          </div>
          <div>
            <div className="text-purple-400 font-bold mb-2 uppercase">
              // EXPERIÊNCIA PROFISSIONAL
            </div>
            <div className="space-y-3">
              <div>
                <div className="text-white font-bold">
                  Unity Developer (Freelancer) — Projeto Confidencial (2024 — 2025)
                </div>
                <p>
                  Desenvolvimento WebGL & Mobile em Unity, arquitetura de sistemas, autenticação
                  backend e performance.
                </p>
              </div>
              <div>
                <div className="text-white font-bold">
                  Programadora Trainee — Capgemini (2018 — 2020)
                </div>
                <p>
                  Treinamento corporativo, Java, SQL Server e fundamentos de sistemas empresariais.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="text-purple-400 font-bold mb-2 uppercase">
              // HABILIDADES PRINCIPAIS
            </div>
            <p>
              Unity 2D/3D, C#, Player Controller, State Machine, URP, ASP.NET Core MVC, Entity
              Framework, Git.
            </p>
          </div>
        </div>

        <div className="mt-8 flex justify-end">
          <a
            href={`/resume-${lang}.pdf`}
            download
            className="bg-purple-600 hover:bg-purple-500 text-white font-bold px-6 py-2.5 text-xs flex items-center gap-2 shadow-[0_0_15px_rgba(139,92,246,0.4)]"
          >
            <Download className="w-4 h-4" /> Baixar Currículo ({lang.toUpperCase()})
          </a>
        </div>
      </HudFrame>
    </div>
  )
}
