"use client"

import React, { useEffect } from 'react'
import { useAnimation, motion } from 'framer-motion'
import { useInView } from "react-intersection-observer"
import { slideInFromBottom, slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'

const Footer = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.footer
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={slideInFromRight(0.3)}
      className='basic-text text-center text-sm'
    >
      <p className="mb-1">
        Built with Next.js, TypeScript and Tailwind CSS, deployed with Vercel.
      </p>
      <span>© 2024 by Viktoriia Beloborodova</span>
    </motion.footer>
  )
}

export default Footer