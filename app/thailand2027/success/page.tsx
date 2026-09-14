'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import CustomCursor from '@/components/CustomCursor'

export default function SuccessPage() {
  return (
    <>
      <CustomCursor />
      <main
        style={{ background: '#0D110E', minHeight: '100svh', color: '#F5F0E8' }}
        className="flex flex-col items-center justify-center px-6 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, ease: [0.25, 0.1, 0.25, 1.0] }}
          className="max-w-xl"
        >
          <p className="label-text text-sage/35 mb-8" style={{ fontSize: '0.48rem', letterSpacing: '0.32em' }}>
            CHERIETHAI INSTITUTE · THAILAND 2027
          </p>

          <h1
            className="font-cormorant font-light text-ivory mb-6"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', lineHeight: 0.95 }}
          >
            You&rsquo;re officially<br />confirmed.
          </h1>

          <div
            style={{ borderTop: '1px solid rgba(220,201,160,0.1)', borderBottom: '1px solid rgba(220,201,160,0.1)', padding: '2rem 0', margin: '2rem 0' }}
          >
            <p className="body-text text-sand/55 leading-loose" style={{ fontSize: 'clamp(0.9rem, 1.4vw, 1rem)' }}>
              Thank you for completing your payment for the CherieThai Thailand Retreat 2027.
              Your place on the training is now fully confirmed, and a payment confirmation has been sent to your email.
            </p>
            <p className="body-text text-sand/40 leading-loose mt-4" style={{ fontSize: '0.9rem' }}>
              Cherie will contact you via WhatsApp to schedule a video call with you before the retreat.
              This will give you a chance to meet, discuss any relevant information and make sure everything is prepared before Thailand.
            </p>
          </div>

          <div className="space-y-3 mb-12">
            <p className="label-text text-sage/30" style={{ fontSize: '0.44rem', letterSpacing: '0.22em' }}>
              11–14 JANUARY 2027 · VOASIS VALLEY · KRABI · THAILAND
            </p>
          </div>

          <Link
            href="/thailand2027"
            className="label-text text-sand/40 hover:text-sand/70 transition-colors duration-300"
            style={{ fontSize: '0.48rem', letterSpacing: '0.22em' }}
          >
            ← BACK TO THE RETREAT PAGE
          </Link>
        </motion.div>
      </main>
    </>
  )
}
