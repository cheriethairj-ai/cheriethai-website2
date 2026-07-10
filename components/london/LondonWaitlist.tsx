'use client'

import { useState, FormEvent } from 'react'
import { motion } from 'framer-motion'

// TODO: replace with your real Formspree endpoint.
// Sign up at https://formspree.io, create a form, and paste its endpoint
// (e.g. https://formspree.io/f/abcdwxyz) below.
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID'

const inView = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.9, delay, ease: [0.25, 0.1, 0.25, 1.0] as [number, number, number, number] },
})

type Status = 'idle' | 'submitting' | 'success' | 'error'

export default function LondonWaitlist() {
  const [status, setStatus] = useState<Status>('idle')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const formData = new FormData(form)

    setStatus('submitting')
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      })
      if (res.ok) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="waitlist" className="bg-dark-moss overflow-hidden">
      <div className="px-6 md:px-12 lg:px-16 py-24 md:py-32 lg:py-40">
        <div className="max-w-xl mx-auto text-center">

          <motion.p {...inView()} className="label-text text-sage mb-8">
            Join the Waitlist
          </motion.p>

          <motion.h2
            className="display-section text-ivory mb-6"
            style={{ fontSize: 'clamp(2.25rem, 5vw, 3.75rem)' }}
            {...inView(0.1)}
          >
            Be the first to<br />feel it in London.
          </motion.h2>

          <motion.p {...inView(0.2)} className="body-text text-sand/60 text-base md:text-lg mb-14 max-w-md mx-auto">
            Founding spots are limited. Join the list to receive launch details,
            priority booking, and an invitation to the opening sessions before
            they're made public.
          </motion.p>

          {status === 'success' ? (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1.0] }}
              className="border border-sand/20 px-8 py-10"
            >
              <p className="display-quote text-sand text-xl md:text-2xl mb-3">
                You're on the list.
              </p>
              <p className="body-text text-sage/60 text-sm">
                We'll be in touch as London takes shape. In the meantime,
                follow{' '}
                <a
                  href="https://instagram.com/cheriethailondon"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline text-sand/80"
                >
                  @cheriethailondon
                </a>{' '}
                for updates.
              </p>
            </motion.div>
          ) : (
            <motion.form
              {...inView(0.3)}
              onSubmit={handleSubmit}
              className="text-left"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-4">
                <div>
                  <label htmlFor="london-name" className="sr-only">Name</label>
                  <input
                    id="london-name"
                    name="name"
                    type="text"
                    required
                    placeholder="Name"
                    className="input-underline"
                    style={{ borderBottomColor: 'rgba(220,201,160,0.25)', color: '#F5F0E8' }}
                  />
                </div>
                <div>
                  <label htmlFor="london-email" className="sr-only">Email</label>
                  <input
                    id="london-email"
                    name="email"
                    type="email"
                    required
                    placeholder="Email"
                    className="input-underline"
                    style={{ borderBottomColor: 'rgba(220,201,160,0.25)', color: '#F5F0E8' }}
                  />
                </div>
              </div>

              <input type="hidden" name="_subject" value="New CherieThai London waitlist signup" />

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="btn-solid mt-8"
                style={{ background: '#DCC9A0', color: '#2A3329' }}
              >
                <span>{status === 'submitting' ? 'Joining…' : 'Join the Waitlist'}</span>
              </button>

              {status === 'error' && (
                <p className="label-text text-red-300/80 text-xs mt-4">
                  Something went wrong — please try again, or message us on{' '}
                  <a
                    href="https://instagram.com/cheriethailondon"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-underline"
                  >
                    Instagram
                  </a>.
                </p>
              )}
            </motion.form>
          )}

          <motion.div {...inView(0.4)} className="mt-14 pt-10 border-t border-sand/10 flex items-center justify-center gap-3">
            <a
              href="https://instagram.com/cheriethailondon"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sand/50 hover:text-sand/90 transition-colors duration-300"
              aria-label="Instagram CherieThai London"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
              </svg>
            </a>
            <a
              href="https://instagram.com/cheriethailondon"
              target="_blank"
              rel="noopener noreferrer"
              className="label-text text-sand/50 hover:text-sand/90 transition-colors duration-300 link-underline"
            >
              @cheriethailondon
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
