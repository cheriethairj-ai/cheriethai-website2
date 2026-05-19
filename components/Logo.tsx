import Image from 'next/image'

interface LogoProps {
  height?: number
  className?: string
  /** 'mark' = ornament only at given height, 'full' = with wordmark below */
  variant?: 'mark' | 'full'
}

/**
 * CherieThai logo — traditional Thai kranok motif.
 * SVG is 1024×1536 (2:3 portrait ratio).
 */
export default function Logo({ height = 48, className = '' }: LogoProps) {
  const width = Math.round(height * (3893 / 5881))

  return (
    <Image
      src="/logo.png"
      alt="CherieThai"
      width={width}
      height={height}
      priority
      className={className}
      style={{ objectFit: 'contain' }}
    />
  )
}
