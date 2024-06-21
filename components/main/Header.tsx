"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { slideInFromBottom, slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'
import { MapPinIcon } from '@heroicons/react/24/outline'
import Socials from './Socials';
import Navbar from './Navbar'

const Header = () => {
  return (
    <motion.header
    initial='hidden'
    animate='visible'
    className='lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[35%] lg:flex-col lg:justify-between lg:py-24 z-[50]'
    >
      <div>
        <motion.div
        variants={slideInFromTop(0.5)}
        className='Welcome-box py-[6px] px-[13px] border border-[#7042f88b] opacity-[0.9]'
        >
          <MapPinIcon className='text-[#b49bff] mr-[10px] h-5 w-5'/>
          <h1 className='Welcome-text text-[13px]'>Helsinki, Finland</h1>
        </motion.div>
        <motion.div
        variants={slideInFromLeft(0.5)}
        className='flex flex-col gap-1 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto'
        >
          <a href="/" className='z-[100]'>
            <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 text-5xl font-bold sm:text-5xl">Viktoriia<br />Beloborodova</h1>
            <h2 className='mt-3 text-2xl font-medium tracking-tight text-heading sm:text-3xl'>Software Developer</h2>
          </a>
        </motion.div>
        <motion.p
          variants={slideInFromLeft(0.8)}
          className="basic-text mt-5 mb-8 max-w-[600px]"
        >
          I&apos;m a software development student at Metropolia AMK. I have a
          vocational degree in software development, a bachelor degree in management and 4 years of
          experience in the IT field.
        </motion.p>
        <motion.div
          variants={slideInFromLeft(1)}
        >
          <Navbar />
        </motion.div>
        {/* <motion.a
          variants={slideInFromLeft(1)}
          className="py-4 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
        >
          See my projects
        </motion.a> */}
      </div>
      {/* <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <Image
          src="/mainIconsdark.svg"
          alt="work icons"
          height={650}
          width={650}
        />
      </motion.div> */}
      <motion.div
        variants={slideInFromBottom(1)}
      >
        <Socials />
      </motion.div>
    </motion.header>
  )
}

export default Header