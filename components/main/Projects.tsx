"use client"

import { slideInFromLeft, slideInFromRight, slideInFromTop, slideInFromBottom } from '@/utils/motion'
import React, { createRef, useEffect, useRef, useState } from 'react'
import { useAnimation, motion } from 'framer-motion'
import { useInView } from "react-intersection-observer"
import Image from 'next/image'
import { Projects_data } from "@/constants"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare, faCode } from '@fortawesome/free-solid-svg-icons'
import Card from '../ui/Card'

const Projects = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <section id='projects' className='z-[50] scroll-mt-16 lg:scroll-mt-28'>
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
        className='mt-8 flex flex-col gap-6 lg:gap-12 group/list'
      >


          {Projects_data.map((project) => (
            <Card
              key={project.name}
            >
              <Image
                src={project.image_src}
                alt={project.place_name}
                width="200"
                height="48"
                className='rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1 z-10'
              />
              <div className='z-10 sm:order-2 sm:col-span-6'>
                <div className='flex gap-1'>
                  <h3 className='text-heading'>
                    {project.name}
                  {project.link && (<a href={project.link} className="ml-2 hover:text-accent transition-all" target="_blank" rel="noopener noreferrer" aria-label={`${project.name} (opens in a new tab)`} title={`${project.name} deploy`}>
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                  </a>)}
                  <a href={project.code_link} className="ml-2 hover:text-accent transition-all" target="_blank" rel="noopener noreferrer" aria-label={`${project.name} (opens in a new tab)`} title={`${project.name} code`}>
                    <FontAwesomeIcon icon={faCode} />
                  </a>
                  </h3>
                </div>
                <p className='sub-text'>{project.desc}</p>


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
            </Card>
          ))}

      </motion.div>
    </section>
  )
}

export default Projects