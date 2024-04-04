"use client"

import React, { createRef, useEffect, useRef } from 'react'
import { useAnimation, motion } from 'framer-motion'
import { useInView } from "react-intersection-observer"
import { slideInFromLeft, slideInFromRight, slideInFromTop, slideInFromBottom } from '@/utils/motion'
import Image from 'next/image'
import { Timeline } from "@/constants"
import { MapPinIcon } from '@heroicons/react/24/outline'


const About = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <section id='about' className='flex flex-row justify-between px-20 w-full z-[20] gap-16'>
      <div className="bottom-[10px] px-[5px] w-[35%]">
        <motion.div 
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={slideInFromTop(0)}
          className="cursive text-[20px] font-medium text-gray-300"
        >
          Let me introduce myself
        </motion.div>

        <motion.div 
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={slideInFromLeft(0.5)}
          className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500"
        >
          <span>
          {" "}About me{" "}
          </span>
        </motion.div>
        <motion.p
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[800px]"
        >
          Enthusiastic sertified customer-oriented specialist with 3+ years of hands-on experience on multitasking position at a big IT company that provides a vast variety of EDI solutions geared on B2B sector. 
          I complited a vocational degree in software development. Currently a Software Development student at KEUDA (Finland), looking for an internship.
        </motion.p>
      </div>
      <motion.div
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={slideInFromRight(0.8)}
        className='timeline-items mt-10 w-full'
      >
        {Timeline.map((milestone) => (
          <div className="timeline-item" key={milestone.name}>
          <div className="timeline-dot"></div>
          <div className="timeline-date text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 font-bold text-2xl mb-2">{milestone.date}</div>
          <div className="timeline-content text-base text-white pt-3 pb-4 px-5 w-full max-w-[550px] rounded-lg flex flex-col gap-2">
            <h3 className='leading-snug font-normal'>{milestone.name}</h3>
            <span className='Welcome-text text-sm whitespace-nowrap inline-flex'>{milestone.place_name} <MapPinIcon className='text-[#b49bff] mx-[5px] h-5 w-5'/>{milestone.location}</span>
            <Image
              src={milestone.image_src}
              alt={milestone.place_name}
              width={milestone.width}
              height={milestone.height}
            />
          </div>
        </div>
        ))}
      </motion.div>
    </section>
    
  )
}

export default About