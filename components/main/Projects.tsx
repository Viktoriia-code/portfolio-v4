"use client"

import React, { forwardRef } from 'react'
import Image from 'next/image'
import { Projects_data } from "@/constants"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare, faCode } from '@fortawesome/free-solid-svg-icons'
import Card from '../ui/Card'

const Projects = forwardRef<HTMLDivElement, { id: string }>((props, ref) => {
  return (
    <section 
      ref={ref} 
      id={props.id} 
      className='z-[50] scroll-mt-16 lg:scroll-mt-24'
    >
      <h3 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
        Projects
      </h3>
      <div className='mt-8 flex flex-col gap-6 lg:gap-12 group/list'>
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
      </div>
    </section>
  )
})

Projects.displayName = 'Projects';

export default Projects