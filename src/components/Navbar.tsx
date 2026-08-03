import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useLanguage } from '@/hooks/use-language'
import { useScrollSpy } from '@/hooks/use-scroll-spy'
import { PixelCat } from './PixelCat'
import { Menu, X, Github, Gamepad2, Linkedin, Mail, MessageSquare } from 'lucide-react'

export function Navbar() {
  const { locale, setLocale, t } = useLanguage()
  const location = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  const isHome = location.pathname === '/'
  const activeSection = useScrollSpy(
    isHome ? ['about', 'experience', 'projects', 'skills', 'certificates', 'contact'] : [],
  )

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileOpen(false)
    }
    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  const navItems = [
    { label: t('nav_home') || 'HOME', path: isHome ? '#home' : '/#home' },
    { label: t('nav_about') || 'ABOUT', path: isHome ? '#about' : '/#about' },
    { label: t('nav_experience') || 'EXPERIENCE', path: isHome ? '#experience' : '/#experience' },
    { label: t('nav_projects') || 'PROJECTS', path: isHome ? '#projects' : '/#projects' },
    { label: t('nav_skills') || 'SKILLS', path: isHome ? '#skills' : '/#skills' },
    {
      label: t('nav_certs') || 'CERTIFICATIONS',
      path: isHome ? '#certificates' : '/#certificates',
    },
    { label: t('nav_contact') || 'CONTACT', path: isHome ? '#contact' : '/#contact' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled
          ? 'bg-[#080808]/90 backdrop-blur-xl border-b border-cyan-500/15 py-2 shadow-[0_4px_20px_rgba(0,0,0,0.8)] hud-navbar'
          : 'bg-transparent py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand OS Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative border border-cyan-500/60 bg-[#14141A] px-3 py-1 text-xs sm:text-sm font-mono font-bold text-cyan-400 group-hover:border-purple-400 group-hover:text-purple-300 transition-colors shadow-[0_0_12px_rgba(0,240,255,0.2)]">
            NICK_OS // V3.0
            <PixelCat state="sit" className="absolute -top-3.5 -right-2 scale-75" />
          </div>

          {/* Active Status Badge */}
          <div className="hidden lg:flex items-center gap-2 text-[10px] font-mono bg-emerald-950/40 border border-emerald-500/30 px-2 py-0.5 rounded text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>STATUS: OPTIMAL</span>
          </div>
        </Link>

        {/* Center Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1.5 xl:gap-3">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.path}
              className="text-[11px] font-mono tracking-wider uppercase transition-all px-2 py-1 text-gray-300 hover:text-cyan-300 hover:bg-[#1A1A20] border border-transparent hover:border-[#2a2a35]"
            >
              {item.label}
            </a>
          ))}

          {/* Active Section Indicator */}
          {isHome && activeSection && (
            <div className="flex items-center gap-1.5 text-[10px] font-mono text-cyan-300 bg-cyan-950/30 border border-cyan-500/50 px-2.5 py-1 ml-2 shadow-[0_0_12px_rgba(0,240,255,0.2)] transition-all duration-300">
              <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-ping shadow-[0_0_6px_rgba(0,240,255,0.8)]" />
              <span className="uppercase font-bold tracking-wider">{activeSection}</span>
            </div>
          )}
        </nav>

        {/* Right Side Icons & Language Switcher */}
        <div className="hidden sm:flex items-center gap-3">
          <div className="flex items-center gap-1 border-r border-[#2a2a35] pr-3">
            <a
              href="https://pls-nick.itch.io/"
              target="_blank"
              rel="noreferrer"
              aria-label="Itch.io Games"
              className="p-2 text-gray-400 hover:text-purple-400 transition-colors"
              title="Itch.io Games"
            >
              <Gamepad2 className="w-4 h-4" />
            </a>
            <a
              href="https://github.com/NicolePLSilva"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub Profile"
              className="p-2 text-gray-400 hover:text-cyan-400 transition-colors"
              title="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/nicole-maira/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="p-2 text-gray-400 hover:text-blue-400 transition-colors"
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="https://wa.me/5571985304202"
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp Direct"
              className="p-2 text-gray-400 hover:text-emerald-400 transition-colors"
              title="WhatsApp Direct"
            >
              <MessageSquare className="w-4 h-4" />
            </a>
          </div>

          {/* Language Switcher */}
          <div className="flex items-center bg-[#14141D] border border-[#2a2a35] p-0.5 text-xs font-mono">
            {(['pt', 'en', 'es'] as const).map((lang) => (
              <button
                key={lang}
                onClick={() => setLocale(lang)}
                aria-label={`Switch language to ${lang.toUpperCase()}`}
                className={`px-3 py-1.5 transition-colors uppercase font-bold text-[10px] ${
                  locale === lang
                    ? 'bg-purple-600 text-[#EDEDED] shadow-[0_0_8px_rgba(168,85,247,0.5)]'
                    : 'text-gray-400 hover:text-[#EDEDED]'
                }`}
              >
                {lang}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          className="lg:hidden p-2.5 text-gray-300 hover:text-cyan-400 border border-[#2a2a35] bg-[#14141D] touch-min transition-colors"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div
          id="mobile-menu"
          role="menu"
          aria-label="Mobile navigation"
          className="lg:hidden bg-[#080808]/98 backdrop-blur-xl border-b border-[#2a2a35] px-4 sm:px-6 py-6 space-y-4 font-mono text-xs animate-fade-in-down"
        >
          <div className="space-y-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.path}
                onClick={() => setMobileOpen(false)}
                role="menuitem"
                className="block text-gray-200 hover:text-cyan-400 uppercase tracking-wider py-3 text-sm border-b border-[#181820] transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center justify-between pt-3 border-t border-[#2a2a35]">
            <div className="flex items-center gap-2">
              <a
                href="https://pls-nick.itch.io/"
                target="_blank"
                rel="noreferrer"
                aria-label="Itch.io Games"
                className="p-2.5 text-purple-400 border border-[#2a2a35] bg-[#14141D] touch-min transition-colors"
              >
                <Gamepad2 className="w-4 h-4" />
              </a>
              <a
                href="https://github.com/NicolePLSilva"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Profile"
                className="p-2.5 text-cyan-400 border border-[#2a2a35] bg-[#14141D] touch-min transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/nicole-maira/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2.5 text-blue-400 border border-[#2a2a35] bg-[#14141D] touch-min transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>

            <div className="flex items-center gap-1">
              {(['pt', 'en', 'es'] as const).map((lang) => (
                <button
                  key={lang}
                  onClick={() => {
                    setLocale(lang)
                    setMobileOpen(false)
                  }}
                  aria-label={`Switch language to ${lang.toUpperCase()}`}
                  className={`px-3 py-2 text-[10px] uppercase border touch-min transition-colors ${
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
        </div>
      )}
    </header>
  )
}
