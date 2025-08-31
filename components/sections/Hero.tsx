'use client'

import { useRef } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'
import CloudLeft from '@/components/ui/CloudLeft'
import Airplane from '@/components/ui/Airplane'
import SmokeTrail from '@/components/ui/SmokeTrail'

interface HeroProps {
  mode?: 'day' | 'night' | 'dawn'
}

export default function Hero({ mode = 'day' }: HeroProps) {
    const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const controls = useAnimation()

  if (inView) {
    controls.start('visible')
  }

  const bgMap = {
    day: 'bg-[#0571CB] text-[#FFFFFF]',
    night: 'bg-slate-900 text-white',
    dawn: 'bg-pink-100 text-slate-800',
  }

  return (
    <motion.div
            ref={ref}
      className={`relative min-h-screen flex flex-col justify-center items-start px-4 transition-colors duration-700 ease-in-out ${bgMap[mode]}`}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <CloudLeft className="absolute bottom-0 w-full text-cloud z-20" />

        {/* PLANE + SMOKE (beneath cloud) */}
        <motion.div
          className="absolute bottom-24 left-[-200px] z-10"
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { x: 0, y: 0, opacity: 0 },
            visible: {
              x: '40vw',
              y: '-4vh', // subtle arc upward
              opacity: 1,
              transition: { duration: 2, ease: 'easeInOut' },
            },
          }}
        > 
          <div className="relative w-[180px] md:w-[260px]">
            <SmokeTrail className="absolute left-[-140px] top-5 w-[160px] opacity-50" />
            <Airplane className="relative z-10 w-full" />
          </div>
        </motion.div>
      </div>

      {/* Hero Content */}
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 sm:col-span-8 sm:col-start-2">
          <p className="text-sm font-medium mb-2">Your Human-Centered Design Partners</p>
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-4">
            We help teams transform ideas into <span className="gradient-text">winning experiences</span>
          </h1>
          <p className="text-lg text-slate-100/80 mb-6 max-w-xl">
            A collaborative design duo partnering with founders, teams, and orgs to blend research, systems, and taste.
            We bring double the creative power to your biggest challenges.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <button className="rounded-full bg-white/10 backdrop-blur-md px-6 py-3 text-sm font-semibold text-white border border-white/20 shadow-sm transition hover:bg-white/20 hover:shadow-md hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-white/40">
              Check your UX
            </button>
            <button className="rounded-full backdrop-blur-md px-6 py-3 text-sm font-semibold text-white border border-white/20 shadow-sm transition hover:bg-white/20 hover:shadow-md hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-white/40">
              See what we do 
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  )
}