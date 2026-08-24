'use client'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function LucasHandle() {
  const router = useRouter()
  useEffect(() => { router.push('/therapists#therapist-lucas') }, [router])
  return null
}
