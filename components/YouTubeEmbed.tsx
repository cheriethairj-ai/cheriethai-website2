'use client'

import { useRef, useState, useEffect } from 'react'

interface Props {
  src: string
  className?: string
}

function getYouTubeId(src: string): string {
  const match = src.match(/embed\/([^?]+)/)
  return match ? match[1] : ''
}

export default function YouTubeEmbed({ src, className = '' }: Props) {
  const videoId = getYouTubeId(src)
  const ref = useRef<HTMLDivElement>(null)
  const [embedSrc, setEmbedSrc] = useState('')

  const embedUrl = [
    `https://www.youtube.com/embed/${videoId}`,
    `?autoplay=1`,
    `&mute=1`,
    `&loop=1`,
    `&playlist=${videoId}`,
    `&controls=0`,
    `&playsinline=1`,
    `&rel=0`,
    `&modestbranding=1`,
    `&showinfo=0`,
    `&iv_load_policy=3`,
    `&disablekb=1`,
    `&fs=0`,
  ].join('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setEmbedSrc(embedUrl) },
      { threshold: 0.05 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [embedUrl])

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`} style={{ background: '#0D110E' }}>

      {/* Expand iframe slightly beyond bounds to clip the YouTube watermark corners */}
      <div style={{ position: 'absolute', inset: '-2px' }}>
        <iframe
          src={embedSrc}
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 'max(100%, 177.78vh)',
            height: 'max(100%, 56.25vw)',
            border: 'none',
            pointerEvents: 'none',
          }}
          allow="autoplay; fullscreen"
        />
      </div>

      {/* Desktop: transparent overlay blocks YouTube hover UI (channel name, etc.)
          Mobile: pointer-events off so users can tap the YouTube player to play */}
      <div className="absolute inset-0 z-10 hidden md:block" style={{ pointerEvents: 'all', cursor: 'default' }} />

    </div>
  )
}
