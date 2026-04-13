'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface FeedbackOverlayProps {
  type: 'correct' | 'incorrect'
  title: string
  message?: string
}

const typeStyles: Record<'correct' | 'incorrect', string> = {
  correct: 'bg-brand-success rounded-t-card px-5 py-4',
  incorrect: 'bg-brand-terracotta rounded-t-card px-5 py-4',
}

export default function FeedbackOverlay({ type, title, message }: FeedbackOverlayProps) {
  return (
    <motion.div
      className={cn(typeStyles[type])}
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 400, damping: 28 }}
    >
      <div className="font-heading font-bold text-white text-base">{title}</div>
      {message && <div className="text-white/80 text-sm mt-1">{message}</div>}
    </motion.div>
  )
}
