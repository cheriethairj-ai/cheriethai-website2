'use client'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function GraceKellyHandle() {
  const router = useRouter()
  useEffect(() => { router.push('/therapists#therapist-grace-kelly') }, [router])
  return null
}
