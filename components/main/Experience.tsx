"use client"

import { slideInFromLeft, slideInFromRight, slideInFromTop, slideInFromBottom } from '@/utils/motion'
import React, { createRef, useEffect, useRef, useState } from 'react'
import { useAnimation, motion } from 'framer-motion'
import { useInView } from "react-intersection-observer"
import Image from 'next/image'
import { Experince_data } from "@/constants"
import { MapPinIcon } from '@heroicons/react/24/outline'
import { ArrowUpRightIcon } from '@heroicons/react/20/solid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { Place } from '../../types';
import Card from '../ui/Card'

const Experience = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  {/* const [selectedPlace, setSelectedPlace] = useState<Place>(Experince_data[0]);

  const handlePlaceClick = (place: Place) => {
    setSelectedPlace(place);
  }; */}

  return (
    <motion.section id='experience' className='z-[50] min-h-[540px] scroll-mt-16 lg:scroll-mt-28'>
      <motion.h3 
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={slideInFromRight(0.5)}
        className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500"
      >
        Experience
      </motion.h3>
      <motion.div
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={slideInFromRight(0.8)}
        className='mt-8 flex flex-col gap-6 lg:gap-12 group/list'
      >
        {Experince_data.map((experience,index) => (
          <Card key={index}>
            <h3 className='nav-text sm:col-span-2 mt-1 mb-2 z-10'>
              {experience.date_title}
            </h3>
            <div className='z-10 sm:col-span-6'>
              <h3 className='text-heading'>
                {experience.name} @{" "}
                {experience.link ? (
                  <a href={experience.link} className="inline-flex items-center font-medium leading-tight text-heading hover:text-accent focus-visible:text-accent group/link text-base" target="_blank" rel="noopener noreferrer" aria-label={`${experience.place_name} (opens in a new tab)`} title={`${experience.place_name} website`}>
                    {experience.place_name}
                    <ArrowUpRightIcon className='ml-1 h-5 w-5'/>
                  </a>
                ): (
                  <span>{experience.place_name}</span>
                )}
              </h3>
              <span className='Welcome-text text-sm whitespace-nowrap inline-flex mt-1'><MapPinIcon className='text-[#b49bff] mr-1 h-5 w-5'/>{experience.location}</span>
              <Image
                src={experience.image_src}
                alt={experience.place_name}
                width={experience.width}
                height={experience.height}
              />
              {experience.job_tasks && (
                <div className="flex flex-col gap-[6px] mt-1">
                  {experience.job_tasks.map((task, index) => (
                    <div key={index} className='flex gap-2 text-sm'>
                      <span className='w-2 text-gray-500'>▸</span>
                      <p className="sub-text">{task}</p>
                    </div>
                  ))}
                </div>
              )}
              {experience.tech_stack && (
                <div className="flex flex-wrap gap-2 mt-2 z-11">
                  {experience.tech_stack.map((skill, index) => (
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
    </motion.section>
  )
}

export default Experience