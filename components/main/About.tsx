"use client"

import React from 'react';
import { motion} from 'framer-motion';
import { slideInFromLeft, slideInFromRight, slideInFromTop, slideInFromBottom } from '@/utils/motion';
import useDeviceSize from '@/hooks/useDeviceSize';

const About = () => {
  const width = useDeviceSize();
  
  if (width !== 0) {
    if (width <= 768) {
      return (
        <section id='about' className='scroll-mt-16 lg:scroll-mt-24'>
          <div className="bottom-[10px] px-[5px]">
            <p className="mb-5 max-w-[800px] basic-text">
              Before diving into software development, in 2015 I completed my bachelor degree in management and after that I worked for three years as an Electronic Data Interchange (EDI) specialist in a major IT company that provides a vast variety of EDI and SaaS solutions for business. I got a deep understanding of B2B EDI and business processes, learned to efficiently organize work processes in IT, and learned to communicate with clients and partners.
            </p>
            <p className=" my-5 max-w-[800px] basic-text">
              Last autumn I completed a vocational degree in Information Technology at Keuda vocational school in Kerava and I got 6 months of experience working as a frontend developer. In terms of my tech skills, I have solid skills on web development using HTML, CSS, JavaScript, React and TypeScript, as well as desktop application development using C# and Python. When I worked as a frontend developer, I focused on creating and testing frontend side of web interfaces, project documentation writing and collaboration with different teams remotely.
            </p>
            <p className="my-5 max-w-[800px] basic-text">
              I&apos;m continuing the profession I began in vocational school, and now I&apos;m studying for my bachelor&apos;s degree in Information Technology at Metropolia AMK in Espoo. We&apos;re learning Python programming, databases, and React for frontend development.
            </p>
          </div>
        </section>
      )
    } else if (width > 768) { 
      return (
        <motion.section 
          id='about' 
          className='scroll-mt-16 lg:scroll-mt-24' 
          initial='hidden'
          animate='visible'
        >
          <div className="bottom-[10px] px-[5px]">
            <motion.p
              variants={slideInFromRight(0.3)}
              className="mb-5 max-w-[800px] basic-text"
            >
              Before diving into software development, in 2015 I completed my bachelor degree in management and after that I worked for three years as an Electronic Data Interchange (EDI) specialist in a major IT company that provides a vast variety of EDI and SaaS solutions for business. I got a deep understanding of B2B EDI and business processes, learned to efficiently organize work processes in IT, and learned to communicate with clients and partners.
            </motion.p>
            <motion.p
              variants={slideInFromRight(0.5)}
              className=" my-5 max-w-[800px] basic-text"
            >
              Last autumn I completed a vocational degree in Information Technology at Keuda vocational school in Kerava and I got 6 months of experience working as a frontend developer. In terms of my tech skills, I have solid skills on web development using HTML, CSS, JavaScript, React and TypeScript, as well as desktop application development using C# and Python. When I worked as a frontend developer, I focused on creating and testing frontend side of web interfaces, project documentation writing and collaboration with different teams remotely.
            </motion.p>
            <motion.p
              variants={slideInFromRight(0.8)}
              className="my-5 max-w-[800px] basic-text"
            >
              I&apos;m continuing the profession I began in vocational school, and now I&apos;m studying for my bachelor&apos;s degree in Information Technology at Metropolia AMK in Espoo. We&apos;re learning Python programming, databases, and React for frontend development.
            </motion.p>
          </div>
        </motion.section>
      )
    }
  }
}

export default About