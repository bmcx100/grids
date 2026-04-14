'use client'

import { motion } from 'framer-motion'

const steps = [
  {
    number: '1',
    title: 'Set up in 2 minutes',
    description: 'Pick their grade and subjects. Just a few questions.',
    placeholder: '[Screenshot: onboarding wizard]',
  },
  {
    number: '2',
    title: 'They play games, not ads',
    description: 'Fun games with real questions woven in.',
    placeholder: '[Screenshot: game in action]',
  },
  {
    number: '3',
    title: 'See their progress',
    description: "Simple reports on what they're learning.",
    placeholder: '[Screenshot: parent dashboard]',
  },
]

export function ForYouBoth() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.h2
          className="font-heading font-extrabold text-[32px] lg:text-[42px] text-center mb-14 text-brand-ink"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          For you both.
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              className="bg-brand-cream rounded-card p-6 border border-brand-cream-dark"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
            >
              <span className="font-mono font-bold text-[48px] text-brand-terracotta leading-none block mb-3">
                {step.number}
              </span>
              <h3 className="font-heading font-bold text-lg text-brand-ink mb-2">
                {step.title}
              </h3>
              <p className="font-body text-sm text-brand-pencil leading-relaxed mb-5">
                {step.description}
              </p>
              <div className="bg-brand-parchment rounded-chunky border border-brand-cream-dark flex items-center justify-center aspect-[4/3]">
                <span className="font-body text-brand-pencil text-xs text-center px-4">
                  {step.placeholder}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
