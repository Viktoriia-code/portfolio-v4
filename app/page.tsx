"use client"

import Header from "@/components/main/Header";
import About from "@/components/main/About";
import Experience from "@/components/main/Experience";
import Education from "@/components/main/Education";
import Projects from "@/components/main/Projects";
import Footer from "@/components/main/Footer";
import useSectionObserver from '../hooks/useSectionObserver';
import { useState } from "react";
import { motion } from 'framer-motion'
import { slideInFromRight } from "@/utils/motion";

export default function Home() {
  const [activeSection, setActiveSection] = useState<string>('');

  const {
    aboutRef,
    experienceRef,
    educationRef,
    projectsRef
  } = useSectionObserver(setActiveSection);
  
  return (
    <div className='mx-auto min-h-screen max-w-screen-xl px-5 py-10 md:px-12 md:py-16 lg:px-24 lg:py-0 lg:flex lg:justify-between lg:gap-20'>
      <Header activeSection={activeSection} />
      <motion.main 
        initial='hidden'
        animate='visible'
        variants={slideInFromRight(0.5)}
        id="content" 
        className='pt-14 lg:w-[56%] lg:py-24 flex flex-col gap-12 md:gap-16 lg:gap-22'>
      <About ref={aboutRef} id="about" />
        <Experience ref={experienceRef} id="experience" />
        <Education ref={educationRef} id="education" />
        <Projects ref={projectsRef} id="projects" />
        <Footer />
      </motion.main>
    </div>
  );
}
