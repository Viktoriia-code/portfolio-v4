"use client"

import { slideInFromLeft, slideInFromRight, slideInFromTop, slideInFromBottom } from '@/utils/motion'
import React, { createRef, useEffect, useRef, useState } from 'react'
import { useAnimation, motion } from 'framer-motion'
import { useInView } from "react-intersection-observer"
import Image from 'next/image'
import { Experince_data } from "@/constants"
import { MapPinIcon } from '@heroicons/react/24/outline'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { Place } from '../../types';

const Experience = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const [selectedPlace, setSelectedPlace] = useState<Place>(Experince_data[0]);

  const handlePlaceClick = (place: Place) => {
    setSelectedPlace(place);
  };

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
        className='mt-10 lg:flex lg:gap-2'
      >

        <ul className='flex flex-col' aria-label="Job tabs">
          {Experince_data.map((place) => (
            <li
              key={place.place_name}
              onClick={() => handlePlaceClick(place)}
              className={`flex items-center h-11 w-full whitespace-nowrap border-l-[3px] 
              px-3 pb-1 text-sm transition-all hover:bg-lightBg hover:text-accent
              cursor-pointer
              ${selectedPlace.place_name === place.place_name ? 'bg-lightBg text-accent border-l-accent' : 'bg-transparent text-basicText border-l-basicText'}`}
            >
              {place.date_title}
            </li>
          ))}
        </ul>

        <div className="w-full text-base text-white pt-2 pb-4 px-5 max-w-[550px] flex flex-col gap-2">
          <h3 className='text-heading'>
            {selectedPlace.name} @ {selectedPlace.place_name}
            {selectedPlace.link && (
              <a href={selectedPlace.link} className="ml-2 hover:text-accent transition-all" target="_blank" rel="noopener noreferrer" aria-label={`${selectedPlace.place_name} (opens in a new tab)`} title={selectedPlace.place_name}>
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </a>
            )}
          </h3>
          <span className="text-basicText font-medium mb-2 text-sm">{selectedPlace.date}</span>
          <span className='Welcome-text text-sm whitespace-nowrap inline-flex'><MapPinIcon className='text-[#b49bff] mx-[5px] h-5 w-5'/>{selectedPlace.location}</span>
          {/* <Image
            src={selectedPlace.image_src}
            alt={selectedPlace.place_name}
            width={selectedPlace.width}
            height={selectedPlace.height}
          /> */}
          {selectedPlace.job_tasks && (
            <div className="flex flex-col gap-1 mt-2">
              {selectedPlace.job_tasks.map((task, index) => (
                <div key={index} className='flex gap-4 text-sm'>
                  <span className='text-accent w-2'>▹</span>
                  <p className="text-basicText">{task}</p>
                </div>
              ))}
            </div>
          )}
          {selectedPlace.tech_stack && (
            <div className="flex flex-wrap gap-2 mt-2">
              {selectedPlace.tech_stack.map((skill, index) => (
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
      </motion.div>
    </motion.section>
  )
}

export default Experience