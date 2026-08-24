'use client'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function PedroHandle() {
  const router = useRouter()
  useEffect(() => { router.push('/therapists#therapist-pedro') }, [router])
  return null
}
