interface PixelCatProps {
  state?: 'sleep' | 'sit' | 'walk' | 'peek'
  className?: string
}

export function PixelCat({ state = 'sit', className = '' }: PixelCatProps) {
  return (
    <div
      className={`inline-flex items-center justify-center select-none ${className}`}
      title="Pixel Cat Companion"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 16 16"
        fill="none"
        className="image-rendering-pixelated"
      >
        {state === 'sleep' && (
          <g>
            <rect x="3" y="10" width="10" height="4" fill="#A78BFA" />
            <rect x="2" y="11" width="2" height="2" fill="#8B5CF6" />
            <rect x="11" y="9" width="3" height="3" fill="#A78BFA" />
            <rect x="12" y="8" width="1" height="1" fill="#8B5CF6" />
          </g>
        )}
        {state === 'sit' && (
          <g>
            <rect x="3" y="2" width="2" height="3" fill="#A78BFA" />
            <rect x="9" y="2" width="2" height="3" fill="#A78BFA" />
            <rect x="3" y="4" width="8" height="6" fill="#8B5CF6" />
            <rect x="5" y="6" width="1" height="1" fill="#22D3EE" />
            <rect x="8" y="6" width="1" height="1" fill="#22D3EE" />
            <rect x="4" y="9" width="6" height="5" fill="#7C3AED" />
            <rect x="10" y="11" width="3" height="2" fill="#A78BFA" />
          </g>
        )}
        {(state === 'walk' || state === 'peek') && (
          <g>
            <rect x="2" y="3" width="2" height="2" fill="#A78BFA" />
            <rect x="7" y="3" width="2" height="2" fill="#A78BFA" />
            <rect x="2" y="4" width="7" height="5" fill="#8B5CF6" />
            <rect x="3" y="6" width="1" height="1" fill="#4ADE80" />
            <rect x="6" y="6" width="1" height="1" fill="#4ADE80" />
            <rect x="1" y="8" width="10" height="4" fill="#7C3AED" />
            <rect x="2" y="12" width="1" height="2" fill="#A78BFA" />
            <rect x="8" y="12" width="1" height="2" fill="#A78BFA" />
            <rect x="11" y="7" width="2" height="3" fill="#A78BFA" />
          </g>
        )}
      </svg>
    </div>
  )
}
