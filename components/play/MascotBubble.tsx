'use client'

import { motion } from 'framer-motion'

interface MascotBubbleProps {
  message: string
}

export default function MascotBubble({ message }: MascotBubbleProps) {
  return (
    <motion.div
      className="flex gap-3 items-start px-5 mb-4"
      initial={{ opacity: 0, x: -12 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 24 }}
    >
      <div className="w-11 h-11 rounded-full bg-brand-indigo flex items-center justify-center text-white text-xl shrink-0">
        🦉
      </div>
      <div className="bg-brand-parchment-dark rounded-2xl rounded-tl-sm px-4 py-3 text-sm font-semibold text-brand-ink leading-snug">
        {message}
      </div>
    </motion.div>
  )
}
