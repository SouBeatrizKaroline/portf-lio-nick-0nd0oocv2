import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const NotFound = () => {
  const location = useLocation()

  useEffect(() => {
    console.error('404 Error: User attempted to access non-existent route:', location.pathname)
  }, [location.pathname])

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#080808] holo-grid">
      <div className="text-center font-mono">
        <div className="text-[10px] text-cyan-400/50 tracking-[0.3em] uppercase mb-2">
          ERROR.PROTOCOL
        </div>
        <h1 className="text-6xl font-bold font-display text-purple-400 mb-4 text-glow-purple">
          404
        </h1>
        <p className="text-xl text-gray-400 mb-4">SYSTEM ERROR: Page not found</p>
        <Link to="/" className="text-purple-400 hover:text-purple-300 underline transition-colors">
          ← Return to Home
        </Link>
      </div>
    </div>
  )
}

export default NotFound
