import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useLanguage } from '@/hooks/use-language'
import { useScrollSpy } from '@/hooks/use-scroll-spy'
import { PixelCat } from './PixelCat'
import { Menu, X, Github, FileText, Radar } from 'lucide-react'

export function Navbar() {
  const { locale, setLocale, t } = useLanguage()
  const location = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  const isHome = location.pathname === '/'
  const activeSection = useScrollSpy(
    isHome ? ['about', 'timeline', 'experience', 'skills', 'projects', 'systems', 'contact'] : [],
  )

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { label: t('nav_home'), path: '/' },
    { label: t('nav_games'), path: '/games' },
    { label: t('nav_resume'), path: '/resume' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0B0B0F]/90 backdrop-blur-md border-b border-[#1a1a22] py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="relative border border-purple-500/50 bg-[#101014] px-2.5 py-1 text-sm font-mono font-bold text-purple-400 group-hover:border-purple-400 transition-colors">
            NICK
            <PixelCat state="sit" className="absolute -top-3 -right-2 scale-75" />
          </div>
          <span className="text-xs font-mono text-gray-400 hidden sm:inline-block">/ GAME DEV</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-sm font-mono transition-colors hover:text-purple-400 ${
                location.pathname === item.path
                  ? 'text-purple-400 font-bold border-b-2 border-purple-500 pb-0.5'
                  : 'text-gray-300'
              }`}
            >
              {item.label}
            </Link>
          ))}

          {isHome && activeSection && (
            <div className="flex items-center gap-1.5 text-[10px] font-mono text-cyan-400/60">
              <div className="relative w-3.5 h-3.5">
                <div className="absolute inset-0 rounded-full border border-purple-500/30" />
                <div
                  className="absolute inset-0 rounded-full"
                  style={{
                    background:
                      'conic-gradient(from 0deg, transparent 0deg, rgba(168,85,247,0.2) 40deg, transparent 80deg)',
                    animation: 'radar-sweep 3s linear infinite',
                  }}
                />
                <div className="absolute top-1/2 left-1/2 w-0.5 h-0.5 -translate-x-1/2 -translate-y-1/2 bg-purple-400 rounded-full" />
              </div>
              <span className="uppercase tracking-wider">{activeSection}</span>
            </div>
          )}

          <div className="flex items-center bg-[#101014] border border-[#1a1a22] p-0.5 rounded text-xs font-mono">
            {(['pt', 'en', 'es'] as const).map((lang) => (
              <button
                key={lang}
                onClick={() => setLocale(lang)}
                className={`px-2 py-0.5 transition-colors uppercase ${
                  locale === lang
                    ? 'bg-purple-600 text-[#EDEDED] font-bold'
                    : 'text-gray-400 hover:text-[#EDEDED]'
                }`}
              >
                {lang}
              </button>
            ))}
          </div>

          <a
            href="https://github.com/NicolePLSilva"
            target="_blank"
            rel="noreferrer"
            className="p-1.5 text-gray-400 hover:text-[#EDEDED] transition-colors"
            title="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>

          <Link
            to="/resume"
            className="flex items-center gap-1.5 bg-purple-600/20 hover:bg-purple-600/40 text-purple-300 border border-purple-500/50 px-3 py-1 text-xs font-mono transition-all"
          >
            <FileText className="w-3.5 h-3.5" />
            {t('nav_resume')}
          </Link>
        </nav>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-gray-300 hover:text-[#EDEDED]"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-[#0B0B0F] border-b border-[#1a1a22] px-6 py-6 space-y-4 font-mono">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setMobileOpen(false)}
              className="block text-base text-gray-200 hover:text-purple-400"
            >
              {item.label}
            </Link>
          ))}

          <div className="flex items-center gap-2 pt-2 border-t border-[#1a1a22]">
            <span className="text-xs text-gray-400">LANG:</span>
            {(['pt', 'en', 'es'] as const).map((lang) => (
              <button
                key={lang}
                onClick={() => {
                  setLocale(lang)
                  setMobileOpen(false)
                }}
                className={`px-3 py-1 text-xs uppercase border ${
                  locale === lang
                    ? 'bg-purple-600 border-purple-500 text-[#EDEDED]'
                    : 'border-[#1a1a22] text-gray-400'
                }`}
              >
                {lang}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
