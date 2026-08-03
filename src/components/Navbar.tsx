import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useLanguage } from '@/hooks/use-language'
import { useScrollSpy } from '@/hooks/use-scroll-spy'
import { PixelCat } from './PixelCat'
import { Menu, X, Github, FileText, Activity, Shield, Terminal, MessageSquare } from 'lucide-react'

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
    const handleScroll = () => setScrolled(window.scrollY > 30)
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
          ? 'bg-[#080808]/95 backdrop-blur-md border-b border-[#2a2a35] py-2.5 shadow-[0_4px_20px_rgba(0,0,0,0.8)]'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Brand OS Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative border border-cyan-500/60 bg-[#1A1A20] px-3 py-1 text-sm font-mono font-bold text-cyan-400 group-hover:border-purple-400 group-hover:text-purple-300 transition-colors shadow-[0_0_10px_rgba(0,240,255,0.2)]">
            NICK_OS // v3.2
            <PixelCat state="sit" className="absolute -top-3.5 -right-2 scale-75" />
          </div>

          {/* Active Status Badge */}
          <div className="hidden lg:flex items-center gap-2 text-[10px] font-mono bg-emerald-950/40 border border-emerald-500/30 px-2 py-0.5 rounded text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>STATUS: ONLINE</span>
          </div>
        </Link>

        {/* Center Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-xs font-mono tracking-wider uppercase transition-all px-2 py-1 relative ${
                location.pathname === item.path
                  ? 'text-cyan-400 font-bold border-b-2 border-cyan-400 bg-cyan-950/20'
                  : 'text-gray-300 hover:text-cyan-300 hover:bg-[#1A1A20]'
              }`}
            >
              {item.label}
            </Link>
          ))}

          {/* Radar Active Section Sweep */}
          {isHome && activeSection && (
            <div className="flex items-center gap-2 text-[10px] font-mono text-cyan-400/80 bg-[#1A1A20] border border-[#2a2a35] px-2.5 py-1">
              <div className="relative w-3.5 h-3.5">
                <div className="absolute inset-0 rounded-full border border-cyan-500/40" />
                <div
                  className="absolute inset-0 rounded-full"
                  style={{
                    background:
                      'conic-gradient(from 0deg, transparent 0deg, rgba(0,240,255,0.4) 40deg, transparent 80deg)',
                    animation: 'radar-sweep 2.5s linear infinite',
                  }}
                />
                <div className="absolute top-1/2 left-1/2 w-0.5 h-0.5 -translate-x-1/2 -translate-y-1/2 bg-cyan-400 rounded-full" />
              </div>
              <span className="uppercase tracking-widest font-semibold">{activeSection}</span>
            </div>
          )}

          {/* Hardware Telemetry Metric */}
          <div className="hidden xl:flex items-center gap-3 text-[10px] font-mono text-gray-400 border-l border-[#2a2a35] pl-4">
            <span>FPS: 60</span>
            <span>SYNC: READY</span>
          </div>

          {/* Language Switcher */}
          <div className="flex items-center bg-[#1A1A20] border border-[#2a2a35] p-0.5 text-xs font-mono">
            {(['pt', 'en', 'es'] as const).map((lang) => (
              <button
                key={lang}
                onClick={() => setLocale(lang)}
                className={`px-2 py-0.5 transition-colors uppercase font-bold text-[10px] ${
                  locale === lang
                    ? 'bg-purple-600 text-[#EDEDED] shadow-[0_0_8px_rgba(168,85,247,0.5)]'
                    : 'text-gray-400 hover:text-[#EDEDED]'
                }`}
              >
                {lang}
              </button>
            ))}
          </div>

          {/* External Social Links */}
          <a
            href="https://github.com/NicolePLSilva"
            target="_blank"
            rel="noreferrer"
            className="p-1.5 text-gray-400 hover:text-cyan-400 transition-colors"
            title="GitHub Profile"
          >
            <Github className="w-4 h-4" />
          </a>

          <a
            href="https://wa.me/5511999999999"
            target="_blank"
            rel="noreferrer"
            className="p-1.5 text-gray-400 hover:text-emerald-400 transition-colors"
            title="WhatsApp Contact"
          >
            <MessageSquare className="w-4 h-4" />
          </a>

          <Link
            to="/resume"
            className="flex items-center gap-1.5 bg-cyan-950/40 hover:bg-cyan-900/60 text-cyan-300 border border-cyan-500/50 px-3 py-1 text-xs font-mono transition-all shadow-[0_0_10px_rgba(0,240,255,0.1)]"
          >
            <FileText className="w-3.5 h-3.5 text-cyan-400" />
            {t('nav_resume')}
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-gray-300 hover:text-cyan-400"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div className="md:hidden bg-[#080808] border-b border-[#2a2a35] px-6 py-6 space-y-4 font-mono text-sm">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setMobileOpen(false)}
              className="block text-gray-200 hover:text-cyan-400 uppercase tracking-wider"
            >
              {item.label}
            </Link>
          ))}

          <div className="flex items-center gap-3 pt-3 border-t border-[#2a2a35]">
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
                    : 'border-[#2a2a35] text-gray-400'
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
