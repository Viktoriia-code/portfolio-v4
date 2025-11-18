"use client"

import React, { forwardRef } from 'react';

const About = forwardRef<HTMLDivElement, { id: string }>((props, ref) => {
  /*const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const width = useDeviceSize();
  
  {/*if (width !== 0) {
    if (width <= 768) {
      return (
        <section id='about' className='scroll-mt-16 lg:scroll-mt-24'>
          <div className="bottom-[10px] px-[5px]">
            <p className="mb-5 max-w-[800px] basic-text">
              Before diving into software development, in 2015 I completed a bachelor degree in management and after that I worked for three years as an Electronic Data Interchange (EDI) specialist in a major IT company that provides a vast variety of EDI and SaaS solutions for business. I got a deep understanding of B2B EDI and business processes, learned to efficiently organize work processes in IT, and learned to communicate with clients and partners.
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
    } else if (width > 768) { */
      return (
        <section
          ref={ref} 
          id={props.id} 
          className='scroll-mt-16 lg:scroll-mt-24' 
        >
          <div className="bottom-[10px] px-[5px]">
            <p className="mb-5 max-w-[800px] basic-text">
              Back in 2015, I earned <strong className="highlight-text">a bachelor&apos;s degree in Management</strong> and after that I entered the world of IT, working for three years as <strong className="highlight-text">an Electronic Data Interchange (

                  <span
                    className="cursor-help"
                    title="Electronic Data Interchange, or EDI for short, is a standard way for firms to exchange documents electronically."
                  >
                    EDI
                  </span>
                ) specialist</strong> in a major IT company that provides a vast variety of EDI and SaaS solutions for businesses. I gained a deep understanding of B2B EDI and supply chain, developed skills in efficiently organizing IT workflows in teams, and improved my ability to communicate with clients and partners.
            </p>
            <p className="mb-5 max-w-[800px] basic-text">
              During this time, I realized I wanted to learn more about technology and pursue software development, which became my true passion.
            </p>
            <p className="my-5 max-w-[800px] basic-text">
              I moved to Finland, learned Finnish, and in 2022, I completed <strong className="highlight-text">a vocational degree in ICT</strong> at Keuda Vocational School in Kerava, studying entirely in Finnish. I worked as a frontend developer for 1 year and got solid skills on web development using HTML, CSS, JavaScript, React and TypeScript. In my work, I aim for high-quality, reliable, and scalable solutions, and I deeply believe in the power of teamwork.
            </p>
            <p className="my-5 max-w-[800px] basic-text">
              I continued my education with <strong className="highlight-text">a bachelor&apos;s degree in Software Engineering</strong> at Metropolia AMK in Helsinki. I have learned Java, JavaScript, Kotlin and Python, databases, React, Node.js, Spring Boot and other essential software development subjects. I am currently in the final year of my studies and am looking for a job opportunity where I can apply my skills and knowledge.
            </p>
          </div>
        </section>
      )
    /*}
  }*/
})

About.displayName = 'About';

export default About;