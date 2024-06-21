import Header from "@/components/main/Header";
import About from "@/components/main/About";
import Experience from "@/components/main/Experience";
import Skills from "@/components/main/Skills";
import Education from "@/components/main/Education";
import Projects from "@/components/main/Projects";
import Footer from "@/components/main/Footer";

export default function Home() {
  return (
    <div className='mx-auto min-h-screen max-w-screen-xl px-5 py-10 md:px-12 md:py-16 lg:px-24 lg:py-0 lg:flex lg:justify-between lg:gap-20'>
      <Header />
      <main id="content" className='pt-14 lg:w-[56%] lg:py-24 flex flex-col gap-12 md:gap-16 lg:gap-22'>
        <About />
        <Experience />
        <Education />
        <Skills />
        <Projects />
        <Footer />
      </main>
    </div>
  );
}
