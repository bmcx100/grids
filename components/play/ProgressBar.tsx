'use client'

import { motion } from 'framer-motion'

interface ProgressBarProps {
  current: number
  total: number
}

export default function ProgressBar({ current, total }: ProgressBarProps) {
  return (
    <div className="mx-5 mt-2">
      <div className="h-2 rounded-full bg-brand-parchment-dark">
        <motion.div
          className="h-2 rounded-full bg-gradient-to-r from-brand-indigo to-brand-indigo-light"
          animate={{ width: `${(current / total) * 100}%` }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        />
      </div>
    </div>
  )
}
