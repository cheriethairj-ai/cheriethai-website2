'use client'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function RicardoHandle() {
  const router = useRouter()
  useEffect(() => { router.push('/therapists#therapist-ricardo') }, [router])
  return null
}
