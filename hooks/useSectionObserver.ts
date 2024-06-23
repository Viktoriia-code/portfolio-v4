import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const useSectionObserver = (setActiveSection: React.Dispatch<React.SetStateAction<string>>) => {
  const [aboutRef, aboutInView] = useInView({ threshold: 0.3 });
  const [experienceRef, experienceInView] = useInView({ threshold: 0.3 });
  const [educationRef, educationInView] = useInView({ threshold: 0.3 });
  const [projectsRef, projectsInView] = useInView({ threshold: 0.3 }); 

  useEffect(() => {
    if (aboutInView) {
      setActiveSection('about');
    } else if (experienceInView) {
      setActiveSection('experience');
    } else if (educationInView) {
      setActiveSection('education');
    } else if (projectsInView) {
      setActiveSection('projects');
    }
  }, [aboutInView, experienceInView, educationInView, projectsInView, setActiveSection]); 

  return {
    aboutRef,
    experienceRef,
    educationRef,
    projectsRef
  };
};

export default useSectionObserver;
