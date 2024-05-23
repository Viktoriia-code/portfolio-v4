"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { slideInFromBottom, slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'

const Footer = () => {
  return (
    <motion.footer
    initial='hidden'
    animate='visible'
    className='text-basicText text-center text-sm'
    >
      <p className="mb-1">
        Built with Next.js, TypeScript and Tailwind CSS, deployed with Vercel.
      </p>
      <span>© 2024 by Viktoriia Beloborodova</span>
    </motion.footer>
  )
}

export default Footer