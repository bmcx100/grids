'use client'

import { motion } from 'framer-motion'

export function SwapSection() {
  return (
    <section className="py-20 lg:py-28">
      <motion.h2
        className="font-heading font-extrabold text-[32px] lg:text-[42px] text-center mb-12 text-brand-ink"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
      >
        Swap ads for answers.
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[900px] mx-auto">
        {/* Left: Garish ad mockup */}
        <div className="flex flex-col">
        <motion.div
          className="rounded-card overflow-hidden border border-brand-cream-dark shadow-card flex flex-col flex-1"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="bg-brand-cream p-6 flex flex-col gap-4 flex-1">

            {/* Fake flashy banner */}
            <div className="rounded-chunky p-3 text-center border border-brand-cream-dark bg-white">
              <p className="font-bold text-sm text-brand-pencil tracking-wide">
                YOU WON A FREE iPHONE!!!
              </p>
            </div>

            {/* Fake download button */}
            <div className="rounded-chunky p-4 text-center bg-white border border-brand-cream-dark">
              <p className="font-extrabold text-lg text-brand-ink">
                DOWNLOAD NOW!!!
              </p>
              <p className="text-[10px] mt-1 text-brand-pencil">
                *Totally not a virus
              </p>
            </div>

            {/* Fake "close" button that's hard to find */}
            <div className="rounded-chunky p-2 flex items-center justify-between bg-white border border-brand-cream-dark">
              <p className="text-[11px] text-brand-pencil">
                Ad &middot; Closes in 29s
              </p>
              <span className="text-[8px] text-brand-pencil/30">
                x
              </span>
            </div>

            {/* Fake pop-up overlay */}
            <div className="rounded-chunky p-3 text-center bg-white border border-brand-cream-dark">
              <p className="text-brand-ink text-xs font-bold">
                Watch a 30-second ad to continue playing?
              </p>
              <div className="flex gap-2 justify-center mt-2">
                <span className="px-4 py-1 rounded-chunky text-xs font-bold text-brand-ink bg-brand-cream border border-brand-cream-dark">
                  Watch Ad
                </span>
                <span className="px-4 py-1 rounded-chunky text-xs text-brand-pencil bg-brand-cream border border-brand-cream-dark">
                  Pay $4.99
                </span>
              </div>
            </div>
          </div>
        </motion.div>
        <p className="text-center text-brand-pencil text-xs pt-3 font-body">
          Their &ldquo;free&rdquo; game, today
        </p>
        </div>

        {/* Right: Clean Joviko question */}
        <div className="flex flex-col">
        <motion.div
          className="rounded-card overflow-hidden border border-brand-cream-dark shadow-card flex flex-col flex-1"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="bg-brand-cream p-6 flex flex-col gap-4">
            {/* Header bar */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-8 h-8 rounded-badge bg-brand-indigo flex items-center justify-center text-white text-sm">
                  J
                </span>
                <span className="font-heading font-bold text-sm text-brand-ink">
                  Joviko
                </span>
              </div>
              <span className="font-mono text-xs text-brand-pencil">
                Addition &middot; Grade 1
              </span>
            </div>

            {/* Instruction */}
            <p className="font-body text-xs text-brand-pencil">
              Answer these 3 questions to retry level 4!!!
            </p>

            {/* Question */}
            <div className="bg-brand-indigo rounded-chunky p-5">
              <p className="font-heading font-bold text-lg text-white">
                What is 7 + 5?
              </p>
            </div>

            {/* Multiple-choice options */}
            <div className="space-y-2">
              {[
                { label: 'A', value: '10' },
                { label: 'B', value: '12', correct: true },
                { label: 'C', value: '11' },
              ].map((opt) => (
                <div
                  key={opt.label}
                  className={`flex items-center gap-3 rounded-chunky p-3 border transition-colors ${
                    opt.correct
                      ? 'bg-brand-indigo/10 border-brand-indigo'
                      : 'bg-white border-brand-cream-dark'
                  }`}
                >
                  <span
                    className={`w-7 h-7 rounded-full flex items-center justify-center font-mono text-xs font-bold ${
                      opt.correct
                        ? 'bg-brand-indigo text-white'
                        : 'bg-brand-cream text-brand-ink'
                    }`}
                  >
                    {opt.label}
                  </span>
                  <span className="font-heading font-semibold text-sm text-brand-ink">
                    {opt.value}
                  </span>
                  {opt.correct && (
                    <span className="ml-auto text-brand-success text-sm font-bold">
                      &#10003;
                    </span>
                  )}
                </div>
              ))}
            </div>

            {/* Progress */}
            <div className="flex items-center gap-2 mt-1">
              <div className="flex-1 h-2 rounded-full bg-brand-cream-dark overflow-hidden">
                <div
                  className="h-full rounded-full bg-brand-indigo"
                  style={{ width: '33%' }}
                />
              </div>
              <span className="font-mono text-xs text-brand-pencil">
                1/3
              </span>
            </div>
          </div>
        </motion.div>
        <p className="text-center text-brand-pencil text-xs pt-3 font-body">
          Their game on Joviko
        </p>
        </div>
      </div>
    </section>
  )
}
