'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Logo from '@/components/Logo'

interface Props {
  isLoaded: boolean
}

export default function LoadingScreen({ isLoaded }: Props) {
  return (
    <AnimatePresence>
      {!isLoaded && (
        <motion.div
          className="loading-screen"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1.0] }}
        >
          <div className="flex flex-col items-center gap-10">

            {/* Logo mark — centered, generous size */}
            <motion.div
              initial={{ opacity: 0, y: 16, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1.0, delay: 0.15, ease: [0.25, 0.1, 0.25, 1.0] }}
            >
              <Logo height={120} />
            </motion.div>

            {/* Progress line */}
            <motion.div
              className="relative h-px w-20 overflow-hidden"
              style={{ backgroundColor: 'rgba(255,255,255,0.08)' }}
            >
              <motion.div
                className="absolute inset-y-0 left-0"
                style={{ backgroundColor: '#DCC9A0' }}
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 1.6, delay: 0.5, ease: [0.25, 0.1, 0.25, 1.0] }}
              />
            </motion.div>

            {/* Wordmark */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.35 }}
              transition={{ duration: 0.7, delay: 0.9 }}
              className="label-text text-sage"
              style={{ letterSpacing: '0.3em' }}
            >
              CherieThai
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
