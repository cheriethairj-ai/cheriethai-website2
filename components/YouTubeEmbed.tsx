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

  // Simple embed with controls — users can click play on all devices
  const embedUrl = [
    `https://www.youtube.com/embed/${videoId}`,
    `?controls=1`,
    `&playsinline=1`,
    `&rel=0`,
    `&modestbranding=1`,
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
      <iframe
        src={embedSrc}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          border: 'none',
        }}
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
      />
    </div>
  )
}
