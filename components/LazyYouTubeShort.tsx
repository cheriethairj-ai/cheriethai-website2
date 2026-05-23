'use client'

import { useRef, useState, useEffect, } from 'react'

interface Props {
  youtubeId: string
}

export default function LazyYouTubeShort({ youtubeId }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const [src, setSrc] = useState('')
  const embedUrl = `https://www.youtube.com/embed/${youtubeId}?autoplay=1&mute=1&loop=1&playlist=${youtubeId}&controls=0&playsinline=1&rel=0&modestbranding=1&showinfo=0&iv_load_policy=3`

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setSrc(embedUrl) },
      { threshold: 0.05 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [embedUrl])

  return (
    <div
      ref={ref}
      className="absolute inset-0"
      style={{ background: '#0D110E' }}
    >
      {src && (
        <iframe
          src={src}
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 'max(100%, 56.25vh)',
            height: 'max(100%, 177.78vw)',
            border: 'none',
            pointerEvents: 'none',
          }}
          allow="autoplay; fullscreen"
          title={`YouTube short ${youtubeId}`}
        />
      )}
      {/* Desktop: block all YouTube hover UI (title, logo, controls) */}
      <div
        className="absolute inset-0 hidden md:block"
        style={{ pointerEvents: 'all', cursor: 'default', zIndex: 10 }}
      />
    </div>
  )
}
