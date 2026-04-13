'use client'

import { motion } from 'framer-motion'

const steps = [
  {
    number: '1',
    title: 'Set up a family profile',
    description: "Pick your kids' ages and subjects. Takes 2 minutes.",
  },
  {
    number: '2',
    title: 'Kids play daily quests',
    description:
      '15 minutes a day. Owlbert guides them through stories, puzzles, and challenges.',
  },
  {
    number: '3',
    title: 'You see the results',
    description:
      "Real progress data on your dashboard. What they learned, where they're growing.",
  },
]

export function HowItWorks() {
  return (
    <section className="py-20 lg:py-28">
      <h2 className="font-heading font-extrabold text-[32px] text-center mb-12 text-brand-ink">
        How It Works
      </h2>
      <div className="max-w-[720px] mx-auto space-y-10">
        {steps.map((step, index) => (
          <motion.div
            key={step.number}
            className="flex flex-col md:flex-row gap-4 md:gap-6 items-start"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.12 }}
          >
            <span className="font-mono font-bold text-[48px] text-brand-terracotta leading-none shrink-0">
              {step.number}
            </span>
            <div>
              <h3 className="font-heading font-bold text-xl text-brand-ink">
                {step.title}
              </h3>
              <p className="font-body text-[15px] text-brand-pencil leading-relaxed">
                {step.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
