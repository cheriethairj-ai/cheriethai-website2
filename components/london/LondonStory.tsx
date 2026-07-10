'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'

const inView = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.9, delay, ease: [0.25, 0.1, 0.25, 1.0] as [number, number, number, number] },
})

export default function LondonStory() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const imageY = useTransform(scrollYProgress, [0, 1], ['-7%', '7%'])

  return (
    <section ref={ref} className="overflow-hidden bg-ivory">
      <div className="flex flex-col lg:flex-row">

        {/* ── Content column ── */}
        <div className="lg:w-[54%] flex items-center px-6 md:px-12 lg:px-16 xl:px-24 py-20 md:py-28 lg:py-36 order-2 lg:order-1">
          <div className="w-full max-w-xl">
            <motion.p {...inView()} className="label-text text-moss mb-8">
              A New Chapter
            </motion.p>

            <motion.h2
              className="display-section text-deep-moss mb-8"
              style={{ fontSize: 'clamp(2.25rem, 4.5vw, 3.5rem)' }}
              {...inView(0.1)}
            >
              New chapter.
            </motion.h2>

            <motion.div {...inView(0.2)} className="space-y-5 body-text text-earth/80 text-base md:text-lg mb-10">
              <p>
                Rooted in Thai heritage and shaped through years of clinical
                practice, CherieThai has developed into an internationally
                taught approach to bodywork defined by structural precision,
                movement and attention to detail.
              </p>
              <p>
                Influenced by the relationship between movement, structure
                and form, the work combines technical precision with a
                refined understanding of how the body organises itself
                through space.
              </p>
              <p>
                Established across two clinics and shaped through
                international education, the next chapter now looks
                towards London.
              </p>
              <p>
                For now, our focus is on building awareness ahead of
                opening, introducing the philosophy, technique and approach
                behind the work while developing relationships within the
                city we hope to serve in the years ahead.
              </p>
              <p>
                Joining the waitlist offers an opportunity to follow the
                journey from the beginning and receive early access to
                appointments, events and future developments as they
                unfold.
              </p>
            </motion.div>

            <motion.div {...inView(0.3)} className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a href="#waitlist" className="btn-ghost text-deep-moss border-deep-moss/30 justify-between sm:justify-start">
                <span>Join the Waitlist</span>
                <span aria-hidden>→</span>
              </a>
              <a
                href="https://instagram.com/cheriethailondon"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost text-moss border-moss/25 justify-between sm:justify-start"
              >
                <span>@cheriethailondon</span>
                <span aria-hidden>→</span>
              </a>
            </motion.div>
          </div>
        </div>

        {/* ── Image column ── */}
        <motion.div
          className="lg:w-[46%] relative h-[50vh] md:h-[55vh] lg:h-auto overflow-hidden order-1 lg:order-2"
          initial={{ opacity: 0, x: 32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 1.1, ease: [0.25, 0.1, 0.25, 1.0] }}
        >
          <motion.div className="absolute inset-0" style={{ y: imageY }}>
            <Image
              src="/clinic-bodywork.jpg"
              alt="CherieThai — clinical Thai bodywork in session"
              fill
              sizes="(max-width: 1024px) 100vw, 46vw"
              className="object-cover object-center"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  'linear-gradient(to left, rgba(26,31,27,0.15) 0%, rgba(26,31,27,0.35) 100%)',
              }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
