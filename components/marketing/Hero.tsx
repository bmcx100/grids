'use client'

import { motion } from 'framer-motion'

const stagger = (index: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: {
    duration: 0.5,
    delay: index * 0.08,
    ease: [0.25, 0.46, 0.45, 0.94] as const,
  },
})

export function Hero() {
  return (
    <section className="py-20 lg:py-28">
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-12">
        {/* Left column */}
        <div className="lg:w-[50%]">
          <motion.h1 {...stagger(0)}>
            <span className="font-heading font-extrabold text-[32px] lg:text-[42px] leading-[1.08] tracking-[-0.02em] text-brand-ink block">
              Screen time a parent
            </span>
            <span className="font-heading font-extrabold text-[32px] lg:text-[42px] leading-[1.08] tracking-[-0.02em] text-brand-ink block">
              can be proud of.
            </span>
          </motion.h1>

          <motion.div
            {...stagger(1)}
            className="font-body text-brand-pencil text-base leading-relaxed max-w-[420px] mt-4"
          >
            <p>Fun games for your kids.</p>
            <p>Transparent, guided learning for you&nbsp;both.</p>
          </motion.div>

          <motion.div {...stagger(2)}>
            <a
              href="/play/session/memory-grid"
              className="bg-brand-terracotta text-white font-heading font-bold text-[15px] px-7 py-4 rounded-button mt-6 hover:bg-brand-terracotta-light transition-colors inline-block lg:inline-block w-full lg:w-auto text-center"
            >
              Try a game
            </a>
          </motion.div>
        </div>

        {/* Right column */}
        <div className="lg:w-[50%]">
          <motion.div {...stagger(3)}>
            <img
              src="/images/homepage-design/hero-mother-son.png"
              alt="Mother and son on couch, both engaged and happy with their devices"
              className="rounded-2xl w-full border border-brand-cream-dark"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
