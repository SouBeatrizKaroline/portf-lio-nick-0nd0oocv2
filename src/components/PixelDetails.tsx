interface PixelDetailProps {
  className?: string
}

export function PixelCoin({ className = '' }: PixelDetailProps) {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 8 8"
      className={`image-rendering-pixelated inline-block ${className}`}
    >
      <rect x="2" y="1" width="4" height="1" fill="#FBBF24" />
      <rect x="1" y="2" width="6" height="4" fill="#F59E0B" />
      <rect x="2" y="3" width="4" height="2" fill="#FBBF24" />
      <rect x="3" y="3" width="2" height="2" fill="#D97706" />
      <rect x="2" y="6" width="4" height="1" fill="#FBBF24" />
    </svg>
  )
}

export function PixelHeart({ className = '' }: PixelDetailProps) {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 8 8"
      className={`image-rendering-pixelated inline-block ${className}`}
    >
      <rect x="1" y="2" width="2" height="1" fill="#F43F5E" />
      <rect x="5" y="2" width="2" height="1" fill="#F43F5E" />
      <rect x="1" y="3" width="6" height="2" fill="#F43F5E" />
      <rect x="2" y="5" width="4" height="1" fill="#E11D48" />
      <rect x="3" y="6" width="2" height="1" fill="#E11D48" />
    </svg>
  )
}

export function PixelCheckpoint({ className = '' }: PixelDetailProps) {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 8 8"
      className={`image-rendering-pixelated inline-block ${className}`}
    >
      <rect x="3" y="0" width="2" height="6" fill="#22D3EE" />
      <rect x="1" y="1" width="6" height="2" fill="#06B6D4" />
      <rect x="2" y="6" width="4" height="1" fill="#0891B2" />
      <rect x="3" y="7" width="2" height="1" fill="#0891B2" />
    </svg>
  )
}

export function PixelStar({ className = '' }: PixelDetailProps) {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 8 8"
      className={`image-rendering-pixelated inline-block ${className}`}
    >
      <rect x="3" y="0" width="2" height="2" fill="#FBBF24" />
      <rect x="0" y="3" width="8" height="2" fill="#FBBF24" />
      <rect x="3" y="2" width="2" height="4" fill="#FBBF24" />
      <rect x="1" y="5" width="2" height="2" fill="#F59E0B" />
      <rect x="5" y="5" width="2" height="2" fill="#F59E0B" />
    </svg>
  )
}
