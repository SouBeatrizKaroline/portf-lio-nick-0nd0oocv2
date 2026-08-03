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
            <rect x="3" y="10" width="10" height="4" fill="#6D28D9" />
            <rect x="2" y="11" width="2" height="2" fill="#4C1D95" />
            <rect x="11" y="9" width="3" height="3" fill="#6D28D9" />
            <rect x="12" y="8" width="1" height="1" fill="#4C1D95" />
            <rect x="5" y="11" width="1" height="1" fill="#00F0FF" opacity="0.5" />
            <rect x="8" y="11" width="1" height="1" fill="#00F0FF" opacity="0.5" />
          </g>
        )}
        {state === 'sit' && (
          <g>
            <rect x="3" y="2" width="2" height="3" fill="#6D28D9" />
            <rect x="9" y="2" width="2" height="3" fill="#6D28D9" />
            <rect x="3" y="4" width="8" height="6" fill="#4C1D95" />
            <rect x="5" y="6" width="1" height="1" fill="#00F0FF" />
            <rect x="8" y="6" width="1" height="1" fill="#00F0FF" />
            <rect x="6" y="8" width="2" height="0.5" fill="#F43F5E" opacity="0.7" />
            <rect x="4" y="9" width="6" height="5" fill="#3B0764" />
            <rect x="10" y="11" width="3" height="2" fill="#6D28D9" />
            <rect x="2" y="13" width="3" height="1" fill="#3B0764" />
          </g>
        )}
        {(state === 'walk' || state === 'peek') && (
          <g>
            <rect x="2" y="3" width="2" height="2" fill="#6D28D9" />
            <rect x="7" y="3" width="2" height="2" fill="#6D28D9" />
            <rect x="2" y="4" width="7" height="5" fill="#4C1D95" />
            <rect x="3" y="6" width="1" height="1" fill="#00F0FF" />
            <rect x="6" y="6" width="1" height="1" fill="#00F0FF" />
            <rect x="1" y="8" width="10" height="4" fill="#3B0764" />
            <rect x="2" y="12" width="1" height="2" fill="#6D28D9" />
            <rect x="8" y="12" width="1" height="2" fill="#6D28D9" />
            <rect x="11" y="7" width="2" height="3" fill="#6D28D9" />
          </g>
        )}
      </svg>
    </div>
  )
}
