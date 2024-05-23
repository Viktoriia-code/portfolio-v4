"use client"

import { slideInFromLeft, slideInFromRight, slideInFromTop, slideInFromBottom } from '@/utils/motion'
import React, { createRef, useEffect, useRef, useState } from 'react'
import { useAnimation, motion } from 'framer-motion'
import { useInView } from "react-intersection-observer"
import Image from 'next/image'
import { Projects_data } from "@/constants"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare, faCode } from '@fortawesome/free-solid-svg-icons'

const Projects = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.section id='projects' className='z-[50] min-h-[380px] scroll-mt-16 lg:scroll-mt-28'>
      <motion.h3 
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={slideInFromRight(0.5)}
        className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500"
      >
        Projects
      </motion.h3>
      <motion.div
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={slideInFromRight(0.8)}
        className='mt-10 lg:flex lg:gap-2'
      >

        <ul aria-label="Project tabs">
          {Projects_data.map((project) => (
            <li
              key={project.name}
              className={`flex items-center mb-12 w-full whitespace-nowrap
              px-3 pb-1 text-sm transition-all text-basicText
              `}
            >
              <div className='group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50'>
                <div className='absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg'></div>
                <Image
                  src={project.image_src}
                  alt={project.place_name}
                  width="200"
                  height="48"
                  className='rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1'
                />
                <div className='z-10 sm:order-2 sm:col-span-6'>
                  <div className='flex gap-1'>
                    <h3 className='text-heading'>
                      {project.name}
                    </h3>
                    {project.link && (<a href={project.link} className="ml-2 hover:text-accent transition-all" target="_blank" rel="noopener noreferrer" aria-label={`${project.name} (opens in a new tab)`} title={`${project.name} deploy`}>
                      <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    </a>)}
                    <a href={project.code_link} className="ml-2 hover:text-accent transition-all" target="_blank" rel="noopener noreferrer" aria-label={`${project.name} (opens in a new tab)`} title={`${project.name} code`}>
                      <FontAwesomeIcon icon={faCode} />
                    </a>
                  </div>
                  <p className='text-wrap'>{project.desc}</p>


                  {project.tech_stack && (
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.tech_stack.map((skill, index) => (
                        <div
                        key={index}
                        className='Welcome-box py-[3px] px-[13px] border border-[#7042f88b] opacity-[0.9]'
                        >
                          <span className='Welcome-text text-[12px]'>{skill}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
            </div>
          </li>
          ))}
        </ul>
      </motion.div>
    </motion.section>
  )
}

export default Projects