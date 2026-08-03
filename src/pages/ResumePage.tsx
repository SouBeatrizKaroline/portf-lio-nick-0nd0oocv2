import { useState } from 'react'
import { useLanguage } from '@/hooks/use-language'
import { HudFrame } from '@/components/HudFrame'
import { Download, Github, ExternalLink, Linkedin, Mail, MessageCircle } from 'lucide-react'

export default function ResumePage() {
  const { t } = useLanguage()
  const [lang, setLang] = useState<'pt' | 'en' | 'es'>('pt')

  const content = {
    pt: {
      summary:
        'Game Developer e Software Engineer formada em Análise e Desenvolvimento de Sistemas, com experiência em Unity/C#, ASP.NET e desenvolvimento de jogos para WebGL e Mobile.',
      expTitle: 'EXPERIÊNCIA PROFISSIONAL',
      skillsTitle: 'HABILIDADES PRINCIPAIS',
      education: 'FORMAÇÃO',
      exp1: 'Unity Developer (Freelancer) — Projeto Confidencial (2024 — 2025)',
      exp1Desc:
        'Desenvolvimento WebGL & Mobile em Unity. Autenticação backend, cloud save, otimização de performance. Redução de 40% no tempo de carregamento.',
      exp2: 'Programadora Trainee — Capgemini (2018 — 2020)',
      exp2Desc:
        'Treinamento corporativo em Java, SQL Server e ABAP. Dominio de OOP e fundamentos de arquitetura de software.',
      skills:
        'Unity 2D/3D, C#, State Machine, URP, Cinemachine, ASP.NET Core, Entity Framework, SQL Server, Git.',
      educationDesc: 'Análise e Desenvolvimento de Sistemas',
    },
    en: {
      summary:
        'Game Developer and Software Engineer with a degree in Systems Analysis and Development, experienced in Unity/C#, ASP.NET, and WebGL/Mobile game development.',
      expTitle: 'PROFESSIONAL EXPERIENCE',
      skillsTitle: 'KEY SKILLS',
      education: 'EDUCATION',
      exp1: 'Unity Developer (Freelance) — Confidential Project (2024 — 2025)',
      exp1Desc:
        'WebGL & Mobile game development in Unity. Backend authentication, cloud save, performance optimization. 40% loading time reduction.',
      exp2: 'Trainee Programmer — Capgemini (2018 — 2020)',
      exp2Desc:
        'Corporate training in Java, SQL Server, and ABAP. Mastery of OOP and software architecture fundamentals.',
      skills:
        'Unity 2D/3D, C#, State Machine, URP, Cinemachine, ASP.NET Core, Entity Framework, SQL Server, Git.',
      educationDesc: 'Systems Analysis and Development',
    },
    es: {
      summary:
        'Game Developer e Software Engineer graduada en Análisis y Desarrollo de Sistemas, con experiencia en Unity/C#, ASP.NET y desarrollo de juegos para WebGL y Mobile.',
      expTitle: 'EXPERIENCIA PROFESIONAL',
      skillsTitle: 'HABILIDADES PRINCIPALES',
      education: 'FORMACIÓN',
      exp1: 'Unity Developer (Freelance) — Proyecto Confidencial (2024 — 2025)',
      exp1Desc:
        'Desarrollo WebGL & Mobile en Unity. Autenticación backend, cloud save, optimización de rendimiento. Reducción del 40% en tiempo de carga.',
      exp2: 'Programadora Trainee — Capgemini (2018 — 2020)',
      exp2Desc:
        'Capacitación corporativa en Java, SQL Server y ABAP. Dominio de POO y fundamentos de arquitectura de software.',
      skills:
        'Unity 2D/3D, C#, State Machine, URP, Cinemachine, ASP.NET Core, Entity Framework, SQL Server, Git.',
      educationDesc: 'Análisis y Desarrollo de Sistemas',
    },
  }

  const c = content[lang]

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
                className={`px-3 py-1 text-xs uppercase border transition-all ${
                  lang === l
                    ? 'bg-purple-600 border-purple-500 text-white'
                    : 'border-[#1a1a22] text-gray-400 hover:text-[#EDEDED]'
                }`}
              >
                {l}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-4 mb-6 text-xs">
          <a
            href="https://github.com/NicolePLSilva"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 text-gray-300 hover:text-purple-400 transition-colors"
          >
            <Github className="w-3.5 h-3.5" /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/nicole-maira/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 text-gray-300 hover:text-purple-400 transition-colors"
          >
            <Linkedin className="w-3.5 h-3.5" /> LinkedIn
          </a>
          <a
            href="https://pls-nick.itch.io/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 text-gray-300 hover:text-purple-400 transition-colors"
          >
            <ExternalLink className="w-3.5 h-3.5" /> Itch.io
          </a>
          <a
            href="mailto:nicolemairaplsilva@gmail.com"
            className="flex items-center gap-1.5 text-gray-300 hover:text-purple-400 transition-colors"
          >
            <Mail className="w-3.5 h-3.5" /> Email
          </a>
          <a
            href="https://wa.me/5571985304202"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 text-gray-300 hover:text-purple-400 transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5" /> WhatsApp
          </a>
        </div>

        <div className="bg-[#101014] border border-[#1a1a22] p-6 space-y-6 text-xs text-gray-300">
          <div>
            <div className="text-purple-400 font-bold mb-2 uppercase">// APRESENTAÇÃO</div>
            <p className="leading-relaxed">{c.summary}</p>
          </div>
          <div>
            <div className="text-purple-400 font-bold mb-2 uppercase">// {c.expTitle}</div>
            <div className="space-y-3">
              <div>
                <div className="text-white font-bold">{c.exp1}</div>
                <p className="mt-1">{c.exp1Desc}</p>
              </div>
              <div>
                <div className="text-white font-bold">{c.exp2}</div>
                <p className="mt-1">{c.exp2Desc}</p>
              </div>
            </div>
          </div>
          <div>
            <div className="text-purple-400 font-bold mb-2 uppercase">// {c.skillsTitle}</div>
            <p className="leading-relaxed">{c.skills}</p>
          </div>
          <div>
            <div className="text-purple-400 font-bold mb-2 uppercase">// {c.education}</div>
            <p>{c.educationDesc}</p>
          </div>
        </div>

        <div className="mt-8 flex justify-end">
          <button
            onClick={() => window.print()}
            className="bg-purple-600 hover:bg-purple-500 text-white font-bold px-6 py-2.5 text-xs flex items-center gap-2 shadow-[0_0_15px_rgba(139,92,246,0.4)] transition-all"
          >
            <Download className="w-4 h-4" /> PDF / Print ({lang.toUpperCase()})
          </button>
        </div>
      </HudFrame>
    </div>
  )
}
