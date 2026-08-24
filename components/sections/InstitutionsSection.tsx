'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
import { institutions } from '@/data/institutions'

const revealInView = (delay = 0) => ({
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-50px' },
  transition: { duration: 0.85, delay, ease: [0.25, 0.1, 0.25, 1.0] },
})

export default function InstitutionsSection() {
  const { lang } = useLanguage()

  return (
    <div className="mt-20 md:mt-28">

      {/* ── Section header ── */}
      <div className="flex items-center gap-4 mb-14">
        <p
          className="label-text text-sage/30 shrink-0"
          style={{ fontSize: '0.5rem', letterSpacing: '0.28em' }}
        >
          {lang === 'PT' ? 'FORMAÇÕES INSTITUCIONAIS' : 'INSTITUTIONAL TRAINING'}
        </p>
        <div className="flex-1 h-px" style={{ background: 'rgba(220,201,160,0.06)' }} />
      </div>

      {/* ── Institution cards ── */}
      <div className="flex flex-col gap-24 md:gap-32">
        {institutions.map((inst, instIdx) => {
          const description = lang === 'PT' ? inst.descriptionPT : inst.descriptionEN
          const impact = lang === 'PT' ? inst.impactPT : inst.impactEN

          return (
            <div key={inst.id}>

              {/* Institution header */}
              <motion.div {...revealInView(0)} className="mb-10 md:mb-14">
                <p
                  className="label-text text-sage/25 mb-4"
                  style={{ fontSize: '0.48rem', letterSpacing: '0.24em' }}
                >
                  {inst.location.toUpperCase()}&nbsp;&nbsp;·&nbsp;&nbsp;
                  {lang === 'PT' ? inst.datePT : inst.dateEN}
                </p>

                <h2
                  className="font-cormorant font-light text-ivory/80 mb-2"
                  style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: 1 }}
                >
                  {inst.name}
                </h2>

                <p
                  className="label-text text-sage/30"
                  style={{ fontSize: '0.46rem', letterSpacing: '0.22em' }}
                >
                  {lang === 'PT' ? inst.trainingTypePT : inst.trainingTypeEN}
                </p>
              </motion.div>

              {/* Two-column: description + students */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 lg:gap-28 mb-14 md:mb-16">

                {/* Description */}
                <motion.div
                  {...revealInView(0.06)}
                  className="body-text text-sand/50 space-y-4 leading-loose"
                  style={{ fontSize: 'clamp(0.875rem, 1.4vw, 0.95rem)' }}
                >
                  {description.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </motion.div>

                {/* Students list */}
                <motion.div {...revealInView(0.1)}>
                  <p
                    className="label-text text-sage/25 mb-6"
                    style={{ fontSize: '0.46rem', letterSpacing: '0.24em' }}
                  >
                    {lang === 'PT'
                      ? `EQUIPE FORMADA · ${inst.students.length} TERAPEUTAS`
                      : `PRACTITIONERS TRAINED · ${inst.students.length}`}
                  </p>

                  <div className="flex flex-col">
                    {inst.students.map((name, i) => (
                      <motion.div
                        key={name}
                        {...revealInView(0.1 + i * 0.03)}
                        className="py-3 border-b flex items-center"
                        style={{ borderColor: 'rgba(220,201,160,0.05)' }}
                      >
                        <span
                          className="label-text text-sage/18 mr-4 shrink-0"
                          style={{ fontSize: '0.42rem', letterSpacing: '0.15em' }}
                        >
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <p
                          className="font-cormorant font-light text-ivory/55"
                          style={{ fontSize: 'clamp(1rem, 1.8vw, 1.15rem)', lineHeight: 1.15 }}
                        >
                          {name}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Impact */}
              <motion.div
                {...revealInView(0.08)}
                className="border-t pt-10 md:pt-12"
                style={{ borderColor: 'rgba(220,201,160,0.06)' }}
              >
                <p
                  className="label-text text-sage/25 mb-6"
                  style={{ fontSize: '0.46rem', letterSpacing: '0.24em' }}
                >
                  {lang === 'PT' ? 'O IMPACTO APÓS A FORMAÇÃO' : 'IMPACT AFTER TRAINING'}
                </p>

                <div
                  className="body-text text-sand/45 space-y-4 leading-loose max-w-2xl"
                  style={{ fontSize: 'clamp(0.875rem, 1.4vw, 0.95rem)' }}
                >
                  {impact.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              </motion.div>

            </div>
          )
        })}
      </div>
    </div>
  )
}
