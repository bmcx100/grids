'use client'

import { motion } from 'framer-motion'

export function PhilosophyBand() {
  return (
    <section className="bg-brand-ink py-20 lg:py-28 px-6">
      <div className="max-w-[720px] mx-auto text-center">
        <motion.p
          className="font-heading text-brand-parchment/50 text-base"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Most ed-tech games focus on: drill, repetition, and screen addiction.
        </motion.p>
        <motion.p
          className="font-heading font-extrabold text-brand-parchment text-[36px] lg:text-[42px] leading-tight mt-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          We built for{' '}
          <span className="text-brand-terracotta">imagination.</span>
        </motion.p>
      </div>
    </section>
  )
}
