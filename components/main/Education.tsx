"use client"

import { slideInFromLeft, slideInFromRight, slideInFromTop, slideInFromBottom } from '@/utils/motion'
import React, { createRef, useEffect, useRef, useState } from 'react'
import { useAnimation, motion } from 'framer-motion'
import { useInView } from "react-intersection-observer"
import Image from 'next/image'
import { Education_data } from "@/constants"
import { MapPinIcon } from '@heroicons/react/24/outline'
import Card from '../ui/Card'
import { ArrowUpRightIcon } from '@heroicons/react/20/solid'

const Education = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <section id='education' className='z-[50] scroll-mt-16 lg:scroll-mt-28'>
      <motion.h3 
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={slideInFromRight(0.5)}
        className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500"
      >
        Education
      </motion.h3>
      <motion.div
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={slideInFromRight(0.8)}
        className='mt-8 flex flex-col gap-6 lg:gap-12 group/list'
        aria-label="Job tabs"
      >

      {Education_data.map((studies, index) => (
        
        <Card key={index}>
          <h3 className='nav-text sm:col-span-2 mt-1 mb-2 z-10'>
            {studies.date_title}
          </h3>
          <div className='z-10 sm:col-span-6'>
            <h3 className='text-heading'>
              {studies.name} @{" "}
              {studies.link ? (
                <a href={studies.link} className="inline-flex items-center font-medium hover:text-accent focus-visible:text-accent group/link text-base" target="_blank" rel="noopener noreferrer" aria-label={`${studies.place_name} (opens in a new tab)`} title={`${studies.place_name} website`}>
                  {studies.place_name}
                  <ArrowUpRightIcon className='ml-1 h-5 w-5'/>
                </a>
              ): (
                <span>{studies.place_name}</span>
              )}
            </h3>
            <span className='Welcome-text text-sm whitespace-nowrap inline-flex mt-1'><MapPinIcon className='text-[#b49bff] mx-[5px] h-5 w-5'/>{studies.location}</span>
            <Image
              src={studies.image_src}
              alt={studies.place_name}
              width={studies.width}
              height={studies.height}
            />
            {studies.job_tasks && (
              <div className="flex flex-col gap-[6px] mt-1">
                {studies.job_tasks.map((task, index) => (
                  <div key={index} className='flex gap-2 text-sm'>
                    <span className='w-2 text-gray-500'>▸</span>
                    <p className="text-basicText">{task}</p>
                  </div>
                ))}
              </div>
            )}
            {studies.tech_stack && (
              <div className="flex flex-wrap gap-2 mt-2">
                {studies.tech_stack.map((skill, index) => (
                  <div
                  key={index}
                  className='Welcome-box py-1 px-[13px] border border-[#7042f88b] opacity-[0.9]'
                  >
                    <span className='Welcome-text text-[13px]'>{skill}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </Card>
      ))}
      </motion.div>
    </section>
  )
}

export default Education