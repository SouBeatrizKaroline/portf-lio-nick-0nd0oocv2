import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useLanguage } from '@/hooks/use-language'
import { PixelCat } from './PixelCat'
import { Menu, X, Github, FileText } from 'lucide-react'

export function Navbar() {
  const { locale, setLocale, t } = useLanguage()
  const location = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

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
          ? 'bg-[#101010]/90 backdrop-blur-md border-b border-[#2A2A2A] py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="relative border border-purple-500/50 bg-[#181818] px-2.5 py-1 text-sm font-mono font-bold text-purple-400 group-hover:border-purple-400 transition-colors">
            NICK
            <PixelCat state="sit" className="absolute -top-3 -right-2 scale-75" />
          </div>
          <span className="text-xs font-mono text-gray-400 hidden sm:inline-block">/ GAME DEV</span>
        </Link>

        {/* Desktop Nav */}
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

          {/* Lang Switcher */}
          <div className="flex items-center bg-[#181818] border border-[#2A2A2A] p-0.5 rounded text-xs font-mono">
            {(['pt', 'en', 'es'] as const).map((lang) => (
              <button
                key={lang}
                onClick={() => setLocale(lang)}
                className={`px-2 py-0.5 transition-colors uppercase ${
                  locale === lang
                    ? 'bg-purple-600 text-white font-bold'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {lang}
              </button>
            ))}
          </div>

          <a
            href="https://github.com/nicolemaira"
            target="_blank"
            rel="noreferrer"
            className="p-1.5 text-gray-400 hover:text-white transition-colors"
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

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-gray-300 hover:text-white"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-[#101010] border-b border-[#2A2A2A] px-6 py-6 space-y-4 font-mono">
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

          <div className="flex items-center gap-2 pt-2 border-t border-[#2A2A2A]">
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
                    ? 'bg-purple-600 border-purple-500 text-white'
                    : 'border-[#2A2A2A] text-gray-400'
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
